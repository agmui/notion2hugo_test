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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINC2OQS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECiTCbf0jtJeB7QBE%2Bdkq4PRCEbWriO%2BjgFIQPMILzyAiB3%2BJNoB3nP145OowphMiGV9KLGxOsB3vltTykxQvQFeyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhfBgXYoONqiyhtnKtwDsAHtrCwsfEAPCoHmpB%2Fg4XSuhd61omK2wa01q5l8Ds2d89jM7WbvrAGQm6tNyt3JqTf1REAaRJgvojYcBKoeTHQ2MqKBK0uen1%2FhDVoRtp8lBNADILMz9ylngW49AbDNALd4WMnhLEvy9mrpLZW2zYe7Tc0op%2B8kYr0C14h2QZYKGM9c5SQkjnAtfU%2FoPS5V4Q%2FB9SFiBOA8vaLO%2BIPvmMbtI6elkBaDwe8N7l0XE3iGPEWNeufRA9mUA4XgFOtdaODBK7erh8uzDM4%2FdaO7b47PfCeUHVaFCSa%2BjTnY%2FDNT1JZMBiySyPYmzkaQRkbOgT5CSTNaAPdJKpaRyp7%2Bt3atBHKBCyMzsYyQZliDmCmsL8rvm1yHBuwKdZLccA2BefdDaQG2DVAWrLlwCEmZC2l5KpI09F%2B9NTSrjNzFxt6MK4c%2F9kTF5FsSDg4ok1h3wVpm%2FObrBaVlW%2FNIw8aXN1rJhMORaz9Vw016463tmokl%2FUVKjKYQP%2FT8TWJcTgfr8iAEHWoiC%2BOCY6A%2B7uXSZCrc1fP5oYzZoU5dcNlibkXZ27CnrOruVnbIfKKzJ8tkVlsNrBt1L7NynZqrj9MKFpoGEsrUv4jj3h5up5xZPL1CrNvSkv6sUWZ%2F7Icw3fmWwAY6pgE0smH0WiExtzIJEe0Irxirbh8zB092OwbgdB1s5S3Us%2FuTSTsEIeuM3HnUEKmaOO%2BYwHM9NtJLQAiPGqY7vIcux71h0SPJF%2Fqq8umT4NghesE9cYlBFqI0Mn8ulx%2F%2BLtDmAfCpbz2DmbCDcOMi1PXABTw2OYnx8qhNi2HWZpPHo9YLylyew8L6BrVJyAFqOjaQpryosyU9sv0FEeim4o6HI2ofLBjW&X-Amz-Signature=af1e15f478ca24e33aa5b6a1ed40e4f3d02f7f1aa03893edb648e37110f5830a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINC2OQS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECiTCbf0jtJeB7QBE%2Bdkq4PRCEbWriO%2BjgFIQPMILzyAiB3%2BJNoB3nP145OowphMiGV9KLGxOsB3vltTykxQvQFeyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhfBgXYoONqiyhtnKtwDsAHtrCwsfEAPCoHmpB%2Fg4XSuhd61omK2wa01q5l8Ds2d89jM7WbvrAGQm6tNyt3JqTf1REAaRJgvojYcBKoeTHQ2MqKBK0uen1%2FhDVoRtp8lBNADILMz9ylngW49AbDNALd4WMnhLEvy9mrpLZW2zYe7Tc0op%2B8kYr0C14h2QZYKGM9c5SQkjnAtfU%2FoPS5V4Q%2FB9SFiBOA8vaLO%2BIPvmMbtI6elkBaDwe8N7l0XE3iGPEWNeufRA9mUA4XgFOtdaODBK7erh8uzDM4%2FdaO7b47PfCeUHVaFCSa%2BjTnY%2FDNT1JZMBiySyPYmzkaQRkbOgT5CSTNaAPdJKpaRyp7%2Bt3atBHKBCyMzsYyQZliDmCmsL8rvm1yHBuwKdZLccA2BefdDaQG2DVAWrLlwCEmZC2l5KpI09F%2B9NTSrjNzFxt6MK4c%2F9kTF5FsSDg4ok1h3wVpm%2FObrBaVlW%2FNIw8aXN1rJhMORaz9Vw016463tmokl%2FUVKjKYQP%2FT8TWJcTgfr8iAEHWoiC%2BOCY6A%2B7uXSZCrc1fP5oYzZoU5dcNlibkXZ27CnrOruVnbIfKKzJ8tkVlsNrBt1L7NynZqrj9MKFpoGEsrUv4jj3h5up5xZPL1CrNvSkv6sUWZ%2F7Icw3fmWwAY6pgE0smH0WiExtzIJEe0Irxirbh8zB092OwbgdB1s5S3Us%2FuTSTsEIeuM3HnUEKmaOO%2BYwHM9NtJLQAiPGqY7vIcux71h0SPJF%2Fqq8umT4NghesE9cYlBFqI0Mn8ulx%2F%2BLtDmAfCpbz2DmbCDcOMi1PXABTw2OYnx8qhNi2HWZpPHo9YLylyew8L6BrVJyAFqOjaQpryosyU9sv0FEeim4o6HI2ofLBjW&X-Amz-Signature=55841bea60c3798ac4366fcc025d7408a66f4f446ae6c998d9db4f3adcb5b958&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
