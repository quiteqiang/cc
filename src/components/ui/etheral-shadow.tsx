'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface AnimationConfig {
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow);
}

const useInstanceId = (): string => {
    const id = useId();
    return `shadowoverlay-${id.replace(/:/g, '')}`;
};

export function Component({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
    const animationControls = useRef<AnimationPlaybackControls | null>(null);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 10, 60) : 0;
    const duration = animation ? mapRange(animation.speed, 1, 100, 20, 2) : 10;

    useEffect(() => {
        if (!turbulenceRef.current || !animationEnabled) return;

        const baseFreqX = mapRange(animation?.scale || 50, 0, 100, 0.001, 0.003);
        const baseFreqY = mapRange(animation?.scale || 50, 0, 100, 0.002, 0.006);

        animationControls.current = animate(0, 1, {
            duration,
            repeat: Infinity,
            ease: "linear",
            onUpdate: (progress) => {
                if (turbulenceRef.current) {
                    const newSeed = Math.floor(progress * 100);
                    turbulenceRef.current.setAttribute('seed', String(newSeed));
                }
            }
        });

        return () => {
            animationControls.current?.stop();
        };
    }, [animationEnabled, duration, animation?.scale]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(3px)` : "none"
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute", width: "100%", height: "100%" }}>
                        <defs>
                            <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
                                <feTurbulence
                                    ref={turbulenceRef}
                                    type="turbulence"
                                    baseFrequency={`${mapRange(animation?.scale || 50, 0, 100, 0.001, 0.003)},${mapRange(animation?.scale || 50, 0, 100, 0.002, 0.006)}`}
                                    numOctaves="2"
                                    seed="0"
                                    result="turbulence"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="turbulence"
                                    scale={displacementScale}
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2,
                        pointerEvents: "none"
                    }}
                />
            )}
        </div>
    );
}
