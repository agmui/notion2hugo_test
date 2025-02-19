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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXTAEJE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDzda0%2FZFAgcl5jwnZ16Bxd9kN1DifFwRbeHiwjswt0PQIgQkGS81YODGRh9z1YQ0zEgTnGQKZ0PPbxPbDu2XmftnIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMC9mSCDqLEcTyQsyrcAytilmUfVi0TfLsRMEj8bydveQwBT%2BMNZZRhqhNC1iGbDto57yHEWr1XKW8eYKgZM%2F1Axg4DNLqngDDGv840HGWu9Qls%2BYBTyWpnTpMOJTbCs1%2BZ%2BjMJ5ckNJ5GpxFtya66pldx1ZYYJHvxTpFSTPkTVBdzL2uHWJzNL0tvqJb%2BZ0gNZce0PD0J6NIzRRYc5BU0d3My5msI%2BCYVOgtY9vIU4nLVjwRaSO5osWOU5aYfVTxnrOVdZzFinc3h%2BUF3cLZL%2BoFU9yHCa6AYJI%2FVDl8xu94aHG7fXHRXdyrmrtL1Gag%2FEVS6lH1nQ2xH3J%2F%2Ftb%2FEskVWzp9TEC2d4ZYz7Zm6%2BtdZ7sud1Jgp5%2F51uNjtY97%2FZ85%2BP3ntscPvRpHplMnmX4qI4p3TPK8zB5NSP5jH6CvPGni0pfbN7UGilCGHf7HGtvIxtLW%2Bq4DsXewastc5W0vbSqAqa%2BrvSxdCVwE5l%2F54H9rik%2FVYHhFlCzDH4McKqVyUGaxwIV2e0kZBcwFyXPxEKprmeMORpqOb0893W4FpjvI1ZN44fLwg6qrzG68AslZzcHrkI9zY1BBUIiqKppAC8mpsQwuNdFXLyP6wHHpMYeX6x6tZFwWOiNiq3VSjDjp%2BvXbfeQhOzMPP61r0GOqUBUYYcHqooa%2BTtA5UlGdaDpf11gBT%2Flg60%2FCOXA1HhdAgeedNSQLqT7c4Sqw6MmDOaJI6jit9jnhp6%2BxKXTplK0ZLQyHTQvjIa89sfpLkiaXjUbScdU30phXCx3TcKd%2BizUp9ne9Cos1rT9C77u1%2Bdoq5He8Ntk97boflJJNa%2FizKkKhJEBQm6LnS7NoSoZ%2FzG9zhWX7BWNd6vs4rP5TScBsS3YWHd&X-Amz-Signature=5902698c69781d5ec1bcddb157bf676216a9256c198c82264f539a13929cfa01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXTAEJE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDzda0%2FZFAgcl5jwnZ16Bxd9kN1DifFwRbeHiwjswt0PQIgQkGS81YODGRh9z1YQ0zEgTnGQKZ0PPbxPbDu2XmftnIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMC9mSCDqLEcTyQsyrcAytilmUfVi0TfLsRMEj8bydveQwBT%2BMNZZRhqhNC1iGbDto57yHEWr1XKW8eYKgZM%2F1Axg4DNLqngDDGv840HGWu9Qls%2BYBTyWpnTpMOJTbCs1%2BZ%2BjMJ5ckNJ5GpxFtya66pldx1ZYYJHvxTpFSTPkTVBdzL2uHWJzNL0tvqJb%2BZ0gNZce0PD0J6NIzRRYc5BU0d3My5msI%2BCYVOgtY9vIU4nLVjwRaSO5osWOU5aYfVTxnrOVdZzFinc3h%2BUF3cLZL%2BoFU9yHCa6AYJI%2FVDl8xu94aHG7fXHRXdyrmrtL1Gag%2FEVS6lH1nQ2xH3J%2F%2Ftb%2FEskVWzp9TEC2d4ZYz7Zm6%2BtdZ7sud1Jgp5%2F51uNjtY97%2FZ85%2BP3ntscPvRpHplMnmX4qI4p3TPK8zB5NSP5jH6CvPGni0pfbN7UGilCGHf7HGtvIxtLW%2Bq4DsXewastc5W0vbSqAqa%2BrvSxdCVwE5l%2F54H9rik%2FVYHhFlCzDH4McKqVyUGaxwIV2e0kZBcwFyXPxEKprmeMORpqOb0893W4FpjvI1ZN44fLwg6qrzG68AslZzcHrkI9zY1BBUIiqKppAC8mpsQwuNdFXLyP6wHHpMYeX6x6tZFwWOiNiq3VSjDjp%2BvXbfeQhOzMPP61r0GOqUBUYYcHqooa%2BTtA5UlGdaDpf11gBT%2Flg60%2FCOXA1HhdAgeedNSQLqT7c4Sqw6MmDOaJI6jit9jnhp6%2BxKXTplK0ZLQyHTQvjIa89sfpLkiaXjUbScdU30phXCx3TcKd%2BizUp9ne9Cos1rT9C77u1%2Bdoq5He8Ntk97boflJJNa%2FizKkKhJEBQm6LnS7NoSoZ%2FzG9zhWX7BWNd6vs4rP5TScBsS3YWHd&X-Amz-Signature=f265875c3a1b4a36f5e7ef79d57af456a961e17e202ab19e003040011b718ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
