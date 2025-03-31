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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWXG6NH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEy2TWPPf%2F1o1iH%2FMfiao885XJOHRWDPoFHG7cdo205aAiB04BDOUg1pg2GG67dtKb9J9EsHgIsVk45IRGxsUSz%2B0iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYaTBBQkZ7Lhf8ahKtwDaEy5sPGBpHBAldvOuI8Yil1CjfuyV3nvKa8DlqaT6aL9sdIJK7h17kK0%2BzpH3NjdVsMGw1k7nSh2wV%2F9HyBmSclUIVC1RWaQFmn1nrzjO9siuXaZDAJvXCH3Pr6OLPqVrk1C238ZaE9Uh1YCdcVKaLd%2BD7OJbkNI3utOWmIwoMtF2fpqVpWT3%2FZMIn3lEHdwSh%2Fc8Al0UAH9WeMQDm89bSDDQcAU6ihi6PLU0mWD%2FSqrOqCEMYx6oPHLuMQJIQELVTSU%2BQ2a5634tnmKAvGFTCw03uhklxonK3qC%2FosmwoJ8exW09tvQSTFC6WKx9PEpk9gOhifiqLp2C79sDaAtL35aQWuVOVk7GQfMj80l0bbZMbsHL8zcIr0qpfxwFeHLbLA9Rxi5y04l6oEg7gbvaCYf48LTgkmP%2BPg7XC%2FT5Wa95hgV1uZOLmh30gecLrz%2FCgPEjjWnWvt9XCo9B0l%2BXHIQQJNB6LZIFE5ibIxvgRm2D6AZdGvGQh123BxqTm%2B11uepJbZfydWksalEnflDAeNG%2FtHPRVRTXeZQyECnbd%2FWR6B5bJBzccIYa6JB%2BJ1C2mHgaium01lhe99oXLulyDbtuhr9pRIGOaYgOh6K9Bmnzkt1aN2EXLUZnL8wnOWovwY6pgGXilrX6EFZ4cXoBvMIVhk2b9Xx0MGWXcJZ3PktZb5BAd7zKFotmJ4Ea8eJ5%2BZcNECEm90LqFfxwIbZmMqht4M8%2Fv6uS0cNkuBz0GwHlBN9Q7lUaeFxDmN9rFRE4cB1HJO1%2F1dTz57PmUw8%2FURDXWEJp3g%2F1pM1uU4AB599FQxUHonFAAPW%2Bre%2BzsXS6sbgbYbfQWA2MSLO932TIUdBDiyLVuP7g2FE&X-Amz-Signature=49005d2089b001a9317d5b67d70481bd5962ed6e51a6138bb62b2370f90bc9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWXG6NH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEy2TWPPf%2F1o1iH%2FMfiao885XJOHRWDPoFHG7cdo205aAiB04BDOUg1pg2GG67dtKb9J9EsHgIsVk45IRGxsUSz%2B0iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYaTBBQkZ7Lhf8ahKtwDaEy5sPGBpHBAldvOuI8Yil1CjfuyV3nvKa8DlqaT6aL9sdIJK7h17kK0%2BzpH3NjdVsMGw1k7nSh2wV%2F9HyBmSclUIVC1RWaQFmn1nrzjO9siuXaZDAJvXCH3Pr6OLPqVrk1C238ZaE9Uh1YCdcVKaLd%2BD7OJbkNI3utOWmIwoMtF2fpqVpWT3%2FZMIn3lEHdwSh%2Fc8Al0UAH9WeMQDm89bSDDQcAU6ihi6PLU0mWD%2FSqrOqCEMYx6oPHLuMQJIQELVTSU%2BQ2a5634tnmKAvGFTCw03uhklxonK3qC%2FosmwoJ8exW09tvQSTFC6WKx9PEpk9gOhifiqLp2C79sDaAtL35aQWuVOVk7GQfMj80l0bbZMbsHL8zcIr0qpfxwFeHLbLA9Rxi5y04l6oEg7gbvaCYf48LTgkmP%2BPg7XC%2FT5Wa95hgV1uZOLmh30gecLrz%2FCgPEjjWnWvt9XCo9B0l%2BXHIQQJNB6LZIFE5ibIxvgRm2D6AZdGvGQh123BxqTm%2B11uepJbZfydWksalEnflDAeNG%2FtHPRVRTXeZQyECnbd%2FWR6B5bJBzccIYa6JB%2BJ1C2mHgaium01lhe99oXLulyDbtuhr9pRIGOaYgOh6K9Bmnzkt1aN2EXLUZnL8wnOWovwY6pgGXilrX6EFZ4cXoBvMIVhk2b9Xx0MGWXcJZ3PktZb5BAd7zKFotmJ4Ea8eJ5%2BZcNECEm90LqFfxwIbZmMqht4M8%2Fv6uS0cNkuBz0GwHlBN9Q7lUaeFxDmN9rFRE4cB1HJO1%2F1dTz57PmUw8%2FURDXWEJp3g%2F1pM1uU4AB599FQxUHonFAAPW%2Bre%2BzsXS6sbgbYbfQWA2MSLO932TIUdBDiyLVuP7g2FE&X-Amz-Signature=2aa186b12d6f54031d1a9fbbded18d8a089a19ad8fd046ea5f87b79649536d84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
