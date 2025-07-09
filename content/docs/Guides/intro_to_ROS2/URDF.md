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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4B4SQP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwXXsZIgri8zsz6r0mA%2BxDFbTdK9ZVUGgZC3eMvKACAIhAIcgornXd4AGODWkKhWDAjxEtB3%2BQ0usIudhumQEwfeqKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4nAJbc19qlFgcVJsq3APF6XmJ%2BMNz2%2BXO0LvYimC%2BiQtSA2mxBhNVXvYx2ImNW%2BT%2FKt6R5IjEhc0lE5xbCNk%2BLFKTpFFbyBRJeLj4BdgTrrXf39h70N7s8wDseGKfikvDDpM82Yw%2BghuV4H7zWEHRgcdpNRVWLmzhcEkn%2BZ1ee%2FeeLY6G0wTki4oHqFK4u4w3bcVXpUuKHoYem5LEKI4XBhDf4H%2FsQweQKEWmba2z4hPpfsUA5nTDG9LEPZimM20jaGOdKlRBaTCwTEm%2By5v7JKYRxl2vAhLGxI4itGJyuJJVO2MWvtuuYeCsmHKaPy%2FTwrl0WmCUqOHYkh3l3iETLFGPMzfw22emIQgyzJ6CCjipLphFlfJysQ7UzLPLJAgl7od5l4z%2B97VOsaQozk96LaYkuEr5fYfhkvuhltw4zuvUIzT%2BuXLxbJA9dAYc18XT8BPAvxAxSAGaeY4lhvcgMcgMfqSpLm3Ca6x1a9%2FICUpceO%2Fm6UyLNC6ggIahEh9l0ggNI%2B9Qni4zsJ8h4zHNfKUlSAzj%2BD7qZWzYFB8a7LJNzqY6tqhwdZMdY4DSnvk%2FL4xqDL8qALSkZEwjiUj36ol2eDeYz%2FHa4waYTGQlZTiQaf4q0ix4bEb9MLMdc8DxMpcR1aMehlMUNTD2irnDBjqkAQPa%2FrVwRJiL5h%2Bd2xWnkHg4c6cJoRN9PcFf7B2P7gj4tpEBkZ9jgXbwopJQ1XECOUNeciDX1OruZctKucKnUra6g0EI5XbU%2BEJ%2F71nXzrY8U6swmhMPTddLGAqvYFcr07bseiXAyEfBRwQjlN44StyEsrjs7ou1jD9%2FGg4bsAPqqXXxK%2Bva%2BzP3o0P1MwkwE7loMXEbvqPScPOYvjJKDvp7omfJ&X-Amz-Signature=e136c094fddc9b796cc554e973d6a74a26f4ed36422d73a39bba2c1532caf63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4B4SQP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwXXsZIgri8zsz6r0mA%2BxDFbTdK9ZVUGgZC3eMvKACAIhAIcgornXd4AGODWkKhWDAjxEtB3%2BQ0usIudhumQEwfeqKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4nAJbc19qlFgcVJsq3APF6XmJ%2BMNz2%2BXO0LvYimC%2BiQtSA2mxBhNVXvYx2ImNW%2BT%2FKt6R5IjEhc0lE5xbCNk%2BLFKTpFFbyBRJeLj4BdgTrrXf39h70N7s8wDseGKfikvDDpM82Yw%2BghuV4H7zWEHRgcdpNRVWLmzhcEkn%2BZ1ee%2FeeLY6G0wTki4oHqFK4u4w3bcVXpUuKHoYem5LEKI4XBhDf4H%2FsQweQKEWmba2z4hPpfsUA5nTDG9LEPZimM20jaGOdKlRBaTCwTEm%2By5v7JKYRxl2vAhLGxI4itGJyuJJVO2MWvtuuYeCsmHKaPy%2FTwrl0WmCUqOHYkh3l3iETLFGPMzfw22emIQgyzJ6CCjipLphFlfJysQ7UzLPLJAgl7od5l4z%2B97VOsaQozk96LaYkuEr5fYfhkvuhltw4zuvUIzT%2BuXLxbJA9dAYc18XT8BPAvxAxSAGaeY4lhvcgMcgMfqSpLm3Ca6x1a9%2FICUpceO%2Fm6UyLNC6ggIahEh9l0ggNI%2B9Qni4zsJ8h4zHNfKUlSAzj%2BD7qZWzYFB8a7LJNzqY6tqhwdZMdY4DSnvk%2FL4xqDL8qALSkZEwjiUj36ol2eDeYz%2FHa4waYTGQlZTiQaf4q0ix4bEb9MLMdc8DxMpcR1aMehlMUNTD2irnDBjqkAQPa%2FrVwRJiL5h%2Bd2xWnkHg4c6cJoRN9PcFf7B2P7gj4tpEBkZ9jgXbwopJQ1XECOUNeciDX1OruZctKucKnUra6g0EI5XbU%2BEJ%2F71nXzrY8U6swmhMPTddLGAqvYFcr07bseiXAyEfBRwQjlN44StyEsrjs7ou1jD9%2FGg4bsAPqqXXxK%2Bva%2BzP3o0P1MwkwE7loMXEbvqPScPOYvjJKDvp7omfJ&X-Amz-Signature=0384f071f0ef72f6fa095e81e1d277ac0b30acbbe41cf97bf530978fba0602c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
