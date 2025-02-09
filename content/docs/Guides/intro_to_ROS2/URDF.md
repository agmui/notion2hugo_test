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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUPCPHAJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsHGGWEWogx%2B5y3cB60u8hyml29eCo1CJ7zCKv7qRIPgIhANkpo4NAUKwfW5UsJCwbhazGqDGO66qvT96%2BhlvIT6cfKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfq6N8tFdzx43LKAwq3AOsMWUEJZW8HhK5%2FPkeyjtmcHz5Jjd2ZCypgN%2FDWGMbcPRa4lPqKaF0eCyjePLqfSCrdYJNJLWUm4qkwRGOt4C5gI6CrM4FBcqsDON0ueyIIge%2FtcKft5GWrkYbRJ%2FM6Np2%2BRRpbu9%2Fijyvwezn9ht1dh2xWYq%2B6v3oo8TSeqNOoCA%2Br6WzQ%2F54vTl250ln5sEpWOpEB8hMGqDgZilb9QnXOb7IihBdTyO5JGTNuDqECmvQ8sY0sWuFPWpoVBiZCNnF8rD%2FOfMk%2FinrhxKYWzMDU4Y7ENRRgplg7oJEwKr232nSulEguplvkS4e%2Bw9lpOer1e79Z553cJnB998rdjZnXNcgh6pPRnyb46j9AQlgtqr4dlzchoWudAA3q4DPckGN25tw0o0Kan89rg%2B4AmPuyxo3GozpUZY0XZA9UVZplrDxWtZQLLJpHE35oV92J20VYjltSxRPQUCgoa7NDVdzxZeR9eihYEYcAhS2183XBTvKg%2FI4aaYeYeqAiyGjwEXXHj9DSjiqCI81ECX8FnlAvQ76PdPV%2FkXBcaKW%2B5kpvIwo1lIrrhw5A2hDULV9RSl%2BgICs1KQ%2F35CKMsQ0XQ02DsQ8M%2FvtuJRSKFPq1jywhYrMn9nBQqvCTfquiDDyvqC9BjqkAUyYUWFzjbDhgelj2JKvyBJKtieQfMJcdX75dLZPpVfazGA15CiGr92BwZgUik6dud0blgOBsBriO%2FNtCnykFWieC1zKXvuUN7t1dHNlM1t4LjQ%2BZZ1oS3aapGEStmgbOXADlLHTfQLSRO7uc1Dnu7CbB%2BPPPM6Q7krtrQK1V0NDbtEiI1cwmAPgb9FOEo4hzh0yJhqNLAITNqS7mvBReTkZfr6Q&X-Amz-Signature=114485a751fb3051fb32efa91b59b00a6ea66a8edac82585ba025cb944c7f2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUPCPHAJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsHGGWEWogx%2B5y3cB60u8hyml29eCo1CJ7zCKv7qRIPgIhANkpo4NAUKwfW5UsJCwbhazGqDGO66qvT96%2BhlvIT6cfKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfq6N8tFdzx43LKAwq3AOsMWUEJZW8HhK5%2FPkeyjtmcHz5Jjd2ZCypgN%2FDWGMbcPRa4lPqKaF0eCyjePLqfSCrdYJNJLWUm4qkwRGOt4C5gI6CrM4FBcqsDON0ueyIIge%2FtcKft5GWrkYbRJ%2FM6Np2%2BRRpbu9%2Fijyvwezn9ht1dh2xWYq%2B6v3oo8TSeqNOoCA%2Br6WzQ%2F54vTl250ln5sEpWOpEB8hMGqDgZilb9QnXOb7IihBdTyO5JGTNuDqECmvQ8sY0sWuFPWpoVBiZCNnF8rD%2FOfMk%2FinrhxKYWzMDU4Y7ENRRgplg7oJEwKr232nSulEguplvkS4e%2Bw9lpOer1e79Z553cJnB998rdjZnXNcgh6pPRnyb46j9AQlgtqr4dlzchoWudAA3q4DPckGN25tw0o0Kan89rg%2B4AmPuyxo3GozpUZY0XZA9UVZplrDxWtZQLLJpHE35oV92J20VYjltSxRPQUCgoa7NDVdzxZeR9eihYEYcAhS2183XBTvKg%2FI4aaYeYeqAiyGjwEXXHj9DSjiqCI81ECX8FnlAvQ76PdPV%2FkXBcaKW%2B5kpvIwo1lIrrhw5A2hDULV9RSl%2BgICs1KQ%2F35CKMsQ0XQ02DsQ8M%2FvtuJRSKFPq1jywhYrMn9nBQqvCTfquiDDyvqC9BjqkAUyYUWFzjbDhgelj2JKvyBJKtieQfMJcdX75dLZPpVfazGA15CiGr92BwZgUik6dud0blgOBsBriO%2FNtCnykFWieC1zKXvuUN7t1dHNlM1t4LjQ%2BZZ1oS3aapGEStmgbOXADlLHTfQLSRO7uc1Dnu7CbB%2BPPPM6Q7krtrQK1V0NDbtEiI1cwmAPgb9FOEo4hzh0yJhqNLAITNqS7mvBReTkZfr6Q&X-Amz-Signature=5614541367866ca97b8c9f54441e40653279a6adf28fc04344b1d150f5033444&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
