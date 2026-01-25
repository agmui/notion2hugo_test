---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZEMGWB%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDOvLtdQL00yG0sRzo%2BqGZ9gv6AtH7zN9qhozzkB35mOwIhAO69YbS%2BWo4GKdFF4Wc0N1yBeaHGdcF07fhE4hNUA0WKKv8DCBsQABoMNjM3NDIzMTgzODA1Igz9nnV4zAX2CdhKUWAq3AM0YnNZP3PQSijaSIJ8s0jaugTkCd9YWAX6tgyBwMbXNmveP5Q5j%2BCB7EA%2BFMENk4cRefVYzDUoPL2EqJNJxihlEOHKIx6vQovhcf1TFgb9BsTiK2n2eilmMjsmnnbcMJVxlQDEWRSXD5mifWPsPn8A0kW%2B%2FiNTBm0mPl4%2FswZ20WtVY2hwpFwz1Eym1ZvTp2QsmyOZwWF%2FXmnbbpSoeDChlKByNFFAPK6KodcU0rElBzSTV0XjQhRqGFOv%2Fh9l4TEZ2maU5A3dTTSzSDQODryVU1fbRUMQpns41%2FmBLUfNxu2hJqTc0j3JibxPWDUP5OmB6JrDwMEigaOJR%2B95awp9Sdq4w0foKo9yPb9GqcQggcjsmrrcTKf5oRDexcL5IVNLwDBmfKB1M8kzHEVIqp1WLBWkFkliTdM9gwf9ZlQ%2BSK%2FK%2BE%2BKmmd4FWVGbDEBu5odIQJmNI84NOxUC%2Bx6n0atn1rdcZlAEiocWUoBPGmgkVWTn63szk6TarUdyg0CiFf6IrvYMz8ssio58D%2Fc2elbbG6VaUjV9g2wCmZ45IV4RLfgDq397TWuKzZ1NPPGHmq%2B7Nb6gPHTyp5tXwJmMmIz0oJSZmG1TapBQprLKZHs9COyILzF%2Be84Zq4kQjDn7tXLBjqkAdlqgcQxkBjU8L5Hjl6aybmzGfWXMrzSGyMiDgIFgiQ5EJsz%2Bqp1D2OaqTs9LAY7UQUD3kgMCn8L2lL92lHlvRi%2FFoM6aCa4vqlNOcHaEY2iGK4rtVWNZb43BFJI4R36g5wRDGLlCA1XFd0fqI3vr18Jjhkyofp2FZFpsRMnebTdpBoXqdIk%2BJZQpKeD99MHnkcnWCdRKA2DVVwVHxEl2lNwomWg&X-Amz-Signature=8b5771b48d2a0eaea48e6a9a21a97797303149eb40ab4dc529d9088feba65c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZEMGWB%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDOvLtdQL00yG0sRzo%2BqGZ9gv6AtH7zN9qhozzkB35mOwIhAO69YbS%2BWo4GKdFF4Wc0N1yBeaHGdcF07fhE4hNUA0WKKv8DCBsQABoMNjM3NDIzMTgzODA1Igz9nnV4zAX2CdhKUWAq3AM0YnNZP3PQSijaSIJ8s0jaugTkCd9YWAX6tgyBwMbXNmveP5Q5j%2BCB7EA%2BFMENk4cRefVYzDUoPL2EqJNJxihlEOHKIx6vQovhcf1TFgb9BsTiK2n2eilmMjsmnnbcMJVxlQDEWRSXD5mifWPsPn8A0kW%2B%2FiNTBm0mPl4%2FswZ20WtVY2hwpFwz1Eym1ZvTp2QsmyOZwWF%2FXmnbbpSoeDChlKByNFFAPK6KodcU0rElBzSTV0XjQhRqGFOv%2Fh9l4TEZ2maU5A3dTTSzSDQODryVU1fbRUMQpns41%2FmBLUfNxu2hJqTc0j3JibxPWDUP5OmB6JrDwMEigaOJR%2B95awp9Sdq4w0foKo9yPb9GqcQggcjsmrrcTKf5oRDexcL5IVNLwDBmfKB1M8kzHEVIqp1WLBWkFkliTdM9gwf9ZlQ%2BSK%2FK%2BE%2BKmmd4FWVGbDEBu5odIQJmNI84NOxUC%2Bx6n0atn1rdcZlAEiocWUoBPGmgkVWTn63szk6TarUdyg0CiFf6IrvYMz8ssio58D%2Fc2elbbG6VaUjV9g2wCmZ45IV4RLfgDq397TWuKzZ1NPPGHmq%2B7Nb6gPHTyp5tXwJmMmIz0oJSZmG1TapBQprLKZHs9COyILzF%2Be84Zq4kQjDn7tXLBjqkAdlqgcQxkBjU8L5Hjl6aybmzGfWXMrzSGyMiDgIFgiQ5EJsz%2Bqp1D2OaqTs9LAY7UQUD3kgMCn8L2lL92lHlvRi%2FFoM6aCa4vqlNOcHaEY2iGK4rtVWNZb43BFJI4R36g5wRDGLlCA1XFd0fqI3vr18Jjhkyofp2FZFpsRMnebTdpBoXqdIk%2BJZQpKeD99MHnkcnWCdRKA2DVVwVHxEl2lNwomWg&X-Amz-Signature=d3d06b3750d938cced87e8abfedf0674b8878391c346d8c3c106bf70334af51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
