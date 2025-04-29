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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VX7NLW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDERD%2Bq9%2B1TYPH4TPwZggw%2FEIQk8C2FcvmuokZC%2F4hcDwIhAN2TUxdsCVcw7z3TF8ESaP21ItXLP1vWCFU%2B7i%2BTfb%2FmKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKAqOC5MqtNZnslewq3AObRp%2BTUBn9Soj030I9BPN5ti1YozZSG1kGakB13f61r0KpDwNToGB07sGH8TlMsmHDWKzO1MZXL669nThdyCpbrgY0O8ERa%2BV82Gx%2BCNlqgrzwK5wQt3UcGmyKxqg4WddlFltkhFxihG0QS0oBx3rwzjLahc4es%2F1QOB%2FffUleRMgO9whz4FBynv1%2BW3MbO7LDM5Eu6J1E%2FccHJaZQdDPujpRvDXn6q59GlHI%2F1XDrSm1WAWq%2Bxp15JfQWMzKjw8jpi9fY8O4k7JxfJSgoL7i5C2Upz5NnlKMI7Zw5Kzp%2B7udFYEBQeCC%2FhHFxcP%2BUeA7CX1wYpft%2FB4plPkzGuwRJ0AnkgciNqMjhdoKDA%2BgOaKxXOI9ypkP4TieADOhCwzsCRBmHl6slHGm%2BCbRfDN0sRxkv5QyL1zBdnGmCODaqFRE83pICfqRbTx1HlXU9otOm9BimefGS9fUS5fG1vGsvIb9oiSZh9oUhkRqCFUnJPOq0NzSAg1D2dWGbzABKiAopQ22IZMuLKhjTygWiWIY8rkbG98XgOG2SiDAsKUgcyjJNd317CSSNplHwjUOXoN%2BsrIxdb09WjpKjhO9KNSLVDa13JXdQtMrDq1b84cUrVLWf2C%2FtHzA7iXYbZzCp7sHABjqkAfZJAMMr2HLpySXUVChqXRZNyMHtUvfuja0XoI24XNG%2FSFK7cfC9LWUgKkaVu9ZtxugN9PwBGziPqWy1wyQd68VzEhRRw5F1f%2Bu73lb2h%2FJr0j5sKzDa6%2BRRedqPMyltkvQzUDdfCzMnOqDkn9L8BVsSkJjsPSrULpdOOBnEh8JyQD4QKpiFMW5tCXOUX1Xo%2BBE%2BcHCKAjgIOALZfGykKh1OWAZK&X-Amz-Signature=9e45cdd1ed6e478e74c0c3eee7c0d06fb8f5118a16ad3c2c64311c9b9e8182ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VX7NLW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDERD%2Bq9%2B1TYPH4TPwZggw%2FEIQk8C2FcvmuokZC%2F4hcDwIhAN2TUxdsCVcw7z3TF8ESaP21ItXLP1vWCFU%2B7i%2BTfb%2FmKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKAqOC5MqtNZnslewq3AObRp%2BTUBn9Soj030I9BPN5ti1YozZSG1kGakB13f61r0KpDwNToGB07sGH8TlMsmHDWKzO1MZXL669nThdyCpbrgY0O8ERa%2BV82Gx%2BCNlqgrzwK5wQt3UcGmyKxqg4WddlFltkhFxihG0QS0oBx3rwzjLahc4es%2F1QOB%2FffUleRMgO9whz4FBynv1%2BW3MbO7LDM5Eu6J1E%2FccHJaZQdDPujpRvDXn6q59GlHI%2F1XDrSm1WAWq%2Bxp15JfQWMzKjw8jpi9fY8O4k7JxfJSgoL7i5C2Upz5NnlKMI7Zw5Kzp%2B7udFYEBQeCC%2FhHFxcP%2BUeA7CX1wYpft%2FB4plPkzGuwRJ0AnkgciNqMjhdoKDA%2BgOaKxXOI9ypkP4TieADOhCwzsCRBmHl6slHGm%2BCbRfDN0sRxkv5QyL1zBdnGmCODaqFRE83pICfqRbTx1HlXU9otOm9BimefGS9fUS5fG1vGsvIb9oiSZh9oUhkRqCFUnJPOq0NzSAg1D2dWGbzABKiAopQ22IZMuLKhjTygWiWIY8rkbG98XgOG2SiDAsKUgcyjJNd317CSSNplHwjUOXoN%2BsrIxdb09WjpKjhO9KNSLVDa13JXdQtMrDq1b84cUrVLWf2C%2FtHzA7iXYbZzCp7sHABjqkAfZJAMMr2HLpySXUVChqXRZNyMHtUvfuja0XoI24XNG%2FSFK7cfC9LWUgKkaVu9ZtxugN9PwBGziPqWy1wyQd68VzEhRRw5F1f%2Bu73lb2h%2FJr0j5sKzDa6%2BRRedqPMyltkvQzUDdfCzMnOqDkn9L8BVsSkJjsPSrULpdOOBnEh8JyQD4QKpiFMW5tCXOUX1Xo%2BBE%2BcHCKAjgIOALZfGykKh1OWAZK&X-Amz-Signature=ca1b21b2de9984f1204a77965eb1feebbf23c9a35ae6d97fb7fd60cbbd610f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
