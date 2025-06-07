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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5NYW4G%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTdbuYzuT4AhHiX2xd4PO%2FeTd5cAudHudoKVJVfrVf7gIhAIEtXv0CN5jupYJblqq0ZASCht%2BSRbO630npqekS1snlKv8DCHUQABoMNjM3NDIzMTgzODA1IgwygFPBpr1%2BMYdJLxAq3AMt%2B9x7LRBAbBSC4%2F2WjMme6Qyj2JJW8ewN9gJxoATL2Pvm6tm%2FOmzoJDTecWdyfVkNIBVZsDAYtuQAfGUGenNmcciJCBaS7LwgPiROmq6C4sJqAAO%2BHW%2FuIhemzVxk4oMT1Ud8cdPoK9%2BU%2BOlvWUr6G5sR6dvQ54wPKituQRV8vrGgvlqVuRxE2OYlHFr2DFH0skLajHj4q%2F5XVYkQdClsOcRf7x5iXN9IC8z2zAyLETUoFDZylSa5%2FL7%2F1khWIl9Zw4ekmzDJ2HZK%2FSdMpIPJqza9yw9aHod3NlxMAljqX51lrjR8RSb3gHuxQbVYyQe6uc6aaF%2BBfeMQJfC50oYIzg16wHqmtvqyK3zBsQM1aPqNI8RvyukcT7%2BfTQW531ZtYAK00H9z22aTGP9htNkIwZ5Ln2kNbdPWJBSz4hD3yWLM2c%2F%2FSbXxesIYw1dtIOe2%2BtHStdRZNW9JdNB0W8VGIas%2FaFBPiyZ0AbcpVnaKJTjKAqW8OEhAxy1kSqDvps86HQm8%2BXbl6UUEVy8%2BuimIxZiadp5TzumC9eppjoK49y7kwZo9oRmN1x%2Fkaz6%2FQ%2FfPqdIjO6E3i4GiXdj8xNTuht5kobc6odXkk9caYlx2cdtOs6JthF9JyYwVPTDsxZDCBjqkAewSgAwLNU5jlxj16B0tqc3mSPt38geWQ5UryQQS%2BlB4bTh5RARuteNVctk7Osfl34mfE%2BVKXforj71v2jSc2XU2hzyN8pZFAcd8wEerLxBws6iDQwsFy0LbA5OyU4XDOfAWryrPQI8xL3ePCOe%2FIjxB1R%2Fp9WNQdEg6LtfpzISBa9CW%2BE1ZWutP9JZxsSZUuyNYbCGJjoIP3GL9f5pfLNgDHaOd&X-Amz-Signature=3e3ba39b714f270ca18437a3d6cf6eee0ec09710ff9c3b7c90deedfd2362edd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5NYW4G%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTdbuYzuT4AhHiX2xd4PO%2FeTd5cAudHudoKVJVfrVf7gIhAIEtXv0CN5jupYJblqq0ZASCht%2BSRbO630npqekS1snlKv8DCHUQABoMNjM3NDIzMTgzODA1IgwygFPBpr1%2BMYdJLxAq3AMt%2B9x7LRBAbBSC4%2F2WjMme6Qyj2JJW8ewN9gJxoATL2Pvm6tm%2FOmzoJDTecWdyfVkNIBVZsDAYtuQAfGUGenNmcciJCBaS7LwgPiROmq6C4sJqAAO%2BHW%2FuIhemzVxk4oMT1Ud8cdPoK9%2BU%2BOlvWUr6G5sR6dvQ54wPKituQRV8vrGgvlqVuRxE2OYlHFr2DFH0skLajHj4q%2F5XVYkQdClsOcRf7x5iXN9IC8z2zAyLETUoFDZylSa5%2FL7%2F1khWIl9Zw4ekmzDJ2HZK%2FSdMpIPJqza9yw9aHod3NlxMAljqX51lrjR8RSb3gHuxQbVYyQe6uc6aaF%2BBfeMQJfC50oYIzg16wHqmtvqyK3zBsQM1aPqNI8RvyukcT7%2BfTQW531ZtYAK00H9z22aTGP9htNkIwZ5Ln2kNbdPWJBSz4hD3yWLM2c%2F%2FSbXxesIYw1dtIOe2%2BtHStdRZNW9JdNB0W8VGIas%2FaFBPiyZ0AbcpVnaKJTjKAqW8OEhAxy1kSqDvps86HQm8%2BXbl6UUEVy8%2BuimIxZiadp5TzumC9eppjoK49y7kwZo9oRmN1x%2Fkaz6%2FQ%2FfPqdIjO6E3i4GiXdj8xNTuht5kobc6odXkk9caYlx2cdtOs6JthF9JyYwVPTDsxZDCBjqkAewSgAwLNU5jlxj16B0tqc3mSPt38geWQ5UryQQS%2BlB4bTh5RARuteNVctk7Osfl34mfE%2BVKXforj71v2jSc2XU2hzyN8pZFAcd8wEerLxBws6iDQwsFy0LbA5OyU4XDOfAWryrPQI8xL3ePCOe%2FIjxB1R%2Fp9WNQdEg6LtfpzISBa9CW%2BE1ZWutP9JZxsSZUuyNYbCGJjoIP3GL9f5pfLNgDHaOd&X-Amz-Signature=46aff078afc6bfdf97d6bfb57320c00d6965484cc64c09ae9852cde4a02d2437&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
