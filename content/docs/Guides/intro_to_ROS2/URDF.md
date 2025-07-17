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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOLW372%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIC2SOMWF9uaAqzt36ZEYQ9Glxyoy5JqMv9KFYfoDDVFFAiAaA2INW%2BBYXsnrarqNuggEv8HhZFRSy4QBHLVUZXvl5Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHtEO%2BefpL2yxXG9zKtwDedkuLDMLC0%2FMDYZS5ru5o%2FgGm9LyZLBFdtfm%2BIW7SzMNgPyGKz%2Bh1Yef%2FmzAphwnR8NBVsNm5kRnyEufvnYVoE8TfKkBCURV%2BBRXuodn8X%2BsDKtStiWR6fqF%2FSkCGCIHw96%2FTknvOK2G051xjs3%2FiBAuVG1vWRodpGMr40VCiQSiysDB8QHUZdeMvo58p1Nq19RojsY%2Bsy3DHdJed2Lth9UbrqtGA079AdIj6mXft2f7y8vZI9nYuMG%2BIyuSEAQKnYcL9prZtnDAITm7DiHMvSRr0%2FpH0jwBO1CcuTY8pCLXD%2Fqo%2F9bAYlmnDEpbwcjoFNPYExcHfVSr8u0WOSYzpbX5UKL8%2F3OD4eaVxBLoHQkYdE08virKRJJoWlN3olK4Wn6iAg6VKti3hfUOD1JCU84M1mvhvH%2BGYUlAPwh%2Bqvv88sxZ8Ltt8UAbJEX%2BFu%2F0eOiVbKou7gL3yoAHwVXbxrATb9187fR7Z0ukZJkSJh%2FP6Bs%2FDyS%2BjAw20P3oI6dlK1ckh57Jaj76NhItqeDmp2Px%2B4jTK%2FnClMJyO1QGzb3pqP076LMmCbfcXaUDr7rk5ER3F%2B9jTk8LmvJX5kp9V2lAolg761osjfcmHJmQpq3OpH4xv%2FTo5%2BGF1OEw%2Bb7kwwY6pgEwhDGVrgKK3WMczJzB1KC0FqAU9IdBqRzM6xJZ6JyxsLzbpM5IKNZ9G57b98qwKdxXhcYTsTayNSkEo2N%2FXkSBuKyvbmWa905Ye9ipeEpmVSOc3bPfshZIDrULuhOdB65PE11YtuAzTOW4sjjXMYUfNYyhcpxTbjHmhB4tt%2F83bP%2FkZwX4UybSlzyMrVd%2B484Oo%2BBx%2F9eb4wzn%2BLNkjdPvfMjlxBLn&X-Amz-Signature=653732ec8313492941594d495c83b1435673914cf6017525006207d6864cae46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOLW372%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIC2SOMWF9uaAqzt36ZEYQ9Glxyoy5JqMv9KFYfoDDVFFAiAaA2INW%2BBYXsnrarqNuggEv8HhZFRSy4QBHLVUZXvl5Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHtEO%2BefpL2yxXG9zKtwDedkuLDMLC0%2FMDYZS5ru5o%2FgGm9LyZLBFdtfm%2BIW7SzMNgPyGKz%2Bh1Yef%2FmzAphwnR8NBVsNm5kRnyEufvnYVoE8TfKkBCURV%2BBRXuodn8X%2BsDKtStiWR6fqF%2FSkCGCIHw96%2FTknvOK2G051xjs3%2FiBAuVG1vWRodpGMr40VCiQSiysDB8QHUZdeMvo58p1Nq19RojsY%2Bsy3DHdJed2Lth9UbrqtGA079AdIj6mXft2f7y8vZI9nYuMG%2BIyuSEAQKnYcL9prZtnDAITm7DiHMvSRr0%2FpH0jwBO1CcuTY8pCLXD%2Fqo%2F9bAYlmnDEpbwcjoFNPYExcHfVSr8u0WOSYzpbX5UKL8%2F3OD4eaVxBLoHQkYdE08virKRJJoWlN3olK4Wn6iAg6VKti3hfUOD1JCU84M1mvhvH%2BGYUlAPwh%2Bqvv88sxZ8Ltt8UAbJEX%2BFu%2F0eOiVbKou7gL3yoAHwVXbxrATb9187fR7Z0ukZJkSJh%2FP6Bs%2FDyS%2BjAw20P3oI6dlK1ckh57Jaj76NhItqeDmp2Px%2B4jTK%2FnClMJyO1QGzb3pqP076LMmCbfcXaUDr7rk5ER3F%2B9jTk8LmvJX5kp9V2lAolg761osjfcmHJmQpq3OpH4xv%2FTo5%2BGF1OEw%2Bb7kwwY6pgEwhDGVrgKK3WMczJzB1KC0FqAU9IdBqRzM6xJZ6JyxsLzbpM5IKNZ9G57b98qwKdxXhcYTsTayNSkEo2N%2FXkSBuKyvbmWa905Ye9ipeEpmVSOc3bPfshZIDrULuhOdB65PE11YtuAzTOW4sjjXMYUfNYyhcpxTbjHmhB4tt%2F83bP%2FkZwX4UybSlzyMrVd%2B484Oo%2BBx%2F9eb4wzn%2BLNkjdPvfMjlxBLn&X-Amz-Signature=a0e96f870a4a6364a0bbaf27231e268b0d47271a49e982582b221bf74d330598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
