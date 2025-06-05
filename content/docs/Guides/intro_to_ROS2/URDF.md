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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7QZUWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICPv6N%2BJ6TQ96e8OEJxf5UoK7K8xMEd8ATAuB71aFFCxAiBJbhlI8JVE4YsVc5sqA%2FaVT6rtDULgLw%2F4zDXN0bmAISr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMSFsmmAFv5%2BJsfkQSKtwDFbi399RDvE51o4oxzICqvwPTcYK%2BJHhj2Dbx5nIJfAVoDg8UcUGN6Ij%2Be%2B3Yq%2FBSkIBrvYnhgqdJwnG3tESx7jAocg8%2B3vNtmu7SQ%2FGXzgc6FH6g3SfJuROogo5hZ65rf135eFUj17YxCiG2eFiBxAqbCb4SOfpuKU76qUzyt7whtsq9gCnEWbH4e4k6u6gjQHWXA7P4fqJPqA2n743KCNtZX7dF41sNqYEwfg%2B%2F5sxnPfrqzQQwQP0L%2BhnqDON6PPnyoLJnOhfqqMlW8R6nOs1sUYirrOB87I8xN1DfU7YT%2FY20hc5nYHpnYWpSqGywinNir79HhtAzYZxrSp%2BuyL%2Fq%2Fk1l%2FKMnQweQlrE7OITqv8TWGPvzljEuSD%2FP74OzYM%2Fn3vhsfjIe64zoNLINa6YvijW%2FZLe%2BsNV7eGXU%2B7TYeOzbriNtcMD0tFLNFIERqstINh6JIIJzPmu%2BLYPCEVVDFjvy3y%2BXSNiZ27fwMazG29CSRWAVUpfx6FtOSO%2F372qbTwuvadL7TOfPZJ8cPcjA8U3yDUvj3lIR0RQjbvbn0BibUhgxZDAnG%2FAFYJuWHX55eva6RVP2OYTU2KKI4RmOEbXR9p%2BDRomZEZdiD%2FzwAkMs500ymjslinowpKmHwgY6pgEebKz4okWNJ0SZzLSDAhQfr6%2B5f9K0OjYus6wTQagluIkoYkroMoA%2FEMQCGwtN%2B4DUWVfJVqPLnbkWk348nvGY7cRRjsHKSAKu5xdJWWqE%2BMpiXRddvwIPVvHUpFilahZFF5Qmi%2BUNQdfpYn%2BF76x%2FZpTasERMo87%2BCR0eZzzEhDw0Btcyv56XCYyOV%2FiyR6anE8nsxYfn8wQ9QAhxs6NwArGvNDFg&X-Amz-Signature=872c994a418402f15f9d0cdc5603b002cdeadf4b54f88a04770aa4aebbd5a627&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7QZUWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICPv6N%2BJ6TQ96e8OEJxf5UoK7K8xMEd8ATAuB71aFFCxAiBJbhlI8JVE4YsVc5sqA%2FaVT6rtDULgLw%2F4zDXN0bmAISr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMSFsmmAFv5%2BJsfkQSKtwDFbi399RDvE51o4oxzICqvwPTcYK%2BJHhj2Dbx5nIJfAVoDg8UcUGN6Ij%2Be%2B3Yq%2FBSkIBrvYnhgqdJwnG3tESx7jAocg8%2B3vNtmu7SQ%2FGXzgc6FH6g3SfJuROogo5hZ65rf135eFUj17YxCiG2eFiBxAqbCb4SOfpuKU76qUzyt7whtsq9gCnEWbH4e4k6u6gjQHWXA7P4fqJPqA2n743KCNtZX7dF41sNqYEwfg%2B%2F5sxnPfrqzQQwQP0L%2BhnqDON6PPnyoLJnOhfqqMlW8R6nOs1sUYirrOB87I8xN1DfU7YT%2FY20hc5nYHpnYWpSqGywinNir79HhtAzYZxrSp%2BuyL%2Fq%2Fk1l%2FKMnQweQlrE7OITqv8TWGPvzljEuSD%2FP74OzYM%2Fn3vhsfjIe64zoNLINa6YvijW%2FZLe%2BsNV7eGXU%2B7TYeOzbriNtcMD0tFLNFIERqstINh6JIIJzPmu%2BLYPCEVVDFjvy3y%2BXSNiZ27fwMazG29CSRWAVUpfx6FtOSO%2F372qbTwuvadL7TOfPZJ8cPcjA8U3yDUvj3lIR0RQjbvbn0BibUhgxZDAnG%2FAFYJuWHX55eva6RVP2OYTU2KKI4RmOEbXR9p%2BDRomZEZdiD%2FzwAkMs500ymjslinowpKmHwgY6pgEebKz4okWNJ0SZzLSDAhQfr6%2B5f9K0OjYus6wTQagluIkoYkroMoA%2FEMQCGwtN%2B4DUWVfJVqPLnbkWk348nvGY7cRRjsHKSAKu5xdJWWqE%2BMpiXRddvwIPVvHUpFilahZFF5Qmi%2BUNQdfpYn%2BF76x%2FZpTasERMo87%2BCR0eZzzEhDw0Btcyv56XCYyOV%2FiyR6anE8nsxYfn8wQ9QAhxs6NwArGvNDFg&X-Amz-Signature=48474f6fc276a513139e78b33d2d39233bef067380b64584d8086a28f66419bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
