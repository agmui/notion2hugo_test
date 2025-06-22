---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIKKF6T%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeqaZVTaBJn82p7ya9%2BNSRjTX4cKcKAlvfjaZLNSYaYAiAseHasbr0X49t0kK1LHFciz5SzmIWKYvpdjnZbp0KYBiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUlwIGb4AqYuAv%2F%2F%2BKtwDdwGs5sEVDm2dKW6EJ24cKGJ6VDPWzQhhZTnn08w7TiUr0s0uy9YdC5zHD0l6WtNzwQp34mMCKLjMXer5LZN2Fz1gzLrhhgukY6DZKb%2F0cPriU4%2FbHXOzXP1BcBlwFlQ6LC1kBNVurMpCSgql1iE1ldLm61Dojd6f5MwBjCGvcwCURGgMmID0y4hgOsf2LsMaqWUCdLcvhwFl%2BTeiB4jFq%2FBdhjfyuGR7eRaOl1Feg5nbU9nm%2FUjU993QbTjiz2tseABpPt8ZXBikKrKhdoNDi2JdRTdvGQWbtIbyj44MYUhNK2g%2B5jqMG55ZElrcUgvzrhXGV4pOI6VEpgckG%2BliK4fu6cg25%2BvnBnrowDA9zNRPSrysSqJWpi5Sok6QdPOMPjwWjjALm%2BSKBPuHrMR7QilI3%2Fln%2BTgIIQ8VKz69JDsHoOIw58GYv3E3jJv221Q%2BQgbFbVWq%2FsZWWSEAdnSzc2hzkLlZIJp%2B75ef8FlNqu5xsSmpkr7ITgmu3bN79dWE%2FFyGBFHEc%2B5OPVzdLDXVvrr%2FUPkBfSiS1y7noQWidgTegoCvrjfrrIJWjTsnbWTvE6uDmq7BEfrOq%2Bk032UIYCr45CeRq%2F8XtrHJSRU0q4aoBj4WAmugdeaxQacwzofdwgY6pgEGRtczCCTFx%2FkOUW4grEtu%2BP3%2FP20gslg2%2Bzv7KuKOdYIo7gswfSjvC12ea3TshXegfOQA1eaQWPObGE1nhX1mV6Mua%2BSAbaEqnPwDsXCwYv6cp1wTkvfP0EHP7KJzg1GswsZ0JvYYtqITtbXR4Vw867pdfF%2BHAkPW%2F2jMA9Pr4w4m3Dp167UTair04hjcG1oNvwM6qrw2GUQzjfMtRGuPqMBwtPiN&X-Amz-Signature=c1a21d6f036c7abc54ff94a94c6bfe43066e5e40b1ce415df68b866f5ec7a421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIKKF6T%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeqaZVTaBJn82p7ya9%2BNSRjTX4cKcKAlvfjaZLNSYaYAiAseHasbr0X49t0kK1LHFciz5SzmIWKYvpdjnZbp0KYBiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUlwIGb4AqYuAv%2F%2F%2BKtwDdwGs5sEVDm2dKW6EJ24cKGJ6VDPWzQhhZTnn08w7TiUr0s0uy9YdC5zHD0l6WtNzwQp34mMCKLjMXer5LZN2Fz1gzLrhhgukY6DZKb%2F0cPriU4%2FbHXOzXP1BcBlwFlQ6LC1kBNVurMpCSgql1iE1ldLm61Dojd6f5MwBjCGvcwCURGgMmID0y4hgOsf2LsMaqWUCdLcvhwFl%2BTeiB4jFq%2FBdhjfyuGR7eRaOl1Feg5nbU9nm%2FUjU993QbTjiz2tseABpPt8ZXBikKrKhdoNDi2JdRTdvGQWbtIbyj44MYUhNK2g%2B5jqMG55ZElrcUgvzrhXGV4pOI6VEpgckG%2BliK4fu6cg25%2BvnBnrowDA9zNRPSrysSqJWpi5Sok6QdPOMPjwWjjALm%2BSKBPuHrMR7QilI3%2Fln%2BTgIIQ8VKz69JDsHoOIw58GYv3E3jJv221Q%2BQgbFbVWq%2FsZWWSEAdnSzc2hzkLlZIJp%2B75ef8FlNqu5xsSmpkr7ITgmu3bN79dWE%2FFyGBFHEc%2B5OPVzdLDXVvrr%2FUPkBfSiS1y7noQWidgTegoCvrjfrrIJWjTsnbWTvE6uDmq7BEfrOq%2Bk032UIYCr45CeRq%2F8XtrHJSRU0q4aoBj4WAmugdeaxQacwzofdwgY6pgEGRtczCCTFx%2FkOUW4grEtu%2BP3%2FP20gslg2%2Bzv7KuKOdYIo7gswfSjvC12ea3TshXegfOQA1eaQWPObGE1nhX1mV6Mua%2BSAbaEqnPwDsXCwYv6cp1wTkvfP0EHP7KJzg1GswsZ0JvYYtqITtbXR4Vw867pdfF%2BHAkPW%2F2jMA9Pr4w4m3Dp167UTair04hjcG1oNvwM6qrw2GUQzjfMtRGuPqMBwtPiN&X-Amz-Signature=affd9eebcd8d61108f4265a91c1fc8c877e1f815389a4b6f9038a6e7353a704b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
