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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OLAJOH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZw%2Fwk2wucIa36J5ULY1bYz1%2FQgjH9r2Wa6RYbSEY%2BAiEA%2B16EfQTS0ufB9TobL0DkdGEhmYv1Du29d5CebcVhf%2B0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfL6Dbu4pV87PPNRSrcA%2BUSlpPNkc%2FvRTc%2FBmx96SMh39ddqwVoSpDvPSABhGXyWP6I6YzFgxpSCPQWKC0dIoRvCYlJIGquQy%2FmamDxX3EgXpQpDvPuz2%2Btgg28AmBrFFwOD2luFqyftz2OoilsEkHkVOW8eUvx2C%2F4Qr%2Bu7y8W64rQ9K631te006u8K%2FY9A8%2FFAbkl%2BtogVshUbtt6lHL2ny0nIF4d6yntQVdhWaIA8heqgBc3sbj0GN16SITSybGHqKYGr3FIIB9SP5xwFsxuwIzKnbjBSFFU7DH1mVD6qWMsYokysGL2fBuXsePsVK3PbhO9UUEAs2QMfIMxiKp%2BuL%2FbxyFTd%2FhuMNxsaPoAmNg%2BfkBb2s9ccS6OU4hi9PDAbsIVRjTelGAOlTKot0FdwDoE%2BmuT12aljxSCzUMCkE%2FZMfuJjSCPyY1HIDUZxhDYZC5jSAfjTGRFukY15%2Fvlu6epII32yizWdyr8L65lPFVC11jIY%2BKZ8SRSN9%2FPB1WYEj%2BPCRB4biyQv6oXG964BKc9f4zu2EUPxsHA7JNGckxMxIPd%2BpA7aopFBJvL7fpUlPU6baBXTV72dU%2FIAr2yxkJR0YtVVnalUoJrjID26d5ppkr3RsSGxmBHxZNdAxeQihLMi53kHLMGMIqllcIGOqUB9OFWROKC4F6kMZWBlV%2B3o20DxsZ2ms60nHMpePtq6VhsUXp9AeyvIE15VYdq%2FMlvZ6YblFz5V5DVEZ%2BFi0TRGB51VMiYm2KABfyRDChVHMJ0ForGBx%2BeSQ0otJ7P%2F2B6VLBA%2F1OT7DdxNfyXdy%2FEpqWzsSa09E3aZNA9WgOY3Y6YFkTszVq%2Fm%2F7HSiZaW8VTIvd0nilIYC3HAsV2ApJsYXwp0YK9&X-Amz-Signature=fcbfb7709f3b26a9f1d7f7cd66fe5d7d99c3c47aa9433375a751b9bf2d8b4a35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OLAJOH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZw%2Fwk2wucIa36J5ULY1bYz1%2FQgjH9r2Wa6RYbSEY%2BAiEA%2B16EfQTS0ufB9TobL0DkdGEhmYv1Du29d5CebcVhf%2B0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfL6Dbu4pV87PPNRSrcA%2BUSlpPNkc%2FvRTc%2FBmx96SMh39ddqwVoSpDvPSABhGXyWP6I6YzFgxpSCPQWKC0dIoRvCYlJIGquQy%2FmamDxX3EgXpQpDvPuz2%2Btgg28AmBrFFwOD2luFqyftz2OoilsEkHkVOW8eUvx2C%2F4Qr%2Bu7y8W64rQ9K631te006u8K%2FY9A8%2FFAbkl%2BtogVshUbtt6lHL2ny0nIF4d6yntQVdhWaIA8heqgBc3sbj0GN16SITSybGHqKYGr3FIIB9SP5xwFsxuwIzKnbjBSFFU7DH1mVD6qWMsYokysGL2fBuXsePsVK3PbhO9UUEAs2QMfIMxiKp%2BuL%2FbxyFTd%2FhuMNxsaPoAmNg%2BfkBb2s9ccS6OU4hi9PDAbsIVRjTelGAOlTKot0FdwDoE%2BmuT12aljxSCzUMCkE%2FZMfuJjSCPyY1HIDUZxhDYZC5jSAfjTGRFukY15%2Fvlu6epII32yizWdyr8L65lPFVC11jIY%2BKZ8SRSN9%2FPB1WYEj%2BPCRB4biyQv6oXG964BKc9f4zu2EUPxsHA7JNGckxMxIPd%2BpA7aopFBJvL7fpUlPU6baBXTV72dU%2FIAr2yxkJR0YtVVnalUoJrjID26d5ppkr3RsSGxmBHxZNdAxeQihLMi53kHLMGMIqllcIGOqUB9OFWROKC4F6kMZWBlV%2B3o20DxsZ2ms60nHMpePtq6VhsUXp9AeyvIE15VYdq%2FMlvZ6YblFz5V5DVEZ%2BFi0TRGB51VMiYm2KABfyRDChVHMJ0ForGBx%2BeSQ0otJ7P%2F2B6VLBA%2F1OT7DdxNfyXdy%2FEpqWzsSa09E3aZNA9WgOY3Y6YFkTszVq%2Fm%2F7HSiZaW8VTIvd0nilIYC3HAsV2ApJsYXwp0YK9&X-Amz-Signature=33ce4c6726f5e9e483484e8a9e6d8e72f1fddc29751669c69064d1f3047d8679&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
