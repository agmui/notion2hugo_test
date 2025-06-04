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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACX3FNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDAwqrDp%2BbgoBVF%2BW8x%2BTEwlQEZ99jsM6Awb4OzyWc%2FHAiEAlOG1IEYRQBhXEzvIycM3rOZM8jBBvalz1g15T8SSL64q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEZoHdBIxcZRnAZbiSrcA1YqcEwzsqzJ5adjVShCFHwY7Da9QvjfUEcKt3eH09mLoE7iIeaccKhaLtuc9JbAKZP4uZw1Nke%2FXaOJjXHgxtLfPN2TE%2FpkRfe4jiUg%2BSXbbUh1C8vzISRt%2FJ66SAyiMuC5PXhjpw00lvkLeZMvKu06sylcCYlo8VLMy31hjbrIzL%2BN6cQp0XIxsIhz5Fj2Qzq1Vpx%2BHG7wKxEFfgu%2FY2hqXTRxf62u2hrWRpPLS7GodhrZQyHpN5gkKpIs%2B90ivGJ3aSzSJ3Ujf9CzlgE7NRzshtcVpzw3%2FiYvxTl%2B19af2JX%2FLXQSD2Drm1W6yjymqZ9BlFLQjQszTm%2BiAp2QDsF2nWLwNLC7lgePqtAHWYDacmljg2XWP8%2FKYjXwnC51ZueAnu2ctw%2BJ%2Bf2uMVkwwZiQQUwxMcyKn0HN06QWVSAoMt8wMB5%2B5bASXCvHTt89RWzGnIsbGtQ50M5IBFDR2RdS0brpxCSkUmTXMLnJy433Jje8KGxhVVXjTodBvJ5UVPPW5eJ1SWTRQSAR8svHLOVk%2BKQcDgWO9OVfk9fetsZLW8QLT7G43FGi4tzZzvDCfyu%2B%2B64paEAOJNgY0vO%2FUBRUDTDxyZsojePPNmxiS4fJdYNY2cElPSz22eg8MPvdgcIGOqUBdVdU9UE1S%2BuYTo409P4MV2p6AhtTcFbIuUaRDC%2FrJaQk8wE73xxw1qWa%2FTdtwPCpHyut1SQSmG5sgejnubOn5xuyn8I2lh75npeObK6vauxeyz94rgqsI2ZVQxqKwEKgqIz7dC6DfCKyfT%2Blj1ASNoUtgG23AAHUMdLsecOoVl3vh8yA44HLlZLpOikZ0YEcmvVGGPSes22Vr3lW0J5U5gMqweO%2F&X-Amz-Signature=6bbcbdf62a6490df3030cffbd076928cf320b62d58175ba841aea129a20e415e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACX3FNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDAwqrDp%2BbgoBVF%2BW8x%2BTEwlQEZ99jsM6Awb4OzyWc%2FHAiEAlOG1IEYRQBhXEzvIycM3rOZM8jBBvalz1g15T8SSL64q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEZoHdBIxcZRnAZbiSrcA1YqcEwzsqzJ5adjVShCFHwY7Da9QvjfUEcKt3eH09mLoE7iIeaccKhaLtuc9JbAKZP4uZw1Nke%2FXaOJjXHgxtLfPN2TE%2FpkRfe4jiUg%2BSXbbUh1C8vzISRt%2FJ66SAyiMuC5PXhjpw00lvkLeZMvKu06sylcCYlo8VLMy31hjbrIzL%2BN6cQp0XIxsIhz5Fj2Qzq1Vpx%2BHG7wKxEFfgu%2FY2hqXTRxf62u2hrWRpPLS7GodhrZQyHpN5gkKpIs%2B90ivGJ3aSzSJ3Ujf9CzlgE7NRzshtcVpzw3%2FiYvxTl%2B19af2JX%2FLXQSD2Drm1W6yjymqZ9BlFLQjQszTm%2BiAp2QDsF2nWLwNLC7lgePqtAHWYDacmljg2XWP8%2FKYjXwnC51ZueAnu2ctw%2BJ%2Bf2uMVkwwZiQQUwxMcyKn0HN06QWVSAoMt8wMB5%2B5bASXCvHTt89RWzGnIsbGtQ50M5IBFDR2RdS0brpxCSkUmTXMLnJy433Jje8KGxhVVXjTodBvJ5UVPPW5eJ1SWTRQSAR8svHLOVk%2BKQcDgWO9OVfk9fetsZLW8QLT7G43FGi4tzZzvDCfyu%2B%2B64paEAOJNgY0vO%2FUBRUDTDxyZsojePPNmxiS4fJdYNY2cElPSz22eg8MPvdgcIGOqUBdVdU9UE1S%2BuYTo409P4MV2p6AhtTcFbIuUaRDC%2FrJaQk8wE73xxw1qWa%2FTdtwPCpHyut1SQSmG5sgejnubOn5xuyn8I2lh75npeObK6vauxeyz94rgqsI2ZVQxqKwEKgqIz7dC6DfCKyfT%2Blj1ASNoUtgG23AAHUMdLsecOoVl3vh8yA44HLlZLpOikZ0YEcmvVGGPSes22Vr3lW0J5U5gMqweO%2F&X-Amz-Signature=e26f84cc4f031131f48312d638a0eae4bfbbb5a39080e9183e181e82e66d8fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
