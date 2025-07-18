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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74CVZRY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH7ulcDDFqzbwVFuYV3xseevwg4d5pMBZdti6%2F57D5OyAiEA%2Bs8QJ9ixLp9D19292Dg0ey%2FOhqEOObshE1Yu%2Fn1LliwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAG7wgWBnUZCBs7cCrcA%2FaQj7BAVui0ajRKu2NAmyvS4w8e7fC%2Bx8FH4oKD5h3Gq%2Bo1sPICicF4Fo5hzj4BLnF1my6hWpn%2F9qdr%2FAGL%2FxEChr5d%2BT2vlPahLNoM1m6hUOBaAun%2FYw1c13ryyaR3ZNQeD%2BPQLAXOyxt4cIldoLppHdRPi2t05wZ3QeHSJQHspulsDKobCwvvodBgBWmqXIcb5F4%2F%2B0jqJi4lT2HmUz9tH0HJ9rMFBVyTP0dQKNqfNyQ%2BkxjB7UM%2FPg99yzj5ElKXgFRqOx5woj4qLoML9HOKLwAYx8brNktg4u1oA%2BbjjCSWdISFPYX9KkcijRD6nhdPK%2FU5Bx54sGbLjg%2F%2FEfODe%2BEbuyDlNbBVb52Mk55JBB%2FinJjT%2FM3C2qvKxfV9faS7bb%2FDi8E5hv4tEMAXxmd8b%2FK8wVakR4DW74gSL4SV3Kk2cn6GH1R2mrgqbearTBflBhB5fR2cxXAJwrjXOc0aGPYatRR4YNOMzimuwijCvYw1UTwA525HSH5QGz53%2BVqOvLqaqiqvfj9leqJ5JMQhEx7nk89m5%2FJrA%2F4DJ3fkE21F4Mao58z97JSiMm9PycrC2GQpLNfZJP93MCKKqTt%2BAfQ8G58k%2FL2%2F4h8ZPnM3av%2BNU6m68TKfMqi6MNTQ6MMGOqUBtTWJ0Y3DtGfWk6PiCgzLtOfxExGVW38X80M1i%2FgeDYGeGGL3zI3f2xWDwSIvuTxIrkczctuVPRuVfdTKFt80y5REuUv3bS%2FQzab0tTkiM6yAamCC1xlHSTMWCWjryJxtbz4ah7Ln0u2vLVIxq%2Bl%2Fl2QQvt8XDzv4UkumBTLNECGIB5KlxXEyQZC4kB8IQ0AvJclaiHfWsDZ2skDtm%2FMAOnGy9tO8&X-Amz-Signature=e58dc57004298e8e9ecfce6bb8588d1af018726e553180b07054b053aba22ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74CVZRY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH7ulcDDFqzbwVFuYV3xseevwg4d5pMBZdti6%2F57D5OyAiEA%2Bs8QJ9ixLp9D19292Dg0ey%2FOhqEOObshE1Yu%2Fn1LliwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAG7wgWBnUZCBs7cCrcA%2FaQj7BAVui0ajRKu2NAmyvS4w8e7fC%2Bx8FH4oKD5h3Gq%2Bo1sPICicF4Fo5hzj4BLnF1my6hWpn%2F9qdr%2FAGL%2FxEChr5d%2BT2vlPahLNoM1m6hUOBaAun%2FYw1c13ryyaR3ZNQeD%2BPQLAXOyxt4cIldoLppHdRPi2t05wZ3QeHSJQHspulsDKobCwvvodBgBWmqXIcb5F4%2F%2B0jqJi4lT2HmUz9tH0HJ9rMFBVyTP0dQKNqfNyQ%2BkxjB7UM%2FPg99yzj5ElKXgFRqOx5woj4qLoML9HOKLwAYx8brNktg4u1oA%2BbjjCSWdISFPYX9KkcijRD6nhdPK%2FU5Bx54sGbLjg%2F%2FEfODe%2BEbuyDlNbBVb52Mk55JBB%2FinJjT%2FM3C2qvKxfV9faS7bb%2FDi8E5hv4tEMAXxmd8b%2FK8wVakR4DW74gSL4SV3Kk2cn6GH1R2mrgqbearTBflBhB5fR2cxXAJwrjXOc0aGPYatRR4YNOMzimuwijCvYw1UTwA525HSH5QGz53%2BVqOvLqaqiqvfj9leqJ5JMQhEx7nk89m5%2FJrA%2F4DJ3fkE21F4Mao58z97JSiMm9PycrC2GQpLNfZJP93MCKKqTt%2BAfQ8G58k%2FL2%2F4h8ZPnM3av%2BNU6m68TKfMqi6MNTQ6MMGOqUBtTWJ0Y3DtGfWk6PiCgzLtOfxExGVW38X80M1i%2FgeDYGeGGL3zI3f2xWDwSIvuTxIrkczctuVPRuVfdTKFt80y5REuUv3bS%2FQzab0tTkiM6yAamCC1xlHSTMWCWjryJxtbz4ah7Ln0u2vLVIxq%2Bl%2Fl2QQvt8XDzv4UkumBTLNECGIB5KlxXEyQZC4kB8IQ0AvJclaiHfWsDZ2skDtm%2FMAOnGy9tO8&X-Amz-Signature=8e50c4b1de8fe5cc1c20dc367137aaadfb8ce350a081993845c90dec1c82aa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
