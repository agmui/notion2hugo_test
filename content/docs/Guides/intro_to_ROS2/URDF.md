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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4YUUCW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF5HuneabQxnl%2FW%2FY5t7JJkt%2F8u9rdLsqCqGj1x6QBoJAiEA8X%2BictD9l2W%2FZ1ww4rL9NO6u6KExan62SWDHti31FGoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3fVM5dmapUzYm8EyrcA8dac4EerblZHP%2FUMkbnLBZkf5yO9Ih5GxBwRaE4DYTA%2FqT0CU%2BqLOQVjxKyiJ0nzqtqnFIUMfYOmZNuQtgwzHtrA%2FyV0uUhl0dVpjyYK08%2BnhjMs5QNJuyALL5PFCt5XDbRSGgxYan2Ws%2BtgcsTDpxGDzWQ4u%2FLupFU3Hn%2FF1Q2sXWzyZJ%2B48cgZK38iFtVWRFH%2BN60niJTnIhziEgxy7KsMHPB5evvfEk9UONAJA8fF2yGqzyB3U4Qh%2BkG5q92lGtP%2F5%2BhIDtEODyAznmymVkdUif%2BJwhTqcA6ONUEBu5oTMU%2B%2B0Ld78LekmaMtVrgtTX%2FhOZHwi1uP49lhflXsIWectE%2BraEoOo%2FwgJ2FP2GoUQgs8GM6iqSL5H6Ocjf904ih3PF9mXdecwsYK30NFFxNlBJOQwhVGqY1Pbj21V%2BcwUEeLDl0MN3Q9B8zN36FogRnuo0tYl10S7XiyviF9TRcsv0hUuNtEqraJoJH12Su7r26b8deWIfS4rn7%2FGgc5bzzqhhknhAcgKhu1ruECPNTYBeCYBgjWPmTTGn%2F8Q1%2Bt2MIWRYp2aaF6f3wsD4BI0wwgz9NgbHY83ux5UEAxWLkSO5tdNHGdnbK3RHdlh%2FWL57DbDiPeD0SRwpTMPqRisEGOqUB3itYDGWv0Lb10ROHKxzFK438ElTF77YAQy%2FGUQlmV6gg42O%2FcKtOUGVOTAND4uxoEJvz683B%2Bu14j%2FOJzaZmaX5zf%2FTW1Qo4EoMwXmCGby2Xv0OznfSGUj3NHyaaaw0LhppZ8drmnti4JETdJLIELFgYMObHX5BkHp6iL2MloR43Uz21EW23YdukZV45DphzJvDi4h5nEUJGwePschHzNrFuO%2BeV&X-Amz-Signature=ceb4dd51343c47f618e84205d03a29b52142e209177cd681fdc54afa493d792f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4YUUCW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF5HuneabQxnl%2FW%2FY5t7JJkt%2F8u9rdLsqCqGj1x6QBoJAiEA8X%2BictD9l2W%2FZ1ww4rL9NO6u6KExan62SWDHti31FGoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3fVM5dmapUzYm8EyrcA8dac4EerblZHP%2FUMkbnLBZkf5yO9Ih5GxBwRaE4DYTA%2FqT0CU%2BqLOQVjxKyiJ0nzqtqnFIUMfYOmZNuQtgwzHtrA%2FyV0uUhl0dVpjyYK08%2BnhjMs5QNJuyALL5PFCt5XDbRSGgxYan2Ws%2BtgcsTDpxGDzWQ4u%2FLupFU3Hn%2FF1Q2sXWzyZJ%2B48cgZK38iFtVWRFH%2BN60niJTnIhziEgxy7KsMHPB5evvfEk9UONAJA8fF2yGqzyB3U4Qh%2BkG5q92lGtP%2F5%2BhIDtEODyAznmymVkdUif%2BJwhTqcA6ONUEBu5oTMU%2B%2B0Ld78LekmaMtVrgtTX%2FhOZHwi1uP49lhflXsIWectE%2BraEoOo%2FwgJ2FP2GoUQgs8GM6iqSL5H6Ocjf904ih3PF9mXdecwsYK30NFFxNlBJOQwhVGqY1Pbj21V%2BcwUEeLDl0MN3Q9B8zN36FogRnuo0tYl10S7XiyviF9TRcsv0hUuNtEqraJoJH12Su7r26b8deWIfS4rn7%2FGgc5bzzqhhknhAcgKhu1ruECPNTYBeCYBgjWPmTTGn%2F8Q1%2Bt2MIWRYp2aaF6f3wsD4BI0wwgz9NgbHY83ux5UEAxWLkSO5tdNHGdnbK3RHdlh%2FWL57DbDiPeD0SRwpTMPqRisEGOqUB3itYDGWv0Lb10ROHKxzFK438ElTF77YAQy%2FGUQlmV6gg42O%2FcKtOUGVOTAND4uxoEJvz683B%2Bu14j%2FOJzaZmaX5zf%2FTW1Qo4EoMwXmCGby2Xv0OznfSGUj3NHyaaaw0LhppZ8drmnti4JETdJLIELFgYMObHX5BkHp6iL2MloR43Uz21EW23YdukZV45DphzJvDi4h5nEUJGwePschHzNrFuO%2BeV&X-Amz-Signature=ba961cc69d179a316b9e5e7a4c07f7194835393fdea9c207c648c8c3d0228807&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
