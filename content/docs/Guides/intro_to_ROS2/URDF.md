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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLYFWDQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWEplo4qWgMqQ%2Bmmqd067b%2FPTunWXc21i5xpVbTp92dAiEAkM4R8p%2BhAlLZURdiwCeY1NfSqTqv5pBoFIxI2ptKfjwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDEjOHcDIjrgtzO%2BXsircA5I1o12EBpIjbcXrEenFsZUNnHHUeZGGKsWhdujiUxsVac2qpvtxm%2FvP%2FrR7cI%2Fi2tpwhiQ7%2FPERqUPYcRbJFZViyREjhWet58PCoX111cjWiVR%2FsBsF2nrK1MJ%2Bcw9PimJcxrkD3%2FdlJkL7rJIuFNfVij6hHcqjVfVJEHt2f6pE9H3uOpgt57oQHwX6zKLFaLwvD%2BuMcl2PvYt%2FCXeDcMXWOwXFrxrp1XvoCwVjPzffQvgVSJbgo%2BDDBtKqUJ6%2BO0SbaLFTvXSsDqichoNIR%2BYs5z0o8oCyGFda2umWtighdyHk2%2FKBFCgdtUmTGSfQEihs2uFLhe9gjaMoBR%2B1gQP2m%2BrFZUrUmWzBrnTdu%2BvBCULMRk6uW7fkFokDthQIhrlwPv3aASdtSeykw%2BJ7qViek2bWL9J37%2FEMwsj8LfwK%2BHC6NbPOdtelTJl60UzmQnDoRGDSNHoIFp8fyDdNmIOLlhWuTCl1njSW0avuU9ejrhqtRCZeLFp%2BJ4kX5glC9YqGipg1S0gK0zJ61YioEkyBztgXxh1q4CfOq0TCcVjkJZfpIKPvQCsGRN5bTtI834ZopWZdtO%2B7t5UBCmx%2B47gWch1nOdC60QhrBdUOzwgNKdS5TExheZNxvZALMICOjb8GOqUBUYo2ZXEFaX4qxqzXB427cY6R8BM7idIRrF6xYIq7m%2BYg1CYjhiROtytW7aFpFxcZF6c%2FKsgUz6IhBjTmEfauekyYFNMf42Oa7jp6fwZi0SYkt8GRi%2BuL22hY%2BoZFn92SIZWMxj9v%2FvU0QtRUx6n1dDxn2dCqS4CVXaBXBrymsBM0kOpMq65C85jgojzartUHDt%2BBOPBgtZZ4Qy8qCl1XEuiB0SvM&X-Amz-Signature=de1006016979c7a44127265ae4485f99b59180862a8572a942061d8409416278&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLYFWDQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWEplo4qWgMqQ%2Bmmqd067b%2FPTunWXc21i5xpVbTp92dAiEAkM4R8p%2BhAlLZURdiwCeY1NfSqTqv5pBoFIxI2ptKfjwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDEjOHcDIjrgtzO%2BXsircA5I1o12EBpIjbcXrEenFsZUNnHHUeZGGKsWhdujiUxsVac2qpvtxm%2FvP%2FrR7cI%2Fi2tpwhiQ7%2FPERqUPYcRbJFZViyREjhWet58PCoX111cjWiVR%2FsBsF2nrK1MJ%2Bcw9PimJcxrkD3%2FdlJkL7rJIuFNfVij6hHcqjVfVJEHt2f6pE9H3uOpgt57oQHwX6zKLFaLwvD%2BuMcl2PvYt%2FCXeDcMXWOwXFrxrp1XvoCwVjPzffQvgVSJbgo%2BDDBtKqUJ6%2BO0SbaLFTvXSsDqichoNIR%2BYs5z0o8oCyGFda2umWtighdyHk2%2FKBFCgdtUmTGSfQEihs2uFLhe9gjaMoBR%2B1gQP2m%2BrFZUrUmWzBrnTdu%2BvBCULMRk6uW7fkFokDthQIhrlwPv3aASdtSeykw%2BJ7qViek2bWL9J37%2FEMwsj8LfwK%2BHC6NbPOdtelTJl60UzmQnDoRGDSNHoIFp8fyDdNmIOLlhWuTCl1njSW0avuU9ejrhqtRCZeLFp%2BJ4kX5glC9YqGipg1S0gK0zJ61YioEkyBztgXxh1q4CfOq0TCcVjkJZfpIKPvQCsGRN5bTtI834ZopWZdtO%2B7t5UBCmx%2B47gWch1nOdC60QhrBdUOzwgNKdS5TExheZNxvZALMICOjb8GOqUBUYo2ZXEFaX4qxqzXB427cY6R8BM7idIRrF6xYIq7m%2BYg1CYjhiROtytW7aFpFxcZF6c%2FKsgUz6IhBjTmEfauekyYFNMf42Oa7jp6fwZi0SYkt8GRi%2BuL22hY%2BoZFn92SIZWMxj9v%2FvU0QtRUx6n1dDxn2dCqS4CVXaBXBrymsBM0kOpMq65C85jgojzartUHDt%2BBOPBgtZZ4Qy8qCl1XEuiB0SvM&X-Amz-Signature=4be4be2d6f520784d6ec815a4f267a27b5dab86d0a35b98c60ab033cdf7a40fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
