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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JVUFL2B%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Fa8wU7lnVHRnhrryruW%2BthesUw%2BPAz%2FY3q40Nx79yGAiEAlw2ngDDZICC475nKEKDC4ysRRMV7IygeB3gVtUxaRPQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKNtVthyFjaMsCU2CrcAyenJroalw9w9Qr2ZboW57nsdrv%2BmiBRiDX5wdKZkNOAEPwl0zMijhV4Vc9fiuJBWEHZZ%2Fs8Sb1O0xYxh9QGns0fvqcmzEfI00dAW6tWaWKbRkHhCLioCg7r1033MW4ykgRmVW75NGrkjD7weRzCmy%2FtNp1A21l0LG7jBRx%2FD%2FYKOg4vm7XeRwfoOv%2Fx54EopnW54Ueab9oCBaP0SR2WDsOOxFKBDP4ZvNuHaivLhEjiVhGjnOI7HlavgYekH9wmVubw%2FGu0Ti6m5TFZAqepS4TPW597HJHSeVwU%2B7c%2BLPjLneIb6J8oaU%2B4xT3AFOa90T%2F5%2FInHzf3vsMUq1M%2FKXfRmTliMy9MEUvC6Knpp9REGpLG3%2FNU9Pv5ew37BslGpanK70N75sSB0k6keVv9LoWgfAAc6d3zTAb198cntbO%2F8oT0MAR%2FzKu9ek4nOd8fMpdPYXAOQGEr6Aw3tW3wifpfHD61OFpwLYbbiPCIUQQHxVjLnXmsTKiW3gf5YPso0OF84Of3N5MSXU3YsrrVkz5Z3Y8zoI3PhBi4iCBev8jreGMsy40ik%2BwvquUY6KMIXtr9FBrKunvcuqREysEwrvAK0DMn4GxZrCMWhL7cFeRE7rBKWHSw3OdM6zdPFMJeh%2B8AGOqUBgG95GiBLut1ZEdwcUed9vTv%2FQeWKGwpcgPur8cMEBatvs5gS05BCe%2BqcUbHYGLoimmotY0pBucergr%2B9%2BoWpZv%2FX9XMEbSY0Ffz6NJylOOA0aOFgD%2F2nkB9IPsvjuFWR6%2FUp3mKLwIyU1WqlV061YWzuCIdKfrFgQkqEQiJu%2F6szXOtTNBnaFpf4la38t1SX%2BAPzxt%2FOLNnRHTojFmctEmDTFy5g&X-Amz-Signature=5b133e0c1dad4d45dc9f5cacb09ac566f4f0bf4ae0ff5b9caa9d60a791b48e00&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JVUFL2B%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Fa8wU7lnVHRnhrryruW%2BthesUw%2BPAz%2FY3q40Nx79yGAiEAlw2ngDDZICC475nKEKDC4ysRRMV7IygeB3gVtUxaRPQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKNtVthyFjaMsCU2CrcAyenJroalw9w9Qr2ZboW57nsdrv%2BmiBRiDX5wdKZkNOAEPwl0zMijhV4Vc9fiuJBWEHZZ%2Fs8Sb1O0xYxh9QGns0fvqcmzEfI00dAW6tWaWKbRkHhCLioCg7r1033MW4ykgRmVW75NGrkjD7weRzCmy%2FtNp1A21l0LG7jBRx%2FD%2FYKOg4vm7XeRwfoOv%2Fx54EopnW54Ueab9oCBaP0SR2WDsOOxFKBDP4ZvNuHaivLhEjiVhGjnOI7HlavgYekH9wmVubw%2FGu0Ti6m5TFZAqepS4TPW597HJHSeVwU%2B7c%2BLPjLneIb6J8oaU%2B4xT3AFOa90T%2F5%2FInHzf3vsMUq1M%2FKXfRmTliMy9MEUvC6Knpp9REGpLG3%2FNU9Pv5ew37BslGpanK70N75sSB0k6keVv9LoWgfAAc6d3zTAb198cntbO%2F8oT0MAR%2FzKu9ek4nOd8fMpdPYXAOQGEr6Aw3tW3wifpfHD61OFpwLYbbiPCIUQQHxVjLnXmsTKiW3gf5YPso0OF84Of3N5MSXU3YsrrVkz5Z3Y8zoI3PhBi4iCBev8jreGMsy40ik%2BwvquUY6KMIXtr9FBrKunvcuqREysEwrvAK0DMn4GxZrCMWhL7cFeRE7rBKWHSw3OdM6zdPFMJeh%2B8AGOqUBgG95GiBLut1ZEdwcUed9vTv%2FQeWKGwpcgPur8cMEBatvs5gS05BCe%2BqcUbHYGLoimmotY0pBucergr%2B9%2BoWpZv%2FX9XMEbSY0Ffz6NJylOOA0aOFgD%2F2nkB9IPsvjuFWR6%2FUp3mKLwIyU1WqlV061YWzuCIdKfrFgQkqEQiJu%2F6szXOtTNBnaFpf4la38t1SX%2BAPzxt%2FOLNnRHTojFmctEmDTFy5g&X-Amz-Signature=c6b7eeda2ee408831e1c83b63e5a3e679a5bef9d06c84407c62b7f4900fc7b44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
