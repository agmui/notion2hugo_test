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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6J6NVGR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDjjlGwoh%2BTZPncDC%2BqpmZ9i8tlbkzWPldmp9AGIId0QwIgKqXtYzJDLyZ0uC6o5qJLvWPqXtnltrliKbbAKTfYsu0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3iLqeEdie8M%2BmEwyrcA8G%2FNVg7Ve3Fv9hXMIR%2F638JVnB1npANy68sHBpASSCZElP6uKrFoXO16q%2FCByWG%2BNG%2FbB50jQ4wV6sYx2WFW%2F9T03%2BSGkbi4poPhCxGV6%2BHLeY9MvrUZ6KsKIMOxNDzH%2FXDVjTpxYCEN8XgrLztjrjrY0raIty4%2Bkxkk95xMkiIjFhciPWa%2B7qTJ%2FTYvvfATyas13HRodrLaB6A67WTBFwPOMT9brtLWQXSa7md9a32%2Fq9ccLraGWLY5PB8P%2BU6OQF8TSzwNMHza7OkBu%2BzGfoNvHbKF%2F%2F%2BlnCeqCNLmZu%2FKV4iC0UoRhDn20c9N%2B3uXq1ZgQZe0rztd62HuakLoFWxP7JWLsW0RiyziREVqlkWHyh8YNpCvVhX6pgUzgklsT93QYmiPIbujTb%2Fotr%2FhOCBGwO2omI8NpYAHNIL2N6RNNVvfG%2Bi%2FWByROfuDc7wSYqmLEyYvy8KvO%2FekklQ%2FpaaAEIihFlVXB56MHNWj0M3QluBffjcymSugI7gWDb1EsrJGveDffCxov4IPwOhJPmX05CT72RUrM7Yhl0Mqgo2N9VRcBnIuTqwjDYV3Q%2BI5B7y1aJdiq5V%2B7o8F5%2BUSulCcmj4RSihvi8C1nez2QA4K15rQspbhiEwI0ITMIb73sIGOqUBcErV5QKlFXX0YG%2B3jmMVd4q6VBxlvOyT16ou%2Ft18Va0EF2SkNAVd2fxC4FXUkWfX0n97MuwhlbM1BlSM4PwVg7Htt4cio3fkUKg%2BYQqcgDNMdvTp%2BH931r9b7NyJjGalErhFvjWwJyu4Dsn9oNIi0SAO9obSuVZYrnZiotIzUY7Ao%2BqhnqwKHmW7Wi9Geu6MqBqx3y%2FyfwARUaU2BkR8SF0sYCyD&X-Amz-Signature=200628596abbcf0ad6eb0ab9e31ac0c25aba1a81aaf5b121ed2aee35591cb3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6J6NVGR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDjjlGwoh%2BTZPncDC%2BqpmZ9i8tlbkzWPldmp9AGIId0QwIgKqXtYzJDLyZ0uC6o5qJLvWPqXtnltrliKbbAKTfYsu0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3iLqeEdie8M%2BmEwyrcA8G%2FNVg7Ve3Fv9hXMIR%2F638JVnB1npANy68sHBpASSCZElP6uKrFoXO16q%2FCByWG%2BNG%2FbB50jQ4wV6sYx2WFW%2F9T03%2BSGkbi4poPhCxGV6%2BHLeY9MvrUZ6KsKIMOxNDzH%2FXDVjTpxYCEN8XgrLztjrjrY0raIty4%2Bkxkk95xMkiIjFhciPWa%2B7qTJ%2FTYvvfATyas13HRodrLaB6A67WTBFwPOMT9brtLWQXSa7md9a32%2Fq9ccLraGWLY5PB8P%2BU6OQF8TSzwNMHza7OkBu%2BzGfoNvHbKF%2F%2F%2BlnCeqCNLmZu%2FKV4iC0UoRhDn20c9N%2B3uXq1ZgQZe0rztd62HuakLoFWxP7JWLsW0RiyziREVqlkWHyh8YNpCvVhX6pgUzgklsT93QYmiPIbujTb%2Fotr%2FhOCBGwO2omI8NpYAHNIL2N6RNNVvfG%2Bi%2FWByROfuDc7wSYqmLEyYvy8KvO%2FekklQ%2FpaaAEIihFlVXB56MHNWj0M3QluBffjcymSugI7gWDb1EsrJGveDffCxov4IPwOhJPmX05CT72RUrM7Yhl0Mqgo2N9VRcBnIuTqwjDYV3Q%2BI5B7y1aJdiq5V%2B7o8F5%2BUSulCcmj4RSihvi8C1nez2QA4K15rQspbhiEwI0ITMIb73sIGOqUBcErV5QKlFXX0YG%2B3jmMVd4q6VBxlvOyT16ou%2Ft18Va0EF2SkNAVd2fxC4FXUkWfX0n97MuwhlbM1BlSM4PwVg7Htt4cio3fkUKg%2BYQqcgDNMdvTp%2BH931r9b7NyJjGalErhFvjWwJyu4Dsn9oNIi0SAO9obSuVZYrnZiotIzUY7Ao%2BqhnqwKHmW7Wi9Geu6MqBqx3y%2FyfwARUaU2BkR8SF0sYCyD&X-Amz-Signature=734315ff315056fd02c0b04a0e11b119740db6c09654819004c14b1187cb3c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
