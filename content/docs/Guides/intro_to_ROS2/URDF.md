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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RNDHE3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDAx6E75qp64YoXgNFVdaJnRRB7PkIdR7ozVKugZETymQIgKWQniITjZznbsTYHy64ZJyvngk4fhzT6%2F82WwbBDJswqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmi86ylCNZY1w8NFyrcA%2FWwU60i1C3QD0qcAqMjjFt3FsOqoTYV5ovLkJyb9YoLAcFVkONfK0njEOUsmWue8w46AhDG3BAA4fOyLJ2bFDu202leM%2FMkB9cps5BhM%2FdKRTq9PebXgYXNa9B9BP9M6u7ut5d4YPolzw6fwc9oA0aHG%2FlV5V%2BQyoZpr5iy8rJJjiZFt%2BKcYO6ijXdt8XiTSrl%2BPRL5h65gQ4meM2ky1UiZhznFCBYlUb1hEcaIskaNBenjYKO3LAeE27sLiYI4SRSAeTdvaIIcAnSuwVZgCqaZ6mKcpDlvdARFQJN6XWiG4hu5mt6bk7z%2FRekWDs9jp5jVRaEH5FGJSwMfi2vy6vozjdwP8ujeTQoFC2%2B7vBWeuoDHuuMT7BEAnVO21Nch427V8QdS%2FeutDPZv01LwXG2HWVT8mOq5wFuw58fdybQRe%2BDlQuvvvhrrQxwoG1oPIqDKeJdIIIV0Hd5x76YTrTWZZrnqtRKkxs9unONAUtm0isVQHwXB3c55FGOIsKLpDgIs2%2BVnDgNL8oaPZBRh%2BJ6iyzg9NVgR0%2B%2BusXfRrqxbK7X%2BUeAMMwgMC8gueTPxGPrsNQA1S3LR0p%2FJ50YVmOsmJqLbWrHUV58MZffmSBAfFQYCXgsxDUupnHiEMLiLy8sGOqUByI0cRxVzgDIDX4I%2B3W24LRm9SRoTQvRkjTDhGUf2aKTcHwOCptBbdLGtfHjisz%2BoGXd8UZFrVKi%2FFkHCctetAzEJVhSawXziV6NJ0ykCuoeP2JxqYKlH6K8pf5K9Zn2eawH9w0wbr4EvD88CE%2B3j7WW1pTS4SSgcEYxYeHcfgAhSD8bxmzsBUn9tV4dl7YsHOe%2BsocU69IuXYePARXEUIcB64Zid&X-Amz-Signature=6ec6d7fa90489793e99ad617055af37be07c2ffc7f9c8c45bc3abb0917e6e661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RNDHE3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDAx6E75qp64YoXgNFVdaJnRRB7PkIdR7ozVKugZETymQIgKWQniITjZznbsTYHy64ZJyvngk4fhzT6%2F82WwbBDJswqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmi86ylCNZY1w8NFyrcA%2FWwU60i1C3QD0qcAqMjjFt3FsOqoTYV5ovLkJyb9YoLAcFVkONfK0njEOUsmWue8w46AhDG3BAA4fOyLJ2bFDu202leM%2FMkB9cps5BhM%2FdKRTq9PebXgYXNa9B9BP9M6u7ut5d4YPolzw6fwc9oA0aHG%2FlV5V%2BQyoZpr5iy8rJJjiZFt%2BKcYO6ijXdt8XiTSrl%2BPRL5h65gQ4meM2ky1UiZhznFCBYlUb1hEcaIskaNBenjYKO3LAeE27sLiYI4SRSAeTdvaIIcAnSuwVZgCqaZ6mKcpDlvdARFQJN6XWiG4hu5mt6bk7z%2FRekWDs9jp5jVRaEH5FGJSwMfi2vy6vozjdwP8ujeTQoFC2%2B7vBWeuoDHuuMT7BEAnVO21Nch427V8QdS%2FeutDPZv01LwXG2HWVT8mOq5wFuw58fdybQRe%2BDlQuvvvhrrQxwoG1oPIqDKeJdIIIV0Hd5x76YTrTWZZrnqtRKkxs9unONAUtm0isVQHwXB3c55FGOIsKLpDgIs2%2BVnDgNL8oaPZBRh%2BJ6iyzg9NVgR0%2B%2BusXfRrqxbK7X%2BUeAMMwgMC8gueTPxGPrsNQA1S3LR0p%2FJ50YVmOsmJqLbWrHUV58MZffmSBAfFQYCXgsxDUupnHiEMLiLy8sGOqUByI0cRxVzgDIDX4I%2B3W24LRm9SRoTQvRkjTDhGUf2aKTcHwOCptBbdLGtfHjisz%2BoGXd8UZFrVKi%2FFkHCctetAzEJVhSawXziV6NJ0ykCuoeP2JxqYKlH6K8pf5K9Zn2eawH9w0wbr4EvD88CE%2B3j7WW1pTS4SSgcEYxYeHcfgAhSD8bxmzsBUn9tV4dl7YsHOe%2BsocU69IuXYePARXEUIcB64Zid&X-Amz-Signature=f05a7f2e85cd3980a9911df665f45312c568f6a38bb14ad93a9e7375844d36f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
