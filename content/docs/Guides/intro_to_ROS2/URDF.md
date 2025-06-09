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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=d6ff24a1eede7649ac63142454608b93dd5e21e6a0be380374e5ffbe745f51fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=4d3b62f940ab188990c9d38d343c466382d06fcef6ce6f8f423c3059f5b08e39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
