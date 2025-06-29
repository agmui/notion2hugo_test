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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7JM7FS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4rCXRvB6XBuGJAMnYImRPPqGOH8VPiKI2FuSWx6kuNAiAP8V5hufQDR0zMx%2FQe8YfuZR4VW%2FZF2rJD7tl3x8xaPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYu99oC7R6kPpTS0HKtwDjNp3lZxe9wPO84U7QZ5y9KE4MThhuiUMAVvM1ce2Am2pNj3mPtSbmcQP%2B9867If0IDux8uyJgzC57bfQEJeze1YVrOtj9Wa3sFHwztntmpXW1FEFuF%2F4gsSa56IrUsdniwbX11Vp9dgnQoEYf4SPED4giEEATks%2Bj%2FlUAN1H9dUWSsGxNzQHPzdTHsDvr5KdrbymcycrBL5ZQ%2F0KiCZ1xTPqfSspk8T3Eli51i%2BrICXvGkEeQ8lREB7M8xdvzkpX3U750K4xiD819ebcbJozfNPAkJr4rRhFd5M04WNICgl8X96%2FEgfJSzLbmRpwU1gXCgHBYCWDQodc%2FptM%2Br%2BMojTXCKap35v31VHB6TYesSLUR7qNyE%2FHCVnGsXrTzqagYGZ%2FNf%2FKmRpefXhskdQZhae%2B%2BUG5MJBuHQYY2RgKuJq0kQc09Z3lOlbtMRURROJmoK0PK3CtuksJQYdm69%2F1sYz5HJMr%2Fz9NA9vbCImh3kh9tx60m0YZo6g%2BASiFL2kaqaEkqKL1rrws4YZmSlE2%2FuT0bA1CvR5WjovYx%2FEWyLjNNNaKRboMFXJmi2%2Fzxb0v09QuvBj0jIw4UgpqINVLyPZIsxaDSCgWIwNJCJhzvVJU4Qe6Na23yLDcLxgwupeCwwY6pgGZbwcQwtDLg1CyKuE%2FmobICEoKrs1qRjhI0YfThwvVR4cD77WfoCjWdgVjWjOL1LlLV7RlehAbfzBub8sgeGZEm1yG4NYjGRp3syC7rpIaBphtXZ9wVlSpGxKtdRifWO%2FcWwFuMml%2FMfvueu9s0IdCwwnjv6sm2AjQo09nc2tsSLFAkV94b99ujYdEMsnXmTL5LgXvoJFH7J8gGbWzHH0J1xauu7AU&X-Amz-Signature=abeca9e5f66a88cadfde535e4fed6554095e0df5a6048bc0c081ff40134df27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7JM7FS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4rCXRvB6XBuGJAMnYImRPPqGOH8VPiKI2FuSWx6kuNAiAP8V5hufQDR0zMx%2FQe8YfuZR4VW%2FZF2rJD7tl3x8xaPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYu99oC7R6kPpTS0HKtwDjNp3lZxe9wPO84U7QZ5y9KE4MThhuiUMAVvM1ce2Am2pNj3mPtSbmcQP%2B9867If0IDux8uyJgzC57bfQEJeze1YVrOtj9Wa3sFHwztntmpXW1FEFuF%2F4gsSa56IrUsdniwbX11Vp9dgnQoEYf4SPED4giEEATks%2Bj%2FlUAN1H9dUWSsGxNzQHPzdTHsDvr5KdrbymcycrBL5ZQ%2F0KiCZ1xTPqfSspk8T3Eli51i%2BrICXvGkEeQ8lREB7M8xdvzkpX3U750K4xiD819ebcbJozfNPAkJr4rRhFd5M04WNICgl8X96%2FEgfJSzLbmRpwU1gXCgHBYCWDQodc%2FptM%2Br%2BMojTXCKap35v31VHB6TYesSLUR7qNyE%2FHCVnGsXrTzqagYGZ%2FNf%2FKmRpefXhskdQZhae%2B%2BUG5MJBuHQYY2RgKuJq0kQc09Z3lOlbtMRURROJmoK0PK3CtuksJQYdm69%2F1sYz5HJMr%2Fz9NA9vbCImh3kh9tx60m0YZo6g%2BASiFL2kaqaEkqKL1rrws4YZmSlE2%2FuT0bA1CvR5WjovYx%2FEWyLjNNNaKRboMFXJmi2%2Fzxb0v09QuvBj0jIw4UgpqINVLyPZIsxaDSCgWIwNJCJhzvVJU4Qe6Na23yLDcLxgwupeCwwY6pgGZbwcQwtDLg1CyKuE%2FmobICEoKrs1qRjhI0YfThwvVR4cD77WfoCjWdgVjWjOL1LlLV7RlehAbfzBub8sgeGZEm1yG4NYjGRp3syC7rpIaBphtXZ9wVlSpGxKtdRifWO%2FcWwFuMml%2FMfvueu9s0IdCwwnjv6sm2AjQo09nc2tsSLFAkV94b99ujYdEMsnXmTL5LgXvoJFH7J8gGbWzHH0J1xauu7AU&X-Amz-Signature=163b452fc1447e406c7d6c2e3b3518e2999e7b252cda3b0bc2831c9981293067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
