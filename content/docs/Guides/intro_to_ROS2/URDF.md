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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJQU6GJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGh09P0gk%2FAuVtKbLkw50j0F91JcQlOfDvIexofjB3JOAiApYUR4nHojS%2Bak3l00NQBZUmh4bgoJP5xnhTLRK1aoYyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMnjKMNRxtuCxp%2BvuOKtwDDQdVbxmciQ2D0H6vBgf0PYF7Qb3asU1uMYMkgUiRAqASs8dHHiqVqV93G0Fg1IUZSC3Qd9dErrbw7STYNkkMWSCsdIgGGilSDMvC6afsidDtQSlYg0uhh50iHaZmvu05qj6Zejil8Os8vzdiN61UJy42ikFPVeXUEEbqDsr%2F%2Br5bqI%2BW3qVLcufgtznf6vcyOR4TwGODCN3pPlN2W8PswfwzaMuSpotV96Q6DdCtgsCYog%2Bgzf9LBcGSu48bf4eH%2FFWUUzhIKxsMgW9Sx%2Be6hbzS8j7PI8f7DqKDubO%2BW5pBHAUMk7e2WxdtHwYoeVgHv78XtAo3LrcufbpS6PUcHe4uzFIacxHplKGkZcE2JYeNfieecY%2F7x3d343jE5GLFl5f%2FsUfoTe6GYAQn5EONKMzbnVvHQ%2F83MDJF84FLEajW3yA2XOwGVPgNlStFXrXWGuyXV0Rlc6gODzZncuMEaYxXNPltC9etpZqimkbyFP6OUN9X8FpcUFsl%2FO4JxxDUT2g5ljR0nk1%2BCVu%2FcyS0mNUHshX2cs1C%2BSHjideI%2FHrNba4p42A72r%2B6Gsuk8%2FVkpbPMT87qu3E58zqyNfwaEMIr%2BWqLr4Uby4pryyDCMAbAf9FxV99pAM7l1E4w0cD0wgY6pgGbITnFTbCSrYgMHEaYS2n1KIgJNgDFIx8Lh0vhBvDbvcccnKG3LKU6o7xucD2kKEJEX6iallxZ%2Fddc3xZfpdJZW%2FWdtSL4wFfcMuMWmQ7jvLsLL2JQvho8GTPNgZqxmxcuvtJzEk0qgkhFNS9djnhVCPrHH9BbGl4BSnWbuuevbFZKL44i5xQ%2BvNopvgbLN6q0lYz0QIEdBhvmuc5Go5bG6eGKkslw&X-Amz-Signature=5e7150f03d126a6b282110656f3223edc18f33f74d4bfdce35c5b80d0a25453f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJQU6GJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGh09P0gk%2FAuVtKbLkw50j0F91JcQlOfDvIexofjB3JOAiApYUR4nHojS%2Bak3l00NQBZUmh4bgoJP5xnhTLRK1aoYyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMnjKMNRxtuCxp%2BvuOKtwDDQdVbxmciQ2D0H6vBgf0PYF7Qb3asU1uMYMkgUiRAqASs8dHHiqVqV93G0Fg1IUZSC3Qd9dErrbw7STYNkkMWSCsdIgGGilSDMvC6afsidDtQSlYg0uhh50iHaZmvu05qj6Zejil8Os8vzdiN61UJy42ikFPVeXUEEbqDsr%2F%2Br5bqI%2BW3qVLcufgtznf6vcyOR4TwGODCN3pPlN2W8PswfwzaMuSpotV96Q6DdCtgsCYog%2Bgzf9LBcGSu48bf4eH%2FFWUUzhIKxsMgW9Sx%2Be6hbzS8j7PI8f7DqKDubO%2BW5pBHAUMk7e2WxdtHwYoeVgHv78XtAo3LrcufbpS6PUcHe4uzFIacxHplKGkZcE2JYeNfieecY%2F7x3d343jE5GLFl5f%2FsUfoTe6GYAQn5EONKMzbnVvHQ%2F83MDJF84FLEajW3yA2XOwGVPgNlStFXrXWGuyXV0Rlc6gODzZncuMEaYxXNPltC9etpZqimkbyFP6OUN9X8FpcUFsl%2FO4JxxDUT2g5ljR0nk1%2BCVu%2FcyS0mNUHshX2cs1C%2BSHjideI%2FHrNba4p42A72r%2B6Gsuk8%2FVkpbPMT87qu3E58zqyNfwaEMIr%2BWqLr4Uby4pryyDCMAbAf9FxV99pAM7l1E4w0cD0wgY6pgGbITnFTbCSrYgMHEaYS2n1KIgJNgDFIx8Lh0vhBvDbvcccnKG3LKU6o7xucD2kKEJEX6iallxZ%2Fddc3xZfpdJZW%2FWdtSL4wFfcMuMWmQ7jvLsLL2JQvho8GTPNgZqxmxcuvtJzEk0qgkhFNS9djnhVCPrHH9BbGl4BSnWbuuevbFZKL44i5xQ%2BvNopvgbLN6q0lYz0QIEdBhvmuc5Go5bG6eGKkslw&X-Amz-Signature=68dc6c0a06119fb9d716d66922105e3c850a925f604ac6a597698d8e49447073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
