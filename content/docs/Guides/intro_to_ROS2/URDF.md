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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTYLAKE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAFLREDTQpyobhALeLrK2qHp3C99AxOtRCEF0xQi6MgIAiEAoFnBfxWifKqr4z68ZoqYBOQ80M4gtzfH5GL%2FSzy6%2BPgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxxvnkEmKqU1%2FKgVircAwIrVnEAitI3oS4KtAWyl3eMoWVSfz8HVm3Ux6iEdM14CAniyzg5YOjlLY0xQFHuhtNQyjva8fAmy7ZxowzBJCs3ZI77Dx2zTfKAoaycrCdGl1gKv5E1%2FKIVp4Mwj9b%2FDQOaOmW0odQPfPEGLVL3yfaB4L12Liz5%2FB7yAaHcO2Vjpc94bHWAHLLK96ZZFqH9udD0G80ceD5Pkew%2B49%2F67yqT4PTyb3CKxfkmASDWMgYa0V%2FC1hh5TPv%2BcslTpJIaWMh9zOmVTr1QUAVKPvAucoV37uS%2FcdKHmccxkYnfOhGfdcZBx2P0nbu8Oq3YUChnkmP2EYi9GtOlioW%2F5fv5vEWyV4QDnFEan5OvZpUHYE56HhXCRpZ5PvTwfY1LppfFHHI%2F%2BNQ5ydkqgWCwVn4cb5JCHybNfH%2BwrsmfmVW90C1aLt4aSZBSwPFinQhsXKI%2BbZcWXRHheYDpi2SYqq8hqF%2BCbkyABJQaLmeO8D7hIsXaWn0Z4ruqCbA8v3%2B71JNeKKHQztyS5GoAsRg85IHRVk%2FW%2FjQCnLySbGSmeOmLo4LME1iK3K5NYX6RhU%2Bv1LMhvmSU1iTI40sdAmvZJR7osqLfpZ5u3s6t4N1JXNDFzSfQFlRJ%2Fju3oWG1vn19MMGi0cAGOqUBVOXbplJFBWlWPHjh34vP%2FININ6%2Fl95eyK5qbi7xGYwDGOK1eaWi5KU%2B5cWzzV2NYduBaO4aa%2BmbkEgA8wSUYWWiwVuEsTTWmmx0cEwygY8G2kcITeRA3B%2ByGfTmn3VOwMMmxWoVctewoqJEKSr5d8eu2jfyNxXsLn%2FfwrgTxnfVnbQpYq5S%2BjXDEYmtdxTk2W97o5zufZv2t%2Bra2XSyvywOZFb3H&X-Amz-Signature=62d5191c660bc353f76ae2f9ec713b6ecdab2159d9d4510077f8209d9d732996&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTYLAKE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAFLREDTQpyobhALeLrK2qHp3C99AxOtRCEF0xQi6MgIAiEAoFnBfxWifKqr4z68ZoqYBOQ80M4gtzfH5GL%2FSzy6%2BPgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxxvnkEmKqU1%2FKgVircAwIrVnEAitI3oS4KtAWyl3eMoWVSfz8HVm3Ux6iEdM14CAniyzg5YOjlLY0xQFHuhtNQyjva8fAmy7ZxowzBJCs3ZI77Dx2zTfKAoaycrCdGl1gKv5E1%2FKIVp4Mwj9b%2FDQOaOmW0odQPfPEGLVL3yfaB4L12Liz5%2FB7yAaHcO2Vjpc94bHWAHLLK96ZZFqH9udD0G80ceD5Pkew%2B49%2F67yqT4PTyb3CKxfkmASDWMgYa0V%2FC1hh5TPv%2BcslTpJIaWMh9zOmVTr1QUAVKPvAucoV37uS%2FcdKHmccxkYnfOhGfdcZBx2P0nbu8Oq3YUChnkmP2EYi9GtOlioW%2F5fv5vEWyV4QDnFEan5OvZpUHYE56HhXCRpZ5PvTwfY1LppfFHHI%2F%2BNQ5ydkqgWCwVn4cb5JCHybNfH%2BwrsmfmVW90C1aLt4aSZBSwPFinQhsXKI%2BbZcWXRHheYDpi2SYqq8hqF%2BCbkyABJQaLmeO8D7hIsXaWn0Z4ruqCbA8v3%2B71JNeKKHQztyS5GoAsRg85IHRVk%2FW%2FjQCnLySbGSmeOmLo4LME1iK3K5NYX6RhU%2Bv1LMhvmSU1iTI40sdAmvZJR7osqLfpZ5u3s6t4N1JXNDFzSfQFlRJ%2Fju3oWG1vn19MMGi0cAGOqUBVOXbplJFBWlWPHjh34vP%2FININ6%2Fl95eyK5qbi7xGYwDGOK1eaWi5KU%2B5cWzzV2NYduBaO4aa%2BmbkEgA8wSUYWWiwVuEsTTWmmx0cEwygY8G2kcITeRA3B%2ByGfTmn3VOwMMmxWoVctewoqJEKSr5d8eu2jfyNxXsLn%2FfwrgTxnfVnbQpYq5S%2BjXDEYmtdxTk2W97o5zufZv2t%2Bra2XSyvywOZFb3H&X-Amz-Signature=a798d83a14733c14610566b846b9d9f417e3cbec244545cf796706b64a1061ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
