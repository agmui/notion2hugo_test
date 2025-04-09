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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFLFTRZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC7wnXomf3oznxiHm8UArD2yFXpxyJvNpO%2By%2FsOP%2FXKFAIhAMLU%2FXEr%2Bcnwtn4RmBHGL8DTXLpfYqmzP1yIjRf3YmjhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBqPmOv3v9SyzOW4q3APOGvx%2BaPCT242HaR0azHiEUBufn8ttwxc7MzEUdweEKqpg5iWm5tes%2BC1OBlUCDRAYYtM%2BiUf0raFY%2B%2Fw%2B8tWjVvrGtQh%2FCd%2BC6JcJjj6Kt3wSdTkh6MahNRFk5b9mEEgpzW0PHO9m9xmeiqEgEa2mtX1fIscpn0SHUR1qGWPSWRbKgSHi%2FFkEnWwMezKSgdI339WWNJSR3haYXRFCjp7W4Lh7IJKo15lkBsm9716bgw5Tgb1Xv1FkWcKmCle%2FG9%2BUCjZF611I%2BTHGMJexjg4311Fd3bKzYkcJaWNbJBQlxogxrYyqjPrMha%2FsP66779VM3Q5ORSFEVB14VRgHeJ0b%2FYntVjglST4yNyI7A4EBHbpsNvxMDZanz09HfPNslsV63UjvEia3G0hWPvy4vl%2B9IsvuFw7azo%2FuvrWA0DPc223do2UZy8H0pbyzaBhV0LKC1fQMgtrJFS8u%2FJ6uGla4mDUe48QBDn5lBMVLrqdY53WQRQs3A4921J3A2WYrz4K1RSPqC8xcARQHs1cXOaekv60OCZjGRgJv74ca8q7Gv1%2B3PoncTBNGsW8560WbEvDWTIj0Me2Te9yOTpr8%2BOcvBYvQWU1I%2BAAaS0ushGW4vPqEIMDq5WAOFF80RTC149u%2FBjqkAVIer%2BylcD5vV9YrhmXI3KS%2F9SvuE%2FuKLCThRPBqYQEXOWVKhCFWRPTd1BI3svr3ahLfrc3GV9nvdNovT6fQSgFc6yQrUDGu7vmnHV9Vopdhki3MhUmhAfRV9MtB8qLiP9rVvTASctkopweCWHDMfHuEInbjX0zc4dH%2FQ9IW2WzWnnOVvxgXh%2BXP%2BPkAnRQgdoDoWdRW97HC7qIGGW6pgbzi60yP&X-Amz-Signature=79b7f1105ad47fd471855c44dbaeecd567d8d2d92fee40a405317d8a5abb8e30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFLFTRZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC7wnXomf3oznxiHm8UArD2yFXpxyJvNpO%2By%2FsOP%2FXKFAIhAMLU%2FXEr%2Bcnwtn4RmBHGL8DTXLpfYqmzP1yIjRf3YmjhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBqPmOv3v9SyzOW4q3APOGvx%2BaPCT242HaR0azHiEUBufn8ttwxc7MzEUdweEKqpg5iWm5tes%2BC1OBlUCDRAYYtM%2BiUf0raFY%2B%2Fw%2B8tWjVvrGtQh%2FCd%2BC6JcJjj6Kt3wSdTkh6MahNRFk5b9mEEgpzW0PHO9m9xmeiqEgEa2mtX1fIscpn0SHUR1qGWPSWRbKgSHi%2FFkEnWwMezKSgdI339WWNJSR3haYXRFCjp7W4Lh7IJKo15lkBsm9716bgw5Tgb1Xv1FkWcKmCle%2FG9%2BUCjZF611I%2BTHGMJexjg4311Fd3bKzYkcJaWNbJBQlxogxrYyqjPrMha%2FsP66779VM3Q5ORSFEVB14VRgHeJ0b%2FYntVjglST4yNyI7A4EBHbpsNvxMDZanz09HfPNslsV63UjvEia3G0hWPvy4vl%2B9IsvuFw7azo%2FuvrWA0DPc223do2UZy8H0pbyzaBhV0LKC1fQMgtrJFS8u%2FJ6uGla4mDUe48QBDn5lBMVLrqdY53WQRQs3A4921J3A2WYrz4K1RSPqC8xcARQHs1cXOaekv60OCZjGRgJv74ca8q7Gv1%2B3PoncTBNGsW8560WbEvDWTIj0Me2Te9yOTpr8%2BOcvBYvQWU1I%2BAAaS0ushGW4vPqEIMDq5WAOFF80RTC149u%2FBjqkAVIer%2BylcD5vV9YrhmXI3KS%2F9SvuE%2FuKLCThRPBqYQEXOWVKhCFWRPTd1BI3svr3ahLfrc3GV9nvdNovT6fQSgFc6yQrUDGu7vmnHV9Vopdhki3MhUmhAfRV9MtB8qLiP9rVvTASctkopweCWHDMfHuEInbjX0zc4dH%2FQ9IW2WzWnnOVvxgXh%2BXP%2BPkAnRQgdoDoWdRW97HC7qIGGW6pgbzi60yP&X-Amz-Signature=df2a2539a5a769668a3c26a5a8c150c56d67c29cda5e67fa30890c043a63852e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
