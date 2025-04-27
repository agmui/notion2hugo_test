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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHGGDKS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoG2jl1tsJEXtw%2FOzICfYWmeFVir%2BcbrahmGHf1PNARAiEArcoJPs6pDwMLxvjrmdS%2FyyHlKHL2NyG%2B6CyaKASyC9cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNcqLYNlXig89qAJSircA%2BG6O9e2GlA4PMklUQCr5%2B%2BSZPeXMJJqyRdlZewY56Y72FBDXC7PxWuNEc0%2BgEANaIek3bkqIz4RuiVbajyLzhdKo2rbAtsOuPqi7piAFr9c4Ub6r8ykN83Sp%2FR9fImy2yJcxVnyLiNd61VqJ64Y9TfZDhg4Tl8O5GT2Pf%2BkDk97NI1f09VSHUWDCYgTF8ctXGx%2FOY8x%2FTv%2Bk%2B3cO6Wp99pCPI%2FydwhNibOCj5rc77TZlWfLptPjQZ81f%2B4QJNvT6CIWdTa3W7l%2B4tUW6O8qoiYL1MonueDyEQKDM9MAkdGbtKcFLPM8xHksSjmkesTbumiQuhMWcCRnfANKrHcYP%2F8CvERlvexQEMUtddT4gX0N0wlwO9xzce8i5idxfN%2BVjBW7i5A0kfKlWHtm%2F8POmE4T1sQs3xo9WZa3OeTVxVT26fYd87p4qDcy27U%2FdyGTa43UEyUqB8%2BBYs%2BqjcEc3DIgZ%2BAmvk2l3%2Fa%2FLZ8tUrN2%2Fghk7%2FM%2FoYbPLKSQfgAIiaF2S0YpakMsXGaTiYGT4wo8%2Bkathvtm8nOJefqZSq%2BGt4M2lQiwa4BCwh53VVmcGNeRhgWPfVH4y0gR6RP3rYXfLnBbuY4H6MfHWBsUWPeaJl8wSkZYvQEbRGz0MLrsuMAGOqUBkv1bIHvRZanKKBNm0KhfcHXiA2uWal9MVZVH0PphIzZuBOFRGy%2BctkZGFaR78k72liSlAlHC6XzO6Ma5NfGi4CSyrGc0eKsEydpwEcYiKPAGhq3s4ycMCkhF7iLTjzW0%2FrspoHoBMKXgfy5oLlfq%2BL%2B%2BbojmWHau1tjOriSFI%2BjbpWSpf6BtoQvuxrArWilCtdbJB5UogGV2phaTUWw7Sw9%2F0PFi&X-Amz-Signature=d5916636f110706415620d809f5cd517a4e36aecb188be2b3c341ffc582e0845&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHGGDKS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoG2jl1tsJEXtw%2FOzICfYWmeFVir%2BcbrahmGHf1PNARAiEArcoJPs6pDwMLxvjrmdS%2FyyHlKHL2NyG%2B6CyaKASyC9cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNcqLYNlXig89qAJSircA%2BG6O9e2GlA4PMklUQCr5%2B%2BSZPeXMJJqyRdlZewY56Y72FBDXC7PxWuNEc0%2BgEANaIek3bkqIz4RuiVbajyLzhdKo2rbAtsOuPqi7piAFr9c4Ub6r8ykN83Sp%2FR9fImy2yJcxVnyLiNd61VqJ64Y9TfZDhg4Tl8O5GT2Pf%2BkDk97NI1f09VSHUWDCYgTF8ctXGx%2FOY8x%2FTv%2Bk%2B3cO6Wp99pCPI%2FydwhNibOCj5rc77TZlWfLptPjQZ81f%2B4QJNvT6CIWdTa3W7l%2B4tUW6O8qoiYL1MonueDyEQKDM9MAkdGbtKcFLPM8xHksSjmkesTbumiQuhMWcCRnfANKrHcYP%2F8CvERlvexQEMUtddT4gX0N0wlwO9xzce8i5idxfN%2BVjBW7i5A0kfKlWHtm%2F8POmE4T1sQs3xo9WZa3OeTVxVT26fYd87p4qDcy27U%2FdyGTa43UEyUqB8%2BBYs%2BqjcEc3DIgZ%2BAmvk2l3%2Fa%2FLZ8tUrN2%2Fghk7%2FM%2FoYbPLKSQfgAIiaF2S0YpakMsXGaTiYGT4wo8%2Bkathvtm8nOJefqZSq%2BGt4M2lQiwa4BCwh53VVmcGNeRhgWPfVH4y0gR6RP3rYXfLnBbuY4H6MfHWBsUWPeaJl8wSkZYvQEbRGz0MLrsuMAGOqUBkv1bIHvRZanKKBNm0KhfcHXiA2uWal9MVZVH0PphIzZuBOFRGy%2BctkZGFaR78k72liSlAlHC6XzO6Ma5NfGi4CSyrGc0eKsEydpwEcYiKPAGhq3s4ycMCkhF7iLTjzW0%2FrspoHoBMKXgfy5oLlfq%2BL%2B%2BbojmWHau1tjOriSFI%2BjbpWSpf6BtoQvuxrArWilCtdbJB5UogGV2phaTUWw7Sw9%2F0PFi&X-Amz-Signature=259947ace81022aa1dc1ddf6bf88a1428ea4b7dd65d36f4124cf3edbf3255804&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
