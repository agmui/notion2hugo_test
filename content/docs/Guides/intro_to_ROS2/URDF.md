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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P65CZO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGcZ%2FzZK5uf9W5QezDd0b3DAaqyl0G0FM3ghvVhdwAiLAiEAhkcK2%2Bpljh9wTDnSDie1fVPGyRgMvGbMNvuiMb2ETJQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5XitKWJW%2Be88CaSSrcAzMlmNMGTET4eA4szZ0bQ3g7cCfNkJfo4V9x4DlbXYb5YeZglAk2YXNC%2BIKElBy1Dei4jlB%2BS6ahit8MrtYYfpylR3r5rKPwbKBp4TvmTh7doOjJdBFDLWQKyxgPQrksF7F42GU4JeLRIRjq08UiPd8Fzgx35vwnm5OOIPdxA8XsKI81WZnIlW%2FsyvrH8wYBdB%2Bmxt9kMvh39U%2B0JKHvUa1njbMBvVwchPrNKF1rmVPhgDHrZC6b9w2f73VZ%2FJRSSpGxcEvrl1p5I7FqbN4VQwhLdKaLY2izRvC%2B%2FzKYEX56LUcJdKO7K2Zi%2FvYFEV%2FE5%2FrFt3K%2Bz%2BJvewf3V8JI9BH2OEWmisFo4k%2BaI98SNMuRkF%2BpYzScqFMCHidP6OyQn9vMF3Wuq08vFaIPuvQtPO8lJexKtoEaEMKHsU9nxIVfrIeIp9SOP1b6Ym21Te%2FzOBhbyn89oRbL2zwBYzCORt28iyQghyXVIH3d589Qhj9uemLqcD%2FuOY80zEYu0nYwNKLS%2FlMFRO3idwqZdDNbc%2FuX%2BSqrL6VaiGA643NdN2tM6dq6QuELa3HkSpuDA7BQUGItd9DKSvC1dtRNlMeL9X3J0fpbWvNRyZqmFXxYgFfYTjYqhNQVXtC5tnmwMLrW178GOqUBWdWCbK%2FZ3N%2BbQxoQN0Zc7yV0MD5Wnr0mi49BQbcppoOYtaNtlhyPrXrOZ%2Fr7%2Bs9WzdTnuT%2BkMcncM5eD3kHwYBfMk1vSvhZXb85eoK5PJI8n48kEiVwyyyB8olU7K5urTFwJYH7nCetKok1MVLOlKLFm%2FLo908L0fDFYqTYNXVodc7Bgaz2zp6AxDpuNV%2B8lMSbQ554L%2FsF%2FXe3O86D0d1V9yhPG&X-Amz-Signature=afe455c3adc326662de045479d24daeb6af3742526ab0d850b02410180bd39f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P65CZO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGcZ%2FzZK5uf9W5QezDd0b3DAaqyl0G0FM3ghvVhdwAiLAiEAhkcK2%2Bpljh9wTDnSDie1fVPGyRgMvGbMNvuiMb2ETJQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5XitKWJW%2Be88CaSSrcAzMlmNMGTET4eA4szZ0bQ3g7cCfNkJfo4V9x4DlbXYb5YeZglAk2YXNC%2BIKElBy1Dei4jlB%2BS6ahit8MrtYYfpylR3r5rKPwbKBp4TvmTh7doOjJdBFDLWQKyxgPQrksF7F42GU4JeLRIRjq08UiPd8Fzgx35vwnm5OOIPdxA8XsKI81WZnIlW%2FsyvrH8wYBdB%2Bmxt9kMvh39U%2B0JKHvUa1njbMBvVwchPrNKF1rmVPhgDHrZC6b9w2f73VZ%2FJRSSpGxcEvrl1p5I7FqbN4VQwhLdKaLY2izRvC%2B%2FzKYEX56LUcJdKO7K2Zi%2FvYFEV%2FE5%2FrFt3K%2Bz%2BJvewf3V8JI9BH2OEWmisFo4k%2BaI98SNMuRkF%2BpYzScqFMCHidP6OyQn9vMF3Wuq08vFaIPuvQtPO8lJexKtoEaEMKHsU9nxIVfrIeIp9SOP1b6Ym21Te%2FzOBhbyn89oRbL2zwBYzCORt28iyQghyXVIH3d589Qhj9uemLqcD%2FuOY80zEYu0nYwNKLS%2FlMFRO3idwqZdDNbc%2FuX%2BSqrL6VaiGA643NdN2tM6dq6QuELa3HkSpuDA7BQUGItd9DKSvC1dtRNlMeL9X3J0fpbWvNRyZqmFXxYgFfYTjYqhNQVXtC5tnmwMLrW178GOqUBWdWCbK%2FZ3N%2BbQxoQN0Zc7yV0MD5Wnr0mi49BQbcppoOYtaNtlhyPrXrOZ%2Fr7%2Bs9WzdTnuT%2BkMcncM5eD3kHwYBfMk1vSvhZXb85eoK5PJI8n48kEiVwyyyB8olU7K5urTFwJYH7nCetKok1MVLOlKLFm%2FLo908L0fDFYqTYNXVodc7Bgaz2zp6AxDpuNV%2B8lMSbQ554L%2FsF%2FXe3O86D0d1V9yhPG&X-Amz-Signature=9b7547ffc4a945ee4bf0ee84fc1b3c16f5f2d1858e9d35d3dfc0f98a6517a0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
