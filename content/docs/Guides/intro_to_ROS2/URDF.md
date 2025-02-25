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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJFQTFH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDflhiX6WdlSTDEouOH2LKy3sewijHWaebiaKiIb%2FgiwAIgestUnoUUrPIY7b%2FJzGtx5zwTuSsFkwxwyycQsvs8KQoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJTRet6JHWK1dvTnlSrcA3K4l9aDFI8TkPNkRdhrqTT5CxpiilETXGpeU%2FFHmD0kYZqttpXPF6TU4fKXOPe0sOzsyONG9BJ4oA79DSmeCrUkTHd%2FSJM%2BCuE4EuT1e63w2X%2BYvx%2B7uJzOmqzh3upAfMB%2F9k24C6PbDpcUGM640gV2QA2eETRpLvXYalOP8smxoRMxMgBPQ6ItusjqaSAXZrYE%2FXqo0g0IHLyWNat6kffzOw9m71gZBnpm%2B5OWMJ7LTPsYfGdZTY0FsWiFBwnZ3piFcWBJh0OdxWDceFwh8pUBANLTRBknZJzaKW1w7KGb%2FenmZTHSta%2BqDFO%2FiyXgYRgCunyWEGcCZUs1uSZgQOVdZJxjCVjbbc5jBwhGPnkLlVb%2BiUuhuqIGQ%2BVgphSJetc3xZsCy%2BPcysM1Q6P759kj9FuTeOhIAYJtf9Q79TTAyxX5X1VoWsFnMtKsImcRNTzKrweXeuEDCpZ3P7Shwb145AE5isV0VfIGJLkgg%2BxU1oWqqZvsCixd%2Bt1Vli4sXrmChcSu3mnr90t3oemsP4Is5nTfOk73ZUQzdESaT3ligygJI6u%2BsriBbG%2FRS38lX%2FFZM3ZBhBrb%2BKteBHnVx0yuqo3B%2BqcaGXGBHfCuMzj9zQaKoEmPGwQjFq50MIb59r0GOqUBCqNxRjjBvl0PtJmTJ6PYjRsoNFf2ixOtdt%2Bhhp6iAxmp5eOsN09t5cL6lgVxgC029afeH2%2Bt7rhnoZleBYJBkhoswkLwjwhEsR80ahkpQ%2B39DAcUPx0zfOzaH2clm6EeTzu7KowBdn12M%2Bf5jSWYejXhvRny7h4z%2BO4K9LMP6navB8pEqlfsbedx92B3wYepTzVcUSj69R4aRZtmyMH2fxRridBS&X-Amz-Signature=dbbb87c138447f639c7383b6e9e38d1679a4ac7be603b04e35c14123700addc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJFQTFH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDflhiX6WdlSTDEouOH2LKy3sewijHWaebiaKiIb%2FgiwAIgestUnoUUrPIY7b%2FJzGtx5zwTuSsFkwxwyycQsvs8KQoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJTRet6JHWK1dvTnlSrcA3K4l9aDFI8TkPNkRdhrqTT5CxpiilETXGpeU%2FFHmD0kYZqttpXPF6TU4fKXOPe0sOzsyONG9BJ4oA79DSmeCrUkTHd%2FSJM%2BCuE4EuT1e63w2X%2BYvx%2B7uJzOmqzh3upAfMB%2F9k24C6PbDpcUGM640gV2QA2eETRpLvXYalOP8smxoRMxMgBPQ6ItusjqaSAXZrYE%2FXqo0g0IHLyWNat6kffzOw9m71gZBnpm%2B5OWMJ7LTPsYfGdZTY0FsWiFBwnZ3piFcWBJh0OdxWDceFwh8pUBANLTRBknZJzaKW1w7KGb%2FenmZTHSta%2BqDFO%2FiyXgYRgCunyWEGcCZUs1uSZgQOVdZJxjCVjbbc5jBwhGPnkLlVb%2BiUuhuqIGQ%2BVgphSJetc3xZsCy%2BPcysM1Q6P759kj9FuTeOhIAYJtf9Q79TTAyxX5X1VoWsFnMtKsImcRNTzKrweXeuEDCpZ3P7Shwb145AE5isV0VfIGJLkgg%2BxU1oWqqZvsCixd%2Bt1Vli4sXrmChcSu3mnr90t3oemsP4Is5nTfOk73ZUQzdESaT3ligygJI6u%2BsriBbG%2FRS38lX%2FFZM3ZBhBrb%2BKteBHnVx0yuqo3B%2BqcaGXGBHfCuMzj9zQaKoEmPGwQjFq50MIb59r0GOqUBCqNxRjjBvl0PtJmTJ6PYjRsoNFf2ixOtdt%2Bhhp6iAxmp5eOsN09t5cL6lgVxgC029afeH2%2Bt7rhnoZleBYJBkhoswkLwjwhEsR80ahkpQ%2B39DAcUPx0zfOzaH2clm6EeTzu7KowBdn12M%2Bf5jSWYejXhvRny7h4z%2BO4K9LMP6navB8pEqlfsbedx92B3wYepTzVcUSj69R4aRZtmyMH2fxRridBS&X-Amz-Signature=76bd292cac5c00c1e8f9781c119d18aa037b88747102e39b75fe67c500bf91e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
