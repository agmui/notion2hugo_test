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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DS6B4V5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5DpYg%2BSPENNflw54TlqZocehxpssU8s6gU3XXrJdtAIgGpcwCBh6pyOtHHhnsIbHpP8AZQ2s9CTjqGnHXfL80lIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNESB7cArrIZTF13gyrcA4cXBi1XmgHYN3Xv%2BZuluNp3Bnv7EMffdFR8HVD2yRKEljFOb3Thjlb1vP8KiEX3ORFEEpHvoau5qR3RggT3UuFRFQa3BZ3lO8n7nQfNMEjodTCN%2FaM0H1bGcarjXdBlvjD%2BWSABKk%2FSpyzEGK8DcxRHQQ%2FH0TW%2BdG7HTQXznzfWH%2FeEcjeKEqvjpBUBSQeuSbNktzcJdJ3aX8oNl%2FpK%2FZr78rdmqXKPeMwjx5N09wdBFcBLW5jk%2Bn0EBQVW3AAIqCkE1%2Bpw4GPWgS6XzXZl6ER5B0RxN7Y22crd4ARIZjZ%2BOPgr9awvzvBgyxcOJG9PgatP7Lt1JieKgQFx%2FQzbl1atsMwLqYMYD7%2Fpse45OYPaM9x0%2F9Kj1XGy6ZaLhgkEoYeS2WFpRy4ktOVKAXso2xnVXb%2B7K2V2vbMYx%2Fv0UQ89iXFZl8LdljngGipclRM6Eb1z3uOUNuRXcFFcdyE15jt8L3Stn68%2Bs6gA034jPRVYmoFcQZsEKulOd4PzXG4uBLAXM3GTIBT6HPYtsNUfExlRR2JSvsJ7k07CaYIndhw%2BU4GEOz19zFZe2IGyawbs8%2BADG0MJOX0uQttrWox3uU4DZnH5Bz6N9ydjgPXohbt%2BzWUOSMdFc5b2bPFYMKvemsIGOqUB8ZeJtDJp%2FNfsQExd12n6QvO9H4sr0TP%2BGJm5nPeePLz5Zd5fhEQ3dqe8gbWw8xl%2BjXx%2FOn3dBe68CTOx3GLS7hLxRhYtjmLDuruyRfs2p5IELk7d79lhV6nuZuM4q8utLDr6W%2FMvXvp9x51nkbtyPzNOFlCANUgBNvhe4PJ8WW4g7hSHB3fJ4YqkVU5xrhlVDafqx0NnbBDHmYyhJtSXp%2BvBA2DZ&X-Amz-Signature=890478f888495b16633d2bfb7f2adde932588e599b3b8be9f153478298127248&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DS6B4V5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5DpYg%2BSPENNflw54TlqZocehxpssU8s6gU3XXrJdtAIgGpcwCBh6pyOtHHhnsIbHpP8AZQ2s9CTjqGnHXfL80lIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNESB7cArrIZTF13gyrcA4cXBi1XmgHYN3Xv%2BZuluNp3Bnv7EMffdFR8HVD2yRKEljFOb3Thjlb1vP8KiEX3ORFEEpHvoau5qR3RggT3UuFRFQa3BZ3lO8n7nQfNMEjodTCN%2FaM0H1bGcarjXdBlvjD%2BWSABKk%2FSpyzEGK8DcxRHQQ%2FH0TW%2BdG7HTQXznzfWH%2FeEcjeKEqvjpBUBSQeuSbNktzcJdJ3aX8oNl%2FpK%2FZr78rdmqXKPeMwjx5N09wdBFcBLW5jk%2Bn0EBQVW3AAIqCkE1%2Bpw4GPWgS6XzXZl6ER5B0RxN7Y22crd4ARIZjZ%2BOPgr9awvzvBgyxcOJG9PgatP7Lt1JieKgQFx%2FQzbl1atsMwLqYMYD7%2Fpse45OYPaM9x0%2F9Kj1XGy6ZaLhgkEoYeS2WFpRy4ktOVKAXso2xnVXb%2B7K2V2vbMYx%2Fv0UQ89iXFZl8LdljngGipclRM6Eb1z3uOUNuRXcFFcdyE15jt8L3Stn68%2Bs6gA034jPRVYmoFcQZsEKulOd4PzXG4uBLAXM3GTIBT6HPYtsNUfExlRR2JSvsJ7k07CaYIndhw%2BU4GEOz19zFZe2IGyawbs8%2BADG0MJOX0uQttrWox3uU4DZnH5Bz6N9ydjgPXohbt%2BzWUOSMdFc5b2bPFYMKvemsIGOqUB8ZeJtDJp%2FNfsQExd12n6QvO9H4sr0TP%2BGJm5nPeePLz5Zd5fhEQ3dqe8gbWw8xl%2BjXx%2FOn3dBe68CTOx3GLS7hLxRhYtjmLDuruyRfs2p5IELk7d79lhV6nuZuM4q8utLDr6W%2FMvXvp9x51nkbtyPzNOFlCANUgBNvhe4PJ8WW4g7hSHB3fJ4YqkVU5xrhlVDafqx0NnbBDHmYyhJtSXp%2BvBA2DZ&X-Amz-Signature=f203d48e88047a0cb9c3876193091276619d1ac7a3f36d2a5a6a4f8004870b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
