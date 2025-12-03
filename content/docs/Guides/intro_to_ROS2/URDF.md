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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAXLRZW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTz%2FMtRfzJN3RBvJFQBlDmyt4CjPpJtAaRd4FI%2FhyU%2BgIgXx1kddTrwG5yjiHHtd0fjpm%2FOVR%2F%2FsXLgZjqbJKkk4oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAXKQKvbqTmlAxagoCrcA10IGQLegWENQrIniY7ku6qB150TZ%2BGxZ7SxRge%2Bt7IAcgNrP2Y6QAfe%2BpYegDBZA8UTNdjUgJuXqMfHx9GzcNQZUMwkUvvAJlRGFu9ewRe7N%2FovAdmt3Z6t79hL8soHfiDY0DyDxbKm4%2Fi3vUGx5w5sQgbbwsMbqgVP7d32urXImS%2FByJliSbUmNSXR1XfC0%2BqR%2FQEMBBfa4HPC%2Bdv5g05BYj0dDHOuUcMgpopN3%2FYkqIQflWtXhk2t30BZWaRFAl%2BXRHrW6%2BsN7ONGtKY0D3hjeJChUgsGHkpVIPxHCzcVh2ELVs%2Fo8NnuiXD2zWUtgeRqEGVrcYiHy4gmkmBvi9%2Bv02FvUJkFiIpHnXxaqXhWjq%2FC8vCF243PuoTB%2BVvbliIAJVojSZYVZ0c9flkIxbvLziRRncF0HwffPudwPq8AcPItw%2Fj6otjZISaqdGphrnm%2BN5j%2B6h5vNn1ZBLRFolKdtCBEjZCyaBzM8yIFlhVftd0B9xdk94%2BBvq0CNknLqgDCiZ%2FhhQo%2BeLmMinc7TYi15Su150zORld1DT4%2FLB%2Bf%2BSqkPQDakGasBbrivqYp95P3lmV7Bmvu%2Bzgyw2ASQVs0DWwrkXek%2Fmx7aZ%2BJx1ezlHGMp2%2BMvWcp7WcNMMKWvskGOqUBO2TBTxvuQ4svPkrfe8iMCtPNeZl9wmWQwHb4HrtVYpQ%2BiT9396uN3e6BbaC6eiVxklwEso3waMKWvzS6rAZYX2iwzeJhTtDO2yxftVWxKZjbP5J4scyltivYNEfDAGjw4H4uVx%2FGUrUkrYgWDQvdRhp1SUJfkt3pvwA%2FipReEj%2B4K79DhW7u6JGxZ8Grml7uUpj9BJTAg00MYNu05dUKThlmL77M&X-Amz-Signature=f4f990a6cbee90b3f289abc55d97eac3e1349e92494fe1b21d7e5369004c3df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAXLRZW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTz%2FMtRfzJN3RBvJFQBlDmyt4CjPpJtAaRd4FI%2FhyU%2BgIgXx1kddTrwG5yjiHHtd0fjpm%2FOVR%2F%2FsXLgZjqbJKkk4oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAXKQKvbqTmlAxagoCrcA10IGQLegWENQrIniY7ku6qB150TZ%2BGxZ7SxRge%2Bt7IAcgNrP2Y6QAfe%2BpYegDBZA8UTNdjUgJuXqMfHx9GzcNQZUMwkUvvAJlRGFu9ewRe7N%2FovAdmt3Z6t79hL8soHfiDY0DyDxbKm4%2Fi3vUGx5w5sQgbbwsMbqgVP7d32urXImS%2FByJliSbUmNSXR1XfC0%2BqR%2FQEMBBfa4HPC%2Bdv5g05BYj0dDHOuUcMgpopN3%2FYkqIQflWtXhk2t30BZWaRFAl%2BXRHrW6%2BsN7ONGtKY0D3hjeJChUgsGHkpVIPxHCzcVh2ELVs%2Fo8NnuiXD2zWUtgeRqEGVrcYiHy4gmkmBvi9%2Bv02FvUJkFiIpHnXxaqXhWjq%2FC8vCF243PuoTB%2BVvbliIAJVojSZYVZ0c9flkIxbvLziRRncF0HwffPudwPq8AcPItw%2Fj6otjZISaqdGphrnm%2BN5j%2B6h5vNn1ZBLRFolKdtCBEjZCyaBzM8yIFlhVftd0B9xdk94%2BBvq0CNknLqgDCiZ%2FhhQo%2BeLmMinc7TYi15Su150zORld1DT4%2FLB%2Bf%2BSqkPQDakGasBbrivqYp95P3lmV7Bmvu%2Bzgyw2ASQVs0DWwrkXek%2Fmx7aZ%2BJx1ezlHGMp2%2BMvWcp7WcNMMKWvskGOqUBO2TBTxvuQ4svPkrfe8iMCtPNeZl9wmWQwHb4HrtVYpQ%2BiT9396uN3e6BbaC6eiVxklwEso3waMKWvzS6rAZYX2iwzeJhTtDO2yxftVWxKZjbP5J4scyltivYNEfDAGjw4H4uVx%2FGUrUkrYgWDQvdRhp1SUJfkt3pvwA%2FipReEj%2B4K79DhW7u6JGxZ8Grml7uUpj9BJTAg00MYNu05dUKThlmL77M&X-Amz-Signature=27085fee54a890ace868f82c47096887bf541cffa77832fef14bb03a24378f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
