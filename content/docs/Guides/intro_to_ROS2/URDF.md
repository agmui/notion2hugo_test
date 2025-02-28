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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWC3QDWN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCCrY48BThmuJ%2FHI1btQwnknv0xQi3OZ6iKfbhsHni9WgIhAJ7%2FHi0bk0X3vdgZ5Xfpjvd70fqzJwGDSb3E3iwMFgNNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxUpjarwbL7vPG%2FqIq3ANj2e9oMoW3XC6%2B9Cv7SAuWNt5dmcwYxfm0BMr344zbbVx7W6hCQXNx%2FCzkwqDa2hVnQ2dB29saaLjDx2MKqFii4Kk5kkYiiGO20U6g4byyzEzBSQd%2BYhR6liB%2BsvzphlW1OkNCtc3uzLk%2FRFN3fwhAiefF7Co5z6mPaLOMt8dPqUx2zqZ8w89VVepO%2FYylPTz6z8H9zLC2qSY%2B1MiK0C7oYcTJOywNhi3eucY2x%2FfjOljgLQ3l2WWGSQFhO5Ym2BWbebRKgT1Wv3NKqXzuwNGBgygtSSlRLfkpyUjwTHmGrO8FHXPivYo9VTt3QzWNewgADqH6hv5i1Au9qD97afWL6Ti4SsIuvoCq4csLLDqM7WWjHS0s8%2Fz2pBj8Jx9UM%2Flv2sMKd3JD4PXII1p7TjYbO5XHY%2BW8t0CauTlWnLaT26FEPSJ%2F517wtKq4YuUWJScXYRQHFsLhgksXJzBpq0QsHAXtm9jZNcecxM%2BJwvrP3cft7XClGkdVzzZjDP4pjvunaznHtc8GENN8NtS%2FbhSWGbBVEHyOAR1vRJbUGI6iLYb8zYUhy9lr2o0GZp%2F2wR%2BuifOjlhzgyj6ELsyyi9v5WjySWZOP1wjv3ECySNLs2DUOKpa0%2FwINQ0BPvjCOsYa%2BBjqkAf6OEAa%2FPy8G3IJvAOHfPRguH1QHOEoQBnPaxLcSgpjLs9N7Q6H%2BV5tq8cuPDAzp7ZssJBHf1D7Wu%2Ff82Is5gDg9YxV%2BXd2la%2Fivm%2BMvs5dVcGxW4YgNwSNBUbWqTriaBKZPVyGF02f2a4JMoMHfonDAJvbBF3BO1MYxVFefVsID3gjyil89sr0oYCSsYdvqqNd68VgON8WUFqtGmIBzNBcAuoac&X-Amz-Signature=93570a5fe8efb8e687c903574a3bec9333946c31192065df9f9f22a3bbbe3eea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWC3QDWN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCCrY48BThmuJ%2FHI1btQwnknv0xQi3OZ6iKfbhsHni9WgIhAJ7%2FHi0bk0X3vdgZ5Xfpjvd70fqzJwGDSb3E3iwMFgNNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxUpjarwbL7vPG%2FqIq3ANj2e9oMoW3XC6%2B9Cv7SAuWNt5dmcwYxfm0BMr344zbbVx7W6hCQXNx%2FCzkwqDa2hVnQ2dB29saaLjDx2MKqFii4Kk5kkYiiGO20U6g4byyzEzBSQd%2BYhR6liB%2BsvzphlW1OkNCtc3uzLk%2FRFN3fwhAiefF7Co5z6mPaLOMt8dPqUx2zqZ8w89VVepO%2FYylPTz6z8H9zLC2qSY%2B1MiK0C7oYcTJOywNhi3eucY2x%2FfjOljgLQ3l2WWGSQFhO5Ym2BWbebRKgT1Wv3NKqXzuwNGBgygtSSlRLfkpyUjwTHmGrO8FHXPivYo9VTt3QzWNewgADqH6hv5i1Au9qD97afWL6Ti4SsIuvoCq4csLLDqM7WWjHS0s8%2Fz2pBj8Jx9UM%2Flv2sMKd3JD4PXII1p7TjYbO5XHY%2BW8t0CauTlWnLaT26FEPSJ%2F517wtKq4YuUWJScXYRQHFsLhgksXJzBpq0QsHAXtm9jZNcecxM%2BJwvrP3cft7XClGkdVzzZjDP4pjvunaznHtc8GENN8NtS%2FbhSWGbBVEHyOAR1vRJbUGI6iLYb8zYUhy9lr2o0GZp%2F2wR%2BuifOjlhzgyj6ELsyyi9v5WjySWZOP1wjv3ECySNLs2DUOKpa0%2FwINQ0BPvjCOsYa%2BBjqkAf6OEAa%2FPy8G3IJvAOHfPRguH1QHOEoQBnPaxLcSgpjLs9N7Q6H%2BV5tq8cuPDAzp7ZssJBHf1D7Wu%2Ff82Is5gDg9YxV%2BXd2la%2Fivm%2BMvs5dVcGxW4YgNwSNBUbWqTriaBKZPVyGF02f2a4JMoMHfonDAJvbBF3BO1MYxVFefVsID3gjyil89sr0oYCSsYdvqqNd68VgON8WUFqtGmIBzNBcAuoac&X-Amz-Signature=6de5f7fc6a8b2f5d4750c65d43682785e313bb56e24d6c811e1f20d4cae71baa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
