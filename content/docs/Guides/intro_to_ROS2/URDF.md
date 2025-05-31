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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDPZNHSS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS1CjfnMAAaqbbQdJADxPCuzuuCCC%2F%2FTmo2BHt33EC%2BAIhANkMhq4nPn7DjatWyXxfiYQnYtZYdNI1%2B6oTc6z2y5JKKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYJMvYN4aEpvFdDoq3ANSgfuzcFB6HVJ%2FH8faijUXci2Z3DAxQLqYokAqYpDbIyaRrBad7q5u5jC54P1pX8BmqILQvNnvsvYkkLGn38b8o3GrCRscVxUaEb7Mlcfmcb058mNST3TzBo0PJP9pti7lSCldiXMLRsY1kfHIhxNTIbhXeNpls%2BI2nnDfcTwVq8MIj%2FdZoD9VCGYnWEjm1JFhMiohrky34NKw6NRTYh6A2CSs%2BVYxJPKJQ7sey8PluwTxKzlo0IWCpz5djr86Gm%2BP6NFRjgMqB61b4%2B55IGeqJYCaE8XSA5Je0K1BM90%2FcGlFFGyO8M4gPKjpSFvE535Q5ufkrzCXLMj0yjV2OH2DRh68IvE%2FPap7cSmi5hXgw2lpGw9dpqv%2Byc%2FD6xbdO8ApqXWIymz5FtPD%2FiLPx5qQx9fVwZSBJ6EvvZcyebeSGjA8Unk%2Ft2Fhq65D8kTGA4TFkVEicgm1C6w20NGTFrydAuvU8%2FdbmdJO%2BqPnNML6L5fwCh8FGPnO47bwzDbmyzDui2ROIn3P2C9E06NEZsdvsWG4n6AGiAS2YKoBz%2BaU6l2GCMvuKu1V5fAXO%2B4zxKe2k44g7io9DE4ymsOYtq9HGBDVyLUxcMddFi8D5ya5QUGdRRRHTAfkg17atjDwxO3BBjqkAaIRc%2FlSXbYmPZi0xb%2F2Qu5OYddbM4l6q11k0wcZRrqq87eVHVEIFeWezxoEX%2B6H0myt7%2Beht2KZJpKjEfH%2BKPK19J3B9Uzs0DFVJw4GbKRIrpgi9ReNExChll%2FflEwxu9SxSmlFl%2B4dKoE3VCsx026l0T1eQY0FfYLTilHbZ7CQV6iKoxdDCXf6UccmRDQA7SkqPnwDIOJPeV2eFV%2FmPz%2BgWeov&X-Amz-Signature=5548e919e4ae6020252673c4948a0d08df399b4e9ed71958dbe007b2db5c08c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDPZNHSS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS1CjfnMAAaqbbQdJADxPCuzuuCCC%2F%2FTmo2BHt33EC%2BAIhANkMhq4nPn7DjatWyXxfiYQnYtZYdNI1%2B6oTc6z2y5JKKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYJMvYN4aEpvFdDoq3ANSgfuzcFB6HVJ%2FH8faijUXci2Z3DAxQLqYokAqYpDbIyaRrBad7q5u5jC54P1pX8BmqILQvNnvsvYkkLGn38b8o3GrCRscVxUaEb7Mlcfmcb058mNST3TzBo0PJP9pti7lSCldiXMLRsY1kfHIhxNTIbhXeNpls%2BI2nnDfcTwVq8MIj%2FdZoD9VCGYnWEjm1JFhMiohrky34NKw6NRTYh6A2CSs%2BVYxJPKJQ7sey8PluwTxKzlo0IWCpz5djr86Gm%2BP6NFRjgMqB61b4%2B55IGeqJYCaE8XSA5Je0K1BM90%2FcGlFFGyO8M4gPKjpSFvE535Q5ufkrzCXLMj0yjV2OH2DRh68IvE%2FPap7cSmi5hXgw2lpGw9dpqv%2Byc%2FD6xbdO8ApqXWIymz5FtPD%2FiLPx5qQx9fVwZSBJ6EvvZcyebeSGjA8Unk%2Ft2Fhq65D8kTGA4TFkVEicgm1C6w20NGTFrydAuvU8%2FdbmdJO%2BqPnNML6L5fwCh8FGPnO47bwzDbmyzDui2ROIn3P2C9E06NEZsdvsWG4n6AGiAS2YKoBz%2BaU6l2GCMvuKu1V5fAXO%2B4zxKe2k44g7io9DE4ymsOYtq9HGBDVyLUxcMddFi8D5ya5QUGdRRRHTAfkg17atjDwxO3BBjqkAaIRc%2FlSXbYmPZi0xb%2F2Qu5OYddbM4l6q11k0wcZRrqq87eVHVEIFeWezxoEX%2B6H0myt7%2Beht2KZJpKjEfH%2BKPK19J3B9Uzs0DFVJw4GbKRIrpgi9ReNExChll%2FflEwxu9SxSmlFl%2B4dKoE3VCsx026l0T1eQY0FfYLTilHbZ7CQV6iKoxdDCXf6UccmRDQA7SkqPnwDIOJPeV2eFV%2FmPz%2BgWeov&X-Amz-Signature=5cc9c3977b84d64909071cb0f54e3f5657cfa02a895c6a0fd13f123641a481ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
