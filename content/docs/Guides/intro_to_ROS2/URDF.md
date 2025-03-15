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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWRJISY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEagsz8Cq3UnrLUEVLt96QarUR917WyIsnHyHOkrnTMTAiAwq1jsHd%2BcnSFR%2FnqCxow28wwjJuL0NXZRn7uIJ2lZVSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMLZ6wWy93kgbFG7K%2BKtwDzq1qQPBDlJ2xReQBIAdPKFIXXBa4RFFYnVzRIsd4C45sk%2FoQI51LluXyv5VdeBZ5suN64YKBPmAQrm21iOecDLc3%2BR0MJW%2Bn3etXoxaFyf5tTaBufQefWfH7t05M46I6eXIttGsbTWpLTlMFc22rZa0EmOZ%2Fwuj2BVCvQ%2FMOy8A7vSrSd7baIfQnNUpQqfTnEjTNgKr3WWh%2FgOEPBoUKH42%2FXsiOM8AeCDWP0%2FDFuB8YtKy0fiGcfm0xnFWO9MOSMMVu9XH8FpmcS0rwkAH5hGKBvRk4%2Ftn4nBqxm3EvOZ7pUZ1KO7QY6Zy3psT4QoIPdY6GtlMJ8thRyuzy%2FEJGz8OpgQ4yAxXWUs04fRPqynJRQB1SElgZMBdCfi18fATm%2FLwUkrJRtIR2DgjK5z75AzjwFYZvLG3ibh3uswJDEkCcmCYWRZuX%2F8VkZOdgoUquWuX0jfWUMKHF%2BOoqVv3IGg0k4ZAnC2O3hBtofWzkT8no%2FUP24PIoztMvGH41DD7LNAawIJMmk%2BSzstnnLKNIpCQVd02kBHGxcnKSbrakvqjOIF07sj%2BsXaSxWH75eOoUJ%2B1%2BR3a2LwvVgVL30TWyjd2SbJB2wcfmjz7bBfgGIK%2BSHPpdfMbU5p1BnYkwz8TUvgY6pgEbxVi%2BECVHmXX1eiqAf5OuHtvgyZTVOjNmzo4v%2BIKybpnI5kVIjrUCYmIW2DwaaKwKvV0vV7rRqfynvWy90BnT9v8x7Mq2cQvQXZFxI1lGyhM7qpOmotk%2BJWrTQwmA3nrggSJt%2Fho%2F%2FNMJ%2FzEy49OKnWxw%2BVmxuLJ2OukZXSN2A0ywd%2BbF1s7m0RTs5V0l3MjOhS0EN2Ll8DwCyjSsWKC%2F9BfLi%2Fs%2B&X-Amz-Signature=5ad70994ba16c95e4d3ea9fe44a194f491194d067d9c1a2720dc5144f9f692db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWRJISY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEagsz8Cq3UnrLUEVLt96QarUR917WyIsnHyHOkrnTMTAiAwq1jsHd%2BcnSFR%2FnqCxow28wwjJuL0NXZRn7uIJ2lZVSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMLZ6wWy93kgbFG7K%2BKtwDzq1qQPBDlJ2xReQBIAdPKFIXXBa4RFFYnVzRIsd4C45sk%2FoQI51LluXyv5VdeBZ5suN64YKBPmAQrm21iOecDLc3%2BR0MJW%2Bn3etXoxaFyf5tTaBufQefWfH7t05M46I6eXIttGsbTWpLTlMFc22rZa0EmOZ%2Fwuj2BVCvQ%2FMOy8A7vSrSd7baIfQnNUpQqfTnEjTNgKr3WWh%2FgOEPBoUKH42%2FXsiOM8AeCDWP0%2FDFuB8YtKy0fiGcfm0xnFWO9MOSMMVu9XH8FpmcS0rwkAH5hGKBvRk4%2Ftn4nBqxm3EvOZ7pUZ1KO7QY6Zy3psT4QoIPdY6GtlMJ8thRyuzy%2FEJGz8OpgQ4yAxXWUs04fRPqynJRQB1SElgZMBdCfi18fATm%2FLwUkrJRtIR2DgjK5z75AzjwFYZvLG3ibh3uswJDEkCcmCYWRZuX%2F8VkZOdgoUquWuX0jfWUMKHF%2BOoqVv3IGg0k4ZAnC2O3hBtofWzkT8no%2FUP24PIoztMvGH41DD7LNAawIJMmk%2BSzstnnLKNIpCQVd02kBHGxcnKSbrakvqjOIF07sj%2BsXaSxWH75eOoUJ%2B1%2BR3a2LwvVgVL30TWyjd2SbJB2wcfmjz7bBfgGIK%2BSHPpdfMbU5p1BnYkwz8TUvgY6pgEbxVi%2BECVHmXX1eiqAf5OuHtvgyZTVOjNmzo4v%2BIKybpnI5kVIjrUCYmIW2DwaaKwKvV0vV7rRqfynvWy90BnT9v8x7Mq2cQvQXZFxI1lGyhM7qpOmotk%2BJWrTQwmA3nrggSJt%2Fho%2F%2FNMJ%2FzEy49OKnWxw%2BVmxuLJ2OukZXSN2A0ywd%2BbF1s7m0RTs5V0l3MjOhS0EN2Ll8DwCyjSsWKC%2F9BfLi%2Fs%2B&X-Amz-Signature=1ea2f0be41f996c3dcada51b64ea58906072718c57df6fa0316532271e510b81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
