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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U53TKO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbLUVxGKK2wO0hTg8kg062kebOzixxxQK4pGopUic%2FSQIhAOhfZqh8tp3eH273UYKqjhYJNM1e1%2BPHapQrGbD1RwhhKv8DCDcQABoMNjM3NDIzMTgzODA1Igya8ultGUY0SJgXYKgq3AP6duru27fRxKHqP40oH2AwmdMGrlRUSGUA%2B%2Bwxr%2Bj5%2BE5I9tAmapyP5s5vhzcsib2n8y%2F5FPelEm7OLABdBzsLyEAbA3uWg44NQ1gg4f83bXNd0jGcdRdFRoWjkitdN9wU1YnCxET4%2BHOZk1rSdP1vslwi%2B0%2FxTY%2FD6ATdnergCTYwmx%2B1W92WqIM6zwKNruP01wnvnycX7LxYWC6JjUoMAV7b0HXEKHbWHCnjh2eMhVU3gFrvXR5TQD%2BWsyy2kbylFJugBe7qgsGLM6lusmTgGyKUJ63PFbeQ0y0i7tKsdFuD0xDCSufrj%2FlAdNssEo3htW30mG3ZnI6ugASsoaX7Fe%2BJ2GBuVHoZfbtop6FfGmDG8PB0UBvLdberEx3CbCulqWUR3UgVMdsredtnczJG0hGYVNLW9Z6MPVC3Wp03HF2cYjXKL856bIzoLN6nAKk8e31X2VSVfB1%2BieHGOBOysVjzigYOfsYf70v%2FEFAZXQndegFtwnLpNe%2FP3O4fqm7Jg26p1LGdjWw%2BKyZpRKMf5M20MvwkkLOpXyF4Dup3AfVLvhs5rTrdycXAIHAiyaB3dJ3jShFr6wUUUqaGVp2G3ehwHcUnWEIqAeKPMNvKFzmVqp9t%2B%2B1M%2FH2N0zD9hrDABjqkAYraRBATsSe9PyCBnVDv3MFMBNN%2BmGaEwShBqkAyPW%2By7yrUtKo4ncAhoxOKXflh0anb7eG9MFOOsd0Q%2BhGDzspBehLqPrYMUrOJ%2BuNSXN8u7XIz0uwqFT7NbR1rW7hg7BWumKcJisIehqLiNcfKRIoLgifXdOoOTbBDdC%2ByRDv%2FXa6zgIS9VuCCcwwjHvVPllq5UoK0Sqat9EgkWHG4DrfrdSqD&X-Amz-Signature=de89d9aab7576f9cfd127cbf4606d7e2a119c86a69bbea17a11b06846c979580&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U53TKO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbLUVxGKK2wO0hTg8kg062kebOzixxxQK4pGopUic%2FSQIhAOhfZqh8tp3eH273UYKqjhYJNM1e1%2BPHapQrGbD1RwhhKv8DCDcQABoMNjM3NDIzMTgzODA1Igya8ultGUY0SJgXYKgq3AP6duru27fRxKHqP40oH2AwmdMGrlRUSGUA%2B%2Bwxr%2Bj5%2BE5I9tAmapyP5s5vhzcsib2n8y%2F5FPelEm7OLABdBzsLyEAbA3uWg44NQ1gg4f83bXNd0jGcdRdFRoWjkitdN9wU1YnCxET4%2BHOZk1rSdP1vslwi%2B0%2FxTY%2FD6ATdnergCTYwmx%2B1W92WqIM6zwKNruP01wnvnycX7LxYWC6JjUoMAV7b0HXEKHbWHCnjh2eMhVU3gFrvXR5TQD%2BWsyy2kbylFJugBe7qgsGLM6lusmTgGyKUJ63PFbeQ0y0i7tKsdFuD0xDCSufrj%2FlAdNssEo3htW30mG3ZnI6ugASsoaX7Fe%2BJ2GBuVHoZfbtop6FfGmDG8PB0UBvLdberEx3CbCulqWUR3UgVMdsredtnczJG0hGYVNLW9Z6MPVC3Wp03HF2cYjXKL856bIzoLN6nAKk8e31X2VSVfB1%2BieHGOBOysVjzigYOfsYf70v%2FEFAZXQndegFtwnLpNe%2FP3O4fqm7Jg26p1LGdjWw%2BKyZpRKMf5M20MvwkkLOpXyF4Dup3AfVLvhs5rTrdycXAIHAiyaB3dJ3jShFr6wUUUqaGVp2G3ehwHcUnWEIqAeKPMNvKFzmVqp9t%2B%2B1M%2FH2N0zD9hrDABjqkAYraRBATsSe9PyCBnVDv3MFMBNN%2BmGaEwShBqkAyPW%2By7yrUtKo4ncAhoxOKXflh0anb7eG9MFOOsd0Q%2BhGDzspBehLqPrYMUrOJ%2BuNSXN8u7XIz0uwqFT7NbR1rW7hg7BWumKcJisIehqLiNcfKRIoLgifXdOoOTbBDdC%2ByRDv%2FXa6zgIS9VuCCcwwjHvVPllq5UoK0Sqat9EgkWHG4DrfrdSqD&X-Amz-Signature=68b055784fb0110f0f1c1bd1d955ed313b91b6bf3632996e8ba2ebf8bfc1d32e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
