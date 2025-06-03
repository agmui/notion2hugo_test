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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDPCJGF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2BdcVgP5VH3pTBHP0c2jmE2hLkbdcNbwt28W0Ej3n0QQIgeetQU5%2BpkD3lz55wRlTIto0UZSfXMYbFSkdXzyv4l6Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGgTLqVQIJhggFg9UyrcAxDiouwMfrXm9iscq1%2Fcb2i36AwhHPhpofS8bwWOOc0DFbsh%2BMTDjO5JbjloachOM%2Br31n8MUWwwaNObdr35H7F9m3%2FORg%2B4Fp6TIO8gPkD%2BbtA4rHLKb0cY6d4U%2Fs47GRnOtBfi%2Fw9SMYLzio2ki%2B117ZQRZFS%2FaTTujL3wJuHRJKUQD9jpO%2F1Ic3UHXtjJcno63sN6YTdrbE1xSnVJ4klggtNzZ6cPDa%2FHCt1RZNrvS62dPBjoIEwM8qle%2FkNzer4cQQ8rUF4BEdsvHRSv%2Bdx9%2FXOwsHTVLN5V4UGlcI89piqQOY4g7q0%2Bgpt6tOJjFOHYYPxyqKGXQdRMEGcafxa4aoH5Xo2XpfPCHIL2f2mkvNTvhKylv1JVr%2BziSrO3N4%2BOe1RJqnKDX5OmXQzFi9mAof%2BisIEBfdRPqKXSaXSO0VrcfmrOtqW3%2Fesy94bgDFOuS5EpxSKoa1ZVevP3TVtWSc1Mik4utMJqBeAnu604y9eAAGh6e%2FGttoVsINtb1mMT%2FAtobCgRwiUZom2QyNsHVRoZOXfpUA2lFLkZAF9cvnJJevxIV0rnBodva%2FSZ0lMh%2Bq6LisfaXBs6iUFIPg8abDQ%2FzorwfxNg2WpafnPjoWubP%2BEVWCyjr84JMKeF%2FcEGOqUBW43HGMdY19EdY7MDc9HxNngekgo3RqM89GiCWgfgSgdjFDT1h1QegKXJit1dlK2nXpq2PoiTt7C%2FbIsTLL0HOuMRq5dEP6DxOR58h6U94KGhYnL4M0pDKt66HHxfnrSkkeL5d1N0ZkK%2BAmjv93GoqvG7L2NC5f8Y7MqkBLYKnwRBwkhPrdyDo2R%2FSKiTwyglvFE%2FMIgVWeaN%2FgiiJiHzu35ezx%2BS&X-Amz-Signature=7adefb96f7c8b2d1ec478339a9de313f402d3f8c0b220e0c4cdb088b8801a39a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDPCJGF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2BdcVgP5VH3pTBHP0c2jmE2hLkbdcNbwt28W0Ej3n0QQIgeetQU5%2BpkD3lz55wRlTIto0UZSfXMYbFSkdXzyv4l6Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGgTLqVQIJhggFg9UyrcAxDiouwMfrXm9iscq1%2Fcb2i36AwhHPhpofS8bwWOOc0DFbsh%2BMTDjO5JbjloachOM%2Br31n8MUWwwaNObdr35H7F9m3%2FORg%2B4Fp6TIO8gPkD%2BbtA4rHLKb0cY6d4U%2Fs47GRnOtBfi%2Fw9SMYLzio2ki%2B117ZQRZFS%2FaTTujL3wJuHRJKUQD9jpO%2F1Ic3UHXtjJcno63sN6YTdrbE1xSnVJ4klggtNzZ6cPDa%2FHCt1RZNrvS62dPBjoIEwM8qle%2FkNzer4cQQ8rUF4BEdsvHRSv%2Bdx9%2FXOwsHTVLN5V4UGlcI89piqQOY4g7q0%2Bgpt6tOJjFOHYYPxyqKGXQdRMEGcafxa4aoH5Xo2XpfPCHIL2f2mkvNTvhKylv1JVr%2BziSrO3N4%2BOe1RJqnKDX5OmXQzFi9mAof%2BisIEBfdRPqKXSaXSO0VrcfmrOtqW3%2Fesy94bgDFOuS5EpxSKoa1ZVevP3TVtWSc1Mik4utMJqBeAnu604y9eAAGh6e%2FGttoVsINtb1mMT%2FAtobCgRwiUZom2QyNsHVRoZOXfpUA2lFLkZAF9cvnJJevxIV0rnBodva%2FSZ0lMh%2Bq6LisfaXBs6iUFIPg8abDQ%2FzorwfxNg2WpafnPjoWubP%2BEVWCyjr84JMKeF%2FcEGOqUBW43HGMdY19EdY7MDc9HxNngekgo3RqM89GiCWgfgSgdjFDT1h1QegKXJit1dlK2nXpq2PoiTt7C%2FbIsTLL0HOuMRq5dEP6DxOR58h6U94KGhYnL4M0pDKt66HHxfnrSkkeL5d1N0ZkK%2BAmjv93GoqvG7L2NC5f8Y7MqkBLYKnwRBwkhPrdyDo2R%2FSKiTwyglvFE%2FMIgVWeaN%2FgiiJiHzu35ezx%2BS&X-Amz-Signature=a344b1fadbdcab78793f6e0546af7b17c103e264697e2de5ad2d2b6212d9196b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
