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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQGYXF4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYgDt3GBFlqStI30jkZLEVOZx5C3SrqmO1ZRQI%2Bx%2Fo9QIhAINbgk%2BTbLBpf9TlYy7MVu52hdP9nzBROoksdE4tDCaEKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWcJGRozK2NhTCgjUq3ANXGS5QDWB%2Bg7ahpXeEuV%2B1rChfykgYDXszZ%2FgBswRVW1Sb6B8mrLqXYAoJs%2FeS0y%2Bu3Txo91o42yoIXrjFPtAfrJ0HfhLvAWZxRLKOHfJiTRpcuwWdw4MfqJCJM5QBCQ%2Bunckcfx1fAlE7YWi5XIaNQ6u2%2FGs3HrYFxCcZcMQaGf511N4OTTqka9kIhpI8kaWhgU%2B8Zoz2ooCyWuTrA3pn4CwKTrYybcxJCZpcmXHwWLyBmo0RHBJ7uQ%2BhH4L31WNZkwgVZyDr4%2FicNvq6%2BzpVWgm7Q3x9cELRPXb55Hm1kk%2FFfJwe8TOsaGx%2F6vbdZe06na7ziRj68Eh39Yt4iUQ7F3HGW8d9raA05i9ERfO0WCnojk373uiNWVp4MvqIFE5xC7RvEF%2F0%2BWG%2Fe9DQ7L0wnfgirKg4ntOlWK0hDUJSbOjP8AepHXcocFPsASsb3k8mG7sPmqD2DPJZIIXjGGc37yw8yCFIJqYLkHKThkQMalUrvX4WOHw49dUL8144fYBiRGh2ACsdNI1KYeqrUPuhQEEoDD%2FWXWxnLacZ0Fy5uBIijnGiDqjI4WSmv9i5xCfljY7OrXJRbQkWsYdMRA3vaZitXthS2hqZue4u7x94P1LNVu4DijbG8Zb6izDlj9vCBjqkAbWmui%2Feun3o1rtqtvExjdEvNSmLUhpC2axo3qia6iT53lUhdJf8uPjGAdGAdA%2F23HraRqXTkZJGKSrnR5wCnJOcl0HeIQfuJESeZT9qch3EKTbEFISh3SBn4Bq%2Feim45BdHpKvBpVgDw2yrSzjTs8qQEHUZ900FohAbuhQkO4%2BGqMcjFeNK0T6GK0If%2BBD0bm%2BXbDuWH79TwHIkqzyxUOzA0bUR&X-Amz-Signature=fdbd4a3b605da4585a94690f2d59ceaef57f835a8ec288e7662b7361ecbf5dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQGYXF4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYgDt3GBFlqStI30jkZLEVOZx5C3SrqmO1ZRQI%2Bx%2Fo9QIhAINbgk%2BTbLBpf9TlYy7MVu52hdP9nzBROoksdE4tDCaEKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWcJGRozK2NhTCgjUq3ANXGS5QDWB%2Bg7ahpXeEuV%2B1rChfykgYDXszZ%2FgBswRVW1Sb6B8mrLqXYAoJs%2FeS0y%2Bu3Txo91o42yoIXrjFPtAfrJ0HfhLvAWZxRLKOHfJiTRpcuwWdw4MfqJCJM5QBCQ%2Bunckcfx1fAlE7YWi5XIaNQ6u2%2FGs3HrYFxCcZcMQaGf511N4OTTqka9kIhpI8kaWhgU%2B8Zoz2ooCyWuTrA3pn4CwKTrYybcxJCZpcmXHwWLyBmo0RHBJ7uQ%2BhH4L31WNZkwgVZyDr4%2FicNvq6%2BzpVWgm7Q3x9cELRPXb55Hm1kk%2FFfJwe8TOsaGx%2F6vbdZe06na7ziRj68Eh39Yt4iUQ7F3HGW8d9raA05i9ERfO0WCnojk373uiNWVp4MvqIFE5xC7RvEF%2F0%2BWG%2Fe9DQ7L0wnfgirKg4ntOlWK0hDUJSbOjP8AepHXcocFPsASsb3k8mG7sPmqD2DPJZIIXjGGc37yw8yCFIJqYLkHKThkQMalUrvX4WOHw49dUL8144fYBiRGh2ACsdNI1KYeqrUPuhQEEoDD%2FWXWxnLacZ0Fy5uBIijnGiDqjI4WSmv9i5xCfljY7OrXJRbQkWsYdMRA3vaZitXthS2hqZue4u7x94P1LNVu4DijbG8Zb6izDlj9vCBjqkAbWmui%2Feun3o1rtqtvExjdEvNSmLUhpC2axo3qia6iT53lUhdJf8uPjGAdGAdA%2F23HraRqXTkZJGKSrnR5wCnJOcl0HeIQfuJESeZT9qch3EKTbEFISh3SBn4Bq%2Feim45BdHpKvBpVgDw2yrSzjTs8qQEHUZ900FohAbuhQkO4%2BGqMcjFeNK0T6GK0If%2BBD0bm%2BXbDuWH79TwHIkqzyxUOzA0bUR&X-Amz-Signature=bcb85de25f997b1bb2851a137769c738bb472e3794487766933b040da9d098b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
