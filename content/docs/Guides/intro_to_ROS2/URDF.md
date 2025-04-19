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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SHFUWR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7b05b1qg5NseZbg%2BBedhPOAV1%2BiOZyrBioRFIZGnVTwIgSweUXqeU2J%2Fn0seehHSUFE2%2FyZmurQitAl3qckBTYs0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZFK6kgrG%2Fy3famWSrcA9JNl7IIyFTCVIhIa7%2F9L01M34bFio6XPh47QI5GgmUxJ1KH0O%2FeI0S5FbbB9AaywBZZBS9t21R%2B%2FjB%2F8%2By7wIdz3T%2FYSuD1iRoaUPNw713KQ6qlqTjqiGlGJqoEwFLmZ8vzNXnoYRUz8NYG3FNx2n1ZAW%2FKQVbJENdfo0Vzw3h476SSuD5LBuutFirXF67AzaXGDMUa0G%2FBucLf0INNS6gkjUTewFDMwhRpivoWg8GDhpxBgY2qX8TaOJQqUP%2FvRUXMqdy6ZpFEHWAmNcX9FIXgJAN9bxaBaUADFuA5ZBUZALPN3BCsFkHzqz8rmkH%2BykHYQYqjFswHY5SgmhsvoICyruhDXlOkEV04AeKHxDy%2FzjhEba8nJUoKcbMoXFaBfpqOe4CNxj0VNcqSms4aebdGr0JQo1wY0ap3qGmTHdzoxXcNKcaKOqf28TqYcx8s%2Bl2NnxQX7q%2FznFQrN1KCeWAg0kthMZ0Tq1UO6TA9TeftNhlUNRXU8RejbBT%2BbDHB%2FJ37SZba3Hyew%2F%2Fl5Pqbt7CsDcqHadXNODqFihVPHFL7i9%2F8W8l%2FMPhuyzbsAN%2Bk4LwB1UpjB9pQJmdcLq8XGX8urup9%2B5afrkwdjlM3VZZse1VaIl09Y%2FeMntNrMMGgj8AGOqUBLwnDp1YGDuKfHzW%2FiFRcU3cmLWgrI4s6Uh%2BbTH1Ap9uc%2FZi52XqfU%2BhO5oB0YVABRUKAwzhhSrXX1w1nEECfXNk36lHedq7ybDMqYTV59TFOwbjyHC5fggSyR274mYclf3og6JZpX634umZ6xVW08Kq%2BR6rDB18g9ZxZQCyiIPM%2BmVp9MhLZpa92afhk9j3V%2F%2FU%2Fpxs1dUeJWb1l%2FuYaWymr43L3&X-Amz-Signature=1cb05945adb98f28557657f69473f253bd9fccf91bbcab36a444359010ba30c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SHFUWR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7b05b1qg5NseZbg%2BBedhPOAV1%2BiOZyrBioRFIZGnVTwIgSweUXqeU2J%2Fn0seehHSUFE2%2FyZmurQitAl3qckBTYs0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZFK6kgrG%2Fy3famWSrcA9JNl7IIyFTCVIhIa7%2F9L01M34bFio6XPh47QI5GgmUxJ1KH0O%2FeI0S5FbbB9AaywBZZBS9t21R%2B%2FjB%2F8%2By7wIdz3T%2FYSuD1iRoaUPNw713KQ6qlqTjqiGlGJqoEwFLmZ8vzNXnoYRUz8NYG3FNx2n1ZAW%2FKQVbJENdfo0Vzw3h476SSuD5LBuutFirXF67AzaXGDMUa0G%2FBucLf0INNS6gkjUTewFDMwhRpivoWg8GDhpxBgY2qX8TaOJQqUP%2FvRUXMqdy6ZpFEHWAmNcX9FIXgJAN9bxaBaUADFuA5ZBUZALPN3BCsFkHzqz8rmkH%2BykHYQYqjFswHY5SgmhsvoICyruhDXlOkEV04AeKHxDy%2FzjhEba8nJUoKcbMoXFaBfpqOe4CNxj0VNcqSms4aebdGr0JQo1wY0ap3qGmTHdzoxXcNKcaKOqf28TqYcx8s%2Bl2NnxQX7q%2FznFQrN1KCeWAg0kthMZ0Tq1UO6TA9TeftNhlUNRXU8RejbBT%2BbDHB%2FJ37SZba3Hyew%2F%2Fl5Pqbt7CsDcqHadXNODqFihVPHFL7i9%2F8W8l%2FMPhuyzbsAN%2Bk4LwB1UpjB9pQJmdcLq8XGX8urup9%2B5afrkwdjlM3VZZse1VaIl09Y%2FeMntNrMMGgj8AGOqUBLwnDp1YGDuKfHzW%2FiFRcU3cmLWgrI4s6Uh%2BbTH1Ap9uc%2FZi52XqfU%2BhO5oB0YVABRUKAwzhhSrXX1w1nEECfXNk36lHedq7ybDMqYTV59TFOwbjyHC5fggSyR274mYclf3og6JZpX634umZ6xVW08Kq%2BR6rDB18g9ZxZQCyiIPM%2BmVp9MhLZpa92afhk9j3V%2F%2FU%2Fpxs1dUeJWb1l%2FuYaWymr43L3&X-Amz-Signature=72351d336d0b8f9c83e1993b0282cd13658f4e421389a0fd142a290968d79048&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
