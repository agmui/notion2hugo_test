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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAXUMG3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3DWbsY1RlJCBsMxc5yQKc2bk%2FhGkA6PrVt4k1jNI%2B6AiEAhCcMl7qgbmnJqQb4Km7YCF4y%2BOt4iVY4hybyVJg8BS8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF%2Fo%2F7Q8M0uIgCEdEircA5HpbFGqv%2BbUpCroZZFxBA4gjP2UpCPy6FYCSCPZzDFejYoP2TQ64PrNihYSNUCghgJT5FND84U%2BwbcKbFzKURwlqtkv2GTqYkShuueJMfrF6Qkt2Zsp35QXtOmtPklXjaiX6VxeKTtinTCEdShtzEadXEPG1gm1YmI9mFO%2BfKND2UAKYdS0lESKF2J5Ymc9hj%2B99Pu3odTbuQfXKG3HWvW5E5PS%2FEFcM9V3o3sAl3semFBAZ4cXTG5kcDV1RIqmPMjIapB7jQe8l3VjuKJfRgUajZm5Qt8%2F5yTlcQs9spJRD1YxR%2FzP7cB7NZLbEtTlgRLRLuR3zRRSF139RlLOM9HmAwzJOxVs%2Bxe8yPW2jVnhQkWGoiwV0EPUh67JdPK1a1nxTt0QBcQicBM3%2BRpBar3RYSkMQ%2ByVDbHEJZlIpc%2BWGKt%2F9Uk868LALmmxvuQKL1DS2kgvSS2Sc1Dhw0tzTVpZ6adO2QMoXvwRlseW25BOasN70R744Rm0dMBrqj9gq8Si9qKlV7DACn4NvDSAcFO6B7gwQ94r1kSDd2xSwtnBiW79tLtMmygS%2BpY%2Fhzp4OFcyKpPFmJVyWESGbTQ%2Fao%2Bhd2AwU4QX%2FdUfXGHQPNwow%2Bi5YijygfLTs0pIMLXB28EGOqUBBQOxdB%2FQuwZmMp8xzpwHoNdVV8FxtkGHm1Xz9x2tNrl6ZmZqrTxV2Z6nZFiCp6loViZvor2eRviq6rtpTxWS1rT5RsAkgV3mbYwd5IISe7QzfJPr%2BE58GrS6Ih4FsfdDcW7pI96bhNL9%2BRMPYfAXVfMTN2mzH71om%2BybvJPEGGWav5xpfvwhJCP%2FxzWmsPmgt2RvTG%2B5CHnVJ00BX5jKVu8PtUId&X-Amz-Signature=ba5169627a6790e9df83674d3ccd23825b2d093669a26c8d0847c36bd340ffc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAXUMG3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3DWbsY1RlJCBsMxc5yQKc2bk%2FhGkA6PrVt4k1jNI%2B6AiEAhCcMl7qgbmnJqQb4Km7YCF4y%2BOt4iVY4hybyVJg8BS8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF%2Fo%2F7Q8M0uIgCEdEircA5HpbFGqv%2BbUpCroZZFxBA4gjP2UpCPy6FYCSCPZzDFejYoP2TQ64PrNihYSNUCghgJT5FND84U%2BwbcKbFzKURwlqtkv2GTqYkShuueJMfrF6Qkt2Zsp35QXtOmtPklXjaiX6VxeKTtinTCEdShtzEadXEPG1gm1YmI9mFO%2BfKND2UAKYdS0lESKF2J5Ymc9hj%2B99Pu3odTbuQfXKG3HWvW5E5PS%2FEFcM9V3o3sAl3semFBAZ4cXTG5kcDV1RIqmPMjIapB7jQe8l3VjuKJfRgUajZm5Qt8%2F5yTlcQs9spJRD1YxR%2FzP7cB7NZLbEtTlgRLRLuR3zRRSF139RlLOM9HmAwzJOxVs%2Bxe8yPW2jVnhQkWGoiwV0EPUh67JdPK1a1nxTt0QBcQicBM3%2BRpBar3RYSkMQ%2ByVDbHEJZlIpc%2BWGKt%2F9Uk868LALmmxvuQKL1DS2kgvSS2Sc1Dhw0tzTVpZ6adO2QMoXvwRlseW25BOasN70R744Rm0dMBrqj9gq8Si9qKlV7DACn4NvDSAcFO6B7gwQ94r1kSDd2xSwtnBiW79tLtMmygS%2BpY%2Fhzp4OFcyKpPFmJVyWESGbTQ%2Fao%2Bhd2AwU4QX%2FdUfXGHQPNwow%2Bi5YijygfLTs0pIMLXB28EGOqUBBQOxdB%2FQuwZmMp8xzpwHoNdVV8FxtkGHm1Xz9x2tNrl6ZmZqrTxV2Z6nZFiCp6loViZvor2eRviq6rtpTxWS1rT5RsAkgV3mbYwd5IISe7QzfJPr%2BE58GrS6Ih4FsfdDcW7pI96bhNL9%2BRMPYfAXVfMTN2mzH71om%2BybvJPEGGWav5xpfvwhJCP%2FxzWmsPmgt2RvTG%2B5CHnVJ00BX5jKVu8PtUId&X-Amz-Signature=dae7fb8d1f37e74e6c3222457678488bedef9d39381023f104fec2d565146ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
