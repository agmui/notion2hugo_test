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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLFXRRO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaxulGVR8dlches5lLiRIdfM%2FIlKukL3qf6nz6sIjh%2FQIgXliH4ZcDrrpfpbV0gmPwQzUu9TFyDhAf%2ByIxeyX1BHgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCnSIeX7iEiMnJbwjyrcA0YHVUjZiD3uLGsO5oK9cD%2F%2B%2FuEigdOp0uMRV5H0osFBvFIOjQooitoyBINaY4wY8j%2Fz%2BZM8cIdTCvYH5B0%2B%2BQ3qPNKTdvEuZzYA3AKQrg8q1azXDodQfKp6S6ZcR4xOldmrZ%2FGhR1WSYYj6eJxGwwqNgSdEh2pbpN0ItgNvI5Zgu0leCIac8PjLFqGPk1jRgFF0%2FmJ492GMZdkHobc7ZXKPuciuOa4XCLLDx8Nqi9moSUgDOTN61bThxtBaMqaq1YO5oTlD4bB%2F6%2F3Vi4FsjmIL04DDR5F%2B8AcVs47%2FFImFl%2BbY5aSSqjzW66ismThGNMGnR%2B%2FpR%2Fo4oXQ%2FhnCBk2p1%2F3ayg99Gf6vai6GMeZNIqDobzqpnszGm6V0ei%2FEtyOoEtO66Uq2T8aEGXb3%2B11ZH3FF0JCujNwMBf8tlNcyFE5Ssx3x1Ud8Gv2gvBJaUus%2BYoUtZLGQCZqK1QagXRyUh%2Fpj55K0BKR6aUZcJqd0Nq23VgQo%2BrOKmU9pbm4idsQVtNWm0dglkpzuNDKvPdCKdWn7jMfHicJaVYtM6J3ERS8kSGqQRZmqR0GY9faxvgLKUuOyMZYc7a8B54yfsWo1oMvqOq7Ppa6Xevv0QAAYwr9vchFiJGYwFON0mMN2z670GOqUBPnhOi8zOr930WMycfuqkgXUSq%2F8zNqOd0zCzaZWvO2ZQjX%2BpKvRbCTAGRE3Zm4t7lmCMQtTlmlQaevGIiNZlk8%2BIbXAeAHrEa2MaiKMmCUz2QSQQqtOLzEjjB97CSMDsJBrx8MJCTq%2Fn2oPMmcX%2BcZmSXEC82FxvJ1ig%2FcRDLhygGWSFjqPW1ef6SHRH2RzgvKoNA0WNc8CZjFZB7dQ26F3mIHpA&X-Amz-Signature=9d17b348ec503221c7e3dec7aac6bf755e08c8e5a26a9942aeb4d5444764b4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLFXRRO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaxulGVR8dlches5lLiRIdfM%2FIlKukL3qf6nz6sIjh%2FQIgXliH4ZcDrrpfpbV0gmPwQzUu9TFyDhAf%2ByIxeyX1BHgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCnSIeX7iEiMnJbwjyrcA0YHVUjZiD3uLGsO5oK9cD%2F%2B%2FuEigdOp0uMRV5H0osFBvFIOjQooitoyBINaY4wY8j%2Fz%2BZM8cIdTCvYH5B0%2B%2BQ3qPNKTdvEuZzYA3AKQrg8q1azXDodQfKp6S6ZcR4xOldmrZ%2FGhR1WSYYj6eJxGwwqNgSdEh2pbpN0ItgNvI5Zgu0leCIac8PjLFqGPk1jRgFF0%2FmJ492GMZdkHobc7ZXKPuciuOa4XCLLDx8Nqi9moSUgDOTN61bThxtBaMqaq1YO5oTlD4bB%2F6%2F3Vi4FsjmIL04DDR5F%2B8AcVs47%2FFImFl%2BbY5aSSqjzW66ismThGNMGnR%2B%2FpR%2Fo4oXQ%2FhnCBk2p1%2F3ayg99Gf6vai6GMeZNIqDobzqpnszGm6V0ei%2FEtyOoEtO66Uq2T8aEGXb3%2B11ZH3FF0JCujNwMBf8tlNcyFE5Ssx3x1Ud8Gv2gvBJaUus%2BYoUtZLGQCZqK1QagXRyUh%2Fpj55K0BKR6aUZcJqd0Nq23VgQo%2BrOKmU9pbm4idsQVtNWm0dglkpzuNDKvPdCKdWn7jMfHicJaVYtM6J3ERS8kSGqQRZmqR0GY9faxvgLKUuOyMZYc7a8B54yfsWo1oMvqOq7Ppa6Xevv0QAAYwr9vchFiJGYwFON0mMN2z670GOqUBPnhOi8zOr930WMycfuqkgXUSq%2F8zNqOd0zCzaZWvO2ZQjX%2BpKvRbCTAGRE3Zm4t7lmCMQtTlmlQaevGIiNZlk8%2BIbXAeAHrEa2MaiKMmCUz2QSQQqtOLzEjjB97CSMDsJBrx8MJCTq%2Fn2oPMmcX%2BcZmSXEC82FxvJ1ig%2FcRDLhygGWSFjqPW1ef6SHRH2RzgvKoNA0WNc8CZjFZB7dQ26F3mIHpA&X-Amz-Signature=bc1b23d11ebb3fc3d9653c8758759b13f4441aa5b36f62df498210b647d64976&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
