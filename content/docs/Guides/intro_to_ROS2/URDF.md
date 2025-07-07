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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTX5ULO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHWk%2B7SPaCgP6uiQcTAxOGjtlCiKKS2MOvwsqOVy23%2FtAiA7Pu9VSabRSQ6j5XVlbFChQZABxzflwPxciadUKKJxpSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuwGje59XVemLReylKtwDd6uUwIQpLC1Vq643crHISvfRhYkWq%2BgOw6v7qWuMuPotdq6v0yVmlLWAjvd66%2BOtYhqK%2BHBvTpKbtnWeVFD5kn6wO15yJnncUpgZavwNRkM1mXoQ%2BXWxDoqmIlwyo4dzIf4cSc%2FjSCMgesXrbpEusWZ7zrsHNXMHzUa5rBG4ogC7JpchOIedYMOMgVPAD%2FeyYuMOboL2N5o4t4eaqCWtagVZCXKlZzgwNaPI6wH8U127YoS7CTJ8FM2G8PfyrV4O1Q1nQimsewhFHJXZnoZbups%2FbBSBBTUKHx2FAaPwReevV%2BpUwS652GCjA1GEIKj2uGAgQaOcvk2pkEAIylFQzewJnXABAQlvW%2FfAp%2BOMV0lyVso%2F%2BuRHqcOdZTONrzQo6yDbtaPKCwwG8EO4dfbTawt1FBiYP0mtMq6IJJg4mp22JJqul%2BMk8n%2B6vpgPK1NHAiIoRdGRQKKkgBsVcStAztKiZCrXRtSHqUPlLcTqTsQJfIGJxwoxDg4QQhsUFUqLG2LJGv61VDu8LzH2SJqVH8VVERrhKKFPUsZQT8m6Ajf%2BsmTEcZqBlgJ2U0fdXIagTxMSTCwVUNlwoMkx1MV5DfCBHc7xmfJz4ReKWK3KJWwEQ7PYNCtcS6emeS0whuqwwwY6pgG3Obai%2FROBDl%2B9mqIXCaFMns3ZS0vvunXAiayuaSpfibMrPf9t3efhl%2B1%2B8X2DQ42MywJ6BnvDDTra2ppzXbQoNQToiLeos8w9kiPfdVQsJ1eU5WhnKh5UBxYi8BGmvTp%2BY4lavdum2tXEhMn2ZN7xShRqpKOtH0Llbt24PWQWsTmziEblkohXgDXTRd5QNYlndLHTQ9dosEoK2idjT9i6N0QsfvGi&X-Amz-Signature=9c68cb8466cfe2d0ae208a613e33a338df3f813e990a1b7af6794f1fb170734b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTX5ULO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHWk%2B7SPaCgP6uiQcTAxOGjtlCiKKS2MOvwsqOVy23%2FtAiA7Pu9VSabRSQ6j5XVlbFChQZABxzflwPxciadUKKJxpSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuwGje59XVemLReylKtwDd6uUwIQpLC1Vq643crHISvfRhYkWq%2BgOw6v7qWuMuPotdq6v0yVmlLWAjvd66%2BOtYhqK%2BHBvTpKbtnWeVFD5kn6wO15yJnncUpgZavwNRkM1mXoQ%2BXWxDoqmIlwyo4dzIf4cSc%2FjSCMgesXrbpEusWZ7zrsHNXMHzUa5rBG4ogC7JpchOIedYMOMgVPAD%2FeyYuMOboL2N5o4t4eaqCWtagVZCXKlZzgwNaPI6wH8U127YoS7CTJ8FM2G8PfyrV4O1Q1nQimsewhFHJXZnoZbups%2FbBSBBTUKHx2FAaPwReevV%2BpUwS652GCjA1GEIKj2uGAgQaOcvk2pkEAIylFQzewJnXABAQlvW%2FfAp%2BOMV0lyVso%2F%2BuRHqcOdZTONrzQo6yDbtaPKCwwG8EO4dfbTawt1FBiYP0mtMq6IJJg4mp22JJqul%2BMk8n%2B6vpgPK1NHAiIoRdGRQKKkgBsVcStAztKiZCrXRtSHqUPlLcTqTsQJfIGJxwoxDg4QQhsUFUqLG2LJGv61VDu8LzH2SJqVH8VVERrhKKFPUsZQT8m6Ajf%2BsmTEcZqBlgJ2U0fdXIagTxMSTCwVUNlwoMkx1MV5DfCBHc7xmfJz4ReKWK3KJWwEQ7PYNCtcS6emeS0whuqwwwY6pgG3Obai%2FROBDl%2B9mqIXCaFMns3ZS0vvunXAiayuaSpfibMrPf9t3efhl%2B1%2B8X2DQ42MywJ6BnvDDTra2ppzXbQoNQToiLeos8w9kiPfdVQsJ1eU5WhnKh5UBxYi8BGmvTp%2BY4lavdum2tXEhMn2ZN7xShRqpKOtH0Llbt24PWQWsTmziEblkohXgDXTRd5QNYlndLHTQ9dosEoK2idjT9i6N0QsfvGi&X-Amz-Signature=97ffb65bfa447cf7cbaaac13f83fd5a9bb5d9dfaadd3228cf122dcc1a55248b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
