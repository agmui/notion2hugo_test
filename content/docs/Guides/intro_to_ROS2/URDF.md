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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2652QPS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCYlaHMRKEc4FS%2F0tLik6absATRJHxZC%2BccjjnyzLSBoAIhALqqmSyVb9U996656Q0Ii%2FVgr3TtNXETs8f%2ByEl5NbUaKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznwVOcS8DGsZQYT30q3APqtY6mDfBZ0m4OzgbIhP8RS%2BEOFUfZyxwXRHaES8%2FyhDaP4ffV4AQoLlzIyJ5bl%2ByGsDQq6U4zhYCzadiDi%2FMPXdrHj%2Brn1T7z457yFnvbDoJRH3tVS9dxUKIBd3vBog3IXTJVcVY8QiPFP8M9uhotbVW6s0cxlLCB3PL9gJ%2B%2Fs9LdhqecFTP8ZX7rrcv9rO6EJ7pwR2EoGGkjhKdFv%2BDc9asG3JuPFO%2BCjsdoQaLxuqcS%2FSGK36xxxzXKWSxkETDFnXtx2u6jgrBi0omFmTs9QKjtMDmGHMaGlujsL1vUYLp0wYyEmlZyC%2FfkcHCj13YPlaZysrjxFrapQMdIAs0UD29OAgh0YS8%2BructLxOH63za6uwuyxnY4XDFkDbvzLGCh1Tu8021DJGlmzgosSQGDmpZAiyYHCB7T1URsXijYtsvY3USHT44P0XKbSlbY%2BU%2BFilEzUYWOuDPLEAUl4B9iepArZE5Eu9eN4YEBtba2NTu7etvmxLtDdT3Z1EUR%2FGZ5JulxmTBYvmJEMb%2BptpgmxOF6bZELH1LldmKgK2u0Xq5ypPWNgCHLiYqFw5MqIGJHiaLJ24hDBMGbqd1FwX%2Fr4hEATiiA7BBni4Di5TIsy53GyAJonXfTasyZjCVu4TBBjqkAfYskC1ISrCpFy5FSK%2FsoXl3nov5uDcZ7uMDzSm3XRwjMH9gSY5VZ3l5%2FgPuBXfzqARXiaxGRuyNdVilYjJ5rUDOqat3pqWOkNj31FCv3oaertp%2BXI%2Fakco%2Fiki5Mob5A7wqAtsCb6n3hIaJIf4oPHTLW63GVse5mZeCicOp3X0%2BQKJ1wW8h2eoKaJbmiMW2PCZ%2BPE8kCfM79f73ctAJoYPR2HG3&X-Amz-Signature=cae62d12e5b294f92b0a2d0eb596a4043ce623396493dc2752fbd0e236b2b984&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2652QPS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCYlaHMRKEc4FS%2F0tLik6absATRJHxZC%2BccjjnyzLSBoAIhALqqmSyVb9U996656Q0Ii%2FVgr3TtNXETs8f%2ByEl5NbUaKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznwVOcS8DGsZQYT30q3APqtY6mDfBZ0m4OzgbIhP8RS%2BEOFUfZyxwXRHaES8%2FyhDaP4ffV4AQoLlzIyJ5bl%2ByGsDQq6U4zhYCzadiDi%2FMPXdrHj%2Brn1T7z457yFnvbDoJRH3tVS9dxUKIBd3vBog3IXTJVcVY8QiPFP8M9uhotbVW6s0cxlLCB3PL9gJ%2B%2Fs9LdhqecFTP8ZX7rrcv9rO6EJ7pwR2EoGGkjhKdFv%2BDc9asG3JuPFO%2BCjsdoQaLxuqcS%2FSGK36xxxzXKWSxkETDFnXtx2u6jgrBi0omFmTs9QKjtMDmGHMaGlujsL1vUYLp0wYyEmlZyC%2FfkcHCj13YPlaZysrjxFrapQMdIAs0UD29OAgh0YS8%2BructLxOH63za6uwuyxnY4XDFkDbvzLGCh1Tu8021DJGlmzgosSQGDmpZAiyYHCB7T1URsXijYtsvY3USHT44P0XKbSlbY%2BU%2BFilEzUYWOuDPLEAUl4B9iepArZE5Eu9eN4YEBtba2NTu7etvmxLtDdT3Z1EUR%2FGZ5JulxmTBYvmJEMb%2BptpgmxOF6bZELH1LldmKgK2u0Xq5ypPWNgCHLiYqFw5MqIGJHiaLJ24hDBMGbqd1FwX%2Fr4hEATiiA7BBni4Di5TIsy53GyAJonXfTasyZjCVu4TBBjqkAfYskC1ISrCpFy5FSK%2FsoXl3nov5uDcZ7uMDzSm3XRwjMH9gSY5VZ3l5%2FgPuBXfzqARXiaxGRuyNdVilYjJ5rUDOqat3pqWOkNj31FCv3oaertp%2BXI%2Fakco%2Fiki5Mob5A7wqAtsCb6n3hIaJIf4oPHTLW63GVse5mZeCicOp3X0%2BQKJ1wW8h2eoKaJbmiMW2PCZ%2BPE8kCfM79f73ctAJoYPR2HG3&X-Amz-Signature=e1bb3e42c6e071cb7a42d8f21921875e890d6feaba0ca2ec9f25f0ab329f7ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
