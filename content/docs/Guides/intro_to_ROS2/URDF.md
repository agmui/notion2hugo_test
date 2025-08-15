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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5HNR4M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHoxEi3CO%2FN9cCAjPWzcZQHAyI4uZ6Hwj6qlwROLCSx%2BAiEAhdt2QH4a%2FIkGIoR6rdjOHEQnx0xNt4RjkbDCoc5ZUVIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKIQ5japhYtYJfy7eCrcA%2BcZHveYjGXqKctSk3YGUwYhysi9zooivXMi5prqKom0vvXCfRsOVAHWRbgbKUY33xfRlg6ukiIXB30RG3AEMJ3mU8XBVN758%2FOVHRaT%2Bm0tVf1FiYzxvut%2F%2BXhYDaJVPaGHjvT1Bo4%2F4VRB1KrMNGu%2FmjsSmUwnAb7xXoUiKNryfgexxqQ9FanhWjOxmE6RWQJyxqljxdw9Zx5AJ0MRtvjxvYC4rLOL2l3hTI%2FJixu%2FAscAARu%2F%2FK0yzPu8%2BMt1WEvAA%2BUyUgJegIFj682R5%2FTcTNZDRcAFDYHkdZt26Of%2FZSF9P0L5KUnHDH2XFrKtE4BxR2fZxv0kO6UMBU%2F0DMRRJFQD%2FLbLlsbDYZNYiiSXpWdKFzKK4TmhsESdUdvQ9xjfThXiVUeJ7kCNZuWyecrTE1s%2Bqv%2BfdxSsTtXEoZJAPOsQYZ7ZFpCeEEsB7P6BUi8jtT%2FDAb9u6K3sAbkx%2FveXClXG%2Ftxt6Jt%2B9sQs56Abjx8juEfEG8F86TC7yn4eb%2BQqKcZckl3hmV80Pv95MhMqP%2F4y%2BEm0SOD3%2FFYrt5QCZR4Dz0x3sM9x2vxMNw9ylTlmlOFjc515FdKR%2FD5IovmUljuZr8PvvKTOPZvKEwYc44I2GfsRdvIVUGqfMPz8%2BcQGOqUB%2BMBufzUun3Bmy%2FmlEDBg0FMkrNrgbBE%2FKQSAqedIrqEYnD3HRKgP4xnYNqT9sD7rehqDq7tMpUzOlzMSatMhgH2xx2ks4F98QNiaNCuRKi2PiS0CDugEa0qFZSUhTaSL7QXmDLYM0dLJw%2FjLDh2BIl9T0GYMBWVrNMzmiMFGc0tD09q%2BfuMr7mSpjHptNzeYd8TUs3v98PQiaKGHURohwjQPq3y1&X-Amz-Signature=344932fddc288994a35c4fffdcf872945419f482cc80adaddbf1883db9459e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5HNR4M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHoxEi3CO%2FN9cCAjPWzcZQHAyI4uZ6Hwj6qlwROLCSx%2BAiEAhdt2QH4a%2FIkGIoR6rdjOHEQnx0xNt4RjkbDCoc5ZUVIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKIQ5japhYtYJfy7eCrcA%2BcZHveYjGXqKctSk3YGUwYhysi9zooivXMi5prqKom0vvXCfRsOVAHWRbgbKUY33xfRlg6ukiIXB30RG3AEMJ3mU8XBVN758%2FOVHRaT%2Bm0tVf1FiYzxvut%2F%2BXhYDaJVPaGHjvT1Bo4%2F4VRB1KrMNGu%2FmjsSmUwnAb7xXoUiKNryfgexxqQ9FanhWjOxmE6RWQJyxqljxdw9Zx5AJ0MRtvjxvYC4rLOL2l3hTI%2FJixu%2FAscAARu%2F%2FK0yzPu8%2BMt1WEvAA%2BUyUgJegIFj682R5%2FTcTNZDRcAFDYHkdZt26Of%2FZSF9P0L5KUnHDH2XFrKtE4BxR2fZxv0kO6UMBU%2F0DMRRJFQD%2FLbLlsbDYZNYiiSXpWdKFzKK4TmhsESdUdvQ9xjfThXiVUeJ7kCNZuWyecrTE1s%2Bqv%2BfdxSsTtXEoZJAPOsQYZ7ZFpCeEEsB7P6BUi8jtT%2FDAb9u6K3sAbkx%2FveXClXG%2Ftxt6Jt%2B9sQs56Abjx8juEfEG8F86TC7yn4eb%2BQqKcZckl3hmV80Pv95MhMqP%2F4y%2BEm0SOD3%2FFYrt5QCZR4Dz0x3sM9x2vxMNw9ylTlmlOFjc515FdKR%2FD5IovmUljuZr8PvvKTOPZvKEwYc44I2GfsRdvIVUGqfMPz8%2BcQGOqUB%2BMBufzUun3Bmy%2FmlEDBg0FMkrNrgbBE%2FKQSAqedIrqEYnD3HRKgP4xnYNqT9sD7rehqDq7tMpUzOlzMSatMhgH2xx2ks4F98QNiaNCuRKi2PiS0CDugEa0qFZSUhTaSL7QXmDLYM0dLJw%2FjLDh2BIl9T0GYMBWVrNMzmiMFGc0tD09q%2BfuMr7mSpjHptNzeYd8TUs3v98PQiaKGHURohwjQPq3y1&X-Amz-Signature=fc32a035a31aa9751139ee93dfe47d04469b7a967f5ae6c7290961aee0b9fae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
