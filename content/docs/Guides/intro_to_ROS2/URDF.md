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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB66D4J6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElyKQtqytifyPX5WEqqv8h80y3n3IA%2BYagRvE%2FFTrezAiEA9nIfd3F6pZtoWuIQY1BWBn8AYkPsnFJAf9bACUnWjbMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG73OCp801%2BAMJ%2BMSrcA17Mqu%2BcDYk3xoT7vXAAQn2pt%2BlhfzaatbDALtxt9B7aVXpA7spvEFOPwi5Q6PPkSuf5GMoXaV3Es8cT37a%2B%2FNTmEoafMC2Db7QCewQiTLOALt4zU9d1xuCd%2FtXp6BQEnowLdHVKpbF%2FQi4E4CIYxTxZTMxduQAZm1Q2lTV9oj2INH9Q%2BMRrDX20JBhgED8PgFXeqyLmQzfGIvb3XMlMCe2%2Ff9krjweJ2CtSan0rLDYRSqRPx6ye7mFf0KlcC0h7DJ6VP1%2BJiLxPZbaUkYSE8bq%2FT8qBh8VRsBKX0Tfm9vOs51aJCU%2FaILus5R3xjJZYrhqfFaDgEAYm4lbLqETbRnWnCcWEeY6ghtp%2BE6UNlfuIhcX4V%2Fqo1FxQjjKO1BRJc%2BDfwm3GxsrhFKt9mBLSDvzIEpp6z8kTxlAkG5IpmXeyc9uc06C9xVTK%2B5xbZhJimyTRL9SkEiN9kMARGYNh5bzacaCoirBnLZYJ61SsmZYqC3%2FtJgg6FQJJF0xhXchtIk%2FB9ksKGubPGAt88ytkLLhaI8lQASdBVJfma8uUnun%2BeMIXLGR6aedziw1G8rieeaL7GqFdS7H5Qp4L6PbbXt93Dgq5ivTyjkJQSELVXQ5iyrs5u2jdXRLRAUjPMLPBgL0GOqUB8xc%2FceqqqTpfccnzQrr3Mtnk9hN6U434SRvsAHt4ogcISL71egi53I%2Fdkwlkjq%2BCkuk9Z47lfKZhTibUBAY1KnCAY4kI%2BsBtnnCm4qnDpbP4v3wJ0FwFb%2BGNCmjqU%2FR6hWHudqr9nmt4NeEB0bZeJ1GNSFM4p1tcTLr6DXULNktTTsCZWsYI0AjylQ0Yj3R6jObFHfgqA69NFaBFOqYsm5DqAutT&X-Amz-Signature=400fc52e5d2b450d4870a53d863b1ca8120d9ad5c8195d4d571b791221bca2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB66D4J6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElyKQtqytifyPX5WEqqv8h80y3n3IA%2BYagRvE%2FFTrezAiEA9nIfd3F6pZtoWuIQY1BWBn8AYkPsnFJAf9bACUnWjbMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG73OCp801%2BAMJ%2BMSrcA17Mqu%2BcDYk3xoT7vXAAQn2pt%2BlhfzaatbDALtxt9B7aVXpA7spvEFOPwi5Q6PPkSuf5GMoXaV3Es8cT37a%2B%2FNTmEoafMC2Db7QCewQiTLOALt4zU9d1xuCd%2FtXp6BQEnowLdHVKpbF%2FQi4E4CIYxTxZTMxduQAZm1Q2lTV9oj2INH9Q%2BMRrDX20JBhgED8PgFXeqyLmQzfGIvb3XMlMCe2%2Ff9krjweJ2CtSan0rLDYRSqRPx6ye7mFf0KlcC0h7DJ6VP1%2BJiLxPZbaUkYSE8bq%2FT8qBh8VRsBKX0Tfm9vOs51aJCU%2FaILus5R3xjJZYrhqfFaDgEAYm4lbLqETbRnWnCcWEeY6ghtp%2BE6UNlfuIhcX4V%2Fqo1FxQjjKO1BRJc%2BDfwm3GxsrhFKt9mBLSDvzIEpp6z8kTxlAkG5IpmXeyc9uc06C9xVTK%2B5xbZhJimyTRL9SkEiN9kMARGYNh5bzacaCoirBnLZYJ61SsmZYqC3%2FtJgg6FQJJF0xhXchtIk%2FB9ksKGubPGAt88ytkLLhaI8lQASdBVJfma8uUnun%2BeMIXLGR6aedziw1G8rieeaL7GqFdS7H5Qp4L6PbbXt93Dgq5ivTyjkJQSELVXQ5iyrs5u2jdXRLRAUjPMLPBgL0GOqUB8xc%2FceqqqTpfccnzQrr3Mtnk9hN6U434SRvsAHt4ogcISL71egi53I%2Fdkwlkjq%2BCkuk9Z47lfKZhTibUBAY1KnCAY4kI%2BsBtnnCm4qnDpbP4v3wJ0FwFb%2BGNCmjqU%2FR6hWHudqr9nmt4NeEB0bZeJ1GNSFM4p1tcTLr6DXULNktTTsCZWsYI0AjylQ0Yj3R6jObFHfgqA69NFaBFOqYsm5DqAutT&X-Amz-Signature=c0a5cb19ac368779d396e86c081cb79fbe28a9be41eaa8293a0ff85469b09053&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
