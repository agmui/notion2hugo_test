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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3RHAOV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPbDwhgtMeLTsX6gU3HOQlR9cbSeexHUOp1BPnHxOXcAIhAKEP%2FQgK%2FkJp9BTkFCIrBBldmwIIojxUbPhCZwY5LUPxKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSvupQoUv%2BUZSK0YEq3APNO3JNFxC28SEINaFpDP9JpPufl66d97t0n8gdIve4QXcc7crzhKNHx3jyDZeWtl6WWWAsnOmGgX2%2BOXWuKvYXoePJlOA4ltnKJoO2AqtwvtyQLmB4eGC6kAFvpHfuVHahy8dltrh8LSu83X0LafLb9M9S06QlsLuqYO3js2bQLijvaGg1aUEIyU7%2F%2F1pQaHKLWlWbQ4Kzq%2FxDLK4v%2BILITbpq5GZE0cZ8S7w3RBPC0kVHavJtSbi8VeEDS6n920fn1bwYov1nM96mTNF6VrV9RX97UOWe%2F9cCb2T%2FVITC1BaZg1%2BWlLkp5ufwQ1zFXNj3uL7JB%2BBtWGuUXRTlxa0%2Ft6hjF1MnIxCuRSpw5%2FBBwd6JOswmPLMl0s98FeL%2F2tFLevMGksTv%2BPvotwm2pRfM3tivi15oeGt93PBoxhQOD%2FCJTvDkvBECsOnr6BKx6tk8JNKSN4qCMLtO9FfCqaBYRPJmTcfojzhXPTwD0DDzcKr6%2B4HKV6LJ720aWcmNv2KDSErJZq689H%2Fgbd5bPdd493l1RfUOdI0f2iJYTnn%2F7mjCYz0PDj3SILvQ5ZnzKGQXtOtU8301AUgZEdTi%2B6SVjVBf0G%2FLrNYZyeQA4l8U62Eyedb9FTAPWdJoAzDzi5y%2BBjqkAb679dCYTeQFM13118saDc2C5g8Ujr%2BbgOaNcQK%2BMeqCy4OliPYCi1D9EpyMA%2FZrguIoK9wP8WBsDx0XO%2BYFRE0ktII1F6Be7Gfm4m1FGyV6GmESPef5Ja2qse2roMJR8ge5hAe8VBiR%2B0CixZkZiPB1kKNGWWObc6EEtuiQXo4KH3FUGroHViszB%2F1xGtqY7m9Hmj%2BqBnlJTK75UcOfBLnDldRn&X-Amz-Signature=532d2ea9ec36c4c5973fdc4e99c75cfa23d2a7d2b538cce329f4e04665dde493&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3RHAOV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPbDwhgtMeLTsX6gU3HOQlR9cbSeexHUOp1BPnHxOXcAIhAKEP%2FQgK%2FkJp9BTkFCIrBBldmwIIojxUbPhCZwY5LUPxKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSvupQoUv%2BUZSK0YEq3APNO3JNFxC28SEINaFpDP9JpPufl66d97t0n8gdIve4QXcc7crzhKNHx3jyDZeWtl6WWWAsnOmGgX2%2BOXWuKvYXoePJlOA4ltnKJoO2AqtwvtyQLmB4eGC6kAFvpHfuVHahy8dltrh8LSu83X0LafLb9M9S06QlsLuqYO3js2bQLijvaGg1aUEIyU7%2F%2F1pQaHKLWlWbQ4Kzq%2FxDLK4v%2BILITbpq5GZE0cZ8S7w3RBPC0kVHavJtSbi8VeEDS6n920fn1bwYov1nM96mTNF6VrV9RX97UOWe%2F9cCb2T%2FVITC1BaZg1%2BWlLkp5ufwQ1zFXNj3uL7JB%2BBtWGuUXRTlxa0%2Ft6hjF1MnIxCuRSpw5%2FBBwd6JOswmPLMl0s98FeL%2F2tFLevMGksTv%2BPvotwm2pRfM3tivi15oeGt93PBoxhQOD%2FCJTvDkvBECsOnr6BKx6tk8JNKSN4qCMLtO9FfCqaBYRPJmTcfojzhXPTwD0DDzcKr6%2B4HKV6LJ720aWcmNv2KDSErJZq689H%2Fgbd5bPdd493l1RfUOdI0f2iJYTnn%2F7mjCYz0PDj3SILvQ5ZnzKGQXtOtU8301AUgZEdTi%2B6SVjVBf0G%2FLrNYZyeQA4l8U62Eyedb9FTAPWdJoAzDzi5y%2BBjqkAb679dCYTeQFM13118saDc2C5g8Ujr%2BbgOaNcQK%2BMeqCy4OliPYCi1D9EpyMA%2FZrguIoK9wP8WBsDx0XO%2BYFRE0ktII1F6Be7Gfm4m1FGyV6GmESPef5Ja2qse2roMJR8ge5hAe8VBiR%2B0CixZkZiPB1kKNGWWObc6EEtuiQXo4KH3FUGroHViszB%2F1xGtqY7m9Hmj%2BqBnlJTK75UcOfBLnDldRn&X-Amz-Signature=f5d527f51686686b0ab4408c2af317162901b11eb5898e3015afb46eb33b807f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
