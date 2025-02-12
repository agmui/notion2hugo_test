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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XSUWZU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQquQWLPkd8HocC6%2Ft%2BnGADVufb%2F8gHx0m5Jj7uGV37AiEAnr0ZyZqHwnhNEsPu%2Bhk1i6Esg9t83wYYKDbhJ%2BVbd5sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7dZ1zvHGMdr%2F5OACrcA%2B00b7aIExrOHHrii4%2Be6BsXgPr%2F9mMeoOcCoWiU%2FouS7WBJc3Gt8R7HQQAiI9XEr6Uxsd7AgPOaBddwlmgJUC9r%2F5M4fDEsqdBn5yYvwtH3gV4x1qTQm2XxEbYxrphBDy%2BohUGRKQoJL6kMYZT%2BysJN5P%2FqpC5KZhhBBplfcoiKskul2N6l2sHRVW3TqFVf7AfS6LO7Pgoa0%2BLfNahRv%2BggUrHwYbvqlS8kyAHQgvhSZB0okjYQvH%2FgQSRx%2BH8tFos%2FSQotBEL0oclC9aBdOiP0RnxaaF6QH8ltkNoqH4AvMgEliY9ejQ86ItaoAbpJYfFJ5sQ%2BTsB0p6EgHgT58Te11qZa%2F2ZJSaHYisuz4CyIDBy0cIMqmHq0OkQhHzeEYcjmtYZWgNMM4TV1MHFWc4zk0BOjz8%2BwaBRYA6EA%2B6MGMQvAohwlMo2Vr%2BjK9O6t5kU7at%2BgzjL%2F3oVDqnt8YA9TGs%2Bt26Doe5NQy%2B8HVruygwZUMjorlN0tFJ6PEiLv6Ch6j7ZALjzeJiAKUGkuxCW%2B91aC0LIbgh6Ngrx%2Fv55aupO4jMGAUHzIi0qnP0HWgvHlN3Itd5qN9k5CcHSa22yieawTAPx7H4kEJNe0o9SVA436XHZjrtkDDJ09MJLtr70GOqUBCyWfL1lbOfWa6WcZOc7r4v%2FADKNOd3nHZ3%2FobOnglQcIgjeNEAXu61gE8fvogfnhdiLKJYmNjJxAdqblqBZJCL3QZW6x0D4ZysGGjU%2FIofrZIF0CzhS93ZI3SLWFK64tahTPIDR4aKDwLkfiMKoGmyeU9%2BSbo41xwCK9gOiaCNZbn%2FYV0gZtaCVh8A39js9O12d68hpdXtKFQD2bSGdXrNuFnviL&X-Amz-Signature=f607a7fd2191045c015a628d3b7a24188a1c51301c7d060bde594c9dcd59d2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XSUWZU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQquQWLPkd8HocC6%2Ft%2BnGADVufb%2F8gHx0m5Jj7uGV37AiEAnr0ZyZqHwnhNEsPu%2Bhk1i6Esg9t83wYYKDbhJ%2BVbd5sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7dZ1zvHGMdr%2F5OACrcA%2B00b7aIExrOHHrii4%2Be6BsXgPr%2F9mMeoOcCoWiU%2FouS7WBJc3Gt8R7HQQAiI9XEr6Uxsd7AgPOaBddwlmgJUC9r%2F5M4fDEsqdBn5yYvwtH3gV4x1qTQm2XxEbYxrphBDy%2BohUGRKQoJL6kMYZT%2BysJN5P%2FqpC5KZhhBBplfcoiKskul2N6l2sHRVW3TqFVf7AfS6LO7Pgoa0%2BLfNahRv%2BggUrHwYbvqlS8kyAHQgvhSZB0okjYQvH%2FgQSRx%2BH8tFos%2FSQotBEL0oclC9aBdOiP0RnxaaF6QH8ltkNoqH4AvMgEliY9ejQ86ItaoAbpJYfFJ5sQ%2BTsB0p6EgHgT58Te11qZa%2F2ZJSaHYisuz4CyIDBy0cIMqmHq0OkQhHzeEYcjmtYZWgNMM4TV1MHFWc4zk0BOjz8%2BwaBRYA6EA%2B6MGMQvAohwlMo2Vr%2BjK9O6t5kU7at%2BgzjL%2F3oVDqnt8YA9TGs%2Bt26Doe5NQy%2B8HVruygwZUMjorlN0tFJ6PEiLv6Ch6j7ZALjzeJiAKUGkuxCW%2B91aC0LIbgh6Ngrx%2Fv55aupO4jMGAUHzIi0qnP0HWgvHlN3Itd5qN9k5CcHSa22yieawTAPx7H4kEJNe0o9SVA436XHZjrtkDDJ09MJLtr70GOqUBCyWfL1lbOfWa6WcZOc7r4v%2FADKNOd3nHZ3%2FobOnglQcIgjeNEAXu61gE8fvogfnhdiLKJYmNjJxAdqblqBZJCL3QZW6x0D4ZysGGjU%2FIofrZIF0CzhS93ZI3SLWFK64tahTPIDR4aKDwLkfiMKoGmyeU9%2BSbo41xwCK9gOiaCNZbn%2FYV0gZtaCVh8A39js9O12d68hpdXtKFQD2bSGdXrNuFnviL&X-Amz-Signature=3ec8d4f41be522c7367ebf6bb81b88786a1769188ae32ab484c779333deb931d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
