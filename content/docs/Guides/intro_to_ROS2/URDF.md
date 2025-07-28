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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BEDUWYZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2BtFu%2FLrV8mb20na5XXrIhqLLChujnv%2BT3pTa789oIQIgFnU531NChvvH%2BEd5yWDd1%2FsznPM%2FNwk%2Fyp78OEnYZnIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXerri034UKiDwUiircA4zvGNFFzPNK95Mmy4%2F%2FdVyi05ZQuKN92H64rEFrGFvT6zR2hE1a0JkVGFtuzDu0V2aFRHaR6F558rD0vFiAeBFqpvUZpvUjCWaZtEsZolzMygLADT3CZ1vbyhroF4iLN%2FLob6WGxRi3I1Xr3ZX1V3floRSTA%2BjcsT5hnMw76aNva2spgRMXEiQ5gLO%2FAiSWbCzDkcwu%2F9fKwQVN2bwuDAROLcns2gQnT7kacrXAnXUH8S9hz4ijP2Jhgu9owo%2B0VyyWH9kppqsYupHeycyXFmB9a2MWc0xxJHRtHfpZ%2Feczj95%2F3qpS3Jm0ZL2KM4bAfGXcwPXTV8i7EGAPYMk1lywH8%2Bk4Ksf0HttdCNYahjmmQ4OxOBFLEX%2BwNmmuoNxFTFp738W%2FIsIS9s0RxgsPrU0BclKqvovf0NFmeDD86Dr5xuM6QPjZltymRt5Fdu83heLPxuwYZHsSRj6%2BLmi6r%2B7sLIQH7qDELYUH3qDUcgPjwPi%2FzrUE3cFXhMWz41DJOfXinEZ7D%2F32QTUf3Hp8zO1t63Bp68Bn%2FGz6Cr%2FC%2BPkD3mYgAhWxxaH3mOvxlSn%2B4ZWsua4Yh5RM%2B3n19duR09TFfUcL7qwMBRG%2BoCIJZ%2ByLc%2B6CXlcZpo7YIBw7ML7GnMQGOqUB6tcwoBgqxiHcuqb%2Fz2z1ADov5vUZdBQ0WiCHd5BiY2s0yNswABwI04ko5jnP2138d41endByGs%2FxVfMOicw01aHCmrplOxbfTJP%2BISYMOYY7JEWSysVfS0tM%2BIw1Zn2zR2JmqzyrsZE6b6wULDb%2FektC%2BnvsxJmCHLgG4wPujC%2BbaaxZS%2BOLbz1TBoSlZU1%2FmwaPUVqLi%2BFbROnnt6ZE0ERpR7bN&X-Amz-Signature=f52c9b4c955a4c55969e50adea24a2d1cadb46bce4b0fa4e99a62002a1cbaf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BEDUWYZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCy%2BtFu%2FLrV8mb20na5XXrIhqLLChujnv%2BT3pTa789oIQIgFnU531NChvvH%2BEd5yWDd1%2FsznPM%2FNwk%2Fyp78OEnYZnIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXerri034UKiDwUiircA4zvGNFFzPNK95Mmy4%2F%2FdVyi05ZQuKN92H64rEFrGFvT6zR2hE1a0JkVGFtuzDu0V2aFRHaR6F558rD0vFiAeBFqpvUZpvUjCWaZtEsZolzMygLADT3CZ1vbyhroF4iLN%2FLob6WGxRi3I1Xr3ZX1V3floRSTA%2BjcsT5hnMw76aNva2spgRMXEiQ5gLO%2FAiSWbCzDkcwu%2F9fKwQVN2bwuDAROLcns2gQnT7kacrXAnXUH8S9hz4ijP2Jhgu9owo%2B0VyyWH9kppqsYupHeycyXFmB9a2MWc0xxJHRtHfpZ%2Feczj95%2F3qpS3Jm0ZL2KM4bAfGXcwPXTV8i7EGAPYMk1lywH8%2Bk4Ksf0HttdCNYahjmmQ4OxOBFLEX%2BwNmmuoNxFTFp738W%2FIsIS9s0RxgsPrU0BclKqvovf0NFmeDD86Dr5xuM6QPjZltymRt5Fdu83heLPxuwYZHsSRj6%2BLmi6r%2B7sLIQH7qDELYUH3qDUcgPjwPi%2FzrUE3cFXhMWz41DJOfXinEZ7D%2F32QTUf3Hp8zO1t63Bp68Bn%2FGz6Cr%2FC%2BPkD3mYgAhWxxaH3mOvxlSn%2B4ZWsua4Yh5RM%2B3n19duR09TFfUcL7qwMBRG%2BoCIJZ%2ByLc%2B6CXlcZpo7YIBw7ML7GnMQGOqUB6tcwoBgqxiHcuqb%2Fz2z1ADov5vUZdBQ0WiCHd5BiY2s0yNswABwI04ko5jnP2138d41endByGs%2FxVfMOicw01aHCmrplOxbfTJP%2BISYMOYY7JEWSysVfS0tM%2BIw1Zn2zR2JmqzyrsZE6b6wULDb%2FektC%2BnvsxJmCHLgG4wPujC%2BbaaxZS%2BOLbz1TBoSlZU1%2FmwaPUVqLi%2BFbROnnt6ZE0ERpR7bN&X-Amz-Signature=1282145adad8304f7eb601da6c739381e7ee529f1df55161cff39159aadddbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
