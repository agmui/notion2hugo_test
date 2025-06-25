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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZCRVS%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIB1rsmogzqKaO%2BAhY9PGeI%2FzzJ%2B688t23oEN2i6G0qbvAiEAk%2BGZ0gg1G0grbFGSwux4sjxFSx8AzTvNYP87NSFS6Eoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFnRCfeeAq1xwGY9%2ByrcA0NBbvxMbrWfGLuHYNWLR3AxyyG4JMUP%2F0W7WvPWHO2g0NGhAE1lmRNMQ6jdXDyrpR%2FMqzkxsVkifDWqj3%2Feqz09%2BCvnGk4oZsVvIi%2FCTK0bnHYTvTu5qcrPLAFsvgmjTKTMcclMclW92rwVprqrqwO9zIEUOp52Fi6PPcn9ytbQYEv%2BxbxhJijiXnWMq3k%2F5dna2IVklcWFEfAFlmJRKfFBWnuZ4ntJh5zTllaKAt%2Bc9BF73JWiNuHBCWhbhisnzs%2Bndhb0gXI707mK5FTny7nze%2FQ3p0IA1rxeI9B9UeJuP25T4biRwN4AUf%2F0Rqe1OzLDELpQGmCNCMzLbGyXGkXVcMYQ1b%2BXPKlN7CByFG%2Fyk9p727ox%2BqjCAFvQcJ9ocDyH7vUTKqLD5lFCsEMYwjPTu4Fd%2BTKC0onFUhv0Lq%2BcIXPP5SHbbu9ZXp3eQOt4ulcJckL3mXyW1JDS5c1D1cLNifCZuA2Gy0lK2IJJ3Znrr5Qg7kPp8MK0x%2BZv5Vt6pBLgHcg5AaMxKPa%2FWDMOS6LegaViQZi%2FWM3icO7DcgurzK34B0szrDhIm0SWeqaBIfJCQZKZKhY8%2FKTK0eKFkA2%2BpgywSQS%2BFMzrBxlnx0wWNmOxWgMmZgmNipv7MJDD7cIGOqUB2DZJhaWIkdafZeomiuOaSyK2YpzSMn9FtEEIPS7UYyqFsANn2HIy2GwW4%2BLxchyZ1oAaXQB6cJ942o%2FsHOzYEyxnmTaI3OfnBka9qzeXukEqMEf9ZleNljD8rZjbRNx8JLzuAnveFuWBAczYJkmBqkWib6lZT1aJ29RTHiu1lwKJR9txCRjad4DBszBXBK%2FTg0uje1bKFeFD3b3D3ZlLbTVEiC3f&X-Amz-Signature=042243eeb0147efe1a8e775a1e672780164b43761a131e66c7dae371e4e711ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZCRVS%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIB1rsmogzqKaO%2BAhY9PGeI%2FzzJ%2B688t23oEN2i6G0qbvAiEAk%2BGZ0gg1G0grbFGSwux4sjxFSx8AzTvNYP87NSFS6Eoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFnRCfeeAq1xwGY9%2ByrcA0NBbvxMbrWfGLuHYNWLR3AxyyG4JMUP%2F0W7WvPWHO2g0NGhAE1lmRNMQ6jdXDyrpR%2FMqzkxsVkifDWqj3%2Feqz09%2BCvnGk4oZsVvIi%2FCTK0bnHYTvTu5qcrPLAFsvgmjTKTMcclMclW92rwVprqrqwO9zIEUOp52Fi6PPcn9ytbQYEv%2BxbxhJijiXnWMq3k%2F5dna2IVklcWFEfAFlmJRKfFBWnuZ4ntJh5zTllaKAt%2Bc9BF73JWiNuHBCWhbhisnzs%2Bndhb0gXI707mK5FTny7nze%2FQ3p0IA1rxeI9B9UeJuP25T4biRwN4AUf%2F0Rqe1OzLDELpQGmCNCMzLbGyXGkXVcMYQ1b%2BXPKlN7CByFG%2Fyk9p727ox%2BqjCAFvQcJ9ocDyH7vUTKqLD5lFCsEMYwjPTu4Fd%2BTKC0onFUhv0Lq%2BcIXPP5SHbbu9ZXp3eQOt4ulcJckL3mXyW1JDS5c1D1cLNifCZuA2Gy0lK2IJJ3Znrr5Qg7kPp8MK0x%2BZv5Vt6pBLgHcg5AaMxKPa%2FWDMOS6LegaViQZi%2FWM3icO7DcgurzK34B0szrDhIm0SWeqaBIfJCQZKZKhY8%2FKTK0eKFkA2%2BpgywSQS%2BFMzrBxlnx0wWNmOxWgMmZgmNipv7MJDD7cIGOqUB2DZJhaWIkdafZeomiuOaSyK2YpzSMn9FtEEIPS7UYyqFsANn2HIy2GwW4%2BLxchyZ1oAaXQB6cJ942o%2FsHOzYEyxnmTaI3OfnBka9qzeXukEqMEf9ZleNljD8rZjbRNx8JLzuAnveFuWBAczYJkmBqkWib6lZT1aJ29RTHiu1lwKJR9txCRjad4DBszBXBK%2FTg0uje1bKFeFD3b3D3ZlLbTVEiC3f&X-Amz-Signature=0f48a2f98d0c3295ae29024f8bc56f999cc59a9e940a339850f26da8741cf302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
