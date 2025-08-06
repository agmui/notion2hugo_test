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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTELSBS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHluvDrDXBzyG8MpBs0tC8zsxTKSqO7JegY3pG6uJqHgIgb8qT53CLJnqkaKKZRu%2BQGLDEp5w4jQwR69ZioG4gQ08q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJJBBO4x8Y%2BXLnSv4SrcA1yXAUofY1zQTfbuN7nCHgzvHLpg8khQaAcktIcCkTwbUG%2BGmTyNiuxNtyOLyF34KDO1%2FiQO7CotpMti08llCXd9I5Wzm30jGVHYE%2FRbm2nWZvdYY8OeGOxO6qdYyMNfZpWaF1CLM0NBtiIMUqpY0dz2V5AeKfWKh14Cfb6DMuQhxRQ2wqtBdwRA6g7cpXeJ7s30%2F8cCSFOdXZuFb0ds9ymb0ZUfZhSim%2FWWeo4JxoheVwAtH0cg5mRhdzRLw3LQhIgxdSt2Vz5F%2FcX9F225HWAVZ7SCP4hyjwqwE%2B2QqOKJ0UwlzxzNnnlkn4SggSiRXiHuSLBCS%2F%2BTi9ESODXxR%2Fkl1oBvnqI1SDXXW9oqxdOFXo8%2BIH7dr0CR49cNy1DLyB%2F0fYjCttUiCvjZv1zfNGLZGsZIyKwzqx8kCV4x8CJtgIIicqwEHBHvNJGmHq7%2BhQ%2BPhYZXjectQUXtZU8DnE9tbgd95aPFtn5cNUdu0qVsAkWi72v4NexFYucQ1qK4eRj2mvuWl71IlP3Hk8TlHWhxZjY1N0Zd95XvYO9p1MWvUaIgqAC3Ft4W99nxbKH81M4YzxfTRKNYzIakKYSQnV09SFRLTA82Z4Us4a3kEBLcnR3I%2FvGPNGvZnV16MLCWzMQGOqUBCBixWUTtcc2yHIVVXlpjYp0HdgLBNHNEVfa0uJm6jIq%2FISwKdSC3HtIAUfwu3k0DUoKInOKnZtLGrj6MgkT5x1d4%2Bl7ZhaUG7%2F2ur5BZ2LiakZUXH4IDSz2Rko7RNFxQAdGaFhewMrHIJ2D883Uk4b0mYpacUAgVv8dsluO1frOCvjT8UcaLDSd0GH9H0aztRKCreiYiXhB6%2BLrrSDIQD3CsGvHH&X-Amz-Signature=685c62c54ca67f107f2925276594a4e7bf16d0eb4a46511b8a21a88858916a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTELSBS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHluvDrDXBzyG8MpBs0tC8zsxTKSqO7JegY3pG6uJqHgIgb8qT53CLJnqkaKKZRu%2BQGLDEp5w4jQwR69ZioG4gQ08q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJJBBO4x8Y%2BXLnSv4SrcA1yXAUofY1zQTfbuN7nCHgzvHLpg8khQaAcktIcCkTwbUG%2BGmTyNiuxNtyOLyF34KDO1%2FiQO7CotpMti08llCXd9I5Wzm30jGVHYE%2FRbm2nWZvdYY8OeGOxO6qdYyMNfZpWaF1CLM0NBtiIMUqpY0dz2V5AeKfWKh14Cfb6DMuQhxRQ2wqtBdwRA6g7cpXeJ7s30%2F8cCSFOdXZuFb0ds9ymb0ZUfZhSim%2FWWeo4JxoheVwAtH0cg5mRhdzRLw3LQhIgxdSt2Vz5F%2FcX9F225HWAVZ7SCP4hyjwqwE%2B2QqOKJ0UwlzxzNnnlkn4SggSiRXiHuSLBCS%2F%2BTi9ESODXxR%2Fkl1oBvnqI1SDXXW9oqxdOFXo8%2BIH7dr0CR49cNy1DLyB%2F0fYjCttUiCvjZv1zfNGLZGsZIyKwzqx8kCV4x8CJtgIIicqwEHBHvNJGmHq7%2BhQ%2BPhYZXjectQUXtZU8DnE9tbgd95aPFtn5cNUdu0qVsAkWi72v4NexFYucQ1qK4eRj2mvuWl71IlP3Hk8TlHWhxZjY1N0Zd95XvYO9p1MWvUaIgqAC3Ft4W99nxbKH81M4YzxfTRKNYzIakKYSQnV09SFRLTA82Z4Us4a3kEBLcnR3I%2FvGPNGvZnV16MLCWzMQGOqUBCBixWUTtcc2yHIVVXlpjYp0HdgLBNHNEVfa0uJm6jIq%2FISwKdSC3HtIAUfwu3k0DUoKInOKnZtLGrj6MgkT5x1d4%2Bl7ZhaUG7%2F2ur5BZ2LiakZUXH4IDSz2Rko7RNFxQAdGaFhewMrHIJ2D883Uk4b0mYpacUAgVv8dsluO1frOCvjT8UcaLDSd0GH9H0aztRKCreiYiXhB6%2BLrrSDIQD3CsGvHH&X-Amz-Signature=0896936acc3382ee8a89810d599feaac161e0535d2c04a5dfb8ff3bec9022192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
