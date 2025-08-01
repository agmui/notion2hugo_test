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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEPVQXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9TK7boMlvkkmFzq3HHN7wyYl4TsCeHH6Qa%2FOTqJ2%2FMAiAMfn%2B5OYTh%2Fi%2FzYIP9MOW4DjKDgR2CYaHoYSsgVyVXGSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKe9i4SuO6OjkgAHKtwDfrliKejkhyWHewX1hcdWAH4VPomVE6sOEjUqZ17827vSh%2B1wiVW26JOoaHuXabyRqTWJSYZmoiLKn6xxgcO5ps045SgempM751T0KgpDFfqAFODEXZXzM7BEpZDE8YqCWxMb2BzWMBe2%2BJasx6q2KdR6qWcvztAK43QFyapaEWMKoYFcwQUda60CMjVoKcHyk6BE3Gt04HtmzqueaBFNXcvIpJpQW%2BF6ZJmrYSWOeIqSejhl97nxpxLmSr%2F2So7NtizsZPld4KaOU%2F37xSUSEBFqyp26chmXuQPcb7qElg9VaWsXSB%2Bjgvx%2FL8NUHcL%2Becanrt%2BlyRAFgzmpIuIv%2FPIPSAql9VHH1rO6NEhT3QZl3YpWz18EzyTm%2FlDF%2Bx1MyvMomQjK02NJjGs2h0aWPvfz5bg1tZaekdLVWrpdwvvHzOvfaQZlo%2B5wFfaEIFft2lA4Z9G%2BQgSml1s7QtsVnfhowDBIIM%2BvatX0o00HHM7jIHoPROl%2BP5gNgCBY1LK0NlUzqsw%2FQ4vbhrWni4UR3%2BzrRkxv1ZLtZZ5Ys9rYdBMBGKSYZuRy8lawfd3TNEZzFFdHVVFaw9t5rYX4%2F%2Bwgcqf7g0%2FcBDgfl%2FT4oaelB1TknEpRW52%2BOsli%2B40w9O20xAY6pgFEfLdGCfmKc588lPfIu0fJyPbjp0ua2iZJH%2B%2BLRGmVxK15zd2nVOCt3nICK9mGqBGlV8WbZyNUl1oGrF1cQf0MMs2ePpwmtGBFZ%2BEQokJWimXTN1qGtQ9lnl0MhM6zu2ZyaQA0CPAxPF7ody6XmtAjGKxrfNF3JaVs1FcVFD2N5Q5kKM%2BMxk8kumhw3MbmJzlT%2FA2Y%2F6eIloMRxetQG8FYiLJ2eBJz&X-Amz-Signature=c451a90d711e3b2621dcf6bded8501677648375a2824e09cf2d8827f968acaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEPVQXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9TK7boMlvkkmFzq3HHN7wyYl4TsCeHH6Qa%2FOTqJ2%2FMAiAMfn%2B5OYTh%2Fi%2FzYIP9MOW4DjKDgR2CYaHoYSsgVyVXGSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKe9i4SuO6OjkgAHKtwDfrliKejkhyWHewX1hcdWAH4VPomVE6sOEjUqZ17827vSh%2B1wiVW26JOoaHuXabyRqTWJSYZmoiLKn6xxgcO5ps045SgempM751T0KgpDFfqAFODEXZXzM7BEpZDE8YqCWxMb2BzWMBe2%2BJasx6q2KdR6qWcvztAK43QFyapaEWMKoYFcwQUda60CMjVoKcHyk6BE3Gt04HtmzqueaBFNXcvIpJpQW%2BF6ZJmrYSWOeIqSejhl97nxpxLmSr%2F2So7NtizsZPld4KaOU%2F37xSUSEBFqyp26chmXuQPcb7qElg9VaWsXSB%2Bjgvx%2FL8NUHcL%2Becanrt%2BlyRAFgzmpIuIv%2FPIPSAql9VHH1rO6NEhT3QZl3YpWz18EzyTm%2FlDF%2Bx1MyvMomQjK02NJjGs2h0aWPvfz5bg1tZaekdLVWrpdwvvHzOvfaQZlo%2B5wFfaEIFft2lA4Z9G%2BQgSml1s7QtsVnfhowDBIIM%2BvatX0o00HHM7jIHoPROl%2BP5gNgCBY1LK0NlUzqsw%2FQ4vbhrWni4UR3%2BzrRkxv1ZLtZZ5Ys9rYdBMBGKSYZuRy8lawfd3TNEZzFFdHVVFaw9t5rYX4%2F%2Bwgcqf7g0%2FcBDgfl%2FT4oaelB1TknEpRW52%2BOsli%2B40w9O20xAY6pgFEfLdGCfmKc588lPfIu0fJyPbjp0ua2iZJH%2B%2BLRGmVxK15zd2nVOCt3nICK9mGqBGlV8WbZyNUl1oGrF1cQf0MMs2ePpwmtGBFZ%2BEQokJWimXTN1qGtQ9lnl0MhM6zu2ZyaQA0CPAxPF7ody6XmtAjGKxrfNF3JaVs1FcVFD2N5Q5kKM%2BMxk8kumhw3MbmJzlT%2FA2Y%2F6eIloMRxetQG8FYiLJ2eBJz&X-Amz-Signature=279f004ea3791935bc6e1bd6f8c78806851d41a62132d740bb267855fd788d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
