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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBCPELM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD83CVdiBNY0Rs2%2FfHUrFcAhcjwfU2Wx6%2BocfkA45VIiQIhAMK%2F0TIGk%2FNov%2FZUoECv05mo%2Flf8MdiFM6xwfVbqeCz7Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwRoUcco8SKiddZz84q3AMFajSuNkZ1%2Fv53zz%2FyJ7KY%2BX1QiPJu2%2FQYLg1ISSWZ1Q9iJCFzhje%2F4k9W6ee9hJwXwdifH%2Fy%2B2rQNVGDdYiM9iiyZlwRiECc7MVr3NeVPFVayzUsRhzdaQEVlI0tK8bI6Lu%2FY00bvWhfYq86KW1WCvCcZQZjzeW253VBHFXvZP%2FMVsmx9HDdBruL4LW0bk6Uf%2FEINL89NeiDwmxqDkYnodPoWLRiB2YIrzoC4XxQ4AgrXrgDcQ6Rkzvy6wKei3bHNkhrEJJfGQ6xELxKq34lar88NdVu3y6AykZ6QzGhY%2Fow4zhV2Yk63WHs98%2Bdfx2aRrpJaksXi2OHoQDzAnDdBEZPTv3Ng3mbC%2FXKZzoQorjrBiVDCfVHF4tTFAJFvBqhZAMJES5%2BOEk37MkF9TvExEUdHE6%2FCRKWDasD62y0OsjSxU6ao4eUNt4H6qfPFrqLJcnTCuTe5NuN3Ksw37rc4qCKgilzgjiAlq4StVoWFyxPiJWJZwIb4QTkvc4tUG3Y8SKUHDxc%2ByJ67qUVVzeVhlXhl56hzPUVrVkp%2FvruAGjPYkNJRXpYKaTDshnd7pPawuTNEFTZAcgNhv7AE0w6c81nSP5yHIix27%2FyLL0MrRSokkRrqoKBy%2Fm2LiDCd1d7TBjqkAfzuTeoqFJD6MyFrjbJAcxNp0cIFxrnPn847jNUtnWV960xMNcg5U8UHlivtM8XgtcUFZ9sCNaswtwzrBILoR7ovXlthzn%2F4%2BxfRkkh4IF1vs4jwTnBPIeaZQ1TWFlhFNn4zSUbopF0KFtOvVcb5q0eOZ8L1oBPXcP4LORw%2BzRselBfqVIM%2BOmvBtOk3dZzlnSXNaD6BlxXNwwsqdsRaZERHaknL&X-Amz-Signature=7cc06a69fb7e06625210573fb2c62475606fb89b45a96138fb6850d62db1d962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBCPELM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD83CVdiBNY0Rs2%2FfHUrFcAhcjwfU2Wx6%2BocfkA45VIiQIhAMK%2F0TIGk%2FNov%2FZUoECv05mo%2Flf8MdiFM6xwfVbqeCz7Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwRoUcco8SKiddZz84q3AMFajSuNkZ1%2Fv53zz%2FyJ7KY%2BX1QiPJu2%2FQYLg1ISSWZ1Q9iJCFzhje%2F4k9W6ee9hJwXwdifH%2Fy%2B2rQNVGDdYiM9iiyZlwRiECc7MVr3NeVPFVayzUsRhzdaQEVlI0tK8bI6Lu%2FY00bvWhfYq86KW1WCvCcZQZjzeW253VBHFXvZP%2FMVsmx9HDdBruL4LW0bk6Uf%2FEINL89NeiDwmxqDkYnodPoWLRiB2YIrzoC4XxQ4AgrXrgDcQ6Rkzvy6wKei3bHNkhrEJJfGQ6xELxKq34lar88NdVu3y6AykZ6QzGhY%2Fow4zhV2Yk63WHs98%2Bdfx2aRrpJaksXi2OHoQDzAnDdBEZPTv3Ng3mbC%2FXKZzoQorjrBiVDCfVHF4tTFAJFvBqhZAMJES5%2BOEk37MkF9TvExEUdHE6%2FCRKWDasD62y0OsjSxU6ao4eUNt4H6qfPFrqLJcnTCuTe5NuN3Ksw37rc4qCKgilzgjiAlq4StVoWFyxPiJWJZwIb4QTkvc4tUG3Y8SKUHDxc%2ByJ67qUVVzeVhlXhl56hzPUVrVkp%2FvruAGjPYkNJRXpYKaTDshnd7pPawuTNEFTZAcgNhv7AE0w6c81nSP5yHIix27%2FyLL0MrRSokkRrqoKBy%2Fm2LiDCd1d7TBjqkAfzuTeoqFJD6MyFrjbJAcxNp0cIFxrnPn847jNUtnWV960xMNcg5U8UHlivtM8XgtcUFZ9sCNaswtwzrBILoR7ovXlthzn%2F4%2BxfRkkh4IF1vs4jwTnBPIeaZQ1TWFlhFNn4zSUbopF0KFtOvVcb5q0eOZ8L1oBPXcP4LORw%2BzRselBfqVIM%2BOmvBtOk3dZzlnSXNaD6BlxXNwwsqdsRaZERHaknL&X-Amz-Signature=47167eb7ef4d8915cb588b433ee033680d6fc7b484a8528c61e7ba63da8da8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
