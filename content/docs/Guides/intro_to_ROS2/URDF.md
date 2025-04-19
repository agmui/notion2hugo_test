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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GU6EZCC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjd1HqDu%2FnRkNPtQNzOHAw0I0hDTYNrQgsXL%2BGe8yzSAiEA9RwExR5pceQDeHrUwRcp4BtQqoawJMNLswPSaJyVYzcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO33urCtB1QFftWRyrcA49TB3KzoNa7jbtOKBBPwMEWJhIV%2BMVUeNkm9fBS2YPdbRqU4Z7eBNzDyd95PpZ0zdLPA3L2oEG1jG9eKK9GEkf%2BX6e6hfYM%2B3U0tOo8ZeqGV99C%2F5Tt4Q8LFKY%2FeP54%2B4BChImcSYvoi2Ez6tJkkeNEvN5crGeZJv32%2BgMoMxViAOFG1MmYQrrRgjUZBAes%2FToan2waBNSo1pTlKzq37uxCguktHlmn16QDGRMzoMo0KxOt3BVTU5JE6HCSrNZCPZrmM71CJYx1r%2FcLiZZzbjLUauB2cPFU%2FA3yzxwMj3ZmwdLVmuODX3FJsRWeSCObGV3CvGgHLwOtWc%2FuBfqsvYvs9qz%2B1jhrFnC6zJaLawlMI2iBVupTx5W%2Fz8irPjPfayNOKlaUkkjTSL6D8rVo9NTeXl6rgKTH8mE%2BIMVTQRRek0mK5ZM7btmBP0o%2BL8woyWEXl%2BVDMP%2Fl%2Fe7AfcvUXtot2QTgt4HPIxVGxTSEkBxv1oO7PB%2FuK8P6hLag6qxQh3tGQh1QgrP0iTTBXwsUEukD7EVdkw54zoEMtKHdPS47vQJKlUczq8ndCo50QdAX%2FXoINDnM8i18FCzvwJV6Tw%2FJFA4w4xPvVfVEtI%2BMCA7m1pZ4ygK80QPGnL87MNr8jMAGOqUBEvMzKxjdUptBJc1XEEh8XliGVBG46HXa988QpQknXjwQ%2BWVIRe1WzMCF3rJfr%2BO7OBSWiiosD5jvlT6wXveQxUsuXRJHWQsX32CRW7GCRDuue%2FIHJKfLsajLftzMgahMScGpYy9OwpFXX50OEfcIfoZF%2Bxwq5GdYbJcNO9XF44iWIsgWKauuhL7kumP760H1C9oeeWYehPr1P1U0uCcQBwYKo5qq&X-Amz-Signature=2bc3866f944cb832276089a09e6461c5f5586dea14cb4307a9f620aac25dac36&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GU6EZCC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjd1HqDu%2FnRkNPtQNzOHAw0I0hDTYNrQgsXL%2BGe8yzSAiEA9RwExR5pceQDeHrUwRcp4BtQqoawJMNLswPSaJyVYzcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO33urCtB1QFftWRyrcA49TB3KzoNa7jbtOKBBPwMEWJhIV%2BMVUeNkm9fBS2YPdbRqU4Z7eBNzDyd95PpZ0zdLPA3L2oEG1jG9eKK9GEkf%2BX6e6hfYM%2B3U0tOo8ZeqGV99C%2F5Tt4Q8LFKY%2FeP54%2B4BChImcSYvoi2Ez6tJkkeNEvN5crGeZJv32%2BgMoMxViAOFG1MmYQrrRgjUZBAes%2FToan2waBNSo1pTlKzq37uxCguktHlmn16QDGRMzoMo0KxOt3BVTU5JE6HCSrNZCPZrmM71CJYx1r%2FcLiZZzbjLUauB2cPFU%2FA3yzxwMj3ZmwdLVmuODX3FJsRWeSCObGV3CvGgHLwOtWc%2FuBfqsvYvs9qz%2B1jhrFnC6zJaLawlMI2iBVupTx5W%2Fz8irPjPfayNOKlaUkkjTSL6D8rVo9NTeXl6rgKTH8mE%2BIMVTQRRek0mK5ZM7btmBP0o%2BL8woyWEXl%2BVDMP%2Fl%2Fe7AfcvUXtot2QTgt4HPIxVGxTSEkBxv1oO7PB%2FuK8P6hLag6qxQh3tGQh1QgrP0iTTBXwsUEukD7EVdkw54zoEMtKHdPS47vQJKlUczq8ndCo50QdAX%2FXoINDnM8i18FCzvwJV6Tw%2FJFA4w4xPvVfVEtI%2BMCA7m1pZ4ygK80QPGnL87MNr8jMAGOqUBEvMzKxjdUptBJc1XEEh8XliGVBG46HXa988QpQknXjwQ%2BWVIRe1WzMCF3rJfr%2BO7OBSWiiosD5jvlT6wXveQxUsuXRJHWQsX32CRW7GCRDuue%2FIHJKfLsajLftzMgahMScGpYy9OwpFXX50OEfcIfoZF%2Bxwq5GdYbJcNO9XF44iWIsgWKauuhL7kumP760H1C9oeeWYehPr1P1U0uCcQBwYKo5qq&X-Amz-Signature=d333855d75afc908ac2693e374828086a6f7c9c5b5701a2dfd73429037d012a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
