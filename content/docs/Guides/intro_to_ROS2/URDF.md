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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQFJIRD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCHj8vBeLNlMJBsbZyzABgA3UH5%2Bid9cEmN2IaigkGwQgIhAP2vqq7eno%2B7sjoUVM5dtW1JncSW4Ks8wR2NnHrpw2krKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4otgWBX53n9kPyecq3AMYaGPussBIQFpTdqMnAbrBVxWP5gAcn%2BIJlGtxWzBYkituqu1antu%2FRs4XmIK5gRMRgMcHEawAam4SY2Ow9q%2FMoEx3WiDoUN762EEccf%2FIWb4VmOQ6REp9ew7uyDmp49y6EcA8eAgaI%2FKOO%2BWxUsfbfC1NQ8Y9U1P5o6HjwxOawvYAE0vSFyKS0XO7QbMHRg3sT9GoeMsuTYhhWP3ggf6GJGOzB6k8xoAilJrbk6FyjVpPK5lWFPyIeyWscNd%2BZexO2jqO7KnqRR7meklTz1o%2BH4wNkC0tjv2XrDr%2FJR7%2Fx%2FRIDgTsUxuD16hETQnaEcqvNQb6%2Fw0tQoKjQeWzoThV%2FpEr2hPrHT8cM%2Fy2SgnxNuh4dMulFle2qqqHET%2BFEqYzMSgX8hlCvBNeUIl1TTdyszKmOoYnQCqdR3pRxe8M8gbDnRa80heTIckBemNya68QSuxuCjJWg%2BCrZMFDbSQc3hdc9sNjcFxNQbdxARc5vFZObzAyJPYxUyesdiMCbimukOcf%2FjjVOAvMgkrSB8kyCord6A8v1LPKrbkiQJg09%2BPlNF8HJz7UMRVV559N2ZfYRKy7bI7dz8LvR%2FDZgMNdPTk%2Flln40OCAGivt1Y%2BYK8qQBzDnFDkyKZhkoTDp8qDABjqkAVf7%2FZQo4DtbdPJlnpscMzYDJ%2Bejzb6kuQv3%2FUtIeX4oTtFJKr0eC39nm57GzY8pc7mx3wddCFKhw9elIdZl01dCWKteIK31ZMNmIUlFPCc8gvg0lwIzV2nyUb6XRiFvkjcFBfTNYa%2BrBd0AzKihnu3hY3RTbyers%2BVC5pr4tKrFMSt6LfaIZ5KeUbrWlJrqPfo3GBT%2FjofW4E837QwBV7p%2FTvXb&X-Amz-Signature=8d194e9e5a2f3816ca05bae50fac7124b407ec75c96d54650414154c7e8e7e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQFJIRD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCHj8vBeLNlMJBsbZyzABgA3UH5%2Bid9cEmN2IaigkGwQgIhAP2vqq7eno%2B7sjoUVM5dtW1JncSW4Ks8wR2NnHrpw2krKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4otgWBX53n9kPyecq3AMYaGPussBIQFpTdqMnAbrBVxWP5gAcn%2BIJlGtxWzBYkituqu1antu%2FRs4XmIK5gRMRgMcHEawAam4SY2Ow9q%2FMoEx3WiDoUN762EEccf%2FIWb4VmOQ6REp9ew7uyDmp49y6EcA8eAgaI%2FKOO%2BWxUsfbfC1NQ8Y9U1P5o6HjwxOawvYAE0vSFyKS0XO7QbMHRg3sT9GoeMsuTYhhWP3ggf6GJGOzB6k8xoAilJrbk6FyjVpPK5lWFPyIeyWscNd%2BZexO2jqO7KnqRR7meklTz1o%2BH4wNkC0tjv2XrDr%2FJR7%2Fx%2FRIDgTsUxuD16hETQnaEcqvNQb6%2Fw0tQoKjQeWzoThV%2FpEr2hPrHT8cM%2Fy2SgnxNuh4dMulFle2qqqHET%2BFEqYzMSgX8hlCvBNeUIl1TTdyszKmOoYnQCqdR3pRxe8M8gbDnRa80heTIckBemNya68QSuxuCjJWg%2BCrZMFDbSQc3hdc9sNjcFxNQbdxARc5vFZObzAyJPYxUyesdiMCbimukOcf%2FjjVOAvMgkrSB8kyCord6A8v1LPKrbkiQJg09%2BPlNF8HJz7UMRVV559N2ZfYRKy7bI7dz8LvR%2FDZgMNdPTk%2Flln40OCAGivt1Y%2BYK8qQBzDnFDkyKZhkoTDp8qDABjqkAVf7%2FZQo4DtbdPJlnpscMzYDJ%2Bejzb6kuQv3%2FUtIeX4oTtFJKr0eC39nm57GzY8pc7mx3wddCFKhw9elIdZl01dCWKteIK31ZMNmIUlFPCc8gvg0lwIzV2nyUb6XRiFvkjcFBfTNYa%2BrBd0AzKihnu3hY3RTbyers%2BVC5pr4tKrFMSt6LfaIZ5KeUbrWlJrqPfo3GBT%2FjofW4E837QwBV7p%2FTvXb&X-Amz-Signature=e9a33513e4bcd022cac6b06860669ae96f91dab0220ba7b7931e1491e599556e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
