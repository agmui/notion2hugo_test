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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAHHQKZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcIqfiJYJOkEqrY1ZcVrcYR698pc1FAG%2Fv0up0I07QfAiALCxIWB7vLmy6tmMigWcsU1BlFbK8Jt2pj8%2B4k3bav7ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpady4crlGpHpUBl%2FKtwDWP4J1D4Gq59%2FGf4dkrJ46Hu%2FyTjcDVEjJxzhyHOOQgCQ7%2BFdPVBnGapQ3sCEFRhLikhfEEC8Ps312k1lCPDYRPSIJFBJ26RWF6qbBtf7eJC7EJH92j1rKzirEObSr%2BoZ2HOk8tIXoV2zC2Np9KtcjyiIf5rpu8GXO59QIqbAUSIKfEs50eiJ8%2FXe1%2FfvgVX1bK%2Fi9D%2B37b5vF%2B9EUkjDoXmeRNBSmxgn3IRPOy%2FNVAEea2GP%2Be0yDzeZUMEOxylOp3P%2FEQ9i%2FJFl5O5YBzoysb1LOjAjt%2BkjOAAaLrKYSrcPxFqAUrA8EX8W1NCemx1%2BSnTDndVuK2xC7WVolvKpZCLkjoYbADPGlrZ%2BP0GRD3pyVK4bp4eRZbEDhWYit3wqvIUn6P8Wg2oyF%2BQwe7PoBnVlsKiT6DVWJ69%2FO9UC%2FKv2ztH1aHtFYKgM0F79jRxI0OE%2BnQo0YKQAlLVW4fJQzJnow08GjWGTaCj45k3cmTWnjR86aRaAchIU1uKLH4GIPa6IoaLLqLk%2F35XS92r5X2LonkzjUinMy7yJzlKmOVlq1cBcF03z5I8ov58MKdRyMFsFnT62vTco1LLkAOauiI63AatQnSO7%2BNpVS7YeXsa4S3qRCUpD3tSCRmAw2K6DwAY6pgHBI%2F19cLDHS2MVf%2Bj84GDCBdJQs70VXIvHMifC%2Bht%2Ff1SanHAqYL0%2By4WnQcXNA7Ss9XDuGpI50%2BeeuQn5D1L8beQPIlYOxIOvCfmA2%2BhLEuWhOrq5owLsWCOr5fFJZs11p8Jx9G9qZcuVVsNRxIllOxMvC7T8nD3ar0wOoSJVaSmvi0eafBaAyHIvtxtTvnre%2Bbuoe%2BrnZT0cTrw8TaibjrDuTbU3&X-Amz-Signature=90df7c76a3820391b9f1890358939b393a42a86fd58046ec4dd74e95e073ff65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAHHQKZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcIqfiJYJOkEqrY1ZcVrcYR698pc1FAG%2Fv0up0I07QfAiALCxIWB7vLmy6tmMigWcsU1BlFbK8Jt2pj8%2B4k3bav7ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpady4crlGpHpUBl%2FKtwDWP4J1D4Gq59%2FGf4dkrJ46Hu%2FyTjcDVEjJxzhyHOOQgCQ7%2BFdPVBnGapQ3sCEFRhLikhfEEC8Ps312k1lCPDYRPSIJFBJ26RWF6qbBtf7eJC7EJH92j1rKzirEObSr%2BoZ2HOk8tIXoV2zC2Np9KtcjyiIf5rpu8GXO59QIqbAUSIKfEs50eiJ8%2FXe1%2FfvgVX1bK%2Fi9D%2B37b5vF%2B9EUkjDoXmeRNBSmxgn3IRPOy%2FNVAEea2GP%2Be0yDzeZUMEOxylOp3P%2FEQ9i%2FJFl5O5YBzoysb1LOjAjt%2BkjOAAaLrKYSrcPxFqAUrA8EX8W1NCemx1%2BSnTDndVuK2xC7WVolvKpZCLkjoYbADPGlrZ%2BP0GRD3pyVK4bp4eRZbEDhWYit3wqvIUn6P8Wg2oyF%2BQwe7PoBnVlsKiT6DVWJ69%2FO9UC%2FKv2ztH1aHtFYKgM0F79jRxI0OE%2BnQo0YKQAlLVW4fJQzJnow08GjWGTaCj45k3cmTWnjR86aRaAchIU1uKLH4GIPa6IoaLLqLk%2F35XS92r5X2LonkzjUinMy7yJzlKmOVlq1cBcF03z5I8ov58MKdRyMFsFnT62vTco1LLkAOauiI63AatQnSO7%2BNpVS7YeXsa4S3qRCUpD3tSCRmAw2K6DwAY6pgHBI%2F19cLDHS2MVf%2Bj84GDCBdJQs70VXIvHMifC%2Bht%2Ff1SanHAqYL0%2By4WnQcXNA7Ss9XDuGpI50%2BeeuQn5D1L8beQPIlYOxIOvCfmA2%2BhLEuWhOrq5owLsWCOr5fFJZs11p8Jx9G9qZcuVVsNRxIllOxMvC7T8nD3ar0wOoSJVaSmvi0eafBaAyHIvtxtTvnre%2Bbuoe%2BrnZT0cTrw8TaibjrDuTbU3&X-Amz-Signature=791894bade29a93c41b9d51b7b3a4b7aff7a7eac718067e29ee99d78d138a6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
