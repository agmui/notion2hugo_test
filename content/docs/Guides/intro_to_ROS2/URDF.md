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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFCUM4V%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH9gjQta9ms8SQavWY6q67O%2BoHq24kXPZkOQoOzyUA0SAiEA2BlIY3WaRr8X2%2F4nKPcQ1Mu0V3dYJSs1f54Qa1jjQw8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOkP4mmTdjNo9bGnCrcAzYn6C8aHtbtHRSsYPZsAoKLIvmTEUjAWyJvfQ1QpIHBcFgpNleRf0Xa%2F%2BIIJTi%2BmBpNpbl99tGIkT%2F7yNGErhXLjcQz7xmMnGQhfX0WGwzYiacnPHCTl%2BdZf0%2FzgZTPwm0hagYiJOGF71bgyPPPAfr8bV7%2Fg9lvCTUDwPW19J7uSBZP9BGwNIFz2U%2B7bMBHlNUwclj09YjcLG8sUv7Q%2FzC6LP6nrjDz0ZW028OXltUHCPHwVBQxcGVJjWZscA4jK1aHERboabScGznuQQfgw9V9epC4iUQGtc1wmDJzMlRbI88jKIoTs09PiaexezqL0Q7qL5TdBJ%2BtTrPgBnxBGt8CnHVQdXeehaL9bksvHjB6zdbzeAn2kvCIbRfd80zCcxPIR5IAD0XWZIuCKq3sZjsJDTEq20pMz3lSfRnTeF%2ByAQOZF04GRwoV4OTPA4abFd1aFEVs4E%2F1wGRI5pjb7HlzEZh74XNMB372VVWu2fZwLzmIRKkhvH3PnP9A6hhmYYgPBmhV3Hy8nSRgoJDagrbj05FA8NrfGW3B4dagwAEh5Bi%2BgxIlo6oBnGaojlCbU%2BkR6hjoQMgWO0KdA7UDDHUaYYWT0eZSh2CESbwz8qGmc8dxToqIOqqzD6y3MPym6dAGOqUBjEEeve3uHZAdxY6DmiuqDN2p%2FVjy6%2F2wNJjS%2Bz6qFYWi0Aqrg8K4OVQDJwlz0bC6UWyvSliCR5n0C%2BYom717qhmMrucnDl2ZpF9H86UfiT3twIdTMU9Sp0E6A2b3w69Jfs7MTEsV5M9z38p52V4%2F6s%2FvPOjLl43vlfEJCvKFr5LN04Dp3KbkKVUB5t43ljbD1jvPk1QdW771WTPcDRJJjifBdJfC&X-Amz-Signature=bee6e431ca0df52a688c4af683a6da3e88649cdb637e4d6eccf0dc90d1e90bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFCUM4V%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH9gjQta9ms8SQavWY6q67O%2BoHq24kXPZkOQoOzyUA0SAiEA2BlIY3WaRr8X2%2F4nKPcQ1Mu0V3dYJSs1f54Qa1jjQw8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOkP4mmTdjNo9bGnCrcAzYn6C8aHtbtHRSsYPZsAoKLIvmTEUjAWyJvfQ1QpIHBcFgpNleRf0Xa%2F%2BIIJTi%2BmBpNpbl99tGIkT%2F7yNGErhXLjcQz7xmMnGQhfX0WGwzYiacnPHCTl%2BdZf0%2FzgZTPwm0hagYiJOGF71bgyPPPAfr8bV7%2Fg9lvCTUDwPW19J7uSBZP9BGwNIFz2U%2B7bMBHlNUwclj09YjcLG8sUv7Q%2FzC6LP6nrjDz0ZW028OXltUHCPHwVBQxcGVJjWZscA4jK1aHERboabScGznuQQfgw9V9epC4iUQGtc1wmDJzMlRbI88jKIoTs09PiaexezqL0Q7qL5TdBJ%2BtTrPgBnxBGt8CnHVQdXeehaL9bksvHjB6zdbzeAn2kvCIbRfd80zCcxPIR5IAD0XWZIuCKq3sZjsJDTEq20pMz3lSfRnTeF%2ByAQOZF04GRwoV4OTPA4abFd1aFEVs4E%2F1wGRI5pjb7HlzEZh74XNMB372VVWu2fZwLzmIRKkhvH3PnP9A6hhmYYgPBmhV3Hy8nSRgoJDagrbj05FA8NrfGW3B4dagwAEh5Bi%2BgxIlo6oBnGaojlCbU%2BkR6hjoQMgWO0KdA7UDDHUaYYWT0eZSh2CESbwz8qGmc8dxToqIOqqzD6y3MPym6dAGOqUBjEEeve3uHZAdxY6DmiuqDN2p%2FVjy6%2F2wNJjS%2Bz6qFYWi0Aqrg8K4OVQDJwlz0bC6UWyvSliCR5n0C%2BYom717qhmMrucnDl2ZpF9H86UfiT3twIdTMU9Sp0E6A2b3w69Jfs7MTEsV5M9z38p52V4%2F6s%2FvPOjLl43vlfEJCvKFr5LN04Dp3KbkKVUB5t43ljbD1jvPk1QdW771WTPcDRJJjifBdJfC&X-Amz-Signature=678205f2b2d7e1ab920aaa89e69b193bd6db7fdaf6d0554d90d60648c2e7a144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
