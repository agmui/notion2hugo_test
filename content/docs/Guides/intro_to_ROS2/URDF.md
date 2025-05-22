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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT2WDZ2R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBrntfPhAAU5C3b8%2FK%2FIsgtphmuUaMSnCZSdWgVayh2cAiEA8nvv0rvSDl9WUYlLlZMxL3I%2BsmQQ8npURc75i7B5AsYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLENkvI6XaA%2F2spHCrcA5okgOKv7J4RHLU4t6dKdq6pMo8Z2%2FdF2Uox3roDrIwC26yPVroCCmQjyeBh4lbn84J1GOSBu%2FOq%2BrIaM3VP2rSMrtHCVWA3k5RNwVVsVvy%2BQwXoJ6GcpdzR9QeC3X%2FVnJBBp4656hZkzpYtEe7Qd9t4TkRMN4oZvL2BofZfu00%2BqHsCJvI8ixGJcA4HXYvuNHbQNl2576cDznGHQIGGJa0Q1HWz%2BSW5sifeVbEvgfDsAw%2ByPO5%2B2vYa1coSNUpFgbKaK5Fk0oHT1lK694VoGecOWgbW5c6gegb7lSlA%2BkTbFuUIIWstTF1py9r1XXjByKlJoIE%2FUIqNDWdIodN%2FE%2FCcLIyGHIBcjVgOIZV51RmqA5LUBvkbLo86TqDtfj%2Fg%2BVzqjU1IfdaeeMCp0bCyGA5dopikb9oHiuPJmdwzxvFP%2BsxMo%2FilEu8C1iwHDKP1%2B8BEnm8ojM54pvVpNFfBx2HD7bJa4ua9Tr40GdP8Z155LMjKQ0NFTql8Ce2%2BJ2SW43vDzgexh815vT4csmmxHzmMEIMkwTLnUkbqHfVSpZOUho%2BKXp7hEYhCfySs4tiq7y3oyvcNDPZBCWhPqx8fCU0GOIUj%2BF%2BmPPhzjL6LYDcoDWh0ZGCQR45vEtRrMLT6u8EGOqUBJRSc1sTcqbSUV4439ik1afTpptZVKVxYQ7gGQ4fOA3UPtWecCSHJtC10wcZJ%2FExM6PpAYQCy02ZV8lZeJjIO3JVRNtftpgA08PvzQDJKO%2BWdwmKGoLNxweKWfhKKI%2FFO0cmbE8b%2Bl31ve4NECqtt%2FkZDP0dYP%2FUh7ndL4XMAOQ%2FMpDm6HSm%2F7nmv35wr6%2F2E9FmX9j%2BjFdEpjE4Tv%2FYtZN5eaQtx&X-Amz-Signature=c616ce425a55241b999355a5421adf68438e17261b97153672c5ea4450cacefe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT2WDZ2R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBrntfPhAAU5C3b8%2FK%2FIsgtphmuUaMSnCZSdWgVayh2cAiEA8nvv0rvSDl9WUYlLlZMxL3I%2BsmQQ8npURc75i7B5AsYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLENkvI6XaA%2F2spHCrcA5okgOKv7J4RHLU4t6dKdq6pMo8Z2%2FdF2Uox3roDrIwC26yPVroCCmQjyeBh4lbn84J1GOSBu%2FOq%2BrIaM3VP2rSMrtHCVWA3k5RNwVVsVvy%2BQwXoJ6GcpdzR9QeC3X%2FVnJBBp4656hZkzpYtEe7Qd9t4TkRMN4oZvL2BofZfu00%2BqHsCJvI8ixGJcA4HXYvuNHbQNl2576cDznGHQIGGJa0Q1HWz%2BSW5sifeVbEvgfDsAw%2ByPO5%2B2vYa1coSNUpFgbKaK5Fk0oHT1lK694VoGecOWgbW5c6gegb7lSlA%2BkTbFuUIIWstTF1py9r1XXjByKlJoIE%2FUIqNDWdIodN%2FE%2FCcLIyGHIBcjVgOIZV51RmqA5LUBvkbLo86TqDtfj%2Fg%2BVzqjU1IfdaeeMCp0bCyGA5dopikb9oHiuPJmdwzxvFP%2BsxMo%2FilEu8C1iwHDKP1%2B8BEnm8ojM54pvVpNFfBx2HD7bJa4ua9Tr40GdP8Z155LMjKQ0NFTql8Ce2%2BJ2SW43vDzgexh815vT4csmmxHzmMEIMkwTLnUkbqHfVSpZOUho%2BKXp7hEYhCfySs4tiq7y3oyvcNDPZBCWhPqx8fCU0GOIUj%2BF%2BmPPhzjL6LYDcoDWh0ZGCQR45vEtRrMLT6u8EGOqUBJRSc1sTcqbSUV4439ik1afTpptZVKVxYQ7gGQ4fOA3UPtWecCSHJtC10wcZJ%2FExM6PpAYQCy02ZV8lZeJjIO3JVRNtftpgA08PvzQDJKO%2BWdwmKGoLNxweKWfhKKI%2FFO0cmbE8b%2Bl31ve4NECqtt%2FkZDP0dYP%2FUh7ndL4XMAOQ%2FMpDm6HSm%2F7nmv35wr6%2F2E9FmX9j%2BjFdEpjE4Tv%2FYtZN5eaQtx&X-Amz-Signature=d0f3fcac90ad1cd772b01239104a09378b207546a0bf197373c690cd61a992f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
