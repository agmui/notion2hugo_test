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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25WBYYL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp8Bp6Kghnkpmc4Z7mVl1MLDtIPBRAIVceX1vP7XYLDAiEAh03Y%2FaBEwf%2B%2FiHzVvaBL8ZdjL0DNqZTmJBHORriehDMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGitSbjNXJGPYiV1xSrcA7SJiQku%2FaeaL86IJtIaKjg4V3pVBOBKHNw3Yd5s2s%2F3YkWKbDMFRU11lsq6MYtPTXpqPxO2JD5Wk3b7nCrhQ7Bjij4WpAPscgxhdfhuZghsE4NP5LVFMT%2BuQkF167yb7%2FQRrqmw%2FV9x6n6OVTtT%2FnYBmrdVc%2BJD37KosRoxZb8Str17Z7%2FFurpE3vK03cmbSaqT4kv6LUujhTqy2OZrIqebMysab7qPc%2B4bzJEiW3GBJRO%2BdeHn35yUxHPwuayyxYVT78gil%2Fmta5iAbGH8so91t%2BZ7MRx0fo9rYa1CvuPQ%2F5shI1IZ1vSvUIq9%2Bq9V5ppPZN1pZnRsXLUg%2BYmMa7mEXV2%2F%2Bx2EuzHo6h2a7UtOLT3hIjGxtPg9KThEzu5fMLHYds5KTOFOugMOTuLFVbXnOjJlFlDyFXBbX6Cn9lm9B5mUhfHtS0bAIQ6iPKZ68kMzBD7oy%2BCFNPlEO0lVyRu8tJPDPOKIG0TivwWN1WpwSP%2B9ejOaQfsNH7FPC%2BXvQ3mVzQAdGPIae8ghE6s34xSYr0ipJhH56VxB1mk5yZ8heYuwNFnXbtMsXQoy2TeHS7jsldhlBiNkToAQJoOup79hDSYzEiw%2BXr%2BLt4HN15PrMQT7%2FvYcUBUFUFV%2FMMTI2sIGOqUB3zJIleWe7W1Khsc6PfR0qXKsJOs%2F%2FsNsr%2BjArmcvVORGpqiqgxjZcQTpJUCneKayTMwOgVZjtmlGvKMYRhVy6PBK3dn7A%2Bvpw%2BmPQ4m9yePTxcoujBlh4eIygADz6d5FL5QfE%2Blw7ZeDZapadkPY8IBDnolwas%2BjIc4N%2FinMQdjc%2B0cT9OJ23dEbX4%2BVqsv0U7Kss005z8Od0yIdop59qWGpvbOW&X-Amz-Signature=c6e5f89920ae59aac6ceaa8593c1e7c6a795ae4e3aad40ba15077aed35add164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25WBYYL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp8Bp6Kghnkpmc4Z7mVl1MLDtIPBRAIVceX1vP7XYLDAiEAh03Y%2FaBEwf%2B%2FiHzVvaBL8ZdjL0DNqZTmJBHORriehDMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGitSbjNXJGPYiV1xSrcA7SJiQku%2FaeaL86IJtIaKjg4V3pVBOBKHNw3Yd5s2s%2F3YkWKbDMFRU11lsq6MYtPTXpqPxO2JD5Wk3b7nCrhQ7Bjij4WpAPscgxhdfhuZghsE4NP5LVFMT%2BuQkF167yb7%2FQRrqmw%2FV9x6n6OVTtT%2FnYBmrdVc%2BJD37KosRoxZb8Str17Z7%2FFurpE3vK03cmbSaqT4kv6LUujhTqy2OZrIqebMysab7qPc%2B4bzJEiW3GBJRO%2BdeHn35yUxHPwuayyxYVT78gil%2Fmta5iAbGH8so91t%2BZ7MRx0fo9rYa1CvuPQ%2F5shI1IZ1vSvUIq9%2Bq9V5ppPZN1pZnRsXLUg%2BYmMa7mEXV2%2F%2Bx2EuzHo6h2a7UtOLT3hIjGxtPg9KThEzu5fMLHYds5KTOFOugMOTuLFVbXnOjJlFlDyFXBbX6Cn9lm9B5mUhfHtS0bAIQ6iPKZ68kMzBD7oy%2BCFNPlEO0lVyRu8tJPDPOKIG0TivwWN1WpwSP%2B9ejOaQfsNH7FPC%2BXvQ3mVzQAdGPIae8ghE6s34xSYr0ipJhH56VxB1mk5yZ8heYuwNFnXbtMsXQoy2TeHS7jsldhlBiNkToAQJoOup79hDSYzEiw%2BXr%2BLt4HN15PrMQT7%2FvYcUBUFUFV%2FMMTI2sIGOqUB3zJIleWe7W1Khsc6PfR0qXKsJOs%2F%2FsNsr%2BjArmcvVORGpqiqgxjZcQTpJUCneKayTMwOgVZjtmlGvKMYRhVy6PBK3dn7A%2Bvpw%2BmPQ4m9yePTxcoujBlh4eIygADz6d5FL5QfE%2Blw7ZeDZapadkPY8IBDnolwas%2BjIc4N%2FinMQdjc%2B0cT9OJ23dEbX4%2BVqsv0U7Kss005z8Od0yIdop59qWGpvbOW&X-Amz-Signature=0362a95317383dbd68e22da54af47c22405fe1e0b48e2e24bf9597e2c67065d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
