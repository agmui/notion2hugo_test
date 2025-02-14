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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRFMBL5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCxYLBlRhLIT%2BkzA%2FVEGwoTG9feOY5v2R3llf1noUOw1QIhAL0SYPPoQZWZmD8oKkcPkKXVCyeOqvE7SmP%2Br2Dk9EOuKv8DCC0QABoMNjM3NDIzMTgzODA1Igw%2FS%2FlCBk5KLKOTkzkq3AO%2Box1uH2rWUHnAu3nyLtwFAZKYvC%2FsOosb1%2Bsvr2VLWlrB%2B3onb8YBUu2bzzyDE%2BemO%2FSuuWI5UbLdC4WFQJvaPbTJ9rzoNbiQaKC0v9uFYXEkOsZCeXvSDv01gtWOlKBno97AYJjvuB8RpLuPvWEhhkcBVF2NTD%2Ftk7RPjfI3%2BePGTYaLkNoWunXmcXtUYrqYDQP9pRBGvpdLGgOkzAjLNmfOvFTLJajEaBySuxmegELo2MXjTSuWcmHwmALo5LNyY7Ldj7NtbmRIh17L7yrReDRIFkWIh1dD817xXAz9%2FDD3upeBUhg8ZVo6KDKjcRcMkua2NNM4pDFwTxiR7BApPjue7jJ%2FhevQYqS1d%2FHBAskVam4eYfLVyT13ANssVDXVS0nGJiTdcYxoMsCap6pJDeZugY8gc1amxIdEiiE6enyVutzVVK42ieppvV0bh2ibYPixupdHjvm%2BeodXxUeUXytFHmHEvDiHCfO%2BimFrAjyCmSjIATMET2M9CIIJ%2BOGW2LSRmhNMpyZshQ1N1BvApeTlvqiC8TfzNmJ9mfSUYt9nE7gZB7YVENFOZqn67TPVyF6hPzlh46nT7KrLI9bmx%2B%2F8jsKOnJYkrHB72lFHIqMIa%2F%2B3pfJe51QV9TDF6ry9BjqkAc5s8FdCu%2F3FfztkFCr6wxmii5ed%2ByzJmJ5%2Fv1x228DB5faTm7Wc%2FcPdqv%2FrspPM6lv24G8ta2APh0vrtmChOKpUPsYFtOQnG%2By%2BTlAANk9iKa%2FtcCPIV9rYNfEmMm0YMch6lT%2F1g152fJ6R5mHZauLU0NOAKwcHtn1eOHcuCu1B9n869qgh5vDb6S3wSLrRhGUuS8fT5%2FlyLo3rzPvM3W2C6dxD&X-Amz-Signature=3b964a0b669c2c65db0ad9bc1905e60b2ae3c4479f74828f7b94e6f25b990742&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRFMBL5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCxYLBlRhLIT%2BkzA%2FVEGwoTG9feOY5v2R3llf1noUOw1QIhAL0SYPPoQZWZmD8oKkcPkKXVCyeOqvE7SmP%2Br2Dk9EOuKv8DCC0QABoMNjM3NDIzMTgzODA1Igw%2FS%2FlCBk5KLKOTkzkq3AO%2Box1uH2rWUHnAu3nyLtwFAZKYvC%2FsOosb1%2Bsvr2VLWlrB%2B3onb8YBUu2bzzyDE%2BemO%2FSuuWI5UbLdC4WFQJvaPbTJ9rzoNbiQaKC0v9uFYXEkOsZCeXvSDv01gtWOlKBno97AYJjvuB8RpLuPvWEhhkcBVF2NTD%2Ftk7RPjfI3%2BePGTYaLkNoWunXmcXtUYrqYDQP9pRBGvpdLGgOkzAjLNmfOvFTLJajEaBySuxmegELo2MXjTSuWcmHwmALo5LNyY7Ldj7NtbmRIh17L7yrReDRIFkWIh1dD817xXAz9%2FDD3upeBUhg8ZVo6KDKjcRcMkua2NNM4pDFwTxiR7BApPjue7jJ%2FhevQYqS1d%2FHBAskVam4eYfLVyT13ANssVDXVS0nGJiTdcYxoMsCap6pJDeZugY8gc1amxIdEiiE6enyVutzVVK42ieppvV0bh2ibYPixupdHjvm%2BeodXxUeUXytFHmHEvDiHCfO%2BimFrAjyCmSjIATMET2M9CIIJ%2BOGW2LSRmhNMpyZshQ1N1BvApeTlvqiC8TfzNmJ9mfSUYt9nE7gZB7YVENFOZqn67TPVyF6hPzlh46nT7KrLI9bmx%2B%2F8jsKOnJYkrHB72lFHIqMIa%2F%2B3pfJe51QV9TDF6ry9BjqkAc5s8FdCu%2F3FfztkFCr6wxmii5ed%2ByzJmJ5%2Fv1x228DB5faTm7Wc%2FcPdqv%2FrspPM6lv24G8ta2APh0vrtmChOKpUPsYFtOQnG%2By%2BTlAANk9iKa%2FtcCPIV9rYNfEmMm0YMch6lT%2F1g152fJ6R5mHZauLU0NOAKwcHtn1eOHcuCu1B9n869qgh5vDb6S3wSLrRhGUuS8fT5%2FlyLo3rzPvM3W2C6dxD&X-Amz-Signature=e2d18f7f50b70114667a0342f79b4034e35e773a2ba732903e55a2e58cdc535a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
