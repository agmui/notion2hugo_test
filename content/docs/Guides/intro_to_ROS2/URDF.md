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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWYFKGV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFdGNqqi1DW4RACi789AoYscJ8PK6lGk582JiGX77vUVAiBvtU5f17eOOrLS0xcSMhurtzbXQbEzKEnsMrHWRZAMgSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuu83HvbY2iL5F0MLKtwD81Jp%2FyHL%2FuS%2F5PR5g4Bp%2FL0eViV4vnv66vedhIjMEpduJRvsSV8x4sZ%2FojrtS2AD%2Fv7t4VALTjoStwBl7VdT5kpW%2BksXAcsmoALVukFZxOADZaP8hxWXuiV0%2FquIq7NzpSxrG9Sa%2Bv0X4KqMclsI3kcQJCPsCX9I6fDcqlqjYLkUh1VjElO%2F5hD4Qa3i6kE2eYFk19gtBjJxYw7vFO3ECjbj%2FeY6NdHg1sbyVCeLJI8YAAl9579quF8r7x6LF8xZAbiYevHV9Q7j%2FczVL6m1A9aU3ZXBhAZAZmg%2BhfZyvifnDR0%2Fpy0h3vyyrQV%2BxVt%2BR9KqWlcoReb8JU%2BF0S7467Cek%2FI0AKQs2NUWXzYLNl14L6Xdh%2FzQbEyRYtoyyhp4mTOqAvQsC2Pwk678i55UwgZeywsZevRrTPyy7BFXSQEgw%2BB9DPLRjZ%2B6tddgTW1TOEDlzLtT%2BCSkYc7%2F1G%2FajoQPl6l5fxqKBONRDGnE6va2c%2F%2FFOs1yPfGSBjhIonSpl21wJK32Bfgy1ua2dnb5N6qp7lzju%2BlXslmFaC7COv3MiXMi60BDwjM0Tifti%2B1UZuhILPQA93EkecyHVe%2FeMLJMH8l8%2FSn7dxEnux0DGeXNIZ8oeSHiG8gnOMcw59f0wQY6pgHW3POhx9UFFaki0iwrPyYJ1my%2FLUG%2Fd3%2B2KSxykS3RWLj8P1UT74dC1LTfIh8u8dHxnQA9V8JTUyZQ50ZsTcS8SrjpKX1vQptaUU0R3skFqQo5trRf2EMl9HAlBKRo2EyWLrgxJWeLGdAv56wWXlcbAphHwJJfVo8x%2BXAhdOIh%2BOB3iY6%2BwUnd3QwovwPL34CwjOfIZ810fsqz2P3bsD%2Bws5yW2nXM&X-Amz-Signature=5bcacfb3e97125d37d0ab4430e828b453ccbacedd45801e4ba92752bb63a4038&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWYFKGV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFdGNqqi1DW4RACi789AoYscJ8PK6lGk582JiGX77vUVAiBvtU5f17eOOrLS0xcSMhurtzbXQbEzKEnsMrHWRZAMgSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuu83HvbY2iL5F0MLKtwD81Jp%2FyHL%2FuS%2F5PR5g4Bp%2FL0eViV4vnv66vedhIjMEpduJRvsSV8x4sZ%2FojrtS2AD%2Fv7t4VALTjoStwBl7VdT5kpW%2BksXAcsmoALVukFZxOADZaP8hxWXuiV0%2FquIq7NzpSxrG9Sa%2Bv0X4KqMclsI3kcQJCPsCX9I6fDcqlqjYLkUh1VjElO%2F5hD4Qa3i6kE2eYFk19gtBjJxYw7vFO3ECjbj%2FeY6NdHg1sbyVCeLJI8YAAl9579quF8r7x6LF8xZAbiYevHV9Q7j%2FczVL6m1A9aU3ZXBhAZAZmg%2BhfZyvifnDR0%2Fpy0h3vyyrQV%2BxVt%2BR9KqWlcoReb8JU%2BF0S7467Cek%2FI0AKQs2NUWXzYLNl14L6Xdh%2FzQbEyRYtoyyhp4mTOqAvQsC2Pwk678i55UwgZeywsZevRrTPyy7BFXSQEgw%2BB9DPLRjZ%2B6tddgTW1TOEDlzLtT%2BCSkYc7%2F1G%2FajoQPl6l5fxqKBONRDGnE6va2c%2F%2FFOs1yPfGSBjhIonSpl21wJK32Bfgy1ua2dnb5N6qp7lzju%2BlXslmFaC7COv3MiXMi60BDwjM0Tifti%2B1UZuhILPQA93EkecyHVe%2FeMLJMH8l8%2FSn7dxEnux0DGeXNIZ8oeSHiG8gnOMcw59f0wQY6pgHW3POhx9UFFaki0iwrPyYJ1my%2FLUG%2Fd3%2B2KSxykS3RWLj8P1UT74dC1LTfIh8u8dHxnQA9V8JTUyZQ50ZsTcS8SrjpKX1vQptaUU0R3skFqQo5trRf2EMl9HAlBKRo2EyWLrgxJWeLGdAv56wWXlcbAphHwJJfVo8x%2BXAhdOIh%2BOB3iY6%2BwUnd3QwovwPL34CwjOfIZ810fsqz2P3bsD%2Bws5yW2nXM&X-Amz-Signature=7818ba21cb50d203787c0c8604ea269bdcb97b1fae57a6c78311802956a22dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
