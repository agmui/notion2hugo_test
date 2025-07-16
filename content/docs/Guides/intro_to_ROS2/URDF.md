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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZQ2BO2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAzm2ATUjUt9GOpdii2GODO6bpGrw4E5Uc1dHFuxbyEkAiEAydWHOljhRiFCIY2KLvL4fxnM1nJOrIrwBpkzpQnhuOEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGNnlLNhxE38gu50FSrcA2sCbGU3P2zWNcRHD94fnU6RPM%2B%2FYXpPKVrrRJqUht3pGHeFL7%2BhZ7QbczUsgNmrU%2BH%2FPsGFy0mCfariv8TRh53xOP%2Fz%2BaQNGhQ5xuT1n03q%2FMPM%2F70bxRl2fGeEMm2a3EYr8t9LmC8XgSsfzTgjZVsO4KOOZCturew6gMZowKCZfjOW29PCqII4%2BRPkrECW%2BlSm%2Fr2%2Fl83yieVXP97D8Fxrt7Rgz97JGg2IKA08d0LrBu5hQILUrJtGg013yIWMJbjcaPSyhV1stREnOZ09HUm%2FeBoAayMm9N%2B8WtUTC9dajw2eZeCdg%2FR0PrbdeY8HJhr81aiYeINmeb1hl%2FGQzn8NLF0jXHM%2B%2F2WBVvoRr2yLNNmlM6rgq2BNuxB8JZ5hT5ZLekWKCWtzdm0luDoko5m3%2FBhHod0YvEwOaIUzuGV4gO8CvlxXmeTyWd7nty5NCc0gfYUrt0Iql7wLFqUQEfomzBvxlIZjUpyNzFRYNyCstFkXcV%2FeAPHfKbS3xcz5hedeAshevkerbt0Y7e7xroLFFwruu9kS4NbcQztwClJ9V6NNS37TjXRsHpclbEQ39PYZh19m3c5KH4WILvjha1NvemtKHLL76hEEGGGu50%2BQelWy6GAlRXaNJchdMMKT3sMGOqUBTh%2B3WJQKK4jpKoKyZAsefttN5viYiiwkeNKjlO7lOh2ecLe6W6paq7ggjat7pQ%2FI6HO1w8P1I3zzOC1C2jGNPIBPgaIWzyjeKnyC%2FwqmcMDrP14XyvBvxJA2zLlNzCeUCOGAN%2BGCeBlfN%2B5iAfxQEAUvmIzoWHL0zeKzCNHlGOMgzEwbM%2BR3iEeVWreePB02gmgr5nhU7qOAE5%2FVNQy4fadgZxeo&X-Amz-Signature=f6fe97216bc96544b73c57a8e574f84fbe46df38b773f6015e1e919980227d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZQ2BO2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAzm2ATUjUt9GOpdii2GODO6bpGrw4E5Uc1dHFuxbyEkAiEAydWHOljhRiFCIY2KLvL4fxnM1nJOrIrwBpkzpQnhuOEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGNnlLNhxE38gu50FSrcA2sCbGU3P2zWNcRHD94fnU6RPM%2B%2FYXpPKVrrRJqUht3pGHeFL7%2BhZ7QbczUsgNmrU%2BH%2FPsGFy0mCfariv8TRh53xOP%2Fz%2BaQNGhQ5xuT1n03q%2FMPM%2F70bxRl2fGeEMm2a3EYr8t9LmC8XgSsfzTgjZVsO4KOOZCturew6gMZowKCZfjOW29PCqII4%2BRPkrECW%2BlSm%2Fr2%2Fl83yieVXP97D8Fxrt7Rgz97JGg2IKA08d0LrBu5hQILUrJtGg013yIWMJbjcaPSyhV1stREnOZ09HUm%2FeBoAayMm9N%2B8WtUTC9dajw2eZeCdg%2FR0PrbdeY8HJhr81aiYeINmeb1hl%2FGQzn8NLF0jXHM%2B%2F2WBVvoRr2yLNNmlM6rgq2BNuxB8JZ5hT5ZLekWKCWtzdm0luDoko5m3%2FBhHod0YvEwOaIUzuGV4gO8CvlxXmeTyWd7nty5NCc0gfYUrt0Iql7wLFqUQEfomzBvxlIZjUpyNzFRYNyCstFkXcV%2FeAPHfKbS3xcz5hedeAshevkerbt0Y7e7xroLFFwruu9kS4NbcQztwClJ9V6NNS37TjXRsHpclbEQ39PYZh19m3c5KH4WILvjha1NvemtKHLL76hEEGGGu50%2BQelWy6GAlRXaNJchdMMKT3sMGOqUBTh%2B3WJQKK4jpKoKyZAsefttN5viYiiwkeNKjlO7lOh2ecLe6W6paq7ggjat7pQ%2FI6HO1w8P1I3zzOC1C2jGNPIBPgaIWzyjeKnyC%2FwqmcMDrP14XyvBvxJA2zLlNzCeUCOGAN%2BGCeBlfN%2B5iAfxQEAUvmIzoWHL0zeKzCNHlGOMgzEwbM%2BR3iEeVWreePB02gmgr5nhU7qOAE5%2FVNQy4fadgZxeo&X-Amz-Signature=bb843a1552ce75ab90325cddd64d70d2dd37644ab465cb561ee44005a2574997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
