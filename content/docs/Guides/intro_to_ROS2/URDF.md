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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2U5RUD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOkNhzDnRxs0AEuAm%2BDaDLm9IGw%2BC%2F9pNvHOHH551DIwIhAJXzQ6oYcE5RNMgax97Op5X%2BnZ%2BJedEnFbCkcJ9x%2BVw5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyNrUOppJa9WGD%2B2tEq3AO8O6cAq49L31kGZGRo2n9euGDgIHDgPHpvQakmZ%2FDA%2FgfaecrJ8%2B6LJ%2F2uteIpes%2FYomSFLgcZo1fVsWRvq7LkePsH%2BqbhZJGv4OXXLY6xdc9aG9TB9BSMVSDjXWGfBLX6rFYcFHFSFlaVmyh5vkTWp2MtWLnwYDf7r2%2Flop68RO06LBUhztjEEQ%2F9gEwsKVKmjCXvK71hNFRVPrJpO1V3gRlnZ9iTAjAR5fcgFH5xzOspZWoU%2FzAY6a252TznICaJcqkN7VeGweW41QZkQElD%2BwGGrw4ELxTT3oW6UE5aLqRVlhVeJctmURkz6rCh9%2BkhO%2Fe00Xms%2FP4cv3Y5zqjZJe1yGrFvtrCUu%2FAvdv6n%2FzAA%2BtU0Sg0wsI6P09ZSrzB%2FmiyP2%2BaJG%2FbcZsJrA9lxCIwcLRH9T5%2FGnJ5WXgCGKnZdDlW8dWICwKcRajFvHrH%2F3E%2BFamsdkaih7ExAsb9G8TEU2dzIW7Ghmk7s75oYIneCUlKAAihjijv2B0AdmkPCkG437t8vrpsBKGRQsbRZp%2Fb2YxJWqd95VMv77hwmjdv%2BBjYJAM0k68esfbqJSKTJL%2BF3GcOKLosXmq7GR1yphqc08D%2F58fwBMTELCF9X6T46bP9fsCzyIhUEIzCfxeG%2BBjqkAWDbTODb%2B3krJABLeY5meXGdQAOL5si3tVD4X6tEyDWU2naB0wTt%2BLsBj2PBzZzlbdzPcGl0m99GH1ClEnC9FrPPDqcq2RAA0lqmSynWiQVh8rj%2BttR2ySNqn3IdsZkoe6sNbGGKyNMoLpusB2oQQsiuXE2RQiV1%2FeMhvqUpHypqQg8GAKv1rrdtZcgZ3iwk1EKMrGUvIDb9TmJic6qBnqLQbtxB&X-Amz-Signature=6bda324b545915ee7cd8754436c97b1c8539583158f3c3cbfc1eed0399baf060&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2U5RUD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOkNhzDnRxs0AEuAm%2BDaDLm9IGw%2BC%2F9pNvHOHH551DIwIhAJXzQ6oYcE5RNMgax97Op5X%2BnZ%2BJedEnFbCkcJ9x%2BVw5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyNrUOppJa9WGD%2B2tEq3AO8O6cAq49L31kGZGRo2n9euGDgIHDgPHpvQakmZ%2FDA%2FgfaecrJ8%2B6LJ%2F2uteIpes%2FYomSFLgcZo1fVsWRvq7LkePsH%2BqbhZJGv4OXXLY6xdc9aG9TB9BSMVSDjXWGfBLX6rFYcFHFSFlaVmyh5vkTWp2MtWLnwYDf7r2%2Flop68RO06LBUhztjEEQ%2F9gEwsKVKmjCXvK71hNFRVPrJpO1V3gRlnZ9iTAjAR5fcgFH5xzOspZWoU%2FzAY6a252TznICaJcqkN7VeGweW41QZkQElD%2BwGGrw4ELxTT3oW6UE5aLqRVlhVeJctmURkz6rCh9%2BkhO%2Fe00Xms%2FP4cv3Y5zqjZJe1yGrFvtrCUu%2FAvdv6n%2FzAA%2BtU0Sg0wsI6P09ZSrzB%2FmiyP2%2BaJG%2FbcZsJrA9lxCIwcLRH9T5%2FGnJ5WXgCGKnZdDlW8dWICwKcRajFvHrH%2F3E%2BFamsdkaih7ExAsb9G8TEU2dzIW7Ghmk7s75oYIneCUlKAAihjijv2B0AdmkPCkG437t8vrpsBKGRQsbRZp%2Fb2YxJWqd95VMv77hwmjdv%2BBjYJAM0k68esfbqJSKTJL%2BF3GcOKLosXmq7GR1yphqc08D%2F58fwBMTELCF9X6T46bP9fsCzyIhUEIzCfxeG%2BBjqkAWDbTODb%2B3krJABLeY5meXGdQAOL5si3tVD4X6tEyDWU2naB0wTt%2BLsBj2PBzZzlbdzPcGl0m99GH1ClEnC9FrPPDqcq2RAA0lqmSynWiQVh8rj%2BttR2ySNqn3IdsZkoe6sNbGGKyNMoLpusB2oQQsiuXE2RQiV1%2FeMhvqUpHypqQg8GAKv1rrdtZcgZ3iwk1EKMrGUvIDb9TmJic6qBnqLQbtxB&X-Amz-Signature=97c47a6115ea3fe1f73906eab68d95bbe2b4fe3e497868444797c23b3e934089&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
