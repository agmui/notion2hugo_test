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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFDEYOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAG7p1qlLzsBrQGwX7Nd7GkeD3gM7psNSm2Eno0w432%2FAiEAyL3sv4YVcKb0t6R%2BvPgwaFHC4tDXGgoIhfs2yy%2BUrW0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiRs13yd0Zc5loS7SrcA9u4D19i8o%2BVeS70IdXYJKZyUiSp9PSlLoPZwjthQrDZtHMwez%2FcgbguQ14BtJC%2BLD6wjgE7GPbN%2B0hXXBLhHgOastIgbJu9uNVvhTGx744IZGaMVshzi2eDbjvb%2FOruOSWXq6ZDu%2BPnCQROSahfLwEVS%2FMpoGFq5vphVaRBgu0qUY3FJR2QgJXkqU90U7Bllv1biJ5%2B5ncPQR%2FiJ30Sm6rnuviaMv4py3FvjNQI886drG2%2FFJJo687IeAb40TRzaZkDEEVa5mQPs98MwEU554vbHfdB5FScYZonMxVgL9EsmVkf0Oghe85kQFNL9CEJEhDgrvikeykiOKaGNYCwISfpEvea075Kba8f7PEyCcnVv%2FeH%2FFqHJH9%2B8HSGzVoxTUSMFldCy2z2mP0QgAnFyz2%2B0Ga12NDRY2D1hR1NlwPqRmMyC4BvOGmZvQ9qNPWVvw2kABSxPon93JOHxJSOgX0PCn6DKlGijYOCJAQd31QncPeE6L1D%2Fh79eLuSwFDJwPe7CUuGgIV5LcsLhkWhtolWTLStWL45v4ttLq57pc534bpRLNig2zmoX5B4FDSFvb31mEXZzOyLIGI0u4tdNwz8Ln8sg9vySdKkvl%2BeMOHKyjQYLy1j9aU3GVVXMIT7tL8GOqUB7nmw5R3aE3IGLIjSkNeyuNgR7%2B8vv7n47xMbN41xb97udjg2svgm9oM%2Fhb1IEHFX7NCClJk8KRhJWHvMmyH1glj66Fcds%2BPOkxlgWsEtJyn%2BXt1Sa58vpJ7sJc1f4dYB6My%2B%2F88DgBrxCMCSKXOCH70QwUZ9k2AHfiDnCKmHz6Z47H3B5QWYwJW5GsJ8IIuoCrHGfHxvF4BUMI%2F%2F%2FnJVFNz%2FE205&X-Amz-Signature=b813adb61072db9c3169a01a275ee553a30a7eafae304e81dc4586d31ade86d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFDEYOT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAG7p1qlLzsBrQGwX7Nd7GkeD3gM7psNSm2Eno0w432%2FAiEAyL3sv4YVcKb0t6R%2BvPgwaFHC4tDXGgoIhfs2yy%2BUrW0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiRs13yd0Zc5loS7SrcA9u4D19i8o%2BVeS70IdXYJKZyUiSp9PSlLoPZwjthQrDZtHMwez%2FcgbguQ14BtJC%2BLD6wjgE7GPbN%2B0hXXBLhHgOastIgbJu9uNVvhTGx744IZGaMVshzi2eDbjvb%2FOruOSWXq6ZDu%2BPnCQROSahfLwEVS%2FMpoGFq5vphVaRBgu0qUY3FJR2QgJXkqU90U7Bllv1biJ5%2B5ncPQR%2FiJ30Sm6rnuviaMv4py3FvjNQI886drG2%2FFJJo687IeAb40TRzaZkDEEVa5mQPs98MwEU554vbHfdB5FScYZonMxVgL9EsmVkf0Oghe85kQFNL9CEJEhDgrvikeykiOKaGNYCwISfpEvea075Kba8f7PEyCcnVv%2FeH%2FFqHJH9%2B8HSGzVoxTUSMFldCy2z2mP0QgAnFyz2%2B0Ga12NDRY2D1hR1NlwPqRmMyC4BvOGmZvQ9qNPWVvw2kABSxPon93JOHxJSOgX0PCn6DKlGijYOCJAQd31QncPeE6L1D%2Fh79eLuSwFDJwPe7CUuGgIV5LcsLhkWhtolWTLStWL45v4ttLq57pc534bpRLNig2zmoX5B4FDSFvb31mEXZzOyLIGI0u4tdNwz8Ln8sg9vySdKkvl%2BeMOHKyjQYLy1j9aU3GVVXMIT7tL8GOqUB7nmw5R3aE3IGLIjSkNeyuNgR7%2B8vv7n47xMbN41xb97udjg2svgm9oM%2Fhb1IEHFX7NCClJk8KRhJWHvMmyH1glj66Fcds%2BPOkxlgWsEtJyn%2BXt1Sa58vpJ7sJc1f4dYB6My%2B%2F88DgBrxCMCSKXOCH70QwUZ9k2AHfiDnCKmHz6Z47H3B5QWYwJW5GsJ8IIuoCrHGfHxvF4BUMI%2F%2F%2FnJVFNz%2FE205&X-Amz-Signature=6f05bccc34a17de95e21234c2d8a08c34dff3ceeb7e28cbfec7f7aa8e2c89092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
