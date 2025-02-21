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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SN6W2GG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn3Qw%2FrOtp8f7STR5vhvk0qW52J56f9lTY3iSuYAC6iAiEAvj8ONn7sXwXx3hmJqZJohxg3lb0S09jxJ0qcqbiMgJoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVQzxZVTK3AIOn9MircAwoD8zZhI1GX65AF3rIyHE%2BbkbQ9PJEnP44Wilr3ETIA4kgndSr14Ibw4PvamZUaV6Q%2BnzJFjVc1Qy6AG%2Bk8m6A1PMcvoS2WNso2PrUJHOnKx6cHJtOuGpLpiAsV7FZKLFuvot5jgE0ILPEjbnnxcDimO3Hnp6Np%2FCgXwlUSrf1y1mxD8ziRVQOH8qshdTUlLbGpb2RONaS9Y9L2AhdeC09KAG%2FxtA3rUE17wBTZrISWDsM6SJOt%2F1TJJxRUO%2FEt0Mj3RzCVUKXwRuCxC6v3IyTDIFjUii1r%2FhMhPirZ7xXWoEgwEE8RI6UOAMZxdb1Z4IVN%2F5z%2FOES0HwsUlKIWczDvOxAv0ABiwiANLE%2FHirJEUm3hvZ%2FHmQmXCnWzEOhiRAoBc2pRpskDBJSCdlmacRTLzAsvGYfAoZu6An7EOfTY3sMJrxcZdgAOWdB5%2FSTmFCX9JGt%2FExFafGVVQtfct0netDwkMmMp%2B%2ByOUmy2Zd8KDFPoH4guGfCaOeTS%2BUJuhD0Ysia6P3OCQ9uAPWlPl9%2FpGxTfGFNCVqAUnLgcAo2HXqe4c5Dd1N%2B1JwMI55Sch2troeiG1nJ5exQ9pdWqMe90Mp77mtRlSkgvwy3WlVww7PfVHCUb8VDf62LkMPmi4L0GOqUBUyPn%2BNHUi5xS4KoHocTFEgSXnPIR9ywTxiw9LIuwHUjCD0selata5rRwsCFhbvypUhMBDb1waNUdM1nLT%2FqZuPZMNm1qplaGb7ce8SgN7a%2F%2BtDcFZuHYgrFcc6B4tURsSlgK9iT0%2F28iPEM8b%2Bn5OBh0bn7D2bPFwLYqn6kKc8%2BtDSU1Sw5IGEh1TuXYFHh4lcUUL4UjBfSG5Xqk2WZC1CYuLdg3&X-Amz-Signature=4069729fd44f6ac821ba9ce4724a0dc3ec0bb49b242b3a61f7d4136a486d61e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SN6W2GG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn3Qw%2FrOtp8f7STR5vhvk0qW52J56f9lTY3iSuYAC6iAiEAvj8ONn7sXwXx3hmJqZJohxg3lb0S09jxJ0qcqbiMgJoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVQzxZVTK3AIOn9MircAwoD8zZhI1GX65AF3rIyHE%2BbkbQ9PJEnP44Wilr3ETIA4kgndSr14Ibw4PvamZUaV6Q%2BnzJFjVc1Qy6AG%2Bk8m6A1PMcvoS2WNso2PrUJHOnKx6cHJtOuGpLpiAsV7FZKLFuvot5jgE0ILPEjbnnxcDimO3Hnp6Np%2FCgXwlUSrf1y1mxD8ziRVQOH8qshdTUlLbGpb2RONaS9Y9L2AhdeC09KAG%2FxtA3rUE17wBTZrISWDsM6SJOt%2F1TJJxRUO%2FEt0Mj3RzCVUKXwRuCxC6v3IyTDIFjUii1r%2FhMhPirZ7xXWoEgwEE8RI6UOAMZxdb1Z4IVN%2F5z%2FOES0HwsUlKIWczDvOxAv0ABiwiANLE%2FHirJEUm3hvZ%2FHmQmXCnWzEOhiRAoBc2pRpskDBJSCdlmacRTLzAsvGYfAoZu6An7EOfTY3sMJrxcZdgAOWdB5%2FSTmFCX9JGt%2FExFafGVVQtfct0netDwkMmMp%2B%2ByOUmy2Zd8KDFPoH4guGfCaOeTS%2BUJuhD0Ysia6P3OCQ9uAPWlPl9%2FpGxTfGFNCVqAUnLgcAo2HXqe4c5Dd1N%2B1JwMI55Sch2troeiG1nJ5exQ9pdWqMe90Mp77mtRlSkgvwy3WlVww7PfVHCUb8VDf62LkMPmi4L0GOqUBUyPn%2BNHUi5xS4KoHocTFEgSXnPIR9ywTxiw9LIuwHUjCD0selata5rRwsCFhbvypUhMBDb1waNUdM1nLT%2FqZuPZMNm1qplaGb7ce8SgN7a%2F%2BtDcFZuHYgrFcc6B4tURsSlgK9iT0%2F28iPEM8b%2Bn5OBh0bn7D2bPFwLYqn6kKc8%2BtDSU1Sw5IGEh1TuXYFHh4lcUUL4UjBfSG5Xqk2WZC1CYuLdg3&X-Amz-Signature=eea6ff80857ca8febbabb8c39e62c796393a8c809bf67608e9521ca3f1aa1262&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
