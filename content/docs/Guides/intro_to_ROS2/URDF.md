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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPYLZKF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHTUu2lmQhecEv1bwu2h%2BAYaigzjfbVPceuiIXNjLLkJAiB%2B8VNNF%2F8XtGbkDG669PyQgXuKr8PpHEj7gW52lHxA5ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMWgroJKVmgiqOeBC5KtwDypOcWF9XtugNsWb6hn0WxZtXCEn2Ty5gs38ZG2SUazCZaIiSkjWzdyJlopF3UU5UYm6fNpuHVCvr5HUvJQfL5RUUtVvQ1%2BC6lG%2B8%2BkV1R4frRpGbNF%2FaVWPXUsxJU8AKD8NH8uM5Gd9OfFFEvS6fKqudHgqBlM%2Bw6xp8FPgv0GrQglSlH55glwlX8tzhaOluDMjke%2BACX8lbTCI3UO5sS1mTiGt8IKhFHORPD4rND6b7DRu0YLM2IEJGM5XE%2BfWuqV4mXeNKHVQ7wH9QoExjw2IXKqROme%2FleQzakOvfyzPKfPxB7B9KoAtNcSZP1UXycbfOqQSs4%2BlZdcAkKbPxdGEYf%2FoNLqLUywvWF%2FfNOiO%2B7q1FwlXKNNoAgv%2FtfYSu1XB9R0o59xwoMUalbJ1PUnS%2FB4UEd4MbSXJWWqpNzOFSS3GWtmuaZP9ewS7jAulpKCukLvdKh8Rt6CkxNlNgcuXvdwXWq9gkXGVjoRj5iUCDN4G%2BLw%2BFzdmvL%2FlR9q0FEdGOF99u%2BsTcGY05vLLc%2BzJcbGhMsNsQPLRpDrUZM4yQykOPoJTBkhiBL2B8XiWKJ0AS1nyg3sgCCCMFJtUXff%2FNNlWxICz7cV19ox%2BQZiRofq%2BE7Xg3dOtLfsowqdnsvgY6pgEYFfSMOoLrhB8rLkFWLGIU42c4i9HKW%2BGB9FTcT4eKc%2BaWQ1P%2FaVFuwF2AW93HnoMMAP52miMv1gNiWUwSmUZepke%2BjAH4gLEeMsHqazkYy7vwKm5VXy7dNGeGb29Cgw8bxif8tdVdTr05lukl0sd3Bov4gvAHT7DpbBpCjEnUw0lkwJDvC8b96GI7TQUeZOianGg3lfytJxSzhv0No19A1PkZz2qT&X-Amz-Signature=07ba1a83abe0946db3c19e65099a058bbcb4e1fbdb1ad4eb3f024d6b321376b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPYLZKF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHTUu2lmQhecEv1bwu2h%2BAYaigzjfbVPceuiIXNjLLkJAiB%2B8VNNF%2F8XtGbkDG669PyQgXuKr8PpHEj7gW52lHxA5ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMWgroJKVmgiqOeBC5KtwDypOcWF9XtugNsWb6hn0WxZtXCEn2Ty5gs38ZG2SUazCZaIiSkjWzdyJlopF3UU5UYm6fNpuHVCvr5HUvJQfL5RUUtVvQ1%2BC6lG%2B8%2BkV1R4frRpGbNF%2FaVWPXUsxJU8AKD8NH8uM5Gd9OfFFEvS6fKqudHgqBlM%2Bw6xp8FPgv0GrQglSlH55glwlX8tzhaOluDMjke%2BACX8lbTCI3UO5sS1mTiGt8IKhFHORPD4rND6b7DRu0YLM2IEJGM5XE%2BfWuqV4mXeNKHVQ7wH9QoExjw2IXKqROme%2FleQzakOvfyzPKfPxB7B9KoAtNcSZP1UXycbfOqQSs4%2BlZdcAkKbPxdGEYf%2FoNLqLUywvWF%2FfNOiO%2B7q1FwlXKNNoAgv%2FtfYSu1XB9R0o59xwoMUalbJ1PUnS%2FB4UEd4MbSXJWWqpNzOFSS3GWtmuaZP9ewS7jAulpKCukLvdKh8Rt6CkxNlNgcuXvdwXWq9gkXGVjoRj5iUCDN4G%2BLw%2BFzdmvL%2FlR9q0FEdGOF99u%2BsTcGY05vLLc%2BzJcbGhMsNsQPLRpDrUZM4yQykOPoJTBkhiBL2B8XiWKJ0AS1nyg3sgCCCMFJtUXff%2FNNlWxICz7cV19ox%2BQZiRofq%2BE7Xg3dOtLfsowqdnsvgY6pgEYFfSMOoLrhB8rLkFWLGIU42c4i9HKW%2BGB9FTcT4eKc%2BaWQ1P%2FaVFuwF2AW93HnoMMAP52miMv1gNiWUwSmUZepke%2BjAH4gLEeMsHqazkYy7vwKm5VXy7dNGeGb29Cgw8bxif8tdVdTr05lukl0sd3Bov4gvAHT7DpbBpCjEnUw0lkwJDvC8b96GI7TQUeZOianGg3lfytJxSzhv0No19A1PkZz2qT&X-Amz-Signature=72dedc8b79260f5c658bba701c46c405197143d0ad7e9767b897a924398fa7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
