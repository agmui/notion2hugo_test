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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2L5YCHY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz1be3FT6R7fSn6irBClmPTASDeySFdtZjO%2BxEMzirbgIgERKm%2BErrL5L8Ogw68cVoyEVbA6pTwFCSbVpTrTxkcQgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDM79WMySATxWW6pw8yrcA6YWTOtAN78DWDbvG7j%2Fd7CLWvDzM6niAg10Psp8FKuUZwd4Ja4W8vPH%2BV66tELSWHpSKb7JpAF7b5tc2S%2FWj6AP7nYlxvin670yJb4H4VR7LYPFvF3bwwPILwBouGvZKgI5oaCzsNf1ZuC8jhlgRK4vBpJNhh1dblLsWPGiZk%2BYnSi0bYuZpgFo%2Bn1IlhpiKntEsUUgnO3ijKzKD2EH5BSy6cDn2S%2BzRc19gl0WB8mtqfIEr0%2Fc7KqoaRhH0uyza6CRbfh3NI4vKEoI0OfYyZNVI%2F7m0btO2zPyaeKAHCCmdJdv%2FZGvdX%2F34hxGccD6HWzpbA%2FJz4FZd6IeIa4w88vbcP9b4%2FyoYjqtOd3F9Vk%2Bku2IuCRzsQl2wIZUb5ROzzqFLWlW44ciZciiR4ZKebAruzsnB4TawF7bOFGsbxcr3ECjF5Es1XNmNhVI7ff5t2fHxOKmZ136saB6yb5lI18zT5FkNVQXXO31DeWyo2w%2BlSZKPMvim0v0o1NGcQbgGv9hIvN%2FxT7Oe3V4efrraiDctZgCdPOt%2BbNW4yXfTJ8swZ7UMBU1UGLgb3cZ7eQCRRSTK0Jo4fuXCs5BvynDM%2F68NfBUJk8uDRUm%2B9Ty9KaZ7MYyyzbPKzMOggTRMO2visAGOqUBTxMx78K8urQWbwFHRJeAqE95QCHSfRgJya4hZcrJTLUlFsYKTIuADwEeN%2FvJDmWUuMA5THuBAsXPWQx1jIu9xIQVUpwe7WXD%2BHFWA3eqDk4kWAksILcuZUDot6RAiONBRgpWWaMFP7v84Mxcvm%2FnvVTjVGVPUkEGIAH2NDNHoiSroVb8IxKPt0lyhQKxyyK2lqCqH1OVC3Nz8%2FrB5yQ7ot%2BsM9nd&X-Amz-Signature=5a0b44aeb327b6fb45c46dc71ba09eb3fab04484c944a9f03134eafccd6c67ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2L5YCHY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz1be3FT6R7fSn6irBClmPTASDeySFdtZjO%2BxEMzirbgIgERKm%2BErrL5L8Ogw68cVoyEVbA6pTwFCSbVpTrTxkcQgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDM79WMySATxWW6pw8yrcA6YWTOtAN78DWDbvG7j%2Fd7CLWvDzM6niAg10Psp8FKuUZwd4Ja4W8vPH%2BV66tELSWHpSKb7JpAF7b5tc2S%2FWj6AP7nYlxvin670yJb4H4VR7LYPFvF3bwwPILwBouGvZKgI5oaCzsNf1ZuC8jhlgRK4vBpJNhh1dblLsWPGiZk%2BYnSi0bYuZpgFo%2Bn1IlhpiKntEsUUgnO3ijKzKD2EH5BSy6cDn2S%2BzRc19gl0WB8mtqfIEr0%2Fc7KqoaRhH0uyza6CRbfh3NI4vKEoI0OfYyZNVI%2F7m0btO2zPyaeKAHCCmdJdv%2FZGvdX%2F34hxGccD6HWzpbA%2FJz4FZd6IeIa4w88vbcP9b4%2FyoYjqtOd3F9Vk%2Bku2IuCRzsQl2wIZUb5ROzzqFLWlW44ciZciiR4ZKebAruzsnB4TawF7bOFGsbxcr3ECjF5Es1XNmNhVI7ff5t2fHxOKmZ136saB6yb5lI18zT5FkNVQXXO31DeWyo2w%2BlSZKPMvim0v0o1NGcQbgGv9hIvN%2FxT7Oe3V4efrraiDctZgCdPOt%2BbNW4yXfTJ8swZ7UMBU1UGLgb3cZ7eQCRRSTK0Jo4fuXCs5BvynDM%2F68NfBUJk8uDRUm%2B9Ty9KaZ7MYyyzbPKzMOggTRMO2visAGOqUBTxMx78K8urQWbwFHRJeAqE95QCHSfRgJya4hZcrJTLUlFsYKTIuADwEeN%2FvJDmWUuMA5THuBAsXPWQx1jIu9xIQVUpwe7WXD%2BHFWA3eqDk4kWAksILcuZUDot6RAiONBRgpWWaMFP7v84Mxcvm%2FnvVTjVGVPUkEGIAH2NDNHoiSroVb8IxKPt0lyhQKxyyK2lqCqH1OVC3Nz8%2FrB5yQ7ot%2BsM9nd&X-Amz-Signature=5e4b87fd66d966f058cd3f1246e2458931973fcc5e90d386e72235de881b2734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
