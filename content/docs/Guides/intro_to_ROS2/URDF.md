---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYPZK4C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFGBz8RestbizCZKq8CnjGScaxpJx9XrZai1iar8%2B9qcAiEA3O%2BHliFbwF9NqJE8YfmvCnyiD0kvXj1%2FG00bS%2F8xi1oq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKjyLrz%2FxlUO0egI%2BircAxq5bsEBhzcdDWtzzsVe%2FX2ccYIVPb3EOA6HyY6oj3Jc4adtnA8oSo94lJYUPStcNLt8%2FEzq6eYU%2BeO%2F%2FWB47nXS1Wt1GvDUXL6%2BcOkpywLN58C1y9hg3EhS0UBO5wxjy9GdA%2Fjcxd16M%2BMsCLf7v4OMj5sg8L8%2BM98XBTEmw7fY0S2G2k6jXFTFarOfHsWCDuOIUX2AQP6vk1M5uqxqlQVdLaRUABzz%2F2Di0e5dEiF6j3l2dFWIVjV26lvISKwbPmpUlwICG0SC2vjoEMS2lt2xGOeakwxFX9gYYGwTzsX5kUDAt5hfPAnqE37O8aIANKYvncwN5w%2BlXA3WVc67J4pqdxkUMticQKrEdHZtywZA2VT%2FI%2BMz64yrN17YtN0hPw17OBxBxtUK%2FTo6LQGj1Uv5b4%2FserYkTZPNGaGCxneYXBCkemFNfS1EyAQrCWFIW6I0a13ql8RItpDZuRjFxmcwhvPmjpkB6YX4QO65ERjx3CtFT3OtCVOiMR72G5CtWAbkS0XRkpoBlRxx3NLlp%2FEnWS9Dhgrl54x6nElrlUF0q2XHN6Pi%2FqFJ9%2FbSTE02Yws4akGR%2FpKZbz1fM5VlLTnY0pUiDAbrm7vxJRmY70kS4TwLUzMR4YIP4ul1MOHj%2F8QGOqUBVK7mtvUrfDtY48bxWohLkx%2BRQSHy6h7Pbd6VNaMCYtUi9Q7c5MfoB5yPy9Mpu5B2dU1VZt1MO2DUfrZHT1f%2FQ1FNw5jfJz1ZLJRwc6gG4oEOqcnFR7F7Oh08FIIGQL4ulUJk24hxYFH%2FReGaJ6hrGPPA6%2FaZfiuwAKFjVHGOfvGhbb8vNHveYQ0Fr0MbX9umOFXvRPvUGV%2BX4H0gJnoSfgZ4XVY2&X-Amz-Signature=cf167769ac3341ef2b0a7b758653e57037ffca9d1b053823e0f14e7813cb9ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYPZK4C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFGBz8RestbizCZKq8CnjGScaxpJx9XrZai1iar8%2B9qcAiEA3O%2BHliFbwF9NqJE8YfmvCnyiD0kvXj1%2FG00bS%2F8xi1oq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKjyLrz%2FxlUO0egI%2BircAxq5bsEBhzcdDWtzzsVe%2FX2ccYIVPb3EOA6HyY6oj3Jc4adtnA8oSo94lJYUPStcNLt8%2FEzq6eYU%2BeO%2F%2FWB47nXS1Wt1GvDUXL6%2BcOkpywLN58C1y9hg3EhS0UBO5wxjy9GdA%2Fjcxd16M%2BMsCLf7v4OMj5sg8L8%2BM98XBTEmw7fY0S2G2k6jXFTFarOfHsWCDuOIUX2AQP6vk1M5uqxqlQVdLaRUABzz%2F2Di0e5dEiF6j3l2dFWIVjV26lvISKwbPmpUlwICG0SC2vjoEMS2lt2xGOeakwxFX9gYYGwTzsX5kUDAt5hfPAnqE37O8aIANKYvncwN5w%2BlXA3WVc67J4pqdxkUMticQKrEdHZtywZA2VT%2FI%2BMz64yrN17YtN0hPw17OBxBxtUK%2FTo6LQGj1Uv5b4%2FserYkTZPNGaGCxneYXBCkemFNfS1EyAQrCWFIW6I0a13ql8RItpDZuRjFxmcwhvPmjpkB6YX4QO65ERjx3CtFT3OtCVOiMR72G5CtWAbkS0XRkpoBlRxx3NLlp%2FEnWS9Dhgrl54x6nElrlUF0q2XHN6Pi%2FqFJ9%2FbSTE02Yws4akGR%2FpKZbz1fM5VlLTnY0pUiDAbrm7vxJRmY70kS4TwLUzMR4YIP4ul1MOHj%2F8QGOqUBVK7mtvUrfDtY48bxWohLkx%2BRQSHy6h7Pbd6VNaMCYtUi9Q7c5MfoB5yPy9Mpu5B2dU1VZt1MO2DUfrZHT1f%2FQ1FNw5jfJz1ZLJRwc6gG4oEOqcnFR7F7Oh08FIIGQL4ulUJk24hxYFH%2FReGaJ6hrGPPA6%2FaZfiuwAKFjVHGOfvGhbb8vNHveYQ0Fr0MbX9umOFXvRPvUGV%2BX4H0gJnoSfgZ4XVY2&X-Amz-Signature=4aaa7f2aea3a9963607b66ed44dc6569e4b68f91d21bf01c9bba8afd2ae57ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
