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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APLWB54%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCIKUqIYy0MV242QYIwr18sdVUt%2FS8vWn2cQbTEI5OQ%2FQIgMeX7%2BnP3A8unTQ9vG72OF6JoDJFzoszhi3PFqSiK9yEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP10mESQqTWLLitIyrcAzWsQiYC3iFqj0c%2B8%2FXwSVybCnl8BbpAsul15gHWoiSn1cmPlAZ0vnaYWEWu8bWRHT4EApsghcuJvwUcPnpMY%2F0Zv8UrzQg8%2Fp3L4ttroeycKvWhHDAMPxHW%2FEK1MiDqJXa%2FthRqHD64T3Qz0kZc8629GQDgvPMYeOguexzMlmrYwT6OCFUiRkrvGC92QhggjPXR1qijOmZ4Gq24oBH5bpM4ew6GpFWQtCOFd5gEA6c678zbZWB7AJP2wfjUx7slyUMk0VXwePclj%2Fs3vZx5oxfgiIge9KYbGTk7yh8feZjhm6mN5AMl5XQlh4e32AV0TyHGge9nq1aanXFrWeZaWOGSqfFINSL14xGtLRq97N4hgoXovCRio1hqYqq29%2Fy4Nq35LE%2FfzgdTUntw4V7RWbeUPG2DcWRmaWRdN3BUjV1uMW7eJ6oDMJhn%2F5e0qaQtyihF0NB7JhJ8kyUc2IKmRIKst6coIRRV2NBF3gnnGQLwIkm3vmtUvQAyeahYCThvvA1amJjIVV061A1BVr9770CWlDKcKiYCheCCPwbtBTSVAmfMdsn8A3bgf7dfHmeSZqA2facFj0eKStxeQOeQv%2F06ZPWk9n1ILfGgNzrb6VEm5cPhh5gU9KgHmgqeMPqp0sAGOqUBJwQmA715CRsjkYSO%2Fz3v0bDTKsQuw3iZtkP%2BXXolpeZOqB13VS9qcJn7M57HwAab4bmP8MwG3UCR7wrTNYPtmA9I6DY71RDElpstYyMBiZLTZuYaB1Krae2RjslhhmQuSqzoLkt%2FD%2BQFX%2B9NpfM3nS7FbbitZy0p3ipugFNyvgJRXqrP4MCe0Vu1L0cEgUR98hlVrQAV8SST%2FfvUA7mFF4rRja3R&X-Amz-Signature=130e0e24227661e8f678e085d5da97ae3f7affd065e5b5e04eab15fcf2335c05&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APLWB54%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCIKUqIYy0MV242QYIwr18sdVUt%2FS8vWn2cQbTEI5OQ%2FQIgMeX7%2BnP3A8unTQ9vG72OF6JoDJFzoszhi3PFqSiK9yEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP10mESQqTWLLitIyrcAzWsQiYC3iFqj0c%2B8%2FXwSVybCnl8BbpAsul15gHWoiSn1cmPlAZ0vnaYWEWu8bWRHT4EApsghcuJvwUcPnpMY%2F0Zv8UrzQg8%2Fp3L4ttroeycKvWhHDAMPxHW%2FEK1MiDqJXa%2FthRqHD64T3Qz0kZc8629GQDgvPMYeOguexzMlmrYwT6OCFUiRkrvGC92QhggjPXR1qijOmZ4Gq24oBH5bpM4ew6GpFWQtCOFd5gEA6c678zbZWB7AJP2wfjUx7slyUMk0VXwePclj%2Fs3vZx5oxfgiIge9KYbGTk7yh8feZjhm6mN5AMl5XQlh4e32AV0TyHGge9nq1aanXFrWeZaWOGSqfFINSL14xGtLRq97N4hgoXovCRio1hqYqq29%2Fy4Nq35LE%2FfzgdTUntw4V7RWbeUPG2DcWRmaWRdN3BUjV1uMW7eJ6oDMJhn%2F5e0qaQtyihF0NB7JhJ8kyUc2IKmRIKst6coIRRV2NBF3gnnGQLwIkm3vmtUvQAyeahYCThvvA1amJjIVV061A1BVr9770CWlDKcKiYCheCCPwbtBTSVAmfMdsn8A3bgf7dfHmeSZqA2facFj0eKStxeQOeQv%2F06ZPWk9n1ILfGgNzrb6VEm5cPhh5gU9KgHmgqeMPqp0sAGOqUBJwQmA715CRsjkYSO%2Fz3v0bDTKsQuw3iZtkP%2BXXolpeZOqB13VS9qcJn7M57HwAab4bmP8MwG3UCR7wrTNYPtmA9I6DY71RDElpstYyMBiZLTZuYaB1Krae2RjslhhmQuSqzoLkt%2FD%2BQFX%2B9NpfM3nS7FbbitZy0p3ipugFNyvgJRXqrP4MCe0Vu1L0cEgUR98hlVrQAV8SST%2FfvUA7mFF4rRja3R&X-Amz-Signature=63fca071296cbcf2319df25d1887aa26a62870c5acdc2c6c939c02d2a3d27ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
