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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VX5KK2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2Bl3PtsGs1vz4NeUjwFdN%2F4CldGQtmE7iFhwU2sBPPQIhANBqOtcOdGwEGJ3PG8KjYUm9PfcBCaP3AD%2BRcc99BR%2FtKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrSvWvpVrW%2BSLq3Doq3AORy4g2dK1%2FUhg8NVo1fUk7peAloNKu3z4ggTJc32gCadiE4UGCAcbpxsYdL0dovmpCro%2FbyJo%2F6x2FqFjuA4zwBcswGcshX8m2CutzJa%2B6OppsqfUXIraHTWE%2F04Q02P95YZcdMnVE5oV5kOHVGFExdzFU890lwEHx1SmzX1qxaaqPCL20%2Fd4RZUfU6rfb8UjT6%2FpRaPw%2FAC61Ftstf%2FoOfc0jZNy21wEid00cc9RNvzXQB8%2B8jJdJg6jFPUMsfXcyEU02R0gGuS50q9mwjfdnHkYETNdihrudLeHRP0Cq3CLR%2FnyZmPZ6P5Yl6EwyFpYMPzerwYzjfqgbaQD%2FwOS1ltNR2IIivxMg6QZZMwIIFWX1j8%2B76zy712GmECzJ1hyqH3%2Bg0yA28aG%2BbwKiXlupHk3NPuKBOh6j%2BYUffun8nI22UKYj90liuBZFMNYLOrOkM5ZZuoC2P6Gg%2Fki%2Bw%2FpCorZ%2BETGv0lt4XLzq3WXGdkxku05YkJ5yY2QMqBYx7Tho2KBbrSh0jGCUTeoEdVlRi35EHQ9GiA0CnXcwDCyQKvkKDmhohslWhjB9GlP3z%2BiWdyzcugfk3Fdvdg0g2wI6y10%2FrhboVdQKHu0zcEUjybFLsaOpGOFudL0EzTCMrdy9BjqkAdx7x7hsdcyv6ganTjFKTiKElZbRYohfDLWE63R5dwrUrImIk26qqxwdaWCHsFLHax93TaiuBdpbyEe7DFuVqCZh0q5vQJ9CVjdwsyvfc7q0tPmXN2Y%2B%2BpTZqXHNBLsu3dTQX6xjZypjK9TYcWSBvsI02nBA%2FkGfyr5wlsyOYFXLPxvOFsdF3vrsRCYkXZ0NhYU1SwZdRXpbf01qzL7fWz1fVTfh&X-Amz-Signature=379179bfe801549ddf3583306e78cfb9eda32e1425f07326a7901c6ffa938916&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VX5KK2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2Bl3PtsGs1vz4NeUjwFdN%2F4CldGQtmE7iFhwU2sBPPQIhANBqOtcOdGwEGJ3PG8KjYUm9PfcBCaP3AD%2BRcc99BR%2FtKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrSvWvpVrW%2BSLq3Doq3AORy4g2dK1%2FUhg8NVo1fUk7peAloNKu3z4ggTJc32gCadiE4UGCAcbpxsYdL0dovmpCro%2FbyJo%2F6x2FqFjuA4zwBcswGcshX8m2CutzJa%2B6OppsqfUXIraHTWE%2F04Q02P95YZcdMnVE5oV5kOHVGFExdzFU890lwEHx1SmzX1qxaaqPCL20%2Fd4RZUfU6rfb8UjT6%2FpRaPw%2FAC61Ftstf%2FoOfc0jZNy21wEid00cc9RNvzXQB8%2B8jJdJg6jFPUMsfXcyEU02R0gGuS50q9mwjfdnHkYETNdihrudLeHRP0Cq3CLR%2FnyZmPZ6P5Yl6EwyFpYMPzerwYzjfqgbaQD%2FwOS1ltNR2IIivxMg6QZZMwIIFWX1j8%2B76zy712GmECzJ1hyqH3%2Bg0yA28aG%2BbwKiXlupHk3NPuKBOh6j%2BYUffun8nI22UKYj90liuBZFMNYLOrOkM5ZZuoC2P6Gg%2Fki%2Bw%2FpCorZ%2BETGv0lt4XLzq3WXGdkxku05YkJ5yY2QMqBYx7Tho2KBbrSh0jGCUTeoEdVlRi35EHQ9GiA0CnXcwDCyQKvkKDmhohslWhjB9GlP3z%2BiWdyzcugfk3Fdvdg0g2wI6y10%2FrhboVdQKHu0zcEUjybFLsaOpGOFudL0EzTCMrdy9BjqkAdx7x7hsdcyv6ganTjFKTiKElZbRYohfDLWE63R5dwrUrImIk26qqxwdaWCHsFLHax93TaiuBdpbyEe7DFuVqCZh0q5vQJ9CVjdwsyvfc7q0tPmXN2Y%2B%2BpTZqXHNBLsu3dTQX6xjZypjK9TYcWSBvsI02nBA%2FkGfyr5wlsyOYFXLPxvOFsdF3vrsRCYkXZ0NhYU1SwZdRXpbf01qzL7fWz1fVTfh&X-Amz-Signature=9c0417cfa2e3e14b3596c42bdc1de4f593612c0f4d12669f0ef28d4f54f9da8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
