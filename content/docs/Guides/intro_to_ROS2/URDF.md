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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTFEVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCnm2dPK1Dj%2FeHrqNUhMIhpZRB%2FE%2BY4DeGc23JpuZ7ilQIhAMHEFKRVz%2Fp4yxd5erhSOGdUQi1lTX5i0yShmgS9SLHsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdlA3EtafV0SYDmbYq3ANn1seI6JHdGiHO%2FbmVgFJex3IKDFIXYXrzKH5ecvIxhKK7caY%2FA8Qyp9tGhj6t0cX7iTwI4I03qJolF4mmbrOP3Ve2pIvALJOpBYLq9XOxv9r%2BnajGvHdrFyXr3AGt8cwZ9c1iFsP6JX54DL1qwrSJPiwir15c8ImC%2BN5vIcTSMxchft%2BPLem%2FoQ5nR%2FNrwAzSAy9t7zn6Ac2ZPXHM6%2Bc0uXgJl5zZAWd5nPQjrz5uEu%2FgoqTx9Z5XMckx6SKuK2VHW1xE7965o6UywaZSkerley%2FXlxSRQD8VbVTiVBw2%2FusyGNPoDYMaK3zyWHkjftt1s3b7JlGIcE12qUepP6XD1ABEI2jjEBASWVT%2BFDlQqpN4YHWPZvbq3SQu70YiSZpypw4GcpfGRgTwRGiIbe2SXL8kYHWgC3aJX%2FjRESupFWr7aUbmmN90sHrTBdcT%2F9oDRKRuZwxrPfyHn7XRWwm08xSh2eTe4hWs1tr66vWoe8nWLwH9%2F3OG13nhPjQXVXHrvKs5laHs1lw1FegojADJ10Q6jKuQ26wNQxhEZoBH8IFN3rLHX3%2BhXF8V%2Bb4Pu6MTKTSL%2B2dadls0gK%2BwGZatClkHd6uXBNulFapxarpKyGTUsiZFKQxEIbVVZjD%2F75u9BjqkAcGAIOge7ugQQlIZjwzgYn9Gsd16HsAovKtWhXKHyBK6MMGRIfDhcgWriqLYrCcXncui8pjS9VXDrx2TT1GkfDjtk2arMlHevMrvhS%2F8fRR2oft%2FMXmCnYJzZul2Hmixgzp28w%2BCoaOhyKNXDmQDH9MzkCsglMAp%2BTKKtsSWgLYL31BVbHb7i%2BqWdUv8wwau7lCxbkId3XKjAsdjjnMCGA8Bkfzy&X-Amz-Signature=f75cce35eb8166ab4c0c50b2d088088b0a7dab258f290a0fb5f8bf1eb8f55fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTFEVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCnm2dPK1Dj%2FeHrqNUhMIhpZRB%2FE%2BY4DeGc23JpuZ7ilQIhAMHEFKRVz%2Fp4yxd5erhSOGdUQi1lTX5i0yShmgS9SLHsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdlA3EtafV0SYDmbYq3ANn1seI6JHdGiHO%2FbmVgFJex3IKDFIXYXrzKH5ecvIxhKK7caY%2FA8Qyp9tGhj6t0cX7iTwI4I03qJolF4mmbrOP3Ve2pIvALJOpBYLq9XOxv9r%2BnajGvHdrFyXr3AGt8cwZ9c1iFsP6JX54DL1qwrSJPiwir15c8ImC%2BN5vIcTSMxchft%2BPLem%2FoQ5nR%2FNrwAzSAy9t7zn6Ac2ZPXHM6%2Bc0uXgJl5zZAWd5nPQjrz5uEu%2FgoqTx9Z5XMckx6SKuK2VHW1xE7965o6UywaZSkerley%2FXlxSRQD8VbVTiVBw2%2FusyGNPoDYMaK3zyWHkjftt1s3b7JlGIcE12qUepP6XD1ABEI2jjEBASWVT%2BFDlQqpN4YHWPZvbq3SQu70YiSZpypw4GcpfGRgTwRGiIbe2SXL8kYHWgC3aJX%2FjRESupFWr7aUbmmN90sHrTBdcT%2F9oDRKRuZwxrPfyHn7XRWwm08xSh2eTe4hWs1tr66vWoe8nWLwH9%2F3OG13nhPjQXVXHrvKs5laHs1lw1FegojADJ10Q6jKuQ26wNQxhEZoBH8IFN3rLHX3%2BhXF8V%2Bb4Pu6MTKTSL%2B2dadls0gK%2BwGZatClkHd6uXBNulFapxarpKyGTUsiZFKQxEIbVVZjD%2F75u9BjqkAcGAIOge7ugQQlIZjwzgYn9Gsd16HsAovKtWhXKHyBK6MMGRIfDhcgWriqLYrCcXncui8pjS9VXDrx2TT1GkfDjtk2arMlHevMrvhS%2F8fRR2oft%2FMXmCnYJzZul2Hmixgzp28w%2BCoaOhyKNXDmQDH9MzkCsglMAp%2BTKKtsSWgLYL31BVbHb7i%2BqWdUv8wwau7lCxbkId3XKjAsdjjnMCGA8Bkfzy&X-Amz-Signature=6b2f552ffeec30b758970656e0acdf215c601a92627844885104ecf14199b7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
