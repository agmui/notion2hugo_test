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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZYIKLN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCSJ2JtG%2FFki8u03vrA0cjxV2jfa75Jox7XF79aJOqS4gIgUxIpIfktmOO5Oke3Ld7JctXLYRMCRAwCQqeN189moUAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkG%2BH9wtkWwRwlygircAxnFxr79bej%2F4NxaWL%2FEwYIKrtRyyLRwriLXy%2Fk0QzzUywy3xjkIv7E8UeOgrF2izd33lVYGTucABF72raRCo3DQJIB0D4C7kfKmJiF%2B9%2Bf3lPqHItP9g2FkE486HU8fGJdLUAbl46kljeAC9ZM1PBEWw4Q3mWxryMOl6nfgQOD7xDXFo4dgsPcn29JhLqcyCVbLS%2FmKR%2BgPHtRH2hxoD4ZkbRkqZ%2Fpo9BJW8dkE3YXJEWfOmonnM%2BgFHViLtbq7fqcNSjMgDJbyAIlkOcMAsl44WrPTR2iRCThj4iWIkte3kiGVfl1QGkOA5CU9aSxdo%2BPREsf%2F3Zvvcw3JrkZJwf4MDM%2BTHXMlSBmvPtRBxpWrFSioq3rxpOM5pHnXNoZfynG1zoARSrxyLHLNI1Nza1GxfRitUyiMpvfHUKgi7bZDTHxoZJk44o0BL8vnF1BBcgO%2BL40wGL%2FlohyR0UBkHW%2Fd42GL0YcVlTe9cOrq0myCLwFGM3WCVSVzRlofq9UIiWp0nj7LiIsE0J7EcdKu2m7WvzAkTDCWklNK05mLSDCDt9LoFumv%2BL7ynZHZjyvhen21WEehdv4G816%2FxMUpz0dMQMcPkiXVNgRHH5Q1enDwnJ4bIBABYgIfoD0KMIeiqr8GOqUBc4%2BONpmMiDpajfSE1YIk1UYKHfpg02VPF4CAI4OwyiIPfVs%2FnV%2BRAhH5NPr6hb2%2FHanjeQtkjiyubtLvpAOK8ryiacDHFHKpP6cVzE1WbUyvHn%2FoliqYPMU5%2FWU15lfGE0uihAlQabXEebPFLkKVAn%2FHIQbY0CH0qTsPfY5qYSk%2BEEGI%2FXbmDNwm7GnQkO%2Fhv%2B4h6DuOPg3687nDLbMDQDfBnNQF&X-Amz-Signature=99e50e9abbd175c9988732fe76b0c826647b3feabeeb5e00db03ee783412930a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZYIKLN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCSJ2JtG%2FFki8u03vrA0cjxV2jfa75Jox7XF79aJOqS4gIgUxIpIfktmOO5Oke3Ld7JctXLYRMCRAwCQqeN189moUAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkG%2BH9wtkWwRwlygircAxnFxr79bej%2F4NxaWL%2FEwYIKrtRyyLRwriLXy%2Fk0QzzUywy3xjkIv7E8UeOgrF2izd33lVYGTucABF72raRCo3DQJIB0D4C7kfKmJiF%2B9%2Bf3lPqHItP9g2FkE486HU8fGJdLUAbl46kljeAC9ZM1PBEWw4Q3mWxryMOl6nfgQOD7xDXFo4dgsPcn29JhLqcyCVbLS%2FmKR%2BgPHtRH2hxoD4ZkbRkqZ%2Fpo9BJW8dkE3YXJEWfOmonnM%2BgFHViLtbq7fqcNSjMgDJbyAIlkOcMAsl44WrPTR2iRCThj4iWIkte3kiGVfl1QGkOA5CU9aSxdo%2BPREsf%2F3Zvvcw3JrkZJwf4MDM%2BTHXMlSBmvPtRBxpWrFSioq3rxpOM5pHnXNoZfynG1zoARSrxyLHLNI1Nza1GxfRitUyiMpvfHUKgi7bZDTHxoZJk44o0BL8vnF1BBcgO%2BL40wGL%2FlohyR0UBkHW%2Fd42GL0YcVlTe9cOrq0myCLwFGM3WCVSVzRlofq9UIiWp0nj7LiIsE0J7EcdKu2m7WvzAkTDCWklNK05mLSDCDt9LoFumv%2BL7ynZHZjyvhen21WEehdv4G816%2FxMUpz0dMQMcPkiXVNgRHH5Q1enDwnJ4bIBABYgIfoD0KMIeiqr8GOqUBc4%2BONpmMiDpajfSE1YIk1UYKHfpg02VPF4CAI4OwyiIPfVs%2FnV%2BRAhH5NPr6hb2%2FHanjeQtkjiyubtLvpAOK8ryiacDHFHKpP6cVzE1WbUyvHn%2FoliqYPMU5%2FWU15lfGE0uihAlQabXEebPFLkKVAn%2FHIQbY0CH0qTsPfY5qYSk%2BEEGI%2FXbmDNwm7GnQkO%2Fhv%2B4h6DuOPg3687nDLbMDQDfBnNQF&X-Amz-Signature=549295d08a7ba4dbc5dea9156d8f9995663bfdb76d0ea8c10b2f9c911359bade&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
