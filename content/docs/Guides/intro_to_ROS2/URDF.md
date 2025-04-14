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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=a6fdfdca6443ed9a7a6b59ce589aaeb57c44bb5bdd852e33705de1f5c69036f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=cc30d155bdd40526e08c27e04b249b14906a14bb242fe3e0ecf5a22efff860d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
