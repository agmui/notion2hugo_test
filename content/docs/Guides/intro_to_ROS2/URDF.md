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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCH2YV4P%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzFUJufdhQP%2Bxhtc%2FwTVAaYh3N8UipsEK4xeItediekAiEApjlDnjwnbOPwpO21lnVY%2BX3BglZeq0sCzGXnK%2FkI1agqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXCWKg377mC9h8BWSrcAwbL3bI0a5gSNk%2F1jUS0JJssPop2Ka66tpHrU%2Bw3xqb9cXpS8AZRwDfvOCA6MLMI4UoOEUfPY6ReEuiJwLnuSjpNu9cN6oovALszhdZf61kBywCiWf%2Fwo2YorwKlDik7Cf5PPkskBNmkHOT2jU89376fttypjODDgmk2lken%2BRutRZRbP%2B8Xh4eLEJLXTQPTgMyZjckFNK%2B2hpz%2FXiLaRnR20nl1xW5aqo3ThgC9vIgSOPLH13AqnCMMOavD%2FaZDNq32z%2FkrXA3JFcSqn3lzXRc0h6aw6BRPlRaFrzZzMV%2Bsb2Hu7od3GzKYfsYBRN%2FU%2BDd0qCDrZFHa1fIW7u4MeXpEPrGHIXcksb92fPhyHha%2Fk68oOD%2BcYO8mVYGxYmgVhx1KfmrdNIjOSA4XIMfTQmMLLq5wVLFOWay3u6a25HdIbgVr4m9pthx1Khqv4mPPTU1LkVaV0bnMrH40dxNfKOGZVPq%2B6N%2FDr2YNw0FzD7EHwmIPvSMbv42lK53FdOSBPKLxYvG49oDympx%2BmwTO9hxLj2ZzyX4wUtxecUytyjZQVdwnRDxvn3GOQEqkPeytnZ%2F26DKl5O2GNkOWWriZS2YWyWZ8CGYWz%2FFBuWWkn%2BYaCwJHwmoBIrJGdwbKMOOHn8IGOqUB0ifcn5kZXMDQ%2BK6ukGRJp%2BfT64e6uoWJJAwa7M5w2pezBSrAy%2BLUjhpjD0fkXeluNztRiKF6cWCygdwK%2B6s1Nk2AwNbhc33EmPrgkJxId8euDb0Z9XmjhK9lRSbLnAvk4MmE4YruKoCmF2k0gqAzhFhnDsQLfzCVWisSWMTqeMEJ33JhmpdsW2ILSSpO4bbY53Flf2lY6PQHPVecvP0a5MV%2FH2Pj&X-Amz-Signature=b425c01aa65f78244be481753327ce6c0d6901de9d1df671725fd01d49bf99f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCH2YV4P%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzFUJufdhQP%2Bxhtc%2FwTVAaYh3N8UipsEK4xeItediekAiEApjlDnjwnbOPwpO21lnVY%2BX3BglZeq0sCzGXnK%2FkI1agqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXCWKg377mC9h8BWSrcAwbL3bI0a5gSNk%2F1jUS0JJssPop2Ka66tpHrU%2Bw3xqb9cXpS8AZRwDfvOCA6MLMI4UoOEUfPY6ReEuiJwLnuSjpNu9cN6oovALszhdZf61kBywCiWf%2Fwo2YorwKlDik7Cf5PPkskBNmkHOT2jU89376fttypjODDgmk2lken%2BRutRZRbP%2B8Xh4eLEJLXTQPTgMyZjckFNK%2B2hpz%2FXiLaRnR20nl1xW5aqo3ThgC9vIgSOPLH13AqnCMMOavD%2FaZDNq32z%2FkrXA3JFcSqn3lzXRc0h6aw6BRPlRaFrzZzMV%2Bsb2Hu7od3GzKYfsYBRN%2FU%2BDd0qCDrZFHa1fIW7u4MeXpEPrGHIXcksb92fPhyHha%2Fk68oOD%2BcYO8mVYGxYmgVhx1KfmrdNIjOSA4XIMfTQmMLLq5wVLFOWay3u6a25HdIbgVr4m9pthx1Khqv4mPPTU1LkVaV0bnMrH40dxNfKOGZVPq%2B6N%2FDr2YNw0FzD7EHwmIPvSMbv42lK53FdOSBPKLxYvG49oDympx%2BmwTO9hxLj2ZzyX4wUtxecUytyjZQVdwnRDxvn3GOQEqkPeytnZ%2F26DKl5O2GNkOWWriZS2YWyWZ8CGYWz%2FFBuWWkn%2BYaCwJHwmoBIrJGdwbKMOOHn8IGOqUB0ifcn5kZXMDQ%2BK6ukGRJp%2BfT64e6uoWJJAwa7M5w2pezBSrAy%2BLUjhpjD0fkXeluNztRiKF6cWCygdwK%2B6s1Nk2AwNbhc33EmPrgkJxId8euDb0Z9XmjhK9lRSbLnAvk4MmE4YruKoCmF2k0gqAzhFhnDsQLfzCVWisSWMTqeMEJ33JhmpdsW2ILSSpO4bbY53Flf2lY6PQHPVecvP0a5MV%2FH2Pj&X-Amz-Signature=484360d70ac5b12784a74545267c39a3c870c792249c20571bf30f9c367266fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
