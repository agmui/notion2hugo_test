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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DKVITP%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFDmoNKNM3rXlOobxLii3FcWM%2FTlNa7aA1GMZmMCH839AiBYaxydDPAL9qOvKZGPVZGezU8uppDP0C0tsp6Qsazdeyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMJxl3ENwP3VlW%2FMKZKtwDEV5w7dwJiJptzVdalQyhZhqIko40lUVSltutv5LdB%2B6RtuTYb7b3tvxESVgc8mZA8cro%2BfujNtkzDzNJcbTzewCOL88My3ccKOABZy6LtQBkd%2F88XCIdUsE6U%2FLUstwLN%2BC3sjmpaOEbgnuupAVT0%2FrFfshElCTAK1ZhypXAF0pbHc8tsz1z2HLZhM4Y29d38U98m8BcjFbZnEfBbFbbrOIza5V2M1Ywylmga6hp%2FUleXdVuPZrGqGqii3zPVbX%2FUgaiMLojxJsw%2Fbt02kL4rNXLrNg6MfOVwkJ1%2F90L2qGvCFf%2Fr2Ecy%2BPS3SQ9cKCvwgN0WZQfuFKwrwslhnShNLXT7s3sZcKDAJJAl8DrACJkGr4LlPAwDniIS9g4bAHh3jl6%2Bgzna%2BZWJFegqhro9aFz%2B%2FEVmMEcIXdyEfx5%2F7yfrpmQxktWjhctxTIdFLzZuArSnX5zYX3JU3SrZi8lpZOZkjAH36rFcRHkTlkddcIACmUU7ZWvDsvjpVpHNXnY65NTM7wMllEJDmEIB%2F0GB1YOjpERptWc%2B%2B9BP6qw3SS8JSixIMPRhq2GziY%2FRu8iRz5%2BVL7vokOtNz3c%2B6Iqlcku2iQCFtXfPQ%2FsL8nieuPdjZrlf8uu8p054hYwq4T5zAY6pgHkvLue5x2DJrsw8Oyjk2UYaunoMJNDCMskmAq0M5UClAkZWOq%2B4QT7edrC%2FQnvJkISzN8McOkgg5XK2oXSBIjX2d9tKsPXmfjziiBXFnDXQc9NiXIaatFOgsJCivMJchH%2BFpt5xrrMO6sXNDHvF9BbDBALtaVoNTT73YBjC0YNDv%2Fa7ly%2BNI1UzfroddEMiADrFFSR1fSR2wyztFOtqAnOpYtDfzf6&X-Amz-Signature=0a658bf4c348394cfcd6f31cae52e3254a1f81d9296e3a1309af80d3c803e3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DKVITP%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFDmoNKNM3rXlOobxLii3FcWM%2FTlNa7aA1GMZmMCH839AiBYaxydDPAL9qOvKZGPVZGezU8uppDP0C0tsp6Qsazdeyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMJxl3ENwP3VlW%2FMKZKtwDEV5w7dwJiJptzVdalQyhZhqIko40lUVSltutv5LdB%2B6RtuTYb7b3tvxESVgc8mZA8cro%2BfujNtkzDzNJcbTzewCOL88My3ccKOABZy6LtQBkd%2F88XCIdUsE6U%2FLUstwLN%2BC3sjmpaOEbgnuupAVT0%2FrFfshElCTAK1ZhypXAF0pbHc8tsz1z2HLZhM4Y29d38U98m8BcjFbZnEfBbFbbrOIza5V2M1Ywylmga6hp%2FUleXdVuPZrGqGqii3zPVbX%2FUgaiMLojxJsw%2Fbt02kL4rNXLrNg6MfOVwkJ1%2F90L2qGvCFf%2Fr2Ecy%2BPS3SQ9cKCvwgN0WZQfuFKwrwslhnShNLXT7s3sZcKDAJJAl8DrACJkGr4LlPAwDniIS9g4bAHh3jl6%2Bgzna%2BZWJFegqhro9aFz%2B%2FEVmMEcIXdyEfx5%2F7yfrpmQxktWjhctxTIdFLzZuArSnX5zYX3JU3SrZi8lpZOZkjAH36rFcRHkTlkddcIACmUU7ZWvDsvjpVpHNXnY65NTM7wMllEJDmEIB%2F0GB1YOjpERptWc%2B%2B9BP6qw3SS8JSixIMPRhq2GziY%2FRu8iRz5%2BVL7vokOtNz3c%2B6Iqlcku2iQCFtXfPQ%2FsL8nieuPdjZrlf8uu8p054hYwq4T5zAY6pgHkvLue5x2DJrsw8Oyjk2UYaunoMJNDCMskmAq0M5UClAkZWOq%2B4QT7edrC%2FQnvJkISzN8McOkgg5XK2oXSBIjX2d9tKsPXmfjziiBXFnDXQc9NiXIaatFOgsJCivMJchH%2BFpt5xrrMO6sXNDHvF9BbDBALtaVoNTT73YBjC0YNDv%2Fa7ly%2BNI1UzfroddEMiADrFFSR1fSR2wyztFOtqAnOpYtDfzf6&X-Amz-Signature=8949d6d637b13cbe8c8f207781bc47832050a7f4dccfb16d4ebe779c3cd48431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
