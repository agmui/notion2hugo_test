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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667XWOJSF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwUmElfV7rxTrpE%2Fufez9KUQnn2V8RoMOTGkhcURlJQgIgdR%2BxLAMZm%2Fb0SduCvpBx46fSG9oPh2gdBF4cPgUA7woq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDG9JVohcL8AoeCRR6CrcA%2BKTJbAusO16MycSb1mSumUehLNn4EMQrrdqpgxo6ubZi%2FQnCXDjHdUjPjovM5vM7zV4boxK%2BRlzNDp7QhdIRJSdDfNDKSgZDKcgxeqFXL89uEHDOrO%2F%2B3YoZRs6Ib3YkOG3cqAV%2F9zTIbUNIVn6RcGDhiaAETHKbpd9ofvbk%2Fi8Ikth9xSzb3tXwQ0aonzDf8F%2F%2F4LQ5AOeiuGRPcKG2UTu8qRgyyRl7I%2Fd7QgWOmQbcR5fMhUcIez2OypUBNYj6FuQ%2BUBgmM%2Fz4Oh9uSYFwcqy6V3xfet577tbmlsbpeEi7ZAGQ6ZqhPFSJE4FX5c8Ssvi%2F1pmLdtOBkrmbTRtwR0uQbATJfI9IeisUSJSigNKXelcytETz7d0klinGUoIdc4imriqeqmvy3NKbLjYZpNzvDKhg3iKrgeZIJIu0AylKTGvKsVXgmdUdbr4hi%2FoZrX3czVUNJRgG4wHIerVGktiC8a%2BxBpBuzn0c41UpUsh9y0h7PBa99RJvdv6APmSCnvSPAi3GOjDpriGX5LqFWZ0TBWIHZmXX0Zpr7SBLdcp%2BHy25S99ScTDrcxzvPKi0slNrwVlpzwH8NltmrX3Ue4OwvqyHwPcojxA8u5l%2F7m23a0e1sji9mJ7yIa%2FMJfdlr8GOqUBnj74E%2BKV1sGZOtxG%2BjMnDvex1VGR6ivPQuuP92wsPyFB%2F%2BDIXzJ3djiiUqUIo9O1bysjx6ay%2BdI8%2FA5AtNzKjN32fTZ3922baRXvrlMpalcvCDzY7WGHrNwfSLJnukhvSdDxiYnHkYlWXbhE9mr2Ut7dnsZAUAZRtvFHi%2BcWmCNakfPV6ip%2BhgAslIhoMJE3MaGlCWLj0It1x6lPwSepCmkyrUM4&X-Amz-Signature=a9a4503e148f7074cd50ae5762e61f083d3e56e76472d0ac58e58cd26f2de5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667XWOJSF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwUmElfV7rxTrpE%2Fufez9KUQnn2V8RoMOTGkhcURlJQgIgdR%2BxLAMZm%2Fb0SduCvpBx46fSG9oPh2gdBF4cPgUA7woq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDG9JVohcL8AoeCRR6CrcA%2BKTJbAusO16MycSb1mSumUehLNn4EMQrrdqpgxo6ubZi%2FQnCXDjHdUjPjovM5vM7zV4boxK%2BRlzNDp7QhdIRJSdDfNDKSgZDKcgxeqFXL89uEHDOrO%2F%2B3YoZRs6Ib3YkOG3cqAV%2F9zTIbUNIVn6RcGDhiaAETHKbpd9ofvbk%2Fi8Ikth9xSzb3tXwQ0aonzDf8F%2F%2F4LQ5AOeiuGRPcKG2UTu8qRgyyRl7I%2Fd7QgWOmQbcR5fMhUcIez2OypUBNYj6FuQ%2BUBgmM%2Fz4Oh9uSYFwcqy6V3xfet577tbmlsbpeEi7ZAGQ6ZqhPFSJE4FX5c8Ssvi%2F1pmLdtOBkrmbTRtwR0uQbATJfI9IeisUSJSigNKXelcytETz7d0klinGUoIdc4imriqeqmvy3NKbLjYZpNzvDKhg3iKrgeZIJIu0AylKTGvKsVXgmdUdbr4hi%2FoZrX3czVUNJRgG4wHIerVGktiC8a%2BxBpBuzn0c41UpUsh9y0h7PBa99RJvdv6APmSCnvSPAi3GOjDpriGX5LqFWZ0TBWIHZmXX0Zpr7SBLdcp%2BHy25S99ScTDrcxzvPKi0slNrwVlpzwH8NltmrX3Ue4OwvqyHwPcojxA8u5l%2F7m23a0e1sji9mJ7yIa%2FMJfdlr8GOqUBnj74E%2BKV1sGZOtxG%2BjMnDvex1VGR6ivPQuuP92wsPyFB%2F%2BDIXzJ3djiiUqUIo9O1bysjx6ay%2BdI8%2FA5AtNzKjN32fTZ3922baRXvrlMpalcvCDzY7WGHrNwfSLJnukhvSdDxiYnHkYlWXbhE9mr2Ut7dnsZAUAZRtvFHi%2BcWmCNakfPV6ip%2BhgAslIhoMJE3MaGlCWLj0It1x6lPwSepCmkyrUM4&X-Amz-Signature=86f51b6d9daa84b5f1fc96366679997cdfb60540fef17616ffeac728265364d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
