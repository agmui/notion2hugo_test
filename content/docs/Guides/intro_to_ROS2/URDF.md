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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QNOK75%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD9r8zLwQ9ODuFNX7Qv7x%2B5xTT2xYY6BUvSYxb9wk3MWwIgErYwdVhTirqrvGq3Kg%2FvhALwtbUuzkCzi3ggejJIq1kqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpSwfx2tGpMs9jRCrcAwgHmU7I3lEhQ%2BSVMIT49sn%2Bu7nAfvOdLDdp7aCLgonu0Rz6QIQFoAEgvILb%2FsUEmePgL2dxcWZGurjlXE1X%2BTNMwBJMawuiajvlkmBKygi182v99xeo0iU1kFCx0T8LcYnXuKKTuogNqYOoKOfHyzWViIlTx%2B8ApkZhBwJHh5RZII7nBRVTi4EbVe5dpYBv1fAthiw6TqTqrPUHTTlLOsKtkkFEM5AkeUEAUwOIpijNFX6aKS28%2Fz%2BAtICrMCEfyODSboaFK9PNdyZCsLjF2T9P5Y2V3JYm7F3d5cf8u%2F101U6jOr7Zm3qSf%2FlYWf4SoUx82FY6ciETyboHRhq%2F4txUaeUXJKa9gNOr6YSw%2FYTr2dwoy%2BY7I%2BH6UosxWh34s5gYa5kliNrXjI%2FnhFXNRJEYGJ%2Bu08zDSTiuJUWZte9j3VrbDvYF%2B0xwp2fiIBclowJ9XqgdhhQAUGv%2BTI4tW6k%2BBcaQswDOq%2BQ11IUh%2FiA2B%2FPvmSdng%2FJFkSdALcpfEQxI8k1MwcZrNrREx6GC0Z9AfMy0LaomnANL%2BDwTQHG3MO5L0Y6hHgJ7hB4z4s8SBjafDIA0%2BwPUvah3gBHrW%2BokJt4uzmMiQokcEO%2BjIFz7yy3WWcNWNmkwSZ5DMLr3icEGOqUB9uL4Zo6ayVpRipXUh8P6DxRs20QmocJeuyxjWe0Rw96z9topMKApF2SNof65t8hIHbgbkKrtd6SgId9tAO05DkhkQBT9M6DMmBqHqKFdw%2Bcr%2FZvlys7H5JmIMfZkLGjIdhkhxDSQOr9WXdwsqM8XpudS6D8rdCTwmFm8vtRjZdU2FZcS%2Bh3Mp1mDRlnIMXFG3R5P9MZxGVmM8MmTjftg%2BeIpeSB0&X-Amz-Signature=34dc9fbd4a41df4ea8d343328c1b73e4847f20d0b33dc16ea1a964bd810e55c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QNOK75%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD9r8zLwQ9ODuFNX7Qv7x%2B5xTT2xYY6BUvSYxb9wk3MWwIgErYwdVhTirqrvGq3Kg%2FvhALwtbUuzkCzi3ggejJIq1kqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpSwfx2tGpMs9jRCrcAwgHmU7I3lEhQ%2BSVMIT49sn%2Bu7nAfvOdLDdp7aCLgonu0Rz6QIQFoAEgvILb%2FsUEmePgL2dxcWZGurjlXE1X%2BTNMwBJMawuiajvlkmBKygi182v99xeo0iU1kFCx0T8LcYnXuKKTuogNqYOoKOfHyzWViIlTx%2B8ApkZhBwJHh5RZII7nBRVTi4EbVe5dpYBv1fAthiw6TqTqrPUHTTlLOsKtkkFEM5AkeUEAUwOIpijNFX6aKS28%2Fz%2BAtICrMCEfyODSboaFK9PNdyZCsLjF2T9P5Y2V3JYm7F3d5cf8u%2F101U6jOr7Zm3qSf%2FlYWf4SoUx82FY6ciETyboHRhq%2F4txUaeUXJKa9gNOr6YSw%2FYTr2dwoy%2BY7I%2BH6UosxWh34s5gYa5kliNrXjI%2FnhFXNRJEYGJ%2Bu08zDSTiuJUWZte9j3VrbDvYF%2B0xwp2fiIBclowJ9XqgdhhQAUGv%2BTI4tW6k%2BBcaQswDOq%2BQ11IUh%2FiA2B%2FPvmSdng%2FJFkSdALcpfEQxI8k1MwcZrNrREx6GC0Z9AfMy0LaomnANL%2BDwTQHG3MO5L0Y6hHgJ7hB4z4s8SBjafDIA0%2BwPUvah3gBHrW%2BokJt4uzmMiQokcEO%2BjIFz7yy3WWcNWNmkwSZ5DMLr3icEGOqUB9uL4Zo6ayVpRipXUh8P6DxRs20QmocJeuyxjWe0Rw96z9topMKApF2SNof65t8hIHbgbkKrtd6SgId9tAO05DkhkQBT9M6DMmBqHqKFdw%2Bcr%2FZvlys7H5JmIMfZkLGjIdhkhxDSQOr9WXdwsqM8XpudS6D8rdCTwmFm8vtRjZdU2FZcS%2Bh3Mp1mDRlnIMXFG3R5P9MZxGVmM8MmTjftg%2BeIpeSB0&X-Amz-Signature=3f441d037e9636de3a8e6cf6c33e8ea16695ef5f2b3d6ccebb931adb436dd4db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
