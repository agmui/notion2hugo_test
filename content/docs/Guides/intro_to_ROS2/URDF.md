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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LMANYG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE9KD6QpFfqF%2FsksbO2AYshjra4H9QyEfIJqnQypLs94AiAR1r%2FIdlab0Tb5KRtwF%2FQg8xC%2FAp1styvtWRjF4zaYNyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMM0KbXeIpVZ3YSGSKtwDZ5DtfCP8ww8PjsKDfliKRpRZTT2jlXG%2F4Ju%2BKmTequkC7qf4X32oAoBZuj0bBWVJR9g%2BqIrRkYgR%2FR1LcSOKhAmB5yvj0Cw8JPp93oI%2F%2FpXV%2FYvVtwkPKJNbfXuz6psMgjVH1BgF8xVvlG42AifVeDoZql5ZEuSqMvkHfyk4LsINwci2loP3QyjYE14tDjW3xzfTE5jn01Bu%2BdfwWJpjVlVF080%2B3fPhh3NH129f0Y%2BN2O849Hf8D741hdHneAqorZa7N9GMLtXu9Wc6bQQIErLakiLpNqYvzBZdzUR7txYMtcgBT848OBhpoCKeZPnic8Rx7TJtz93%2Bj3MK%2BsfIzKbYWwWoXa3ctroul3NVGWiOvfv%2Fuse7%2B9pVQKvVqLc4IjVAgjZaoZD2thSh6bvY4j3N00sdPLWDSnCTIinU11LsxjbndyHBnJiTBieqDgu4kmeHkUYdDXTCXLRt7tLFqmLHLz3w1o7ZST3WaIHkQKrls2c3lg5Que6U3fe6Q6nwuSUBnW%2BVTSUU5DJhgnOy3Xhkt77SXHmzyoosQr9eMMrxL%2BW%2F7iH99sOxHYoPlvwtsGefvJWMtYNEhtoUF%2FCRv1B1%2B8fWLcF9OQVoCdGh7XEeWvj8f%2FmTzZf5MFAwq9r8yQY6pgEAqorNAppbWee%2BsNjo8tFjEoVZGt%2BfRt%2Fr9LFbs%2BLUhaIaovAepPD56kr1oO%2FuZicIkA6ITTOqYUZD3aa4PuFoKVsyxdB3gJ2QqC35%2BZDboAU52gnmscOOpFKHOzeED1y52%2BncRKdV35HvxX4dkHhunJOrpRLZ742%2BWAFYciJkScuZk52Q6qCHV6rqnHFTt4YHTwyEYNWFJOd6yhdPDOig%2B7w0iLXl&X-Amz-Signature=930ae32c40afb0cd836e1679f3f9f8c8518d05c5a99c5262dee516e3cb94be08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LMANYG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE9KD6QpFfqF%2FsksbO2AYshjra4H9QyEfIJqnQypLs94AiAR1r%2FIdlab0Tb5KRtwF%2FQg8xC%2FAp1styvtWRjF4zaYNyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMM0KbXeIpVZ3YSGSKtwDZ5DtfCP8ww8PjsKDfliKRpRZTT2jlXG%2F4Ju%2BKmTequkC7qf4X32oAoBZuj0bBWVJR9g%2BqIrRkYgR%2FR1LcSOKhAmB5yvj0Cw8JPp93oI%2F%2FpXV%2FYvVtwkPKJNbfXuz6psMgjVH1BgF8xVvlG42AifVeDoZql5ZEuSqMvkHfyk4LsINwci2loP3QyjYE14tDjW3xzfTE5jn01Bu%2BdfwWJpjVlVF080%2B3fPhh3NH129f0Y%2BN2O849Hf8D741hdHneAqorZa7N9GMLtXu9Wc6bQQIErLakiLpNqYvzBZdzUR7txYMtcgBT848OBhpoCKeZPnic8Rx7TJtz93%2Bj3MK%2BsfIzKbYWwWoXa3ctroul3NVGWiOvfv%2Fuse7%2B9pVQKvVqLc4IjVAgjZaoZD2thSh6bvY4j3N00sdPLWDSnCTIinU11LsxjbndyHBnJiTBieqDgu4kmeHkUYdDXTCXLRt7tLFqmLHLz3w1o7ZST3WaIHkQKrls2c3lg5Que6U3fe6Q6nwuSUBnW%2BVTSUU5DJhgnOy3Xhkt77SXHmzyoosQr9eMMrxL%2BW%2F7iH99sOxHYoPlvwtsGefvJWMtYNEhtoUF%2FCRv1B1%2B8fWLcF9OQVoCdGh7XEeWvj8f%2FmTzZf5MFAwq9r8yQY6pgEAqorNAppbWee%2BsNjo8tFjEoVZGt%2BfRt%2Fr9LFbs%2BLUhaIaovAepPD56kr1oO%2FuZicIkA6ITTOqYUZD3aa4PuFoKVsyxdB3gJ2QqC35%2BZDboAU52gnmscOOpFKHOzeED1y52%2BncRKdV35HvxX4dkHhunJOrpRLZ742%2BWAFYciJkScuZk52Q6qCHV6rqnHFTt4YHTwyEYNWFJOd6yhdPDOig%2B7w0iLXl&X-Amz-Signature=9649efd4c38da69888dd44a08f127dca33dc57beada57a298b760a03187ce97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
