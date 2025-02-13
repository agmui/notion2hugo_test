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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSODDCR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYtf4MwKRrIQaBGfQxjw0Hn5p2v5gc7PRpjSrLGpMjpQIhALwEtPv%2FFYKCBeLTuX7aCOEaK2MzcJdWDR8MTGHqbfcFKv8DCB8QABoMNjM3NDIzMTgzODA1IgyBmrEAln94b3zj2ukq3ANOpv7%2FyOgA7hDyfREL15MuX9NGtntDLQXIiCsC54jH46OTuPW7YyPC4atrim13Z4w5MLYjL03Rjo%2B7t%2FaYzapW3ZyzC7DF7vXsswVheWnO5Xfb3IqRJaPZQSdtZn2Mis5h9FVkC5lu%2FvjgrpNaCHbLuTXd5WufW7L1MVYvrd7EnZUbZFznk%2FvgGOaHbtS5qE%2Bmsqmmf3Uezir3pftS5swgcm7Nwy%2BRTwlCg6wJ3oi45pGwjkBHhNVx3najklQ6%2BFrpcWPtvK5kxbjwaiydr923dofIXRsqc81SpuB1GFRt9WSgFqqlDyBkxQDwSUP%2BlmIeWEJ%2BYJA5VLrzYE7Y32hrIUUIBNPVICOdN6DF%2B4Fti61Su3NIqm4MdcWF%2BDseqfLpUwd8Y0lmN%2BeyhULdMCuz4zzm1CMJBzdk32aPBdceNnnBYRXY8pvtOG8pLvZ%2BnfjmmNSB2O78e2IEmo4rI1asBeFPC%2BeqJciqf9ML3TlPYVwHrGD2ueHTuZw8oZ7Z2clwM0kbnPQmx2dAAUuqtqlIXbFzfPg%2Bt7PoMeSXwZu538%2BWf7XPp59cP0k53HfBj3JIfANcZS0D0ouOHnOSk1Hm6TyOy%2Fm%2B3cDtRzAvHAhb%2FhNvfV3HugVkHBKOVzDX2bm9BjqkAYC3wa0LiLiMuKi%2B4fBfwZb%2B6DOKbvJzfEXfN0CNNRUr2AQdB7myNpi%2F%2FWtEd713qM1vAiXYT51NlWZnGWz%2FXTCAYnpH7APkeJiv%2B78MuV6QYOw25ARlwaR2VTU3gKzu2A38%2B70C5FHRC8bwJlx4Kq9eZrnGF%2FRd5AvPWcmY8cU5%2FE9qUZPqQYlfF5TQFDAzuWgffsYci1oQ%2Bnk9%2FvNAjh2wRLHL&X-Amz-Signature=047a1fb780c651cf909dadffb6b7c72da3a45ba8f8a96429aa099c3a52ce065c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSODDCR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYtf4MwKRrIQaBGfQxjw0Hn5p2v5gc7PRpjSrLGpMjpQIhALwEtPv%2FFYKCBeLTuX7aCOEaK2MzcJdWDR8MTGHqbfcFKv8DCB8QABoMNjM3NDIzMTgzODA1IgyBmrEAln94b3zj2ukq3ANOpv7%2FyOgA7hDyfREL15MuX9NGtntDLQXIiCsC54jH46OTuPW7YyPC4atrim13Z4w5MLYjL03Rjo%2B7t%2FaYzapW3ZyzC7DF7vXsswVheWnO5Xfb3IqRJaPZQSdtZn2Mis5h9FVkC5lu%2FvjgrpNaCHbLuTXd5WufW7L1MVYvrd7EnZUbZFznk%2FvgGOaHbtS5qE%2Bmsqmmf3Uezir3pftS5swgcm7Nwy%2BRTwlCg6wJ3oi45pGwjkBHhNVx3najklQ6%2BFrpcWPtvK5kxbjwaiydr923dofIXRsqc81SpuB1GFRt9WSgFqqlDyBkxQDwSUP%2BlmIeWEJ%2BYJA5VLrzYE7Y32hrIUUIBNPVICOdN6DF%2B4Fti61Su3NIqm4MdcWF%2BDseqfLpUwd8Y0lmN%2BeyhULdMCuz4zzm1CMJBzdk32aPBdceNnnBYRXY8pvtOG8pLvZ%2BnfjmmNSB2O78e2IEmo4rI1asBeFPC%2BeqJciqf9ML3TlPYVwHrGD2ueHTuZw8oZ7Z2clwM0kbnPQmx2dAAUuqtqlIXbFzfPg%2Bt7PoMeSXwZu538%2BWf7XPp59cP0k53HfBj3JIfANcZS0D0ouOHnOSk1Hm6TyOy%2Fm%2B3cDtRzAvHAhb%2FhNvfV3HugVkHBKOVzDX2bm9BjqkAYC3wa0LiLiMuKi%2B4fBfwZb%2B6DOKbvJzfEXfN0CNNRUr2AQdB7myNpi%2F%2FWtEd713qM1vAiXYT51NlWZnGWz%2FXTCAYnpH7APkeJiv%2B78MuV6QYOw25ARlwaR2VTU3gKzu2A38%2B70C5FHRC8bwJlx4Kq9eZrnGF%2FRd5AvPWcmY8cU5%2FE9qUZPqQYlfF5TQFDAzuWgffsYci1oQ%2Bnk9%2FvNAjh2wRLHL&X-Amz-Signature=66a447ded73583eec1db64f128ee79b5b0a9d350bb6716507adadf4658269517&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
