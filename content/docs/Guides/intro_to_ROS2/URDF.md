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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNFAL6G%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzmeX6L72EdGLOXZ6xXUjq%2BT491QlNTx9h7ueROV8%2F%2BAiBeUKLjKeKdtBpDY6KdzGoeWhlYxJsodLoDTeSrdUDfviqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYTj2Vt8Lqm8gVQFKtwDOM%2Fl4owaYrOBlaY3ENCqrAT4uZSIWtfsbWdK8EZeLqgnAyyvIJQuVtXMeDoYU1SCF36ujfA6LZD%2BD%2FEMuvUxNojzX%2BJZl8fLeBY%2Fs2NTqFE5x46aM8YUnHIMZgHHlLS%2F6Dkiln3f%2B5O0U5GOKRAxapekMksjc5ZnEm4J1QbocMQs9Ky3NubU%2BOYELL4jT3jOZjKT32%2B49wbPy9mQv1o%2BTpigUUj595mWtKHatXSknEr%2BZMoiXfO1iEZKnZKFAruypWQW764PlYlb2A04cc8JEJiYU%2BktVNvSp0gtU65lEs%2Fsn%2FpT5igAyRQoZvpCMlHI6vf%2Fqus7jqXIXf2BTJfx17Rhz5P2%2FAadsthUbyo5G5eEWOk6FNOgyDgtRJ71KEF%2FkG1aOXdWPt%2FS2Qrie20r38xywJrSFKeyxlWRmuacp4oMjAoeWTuFKJau23rjAuz7A8RMizlgftKoZCjYP15sxK79PL9AaMCQJyljoGCGa6S4OXFv%2BaPE0DR0WBbYxBBmIAy9h%2BKoQXYG3k9JFfcStT4vO7we5oEbKfiUHlPRCVxCTLqwORqC7sWUdgo03kXI1nVWdGJN6n4sNacVzXgPv0XB9A0tH7w0TUWUJYc8sipAsqHbTZXC8DH3zbwwxOXOwgY6pgHwVFu9KMQMk1JaJ0MLjuTFTFv8Ep%2Faz2o2EmJCVvNhIf1%2F%2FxCRPLOLxNMceXZrZU7BDa8Lee2dPXwJA6N%2BGo8%2FIOqem%2Fz1kwi8hKr1%2BKZDuwg0Z6NiYJmX9r2A%2FNGSmvz4Pvc96yk%2FEtW0gd7vHb14KwCFE1aepsucRBz4kv6wpPO8w2HLDE%2BSmvxG2EEdAHoqq8k35Ypl3V1qrzPwg8pjWJeIr%2BXP&X-Amz-Signature=5d5d2ac5b6e054ddc09441d993585af02286f5553ab6480e7138483ff554534d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNFAL6G%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzmeX6L72EdGLOXZ6xXUjq%2BT491QlNTx9h7ueROV8%2F%2BAiBeUKLjKeKdtBpDY6KdzGoeWhlYxJsodLoDTeSrdUDfviqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYTj2Vt8Lqm8gVQFKtwDOM%2Fl4owaYrOBlaY3ENCqrAT4uZSIWtfsbWdK8EZeLqgnAyyvIJQuVtXMeDoYU1SCF36ujfA6LZD%2BD%2FEMuvUxNojzX%2BJZl8fLeBY%2Fs2NTqFE5x46aM8YUnHIMZgHHlLS%2F6Dkiln3f%2B5O0U5GOKRAxapekMksjc5ZnEm4J1QbocMQs9Ky3NubU%2BOYELL4jT3jOZjKT32%2B49wbPy9mQv1o%2BTpigUUj595mWtKHatXSknEr%2BZMoiXfO1iEZKnZKFAruypWQW764PlYlb2A04cc8JEJiYU%2BktVNvSp0gtU65lEs%2Fsn%2FpT5igAyRQoZvpCMlHI6vf%2Fqus7jqXIXf2BTJfx17Rhz5P2%2FAadsthUbyo5G5eEWOk6FNOgyDgtRJ71KEF%2FkG1aOXdWPt%2FS2Qrie20r38xywJrSFKeyxlWRmuacp4oMjAoeWTuFKJau23rjAuz7A8RMizlgftKoZCjYP15sxK79PL9AaMCQJyljoGCGa6S4OXFv%2BaPE0DR0WBbYxBBmIAy9h%2BKoQXYG3k9JFfcStT4vO7we5oEbKfiUHlPRCVxCTLqwORqC7sWUdgo03kXI1nVWdGJN6n4sNacVzXgPv0XB9A0tH7w0TUWUJYc8sipAsqHbTZXC8DH3zbwwxOXOwgY6pgHwVFu9KMQMk1JaJ0MLjuTFTFv8Ep%2Faz2o2EmJCVvNhIf1%2F%2FxCRPLOLxNMceXZrZU7BDa8Lee2dPXwJA6N%2BGo8%2FIOqem%2Fz1kwi8hKr1%2BKZDuwg0Z6NiYJmX9r2A%2FNGSmvz4Pvc96yk%2FEtW0gd7vHb14KwCFE1aepsucRBz4kv6wpPO8w2HLDE%2BSmvxG2EEdAHoqq8k35Ypl3V1qrzPwg8pjWJeIr%2BXP&X-Amz-Signature=6f2241f7dbd6dc5359e3184303c432358db4d61eb0bc7878a5adf3f2ef32ff8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
