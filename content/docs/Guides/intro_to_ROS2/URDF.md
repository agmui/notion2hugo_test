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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHLFHVH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDipHfiFYi727rILj%2Fik5XlZUjnvkQrROgvgdV96yKplQIgGe4Sn52E%2FNUB8YLOmlIK9hGoEaWwXDNui233NOiuPPMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0VdmB%2BhjKKri%2BYOCrcA3NkAlV%2F5Adw%2Bw7Ye5gTwlgST7XxdTIfyvRyx0PMvyy5FnmQtl8kjxWvaLH1JrmuEOl7U%2B0%2BSEmlVuaKgTMRmJsQrmtQEa9DTJ8NhYaB%2F6bmWza%2F2pirl1j2d53Pt9NF5L2E4bDmBd2wNKU14JzhGXhotm2I5ULYmD4OR4I2I%2FIKIyhkJZFGB2ihCozK89ifR5P9DYF0Who7VCFKxCmdFkIoskBwo9HG3c391Ma9TlcVjgJsyeDyOHMqjFSf6RJy%2B4v0194t7Ke1mI4Nxzl6yDPGi1FV4E3SnucNtYdbuMYc%2FpQu6pFlaeHppMp%2BfQXcC1a5Z3ObeQojvUZQfT5IM%2BqLFdgVzcvtRQpxi3nke1F%2FOuy1m5onmz9O4cNoTFRRh4ygUWw3F35vvqYuFd0m9OhNEkwo6UxamPOTUgrrc%2FDTFjhi%2FdhBcRSiKtxPex2ka3lfdCP3FA2MyC6o9AKiOVEnwBJiFrwcK1iCDkkWBtHCW9eTlVKQUV6KLS6724o%2FCDs3z4pKr5KZJ4un4871JUvrKJ%2FqgP%2FB2vcSN3%2FVf359WcM9uyYdv1ns2lsoO%2BvMV3Ofd488V4IhQd0Z08AtZNxrpfvt3t3VTVgmoV7hIY0rcq%2BGvuQ091TUoI29MKjM%2F74GOqUBHqjslTxXkrQawDZUbVUlYj%2BryILTDgWW1X3frHIvmTQ3F%2BEUW9PA%2FBQp7rKaFeaLS1dIsGdBIAVHQRL0yF2wSo9JjSXA8VhDBkBJlhnMLklBgSl4p9PnbzJHhEppk8YvS3XCTgf%2BPxVwoP9QXptpOW2Tjh%2BG7uSZgMs%2BSmVA5CPtUWE%2BZImkBzmUqWB0TqH6KAVzBpqmrAijmTE26BSSUEDGb05C&X-Amz-Signature=b68d2c879645c538c62646a3c858ac56b93e220486175165efb115eaca8c3f97&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHLFHVH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDipHfiFYi727rILj%2Fik5XlZUjnvkQrROgvgdV96yKplQIgGe4Sn52E%2FNUB8YLOmlIK9hGoEaWwXDNui233NOiuPPMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0VdmB%2BhjKKri%2BYOCrcA3NkAlV%2F5Adw%2Bw7Ye5gTwlgST7XxdTIfyvRyx0PMvyy5FnmQtl8kjxWvaLH1JrmuEOl7U%2B0%2BSEmlVuaKgTMRmJsQrmtQEa9DTJ8NhYaB%2F6bmWza%2F2pirl1j2d53Pt9NF5L2E4bDmBd2wNKU14JzhGXhotm2I5ULYmD4OR4I2I%2FIKIyhkJZFGB2ihCozK89ifR5P9DYF0Who7VCFKxCmdFkIoskBwo9HG3c391Ma9TlcVjgJsyeDyOHMqjFSf6RJy%2B4v0194t7Ke1mI4Nxzl6yDPGi1FV4E3SnucNtYdbuMYc%2FpQu6pFlaeHppMp%2BfQXcC1a5Z3ObeQojvUZQfT5IM%2BqLFdgVzcvtRQpxi3nke1F%2FOuy1m5onmz9O4cNoTFRRh4ygUWw3F35vvqYuFd0m9OhNEkwo6UxamPOTUgrrc%2FDTFjhi%2FdhBcRSiKtxPex2ka3lfdCP3FA2MyC6o9AKiOVEnwBJiFrwcK1iCDkkWBtHCW9eTlVKQUV6KLS6724o%2FCDs3z4pKr5KZJ4un4871JUvrKJ%2FqgP%2FB2vcSN3%2FVf359WcM9uyYdv1ns2lsoO%2BvMV3Ofd488V4IhQd0Z08AtZNxrpfvt3t3VTVgmoV7hIY0rcq%2BGvuQ091TUoI29MKjM%2F74GOqUBHqjslTxXkrQawDZUbVUlYj%2BryILTDgWW1X3frHIvmTQ3F%2BEUW9PA%2FBQp7rKaFeaLS1dIsGdBIAVHQRL0yF2wSo9JjSXA8VhDBkBJlhnMLklBgSl4p9PnbzJHhEppk8YvS3XCTgf%2BPxVwoP9QXptpOW2Tjh%2BG7uSZgMs%2BSmVA5CPtUWE%2BZImkBzmUqWB0TqH6KAVzBpqmrAijmTE26BSSUEDGb05C&X-Amz-Signature=608de23cdb703dbe5771c9398be305e9806850988dbcd23fbfae8b224fec4f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
