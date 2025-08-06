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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3NDGNA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFYtyTqpPPZVIy7c7s2A7GQM2RAwjNmVSIFqktelUWigAiEA31uXNuoAyrVmfV80pbCvtyIqbzMj%2FNedftT0IHX3KqYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAQcFpOUhDIXEBQ25SrcAznK159XDqwz2wMTVuYVq2wLhxeOFtaNwTRcB%2BYHBqperohuTq8Mk%2BuWayAy%2F%2BTw5OPY9KVbsQDujKZFKv2B3DAU74phokCDVafxbPrnfJIsKnJCS41OZkxSV1VBKpLA7gUDncE8jPXbtPnt3%2Fy%2BnH%2BqohaxLrJ2ckHsE1p0BDK93TgZ0uaDyDjKbnUh4tMVpdwAS%2FGWQmC5JaXwZdJoF2vs4KKFXiTyDKxiSM5NAo%2BRVi9WJ61zc34%2BceYXAmg1jp167FYSurcqqcJs7SwTCGIkFPl1xNpV%2BXqBrhE38s0uZtbw%2B8LSV22ULi%2FKfbAsLXEUzuYqFNBM7ufE0QljuL3d6ppjvlMPDJTAzhr8ZhnubdX2c%2BqGAn9B18EHCHR4eBRgbAD2Hm7kQcDUnmmPBWiAk0BXaVM7HOkLSEinzSBBBYDIPQS5%2B6a%2FTCxrUnyH8Ug98DtRktD254dbcDXV7UZ4IS0LBqFRK4K%2B5kGvo9OREDJ5UIX%2F2b8%2ByEdWU8rUTkP5fkOLTRsSBt%2F2sFEFzwrityjA9CCav%2F72NHlCrgmjJmZrMR6b9JhOb5AB1IH9yiGA6SQ7sLCI3xrtWomK9XBJ10%2BcQkXH6tkKDd%2F2crJtpzfsw2LzCAPUUm%2BiMK%2BXzMQGOqUBWvaAyDQ9y2%2B%2Frj5Ss0CtoZkUmFKmvVZvmvlruSyx2iQk8CJ1OA40dgHG48oHvZiieQCre4oyrsMq2ZA8I9%2BsaAMa02j3DS95YZH2lExJ1DLz%2BIo2%2Fz8mZdnHUxbk6FvExGzLUNiv6u1q69Rio40edK%2Bt8OEkJ2cXv7XM78SHmfnNajkBxEPzv302wQneM9EQQ%2F8Yafe7aEQyqfu0ENDoIOLFsBF%2F&X-Amz-Signature=c8dbb5b7bbc69cd28fdc8e57fd3ec81cba0e02c27626c6d3b5bae078055cb4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3NDGNA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFYtyTqpPPZVIy7c7s2A7GQM2RAwjNmVSIFqktelUWigAiEA31uXNuoAyrVmfV80pbCvtyIqbzMj%2FNedftT0IHX3KqYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAQcFpOUhDIXEBQ25SrcAznK159XDqwz2wMTVuYVq2wLhxeOFtaNwTRcB%2BYHBqperohuTq8Mk%2BuWayAy%2F%2BTw5OPY9KVbsQDujKZFKv2B3DAU74phokCDVafxbPrnfJIsKnJCS41OZkxSV1VBKpLA7gUDncE8jPXbtPnt3%2Fy%2BnH%2BqohaxLrJ2ckHsE1p0BDK93TgZ0uaDyDjKbnUh4tMVpdwAS%2FGWQmC5JaXwZdJoF2vs4KKFXiTyDKxiSM5NAo%2BRVi9WJ61zc34%2BceYXAmg1jp167FYSurcqqcJs7SwTCGIkFPl1xNpV%2BXqBrhE38s0uZtbw%2B8LSV22ULi%2FKfbAsLXEUzuYqFNBM7ufE0QljuL3d6ppjvlMPDJTAzhr8ZhnubdX2c%2BqGAn9B18EHCHR4eBRgbAD2Hm7kQcDUnmmPBWiAk0BXaVM7HOkLSEinzSBBBYDIPQS5%2B6a%2FTCxrUnyH8Ug98DtRktD254dbcDXV7UZ4IS0LBqFRK4K%2B5kGvo9OREDJ5UIX%2F2b8%2ByEdWU8rUTkP5fkOLTRsSBt%2F2sFEFzwrityjA9CCav%2F72NHlCrgmjJmZrMR6b9JhOb5AB1IH9yiGA6SQ7sLCI3xrtWomK9XBJ10%2BcQkXH6tkKDd%2F2crJtpzfsw2LzCAPUUm%2BiMK%2BXzMQGOqUBWvaAyDQ9y2%2B%2Frj5Ss0CtoZkUmFKmvVZvmvlruSyx2iQk8CJ1OA40dgHG48oHvZiieQCre4oyrsMq2ZA8I9%2BsaAMa02j3DS95YZH2lExJ1DLz%2BIo2%2Fz8mZdnHUxbk6FvExGzLUNiv6u1q69Rio40edK%2Bt8OEkJ2cXv7XM78SHmfnNajkBxEPzv302wQneM9EQQ%2F8Yafe7aEQyqfu0ENDoIOLFsBF%2F&X-Amz-Signature=241b759542158223370199a305f1667a1a0848364f1572b1579448f402bb7c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
