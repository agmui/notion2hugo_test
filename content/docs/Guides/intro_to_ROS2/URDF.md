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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZGD2H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4k8Mm3keMw1VcLLKoLP12reG4SqSR7J5D1SRhsntwPgIhAIBTt0ecDGHGRDQiWETiAMWLlqqnbeLU1WNpQ4aCn8MDKv8DCDgQABoMNjM3NDIzMTgzODA1IgxcftbWmGUCJV37jm4q3APBpabyKvwBQv3GPpyrriaGgH1pdNO5x3kZcMH2PH069p27lnCNyKO8Mn0io%2F%2FRx%2FlCfJKuy7J3Ggy8pjjp%2FVDEQz3ouGqEmfYm7FzpV412yARWiohBGFGmLJDDF1kuYS3Ifbwf4tsXqxrBnKz21XcbH2mPWisod50CdCVh00XOATrzUjr0dMg2C9lowFRCrU41lhn%2FSsiqk3spMDL3a%2BPOXZxNBa3WHS1vUTzYjzMURpTz5%2FrL9PYFpm2uhyeHzn5U6j85daJ683r0T6s2VxCxSQF4F4q1MoLoSUjGXBJE5WPQG6RbX6TaLbvX9Z3bpvj%2FrF8Ee5F4MQv7hCSenKcEw3oUzEwW0YKOGQAxUaVjNE1ZyiCcLLtWdFPW90H3zA%2FHhFaqMP8DYE1SH16GLaPVohs%2By3V4TJ1aOMJXgssvRrasFP8MIXTw%2FaioAOF6Qd9toycZHZ3Ju08kUWpcFVgGyqX9dx%2FcGYEOd27%2BoWuAywUooW3AvvR7aJRkQrfyEWcp8zwGJ7GzPT9YyyU91NyeUpd2NzvKQ4ajjq7Y9WcF8GVLNbe3sxldKoaa%2FfmrDyLhntcxETiniFoZHNsvXmuP3xaGpQcMOHfhePCyo3TnB5d%2FJMJRtwD6jPoBlTD3%2FuTABjqkAT4owoKreRMuYzEiwR%2Bun%2Fml4%2BTgdywrfvJiL7nR91iT33htGIpQHLt0eOYOVVhUi0rJRuyDK1njK4C1eQ1KgbyRwPYOcl%2FieOX5Nfid3JVrkdvE%2BS62yCjEGtCCBnR2EM%2BON6kvUFWDVSpuIf1RE4XmaOGsHQm5E0oUFREYdvb5Nj%2B4HBQMag9CvOf3dKHhb0jKhk4xqKYudj%2BsADr3CwwtIUxk&X-Amz-Signature=d460998a9ff1a138b55b601a68e3e1147c876d2d5017d02023156ddedd20b629&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZGD2H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4k8Mm3keMw1VcLLKoLP12reG4SqSR7J5D1SRhsntwPgIhAIBTt0ecDGHGRDQiWETiAMWLlqqnbeLU1WNpQ4aCn8MDKv8DCDgQABoMNjM3NDIzMTgzODA1IgxcftbWmGUCJV37jm4q3APBpabyKvwBQv3GPpyrriaGgH1pdNO5x3kZcMH2PH069p27lnCNyKO8Mn0io%2F%2FRx%2FlCfJKuy7J3Ggy8pjjp%2FVDEQz3ouGqEmfYm7FzpV412yARWiohBGFGmLJDDF1kuYS3Ifbwf4tsXqxrBnKz21XcbH2mPWisod50CdCVh00XOATrzUjr0dMg2C9lowFRCrU41lhn%2FSsiqk3spMDL3a%2BPOXZxNBa3WHS1vUTzYjzMURpTz5%2FrL9PYFpm2uhyeHzn5U6j85daJ683r0T6s2VxCxSQF4F4q1MoLoSUjGXBJE5WPQG6RbX6TaLbvX9Z3bpvj%2FrF8Ee5F4MQv7hCSenKcEw3oUzEwW0YKOGQAxUaVjNE1ZyiCcLLtWdFPW90H3zA%2FHhFaqMP8DYE1SH16GLaPVohs%2By3V4TJ1aOMJXgssvRrasFP8MIXTw%2FaioAOF6Qd9toycZHZ3Ju08kUWpcFVgGyqX9dx%2FcGYEOd27%2BoWuAywUooW3AvvR7aJRkQrfyEWcp8zwGJ7GzPT9YyyU91NyeUpd2NzvKQ4ajjq7Y9WcF8GVLNbe3sxldKoaa%2FfmrDyLhntcxETiniFoZHNsvXmuP3xaGpQcMOHfhePCyo3TnB5d%2FJMJRtwD6jPoBlTD3%2FuTABjqkAT4owoKreRMuYzEiwR%2Bun%2Fml4%2BTgdywrfvJiL7nR91iT33htGIpQHLt0eOYOVVhUi0rJRuyDK1njK4C1eQ1KgbyRwPYOcl%2FieOX5Nfid3JVrkdvE%2BS62yCjEGtCCBnR2EM%2BON6kvUFWDVSpuIf1RE4XmaOGsHQm5E0oUFREYdvb5Nj%2B4HBQMag9CvOf3dKHhb0jKhk4xqKYudj%2BsADr3CwwtIUxk&X-Amz-Signature=e75f07cedf1c671c2a59904c9ecdc12c3c508aa162b1c4f08bd2b75ec63033eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
