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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=0ec04a43e995e156956181e23324415345129aa14af15b52b6fbe37d35cdb3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=95cb82b2ea53923fd306ce6dd7fde87551ed281ddf22722c33bc0900420ae444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
