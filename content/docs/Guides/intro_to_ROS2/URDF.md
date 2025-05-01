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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663P3JHLW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHM4rZ7lZe5f8xzrzCLgfhV5cF9NQNmgdD8wOIkUD5%2BcAiEA31RbO3OpmVbrfnqk9bqTtUDOk2m1%2Fii0sAI6DOEnvosqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgy1YFF1twAiX06oyrcA4TzXa1qttg2jHmMZhVuoCoYe7g77kAtRhXkdAGG9oBCZvhPXZktJFWFnUBVhY8BLJwBOEOQtZ5YBMol8seY2pEE%2BiZnsjgba9PB52tmZ%2FIM8%2FzFpDHGVYb52SYlnnTxDLn0tZ4WtnUN46PmXUNiOeplu1Wgs%2BVaCkUbYN1CdvDiZrbYkmtqX%2BOGCkF85h%2F16yPblKGCwoZswenQurvZ6jEm7zJLqJBOPtqpfhDmpdMTWxH5z7FbpD6G%2FpAuYAnO8Jm0UvoTYm7S%2BSh6fZLw84aivM1ehXnmjs9g5m2%2FWW%2BqYnkMLBWTcBZZffYvmPga%2FufRlGbtL%2BnYiKPZ1L4roO3oD1LqGRe2eMa%2FXLx%2B1sNWnUG65Ptt12Inl9NC%2FABoOqroMk8RuljtoIr9D6qah2x2TcTgSe3g%2BtKKIv7n1e5lxZS8VPz9jnK8yP5KT8ZKnA7v%2F8FKrjpr%2BHl0FWrTTm%2BfioHofXKSCG4mQRaFFAPoa2ZieBX6q8psjM2Hdz%2BrhBMWC8XN60xIfArk%2FQ0VbNrFCMagvndGEHCmN2k68dBpQx83YAFmTwFhkwumHCBabUNhPI%2Fpf9aBrTaY23O8FGmLmwpqQmtMcyIFYy7tL6SDWWuJ18oPs6pIAG3TMMS9y8AGOqUBm%2B2H604DGqHILqiUygLbUzpaSlRvP34PpDpdgqWYRkx1pgOBcHFsBA7SmHoHzV3XMOlxEqc6VPvrgrTzKaG2CjqVtZp2LyuqvRI43LTBbJe7Yi8Lcm8gNHSpdO5l1Woa60XmfqD%2F59bGmOB1%2Bn%2FM2ctPqbn1c1%2FlcsI2FF1CUpIenauabUsWKhkO%2BGXlhWGrPYFTnWNY4EAS5an%2BsKwvnE9LiMfh&X-Amz-Signature=8119f08a549cefe265edc6f40e2f128d1cfa6dd712febf4f80da4dbdebde3496&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663P3JHLW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHM4rZ7lZe5f8xzrzCLgfhV5cF9NQNmgdD8wOIkUD5%2BcAiEA31RbO3OpmVbrfnqk9bqTtUDOk2m1%2Fii0sAI6DOEnvosqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgy1YFF1twAiX06oyrcA4TzXa1qttg2jHmMZhVuoCoYe7g77kAtRhXkdAGG9oBCZvhPXZktJFWFnUBVhY8BLJwBOEOQtZ5YBMol8seY2pEE%2BiZnsjgba9PB52tmZ%2FIM8%2FzFpDHGVYb52SYlnnTxDLn0tZ4WtnUN46PmXUNiOeplu1Wgs%2BVaCkUbYN1CdvDiZrbYkmtqX%2BOGCkF85h%2F16yPblKGCwoZswenQurvZ6jEm7zJLqJBOPtqpfhDmpdMTWxH5z7FbpD6G%2FpAuYAnO8Jm0UvoTYm7S%2BSh6fZLw84aivM1ehXnmjs9g5m2%2FWW%2BqYnkMLBWTcBZZffYvmPga%2FufRlGbtL%2BnYiKPZ1L4roO3oD1LqGRe2eMa%2FXLx%2B1sNWnUG65Ptt12Inl9NC%2FABoOqroMk8RuljtoIr9D6qah2x2TcTgSe3g%2BtKKIv7n1e5lxZS8VPz9jnK8yP5KT8ZKnA7v%2F8FKrjpr%2BHl0FWrTTm%2BfioHofXKSCG4mQRaFFAPoa2ZieBX6q8psjM2Hdz%2BrhBMWC8XN60xIfArk%2FQ0VbNrFCMagvndGEHCmN2k68dBpQx83YAFmTwFhkwumHCBabUNhPI%2Fpf9aBrTaY23O8FGmLmwpqQmtMcyIFYy7tL6SDWWuJ18oPs6pIAG3TMMS9y8AGOqUBm%2B2H604DGqHILqiUygLbUzpaSlRvP34PpDpdgqWYRkx1pgOBcHFsBA7SmHoHzV3XMOlxEqc6VPvrgrTzKaG2CjqVtZp2LyuqvRI43LTBbJe7Yi8Lcm8gNHSpdO5l1Woa60XmfqD%2F59bGmOB1%2Bn%2FM2ctPqbn1c1%2FlcsI2FF1CUpIenauabUsWKhkO%2BGXlhWGrPYFTnWNY4EAS5an%2BsKwvnE9LiMfh&X-Amz-Signature=ffd924335f889d5631cda8eeae7b1ff329b6445dd8a31301dd9168c07e657df6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
