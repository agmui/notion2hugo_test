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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I6YRLQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICoqDJ5BMA1CtOH%2Bnm06GVRsSkVSRIcmxGfya1rb2PJaAiAu5Ps8DXEPHGbxGf%2Fp1oPNNN3Wh8GgHPIuWqWaJRtiryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJM1s3r%2B4Y16r5JuyKtwDoG6jtZLixPDEtG9BCwh4fdak8hCKCDq00TfLziohDRN0oqXjPjfi1mL67dIFKzRJghnDZMbdWHjfmWLMkS1BrtV23j0pYaOtsoz3Yh4%2BS86cR9F9FbNmu%2FdXMNqKn16pPRsbt5V0MoQLphg6KxAn%2BSIURlD3m%2FTkGPvzgukoJG6AAHbg1dzYhoBr%2BUKvKsxQ7ZGbOLHi0quhmzYVIX%2Blx93sU0qJxi6Og3DzYUKcPPY9NDuZbzdwDS%2BKickzJWcL547sHUqo2XmNoaB0OZoWfsBYv7D3aYDRv67DbRytjNgzurKNGk4AF2zKohzh%2F4P%2FJ1ygKvQDlUdKbVZebRBmuqs1aVyYeuWDTBVh9l0yGBWftczzXo8Iu21CY29t0vfysYurF8G%2FCcDByJO7ICLI%2BzbUllZxQOgNIHbKx5G2Yx4U3o4om3FKjCwg44Q6iwtvi4zSA%2F3XudVtn1Ql3TIQHUkBOI4uU0QDNgrAl3YmnHY0rI8iPl2owCG16moiZMaJ0xft8mmk97Trm3vX97Ldj3W0LZVcAhRzFH%2BxmM3rTaJENM1O2oe%2FGbtfdLvDUNdPGo1dZ9uICIwJqYneGW7UN3GIbof8h%2BMLWBvsaFr2VQkKjlgaHfmgma7nJyowxMjJvQY6pgGR42PJcGWZLJfKTUFu8gYlEja5eudOTaHFgLNo1AIdaM71ZD7F6MvMbk3t4qN5C2VXla2CXI%2FFHzsYb2zgkAeL0OiSoRBIbobmx60H610Qlv4wkQQiBEIt%2F0v1glvcctnOi9S0tUW6r1zhGm3PVJF1OL9BAFOmJeQ7hOPb3bxSv%2BzuIXp2oKQZ3kcdbR6flbGHpmA5x9QEepMjvj%2BVgDJOYNQTyTKD&X-Amz-Signature=ee2819643abcf7c625381a45e6959375ef20d4c1126b5ee2a4579b4db1c25246&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I6YRLQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICoqDJ5BMA1CtOH%2Bnm06GVRsSkVSRIcmxGfya1rb2PJaAiAu5Ps8DXEPHGbxGf%2Fp1oPNNN3Wh8GgHPIuWqWaJRtiryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJM1s3r%2B4Y16r5JuyKtwDoG6jtZLixPDEtG9BCwh4fdak8hCKCDq00TfLziohDRN0oqXjPjfi1mL67dIFKzRJghnDZMbdWHjfmWLMkS1BrtV23j0pYaOtsoz3Yh4%2BS86cR9F9FbNmu%2FdXMNqKn16pPRsbt5V0MoQLphg6KxAn%2BSIURlD3m%2FTkGPvzgukoJG6AAHbg1dzYhoBr%2BUKvKsxQ7ZGbOLHi0quhmzYVIX%2Blx93sU0qJxi6Og3DzYUKcPPY9NDuZbzdwDS%2BKickzJWcL547sHUqo2XmNoaB0OZoWfsBYv7D3aYDRv67DbRytjNgzurKNGk4AF2zKohzh%2F4P%2FJ1ygKvQDlUdKbVZebRBmuqs1aVyYeuWDTBVh9l0yGBWftczzXo8Iu21CY29t0vfysYurF8G%2FCcDByJO7ICLI%2BzbUllZxQOgNIHbKx5G2Yx4U3o4om3FKjCwg44Q6iwtvi4zSA%2F3XudVtn1Ql3TIQHUkBOI4uU0QDNgrAl3YmnHY0rI8iPl2owCG16moiZMaJ0xft8mmk97Trm3vX97Ldj3W0LZVcAhRzFH%2BxmM3rTaJENM1O2oe%2FGbtfdLvDUNdPGo1dZ9uICIwJqYneGW7UN3GIbof8h%2BMLWBvsaFr2VQkKjlgaHfmgma7nJyowxMjJvQY6pgGR42PJcGWZLJfKTUFu8gYlEja5eudOTaHFgLNo1AIdaM71ZD7F6MvMbk3t4qN5C2VXla2CXI%2FFHzsYb2zgkAeL0OiSoRBIbobmx60H610Qlv4wkQQiBEIt%2F0v1glvcctnOi9S0tUW6r1zhGm3PVJF1OL9BAFOmJeQ7hOPb3bxSv%2BzuIXp2oKQZ3kcdbR6flbGHpmA5x9QEepMjvj%2BVgDJOYNQTyTKD&X-Amz-Signature=9dff0fff2ee259e1e490fd1bbd3741073d12db7f1e38189ba7c11873943f7b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
