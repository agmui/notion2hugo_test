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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMCBESU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCpXUGtVdGZ1sgFkZJkkh7CDb2hTeMeEcC%2BfQc9rHrEBgIhANx1uk6%2B84GomZB6ED0PnVCZ%2BH%2FpNoAnCbUsgw9%2FiF1%2BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUtt0b4sWxSJn%2FAggq3ANdeeDcgJW4nYheydalYwfrTDS%2FQJh5kN%2FB3XddaihgwrP7KF87wP257TS9RwlviAdtFgY0WBdGyUPDTzTmNDggTYfgrx%2BlvHpfy7TFVoO2tkvjdoULEpA5t97sP8kYSpTYIRybpGeep%2BqWLo0%2FiPYg0VxeyGUCTxnk9oJEyXbrx4hH6LS6Du8X%2BqU70ixxPwQ0EHE4f8ojbQDJalr4%2FnwQPvMUxXZV%2FvGV%2FvJfMu2GRCcRImE17OdG3KD4psM%2FJQMBmDSS2PeOcHEv5FqdNmRF1GpgYsO3rXKnnNLstqj3W9rUHeSUTxPIm8xLNnT4Nk2Y789zivDdyUDanf0GIMd7W4PLHra7BzSpwqfZUXcIra2Yn60rgHuXCv55NPKR7I%2FlheULX4tf5l7lAprKIiBFuqtFfUE5gwXwHCywLwiUww5IYmMdBiu%2BdXxdCfgJO2ZCSwSUWcflBC2S4D1GCtDyioVlUfnX7hnX8afb1fQm9Pkl5bss3fuFo91hVpF3dJ5Hyz3qibC1VRJ5bXfNfqXpXtTxMHP%2FsGIunLt2G3gE%2BKg%2BMpOFCwI7cEkB9rLsoEGJ8k5PM18mQoQ1EmmVyfjJK87U3ft0ue5xTweAhH4oYxGeFTSnLPOZ5pcFYjDLsaLEBjqkAfVJxy2Ug4qh7Lgf6ITeznaOjk0MMYe6wFjY7zShneLOYKY8SJub8Q0cpoCkOlCHE2KGMtot7OJ%2Bgw91ZbefuhO7ZveLKGll7IoB4jvY4VleWo%2FJ0aw8c%2F7NRNF%2BbDAQ8xtWqftDxBKiINcMr%2FnaABXgGhzoHugHM8JXFXB0n6nzGB4DKqYH%2B3DPyGEn9tJR3kQ8HEUoa9OpPCephCmHLgRZ%2BoR9&X-Amz-Signature=7cc093824b52dbeff368ac31d91d6767dc3cf30ae56a40c6460932907cc44f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMCBESU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCpXUGtVdGZ1sgFkZJkkh7CDb2hTeMeEcC%2BfQc9rHrEBgIhANx1uk6%2B84GomZB6ED0PnVCZ%2BH%2FpNoAnCbUsgw9%2FiF1%2BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUtt0b4sWxSJn%2FAggq3ANdeeDcgJW4nYheydalYwfrTDS%2FQJh5kN%2FB3XddaihgwrP7KF87wP257TS9RwlviAdtFgY0WBdGyUPDTzTmNDggTYfgrx%2BlvHpfy7TFVoO2tkvjdoULEpA5t97sP8kYSpTYIRybpGeep%2BqWLo0%2FiPYg0VxeyGUCTxnk9oJEyXbrx4hH6LS6Du8X%2BqU70ixxPwQ0EHE4f8ojbQDJalr4%2FnwQPvMUxXZV%2FvGV%2FvJfMu2GRCcRImE17OdG3KD4psM%2FJQMBmDSS2PeOcHEv5FqdNmRF1GpgYsO3rXKnnNLstqj3W9rUHeSUTxPIm8xLNnT4Nk2Y789zivDdyUDanf0GIMd7W4PLHra7BzSpwqfZUXcIra2Yn60rgHuXCv55NPKR7I%2FlheULX4tf5l7lAprKIiBFuqtFfUE5gwXwHCywLwiUww5IYmMdBiu%2BdXxdCfgJO2ZCSwSUWcflBC2S4D1GCtDyioVlUfnX7hnX8afb1fQm9Pkl5bss3fuFo91hVpF3dJ5Hyz3qibC1VRJ5bXfNfqXpXtTxMHP%2FsGIunLt2G3gE%2BKg%2BMpOFCwI7cEkB9rLsoEGJ8k5PM18mQoQ1EmmVyfjJK87U3ft0ue5xTweAhH4oYxGeFTSnLPOZ5pcFYjDLsaLEBjqkAfVJxy2Ug4qh7Lgf6ITeznaOjk0MMYe6wFjY7zShneLOYKY8SJub8Q0cpoCkOlCHE2KGMtot7OJ%2Bgw91ZbefuhO7ZveLKGll7IoB4jvY4VleWo%2FJ0aw8c%2F7NRNF%2BbDAQ8xtWqftDxBKiINcMr%2FnaABXgGhzoHugHM8JXFXB0n6nzGB4DKqYH%2B3DPyGEn9tJR3kQ8HEUoa9OpPCephCmHLgRZ%2BoR9&X-Amz-Signature=79eabd40a1d19aa9a2751284200e4b7b1742c342c255352923456b2af80cb35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
