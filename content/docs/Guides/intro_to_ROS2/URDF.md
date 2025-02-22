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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VS2I4B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHauK0lH0Bd%2BZHgNiPj1sYbOfiXjNclCYJL0RsFtUUVmAiEAhfoutttbvCoCA0SjFqXiEv0gusDD1K617EpS3taIdhEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFHTFqNGAfPW9XnASrcAzkbJIVrseIvDwXnvlDcx3mTLS0edbIdWXyAT2U57Nwu9vsochyrfSBGoIZvC9JPo%2ByAzvuIN1XwINeR3EGYYiG0Hu%2F2baoH3JwTh5bqsS0%2Bmxc2rEnwgLbbhKgFZiZBZuaxNUvwmSBXEGGuSyH8k%2Biml7umgUZN%2FUMMnSAdh%2FYza9j%2BgncbebtO2rQE1OKxmg6WO4VH6teoGABcHEB7tkMQm1LmF2S33u%2Fykr7IQ87vO3Hb87rGFk7ivkEwa8PsvqmvC6s6JDgOULIvFVgZKYc38eQzocni%2FGC6fUm8mXNqWA26LkSM4FHCHhMI6X4T29C5fPr5toNQZIoXCC0IhsOTz%2BozDnOy1xM4kOH45m6OirSWnzcCHY4zlbPI30VXMclgsDDA6vS002vjByKujDxuXFgi9icO3ALwzdGHGQ5n2R0yVDyGonQkOFj6HkhZXrS6CBIcX9dgciLmPQ1HtHI5q5ElVdDRc6tDgscFQKZFaMcmQJvSdwXuOMhy8cNb0me358jFlUX6s9utxxLdEduYHB0wtuMapSD3uU7Y%2Fp65s2IffYw7gdCkYofbMM%2F%2Bk6flNku3BfaZ6osdIStOU3%2B6xs0JcYBYdHA9PXE73S84k8tn81lRW5DDu7rAMOCd5r0GOqUBf1PbBZwCJghmw57PLRyKcDp0ZS0RD6AifBCnuU2ACxoZ4sVl896Z8IoiDTg58VsKJGYCD0Xg98SNclVjXnGeJm%2BipPnRMRhHAaBachQzcEZnq8mpduRQHyVjeR509gyRZWN6SXJPrV7oh7ckL0ROFeLQWmHOqIL1NxZ1gokNNvhJyOEXd9godOro6Qc9tg%2Fmz8ZRag%2FhedZ5PXO3r0HVBMo6hQoC&X-Amz-Signature=b130e8a3841493492c1bcf51eb53a2a8082a423ee60b22481c30079d270ad54a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VS2I4B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHauK0lH0Bd%2BZHgNiPj1sYbOfiXjNclCYJL0RsFtUUVmAiEAhfoutttbvCoCA0SjFqXiEv0gusDD1K617EpS3taIdhEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFHTFqNGAfPW9XnASrcAzkbJIVrseIvDwXnvlDcx3mTLS0edbIdWXyAT2U57Nwu9vsochyrfSBGoIZvC9JPo%2ByAzvuIN1XwINeR3EGYYiG0Hu%2F2baoH3JwTh5bqsS0%2Bmxc2rEnwgLbbhKgFZiZBZuaxNUvwmSBXEGGuSyH8k%2Biml7umgUZN%2FUMMnSAdh%2FYza9j%2BgncbebtO2rQE1OKxmg6WO4VH6teoGABcHEB7tkMQm1LmF2S33u%2Fykr7IQ87vO3Hb87rGFk7ivkEwa8PsvqmvC6s6JDgOULIvFVgZKYc38eQzocni%2FGC6fUm8mXNqWA26LkSM4FHCHhMI6X4T29C5fPr5toNQZIoXCC0IhsOTz%2BozDnOy1xM4kOH45m6OirSWnzcCHY4zlbPI30VXMclgsDDA6vS002vjByKujDxuXFgi9icO3ALwzdGHGQ5n2R0yVDyGonQkOFj6HkhZXrS6CBIcX9dgciLmPQ1HtHI5q5ElVdDRc6tDgscFQKZFaMcmQJvSdwXuOMhy8cNb0me358jFlUX6s9utxxLdEduYHB0wtuMapSD3uU7Y%2Fp65s2IffYw7gdCkYofbMM%2F%2Bk6flNku3BfaZ6osdIStOU3%2B6xs0JcYBYdHA9PXE73S84k8tn81lRW5DDu7rAMOCd5r0GOqUBf1PbBZwCJghmw57PLRyKcDp0ZS0RD6AifBCnuU2ACxoZ4sVl896Z8IoiDTg58VsKJGYCD0Xg98SNclVjXnGeJm%2BipPnRMRhHAaBachQzcEZnq8mpduRQHyVjeR509gyRZWN6SXJPrV7oh7ckL0ROFeLQWmHOqIL1NxZ1gokNNvhJyOEXd9godOro6Qc9tg%2Fmz8ZRag%2FhedZ5PXO3r0HVBMo6hQoC&X-Amz-Signature=ec9dc1daa895c0f59068ee6d5981a81003a510dbc480d2f09dbf55ab9624ce04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
