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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T44WCI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHitzjiV%2F8b350G3iU6in1OUAU42H7ZgfFaVFcXWCmKnAiEA4XcIx27d7WOKX0XzlX%2BVj5QFccCqZ2F2bJAnJxpVEAwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDZFtf4g1p0e20uilircA%2B7Vl8ZKG%2FUQGaI%2BQz4GaWYvTAGjCXuDmBQDg0tkXa5INEPixWeC9akkWrJkbSOMQ9TEBJnegDnNx7vi4ppFwgGeEDTVOJF9lnTLE4%2BaGvGza9caXBzbXBVt6oT0fd%2B7o8fU%2BwDvyywJ4ynRTB%2BMobAGCqtpdFEH9XxdfcxlamYY7IHn%2B0w8OdQIthuShzpa9L6VhKF1NVcllC5fSjZiOmo%2BwU1ywB8i0Ajg%2FAob5ssLNCr4M5Z55DX8t3zADrRvlT%2F2wrkj3JXC5k1hf5XBY9%2BynnjbAkjOCDh1dLOoTrBv%2FMfukgbUdlWwekHJEwlbxii6oNuntgOh4UeoEuy5HF764AiXlrk69A5BRCTzlK82ivuj%2BwaWJW6DO%2FxnZqEuluv3%2BFVBT4MzCEqSlszufajPM820znPl3s0VZWg9%2BV47RkFd7Mk3%2F5tKFxarRob8UFmhJBL1or6ERAlnF9HbbcsCa3jOeTtw18zLcP%2FMu%2F5pbV32Y2uQoxhnCuwfrVvi%2Bg66blJTQEKxUgLDXlmDqMzSNMSX0uys12ZmehT33ByTdEG0nna8WIr2LglNzNLKIemlfGhHujUIXDJq8wOOTwWZjWsgASeuiTPoaFu8R3n4TwjAi3u1H5XWRpFBMIzf%2Fr8GOqUBbKpC1PgH8AJHALx%2FsAkrtM7eg1BCp6ODUKJxvKoAx2c0fGewxbh3a0uyqfGOSdshrmK6L05nEgitFAiVRiviepCUcVPqWQq5W2q46BH%2FR4mr4IjYKxm2z3KNlQK2Ym5aLtAgtnuxJHeA8ZzAig0IgYc%2BDqC8N%2F1ejSkDQ7XUNrs0fGIHq%2FWXwKk7M0JDW3a221ER9Yh195s8rJg4Lt5PCt26AMM6&X-Amz-Signature=00ee96d3b2e54e3e7903c51e761df19db55de001487618b2437aacbe7078364b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T44WCI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHitzjiV%2F8b350G3iU6in1OUAU42H7ZgfFaVFcXWCmKnAiEA4XcIx27d7WOKX0XzlX%2BVj5QFccCqZ2F2bJAnJxpVEAwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDZFtf4g1p0e20uilircA%2B7Vl8ZKG%2FUQGaI%2BQz4GaWYvTAGjCXuDmBQDg0tkXa5INEPixWeC9akkWrJkbSOMQ9TEBJnegDnNx7vi4ppFwgGeEDTVOJF9lnTLE4%2BaGvGza9caXBzbXBVt6oT0fd%2B7o8fU%2BwDvyywJ4ynRTB%2BMobAGCqtpdFEH9XxdfcxlamYY7IHn%2B0w8OdQIthuShzpa9L6VhKF1NVcllC5fSjZiOmo%2BwU1ywB8i0Ajg%2FAob5ssLNCr4M5Z55DX8t3zADrRvlT%2F2wrkj3JXC5k1hf5XBY9%2BynnjbAkjOCDh1dLOoTrBv%2FMfukgbUdlWwekHJEwlbxii6oNuntgOh4UeoEuy5HF764AiXlrk69A5BRCTzlK82ivuj%2BwaWJW6DO%2FxnZqEuluv3%2BFVBT4MzCEqSlszufajPM820znPl3s0VZWg9%2BV47RkFd7Mk3%2F5tKFxarRob8UFmhJBL1or6ERAlnF9HbbcsCa3jOeTtw18zLcP%2FMu%2F5pbV32Y2uQoxhnCuwfrVvi%2Bg66blJTQEKxUgLDXlmDqMzSNMSX0uys12ZmehT33ByTdEG0nna8WIr2LglNzNLKIemlfGhHujUIXDJq8wOOTwWZjWsgASeuiTPoaFu8R3n4TwjAi3u1H5XWRpFBMIzf%2Fr8GOqUBbKpC1PgH8AJHALx%2FsAkrtM7eg1BCp6ODUKJxvKoAx2c0fGewxbh3a0uyqfGOSdshrmK6L05nEgitFAiVRiviepCUcVPqWQq5W2q46BH%2FR4mr4IjYKxm2z3KNlQK2Ym5aLtAgtnuxJHeA8ZzAig0IgYc%2BDqC8N%2F1ejSkDQ7XUNrs0fGIHq%2FWXwKk7M0JDW3a221ER9Yh195s8rJg4Lt5PCt26AMM6&X-Amz-Signature=27de1396b0f6677e6de4ba42cb2f56407677e992a942f52966882ecfe1cf9b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
