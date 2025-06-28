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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROYH2DT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F0tW%2Bwu1DLTnNMkAf8YLY154K9LwyYO35Tb8tuoEDTAIgEuFzz8NhspUXKf3ba6GRD3pPUcIaLT%2F%2ByXrd2nFWRrsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB41sIdExSg170aEJCrcA2EG%2BicCndBmzA4A0LyvEcQABYOOuZvdtpq8aiyWjQrlmcuUK%2FNLMoqVO0A5XNjsSEONGEsKCDY8VOWmbQcBsP40Jjc24%2B3FXnlXq12CPaSbG%2FUglc6d57s3NSkZcRVlxkzjkddhwRzPIpkqMHEumcMoE%2FYzs%2B7tKBSjWT4jECM0FgwbeEs8SDf7w1jqQq4UW%2FbtGnLKrtqfhgi%2FeboTSmRBSbQ0ViMxEc9rYmYuCX5bzaUym03rRnQfTy5l2WJ1QJStWcntFf5QlVnyFT8Dg9%2FOn%2F4nsskVjS2H%2FSoEu2%2BtU210rQXoXRUswhr8d5xZXqVIK7VNdGKBkhaykD8EtndGYuccFakYY6nXcQpnNpweUtPoK2iZZsozBfrjJSnpmxbtga9sPlnSo7MBXXfep94oJaDj7e%2BBLKaZX2RIFI0%2BQoCNjufozijw%2FM4noYbwFHb3F6u54GXZElrbaHfs%2FbpkGNX3hDHAaVsiQUWswJZ4HsXovZ91QUJGZH3LDzGGmN6aS573YKJeIt8zHF%2FRF0Cj0wcuHUf9E2BH0v593TFGe658mIMddYHdBA3uMlVCqLEykhx2seLIimNmQCAYZTrnOGLFadGRVw6wWcCgZNwx%2BjrORzs4jxUWp97FMI7S%2FcIGOqUBdRli1%2FSpRkfe5Qc0FqBJl5R8LNhVgdHRUe3ZB4WVu%2Fv%2Bz9bFYe1Tzwd3fz9fBVpI1VNLT5hpt8mxHO%2FequZLRBQ3xFUq%2B%2Bp%2Bq6MZyHOtOYHMoumkXg3Pzi63GgoIbcSburI0ETfXmIJTj9vKd5YVTKRYRkcsL9hwEUdvKo3An5NOBqrvHtxDBGJgRNBhv8NIF8CSLpBeErpFefEnccIjdG44G2Me&X-Amz-Signature=fcbfabcb147952321008c14cdb5d240e813aa34a77ad336d5de774b179963b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROYH2DT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F0tW%2Bwu1DLTnNMkAf8YLY154K9LwyYO35Tb8tuoEDTAIgEuFzz8NhspUXKf3ba6GRD3pPUcIaLT%2F%2ByXrd2nFWRrsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB41sIdExSg170aEJCrcA2EG%2BicCndBmzA4A0LyvEcQABYOOuZvdtpq8aiyWjQrlmcuUK%2FNLMoqVO0A5XNjsSEONGEsKCDY8VOWmbQcBsP40Jjc24%2B3FXnlXq12CPaSbG%2FUglc6d57s3NSkZcRVlxkzjkddhwRzPIpkqMHEumcMoE%2FYzs%2B7tKBSjWT4jECM0FgwbeEs8SDf7w1jqQq4UW%2FbtGnLKrtqfhgi%2FeboTSmRBSbQ0ViMxEc9rYmYuCX5bzaUym03rRnQfTy5l2WJ1QJStWcntFf5QlVnyFT8Dg9%2FOn%2F4nsskVjS2H%2FSoEu2%2BtU210rQXoXRUswhr8d5xZXqVIK7VNdGKBkhaykD8EtndGYuccFakYY6nXcQpnNpweUtPoK2iZZsozBfrjJSnpmxbtga9sPlnSo7MBXXfep94oJaDj7e%2BBLKaZX2RIFI0%2BQoCNjufozijw%2FM4noYbwFHb3F6u54GXZElrbaHfs%2FbpkGNX3hDHAaVsiQUWswJZ4HsXovZ91QUJGZH3LDzGGmN6aS573YKJeIt8zHF%2FRF0Cj0wcuHUf9E2BH0v593TFGe658mIMddYHdBA3uMlVCqLEykhx2seLIimNmQCAYZTrnOGLFadGRVw6wWcCgZNwx%2BjrORzs4jxUWp97FMI7S%2FcIGOqUBdRli1%2FSpRkfe5Qc0FqBJl5R8LNhVgdHRUe3ZB4WVu%2Fv%2Bz9bFYe1Tzwd3fz9fBVpI1VNLT5hpt8mxHO%2FequZLRBQ3xFUq%2B%2Bp%2Bq6MZyHOtOYHMoumkXg3Pzi63GgoIbcSburI0ETfXmIJTj9vKd5YVTKRYRkcsL9hwEUdvKo3An5NOBqrvHtxDBGJgRNBhv8NIF8CSLpBeErpFefEnccIjdG44G2Me&X-Amz-Signature=eeb70772e9405d7baedba9a8a75ca436d4aea479b47b18a4b65e0d75e3c2dda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
