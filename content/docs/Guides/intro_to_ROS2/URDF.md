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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XFE2EZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDTVq%2B%2F8pYrVG0mQOxJTT2zHBC5nBh%2Fopki%2B6SfAgenGAIgeO91UOnfwzOExZWIB6LVBc2v9%2FGUSCE84KsfIS89cVAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAgJGn7NwzEbJ01payrcAwQ%2BR8%2BIdYR65%2F1YGx5MHKOKmqqPSLMhoeMXwKXPA%2FyTZoeKHqYRLlozUkm5XvlZDsa8J4pDD65xYPZKUuN43SdEuq08%2BSK9ZmViXN55v%2F%2BDJVDiq6zjNLGh31ictSAGSnBhwy0z5gfab1gzBXIrD8UcUNXYbMeU8fKyOAZn0uJq8HtoZaiSZpFetgAi04OP8vt%2FcF2tHwO5%2BFq2i78A6eEUl4ugXR4QhO0ZAwoQhEiePpDanSVcjpLONhiJhV2q1ANl2dhTafJbSMmudGbPcp5GrI486kahAuWYO6PpfQayo8Kpvg8pBHZMqRb300Ao3AsbQaK2AGz9GdA5hHkF4KXGZK1w0%2BuS8JSxUf5oIpnE1BnVs7xvNhh44bXHvWXxFLWYc%2BxNpo2jDWoRoP09JOH0FHbVsz13YiYeZBUE4Z5o%2BKbcTJ%2FpsYxznBFwAC6%2BpN5%2Bc7O1I0ZsVoK0htMQajUyVHMDYwR2Xjo3K2JWSPnyU%2Bz9f2c1TWyjEzfMNoD2zsl7vB0dXPHywchn%2Bbg6rcfk1lHxnoctAuxceB0f4O3Qw1Gnc0eY0tgPa2kuv04hiBcAFWy9yo7E%2BSbjqN7Wj%2Bfr%2BYv9lbjYwQh%2BknDBwnq9Y0mx8nGpNHsAAUAjMOnkm8MGOqUBZ7PeIGfHM9Pp34wVVw3CSbgwKRNwa7aEh6vKw925WtvYp%2BpGD1fVzm9BBvGfj6JwZ77wyFEan3Ko1%2FK3Jn85MxphbmIp%2BtnT%2BNRwi%2FHSQUzpcoF2TK%2FCmj6GOqtPy8gmwsHkNFdA9J4H6kPCYGIz3c9ONQK3PFmym7F182dYsZVgtfqUwFDxonjRzPS71bBKmHIDKSEYz4MDi4YBj2EKQl%2FVo%2BjR&X-Amz-Signature=d64e11d482f1f10915b2bc6e2bd553255d1f6fb0dea0c47fdc0801c7d80bdb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XFE2EZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDTVq%2B%2F8pYrVG0mQOxJTT2zHBC5nBh%2Fopki%2B6SfAgenGAIgeO91UOnfwzOExZWIB6LVBc2v9%2FGUSCE84KsfIS89cVAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAgJGn7NwzEbJ01payrcAwQ%2BR8%2BIdYR65%2F1YGx5MHKOKmqqPSLMhoeMXwKXPA%2FyTZoeKHqYRLlozUkm5XvlZDsa8J4pDD65xYPZKUuN43SdEuq08%2BSK9ZmViXN55v%2F%2BDJVDiq6zjNLGh31ictSAGSnBhwy0z5gfab1gzBXIrD8UcUNXYbMeU8fKyOAZn0uJq8HtoZaiSZpFetgAi04OP8vt%2FcF2tHwO5%2BFq2i78A6eEUl4ugXR4QhO0ZAwoQhEiePpDanSVcjpLONhiJhV2q1ANl2dhTafJbSMmudGbPcp5GrI486kahAuWYO6PpfQayo8Kpvg8pBHZMqRb300Ao3AsbQaK2AGz9GdA5hHkF4KXGZK1w0%2BuS8JSxUf5oIpnE1BnVs7xvNhh44bXHvWXxFLWYc%2BxNpo2jDWoRoP09JOH0FHbVsz13YiYeZBUE4Z5o%2BKbcTJ%2FpsYxznBFwAC6%2BpN5%2Bc7O1I0ZsVoK0htMQajUyVHMDYwR2Xjo3K2JWSPnyU%2Bz9f2c1TWyjEzfMNoD2zsl7vB0dXPHywchn%2Bbg6rcfk1lHxnoctAuxceB0f4O3Qw1Gnc0eY0tgPa2kuv04hiBcAFWy9yo7E%2BSbjqN7Wj%2Bfr%2BYv9lbjYwQh%2BknDBwnq9Y0mx8nGpNHsAAUAjMOnkm8MGOqUBZ7PeIGfHM9Pp34wVVw3CSbgwKRNwa7aEh6vKw925WtvYp%2BpGD1fVzm9BBvGfj6JwZ77wyFEan3Ko1%2FK3Jn85MxphbmIp%2BtnT%2BNRwi%2FHSQUzpcoF2TK%2FCmj6GOqtPy8gmwsHkNFdA9J4H6kPCYGIz3c9ONQK3PFmym7F182dYsZVgtfqUwFDxonjRzPS71bBKmHIDKSEYz4MDi4YBj2EKQl%2FVo%2BjR&X-Amz-Signature=be7d086865dd7896a050b807d1a77287f4a19a120fc01df629f017d094447821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
