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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGT76IY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rah%2F67hBXPIbY9yX8yF4JE7rld70THRI1wdPyRshtAiA5MXl8UAjX7uIc94UeNHHI%2FG%2Fb%2FqQH7WSrd2y7Tnl%2FoiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWDtWRDvcs48%2FKFOvKtwDUkhOj94LcsnOdLiI4cV%2F9NVVN8xrfS9yZJIK7HgQN1Gb6X71T10fl%2BhyEse4uatZk8Y6jDAER%2FrRNNZDIbWyUoWPiahUcm9WicxEhRbqtQ6I6MeiT%2Fpd6GI9VAvEPMJI4T3gsqOlBmp1T06LU5oFoEGqpqeY1FntXjXxHgGp6zzMP4ozN8Bbql3REnoHEggSldh5aoiVH9GaJUdKkQ3fo2QVSGJM2afbgvXWvlFA7usTf5%2FdhqQMX6OFFTm0IkwxoFNn8lAC6VqmTg9gG2ADPrVT0%2Fc7d08CU8wTEJbo8MUyOkc9vKByiv%2BKTlVhmWsp7Ai5Ux349TdJpXc13SBylpe3PESEhAC%2F%2Fvf8x0c2IsWUPioelovOSFwkTNc1j1BMXYvQ8EeJWS7%2BS0CY3b0CBhSNhh3CVRm%2FdWw7Zv8HKWMEJtFgkIReKH4auFH1csEp7PcCpErMLAkyqpn%2F8uWWdOAyeDemNGfgLVhMfNI3ouc%2BQ169QQLpEwxyz7gzTw4qkouyg8fLr9sBNsqKZ5O3TSWsiJrJ%2By8biTLZk7fQ1js4WGsvWJ56c5rA9PnIHu6lwYsTdUGUuvprp4mO7%2BvxQr9eU5rk54PFq95poCsuxIqvzuXDeN1CUfhb44gwl92ZwgY6pgE1ocE9Ft90UNrkdlzyltjhqEbudl9zTnnoBYFwSa5jH5rkFdGv%2FuYX2LsWGkdcEd8ha9wW5gpqRW%2FRoygyjGgM%2FLz7mKJdv%2F%2BIfVQxSqgiZVOCx7kDh1NvGB7LzKacw0nU0odb9IptI0pC2Q3XWZb7CURukxi8iau3ar3rF8e%2FvTpFbUN%2BW36dyo0KjP5%2BKeiX0TpcP%2BzxSeqNDzI7HNd%2BRFj%2FdrJt&X-Amz-Signature=8f9de7382387fad8854d9106568dc950a0807754d94069bea529fe24bf091a60&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGT76IY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rah%2F67hBXPIbY9yX8yF4JE7rld70THRI1wdPyRshtAiA5MXl8UAjX7uIc94UeNHHI%2FG%2Fb%2FqQH7WSrd2y7Tnl%2FoiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWDtWRDvcs48%2FKFOvKtwDUkhOj94LcsnOdLiI4cV%2F9NVVN8xrfS9yZJIK7HgQN1Gb6X71T10fl%2BhyEse4uatZk8Y6jDAER%2FrRNNZDIbWyUoWPiahUcm9WicxEhRbqtQ6I6MeiT%2Fpd6GI9VAvEPMJI4T3gsqOlBmp1T06LU5oFoEGqpqeY1FntXjXxHgGp6zzMP4ozN8Bbql3REnoHEggSldh5aoiVH9GaJUdKkQ3fo2QVSGJM2afbgvXWvlFA7usTf5%2FdhqQMX6OFFTm0IkwxoFNn8lAC6VqmTg9gG2ADPrVT0%2Fc7d08CU8wTEJbo8MUyOkc9vKByiv%2BKTlVhmWsp7Ai5Ux349TdJpXc13SBylpe3PESEhAC%2F%2Fvf8x0c2IsWUPioelovOSFwkTNc1j1BMXYvQ8EeJWS7%2BS0CY3b0CBhSNhh3CVRm%2FdWw7Zv8HKWMEJtFgkIReKH4auFH1csEp7PcCpErMLAkyqpn%2F8uWWdOAyeDemNGfgLVhMfNI3ouc%2BQ169QQLpEwxyz7gzTw4qkouyg8fLr9sBNsqKZ5O3TSWsiJrJ%2By8biTLZk7fQ1js4WGsvWJ56c5rA9PnIHu6lwYsTdUGUuvprp4mO7%2BvxQr9eU5rk54PFq95poCsuxIqvzuXDeN1CUfhb44gwl92ZwgY6pgE1ocE9Ft90UNrkdlzyltjhqEbudl9zTnnoBYFwSa5jH5rkFdGv%2FuYX2LsWGkdcEd8ha9wW5gpqRW%2FRoygyjGgM%2FLz7mKJdv%2F%2BIfVQxSqgiZVOCx7kDh1NvGB7LzKacw0nU0odb9IptI0pC2Q3XWZb7CURukxi8iau3ar3rF8e%2FvTpFbUN%2BW36dyo0KjP5%2BKeiX0TpcP%2BzxSeqNDzI7HNd%2BRFj%2FdrJt&X-Amz-Signature=4b48bebdaf46cd2ecb408af5840dc807fdd9da3a3d6257ba25478039f5e9e169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
