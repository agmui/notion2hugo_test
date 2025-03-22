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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGLQCWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDsgZtdGPERxTgY3T8lzjglVehZOEHOSfLHsI7h1ZKQkAiEA2Dn%2BR20svGi00JRkWupglYrjh4bZG7XOOJXDrxK9kvQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BOYQmOqCDtdyUN4yrcA0buGW%2F4rLz5CXj3vloXPjS4CjoRH%2BpGFkg%2FttKZX2PeVNEpH26VwoCpyBF5lHKrD24f1zoV4M37clazv4RpvumnPT6oj%2FiA4rgjKtlyYHjwhjc5ad%2FyWIcxpB1FauZIfe7p0eLMZG34qzl2Z6jYITvCEgNMHwtmReNbl4ZXl%2FvCm4rcLhQh1wXuVmJ6HIKvj6C8DrD6c73Q9iqSojricJf62DG6Dls0XLUAtFLY6I663nB0O8R60fHRqsxbnDaoFXsgRQA%2BlkBxrnNszIPpRmHnaxjujNnTk21aCjNjz8oq5vjxY5uO8ZBJ0wJ74few0z0%2Fz8Y2%2BhlwSl9NUbWaFKfSmE8mWoMTEOJNtU47k1fEOLkAz4XHcFJVWb3sdNV14TovblaxmyJIdn75PRH5xdKXpgt2B7GTbr8tv1rEqsvjK56eMNBUAyvItR262HWY7hP0RnikvDULamzBMxfu0vOHaJgKdY2xvNkdFVO1lx0ztGt18Smcp%2FcnEH9sfrdzKxF1R%2Bo8n%2B2mNlt5V1Yd7fJ36Z2lFobnsW1sbhKxTZ5E8Ykt4oTbB6jtLZXtfKMaStrku0P5CzXO8Dg6cRC6miubwKKuA5Ui7naqzaVOnaMMK2BjDCzfOQJ5UWY0MMyr%2Bb4GOqUBxVAQqTTWkfYF2EBd7p0nNnhPJXFUGw6Ojzo7P37SHCP6fjGn8E68tTbFQJIVLa6Tjx%2Be8Q6u2619tCgYJCAMuBxgTw3zIkkWpuxY9RRqFQ4IEnFU8VW0nwdUXCKaBY0qb8LR%2F0oLjEX2gmObEjCao96pjsgq8GmvrtrI%2B6xZK0qt%2FGe%2F36sPgGb3EsByqYidVkCE9ZGA%2FTZhC2APpMxsOPx6Ji6Z&X-Amz-Signature=0fb011f5aca1798d8e6e54ca3b1c2b867d543113840554c9359e7e185e4797a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGLQCWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDsgZtdGPERxTgY3T8lzjglVehZOEHOSfLHsI7h1ZKQkAiEA2Dn%2BR20svGi00JRkWupglYrjh4bZG7XOOJXDrxK9kvQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BOYQmOqCDtdyUN4yrcA0buGW%2F4rLz5CXj3vloXPjS4CjoRH%2BpGFkg%2FttKZX2PeVNEpH26VwoCpyBF5lHKrD24f1zoV4M37clazv4RpvumnPT6oj%2FiA4rgjKtlyYHjwhjc5ad%2FyWIcxpB1FauZIfe7p0eLMZG34qzl2Z6jYITvCEgNMHwtmReNbl4ZXl%2FvCm4rcLhQh1wXuVmJ6HIKvj6C8DrD6c73Q9iqSojricJf62DG6Dls0XLUAtFLY6I663nB0O8R60fHRqsxbnDaoFXsgRQA%2BlkBxrnNszIPpRmHnaxjujNnTk21aCjNjz8oq5vjxY5uO8ZBJ0wJ74few0z0%2Fz8Y2%2BhlwSl9NUbWaFKfSmE8mWoMTEOJNtU47k1fEOLkAz4XHcFJVWb3sdNV14TovblaxmyJIdn75PRH5xdKXpgt2B7GTbr8tv1rEqsvjK56eMNBUAyvItR262HWY7hP0RnikvDULamzBMxfu0vOHaJgKdY2xvNkdFVO1lx0ztGt18Smcp%2FcnEH9sfrdzKxF1R%2Bo8n%2B2mNlt5V1Yd7fJ36Z2lFobnsW1sbhKxTZ5E8Ykt4oTbB6jtLZXtfKMaStrku0P5CzXO8Dg6cRC6miubwKKuA5Ui7naqzaVOnaMMK2BjDCzfOQJ5UWY0MMyr%2Bb4GOqUBxVAQqTTWkfYF2EBd7p0nNnhPJXFUGw6Ojzo7P37SHCP6fjGn8E68tTbFQJIVLa6Tjx%2Be8Q6u2619tCgYJCAMuBxgTw3zIkkWpuxY9RRqFQ4IEnFU8VW0nwdUXCKaBY0qb8LR%2F0oLjEX2gmObEjCao96pjsgq8GmvrtrI%2B6xZK0qt%2FGe%2F36sPgGb3EsByqYidVkCE9ZGA%2FTZhC2APpMxsOPx6Ji6Z&X-Amz-Signature=46b9d9ebf142361441e997d3adfd92772006c9a5600926bc353922a745d4dabd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
