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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WO5HBJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQOgCED%2FCjVdNcibi%2Bw9tZlWfaw%2BP9tbSwDld6dz0X6AiEA3eyJI6XcfDzMO9YU4TJSqthtu9ikZUfqrh5Yee4TL5IqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0zMOEbCYfSjF7tjyrcA8b6hQH%2B3EGB43pPXsk30v2aCYRjcyJW6TNFFcxW0PPc5P9sxcmOeii98WriELqHbjAXQD%2BJJG%2F5z%2FdkLPinR8eFJ8kJNR2KCPpU583j8rFiF3z9zKkOl8toxfFAz9DbYMXCRsqIebJgYMEVYp0YDmMsbDbHQfSP1FX4%2Fmm0biBDk%2FXTelPQySQpmm%2F3%2Fb%2B9om%2FY%2BgAzsAwV9pyd1U8RR11T53ZE7iG4Wt%2FiufXr0mVb7lP79mpFv5pnMmpi2EaUVuAwAI%2BcyPfEvMCU4HqBYqP8SdEQzTThkVH%2Bx%2BKUOeNSad%2F1L%2BYproYsKyQppTXRzQxxjIma%2F915Tp184KLZQ8upSyuPmc1K4vQnA4tDiceTmf%2FdOHUEv5qnlr4m3oTtrYT8aBqiV1L%2Bk3%2BTcUSH4%2BXLYE09oEwlchH1uWpsShCKe6crioOocxmY%2BdQuCItZgPk8iMv%2FoGZJ7%2BDz2toNUFLWjpaqq%2FlO7y9rjCE%2BPZxyOdBQaUVTUv7LvUn6HsviiQ6auQLaI2FdC7r28043ffnaHPpcFRQNBrBawszEAN2Strf68uGRnlgf8NS9bMPgOwDtn48uocO5OnI8EVlsHJiOs45DMiwNH64vzQjipjXGj1wfv7UxCt4U9DJfMMWtscEGOqUB8Un0Ozccw%2FUNQKwDbjRhsdop0Q1ev5EYkrYgToot5I%2FmU9pTDUz4%2BAbc32TaiWwSy5ytorKjlACrL%2BEpUrvJh8ir0%2BKx6DhmOOT59NfN3huSSqBhU2VUaeDfecJryxHXeXU8gUE6xI851NO0AkBu%2BX1%2FsQZ0F5n4qBYRUOHSFY62tWFWPjsQqMYWQeImO2jK0843iTbS03UarE0Zwfi6AslDF96t&X-Amz-Signature=f36c3d747cadc5d9633356221669dcaa88735ff0be5af04eb37c164b7f93e124&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WO5HBJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQOgCED%2FCjVdNcibi%2Bw9tZlWfaw%2BP9tbSwDld6dz0X6AiEA3eyJI6XcfDzMO9YU4TJSqthtu9ikZUfqrh5Yee4TL5IqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0zMOEbCYfSjF7tjyrcA8b6hQH%2B3EGB43pPXsk30v2aCYRjcyJW6TNFFcxW0PPc5P9sxcmOeii98WriELqHbjAXQD%2BJJG%2F5z%2FdkLPinR8eFJ8kJNR2KCPpU583j8rFiF3z9zKkOl8toxfFAz9DbYMXCRsqIebJgYMEVYp0YDmMsbDbHQfSP1FX4%2Fmm0biBDk%2FXTelPQySQpmm%2F3%2Fb%2B9om%2FY%2BgAzsAwV9pyd1U8RR11T53ZE7iG4Wt%2FiufXr0mVb7lP79mpFv5pnMmpi2EaUVuAwAI%2BcyPfEvMCU4HqBYqP8SdEQzTThkVH%2Bx%2BKUOeNSad%2F1L%2BYproYsKyQppTXRzQxxjIma%2F915Tp184KLZQ8upSyuPmc1K4vQnA4tDiceTmf%2FdOHUEv5qnlr4m3oTtrYT8aBqiV1L%2Bk3%2BTcUSH4%2BXLYE09oEwlchH1uWpsShCKe6crioOocxmY%2BdQuCItZgPk8iMv%2FoGZJ7%2BDz2toNUFLWjpaqq%2FlO7y9rjCE%2BPZxyOdBQaUVTUv7LvUn6HsviiQ6auQLaI2FdC7r28043ffnaHPpcFRQNBrBawszEAN2Strf68uGRnlgf8NS9bMPgOwDtn48uocO5OnI8EVlsHJiOs45DMiwNH64vzQjipjXGj1wfv7UxCt4U9DJfMMWtscEGOqUB8Un0Ozccw%2FUNQKwDbjRhsdop0Q1ev5EYkrYgToot5I%2FmU9pTDUz4%2BAbc32TaiWwSy5ytorKjlACrL%2BEpUrvJh8ir0%2BKx6DhmOOT59NfN3huSSqBhU2VUaeDfecJryxHXeXU8gUE6xI851NO0AkBu%2BX1%2FsQZ0F5n4qBYRUOHSFY62tWFWPjsQqMYWQeImO2jK0843iTbS03UarE0Zwfi6AslDF96t&X-Amz-Signature=9e44cdbbaf81e30023f0eef13ddc4bf59cb106ee5c9aa4925a6a4b4e799939fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
