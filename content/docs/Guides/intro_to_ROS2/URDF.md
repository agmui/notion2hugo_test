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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXYPHDE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAwUPPbCHtI0TbVG%2FbFSnzl4CiCQDarAKaB8YrtmKT0NAiAkVVp9jiyL%2FcA33sAPIAOKmxViqhJHMpUFXMTYR7vnkCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIUypZ1szYOrCFb6yKtwDSpNMH9BpzStHuLG1aHJ8y9H05pexOzed%2F9d7C%2FtSGDySc8YoLWtQMABRAz9abbXnf%2Bg%2F9FCgyilgFGU1oe%2BsGJ9tdEHfFAoJyK3G%2F%2BDEPooenGDCLgbKlFT2JqaLRDfH4RI60ozSzpCIGrVfiN88Gx5xZ24mBKrYAyIbOnlN1sCo4SYuG5XJdBmjq5c45aShUIr0KUwpkAMNOOM8w8dX6nbyUDetwhIOj6UAlh04cxvNejOXqrwMjulvLlpeYJEc%2FReBFLXmp8UH2cdhIShp5vCRZKdAnKr7QjivTDtGxYtOrAAQxNDMhr0dZqVheZmpt5BwrWGjoH5IrHudJ%2BjmJd%2FwVbR5%2FHC5nxWF5mtCNfZC3egG7BdmJ1nuTuILXI1n90qxR%2Fb1L13ZXCREIpKuHVJo22cusEJPYNVLMdE0RUA54bWd1MdsVCN1DLfaGyuslb5Sv3ouvoF7jM%2F5zFFZ%2Fr6A5eLCZ9n1eqM1%2BvQ2Pt8zY57IX7OA9zHORurTC9XXwk6Mar9467K1JzXHgHawUlr%2Fey9yHi0%2BL%2B%2Fx4sN6X9VXHXMyaqGcZ5OFTJjTn55SNjcBHMOz6kdkkvKOqeN1RmxCvX6zzDLS9iWRXMtFKbSAl7d6xXyYs%2FLYMJAwq%2FPBvgY6pgH7X%2BN9oEpMqnaAjX9g3XqYWhHDooVn6uNPgPblCciSohZ6XaRxSXgnhxByWkmvcr13BOMY0tXrA3b7aauUv05nwsp2QB1R2BFKFKWam2u5rXZB%2F4zmy7gENALlwn%2F4d%2F0RDLKG7KUgrsSYg8L1DNbJpo08S2huH7c2SpI2ATAVgw4zLBHuFCd6hvChQWgrEpYWqAxtyrSH9y%2FzT%2F5R9O8rq1ZRyVFR&X-Amz-Signature=f16b3b6471a341b896dc114c1b03db4b87d5405ae538a197e8004c549e638112&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXYPHDE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAwUPPbCHtI0TbVG%2FbFSnzl4CiCQDarAKaB8YrtmKT0NAiAkVVp9jiyL%2FcA33sAPIAOKmxViqhJHMpUFXMTYR7vnkCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIUypZ1szYOrCFb6yKtwDSpNMH9BpzStHuLG1aHJ8y9H05pexOzed%2F9d7C%2FtSGDySc8YoLWtQMABRAz9abbXnf%2Bg%2F9FCgyilgFGU1oe%2BsGJ9tdEHfFAoJyK3G%2F%2BDEPooenGDCLgbKlFT2JqaLRDfH4RI60ozSzpCIGrVfiN88Gx5xZ24mBKrYAyIbOnlN1sCo4SYuG5XJdBmjq5c45aShUIr0KUwpkAMNOOM8w8dX6nbyUDetwhIOj6UAlh04cxvNejOXqrwMjulvLlpeYJEc%2FReBFLXmp8UH2cdhIShp5vCRZKdAnKr7QjivTDtGxYtOrAAQxNDMhr0dZqVheZmpt5BwrWGjoH5IrHudJ%2BjmJd%2FwVbR5%2FHC5nxWF5mtCNfZC3egG7BdmJ1nuTuILXI1n90qxR%2Fb1L13ZXCREIpKuHVJo22cusEJPYNVLMdE0RUA54bWd1MdsVCN1DLfaGyuslb5Sv3ouvoF7jM%2F5zFFZ%2Fr6A5eLCZ9n1eqM1%2BvQ2Pt8zY57IX7OA9zHORurTC9XXwk6Mar9467K1JzXHgHawUlr%2Fey9yHi0%2BL%2B%2Fx4sN6X9VXHXMyaqGcZ5OFTJjTn55SNjcBHMOz6kdkkvKOqeN1RmxCvX6zzDLS9iWRXMtFKbSAl7d6xXyYs%2FLYMJAwq%2FPBvgY6pgH7X%2BN9oEpMqnaAjX9g3XqYWhHDooVn6uNPgPblCciSohZ6XaRxSXgnhxByWkmvcr13BOMY0tXrA3b7aauUv05nwsp2QB1R2BFKFKWam2u5rXZB%2F4zmy7gENALlwn%2F4d%2F0RDLKG7KUgrsSYg8L1DNbJpo08S2huH7c2SpI2ATAVgw4zLBHuFCd6hvChQWgrEpYWqAxtyrSH9y%2FzT%2F5R9O8rq1ZRyVFR&X-Amz-Signature=9d6b39746e71dc521f4e1ce7ab90e174031b2af924f31c9bb487bcd2be87e06a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
