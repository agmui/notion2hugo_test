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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=40b52e29dcdf5cc4fc1580d013909a4fe9cbd13499fe56a45d130e340e6e09d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=3dd48a8e709f87c132b97875c4494f99c2591bf861a48bd05fb53e667b2f8ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
