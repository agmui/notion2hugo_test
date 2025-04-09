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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAR275S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCG1cg7tY%2BegYu%2BDhsxKvfawcQ8RbP%2FaI8xYwoTO5RBfgIhANQ%2FE1%2FrYgGUqb6pJ%2F0tgMtHg1i4Fuhqf72VAHhlifCpKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfagQFIpUACC78GUgq3APFmdrDTMcRaYoqAVmKpm1%2BQCjPBHMgOQLIMXRb0CP%2FcWRmxskUvcI1L1v7OJSVb6z4i%2FOMNmfdpHGfpIsP3IDsAz10B4rgZSZcVuDxi0EuoIUtq4S1SBi142Q7UL06ArBYRuCExQGNKp%2FCIfT9Qb9oFGRBr4qCwKiVW%2BHmQ72wqs1yzQgGcaLnVk%2By6t174n2H%2BR6ispHYzIdPm%2FvuKJa1a0vAqTlTF7felxukWl6so8nEysYPUjFwiHpE1UszT8520l2XRYv1wJBrUdyxP%2BBxTVHsGbNAjB79gvhGOPexx3%2B8RPFvG%2BhIoFnTBRsBmZP4cY6Z5Royh6Wc3FmlJAcUuxfAFyAPCGLTMWw2z6kP87V3HNe0yxNZhKi%2F99Nwnjy%2FAPk4heYfEctdFrLsanco6KVrjUMim19WONoHGL7mCkTxrt2aWEPLqi6lBJmoxtz12UP3gPR12XrBWd05JdWsmnSozAS3fKCL0HcM4GWO2d1rYfSk97ScdRr3Xrtv9kPrWGAMm4e4dZhY1RsGTdHk7Qi2bhh0ZyxUICkWVZnTqYHBymToX7gnH%2BUt1ii5CZV5xjHuncrOGNQ7nRCe%2Bqigw12ZTOQ6HYbo%2B%2Ffv2%2FZdyAYppLQPjfPDeH1tGTD6yNu%2FBjqkAX883R2HoeZBxXMFuDPB55f9PtZDC2hhldKDX8jm3%2F%2FWCpuV%2BhZMq96KraceBCllQs02scOs8fZ9bESnIy6cwXO5MiYDF1UfUuPgffJnHzU2rsZh%2FYRKbbDAegXFLfxih0P1ELapmvqIYYGZpj%2Brx7lgmJCS%2BgtyUVag%2FBLq1%2B13qmZpgS4RWW19Bk%2BvXa4x7oYfRWJGBVa0rlF19b6nehAp03gl&X-Amz-Signature=1641532cc69015247e140a3d8c97845af8431535acfa4f942ec4141270e350c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAR275S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCG1cg7tY%2BegYu%2BDhsxKvfawcQ8RbP%2FaI8xYwoTO5RBfgIhANQ%2FE1%2FrYgGUqb6pJ%2F0tgMtHg1i4Fuhqf72VAHhlifCpKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfagQFIpUACC78GUgq3APFmdrDTMcRaYoqAVmKpm1%2BQCjPBHMgOQLIMXRb0CP%2FcWRmxskUvcI1L1v7OJSVb6z4i%2FOMNmfdpHGfpIsP3IDsAz10B4rgZSZcVuDxi0EuoIUtq4S1SBi142Q7UL06ArBYRuCExQGNKp%2FCIfT9Qb9oFGRBr4qCwKiVW%2BHmQ72wqs1yzQgGcaLnVk%2By6t174n2H%2BR6ispHYzIdPm%2FvuKJa1a0vAqTlTF7felxukWl6so8nEysYPUjFwiHpE1UszT8520l2XRYv1wJBrUdyxP%2BBxTVHsGbNAjB79gvhGOPexx3%2B8RPFvG%2BhIoFnTBRsBmZP4cY6Z5Royh6Wc3FmlJAcUuxfAFyAPCGLTMWw2z6kP87V3HNe0yxNZhKi%2F99Nwnjy%2FAPk4heYfEctdFrLsanco6KVrjUMim19WONoHGL7mCkTxrt2aWEPLqi6lBJmoxtz12UP3gPR12XrBWd05JdWsmnSozAS3fKCL0HcM4GWO2d1rYfSk97ScdRr3Xrtv9kPrWGAMm4e4dZhY1RsGTdHk7Qi2bhh0ZyxUICkWVZnTqYHBymToX7gnH%2BUt1ii5CZV5xjHuncrOGNQ7nRCe%2Bqigw12ZTOQ6HYbo%2B%2Ffv2%2FZdyAYppLQPjfPDeH1tGTD6yNu%2FBjqkAX883R2HoeZBxXMFuDPB55f9PtZDC2hhldKDX8jm3%2F%2FWCpuV%2BhZMq96KraceBCllQs02scOs8fZ9bESnIy6cwXO5MiYDF1UfUuPgffJnHzU2rsZh%2FYRKbbDAegXFLfxih0P1ELapmvqIYYGZpj%2Brx7lgmJCS%2BgtyUVag%2FBLq1%2B13qmZpgS4RWW19Bk%2BvXa4x7oYfRWJGBVa0rlF19b6nehAp03gl&X-Amz-Signature=8cb370a5896051a399dd2492ede3a6323ed74f61e577150ca7dc702b4a4b2f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
