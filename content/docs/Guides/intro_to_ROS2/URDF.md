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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7U2SKQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIH1WcYfXb7XH5Y851%2BCzI36khfqlz2ZzCOPb5W5GFS%2B7AiA7t3kRvIu%2BoOldRI57%2Bsveho9zktsWhbf27OiEe3%2FwvSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMcgmcP4icX6HRw1ONKtwD1ssNXHpe3yhvNycGYIPOIsuTS6DvL9PbaNJJTAH3sHJBeoM4ua4itkKRPoxZ%2BQzteQG5InQd0EvXOVpceeicWYYmR4VYvTaSPzhzF51Gfiw3kZd%2FU5NUYmuQ7Kvxu0up2eOBcfkw9u1Q2ibLc%2FWNeJMi%2Fq8YeAY%2B%2FVkMWvvuXlR%2FytcKBCprUPqS4lL2gb46YfJURnDaqJVCKsUHyDWenCS4Aw6pL6FhkfspKEwNmbw%2BPdYY40zGeocKu7lpv2dpQFCdmkSisQfw8biasQjrU88595koNdAsMwYWI0BWb0bnjYAkUQppqvWMErZwyO%2BevszZyXpCGiVQoXqRbk%2F2vh7tmPPeJjIkjKGwWIjOpYZbsA8Dv%2BzQpEUt9TMynW51MADz1On1LC7Fmki821CZxYxqIX9lzqBjw6e9CcSmWCx1xfC92B0oGOnWan3SB8czSqjrN0oQxNRRohf%2BumavOTDXCTVGjnvVfPNMEXCRlCcUpJckU7v%2FUuRe5J0WdCVzmr91cvGft5bZMMXaLZ3vq0W6%2BjtzNLTLjohc6oRBinOMGlv9Jvt1H4967IVUjDplFuJY%2Ffk%2FdzhEp4Wiam42p9FauVou0VMbPMul2AbqmzAmQkOilxA6QMzqHnEw3uP9vQY6pgGifhR5D6qXSBZkNZMNbeVGTr2PC3rJGuHr4WIWg6xg7Q3k%2Fst0xPS%2FD8Y3wsrl%2Fo3ycMDzmVil%2BqtrpzslVVkJ9ofWsXc%2FTiZ%2FeXuV%2Bc49EbMIbfxKQw%2FiBfJpKyL%2FO8GHq21sg6ITCdpgwey%2FfYnkpAXxS95DM43V6LtIe5pyK%2FRvyqA3ulChSaN4wI0SJbCfxleBc0ojw%2BWajNxpJxnpJSgnO9MS&X-Amz-Signature=0f41b5974b08c95a371595c899c87106d2082a82303307c50b2040f8d6136cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7U2SKQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIH1WcYfXb7XH5Y851%2BCzI36khfqlz2ZzCOPb5W5GFS%2B7AiA7t3kRvIu%2BoOldRI57%2Bsveho9zktsWhbf27OiEe3%2FwvSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMcgmcP4icX6HRw1ONKtwD1ssNXHpe3yhvNycGYIPOIsuTS6DvL9PbaNJJTAH3sHJBeoM4ua4itkKRPoxZ%2BQzteQG5InQd0EvXOVpceeicWYYmR4VYvTaSPzhzF51Gfiw3kZd%2FU5NUYmuQ7Kvxu0up2eOBcfkw9u1Q2ibLc%2FWNeJMi%2Fq8YeAY%2B%2FVkMWvvuXlR%2FytcKBCprUPqS4lL2gb46YfJURnDaqJVCKsUHyDWenCS4Aw6pL6FhkfspKEwNmbw%2BPdYY40zGeocKu7lpv2dpQFCdmkSisQfw8biasQjrU88595koNdAsMwYWI0BWb0bnjYAkUQppqvWMErZwyO%2BevszZyXpCGiVQoXqRbk%2F2vh7tmPPeJjIkjKGwWIjOpYZbsA8Dv%2BzQpEUt9TMynW51MADz1On1LC7Fmki821CZxYxqIX9lzqBjw6e9CcSmWCx1xfC92B0oGOnWan3SB8czSqjrN0oQxNRRohf%2BumavOTDXCTVGjnvVfPNMEXCRlCcUpJckU7v%2FUuRe5J0WdCVzmr91cvGft5bZMMXaLZ3vq0W6%2BjtzNLTLjohc6oRBinOMGlv9Jvt1H4967IVUjDplFuJY%2Ffk%2FdzhEp4Wiam42p9FauVou0VMbPMul2AbqmzAmQkOilxA6QMzqHnEw3uP9vQY6pgGifhR5D6qXSBZkNZMNbeVGTr2PC3rJGuHr4WIWg6xg7Q3k%2Fst0xPS%2FD8Y3wsrl%2Fo3ycMDzmVil%2BqtrpzslVVkJ9ofWsXc%2FTiZ%2FeXuV%2Bc49EbMIbfxKQw%2FiBfJpKyL%2FO8GHq21sg6ITCdpgwey%2FfYnkpAXxS95DM43V6LtIe5pyK%2FRvyqA3ulChSaN4wI0SJbCfxleBc0ojw%2BWajNxpJxnpJSgnO9MS&X-Amz-Signature=b16d646951c380f16e75fa034ab6a50a7101c7ddf7f10fb85fcf4b494c0b539a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
