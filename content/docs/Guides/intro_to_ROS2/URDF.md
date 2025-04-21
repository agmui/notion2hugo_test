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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLRJ5WW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAR2JK340a69QuGotmHpdyTT7%2F%2FhSMDVf1VHmlb5b6ojAiABuTTdpOWFUx%2FyWu2ug4C%2Fx5RqsfJm2C%2B4ZL3YgKY4lyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSltaMhs3J0spLcWiKtwD5f6IWL9DJeebsj%2F10eWZtORTMHTHAh%2BpuYiHLfpCamjR7uF85e8epwbAL05gVq5%2FKShnwZ8zQidh5fXspwEOJFXEW7%2BYo342k5QasyrG5YCHZl2N1TjeP0upsQTEmp67UZpniNPOa1OAIJSM54%2BwaiR0EnoDSOzraB3U3lrS%2FSbb%2BecM%2F5mUVXfZoF3uk%2Fa5bcnzTX2aD26ah52HuT4%2Bxh56nk%2FVXJVN2VphUDGErGEveVYi%2BG4L%2FRrbt61ayBNAQi%2BgV4cH%2F9fVL3%2BHldgKacC%2FMAr1zCGxiwopIySNnescPLxzVlFMarL8LlG4k4zBUl361%2FTgV6jK6B23op4S0exH%2B5wREgC8gSKD12bkgv%2FcN1ppGu54G0JpacbfOpmVYTQiiHyryHewvEZd%2F%2BLvQYedEbkCcFqUXNlj6qRwsIlM%2BO9sT9mofHD5cil66GtZjet7nUnUr%2BF5kCHvskn%2FULL2OX1rH1zEC%2BEmSgWpcSXFgKCD7zd%2Bs4V%2Bg3F9KepkgATZraBbPEAunXrChUO8ellD6jqpjqgFONjlD6ZbfGv3tnA9nlB8JavZduxw5%2BvRS5C46uiDJwWnMntqBwD9w3uvHCJohW87Tpubjqv%2BdeHtxMnR5ghZMqkueKoww9uVwAY6pgFCpWkifvY23jvs2awodLvgUngb7Q4UhqDo57Ww68FWo5LLuFCgvd3EoMDG%2BuxnDJTJ%2FV4Moomj7B%2Bdf2LEMY8b1UUoR%2BTckzmSfbhRJcewRMdiTRvfUhdpl9vfYmrDuuiwYGCD7%2B0sbX3iWggM9sFfrYfMmrCmwL35uyboV7AnyLd0nVxFACnH83oi%2FwZ7dcn6Cjl0sAIOAi6lLtHQqW4Xk69RHnc5&X-Amz-Signature=d79c78a095713791ed02b267c3e7c024081ec8cd3e68248adfed8377884d6fae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLRJ5WW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAR2JK340a69QuGotmHpdyTT7%2F%2FhSMDVf1VHmlb5b6ojAiABuTTdpOWFUx%2FyWu2ug4C%2Fx5RqsfJm2C%2B4ZL3YgKY4lyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSltaMhs3J0spLcWiKtwD5f6IWL9DJeebsj%2F10eWZtORTMHTHAh%2BpuYiHLfpCamjR7uF85e8epwbAL05gVq5%2FKShnwZ8zQidh5fXspwEOJFXEW7%2BYo342k5QasyrG5YCHZl2N1TjeP0upsQTEmp67UZpniNPOa1OAIJSM54%2BwaiR0EnoDSOzraB3U3lrS%2FSbb%2BecM%2F5mUVXfZoF3uk%2Fa5bcnzTX2aD26ah52HuT4%2Bxh56nk%2FVXJVN2VphUDGErGEveVYi%2BG4L%2FRrbt61ayBNAQi%2BgV4cH%2F9fVL3%2BHldgKacC%2FMAr1zCGxiwopIySNnescPLxzVlFMarL8LlG4k4zBUl361%2FTgV6jK6B23op4S0exH%2B5wREgC8gSKD12bkgv%2FcN1ppGu54G0JpacbfOpmVYTQiiHyryHewvEZd%2F%2BLvQYedEbkCcFqUXNlj6qRwsIlM%2BO9sT9mofHD5cil66GtZjet7nUnUr%2BF5kCHvskn%2FULL2OX1rH1zEC%2BEmSgWpcSXFgKCD7zd%2Bs4V%2Bg3F9KepkgATZraBbPEAunXrChUO8ellD6jqpjqgFONjlD6ZbfGv3tnA9nlB8JavZduxw5%2BvRS5C46uiDJwWnMntqBwD9w3uvHCJohW87Tpubjqv%2BdeHtxMnR5ghZMqkueKoww9uVwAY6pgFCpWkifvY23jvs2awodLvgUngb7Q4UhqDo57Ww68FWo5LLuFCgvd3EoMDG%2BuxnDJTJ%2FV4Moomj7B%2Bdf2LEMY8b1UUoR%2BTckzmSfbhRJcewRMdiTRvfUhdpl9vfYmrDuuiwYGCD7%2B0sbX3iWggM9sFfrYfMmrCmwL35uyboV7AnyLd0nVxFACnH83oi%2FwZ7dcn6Cjl0sAIOAi6lLtHQqW4Xk69RHnc5&X-Amz-Signature=b74494bbdfed6fc36075075b55800f9b07e5662cf411c66b02cfc88f6d65ae16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
