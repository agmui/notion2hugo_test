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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU25QWDQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC1PCCDttfWcigNK5dIV6ZTxUXa0HTtJ0PHIGqr0Vz1cgIgFpzJB%2B8EkWUK2U3fJwI20B6AGOdTlqtSL4mcItvXxpsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwscBTDhN5V%2FlcrkSrcA47KmP%2FOVSBEwhHobAqdQ6Wm3sEoB5X%2FokozJRBTq1fACOlLFd%2FH7NRNdlZlemIVLxCSAp1z%2FdH5X2wOo5NYrUCEULgt1U1AVcu7ycnTcDH1f6%2BS2WpkvuJg7EKB6ChjdB4sVXSyUWr7B5U1upxWRH9meM3Zucx7SUZWJwEDK%2B6t%2BJ92Iwir2x7Ov7Ete0Jx2FtdXV2B8TCQC4opP%2FlyEzFSOxqSqPMNE7OWbiY86VTE6uNFvbDy1SYtJ3ZZAIZJnmJ11WA%2B4i924TaEbwD3SOJ7suANlhNzjnPcvOqMA5CttBQv11dQQJaqeqPfqkrpdIuE3S21npH0aUxYgN9XBGRBOCTOpuv2r24rR%2ByMdAF1eY0eJDDZ7klhIIcBmOXHDQPbbI4N8AjA5yYbpqkxmyJ6pHntGg5pSquX2Su5xMT7P5VKHI7HOZe1PZj51aeLY6QJy3eeXrn7%2F0cP%2FsXrexkicdg%2FGeFBQtTYrM2nyTSxLX8jT0flU%2FShVCcqRR%2FUgo3Nmm563xLX%2FDeAwDJlGlwNxzP3zDTq1mwd%2F6uegPY7Vj2DWNr3yZq5GgBLApXBvDHqSI498aG1oINyVyjXkANZHpQXC5Xio8tD28q%2FxXL3%2BFYPEYEdkXSuiGQfMKy66r8GOqUBQ%2BpvFPqbS1hWO6500rO%2BNlw62ASYkiZuDOlX5VNhht7Ik8jAZ7YEg0kDdHiM58VqbeEIwRN%2Fi2kmPsnZqdpy6nagU5Jm2tZhn4sfh8fkyKrE4q4EeTZJg1TmONQdTTuXHenPscSBzD21cfiORFBzIE4JXrTqkPeW3jJJQbYhYCtxVJ4T9dJPPS82SunH4nDO%2FVXx712Y01J3PHqS8uRc1Fp%2BZOQj&X-Amz-Signature=52c06117cb436b1a5086e0c275883d9502451f158b5998b04e39ce47f66abeec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU25QWDQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC1PCCDttfWcigNK5dIV6ZTxUXa0HTtJ0PHIGqr0Vz1cgIgFpzJB%2B8EkWUK2U3fJwI20B6AGOdTlqtSL4mcItvXxpsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwscBTDhN5V%2FlcrkSrcA47KmP%2FOVSBEwhHobAqdQ6Wm3sEoB5X%2FokozJRBTq1fACOlLFd%2FH7NRNdlZlemIVLxCSAp1z%2FdH5X2wOo5NYrUCEULgt1U1AVcu7ycnTcDH1f6%2BS2WpkvuJg7EKB6ChjdB4sVXSyUWr7B5U1upxWRH9meM3Zucx7SUZWJwEDK%2B6t%2BJ92Iwir2x7Ov7Ete0Jx2FtdXV2B8TCQC4opP%2FlyEzFSOxqSqPMNE7OWbiY86VTE6uNFvbDy1SYtJ3ZZAIZJnmJ11WA%2B4i924TaEbwD3SOJ7suANlhNzjnPcvOqMA5CttBQv11dQQJaqeqPfqkrpdIuE3S21npH0aUxYgN9XBGRBOCTOpuv2r24rR%2ByMdAF1eY0eJDDZ7klhIIcBmOXHDQPbbI4N8AjA5yYbpqkxmyJ6pHntGg5pSquX2Su5xMT7P5VKHI7HOZe1PZj51aeLY6QJy3eeXrn7%2F0cP%2FsXrexkicdg%2FGeFBQtTYrM2nyTSxLX8jT0flU%2FShVCcqRR%2FUgo3Nmm563xLX%2FDeAwDJlGlwNxzP3zDTq1mwd%2F6uegPY7Vj2DWNr3yZq5GgBLApXBvDHqSI498aG1oINyVyjXkANZHpQXC5Xio8tD28q%2FxXL3%2BFYPEYEdkXSuiGQfMKy66r8GOqUBQ%2BpvFPqbS1hWO6500rO%2BNlw62ASYkiZuDOlX5VNhht7Ik8jAZ7YEg0kDdHiM58VqbeEIwRN%2Fi2kmPsnZqdpy6nagU5Jm2tZhn4sfh8fkyKrE4q4EeTZJg1TmONQdTTuXHenPscSBzD21cfiORFBzIE4JXrTqkPeW3jJJQbYhYCtxVJ4T9dJPPS82SunH4nDO%2FVXx712Y01J3PHqS8uRc1Fp%2BZOQj&X-Amz-Signature=d9dd89ba72fb931546f0f57e17b48adbb0e6582cfa63f2340f30a5ec813a950a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
