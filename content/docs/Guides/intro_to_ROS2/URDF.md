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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOC7ZAFT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEh7OvYRb%2F7RIyLKMUuzJkABKZSiQ9m%2Bvbf%2FQjulwwlDAiEA43PgqY3uUn4C%2BdzRJWrjVC%2FMG9XYIwwOYZgtSSUO%2FqYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJRYw8ARGENFMwBOircA9P7g64AMJ3VHkI5esScO9FGx5cD1uHU73UID2CV%2B4ezbJNXl9PCO7BMXsoBA1dFJx7G2Vn0ge21qaKkuM%2FFVhrAWAS%2BUmsGgNb9Ol9SsUNXyTy2XFrlDltvxxUicxK6gkQhknDZobEnYwClk9g6k4xBmJsFWyUWJ8n7Z1m%2B4TdVavP0jvryhmwLxB01owWLwm7M5nIR2ueePEsqJfAILXe4zqoScKFHlfoxjuhdVqdw83awf8S5lcYhen1eeAaAGNIbdnalmYvrIAzVfngBvJoPotRQUlcI9o0eIiYSWl5%2BnKYPeKgrvwbSBDE9XvmDWSwGIbpbRuBke2hJC%2FvKbfUuME3cl6k%2Bv8DXyz%2BKDKaSJctEgxs9fBQA2xKK%2BYWmb9N8RNNiaD9DR99PMpJcQUTGed3ehs%2FMtstznqP%2F0CXrqc38IMZjMfEhvbt6QlB7aYy8ldtqa50osEB75SQrcV9skPkTCWpTWZhDe9jK7hORIraBVmNCa2aCE8wM%2FPey3gLrtiqUoK1ash%2BxNzxzWYJZo90KEbEaEdGz6sCY2rUFrbXiaj3vSGdehl64fUGarcNbHUktRbl3SLGP3tiBeU6jjzjYP8ExOVNC3%2BJXzDNRf9s8dQbYYd7PmXtNMJX24sIGOqUBmChcc7MFIr6CMNq19lz%2BhNFKWUQT8EprRUQz13vHtKK9fJhYuG%2FTIRLux7h0oHaIjcOILJyGeb7ZY6BxNv%2FyPrE01SgXhRqPuweWQJoGiDKMXlLFoxtUFOf5dRy9ilCEAIn8uvBauBfYgYS1pag%2FLxIsTxUSUEIq%2Fy8GLLIOZ%2F%2FIm2HYVAxEerhFmJ%2FwOZlukls8A4eJNhO3DhnYfrscgbQj0e87&X-Amz-Signature=6854ae6eb5868479afaf8f581e4d03ed4765ce4df740bb8282e4f6d7a86705be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOC7ZAFT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEh7OvYRb%2F7RIyLKMUuzJkABKZSiQ9m%2Bvbf%2FQjulwwlDAiEA43PgqY3uUn4C%2BdzRJWrjVC%2FMG9XYIwwOYZgtSSUO%2FqYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJRYw8ARGENFMwBOircA9P7g64AMJ3VHkI5esScO9FGx5cD1uHU73UID2CV%2B4ezbJNXl9PCO7BMXsoBA1dFJx7G2Vn0ge21qaKkuM%2FFVhrAWAS%2BUmsGgNb9Ol9SsUNXyTy2XFrlDltvxxUicxK6gkQhknDZobEnYwClk9g6k4xBmJsFWyUWJ8n7Z1m%2B4TdVavP0jvryhmwLxB01owWLwm7M5nIR2ueePEsqJfAILXe4zqoScKFHlfoxjuhdVqdw83awf8S5lcYhen1eeAaAGNIbdnalmYvrIAzVfngBvJoPotRQUlcI9o0eIiYSWl5%2BnKYPeKgrvwbSBDE9XvmDWSwGIbpbRuBke2hJC%2FvKbfUuME3cl6k%2Bv8DXyz%2BKDKaSJctEgxs9fBQA2xKK%2BYWmb9N8RNNiaD9DR99PMpJcQUTGed3ehs%2FMtstznqP%2F0CXrqc38IMZjMfEhvbt6QlB7aYy8ldtqa50osEB75SQrcV9skPkTCWpTWZhDe9jK7hORIraBVmNCa2aCE8wM%2FPey3gLrtiqUoK1ash%2BxNzxzWYJZo90KEbEaEdGz6sCY2rUFrbXiaj3vSGdehl64fUGarcNbHUktRbl3SLGP3tiBeU6jjzjYP8ExOVNC3%2BJXzDNRf9s8dQbYYd7PmXtNMJX24sIGOqUBmChcc7MFIr6CMNq19lz%2BhNFKWUQT8EprRUQz13vHtKK9fJhYuG%2FTIRLux7h0oHaIjcOILJyGeb7ZY6BxNv%2FyPrE01SgXhRqPuweWQJoGiDKMXlLFoxtUFOf5dRy9ilCEAIn8uvBauBfYgYS1pag%2FLxIsTxUSUEIq%2Fy8GLLIOZ%2F%2FIm2HYVAxEerhFmJ%2FwOZlukls8A4eJNhO3DhnYfrscgbQj0e87&X-Amz-Signature=43ed446aa693f3e7094eff194d6a8fe5c06218a9a5c72725c2f2557ddaeb37ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
