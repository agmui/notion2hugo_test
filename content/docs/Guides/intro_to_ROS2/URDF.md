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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGVH4TF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDTlzwEY%2FUa02kOIZ%2BXNznV%2BItr7HcV0S%2Foba4WN8YV6AiAgMy%2FS0cQwoBLPw41GRSdV07TPPk%2BGLuwy2YtZsbln9yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZ%2FEcBDnbJw1dEM0LKtwDjHE9Rcl4exa2WP%2BOPY285fxWUSQqG11DTq4V%2FJT%2BmnpsW2nErvxSmuebnsFfj2YbQCNQ86juupomfn0jIFRTQTfV%2BLyuSKaWcIeZ13MFIWUY7n5SBOYv2ZMflidXpER24sqiVx%2F8dylrdjr09%2BBVTyNvkKPTh0jzqS2PUsJtIYyffrPVgJAHe3ILcJCfoUur2ZFFSVWKzktFDtH4Y5eymPH3FE2QUMMR1LbsMiXKxPwU9UoLQxsviFrQ%2BzCe54ke5SjReKHWFtRfy9S07SI5NOhDmWcmoQEl%2BcC8tEwj77ubBdCMO%2Fr%2Fsu7R%2BwbXGmNpIb5RtlgNxkc9hzaqRMC7I8ohsM1LxgKVBd8obvUxqDi0fXFRWaPitePz1rHfo0YsOBO5%2FG24a7uRJjOzLqhrBmdHIJmUWrg5Beng9LccAGdKkCRFn%2B9TgOBIxSyxR%2FpkcV1WwI7FHwRg4OMaV9og0Fr2bT6Jfz9S%2BFIf%2BxoV%2FT8XNFI0GFc94GKa2H5pUA3vyRFlkKvMT8%2BQfVcqa8Mc3zVasJS1QMe5bVTqIWhnlNyV1MfwCmwX5B4r3R3nde8kEnEDtWNgHB%2FmGVPvFbKdA%2Ffr1wJJImgpGdDtb6PJoMe8Ryo%2B7YRaU9gH9agw%2BLrewAY6pgE5x5BzPobaQ9yMfhc1i5LQmYxYxDC3SrRED59vaWKDB8GFoeCDkMzRPVz08CWx9e2iEUYbWg1rTfeGjSiOm6zNBr86Wnv38azAqN2GFcUtg8ZljvksD9q4uJUbM6HSmZl%2Frq6AzLTW5gOZyXthZBVtlGrdesmN4rSKsDCnlNqFr7Bf4ahJzBgCX0pxczZ4dKQm1SvMWApdNeBEABKrKiJBe9T5XUBW&X-Amz-Signature=2393e75eb43009379a76e7fc97e7a45fef249dab0548b3e5e331a74a9bff52e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGVH4TF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDTlzwEY%2FUa02kOIZ%2BXNznV%2BItr7HcV0S%2Foba4WN8YV6AiAgMy%2FS0cQwoBLPw41GRSdV07TPPk%2BGLuwy2YtZsbln9yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZ%2FEcBDnbJw1dEM0LKtwDjHE9Rcl4exa2WP%2BOPY285fxWUSQqG11DTq4V%2FJT%2BmnpsW2nErvxSmuebnsFfj2YbQCNQ86juupomfn0jIFRTQTfV%2BLyuSKaWcIeZ13MFIWUY7n5SBOYv2ZMflidXpER24sqiVx%2F8dylrdjr09%2BBVTyNvkKPTh0jzqS2PUsJtIYyffrPVgJAHe3ILcJCfoUur2ZFFSVWKzktFDtH4Y5eymPH3FE2QUMMR1LbsMiXKxPwU9UoLQxsviFrQ%2BzCe54ke5SjReKHWFtRfy9S07SI5NOhDmWcmoQEl%2BcC8tEwj77ubBdCMO%2Fr%2Fsu7R%2BwbXGmNpIb5RtlgNxkc9hzaqRMC7I8ohsM1LxgKVBd8obvUxqDi0fXFRWaPitePz1rHfo0YsOBO5%2FG24a7uRJjOzLqhrBmdHIJmUWrg5Beng9LccAGdKkCRFn%2B9TgOBIxSyxR%2FpkcV1WwI7FHwRg4OMaV9og0Fr2bT6Jfz9S%2BFIf%2BxoV%2FT8XNFI0GFc94GKa2H5pUA3vyRFlkKvMT8%2BQfVcqa8Mc3zVasJS1QMe5bVTqIWhnlNyV1MfwCmwX5B4r3R3nde8kEnEDtWNgHB%2FmGVPvFbKdA%2Ffr1wJJImgpGdDtb6PJoMe8Ryo%2B7YRaU9gH9agw%2BLrewAY6pgE5x5BzPobaQ9yMfhc1i5LQmYxYxDC3SrRED59vaWKDB8GFoeCDkMzRPVz08CWx9e2iEUYbWg1rTfeGjSiOm6zNBr86Wnv38azAqN2GFcUtg8ZljvksD9q4uJUbM6HSmZl%2Frq6AzLTW5gOZyXthZBVtlGrdesmN4rSKsDCnlNqFr7Bf4ahJzBgCX0pxczZ4dKQm1SvMWApdNeBEABKrKiJBe9T5XUBW&X-Amz-Signature=b48d84e82d29e42cee5de7b5791fc9ac6af5af8f8927c6035fa6fc5f83ee2266&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
