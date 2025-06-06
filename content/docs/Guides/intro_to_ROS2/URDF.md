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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWD4OT5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhp3BPHbIJ%2BEmqWtgRBpA4smZZvSIXFO9rrx8iphGJHAiBlntbhBYlTQBvi1w%2Fuwc5KNrSL87z5ppC0QJBvZJ50Fir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMBz6GADMoI3yypHAZKtwDmh3HPihnEZEgJAEe2hW56M%2BylmRkIYn7nozCZMCAn2nCMv%2B752GtVlPshIuT3dZVrxpsnNWZZg1EgP8kirii3MYpLh2o3H%2F4iCQFAPC0EsaMj8Vy%2FTR3v3j8oZ3STwJwOXuvXGe4iEMph3CJZxS5NPmINSQuKnI3IwIrpfuDBdptbTVTwIwJ1rmITG2GN9AimfWXIGj%2BxOBshOsPs1LR7ckeVx328lcW6oPrf%2B7BmkcndE0hDZC1GweMVI3AFieBW6lz8RD1ml%2BYC9%2Fc4sEv%2B5YNfTEFn2%2FCtfng4EgQYE1KB2q6okxCNOLWVg7vb91Q7kUU5Clz9407QywSXqNGFajZTsV3tclXL1p8wSgtJmQHqP4L0Tr6CQtQMRHpl1RulNbsEtYJDLj3WG7J2DIVeHSu%2F2RnBd2LznPaLoQuh4A43W3tbMkpp5nMSOZbvOe%2FGsk79xtjDfjgyf38XTSU8sjgj7Frff6DYYXJz87DweBUSUoABXNtR4zG7hSBwMM8fsp%2BpdvZBg1ylvJNA02PT2fpezOTRVoqmx6XUcy4uTS%2FnJs8u%2BVXHVOkIcHR9Ncc9l6gEi7iv2gpMPLbiMyZdDsRp0GDFhohaSrrTm0fcmaLnSylxB8l6%2BdkMA0wx6GMwgY6pgERuRbPugSVDoFhdwzWRWVtY9pcr5x%2BYxNg1AsMJZBYCGQEra7V85avNrGI00bZN0EaKuqo%2B%2B2cW7dN4WmoQndD9RyLzyDGGmH8JHdzqA2K6gU5ed5oqXNXodDo7%2FXA3xt5drihHonpDBD431zdqVTLp%2FE8rKt4cty2kcHWGtJYs7NwCZ3%2Bq1ezmkjmPKaYuqgvOFKeyZSwdu%2F593adcvekYdlCPP6S&X-Amz-Signature=3698f88c38e8cb9288c97107dd87e535670fc08050c87f9cffcf52e81baf3584&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWD4OT5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhp3BPHbIJ%2BEmqWtgRBpA4smZZvSIXFO9rrx8iphGJHAiBlntbhBYlTQBvi1w%2Fuwc5KNrSL87z5ppC0QJBvZJ50Fir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMBz6GADMoI3yypHAZKtwDmh3HPihnEZEgJAEe2hW56M%2BylmRkIYn7nozCZMCAn2nCMv%2B752GtVlPshIuT3dZVrxpsnNWZZg1EgP8kirii3MYpLh2o3H%2F4iCQFAPC0EsaMj8Vy%2FTR3v3j8oZ3STwJwOXuvXGe4iEMph3CJZxS5NPmINSQuKnI3IwIrpfuDBdptbTVTwIwJ1rmITG2GN9AimfWXIGj%2BxOBshOsPs1LR7ckeVx328lcW6oPrf%2B7BmkcndE0hDZC1GweMVI3AFieBW6lz8RD1ml%2BYC9%2Fc4sEv%2B5YNfTEFn2%2FCtfng4EgQYE1KB2q6okxCNOLWVg7vb91Q7kUU5Clz9407QywSXqNGFajZTsV3tclXL1p8wSgtJmQHqP4L0Tr6CQtQMRHpl1RulNbsEtYJDLj3WG7J2DIVeHSu%2F2RnBd2LznPaLoQuh4A43W3tbMkpp5nMSOZbvOe%2FGsk79xtjDfjgyf38XTSU8sjgj7Frff6DYYXJz87DweBUSUoABXNtR4zG7hSBwMM8fsp%2BpdvZBg1ylvJNA02PT2fpezOTRVoqmx6XUcy4uTS%2FnJs8u%2BVXHVOkIcHR9Ncc9l6gEi7iv2gpMPLbiMyZdDsRp0GDFhohaSrrTm0fcmaLnSylxB8l6%2BdkMA0wx6GMwgY6pgERuRbPugSVDoFhdwzWRWVtY9pcr5x%2BYxNg1AsMJZBYCGQEra7V85avNrGI00bZN0EaKuqo%2B%2B2cW7dN4WmoQndD9RyLzyDGGmH8JHdzqA2K6gU5ed5oqXNXodDo7%2FXA3xt5drihHonpDBD431zdqVTLp%2FE8rKt4cty2kcHWGtJYs7NwCZ3%2Bq1ezmkjmPKaYuqgvOFKeyZSwdu%2F593adcvekYdlCPP6S&X-Amz-Signature=17cd2ce327f32a37dc048d2a7bd51c35bc76d84efd57eec47dd52b0fd4544a88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
