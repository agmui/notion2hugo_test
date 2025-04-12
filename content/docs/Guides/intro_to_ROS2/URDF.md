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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKQZC2G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyJuPYBl097vDYyt2RHnEryFZVdgTViIdnM1bM6Xu7yQIgSmkgb9nn2rJ9eybaU51BW7Db2%2BcbgrK2n8iiw1aNUKsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDYJ2cOJ3Ecg9p8ZSrcAx7V3M20ayQ4ikp%2Ba7sTyTW1RQrc0hfdL7dEn%2FZzqY37msHtUdfRYu0%2BAqrPGO3EPLEwaKkSytbkkZMLqgFJfJIQumcYjVWSjjuCEmA0ef6P654jy1ZLIheHKWI2j%2FoWwylfWvd41%2FXLb2ohqeUul5RKq2W1eIi53hHRvEeV0hUGCWSwcsqkXJHKRNJhhpu0yDloIq5DdoWUDOOsoyEchp9SXbQwihO92sZiO1AHW%2B%2FbHdcmrJ8maC147Wy1c1SLyJHBAM8Pxcdr6sMa1E33Eot%2B1A956rdu%2Bb302HcAjJ4560Mijkq4OeK5iCzgrU7DO2o4RqcZpSyiO0gOxPjAYbfTUXmF4whg01sUtTHVy9jMu%2Fxn2iWyAer24EJ1FiDgh3psvc76hQ9JMjsidu5KCNLfoa2W1iU0GZvldP6lsohHte4zFQeglbjPUKK1HWASg4aOXSljPaR3rK3USaIRbTOv36fUlhJHOA7S0hXOg7K1K%2B4KVmZkgAf2qJ4fziJdWnTwr5gbmFhV0InqvOTHSgRNoMoZT6oH3MXdYJTnJL9ZvGMX7WJmhwLCr50o%2Fv3e9Rm6bfP8rKpN6f49U%2B1XCnfFnqLGZwJCvsPKcLUhKANHgotOlZlJRrkyJQkrMNjV5r8GOqUB7PV6S4OeK8g2%2B2VswwpcDup2Qdlw0sZTOf9kjiL2zo5kmJEr8XyzbYCHvSh6mfsTaA7wTLMoovMK6ka5ytTngiNXeoii690o5VrV4Q6397gvCn47qg%2Bh8oowsUbQN%2BAZtst%2FeEWcn9wBphGWm%2F14OeQNYRDrdaGEZ8OkN3G7FyfGM3q5aS7%2FOTly%2Fns9tT180SjvgHh7P9Vb9udNQ79JfdOSPcBh&X-Amz-Signature=130ab5086606f19ed3772b78c1b598d0c8eea39bb004969fae0a3a677d874094&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKQZC2G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyJuPYBl097vDYyt2RHnEryFZVdgTViIdnM1bM6Xu7yQIgSmkgb9nn2rJ9eybaU51BW7Db2%2BcbgrK2n8iiw1aNUKsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDYJ2cOJ3Ecg9p8ZSrcAx7V3M20ayQ4ikp%2Ba7sTyTW1RQrc0hfdL7dEn%2FZzqY37msHtUdfRYu0%2BAqrPGO3EPLEwaKkSytbkkZMLqgFJfJIQumcYjVWSjjuCEmA0ef6P654jy1ZLIheHKWI2j%2FoWwylfWvd41%2FXLb2ohqeUul5RKq2W1eIi53hHRvEeV0hUGCWSwcsqkXJHKRNJhhpu0yDloIq5DdoWUDOOsoyEchp9SXbQwihO92sZiO1AHW%2B%2FbHdcmrJ8maC147Wy1c1SLyJHBAM8Pxcdr6sMa1E33Eot%2B1A956rdu%2Bb302HcAjJ4560Mijkq4OeK5iCzgrU7DO2o4RqcZpSyiO0gOxPjAYbfTUXmF4whg01sUtTHVy9jMu%2Fxn2iWyAer24EJ1FiDgh3psvc76hQ9JMjsidu5KCNLfoa2W1iU0GZvldP6lsohHte4zFQeglbjPUKK1HWASg4aOXSljPaR3rK3USaIRbTOv36fUlhJHOA7S0hXOg7K1K%2B4KVmZkgAf2qJ4fziJdWnTwr5gbmFhV0InqvOTHSgRNoMoZT6oH3MXdYJTnJL9ZvGMX7WJmhwLCr50o%2Fv3e9Rm6bfP8rKpN6f49U%2B1XCnfFnqLGZwJCvsPKcLUhKANHgotOlZlJRrkyJQkrMNjV5r8GOqUB7PV6S4OeK8g2%2B2VswwpcDup2Qdlw0sZTOf9kjiL2zo5kmJEr8XyzbYCHvSh6mfsTaA7wTLMoovMK6ka5ytTngiNXeoii690o5VrV4Q6397gvCn47qg%2Bh8oowsUbQN%2BAZtst%2FeEWcn9wBphGWm%2F14OeQNYRDrdaGEZ8OkN3G7FyfGM3q5aS7%2FOTly%2Fns9tT180SjvgHh7P9Vb9udNQ79JfdOSPcBh&X-Amz-Signature=b5d18fc8b210441f0f1253886a7a1e5737d02f6808024e7989bc7de0ff6fad95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
