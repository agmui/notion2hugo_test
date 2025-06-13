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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWO4CMMJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAx4OCwE3iSUaJH2IDprLG2a9vZqsnIhK0fvpoDdAiQqAiAQqtFTFFBzXITZwy82JoM0uPMu%2F7gnZJRWmFSpaSle1Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM4DQbEkVhZPum5u%2BGKtwDTmJk%2BL2DV5Khke6aldWhx8rlZYcsmY3usCxX9dQENv%2FpezVrh6uCTN0lPIBkHPN04Eu4iOTaELNUyvaLaCcRD2S4Gi%2FABYi9wYtvLSjO3OdREkEelGL%2BmZXK9cggcpqS%2FVFZTVnAKfnYPal6oyj4xbmm38RXQJZSZv1lCdtBMVl5YxtemioNeZzKjut8GmRPZnPA8tPH0%2FqG5IQEgg4YmX%2BkoWkjhuBcu6BYN0bbzSWVrdDWgabzdlRRNdI3C3Au43zSYajs6KKPNe7vDdJqKLX0wWvimkzVkvFp%2BZeZJkKBDWYEy2Fjdvw%2BLNhLqZyGguyNYuoxzeLartLv1qMgna6ott6zT1AqycOVO4mare%2FFWcaiH2EmjLuG9znRiQ5fEEX5Uv56f1cxevc8A%2BeX3iulacxF0Cx97Tu1TIJQrT7JjZVoyepKBSZEm3EsFKsKycK%2BGjn9yWgRxH2ktxJ9HplB91oeWtIxqnLvgqmIvDCGu1ebPYPSEcBTJJCG71w6mfMl05qeTqJ1nwtNdwQqifB6azMPRzZoREGE55BjXyZ4l7RzHaDY7I2BUvEPWRlDFktScJVCJE1iy9mDKbhLXRZsgb%2BjxwTeQSzkgHm85k%2B%2BoJs3FJcaNF86R2sw15exwgY6pgGUqf%2F2Ha%2BriIRu%2F97r88FxroEtz3ajTeZxKrrsDmqbUrxra9UugDJhH9Bo5petLGat0MchiCxvZshtYckv%2FEugMQRx8P93iU%2BCnVJ3%2FDAD28zYF%2Bpl7ewmT2UEVfwWqy4LJht1jvY2%2Bpn7PTiA6IVkz8zh0H3b6PHJiV5GP2u4cPnb88V4QHPYklCfKJcEQmQMnn9XEo%2BP9Z8IxE6sN4tWZW4ykHz2&X-Amz-Signature=f3609158df43d640f0e271a07e57fa60cdecd51eb4beaa9a6f7a66ee976c9098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWO4CMMJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAx4OCwE3iSUaJH2IDprLG2a9vZqsnIhK0fvpoDdAiQqAiAQqtFTFFBzXITZwy82JoM0uPMu%2F7gnZJRWmFSpaSle1Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM4DQbEkVhZPum5u%2BGKtwDTmJk%2BL2DV5Khke6aldWhx8rlZYcsmY3usCxX9dQENv%2FpezVrh6uCTN0lPIBkHPN04Eu4iOTaELNUyvaLaCcRD2S4Gi%2FABYi9wYtvLSjO3OdREkEelGL%2BmZXK9cggcpqS%2FVFZTVnAKfnYPal6oyj4xbmm38RXQJZSZv1lCdtBMVl5YxtemioNeZzKjut8GmRPZnPA8tPH0%2FqG5IQEgg4YmX%2BkoWkjhuBcu6BYN0bbzSWVrdDWgabzdlRRNdI3C3Au43zSYajs6KKPNe7vDdJqKLX0wWvimkzVkvFp%2BZeZJkKBDWYEy2Fjdvw%2BLNhLqZyGguyNYuoxzeLartLv1qMgna6ott6zT1AqycOVO4mare%2FFWcaiH2EmjLuG9znRiQ5fEEX5Uv56f1cxevc8A%2BeX3iulacxF0Cx97Tu1TIJQrT7JjZVoyepKBSZEm3EsFKsKycK%2BGjn9yWgRxH2ktxJ9HplB91oeWtIxqnLvgqmIvDCGu1ebPYPSEcBTJJCG71w6mfMl05qeTqJ1nwtNdwQqifB6azMPRzZoREGE55BjXyZ4l7RzHaDY7I2BUvEPWRlDFktScJVCJE1iy9mDKbhLXRZsgb%2BjxwTeQSzkgHm85k%2B%2BoJs3FJcaNF86R2sw15exwgY6pgGUqf%2F2Ha%2BriIRu%2F97r88FxroEtz3ajTeZxKrrsDmqbUrxra9UugDJhH9Bo5petLGat0MchiCxvZshtYckv%2FEugMQRx8P93iU%2BCnVJ3%2FDAD28zYF%2Bpl7ewmT2UEVfwWqy4LJht1jvY2%2Bpn7PTiA6IVkz8zh0H3b6PHJiV5GP2u4cPnb88V4QHPYklCfKJcEQmQMnn9XEo%2BP9Z8IxE6sN4tWZW4ykHz2&X-Amz-Signature=a91280098e88d050d86fe4203d332d10fa36af90aec466cc7195de28917c27e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
