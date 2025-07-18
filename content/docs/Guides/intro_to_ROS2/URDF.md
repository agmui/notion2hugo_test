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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPM3PRP3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDHW80qEOlzMvW%2FqP8%2BJPGR%2FwgI1ldXuaPRyf1XKvviJQIgM%2FjVu8YJQhJMy4UaeNdBrNruK%2B4AZweMmOWY16zqbhsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2Fc%2BbCsUAz72EUmnircA4CnpSlLOsa6jFSuwJ5r9z0vwQ%2FtowA71UngbBLhSGsnA90%2B9OTOdUwnzadUeljWlZLfhd1p4QxXGvK816eE0UK%2BbUlmWjqA99K1yXU0AbdGmCjGK5BMOtRXbghauJChX9J8pjsDauyLtIJ4QINyAm2I5C%2BUW1WV8DNbedBO2iocE5xwM2wv6CWEUBPOqZJeh3XW%2FPHQENJQPJf%2BWlQ%2BxFpE9kTS4LUpdjvAfLHsH4HBxWrybeKLKahduHtJSkq0bEBG3xjzmnqYaKuQ%2BpF%2BsvWIfSvghHFhzA0LE3%2BVeZUlOrj%2FSMgENyMpiHUID9yS41RfNfdy%2BowlH%2FPwEGTqr1%2BxfceSR1zJa5ncoBPSG4dOI6%2B86ybq59%2FVzLcWEic9fbj4doTbIActPRleMyWlvHnLEFDedzGm3vYiRgkjC0Nk2gqZADFTmJTaBs7Nf%2BBFvU0ltvuC3lARMBbvp9VzJA0hjzsJY1Duh7WyoYdWeHDwbXJZMRHEMLzV9lBoX5qtpyN7YXA%2FxrmpKS06vdUfL9zdjjqKDFnvBRZ5T7jueCJtBZbKII9L46P%2FY21PV%2FSOsZYmxaBlm5dqhPKzk80r8BmETAL%2B2zQAQVq9OMLf5OW0hLLlKgAB2MN4sPNSMMbP6MMGOqUBtts6LXEQCrmvgmpiKxr%2BFUD%2FqonxkySgXWe70oISEJlzDTFWRu2AmKglckR0Wpj7ndpcZ%2B1vc3BfJ7dFv1%2BGxHK2h5TTQhh88rFwrOHY%2FHeR7FswZ4v36je1FQsCPr2Q1RDpJpeRr79rhmHUKtFzVx3ISgS8V9h8oVgIAsC5zhnn584%2B97VBfK7BI%2F2jyJ6WeCnQBQ8J22SYR%2FdCq1YduKR4rwX1&X-Amz-Signature=d8fe15084ff0aa3da31a867a2b10ff6aa5f790e1ab133dd26d35c82c76126ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPM3PRP3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDHW80qEOlzMvW%2FqP8%2BJPGR%2FwgI1ldXuaPRyf1XKvviJQIgM%2FjVu8YJQhJMy4UaeNdBrNruK%2B4AZweMmOWY16zqbhsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2Fc%2BbCsUAz72EUmnircA4CnpSlLOsa6jFSuwJ5r9z0vwQ%2FtowA71UngbBLhSGsnA90%2B9OTOdUwnzadUeljWlZLfhd1p4QxXGvK816eE0UK%2BbUlmWjqA99K1yXU0AbdGmCjGK5BMOtRXbghauJChX9J8pjsDauyLtIJ4QINyAm2I5C%2BUW1WV8DNbedBO2iocE5xwM2wv6CWEUBPOqZJeh3XW%2FPHQENJQPJf%2BWlQ%2BxFpE9kTS4LUpdjvAfLHsH4HBxWrybeKLKahduHtJSkq0bEBG3xjzmnqYaKuQ%2BpF%2BsvWIfSvghHFhzA0LE3%2BVeZUlOrj%2FSMgENyMpiHUID9yS41RfNfdy%2BowlH%2FPwEGTqr1%2BxfceSR1zJa5ncoBPSG4dOI6%2B86ybq59%2FVzLcWEic9fbj4doTbIActPRleMyWlvHnLEFDedzGm3vYiRgkjC0Nk2gqZADFTmJTaBs7Nf%2BBFvU0ltvuC3lARMBbvp9VzJA0hjzsJY1Duh7WyoYdWeHDwbXJZMRHEMLzV9lBoX5qtpyN7YXA%2FxrmpKS06vdUfL9zdjjqKDFnvBRZ5T7jueCJtBZbKII9L46P%2FY21PV%2FSOsZYmxaBlm5dqhPKzk80r8BmETAL%2B2zQAQVq9OMLf5OW0hLLlKgAB2MN4sPNSMMbP6MMGOqUBtts6LXEQCrmvgmpiKxr%2BFUD%2FqonxkySgXWe70oISEJlzDTFWRu2AmKglckR0Wpj7ndpcZ%2B1vc3BfJ7dFv1%2BGxHK2h5TTQhh88rFwrOHY%2FHeR7FswZ4v36je1FQsCPr2Q1RDpJpeRr79rhmHUKtFzVx3ISgS8V9h8oVgIAsC5zhnn584%2B97VBfK7BI%2F2jyJ6WeCnQBQ8J22SYR%2FdCq1YduKR4rwX1&X-Amz-Signature=a1fc6ba106fda0bc9f21eda10187e78d5e38df84adc004d4be982975b27ef392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
