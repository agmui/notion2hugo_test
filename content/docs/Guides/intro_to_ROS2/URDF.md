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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KBU3UO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFC9z3R4zSOd3374EFyiGasaRtZ8Cj4M0ozlQfyx5HAWAiEAyiffAqfok%2BHEgQnxWqodT861vs7Y9JSAAJrtAWJh0Ycq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK91Ny%2FnGqA%2BpXNs%2FSrcA2NhRxUUH5ZGRJWd7GEcQk2mPew65iUMQ8xiCpilZ79l3XNAMtnjRbDYeQILUM8VLTcbY6jYWr8uJmI6yIXfz34%2BcXGU%2BJjI8lkaijBUxQV9NvtihAHFhABlOSRYgWXgZJdw2vySUZj5z%2BJD4sgM9YKJfJouQ9YhtkwuPqYAgvL0TXH%2FNiEiBxe2fJbXF5%2FiKuFpgvF2OOgZzJcFF7tt60P%2FVbCbdfdvlqTd%2B7DS4CTPYi9h1wPM34nPu0Cu5zlk5OAQD1yBMZTEuIRnTFfM%2B%2B%2F%2Fc9iFshq06G7t5OyjxK162RskioKLmdeUs0Y7dTQ%2FdveKKbbgyMjaQLmCkDJNm810Pnr1PuczNTGy4LZPckI4Xo1gy3dEy6rc%2FXM2k99WG1Ut2ptyn3%2B9yjCN3yo14M%2Frf1ej%2Boi8vOV3N%2Bm%2FuMGdv%2BONjJnN0Jat9UGDvtdFfhxLSiDZ7rMyx0p0VmNhK%2BG1PzhQNiWYSduprLulM5cSiLHX%2BBoPsv2As9sHpCMM%2F5Q5I7%2BRdPaMjnH31kvfNmgRdcPjcDs08mzqI15iatSNXmpYvB0FVRB3p%2FkXg2rLAXi6retf70PTjScoUsmIChaglB%2B6EGHq%2FPdUEwqek6JmmOyiHU9WislUyj%2FaMLeSh70GOqUBk0hydv0fCrvTabSsNfwnhJAXErTm%2BYk96m%2FDPOPT64o4wMLUYEO5GspkX%2F0sJJwxS5WOn%2Fy80wbyj9%2Fr2Q6arMrDOGuppT2Kw0Zg9QUCz0NWapNld56csGAB7ZWJi3OPjC5T%2FkvnvSyLvopaWJIT5jNt%2FXiAfn%2BvLIbgga2pH7lPDwxsYqDwORXQABhyOhbJOR%2F3SJl2vrD9Kspp3hRHmPdYJEQ8&X-Amz-Signature=b054945457b5035de3e4f0a7a2dd1fb33198592b697e45166febbc682d10ad2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KBU3UO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFC9z3R4zSOd3374EFyiGasaRtZ8Cj4M0ozlQfyx5HAWAiEAyiffAqfok%2BHEgQnxWqodT861vs7Y9JSAAJrtAWJh0Ycq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK91Ny%2FnGqA%2BpXNs%2FSrcA2NhRxUUH5ZGRJWd7GEcQk2mPew65iUMQ8xiCpilZ79l3XNAMtnjRbDYeQILUM8VLTcbY6jYWr8uJmI6yIXfz34%2BcXGU%2BJjI8lkaijBUxQV9NvtihAHFhABlOSRYgWXgZJdw2vySUZj5z%2BJD4sgM9YKJfJouQ9YhtkwuPqYAgvL0TXH%2FNiEiBxe2fJbXF5%2FiKuFpgvF2OOgZzJcFF7tt60P%2FVbCbdfdvlqTd%2B7DS4CTPYi9h1wPM34nPu0Cu5zlk5OAQD1yBMZTEuIRnTFfM%2B%2B%2F%2Fc9iFshq06G7t5OyjxK162RskioKLmdeUs0Y7dTQ%2FdveKKbbgyMjaQLmCkDJNm810Pnr1PuczNTGy4LZPckI4Xo1gy3dEy6rc%2FXM2k99WG1Ut2ptyn3%2B9yjCN3yo14M%2Frf1ej%2Boi8vOV3N%2Bm%2FuMGdv%2BONjJnN0Jat9UGDvtdFfhxLSiDZ7rMyx0p0VmNhK%2BG1PzhQNiWYSduprLulM5cSiLHX%2BBoPsv2As9sHpCMM%2F5Q5I7%2BRdPaMjnH31kvfNmgRdcPjcDs08mzqI15iatSNXmpYvB0FVRB3p%2FkXg2rLAXi6retf70PTjScoUsmIChaglB%2B6EGHq%2FPdUEwqek6JmmOyiHU9WislUyj%2FaMLeSh70GOqUBk0hydv0fCrvTabSsNfwnhJAXErTm%2BYk96m%2FDPOPT64o4wMLUYEO5GspkX%2F0sJJwxS5WOn%2Fy80wbyj9%2Fr2Q6arMrDOGuppT2Kw0Zg9QUCz0NWapNld56csGAB7ZWJi3OPjC5T%2FkvnvSyLvopaWJIT5jNt%2FXiAfn%2BvLIbgga2pH7lPDwxsYqDwORXQABhyOhbJOR%2F3SJl2vrD9Kspp3hRHmPdYJEQ8&X-Amz-Signature=eb942a88dbec76056f90acddfccd07b182126afcd634ddd2de7d133a62dd55bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
