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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4GCXLQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65jFwG0CN4lSlIMyC3ZMEaXEtRJMB17wy78R6e4FSVwIhAIrYUoVQSCnnChdBKCd1A5imxwVCrZP7%2F7qqoV85%2BI5lKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBLmM4gCYtZDbnFU0q3AOpQoXxBJJ4ugaWGl3rewyZ8L3XETxhp66hzuTC3O4ljg9UGTpoCdS07%2FaBqZbaVxa0AdPs2LznFLYJ0v3z0A5sH%2BCCWtqVXe2RbIcwxilNq%2Fs4gTS0szoDfHHI4DHFmn7MPzy75gxwM4njgTXBJ%2FcNOQawS1LsdV8%2FfD0eaATl%2BDNt%2BdMqh8%2BQ5e1lSCJLKfsW%2FHbO4BefoEUs3vFaKrjumRonJiCFXBYul2cFn6f4yQ3bzvm%2BTRsfdSwDhSPOLTqL%2FG2RDCESsS3hIn%2FURqBHi31LZfvPL001YnSLyH2PKi1miYgdO303MWBLZSYx5qhTbo2ZIIUAQ%2F30xiWc4NiXIplxeW%2F2UQuCUQR6RQyqNPijPlI1%2FNunx4gYDdKGB0RSbluLq9sNSnBCi4hvfulJ0efopI1q6tZ50WfSqZTxL0rL%2F5yQaZjBXgWSOnpMCA6F5tx5PbWd7XsyurWDdiyJPcP7O9mPaBHlhas%2Bxnho2bkLEaG0DR%2FQxNr4ADhOw5TZgH8leB9lxJg8JfawDqc4li062NDGCVx5tGMfK%2BcY1pR1Fu4MgQTuP%2B11DUs59u%2F6tE3M010zUYVhoQrHfFAAsY%2FfWu8qmQ3YH8DuIyfPVd3bRiTCECrtWL8jMTD%2B9PvABjqkAZE4f3hXVdH9QkSS0mYzS7DumIHxVL6vudkgDA7NZ%2BM%2FocPcnZSejXwCxM4spTcD5zfOsv6mWtBT3aV1QgvCPwSRFuQKrVCJtJ5p9GhwjKYtnX9sTrwjdUh%2F0Z4Wgdi9x7djDuivMTpuBqObID33oGtF4BVPL7KOKkJlZq6UnDnQ408SP7RPL5%2FuLHTnnK0AM1cv3rEgqk5xgZOQ6%2Fhof2gWArZP&X-Amz-Signature=99cd19e5c2cc34cfae3bbffcb220fc4d9093d06973e72048ff54842ca42e0bff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4GCXLQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65jFwG0CN4lSlIMyC3ZMEaXEtRJMB17wy78R6e4FSVwIhAIrYUoVQSCnnChdBKCd1A5imxwVCrZP7%2F7qqoV85%2BI5lKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBLmM4gCYtZDbnFU0q3AOpQoXxBJJ4ugaWGl3rewyZ8L3XETxhp66hzuTC3O4ljg9UGTpoCdS07%2FaBqZbaVxa0AdPs2LznFLYJ0v3z0A5sH%2BCCWtqVXe2RbIcwxilNq%2Fs4gTS0szoDfHHI4DHFmn7MPzy75gxwM4njgTXBJ%2FcNOQawS1LsdV8%2FfD0eaATl%2BDNt%2BdMqh8%2BQ5e1lSCJLKfsW%2FHbO4BefoEUs3vFaKrjumRonJiCFXBYul2cFn6f4yQ3bzvm%2BTRsfdSwDhSPOLTqL%2FG2RDCESsS3hIn%2FURqBHi31LZfvPL001YnSLyH2PKi1miYgdO303MWBLZSYx5qhTbo2ZIIUAQ%2F30xiWc4NiXIplxeW%2F2UQuCUQR6RQyqNPijPlI1%2FNunx4gYDdKGB0RSbluLq9sNSnBCi4hvfulJ0efopI1q6tZ50WfSqZTxL0rL%2F5yQaZjBXgWSOnpMCA6F5tx5PbWd7XsyurWDdiyJPcP7O9mPaBHlhas%2Bxnho2bkLEaG0DR%2FQxNr4ADhOw5TZgH8leB9lxJg8JfawDqc4li062NDGCVx5tGMfK%2BcY1pR1Fu4MgQTuP%2B11DUs59u%2F6tE3M010zUYVhoQrHfFAAsY%2FfWu8qmQ3YH8DuIyfPVd3bRiTCECrtWL8jMTD%2B9PvABjqkAZE4f3hXVdH9QkSS0mYzS7DumIHxVL6vudkgDA7NZ%2BM%2FocPcnZSejXwCxM4spTcD5zfOsv6mWtBT3aV1QgvCPwSRFuQKrVCJtJ5p9GhwjKYtnX9sTrwjdUh%2F0Z4Wgdi9x7djDuivMTpuBqObID33oGtF4BVPL7KOKkJlZq6UnDnQ408SP7RPL5%2FuLHTnnK0AM1cv3rEgqk5xgZOQ6%2Fhof2gWArZP&X-Amz-Signature=17bb2ba857dd6e91c07b6390aa1babef3e9a64b27a319206b7e81b433aaeaf44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
