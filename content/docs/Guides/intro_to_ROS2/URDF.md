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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZXBB5O%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2B8UsYbad7BGrKAbIoLZ%2BNos%2BLsEi4OPJFIuinhXtewIgcG7tYnAVS3X2JgeFsToJ4OU9b%2Fzf%2FKQ%2BIxl2dB8kWisq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDF%2FBUSfezKS6GEc%2F%2FCrcA0crHxWUXa32mI8vI40Wd7Q%2Fra09aFgIcfZogJkPpGIIOhcPTdqeLVrZ7KuW0Z21tLGsgCW6K7VW54K33tjOEVhXy89Ye8VPk2TpFc8EfaZCsGAyvDShK12%2BxL7DKLJF0Zk%2FSvT%2FqteeBLvH50r3ppPjHhF7S6dqK6YtnQjhbRoMj6oRCosyNJzeU7t89i22CpU2JjT2CkNKsCMxQWoIfOzxnMJDawliIaGgCaeD%2BPdp3e%2B%2FNZJJwz43S4BoxezwThmK4o7GBIwRiM1Y8NtvtTlhig7M34Ct92L4lGS%2Bf1%2BwWordd7xYcEqatJmTXRaKfFjTv5VDQ9M1U0hqjBxTleqke4%2Fih7YUi5iwhQrt51vFF5sR4WGM41e7%2FIezmA1xgbI7BWuRj42X9nNqqgE1m%2BQhfoDHYur01XIuQAZo%2BQ0vYN3AfnTFxAAXyVUAcddpsZ7HitSaQOiaySTgHYCHSZNS2Jk9USx0CAna8kC4wATPeTROKZ%2BcXgvgAqR%2FYx83VTWnUSJxrPb6PpTpXVFNShnL2KLlwu2gFsxJ8aoFiI5O7mbek%2BnYcZOUResgoZQcMTj2t9sIrby%2FfRWUWdYQsTbQOnZzYfC0m8gzE%2Ft%2BeHNNPk%2BrhNvW7v8S8hM4MIuvjr8GOqUBsZHt0W32VOXzE9a%2Fkb4MWOa2Q61j9vDHKrYGMNGMGwh%2BBcMP1b6E3FkL7D6WZXYpbnwrc%2F%2F78H11ZZ4pQSSDnszcq8x2LA7iaKAkzHCvp9RfexlnEdDFJcvZ714YhPiPPtX8qp14fYexhOIzZYCnaaVbWskuvAQrm%2BcQmdri9r1YnBuSjHhM%2F58HF1qoGK87WGprVveuYPXCFtVMIWXi6qsiq5Ok&X-Amz-Signature=e261fa437ad63d76059cdc1da0765b22708b513438cafa217bda79be18eccefa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZXBB5O%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2B8UsYbad7BGrKAbIoLZ%2BNos%2BLsEi4OPJFIuinhXtewIgcG7tYnAVS3X2JgeFsToJ4OU9b%2Fzf%2FKQ%2BIxl2dB8kWisq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDF%2FBUSfezKS6GEc%2F%2FCrcA0crHxWUXa32mI8vI40Wd7Q%2Fra09aFgIcfZogJkPpGIIOhcPTdqeLVrZ7KuW0Z21tLGsgCW6K7VW54K33tjOEVhXy89Ye8VPk2TpFc8EfaZCsGAyvDShK12%2BxL7DKLJF0Zk%2FSvT%2FqteeBLvH50r3ppPjHhF7S6dqK6YtnQjhbRoMj6oRCosyNJzeU7t89i22CpU2JjT2CkNKsCMxQWoIfOzxnMJDawliIaGgCaeD%2BPdp3e%2B%2FNZJJwz43S4BoxezwThmK4o7GBIwRiM1Y8NtvtTlhig7M34Ct92L4lGS%2Bf1%2BwWordd7xYcEqatJmTXRaKfFjTv5VDQ9M1U0hqjBxTleqke4%2Fih7YUi5iwhQrt51vFF5sR4WGM41e7%2FIezmA1xgbI7BWuRj42X9nNqqgE1m%2BQhfoDHYur01XIuQAZo%2BQ0vYN3AfnTFxAAXyVUAcddpsZ7HitSaQOiaySTgHYCHSZNS2Jk9USx0CAna8kC4wATPeTROKZ%2BcXgvgAqR%2FYx83VTWnUSJxrPb6PpTpXVFNShnL2KLlwu2gFsxJ8aoFiI5O7mbek%2BnYcZOUResgoZQcMTj2t9sIrby%2FfRWUWdYQsTbQOnZzYfC0m8gzE%2Ft%2BeHNNPk%2BrhNvW7v8S8hM4MIuvjr8GOqUBsZHt0W32VOXzE9a%2Fkb4MWOa2Q61j9vDHKrYGMNGMGwh%2BBcMP1b6E3FkL7D6WZXYpbnwrc%2F%2F78H11ZZ4pQSSDnszcq8x2LA7iaKAkzHCvp9RfexlnEdDFJcvZ714YhPiPPtX8qp14fYexhOIzZYCnaaVbWskuvAQrm%2BcQmdri9r1YnBuSjHhM%2F58HF1qoGK87WGprVveuYPXCFtVMIWXi6qsiq5Ok&X-Amz-Signature=4217d099eff855b82a9db8d8bdc6f9784c9da0f6738ab721214d331ccb43d8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
