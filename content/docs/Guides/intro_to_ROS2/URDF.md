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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JD4JCDT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDz6t5n5ORHK%2BeG0s1V8uS1NIstTRkVxi76bOPC4sUteAIhAJpsbVSDCv321DF%2Bz0InmEHXqaE7vWvd35SLDdRsO04XKv8DCG0QABoMNjM3NDIzMTgzODA1Igzb0I7NcCa9wFsievEq3AP6NotqwmiYc57wgpYesDGFFocCFv0nSuZjM548nNNXcr6kPlW1%2Bj3DUoVrZGmlVJu4DsfYevam4%2FlVuveYnt7%2BK32ZhxS7u0XvA4r1lNQdVeAVD%2Fx1S0Iep4lwGcIwYsxvE98zUWzglN16sZqQIxsJLXxrYGWcj9TUoOX5X7Q797vY8DGbooKVyUyEOPslz1Y0IpJqiTYtZcmTWCMJJb1bRHS7a5yRd1CEDZJHpvcllWHXjzZ%2BJLx0EisFT7kI8tdxNICRuSmVZFRLaXPxp7OAbQlbChvLCo49DEAt5EKGHHJWFITx6Xl7r1thp7lkAvKmbdpE1h27QNH%2Bo9U1yEvJoeFYsw5i982YqretnJ%2FB3X4%2BPPez9ZuH%2BmqdzbgHOYT1snWlUhs4lZYiCR5%2BjgXhMwWcOtFALmfDXzh0yQiydNbE7JqnsJikX4Kze7ktmtUBDSSbiIq3eT6ZWN8yIaeZcgNi6ovKi0enDqB3zhgAaGwWDGyMGNgOaTkNNmpQlW4zRL1Wn8%2BRUVBJN2hMZFktVwB4jrI0yj7tQfVvFmi0%2BHnjV3qFAw6KpCJ7AmQEMg0%2BCX8Fu%2BMy4B3SdNA7Zu5SqxvgcOSsYtOBnjSqGVsjohrR7yDIC9ZQGxzCpzDW7eHDBjqkAQCJmERSeG2EyEomBwz4bF8igJCCMhvr88Zxn1rEoUiv39z9gb5OtG38%2FSWVd%2BMITWkKaaPXCgHnbkrR%2B%2B%2BbGYXLATf2LFdExeHcrYH%2FwW4RZ4saozviZTkcQJoX%2FqiXl9%2Ba8F3igDyQJiRES025uG74CReGnOf7HxOY7xqIKmijHYAiZgKyQZW1A85jP%2BdHnCpXphXXR979zdbl08jbl0mvcSq7&X-Amz-Signature=0fc27e3a7353bda395c39ba135ad6a40effbf0434f4a16c9ed526279dc07bb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JD4JCDT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDz6t5n5ORHK%2BeG0s1V8uS1NIstTRkVxi76bOPC4sUteAIhAJpsbVSDCv321DF%2Bz0InmEHXqaE7vWvd35SLDdRsO04XKv8DCG0QABoMNjM3NDIzMTgzODA1Igzb0I7NcCa9wFsievEq3AP6NotqwmiYc57wgpYesDGFFocCFv0nSuZjM548nNNXcr6kPlW1%2Bj3DUoVrZGmlVJu4DsfYevam4%2FlVuveYnt7%2BK32ZhxS7u0XvA4r1lNQdVeAVD%2Fx1S0Iep4lwGcIwYsxvE98zUWzglN16sZqQIxsJLXxrYGWcj9TUoOX5X7Q797vY8DGbooKVyUyEOPslz1Y0IpJqiTYtZcmTWCMJJb1bRHS7a5yRd1CEDZJHpvcllWHXjzZ%2BJLx0EisFT7kI8tdxNICRuSmVZFRLaXPxp7OAbQlbChvLCo49DEAt5EKGHHJWFITx6Xl7r1thp7lkAvKmbdpE1h27QNH%2Bo9U1yEvJoeFYsw5i982YqretnJ%2FB3X4%2BPPez9ZuH%2BmqdzbgHOYT1snWlUhs4lZYiCR5%2BjgXhMwWcOtFALmfDXzh0yQiydNbE7JqnsJikX4Kze7ktmtUBDSSbiIq3eT6ZWN8yIaeZcgNi6ovKi0enDqB3zhgAaGwWDGyMGNgOaTkNNmpQlW4zRL1Wn8%2BRUVBJN2hMZFktVwB4jrI0yj7tQfVvFmi0%2BHnjV3qFAw6KpCJ7AmQEMg0%2BCX8Fu%2BMy4B3SdNA7Zu5SqxvgcOSsYtOBnjSqGVsjohrR7yDIC9ZQGxzCpzDW7eHDBjqkAQCJmERSeG2EyEomBwz4bF8igJCCMhvr88Zxn1rEoUiv39z9gb5OtG38%2FSWVd%2BMITWkKaaPXCgHnbkrR%2B%2B%2BbGYXLATf2LFdExeHcrYH%2FwW4RZ4saozviZTkcQJoX%2FqiXl9%2Ba8F3igDyQJiRES025uG74CReGnOf7HxOY7xqIKmijHYAiZgKyQZW1A85jP%2BdHnCpXphXXR979zdbl08jbl0mvcSq7&X-Amz-Signature=70f2113c710b250492c28a87b12e176a261c51bf20e84c6f1b40badd01c69e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
