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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEDN6SM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTETkR4aq7fdmPm8RaMD3wc8uZh1vTUpijdT7WbvIn6QIhAKOxUXc%2BpXarO1tHgfBsXe5486bBPdll9P9YIU%2FRmzcRKv8DCBkQABoMNjM3NDIzMTgzODA1IgzE5DL5KY5%2Fh2my4vMq3AObd7fbwn6OM6Me3bwUMz91iBk%2F1ssy1Uavf6Tj07vu%2FBf4ZZdM0OccsqH3OjbdmMPE71x3oOOdETxb15BFMzhOGA0ww8MvgHcBOu3663rLqfedbMp2DQHgzHFXhUO%2FG%2Bo%2FKLSO7RPS5DHvSAywuvBZoDzIae8CZSUA%2BLbdB85xL1GUXHV4%2FsvNkPWXgBrz%2FaNFGdG5ayQFmQmmpTaeiIYyGDw6KdwIKv9UgnMVINWbr4sLMp8pJCl8pyHIKMSFSKcJTSUEIzx5GFSFsA9%2BbQIFXuwOEu2sfyCmx%2BQw7I68cfyPsTL%2B9aifyii81GfdI1AQi%2FDfOyj63H3rxd3KOsD9Q0AwDowyJX27l351B%2FI64hc%2FmFavkwov5SdYsYP5Zr8OqLU%2BXC8%2B0Z53JQHCAcSU90CUGa9a3Ewwfv1%2BcZK1L79PhxyCwoN6SNYmJ2NwBUvaqs0S%2BkDKFZr2cTfgqoc1sdRkvcO0obOIDmjNDR3ZYDel7uBoKy4%2F20nB9aPCOYaU5mG9X1nYEGmBnF9ztuYktrS0lm8STSVxDXHXtJT3L0O031bsX7MNaCKdTg3NPFqxeCZ4g2wFTOzTP0VGHDxOAiBKhIL%2FFiSI78SZDGT2BpnTDWgP3Qjr8Xt9RjCTg%2B29BjqkAd9TwuUmYzabWryK3m8Ugy3uDvN6354WKDGpSxDu%2BAXa6NLndGijAIFex6IM8gDMBQL59OFDsakdVyjbT3ksfT3NADrLO5YSWTvVnSehDqIpk4LUzmh5SWgdCMdZ51qLOjxnigU1X6iIPFTmAyTCrZUIVp9yJmz%2BxwM%2FkaxCmIDTSPNeEqlONt0qYzjD5eufoiAOksA5hrCrc5uj8E7fgMDej5hd&X-Amz-Signature=2f51a8d744410eb77b37398ec61c21f13514f97bffdc3f97efd17935272d5962&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEDN6SM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTETkR4aq7fdmPm8RaMD3wc8uZh1vTUpijdT7WbvIn6QIhAKOxUXc%2BpXarO1tHgfBsXe5486bBPdll9P9YIU%2FRmzcRKv8DCBkQABoMNjM3NDIzMTgzODA1IgzE5DL5KY5%2Fh2my4vMq3AObd7fbwn6OM6Me3bwUMz91iBk%2F1ssy1Uavf6Tj07vu%2FBf4ZZdM0OccsqH3OjbdmMPE71x3oOOdETxb15BFMzhOGA0ww8MvgHcBOu3663rLqfedbMp2DQHgzHFXhUO%2FG%2Bo%2FKLSO7RPS5DHvSAywuvBZoDzIae8CZSUA%2BLbdB85xL1GUXHV4%2FsvNkPWXgBrz%2FaNFGdG5ayQFmQmmpTaeiIYyGDw6KdwIKv9UgnMVINWbr4sLMp8pJCl8pyHIKMSFSKcJTSUEIzx5GFSFsA9%2BbQIFXuwOEu2sfyCmx%2BQw7I68cfyPsTL%2B9aifyii81GfdI1AQi%2FDfOyj63H3rxd3KOsD9Q0AwDowyJX27l351B%2FI64hc%2FmFavkwov5SdYsYP5Zr8OqLU%2BXC8%2B0Z53JQHCAcSU90CUGa9a3Ewwfv1%2BcZK1L79PhxyCwoN6SNYmJ2NwBUvaqs0S%2BkDKFZr2cTfgqoc1sdRkvcO0obOIDmjNDR3ZYDel7uBoKy4%2F20nB9aPCOYaU5mG9X1nYEGmBnF9ztuYktrS0lm8STSVxDXHXtJT3L0O031bsX7MNaCKdTg3NPFqxeCZ4g2wFTOzTP0VGHDxOAiBKhIL%2FFiSI78SZDGT2BpnTDWgP3Qjr8Xt9RjCTg%2B29BjqkAd9TwuUmYzabWryK3m8Ugy3uDvN6354WKDGpSxDu%2BAXa6NLndGijAIFex6IM8gDMBQL59OFDsakdVyjbT3ksfT3NADrLO5YSWTvVnSehDqIpk4LUzmh5SWgdCMdZ51qLOjxnigU1X6iIPFTmAyTCrZUIVp9yJmz%2BxwM%2FkaxCmIDTSPNeEqlONt0qYzjD5eufoiAOksA5hrCrc5uj8E7fgMDej5hd&X-Amz-Signature=489a8e8f68a929aace5dbde1319c89c3e5c69515158264279e70f01f969a696f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
