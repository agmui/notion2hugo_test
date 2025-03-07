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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWHZYSC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC5g%2FDNIyZQ984xoguRcvejKHKyADxhNxK4Lqg6KvX1%2FgIgNwZgKoFD8eI9L%2BgmS9e2Uuel4Eo70oLf3EEsuHzhXioq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDF0AbP9hpxA0XfE1cyrcAy4Ar2ACq1ZjdOv9ytUpAbm4RjWOjqPI5XvORL0mNMOvA%2FVt4GvyJh6aF0q42T5jT2%2B0XiPgdTiiGmOmTbUKPZYVX%2FoEfR%2FX3s5gfRsjTLiEkDi%2BsYAjKwa8oRc3VjSpWwbPisZW9DMw0u%2FzkmqgMCljmaEjNqA6mVkBBm3%2FcnRWQP3r68KdOya%2BEjKQp5%2FKV%2B9WzYLMVLmDZ6NhU3oRomhjPHIUDNs8h8fU88j1MSCKer%2BJFszyl8%2FEzwdNKm7JvEd7DHnbP8ONWpyWSPZFRD4U%2Bc06JNo83P19Fu8D1NKFdVeXOmU85pfP5vz6B%2FUUB1bKYLaRREjyDbz4IqrRM1ckFvVUHYqHAopq94I37%2FTVIy1J5njz2R%2Fnf9YLYh6DGzAa4MJPea1YuBHmjkhnYcxfEDXUrK1yWjXtq6PRO9ce4cB2E8hDEaqzzmJoYjXMKNmGTX0fm2HARxFVwaxBiBIgpMUZWindQOI7iv8tW3LYR%2FyubHdLEzCxrbyMsi3BVKwKXZkGYi7x0IGicuBfSx4fpVDE2wwz%2FR9T14JTDEhPMlRB%2F5X%2B2aZ0t19UQxtOthLN2UNbMxkAomfcrGNMqEVSg0qM5YkWjefFE1iGnt0nTMhrIxg%2FLuNeNrAxMKrerb4GOqUBy2JNRsWtqHsNtvA6tVlJwiY32v5mQUjA6aaoLLE4xVOB1VZNAWO1Yvc7QIwklzSJMIs2P%2B6MHcKOaWsETIHK1bmKhuFSv7EJeJzCvE%2Bb3T9dWKBEuC8AJxMYD6G7FLmBN86cmRhfUe2%2Ffi8KlJfSfer1RJftKQ5UTUtGsHHhiM7E%2BfP%2Fh%2Fle7C7lCvfI7bnVXaKMAyTsN7fsSaY87pq12Ya4LrXI&X-Amz-Signature=57f55d2b4fab590c716f747dc609d9a3ceb0bab21c245f4b9bfe563f7f71c434&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWHZYSC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC5g%2FDNIyZQ984xoguRcvejKHKyADxhNxK4Lqg6KvX1%2FgIgNwZgKoFD8eI9L%2BgmS9e2Uuel4Eo70oLf3EEsuHzhXioq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDF0AbP9hpxA0XfE1cyrcAy4Ar2ACq1ZjdOv9ytUpAbm4RjWOjqPI5XvORL0mNMOvA%2FVt4GvyJh6aF0q42T5jT2%2B0XiPgdTiiGmOmTbUKPZYVX%2FoEfR%2FX3s5gfRsjTLiEkDi%2BsYAjKwa8oRc3VjSpWwbPisZW9DMw0u%2FzkmqgMCljmaEjNqA6mVkBBm3%2FcnRWQP3r68KdOya%2BEjKQp5%2FKV%2B9WzYLMVLmDZ6NhU3oRomhjPHIUDNs8h8fU88j1MSCKer%2BJFszyl8%2FEzwdNKm7JvEd7DHnbP8ONWpyWSPZFRD4U%2Bc06JNo83P19Fu8D1NKFdVeXOmU85pfP5vz6B%2FUUB1bKYLaRREjyDbz4IqrRM1ckFvVUHYqHAopq94I37%2FTVIy1J5njz2R%2Fnf9YLYh6DGzAa4MJPea1YuBHmjkhnYcxfEDXUrK1yWjXtq6PRO9ce4cB2E8hDEaqzzmJoYjXMKNmGTX0fm2HARxFVwaxBiBIgpMUZWindQOI7iv8tW3LYR%2FyubHdLEzCxrbyMsi3BVKwKXZkGYi7x0IGicuBfSx4fpVDE2wwz%2FR9T14JTDEhPMlRB%2F5X%2B2aZ0t19UQxtOthLN2UNbMxkAomfcrGNMqEVSg0qM5YkWjefFE1iGnt0nTMhrIxg%2FLuNeNrAxMKrerb4GOqUBy2JNRsWtqHsNtvA6tVlJwiY32v5mQUjA6aaoLLE4xVOB1VZNAWO1Yvc7QIwklzSJMIs2P%2B6MHcKOaWsETIHK1bmKhuFSv7EJeJzCvE%2Bb3T9dWKBEuC8AJxMYD6G7FLmBN86cmRhfUe2%2Ffi8KlJfSfer1RJftKQ5UTUtGsHHhiM7E%2BfP%2Fh%2Fle7C7lCvfI7bnVXaKMAyTsN7fsSaY87pq12Ya4LrXI&X-Amz-Signature=c111a8e41a197b35b328cf8d210a165e32d8fb0697bdbe6c2c246ebf802ef683&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
