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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3HZYMR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOdXkfoBeul0AY1JBA%2F5up%2F%2FMucFI2qaydTvxWJe8uNgIgI00jCmiXPCJqEzVtdabN659aQ3OgiRxHKgatetwpqG0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDbUjkEVJjYXE6wCmSrcA2FB3MoDrFhSzQhGJi3ppqE8lAUA%2BKovCkdgKJ8VsgrwdFbnyUuYRv1YgYQLJp%2FX92d2cmbQutJdB%2BNKNbhFlp3w27dTBoCMSWJJt%2FvKUDm5NrWlDBTkeNds%2BAubSVeloteIXXFH6lbunE3Wz38J%2FuI9m1SDgzuHHaknzntw77PJxBis2iVPsVWBTXLk99M3jQdwkDHuJ%2FMMOtIyd86stY3%2BpgwgoVqrljN%2BqUmx%2FtjIu1xpU3BqeMJS96TJRj%2FbLdc6lPrz5YbVOeqqVELlgkgxdzij7apeHh0aC8Q1nkEz55ZGBk%2B%2BRwu6BVIx9Zz91xFRMJM8ynnL4FYW%2BVUJJGK9xUDE0UJUhG7nXTGme8F9%2BaVah0Wnwef7yOciQ3SslWIMoNUkc0hdda%2BKkLZVI%2FekvQjRyHwPDzwWc%2BiMsBzscRHKumZjgpDiU1FeqKPCWJ%2Bqe%2FFu61SCqXbZ0iZ%2FrypNKUndW4gpM90iw95ALrLhfNPFr479nlSI594VRbW9V91%2F3vYTeB0%2B6hqZFHhTWESZlYX%2FhKztztxzE9OfU5nU1gL%2FyMMIFYmJVdHBv52WeFU%2FMacrV%2B2qEWgnDZMkLBFNFSNICnWPyLatb8TnixQdxsMHPJXHIsSbzq7bMJ%2BEssAGOqUBQSfWftQzCnPlU%2Fg5%2FPSTuftEuZdnyqXWCMd9nLmkykX1RZgUCEVL2ckrNebRSC%2BVnEA40C0WQa2BkxC0VH6gR%2Bvq0Yc7n4DGs1JGImxX%2FPAdAhNgpiudrN9s8Pus%2BdXJwhDV5hvdg8%2BnDMRzyAGOvPGTy0E6n9pclHoDjMhwW5jc3apsmRBXWtg%2Bmls8O9pQ1c2VF20fv2RiJbZgnNjn1uL0duYX&X-Amz-Signature=e5c043276f0d5b6f1807711c96b68d7534e20fecaaaac9ec8786ebfa70661327&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3HZYMR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOdXkfoBeul0AY1JBA%2F5up%2F%2FMucFI2qaydTvxWJe8uNgIgI00jCmiXPCJqEzVtdabN659aQ3OgiRxHKgatetwpqG0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDbUjkEVJjYXE6wCmSrcA2FB3MoDrFhSzQhGJi3ppqE8lAUA%2BKovCkdgKJ8VsgrwdFbnyUuYRv1YgYQLJp%2FX92d2cmbQutJdB%2BNKNbhFlp3w27dTBoCMSWJJt%2FvKUDm5NrWlDBTkeNds%2BAubSVeloteIXXFH6lbunE3Wz38J%2FuI9m1SDgzuHHaknzntw77PJxBis2iVPsVWBTXLk99M3jQdwkDHuJ%2FMMOtIyd86stY3%2BpgwgoVqrljN%2BqUmx%2FtjIu1xpU3BqeMJS96TJRj%2FbLdc6lPrz5YbVOeqqVELlgkgxdzij7apeHh0aC8Q1nkEz55ZGBk%2B%2BRwu6BVIx9Zz91xFRMJM8ynnL4FYW%2BVUJJGK9xUDE0UJUhG7nXTGme8F9%2BaVah0Wnwef7yOciQ3SslWIMoNUkc0hdda%2BKkLZVI%2FekvQjRyHwPDzwWc%2BiMsBzscRHKumZjgpDiU1FeqKPCWJ%2Bqe%2FFu61SCqXbZ0iZ%2FrypNKUndW4gpM90iw95ALrLhfNPFr479nlSI594VRbW9V91%2F3vYTeB0%2B6hqZFHhTWESZlYX%2FhKztztxzE9OfU5nU1gL%2FyMMIFYmJVdHBv52WeFU%2FMacrV%2B2qEWgnDZMkLBFNFSNICnWPyLatb8TnixQdxsMHPJXHIsSbzq7bMJ%2BEssAGOqUBQSfWftQzCnPlU%2Fg5%2FPSTuftEuZdnyqXWCMd9nLmkykX1RZgUCEVL2ckrNebRSC%2BVnEA40C0WQa2BkxC0VH6gR%2Bvq0Yc7n4DGs1JGImxX%2FPAdAhNgpiudrN9s8Pus%2BdXJwhDV5hvdg8%2BnDMRzyAGOvPGTy0E6n9pclHoDjMhwW5jc3apsmRBXWtg%2Bmls8O9pQ1c2VF20fv2RiJbZgnNjn1uL0duYX&X-Amz-Signature=2c9be43c9574b68678e6b4a3e499e065cbd40b70af8241c85fc773461a168667&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
