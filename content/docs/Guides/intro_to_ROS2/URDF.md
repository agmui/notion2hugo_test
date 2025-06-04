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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIPF37N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCqPw3aT%2BiYBebpZowFZQH4cpgWl%2FwUQOAe3uR6OjwM3gIhALKbrS2jtGvb%2BkF23592O43zw0OYz3nS2UMfMIl9dFS%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1Dk9bZRTTzYgot%2Bcq3AM2KDRfgOoQGIKf2aMfcOIeun4YO3lqNsddjByLmis6zuCN2%2BkJFiiEsbsRyRSHawhw%2BLg0%2BAFrRBccuQIrgmIlq7sxyBj3KmALGSWyc18i8YB378CiyRx%2FdvlWmZ1jkXb8OgGpL5ocLPR031O70W5TjrIBkkf%2F3SeNGIN9kVqBMbDz77FvUtQgU2skWwJygQoBh7Lh6%2FFFeV0EXmwLzM1DsLvqeOn9enUh0xuoDWY9Cls%2BWgvUiub7u1GMVfDMQjpisjJGafCd5nDk8ZtpXT8ArQG3ppYlqoHuUaAGpzmGHS3XtcXPu3HoB6fccGAj1LfhYr%2BKjQJbjIY8keFa7OaYOFKaJKCDBlFJ%2FqXUTYXQMoEhU4ILPov7ZRK58UfO7qEfpsBlf28D6UexNTqslHw6Xl0dROgdKQxLiEdl6A6DbnjbNDABHLRi9xFq9H46zTHqdwtKrhg4Tw1%2F1jnxwBncdouBu%2BTWplUhRcUCjf1Msi000Vw3%2BT2%2BgEGKCbhfKQEPhGf2Irr%2FoHeaeBNDg1T4YU66ytbMucI9OxgFsHdGrJ3Qs73XGJxwjv6ZdKPuQxKI1vVWzpu0bgbcDzd1BhbIY6X9ImLXDz29Vd%2BMCDn2GA%2FrDuigC3fvQRTmzzDxiP%2FBBjqkASVCOqhVfwMwb1YmRGhSpU%2BQRdiIGesOc85IE0Ky%2B1JzQtXhXNseqccEA2GpoCSG9dbN5aT69SQ9Xk4lo4m40FPOABoI0Vo52K0b2Jx9j8PL48PjPRA95mkM%2B7kFsGBgc20ras37l5EKjWlDf2ytH%2Bl5RiY96sRTIUZZivRYNsceaCHAGSfExXIXSsol1bPTES7zb8OrKQ6bb%2FOYpTcSET9lZK09&X-Amz-Signature=f547b375cf0f08859d6baec811838482f8bdc072d373282bcaf86ee8375c6806&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIPF37N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCqPw3aT%2BiYBebpZowFZQH4cpgWl%2FwUQOAe3uR6OjwM3gIhALKbrS2jtGvb%2BkF23592O43zw0OYz3nS2UMfMIl9dFS%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1Dk9bZRTTzYgot%2Bcq3AM2KDRfgOoQGIKf2aMfcOIeun4YO3lqNsddjByLmis6zuCN2%2BkJFiiEsbsRyRSHawhw%2BLg0%2BAFrRBccuQIrgmIlq7sxyBj3KmALGSWyc18i8YB378CiyRx%2FdvlWmZ1jkXb8OgGpL5ocLPR031O70W5TjrIBkkf%2F3SeNGIN9kVqBMbDz77FvUtQgU2skWwJygQoBh7Lh6%2FFFeV0EXmwLzM1DsLvqeOn9enUh0xuoDWY9Cls%2BWgvUiub7u1GMVfDMQjpisjJGafCd5nDk8ZtpXT8ArQG3ppYlqoHuUaAGpzmGHS3XtcXPu3HoB6fccGAj1LfhYr%2BKjQJbjIY8keFa7OaYOFKaJKCDBlFJ%2FqXUTYXQMoEhU4ILPov7ZRK58UfO7qEfpsBlf28D6UexNTqslHw6Xl0dROgdKQxLiEdl6A6DbnjbNDABHLRi9xFq9H46zTHqdwtKrhg4Tw1%2F1jnxwBncdouBu%2BTWplUhRcUCjf1Msi000Vw3%2BT2%2BgEGKCbhfKQEPhGf2Irr%2FoHeaeBNDg1T4YU66ytbMucI9OxgFsHdGrJ3Qs73XGJxwjv6ZdKPuQxKI1vVWzpu0bgbcDzd1BhbIY6X9ImLXDz29Vd%2BMCDn2GA%2FrDuigC3fvQRTmzzDxiP%2FBBjqkASVCOqhVfwMwb1YmRGhSpU%2BQRdiIGesOc85IE0Ky%2B1JzQtXhXNseqccEA2GpoCSG9dbN5aT69SQ9Xk4lo4m40FPOABoI0Vo52K0b2Jx9j8PL48PjPRA95mkM%2B7kFsGBgc20ras37l5EKjWlDf2ytH%2Bl5RiY96sRTIUZZivRYNsceaCHAGSfExXIXSsol1bPTES7zb8OrKQ6bb%2FOYpTcSET9lZK09&X-Amz-Signature=d19cd6122020a43547df94be31ccc10d77ca5ed2b7e2a6e2dba1813ac30de5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
