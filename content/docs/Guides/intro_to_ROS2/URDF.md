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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQDI2XX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChihoLEMA%2BVNLxn0HpyPeD8aD4ln4fDrWqmNtk9RrBmgIhAJbuwKaV6zOWufhiEn9yjC3tTx3unRVufp3ELlNSi8J0Kv8DCF4QABoMNjM3NDIzMTgzODA1Igy4TlxG4J3XVCEpehgq3ANL0G25GtsDg0aOMQPg5oI9rmPde0FwrMFpLL%2BeiHgghX7FlW%2F6YlxhwPGzkZEOsc%2FBrISzoyM9TEHc3%2BQINbBnQqiN5hdkQ%2B6xKRaNSoREWcJUOJ2JNedMjqXk4fGz%2F4NvT6qBB9OEjWCKvcksV7KEMZKzytx3qi2vmsrMD%2FbaSNMKMfJFCWQ9biDeswpFoGAH2XkrMUqrP9GHr1gL1V6hrAnKyIfXTw0hTsehgg%2BqxRbcIJm6JNwxsTNFNYWL9Jws3Dz%2BjM5npZsELHLvkL4lp0fnl42Mj0ENsAkK4VHDPgpGRLIF%2FOJhhzPNZ474ycL5Cv46IPy1KcrA6JacMngAQ8nJYMPccCmleWHZ0jZWLquX5I8z%2FXnuwvaAPg%2FUW1FX%2Be2W1YRV3TZ1ZrxcsCIGoDKAcIbWnV9wEjGIDN0YxpXUw3cHqhVErv3g3gQrXctdvIqYFiGmNZctaqKSo%2FqOG7LbnGL9fc2tLlV%2BYuQ%2FRD97cATJuHuKceSOIAaJdKHNGZoxqtpTGdF6Zu3kJ8OF8e24UZtjj%2B%2BzPlY7gNQ18tOELGdc%2BA6asWRr905q5Zaq9jlyzQNdB%2Btzvpy234Lm7ADYm8SKSGXn6Sbito%2Ft4z8MU3B4tiBwkwD%2FkDDR%2B4PABjqkAZtjYlS%2FOMesrZC8epC5i5JD3iLKBiYv1n3b19%2F39T6Ltw61r%2BOTEWk5BMjCWHBhLblZf%2BwaSi%2Fwj2Up%2BbcsnCRACx3FsaL1uytJE2xB%2Br9HaA2Tjio2AObS7ZnSYzEGRinsih9%2BJQULe2tc4ALp%2FsZH4fqXk48HeeLUK5xrHzHHhUC%2BtA2tZLOrKqGQC5xTBcNciVj5Nz3521TxIrGnYGkSU9C6&X-Amz-Signature=84c3768e3e5eddb0d20c2880f98e9c5cdfe7cfa3b1991afd14f6af814d145fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQDI2XX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChihoLEMA%2BVNLxn0HpyPeD8aD4ln4fDrWqmNtk9RrBmgIhAJbuwKaV6zOWufhiEn9yjC3tTx3unRVufp3ELlNSi8J0Kv8DCF4QABoMNjM3NDIzMTgzODA1Igy4TlxG4J3XVCEpehgq3ANL0G25GtsDg0aOMQPg5oI9rmPde0FwrMFpLL%2BeiHgghX7FlW%2F6YlxhwPGzkZEOsc%2FBrISzoyM9TEHc3%2BQINbBnQqiN5hdkQ%2B6xKRaNSoREWcJUOJ2JNedMjqXk4fGz%2F4NvT6qBB9OEjWCKvcksV7KEMZKzytx3qi2vmsrMD%2FbaSNMKMfJFCWQ9biDeswpFoGAH2XkrMUqrP9GHr1gL1V6hrAnKyIfXTw0hTsehgg%2BqxRbcIJm6JNwxsTNFNYWL9Jws3Dz%2BjM5npZsELHLvkL4lp0fnl42Mj0ENsAkK4VHDPgpGRLIF%2FOJhhzPNZ474ycL5Cv46IPy1KcrA6JacMngAQ8nJYMPccCmleWHZ0jZWLquX5I8z%2FXnuwvaAPg%2FUW1FX%2Be2W1YRV3TZ1ZrxcsCIGoDKAcIbWnV9wEjGIDN0YxpXUw3cHqhVErv3g3gQrXctdvIqYFiGmNZctaqKSo%2FqOG7LbnGL9fc2tLlV%2BYuQ%2FRD97cATJuHuKceSOIAaJdKHNGZoxqtpTGdF6Zu3kJ8OF8e24UZtjj%2B%2BzPlY7gNQ18tOELGdc%2BA6asWRr905q5Zaq9jlyzQNdB%2Btzvpy234Lm7ADYm8SKSGXn6Sbito%2Ft4z8MU3B4tiBwkwD%2FkDDR%2B4PABjqkAZtjYlS%2FOMesrZC8epC5i5JD3iLKBiYv1n3b19%2F39T6Ltw61r%2BOTEWk5BMjCWHBhLblZf%2BwaSi%2Fwj2Up%2BbcsnCRACx3FsaL1uytJE2xB%2Br9HaA2Tjio2AObS7ZnSYzEGRinsih9%2BJQULe2tc4ALp%2FsZH4fqXk48HeeLUK5xrHzHHhUC%2BtA2tZLOrKqGQC5xTBcNciVj5Nz3521TxIrGnYGkSU9C6&X-Amz-Signature=70fd51c7f1d8b6c0e69da493eec9ede2ff37e18c946d154bd23dbf43e390e6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
