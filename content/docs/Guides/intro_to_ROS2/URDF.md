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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PELIVF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMkbbkiUz%2BUf5EWluE9UD9PQ6oGkRDEXljDtn4Z6twQAiBReuSbjFGgem7009m7PZUWg3LHruRrJuGcolRStFY8Qyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2Frm6F4wY4CJjXwxbKtwDMoW0%2B048Tjv%2BzuETXq%2FvCnxDWAWGH8NGDF0BzoPoxJQXtdGfvngy27puYXQwglE4%2BVGg%2F%2BhQWtTfg2mhXmXAbbNtwk8hyYqU8VW9Fp9IBbDqB4fWStTcyx6yT2syJZnGAS5iNYB11OaFPDctSZUWSzdA1%2F7FNwraZVTyg97toCq%2BM%2BP3H%2BAUE2KKyuTDQ%2Bf63jzB4zkvZ93jqGkQw4DxGCy1Saxn34o3tcUjKijYssrXfvjOARgnDcdC8Yaxw57AzvazVut%2FidEXpRR63KoXvWjs%2FBgSXj12DC9FMP6ogyCdaY2l6NzWG2v1E2WmVf6V9%2BX9senEY1pqAOouX4%2F46VxEmw2IYCcseTReTlaog731%2BUtPSP5ySEPHrA5omsuxHxuZvOGcXMQFErpfYrzFmANhHYBgxlzEQQsz%2BuoC9enzObpBMnibH2KFlNMkMse6V0mbXx%2FPkTTHImZtgq7u5TgakcwK2dShmjxS4BGF5EaVDsWde%2B9oMUMP7Zhj5Ut%2F6Ywoq29vc8UdcWqFZSs5kwwb0krZJmk6KTRjXKFWYaenZDhx8fmjAV96gfyeRaEmTHW0PEDWi2JHOJiQT3ouA%2BZ2i5G5aNEM0wycGVQxNQZVAd4yi8hYkS9rxPcwh6v%2BvwY6pgHE4zFMqSX7IeWsRsdqe0%2FpDAp4F8wyfsiJnFib5fg0U%2BN2cVFs%2B9edo8QrtwaRlj096OrPj6YKX%2B%2BAgvIfg73jVK0kINnuG%2FPZPAnsqleeMcvvLEh92EBNhCxodEgqH8zkRhK%2FvoLgpzB3re6MOVit8Mne0vm1BQN6TwkOs8n7RJU16ikAGAtk87X4Q3izB7mROmMa9WkmKvcWX0bfQ8kVBhTqKuuz&X-Amz-Signature=a14446f6078e61a7c25fab7f0809800eeaa66a71dbff6ac0765b4a6b6739da7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PELIVF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMkbbkiUz%2BUf5EWluE9UD9PQ6oGkRDEXljDtn4Z6twQAiBReuSbjFGgem7009m7PZUWg3LHruRrJuGcolRStFY8Qyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2Frm6F4wY4CJjXwxbKtwDMoW0%2B048Tjv%2BzuETXq%2FvCnxDWAWGH8NGDF0BzoPoxJQXtdGfvngy27puYXQwglE4%2BVGg%2F%2BhQWtTfg2mhXmXAbbNtwk8hyYqU8VW9Fp9IBbDqB4fWStTcyx6yT2syJZnGAS5iNYB11OaFPDctSZUWSzdA1%2F7FNwraZVTyg97toCq%2BM%2BP3H%2BAUE2KKyuTDQ%2Bf63jzB4zkvZ93jqGkQw4DxGCy1Saxn34o3tcUjKijYssrXfvjOARgnDcdC8Yaxw57AzvazVut%2FidEXpRR63KoXvWjs%2FBgSXj12DC9FMP6ogyCdaY2l6NzWG2v1E2WmVf6V9%2BX9senEY1pqAOouX4%2F46VxEmw2IYCcseTReTlaog731%2BUtPSP5ySEPHrA5omsuxHxuZvOGcXMQFErpfYrzFmANhHYBgxlzEQQsz%2BuoC9enzObpBMnibH2KFlNMkMse6V0mbXx%2FPkTTHImZtgq7u5TgakcwK2dShmjxS4BGF5EaVDsWde%2B9oMUMP7Zhj5Ut%2F6Ywoq29vc8UdcWqFZSs5kwwb0krZJmk6KTRjXKFWYaenZDhx8fmjAV96gfyeRaEmTHW0PEDWi2JHOJiQT3ouA%2BZ2i5G5aNEM0wycGVQxNQZVAd4yi8hYkS9rxPcwh6v%2BvwY6pgHE4zFMqSX7IeWsRsdqe0%2FpDAp4F8wyfsiJnFib5fg0U%2BN2cVFs%2B9edo8QrtwaRlj096OrPj6YKX%2B%2BAgvIfg73jVK0kINnuG%2FPZPAnsqleeMcvvLEh92EBNhCxodEgqH8zkRhK%2FvoLgpzB3re6MOVit8Mne0vm1BQN6TwkOs8n7RJU16ikAGAtk87X4Q3izB7mROmMa9WkmKvcWX0bfQ8kVBhTqKuuz&X-Amz-Signature=b5c1ff0cee9dde0b57d73d9e2713dc1842ec660c4d59dc1c40babbe0f6534ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
