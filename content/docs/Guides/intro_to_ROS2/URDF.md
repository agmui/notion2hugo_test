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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=d6fa3676328608a1c124d5a8f4a406e114130cdca55e4de5a13dd8307e625666&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=b929ea0aaa75ec489fc1050e51bc9832b049efa79862eebbcd82083d95c8f18a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
