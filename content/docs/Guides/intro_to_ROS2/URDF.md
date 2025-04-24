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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPATKJW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqj787n5k%2B0qVXnEU27t5%2BqZ4y9sdq7cGEmMfSjJGQWAiEAuUAzYsqbWD44Kr4UACrEgVscGDNe0qPcqWtpr0un%2F%2F8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGhxgsfsE1r6O6mQbCrcAxdVEoBd1jSVvG8Km9YTMKz0U991qlQJlDyY2OBqK833l2bMN8Qe%2F85TFunCPLIXfWEXAqe46sX7qR%2F8Wu%2FvZlwW3WSD%2BkFE5ASvSVP4iLXrukg6lORZLpe%2FlwB15K3UmKeqF7MyfQXQEaRX%2Bi0vL6Lo7WshWSKrH%2FysE%2FUEsfMv6o18UwdHJI3rfGMFmCJ1huFVZi6yxJdDH2sPFUMbXOc8UEwfWFh2kU%2BG4IB8vpumnaog0bE3l737uXXJMs3%2F8gs0RPmwzFn%2B%2FGPKpmjmIHBUOzxKwBGyjd0kltQlsDjTW0jaTZo5ZNJIRY5R3VsW66UnYDiCuKFKO3pTlBVB0DGKWQ6O8jM53TphqWf63Q6e1qlSVI%2BbR0DO2doJmtiwPbvYCUo6yD%2BcRDETo4%2FPozyi16kfT1EtR0FvytyJ8ETOsKFFI3WeDb4bTMAUe97lotXDwB8aEtyBTghfHwmEk6LyguQ6MPAeWFDOsQXdSnlFpwOtcYTzLTEdBcHQMh1SsttNsacfUgg73h281NfK10kWIkvfAw%2B4YlUb4tt57HRH5wD9FaZCu0UqTuGVzISVxfElPIAd3gXVf7qHMmbMAR3PD0S9qbSZYDUq%2FGYbcEtLvNYNMiJjoTlACigtMKXAqsAGOqUBFNxnrjBzpcacE%2BhhGy38Hd0ZHWx%2FeYj1ynZdp%2FAbaoNy8fzmaBu%2B8qwyTZgzUJlL6CFwG57xd8sOVNuLelKULERylvIP4gcdbFZks1DHYtfSlNqQq6TKcvuAV4nVjfdJ3nzZpfp3OLKdfFq705PWI7aBc%2FwIEjEP7f6sEVEIQGd0J1uqwqko6XcZH3hs6io2EJ8aW3mAOIrCuKjKjfGgGtmecCIA&X-Amz-Signature=47480d34e1915eeba8cce629ee04730b447274959e1d727c5742dd2b97241877&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPATKJW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqj787n5k%2B0qVXnEU27t5%2BqZ4y9sdq7cGEmMfSjJGQWAiEAuUAzYsqbWD44Kr4UACrEgVscGDNe0qPcqWtpr0un%2F%2F8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGhxgsfsE1r6O6mQbCrcAxdVEoBd1jSVvG8Km9YTMKz0U991qlQJlDyY2OBqK833l2bMN8Qe%2F85TFunCPLIXfWEXAqe46sX7qR%2F8Wu%2FvZlwW3WSD%2BkFE5ASvSVP4iLXrukg6lORZLpe%2FlwB15K3UmKeqF7MyfQXQEaRX%2Bi0vL6Lo7WshWSKrH%2FysE%2FUEsfMv6o18UwdHJI3rfGMFmCJ1huFVZi6yxJdDH2sPFUMbXOc8UEwfWFh2kU%2BG4IB8vpumnaog0bE3l737uXXJMs3%2F8gs0RPmwzFn%2B%2FGPKpmjmIHBUOzxKwBGyjd0kltQlsDjTW0jaTZo5ZNJIRY5R3VsW66UnYDiCuKFKO3pTlBVB0DGKWQ6O8jM53TphqWf63Q6e1qlSVI%2BbR0DO2doJmtiwPbvYCUo6yD%2BcRDETo4%2FPozyi16kfT1EtR0FvytyJ8ETOsKFFI3WeDb4bTMAUe97lotXDwB8aEtyBTghfHwmEk6LyguQ6MPAeWFDOsQXdSnlFpwOtcYTzLTEdBcHQMh1SsttNsacfUgg73h281NfK10kWIkvfAw%2B4YlUb4tt57HRH5wD9FaZCu0UqTuGVzISVxfElPIAd3gXVf7qHMmbMAR3PD0S9qbSZYDUq%2FGYbcEtLvNYNMiJjoTlACigtMKXAqsAGOqUBFNxnrjBzpcacE%2BhhGy38Hd0ZHWx%2FeYj1ynZdp%2FAbaoNy8fzmaBu%2B8qwyTZgzUJlL6CFwG57xd8sOVNuLelKULERylvIP4gcdbFZks1DHYtfSlNqQq6TKcvuAV4nVjfdJ3nzZpfp3OLKdfFq705PWI7aBc%2FwIEjEP7f6sEVEIQGd0J1uqwqko6XcZH3hs6io2EJ8aW3mAOIrCuKjKjfGgGtmecCIA&X-Amz-Signature=3c29fab43c6921306bba3d37b49d5ea5dc2120c84e4f22d0d4a5e3420ae82451&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
