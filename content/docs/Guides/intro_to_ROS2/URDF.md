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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2K5UOC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa3hMMD1OLvyP4mDW93%2B62lvVswgmkH9P3MfUgxnpPPgIgXOW%2BQ1cw1dDYXxXBrwPGEVr7qnhMIfc2I6IpxtO7rLUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjordWYiiwCyuWdXircA9j2MvyF5AKxWN8PlGp8uKt7n1MEtUGAbQAxBb3%2FCwtwiz%2BWCk43u1CTuOr%2FNRnOgCK64zyJdQPG3xVgr%2BVO1fqF3V0okuh24QexAxn5Q9Qf2Aavp%2Fjb%2B2GaviwxRQjAnunc8bB4Gp%2BqW5fFjTE59NzdJI%2FXwqE2Jv8dLXjpU9xtfu6nY7zYeu9nDCcA6wm1HztyGOgHaE3kS4ENgSPntRWATDsP%2BqqTXDEn5U6%2BnfSdWlNx9zUaT7f%2BqXPYxb8Y80OcMMSYyvJRdWvfHAtv1PNug7zvE2BE%2F7ks1HWMS9fdgljnbhqC1kA92xv%2FtG4ClHenBBGxZhhkdnt4u70aCN%2BX1wGskHJ3CKjXXvx0QhtPo0ZZye%2FxILibpzHB%2BaDP%2FS5Q4WQkrTOuZvvWAMroWXq4yVCi8Qr2srGzG30B4MrYKutF10Cji5H7rQEt1IA7OUEmMPLCmqg7LNrppQEHLH0O%2FQVUNcQF6sVfl1UVNry8EoYj5Ecmp28392MccCllA11Ks9lOAXxB7RBlvuzbK83ssKHKT0CRnURLkZURZxY0JSYUmKfwamye%2Fu6oUCFZtpVW91IbgLIQfFVjoJDCKg%2BDE8dEBX%2FA3cJ1xI3%2B62gEuGAoz7LeH6P1JhBEMPqOpL0GOqUBJV3V%2FZsDBqCnyLsVqwBB%2FUDiYyBkILnHosJMlPgwSyDVGB8dVq3G1lMxlI4BWsDiq15VIYm5d5PSEpwSB1iJwDHmq0vjq3TbAX%2FgUNL97KhlTvYgNgUjjUogmhaTgAMUa9KFigwWqv5xZIZ8wjm%2F0MAOtc7SqzDgZ9UHMmRkbsESBXx10grmAzuf2KiwUVA5BzhQ7djm34xqkxGK0phH1gbF83T5&X-Amz-Signature=fa4b68a33709c09b0cf9cc4911cf7415832fe30dcae8e61e5ef4ded7554d38c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2K5UOC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa3hMMD1OLvyP4mDW93%2B62lvVswgmkH9P3MfUgxnpPPgIgXOW%2BQ1cw1dDYXxXBrwPGEVr7qnhMIfc2I6IpxtO7rLUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjordWYiiwCyuWdXircA9j2MvyF5AKxWN8PlGp8uKt7n1MEtUGAbQAxBb3%2FCwtwiz%2BWCk43u1CTuOr%2FNRnOgCK64zyJdQPG3xVgr%2BVO1fqF3V0okuh24QexAxn5Q9Qf2Aavp%2Fjb%2B2GaviwxRQjAnunc8bB4Gp%2BqW5fFjTE59NzdJI%2FXwqE2Jv8dLXjpU9xtfu6nY7zYeu9nDCcA6wm1HztyGOgHaE3kS4ENgSPntRWATDsP%2BqqTXDEn5U6%2BnfSdWlNx9zUaT7f%2BqXPYxb8Y80OcMMSYyvJRdWvfHAtv1PNug7zvE2BE%2F7ks1HWMS9fdgljnbhqC1kA92xv%2FtG4ClHenBBGxZhhkdnt4u70aCN%2BX1wGskHJ3CKjXXvx0QhtPo0ZZye%2FxILibpzHB%2BaDP%2FS5Q4WQkrTOuZvvWAMroWXq4yVCi8Qr2srGzG30B4MrYKutF10Cji5H7rQEt1IA7OUEmMPLCmqg7LNrppQEHLH0O%2FQVUNcQF6sVfl1UVNry8EoYj5Ecmp28392MccCllA11Ks9lOAXxB7RBlvuzbK83ssKHKT0CRnURLkZURZxY0JSYUmKfwamye%2Fu6oUCFZtpVW91IbgLIQfFVjoJDCKg%2BDE8dEBX%2FA3cJ1xI3%2B62gEuGAoz7LeH6P1JhBEMPqOpL0GOqUBJV3V%2FZsDBqCnyLsVqwBB%2FUDiYyBkILnHosJMlPgwSyDVGB8dVq3G1lMxlI4BWsDiq15VIYm5d5PSEpwSB1iJwDHmq0vjq3TbAX%2FgUNL97KhlTvYgNgUjjUogmhaTgAMUa9KFigwWqv5xZIZ8wjm%2F0MAOtc7SqzDgZ9UHMmRkbsESBXx10grmAzuf2KiwUVA5BzhQ7djm34xqkxGK0phH1gbF83T5&X-Amz-Signature=96ef787d561c55daaab70792af17eabcb05d34596812ed52db46b9406eb4100d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
