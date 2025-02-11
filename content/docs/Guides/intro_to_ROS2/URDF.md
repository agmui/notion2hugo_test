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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522EIDYO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfLxPpNOAE%2Ffd0Kh7fL9dGd3XAqp4CApEOq0lEhlDN9AiEA0kXf94jFrOuS4qTykzqYSLN%2F9tJAM8Qo1gz%2Fz8X9KjUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWg6qVZPac4jZmJVircA%2B32tITV2z6fm542%2BtZ99lOEi9f5QslpfY5HMwZGM%2FRdav0Ae92zncCWJI%2BL9zROYrf%2FJZ3Tmnrhm5PRgCW49g4BWqFL9yeoTZp4P%2FVDfy8Ds1NrwL13i3yFI1xlL7rBR%2FSZR7uH9krXzH2vHXW9gVDgwwQdWeVXQ7rjRps38jb7dwlDKqLWp5ks6YMMHYX4X9lxJjDBAJiJD04jdYAXzrZDg7%2FGM4a7Or0%2FdWgyC0u8uycR0%2F%2BGd6g%2F3JscEDp51kTcMS%2Fkusccol6hL3KVBWUKERluQiUlXBXGZh5XkF9WBhaJDuZqNVtcsg9PxL81A3eTjJEc9Zf8oBoNs6d33KEgPQ5isUxIa9bzURJ%2By2bpqQiZTpE9QLdwdr%2BAloUzaCveG4hPjMmWwIOOymnj%2F7bARXj6g1m2cQDX5CHUKWvJtNdveGQcRQyXMuo3MC81oxNcc%2BCjSCKFNyWke0NQequUWooBIzZtMi%2BiEu7KRdDJXxLR6Rm%2FfK6HR4Ra0cqbVOTroQwEEtpNZBnojazHl5ziOfblRFYCW0Tm2BB4%2BTVlfM1CZTnUQhmQCAkiJLGzOZ9yMSwOyWDm6c7JUcGPTvUMBTgZRsGr%2BbxrQQtE%2Btf4zXdaf2bh%2BgtqnuaDMOvIrr0GOqUBjpH8CEZajnlMWjyy9nfKS0fvbPBPwKtEm%2B8Jwghhe2nfRlMJ6pR225KsRZFMOqwiyiMACAyszDGCE2IUDnFaENqa95CoDa%2BVOajAxgwDI0M94hChJZGpsN%2F43cHFUVr95YZT867n8ugbN%2Bji6XtFCKd02DvAH2CTwoFd1E0L%2FuKoeeEQ%2BsxIDTbqbiIke75tlx59CeYORJ8YTal7DdEWfl6l9Kiu&X-Amz-Signature=9b733c663fc109a231e33fae122ab8ff64f052d2a0e77c6e96626e84fe824460&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522EIDYO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfLxPpNOAE%2Ffd0Kh7fL9dGd3XAqp4CApEOq0lEhlDN9AiEA0kXf94jFrOuS4qTykzqYSLN%2F9tJAM8Qo1gz%2Fz8X9KjUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWg6qVZPac4jZmJVircA%2B32tITV2z6fm542%2BtZ99lOEi9f5QslpfY5HMwZGM%2FRdav0Ae92zncCWJI%2BL9zROYrf%2FJZ3Tmnrhm5PRgCW49g4BWqFL9yeoTZp4P%2FVDfy8Ds1NrwL13i3yFI1xlL7rBR%2FSZR7uH9krXzH2vHXW9gVDgwwQdWeVXQ7rjRps38jb7dwlDKqLWp5ks6YMMHYX4X9lxJjDBAJiJD04jdYAXzrZDg7%2FGM4a7Or0%2FdWgyC0u8uycR0%2F%2BGd6g%2F3JscEDp51kTcMS%2Fkusccol6hL3KVBWUKERluQiUlXBXGZh5XkF9WBhaJDuZqNVtcsg9PxL81A3eTjJEc9Zf8oBoNs6d33KEgPQ5isUxIa9bzURJ%2By2bpqQiZTpE9QLdwdr%2BAloUzaCveG4hPjMmWwIOOymnj%2F7bARXj6g1m2cQDX5CHUKWvJtNdveGQcRQyXMuo3MC81oxNcc%2BCjSCKFNyWke0NQequUWooBIzZtMi%2BiEu7KRdDJXxLR6Rm%2FfK6HR4Ra0cqbVOTroQwEEtpNZBnojazHl5ziOfblRFYCW0Tm2BB4%2BTVlfM1CZTnUQhmQCAkiJLGzOZ9yMSwOyWDm6c7JUcGPTvUMBTgZRsGr%2BbxrQQtE%2Btf4zXdaf2bh%2BgtqnuaDMOvIrr0GOqUBjpH8CEZajnlMWjyy9nfKS0fvbPBPwKtEm%2B8Jwghhe2nfRlMJ6pR225KsRZFMOqwiyiMACAyszDGCE2IUDnFaENqa95CoDa%2BVOajAxgwDI0M94hChJZGpsN%2F43cHFUVr95YZT867n8ugbN%2Bji6XtFCKd02DvAH2CTwoFd1E0L%2FuKoeeEQ%2BsxIDTbqbiIke75tlx59CeYORJ8YTal7DdEWfl6l9Kiu&X-Amz-Signature=09c585bea753d90563c75907c911dba2392030fd5f3b72217090a44bdb0e2cca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
