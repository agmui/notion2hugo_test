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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2M6AC3Y%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCID9tniJ1vxB7jvEastmrq9RSjTGGTJ8JpnicFjaZ92T3AiBlcZceLJHD65XeZstl24ekSHKwBeHddKDEINaQwv096CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck%2FJ9GO3YsdCHObqKtwDM0GLk7ED1R69Z%2FFUJydei6YwRw%2BEOc5d%2BJi2qW8D5OuZq7ARk5EfjTp5gt6ucm2dvu%2BIGgLtgO%2FqGYtxWQon0lVQt6n34pVsfK2vZjkSsG8tBAi20ypLXH0JqRBi9Vl%2B1eXpt69vMA2RIq7V3LNDPzg2R8uGi5cgaIwVxzpg%2FlAsdIsC84umKedO04jf%2BlCShIrr%2Fmi9qjIZuIsVv%2FADRYVY%2FFl%2BNdcmb94gKsCsnWf6V6fmn2GzCkruSR%2Fbz2S9OSrLXj5vCRabZPEokNM1SQLZpyaCQithGBnuDlIlwgZoqfnc5NIoY4SVqZ8UH7m87el2xBdC%2BrzuOLCBjt4TAzgDGKeZzNpFqbYuWQaSEQDkdMPC5r3nZvtQXHc1ySd1OMgF%2FpbwaZyMdnb99O6Bo80zu%2B%2BKR92uRb1soQ5MjY3cVWhFcqKxj%2F15xIeQPZub6OYnhhXDmsw7i3xE576mQGulCs22MUkD%2BmAjwWh35f5%2FAzf%2B%2BOSuVtNzpZSyvY0B4zxbc7WXBvwjeep1XmBH6wyHvCBJViWL86xQpcafD6yGszaP43KonAYLSffgT8Xp5c%2BRmBTRZZGIwZSFY9CwfoCvp4V%2BFnBOgB4YZn%2B83gpef4dmard%2FGyPLxegwreucxAY6pgFxR6elZz9OyRWawhoEmZqxyBbu19lAELjNkNVAYNy%2BDkZ%2FCM2fHEdRDJUrczhwdZXgXnew1Gj3WJVCIEkkR5gy0GWIa8GNwDgIdrpg5SHZCBkJHE6qMlMnjN58FsqM6MQhybekUT0UjhW20cDQwwJcOmCPS7%2FMc%2FmRhRK4XIr1JLwr8CspY6SRFSOjGbdEUZ3KSvJ5bkmH%2B5HyGsy1JaTIjhLAdiFS&X-Amz-Signature=ac93304915071957cf75b553019579b77cf6411492d0614ac429f7a0d2533539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2M6AC3Y%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCID9tniJ1vxB7jvEastmrq9RSjTGGTJ8JpnicFjaZ92T3AiBlcZceLJHD65XeZstl24ekSHKwBeHddKDEINaQwv096CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck%2FJ9GO3YsdCHObqKtwDM0GLk7ED1R69Z%2FFUJydei6YwRw%2BEOc5d%2BJi2qW8D5OuZq7ARk5EfjTp5gt6ucm2dvu%2BIGgLtgO%2FqGYtxWQon0lVQt6n34pVsfK2vZjkSsG8tBAi20ypLXH0JqRBi9Vl%2B1eXpt69vMA2RIq7V3LNDPzg2R8uGi5cgaIwVxzpg%2FlAsdIsC84umKedO04jf%2BlCShIrr%2Fmi9qjIZuIsVv%2FADRYVY%2FFl%2BNdcmb94gKsCsnWf6V6fmn2GzCkruSR%2Fbz2S9OSrLXj5vCRabZPEokNM1SQLZpyaCQithGBnuDlIlwgZoqfnc5NIoY4SVqZ8UH7m87el2xBdC%2BrzuOLCBjt4TAzgDGKeZzNpFqbYuWQaSEQDkdMPC5r3nZvtQXHc1ySd1OMgF%2FpbwaZyMdnb99O6Bo80zu%2B%2BKR92uRb1soQ5MjY3cVWhFcqKxj%2F15xIeQPZub6OYnhhXDmsw7i3xE576mQGulCs22MUkD%2BmAjwWh35f5%2FAzf%2B%2BOSuVtNzpZSyvY0B4zxbc7WXBvwjeep1XmBH6wyHvCBJViWL86xQpcafD6yGszaP43KonAYLSffgT8Xp5c%2BRmBTRZZGIwZSFY9CwfoCvp4V%2BFnBOgB4YZn%2B83gpef4dmard%2FGyPLxegwreucxAY6pgFxR6elZz9OyRWawhoEmZqxyBbu19lAELjNkNVAYNy%2BDkZ%2FCM2fHEdRDJUrczhwdZXgXnew1Gj3WJVCIEkkR5gy0GWIa8GNwDgIdrpg5SHZCBkJHE6qMlMnjN58FsqM6MQhybekUT0UjhW20cDQwwJcOmCPS7%2FMc%2FmRhRK4XIr1JLwr8CspY6SRFSOjGbdEUZ3KSvJ5bkmH%2B5HyGsy1JaTIjhLAdiFS&X-Amz-Signature=58cd77f7a23a271796d0c2665685e8ce6d0fd76544dc516b8ca5717e2096341c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
