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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZOFCPS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIADM%2F70OQEyYUTL1r82ouBVgfB1PlUIT8tYv8dUOQcgJAiAcnboQdjbKAHSsXlQ2HOhoWVEjlMWv1o%2BT3cc9LS%2FctCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMTIk%2BNlkXodXvfzwuKtwDGMZq3q%2B30oidf613asGUl2DT%2FUg3s6BOju6H6m6KCMyn5E7SSw2FeE1iKw4nxcEazpWaqAEM%2FLAd6wvXHfTerRdihap23P2RZmqIWzkS03JBKoktSw6sv4YDHcc%2BeZFnCsEjqN2PWUCymHtWim9s4pmSd4M9IwMaQpDscTqOclmaNv70iRZnBYVpgznpu%2FBJre73gA6lrSJM33opm411o%2FHwmBOChaqcMtu%2Ftz0QNKks%2F4xXa92S6G8CXYL2B37kuh6FwZbhHgQCChjjUK%2FVlisTDnX%2FFk99uez9%2B5yX4Vp%2B6Z6tMhB1ON5Hu%2BLbsXHAvjGHA85luzZcg2QAKFyJa1iCcLZ%2BC10QVdD9ORRaj4NbKh%2BU1dVM3N4aSjlHUJgFYRA3uqzBVtYruXcwj0KqhwkMPYO3GGaqyPikB%2BmDAUAdyre6kMla91P6QPLOoOXsibBHldp49FSnmJe%2FcOvTq0K%2FOft55DZfsoOmTZp9J74bHC9lnIebeG6RSoxQqaTkAXVl5cgDgtleqMfvCLNFXJ%2FcElawSGDNGNQKyo6kHCR%2F%2BIR6nurSv0J6%2BRPY4aJA6pRcoRyg0vfcHWJ9CqkeZZdAT8iigifN5SyEyapeWmjOJxN32MS%2BElje3GswtqqPxAY6pgEdVEV8MOwJ45wNBnK53rYXnMF4GC9JCrPvr02ihk7DEL0EIuExNAEOmhIgWiHgXknzneo71HvjEx%2F1CFb5NCqGr%2FOyCyShE7oqylsl0UH8fEgNUKVCK9ZQUEPjx%2F0uCea2H5Cz%2F2FHqh1crsVvTqwTixM3vN%2BdP%2Fd034ZNyxlvYjFkYQkMcOpi7bB0h5JGBesG0jEaONOzpLsyur2PkEq7MHEza1DJ&X-Amz-Signature=40625ad0684b5578d8684901fee2a4b91fa6ce46740e9518236def48a395a971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZOFCPS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIADM%2F70OQEyYUTL1r82ouBVgfB1PlUIT8tYv8dUOQcgJAiAcnboQdjbKAHSsXlQ2HOhoWVEjlMWv1o%2BT3cc9LS%2FctCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMTIk%2BNlkXodXvfzwuKtwDGMZq3q%2B30oidf613asGUl2DT%2FUg3s6BOju6H6m6KCMyn5E7SSw2FeE1iKw4nxcEazpWaqAEM%2FLAd6wvXHfTerRdihap23P2RZmqIWzkS03JBKoktSw6sv4YDHcc%2BeZFnCsEjqN2PWUCymHtWim9s4pmSd4M9IwMaQpDscTqOclmaNv70iRZnBYVpgznpu%2FBJre73gA6lrSJM33opm411o%2FHwmBOChaqcMtu%2Ftz0QNKks%2F4xXa92S6G8CXYL2B37kuh6FwZbhHgQCChjjUK%2FVlisTDnX%2FFk99uez9%2B5yX4Vp%2B6Z6tMhB1ON5Hu%2BLbsXHAvjGHA85luzZcg2QAKFyJa1iCcLZ%2BC10QVdD9ORRaj4NbKh%2BU1dVM3N4aSjlHUJgFYRA3uqzBVtYruXcwj0KqhwkMPYO3GGaqyPikB%2BmDAUAdyre6kMla91P6QPLOoOXsibBHldp49FSnmJe%2FcOvTq0K%2FOft55DZfsoOmTZp9J74bHC9lnIebeG6RSoxQqaTkAXVl5cgDgtleqMfvCLNFXJ%2FcElawSGDNGNQKyo6kHCR%2F%2BIR6nurSv0J6%2BRPY4aJA6pRcoRyg0vfcHWJ9CqkeZZdAT8iigifN5SyEyapeWmjOJxN32MS%2BElje3GswtqqPxAY6pgEdVEV8MOwJ45wNBnK53rYXnMF4GC9JCrPvr02ihk7DEL0EIuExNAEOmhIgWiHgXknzneo71HvjEx%2F1CFb5NCqGr%2FOyCyShE7oqylsl0UH8fEgNUKVCK9ZQUEPjx%2F0uCea2H5Cz%2F2FHqh1crsVvTqwTixM3vN%2BdP%2Fd034ZNyxlvYjFkYQkMcOpi7bB0h5JGBesG0jEaONOzpLsyur2PkEq7MHEza1DJ&X-Amz-Signature=73f87e0dc72bcfc969cc1fd23e252e2b5416e5b14478b295a9efe65a5eb898a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
