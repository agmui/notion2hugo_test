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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S576TS2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDfbEpN7g20U9gkbweBQ1IC4DLlU9Mcde2qvaYWUqPZFAIgVQerRFuBqLxIlgYzX8fmoXr6mqTLyBYRmBLwFjaPSI8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoj7G7MM9gBRUzt5SrcAzd6MK%2FuamM7ZdA9ZrrGsqqJZ91OsZlKt4EqM6UExWA1Z%2F%2B9glzD7WBy9I6mM2S9sVJWqIm9Ic%2FyW6eB3aU4wVbFg3t5Am3RB0sVZZRb0rO2VObnO0IrmItxD30L9SklguVKleE5qzEoFTiAjieNugIeg3wpg9eoD0VkudYI8HI9na%2B2jZYB1ptJn2zF4Q29fyN4UEDF8CCkx%2Bt%2F73%2F344hzvKk7Weqx1a8HrCSGMS1TUZhkNHInSh%2FjFjxsdrwu2pG82bHdRMJuR4CYhvCr8nJ7TsQzV84Ar9CaatP3%2B3YqmVc4V1bL%2F1Cf3uDaQY4p4i2EXoXDWstdReBlYb1xcSdh7%2FHHMcZTFGdoelSvBEqPGgQBgL220tSCL4BINNCKwPZ1EY7DE9YF8KOls2dy9p3KckajY7ItlwpAax9vs3jc5Us%2B0seXSnhQwsZ4AbTn1rm3dvMSEmVcYI4TCJoaM3V0HbMQU3NE7nOZffSP%2BfJ%2BSfVWOfSV0Wfu593SQGDIf0mN4kPktW3IDYMtQMxfnDTE1UO6pxhkwpxi3D0yq7AaiuEL2r%2B8Dr1XlqMgpDu9rxNBFPIKBW7CaRXPPg1XbjfOmgsl4z2wuBmrB9qM%2BYROgzepWqmFP0W5Qmc3MPH%2B0L0GOqUBSl5QoWJaCCGNE7ZFCpIUXvUqO%2FG3RzjcTh7lqe8xdEV5C8jeqpe3szXS2FCijlaIeP8xZC2dYolX0NvaF7ImHQO8LTTfdABXL5kJJnHPGZqPeaW9Lb3joh6oLA1tAKIr1lc6iLXBPAD%2FffC56colyO0P10N0thlTsrVW7gijHZV4Hwm38QKWbbwCJSttfHEGEIc7ZnBanIBTApQEtBJnmSWaF8Y1&X-Amz-Signature=7f037b200db7606c193687cc62b6635bc61feb8cae860b47478ec8563301d873&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S576TS2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDfbEpN7g20U9gkbweBQ1IC4DLlU9Mcde2qvaYWUqPZFAIgVQerRFuBqLxIlgYzX8fmoXr6mqTLyBYRmBLwFjaPSI8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoj7G7MM9gBRUzt5SrcAzd6MK%2FuamM7ZdA9ZrrGsqqJZ91OsZlKt4EqM6UExWA1Z%2F%2B9glzD7WBy9I6mM2S9sVJWqIm9Ic%2FyW6eB3aU4wVbFg3t5Am3RB0sVZZRb0rO2VObnO0IrmItxD30L9SklguVKleE5qzEoFTiAjieNugIeg3wpg9eoD0VkudYI8HI9na%2B2jZYB1ptJn2zF4Q29fyN4UEDF8CCkx%2Bt%2F73%2F344hzvKk7Weqx1a8HrCSGMS1TUZhkNHInSh%2FjFjxsdrwu2pG82bHdRMJuR4CYhvCr8nJ7TsQzV84Ar9CaatP3%2B3YqmVc4V1bL%2F1Cf3uDaQY4p4i2EXoXDWstdReBlYb1xcSdh7%2FHHMcZTFGdoelSvBEqPGgQBgL220tSCL4BINNCKwPZ1EY7DE9YF8KOls2dy9p3KckajY7ItlwpAax9vs3jc5Us%2B0seXSnhQwsZ4AbTn1rm3dvMSEmVcYI4TCJoaM3V0HbMQU3NE7nOZffSP%2BfJ%2BSfVWOfSV0Wfu593SQGDIf0mN4kPktW3IDYMtQMxfnDTE1UO6pxhkwpxi3D0yq7AaiuEL2r%2B8Dr1XlqMgpDu9rxNBFPIKBW7CaRXPPg1XbjfOmgsl4z2wuBmrB9qM%2BYROgzepWqmFP0W5Qmc3MPH%2B0L0GOqUBSl5QoWJaCCGNE7ZFCpIUXvUqO%2FG3RzjcTh7lqe8xdEV5C8jeqpe3szXS2FCijlaIeP8xZC2dYolX0NvaF7ImHQO8LTTfdABXL5kJJnHPGZqPeaW9Lb3joh6oLA1tAKIr1lc6iLXBPAD%2FffC56colyO0P10N0thlTsrVW7gijHZV4Hwm38QKWbbwCJSttfHEGEIc7ZnBanIBTApQEtBJnmSWaF8Y1&X-Amz-Signature=03cc3ec63b396421aa9b1e0529caaa8f7b2a6e1197e9a5f7a7a96a420d52895b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
