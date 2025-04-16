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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADQI2DD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeHu9ohD%2FoQpEMpn%2B4VeHhENOM%2B3ZphfZvNpyUouy8AiBpmjAa0CKcumsAEgJPu7UL7lPZYPOA7eX2Spug1Tbmjyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDV%2BFfPUMvDC0Hdu1KtwDDL92eW%2Fm8G5atAvzdd45YZtQ0wm7QMBqJC6uJqQrFc30P6O6gjl%2BLBl8WxGC5wKoAHwQZ8doOlPQ%2B0Emh%2FfSgAhRfumBLOC2RtgsSaXwpxNNTnm%2FL%2F9wdJA00Fw9FcNzXMzkntzU7zwVMhv5afK74qOAKJ8ngs2jxNi4z0OoV0O%2B5O5XMacuEdLnx8lxjSBIlTuNpd5ymWQY1duyS2jap9zuMc%2Bcoxj3esCXHO8uBXLgy%2F2H6L6mak3oUc98QZhqb4%2BV%2BbjWV3NWcCvAwVkbCxGjqUr7NUfYN%2FPYtdxibaerotdHxDBHY9lqZ45J8wmk7iUQWRidV5DZtPtDkKda3%2FwVl9oEAPkxkSRPRowoVPxWhMj6%2FEaTe%2FEF1j5MwDIB6tJZ7Qzr%2B5PuiB8vKG3JEuy2Um92wHGoX0FZPxsTSzdGjneQd0nKJGkBoBuFmTpsluj6%2BNXK%2BXuI7LNOmj5mUYFLAE3K3yuB5A7jJ1WQRlb5NXhecNI9kq%2BMuqMOrlPQz5u9%2BuXOYnQ7KMySSpIyzwT5h7IEWuzIbkhG%2Fw55Sn6bTtx%2BovFLFdtS7eY6VuCs7sQ1XJjhAxv6BB0XdwVblUjVth7pe9LWtSwlv9BPu069nHKgCavsxI23pAsw7%2Ff%2FvwY6pgFOYqlXO0KBoXeOtscE19Ta6ol8jo462nVOGI1nhBEMafbQHlZZD6lJIG6ZXqV70D1uruY1WP2X6QVTQbE2rcUKUf0XEi7W%2B0bZpa7qQFHTIpOS2T9pRoW%2BWsWkF55lF1GOyNMmJzbVUht5yKx65JsLxcVqB%2BEikTKNSI4inEajpmCleXIy0d2xA5io8ZKnejuTg%2FIcsYYSmCL2BVWptLInYmY%2F1kZ4&X-Amz-Signature=bb51640e989ad0a898396e0c2ddaedb2b0ff54100070606200982eb3845b77ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADQI2DD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeHu9ohD%2FoQpEMpn%2B4VeHhENOM%2B3ZphfZvNpyUouy8AiBpmjAa0CKcumsAEgJPu7UL7lPZYPOA7eX2Spug1Tbmjyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDV%2BFfPUMvDC0Hdu1KtwDDL92eW%2Fm8G5atAvzdd45YZtQ0wm7QMBqJC6uJqQrFc30P6O6gjl%2BLBl8WxGC5wKoAHwQZ8doOlPQ%2B0Emh%2FfSgAhRfumBLOC2RtgsSaXwpxNNTnm%2FL%2F9wdJA00Fw9FcNzXMzkntzU7zwVMhv5afK74qOAKJ8ngs2jxNi4z0OoV0O%2B5O5XMacuEdLnx8lxjSBIlTuNpd5ymWQY1duyS2jap9zuMc%2Bcoxj3esCXHO8uBXLgy%2F2H6L6mak3oUc98QZhqb4%2BV%2BbjWV3NWcCvAwVkbCxGjqUr7NUfYN%2FPYtdxibaerotdHxDBHY9lqZ45J8wmk7iUQWRidV5DZtPtDkKda3%2FwVl9oEAPkxkSRPRowoVPxWhMj6%2FEaTe%2FEF1j5MwDIB6tJZ7Qzr%2B5PuiB8vKG3JEuy2Um92wHGoX0FZPxsTSzdGjneQd0nKJGkBoBuFmTpsluj6%2BNXK%2BXuI7LNOmj5mUYFLAE3K3yuB5A7jJ1WQRlb5NXhecNI9kq%2BMuqMOrlPQz5u9%2BuXOYnQ7KMySSpIyzwT5h7IEWuzIbkhG%2Fw55Sn6bTtx%2BovFLFdtS7eY6VuCs7sQ1XJjhAxv6BB0XdwVblUjVth7pe9LWtSwlv9BPu069nHKgCavsxI23pAsw7%2Ff%2FvwY6pgFOYqlXO0KBoXeOtscE19Ta6ol8jo462nVOGI1nhBEMafbQHlZZD6lJIG6ZXqV70D1uruY1WP2X6QVTQbE2rcUKUf0XEi7W%2B0bZpa7qQFHTIpOS2T9pRoW%2BWsWkF55lF1GOyNMmJzbVUht5yKx65JsLxcVqB%2BEikTKNSI4inEajpmCleXIy0d2xA5io8ZKnejuTg%2FIcsYYSmCL2BVWptLInYmY%2F1kZ4&X-Amz-Signature=7a63f5995c66d2e341ff62d4d544b2d926e21d66b587b3f9e2d1199d160be8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
