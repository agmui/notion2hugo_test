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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFF5AHL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIA7F3VU6RbpALN86nBkqSiNh8lZBtMIQ3XIjIQcwTHzvAiAkPiuZiiPcE5XP3l%2FZyPEM9lw%2FX4cugL7UXTJ4L%2Bf7QCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMq9Tw4QeaYM5CGUpmKtwDJm7gdhJ9Nvn04loLwp7tVaqAiUrx9qxxlzGaxLBp43NDe58oGmJX5AT2D0sPUJXrXYYO6axfQ%2BxEG0XRhGECIUMn%2B5ykQDRHGx6oRQU2qbr2sxMRibmLJrS%2BJ%2BApYZGkwKDVzFKYucOM4iLqxI4DDGAbAWOASN79sV%2BV%2FAUxhRqxIQIhfwSwgjL%2B2xvaiTcUk%2F7bxotQ8RpIHEzc6%2FEXP6Vy67h1qoigUJGiIXSvH6spxtcO4CHBNc4Q%2FYnLziPwFq2NrvCdI2D9Li6GtYCo476S6%2F6jfTVLUhZAHF0reW8FMcwAlrBH%2BvR997rjJQcnkjEwhhtnzQABnAkyHBcuOoHGvvzocGHcOuaU9qEdn3fmQO3WpwPwSv1OSoqQyQz3msCoVT2FFJ2E3jX3IJe9io7lcPy%2FUMT9RYbSI9WC2usb7spaTAKsbqPcJxnFToVADuIXW5EZ306WDs4f3vCEn3zAF4u%2BvWCwMtGtu%2BA71YxwUyXiCWnZiQMz3G9aal%2BAVquWIbp2XMNZcq4asPDayRFsyw8HAxK1x3GgyXmNFoN%2B6taiNl25BO3dpevD4XMewEv1n4S%2FznHY4UdQfDohoffMWYTgMONg%2FWqCQEylPb1p5Z%2BGO6KlWa%2BlgY0wzdyuvgY6pgE9Qy5xdUNdBlWVPf8kWRFDafvl7s1WdRQ9m4vY3ebfDIcYHVv70MmZKdtOcBRr3MlG11RVfyBD96bXP%2Bwn79VdIPQ9b4i0B89WYzOqAkX8ivjq3eJulVPoYP%2BoJz6HauT4J5QNsWCGOpp4V3vOOA%2BNxK7hxWKUdvO7FBHZyJ%2Bhl4ct1dclpcKjo9u1%2FgMQP9VzgTrzzEbP5TDztdRcK7C1NEgMsczU&X-Amz-Signature=16b01e7014cf45e33fdc0992e47e4e39423a5472236166ff966127d7a6fbce7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFF5AHL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIA7F3VU6RbpALN86nBkqSiNh8lZBtMIQ3XIjIQcwTHzvAiAkPiuZiiPcE5XP3l%2FZyPEM9lw%2FX4cugL7UXTJ4L%2Bf7QCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMq9Tw4QeaYM5CGUpmKtwDJm7gdhJ9Nvn04loLwp7tVaqAiUrx9qxxlzGaxLBp43NDe58oGmJX5AT2D0sPUJXrXYYO6axfQ%2BxEG0XRhGECIUMn%2B5ykQDRHGx6oRQU2qbr2sxMRibmLJrS%2BJ%2BApYZGkwKDVzFKYucOM4iLqxI4DDGAbAWOASN79sV%2BV%2FAUxhRqxIQIhfwSwgjL%2B2xvaiTcUk%2F7bxotQ8RpIHEzc6%2FEXP6Vy67h1qoigUJGiIXSvH6spxtcO4CHBNc4Q%2FYnLziPwFq2NrvCdI2D9Li6GtYCo476S6%2F6jfTVLUhZAHF0reW8FMcwAlrBH%2BvR997rjJQcnkjEwhhtnzQABnAkyHBcuOoHGvvzocGHcOuaU9qEdn3fmQO3WpwPwSv1OSoqQyQz3msCoVT2FFJ2E3jX3IJe9io7lcPy%2FUMT9RYbSI9WC2usb7spaTAKsbqPcJxnFToVADuIXW5EZ306WDs4f3vCEn3zAF4u%2BvWCwMtGtu%2BA71YxwUyXiCWnZiQMz3G9aal%2BAVquWIbp2XMNZcq4asPDayRFsyw8HAxK1x3GgyXmNFoN%2B6taiNl25BO3dpevD4XMewEv1n4S%2FznHY4UdQfDohoffMWYTgMONg%2FWqCQEylPb1p5Z%2BGO6KlWa%2BlgY0wzdyuvgY6pgE9Qy5xdUNdBlWVPf8kWRFDafvl7s1WdRQ9m4vY3ebfDIcYHVv70MmZKdtOcBRr3MlG11RVfyBD96bXP%2Bwn79VdIPQ9b4i0B89WYzOqAkX8ivjq3eJulVPoYP%2BoJz6HauT4J5QNsWCGOpp4V3vOOA%2BNxK7hxWKUdvO7FBHZyJ%2Bhl4ct1dclpcKjo9u1%2FgMQP9VzgTrzzEbP5TDztdRcK7C1NEgMsczU&X-Amz-Signature=f86d9d9c252e90ff431b0371781a0bd272caaefe26aae36226f4661932c27e36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
