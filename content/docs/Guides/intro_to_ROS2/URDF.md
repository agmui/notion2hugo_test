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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7GTO2S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC5b%2B28W1X7MV7OdaH9mJXOMgreVWV4CCE%2BEJI54I7XjgIgIPjmUj1ewe16XyBlaen0BF5WdoQ92Qrjx5Sgmzp0X%2FIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH6Zl52NPH4XRyVsRSrcA2Tz6XqrkVWikh6J5M7VHdiQglgx7fnG%2FdQXNm8gm3uO%2BhiBdsbuM9HaWXUg2ud0ccNfgowVkVdDskJriD7HqYwL2nqh7kZwijYHTfLFl%2F%2BJJuh26gx6mB%2BR2yLT4df8Zf%2FVl9mSi1k9H%2BK73bpYL5M5pHay%2B7%2FVgQ5UywfdOT4xM9V21kNyysBQ5X1PCtz%2BWHDvqGZR1zkXbJvX0PBioVcXoNRHnaNxUKhL93JYO%2BM8Dz6qtzO%2FQ4LygCoY%2Fzr9Eq0DKH3mtohYr4ko5GW9m6enxk4ht%2F%2BrqAQc1%2FmU%2Fmwciul5Pv%2BUR4K6sDqQ3JRWJXTdeF1BHBrWhUBGVLmFDIDSh3T5vgOxFQG660R%2FEcJJSs3HgG0o%2BnZVVKwOssJLryEWoopxMedckevvvwDxyhvlUadLVh3Dtd7HugWS3hrpRG8lkzFazOjkvcEyNDmDXV5SKca%2FqSoleHRQ51xd3BxkNzPzoTVnfKLt51ESZSvFMnKS9tcOMqu8v2opGFlSE5N4JRmdlHI9mq0D2HybTHjMJzn%2B60zZP4KZr3xzMj5BEpSW08oKIUIgh62jkBF%2FVIxSD4iq9B6Nj30CIcsloBr%2F2utPO4UfDMdKvUT%2F288gzn32Zp9SAQHIPVJkMOumsL4GOqUBuXp1AYUsojKuZBMUhBkGYmNHRa18wHECFzSZBKuH705G8VxpaDzpXhGH5KGxqbBP6AF0c%2BC6wuQEchTJIWHfvzyWWT6kavPaR2vOa30oSd1XUo0r7mNlD7iSj4FmkcB5O9eItwoUBq9EhgjGuLFfFGZbmMAg%2BkJoZ4r0W7ta7ojG4PWBWFgZ4G7PgQ3%2BJLMPTqEorjjfN4aL9yYGVNn0FgDamyhU&X-Amz-Signature=cb1f297e2be835405fa1d2c07993c2b1396f46b197e33f81c4a1e3b8d729331d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7GTO2S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC5b%2B28W1X7MV7OdaH9mJXOMgreVWV4CCE%2BEJI54I7XjgIgIPjmUj1ewe16XyBlaen0BF5WdoQ92Qrjx5Sgmzp0X%2FIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH6Zl52NPH4XRyVsRSrcA2Tz6XqrkVWikh6J5M7VHdiQglgx7fnG%2FdQXNm8gm3uO%2BhiBdsbuM9HaWXUg2ud0ccNfgowVkVdDskJriD7HqYwL2nqh7kZwijYHTfLFl%2F%2BJJuh26gx6mB%2BR2yLT4df8Zf%2FVl9mSi1k9H%2BK73bpYL5M5pHay%2B7%2FVgQ5UywfdOT4xM9V21kNyysBQ5X1PCtz%2BWHDvqGZR1zkXbJvX0PBioVcXoNRHnaNxUKhL93JYO%2BM8Dz6qtzO%2FQ4LygCoY%2Fzr9Eq0DKH3mtohYr4ko5GW9m6enxk4ht%2F%2BrqAQc1%2FmU%2Fmwciul5Pv%2BUR4K6sDqQ3JRWJXTdeF1BHBrWhUBGVLmFDIDSh3T5vgOxFQG660R%2FEcJJSs3HgG0o%2BnZVVKwOssJLryEWoopxMedckevvvwDxyhvlUadLVh3Dtd7HugWS3hrpRG8lkzFazOjkvcEyNDmDXV5SKca%2FqSoleHRQ51xd3BxkNzPzoTVnfKLt51ESZSvFMnKS9tcOMqu8v2opGFlSE5N4JRmdlHI9mq0D2HybTHjMJzn%2B60zZP4KZr3xzMj5BEpSW08oKIUIgh62jkBF%2FVIxSD4iq9B6Nj30CIcsloBr%2F2utPO4UfDMdKvUT%2F288gzn32Zp9SAQHIPVJkMOumsL4GOqUBuXp1AYUsojKuZBMUhBkGYmNHRa18wHECFzSZBKuH705G8VxpaDzpXhGH5KGxqbBP6AF0c%2BC6wuQEchTJIWHfvzyWWT6kavPaR2vOa30oSd1XUo0r7mNlD7iSj4FmkcB5O9eItwoUBq9EhgjGuLFfFGZbmMAg%2BkJoZ4r0W7ta7ojG4PWBWFgZ4G7PgQ3%2BJLMPTqEorjjfN4aL9yYGVNn0FgDamyhU&X-Amz-Signature=29f8fb805a9a3b0b4f8e827fb43b1f992422c459568a0d82288cc0ed8f90c5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
