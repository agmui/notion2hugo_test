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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R3I5RC4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxV3xypdboaFC5TuVK4ePLGBLC7a7lXUKlAHQ1fJkKSQIgC2F2lyFPkwQEoGfB61CUbiHNxa1SNc3FIuuehcNkBKYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgWRiA7zOlMLSXP3SrcA2IIKQy4h7ED%2FYHNeexM2MfHGvCsW%2BqetOTxCdL81IQAMt9lQGmQK0sox1cmpRTvrWoBxa0erA536HqugD9yiIBlbMMzt1eIh4V%2BJdyIn1Y%2Fl7ariZrsQzswH1oxAbTlZVUh7D1pBd0kiKIAQ%2BTfQkHTWP%2FvPbvrQxTwJrUvSn8mNy8O5oBb2SAErgsni7doIfXcNPQk4vmYBMzd2gqyt2dfcSHx6c8gWaFKarXcfWi3%2FSGIO2eSo2E%2F8zUQrPO9AoiJjKsfMZkdVRnoMoUr8AvcXQzXv%2BAXtKw2AQ8CwbPuuPI27uxw7TS3PgWd%2Ft5cPYtJ0Yui%2Fl6jfhQtnWvk9ehmeIOh%2BCwwlIivl%2FsQReVuDUgpTscjgezhNpkSkGZ%2FRgZbqKzTYC2Tyt3U%2BSHirKtcRnO4QoejDRvRMB3mk8RkOEv3zdLLZEt%2Fkpyxr1o40NTZ6GvM9WjnEuQ64nfw9qPCDdOP%2FxAya%2FE3A7ew%2F1MCqnhEZOiMGaRXlvN%2FjXzYzlmxKhsZ7vpFru4pKgUuJZcFbSYc2tuOfjNYdG6WMNUlYsZ48EPVE2s5YaLbq%2Fm6t%2B%2BvJtAWqxhFpkAyyrhJkpFAJDA5KyJyjPSw77fLZ%2BVkFVX3H2YV40emttiLMOrS88MGOqUBPovJzz4hIkxnceMQ9YPLRgglotEtk%2BU0Uw6BaXeIr2oopUQy2NQ0Cm8QnOSOtlGoWNI0leO8K5Y6zi3QVllg9jiIVMm26NTg%2F3l9X%2F9035yJB6emtU8ehtBHxW1P0AZzYipKceH2Ea0qM5ixVQu8L3hTROk46QigoS4tw7vV%2F1%2B8Vr8SfbZM2eokt0uZb1XfUTZhjsADVcbymFy1%2BrZG9bUVVaIH&X-Amz-Signature=00fba4634581eaacc59aaae81c7e480d9aa02c0f1a117042290aa8230da2edeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R3I5RC4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxV3xypdboaFC5TuVK4ePLGBLC7a7lXUKlAHQ1fJkKSQIgC2F2lyFPkwQEoGfB61CUbiHNxa1SNc3FIuuehcNkBKYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgWRiA7zOlMLSXP3SrcA2IIKQy4h7ED%2FYHNeexM2MfHGvCsW%2BqetOTxCdL81IQAMt9lQGmQK0sox1cmpRTvrWoBxa0erA536HqugD9yiIBlbMMzt1eIh4V%2BJdyIn1Y%2Fl7ariZrsQzswH1oxAbTlZVUh7D1pBd0kiKIAQ%2BTfQkHTWP%2FvPbvrQxTwJrUvSn8mNy8O5oBb2SAErgsni7doIfXcNPQk4vmYBMzd2gqyt2dfcSHx6c8gWaFKarXcfWi3%2FSGIO2eSo2E%2F8zUQrPO9AoiJjKsfMZkdVRnoMoUr8AvcXQzXv%2BAXtKw2AQ8CwbPuuPI27uxw7TS3PgWd%2Ft5cPYtJ0Yui%2Fl6jfhQtnWvk9ehmeIOh%2BCwwlIivl%2FsQReVuDUgpTscjgezhNpkSkGZ%2FRgZbqKzTYC2Tyt3U%2BSHirKtcRnO4QoejDRvRMB3mk8RkOEv3zdLLZEt%2Fkpyxr1o40NTZ6GvM9WjnEuQ64nfw9qPCDdOP%2FxAya%2FE3A7ew%2F1MCqnhEZOiMGaRXlvN%2FjXzYzlmxKhsZ7vpFru4pKgUuJZcFbSYc2tuOfjNYdG6WMNUlYsZ48EPVE2s5YaLbq%2Fm6t%2B%2BvJtAWqxhFpkAyyrhJkpFAJDA5KyJyjPSw77fLZ%2BVkFVX3H2YV40emttiLMOrS88MGOqUBPovJzz4hIkxnceMQ9YPLRgglotEtk%2BU0Uw6BaXeIr2oopUQy2NQ0Cm8QnOSOtlGoWNI0leO8K5Y6zi3QVllg9jiIVMm26NTg%2F3l9X%2F9035yJB6emtU8ehtBHxW1P0AZzYipKceH2Ea0qM5ixVQu8L3hTROk46QigoS4tw7vV%2F1%2B8Vr8SfbZM2eokt0uZb1XfUTZhjsADVcbymFy1%2BrZG9bUVVaIH&X-Amz-Signature=84747fc2b372aec1e7eb5dea88c88d4995cb47ef5f05862645b9a299accc80dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
