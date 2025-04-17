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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HLY73S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjfG1UhZFPLsPHKpEM6TRZt0Gvu%2BIXVPC7Mk3bEHAxIAiEA5%2F4A9i5r7OZxhkzaTi8fVDJquULTXvskMg%2BKdLiNOXAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNBjYa8OvqSjZyu5CSrcA9uJ8JoEevZbQzu2We2nG4yLgtseuTcDxCgnq2m2EFEPs7oebgJOtI8d722lQzkytcBE07uoIRAiP0C9VehfLy3HEbf%2Br0FGsI8SBYWxMYAc3HE%2BCB7A%2FlIRul7RgI%2BzrPbGf8utZxARJv3VAO%2FkmH1cS2V0aK0Y1fFrJ9x3hddyGdop8yDASlNqHhFJ7KiZ3RKgVVY%2F5%2B1rDd2nAWG5LQMj7y1ici4QPE2qpVSnybhweoYxsMyhD2KeTRV%2FpXo8sVoxgh%2FWwHxC4HIM4Msc0xNxg%2FHCjrr4PgbgJD2JT06wlCrX2w0AJOcYftv4N3Ct4G211HqW%2FY%2FpCdxXczpSGV64RBV8hEFYXefsMMEKacQ80LiEEV2A6T6g%2Bqr71qCALb%2FYLZWdD75nnat9sFTkmnmsuEYyvZeQ9%2FEgElGccCeNZGOIN8c8Rg2XchTj2t22mx52hbtiSTyBUtDHWV%2FD%2FcWn%2B2IARWAueWZlF5UMx%2BIUxlf7T2etm2oOyRdYGbfSVNZ424k34mKGG4E3%2FJwzPSaGqumT3hJJzzlaqHkNQmn6tviGD63v0eQtSrd7VXiHkx98VMn%2FG%2BdbJ2AbaBKLgmfSP74%2Bg5RDm3AaJgK0nZZzNOfP08SEd%2Bin85uoMJnHgcAGOqUBdb2nOqFTry46Xj5uhkR0sfrTxpLN7olYY8rmdV%2BSu9nnftu6qpopIRX%2BA1%2BqedxRQCeLBL9mvvtht48X6Rr4suGg0bqAxpItpEoJslzvz3GPHpH2pATMWAa0Rq8%2Fy3KVpmqH0nEzbDcAxDbXsDmwcns7cwhdUynDgu45NX5ZSS8HYa5QIB229rQ%2FpJXODAUODJw2yVxSAAGC17SjHmeR%2FKUtfRHK&X-Amz-Signature=9562b07cb27f4e95fc1d0c38bb6e31fe479edf962ece7e6a6cbe87140b7d81a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HLY73S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjfG1UhZFPLsPHKpEM6TRZt0Gvu%2BIXVPC7Mk3bEHAxIAiEA5%2F4A9i5r7OZxhkzaTi8fVDJquULTXvskMg%2BKdLiNOXAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNBjYa8OvqSjZyu5CSrcA9uJ8JoEevZbQzu2We2nG4yLgtseuTcDxCgnq2m2EFEPs7oebgJOtI8d722lQzkytcBE07uoIRAiP0C9VehfLy3HEbf%2Br0FGsI8SBYWxMYAc3HE%2BCB7A%2FlIRul7RgI%2BzrPbGf8utZxARJv3VAO%2FkmH1cS2V0aK0Y1fFrJ9x3hddyGdop8yDASlNqHhFJ7KiZ3RKgVVY%2F5%2B1rDd2nAWG5LQMj7y1ici4QPE2qpVSnybhweoYxsMyhD2KeTRV%2FpXo8sVoxgh%2FWwHxC4HIM4Msc0xNxg%2FHCjrr4PgbgJD2JT06wlCrX2w0AJOcYftv4N3Ct4G211HqW%2FY%2FpCdxXczpSGV64RBV8hEFYXefsMMEKacQ80LiEEV2A6T6g%2Bqr71qCALb%2FYLZWdD75nnat9sFTkmnmsuEYyvZeQ9%2FEgElGccCeNZGOIN8c8Rg2XchTj2t22mx52hbtiSTyBUtDHWV%2FD%2FcWn%2B2IARWAueWZlF5UMx%2BIUxlf7T2etm2oOyRdYGbfSVNZ424k34mKGG4E3%2FJwzPSaGqumT3hJJzzlaqHkNQmn6tviGD63v0eQtSrd7VXiHkx98VMn%2FG%2BdbJ2AbaBKLgmfSP74%2Bg5RDm3AaJgK0nZZzNOfP08SEd%2Bin85uoMJnHgcAGOqUBdb2nOqFTry46Xj5uhkR0sfrTxpLN7olYY8rmdV%2BSu9nnftu6qpopIRX%2BA1%2BqedxRQCeLBL9mvvtht48X6Rr4suGg0bqAxpItpEoJslzvz3GPHpH2pATMWAa0Rq8%2Fy3KVpmqH0nEzbDcAxDbXsDmwcns7cwhdUynDgu45NX5ZSS8HYa5QIB229rQ%2FpJXODAUODJw2yVxSAAGC17SjHmeR%2FKUtfRHK&X-Amz-Signature=59c6d16f9799fc16719852c4fb78a8d42ee7bf71f96c52d519619485a34140e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
