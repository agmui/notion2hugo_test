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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSBRJJ4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAwIbfYjaXeXocJ7XuE5OhPT9T7tWfSUbMkcZOttuafHAiANExTpIcn8%2BCECe3z7ebZZRviBuJmPptfTgyFf%2F8%2B1QCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnITc2%2B%2F4TsNierfDKtwDeNfK%2FTMU%2BiFtP68WeM8j1ZLTlMOcbs%2BTpHmqusu%2FZB0xv%2FT7O2bekMRAe3W1EZllF6GJAR0NDUw59MfzUNpIoFW9M%2FYe2XTV2XFpA02PPheyBl%2Fxpopqk9J1XXvtd5rwGpAPEVOqJqrTGdhvVzcP%2BjgwCF%2FckuU1V7wi%2BAu93LoyYVOH6gt%2B0RiAW1T8052eLpFQXUXidLqE%2BqUMx9pUT7doXCGUjgljlhaUmFt7P%2F2rQeqnfW0Oby9i3bNU5dhtsQyySw4kPBFVatBckOYTPfTYHeAYVV7KQE0IImJD4uCx0pU5IcbLCZhsQhLd30pDL1crUXOSlGvyma%2F1j4ZZkkqX5lda4YmUwX6lWmqx3NJh1fA6uO9WXyu5Yi9OD%2BtJMAxH6Vi69CteNZ4JSfT3eJCmjHm4pK6sVjSVoODt917F1zzpFbMJAX0QJH%2Fs9r8%2FG0i4gCV5aX2aHmDZs2878t8loyy3HHdErQDdwmMfU05ZUzVYvub7xNtqNhC1bbRXXgl67SawsdzblvdfdDCYOuX5Os5Wiz6P1jNA4YuJzwfP0oRLx%2BA44PBkwIm1Vzj%2FDaiytKR2rhw85vLjVg95vXDlEZA63tbPj09M2AA7Yna4GaHERZMX057oY1gw98G%2FwQY6pgH4wmvzG%2BlMtmrT5w%2BlTFHT1qzrfCfOFWbHrHwKj8u0x%2BDEG0IzjUv3YH2gaGpc0r1sTxaimJ37Yn0aXWws%2F8Ur0hvTJzxqVu%2Bm5ma%2FJNcS6HSUVsvgqJxIDxJ48XD2%2FIy3Sr5McYXepOzyrOcUKPFkvPukhky3OjcNxqSoL4wyQ7J0b4jt1Oszk6VekZZj3WmMIv8PHQegPsEUndPgZpVqF5j3ylsh&X-Amz-Signature=ae03525eeef3ea01f9b8e1a353ace4641768e7b3dd16a50074d0dcbcceb60aac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSBRJJ4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAwIbfYjaXeXocJ7XuE5OhPT9T7tWfSUbMkcZOttuafHAiANExTpIcn8%2BCECe3z7ebZZRviBuJmPptfTgyFf%2F8%2B1QCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnITc2%2B%2F4TsNierfDKtwDeNfK%2FTMU%2BiFtP68WeM8j1ZLTlMOcbs%2BTpHmqusu%2FZB0xv%2FT7O2bekMRAe3W1EZllF6GJAR0NDUw59MfzUNpIoFW9M%2FYe2XTV2XFpA02PPheyBl%2Fxpopqk9J1XXvtd5rwGpAPEVOqJqrTGdhvVzcP%2BjgwCF%2FckuU1V7wi%2BAu93LoyYVOH6gt%2B0RiAW1T8052eLpFQXUXidLqE%2BqUMx9pUT7doXCGUjgljlhaUmFt7P%2F2rQeqnfW0Oby9i3bNU5dhtsQyySw4kPBFVatBckOYTPfTYHeAYVV7KQE0IImJD4uCx0pU5IcbLCZhsQhLd30pDL1crUXOSlGvyma%2F1j4ZZkkqX5lda4YmUwX6lWmqx3NJh1fA6uO9WXyu5Yi9OD%2BtJMAxH6Vi69CteNZ4JSfT3eJCmjHm4pK6sVjSVoODt917F1zzpFbMJAX0QJH%2Fs9r8%2FG0i4gCV5aX2aHmDZs2878t8loyy3HHdErQDdwmMfU05ZUzVYvub7xNtqNhC1bbRXXgl67SawsdzblvdfdDCYOuX5Os5Wiz6P1jNA4YuJzwfP0oRLx%2BA44PBkwIm1Vzj%2FDaiytKR2rhw85vLjVg95vXDlEZA63tbPj09M2AA7Yna4GaHERZMX057oY1gw98G%2FwQY6pgH4wmvzG%2BlMtmrT5w%2BlTFHT1qzrfCfOFWbHrHwKj8u0x%2BDEG0IzjUv3YH2gaGpc0r1sTxaimJ37Yn0aXWws%2F8Ur0hvTJzxqVu%2Bm5ma%2FJNcS6HSUVsvgqJxIDxJ48XD2%2FIy3Sr5McYXepOzyrOcUKPFkvPukhky3OjcNxqSoL4wyQ7J0b4jt1Oszk6VekZZj3WmMIv8PHQegPsEUndPgZpVqF5j3ylsh&X-Amz-Signature=76c5d685c2ce10ffed76bcec0856f736fc9c3f7973bde824c0f1331323f3b7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
