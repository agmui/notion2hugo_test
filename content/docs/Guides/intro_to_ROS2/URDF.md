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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSRZO7MP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCuuvggpFFjcn02r2hP6zXRKfppVLqmCtb6IDG7RyLuhAIhAJc7pdOh8qHx%2Bx%2F1wexbJwZIKe2PSCQbWTc9GvW5AsPEKv8DCHAQABoMNjM3NDIzMTgzODA1IgyTEz7s1z40RMwQDbwq3AMAmTlgwYnCessCdUzBinRsFzZcSwHloaTM9Ru%2F16fuHptx29SwnAul08IwP6rXpejT%2BsKw2PayGE2VZU9lhpNglbmLuiOsa1W8C%2BL93CMx165ytKGr1DPrHFqKUCBjjR9pBq6FxQWUucm9my4hVjXtAD6iGUVKo%2FjuM%2Fw8bYEqMVfLpanyC1HWY8YB8vKRYZtXwWcpyzVNWk5xJJ9E6Ty%2FvIDOfbDL2SsU8iNCQEZwTZmWTUa9df4NbV%2FGGF2agL2LlOSwohbJhm3DF3wCwu5akqTwGk346maEjGCemYd7%2Fj7lIiWA0vuK1aU1ReDDtCa9jTEzjTsJSuGNEuDtMQem4MGiE%2Bk5fzUD1hr9ue9EBWFPi79bL%2BW47W5J8Ok2ZiCHg4q7uBcG4sJM4r2Kkc3gk%2Fg5urSfrLh0ZNuOrlEk6AeET0ZhblVUo%2B%2Fqc8LEyQAqHiKtSOhvn8oR6tFBHM7o%2FxuohloBlD4cQDuyPB2K%2FyRYRxLt9I1%2Bwk1yQiRMeYZjIAsbcPQPjRvgBY9p8jaYF50uS41VTV1KDNUbT1J39%2B9XUfXFtm0P5uboV3LO%2FPj4xQMOdeakHHgPFHGxjQdsnd1%2FPphVI8RoG0Teh69AQZ%2B3bc068e7QXb5ifTCO67S%2BBjqkASBtz4s85hwuvFOtbTLvu5z68JYUobOXVKXQM0fpdAUPpgWEX7xXwKTlUN%2Fp4kjT6UIqWTnUdA7NSxqp7XXtveFyToizPawKTHdNUGHQZ6xGDFRyA%2FiTEyJpmA51ZWdrHfJjdqYJVVMavjCoF1DDQyj7uCuGZz1MHNZv5jWVJrfwYQrDjk6jkf%2F5eazNpY5ScRqG5ejCKOjTNN06%2BbBrTM23ezkZ&X-Amz-Signature=f79fb245fefa30ca4cb26cbbddb8a65ecafa1c3e4633c059afce436bd04b0462&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSRZO7MP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCuuvggpFFjcn02r2hP6zXRKfppVLqmCtb6IDG7RyLuhAIhAJc7pdOh8qHx%2Bx%2F1wexbJwZIKe2PSCQbWTc9GvW5AsPEKv8DCHAQABoMNjM3NDIzMTgzODA1IgyTEz7s1z40RMwQDbwq3AMAmTlgwYnCessCdUzBinRsFzZcSwHloaTM9Ru%2F16fuHptx29SwnAul08IwP6rXpejT%2BsKw2PayGE2VZU9lhpNglbmLuiOsa1W8C%2BL93CMx165ytKGr1DPrHFqKUCBjjR9pBq6FxQWUucm9my4hVjXtAD6iGUVKo%2FjuM%2Fw8bYEqMVfLpanyC1HWY8YB8vKRYZtXwWcpyzVNWk5xJJ9E6Ty%2FvIDOfbDL2SsU8iNCQEZwTZmWTUa9df4NbV%2FGGF2agL2LlOSwohbJhm3DF3wCwu5akqTwGk346maEjGCemYd7%2Fj7lIiWA0vuK1aU1ReDDtCa9jTEzjTsJSuGNEuDtMQem4MGiE%2Bk5fzUD1hr9ue9EBWFPi79bL%2BW47W5J8Ok2ZiCHg4q7uBcG4sJM4r2Kkc3gk%2Fg5urSfrLh0ZNuOrlEk6AeET0ZhblVUo%2B%2Fqc8LEyQAqHiKtSOhvn8oR6tFBHM7o%2FxuohloBlD4cQDuyPB2K%2FyRYRxLt9I1%2Bwk1yQiRMeYZjIAsbcPQPjRvgBY9p8jaYF50uS41VTV1KDNUbT1J39%2B9XUfXFtm0P5uboV3LO%2FPj4xQMOdeakHHgPFHGxjQdsnd1%2FPphVI8RoG0Teh69AQZ%2B3bc068e7QXb5ifTCO67S%2BBjqkASBtz4s85hwuvFOtbTLvu5z68JYUobOXVKXQM0fpdAUPpgWEX7xXwKTlUN%2Fp4kjT6UIqWTnUdA7NSxqp7XXtveFyToizPawKTHdNUGHQZ6xGDFRyA%2FiTEyJpmA51ZWdrHfJjdqYJVVMavjCoF1DDQyj7uCuGZz1MHNZv5jWVJrfwYQrDjk6jkf%2F5eazNpY5ScRqG5ejCKOjTNN06%2BbBrTM23ezkZ&X-Amz-Signature=77b85520f504cf3154cff3641b19fc8f06eb4048898b37e3ac74c30cf1f42126&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
