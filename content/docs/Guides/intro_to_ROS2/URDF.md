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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZSZYGM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBROMGCIyuHSLEXj1%2ByLxZbB0N1frPwZvmEuphx8bmrzAiEAsIuBY3y9CWSddwyqfjIzimRmTpVtIaBkgJ0TOAqO2HQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIlKmQs53nsPnnkFJircA24O6PRAQXFTV0jf5YucV%2FReciW4uOJvkpSTvkA0wK6zQSH4F7gq40tDCYFwWuBY3RgJhnjlNpGxS7KU9kWpSJdFO9gAkkPyK7nfiOdFhgzycWuH8gKBd8xIhUIg395lr0dnwIa2Cgf0kVpmJ6c5EbamdANgjnAEzW%2BPE4kuuN4WYLjUag2QGUrbVIizeM%2BQXUTbhUuRkbMIhXxQcoQ88bexI6VP%2Fa%2BJut0K%2Fxqzo4DsaxtVAUvnIfdsI9dtMwk0Ta%2FPQFrK%2F0hfQEEXO0yF9jcED4rPjbCgKlnHccuWOTud0lw7%2F3oRbntOzgW20FW8s6ViGMnle61piDLsPEz%2B9HxVccM9O2hwa9gaf6r9u8VQ%2BCWOZNXk8tDi3LuKrPA3MFAs8fDq8y0oiFmZCnfu76ftRdbuOWOahp0ckG19C6I0B0DEgLl7EbS3XbbbslLpqLnGx0ebvH%2FSu3JbZXkLQMUcZj%2FuPCK3KWj42GDhGrcsptAXbAAPkJfCd%2FMK6yDUnn%2BAgXuZR85zWMoJ6cPn50C2HTirANqoNGdd7MNL9a%2BEuJFzDKf%2FV3Zy%2Bwz4vShIgJy4zAKtc43sytg9nV0kWJ4Zfu9c%2FMW0zHXmxbUoRvURCUEaWyr0zlXozqy5MO30vsAGOqUBP7HpQeoxrsfDuMn6GdIn6rFJVX689w8CfpyFBdV5quJiN7HFU6yy9naKhSdPRMKdseoPh7jOhuj6JREXSjEBmHfYsknXC51nITxtRQ7Mkz0ZQskNzE%2BUwVOxugDO5ibY7zNdUgKqM0eFeuFoiMHgO7prOHuKDx808tvm%2Fpa%2F%2Boqg4MDvG7tp1xSifgXgfMSMcUn2fylGOhi6LuFL4KboAgtaVSlZ&X-Amz-Signature=0f060b05bc3e8183588fe2f3b45b4d652e0b89ef89a12c1dbf0f70280a0415e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZSZYGM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBROMGCIyuHSLEXj1%2ByLxZbB0N1frPwZvmEuphx8bmrzAiEAsIuBY3y9CWSddwyqfjIzimRmTpVtIaBkgJ0TOAqO2HQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIlKmQs53nsPnnkFJircA24O6PRAQXFTV0jf5YucV%2FReciW4uOJvkpSTvkA0wK6zQSH4F7gq40tDCYFwWuBY3RgJhnjlNpGxS7KU9kWpSJdFO9gAkkPyK7nfiOdFhgzycWuH8gKBd8xIhUIg395lr0dnwIa2Cgf0kVpmJ6c5EbamdANgjnAEzW%2BPE4kuuN4WYLjUag2QGUrbVIizeM%2BQXUTbhUuRkbMIhXxQcoQ88bexI6VP%2Fa%2BJut0K%2Fxqzo4DsaxtVAUvnIfdsI9dtMwk0Ta%2FPQFrK%2F0hfQEEXO0yF9jcED4rPjbCgKlnHccuWOTud0lw7%2F3oRbntOzgW20FW8s6ViGMnle61piDLsPEz%2B9HxVccM9O2hwa9gaf6r9u8VQ%2BCWOZNXk8tDi3LuKrPA3MFAs8fDq8y0oiFmZCnfu76ftRdbuOWOahp0ckG19C6I0B0DEgLl7EbS3XbbbslLpqLnGx0ebvH%2FSu3JbZXkLQMUcZj%2FuPCK3KWj42GDhGrcsptAXbAAPkJfCd%2FMK6yDUnn%2BAgXuZR85zWMoJ6cPn50C2HTirANqoNGdd7MNL9a%2BEuJFzDKf%2FV3Zy%2Bwz4vShIgJy4zAKtc43sytg9nV0kWJ4Zfu9c%2FMW0zHXmxbUoRvURCUEaWyr0zlXozqy5MO30vsAGOqUBP7HpQeoxrsfDuMn6GdIn6rFJVX689w8CfpyFBdV5quJiN7HFU6yy9naKhSdPRMKdseoPh7jOhuj6JREXSjEBmHfYsknXC51nITxtRQ7Mkz0ZQskNzE%2BUwVOxugDO5ibY7zNdUgKqM0eFeuFoiMHgO7prOHuKDx808tvm%2Fpa%2F%2Boqg4MDvG7tp1xSifgXgfMSMcUn2fylGOhi6LuFL4KboAgtaVSlZ&X-Amz-Signature=a3759c3ef0a4faffca4b58b248f731c9e7c2bd2ea95a4690d073aa519623cee8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
