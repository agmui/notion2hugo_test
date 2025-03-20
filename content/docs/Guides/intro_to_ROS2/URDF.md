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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZXQB3R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPgLn6vGa5W8nEepZOfxNOz3UePSXG8B6j2l4wg3NApgIgSOOBBDwB96K3UIUoBhp0S1sA0U8Cwrm2%2FUBENtr6yl8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJae72mPDWAbzHYgpircA%2FHv0h33hAaSQLeLHDMZyluDTPxB93OZTlYDAsxbadvY%2BoqhKq8OszwhTJr0Eixnb2KVp7wx87C5iIf0C1UcOhn1pyAh%2FU1VdqriefWxFXB3Hl8ScunBiNzPioacoJW9X0FmQVNI4sLLAjYWtc79TDLLjb9G5JE0GtGpYzdbK1DfsYfFgT8Dk8baSiCf3eCHsX8BQP%2BrvncCts0MhDrA5OAR6I81pBMBJh5mH2b3lF9zvxIPz%2F%2BebVy46LgZ8G0bWBFVaCGhQqmgfCVidIr7SDiwfLYrkqU7a2%2F6yZDSRyVchl%2BZMd5XZwjElEgLsA78n6r%2B0tiFCXWVmRZ%2FsU%2Fvy5InZyOBFCJ6ku%2FhEsyOseunGXi%2FRcrqygsfozSGRc3nul8tbVrcxUr9b1fx3ZkaHS0sq%2BypGXLSYAG0%2FJvFVZGaGwB3uZQVeAXcS9l5KFBudpdfN%2FhKexuGg2JlO0pjlqBTJMdI3t24aQM%2BQW3Gqle0ECMoiekhS08gHGoJOesNH67TdMIh6ABjqxIaZA2ZZEE0K%2FMWT0DVLcJ2SSQI3yBGcwVgcwyIX9iRg3A1165sR9PUGQIAx1J2Ji2nMv6P6av%2F1A2cI9L1wS9mV0buV8UOnBbZG5PLyavXf984MPal8L4GOqUB3r2OAoxP7ExMSAkso94Tyy39krbPeaAeyOxLZHivneRFviSmibocw3OC0z2abvFR2PO2Z%2FfL5o4xJnt7lhcPw8zz2ZZFHr4tZ02KF%2Fk7FIXZrPACf6tiUiHinSHfq7x0tWuVRYkcFeJbmKuyKpUnMKggudo6%2BxfhkLNqVN%2FZzLyAoSW0EmA7ZQh7gwhT2gf2kAcX0tEr9ScaE8yHsqAtBY%2F2BS%2F0&X-Amz-Signature=ce29f7252c356804949ae5e58d6b2c6d5721a26c5e214c23ccf3e896973ea2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZXQB3R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPgLn6vGa5W8nEepZOfxNOz3UePSXG8B6j2l4wg3NApgIgSOOBBDwB96K3UIUoBhp0S1sA0U8Cwrm2%2FUBENtr6yl8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJae72mPDWAbzHYgpircA%2FHv0h33hAaSQLeLHDMZyluDTPxB93OZTlYDAsxbadvY%2BoqhKq8OszwhTJr0Eixnb2KVp7wx87C5iIf0C1UcOhn1pyAh%2FU1VdqriefWxFXB3Hl8ScunBiNzPioacoJW9X0FmQVNI4sLLAjYWtc79TDLLjb9G5JE0GtGpYzdbK1DfsYfFgT8Dk8baSiCf3eCHsX8BQP%2BrvncCts0MhDrA5OAR6I81pBMBJh5mH2b3lF9zvxIPz%2F%2BebVy46LgZ8G0bWBFVaCGhQqmgfCVidIr7SDiwfLYrkqU7a2%2F6yZDSRyVchl%2BZMd5XZwjElEgLsA78n6r%2B0tiFCXWVmRZ%2FsU%2Fvy5InZyOBFCJ6ku%2FhEsyOseunGXi%2FRcrqygsfozSGRc3nul8tbVrcxUr9b1fx3ZkaHS0sq%2BypGXLSYAG0%2FJvFVZGaGwB3uZQVeAXcS9l5KFBudpdfN%2FhKexuGg2JlO0pjlqBTJMdI3t24aQM%2BQW3Gqle0ECMoiekhS08gHGoJOesNH67TdMIh6ABjqxIaZA2ZZEE0K%2FMWT0DVLcJ2SSQI3yBGcwVgcwyIX9iRg3A1165sR9PUGQIAx1J2Ji2nMv6P6av%2F1A2cI9L1wS9mV0buV8UOnBbZG5PLyavXf984MPal8L4GOqUB3r2OAoxP7ExMSAkso94Tyy39krbPeaAeyOxLZHivneRFviSmibocw3OC0z2abvFR2PO2Z%2FfL5o4xJnt7lhcPw8zz2ZZFHr4tZ02KF%2Fk7FIXZrPACf6tiUiHinSHfq7x0tWuVRYkcFeJbmKuyKpUnMKggudo6%2BxfhkLNqVN%2FZzLyAoSW0EmA7ZQh7gwhT2gf2kAcX0tEr9ScaE8yHsqAtBY%2F2BS%2F0&X-Amz-Signature=46a482b6abf20a6ae3271113a3bcc528660a36d71194783333a5e13f2914c75b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
