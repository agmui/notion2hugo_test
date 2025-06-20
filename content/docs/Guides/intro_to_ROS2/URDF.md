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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XNSNRO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcjR%2BdO9inperTESY0c%2FMgmQWeg0t1ZZnR5IowERCbDgIhAM3mf%2F9CIULdalYdpQ8JwRZzcv3f3ymSe2lhTEcqIwWTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5vzhwcXfE5FaAjQAq3AN95SYOyTIGTKziOlILsX8G1pgJjUVr3jejd%2BqTMGwEpO%2FuiEIQSv3cK%2BpJP9oAh2eggyoPtplfeKICnqJhBHePIyt2SyW261G9eol%2FH7A46M9B4iaYAgchV6kX%2BT9W9fZ0zXW1osf95ceJWwGkO%2BB6wq0mIVHcjnsyz0%2Fu9EDu3MxDiaHI1ZjNonwN0JIQd%2BpOO0zUuTpM%2FvcGI0tAo80HM4zZTYgt0btZGY%2BGo0DX2j8AtFfKFDwhZCQTgLG6VRoHHm8o7LcAOMiuscg4ps0CGNtmcR35HKLjbdssDAD8py9ntobEgC2yYBdotyNBs4sANXfFufRk4Fgs7EGpItwHRFOWk70cpFUdpYdZ379eGv5RdYTCNsde25%2FUkao45Z89WgZpFYMPjN%2FlnHEx5G6EVyTpgUoYGPpHqPDYBs4U3wSrwbmFaXdRywNbCTEn1%2FaaSC%2FzppxWTgJlV9mRF3icQamFiJ9W9ZoK%2FV5j9O32l3A8XSWyhuhf9eYL7ppu4sOUhzC7Q2n5ojbVf%2BTiL0YZ9JiwvAaqhV1xJtt7lj907UC%2BmN6KFRMgi%2Bm1QQrxzkDvq0msa8ppE%2FOq%2BmryqwuttjN7a6AdkX022yvkwQAKNNcEW24Q9BvoSnhrrTDT39bCBjqkAfK9iktYM56kG7jeqNDTTKKqYoyflQiz9Vl0L5CPK67kbkJxnHiS1uPPPx0PG06QtJaKgV%2FgkipJ8V1mJ64HjCQm3xePRF%2FwtnFfq9WsvTA7XC3pHlw4rqtwRdcNkiU1HNriLjo4O%2FLxX3b1Uj5Rj4snE7RoMx6oBBeDcbiLmHgHo%2BAZGZD3%2BMs2Ixa1WpZWJJHTwryYdfpZPyeznFEo9DZa83Q5&X-Amz-Signature=51b394d5f20136949a498f053914d3d14798543e385c9c951f537e080cd0c315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XNSNRO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcjR%2BdO9inperTESY0c%2FMgmQWeg0t1ZZnR5IowERCbDgIhAM3mf%2F9CIULdalYdpQ8JwRZzcv3f3ymSe2lhTEcqIwWTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5vzhwcXfE5FaAjQAq3AN95SYOyTIGTKziOlILsX8G1pgJjUVr3jejd%2BqTMGwEpO%2FuiEIQSv3cK%2BpJP9oAh2eggyoPtplfeKICnqJhBHePIyt2SyW261G9eol%2FH7A46M9B4iaYAgchV6kX%2BT9W9fZ0zXW1osf95ceJWwGkO%2BB6wq0mIVHcjnsyz0%2Fu9EDu3MxDiaHI1ZjNonwN0JIQd%2BpOO0zUuTpM%2FvcGI0tAo80HM4zZTYgt0btZGY%2BGo0DX2j8AtFfKFDwhZCQTgLG6VRoHHm8o7LcAOMiuscg4ps0CGNtmcR35HKLjbdssDAD8py9ntobEgC2yYBdotyNBs4sANXfFufRk4Fgs7EGpItwHRFOWk70cpFUdpYdZ379eGv5RdYTCNsde25%2FUkao45Z89WgZpFYMPjN%2FlnHEx5G6EVyTpgUoYGPpHqPDYBs4U3wSrwbmFaXdRywNbCTEn1%2FaaSC%2FzppxWTgJlV9mRF3icQamFiJ9W9ZoK%2FV5j9O32l3A8XSWyhuhf9eYL7ppu4sOUhzC7Q2n5ojbVf%2BTiL0YZ9JiwvAaqhV1xJtt7lj907UC%2BmN6KFRMgi%2Bm1QQrxzkDvq0msa8ppE%2FOq%2BmryqwuttjN7a6AdkX022yvkwQAKNNcEW24Q9BvoSnhrrTDT39bCBjqkAfK9iktYM56kG7jeqNDTTKKqYoyflQiz9Vl0L5CPK67kbkJxnHiS1uPPPx0PG06QtJaKgV%2FgkipJ8V1mJ64HjCQm3xePRF%2FwtnFfq9WsvTA7XC3pHlw4rqtwRdcNkiU1HNriLjo4O%2FLxX3b1Uj5Rj4snE7RoMx6oBBeDcbiLmHgHo%2BAZGZD3%2BMs2Ixa1WpZWJJHTwryYdfpZPyeznFEo9DZa83Q5&X-Amz-Signature=934f3a6508392e32d33bfc8e3044b710c4874cf8d4a2a51792bd253c3bfd7539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
