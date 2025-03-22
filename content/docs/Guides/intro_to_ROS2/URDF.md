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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMYYU4L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDsMhUvSEGS62aXqMuiIcz%2F88Kf%2FAkOiaVcaTGMIIA1iwIgaq0aqksK63d7TwIkGwhPM%2BKu486eZPV%2F7vnv4AZazkIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJQJtUz7y2HVMcXqircAw8Dwf5qi5jY0KQ%2B64cmnj%2Fi0ADEdWhDqqsSB1bNs%2BLqL30btDOD2yrLTdD1DbJNNa1FRFgV64K%2BllMP0QN3UQEniDghHGM%2Bs7toDAAhQ78gRSty9Mn9R8bwfcAFnw3h7v3WR%2F04f52LjQ1lf1tJ8hfSJGmsXrXij5jEeotsyIbUqMbcS1ntkdpsi7JpmJ3sQsiO8UnjkRrIIOyLr0RavNxab0%2BpqA4MF%2BFgiOFgWI6r6uPdKDaWPBsVtL5maRhuA6ZizjkevqTC4R2ofl7t5W5jLsqB%2BLKshXfNXrRJTShRLwFkZtIvdOxo9vYgzAu7SorJX1rFi0OPnmKPnXH9QwF%2BAfnBE3XPBgSmvWZcubNUTQIsjdWHqucX1ruCzJBnJVCvWyn70Tkqi3DAV17Slkja67o25JA1oHtsrBZ5wsAf0a3GQvQRZM6BQO1JOMh%2FlKO%2F1BlYUubv64fKGLvoXHmydYCQei39aFSlBccJPHNt1%2B4%2FXaKLNZjnBJFnFyXj29d%2FsY%2BVUOuL3JU%2BaatyemghiWrQKVbG4O8No0djoIUkkK1h9I4PXRndZcBLIfd7z6Fo7IwKT60r4sKc%2FOgd9%2FdQK7BsLt%2B%2B4PwBF0yZvFjbNLyLNAfvw1uu6otgMMmK%2Bb4GOqUBr5J0Qkji5blnRyZlyx94y%2Bv7ewCc%2BnHPyxkeHMMftRoMQBfMxUMxL8UsJAgQtyIDRo%2B6ulwZpLbcKdhh5NOPAaBgpzz0fv1WZJET4wRsnYJaDUAYEDyOpns%2FGCAkuQGk0H2zQ%2FbKY28VaJ1QraGRWDl6LI8DaDPBnbTXuyn3qg2rtpfMNAMz3nY3R5K0c5vhmRin%2BTbW1uw0MzTIIfywvtSLzNUc&X-Amz-Signature=d280db0d78700e7d72b746d56c4f2903b09261d55c569520f3dabeb0ab85865a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMYYU4L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDsMhUvSEGS62aXqMuiIcz%2F88Kf%2FAkOiaVcaTGMIIA1iwIgaq0aqksK63d7TwIkGwhPM%2BKu486eZPV%2F7vnv4AZazkIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJQJtUz7y2HVMcXqircAw8Dwf5qi5jY0KQ%2B64cmnj%2Fi0ADEdWhDqqsSB1bNs%2BLqL30btDOD2yrLTdD1DbJNNa1FRFgV64K%2BllMP0QN3UQEniDghHGM%2Bs7toDAAhQ78gRSty9Mn9R8bwfcAFnw3h7v3WR%2F04f52LjQ1lf1tJ8hfSJGmsXrXij5jEeotsyIbUqMbcS1ntkdpsi7JpmJ3sQsiO8UnjkRrIIOyLr0RavNxab0%2BpqA4MF%2BFgiOFgWI6r6uPdKDaWPBsVtL5maRhuA6ZizjkevqTC4R2ofl7t5W5jLsqB%2BLKshXfNXrRJTShRLwFkZtIvdOxo9vYgzAu7SorJX1rFi0OPnmKPnXH9QwF%2BAfnBE3XPBgSmvWZcubNUTQIsjdWHqucX1ruCzJBnJVCvWyn70Tkqi3DAV17Slkja67o25JA1oHtsrBZ5wsAf0a3GQvQRZM6BQO1JOMh%2FlKO%2F1BlYUubv64fKGLvoXHmydYCQei39aFSlBccJPHNt1%2B4%2FXaKLNZjnBJFnFyXj29d%2FsY%2BVUOuL3JU%2BaatyemghiWrQKVbG4O8No0djoIUkkK1h9I4PXRndZcBLIfd7z6Fo7IwKT60r4sKc%2FOgd9%2FdQK7BsLt%2B%2B4PwBF0yZvFjbNLyLNAfvw1uu6otgMMmK%2Bb4GOqUBr5J0Qkji5blnRyZlyx94y%2Bv7ewCc%2BnHPyxkeHMMftRoMQBfMxUMxL8UsJAgQtyIDRo%2B6ulwZpLbcKdhh5NOPAaBgpzz0fv1WZJET4wRsnYJaDUAYEDyOpns%2FGCAkuQGk0H2zQ%2FbKY28VaJ1QraGRWDl6LI8DaDPBnbTXuyn3qg2rtpfMNAMz3nY3R5K0c5vhmRin%2BTbW1uw0MzTIIfywvtSLzNUc&X-Amz-Signature=6fe53c454390af3e4fe2b0a41145c999e3cf5f06da532096a99e0a99067ac7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
