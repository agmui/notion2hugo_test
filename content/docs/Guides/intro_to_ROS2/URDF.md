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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MH2JOCK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDt6GpnRlOHx4U5N42cr%2BtRbueULbH6I10y1E35zvnYvwIhALMyaeGxyF9xDaTr9nGOEtUd6k9zLIECL7mt2q4JUpI%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQROxlW6PSnGrSg6Aq3AMNQLc43acrxEqcxgtBzZ%2FkEcbgnZIonYSOmUBjSSOgIV0DSdXYXrl4WaRq8cpdE1%2BBSo7dt8aQJCbIiZIjt0Ej4BVLqR6i6bsMsmFUSDtf8dCr%2FHx%2BkPCDeYj%2FXN5Ald9qQWmwJo31YqttSL3t1kixBAfuLN5KImRHBxQar8oAIGHZAYtOTfWwv85voWHUHRgP34BVWW4el%2FZe%2BKCVKhFrfDyW9hX05DWzPTea24hSXu6QmJO9Mlvx34a1I%2B9tIiPoLogzh83XseAX33X%2FUJIZ5t7GPalkawPnahXC4ShQ9f1tizPbgzWCKXsdYkBrNJiba2wGm7SZC2J0yPHmtpYTCEGBMO8Feqx0ea8ooJrT2kFo5Gdwd21V4WJCLHSH4vM4jdh%2BGjz80lAF7pUqnHhm2uAdgfdNZG8tl0beFDjRM01lm4SZbQfpoftq4gBdrNQXC9m59VeRuc8ocjUS7aY%2BjUuDj1Jk3nq1IxI2ORg1a4RTbDqO1O42YM%2Fhv2IhVWZl2V6MivGSO%2FnJgifU%2Bde%2BbWzbLSKYsWACViege%2FzCbU4Bp46C3XAHZmP%2FwsR%2BobFTrA38Rl7k%2BdHvemYq2%2FFu7CDlLbs4fErkopKZudedPAY1mZ5Pz1%2BpOGw4EjDEtfbBBjqkAfcFiW00l%2Btn0GjQXzSsn%2FKypkwcJoHJLm9rBEiBlJaXF7LQvUQwzQ5CWIHICnA1QNBi%2Fvi5egXKdulToR4iHn%2F3u%2B75qzO0rBwpcIWtK9Wh9OgC1e4TSHOd66cas5QMH441gMBdWGmCUT3FdWpcjJyugxIlbO3Hbup15ggyiLejAEJtZ4BkTfQEAb%2BhbEpHjGVgpw8nZkYWbXYiZrpqaLVAx1pC&X-Amz-Signature=2e1badc30a09162269700d5071042b9b03217f8602c1233a8451244c2555653c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MH2JOCK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDt6GpnRlOHx4U5N42cr%2BtRbueULbH6I10y1E35zvnYvwIhALMyaeGxyF9xDaTr9nGOEtUd6k9zLIECL7mt2q4JUpI%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQROxlW6PSnGrSg6Aq3AMNQLc43acrxEqcxgtBzZ%2FkEcbgnZIonYSOmUBjSSOgIV0DSdXYXrl4WaRq8cpdE1%2BBSo7dt8aQJCbIiZIjt0Ej4BVLqR6i6bsMsmFUSDtf8dCr%2FHx%2BkPCDeYj%2FXN5Ald9qQWmwJo31YqttSL3t1kixBAfuLN5KImRHBxQar8oAIGHZAYtOTfWwv85voWHUHRgP34BVWW4el%2FZe%2BKCVKhFrfDyW9hX05DWzPTea24hSXu6QmJO9Mlvx34a1I%2B9tIiPoLogzh83XseAX33X%2FUJIZ5t7GPalkawPnahXC4ShQ9f1tizPbgzWCKXsdYkBrNJiba2wGm7SZC2J0yPHmtpYTCEGBMO8Feqx0ea8ooJrT2kFo5Gdwd21V4WJCLHSH4vM4jdh%2BGjz80lAF7pUqnHhm2uAdgfdNZG8tl0beFDjRM01lm4SZbQfpoftq4gBdrNQXC9m59VeRuc8ocjUS7aY%2BjUuDj1Jk3nq1IxI2ORg1a4RTbDqO1O42YM%2Fhv2IhVWZl2V6MivGSO%2FnJgifU%2Bde%2BbWzbLSKYsWACViege%2FzCbU4Bp46C3XAHZmP%2FwsR%2BobFTrA38Rl7k%2BdHvemYq2%2FFu7CDlLbs4fErkopKZudedPAY1mZ5Pz1%2BpOGw4EjDEtfbBBjqkAfcFiW00l%2Btn0GjQXzSsn%2FKypkwcJoHJLm9rBEiBlJaXF7LQvUQwzQ5CWIHICnA1QNBi%2Fvi5egXKdulToR4iHn%2F3u%2B75qzO0rBwpcIWtK9Wh9OgC1e4TSHOd66cas5QMH441gMBdWGmCUT3FdWpcjJyugxIlbO3Hbup15ggyiLejAEJtZ4BkTfQEAb%2BhbEpHjGVgpw8nZkYWbXYiZrpqaLVAx1pC&X-Amz-Signature=06eef5902fe4b5aafdd7e4f18ca5efd20993e4a729e14dd5d23b1acef0e65033&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
