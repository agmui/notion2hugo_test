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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESWN2DZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvojWLK6VUv9TKSBlH8EuvZhUNGATc9Vr70EOV3afn%2FAIgK%2BI2PdvMwR4jiS6dA058oXPKdLM50zpGteanOjQm3D8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCRrINUf6iphn9mRxCrcA6Loz1XKPz1qeajzimMNBDAYlLIUFWo1SLYFuLJyL2OuUyJWlMZm1sxr97PPPew8rNv6pAnxINaysHLYzWXSTa1%2BwVMrILRYYCTsTOtxCahBqLVTRaqkabhXr1tMZJ4%2B7JSvDl30pqobqS23VMHNu2nP3hZBtic7X%2FRZhwC2NYQ3ERQLlqJ1R0hKssUAFS4H9YVwxG47W6kKL6XnRchrMrGER93WVOBRgvJxnHe%2Ftgs1petTqCYWdi6nDmKXfYhRN%2B4fbOYWpIN6rSxs8b72IUXNp3jWprvNeNzooc6CymdeyB3IkD6Tx7pJtakFqGVA3vpi8uN3zSGQstaKzGm9WXIgs0BH5Nq1OWIjluXpFftZ%2F2AbruykwTmzbgQ3V0kjVXhf6JQ6CnjPlpKTy9p2MuAmjzWcv5R0r%2BFSQOzgBzI3UqyojfM3bAIPyHSJJ%2FF8hs2uFFmRKQp83oiJleWeYINuT%2F%2BBYGshdRBRGtnwCdqnIL1HKpHwdSgU4viFewtMjHCkp8uPHDl5R5VSMFecM6QrQKtU2nBu5xr%2FcbX2Pq8mOpUGZhlDvwwU5xjHx%2FIQdXDNGJHdkfYfZNI0RjmKvvAO9KlQyNv%2B%2BhCqvTq7gAi2HJ5egSAyG6ttoCZPMO6I9sQGOqUB3q47KvHa5AdiblqTJhN4S24IjQLQ4dSNhzdh47wcKH%2Bupxp4NRrFxvpm1g4SvobHtPNUU34zpRJNaiGepVtbe9mf28DP5sWcO95x4eEZmJrLUdHFJyMzRaU1YPANj9B5eiqQ0O1X6jWx1nkPzaoPjsvcD10obs1EG1dfb6i%2Fh66YR4bzxuBCzRn0HR7lt1rd2ejyXCerIIFx4ZTFMpeAmkoKYRwl&X-Amz-Signature=e966fcb3b0f78b2ec411891a267054e716e302d888b8d979740ad9119419f478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESWN2DZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvojWLK6VUv9TKSBlH8EuvZhUNGATc9Vr70EOV3afn%2FAIgK%2BI2PdvMwR4jiS6dA058oXPKdLM50zpGteanOjQm3D8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCRrINUf6iphn9mRxCrcA6Loz1XKPz1qeajzimMNBDAYlLIUFWo1SLYFuLJyL2OuUyJWlMZm1sxr97PPPew8rNv6pAnxINaysHLYzWXSTa1%2BwVMrILRYYCTsTOtxCahBqLVTRaqkabhXr1tMZJ4%2B7JSvDl30pqobqS23VMHNu2nP3hZBtic7X%2FRZhwC2NYQ3ERQLlqJ1R0hKssUAFS4H9YVwxG47W6kKL6XnRchrMrGER93WVOBRgvJxnHe%2Ftgs1petTqCYWdi6nDmKXfYhRN%2B4fbOYWpIN6rSxs8b72IUXNp3jWprvNeNzooc6CymdeyB3IkD6Tx7pJtakFqGVA3vpi8uN3zSGQstaKzGm9WXIgs0BH5Nq1OWIjluXpFftZ%2F2AbruykwTmzbgQ3V0kjVXhf6JQ6CnjPlpKTy9p2MuAmjzWcv5R0r%2BFSQOzgBzI3UqyojfM3bAIPyHSJJ%2FF8hs2uFFmRKQp83oiJleWeYINuT%2F%2BBYGshdRBRGtnwCdqnIL1HKpHwdSgU4viFewtMjHCkp8uPHDl5R5VSMFecM6QrQKtU2nBu5xr%2FcbX2Pq8mOpUGZhlDvwwU5xjHx%2FIQdXDNGJHdkfYfZNI0RjmKvvAO9KlQyNv%2B%2BhCqvTq7gAi2HJ5egSAyG6ttoCZPMO6I9sQGOqUB3q47KvHa5AdiblqTJhN4S24IjQLQ4dSNhzdh47wcKH%2Bupxp4NRrFxvpm1g4SvobHtPNUU34zpRJNaiGepVtbe9mf28DP5sWcO95x4eEZmJrLUdHFJyMzRaU1YPANj9B5eiqQ0O1X6jWx1nkPzaoPjsvcD10obs1EG1dfb6i%2Fh66YR4bzxuBCzRn0HR7lt1rd2ejyXCerIIFx4ZTFMpeAmkoKYRwl&X-Amz-Signature=80607e0d36896e92d48311c47b3564164f0f3f4382dd6c556073b0043f2e231b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
