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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLTL342D%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwLd9f59Mad8pslImgBI1IuRvbZDWWTw46WWnxD7Hf%2FAiEAiKbk%2BGkMAipNXCYZIMUwVlHnrdN51d69%2B%2BgnQ3Or%2FZYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKxRADh0JU68kg6tHSrcA2lqDLQ8hGkEXUMmGlJNu3X58F6SvUYoQueosNKTkiykR5eQOKtNCd5zNsxjegcNHgUmvK3oUgFnUg8hxcZcrFvwFUZOT%2FoGsDFKIifO%2F1ShF1DtbbZ5XN7PhAIZ2%2FmiLCWgjpQqNztNPeSIxL1O8lo4k14bOAwJOCQZstFvIaqqCQoFnfid6Cs3mfRM033WpoWHUyO1rn9uE%2BP84twKoH2edBcF7N3sNyUwmwm6WgPss%2BDJhHsovB67zZvE%2F0W9AzxtCZfjpmO%2F90G3ZkMsYlhOi6wlEQimBWlb7HfjgPRFTSHEFw0t8qxinpgP92b7iCqyHY0L%2FPhpSd%2FJb3qR3spzTS7qXt0BHrfWUHzM4ptuPgy8UZgc7QhEGBhmrBcmEb5Z%2FnJSLMMIAbV%2BzLoT6hE8LUWK6vOwfIzVEvNtsWXSyZkUYeR6WHqCxJ7wWIJWJmbN7cYcoXXtp5iPAKYG%2BFWEFetwZl0oSfUTPt1konbm2zAL9LT4bqaWBZad8%2BSl%2BKDxUtvxBtu8nFuzOuR4KiOv5dByTG6mZKEHf6%2FIbt%2FO8Dd4nv%2FWLcGd1TO2saOeNxRM0XtdLVsVQ3CMfjnZUzKX6EfXbNqDx5HrOniPxsAew7k6kTpF5Z79GpK5MOThwcoGOqUBEBuejhWWAoXYOeE6duPclVMghGaNMgqPyptpHrF%2F2CbJIBg1sd807cFMh2uV4ezyr4JgVEAL5Li0Y%2BSJSf0GKcKwqSJ0NZHsAh9L6PwNemQTTR0MJjVsd2xF1e4Cu1jYawdOZSWyiwj76r0VouuhZFJhS%2B9F9K8g24bzUbUZWOBER8TgeNtXQWXTUmIiIUrneJ2VwdB3B%2FKYCY5RWOItLUGYm8RX&X-Amz-Signature=0d6736a90240aeca19169e60af27e80242689daff0ce544d5679260d807bd41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLTL342D%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwLd9f59Mad8pslImgBI1IuRvbZDWWTw46WWnxD7Hf%2FAiEAiKbk%2BGkMAipNXCYZIMUwVlHnrdN51d69%2B%2BgnQ3Or%2FZYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKxRADh0JU68kg6tHSrcA2lqDLQ8hGkEXUMmGlJNu3X58F6SvUYoQueosNKTkiykR5eQOKtNCd5zNsxjegcNHgUmvK3oUgFnUg8hxcZcrFvwFUZOT%2FoGsDFKIifO%2F1ShF1DtbbZ5XN7PhAIZ2%2FmiLCWgjpQqNztNPeSIxL1O8lo4k14bOAwJOCQZstFvIaqqCQoFnfid6Cs3mfRM033WpoWHUyO1rn9uE%2BP84twKoH2edBcF7N3sNyUwmwm6WgPss%2BDJhHsovB67zZvE%2F0W9AzxtCZfjpmO%2F90G3ZkMsYlhOi6wlEQimBWlb7HfjgPRFTSHEFw0t8qxinpgP92b7iCqyHY0L%2FPhpSd%2FJb3qR3spzTS7qXt0BHrfWUHzM4ptuPgy8UZgc7QhEGBhmrBcmEb5Z%2FnJSLMMIAbV%2BzLoT6hE8LUWK6vOwfIzVEvNtsWXSyZkUYeR6WHqCxJ7wWIJWJmbN7cYcoXXtp5iPAKYG%2BFWEFetwZl0oSfUTPt1konbm2zAL9LT4bqaWBZad8%2BSl%2BKDxUtvxBtu8nFuzOuR4KiOv5dByTG6mZKEHf6%2FIbt%2FO8Dd4nv%2FWLcGd1TO2saOeNxRM0XtdLVsVQ3CMfjnZUzKX6EfXbNqDx5HrOniPxsAew7k6kTpF5Z79GpK5MOThwcoGOqUBEBuejhWWAoXYOeE6duPclVMghGaNMgqPyptpHrF%2F2CbJIBg1sd807cFMh2uV4ezyr4JgVEAL5Li0Y%2BSJSf0GKcKwqSJ0NZHsAh9L6PwNemQTTR0MJjVsd2xF1e4Cu1jYawdOZSWyiwj76r0VouuhZFJhS%2B9F9K8g24bzUbUZWOBER8TgeNtXQWXTUmIiIUrneJ2VwdB3B%2FKYCY5RWOItLUGYm8RX&X-Amz-Signature=7d379ed3fbd02031efe1017eec1bf42fe159b34ba3c69ea8b9a4cb8bd84a27e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
