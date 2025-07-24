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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOG7LA7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDYlqX3MOsmxid5a1WmpWYJV8ZfJvowC8t8%2FD98w1HpaAIhAPppMswbsqOZWFuNvkQkilSV6EROdAIqCVTqprR%2Buql5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxmlAc9SbLGvzrR4MUq3ANqTkPAorEjP3W8%2BJAxDmANC5zLBiq0wgNgfor8SW0vK25dIxp4h1l1l8mdR7dATOaw5jEPejAs26SmQ3yxnKhVNbjSiErJbeZV%2Ba%2B7W%2FUvL%2FCQv2esZ82iyfdXYtcMgxCHG1kJYz6e72G3VKBFI0GzCI%2BZJEiPt5btUdD1F2ZTuNR3HJ8J%2FSm8dyBUJEc6cZDkCC6Q59LCKsP5AUMTvniLLX96hOQJguOm%2FnnNADXVZ5F8QI3ZBvf5ZHf54htWnXfCKF57ZcE%2BXWiN1fTFd0Cl%2FhAfaQqZL7Ifs1sTX8zs%2F5dK2uLW%2BSwc3V3s8bJk4EgrzrVVUM32jaBvSlc3Z7VvjNpT3Be%2FL1kso%2BXIR14%2Bmv%2BQrJVwARdZzWNKrttPlSA9%2BBchLv5ia7JnvdDTNuJrLGC%2BIw%2FCAgr28mirQjMg9eVLyk20oGI39EuN3Op5q294p5EvJJcuqcpxQxKoVy%2F3VzrcdR7dMbRbHAdPD0Oa5twZJKsJ1uZK1v%2BEqv7lhafrbdH3W%2BtuZt1Ksk5wZ1EB4fZzZWoonl0vd7W3N7SBDB%2BQ4t7wksAItP1pfQOLh2WBQkljszE5rqMVFpsr%2FDhAl8aTALt0Jvg8ROeaVSE6iwC6Szg4dn6Mt8c1MjCzsYnEBjqkAY%2B9asLFAoLA2QNv3U4QxWmX7XsN6a5ME3nfdSl3Y6QiQx6HbmBOb4Likjiw%2BkHozoNqPrHICe7%2Bjk82VpbYwsAUxQSKq7Ok5nsIdavmcadLR%2B5ypFpvmawDyRBjM%2BXJBelsZg8QjM7XGP4OafmjceEHej6FZFIzchaYeDZ%2B32irwtl%2FQ2h%2BuqlBohxjn6zztxRY0NFvC%2F5EMUoEO4LBguGMAbRZ&X-Amz-Signature=ba04811b4c6a889f63d029bd29ec59481680a8d7af492cbfce07260ad23a5aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOG7LA7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDYlqX3MOsmxid5a1WmpWYJV8ZfJvowC8t8%2FD98w1HpaAIhAPppMswbsqOZWFuNvkQkilSV6EROdAIqCVTqprR%2Buql5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxmlAc9SbLGvzrR4MUq3ANqTkPAorEjP3W8%2BJAxDmANC5zLBiq0wgNgfor8SW0vK25dIxp4h1l1l8mdR7dATOaw5jEPejAs26SmQ3yxnKhVNbjSiErJbeZV%2Ba%2B7W%2FUvL%2FCQv2esZ82iyfdXYtcMgxCHG1kJYz6e72G3VKBFI0GzCI%2BZJEiPt5btUdD1F2ZTuNR3HJ8J%2FSm8dyBUJEc6cZDkCC6Q59LCKsP5AUMTvniLLX96hOQJguOm%2FnnNADXVZ5F8QI3ZBvf5ZHf54htWnXfCKF57ZcE%2BXWiN1fTFd0Cl%2FhAfaQqZL7Ifs1sTX8zs%2F5dK2uLW%2BSwc3V3s8bJk4EgrzrVVUM32jaBvSlc3Z7VvjNpT3Be%2FL1kso%2BXIR14%2Bmv%2BQrJVwARdZzWNKrttPlSA9%2BBchLv5ia7JnvdDTNuJrLGC%2BIw%2FCAgr28mirQjMg9eVLyk20oGI39EuN3Op5q294p5EvJJcuqcpxQxKoVy%2F3VzrcdR7dMbRbHAdPD0Oa5twZJKsJ1uZK1v%2BEqv7lhafrbdH3W%2BtuZt1Ksk5wZ1EB4fZzZWoonl0vd7W3N7SBDB%2BQ4t7wksAItP1pfQOLh2WBQkljszE5rqMVFpsr%2FDhAl8aTALt0Jvg8ROeaVSE6iwC6Szg4dn6Mt8c1MjCzsYnEBjqkAY%2B9asLFAoLA2QNv3U4QxWmX7XsN6a5ME3nfdSl3Y6QiQx6HbmBOb4Likjiw%2BkHozoNqPrHICe7%2Bjk82VpbYwsAUxQSKq7Ok5nsIdavmcadLR%2B5ypFpvmawDyRBjM%2BXJBelsZg8QjM7XGP4OafmjceEHej6FZFIzchaYeDZ%2B32irwtl%2FQ2h%2BuqlBohxjn6zztxRY0NFvC%2F5EMUoEO4LBguGMAbRZ&X-Amz-Signature=52eac1f6db87c19cb75a322d62eca536d4452edb724e5e3d4efcac99fbe3eaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
