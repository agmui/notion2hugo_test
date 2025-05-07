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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZSERSY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqEoV5MOioUSz99GT%2BAGciIgAwfKN2jzs91RqD54Ki3AiA34iw9910vbB92nh%2BIxtMdQRdFtoSi0Ryl%2BofxftWrlyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM9ycf14xPVFv%2Fa%2B7PKtwDH1rrhifX0tgrOz3vYrpIL6VcYdi5X%2FyXFW6ZXK0Qvn54U%2BmX%2FJ1NtfAtm1WUSwO%2Bmxs8yToFJdw%2FJSgJKLOrFtGtpx%2FnWlUUkTy0%2Bhp0h0wgJbVskKRqsOREVkL93ur85%2BOHnofy2vXy5FnX%2BFwmT0vXeiUYoFvIfEJMjEotW53sgcPvrcpZWZAcGxclnh1%2BcteJ5wG1v0HnVUa9%2BFVTor24RwCwd2PDzRXOWFfsTMkGRP%2BxwvIHV3vBhVUyC1csMRCdQXcDZTrRPcWLRtlJcQhdJJ5Jyhw7BnB39q0Uiny1bcdZeQHnc6fMaJaCLn1%2FpeGKjlgzhkZ7Y29kxY6GkOWNw6EhCgUjf2YIf%2FgHGh7SjusF9SqQYp8JAx5czXPTWcTWvxbkWb%2Fl%2BeBwRRbT7mJ9rubUaI9OVymspK7hD7obylUZed3pqaCOUBeXfeTucxY6PyxbKLdg13S62aTzXPh660%2FLSI69fSOTFaJusmvQqxu1AbkGfEHWKRbc2KAc%2F8rUg3h6YmWdh5gGJRhvhhLXuKkSgTCEKfMs%2BFfi5Zn2I1cv5wcargzqodv%2BGailytss%2B6wQ2yJXMZEiJPKpOUa%2BAG2HsEEfvK7KUG17wSRTydyjg0aShBYDq0Ew1YjswAY6pgGQkRBWjBTOYm%2BM6u3NlwmSUAPhbHfOk0u6hlDI8vUrrmPpIdByDEULAAgB3yx4mK7BOwdZc7YywZR9zl4U14NGa1%2Fcm3sc5%2Fw2AI9EH%2BOZBPgoz%2Fq73OYLIbPKxSLaQdKcIuppbRhPDgvdvRS678y7WE7ITV3B0qq5oj59cuag2LxKgQnKHwwXqsaPb6DfhD%2FurYCGBvkbDp%2BbJcEhIKJ97%2BPqjHnQ&X-Amz-Signature=65bbafa24970eba965f8abea522f706738ef15e37412e16af0bd02b13b6d3e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZSERSY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqEoV5MOioUSz99GT%2BAGciIgAwfKN2jzs91RqD54Ki3AiA34iw9910vbB92nh%2BIxtMdQRdFtoSi0Ryl%2BofxftWrlyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM9ycf14xPVFv%2Fa%2B7PKtwDH1rrhifX0tgrOz3vYrpIL6VcYdi5X%2FyXFW6ZXK0Qvn54U%2BmX%2FJ1NtfAtm1WUSwO%2Bmxs8yToFJdw%2FJSgJKLOrFtGtpx%2FnWlUUkTy0%2Bhp0h0wgJbVskKRqsOREVkL93ur85%2BOHnofy2vXy5FnX%2BFwmT0vXeiUYoFvIfEJMjEotW53sgcPvrcpZWZAcGxclnh1%2BcteJ5wG1v0HnVUa9%2BFVTor24RwCwd2PDzRXOWFfsTMkGRP%2BxwvIHV3vBhVUyC1csMRCdQXcDZTrRPcWLRtlJcQhdJJ5Jyhw7BnB39q0Uiny1bcdZeQHnc6fMaJaCLn1%2FpeGKjlgzhkZ7Y29kxY6GkOWNw6EhCgUjf2YIf%2FgHGh7SjusF9SqQYp8JAx5czXPTWcTWvxbkWb%2Fl%2BeBwRRbT7mJ9rubUaI9OVymspK7hD7obylUZed3pqaCOUBeXfeTucxY6PyxbKLdg13S62aTzXPh660%2FLSI69fSOTFaJusmvQqxu1AbkGfEHWKRbc2KAc%2F8rUg3h6YmWdh5gGJRhvhhLXuKkSgTCEKfMs%2BFfi5Zn2I1cv5wcargzqodv%2BGailytss%2B6wQ2yJXMZEiJPKpOUa%2BAG2HsEEfvK7KUG17wSRTydyjg0aShBYDq0Ew1YjswAY6pgGQkRBWjBTOYm%2BM6u3NlwmSUAPhbHfOk0u6hlDI8vUrrmPpIdByDEULAAgB3yx4mK7BOwdZc7YywZR9zl4U14NGa1%2Fcm3sc5%2Fw2AI9EH%2BOZBPgoz%2Fq73OYLIbPKxSLaQdKcIuppbRhPDgvdvRS678y7WE7ITV3B0qq5oj59cuag2LxKgQnKHwwXqsaPb6DfhD%2FurYCGBvkbDp%2BbJcEhIKJ97%2BPqjHnQ&X-Amz-Signature=3dc1d7f24e80f351b0f332a9806e7efcb9edcdfa15575469e6de061e778f7ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
