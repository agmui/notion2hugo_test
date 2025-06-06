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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2T3YTN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDEZEOJmW6LVky3eCAnNWpJHm%2BoS91h1p6CLQtFVA7JjQIgK7UVMlAwZCaH9AcaOSOk8q8ZQ6wwQI%2FFTMSTcz2MeDsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOgiXi75KSzWfhmySSrcA7uiXa2lNRda%2Bx0K%2FaUbVW4uLJAmndWWTpAy9nNLu8tiXI0uyomznq3IKxlemObBWOj%2FZ2nX9fXpbZS5fRphx1P%2BcrPeOxB4PTsR65GULJTHFe%2F77gkOpnDlKBxfMGjefI%2B6syqPVkQ4qhT%2FfSazj8P1O28rTRYlUVcNdLL4RxeM3ZS7qfOWnrDlx%2BM93S%2BCLC8PxB8IetU6RIcVzZiUtrKBxg1tKGB5qfI5j5tj5U9qQ9qJ27rSnJMjnDg6vAsLB57zxvTqWwbaCIvkMTKbwAxUMN9HL43gw7y4EmHZ7b%2BA%2BP0o4lG8k6bMuxPW0J7yHKqBBX0axpdW%2BDsK9QoC4k0ZqrAVBRDoLfvUBVZ7AC%2BWFAG6h3RbFoolGaptDGVes1KLX3cA8ZTYBgSUFBj5V89us3S%2Fi4exFeCTIL%2FmMBhhm%2Fzu50Fa5fUYVZdcEyJEkPAXP2clGY2ZrXyLYgeQWCggJJTBGyZd2IsuB5bNlIufAptpNmLpKDVbfcL%2FEZlP7dcoM4xYrUQz5CJC%2BTRw2P6RKYfeSkkgYtIxSMoPpRiqk7g5PYsHqxAssq%2FArqquUHuP6296Wy72GvpxICJvkhsd%2FiQ9tcMOxDi9cH7ptBns9%2FPCvEmNILHR6zdDMJaficIGOqUBQpyjtl%2F5LEdlFSuzdtC9EJu0gklNzTWh2pMeAC9MAGJ1%2Bj7nLLVDGSpLjxjjHqTBG41ZZnDBxASoZm3eGSLX6oKNignvN%2BbqOQU87%2BEHgcpmzIG%2FurQsw1QB4FThy7a4brmHAyfJrqQN8LxZBhEvqYKSmIaQ%2F9d1fO3AvahlYGMh%2B5uPIUWwJtOi2EGobioC6o2qIM1rCNXEVH30syqVYeCTznGJ&X-Amz-Signature=492873bf425e7dddf1e5fe75d7b355e029a08389f5407585f71f1ed260659c86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2T3YTN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDEZEOJmW6LVky3eCAnNWpJHm%2BoS91h1p6CLQtFVA7JjQIgK7UVMlAwZCaH9AcaOSOk8q8ZQ6wwQI%2FFTMSTcz2MeDsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOgiXi75KSzWfhmySSrcA7uiXa2lNRda%2Bx0K%2FaUbVW4uLJAmndWWTpAy9nNLu8tiXI0uyomznq3IKxlemObBWOj%2FZ2nX9fXpbZS5fRphx1P%2BcrPeOxB4PTsR65GULJTHFe%2F77gkOpnDlKBxfMGjefI%2B6syqPVkQ4qhT%2FfSazj8P1O28rTRYlUVcNdLL4RxeM3ZS7qfOWnrDlx%2BM93S%2BCLC8PxB8IetU6RIcVzZiUtrKBxg1tKGB5qfI5j5tj5U9qQ9qJ27rSnJMjnDg6vAsLB57zxvTqWwbaCIvkMTKbwAxUMN9HL43gw7y4EmHZ7b%2BA%2BP0o4lG8k6bMuxPW0J7yHKqBBX0axpdW%2BDsK9QoC4k0ZqrAVBRDoLfvUBVZ7AC%2BWFAG6h3RbFoolGaptDGVes1KLX3cA8ZTYBgSUFBj5V89us3S%2Fi4exFeCTIL%2FmMBhhm%2Fzu50Fa5fUYVZdcEyJEkPAXP2clGY2ZrXyLYgeQWCggJJTBGyZd2IsuB5bNlIufAptpNmLpKDVbfcL%2FEZlP7dcoM4xYrUQz5CJC%2BTRw2P6RKYfeSkkgYtIxSMoPpRiqk7g5PYsHqxAssq%2FArqquUHuP6296Wy72GvpxICJvkhsd%2FiQ9tcMOxDi9cH7ptBns9%2FPCvEmNILHR6zdDMJaficIGOqUBQpyjtl%2F5LEdlFSuzdtC9EJu0gklNzTWh2pMeAC9MAGJ1%2Bj7nLLVDGSpLjxjjHqTBG41ZZnDBxASoZm3eGSLX6oKNignvN%2BbqOQU87%2BEHgcpmzIG%2FurQsw1QB4FThy7a4brmHAyfJrqQN8LxZBhEvqYKSmIaQ%2F9d1fO3AvahlYGMh%2B5uPIUWwJtOi2EGobioC6o2qIM1rCNXEVH30syqVYeCTznGJ&X-Amz-Signature=25767c7934358f68e82f912d463020a6398fe53e98c9de69ea930df9fae8ec3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
