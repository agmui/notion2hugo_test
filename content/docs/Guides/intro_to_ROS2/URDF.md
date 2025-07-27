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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFKKB2E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4o0yw9E%2FpK2C7LoTYrjvirXEObC8ZmMb%2FJo6NwqxaHAIhAJ9I92Vexhaa8U06Ve%2BlfbpZvGgvT5%2FDNGnKlwdCmGZyKv8DCHIQABoMNjM3NDIzMTgzODA1IgxOouCMxx9ODQmyKnUq3AN4%2BI%2FvjkCNY2vVan08iXXKvu1X5QEbtEvyb%2FL5WVtuftCLC1FsOAjRNvZIfwMlWBMGt2MLlgsrhjY%2F095Y3ztgLmv5vp%2FQM6edFy2QwdK9rzgL8nnD2oKO%2B0h%2BafmfPdy4M1q51Ood2Ya%2FrXfPdOVj%2FeTXf1OfZQGreRSxx4jwM1gAi4hVroY%2FVpDWKnCE6tf6BdetrA6%2BYYQo6d4WZ6iMffVlQ7x74i9YGyaq32Rk1ITGfTGISOvHW7T60fjQji9%2Fsb4f%2BTWSuVUmapQa%2FgrcIXMRO0D6Ka3YpRh%2Bi99LspHQ4b0O6PQCZU7Jl604zNwrmOF9ubO0NMsTjT17K1KNPuMJWHfdriVOPzt%2B%2Fid5ir90OAFpQ2covXB5hU6jKgItDDKqx1L9bva6LR1A0qbSsj5FhhFApgRpvCeU6E5vUpJoUzRfmYpvg30kXzTo2h9EOvBGVvzZmkuBzPW%2BTsc8e6wnk8uA0McdV%2F4aBTSSuaHKwCZOfhByKMUBDvLDD9cUJ9lRb%2BHXJAKickppOd%2B%2B5sYfAQlCKqIJIk5MC2QcIxQDydAoVijBOPfIdkEAljegJfF94hvGjvt5oW1d1iokURtEoXOXb8qamrJRae3YOLY2hTG2F%2FY8anIDGjCs35fEBjqkAQzXbhlT443b9R%2BsSIGSF6OV2lgsAzEDC7GE3dO7tUGJZ%2Fpl07U5dI3lcs4FhjiOkKUAj7DBpDF79l5ozyRERScitMSBLbCOWrwCIHu8roOtjwoEF6EtKAC6cvsskve1KJpRbsa0i6zJZalNU3DDnyqr9Lxci4wu6xY2YaYYKMEQ5HYN6hlV3DUm2wIr7SkOEo%2F7KTRjcrWzivNCkhV6RvzHo7Um&X-Amz-Signature=f327dd0397ced547c5c80a3c2b092be24be7d708cb4ec3d49271aa7e6bc2f521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFKKB2E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4o0yw9E%2FpK2C7LoTYrjvirXEObC8ZmMb%2FJo6NwqxaHAIhAJ9I92Vexhaa8U06Ve%2BlfbpZvGgvT5%2FDNGnKlwdCmGZyKv8DCHIQABoMNjM3NDIzMTgzODA1IgxOouCMxx9ODQmyKnUq3AN4%2BI%2FvjkCNY2vVan08iXXKvu1X5QEbtEvyb%2FL5WVtuftCLC1FsOAjRNvZIfwMlWBMGt2MLlgsrhjY%2F095Y3ztgLmv5vp%2FQM6edFy2QwdK9rzgL8nnD2oKO%2B0h%2BafmfPdy4M1q51Ood2Ya%2FrXfPdOVj%2FeTXf1OfZQGreRSxx4jwM1gAi4hVroY%2FVpDWKnCE6tf6BdetrA6%2BYYQo6d4WZ6iMffVlQ7x74i9YGyaq32Rk1ITGfTGISOvHW7T60fjQji9%2Fsb4f%2BTWSuVUmapQa%2FgrcIXMRO0D6Ka3YpRh%2Bi99LspHQ4b0O6PQCZU7Jl604zNwrmOF9ubO0NMsTjT17K1KNPuMJWHfdriVOPzt%2B%2Fid5ir90OAFpQ2covXB5hU6jKgItDDKqx1L9bva6LR1A0qbSsj5FhhFApgRpvCeU6E5vUpJoUzRfmYpvg30kXzTo2h9EOvBGVvzZmkuBzPW%2BTsc8e6wnk8uA0McdV%2F4aBTSSuaHKwCZOfhByKMUBDvLDD9cUJ9lRb%2BHXJAKickppOd%2B%2B5sYfAQlCKqIJIk5MC2QcIxQDydAoVijBOPfIdkEAljegJfF94hvGjvt5oW1d1iokURtEoXOXb8qamrJRae3YOLY2hTG2F%2FY8anIDGjCs35fEBjqkAQzXbhlT443b9R%2BsSIGSF6OV2lgsAzEDC7GE3dO7tUGJZ%2Fpl07U5dI3lcs4FhjiOkKUAj7DBpDF79l5ozyRERScitMSBLbCOWrwCIHu8roOtjwoEF6EtKAC6cvsskve1KJpRbsa0i6zJZalNU3DDnyqr9Lxci4wu6xY2YaYYKMEQ5HYN6hlV3DUm2wIr7SkOEo%2F7KTRjcrWzivNCkhV6RvzHo7Um&X-Amz-Signature=7c5d93f6753b0e3febed5df2cce957ac0c90bd0cfc007fd585acdfa74c7b741d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
