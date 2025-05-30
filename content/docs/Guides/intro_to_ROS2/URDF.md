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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ2ZHYE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0BxPRBlLTjWlxFD0%2BuGNkbsfpiAz8B5V0A4Q0LNCKkQIhAOzBa5nk8kUDNT%2BOI2Pyo1PfZ1CKEqAdGHKqK5ETFWk4KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2B8ZmVjBzvhAffNEq3APq9whGRTnJ5qknPIaw00QcuyCJQh2v3e0Sdw%2FY9cZxBropk2LbQyn%2BdkcX5RKFeyeBBF4613%2BXx97t6oELamK2UEbK1mDs3w1otEnlB1IzC38LGhM8rrajv6nkVP1WpZ7Nin1PsHi%2F9WL4kNEDkXrfgt4K5YYiKY5e7sKpHyMiN6DuY%2B1DJ6cWUCWq24iKNK%2B8bKI2lMK9gcVsDEVWlOYSDsdQu%2BBNRo70fJ%2F0gBPp9suLMys%2B7QpqlRRgyjZdKjGNhUFC3rkPuTpFw3J3ZiEbirQybJXTbsJutnIIG7XYwU6mUtIh355QCMpfwrYdOP4YkWDItWgCi%2Bqki9xLEoaSJzygNOjwjes2yaPU1nQBD6LRbBmt9vWkBjlXOgc4%2BmLP1Vr1iMfPaZxTQdT38SUT95QQPntzEapG03GIKQrahy2Mgu0xIwnOTmlZMN8Fz3EDNbkWntilwsyAip8vA7GfIS2n3cwD%2FSqf8MC5KF%2FccVNl3aEKUj1Z2limD4Jxp1BH61rQyZweL4sjbBXMmkyfzC6%2FIJCEgfYvVMvaSRgu86IwXmjjMl0erNmHmiDS%2FQuHD%2B6Rw%2Bzn4BNbGKQrl90LPWMZBRqzP30OKxHq5iWu8zphn0xie1VRX4yvwjCh%2FefBBjqkAXC5YIuqexd61UFGRalAQdTRGDhH3ApqRWpS5CyQiD8pTXN6QgRsoti%2FSWDArJkvJ2mfqDxTJwneSijqItGwJfZHfaI88pMSUYTovEATJBamWtF9NVJTD6oIXhEOheRhziPVQiQJXOENJwikcUrGpsqACKELp82KnNsdXIuC0CQCUAW5xUEEBP1RgO%2Fs%2BBqEKP8wVJAvp8YszGQtwcNn8LkIgaI0&X-Amz-Signature=557a96127b629ec39b0e7b23a476b6d632dee978089a39038272ae83eba76c08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ2ZHYE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0BxPRBlLTjWlxFD0%2BuGNkbsfpiAz8B5V0A4Q0LNCKkQIhAOzBa5nk8kUDNT%2BOI2Pyo1PfZ1CKEqAdGHKqK5ETFWk4KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2B8ZmVjBzvhAffNEq3APq9whGRTnJ5qknPIaw00QcuyCJQh2v3e0Sdw%2FY9cZxBropk2LbQyn%2BdkcX5RKFeyeBBF4613%2BXx97t6oELamK2UEbK1mDs3w1otEnlB1IzC38LGhM8rrajv6nkVP1WpZ7Nin1PsHi%2F9WL4kNEDkXrfgt4K5YYiKY5e7sKpHyMiN6DuY%2B1DJ6cWUCWq24iKNK%2B8bKI2lMK9gcVsDEVWlOYSDsdQu%2BBNRo70fJ%2F0gBPp9suLMys%2B7QpqlRRgyjZdKjGNhUFC3rkPuTpFw3J3ZiEbirQybJXTbsJutnIIG7XYwU6mUtIh355QCMpfwrYdOP4YkWDItWgCi%2Bqki9xLEoaSJzygNOjwjes2yaPU1nQBD6LRbBmt9vWkBjlXOgc4%2BmLP1Vr1iMfPaZxTQdT38SUT95QQPntzEapG03GIKQrahy2Mgu0xIwnOTmlZMN8Fz3EDNbkWntilwsyAip8vA7GfIS2n3cwD%2FSqf8MC5KF%2FccVNl3aEKUj1Z2limD4Jxp1BH61rQyZweL4sjbBXMmkyfzC6%2FIJCEgfYvVMvaSRgu86IwXmjjMl0erNmHmiDS%2FQuHD%2B6Rw%2Bzn4BNbGKQrl90LPWMZBRqzP30OKxHq5iWu8zphn0xie1VRX4yvwjCh%2FefBBjqkAXC5YIuqexd61UFGRalAQdTRGDhH3ApqRWpS5CyQiD8pTXN6QgRsoti%2FSWDArJkvJ2mfqDxTJwneSijqItGwJfZHfaI88pMSUYTovEATJBamWtF9NVJTD6oIXhEOheRhziPVQiQJXOENJwikcUrGpsqACKELp82KnNsdXIuC0CQCUAW5xUEEBP1RgO%2Fs%2BBqEKP8wVJAvp8YszGQtwcNn8LkIgaI0&X-Amz-Signature=2de3ee04efa209397a5b04a2b0b79d1904564242993f069d201b8bb800531652&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
