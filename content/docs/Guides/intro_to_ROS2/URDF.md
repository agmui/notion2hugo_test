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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYQR7LH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC1wH5z9I0Lq%2FapmTTgPjCPwd86l%2BhGDFbEHD5R10PbawIgFurUKKZCxPxOZ0hzC6ZpvJ9qycr9oacnJLq3TvnlrUsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEWlrivRtXDzxa%2B89CrcA5elhmB%2FioFwelsNmyenO8fkFdr6%2F7AHrBdRRvHUZCLmOTRjPBKVIJ9XRCUHY%2FMJWWh%2B9FgW2uLiIfdpkcEuQbj%2BHv6ehvZHWOKRh1IFUOYS8v09dbYbtUO13B6Mw%2B8gStBpKKYjUu%2FYOTAsCxoMEMW30tp5swTS9PNjMxY3CkWxqDYodJ4v4c2Ojbp8Hp2E2QV657nO4suz3ofNHfNEO9KAAG%2FS%2F2H3dXxXrgFp4dUK0SH1bhWebJu2qUf54Tf0xi8z9jXCKwFySshnEPJm346ttKnp%2B8gMLSVoS0pe4gxL04urpcBLea1ozBT1YPTPYZA3kkebrI1XOoZ52pPZjdCcvGB2MU3XqYIT1H6v3kYwpORjFZ%2Bg5pvwqA4qwzCREPOk9QiLXY8zySc0VQ%2B4S4TC2tR1nyM%2FdwlFR%2FYirFNMn59vGCHHRknwuUNnms3NYO1iiWNLE%2Bau7uftGdI4ZNhQTDed8SUFInObnmnUX2AIMLsxVXvBFEV90Uuy%2FhhTevFs%2F7WlIAttYThjfV50XWAtHHv9ckdGMff2JWOtULpor16b4e6d4KgZ0dZXiYXli89SLNSXXN3DW2i0d493ibvG81e%2FQInRhigaCp5%2BVggdp3oSJgeiQ4eeKvSeMMS%2Bwb0GOqUBlyoOarNV6sB2PB3WSEns10THYiWvK9HzU1%2F3nad3E6yNsNCBEwxsVvj8yX%2FzglOopKq%2F3w7zEvn4OlR6BrUzn%2Fn6ytAaQVZ6aM3MFWdbPT1b%2B0sD2%2FXAF0LV%2FimnETg9aXxXuho3c5b2B8W9aNL3BywUMUBJjpFZaUZ6V%2FKtFw5j64FInqIYb95sP212MAkjtmiHOH9aVmiOdIE5UccHTcIzlXue&X-Amz-Signature=c520b18fc474b8357638f4d6d6eb0cd7d33a5c73f511f397657316cd6410d5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYQR7LH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC1wH5z9I0Lq%2FapmTTgPjCPwd86l%2BhGDFbEHD5R10PbawIgFurUKKZCxPxOZ0hzC6ZpvJ9qycr9oacnJLq3TvnlrUsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEWlrivRtXDzxa%2B89CrcA5elhmB%2FioFwelsNmyenO8fkFdr6%2F7AHrBdRRvHUZCLmOTRjPBKVIJ9XRCUHY%2FMJWWh%2B9FgW2uLiIfdpkcEuQbj%2BHv6ehvZHWOKRh1IFUOYS8v09dbYbtUO13B6Mw%2B8gStBpKKYjUu%2FYOTAsCxoMEMW30tp5swTS9PNjMxY3CkWxqDYodJ4v4c2Ojbp8Hp2E2QV657nO4suz3ofNHfNEO9KAAG%2FS%2F2H3dXxXrgFp4dUK0SH1bhWebJu2qUf54Tf0xi8z9jXCKwFySshnEPJm346ttKnp%2B8gMLSVoS0pe4gxL04urpcBLea1ozBT1YPTPYZA3kkebrI1XOoZ52pPZjdCcvGB2MU3XqYIT1H6v3kYwpORjFZ%2Bg5pvwqA4qwzCREPOk9QiLXY8zySc0VQ%2B4S4TC2tR1nyM%2FdwlFR%2FYirFNMn59vGCHHRknwuUNnms3NYO1iiWNLE%2Bau7uftGdI4ZNhQTDed8SUFInObnmnUX2AIMLsxVXvBFEV90Uuy%2FhhTevFs%2F7WlIAttYThjfV50XWAtHHv9ckdGMff2JWOtULpor16b4e6d4KgZ0dZXiYXli89SLNSXXN3DW2i0d493ibvG81e%2FQInRhigaCp5%2BVggdp3oSJgeiQ4eeKvSeMMS%2Bwb0GOqUBlyoOarNV6sB2PB3WSEns10THYiWvK9HzU1%2F3nad3E6yNsNCBEwxsVvj8yX%2FzglOopKq%2F3w7zEvn4OlR6BrUzn%2Fn6ytAaQVZ6aM3MFWdbPT1b%2B0sD2%2FXAF0LV%2FimnETg9aXxXuho3c5b2B8W9aNL3BywUMUBJjpFZaUZ6V%2FKtFw5j64FInqIYb95sP212MAkjtmiHOH9aVmiOdIE5UccHTcIzlXue&X-Amz-Signature=6ea04442effaceb3a9a9775260077bba119ac44093694efb03159a1f482efc94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
