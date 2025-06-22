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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LXK64R%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICARs3JUxwHOFiTImvepYSY42oCF1zeYRazkacE8vs8aAiEAwW1kQQxAixyffGBxGqhhmC7O6REJWlMKz5faR69n3noqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqrZi2Z6kOZs2WK%2FSrcA7UO7p67l8DyCLjptWytfOI835TfYO7x9XOIlAz53C13pmZmLEwgmC5DEa%2Bi56eTz%2FVAB0GBJQnKMySPGxGk59vduzV3OjymRtBVkoSOhPSbh0MQfPRgJPPS8kwEI7vtmIhtjw4vI913y9T6349Dgzi%2FBY%2F0aRQpmmyThe3lv%2Fg7KInucm7KU8Dcdz0Vda6JD2hQ1Z9qSttDuunCRH6mu%2BMfj9HONfuRjA%2BsmSu1LYovDeANyJDEF4gpJtjpnDCllgMEntZZTFaLAbh%2FYtNE11ruNeToeRBaSmAQFa5Vl6QERVEhtLV0dMnfvd%2FObxvFd2mtDd4PDl1spgAnlxbyJ7R3WRXXyEguvjJ3qx8nZkvxxJm2eUkd%2FuEPIOSrjg676hMKGQtDOrJnNZApRan2UJVIPD0PlLtl%2B0Bw9VCLzInxMSMrMaTrUFqTXS7s4TSOqWkPxpF7QbeHnNCpARO4ZbmC3FoHjV1ckzV%2BZIJlsC%2FwWlS3B61hFA8fZgJ65XRtkrMM5e%2BHBFrAAoO6hyEQQHKq8pe30tKwN%2BTmMXDVh1GjBHLGdnMuDCV4smsNN1dXHlz6j2Ke3sBbMlv36UgbcNPJa8zg6xKXWA69sCUiN43gWABRcBOyYbhHGbn8MM6h4MIGOqUBHz8siKJ8mIGgJYM2%2FB%2FuhR3ePiz38prD19V3XuLGTVGf0n5cf7f8%2FXjx5LTkhUqgmOvohGTTt5e2RxKd5aZ9fNyhKK4DeaGv65QXgLlfbLd3S1cLVB6mIN8kujK3KQBVXvea1QMZLn1kKytPlVQww49HWp%2BAXMGUSJEa2Odqqlja8ACeHDq%2FGd4w1TSGDHQig%2BuYvyH1TM3xOm87hq7diJ463gwY&X-Amz-Signature=ca0ecd074fc4650ab9757d1db7a48e8e091c727303040cae702c94a266d3216c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LXK64R%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICARs3JUxwHOFiTImvepYSY42oCF1zeYRazkacE8vs8aAiEAwW1kQQxAixyffGBxGqhhmC7O6REJWlMKz5faR69n3noqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqrZi2Z6kOZs2WK%2FSrcA7UO7p67l8DyCLjptWytfOI835TfYO7x9XOIlAz53C13pmZmLEwgmC5DEa%2Bi56eTz%2FVAB0GBJQnKMySPGxGk59vduzV3OjymRtBVkoSOhPSbh0MQfPRgJPPS8kwEI7vtmIhtjw4vI913y9T6349Dgzi%2FBY%2F0aRQpmmyThe3lv%2Fg7KInucm7KU8Dcdz0Vda6JD2hQ1Z9qSttDuunCRH6mu%2BMfj9HONfuRjA%2BsmSu1LYovDeANyJDEF4gpJtjpnDCllgMEntZZTFaLAbh%2FYtNE11ruNeToeRBaSmAQFa5Vl6QERVEhtLV0dMnfvd%2FObxvFd2mtDd4PDl1spgAnlxbyJ7R3WRXXyEguvjJ3qx8nZkvxxJm2eUkd%2FuEPIOSrjg676hMKGQtDOrJnNZApRan2UJVIPD0PlLtl%2B0Bw9VCLzInxMSMrMaTrUFqTXS7s4TSOqWkPxpF7QbeHnNCpARO4ZbmC3FoHjV1ckzV%2BZIJlsC%2FwWlS3B61hFA8fZgJ65XRtkrMM5e%2BHBFrAAoO6hyEQQHKq8pe30tKwN%2BTmMXDVh1GjBHLGdnMuDCV4smsNN1dXHlz6j2Ke3sBbMlv36UgbcNPJa8zg6xKXWA69sCUiN43gWABRcBOyYbhHGbn8MM6h4MIGOqUBHz8siKJ8mIGgJYM2%2FB%2FuhR3ePiz38prD19V3XuLGTVGf0n5cf7f8%2FXjx5LTkhUqgmOvohGTTt5e2RxKd5aZ9fNyhKK4DeaGv65QXgLlfbLd3S1cLVB6mIN8kujK3KQBVXvea1QMZLn1kKytPlVQww49HWp%2BAXMGUSJEa2Odqqlja8ACeHDq%2FGd4w1TSGDHQig%2BuYvyH1TM3xOm87hq7diJ463gwY&X-Amz-Signature=163fa28ad8f5e60617c2ffacb99ce1b9d30be53b6abfa0fe2cea34011d6ac250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
