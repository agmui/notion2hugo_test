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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVOZX3E%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCyPcPFe%2BnVw6KuVMfoe3R%2B8%2BXm%2FHCA1D0%2FicyHyX1qAiApjgVN92cb8lXzX9E%2FVQtHeV8K1nXXl3h5%2B%2FicKFrWFir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8txp2SUcMOcETcoWKtwDlwLrN%2Bt3SZwNyohV7xpTmukwC%2FnG%2B7x2PScpt71goMb0isC5lkY4Mce0IVZf1tOiu6pgATvYKJEhU2LRbQ3tIAePBq5pZi5NIlVBJjYjFdpzbN0GHXVsXIde7gL4uuNzTfXAKKnsOq%2BvGwJJVLEmmPgXUwOm9f9lBMKEDOsKJtYpI5VP4D7nMtS6rdy3tEewDP%2F4jsRxaMLwxesFGd9nEr2UdS8OFd%2BgaS1sn9qWz4LQhK8MxJ4tctFj6JJRJTYfS5X%2FKsQiK0ajL4JUgpsLftVnhMLe0%2FJTyJBRvHSd733AlDz7UFU9EfLseQausAtTcmDAWg7ospObcjynFBt1ThYA0Q6%2Bge8%2Fnmk2FeqxqTYCpUtcqLf5iWrGlvKPpL9pQoj9greh%2BUKEj73RNbN5IYsHqpVfB6SXdCzK%2Fh5elJEIZL%2BlFel4iDSQ3kK3uBt7pSfVwfIeR7fSIAVl3yXDmlrI8aIgeoObnl2sfeXSn1t%2FwreMQeQwe3XfU8pgnbaHjVvb2KsRI8GjopCU8kSHhNksVZDrnqRc%2FSKoxrJW4hHRrOgbXLVejqRpYBDnzGx3YqxSgOcUxadSsBKkQl9icsNKI91uOMEGyq1urWB3S%2BkIDIwqGywcIeoQanow%2FYqqzwY6pgEK%2F0jHUZ%2FVeD45SPxJmnNSjWtiBTeETwOWj5whHA3toal%2Fva0oWkqzrEXhXdS0Mr9mcRCt4uzhmzxqjyLH5gkORcigJyn7lOg8TJdjf2Da6w8dGYH53cknqFxbUmHN4xhmFZEEMJXgtw1PmA%2FaPQpiPxxKuw%2FSKvdfAMAlmYIkHeUT2kd5PUTgMEZ7b8pt7UYU6dgJWfJZ1vqA%2BJbq%2BOvJlxGrLw38&X-Amz-Signature=84192e2c84de8b71adcd9fef7001e7073e6826d42e73a31a6b6ba201e7a9ebb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVOZX3E%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCyPcPFe%2BnVw6KuVMfoe3R%2B8%2BXm%2FHCA1D0%2FicyHyX1qAiApjgVN92cb8lXzX9E%2FVQtHeV8K1nXXl3h5%2B%2FicKFrWFir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8txp2SUcMOcETcoWKtwDlwLrN%2Bt3SZwNyohV7xpTmukwC%2FnG%2B7x2PScpt71goMb0isC5lkY4Mce0IVZf1tOiu6pgATvYKJEhU2LRbQ3tIAePBq5pZi5NIlVBJjYjFdpzbN0GHXVsXIde7gL4uuNzTfXAKKnsOq%2BvGwJJVLEmmPgXUwOm9f9lBMKEDOsKJtYpI5VP4D7nMtS6rdy3tEewDP%2F4jsRxaMLwxesFGd9nEr2UdS8OFd%2BgaS1sn9qWz4LQhK8MxJ4tctFj6JJRJTYfS5X%2FKsQiK0ajL4JUgpsLftVnhMLe0%2FJTyJBRvHSd733AlDz7UFU9EfLseQausAtTcmDAWg7ospObcjynFBt1ThYA0Q6%2Bge8%2Fnmk2FeqxqTYCpUtcqLf5iWrGlvKPpL9pQoj9greh%2BUKEj73RNbN5IYsHqpVfB6SXdCzK%2Fh5elJEIZL%2BlFel4iDSQ3kK3uBt7pSfVwfIeR7fSIAVl3yXDmlrI8aIgeoObnl2sfeXSn1t%2FwreMQeQwe3XfU8pgnbaHjVvb2KsRI8GjopCU8kSHhNksVZDrnqRc%2FSKoxrJW4hHRrOgbXLVejqRpYBDnzGx3YqxSgOcUxadSsBKkQl9icsNKI91uOMEGyq1urWB3S%2BkIDIwqGywcIeoQanow%2FYqqzwY6pgEK%2F0jHUZ%2FVeD45SPxJmnNSjWtiBTeETwOWj5whHA3toal%2Fva0oWkqzrEXhXdS0Mr9mcRCt4uzhmzxqjyLH5gkORcigJyn7lOg8TJdjf2Da6w8dGYH53cknqFxbUmHN4xhmFZEEMJXgtw1PmA%2FaPQpiPxxKuw%2FSKvdfAMAlmYIkHeUT2kd5PUTgMEZ7b8pt7UYU6dgJWfJZ1vqA%2BJbq%2BOvJlxGrLw38&X-Amz-Signature=d40017eb92bbc9af0d74b344bc4b7c406265aef3dab1eafa549f203af309e87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
