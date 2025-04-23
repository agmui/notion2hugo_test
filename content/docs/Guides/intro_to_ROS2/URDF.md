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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6W7AZU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHqCI9mXsVjI%2FHdMVobt7SdsYAFevdTR5cqY8nT18pHaAiEA3eXsXKKgIkF37f7onrEKVpq6Mt1lBf7xdc9yul8yYcEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyW%2BXiHWfuQr5g2qyrcA98JB6Ux8Rx0gyaX%2BUEGnRAyRjo8o0nSL9b2L9FeXhdNRuCVRObhXzWHpARvks5irq%2Fyd92%2FfwtYy3aNkvDhpUW3jhYxf1qzB6DNPbdt852T8DXu0SnaQFJAGze3a2MUmlZ2o7uXPTmoHeqLntNOjSuWJSkKAd0lqibY22hciTO30NKSPgGZCNl%2BQ0gbL1CbPqv4uYwYueNBIv5WyRbr0etEhQaYv2QdLHj2zGV%2BWXin1x0mtMU%2BfOPNMMXZmgX1JBc%2FR7WiauvG3Ib1zyJN8t4FanVQwc7SWiAjfYTuucE7udHyEdVsCzzuN7yBVKRRjSCCAM%2Fq0sGCkUGbmWIdVuzuxvLZNTabpxVCUm17662%2FUnSQe9HnJ%2FFCCW7TN%2BmaU0YZUNnhvgbSiCmnGBSb2fgzGz0%2BNkn%2FELSFb69kjZP%2FDtl9t%2Faup6lt6ojNMi8VEjg1vh%2FDZjCKbCxzWFHjExfhJ8%2BbFlVeAiLUIxCk8TP6zKYWOOXgjUnhbExukWef5ov44o80R8BmUegrpCFQw8oB%2FosxkFb5eMV6J5f40T47TBGM9m1V1Zgv63uOFN5wkr59%2BD4YjsWPFTnrO82JZLWR58bhqOl0CgjWiN3P%2FZjlKJT0JXOIGO0UhXpzMLfGpcAGOqUB%2FxOvzO4lruGHzMrllwtOduVBTz9vjZiqsnptkMLUnji6AdJp0WeFrfzQrdQ7vr0Fs3w9O8WhGRum%2BTl%2B6LDjcKYM95igHKrC%2Bcy9%2FhzAcKNTUi%2Bun85h%2BnggnARlekuHi8omcFch23YUDCXvBVdh6qPm4m1NO3F%2Bwh75Kw273YWmw7%2BwTkQpMro%2BKbEl27ixbeB6DSBrNk7q6nsIpgb0EbtpCII5&X-Amz-Signature=e7815ac718c343de7de49a1a8b6e2d800587a25eee6f80dc590fe2fff61b35aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6W7AZU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHqCI9mXsVjI%2FHdMVobt7SdsYAFevdTR5cqY8nT18pHaAiEA3eXsXKKgIkF37f7onrEKVpq6Mt1lBf7xdc9yul8yYcEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyW%2BXiHWfuQr5g2qyrcA98JB6Ux8Rx0gyaX%2BUEGnRAyRjo8o0nSL9b2L9FeXhdNRuCVRObhXzWHpARvks5irq%2Fyd92%2FfwtYy3aNkvDhpUW3jhYxf1qzB6DNPbdt852T8DXu0SnaQFJAGze3a2MUmlZ2o7uXPTmoHeqLntNOjSuWJSkKAd0lqibY22hciTO30NKSPgGZCNl%2BQ0gbL1CbPqv4uYwYueNBIv5WyRbr0etEhQaYv2QdLHj2zGV%2BWXin1x0mtMU%2BfOPNMMXZmgX1JBc%2FR7WiauvG3Ib1zyJN8t4FanVQwc7SWiAjfYTuucE7udHyEdVsCzzuN7yBVKRRjSCCAM%2Fq0sGCkUGbmWIdVuzuxvLZNTabpxVCUm17662%2FUnSQe9HnJ%2FFCCW7TN%2BmaU0YZUNnhvgbSiCmnGBSb2fgzGz0%2BNkn%2FELSFb69kjZP%2FDtl9t%2Faup6lt6ojNMi8VEjg1vh%2FDZjCKbCxzWFHjExfhJ8%2BbFlVeAiLUIxCk8TP6zKYWOOXgjUnhbExukWef5ov44o80R8BmUegrpCFQw8oB%2FosxkFb5eMV6J5f40T47TBGM9m1V1Zgv63uOFN5wkr59%2BD4YjsWPFTnrO82JZLWR58bhqOl0CgjWiN3P%2FZjlKJT0JXOIGO0UhXpzMLfGpcAGOqUB%2FxOvzO4lruGHzMrllwtOduVBTz9vjZiqsnptkMLUnji6AdJp0WeFrfzQrdQ7vr0Fs3w9O8WhGRum%2BTl%2B6LDjcKYM95igHKrC%2Bcy9%2FhzAcKNTUi%2Bun85h%2BnggnARlekuHi8omcFch23YUDCXvBVdh6qPm4m1NO3F%2Bwh75Kw273YWmw7%2BwTkQpMro%2BKbEl27ixbeB6DSBrNk7q6nsIpgb0EbtpCII5&X-Amz-Signature=7ef93705a397da92081d1db466d1dab0ed20b0ad2efe403153024a56ad8053b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
