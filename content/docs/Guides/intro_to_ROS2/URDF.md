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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFNLJ4C%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0eB0nSZNuBTOmFkK4CiWYileUumAXBKo1%2Fgw0J15hsCIQDJj4ocKELuS8FoP4GQdyLmk8cPV1EQrltMcXPsM%2FprUCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqLqFPhp7gPH7TYzKtwDs2DjPEhMlD%2FW8dVzhgk9v8J4OM90rft0MkF%2FhjOqvIn0VcFBsxRrGfNsZ3VrcLjkrbTkd2EZ50wEWWnEoemY4fMYLtuSAkizzNHdMclSMv0%2FXd0HvM1ih6Ubc%2BP9ZxsITK%2FnBWoZRgeZmKXMYB4sVvdQiCd8hi9Gd9roji3zV0H19wGv7DIavYnIG7NmKBroBPCexuVVrPUJdFqCFPPMpYyQzxn0b1Kymb3z7fbKxv1HcbUhJ%2B3g%2B1w9Zolveaig9eO4lEpGkPaETJNu2BYY6uk%2FlMtGkS%2BFHzGQung0JZi7%2FtznBT04qgx1k5ik5iFd8VRsVErOjyVkgErVDfN6B%2B9%2BGw6CgNX1oyJDEyX8Gd0p0zpWyYglLI5haJ%2BcjR6M34%2FuXOYac04rwi0gycxsYBljYYVlObQipcH6KGuqKcnxG2839dTnoupqV8YZqjATS3nZ4JwDmub251ciewB1dGovtIfYDFLTfWEfWUPJqmO1A8GQLKLLYY8Yu%2BChvQ87Qx%2FHX9oSbcMqxy9jNaD7Gyem9IJ9qfUHn%2FNFW5ycQVqcJRsea4m9cAnmAKWItG7N8%2F323V9%2BneAkLN034OiGMgA4WjAb4vrAxA%2F%2BuMkgCUYKHAYmzBpWXQuROrAw8JepvQY6pgFicgLuqdoQy91UheMMwBIq6oyr0ceZ5HEXyMg%2Bbe0GhG4nHNnhXJ%2F96pi%2FpSANqOIsEwNDm1B%2F3aULAApLVeq84mAFdePJ6bbkPs6pi%2BHpjEfLceNhlB36%2BzVEkmurkfl4iWOX9UmV8%2FmSCqR1uEMy459K7YRo0Bg7giHb90sa%2B90f%2FAIVYmpzwN6%2FouYpbvRPB3sSR3zJoF33QU5fO5XS2MSGTJhW&X-Amz-Signature=ec6ce0f6e9e106845334645bac27a0ae54bb53700ac1599e99655a9720d1ad77&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFNLJ4C%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0eB0nSZNuBTOmFkK4CiWYileUumAXBKo1%2Fgw0J15hsCIQDJj4ocKELuS8FoP4GQdyLmk8cPV1EQrltMcXPsM%2FprUCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqLqFPhp7gPH7TYzKtwDs2DjPEhMlD%2FW8dVzhgk9v8J4OM90rft0MkF%2FhjOqvIn0VcFBsxRrGfNsZ3VrcLjkrbTkd2EZ50wEWWnEoemY4fMYLtuSAkizzNHdMclSMv0%2FXd0HvM1ih6Ubc%2BP9ZxsITK%2FnBWoZRgeZmKXMYB4sVvdQiCd8hi9Gd9roji3zV0H19wGv7DIavYnIG7NmKBroBPCexuVVrPUJdFqCFPPMpYyQzxn0b1Kymb3z7fbKxv1HcbUhJ%2B3g%2B1w9Zolveaig9eO4lEpGkPaETJNu2BYY6uk%2FlMtGkS%2BFHzGQung0JZi7%2FtznBT04qgx1k5ik5iFd8VRsVErOjyVkgErVDfN6B%2B9%2BGw6CgNX1oyJDEyX8Gd0p0zpWyYglLI5haJ%2BcjR6M34%2FuXOYac04rwi0gycxsYBljYYVlObQipcH6KGuqKcnxG2839dTnoupqV8YZqjATS3nZ4JwDmub251ciewB1dGovtIfYDFLTfWEfWUPJqmO1A8GQLKLLYY8Yu%2BChvQ87Qx%2FHX9oSbcMqxy9jNaD7Gyem9IJ9qfUHn%2FNFW5ycQVqcJRsea4m9cAnmAKWItG7N8%2F323V9%2BneAkLN034OiGMgA4WjAb4vrAxA%2F%2BuMkgCUYKHAYmzBpWXQuROrAw8JepvQY6pgFicgLuqdoQy91UheMMwBIq6oyr0ceZ5HEXyMg%2Bbe0GhG4nHNnhXJ%2F96pi%2FpSANqOIsEwNDm1B%2F3aULAApLVeq84mAFdePJ6bbkPs6pi%2BHpjEfLceNhlB36%2BzVEkmurkfl4iWOX9UmV8%2FmSCqR1uEMy459K7YRo0Bg7giHb90sa%2B90f%2FAIVYmpzwN6%2FouYpbvRPB3sSR3zJoF33QU5fO5XS2MSGTJhW&X-Amz-Signature=d075706bd276c7b09302d1d442edf2fa5f6e1111adcf6e53b7d98bfbdcc29012&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
