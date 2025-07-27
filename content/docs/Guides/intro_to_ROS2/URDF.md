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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZP34FOW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHlQVvMCLznIJ2f601Gmn0BcxiOvCc22N2OWDhQsTEgcAiBMny6%2FIUT30%2BRYVf8gpAbHY6YLfcR3bdpVgqDvRmgImir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMDmg6mCTyyWX%2Brk4AKtwD9QjdlGMtWi4oFCFvg1QhYg%2F2FuStvs8GVWYF0pjML1%2FJ%2Bc%2FDcDog6S0mQANT6O9iX1H8Af9y5hPWJ%2FFZiKvKEe%2BqNrZkdGMQx1BdRWK6T6%2BLaWzVIOMNMklPeBKcOUMr6XTT%2BALtUdab6%2BG7aKBsYvGhduzJM5%2BjZJKP5l0GLO70kYi0F5Ymln2JEvR1DVi1mWgCzSTTGBNU2LIdRjmEldt8WeFtcWUDEC%2BG%2F%2BMGkD108F3v2LBif2FYQSyJlwdve6ZrNpu48LekYLRn1rf9ICf%2B%2F7x1lUr7OzbV75Y3xYhxOuvENC64hwNprqUcrzaoPRIsjumvjIWDvgzCPE1K%2BMe4%2FToHg695SXtA%2Bg3Fu4CpXidZTl9oQ1AMr6ISFItAsenmd9fbLEoxCspHx9NIamd8UQyzT8uHebhEZfU8iPWzIU6lFtU2RFikZ8WLWdRw2%2BhooNfJ%2BDIm7uDNgHXV2o5XREe5tZomrmwp6p7A0hY0ss0I5X0KxLs%2FNWlLuB0CyPNLtWOtYe3OWvyRil6931e%2Bo3di%2F1tzpeMo8e0eDhdQmWAckOiiiScmaWnvo9OjSAqV6AxDbZwfgqKycs9fwya322JFSxxldTpIKT0vj7ZJjCybSEQWNMsXUQsw1PWYxAY6pgG0lp3elqmpFaJLNVH62knocNS8UCBuFjGYxGCD1dBb6aHJOZpYGqA2g6JrSXWmojHvoylX0VTF36Ri1XHkGJcGg%2BvCpTL2DQ%2B82gjsQO8cDVELpGCnn6%2BQ%2FkGy8zZuSMDejSQL5OGpRaOvYSz5ndQJoaYP6ojuT%2Bzopt6exVJ6yep%2BBYa6Jc6rw0gjaK3p4pWih9nRhf4JTMSWDk%2B%2B728Ilqg0Evs9&X-Amz-Signature=4b6c5d3ea84cf38788d81ad8483ef60d8d1c63eac59305bb8f7ddcc311d5517d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZP34FOW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHlQVvMCLznIJ2f601Gmn0BcxiOvCc22N2OWDhQsTEgcAiBMny6%2FIUT30%2BRYVf8gpAbHY6YLfcR3bdpVgqDvRmgImir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMDmg6mCTyyWX%2Brk4AKtwD9QjdlGMtWi4oFCFvg1QhYg%2F2FuStvs8GVWYF0pjML1%2FJ%2Bc%2FDcDog6S0mQANT6O9iX1H8Af9y5hPWJ%2FFZiKvKEe%2BqNrZkdGMQx1BdRWK6T6%2BLaWzVIOMNMklPeBKcOUMr6XTT%2BALtUdab6%2BG7aKBsYvGhduzJM5%2BjZJKP5l0GLO70kYi0F5Ymln2JEvR1DVi1mWgCzSTTGBNU2LIdRjmEldt8WeFtcWUDEC%2BG%2F%2BMGkD108F3v2LBif2FYQSyJlwdve6ZrNpu48LekYLRn1rf9ICf%2B%2F7x1lUr7OzbV75Y3xYhxOuvENC64hwNprqUcrzaoPRIsjumvjIWDvgzCPE1K%2BMe4%2FToHg695SXtA%2Bg3Fu4CpXidZTl9oQ1AMr6ISFItAsenmd9fbLEoxCspHx9NIamd8UQyzT8uHebhEZfU8iPWzIU6lFtU2RFikZ8WLWdRw2%2BhooNfJ%2BDIm7uDNgHXV2o5XREe5tZomrmwp6p7A0hY0ss0I5X0KxLs%2FNWlLuB0CyPNLtWOtYe3OWvyRil6931e%2Bo3di%2F1tzpeMo8e0eDhdQmWAckOiiiScmaWnvo9OjSAqV6AxDbZwfgqKycs9fwya322JFSxxldTpIKT0vj7ZJjCybSEQWNMsXUQsw1PWYxAY6pgG0lp3elqmpFaJLNVH62knocNS8UCBuFjGYxGCD1dBb6aHJOZpYGqA2g6JrSXWmojHvoylX0VTF36Ri1XHkGJcGg%2BvCpTL2DQ%2B82gjsQO8cDVELpGCnn6%2BQ%2FkGy8zZuSMDejSQL5OGpRaOvYSz5ndQJoaYP6ojuT%2Bzopt6exVJ6yep%2BBYa6Jc6rw0gjaK3p4pWih9nRhf4JTMSWDk%2B%2B728Ilqg0Evs9&X-Amz-Signature=794235131383b74c32fe993371a44b6a82620cf551fce9a97bb3cb248223d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
