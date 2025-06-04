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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64AHTIF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQClg4N5r5XczNCenc9pTnsAkmP3gnvoM9L1ZueCZJOPiQIhAIaVB7bxatWbwwtVkr8Le1fs2cD%2BiJ4DzcHGJNNXwd2xKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4p6%2BfugdI8ouQqnEq3ANTZ3iu6WWDNyvPxPqIJuZ0aAtKfMNHlFjiX0bWldpeRMB2xxYsjFhXWVKyfoTzk9uFUrX2hCza1EP5rHVfiTsD3A0ZKBU9iKooYbZN4NjN9vwXlD0eI5IoouWGFqeOkkDvpTP99OOUajQvx13TNGvIUW%2FLCxBWfJOf%2BWshV0IaKhJrUcPrJEEYeHq1wHga5A39hIrAcP1HC%2Ff9mW%2BB4sQugak2lA0plMpifwOOmgf%2BSiV%2BbThH%2B2vXHfBoxULYz1HK4USebfSRugnnaeymSlRRjJDdM1mMHyGYOMWiBfWb%2FK0N32CmsGpCAjdh30JhIcgAEr3dvWIIi46k8RAnL9bj9jYU008DWPgV8T%2B7IVwXCV5NmtGi6LyhQ%2FtXwGjmYBwBMMM%2BHfphmrJ02oJfOyCLDPzBZ%2BsbO%2FTTSzmy7YssqATGhRULxJMLIEq3adson8b4F9%2BF2twE1hnTk%2Bh%2FW0Q2EWc3oHqRFh72%2BA%2B8kOiLg4%2BI5%2F8IgOx%2B%2F5mJHP8vHTP5eNpH%2FOrvPR%2FjdzNYSjzo8DVpJUitti6%2BRLVU3eyHZjoZyc3n1dq4S3dInoRSBRzZI3VSEhBPfSuXV4RRI5bIngx%2FRRaQMsJGErbc5bXwKAzna18skolQF53IijD73YHCBjqkAThJ%2BhgTzsF4HSKLEy%2Bxzua%2B%2FVikVpzZCwRb28W6%2F87uYBblMLZ5KPiQBPs9s8FnifllJScK4dJsgHerzjpmTgp2OBN5jQvy0m47ycGPoCqDK0%2FI53ak98MAVm9jBJwk8kV%2Fu9Q8k4pBZVZuOq%2BuQ1w6xZB7%2Bc6L6plC73ynqUMxnmlOGsTPABFcCElefFr%2FJ%2FfgxchXID1rKP8rmjkAnE7fYN6E&X-Amz-Signature=925337f5f72af2c9cef3b9078f007eace6334f247885c6059045411d98723011&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64AHTIF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQClg4N5r5XczNCenc9pTnsAkmP3gnvoM9L1ZueCZJOPiQIhAIaVB7bxatWbwwtVkr8Le1fs2cD%2BiJ4DzcHGJNNXwd2xKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4p6%2BfugdI8ouQqnEq3ANTZ3iu6WWDNyvPxPqIJuZ0aAtKfMNHlFjiX0bWldpeRMB2xxYsjFhXWVKyfoTzk9uFUrX2hCza1EP5rHVfiTsD3A0ZKBU9iKooYbZN4NjN9vwXlD0eI5IoouWGFqeOkkDvpTP99OOUajQvx13TNGvIUW%2FLCxBWfJOf%2BWshV0IaKhJrUcPrJEEYeHq1wHga5A39hIrAcP1HC%2Ff9mW%2BB4sQugak2lA0plMpifwOOmgf%2BSiV%2BbThH%2B2vXHfBoxULYz1HK4USebfSRugnnaeymSlRRjJDdM1mMHyGYOMWiBfWb%2FK0N32CmsGpCAjdh30JhIcgAEr3dvWIIi46k8RAnL9bj9jYU008DWPgV8T%2B7IVwXCV5NmtGi6LyhQ%2FtXwGjmYBwBMMM%2BHfphmrJ02oJfOyCLDPzBZ%2BsbO%2FTTSzmy7YssqATGhRULxJMLIEq3adson8b4F9%2BF2twE1hnTk%2Bh%2FW0Q2EWc3oHqRFh72%2BA%2B8kOiLg4%2BI5%2F8IgOx%2B%2F5mJHP8vHTP5eNpH%2FOrvPR%2FjdzNYSjzo8DVpJUitti6%2BRLVU3eyHZjoZyc3n1dq4S3dInoRSBRzZI3VSEhBPfSuXV4RRI5bIngx%2FRRaQMsJGErbc5bXwKAzna18skolQF53IijD73YHCBjqkAThJ%2BhgTzsF4HSKLEy%2Bxzua%2B%2FVikVpzZCwRb28W6%2F87uYBblMLZ5KPiQBPs9s8FnifllJScK4dJsgHerzjpmTgp2OBN5jQvy0m47ycGPoCqDK0%2FI53ak98MAVm9jBJwk8kV%2Fu9Q8k4pBZVZuOq%2BuQ1w6xZB7%2Bc6L6plC73ynqUMxnmlOGsTPABFcCElefFr%2FJ%2FfgxchXID1rKP8rmjkAnE7fYN6E&X-Amz-Signature=5937871ac96454fac50659290c355dae5a0b590df5a015bdfd47e13f385769aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
