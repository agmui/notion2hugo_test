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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOU354EY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPSeI%2FRzOwxnYod83roLdq5CuJxIOeAPNu%2F%2BoPXE466wIhAIdcOU4bVsWqmsFAXr1WnP%2F2MAYXucAVVAJzcmFGpeHUKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIrVdLu4vsb731QXMq3AMyeTXVibAsl1Kda8n%2BDZ%2F%2BSHkUlE8LbHxy4xaV3UAckDH7vNT8Ann5QqCqzvDqUB9ErR5CRSenKQLVQWKeujgEa9RKCXmOzfMoy3AstAvRThyIPuCG0HjefZF%2F0CdnsfG81FMU8oyTzF2elfalWHg5xaqNdz4O3E9umIsdVp0vQge8h1Kle9IOK953fM6fWJ10IstvYxC7Yx3QbQI5rTdPYQR%2FltcVb%2FR0kCSYWiDlBZZi5%2BG7Sn%2BC9LoKURN1zoMwY%2BQiULJIw%2FAWrkB6VZcVRZ6yKJgLh3Jm%2FYKHc9kb7kfMO3ZVIxdOZ%2FjvHQL0w8c7BRC6H37uFH2Y166mvupRfqGL5ny5%2BaA9xz3naOYPCzxMWq%2Fo8NLpH4R7U2zrAj9qFLrBw%2BHt3AKgCOUXfS8UhwZL9S2798PWcXnhd6FtXD%2FVNyUguppzOpNyUEH8mzwETzmsBlouzA8XbUygCoeTvfl5%2FkuOka3L0pYluZgeqrlyBFxbbZkhrexTy%2Ft319iCXKzM6%2FyvZUku4SvC6WEcI7Bx043o1cpDfWltU3LwE3NsEjk3NznI02g18jAVaSxRQGjn5WsN6jZTB%2B00qrdvrYGeu9cajrwiRjuNiuQR0ZKcKydjU8xJL16JfzDknfnDBjqkAetcalbKRfDf7DvHiVNjp6yq5fHZ0uip0%2FOC3K1G%2BuXMyYDgorly3xbAovgPqf0bEr7DWyDcRieTFFiKHYWlCjG0DPh8YUlN2TD2HgG6mDtpMD3iTQQ2wIYpslQEj58J8aXJoE9srKVsCkX9YRmOQ93reuY9dbeTA1eIumiuAacb5nAadu8MtX%2FubaDf2qNJA%2BhYIM0HTC2kJSg7FjbOiwXNALRS&X-Amz-Signature=02833f30e647f96f1ddc94f2af2a467d7280e632a1592c5f545ae9987eafaee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOU354EY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPSeI%2FRzOwxnYod83roLdq5CuJxIOeAPNu%2F%2BoPXE466wIhAIdcOU4bVsWqmsFAXr1WnP%2F2MAYXucAVVAJzcmFGpeHUKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIrVdLu4vsb731QXMq3AMyeTXVibAsl1Kda8n%2BDZ%2F%2BSHkUlE8LbHxy4xaV3UAckDH7vNT8Ann5QqCqzvDqUB9ErR5CRSenKQLVQWKeujgEa9RKCXmOzfMoy3AstAvRThyIPuCG0HjefZF%2F0CdnsfG81FMU8oyTzF2elfalWHg5xaqNdz4O3E9umIsdVp0vQge8h1Kle9IOK953fM6fWJ10IstvYxC7Yx3QbQI5rTdPYQR%2FltcVb%2FR0kCSYWiDlBZZi5%2BG7Sn%2BC9LoKURN1zoMwY%2BQiULJIw%2FAWrkB6VZcVRZ6yKJgLh3Jm%2FYKHc9kb7kfMO3ZVIxdOZ%2FjvHQL0w8c7BRC6H37uFH2Y166mvupRfqGL5ny5%2BaA9xz3naOYPCzxMWq%2Fo8NLpH4R7U2zrAj9qFLrBw%2BHt3AKgCOUXfS8UhwZL9S2798PWcXnhd6FtXD%2FVNyUguppzOpNyUEH8mzwETzmsBlouzA8XbUygCoeTvfl5%2FkuOka3L0pYluZgeqrlyBFxbbZkhrexTy%2Ft319iCXKzM6%2FyvZUku4SvC6WEcI7Bx043o1cpDfWltU3LwE3NsEjk3NznI02g18jAVaSxRQGjn5WsN6jZTB%2B00qrdvrYGeu9cajrwiRjuNiuQR0ZKcKydjU8xJL16JfzDknfnDBjqkAetcalbKRfDf7DvHiVNjp6yq5fHZ0uip0%2FOC3K1G%2BuXMyYDgorly3xbAovgPqf0bEr7DWyDcRieTFFiKHYWlCjG0DPh8YUlN2TD2HgG6mDtpMD3iTQQ2wIYpslQEj58J8aXJoE9srKVsCkX9YRmOQ93reuY9dbeTA1eIumiuAacb5nAadu8MtX%2FubaDf2qNJA%2BhYIM0HTC2kJSg7FjbOiwXNALRS&X-Amz-Signature=0f5d5f0ade457d19650708e58818fccdb673b7a39044aa0ebefb9f423f51748f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
