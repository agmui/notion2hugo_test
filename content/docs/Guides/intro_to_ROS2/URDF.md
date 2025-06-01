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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MQDKSO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFuVtAbxPUkrg7QRvrbautmJ52IlrC3GKndn4eCspcVxAiBx%2FTN1OVvGoi7EfrySVYeTVdBInUESbksV81eN%2BabyGiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tPc%2BHcDrUQeMl%2BrKtwD7gP70iW%2Frs%2BKtKT6HhO4rFdnzgLvShYRBsuBnmp%2FhPYuebpa%2F3J9CRvV3cxoOSDl05cy0MVLkIZUjk0Nhhs7UE%2BxAT03hgFKiPgfbjh%2B9zVGUFwg2ZtrXhCEy%2FI%2BIQWduG0E%2FX8IVhC5qgwRSLc3k5ERm0reZRy5PLrTScvUSjgo2CnwyojkWQc5Ip7dCQmErIbe%2Fj6xHXccW6Fqf1iqyOqDHkxM6Lk2bFvqfc6FVqGxBIA1H8LQG1B5ZZ5vdSl7Rw3rnxKDZT6Y2iMQ%2BdzV3GLzDBjtwCbf%2FrKry%2B%2B%2FzeVGcqrpkOSYNZC%2FqAF5BFDxtWr9meGOVcGEVI1MmoLPTlTHWpMeKr5tNU7cWAV2nO97D%2BYgeDqHXXiO%2BRUaU2uqsXAmLgFIKwtxTsizE98RhvW8%2BL9CirtCPEu7suDoLemdbmoImvjGsgnuIl3Pa77r8Rc85CInTTMtSv2X6QmX6phzbXKVXmIlfbSpCUmVQP3f3WvQKaOD%2BinCnPxYwxF9Duan7oWxTUWdCU%2FIc0MrmS4Hoo8RRlHWe%2BM3OSVmQ8x8jZtR0AVwrtOdDb46dMlZxNXHLxV%2BS3kbZcEcbL6b4cxG%2BVxCnRzDEqEQv7FT8JVPxQ%2F39MTmMKGwEtUwud%2FuwQY6pgEOyZEf7oWLosMdhb5VwQXuhCI18rHlleIewSc8h1rTekOlJakSWKX4%2BMn61D4N4V3%2Bu38DjAIa6%2B18riYZM8sh4Ufr7IJ%2F9gy0TSq%2BnQWucW3Z4tub%2FohAds4r8xf5w2WRIoz3GahA9lUSQ84fd0icbHkhdcIjzAZhtI%2FdSJKcDVegQR1Gtd8JEPcgXT8%2Fyx0cF%2FdLTBxSk2h5XbTxUTxbFTnyFjzS&X-Amz-Signature=4187abeecb56b2d22c051fe006d69e7a079afc41182e37500590e0492bbf01a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MQDKSO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFuVtAbxPUkrg7QRvrbautmJ52IlrC3GKndn4eCspcVxAiBx%2FTN1OVvGoi7EfrySVYeTVdBInUESbksV81eN%2BabyGiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tPc%2BHcDrUQeMl%2BrKtwD7gP70iW%2Frs%2BKtKT6HhO4rFdnzgLvShYRBsuBnmp%2FhPYuebpa%2F3J9CRvV3cxoOSDl05cy0MVLkIZUjk0Nhhs7UE%2BxAT03hgFKiPgfbjh%2B9zVGUFwg2ZtrXhCEy%2FI%2BIQWduG0E%2FX8IVhC5qgwRSLc3k5ERm0reZRy5PLrTScvUSjgo2CnwyojkWQc5Ip7dCQmErIbe%2Fj6xHXccW6Fqf1iqyOqDHkxM6Lk2bFvqfc6FVqGxBIA1H8LQG1B5ZZ5vdSl7Rw3rnxKDZT6Y2iMQ%2BdzV3GLzDBjtwCbf%2FrKry%2B%2B%2FzeVGcqrpkOSYNZC%2FqAF5BFDxtWr9meGOVcGEVI1MmoLPTlTHWpMeKr5tNU7cWAV2nO97D%2BYgeDqHXXiO%2BRUaU2uqsXAmLgFIKwtxTsizE98RhvW8%2BL9CirtCPEu7suDoLemdbmoImvjGsgnuIl3Pa77r8Rc85CInTTMtSv2X6QmX6phzbXKVXmIlfbSpCUmVQP3f3WvQKaOD%2BinCnPxYwxF9Duan7oWxTUWdCU%2FIc0MrmS4Hoo8RRlHWe%2BM3OSVmQ8x8jZtR0AVwrtOdDb46dMlZxNXHLxV%2BS3kbZcEcbL6b4cxG%2BVxCnRzDEqEQv7FT8JVPxQ%2F39MTmMKGwEtUwud%2FuwQY6pgEOyZEf7oWLosMdhb5VwQXuhCI18rHlleIewSc8h1rTekOlJakSWKX4%2BMn61D4N4V3%2Bu38DjAIa6%2B18riYZM8sh4Ufr7IJ%2F9gy0TSq%2BnQWucW3Z4tub%2FohAds4r8xf5w2WRIoz3GahA9lUSQ84fd0icbHkhdcIjzAZhtI%2FdSJKcDVegQR1Gtd8JEPcgXT8%2Fyx0cF%2FdLTBxSk2h5XbTxUTxbFTnyFjzS&X-Amz-Signature=ed8a6b48b86cdb4fa4b14b6360efdbdcc6a55d6931ea602766b7b35a2c2100bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
