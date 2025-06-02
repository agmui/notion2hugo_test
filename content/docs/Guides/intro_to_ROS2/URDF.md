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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4O7I5Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCM1HvKsOkmN6BKr3iAjTDrLv%2BZQxOsROgIi3x5OlghXQIhAOtdQJk%2B8Yh%2FHqstoLaviExDhhZ4CZW9TreCImkRBAzSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzuv0%2B3sPn5YvXxrT4q3AOTDYINiqNuFVJFHHXXB%2FnauVlvlskVq3jSEKNYQU6xh4zJ7gAdv5Ev9UY3%2Bk4nkYL%2BQyAGH0KAdLKH6xU2gquGWFQflXDOi1Dit86FfGsLpZ15Ckh4jX6Mclfj1kbt0%2F9fz3YL2DLtGyfl%2FB9SbywNALtrh9V%2BoLHDswzD72LM8UoazHQgU3BnVq4ABJC5cH5zmaS4w1TsG7SS5A%2FYYbBk%2BZpCqcUj3ARu0HOCsxaSof4D%2F5L2KGLnGg2%2FVy6osYcfj9dSSMoN7KCrdgX6JRRv690RLIQ7rCr4lBbGcKB2OO7nvyg%2FXUON2OnBTzPBLxiUVDDkrhBA9pP8weh1nlwFe83TXyOkbQYcilv5wxBq%2F3TS%2F1FdX4iYthgfHDoHMGRrYslJGhUPFDcAk1XKkmURGMBP%2BJMt3eCQSak02kRdA6fVsBCD5iWLN7TMPmbY89Fg%2BCYTyobJgeOqIg4hSm4gu1JFg%2Fq8wAaC5CqqP0DdIX5VmNQ283fAc3%2Fikqw3pl2%2F8zXjtD4FwzDMgEpm14DI%2B5E7brs0u8aTMc7ZG6Y3o68dkU9p0O2mwcB%2BJeId1FPUZEt4dvuZ22NirO4JI21Ijw4syv4Vzsa2oCrEpdQcmKgrbooKSEuOV%2FCNYDD7wPjBBjqkATfeHers%2BiqPg6%2BDQQdq42%2F0RTB3GGHEZNwOMU36WT88ROoxXw7Da5OzRo3491ap9pJpaMcZIbeQmKq2slCRAFjjW4ePz%2BgYSiWiTAqcgzbz95CQlg7hdbZGjWzTd0%2FQajAAOxk3THnad20nntZwhOkUPEnzU2H5kcPTdrnrUcRXkTLHhon4HgdHUcxkvo1F0KyU31fXvxxBEaIunQGmZSLTUtBJ&X-Amz-Signature=09b770e1b52ca9b32f9fb601829214631dff5c090e72a4e546605fca2b8db6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4O7I5Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCM1HvKsOkmN6BKr3iAjTDrLv%2BZQxOsROgIi3x5OlghXQIhAOtdQJk%2B8Yh%2FHqstoLaviExDhhZ4CZW9TreCImkRBAzSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzuv0%2B3sPn5YvXxrT4q3AOTDYINiqNuFVJFHHXXB%2FnauVlvlskVq3jSEKNYQU6xh4zJ7gAdv5Ev9UY3%2Bk4nkYL%2BQyAGH0KAdLKH6xU2gquGWFQflXDOi1Dit86FfGsLpZ15Ckh4jX6Mclfj1kbt0%2F9fz3YL2DLtGyfl%2FB9SbywNALtrh9V%2BoLHDswzD72LM8UoazHQgU3BnVq4ABJC5cH5zmaS4w1TsG7SS5A%2FYYbBk%2BZpCqcUj3ARu0HOCsxaSof4D%2F5L2KGLnGg2%2FVy6osYcfj9dSSMoN7KCrdgX6JRRv690RLIQ7rCr4lBbGcKB2OO7nvyg%2FXUON2OnBTzPBLxiUVDDkrhBA9pP8weh1nlwFe83TXyOkbQYcilv5wxBq%2F3TS%2F1FdX4iYthgfHDoHMGRrYslJGhUPFDcAk1XKkmURGMBP%2BJMt3eCQSak02kRdA6fVsBCD5iWLN7TMPmbY89Fg%2BCYTyobJgeOqIg4hSm4gu1JFg%2Fq8wAaC5CqqP0DdIX5VmNQ283fAc3%2Fikqw3pl2%2F8zXjtD4FwzDMgEpm14DI%2B5E7brs0u8aTMc7ZG6Y3o68dkU9p0O2mwcB%2BJeId1FPUZEt4dvuZ22NirO4JI21Ijw4syv4Vzsa2oCrEpdQcmKgrbooKSEuOV%2FCNYDD7wPjBBjqkATfeHers%2BiqPg6%2BDQQdq42%2F0RTB3GGHEZNwOMU36WT88ROoxXw7Da5OzRo3491ap9pJpaMcZIbeQmKq2slCRAFjjW4ePz%2BgYSiWiTAqcgzbz95CQlg7hdbZGjWzTd0%2FQajAAOxk3THnad20nntZwhOkUPEnzU2H5kcPTdrnrUcRXkTLHhon4HgdHUcxkvo1F0KyU31fXvxxBEaIunQGmZSLTUtBJ&X-Amz-Signature=dfdf8a09110d0970fdf1dd5d904ed8d7967c51e03ad5c16017cfb7f2e94b6260&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
