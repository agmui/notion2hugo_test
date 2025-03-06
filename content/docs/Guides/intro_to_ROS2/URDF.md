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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLUQMNE%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1nrAaMYSH0oR465vf4tTa%2FS3PvL70gjeJMaSKQ4zrzwIhAN2lZ3CWHwVEbqd33rEq2q5sAp%2FD36Nci5bgQz4tqReBKv8DCC8QABoMNjM3NDIzMTgzODA1IgzTa%2FzXj2GOitVvmmUq3AOhmixgxbbuK35FkrbYcLYwwervzCsheKggjbWlhSaX1IS667NY%2BPwRx%2BeQRsRN50p7VcIgNlxDTCX3u1GLRbK%2BRtKlsqE26NF4hQ8MGiOif51VV5CAVyX8sNxJ9Xn4egl%2B6%2FGdg545%2FmpHplAJIUjyP9Dc6ISZGSGx3BYKSli8gOJo9AIaNXr0QRB%2BiGPWR6cvdovI%2BUCbNYpinnQqeso%2FbYGC7KVHo84gdlmQrKM1qwV4UdvsN%2FuKJpJpGAGyqDp3jWBp2etuNMLyx%2FFZ1t%2Fa8zHY9wtYkm5yxvO1piky1aMN5cB9mfZE8vKoSCO8fMIuZOQRXCxaHV3hrpKy9dXUVDGI9YVnEDaT1JXEoE%2BG5DG23KOHxeO9IDT7Q%2BslYCL4rMY7kvQL7nJ9aQhmQLFAL7zw5WTVRj0YivC9TXZhN2%2BmkkK2XpKRL%2FxjHp900RLxq6fjWlDqKFhSLSTGgXkwmiQJRvYBLqfM8beBKj0vMQzXF5T%2BKD1kQZuz8HIsuxcZ0ZLEqvtFGMuGN5tOxUjPH50CV4o4u%2FIbOG%2FJpMBs4jCrFJSrXAqqAB4f8%2BRhgcWH6g2J8VNM93B99cCkBNSjoZu1aqEnl7NeFsDmP8Ur7QqZZyp0Oi2H%2FzCANjCK0aa%2BBjqkAbbXvl%2Fa9zxJRxXKyZKEQEJr853k3Rer409dTst9Xtyup46MyNZ8vqiQmaWixdEOiMD6W4DF03iudhxv2f0HOuMrMBpfqbocgJzdRKgvPxomo8HEuxjEQOPLscSr%2FXweDHSw7UZGht11OJPu6IzzKQ7XkXIU75JNtDvaBKCtfWD8MAHiOWcxd6zHtZp2XZJtCzhlZFCArBFTYUszIuIXV87k%2BEYf&X-Amz-Signature=9e5782f78a09394ddb78c6551dbbc7b07aad07212cd0dc530f3c3b90c0b53de9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLUQMNE%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1nrAaMYSH0oR465vf4tTa%2FS3PvL70gjeJMaSKQ4zrzwIhAN2lZ3CWHwVEbqd33rEq2q5sAp%2FD36Nci5bgQz4tqReBKv8DCC8QABoMNjM3NDIzMTgzODA1IgzTa%2FzXj2GOitVvmmUq3AOhmixgxbbuK35FkrbYcLYwwervzCsheKggjbWlhSaX1IS667NY%2BPwRx%2BeQRsRN50p7VcIgNlxDTCX3u1GLRbK%2BRtKlsqE26NF4hQ8MGiOif51VV5CAVyX8sNxJ9Xn4egl%2B6%2FGdg545%2FmpHplAJIUjyP9Dc6ISZGSGx3BYKSli8gOJo9AIaNXr0QRB%2BiGPWR6cvdovI%2BUCbNYpinnQqeso%2FbYGC7KVHo84gdlmQrKM1qwV4UdvsN%2FuKJpJpGAGyqDp3jWBp2etuNMLyx%2FFZ1t%2Fa8zHY9wtYkm5yxvO1piky1aMN5cB9mfZE8vKoSCO8fMIuZOQRXCxaHV3hrpKy9dXUVDGI9YVnEDaT1JXEoE%2BG5DG23KOHxeO9IDT7Q%2BslYCL4rMY7kvQL7nJ9aQhmQLFAL7zw5WTVRj0YivC9TXZhN2%2BmkkK2XpKRL%2FxjHp900RLxq6fjWlDqKFhSLSTGgXkwmiQJRvYBLqfM8beBKj0vMQzXF5T%2BKD1kQZuz8HIsuxcZ0ZLEqvtFGMuGN5tOxUjPH50CV4o4u%2FIbOG%2FJpMBs4jCrFJSrXAqqAB4f8%2BRhgcWH6g2J8VNM93B99cCkBNSjoZu1aqEnl7NeFsDmP8Ur7QqZZyp0Oi2H%2FzCANjCK0aa%2BBjqkAbbXvl%2Fa9zxJRxXKyZKEQEJr853k3Rer409dTst9Xtyup46MyNZ8vqiQmaWixdEOiMD6W4DF03iudhxv2f0HOuMrMBpfqbocgJzdRKgvPxomo8HEuxjEQOPLscSr%2FXweDHSw7UZGht11OJPu6IzzKQ7XkXIU75JNtDvaBKCtfWD8MAHiOWcxd6zHtZp2XZJtCzhlZFCArBFTYUszIuIXV87k%2BEYf&X-Amz-Signature=63aa2e9ff034dbcedefd0a0ee23b9f9dde4ea0173dfda96d41ae88a68809a73b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
