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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNV6PRXI%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNjoVt4c8LCJ6ShJEfPYfpZU1MPmP7iMDoJvQpq634QIhANRKdySPxjerel4rTs5Zsuw9XR4BdH7drK3g1O3yiAGMKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0jYNp0Z%2Fmnm7vbSAq3ANRZnMCADeIp6zYgQ56V0iueRlifh4UmP6aqx61OoFL%2BmTrOXThT37O6IR4%2FiATUBXKirJiwcFdW4zt7S31WCqgjOW2hDZE8Tm8cpIUV2cHWRLkkVyOyIQO8idqmmxBMZOdkyIoLUbNhpq78SeiwIv%2F%2FCVk2Z0hurvN3LyU5VZ2dsOkwrzgIeLuH2ix0XlOz%2BoUoifVzPtv4UNC639L54biIrUn0YY3nQFgSQcI5IM7nSbu6zbWqHTbF1sh0e5ylD9hiuzw1I%2B4%2B%2FqZCONgLX0EO%2FCEQrNhWruf0T7S49leYsRjvz%2Bs3bW%2Be0V73ndeSCTpIMprR4n0kZVDsMNBYBrIncdxg2hZpEVvZr6AS5R6mQDIymp0mC9l3UQwwuXgZFQBm%2FE1Xjfs7Pnh0mgGOu1CwrF9iidltxG7xxxA5AeoZ5VQ7lCKfCgVLVq%2BIUIfINu6k4aV2TxvbakniiY4Tf%2FOd8g7pXHQW2FeMuACHjKj0e7%2BIdZ4Hu%2BEC65YNhVM1whCfMHzQmSOa4OFeCAmW31qIcsfnvCNcOP8YRNn95CoM%2B6P7VH96NPaRQ%2B53QCLUHZxXOu3xgJq2dLg2JlKSL93lLGcgEE2J30gzGR4Qt64cnDNLykxcdoseM8xfjDkspbCBjqkAZpyb6lVhE99AC6Y9jQuT0k5ZRKHpMLiNbXUJrx9wXP6Bs2KVwVuIdfMziqcDdVZPB%2B2r03WSPuuM4JnaVN%2Fu%2BIjLE3gkEe3iQ69wCwDVBG0UyRrNZhitZa8t7pRLDe3wPKWvthBgzhO7BoVlBDjyRT%2B6EE1FVq4WzLJ3BBJ4jWzemioPmPqiGO4OMbgOoY6Z%2FLzVnxkVKdY05SADy%2FVQx3CiGw%2B&X-Amz-Signature=8517a425c41ba2591282607fe2724518c644a2d4cb3be7a93fb7f0da39d51135&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNV6PRXI%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNjoVt4c8LCJ6ShJEfPYfpZU1MPmP7iMDoJvQpq634QIhANRKdySPxjerel4rTs5Zsuw9XR4BdH7drK3g1O3yiAGMKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0jYNp0Z%2Fmnm7vbSAq3ANRZnMCADeIp6zYgQ56V0iueRlifh4UmP6aqx61OoFL%2BmTrOXThT37O6IR4%2FiATUBXKirJiwcFdW4zt7S31WCqgjOW2hDZE8Tm8cpIUV2cHWRLkkVyOyIQO8idqmmxBMZOdkyIoLUbNhpq78SeiwIv%2F%2FCVk2Z0hurvN3LyU5VZ2dsOkwrzgIeLuH2ix0XlOz%2BoUoifVzPtv4UNC639L54biIrUn0YY3nQFgSQcI5IM7nSbu6zbWqHTbF1sh0e5ylD9hiuzw1I%2B4%2B%2FqZCONgLX0EO%2FCEQrNhWruf0T7S49leYsRjvz%2Bs3bW%2Be0V73ndeSCTpIMprR4n0kZVDsMNBYBrIncdxg2hZpEVvZr6AS5R6mQDIymp0mC9l3UQwwuXgZFQBm%2FE1Xjfs7Pnh0mgGOu1CwrF9iidltxG7xxxA5AeoZ5VQ7lCKfCgVLVq%2BIUIfINu6k4aV2TxvbakniiY4Tf%2FOd8g7pXHQW2FeMuACHjKj0e7%2BIdZ4Hu%2BEC65YNhVM1whCfMHzQmSOa4OFeCAmW31qIcsfnvCNcOP8YRNn95CoM%2B6P7VH96NPaRQ%2B53QCLUHZxXOu3xgJq2dLg2JlKSL93lLGcgEE2J30gzGR4Qt64cnDNLykxcdoseM8xfjDkspbCBjqkAZpyb6lVhE99AC6Y9jQuT0k5ZRKHpMLiNbXUJrx9wXP6Bs2KVwVuIdfMziqcDdVZPB%2B2r03WSPuuM4JnaVN%2Fu%2BIjLE3gkEe3iQ69wCwDVBG0UyRrNZhitZa8t7pRLDe3wPKWvthBgzhO7BoVlBDjyRT%2B6EE1FVq4WzLJ3BBJ4jWzemioPmPqiGO4OMbgOoY6Z%2FLzVnxkVKdY05SADy%2FVQx3CiGw%2B&X-Amz-Signature=18f0c35e5b7ff1cc5fc4c3bc84dad5da58ae6911413b7a49aeba0f00f6cf5ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
