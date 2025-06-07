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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR6BIUK7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpDiD55R46c5VVgCK%2FYKlfbDpP%2BL7B7lxrvjIazNn5fAiA49Dxi7lqLiEQ1tfZyNE3nsZvQWSTq0vgR0jkuWCH9mir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOav24zRmodbomGClKtwDr8Eq06VQ1H1b30JpFq6EPaG1JkkyS9JMur1qOIDgSDSKOn%2Fpv78jSBEk1X8I4lm5s%2Bx0sGkHYVr%2BpyTYoJAJqtGcmoCqTzjV0eu0rP0u6DpowNkkpJWMCEVcspgExzMx9QiTAUT%2BGcz4mt%2B7FUqFfvkspzgHVBctpWjZoFiM4jPCbICP6gHVMRPIRfTxx56TyXan1T6DsUx4OvFgAN%2Fr6B15d%2B8yHfPfVd7JI0BRUs3jHOhEenLkw55cR4lAm3IewKhZYm9tUPGag19y1D5k8rwGWNpKlU60Axi%2F24BOXnp%2Bwu2ZKv2CUVMyu6gnLIiONa4lR0phrR%2FyrGNoZAgvSid6v89iXoW7HDmCPTlCEbCpdQbP%2F%2F%2FWwdGuZPXfvoJ0IQZ5lV0lCW5%2BIHuwXwlm42rq7tjZEpuRMQWRv6zLwrkJHxg3ySMptHOern2Y9aRravm%2ByVCpBAQ6%2BCkQVTkUl2F52i2sPqDmLhKJSbzo2w61b5XBZIaYQ5RorB7gbc2XUK5062wDaqCuxlCt2Tb2bvYNe3YSia9Rkt26%2FXN0MVtYWg3ssNgpC75F6YsdiUT6VGvBXuM0%2FghdbY3jI6U%2Fj3yBNrJuL9OfZa4YJfOR7QOwX47i3vJ7zzilhrgwyPqPwgY6pgGKV14W%2BpcecCj%2BKm5747Z7poYLxc8JhVWb6lVWJx6uVt3FTuXOHO70gIa1VVdT4PiBB4F08HcF8QvAmXcxeWocwteiOhRRQg7RmRdF632xrfn6q%2F20Wt0XlXJQsyF%2BcmDB7D833CJv6T95sjTi1akLT8O2QNfcBSmOYtxH68Hork8LeIT9DzELrbCmXzewXJF1aMWJnXcdG7s6HKV8M817qrc3ulWY&X-Amz-Signature=9a44d331d4aeb543d364854c4297ee74a47f5921be9b012c38b493d61e0e3b98&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR6BIUK7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpDiD55R46c5VVgCK%2FYKlfbDpP%2BL7B7lxrvjIazNn5fAiA49Dxi7lqLiEQ1tfZyNE3nsZvQWSTq0vgR0jkuWCH9mir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOav24zRmodbomGClKtwDr8Eq06VQ1H1b30JpFq6EPaG1JkkyS9JMur1qOIDgSDSKOn%2Fpv78jSBEk1X8I4lm5s%2Bx0sGkHYVr%2BpyTYoJAJqtGcmoCqTzjV0eu0rP0u6DpowNkkpJWMCEVcspgExzMx9QiTAUT%2BGcz4mt%2B7FUqFfvkspzgHVBctpWjZoFiM4jPCbICP6gHVMRPIRfTxx56TyXan1T6DsUx4OvFgAN%2Fr6B15d%2B8yHfPfVd7JI0BRUs3jHOhEenLkw55cR4lAm3IewKhZYm9tUPGag19y1D5k8rwGWNpKlU60Axi%2F24BOXnp%2Bwu2ZKv2CUVMyu6gnLIiONa4lR0phrR%2FyrGNoZAgvSid6v89iXoW7HDmCPTlCEbCpdQbP%2F%2F%2FWwdGuZPXfvoJ0IQZ5lV0lCW5%2BIHuwXwlm42rq7tjZEpuRMQWRv6zLwrkJHxg3ySMptHOern2Y9aRravm%2ByVCpBAQ6%2BCkQVTkUl2F52i2sPqDmLhKJSbzo2w61b5XBZIaYQ5RorB7gbc2XUK5062wDaqCuxlCt2Tb2bvYNe3YSia9Rkt26%2FXN0MVtYWg3ssNgpC75F6YsdiUT6VGvBXuM0%2FghdbY3jI6U%2Fj3yBNrJuL9OfZa4YJfOR7QOwX47i3vJ7zzilhrgwyPqPwgY6pgGKV14W%2BpcecCj%2BKm5747Z7poYLxc8JhVWb6lVWJx6uVt3FTuXOHO70gIa1VVdT4PiBB4F08HcF8QvAmXcxeWocwteiOhRRQg7RmRdF632xrfn6q%2F20Wt0XlXJQsyF%2BcmDB7D833CJv6T95sjTi1akLT8O2QNfcBSmOYtxH68Hork8LeIT9DzELrbCmXzewXJF1aMWJnXcdG7s6HKV8M817qrc3ulWY&X-Amz-Signature=5112dc80dec199362bf843303b267c133966ab29e2baf7d5fb4335d93be7f3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
