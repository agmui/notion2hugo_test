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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MFQ6Y3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBovy51coQvMKAT3s6jrymTBYuSG45z%2BjhACS%2Fag%2B5IyAiA%2FiXwO9rlayYTE%2BKANl7XucJaBO2Snyn80rZ%2Fd39GfnSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMQHeQMWdNbXgMB1sGKtwDe4J7wAfHNYktNBAmX%2BjNJbdzex4a9pLm2kUVDPjjJQFb%2B3hyq7hJFHrtdakQs%2FdpJ9sJaKrvULsgihsmv2rzTErKes2t%2Fq1SCexb%2BTdG2xUHWKr9Z%2FNXrfqWLpv0hqFuNuWqurmYrEtHrudmC1QlGRVqq5ubxkZeWHqRQGul75D0SlXHANtQhgROL4nlZEfI3o3Ch0DWA2x0WsvAhBrIS4VKIzCh9TAIIKESvZcdJHjQOAKDwV5dvJf9nduJEc72szXYUREMb%2FN1kSMlRV1FPFStExA3%2B%2BUV7Yq6NMxG0DIp6cUKHTjryk5%2F44BKIMglGxnUihMw5kaAlrcz6NUkR4BY7uVZSnmR%2BvYU%2FuRm3wgiwgNd6hLZaYjfb%2B8P%2FsOA0I8Sj%2FrwQfjtmcJGugq875ChrPkyS%2FrzyBGMcXrsbrBSVcRQKSzCvYMgbYTlUgP%2BHSaOrnF6bN37rfwS9NBe5omxSQptfM1HaVv0D3D4JMcRBTEBG55mVgZ2spK5fVJA%2F3SqkgelCfKtD32RzBlxf%2BzTrD3MA4elwqtMawkMm1%2FbDejra3EAYWg%2BYTnnuVLNpjFcO9ehaCmLkiLw5In3hC1JsIQE%2BOWLTYHkD7VlHMqnaCfDVVjBgpdECigwwa2CwgY6pgEjUBsFLa0EIbLT6qfZz3UxXF1hJ1%2BVOZrKivQQXxpYvOMHyB4sS00fqlNZS1VasI0EzhzG2bf%2B6d%2FObXHAni0YBQnwFPDIT9p4erfo5hG00UXAQEw%2FrfvLaxDw4YguS%2BxBLyPb1NOAsoe0a9PW3FoGJn9In8oCafVhh3pcvh6xkPvECS5RMyACkERrb%2BiPWQN4FZ%2FQfbnMcxW6U1mTqUPiaQ%2Fuc%2Fjm&X-Amz-Signature=8ccb6eefca4b920904c9f21362d247c45ec078497aaf4b53f0707f64dbf47004&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MFQ6Y3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBovy51coQvMKAT3s6jrymTBYuSG45z%2BjhACS%2Fag%2B5IyAiA%2FiXwO9rlayYTE%2BKANl7XucJaBO2Snyn80rZ%2Fd39GfnSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMQHeQMWdNbXgMB1sGKtwDe4J7wAfHNYktNBAmX%2BjNJbdzex4a9pLm2kUVDPjjJQFb%2B3hyq7hJFHrtdakQs%2FdpJ9sJaKrvULsgihsmv2rzTErKes2t%2Fq1SCexb%2BTdG2xUHWKr9Z%2FNXrfqWLpv0hqFuNuWqurmYrEtHrudmC1QlGRVqq5ubxkZeWHqRQGul75D0SlXHANtQhgROL4nlZEfI3o3Ch0DWA2x0WsvAhBrIS4VKIzCh9TAIIKESvZcdJHjQOAKDwV5dvJf9nduJEc72szXYUREMb%2FN1kSMlRV1FPFStExA3%2B%2BUV7Yq6NMxG0DIp6cUKHTjryk5%2F44BKIMglGxnUihMw5kaAlrcz6NUkR4BY7uVZSnmR%2BvYU%2FuRm3wgiwgNd6hLZaYjfb%2B8P%2FsOA0I8Sj%2FrwQfjtmcJGugq875ChrPkyS%2FrzyBGMcXrsbrBSVcRQKSzCvYMgbYTlUgP%2BHSaOrnF6bN37rfwS9NBe5omxSQptfM1HaVv0D3D4JMcRBTEBG55mVgZ2spK5fVJA%2F3SqkgelCfKtD32RzBlxf%2BzTrD3MA4elwqtMawkMm1%2FbDejra3EAYWg%2BYTnnuVLNpjFcO9ehaCmLkiLw5In3hC1JsIQE%2BOWLTYHkD7VlHMqnaCfDVVjBgpdECigwwa2CwgY6pgEjUBsFLa0EIbLT6qfZz3UxXF1hJ1%2BVOZrKivQQXxpYvOMHyB4sS00fqlNZS1VasI0EzhzG2bf%2B6d%2FObXHAni0YBQnwFPDIT9p4erfo5hG00UXAQEw%2FrfvLaxDw4YguS%2BxBLyPb1NOAsoe0a9PW3FoGJn9In8oCafVhh3pcvh6xkPvECS5RMyACkERrb%2BiPWQN4FZ%2FQfbnMcxW6U1mTqUPiaQ%2Fuc%2Fjm&X-Amz-Signature=82ca0a681323799794b65a1cd232911e94bffd9021c41128ae19e25ea88a9636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
