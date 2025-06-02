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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILG6LCK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEFZCMBDW3FIfPRZ1ItPzen2UW7%2FbuqLebZF%2FjngKOXoAiEAl%2BKkFS0ZWwG9%2FSjYltgdHBrkvilfxBooZ5LJeaiCUmsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpOch3AInzjJEr6SrcAxeM8RzcABC1JS9LoxhMEZt1%2BC5umcxZB%2FCSa6ABt%2BXtFT9c%2Bga4kcyvBaD1lKXYoxzEamJ8rhvT%2BYzhh905RGJQtVOiE%2BZgHMoa3j5Hr7fr%2BOag9kVK1W4whOTbf8csQVYGBfu0RvEqDwnzph19KWV2I5bZ7DXy4jCoBQ0HpC0638%2B5CYEtMSokGOtgySDtYQn86NcwioGyxttnUfKAg%2FGyQQdTn%2FGB9HHRkka2%2BwJdtZjFoW0t6V6AG4u1WAYoAPCm9aFLeLDkvYJ6%2F%2Fp4QdIosfMlZ6truGGpbwDfyRNEabDf1JwI1inCJhK8igWwO0tevVCIgzn%2BpNO9vQUx36Hl5I8Nj%2BX7E8jzU3L2koz6L8tbo9tAbspg3u3V0hgL1wPZ9SxsjnawR6OGQqXRx65szOqeMMkGDjUCJAE4hZY2SP0a5xY2B8OUpM08wWwbsgn0c1Tb8IkdE13vOfZ9M1jdlIre1c9kT%2FaVJfZdIQhn2K1f1MigLdCqde50PTlAtI8x0diUrUtmTR5i3%2FHYln0dJr8BNcVxxDWEK4PbigK%2BuvtWUMaZN4JhtvNcJzruiGpq%2BZA9ArOt0p8vW5Q6OOqjR%2BF8sk4ubj3NJsRtsOncDfI9NN8RIpLQFbFWMIiz98EGOqUB0QOM%2FmHwc40tWeYJS9g6Ona5okzUJj8ai1pmwYCac%2F1%2B2dUiWBxEsaDs8tSUEt7YQisx2uYJGqOCQJGi%2BobMbajp4V23VV6edzdrpIaZqbeGvXNsKIZJKSxpZ6%2F2xlsj9JoXNhbUhj5BQN04gxslTBIrEzX%2B946%2BaCZh2LU1qwXqyzvoe0Xhh7twgtOkSZKAjQqBZY2CydhyTPoInl4RVzWR%2Figl&X-Amz-Signature=e670253bd43c0e8ba1d8f938bc93e33920ab1e8a310752c30e2363256cec52bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILG6LCK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEFZCMBDW3FIfPRZ1ItPzen2UW7%2FbuqLebZF%2FjngKOXoAiEAl%2BKkFS0ZWwG9%2FSjYltgdHBrkvilfxBooZ5LJeaiCUmsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpOch3AInzjJEr6SrcAxeM8RzcABC1JS9LoxhMEZt1%2BC5umcxZB%2FCSa6ABt%2BXtFT9c%2Bga4kcyvBaD1lKXYoxzEamJ8rhvT%2BYzhh905RGJQtVOiE%2BZgHMoa3j5Hr7fr%2BOag9kVK1W4whOTbf8csQVYGBfu0RvEqDwnzph19KWV2I5bZ7DXy4jCoBQ0HpC0638%2B5CYEtMSokGOtgySDtYQn86NcwioGyxttnUfKAg%2FGyQQdTn%2FGB9HHRkka2%2BwJdtZjFoW0t6V6AG4u1WAYoAPCm9aFLeLDkvYJ6%2F%2Fp4QdIosfMlZ6truGGpbwDfyRNEabDf1JwI1inCJhK8igWwO0tevVCIgzn%2BpNO9vQUx36Hl5I8Nj%2BX7E8jzU3L2koz6L8tbo9tAbspg3u3V0hgL1wPZ9SxsjnawR6OGQqXRx65szOqeMMkGDjUCJAE4hZY2SP0a5xY2B8OUpM08wWwbsgn0c1Tb8IkdE13vOfZ9M1jdlIre1c9kT%2FaVJfZdIQhn2K1f1MigLdCqde50PTlAtI8x0diUrUtmTR5i3%2FHYln0dJr8BNcVxxDWEK4PbigK%2BuvtWUMaZN4JhtvNcJzruiGpq%2BZA9ArOt0p8vW5Q6OOqjR%2BF8sk4ubj3NJsRtsOncDfI9NN8RIpLQFbFWMIiz98EGOqUB0QOM%2FmHwc40tWeYJS9g6Ona5okzUJj8ai1pmwYCac%2F1%2B2dUiWBxEsaDs8tSUEt7YQisx2uYJGqOCQJGi%2BobMbajp4V23VV6edzdrpIaZqbeGvXNsKIZJKSxpZ6%2F2xlsj9JoXNhbUhj5BQN04gxslTBIrEzX%2B946%2BaCZh2LU1qwXqyzvoe0Xhh7twgtOkSZKAjQqBZY2CydhyTPoInl4RVzWR%2Figl&X-Amz-Signature=b5f0f41ac2172d23df11fa775baab1098c7cd4a666da40613008f6d7e507df5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
