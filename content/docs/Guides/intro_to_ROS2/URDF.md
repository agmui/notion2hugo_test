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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUR24QYG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfiEjN5B0KZ%2BAuX1%2F7X5lBF9f0wY5wXP4PRSFnYHyPAiEA1flgnHUFaKNLk7P97OIohROY081mzD2tZqkxJP%2BnfZsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA0e6MnufDnpDLJuircA8qiyQMpFsBj94oGaCEcmv%2BCokSFqFzs4qkYLZjpjVwNX17fKKgXPJcz3Sp39EoDP0oHOsTe7nrYmNtK4Kj2iayfprGKh6Biu7UD5Yy1G%2Fy5vU9kwO4oVqEiRWK7vNeb5J5%2F4uxuNOYn01CUx5yo%2Bsef1Kaljscy42eJ%2Bzi0vljgEHBPpAQ3sOxk8y%2BZpBhcGkop%2FhzZ%2Fgn85pYyf%2B4sPzENspzrDGA9p7OyxYG5EJClCkFfvnCfRrRnetohz6j1BP7aKOUPTig6Uu9MWoLNk44a3owoMysFrgZZJmKoOp3Jkcls2U1Mnp2R9Ko%2BzIXuJjruP0w0Z7r0GMn34Ici%2BpMn37qpfZe8h5GILb9%2FDlaGd37xUgERY7jo7%2BOYC5N43sVyqHG3zTcMfsUUy9HQrRLtQpCG4djVkr6G8DRAmKFl1h%2BtHZtBtGDtiLfMGHcMWn34I2UED9X%2FsolC7E1FGp6R78XYJUhfZLmmAlMqKNUpt5dHGL%2BAwlDj5QqlhupqLljFHzmld%2FZCRl0XZe5ZbQ7QDk829Dhvzuz2BQiD8ap%2BqggKxQBmGG3CMEJeOvlKsX9eWp%2FBs3mLZraA%2BlOKknHUttBvzlSm7pYqAonhDJFfB2NWeNHCNopxgevMMJPt5L0GOqUBzUMBbTqkLUBwnNRVq51b873%2BUKPHDkK6YCY6Bv4oidAH3QEo6ECXDrNs5Ep4WyGhTwkaVNwfounll%2Ftm6gM0nr%2BoJ8i3rpCUOavwQB%2B589i7O90tem9hvQOBvQ9hRBjivFDf4xRWJo%2F9EcMq5SsafGm1UNdPMFreAX%2F%2F6hOtbJoo6t9KwVuv%2BEsVjXK20sNZJiK8IVg%2BvNJjQVqN4rIKhz%2FJBxzj&X-Amz-Signature=b48d41b931df1a3daa3de02f6dd6d747a7f2c7e5e6e3c2b23716ff3756a3606a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUR24QYG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfiEjN5B0KZ%2BAuX1%2F7X5lBF9f0wY5wXP4PRSFnYHyPAiEA1flgnHUFaKNLk7P97OIohROY081mzD2tZqkxJP%2BnfZsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA0e6MnufDnpDLJuircA8qiyQMpFsBj94oGaCEcmv%2BCokSFqFzs4qkYLZjpjVwNX17fKKgXPJcz3Sp39EoDP0oHOsTe7nrYmNtK4Kj2iayfprGKh6Biu7UD5Yy1G%2Fy5vU9kwO4oVqEiRWK7vNeb5J5%2F4uxuNOYn01CUx5yo%2Bsef1Kaljscy42eJ%2Bzi0vljgEHBPpAQ3sOxk8y%2BZpBhcGkop%2FhzZ%2Fgn85pYyf%2B4sPzENspzrDGA9p7OyxYG5EJClCkFfvnCfRrRnetohz6j1BP7aKOUPTig6Uu9MWoLNk44a3owoMysFrgZZJmKoOp3Jkcls2U1Mnp2R9Ko%2BzIXuJjruP0w0Z7r0GMn34Ici%2BpMn37qpfZe8h5GILb9%2FDlaGd37xUgERY7jo7%2BOYC5N43sVyqHG3zTcMfsUUy9HQrRLtQpCG4djVkr6G8DRAmKFl1h%2BtHZtBtGDtiLfMGHcMWn34I2UED9X%2FsolC7E1FGp6R78XYJUhfZLmmAlMqKNUpt5dHGL%2BAwlDj5QqlhupqLljFHzmld%2FZCRl0XZe5ZbQ7QDk829Dhvzuz2BQiD8ap%2BqggKxQBmGG3CMEJeOvlKsX9eWp%2FBs3mLZraA%2BlOKknHUttBvzlSm7pYqAonhDJFfB2NWeNHCNopxgevMMJPt5L0GOqUBzUMBbTqkLUBwnNRVq51b873%2BUKPHDkK6YCY6Bv4oidAH3QEo6ECXDrNs5Ep4WyGhTwkaVNwfounll%2Ftm6gM0nr%2BoJ8i3rpCUOavwQB%2B589i7O90tem9hvQOBvQ9hRBjivFDf4xRWJo%2F9EcMq5SsafGm1UNdPMFreAX%2F%2F6hOtbJoo6t9KwVuv%2BEsVjXK20sNZJiK8IVg%2BvNJjQVqN4rIKhz%2FJBxzj&X-Amz-Signature=c1a542594f262cdf190ff3ad8e2a8df2badb9687b0275cfbbca4e3909e985cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
