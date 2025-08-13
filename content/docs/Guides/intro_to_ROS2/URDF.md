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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FIUGC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BCfumbZBiaoP0e%2B6X4WlH3i9qgEKWo1xVvOQylF1AMAiEA1J0PxEcRQ49cBuQQoWJMfRsR9cHQIinadja%2Fey%2FNU%2Fgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOAeDwVmDAbjacm7iircA%2Fo3wILpO43FVG5QZxBRyAhbsGTxtjCz4PwFd%2Fr8Z0quKplQ2PONzNf9xltusJ3vAc7IYbi4Z6gGK1gYnSxwAy7FJ94%2FqZHYJwUim7yPJNjShNSCLD1Q%2BKvMQkXs8CpSpqWJTSnVO9uHztn6VvX5Ayxz1d0wkE6AAoOZbVuofuI39XK6WqPa8Ksz4QG3VwjWOObGhNGGHHsrY%2FHlGj0PSQ35TK5db8AEwgwubfI2ocxwiE30U1O107eQAtosTxH5vfDLZloLkA3iBteI4%2BxtZpfzk%2FVJVzN6CLUTT55%2B07NcDdaHiVANboEpKN0%2FSMlk0TyGuExsH%2Bw5HcddsG7H5xHlYRBGqF47Ykq2QJx6iAUbTm2QrYYZ8a8gvi%2Bv9TFklV%2FFx57iBWLQfDigzD1t0Kw4uYeMA6ctmhZFHdfc%2BvApplRN%2Fb8SAqDyQufRCgUCaUWRpad8eapa43%2FgJtepZCQrZBHR7ox%2BMc6ZqYZPntwpQZz3w2SkGlYrIJ8nfzBJtGduMLomNzWX8q8islw%2Fj3k5E7fGasIDjCQ9LKFkCnStLPpUr0uM6pv0int0sgT6Yj6KfLtApiUVTrcIqMTyH8%2BCDrOmHj0zmOb1KpiDtnfBoivLJWJ31Xnagv3MMKqP9MQGOqUBUBxJ8RqQRdO6MrsW6pecpbIQG6BgYj0JfJMDHt%2BiH%2B6iJcdl2Po7Q0uAJR5dflvv8rGxbQL7g8Qf1sYFAADZ4AxgfunGtLUuG%2FdOl4zfMx3A6gKMS%2BvKGSarVQ1CBoFNLwFvoMvf436wUNgJWpW4LSSIukB%2Bd76qorRG17V%2FL4%2FhXh0805qa%2FlQZlDFCq4S7FSZrx6Zqn4WUo34w0tDPtgoj0%2FjL&X-Amz-Signature=65e08b9d7c0ec7d4af31e0d7f3b5cb3f37bcd7fa554a8b7006f4a7f329b48f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FIUGC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BCfumbZBiaoP0e%2B6X4WlH3i9qgEKWo1xVvOQylF1AMAiEA1J0PxEcRQ49cBuQQoWJMfRsR9cHQIinadja%2Fey%2FNU%2Fgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOAeDwVmDAbjacm7iircA%2Fo3wILpO43FVG5QZxBRyAhbsGTxtjCz4PwFd%2Fr8Z0quKplQ2PONzNf9xltusJ3vAc7IYbi4Z6gGK1gYnSxwAy7FJ94%2FqZHYJwUim7yPJNjShNSCLD1Q%2BKvMQkXs8CpSpqWJTSnVO9uHztn6VvX5Ayxz1d0wkE6AAoOZbVuofuI39XK6WqPa8Ksz4QG3VwjWOObGhNGGHHsrY%2FHlGj0PSQ35TK5db8AEwgwubfI2ocxwiE30U1O107eQAtosTxH5vfDLZloLkA3iBteI4%2BxtZpfzk%2FVJVzN6CLUTT55%2B07NcDdaHiVANboEpKN0%2FSMlk0TyGuExsH%2Bw5HcddsG7H5xHlYRBGqF47Ykq2QJx6iAUbTm2QrYYZ8a8gvi%2Bv9TFklV%2FFx57iBWLQfDigzD1t0Kw4uYeMA6ctmhZFHdfc%2BvApplRN%2Fb8SAqDyQufRCgUCaUWRpad8eapa43%2FgJtepZCQrZBHR7ox%2BMc6ZqYZPntwpQZz3w2SkGlYrIJ8nfzBJtGduMLomNzWX8q8islw%2Fj3k5E7fGasIDjCQ9LKFkCnStLPpUr0uM6pv0int0sgT6Yj6KfLtApiUVTrcIqMTyH8%2BCDrOmHj0zmOb1KpiDtnfBoivLJWJ31Xnagv3MMKqP9MQGOqUBUBxJ8RqQRdO6MrsW6pecpbIQG6BgYj0JfJMDHt%2BiH%2B6iJcdl2Po7Q0uAJR5dflvv8rGxbQL7g8Qf1sYFAADZ4AxgfunGtLUuG%2FdOl4zfMx3A6gKMS%2BvKGSarVQ1CBoFNLwFvoMvf436wUNgJWpW4LSSIukB%2Bd76qorRG17V%2FL4%2FhXh0805qa%2FlQZlDFCq4S7FSZrx6Zqn4WUo34w0tDPtgoj0%2FjL&X-Amz-Signature=b189752cc3fcb984d9c9efc89bffb72f6b421ddb688fbb711fb73465f42821cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
