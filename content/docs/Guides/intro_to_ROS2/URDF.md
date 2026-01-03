---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILMPGYU%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH5NWSTmbwa3P7SR44486yLtjL8edcomQjcDMD0vb1hpAiBLgvQWg8mbKxXlJ4RejxrCeBj8SkNQlrKBr7PK0uJDeir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMD2JScfzufueiIFTxKtwD2WlzW4vTEH5VJtzNeRhXHh7V15x%2BjQE4qrwvLjM65JL4uy3yZG1MecL37biV59Qic9oTD6fXeIT8OttIdmphoE%2Br%2BqdPwGJ7srMUhT%2BfRrdyKrVPbe08hilW5%2F%2BqJYbUWbo9X%2BeLQmEKvK4%2FAGVV%2BRGevuilNIXHgi96OoGFWYB1yEIdVVfXaSpQ5W4iWiJ4mwY5jtBjfyu7lrBCB86jT4bAektYW0wBRSOhv%2FdVx5bCHQrkdVqKxTK7dCu51ZLb3%2BP93lB014fZ%2Bo3QW5qLDt%2FCOZZ3IzPXXJvjTFK3ABapx8TRBcPaOz8OkUGVDULPE2GQg6dVAJh6RpEjxshYeVYop%2B2gyQHfzvtZExPN2AYAHM6zNCATnLpmTTqjGWta6CA8goi43IUiBNV%2BoLU7xSQyZeQv9w6Ksj59i6MI80Hn2qqOHhV5GSpo0oI%2BZwpgGg%2FT4xDgraDxU71r2kdPAaIrsL83qdmGjgPitw%2FIUiM1MgFfXYq9O1qnMYT8eJjEVZ3FRbG4l%2Bd9blNN%2B9urZiSbpOmSI%2BK10LzB9dAYQDjqYffXKrmJHhYyrQsywI8L4NXaDdzdqbyhA9TML%2F1fVggX4PSr49TvLikb6qMk9KQRlEkYCPnZwWqZnRcw2s7gygY6pgGgitQ8MQFb%2BLsOjzQ8cVj6%2F%2FXlA5iOGXKaVnlLYR9mUGBx89KGK2e7Xlj0yy7dEnI5pEYTpaPgPhoK8NfNfu0lm8Rs4PbTeDF4lVASo56OzWMAOV7GUbDiXzEfidTd13j4WMHQcdeTdWlkq1lN9X0T5n6QI%2FCcfOHaO1A%2FRb3hkA%2BAhMIpPcmAJn2oY3PtBf7i875UoCqMnRsIrLduvOYaBu0tmlrZ&X-Amz-Signature=1aa0cfd714d7d81753ad8920a781516fe73c8c14009343e6c3685558d673e0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILMPGYU%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH5NWSTmbwa3P7SR44486yLtjL8edcomQjcDMD0vb1hpAiBLgvQWg8mbKxXlJ4RejxrCeBj8SkNQlrKBr7PK0uJDeir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMD2JScfzufueiIFTxKtwD2WlzW4vTEH5VJtzNeRhXHh7V15x%2BjQE4qrwvLjM65JL4uy3yZG1MecL37biV59Qic9oTD6fXeIT8OttIdmphoE%2Br%2BqdPwGJ7srMUhT%2BfRrdyKrVPbe08hilW5%2F%2BqJYbUWbo9X%2BeLQmEKvK4%2FAGVV%2BRGevuilNIXHgi96OoGFWYB1yEIdVVfXaSpQ5W4iWiJ4mwY5jtBjfyu7lrBCB86jT4bAektYW0wBRSOhv%2FdVx5bCHQrkdVqKxTK7dCu51ZLb3%2BP93lB014fZ%2Bo3QW5qLDt%2FCOZZ3IzPXXJvjTFK3ABapx8TRBcPaOz8OkUGVDULPE2GQg6dVAJh6RpEjxshYeVYop%2B2gyQHfzvtZExPN2AYAHM6zNCATnLpmTTqjGWta6CA8goi43IUiBNV%2BoLU7xSQyZeQv9w6Ksj59i6MI80Hn2qqOHhV5GSpo0oI%2BZwpgGg%2FT4xDgraDxU71r2kdPAaIrsL83qdmGjgPitw%2FIUiM1MgFfXYq9O1qnMYT8eJjEVZ3FRbG4l%2Bd9blNN%2B9urZiSbpOmSI%2BK10LzB9dAYQDjqYffXKrmJHhYyrQsywI8L4NXaDdzdqbyhA9TML%2F1fVggX4PSr49TvLikb6qMk9KQRlEkYCPnZwWqZnRcw2s7gygY6pgGgitQ8MQFb%2BLsOjzQ8cVj6%2F%2FXlA5iOGXKaVnlLYR9mUGBx89KGK2e7Xlj0yy7dEnI5pEYTpaPgPhoK8NfNfu0lm8Rs4PbTeDF4lVASo56OzWMAOV7GUbDiXzEfidTd13j4WMHQcdeTdWlkq1lN9X0T5n6QI%2FCcfOHaO1A%2FRb3hkA%2BAhMIpPcmAJn2oY3PtBf7i875UoCqMnRsIrLduvOYaBu0tmlrZ&X-Amz-Signature=dd9947c403a79abf5e592c8b5929ddb027196e4e65adab36ab6e30d0760c3349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
