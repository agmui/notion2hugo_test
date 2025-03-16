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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X236JMFU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWUzqGTSL56q5vaVJkFpu%2Bm4kjnZaZ%2BeZvivvWmFP%2FVQIgWblqBxhRhnsOXPKs92TrlvzL1fOOPoivSL4Hbx7JUYMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDL%2FZURP%2BN57Bn%2BXMDircA5sK7jCwwq4hdaQ2SkoKl61s%2Bl6sX2%2FCkoyiPxkiMhtSk%2FMJLj%2ByHyipBlJgekyIVwAepRHCD00FEqfkbOh6et5SYgxrbPVUirNGQTgUHnvM0aBhFXtz1LQzV0JAWmmaf6zKiWGPcSlG4NtxsGsysand7PFGzw8Reas%2FnL5L2FnDkobF4jWVINe%2BpRGb6W7vDEA76OqodffJDyCcG7CAsDFnZXxfwVqYy2ePD8BPI36OyKDxIlGNzoPPtULsZ5MQzMW1Pt6QDVtuieIV68hta%2BBjdniWDKRcxuQfQax%2F3aTI3jsOoh6j3balMaFo5AHDXmFEcz3skCEmZg1g%2BaI8QWf5Hw0nXzmgoLCCMKjB5%2BGYG2pgvnR%2BYSZzsxeSAkiNnDAGA3vhiZ2S9T2KuZSO6V76NGCV1AzNhMYirtA1Cje%2BhG9tYKOFdz5JAPaUOn4%2Bc%2FE5Rl9nibPBYQU86MGWxN4%2BzrxNJaV8mKCM5CkYsrnW8T2UzwPBFOh4dxaNYJFi%2FRGW0CQBAFfuTvjgF7k5hn%2FhN%2FKIg%2FSQnWzvsDgzInnvYL71aKAJKPy%2FIZOAtOigl37YHWuGz3A%2FdFEqmkXB51hbBrZUI6%2BBn1aQWP88Hwfa56q4zE%2F3dqBv6k9wMKuT2r4GOqUBHtwZ1rHtWtugwfetaucn%2Bvzv9xFhzcRQ4axswCLLlkNy71U6gWwLCW0hpxUxV9%2FZMytRq1rzA3y0QTvcMj%2Fd9Xxba3avgm0jjak%2FcmItsrseIcrPP0xZ3fgg9cFz98MYstiOL0TYh9MjKEs3dc2cauC2g4nlIFkWLMO18EmyqTBVu4NxLPTDkIfboDEjlhpvlo8%2B0yjSYecoPAB9N508va9HMmYQ&X-Amz-Signature=2e76039f6d7729d106e53659c7c0d8992941fb55a550251967ab99d82155a75c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X236JMFU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWUzqGTSL56q5vaVJkFpu%2Bm4kjnZaZ%2BeZvivvWmFP%2FVQIgWblqBxhRhnsOXPKs92TrlvzL1fOOPoivSL4Hbx7JUYMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDL%2FZURP%2BN57Bn%2BXMDircA5sK7jCwwq4hdaQ2SkoKl61s%2Bl6sX2%2FCkoyiPxkiMhtSk%2FMJLj%2ByHyipBlJgekyIVwAepRHCD00FEqfkbOh6et5SYgxrbPVUirNGQTgUHnvM0aBhFXtz1LQzV0JAWmmaf6zKiWGPcSlG4NtxsGsysand7PFGzw8Reas%2FnL5L2FnDkobF4jWVINe%2BpRGb6W7vDEA76OqodffJDyCcG7CAsDFnZXxfwVqYy2ePD8BPI36OyKDxIlGNzoPPtULsZ5MQzMW1Pt6QDVtuieIV68hta%2BBjdniWDKRcxuQfQax%2F3aTI3jsOoh6j3balMaFo5AHDXmFEcz3skCEmZg1g%2BaI8QWf5Hw0nXzmgoLCCMKjB5%2BGYG2pgvnR%2BYSZzsxeSAkiNnDAGA3vhiZ2S9T2KuZSO6V76NGCV1AzNhMYirtA1Cje%2BhG9tYKOFdz5JAPaUOn4%2Bc%2FE5Rl9nibPBYQU86MGWxN4%2BzrxNJaV8mKCM5CkYsrnW8T2UzwPBFOh4dxaNYJFi%2FRGW0CQBAFfuTvjgF7k5hn%2FhN%2FKIg%2FSQnWzvsDgzInnvYL71aKAJKPy%2FIZOAtOigl37YHWuGz3A%2FdFEqmkXB51hbBrZUI6%2BBn1aQWP88Hwfa56q4zE%2F3dqBv6k9wMKuT2r4GOqUBHtwZ1rHtWtugwfetaucn%2Bvzv9xFhzcRQ4axswCLLlkNy71U6gWwLCW0hpxUxV9%2FZMytRq1rzA3y0QTvcMj%2Fd9Xxba3avgm0jjak%2FcmItsrseIcrPP0xZ3fgg9cFz98MYstiOL0TYh9MjKEs3dc2cauC2g4nlIFkWLMO18EmyqTBVu4NxLPTDkIfboDEjlhpvlo8%2B0yjSYecoPAB9N508va9HMmYQ&X-Amz-Signature=578f66595c37678f3ec150f97c31366a678fa66547816d39ac0a2b8a4b4fe7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
