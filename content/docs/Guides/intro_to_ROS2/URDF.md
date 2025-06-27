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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J47IJE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxLCEe%2F1VsqiggLLhiUBQjgaZCODWVZAkRw6vrmurygIgSVMSaN0hNw5h81qFvIDnihMuLdtSbepUFzU08Gk0pVcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE83kDfCKU9a2ZJm%2BircAzryHUfregMlJOs3AHfyao18tvSMYROTpIzcnxjs5KBfmjliX4T2N%2FpC40CiYytkbuTNjqTg4OpepHpwofXzbwhvXFkzCcfHs%2F9GfursIy26ZttQwrBNuV5gSMugDRB%2BEdnTcoVf2sRr%2FeWu%2FlSHOzPWzVr5yJ%2FwO9EOkjjzDPYerBg4daTIbC4LQmzECmRCP7p2IjdQyi8Im3pB3N9BLeKXpO0aNQihMMDUxu%2BGdn%2Fd1sc40BSVsGxTy4ybUgY6uoO0MYoqNYnDdNT7AibTIvxUMWJV%2B8SGSjwqZzmsoT454qo4totqWX8XQgVtQaOcw9LVV9eo4hI3PiRLv1Q%2FL03hhZeeHXr20%2FABOe2T1KMJSPW%2BtbGBOpO2C2sP7hgDEjeleNqU1WpZJ62IzZlKl8AJbXtSuFfPh07X4Cjoh3iUKFP3LbbiY6%2B9zpSL9ee09iDkKFS2FsT%2FsmjYji5KR9xOT32%2BC8ebUxlvCuylbvB0mCR%2FdSqMBs8MHHSQTIHaKeuousWl2z39R%2B7QxC4l52RI6hie%2BvZG6tnWn50jUsVLfEwy95q1OBgQLx%2FQLeX6Q5u9d1A4Q%2Fw1qCnybADTF84UaMKdJVtXuUdl0LzNzYOcVfBPO0VAJ6ifzkYJMJrK%2B8IGOqUB38bsd2fn2JsDtVSG5K8%2BQc6JFB5jR0BVD2n83APVPl8%2FoVPoOdOL5ZVUSUlohJlwOf%2Bzx1OmutDUuq9Qj4KN8wRb192wcJ5I%2BTh%2BkOhADwqAPDR6%2BfY77OAjbBg1sjEjUG%2BHd3StN5dE9Ljm3Cbey2n67T%2FE%2BwWz%2FVJ6QpOv4KzYMRg9xzqhdIbE0kFBVEVH4fIQTrF05TMgy0gqe6j%2FPztB59oe&X-Amz-Signature=9e447dccfdc3e1b41401e71e9f6d0da49569d69478d14db878cb143b4b1e7361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J47IJE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxLCEe%2F1VsqiggLLhiUBQjgaZCODWVZAkRw6vrmurygIgSVMSaN0hNw5h81qFvIDnihMuLdtSbepUFzU08Gk0pVcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE83kDfCKU9a2ZJm%2BircAzryHUfregMlJOs3AHfyao18tvSMYROTpIzcnxjs5KBfmjliX4T2N%2FpC40CiYytkbuTNjqTg4OpepHpwofXzbwhvXFkzCcfHs%2F9GfursIy26ZttQwrBNuV5gSMugDRB%2BEdnTcoVf2sRr%2FeWu%2FlSHOzPWzVr5yJ%2FwO9EOkjjzDPYerBg4daTIbC4LQmzECmRCP7p2IjdQyi8Im3pB3N9BLeKXpO0aNQihMMDUxu%2BGdn%2Fd1sc40BSVsGxTy4ybUgY6uoO0MYoqNYnDdNT7AibTIvxUMWJV%2B8SGSjwqZzmsoT454qo4totqWX8XQgVtQaOcw9LVV9eo4hI3PiRLv1Q%2FL03hhZeeHXr20%2FABOe2T1KMJSPW%2BtbGBOpO2C2sP7hgDEjeleNqU1WpZJ62IzZlKl8AJbXtSuFfPh07X4Cjoh3iUKFP3LbbiY6%2B9zpSL9ee09iDkKFS2FsT%2FsmjYji5KR9xOT32%2BC8ebUxlvCuylbvB0mCR%2FdSqMBs8MHHSQTIHaKeuousWl2z39R%2B7QxC4l52RI6hie%2BvZG6tnWn50jUsVLfEwy95q1OBgQLx%2FQLeX6Q5u9d1A4Q%2Fw1qCnybADTF84UaMKdJVtXuUdl0LzNzYOcVfBPO0VAJ6ifzkYJMJrK%2B8IGOqUB38bsd2fn2JsDtVSG5K8%2BQc6JFB5jR0BVD2n83APVPl8%2FoVPoOdOL5ZVUSUlohJlwOf%2Bzx1OmutDUuq9Qj4KN8wRb192wcJ5I%2BTh%2BkOhADwqAPDR6%2BfY77OAjbBg1sjEjUG%2BHd3StN5dE9Ljm3Cbey2n67T%2FE%2BwWz%2FVJ6QpOv4KzYMRg9xzqhdIbE0kFBVEVH4fIQTrF05TMgy0gqe6j%2FPztB59oe&X-Amz-Signature=ed40446911720a597038a47992d53607993017293267e3367d053dcd4b832ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
