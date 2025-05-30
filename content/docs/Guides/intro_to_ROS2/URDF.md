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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6PQ6QK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaaet3aOm5MG2un4sAoNXDj8%2F3W4e4sV9%2B1PTSAJXa7QIgEMtU%2B8kurHn8QjH0BXiZbgOt1squkEDABweUFxhwNcEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2QXOVfxVK3kAfHWSrcAyFbZK0Dq3aVcsP%2FwjV4wov9j6vLodyj%2BhLI9zYd0%2Fp7ry0Wdo3hNIjH4e1vyhPt2BYws6KR%2FQT3sblFZywQNSdVKPep7BnTDnmLYiJN%2FaV7SXTM%2Fq79goFUrS2KU5prbibbiaKktFm2yaJxkhmTf50T33p1SYwYOMyczwLNk4TotIoVcQUyvcbRuLHxFRYnye%2F%2FWYOMW2%2B8bVPLtyBftxlmHmfXVwZGBF7hrngmy7uRIJ1D%2FaNd1Al8v5Hw%2B%2BZrnVcmSAf34DS6zwPnGsNJyCdbMwT2FBG2GllJL3XjS%2F9xubClNlHa7io9owo6AuO8uX5QopXtYITETkCPyleMGnhuEG3pwHXxwi6cLs2Qg4ZwmfpY2rrMSAYcP2QTX9%2FP2Gv8ySZ%2BSpjV6q14N6pDcGsyibxqrGCKeo6%2Fs0DRtv34CUmFMX%2BwQcNEO6oXNZbgJc1huPZvwfvqpX7bjHZMUh%2FugRMBLca9I9CDiNK%2BSrZH2K3sNsFlNjPshFI6a65QdkRXya1BeBTQ5LhB7DUrSrpc4IF3%2BORL1W5fAItE2NCqz5dR4vTxxR78kfa%2Fg9U%2B65JsA1%2BGNV6FDtRBFq99XpS2oyUQV3lvZqBug4W9xVpwJqcpa906DkDt7OjDMI2758EGOqUBYU7X650ScLo7yQRX%2FzBGS8NUxjrCxLrUFuZsj2IJwGjKk3qPhW5ZSJ8vYPvqmmG1SoH6G6mFLb7tzhunpVMf%2FiNweLmQRjiyzKQ1Hrl6TRSVLmfse%2Bh7pmv0Ps51J3rCmsWGC6SVhT%2Bp7nGbySVO5Q6lJZfBz2Y5BACaHdA5lvhOyLa0OI49hegaEDA8%2F6qk8hRTwSYFGHOdAAHLH07xrH30xHLs&X-Amz-Signature=b401d26a36a0e5eb3a6f91b67b480f5944f1ba9224ce183ad7991ac9714515c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6PQ6QK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaaet3aOm5MG2un4sAoNXDj8%2F3W4e4sV9%2B1PTSAJXa7QIgEMtU%2B8kurHn8QjH0BXiZbgOt1squkEDABweUFxhwNcEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2QXOVfxVK3kAfHWSrcAyFbZK0Dq3aVcsP%2FwjV4wov9j6vLodyj%2BhLI9zYd0%2Fp7ry0Wdo3hNIjH4e1vyhPt2BYws6KR%2FQT3sblFZywQNSdVKPep7BnTDnmLYiJN%2FaV7SXTM%2Fq79goFUrS2KU5prbibbiaKktFm2yaJxkhmTf50T33p1SYwYOMyczwLNk4TotIoVcQUyvcbRuLHxFRYnye%2F%2FWYOMW2%2B8bVPLtyBftxlmHmfXVwZGBF7hrngmy7uRIJ1D%2FaNd1Al8v5Hw%2B%2BZrnVcmSAf34DS6zwPnGsNJyCdbMwT2FBG2GllJL3XjS%2F9xubClNlHa7io9owo6AuO8uX5QopXtYITETkCPyleMGnhuEG3pwHXxwi6cLs2Qg4ZwmfpY2rrMSAYcP2QTX9%2FP2Gv8ySZ%2BSpjV6q14N6pDcGsyibxqrGCKeo6%2Fs0DRtv34CUmFMX%2BwQcNEO6oXNZbgJc1huPZvwfvqpX7bjHZMUh%2FugRMBLca9I9CDiNK%2BSrZH2K3sNsFlNjPshFI6a65QdkRXya1BeBTQ5LhB7DUrSrpc4IF3%2BORL1W5fAItE2NCqz5dR4vTxxR78kfa%2Fg9U%2B65JsA1%2BGNV6FDtRBFq99XpS2oyUQV3lvZqBug4W9xVpwJqcpa906DkDt7OjDMI2758EGOqUBYU7X650ScLo7yQRX%2FzBGS8NUxjrCxLrUFuZsj2IJwGjKk3qPhW5ZSJ8vYPvqmmG1SoH6G6mFLb7tzhunpVMf%2FiNweLmQRjiyzKQ1Hrl6TRSVLmfse%2Bh7pmv0Ps51J3rCmsWGC6SVhT%2Bp7nGbySVO5Q6lJZfBz2Y5BACaHdA5lvhOyLa0OI49hegaEDA8%2F6qk8hRTwSYFGHOdAAHLH07xrH30xHLs&X-Amz-Signature=dc42453d8e0536f8b9a99e05e2745603b493175b417ab7d4e99f7167480b2614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
