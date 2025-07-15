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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXVD7N3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJFMEMCIATaFFoa1CFX1h3IZRwqYXJjNrJCiXB0pHlt1JgHgWTHAh97IdwJokXVtaRy%2F0LTZEAsZW0J6OUg5fkqWiEMcvEvKv8DCEoQABoMNjM3NDIzMTgzODA1Igx4tK6b8RZmlXHXYk0q3ANWnKewT75venBvKmzOjPvPIZ%2BrxSp2zjWElngwUNBcQWK1x0y9%2Fkj7uk%2BPHCygpdhO64cOBtJXUVw0mFHKb1QP8SwZj1%2BgkEZ%2FPX8uGMcN5ESIVwvjjboXxabDd7iVmTNu%2F%2BuGpMTTjzW%2BUDtuq3frFBmU9q57lLhi4DoTEmwXvVhjic08vj0haAsEU2QuaJd99j0hopWmVEL47OdjjjnmVRoKyuUOmKJIBrjUNY6OAdzrW2E81Lx16ZK61fKWQyFIfW2lUhXlAqpbd8iPvxas8Hnjb9HTqp3Em1ufhC2rTHoi7xoL%2B%2FoNbiFIN010oIXmmjbbqnpcgkojViALtf57Q3xUFWc7aoExSLTirD2V8MgCm80ae77d8negX7eZYF6EXh%2B8eGwbmU3YY3%2FE5ZjjjSE6HFKPHizLa1mg8Mnk0%2BmENEn2PDfe5SgSM9NtbvlLM1PiKdCVMmZpa4%2FbJR9R5bLT9D7zOxhQs7zKL8st71YqrsSr3XYYG7u34wBmy4AYyXh5PwIJU5f9Llb%2BY6thfblB%2BZOHJ6ojnLovLSRjaXvBHBzq9%2FXRewnu76C2nS8OPcLjd%2FnJC0xeeP%2BO4xCTb30dU3OU2vks%2BrzlFlCOuqGC1SD0ZwnMmWBr4DCTh9rDBjqnAXlz%2Faw5gFPU4PQYrVIvl9IqKK%2FLPBcoXrcZLTu9vcSV8j6Di%2F8%2BVUCGhvE5zrEo9LYejQH%2F%2F04uJGdFn94IK80DHN7jVbspInhwikAEwJLqX%2BPM5pLRWlAWTB7WiM5gR2k5U4rcq6oQGWbP7EerfoupgswtUcY%2FHX1p4RlvIZ0Ad%2F8d5Ru7tLg%2BAxfWLVuQ1EM0%2FyYh10%2BXGx53QRJV%2B0kbkorKtGFA&X-Amz-Signature=b936642bc6e6e6f19980ce4710d02492be1e0a5682f61b5d4b9d9dc54e0760a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXVD7N3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJFMEMCIATaFFoa1CFX1h3IZRwqYXJjNrJCiXB0pHlt1JgHgWTHAh97IdwJokXVtaRy%2F0LTZEAsZW0J6OUg5fkqWiEMcvEvKv8DCEoQABoMNjM3NDIzMTgzODA1Igx4tK6b8RZmlXHXYk0q3ANWnKewT75venBvKmzOjPvPIZ%2BrxSp2zjWElngwUNBcQWK1x0y9%2Fkj7uk%2BPHCygpdhO64cOBtJXUVw0mFHKb1QP8SwZj1%2BgkEZ%2FPX8uGMcN5ESIVwvjjboXxabDd7iVmTNu%2F%2BuGpMTTjzW%2BUDtuq3frFBmU9q57lLhi4DoTEmwXvVhjic08vj0haAsEU2QuaJd99j0hopWmVEL47OdjjjnmVRoKyuUOmKJIBrjUNY6OAdzrW2E81Lx16ZK61fKWQyFIfW2lUhXlAqpbd8iPvxas8Hnjb9HTqp3Em1ufhC2rTHoi7xoL%2B%2FoNbiFIN010oIXmmjbbqnpcgkojViALtf57Q3xUFWc7aoExSLTirD2V8MgCm80ae77d8negX7eZYF6EXh%2B8eGwbmU3YY3%2FE5ZjjjSE6HFKPHizLa1mg8Mnk0%2BmENEn2PDfe5SgSM9NtbvlLM1PiKdCVMmZpa4%2FbJR9R5bLT9D7zOxhQs7zKL8st71YqrsSr3XYYG7u34wBmy4AYyXh5PwIJU5f9Llb%2BY6thfblB%2BZOHJ6ojnLovLSRjaXvBHBzq9%2FXRewnu76C2nS8OPcLjd%2FnJC0xeeP%2BO4xCTb30dU3OU2vks%2BrzlFlCOuqGC1SD0ZwnMmWBr4DCTh9rDBjqnAXlz%2Faw5gFPU4PQYrVIvl9IqKK%2FLPBcoXrcZLTu9vcSV8j6Di%2F8%2BVUCGhvE5zrEo9LYejQH%2F%2F04uJGdFn94IK80DHN7jVbspInhwikAEwJLqX%2BPM5pLRWlAWTB7WiM5gR2k5U4rcq6oQGWbP7EerfoupgswtUcY%2FHX1p4RlvIZ0Ad%2F8d5Ru7tLg%2BAxfWLVuQ1EM0%2FyYh10%2BXGx53QRJV%2B0kbkorKtGFA&X-Amz-Signature=9d28095f7afbc9508ea57578b73f3493b02434cf2f69765e2fbf97f949f6396f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
