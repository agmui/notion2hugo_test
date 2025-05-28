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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXDGJQG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWYiKFqsA%2F8%2Bk%2FEjw%2FxnMnHuL%2FxLtlTuOoOaVxWp40MgIhAJK6NiN%2F5M8TCy5YC01f2W9uUJn4kvHMmx7GkTGM6mgPKv8DCGoQABoMNjM3NDIzMTgzODA1IgxgZ%2FlupotRqJx7gdMq3AOGqZI2vZ9mnnxdF1p%2BijXjsayXJVfrmlE2sJ09MUQuGAZ5TwLxXAXQNwWQLvlNEjvWaXKvojh9spZLRwVCrh7RlQPY4nKkPDpMBvMw1A6SnY0wmIsFzwKIsNQREXhjPuptwS%2FPSSfH4oNE5M2yPKn9G0jS2xu7WaG5jIYIf7MEoQXvuN0%2BocmvEttYJHnYVT77okVivRuK0lm%2BIFLcjjO5%2BUG1DR7Fu383LRtB98rcKmDkMKBpcUE4ZKSm%2BR5tHOK6xUrT9GCJ8TXGrR%2BlktdWSoE6x0Z5ICeKQPeRecY3wR66lNKai93cnOIFKycavm6d2vMjT%2FeDYx9xt1eQEzAZyLTy4BRD1svg9CCNBiYzrUkhXze0SN92sYMhd7QC146P07EvLfgqWgMkfV4ZcWncyW9v2%2BwEsugjA5gQhW%2FdHA5lt3qC13G%2FLYO7hiIffk26tu0QcleHnkTUkYMBF2c6BnOXxn4veUECZU3eA9J8boRJfiMP%2BnUph7IE%2BdWD7wJfbC2qu5UwhY65HH%2BShrC0DNLjX%2B8MbnDSdwmFYzQrWH4N2lRTsLD551YwxjZD85i70NVlstVv7SrG%2F7DcEe%2BoH7m8EoHr2CzuRA5gGfBkAFjINLtgmWMkqIkgxDCPvNnBBjqkAWeS5VQ1hn6b9YxNf9eoZ7dwK4TxSJvp7KRFau%2Fwv0pC7W3p2HoK9vYzPLY7pXRe1cg1zLmWMVUa5eKRbvv0N2S2dAB3WrfRBMYAJncVxlJl7gcuuYkK7lx5rI8MxdP7UtB%2BHZNz1BtdMD5qDgsqEtkfKK16gAwH8G7hgFv0PK%2Faz34zsYHHlmXUOti3Q4ULijX71Rpn5nFgy%2B2rE%2BHFJaECm3AQ&X-Amz-Signature=db73972c9feab16082da9f8eaf31736c0e1fddc93e567ba4e63c67daaf3d4fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXDGJQG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWYiKFqsA%2F8%2Bk%2FEjw%2FxnMnHuL%2FxLtlTuOoOaVxWp40MgIhAJK6NiN%2F5M8TCy5YC01f2W9uUJn4kvHMmx7GkTGM6mgPKv8DCGoQABoMNjM3NDIzMTgzODA1IgxgZ%2FlupotRqJx7gdMq3AOGqZI2vZ9mnnxdF1p%2BijXjsayXJVfrmlE2sJ09MUQuGAZ5TwLxXAXQNwWQLvlNEjvWaXKvojh9spZLRwVCrh7RlQPY4nKkPDpMBvMw1A6SnY0wmIsFzwKIsNQREXhjPuptwS%2FPSSfH4oNE5M2yPKn9G0jS2xu7WaG5jIYIf7MEoQXvuN0%2BocmvEttYJHnYVT77okVivRuK0lm%2BIFLcjjO5%2BUG1DR7Fu383LRtB98rcKmDkMKBpcUE4ZKSm%2BR5tHOK6xUrT9GCJ8TXGrR%2BlktdWSoE6x0Z5ICeKQPeRecY3wR66lNKai93cnOIFKycavm6d2vMjT%2FeDYx9xt1eQEzAZyLTy4BRD1svg9CCNBiYzrUkhXze0SN92sYMhd7QC146P07EvLfgqWgMkfV4ZcWncyW9v2%2BwEsugjA5gQhW%2FdHA5lt3qC13G%2FLYO7hiIffk26tu0QcleHnkTUkYMBF2c6BnOXxn4veUECZU3eA9J8boRJfiMP%2BnUph7IE%2BdWD7wJfbC2qu5UwhY65HH%2BShrC0DNLjX%2B8MbnDSdwmFYzQrWH4N2lRTsLD551YwxjZD85i70NVlstVv7SrG%2F7DcEe%2BoH7m8EoHr2CzuRA5gGfBkAFjINLtgmWMkqIkgxDCPvNnBBjqkAWeS5VQ1hn6b9YxNf9eoZ7dwK4TxSJvp7KRFau%2Fwv0pC7W3p2HoK9vYzPLY7pXRe1cg1zLmWMVUa5eKRbvv0N2S2dAB3WrfRBMYAJncVxlJl7gcuuYkK7lx5rI8MxdP7UtB%2BHZNz1BtdMD5qDgsqEtkfKK16gAwH8G7hgFv0PK%2Faz34zsYHHlmXUOti3Q4ULijX71Rpn5nFgy%2B2rE%2BHFJaECm3AQ&X-Amz-Signature=47480558d733be6ee3541c4f218ee384a5205b66f57c196259964bfd18f123b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
