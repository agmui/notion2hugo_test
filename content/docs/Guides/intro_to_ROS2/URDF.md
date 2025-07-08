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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXRYT23%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsnOS8SELvasXk1g0so1bjjmZJdAE%2FNvxzoEkrQ5stwAIhAN%2BVpvs9v4mTJO%2Bq%2Fubp3Kgjy6cKFhdzS78Yw7ksSJznKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye4pf0W7B2OqqCPpkq3APw3io%2F2lILj%2Fb9hMtxaMW%2B7qNoygWXOwgsUDxD3WNsVLQE7BotQBfpJ4C%2Fbd6ovs80zWZYpMEw9OYhm6nZZwVzYVWcOVTNHlfQBWrM4p%2FQ9TA0HbS54frZvlPX29cuub3DludcfcfHXzhIWniOK2aPFW5Y6HsFBCclTR%2BaYP9hjX5lUYq4bv7ZEhFPvt2yImh9gpfsZ4fQDBBKo8EMK3jcCLg8%2BPjqlA24TmxtMvxgYavaP89RKHb8P4%2BhAcNeuLhU4sKqPVg9Aecx6Xej92mO2ytqUMR8Sh4bXirfjVBDfQdjnkL9U4nMt%2BW%2Bdlrr62OQMAkIIKGe0jcveNbpIwqZkmqwRoGG%2BRCZfGoGTZUUzmf2Q8f00gYfTFXv0pBnffxPg0dfvylqFnftcHBvjoulTldzCpSqRdEHHYWnW9FSOwWP4%2Fxk9%2BBcbKEmgTBwoigU93ep%2BKCx%2FPImh3GIlEYG4ahyyxlEMuvZHEaLTxzSMtMXhwLeAfYCR7vsxECECteCQtiXdXmsiJJWmXfV5ZM1JQ6aUasuDkNkpVI7cy5Bj5%2FYyl6kKxhBhGTdkfLlmkwUsJm%2BsvqtytMRKLCshTpvbMf%2FuS%2B%2FxGwQRPEC04tzc620FvvRbhRMDcVHYjCOhLLDBjqkARJp0z%2F5CLGlBOqonYnr29i0x4dMqgRqSGXWqFB55IR%2BLm6wGttjVGzGLqf%2BiKZrljusaTFyKTFiAKHhsnUUtZQ8Lwh6a0iQL7C%2Bf9XxAEXO4jhyLoyY12iXchi631F%2BWxvc%2BMeji%2B1kf3B%2BkCswKZHZKOuqS3g7oJssNDK5rhJSt3B4fe2G5hBf%2BU6G6Wt0%2FLQiALQzHP6uolWZ9uLf5FxxFy6B&X-Amz-Signature=51e71d03b4744c0e69a59d506a6e4d37f2156fa4bdf462566b2679bde88850f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXRYT23%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCsnOS8SELvasXk1g0so1bjjmZJdAE%2FNvxzoEkrQ5stwAIhAN%2BVpvs9v4mTJO%2Bq%2Fubp3Kgjy6cKFhdzS78Yw7ksSJznKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye4pf0W7B2OqqCPpkq3APw3io%2F2lILj%2Fb9hMtxaMW%2B7qNoygWXOwgsUDxD3WNsVLQE7BotQBfpJ4C%2Fbd6ovs80zWZYpMEw9OYhm6nZZwVzYVWcOVTNHlfQBWrM4p%2FQ9TA0HbS54frZvlPX29cuub3DludcfcfHXzhIWniOK2aPFW5Y6HsFBCclTR%2BaYP9hjX5lUYq4bv7ZEhFPvt2yImh9gpfsZ4fQDBBKo8EMK3jcCLg8%2BPjqlA24TmxtMvxgYavaP89RKHb8P4%2BhAcNeuLhU4sKqPVg9Aecx6Xej92mO2ytqUMR8Sh4bXirfjVBDfQdjnkL9U4nMt%2BW%2Bdlrr62OQMAkIIKGe0jcveNbpIwqZkmqwRoGG%2BRCZfGoGTZUUzmf2Q8f00gYfTFXv0pBnffxPg0dfvylqFnftcHBvjoulTldzCpSqRdEHHYWnW9FSOwWP4%2Fxk9%2BBcbKEmgTBwoigU93ep%2BKCx%2FPImh3GIlEYG4ahyyxlEMuvZHEaLTxzSMtMXhwLeAfYCR7vsxECECteCQtiXdXmsiJJWmXfV5ZM1JQ6aUasuDkNkpVI7cy5Bj5%2FYyl6kKxhBhGTdkfLlmkwUsJm%2BsvqtytMRKLCshTpvbMf%2FuS%2B%2FxGwQRPEC04tzc620FvvRbhRMDcVHYjCOhLLDBjqkARJp0z%2F5CLGlBOqonYnr29i0x4dMqgRqSGXWqFB55IR%2BLm6wGttjVGzGLqf%2BiKZrljusaTFyKTFiAKHhsnUUtZQ8Lwh6a0iQL7C%2Bf9XxAEXO4jhyLoyY12iXchi631F%2BWxvc%2BMeji%2B1kf3B%2BkCswKZHZKOuqS3g7oJssNDK5rhJSt3B4fe2G5hBf%2BU6G6Wt0%2FLQiALQzHP6uolWZ9uLf5FxxFy6B&X-Amz-Signature=ea5e94b8730de0f0f14f23389cb22fbc6baa7fab893952e9e8bb64feb4c46e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
