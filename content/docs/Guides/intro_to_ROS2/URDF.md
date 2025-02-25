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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXAK4GH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDiTBu3WvjGFAyXJXSk0SM%2BGd5DWoUI00Uhtle%2FsAF5JwIgaLaLZW33lWjjdpGRjCDHfa9tNe5dTxJFIwn4JJ%2BSzjYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAD5AJ4LYNKYTLb4jyrcAyyoRbOZ8wyy82syPsf7nkr871HKLXzxPvBL73TQqprbMlq%2BaQSVKlPnH5x%2BgIyZZPLNwQYKIiJ9OAhJEGpaPawylbQzS6Wu%2BeAe0mtzgmgt3Febb%2FxrcmF6U%2BdmuxU3Z%2FjzI6B6pj9zAOk2GKP0LD8fJNZfaX1zBCkj0iIJZsX%2F1OOQqEao363uHtMQVDtYy%2BgDRK3%2BqxAeFIucn9DYtsG0haxKZyTPwcckvIkBYtqeEqrHmlRWaq2B9Qi4w3PIDO2QjF6ywkQNRl%2BigHq5QGFOlvOtpK8%2FzFsi%2FF3vUt9HByRIHAdnr0rMAfQhoOMprDHQTew0RQIVt61wViVErHVtX6hI%2FaBW6000CU4dS4b9tDHMjLobDjXj%2FXyd%2FgTTFKSBj7bJWi264ruR4Zew9XFEkF%2BUJH64puA1gE59KeMgW36AECvzbifFGKSEDjaj7fLtfsSyNfaqzlG4SYCdcpOLskblXvrH3ZNQ87dgHxTF8Ay9wnI8U7R%2BZG98L3x36t0%2F0DJgT4n6iwZFeZSsVzunTS77fcRDzsMqpGsXgrICEobXNekf3d2Bl%2FdnhB9ZMQs6S0YMA2VdG436h3NfZMkQMUljn5PEh3zQrJpK0%2By0Uc%2BkxPqH2Rld7aZJMNCt9b0GOqUB%2FgD4J%2FJyh4ONQHp2ag9DzbjrGQN5hJzFmxEKg18Ce0r9faa2KzZs0VlHwGmaevE1J9xokN2OVfhT7OY1YaVG45Sz%2B5jnYvSx9tjRti4XL8A7XGou%2BdDSR7N2UKIi4%2FaWklByYnqguaz%2Fe1qG6nPjteYKaGruJzVsVGs5KcEwAatgejGnos1fdaHSWCzrKQi9MRHEaqQMgjHeoPQXq%2BIFmcSPLGzV&X-Amz-Signature=1990e3f341de5bafccefe43280004d0b10622c5f9a92785d1f47273e80c89b76&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXAK4GH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDiTBu3WvjGFAyXJXSk0SM%2BGd5DWoUI00Uhtle%2FsAF5JwIgaLaLZW33lWjjdpGRjCDHfa9tNe5dTxJFIwn4JJ%2BSzjYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAD5AJ4LYNKYTLb4jyrcAyyoRbOZ8wyy82syPsf7nkr871HKLXzxPvBL73TQqprbMlq%2BaQSVKlPnH5x%2BgIyZZPLNwQYKIiJ9OAhJEGpaPawylbQzS6Wu%2BeAe0mtzgmgt3Febb%2FxrcmF6U%2BdmuxU3Z%2FjzI6B6pj9zAOk2GKP0LD8fJNZfaX1zBCkj0iIJZsX%2F1OOQqEao363uHtMQVDtYy%2BgDRK3%2BqxAeFIucn9DYtsG0haxKZyTPwcckvIkBYtqeEqrHmlRWaq2B9Qi4w3PIDO2QjF6ywkQNRl%2BigHq5QGFOlvOtpK8%2FzFsi%2FF3vUt9HByRIHAdnr0rMAfQhoOMprDHQTew0RQIVt61wViVErHVtX6hI%2FaBW6000CU4dS4b9tDHMjLobDjXj%2FXyd%2FgTTFKSBj7bJWi264ruR4Zew9XFEkF%2BUJH64puA1gE59KeMgW36AECvzbifFGKSEDjaj7fLtfsSyNfaqzlG4SYCdcpOLskblXvrH3ZNQ87dgHxTF8Ay9wnI8U7R%2BZG98L3x36t0%2F0DJgT4n6iwZFeZSsVzunTS77fcRDzsMqpGsXgrICEobXNekf3d2Bl%2FdnhB9ZMQs6S0YMA2VdG436h3NfZMkQMUljn5PEh3zQrJpK0%2By0Uc%2BkxPqH2Rld7aZJMNCt9b0GOqUB%2FgD4J%2FJyh4ONQHp2ag9DzbjrGQN5hJzFmxEKg18Ce0r9faa2KzZs0VlHwGmaevE1J9xokN2OVfhT7OY1YaVG45Sz%2B5jnYvSx9tjRti4XL8A7XGou%2BdDSR7N2UKIi4%2FaWklByYnqguaz%2Fe1qG6nPjteYKaGruJzVsVGs5KcEwAatgejGnos1fdaHSWCzrKQi9MRHEaqQMgjHeoPQXq%2BIFmcSPLGzV&X-Amz-Signature=ec1a3a6e9dcd6185b594f9e48708db4f473f5f1eab0d27af5f4e0e4713cb5510&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
