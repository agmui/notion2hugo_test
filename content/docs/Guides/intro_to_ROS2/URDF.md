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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z23IZZBB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICMgWEx9s%2FFLGK9aUekiBl7HWZwAuqYvkDwZWZa7JwtRAiA4m7CHYzqooj%2FLU2px6KwgWsfFdKR3nPdnsrWBss1SSiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qypIPkyVdWaok%2BgKtwDqq63clze63H4fppV7%2FDCrhrFi5P5wf0Lc6EBraiAZ0tBJ4CB6ire4C7aTeC%2BUQZfamDJEHbTDM2jU5XPsjn1cV6LQp7Q9W4bZBCUph6nd7X4Y5Amm6byj4WwJUxMxpapNrOKFakZ%2BRuy1v%2FoXLNspjPW6LM%2FRF%2BpD3hDJLdgCKbA6lsAD2P0PpB6uQSyGOyLzAD9PBx1ULLglvpEehc0uyd1g2MG33scRmc5R5460H01xrp5sw1bLI3zc%2FsVbCg4DNXVwZd0d%2F7hKZlZCVtBw%2BbV50p4Rp%2BqAPz9gPJmPd2U0YAG1RZuTPs2E3ow5FBBp4sayYGsz9g2f0cvyptdL7dYjS8pcSYJbW8V9%2BRPrfjWHlCCDrrxPB4JLn2vvS%2Byzu73iJ1jy3cwhN2rBd99axxZccp9lqYjiVscN4m8SzSPBHvRfiX2JQBVudFUybR7dlfz%2FTe5wQeZsZXVurUplFbOkQqs25mtgtjJCT6eJbnHjJYKS74zNkJp4n8ewfp5cx7CIkKLMXfm%2B68gclBmaT3ELLQBHcmthGiikXLCNOml2XSLBYKS6godoH4Hde4tnaFUBT2ZKvyh6iZysPHjD5oqWeRsnDQlnC9g0y8%2BDPozm7k%2BVd5yyXdX%2FEAwkKSSwAY6pgHs1bC2ITIxjs%2B0fa6bsfJ3WLE96CKze8fBzMzdWLlZ8kZcl2OI%2FyskCiZ%2FAExqXuzDFJR8KxnsB7YK3bqp1%2FCYBp3azgKkjy6cP0xBJYK%2FgyIBFaUGsY4rrjK%2BICUFCDfEToNyyrI4Eolq0KwKfS8lVIs0F2cXr24%2FrmLi4npwxu4%2FLdz6M%2BMY8qr5MRR3uzJUvIwBPkPTndfEpidtpJNOktX2aXji&X-Amz-Signature=4168c67c26c4c81d18e7a4ab064e65b959fc7d9d34bf9f8f23b2f372cf268eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z23IZZBB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICMgWEx9s%2FFLGK9aUekiBl7HWZwAuqYvkDwZWZa7JwtRAiA4m7CHYzqooj%2FLU2px6KwgWsfFdKR3nPdnsrWBss1SSiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qypIPkyVdWaok%2BgKtwDqq63clze63H4fppV7%2FDCrhrFi5P5wf0Lc6EBraiAZ0tBJ4CB6ire4C7aTeC%2BUQZfamDJEHbTDM2jU5XPsjn1cV6LQp7Q9W4bZBCUph6nd7X4Y5Amm6byj4WwJUxMxpapNrOKFakZ%2BRuy1v%2FoXLNspjPW6LM%2FRF%2BpD3hDJLdgCKbA6lsAD2P0PpB6uQSyGOyLzAD9PBx1ULLglvpEehc0uyd1g2MG33scRmc5R5460H01xrp5sw1bLI3zc%2FsVbCg4DNXVwZd0d%2F7hKZlZCVtBw%2BbV50p4Rp%2BqAPz9gPJmPd2U0YAG1RZuTPs2E3ow5FBBp4sayYGsz9g2f0cvyptdL7dYjS8pcSYJbW8V9%2BRPrfjWHlCCDrrxPB4JLn2vvS%2Byzu73iJ1jy3cwhN2rBd99axxZccp9lqYjiVscN4m8SzSPBHvRfiX2JQBVudFUybR7dlfz%2FTe5wQeZsZXVurUplFbOkQqs25mtgtjJCT6eJbnHjJYKS74zNkJp4n8ewfp5cx7CIkKLMXfm%2B68gclBmaT3ELLQBHcmthGiikXLCNOml2XSLBYKS6godoH4Hde4tnaFUBT2ZKvyh6iZysPHjD5oqWeRsnDQlnC9g0y8%2BDPozm7k%2BVd5yyXdX%2FEAwkKSSwAY6pgHs1bC2ITIxjs%2B0fa6bsfJ3WLE96CKze8fBzMzdWLlZ8kZcl2OI%2FyskCiZ%2FAExqXuzDFJR8KxnsB7YK3bqp1%2FCYBp3azgKkjy6cP0xBJYK%2FgyIBFaUGsY4rrjK%2BICUFCDfEToNyyrI4Eolq0KwKfS8lVIs0F2cXr24%2FrmLi4npwxu4%2FLdz6M%2BMY8qr5MRR3uzJUvIwBPkPTndfEpidtpJNOktX2aXji&X-Amz-Signature=8d608e8a8b2491e286c5279f07ff162df261c6706556f6b760206498561a21ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
