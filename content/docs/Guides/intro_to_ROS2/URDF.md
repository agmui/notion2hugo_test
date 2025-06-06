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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y236QL7Y%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDur9e3cLixDbzfnoQx3pTFHtEwMW2xbfVq%2B%2Fvbj97hyQIhALi1W7rF5uxQOOFyi26b7Rp2Tkdn7js4tLfjQKttyUhcKv8DCGMQABoMNjM3NDIzMTgzODA1Igyb%2F64EOJ5fqP%2F2X5Uq3AOU6kgVBP1wscq3uUzeFB2U3VMRROgk1BSaGMOM8yL8vg4IoBq8i9SqDlhEorJGCflAYVcA8t340gQtATQdB5tKQ2mdr0r5JKYyz%2Bz8vP7FfjIhyg1QXLaTQMHrlIFmlHECNyvEr8L6EoNxPcqKZ8FZoBeEr9%2BhD3T%2FGoAUoWg8P4F3AvX3oG42HPGrOR2oF%2Fo3YSYwKbPV9LMkreFeCp4WJu2NexTzbVKJ9l9iCIOXg6Zrh94ilxetP%2F%2F%2FPnnNKuFlJC6IVpSmcqy7HVBPSgUQSPO%2BquwxAjnzCfrXAdiX1Cm8lCB8RYBcuSoajKr%2FpC0127noNmC5Jw%2F7%2BpalAODsyuazF3Pi%2BU%2F2yss56WxIzx5eqaG8X5rnerKCxde3%2B2MuVZkjhVS%2B1XVq2K2xG%2BE3xS2iMZf8C0YcUlOuXlRp73xkMawIFe%2BoQ3FA2QweE3TpsQ6FyPwCW2%2FuJ%2F6dbroN%2BfM1rKNmqTuBJZmYfMDDisDx2pMGduj28gCxSCEzlhVP4R1DWgagJODV5bcb7X3Th%2Bgz9aW%2BvPG3UMpJExnEWcAvjobheXBaFOvptuwLV70EDupXNLp1NOhDM73R8XmI865HOrfjLFkx4vNDyWrSn9EWgS7HZ2Il7S19MDCU14zCBjqkAbmN%2BhXhiuZc%2FZczmvpObohm8w9WvHdMQFgvjmmvXh%2B3w2Mi0irZfmE%2Frq5UHST3%2F%2FytgseBng%2FF2e2oTpOMIuNSf08XJqvTY8mdy9ZsRA%2FBB05uIhtlxr%2BFlw85M7GXlu29smAu%2FZawXbGshLRUy1BPCkz0T7Wj2nlR3Qtd0DfBqbHIFt9MDSP%2B7oUrrdVj3anNyQIKUnoxiHqmAcDkgIcJG2ba&X-Amz-Signature=3dd6f21084b30c9bbe2eeaf458274c6773d775e4ed2b9dac04350ebbdfe99360&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y236QL7Y%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDur9e3cLixDbzfnoQx3pTFHtEwMW2xbfVq%2B%2Fvbj97hyQIhALi1W7rF5uxQOOFyi26b7Rp2Tkdn7js4tLfjQKttyUhcKv8DCGMQABoMNjM3NDIzMTgzODA1Igyb%2F64EOJ5fqP%2F2X5Uq3AOU6kgVBP1wscq3uUzeFB2U3VMRROgk1BSaGMOM8yL8vg4IoBq8i9SqDlhEorJGCflAYVcA8t340gQtATQdB5tKQ2mdr0r5JKYyz%2Bz8vP7FfjIhyg1QXLaTQMHrlIFmlHECNyvEr8L6EoNxPcqKZ8FZoBeEr9%2BhD3T%2FGoAUoWg8P4F3AvX3oG42HPGrOR2oF%2Fo3YSYwKbPV9LMkreFeCp4WJu2NexTzbVKJ9l9iCIOXg6Zrh94ilxetP%2F%2F%2FPnnNKuFlJC6IVpSmcqy7HVBPSgUQSPO%2BquwxAjnzCfrXAdiX1Cm8lCB8RYBcuSoajKr%2FpC0127noNmC5Jw%2F7%2BpalAODsyuazF3Pi%2BU%2F2yss56WxIzx5eqaG8X5rnerKCxde3%2B2MuVZkjhVS%2B1XVq2K2xG%2BE3xS2iMZf8C0YcUlOuXlRp73xkMawIFe%2BoQ3FA2QweE3TpsQ6FyPwCW2%2FuJ%2F6dbroN%2BfM1rKNmqTuBJZmYfMDDisDx2pMGduj28gCxSCEzlhVP4R1DWgagJODV5bcb7X3Th%2Bgz9aW%2BvPG3UMpJExnEWcAvjobheXBaFOvptuwLV70EDupXNLp1NOhDM73R8XmI865HOrfjLFkx4vNDyWrSn9EWgS7HZ2Il7S19MDCU14zCBjqkAbmN%2BhXhiuZc%2FZczmvpObohm8w9WvHdMQFgvjmmvXh%2B3w2Mi0irZfmE%2Frq5UHST3%2F%2FytgseBng%2FF2e2oTpOMIuNSf08XJqvTY8mdy9ZsRA%2FBB05uIhtlxr%2BFlw85M7GXlu29smAu%2FZawXbGshLRUy1BPCkz0T7Wj2nlR3Qtd0DfBqbHIFt9MDSP%2B7oUrrdVj3anNyQIKUnoxiHqmAcDkgIcJG2ba&X-Amz-Signature=b4f2919d89b5660d4acd5325b8f596684fb53de322fd579ce22f5e08ad84f0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
