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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=0260590b249605a48c9e27d3a7f4412c8bb5a4fd3c11794b63d4f0a010452566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=076d2920b6f6f3e03aae982a48d33f4c72fd421f236fbe6ff9d8b8a5f76a6626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
