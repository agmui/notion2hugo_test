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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZOE3AZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYV5r0ljbKKT8Osk9gBMz0x2qgJAxYEg0N%2FNgZRMxGbAiAk4%2F8oC7Rp9XtYDBlPevNpPs%2FqGOOPBTh2eEsH%2FuuPhyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3xyKhO1truPljTflKtwDkdYj%2FAmoL5%2BtIbOPnWkm%2FK2L8Jj%2F2lTjo%2B%2FCDLJHsyaHR%2FFSD9NR96v8FCWkm1Gb2GlebLf3%2BqGVm66sNK3u2TnclQGfyJ%2BJVMX6olegwtbTXYiV6Re4W0ojXlVHA%2FqBAMwt2RQO30NmfRSqVWQ7PMzmbU9hwv3iB861DYXZndYocPMoeRP8ZwtyZR1aRI3U0Pz%2FTGQSNd9sHJWIyTXo8iM9uSIF0JTxVG%2FNhJBqzFdpsYrNw0vhbcciNf%2Ft8%2FS3wyeXLlzB0FXRpUVu3l0S%2Fs00FvceVDtN5L9ohZwdkJGsN7qU%2BiRazthYi3%2Fz6cFlrBbasMw7SgdAqPw%2Bg8V0xpChc%2FPnJ5nAO4IfagJYtfRckPPP0jBfj%2BmMdVpOgq5R0KD%2F573RcEuN21kJLXDtxtpEpKvahwJISvb6BT4RHHxNPCl8%2F0nYWaxNBZrr2UDW%2FgcIlH89%2FZ8VEW1SI%2BELkPp%2BMPTqwj7ktIOyl9ITvYUzYvWa9lypJhjPQ%2F%2BDvUScIZK%2Bq3R2O7Oo5iXhtDzsl0Om8JM6siQq0VCiKfIxCtYmZt6vfhACRvYLlzENUrNXpTeBt%2FVp%2B3j8Qq1eAcvsi4vFy9OpXmgl9IH8nErO1aAr0ZxamwVdf1qrPSMwlvP0wwY6pgGwY4pDtgt4F5BS5pclTwUN7uFgEzDiWpPEk8JqvD4P1CoWJgZ6wG5p%2FMMCtYk9vYF6XdgoYLUsZbG9zmCk58Q1lG7lTfl1mNXZi6r864qdwb7hDbLrzxyXTAE3sx4rf%2BMDlFRh4euIFmki06%2FHK%2Busn1taYiuLJTkGIXsgsVqUXZFd9GGC0yy6wsrnbWOIF0WLfUm2%2BE41kvr18kHyr7xWbc%2BHPY7O&X-Amz-Signature=fdd034857c2a35de688ca3dfbb6aca23c688870ed3d7c1309a86d58a1b8336d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZOE3AZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYV5r0ljbKKT8Osk9gBMz0x2qgJAxYEg0N%2FNgZRMxGbAiAk4%2F8oC7Rp9XtYDBlPevNpPs%2FqGOOPBTh2eEsH%2FuuPhyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3xyKhO1truPljTflKtwDkdYj%2FAmoL5%2BtIbOPnWkm%2FK2L8Jj%2F2lTjo%2B%2FCDLJHsyaHR%2FFSD9NR96v8FCWkm1Gb2GlebLf3%2BqGVm66sNK3u2TnclQGfyJ%2BJVMX6olegwtbTXYiV6Re4W0ojXlVHA%2FqBAMwt2RQO30NmfRSqVWQ7PMzmbU9hwv3iB861DYXZndYocPMoeRP8ZwtyZR1aRI3U0Pz%2FTGQSNd9sHJWIyTXo8iM9uSIF0JTxVG%2FNhJBqzFdpsYrNw0vhbcciNf%2Ft8%2FS3wyeXLlzB0FXRpUVu3l0S%2Fs00FvceVDtN5L9ohZwdkJGsN7qU%2BiRazthYi3%2Fz6cFlrBbasMw7SgdAqPw%2Bg8V0xpChc%2FPnJ5nAO4IfagJYtfRckPPP0jBfj%2BmMdVpOgq5R0KD%2F573RcEuN21kJLXDtxtpEpKvahwJISvb6BT4RHHxNPCl8%2F0nYWaxNBZrr2UDW%2FgcIlH89%2FZ8VEW1SI%2BELkPp%2BMPTqwj7ktIOyl9ITvYUzYvWa9lypJhjPQ%2F%2BDvUScIZK%2Bq3R2O7Oo5iXhtDzsl0Om8JM6siQq0VCiKfIxCtYmZt6vfhACRvYLlzENUrNXpTeBt%2FVp%2B3j8Qq1eAcvsi4vFy9OpXmgl9IH8nErO1aAr0ZxamwVdf1qrPSMwlvP0wwY6pgGwY4pDtgt4F5BS5pclTwUN7uFgEzDiWpPEk8JqvD4P1CoWJgZ6wG5p%2FMMCtYk9vYF6XdgoYLUsZbG9zmCk58Q1lG7lTfl1mNXZi6r864qdwb7hDbLrzxyXTAE3sx4rf%2BMDlFRh4euIFmki06%2FHK%2Busn1taYiuLJTkGIXsgsVqUXZFd9GGC0yy6wsrnbWOIF0WLfUm2%2BE41kvr18kHyr7xWbc%2BHPY7O&X-Amz-Signature=8c406b9595a449d437280f43458ca70cb6b4a7f2da462010d9b3800af73ac0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
