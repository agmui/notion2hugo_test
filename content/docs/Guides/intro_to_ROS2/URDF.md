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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVTGU2G%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbdMWEKbKTcCnH2x7VvH%2F8uLiJKbni3apCatsjXdmuPAiBVG4NCsPMDOq9%2BhebtWp6%2BiUHtl%2FQ3iZHDL1wShJ8%2B5Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPtXAN9Q2LIYJJvMFKtwD7nJVBx1TQvYF8OkXOQIMm7M4E6Ttmcan6DfLMCPpXWZPGAcNGHQpnjej5%2FNPM9ozJ1mm3koB2l44PI85I3UAyDTcJgKsPcpjC%2BKoly5uO%2FH5YIN9BaIk04%2B26pv%2Fs9iwnPjZGW9e5tco8%2FQ0Lil7eejuUxg8b8cBZIDBYHdRulP7mhDl5cQnh5dfyuZPQXq1YGFuxnYqISuDpODNbuYp0sGZpTLG3Gt8wm2vZAKEBQ%2BJ5Bo27CiSYD6I3AWd6WZzDaaNsZJCM3%2BLZ879y0wILX5I8VyS2W7P8ApIiSMT2BbipjJGjW0j6dcuNKcoBatgp0lhHeL62ae%2BoAoyWRnJT2ug7YZkvIKMvsFsSFZ268oGiT4Pdj4FMy3YY72HHTsWl29%2FumshIwB0mQpD2PcjsIVFhLjP45Fb8nhAQ7RTl2XttiCUOPYMq6P04ha2%2BDOo0lSzvPfDPLR%2FNiJDDkNSEwCVOpUo5f3Nt%2FaELGwOH1UfQnqaEATR7AVHS5S6hnzGTIxL6VkviAfoAGSKmMMPmNOjLwZYggQ8d7VRU73lmtARy5gYmHTjOcVGP20fIY1uOa0vBG4luudAIoW%2FApx%2F3kRsf9P25Ik63sr9XKFnJEDVoj%2BdJfHOfz9jd2ow3Yr9vwY6pgEqrYZ669hm7OcrJc25g6ucJ5W2eqnrJTckrdYPDoJ1tsMLbWSZmYg2LxLiZRrZyX9KJ2BYLESr1q4zMkFvjs5pcRtZz0XRF%2FL1FQ8sGlI%2BuZxKMUc3yovXb8pTy6%2FdOoaz9RxcvQyYwssytkRvpWBMCHGfYbZ3XCqZbJ7gxvF40WAzjN9a5vQlNbgAJm3UoVg6ubaRoNf92iAXDu9ryNIFA9gQLeIN&X-Amz-Signature=023462119b678b66f7a00a80f8a2110e943d421304733f039d2b6f268daa17a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVTGU2G%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbdMWEKbKTcCnH2x7VvH%2F8uLiJKbni3apCatsjXdmuPAiBVG4NCsPMDOq9%2BhebtWp6%2BiUHtl%2FQ3iZHDL1wShJ8%2B5Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPtXAN9Q2LIYJJvMFKtwD7nJVBx1TQvYF8OkXOQIMm7M4E6Ttmcan6DfLMCPpXWZPGAcNGHQpnjej5%2FNPM9ozJ1mm3koB2l44PI85I3UAyDTcJgKsPcpjC%2BKoly5uO%2FH5YIN9BaIk04%2B26pv%2Fs9iwnPjZGW9e5tco8%2FQ0Lil7eejuUxg8b8cBZIDBYHdRulP7mhDl5cQnh5dfyuZPQXq1YGFuxnYqISuDpODNbuYp0sGZpTLG3Gt8wm2vZAKEBQ%2BJ5Bo27CiSYD6I3AWd6WZzDaaNsZJCM3%2BLZ879y0wILX5I8VyS2W7P8ApIiSMT2BbipjJGjW0j6dcuNKcoBatgp0lhHeL62ae%2BoAoyWRnJT2ug7YZkvIKMvsFsSFZ268oGiT4Pdj4FMy3YY72HHTsWl29%2FumshIwB0mQpD2PcjsIVFhLjP45Fb8nhAQ7RTl2XttiCUOPYMq6P04ha2%2BDOo0lSzvPfDPLR%2FNiJDDkNSEwCVOpUo5f3Nt%2FaELGwOH1UfQnqaEATR7AVHS5S6hnzGTIxL6VkviAfoAGSKmMMPmNOjLwZYggQ8d7VRU73lmtARy5gYmHTjOcVGP20fIY1uOa0vBG4luudAIoW%2FApx%2F3kRsf9P25Ik63sr9XKFnJEDVoj%2BdJfHOfz9jd2ow3Yr9vwY6pgEqrYZ669hm7OcrJc25g6ucJ5W2eqnrJTckrdYPDoJ1tsMLbWSZmYg2LxLiZRrZyX9KJ2BYLESr1q4zMkFvjs5pcRtZz0XRF%2FL1FQ8sGlI%2BuZxKMUc3yovXb8pTy6%2FdOoaz9RxcvQyYwssytkRvpWBMCHGfYbZ3XCqZbJ7gxvF40WAzjN9a5vQlNbgAJm3UoVg6ubaRoNf92iAXDu9ryNIFA9gQLeIN&X-Amz-Signature=06107fe74df5efff9eabcad62a3c7896a6402576a9e4f00e79c7d1e4927e7009&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
