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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TKRJKN%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCfQScR7ycRMlh1rIfQaOWcdynAU6DX1STyhRHvr2%2FwLwIgXL5a2XbHI%2B1oLzm0xmxeyTXrjMUZ4B9s88U1VcFdGfQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLp7HIGPePasPmjhqircA3ljRWxUCcnWVpjbK0y4ByGIf%2Bu4DZAqkis1BIQcYlrUiamwyfoBqfdIjBbKYXWot74GM6Nt4uE0%2BUBy5Wmx8OK6eEQ14nQYBzsFRykn%2B2jh%2FOr4dFxQiKlS30quAI%2BDWwvxOAJeZN1xf2TWJWZfy1PywAPyh7hLLINIqOIfTgv0q%2FryUGH4iEl5PNmjtUvE79EvTVkaIK0HtzDTUQSiOIrOWdjjwInz%2F079vBij5RwNhngGQOdQaMsepH2Sj3XWa4Srzc8dy7rfZj1poTCBmHCeN27rn25vV2CMAS2WamStLwgilflVj%2BmkOHN849NG0MEn3wC6Jb7c%2BiuyvucApm%2Bcr%2BGgSdf231YyaWPXWgx07lejHm7LrJyU44E9EWO03kdELAWpY8Ah14Kz%2BWbc1Utu2CbqcUm3f2iIkkqM1boF9DBwzXTK%2FibuuPPsjDVOnYQB1CEpX0DmIJvWCjcwfwftQo0uv3voWt6EEOE5bNPDCPnck8uu%2FOFg5PPUtpp9FKdJt1KnLz3Ma8MxczMQvHr1Src1BvCMcfN5GmKtwpQhdt2TvZbYTlxkN1%2Fm%2F3q6TRhMZ%2BcjRC4ZBXIz1HfMnsJXeNuvemeTvzlM%2FyWtgnM1CZ5aFmKAPq6sBHNgMM68%2Bb0GOqUBrTAms3a3Fa%2FW%2FgoQ3b1EkbhlSvOfB1T0RNknIgl2lVq64w0BdK7%2BTu%2Bitk6nJN%2FWFaf%2BmVWELzo7x%2BX%2BUISvHDm3u872rgCSmTxed6yMnP33YgBDusV0YwCH%2F0rmwTgb%2FQ%2FaPO4ZEHWepiCRcQQkelQ3NixXWDLv%2Bovlslb8OlXexM11kK1bIosgkcrfsf715fppRtvQBo3zmh5btXhbDcvYUxf0&X-Amz-Signature=61721c60f0c298ca776ebc305942398acfc88d3445a06238eb3fa92ac41e1ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TKRJKN%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCfQScR7ycRMlh1rIfQaOWcdynAU6DX1STyhRHvr2%2FwLwIgXL5a2XbHI%2B1oLzm0xmxeyTXrjMUZ4B9s88U1VcFdGfQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLp7HIGPePasPmjhqircA3ljRWxUCcnWVpjbK0y4ByGIf%2Bu4DZAqkis1BIQcYlrUiamwyfoBqfdIjBbKYXWot74GM6Nt4uE0%2BUBy5Wmx8OK6eEQ14nQYBzsFRykn%2B2jh%2FOr4dFxQiKlS30quAI%2BDWwvxOAJeZN1xf2TWJWZfy1PywAPyh7hLLINIqOIfTgv0q%2FryUGH4iEl5PNmjtUvE79EvTVkaIK0HtzDTUQSiOIrOWdjjwInz%2F079vBij5RwNhngGQOdQaMsepH2Sj3XWa4Srzc8dy7rfZj1poTCBmHCeN27rn25vV2CMAS2WamStLwgilflVj%2BmkOHN849NG0MEn3wC6Jb7c%2BiuyvucApm%2Bcr%2BGgSdf231YyaWPXWgx07lejHm7LrJyU44E9EWO03kdELAWpY8Ah14Kz%2BWbc1Utu2CbqcUm3f2iIkkqM1boF9DBwzXTK%2FibuuPPsjDVOnYQB1CEpX0DmIJvWCjcwfwftQo0uv3voWt6EEOE5bNPDCPnck8uu%2FOFg5PPUtpp9FKdJt1KnLz3Ma8MxczMQvHr1Src1BvCMcfN5GmKtwpQhdt2TvZbYTlxkN1%2Fm%2F3q6TRhMZ%2BcjRC4ZBXIz1HfMnsJXeNuvemeTvzlM%2FyWtgnM1CZ5aFmKAPq6sBHNgMM68%2Bb0GOqUBrTAms3a3Fa%2FW%2FgoQ3b1EkbhlSvOfB1T0RNknIgl2lVq64w0BdK7%2BTu%2Bitk6nJN%2FWFaf%2BmVWELzo7x%2BX%2BUISvHDm3u872rgCSmTxed6yMnP33YgBDusV0YwCH%2F0rmwTgb%2FQ%2FaPO4ZEHWepiCRcQQkelQ3NixXWDLv%2Bovlslb8OlXexM11kK1bIosgkcrfsf715fppRtvQBo3zmh5btXhbDcvYUxf0&X-Amz-Signature=653537e0aecc92022dc4f32c0f5290d4768e9687ed4548d11445cef6bb3bfb80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
