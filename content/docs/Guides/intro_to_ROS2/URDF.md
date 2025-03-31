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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYCFU3J%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGd9xUSRf2R62cf36RJZ6DofvKnJ1Jl1B9V8QqNYHHHgAiEA8xT90Z38iunvDsEttJpyUkvWqY0ITnKD%2B49dw%2BE6oQIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTpHitQM8nmSQUT0yrcA8FREeDQgxIm%2FWiRbKzKPjj4mAfmfAL4jNjyxJM68Ep24OAP70i8Adp82hwhvLVxU6mgmDdUoGkwoNvUDTOoqJQdkpYyWQlzJofgghxcMQ44qI2uvkm%2BRvmEpI1CSW7u52ZrBtnGhXsDl5UcgN%2Bvpkqvit5XEtLD4gMbU1iJDDsplwtHZ9r46Zhr3aDRkkuD1CY4v11jZnhNvIf0zRzRn3J2u%2B3WKJWhjwhxuC8OIMTjCEpisLXo9fILM3Hlwx%2F7igFAP3gPD%2BwOF2kEajxnqG8ogfcrFK099Qxa42jrZANUSKf0JU4h68HBD3glXyUscEskzHDKYn3xDyfOOZ5D7xsoOyChRJ78s57fsoS3VbZVS56qnTAHmzrBGu9uIzaL6qhQMVd%2FOPZMa0Y2EyovTcfAGeUkC6%2FoYhC6I0Xc%2Fa%2BAAysYyTB4V25cbM7nfJ0lHhcVol0eePmwTRhbHncpv3Yn7chXXlWObt5SAvkzilwd0R38AGfg0vGYKDPfzoQvbsFOharscgy92SRC7lXNrtb8tpZrT9zLhe14nnY1lDMRPPFcESXH9jBhbaIsUaQl4kMr1cc9oehFfvtsjsX0i6UAwWVF6Pxpv3YbvExcf8dCWGdqWwMXm5SVMhIBMJDnqr8GOqUBN9pEkt4itmAP2QUmjAl3COSvw4SiLCJ1xMVSK2zfw38M9kb0v9W3XyFJ6hDozjCML4wQ9wUu8hmYvbOyHxuqVpMp1QYk2ZCS8XOG5JsKaG%2B0Za%2FHtqtaOUqo0g3Dot584nRK%2FVEd5vXfiOSUqEf09mfoaa0tjqYIXMEhHXS7Gf8gRvJqraKX%2FsZiZxitd9wD%2BYjnd%2Fls5AkI%2BP4EQA%2FXku99I4Ue&X-Amz-Signature=1398ab779c2d2bf24c29741689860a658b18dac5a97b69fa5ae61e2820e5888b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYCFU3J%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGd9xUSRf2R62cf36RJZ6DofvKnJ1Jl1B9V8QqNYHHHgAiEA8xT90Z38iunvDsEttJpyUkvWqY0ITnKD%2B49dw%2BE6oQIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTpHitQM8nmSQUT0yrcA8FREeDQgxIm%2FWiRbKzKPjj4mAfmfAL4jNjyxJM68Ep24OAP70i8Adp82hwhvLVxU6mgmDdUoGkwoNvUDTOoqJQdkpYyWQlzJofgghxcMQ44qI2uvkm%2BRvmEpI1CSW7u52ZrBtnGhXsDl5UcgN%2Bvpkqvit5XEtLD4gMbU1iJDDsplwtHZ9r46Zhr3aDRkkuD1CY4v11jZnhNvIf0zRzRn3J2u%2B3WKJWhjwhxuC8OIMTjCEpisLXo9fILM3Hlwx%2F7igFAP3gPD%2BwOF2kEajxnqG8ogfcrFK099Qxa42jrZANUSKf0JU4h68HBD3glXyUscEskzHDKYn3xDyfOOZ5D7xsoOyChRJ78s57fsoS3VbZVS56qnTAHmzrBGu9uIzaL6qhQMVd%2FOPZMa0Y2EyovTcfAGeUkC6%2FoYhC6I0Xc%2Fa%2BAAysYyTB4V25cbM7nfJ0lHhcVol0eePmwTRhbHncpv3Yn7chXXlWObt5SAvkzilwd0R38AGfg0vGYKDPfzoQvbsFOharscgy92SRC7lXNrtb8tpZrT9zLhe14nnY1lDMRPPFcESXH9jBhbaIsUaQl4kMr1cc9oehFfvtsjsX0i6UAwWVF6Pxpv3YbvExcf8dCWGdqWwMXm5SVMhIBMJDnqr8GOqUBN9pEkt4itmAP2QUmjAl3COSvw4SiLCJ1xMVSK2zfw38M9kb0v9W3XyFJ6hDozjCML4wQ9wUu8hmYvbOyHxuqVpMp1QYk2ZCS8XOG5JsKaG%2B0Za%2FHtqtaOUqo0g3Dot584nRK%2FVEd5vXfiOSUqEf09mfoaa0tjqYIXMEhHXS7Gf8gRvJqraKX%2FsZiZxitd9wD%2BYjnd%2Fls5AkI%2BP4EQA%2FXku99I4Ue&X-Amz-Signature=c8505aeab303738f299b16384d3280a9e53b5f63385ad5492587a9952b0c4487&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
