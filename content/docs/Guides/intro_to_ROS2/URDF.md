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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VVHSDR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBZc8JUxZBdiU0lji7Nf2q2Uvq4%2BvUGQneshkaU94bCkAiB4nSiJ17v9CrIcgw4S9DlipgV2H0dxpU42Py028Rc%2FSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2y16pzJptvwH0Oh9KtwDadr39l6qDzKLX1QWepOXcaKhPTKVcbieaZbevVX2LsITDkDRov%2FAWacMPm%2FeKMkgpv3PKQB5%2FXOZg3jv0UTMZD74XTXOCXmefe%2FiR4heMfogiBAubsdCNRNCSOZt7zC%2Bd8Y%2Bog%2FUg60nKQoz1NjZOfU9m5rTsQuuQ19A7Y2OBXFDCltxiLBgfvawpSzd0%2BCC7Ffrkx%2FxELFhyPc0U0FMj0fem381g1ZhW7WE1WuWkfB8IH%2BRCmqNm4V0tSbfy2GPJ1lkWgF3wWkaPA5Vv2xeJ5wZCcnz856qrROGYqfWeYZBR7Rp%2BovMZ8VudvYua1MUsdrFKPlc4Dfm8yUHY2CAJPxFS1EbCrlZ0uvPQ%2BRAOrltl%2BAklIGxUfwvXKz%2BQ2n86ziL6d9x160m4ldtg%2FftfGacXYwO1IyhWdngOYsiy2U3AGzWkDrNXZs5q4JGB%2BH16%2Blk%2FlO%2FLZAFO79Fz6MdFevCNml6ANX7be9MtYEGZngRNWmfuKq203LjGFdq4ftsolG8QMAnKTs%2BgFlEhdYsHzJdgB5IZbPc5JsmfPKdEX1qydl7l4FoOLsnJUGqsrHHE9su1fZI4GaV5bSJo2pxDmsd7ldjb%2BrMFhhPRTeDnhxphLJnF%2B0foZZMVN4w%2Bc%2B%2BvgY6pgHZEJafY%2FWIj5uzcLzUrs%2BDlkBJl2dlvRWKXRBXDfzHf%2FgL5jdTIwNIWUN202NzlMu8KSPA0NrOM%2FX9eVHeqDDB4vUK5KTu48BtFiHVN8Av1EN2gUDGl9KeLvshQbEBMIS2rukTH%2BwKUw3ncXv1G6CNfXzXJ64tBj5yY0rgZU8YPCVIQ4mZsEm4ShAXnGADG453SNF98xZ5Ib2bcxZNM%2FlZtOhlMMxX&X-Amz-Signature=17f9e11d5a9cf187ba517ee5561f8208f633834424c1c54cf3c8256e05694dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VVHSDR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBZc8JUxZBdiU0lji7Nf2q2Uvq4%2BvUGQneshkaU94bCkAiB4nSiJ17v9CrIcgw4S9DlipgV2H0dxpU42Py028Rc%2FSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2y16pzJptvwH0Oh9KtwDadr39l6qDzKLX1QWepOXcaKhPTKVcbieaZbevVX2LsITDkDRov%2FAWacMPm%2FeKMkgpv3PKQB5%2FXOZg3jv0UTMZD74XTXOCXmefe%2FiR4heMfogiBAubsdCNRNCSOZt7zC%2Bd8Y%2Bog%2FUg60nKQoz1NjZOfU9m5rTsQuuQ19A7Y2OBXFDCltxiLBgfvawpSzd0%2BCC7Ffrkx%2FxELFhyPc0U0FMj0fem381g1ZhW7WE1WuWkfB8IH%2BRCmqNm4V0tSbfy2GPJ1lkWgF3wWkaPA5Vv2xeJ5wZCcnz856qrROGYqfWeYZBR7Rp%2BovMZ8VudvYua1MUsdrFKPlc4Dfm8yUHY2CAJPxFS1EbCrlZ0uvPQ%2BRAOrltl%2BAklIGxUfwvXKz%2BQ2n86ziL6d9x160m4ldtg%2FftfGacXYwO1IyhWdngOYsiy2U3AGzWkDrNXZs5q4JGB%2BH16%2Blk%2FlO%2FLZAFO79Fz6MdFevCNml6ANX7be9MtYEGZngRNWmfuKq203LjGFdq4ftsolG8QMAnKTs%2BgFlEhdYsHzJdgB5IZbPc5JsmfPKdEX1qydl7l4FoOLsnJUGqsrHHE9su1fZI4GaV5bSJo2pxDmsd7ldjb%2BrMFhhPRTeDnhxphLJnF%2B0foZZMVN4w%2Bc%2B%2BvgY6pgHZEJafY%2FWIj5uzcLzUrs%2BDlkBJl2dlvRWKXRBXDfzHf%2FgL5jdTIwNIWUN202NzlMu8KSPA0NrOM%2FX9eVHeqDDB4vUK5KTu48BtFiHVN8Av1EN2gUDGl9KeLvshQbEBMIS2rukTH%2BwKUw3ncXv1G6CNfXzXJ64tBj5yY0rgZU8YPCVIQ4mZsEm4ShAXnGADG453SNF98xZ5Ib2bcxZNM%2FlZtOhlMMxX&X-Amz-Signature=437618c72d7e645e51996417ddc4d71b8b94f94bfa63cc9f9c12ee96ddb2a48b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
