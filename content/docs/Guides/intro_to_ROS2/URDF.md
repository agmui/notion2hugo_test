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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5MMOUG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDU2e7IEA6%2FjEhdGaOeJYR5RNG%2FiuF6YEb7VeMCBwX2YQIhAPTONAEkxjxILZ%2FBh7ULuaupZGRZaTGIMtVb3pVd2pXRKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B3Xz6i4Uv1PKPC34q3AOECrUilsPRFyynCo5UeIueDq80rwsuGdglvEp1jWdFd5E9oftryWp5hda5IOVp%2BwhqnDEP%2FJzZl7WsMOxIdrliMZ6ZZBXRTcChfZ5bnz93EA%2F28I0M9gQXo1p3Pnc0TKJhszy187cAlmXePNxbPaKIaak0FG08qAY4aHhB8ZQ9NtYhBGE1y53f07e0GforulDeXs4KFjl7dVdiLvbbCb2aRi7WuhSQ8Ymuzy1jnrDjvSp5CJjLOXj0cD6e7%2FYK6RQbp2FZQt3wD3A1NbwWQ1zUiFHFH6kJzgjcc%2B2bFWJekC0DcMe%2FweV8AdFaVJnA7M4Ppe6g%2BKu3m%2FHpROUSX6IzFa8gqCPXVIXFw%2FdckWNK2OQ7wuixQtg7JYcEdhw4XeOmlFrfXReJtckTfkhCk0HEZaiOMzwfG3y4wLxm5QiYFzaqiGbq%2BJ4fGN%2FnQ78sMMJU0T1mfmYMhIwD3QpPDilkZll5j8%2BNdceNwbB84%2FYq08IZj%2F3lPQG2rOoitk5q36l4atC12K0vAcLqAMaKEujLdxyYFL%2BGhJHtkN2B%2FT%2BKE5M%2BxLMKjZAKO1hnPA%2BKR%2BXquZgCYc2aMZFpXOBPv%2B6%2BAD%2FJVpQv756qnxihnAd%2BS7ytswqiOus41yt1wjDOh7nBBjqkAUCtqSCZfuzIG1E%2FqT77dZXcB3BTyWEDbEXTOwTpzuxuVYxD9YP%2FTS2iX1ybmWKcdQO2QACfrXy5heG2alrmo9gtVqny8tD92ZVrM5A1cWfBsFhRRogDLHgvmLkvh3KFcPv1JV9awC2rWM7Hw1vKGARhjpeJKox1E2fx%2B6cx5jPduz0tJ%2Br3avQ0qwPKwVuuNnhBaKhnGdV%2FnzGJg4wNpX54jxEf&X-Amz-Signature=6ce43bd8dfc20d36e0093834f6e4cff1f668c0c96171ae6afcdfab9fd72d8d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5MMOUG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDU2e7IEA6%2FjEhdGaOeJYR5RNG%2FiuF6YEb7VeMCBwX2YQIhAPTONAEkxjxILZ%2FBh7ULuaupZGRZaTGIMtVb3pVd2pXRKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B3Xz6i4Uv1PKPC34q3AOECrUilsPRFyynCo5UeIueDq80rwsuGdglvEp1jWdFd5E9oftryWp5hda5IOVp%2BwhqnDEP%2FJzZl7WsMOxIdrliMZ6ZZBXRTcChfZ5bnz93EA%2F28I0M9gQXo1p3Pnc0TKJhszy187cAlmXePNxbPaKIaak0FG08qAY4aHhB8ZQ9NtYhBGE1y53f07e0GforulDeXs4KFjl7dVdiLvbbCb2aRi7WuhSQ8Ymuzy1jnrDjvSp5CJjLOXj0cD6e7%2FYK6RQbp2FZQt3wD3A1NbwWQ1zUiFHFH6kJzgjcc%2B2bFWJekC0DcMe%2FweV8AdFaVJnA7M4Ppe6g%2BKu3m%2FHpROUSX6IzFa8gqCPXVIXFw%2FdckWNK2OQ7wuixQtg7JYcEdhw4XeOmlFrfXReJtckTfkhCk0HEZaiOMzwfG3y4wLxm5QiYFzaqiGbq%2BJ4fGN%2FnQ78sMMJU0T1mfmYMhIwD3QpPDilkZll5j8%2BNdceNwbB84%2FYq08IZj%2F3lPQG2rOoitk5q36l4atC12K0vAcLqAMaKEujLdxyYFL%2BGhJHtkN2B%2FT%2BKE5M%2BxLMKjZAKO1hnPA%2BKR%2BXquZgCYc2aMZFpXOBPv%2B6%2BAD%2FJVpQv756qnxihnAd%2BS7ytswqiOus41yt1wjDOh7nBBjqkAUCtqSCZfuzIG1E%2FqT77dZXcB3BTyWEDbEXTOwTpzuxuVYxD9YP%2FTS2iX1ybmWKcdQO2QACfrXy5heG2alrmo9gtVqny8tD92ZVrM5A1cWfBsFhRRogDLHgvmLkvh3KFcPv1JV9awC2rWM7Hw1vKGARhjpeJKox1E2fx%2B6cx5jPduz0tJ%2Br3avQ0qwPKwVuuNnhBaKhnGdV%2FnzGJg4wNpX54jxEf&X-Amz-Signature=017c06a31e3993299502854d12af033e044c5fec9702ce4e60f21fadccf7d243&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
