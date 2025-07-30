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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQAYAFE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsmKqN76rNWduzKmaZ%2BbwIuUXXZ1W2YKmD9UuDfW%2Fr1AiEAvI1Bj865XjjU1qfaPp7F2eRvoRWt%2BhhzCwyo1QYPAqUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4DyoZpaF1zIs8SlSrcA1ODoTGp9d%2FDiV2Vqcg2BitgfHmTrtVeLpslZ%2BgYOXQsfsbRZ8Xh9ik4nhtVHD0XgvWlPHr29IomvW0Pd9wC4tBJN%2BpkdkOMpeFouSW7HfYoZ29%2BX%2BDNdhH9jOh72W4Tvv6oPBrFLIjVntUXexatbXo5xiyfhJJje8bQK2AuIGaiWoLsRcn3Xici2DI7wQ2sBU03qUXBntNLwALPjIl9xdOPMobLsSGU7cASccQ3px36i4Kr0wJ6h%2BgYO25l0EePb5pOlUo8G%2BoFWpOb%2FAe8ExQ%2Fkr%2BcgS0SxDMU3lso7bO1BKWo%2FfV2HcJoLh75v900Q3i4fK6WMAJBYs2UVqHVkyQjcAwZic2c2QLG0ZZAEJFG3cLLgEFwWI3EPn%2F%2B0Ju5B1Yku%2B59Jni%2Bi7qkBTY3Pu85%2FfPO1MXj9ZO5grL29lnHjjvmgSjdJ7dskx4cIhbkvTrmWmGDtRK8N7iood4NaRmXQ33KdbX2XIeolznK1%2Frp%2BudBLmPy%2BgHlMWggYj%2B5qfpdOuDu4sAgZdufwbhEID90YZ9WhMFwuEcfDfgPa9fdJjxAfkfwVfc3NwIrHWhT7dr9qpNjGJDwLyiOu6QQSF8iFGHx%2FabyX%2FfmOQwwsFcSP7Lm%2FHv5W2xBmpYrMKO4pcQGOqUB8Ww3g%2ByKyCV7TZE4pPQVoSanYMRYL69y3iCZhaOt1PhR%2FU1eEwlEcrZafxib0Mr08xRBsSdpCd6hXKA1NMDXEavy2FQiVHh4NLXK5Znf7wCNc7Z5Nzxuklg84rQUw%2BZardRAudVHNHt%2BE8rwQhFcK26%2B6LRJYgKkkFX8ZRu9k2WVSEjqLZ%2Fu4PTfedDsCgVOCxaJ4wJvRaCIv7W7j8Rb7DCyuv92&X-Amz-Signature=a980cb71d90491c25283f4bc5cf7f562be96d93d8e4244fa41400567f84820da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQAYAFE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsmKqN76rNWduzKmaZ%2BbwIuUXXZ1W2YKmD9UuDfW%2Fr1AiEAvI1Bj865XjjU1qfaPp7F2eRvoRWt%2BhhzCwyo1QYPAqUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4DyoZpaF1zIs8SlSrcA1ODoTGp9d%2FDiV2Vqcg2BitgfHmTrtVeLpslZ%2BgYOXQsfsbRZ8Xh9ik4nhtVHD0XgvWlPHr29IomvW0Pd9wC4tBJN%2BpkdkOMpeFouSW7HfYoZ29%2BX%2BDNdhH9jOh72W4Tvv6oPBrFLIjVntUXexatbXo5xiyfhJJje8bQK2AuIGaiWoLsRcn3Xici2DI7wQ2sBU03qUXBntNLwALPjIl9xdOPMobLsSGU7cASccQ3px36i4Kr0wJ6h%2BgYO25l0EePb5pOlUo8G%2BoFWpOb%2FAe8ExQ%2Fkr%2BcgS0SxDMU3lso7bO1BKWo%2FfV2HcJoLh75v900Q3i4fK6WMAJBYs2UVqHVkyQjcAwZic2c2QLG0ZZAEJFG3cLLgEFwWI3EPn%2F%2B0Ju5B1Yku%2B59Jni%2Bi7qkBTY3Pu85%2FfPO1MXj9ZO5grL29lnHjjvmgSjdJ7dskx4cIhbkvTrmWmGDtRK8N7iood4NaRmXQ33KdbX2XIeolznK1%2Frp%2BudBLmPy%2BgHlMWggYj%2B5qfpdOuDu4sAgZdufwbhEID90YZ9WhMFwuEcfDfgPa9fdJjxAfkfwVfc3NwIrHWhT7dr9qpNjGJDwLyiOu6QQSF8iFGHx%2FabyX%2FfmOQwwsFcSP7Lm%2FHv5W2xBmpYrMKO4pcQGOqUB8Ww3g%2ByKyCV7TZE4pPQVoSanYMRYL69y3iCZhaOt1PhR%2FU1eEwlEcrZafxib0Mr08xRBsSdpCd6hXKA1NMDXEavy2FQiVHh4NLXK5Znf7wCNc7Z5Nzxuklg84rQUw%2BZardRAudVHNHt%2BE8rwQhFcK26%2B6LRJYgKkkFX8ZRu9k2WVSEjqLZ%2Fu4PTfedDsCgVOCxaJ4wJvRaCIv7W7j8Rb7DCyuv92&X-Amz-Signature=c2093a149a316fc99100c8385debcbf3db2d13fecf4a4055184671149ff36a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
