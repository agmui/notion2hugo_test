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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYCIJZJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQNjabUGcqQuSCi%2Fwhy5ZbncyfjB4TqbZ9chdWbwhv2AiEA48I2WAmKGhIduGA3wfi1es7gzl83Wm2mnTK0iZNho4sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApPf9Bv5bdwCGSaaSrcA%2FWygj3sTr95TfXPhINmlvCl7gnqrUsaLeW%2BqJu2ii%2FJFmzBvU07S5MlFWeXM6Pn%2FhXde92q7KqODR89i2EBWk9sC%2BzX7HioYP3YJvjV9uSz%2B8k6%2BULsaqukhkH%2BSrxsTOrYySKXLxzefBGg72kPV06s4UgsMlZD6iZr973zdAZ8K9%2F8suVokOzYy%2BquQopcUC1mkMKIJOWps6sKSgv3MQLrmXEVxcmSacbBaTIW7alWMuIhODNQIFjQiaLC5aEk%2BUr%2FiUnqgUx3c3wWZpP4R0KR4fI4OaeNSvfgw6t5FR75XQX2hTHcH8%2FKN8lsc7%2FXzywgsH5XXFDzJIImZMbuSx3SMGJpixNigrVl%2FecsbNLCClvC42sXvm6eyF1ThryPIFRVLEGMgOuJpaOTc6M3kc%2B3qFSIrwqI3iwXF2Wc95Vn290t6043ii%2Fs2MJmx6RdM58%2BIQ3BybszIpawQtp%2BN6ZPrqpvCEqi9jJ64e4BvA%2B3M%2BImtkqXZ%2FMbSLJpCI2%2BCgRDCFx3dpuXISMJXIp%2BRmceWhubnDMS2a8nLKumOZxV9%2FiIzEZoTRMgNx1fdG%2F20uIG5W44dopNTEXsikpBgndXbefeZLv%2B6L6pLC3w43iPX7hQmGrxa6wVFzjfMLaiyMMGOqUBIagZ%2BZSoX%2BidRBm8TDjbkl6Z%2FTKQr7Okm6t3ZiL7IXQHbG9x2tncPhwfXk0lCAISdKD6PlYx4KOa5W%2BeCzoV%2F9T4xKz%2BoY4B1LKkiFKaEjKv0p59m%2FL6rKixRQKzqxZ59KTewjBdUy46qOaJAq3kf2zF8rrhU8P9KL1aSXcSAbQfTXBIasQ%2B%2FbthKCqI8XkzEWZjVafj8NvFOtk8Zz307NXqz7Mm&X-Amz-Signature=ad51d5d060d6acfb0ca2cb6cf15ad2adcab78824adff5987f9214cf97a1f3c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYCIJZJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQNjabUGcqQuSCi%2Fwhy5ZbncyfjB4TqbZ9chdWbwhv2AiEA48I2WAmKGhIduGA3wfi1es7gzl83Wm2mnTK0iZNho4sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApPf9Bv5bdwCGSaaSrcA%2FWygj3sTr95TfXPhINmlvCl7gnqrUsaLeW%2BqJu2ii%2FJFmzBvU07S5MlFWeXM6Pn%2FhXde92q7KqODR89i2EBWk9sC%2BzX7HioYP3YJvjV9uSz%2B8k6%2BULsaqukhkH%2BSrxsTOrYySKXLxzefBGg72kPV06s4UgsMlZD6iZr973zdAZ8K9%2F8suVokOzYy%2BquQopcUC1mkMKIJOWps6sKSgv3MQLrmXEVxcmSacbBaTIW7alWMuIhODNQIFjQiaLC5aEk%2BUr%2FiUnqgUx3c3wWZpP4R0KR4fI4OaeNSvfgw6t5FR75XQX2hTHcH8%2FKN8lsc7%2FXzywgsH5XXFDzJIImZMbuSx3SMGJpixNigrVl%2FecsbNLCClvC42sXvm6eyF1ThryPIFRVLEGMgOuJpaOTc6M3kc%2B3qFSIrwqI3iwXF2Wc95Vn290t6043ii%2Fs2MJmx6RdM58%2BIQ3BybszIpawQtp%2BN6ZPrqpvCEqi9jJ64e4BvA%2B3M%2BImtkqXZ%2FMbSLJpCI2%2BCgRDCFx3dpuXISMJXIp%2BRmceWhubnDMS2a8nLKumOZxV9%2FiIzEZoTRMgNx1fdG%2F20uIG5W44dopNTEXsikpBgndXbefeZLv%2B6L6pLC3w43iPX7hQmGrxa6wVFzjfMLaiyMMGOqUBIagZ%2BZSoX%2BidRBm8TDjbkl6Z%2FTKQr7Okm6t3ZiL7IXQHbG9x2tncPhwfXk0lCAISdKD6PlYx4KOa5W%2BeCzoV%2F9T4xKz%2BoY4B1LKkiFKaEjKv0p59m%2FL6rKixRQKzqxZ59KTewjBdUy46qOaJAq3kf2zF8rrhU8P9KL1aSXcSAbQfTXBIasQ%2B%2FbthKCqI8XkzEWZjVafj8NvFOtk8Zz307NXqz7Mm&X-Amz-Signature=12ec1886ac2242bad97b1c712778a196df836fa14f2bbad132c576629cd36c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
