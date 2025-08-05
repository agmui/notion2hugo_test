---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4AJ7W5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDdiRW1IbLyqkxUWEiMorxtd18alsiHbpzg38Ac09BeuwIgAJmoL3GmJk8j3YBc7e5IRxNAv%2BHCgmT6vkqAjDspvQsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG95Qhnkxe4yLVgXOyrcA%2BoWdConLSl63BH2PR6KQTwyO0fbGx%2BewcMfihngGWHWyNCt0v1C14Hk%2BRSzxdJc3IDK9SyWrsg7yxdLPgnUU7rzAsIHJv6e%2F3TtEX%2BHh5sFjRU%2BX0CTI%2Bu7%2Ful9FuLr7TQEqwklRk0aiZeLE%2F6ug47r1dhO9Rk5aoNfgpjERx%2FUh%2F84FGrLLfWJoF%2Fi9%2FmFqBaSjh3oXOzPSqXgTfpXVMX7Ls5O5Z3SFWXqTBddpCQRHpcEZZ3hm%2FQANS7v1d0MVVFgMaEbxxxA1eEK2qXzPmj%2Fg5swaPLabIJuhOkRNbEOLRAjAJoliOB0HTywTsJPSoNXOKz3wlsxLiptGmMb9fQd%2BC8ctGGYPAlJiFobbJQFgXauNTmPhZ7ZePO%2BYz4%2BTfa%2B54yxJPksUlwlIEzk5C2JqL773Mvq8m890HhIDr6ldsIdP%2BK02BRlseQQf7CKOUSL91HhoanrDHpyZyclwQb9kujrm%2Bbj9IYheq%2FhHvm6xTn9krvgt4StpCB8Vca8I8JMT07Fd6lBAc6gyE%2FmhxPUGLnVSFuRFdQkzXyKzOAQqDP3%2F%2FOEur9k2E1RoYIujf6zbfHHH6615OmMix65a9Xbv5Cp8%2FaFGATKdjFTPr6KiGdXqTxuaJERKuUrMMPhycQGOqUB0XbDGkr%2FyvP%2F0wsIJ8dI5ZN%2FLg4LfXqtxbPaZKwM6PtIeFR43dQlTV%2B4GL%2F1baSkxGeHv6qb0%2FAi0%2FCzmLH7vH6ytPcoaVbgOYv10D0Gvw1AP%2FNNMcaA4qAoeaYxuoQD%2BDQFqxl2U0oWH5TgEpbnZzvkWlpOjsDfLpWyj30gcWPx%2FVYucChqeabwN8bszOT1tqlJr%2Fy7ZWosb94nw1XrRHOe8qhh&X-Amz-Signature=7cb1c0ea42d9598f3c81340195038a1659a18b21fd64060f1426b8db40f822fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4AJ7W5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDdiRW1IbLyqkxUWEiMorxtd18alsiHbpzg38Ac09BeuwIgAJmoL3GmJk8j3YBc7e5IRxNAv%2BHCgmT6vkqAjDspvQsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG95Qhnkxe4yLVgXOyrcA%2BoWdConLSl63BH2PR6KQTwyO0fbGx%2BewcMfihngGWHWyNCt0v1C14Hk%2BRSzxdJc3IDK9SyWrsg7yxdLPgnUU7rzAsIHJv6e%2F3TtEX%2BHh5sFjRU%2BX0CTI%2Bu7%2Ful9FuLr7TQEqwklRk0aiZeLE%2F6ug47r1dhO9Rk5aoNfgpjERx%2FUh%2F84FGrLLfWJoF%2Fi9%2FmFqBaSjh3oXOzPSqXgTfpXVMX7Ls5O5Z3SFWXqTBddpCQRHpcEZZ3hm%2FQANS7v1d0MVVFgMaEbxxxA1eEK2qXzPmj%2Fg5swaPLabIJuhOkRNbEOLRAjAJoliOB0HTywTsJPSoNXOKz3wlsxLiptGmMb9fQd%2BC8ctGGYPAlJiFobbJQFgXauNTmPhZ7ZePO%2BYz4%2BTfa%2B54yxJPksUlwlIEzk5C2JqL773Mvq8m890HhIDr6ldsIdP%2BK02BRlseQQf7CKOUSL91HhoanrDHpyZyclwQb9kujrm%2Bbj9IYheq%2FhHvm6xTn9krvgt4StpCB8Vca8I8JMT07Fd6lBAc6gyE%2FmhxPUGLnVSFuRFdQkzXyKzOAQqDP3%2F%2FOEur9k2E1RoYIujf6zbfHHH6615OmMix65a9Xbv5Cp8%2FaFGATKdjFTPr6KiGdXqTxuaJERKuUrMMPhycQGOqUB0XbDGkr%2FyvP%2F0wsIJ8dI5ZN%2FLg4LfXqtxbPaZKwM6PtIeFR43dQlTV%2B4GL%2F1baSkxGeHv6qb0%2FAi0%2FCzmLH7vH6ytPcoaVbgOYv10D0Gvw1AP%2FNNMcaA4qAoeaYxuoQD%2BDQFqxl2U0oWH5TgEpbnZzvkWlpOjsDfLpWyj30gcWPx%2FVYucChqeabwN8bszOT1tqlJr%2Fy7ZWosb94nw1XrRHOe8qhh&X-Amz-Signature=8ebff61bd291fb05df0942ec9b2d6c5aae63bfb2a623d31c8ecca92bc1789d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
