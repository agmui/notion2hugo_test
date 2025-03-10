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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGB3FMV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBcVNhknoav2URZWAayiuvT4Ji2iTczrLyHLi6LmQxlrAiEAk7gRrwG9hanvx4S0m9noAj86PkMgE7gAnlL98ipF4boqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyLaBG6W1E6RKpEuCrcA%2BNMvFJAwv8w5KMrNgm9ElkcLymdM6aRnDYY%2BACdCbr%2FIZOnfX0Q5c4XhkQKKRPO8XU50H%2Fft2bUpqYhETg0PC0JJfVEhGm8M3bDRhDorBOuaVJS2T67jeRHLMjBYUHBDMuGSAtURSJsDEV313ItbenS6v3EBWf%2Bbx8hvJ7RX0D50I0RPEobEcxtmdNpB5rs%2FfZGX5uMjPrumdzl0IQlppIW7ckvp9at0FfS9MN9SD2K6P4JjM%2F1fis%2BJVWkq4pnAHH%2FLIQR66WxK%2FR8BqnT2%2FMDog719Ei0rfCNeTj3K%2BuvLTOEWDwwAIcr%2FcgWUqBJoDv68MuBDulOFEKgmghBMx3oM1R%2FBU3veU%2FZmaKh6wV1%2F7%2FWVzwkQd%2FYe4wyA1MyopgufFq3nYE70L6PpjMh0w33i9faxNbK3BXeUMETLXcNVG9FShuhlncRnwDsMFOun7sOYIIM91FsUEV7V%2FzKgtDeC5VIEkGjUWnVPVMyKdFbj2odR3JyJYNeFCJKZnsJEXJTwzA7zCFzVG%2BYWsKZARrf0lltreN4cOwi2tXhg7z9EmmTp62Wp17aplAE4DbUXq5Ycn6e4zrYxop6%2BoPcRa8PGaEDphNqZOyeP2ikOkjORqTR%2Bhvo0QeIE5hXMMSsvb4GOqUBbRyey1zf4SASpTLyxXJEO5zAine2r6GWYWZ4Yxvdey%2BmlCvNOec2COHbNh6md78nimtjPU0s5YP9RiI%2FR3PRiwGHF%2FyHmBY1E7qUKrWmj%2BTZ5Vly65renEktoD4anjeCg7a87MKUuhbA8EOmBfg8yI%2BMcwKZzDvm4JYqDDbvq4wbm4bK6kbc1b5n9BO8NF9sc%2B3hCMfdNgc83F9ft4aEQT%2FfO9wh&X-Amz-Signature=75ee1a3580c17c86d90f09d654ce33e86b7c6f5fc45df9aaa57b227746d656a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGB3FMV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBcVNhknoav2URZWAayiuvT4Ji2iTczrLyHLi6LmQxlrAiEAk7gRrwG9hanvx4S0m9noAj86PkMgE7gAnlL98ipF4boqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyLaBG6W1E6RKpEuCrcA%2BNMvFJAwv8w5KMrNgm9ElkcLymdM6aRnDYY%2BACdCbr%2FIZOnfX0Q5c4XhkQKKRPO8XU50H%2Fft2bUpqYhETg0PC0JJfVEhGm8M3bDRhDorBOuaVJS2T67jeRHLMjBYUHBDMuGSAtURSJsDEV313ItbenS6v3EBWf%2Bbx8hvJ7RX0D50I0RPEobEcxtmdNpB5rs%2FfZGX5uMjPrumdzl0IQlppIW7ckvp9at0FfS9MN9SD2K6P4JjM%2F1fis%2BJVWkq4pnAHH%2FLIQR66WxK%2FR8BqnT2%2FMDog719Ei0rfCNeTj3K%2BuvLTOEWDwwAIcr%2FcgWUqBJoDv68MuBDulOFEKgmghBMx3oM1R%2FBU3veU%2FZmaKh6wV1%2F7%2FWVzwkQd%2FYe4wyA1MyopgufFq3nYE70L6PpjMh0w33i9faxNbK3BXeUMETLXcNVG9FShuhlncRnwDsMFOun7sOYIIM91FsUEV7V%2FzKgtDeC5VIEkGjUWnVPVMyKdFbj2odR3JyJYNeFCJKZnsJEXJTwzA7zCFzVG%2BYWsKZARrf0lltreN4cOwi2tXhg7z9EmmTp62Wp17aplAE4DbUXq5Ycn6e4zrYxop6%2BoPcRa8PGaEDphNqZOyeP2ikOkjORqTR%2Bhvo0QeIE5hXMMSsvb4GOqUBbRyey1zf4SASpTLyxXJEO5zAine2r6GWYWZ4Yxvdey%2BmlCvNOec2COHbNh6md78nimtjPU0s5YP9RiI%2FR3PRiwGHF%2FyHmBY1E7qUKrWmj%2BTZ5Vly65renEktoD4anjeCg7a87MKUuhbA8EOmBfg8yI%2BMcwKZzDvm4JYqDDbvq4wbm4bK6kbc1b5n9BO8NF9sc%2B3hCMfdNgc83F9ft4aEQT%2FfO9wh&X-Amz-Signature=9237490eff969298234c9185358356ad39bb13e2fa88d290ece23fd3a1df815a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
