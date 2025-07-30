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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TOAN4I%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxusW0dYI89gSig3%2FFVA51D%2FSvVBOuy73wpU7d%2FjjaswIgZslm25FNpiqbqGB8BRlgHcPRURpZrzrqiN4etI2xSBEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlEN%2B%2FUCwNoWJzyeyrcA%2ByViMbBzv6sUriGZf91cNWbNiM%2BZu9mYGKDcE9OHmplKuCZUTyFANAJ76m3JTYE3nPof%2BjSJWS8O3xha6pNi1J5gcekwWaAw6ZAtVCxlvTJRWdsC4R839nn040Pvoh1MOy1N6z37OO5IihnCfFYuBbx8Pv8ryFAYpWRVSr8GX%2FCYGM0XbIH4UfT3Ob5PufexH8i3fAun2nsBLvOMSMXXnGK8JNdkr0wJ0a%2FJUY%2F5rLGK2c2m%2FBmaGeghDZNIJBficM2bx%2B616NJd8AJ%2BZEPAB6VvAyM6QOKlMwth1%2F63uSay20Dv4ky9iDLXp4j6dngrFAGSWbEqVeIMeMpkSkzquSRXK%2F8a6hgZ47GECmUOM8U7R7%2F21o6cl4s0l2lr2Sia%2BPmS7jOy13Cqua4FBPrWbJgdMgVfEmqDRr8Wsb7n2YjmeTv7b6IfjctJvlPKZa%2F2gaKj58OzAeURTykXwBUypsAtL8%2BYmBZmaojaLBVEdy3wwGZ1DzyOUWjGhcBYYQ4XMT8ioWY4SJWmv2wDTqZ9aFBwPOPWMD746j7B4Vgpe5zYlOOZiQGhGd7%2B6EdbWJOzMIF%2BfdSaikPPdE1ZwBUSytk9OA8quPw9kuXB5ewicVSurmm8ZRCNwEq%2FP3gMJW7qcQGOqUBvuxSn0jnaiTHv5xaFsLHTRU5xvb1cCEg31AxDzhdVzV70q%2F2QNW6d2QxEebQrb1rcLLSvR6QUqPHpq72r8JbJxq7fXgV84o7M7dn%2FVNLCcUFK2HBsJ61Rqcwm9sfeeHMGQt4aJYbDdWrwKBOElOuxd0iPmGEZkIflUKWsXOCpQ1mo6h6NZblMsw8YJhybmf8vl8IWLz823McwaR4Tfsd0R7FbH7h&X-Amz-Signature=67df34959d95f6ee362867ed21f118f473bde57eef9b884f79886c8e3607181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TOAN4I%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxusW0dYI89gSig3%2FFVA51D%2FSvVBOuy73wpU7d%2FjjaswIgZslm25FNpiqbqGB8BRlgHcPRURpZrzrqiN4etI2xSBEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlEN%2B%2FUCwNoWJzyeyrcA%2ByViMbBzv6sUriGZf91cNWbNiM%2BZu9mYGKDcE9OHmplKuCZUTyFANAJ76m3JTYE3nPof%2BjSJWS8O3xha6pNi1J5gcekwWaAw6ZAtVCxlvTJRWdsC4R839nn040Pvoh1MOy1N6z37OO5IihnCfFYuBbx8Pv8ryFAYpWRVSr8GX%2FCYGM0XbIH4UfT3Ob5PufexH8i3fAun2nsBLvOMSMXXnGK8JNdkr0wJ0a%2FJUY%2F5rLGK2c2m%2FBmaGeghDZNIJBficM2bx%2B616NJd8AJ%2BZEPAB6VvAyM6QOKlMwth1%2F63uSay20Dv4ky9iDLXp4j6dngrFAGSWbEqVeIMeMpkSkzquSRXK%2F8a6hgZ47GECmUOM8U7R7%2F21o6cl4s0l2lr2Sia%2BPmS7jOy13Cqua4FBPrWbJgdMgVfEmqDRr8Wsb7n2YjmeTv7b6IfjctJvlPKZa%2F2gaKj58OzAeURTykXwBUypsAtL8%2BYmBZmaojaLBVEdy3wwGZ1DzyOUWjGhcBYYQ4XMT8ioWY4SJWmv2wDTqZ9aFBwPOPWMD746j7B4Vgpe5zYlOOZiQGhGd7%2B6EdbWJOzMIF%2BfdSaikPPdE1ZwBUSytk9OA8quPw9kuXB5ewicVSurmm8ZRCNwEq%2FP3gMJW7qcQGOqUBvuxSn0jnaiTHv5xaFsLHTRU5xvb1cCEg31AxDzhdVzV70q%2F2QNW6d2QxEebQrb1rcLLSvR6QUqPHpq72r8JbJxq7fXgV84o7M7dn%2FVNLCcUFK2HBsJ61Rqcwm9sfeeHMGQt4aJYbDdWrwKBOElOuxd0iPmGEZkIflUKWsXOCpQ1mo6h6NZblMsw8YJhybmf8vl8IWLz823McwaR4Tfsd0R7FbH7h&X-Amz-Signature=767522b3cc010ccad05b654f6e7c6ce036e378ffa4f5b0b420cb35d16ee2b300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
