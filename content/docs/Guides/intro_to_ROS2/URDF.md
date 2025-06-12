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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQWECBHI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBFP%2BSQG%2FIrAhwUNlb1NAWrgmZUQ%2F9N9w5IkMtQJlE4dAiBsdSMuEYOdbcGgpS%2BK%2FHjj31USx1XKImXMm4CntCoOqSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjlNwwoI38%2BRhYna6KtwDtYXwV7QuJpBRx%2B3LXF2h73NHOW2ktTmMj4v0mZyQXOOLm4YMzInXSBbCsP%2F1WHThYZQ9i05AcH3Y%2Bp%2BJVT%2FiHSqV1%2Fa0mJ8iJEQPdaSCl3o%2FoOpU3wgBeyRndesqidxUhBcqUyBIEbjfUScfyzbHpMsMzrVZSEWNaM13zgS8yhXI6ccEHJq%2Bon47vEQLpwqOvVKNge6wSkd2iQBEbREou09o2h00HIPeWzdsL2nGfhmSJBbDpV0wvQOTTx9l5EuxL1kVNhDFa%2F93op8dwLnNoe0%2F6dM9SEl0NO6DfX8RlF%2BWiLMi4nGm0VT2PuqLSrfdEGLqyeD%2B0zK0xMP6Xi6rQdppXCgoqmpBGJ1PFxkwdHOsx1jkkrsXmVMpesuLACUFOwDGCILE0aXGUpzyyyfKULFTklTkVzu6frbwLKInEvcUpmFoYktnjopA39zcvcuBN40%2F%2B%2BN5WKWWCAPDARpvLtk388jWqpoC9U%2FZxq1WLZkswk86MSNBpI%2FfzgL%2BCpUIqFEucwINvURBPlf8DMM6Ln%2BhQGjsocG5Et0MPwam6QYgKwnC6mujLTwDXhbVkig0Keg%2B61%2FEwZpNsHFze67DXGb5soDlO8gkKXy2l0yAutwYX5gi8i5Jz82pJZIwlvuqwgY6pgFKuULGYpB4bD2NpjaX8gqAWe%2Fi%2FmdPyQ6WVCamAyvwfUSzhxfpCknRK%2FXfrndL%2B%2BmkjTVNKG8OfYRKoPiCL4iivvV%2FBK1YzM7AKGilMO9Y0yumDgSsQlc0NW%2FO2DfZCcmYv5wifeYFY2KhOPDxc5w0aZnDuFY8CJwMlcekJpUuHl3rUXsX7PK5QhyJ7Enx2YNhO2TjULkDY0RfrSDWXOzCCMiK5hx%2B&X-Amz-Signature=5527e68ed26400853e8ea90b260294c120e7525c4c12954cea6849561c69ceba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQWECBHI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBFP%2BSQG%2FIrAhwUNlb1NAWrgmZUQ%2F9N9w5IkMtQJlE4dAiBsdSMuEYOdbcGgpS%2BK%2FHjj31USx1XKImXMm4CntCoOqSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjlNwwoI38%2BRhYna6KtwDtYXwV7QuJpBRx%2B3LXF2h73NHOW2ktTmMj4v0mZyQXOOLm4YMzInXSBbCsP%2F1WHThYZQ9i05AcH3Y%2Bp%2BJVT%2FiHSqV1%2Fa0mJ8iJEQPdaSCl3o%2FoOpU3wgBeyRndesqidxUhBcqUyBIEbjfUScfyzbHpMsMzrVZSEWNaM13zgS8yhXI6ccEHJq%2Bon47vEQLpwqOvVKNge6wSkd2iQBEbREou09o2h00HIPeWzdsL2nGfhmSJBbDpV0wvQOTTx9l5EuxL1kVNhDFa%2F93op8dwLnNoe0%2F6dM9SEl0NO6DfX8RlF%2BWiLMi4nGm0VT2PuqLSrfdEGLqyeD%2B0zK0xMP6Xi6rQdppXCgoqmpBGJ1PFxkwdHOsx1jkkrsXmVMpesuLACUFOwDGCILE0aXGUpzyyyfKULFTklTkVzu6frbwLKInEvcUpmFoYktnjopA39zcvcuBN40%2F%2B%2BN5WKWWCAPDARpvLtk388jWqpoC9U%2FZxq1WLZkswk86MSNBpI%2FfzgL%2BCpUIqFEucwINvURBPlf8DMM6Ln%2BhQGjsocG5Et0MPwam6QYgKwnC6mujLTwDXhbVkig0Keg%2B61%2FEwZpNsHFze67DXGb5soDlO8gkKXy2l0yAutwYX5gi8i5Jz82pJZIwlvuqwgY6pgFKuULGYpB4bD2NpjaX8gqAWe%2Fi%2FmdPyQ6WVCamAyvwfUSzhxfpCknRK%2FXfrndL%2B%2BmkjTVNKG8OfYRKoPiCL4iivvV%2FBK1YzM7AKGilMO9Y0yumDgSsQlc0NW%2FO2DfZCcmYv5wifeYFY2KhOPDxc5w0aZnDuFY8CJwMlcekJpUuHl3rUXsX7PK5QhyJ7Enx2YNhO2TjULkDY0RfrSDWXOzCCMiK5hx%2B&X-Amz-Signature=ef8f674084b1dc0511fb8a2985d1531317a6ab02ec75e6344aea1ff8423a1548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
