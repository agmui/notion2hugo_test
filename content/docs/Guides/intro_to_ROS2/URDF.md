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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMNZIFA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASwDXEXjf87GO79PkJ2OEKKlySbU5A%2Fv7nBzU8gCux1AiA94DVjRx95AzwPFCOBb%2Biatz5jpKQEUqIEiwxkRy3WoCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMQValr17tD%2FtAuHr6KtwDbJvqcLhOaDBwtJSCxzyBjt63kMk4IAoEKQ5Oh39gxMqxpd5ETzA%2FpXVpIwzgfSvNNXFMjZ9JN3wfeA2w%2BsjtedGL0CpJ%2F4twRNL800W1%2B6YEKfituqCyc7%2Ft05KPwSRq9f8Jc%2B9zjvWeb0%2Fp9Tjp2VY2xG%2BFJ6x9iThxBJZmwaZFYZqQx%2BD3ev55kn0T4no%2BpDsvK2V8cwsRzJ098ayn8APNvC6tPyM%2FqaMEMvBm0BC178x93lm29QCjlMkpQB%2FMOdx1SA462x4iGtdQXYO98D2D8LduOEwDPs1O0%2BJBkxmSLSPlKFblTCE4%2F2v52xtUQr6mdI6hxkfDGHRFMTn20se3L0sZpy8DgtPqgkfxyeZ6YR9Imnd0GXFC%2FfT6j5a03ruhpmwyJWTSx3WuElkdZBnhpZ7wSn4fyu28VdZ3ckqRjETtQjLQp04mW%2F3hTJumebJHhChdcNosyPg7%2BuB8d9ZoF%2BVU0S%2FGLVfMLThB6LW4dvT9l9k8kcTTdAOz6Ev4HTalzGdCIn4HXgcqaObqL9c8qbNyYvNNJDpf1ezmsTL9vj%2BtCNXhepAWHdx20wVV2d0YMyseMFdb5sIMg4ktq%2Bpj787jX%2BVLQ5wDcXFdWqdllF0%2BklxwfAScJ%2BAwg6SLvwY6pgF%2Ffxr%2Bama2usWFH2DWyq1wjsi93c2De9ItpjD4dowKaQZLMzJNL4Jobbmb3dlEn6V%2BvSpgZ6uZXeHGF8ygWW15gnlmGHuVtjWWyHgUbrso1ORK3NUIOnBdD8qB5aQkIQwTYb5aDxBdXCuYZCdrLFQCCa9%2BTX4hLPEFhN7uEVE2KmzuacfVz4E1HgQX3Zyl0YDulJx6MLb31FknuRUYCpQtO4HBUp3%2F&X-Amz-Signature=e5ca846f9a48ec6908860b0c7229ed1d89031705efaf1043eb17ba92c00a6a43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMNZIFA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASwDXEXjf87GO79PkJ2OEKKlySbU5A%2Fv7nBzU8gCux1AiA94DVjRx95AzwPFCOBb%2Biatz5jpKQEUqIEiwxkRy3WoCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMQValr17tD%2FtAuHr6KtwDbJvqcLhOaDBwtJSCxzyBjt63kMk4IAoEKQ5Oh39gxMqxpd5ETzA%2FpXVpIwzgfSvNNXFMjZ9JN3wfeA2w%2BsjtedGL0CpJ%2F4twRNL800W1%2B6YEKfituqCyc7%2Ft05KPwSRq9f8Jc%2B9zjvWeb0%2Fp9Tjp2VY2xG%2BFJ6x9iThxBJZmwaZFYZqQx%2BD3ev55kn0T4no%2BpDsvK2V8cwsRzJ098ayn8APNvC6tPyM%2FqaMEMvBm0BC178x93lm29QCjlMkpQB%2FMOdx1SA462x4iGtdQXYO98D2D8LduOEwDPs1O0%2BJBkxmSLSPlKFblTCE4%2F2v52xtUQr6mdI6hxkfDGHRFMTn20se3L0sZpy8DgtPqgkfxyeZ6YR9Imnd0GXFC%2FfT6j5a03ruhpmwyJWTSx3WuElkdZBnhpZ7wSn4fyu28VdZ3ckqRjETtQjLQp04mW%2F3hTJumebJHhChdcNosyPg7%2BuB8d9ZoF%2BVU0S%2FGLVfMLThB6LW4dvT9l9k8kcTTdAOz6Ev4HTalzGdCIn4HXgcqaObqL9c8qbNyYvNNJDpf1ezmsTL9vj%2BtCNXhepAWHdx20wVV2d0YMyseMFdb5sIMg4ktq%2Bpj787jX%2BVLQ5wDcXFdWqdllF0%2BklxwfAScJ%2BAwg6SLvwY6pgF%2Ffxr%2Bama2usWFH2DWyq1wjsi93c2De9ItpjD4dowKaQZLMzJNL4Jobbmb3dlEn6V%2BvSpgZ6uZXeHGF8ygWW15gnlmGHuVtjWWyHgUbrso1ORK3NUIOnBdD8qB5aQkIQwTYb5aDxBdXCuYZCdrLFQCCa9%2BTX4hLPEFhN7uEVE2KmzuacfVz4E1HgQX3Zyl0YDulJx6MLb31FknuRUYCpQtO4HBUp3%2F&X-Amz-Signature=5b339217b5400eee3694ab056d1484c15efda3c78eb29067dc48251e93f4e2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
