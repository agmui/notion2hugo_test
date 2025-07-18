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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDZGEKO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCmig90FVp7fR%2F6Re37cNlKExeKwI0HRN23FJzQh6CrUwIgWwxXQEJbT8dxsZhpnbEqzKRFJhpzKX2WenKbraru%2F2UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvdrbHXqDc0vVK5OircA28tO8azdJ%2Bd9iIic4BXkXUd2t3x47tI%2BSOwSNGFZ3ScUE4emDjy8ykDSyn36R0gpVob16oQm7aGPqDylL1a%2FAHOOks6N%2FTczaIm6AItr%2FqDBMKrHGnqqM0VIizjrTHVDhhKf3658FEEb67brSRAn4F6kIDfyC1kNKK9L%2Bn8OsKMvTgCb8aWS8%2FV5fiXh%2Bxm59Ono9l1cDgEHkPxiJBrMwf0S%2BCT0dLP6M4%2Fwk45FComavZg09vP%2FQ4hy5LtAffNiD8CIo2npGlRQtwGoc2T%2F3I0h7slIh00nyHv76jN9i1vk1HuyXnlmmE%2BnzjqxJczAUbqTQQIzeeOh1gq1RhkNewmX5Hjb0k%2BJGVsfVlrFRJJcuWPGi%2F4Z46iFh138WjUGPkkA4F1MauNFUAWSscCshthr%2B5OI728nO19Y9PrVgq0Q%2B5L4v4N1Qptz%2B0Qi9dM2%2BT4LAjq5Dm856CojjuLflwDrV9golQ845q1wli9sWt7kwiuQ%2Fdb4BxAXmGyxm89S3JkiL4uH9Tj%2BUiVIdAx0Crx5rq6TNtdZjpojkg23HDLHpfyPljVKJKjFTb85Xi6rqs2As2v4EQWV%2BFoXOsJNNaV4N151b%2BtOzQcjuMWS71qdkvDNQk2tA0iCI1iMPaZ6sMGOqUBKxeumbVnY7fZWkIYjK6l8N8K59KM4ShjDpAMB9AS%2FY2GgnDjSz3Ux62RdMwfs%2FQ0Elo47fqCiiZRJPEp5dKchC5ir7A8hhw%2BidpkGAbrLL9Fp23lV%2Ftf89%2FnT%2FRbr%2Fqy9p5vXcOGTWkdkIceEo8D1dZFgauba1zXG2H28NoYKi1nEyqJAN8RovJ7LsO1RLTSW3k4%2F3TquUmDJnDhNa5%2FpmvIrRVG&X-Amz-Signature=00d0c7d0e2040f295a7f1c4799ccdec072cdc2f2e8fa87a732e3dad1b3ea2934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDZGEKO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCmig90FVp7fR%2F6Re37cNlKExeKwI0HRN23FJzQh6CrUwIgWwxXQEJbT8dxsZhpnbEqzKRFJhpzKX2WenKbraru%2F2UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvdrbHXqDc0vVK5OircA28tO8azdJ%2Bd9iIic4BXkXUd2t3x47tI%2BSOwSNGFZ3ScUE4emDjy8ykDSyn36R0gpVob16oQm7aGPqDylL1a%2FAHOOks6N%2FTczaIm6AItr%2FqDBMKrHGnqqM0VIizjrTHVDhhKf3658FEEb67brSRAn4F6kIDfyC1kNKK9L%2Bn8OsKMvTgCb8aWS8%2FV5fiXh%2Bxm59Ono9l1cDgEHkPxiJBrMwf0S%2BCT0dLP6M4%2Fwk45FComavZg09vP%2FQ4hy5LtAffNiD8CIo2npGlRQtwGoc2T%2F3I0h7slIh00nyHv76jN9i1vk1HuyXnlmmE%2BnzjqxJczAUbqTQQIzeeOh1gq1RhkNewmX5Hjb0k%2BJGVsfVlrFRJJcuWPGi%2F4Z46iFh138WjUGPkkA4F1MauNFUAWSscCshthr%2B5OI728nO19Y9PrVgq0Q%2B5L4v4N1Qptz%2B0Qi9dM2%2BT4LAjq5Dm856CojjuLflwDrV9golQ845q1wli9sWt7kwiuQ%2Fdb4BxAXmGyxm89S3JkiL4uH9Tj%2BUiVIdAx0Crx5rq6TNtdZjpojkg23HDLHpfyPljVKJKjFTb85Xi6rqs2As2v4EQWV%2BFoXOsJNNaV4N151b%2BtOzQcjuMWS71qdkvDNQk2tA0iCI1iMPaZ6sMGOqUBKxeumbVnY7fZWkIYjK6l8N8K59KM4ShjDpAMB9AS%2FY2GgnDjSz3Ux62RdMwfs%2FQ0Elo47fqCiiZRJPEp5dKchC5ir7A8hhw%2BidpkGAbrLL9Fp23lV%2Ftf89%2FnT%2FRbr%2Fqy9p5vXcOGTWkdkIceEo8D1dZFgauba1zXG2H28NoYKi1nEyqJAN8RovJ7LsO1RLTSW3k4%2F3TquUmDJnDhNa5%2FpmvIrRVG&X-Amz-Signature=4eb6f9e9e97b445b73bbbd473887c7f99199caf8e1836bd21428998c03c51415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
