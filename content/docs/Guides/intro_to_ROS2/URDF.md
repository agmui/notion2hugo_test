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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRMHTEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kRyWrwURLnVZSQdNFkiC7iJUoG0fGv5ul9xSs%2Fju1QIhALm%2BxZVYuW8GBD8IuzDu%2Basu3%2BIrBTnvlq%2FCYj3znDh1KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8xiIiH1ni766zi%2Fwq3AMWm7aSBc0Y5tFCa0VunodQY65TYr6I2jIjIHg3faPpCSAewCJP57kPlXCFCBbQxOR%2BB4SIFmorE02nImGdW5o4XvIEIrKr5W9ENMZkQZ%2BokRU0SbR%2BJyTCPCHl6Ztec9UsF5%2BoL7Up3jR8prvm%2BvhVNG16DJa%2B6PhxXUgdB2HUZ%2F4d8RV%2BwWffL6mbg42YEf2vExxFYiKNHrbI%2BJ6gUL6YC5JWpvFkb3FUmdNnzr8hkAlLv5EGrTuXrbZEc6yZQlmq9WkgTCXRbjQd0QBgrBHgqamjLLgyLlJIVXoynceTBMINT%2F7W0eMJxFt%2B2WVocZLnF%2BvzkaMZPmgByPzs8B%2FNVQxQDatAqa6uLi%2F62Hwc0DyCEs4r1aw4g0FpEokDjJmpep%2F6ZcJ8cA%2FbJKRx1Ca1mbbItEl%2BsmJ0Hj13W5rCZQxnxYolj1soXmuNGUYFvGLBQZ7j6Kds%2F8%2Fg%2FDzvvZ8i6LmhazDMzzN0bjTqJ%2BVxKaMVRwKoYdxKBA8h8FSXiSi%2BmeX5Qj3VdsCrX1v8eoVXy5Qw1pJpC71or%2FcgUtA4xt3kf48quuz29IMFsah6mFGuHFW2ZsmEMAkKvKB44t%2FyRCaT3X33%2Ff1TmNbzNlc3LvYvMwCCchT8m0KqlDD1%2Beq9BjqkAW4NSAZf7ZC%2Fuhle1wtUCyGSgEgBKZ2qIvANr8rV%2BhGcOPuZHjn0J8nI5UeFscPER%2BN3UyF3SceLnw2nZ%2FOWG4C1BxBif2TmvWRhku2OU6L3NQT0NQ3wEHJdKcG4OfkkgvRUnPf3jk%2FSathXwYB2LefLK2bC0DbaV5dyXMeLuhFQooA%2ByOG3MrNqgSjQKaJ4%2FJiMw35IPQqm%2ByxX9Y%2F9wpTPEIpJ&X-Amz-Signature=d7f546ce7d77c451c1abad80217e5f00f86d2b27500109c7c5114a613af2b276&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRMHTEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kRyWrwURLnVZSQdNFkiC7iJUoG0fGv5ul9xSs%2Fju1QIhALm%2BxZVYuW8GBD8IuzDu%2Basu3%2BIrBTnvlq%2FCYj3znDh1KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8xiIiH1ni766zi%2Fwq3AMWm7aSBc0Y5tFCa0VunodQY65TYr6I2jIjIHg3faPpCSAewCJP57kPlXCFCBbQxOR%2BB4SIFmorE02nImGdW5o4XvIEIrKr5W9ENMZkQZ%2BokRU0SbR%2BJyTCPCHl6Ztec9UsF5%2BoL7Up3jR8prvm%2BvhVNG16DJa%2B6PhxXUgdB2HUZ%2F4d8RV%2BwWffL6mbg42YEf2vExxFYiKNHrbI%2BJ6gUL6YC5JWpvFkb3FUmdNnzr8hkAlLv5EGrTuXrbZEc6yZQlmq9WkgTCXRbjQd0QBgrBHgqamjLLgyLlJIVXoynceTBMINT%2F7W0eMJxFt%2B2WVocZLnF%2BvzkaMZPmgByPzs8B%2FNVQxQDatAqa6uLi%2F62Hwc0DyCEs4r1aw4g0FpEokDjJmpep%2F6ZcJ8cA%2FbJKRx1Ca1mbbItEl%2BsmJ0Hj13W5rCZQxnxYolj1soXmuNGUYFvGLBQZ7j6Kds%2F8%2Fg%2FDzvvZ8i6LmhazDMzzN0bjTqJ%2BVxKaMVRwKoYdxKBA8h8FSXiSi%2BmeX5Qj3VdsCrX1v8eoVXy5Qw1pJpC71or%2FcgUtA4xt3kf48quuz29IMFsah6mFGuHFW2ZsmEMAkKvKB44t%2FyRCaT3X33%2Ff1TmNbzNlc3LvYvMwCCchT8m0KqlDD1%2Beq9BjqkAW4NSAZf7ZC%2Fuhle1wtUCyGSgEgBKZ2qIvANr8rV%2BhGcOPuZHjn0J8nI5UeFscPER%2BN3UyF3SceLnw2nZ%2FOWG4C1BxBif2TmvWRhku2OU6L3NQT0NQ3wEHJdKcG4OfkkgvRUnPf3jk%2FSathXwYB2LefLK2bC0DbaV5dyXMeLuhFQooA%2ByOG3MrNqgSjQKaJ4%2FJiMw35IPQqm%2ByxX9Y%2F9wpTPEIpJ&X-Amz-Signature=a0b9e2b9ab9c3b2e7292453b9e695ba7a0cc052cdafb7d6d50d80b3f8893c643&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
