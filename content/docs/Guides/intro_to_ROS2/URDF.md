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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHOFNDV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU%2FPbeqtkyFYmKPIHmu7LPPP0bbIWYdWrUl7P4rgXWyAiEAoCJXd5dKKGa9l3vTIh5GtDSDYCeLu1VaHmlxT%2FVQhN0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX4o%2FhlXVe2AD%2FqhCrcA8nxu5pwKt6tducj%2BQ8KXXbb0cxSw4i8GRq1OkSrwg%2FIuywwe8FK2FX%2Bxc8OApdCDPHdnyJ%2B%2FxjmIAOeXfPgwi49zuHM7i0y6QsuhIB7wNXfybxv9HzlA4ZDNaMxGiPKvIUQ567Sdz6BhLHBoRB6dvZhlhXeJHnsStZzikbrMGsmn9Lde%2BqNM6RHILS0D8x4O%2FXy77ma68fyhiigd9rMQ%2BV7td8iWLx9qB1SBPgjFTIcGJbfuxEoRPeh%2BXu67lG283VnTq%2FqHpSrs4VIayv2Nbifa3Ty%2BVbZAWYc2m%2FyNzypDphmj4dTsxsEttUFfSnMXEuBMxXNg6yENMltMvxTMtHFILZK0xPlS9mPpiGWcFhe9FCjehdjzh6ZWY6yqW12pKCs20qNLI9LrtP7zQZowLvFp8V57aq%2Bcw2C7%2BXXeSwrdsv6Qu8GV0xI8zrorpi9hTYdKVfykVOuVYzH%2FE%2F49Gx4rJRR0xodqA43HefQBToEgkTOaxC%2BFRO%2BY8UdFFPdvhpVxMxk%2BbDNrkm%2FWXb4EvoJj5ZjRIubt6p09jcrT2zWUbcmRgcFsZWdRGzXYWMpBJ2x3QBu80oYr1YiXeHhdveoo7FF4VPKx7NRWrC%2B7%2FAsFatJtom3Z5KZDMSwMP%2B6lMMGOqUB2T2LAvth%2BmijvQi5k3pe8uawYsrWVugunirfkdCIgav0GLehBwxry2cyyz67ZQCJzhCVynhTPdUIosz%2BTMvq6HMXpn2K8EdCBz1KCK2uwm7BbM6rxjhp4mzrFxI4jvtHZIJESWog%2BOY3m0ZdlR7309hNRFZGBiV1RAXL2hxrcVxYho1Vwvfvd5EZhGCLH1oxgffIVlFQq0kJkCqIxCamLAqiLQAK&X-Amz-Signature=48c3e7100ad67a4520297d67310b835df478b0369f08c28b1c241e5ba5873f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHOFNDV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU%2FPbeqtkyFYmKPIHmu7LPPP0bbIWYdWrUl7P4rgXWyAiEAoCJXd5dKKGa9l3vTIh5GtDSDYCeLu1VaHmlxT%2FVQhN0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX4o%2FhlXVe2AD%2FqhCrcA8nxu5pwKt6tducj%2BQ8KXXbb0cxSw4i8GRq1OkSrwg%2FIuywwe8FK2FX%2Bxc8OApdCDPHdnyJ%2B%2FxjmIAOeXfPgwi49zuHM7i0y6QsuhIB7wNXfybxv9HzlA4ZDNaMxGiPKvIUQ567Sdz6BhLHBoRB6dvZhlhXeJHnsStZzikbrMGsmn9Lde%2BqNM6RHILS0D8x4O%2FXy77ma68fyhiigd9rMQ%2BV7td8iWLx9qB1SBPgjFTIcGJbfuxEoRPeh%2BXu67lG283VnTq%2FqHpSrs4VIayv2Nbifa3Ty%2BVbZAWYc2m%2FyNzypDphmj4dTsxsEttUFfSnMXEuBMxXNg6yENMltMvxTMtHFILZK0xPlS9mPpiGWcFhe9FCjehdjzh6ZWY6yqW12pKCs20qNLI9LrtP7zQZowLvFp8V57aq%2Bcw2C7%2BXXeSwrdsv6Qu8GV0xI8zrorpi9hTYdKVfykVOuVYzH%2FE%2F49Gx4rJRR0xodqA43HefQBToEgkTOaxC%2BFRO%2BY8UdFFPdvhpVxMxk%2BbDNrkm%2FWXb4EvoJj5ZjRIubt6p09jcrT2zWUbcmRgcFsZWdRGzXYWMpBJ2x3QBu80oYr1YiXeHhdveoo7FF4VPKx7NRWrC%2B7%2FAsFatJtom3Z5KZDMSwMP%2B6lMMGOqUB2T2LAvth%2BmijvQi5k3pe8uawYsrWVugunirfkdCIgav0GLehBwxry2cyyz67ZQCJzhCVynhTPdUIosz%2BTMvq6HMXpn2K8EdCBz1KCK2uwm7BbM6rxjhp4mzrFxI4jvtHZIJESWog%2BOY3m0ZdlR7309hNRFZGBiV1RAXL2hxrcVxYho1Vwvfvd5EZhGCLH1oxgffIVlFQq0kJkCqIxCamLAqiLQAK&X-Amz-Signature=dfafa29e1ef3b7ebfcc147dc7605079c476ebab485003a89146c28ae150be7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
