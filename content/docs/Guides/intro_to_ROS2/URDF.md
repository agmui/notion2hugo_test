---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RWW62UV%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC4iREjSDVkO%2Bu2ltCq%2FuWX0torZHWvdInNth82jOp%2BKgIgbm%2FHIbyzuHZQWY5ROty%2FVaMSE2F1ciAZw0TwKPR0rp4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj7dRXlZYY3NonhIyrcA0hwfFeZ%2BCjYjUqJ3Wb82jZNmbNq9WrpwjHvFboB3r3JtM1CElzwXq%2B2g%2BilFbbgIPYwRFnPVGHJ25iMCVbYLMLekrcuNmfq0ZLsOphnNSCe0330p5kJrclKa6nZd3%2BqCfkvOwwj4rnIv4yss%2FjvIXkGrM05pejilb8sVdTy%2FkmevNRgv9MLQ6%2BsbkbdnWB47JBHWgHysz7yZU9NxEmnEImvD6BOzdq2aoOTSSulFvgtuujIMVCBmjpWR1iv2oWEtLab90O0gGHfAQMpXYHg1Vaw67XklIxsmOFpYfQ32YL4eIyHRnLVWjVxxR9XOPV5Y0yMW6mEAYfDSohIXdein8wj81asWlMacu9S8K3rkr1lDS99v2mnFB45Tt7v6g2td7fASnj1%2F0BuxxspdRaX32HfH3N7rHGCPcWTT4RW56L%2B9ZkGpS8VkKOxmXymj%2F%2B0U4GCYHMmqjqNALe3TXbPbJ831WFiHQlm1zq1SumGNdPwT4GGaD%2F0SyLVare9mkwNU%2B1g%2F5ygOlLGvhEgYr3JU5zlWcV4cplu%2BJuMNsQXGs3arxzzw84aO5wCxXVGMq6HV9ybDWB26tzrfCQjrupdP8jYHFpF1kD31fIntCAMcqQzBR%2FjJT5%2FVSDVTKR3MI6jwM8GOqUBYHaE%2BOImGbKiScVkjspbCpHadZ6ceaIAgonyuQpeF0e7LDXe43xC%2F8Ksw4Q1RrSjtFyJo5jOdf24nYlKEDuQ9FCko1I7l9xl2KwVBg7uvLXeuuPfEblP1xJjLNrtN9SY0k%2B7KYY0zLZly%2FBDJ4blQqTM%2FE0r35Pdslr%2F0ldX0WWTukUPewdLrdSlOHNOVS%2BzfK675K41sHpqhdYU6X%2F581tTY%2FmF&X-Amz-Signature=54508eb3bfaf2964b16d3ba26bd7a570f7250e67a712141edef21ee5c767b4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RWW62UV%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC4iREjSDVkO%2Bu2ltCq%2FuWX0torZHWvdInNth82jOp%2BKgIgbm%2FHIbyzuHZQWY5ROty%2FVaMSE2F1ciAZw0TwKPR0rp4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj7dRXlZYY3NonhIyrcA0hwfFeZ%2BCjYjUqJ3Wb82jZNmbNq9WrpwjHvFboB3r3JtM1CElzwXq%2B2g%2BilFbbgIPYwRFnPVGHJ25iMCVbYLMLekrcuNmfq0ZLsOphnNSCe0330p5kJrclKa6nZd3%2BqCfkvOwwj4rnIv4yss%2FjvIXkGrM05pejilb8sVdTy%2FkmevNRgv9MLQ6%2BsbkbdnWB47JBHWgHysz7yZU9NxEmnEImvD6BOzdq2aoOTSSulFvgtuujIMVCBmjpWR1iv2oWEtLab90O0gGHfAQMpXYHg1Vaw67XklIxsmOFpYfQ32YL4eIyHRnLVWjVxxR9XOPV5Y0yMW6mEAYfDSohIXdein8wj81asWlMacu9S8K3rkr1lDS99v2mnFB45Tt7v6g2td7fASnj1%2F0BuxxspdRaX32HfH3N7rHGCPcWTT4RW56L%2B9ZkGpS8VkKOxmXymj%2F%2B0U4GCYHMmqjqNALe3TXbPbJ831WFiHQlm1zq1SumGNdPwT4GGaD%2F0SyLVare9mkwNU%2B1g%2F5ygOlLGvhEgYr3JU5zlWcV4cplu%2BJuMNsQXGs3arxzzw84aO5wCxXVGMq6HV9ybDWB26tzrfCQjrupdP8jYHFpF1kD31fIntCAMcqQzBR%2FjJT5%2FVSDVTKR3MI6jwM8GOqUBYHaE%2BOImGbKiScVkjspbCpHadZ6ceaIAgonyuQpeF0e7LDXe43xC%2F8Ksw4Q1RrSjtFyJo5jOdf24nYlKEDuQ9FCko1I7l9xl2KwVBg7uvLXeuuPfEblP1xJjLNrtN9SY0k%2B7KYY0zLZly%2FBDJ4blQqTM%2FE0r35Pdslr%2F0ldX0WWTukUPewdLrdSlOHNOVS%2BzfK675K41sHpqhdYU6X%2F581tTY%2FmF&X-Amz-Signature=8f79d6b225dc6c598900040909fefadd80c0c33ec2dec8684c9622b7b60c211f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
