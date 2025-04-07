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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7B5E7FD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPiMZmmPv95XFUr7YTJuqAjZHWBJcDYhpsdUb5HHNopgIgRy8jIHR%2FPWEGTccCgRHG2XrpEoJiIPE9h2fJiyLuSu4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFsZNAuvNM1etArxRircA2TATRFiKMpKRp%2FiurQZa29wI1NJ2UUq%2Bmf%2FWrlvr5Kz7UXpg87o6ano6bexVdYSCpMH4q6QOEVlZFJ89FzaIohiNhpYsJakhWYhlToadLbJBXVLxoR0X4k14HKMqIlQ19hQAvFZmr4ietHmkgyZi4uhx5QYWGaSpkqdZ1F1tQdSCeQGTJwtlPZSZP5iGG5F0NbX7OY6kwIpxEa1%2FLt9UUXyEta%2B0IaOtA0KpgT9VbfW4MuyY575ZYc5b5Ablfa%2FknbIXW3wxVK0f11oEoAsGaOq5MN2L%2FgVcetCIKJmCSC1uw4ZLxmlnYnt0W0i1jcOKLetSBJty%2BhZkVkbNGYOrbfI6YUrrJsFXq%2F38N4mU0njjLYBwlyfUYF%2F9%2BEPeOOs3E1cTtWuA7t8q6T%2Fzy%2F8xArctuKTwniQAVKQjXx%2F6L3J%2Ft9Q%2F4%2FcC9Y45TCknQnHaDsPVsvWdwc2ZdPH3S8vpaOxyXww7SKbb%2FeBdiBEYHW%2BDXaD8AmDHRbtc%2F2x6dPlgAxWwEVvDYHbrT7%2B11ZIKAxHxMSCkAiPZrNJOSjbTLVVYbeTKE5P0joJgpz3oE4Idsujc%2FhpRvFP0eIh4P4kPrc9w9wsX899Bw%2FNe9%2FLNXAQ8idpAbHCkD8iCSBQMPTpzL8GOqUBSWcUz9jusBQJlCnTlHBFZkkrYvfUf0nqXgD2zG22wuPOn0rCy7UScBYkgaTBLrBJtEP%2BZl2yh2VsP8YiFvALDwSeYv4LKshr1yNYcvZUNFD8xnl5EdLZs3HluwFBT%2FJc7VqQfRM8pi%2FDTT%2Fz2GblEe30Guh7pdwMNpMM0zmXx%2FDeIjvKo4TRlzm5Kx2c6SXLuHeUIuZxC6U%2FxrlquQ%2F%2BQlyCE6T5&X-Amz-Signature=a77e131464fca278c4e157fc2e996e51bc1eed0b14407394fbe6f2752bf110e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7B5E7FD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPiMZmmPv95XFUr7YTJuqAjZHWBJcDYhpsdUb5HHNopgIgRy8jIHR%2FPWEGTccCgRHG2XrpEoJiIPE9h2fJiyLuSu4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFsZNAuvNM1etArxRircA2TATRFiKMpKRp%2FiurQZa29wI1NJ2UUq%2Bmf%2FWrlvr5Kz7UXpg87o6ano6bexVdYSCpMH4q6QOEVlZFJ89FzaIohiNhpYsJakhWYhlToadLbJBXVLxoR0X4k14HKMqIlQ19hQAvFZmr4ietHmkgyZi4uhx5QYWGaSpkqdZ1F1tQdSCeQGTJwtlPZSZP5iGG5F0NbX7OY6kwIpxEa1%2FLt9UUXyEta%2B0IaOtA0KpgT9VbfW4MuyY575ZYc5b5Ablfa%2FknbIXW3wxVK0f11oEoAsGaOq5MN2L%2FgVcetCIKJmCSC1uw4ZLxmlnYnt0W0i1jcOKLetSBJty%2BhZkVkbNGYOrbfI6YUrrJsFXq%2F38N4mU0njjLYBwlyfUYF%2F9%2BEPeOOs3E1cTtWuA7t8q6T%2Fzy%2F8xArctuKTwniQAVKQjXx%2F6L3J%2Ft9Q%2F4%2FcC9Y45TCknQnHaDsPVsvWdwc2ZdPH3S8vpaOxyXww7SKbb%2FeBdiBEYHW%2BDXaD8AmDHRbtc%2F2x6dPlgAxWwEVvDYHbrT7%2B11ZIKAxHxMSCkAiPZrNJOSjbTLVVYbeTKE5P0joJgpz3oE4Idsujc%2FhpRvFP0eIh4P4kPrc9w9wsX899Bw%2FNe9%2FLNXAQ8idpAbHCkD8iCSBQMPTpzL8GOqUBSWcUz9jusBQJlCnTlHBFZkkrYvfUf0nqXgD2zG22wuPOn0rCy7UScBYkgaTBLrBJtEP%2BZl2yh2VsP8YiFvALDwSeYv4LKshr1yNYcvZUNFD8xnl5EdLZs3HluwFBT%2FJc7VqQfRM8pi%2FDTT%2Fz2GblEe30Guh7pdwMNpMM0zmXx%2FDeIjvKo4TRlzm5Kx2c6SXLuHeUIuZxC6U%2FxrlquQ%2F%2BQlyCE6T5&X-Amz-Signature=f1aa23bafc59c64dd70b8645967ed36fcce357e6b579294692e7e4e994cc05a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
