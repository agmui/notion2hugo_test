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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMSWJL5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SU4k2tcZV175e2OI1EHHHeQIX1GZDbMNrN%2F6fFbTywIgbv8uicdg%2BB9TpnlXy0Yy3t9J0VVTOXLyfHyPEm0zqFwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLafoVbMF%2FomsgnPiCrcA703QCndxncQapBbPL%2BEkL3NmV7etjYO7okxn8e1qqc%2Ba0alZiV4PfyWg%2B68FuewcCJO7zU0ZFUz8kaX6c%2BBZwVBsTieX2mLgB6LJFBJtw3Ngt0lb6TOinp9QcL%2FpKvjZetkbb16lSjFwQKFaqDr%2BqNzQcmRBuJaB12IDKy1xO7Yif0paqDQCFZM632JzE69j9geUbV1CRQiF8iDVYkKfxxr7AcaXCw3x7SX1yPJlHN5ee8%2B1Zuyyu07WnrwiSeKSEIDfXf%2FZ1bSIUyp5Rbprf6Czsj1yr2el9z3CvVJv0j6TlA7YyVSjJ9z6FAl6m2OwO%2Fnv72ivT%2FKrf7TexfUaFz1%2FTWTPZN%2B0CV9%2B%2Fb1IvSfaiuDdIeHaACltZeO7FQmVuxOJdnCvZWPPEnfyH7gwqY4oo3EmJez%2BlLsRlm2doZK%2FDy%2FYGTvE2igEeRdCUiVgP889eOQ3cj8ykzQX2EU%2BXbuqILIeDXl1eIiHdN%2BMLRw7K9gG%2FLn70xFxwM1OMwKHueURwf4Yj0NgbqN0fdZ4C3%2BlqsQ31UJfRoG1A2hbM3QhdzQgzvRSe75bucwH2J8p3zxRnq7oelMnrZAl3jcPvuKfdzUM0PQA5N4Uvrv6udM8y0Vsbc0cHk8qQizMOODor4GOqUBhwDglhQwVhjQA7OkPjSxRQwVjACBWew1L4NZ1Hq0Z5qeAQWZhUzdC2TJq%2Fje3%2FHfdJ6uMifIRAtILHdIWt1IW725L9kvmsEc5jVLoutVBRkoY1Nv89cIjgJPVJ1%2FvryU28G5waNKjrzuTHm6O%2FsLPHkEaX8TmY7jF3OQt3XxmsvVKZQsA8UbamDvrS1%2FdOfAXJg6yaZ13ZLeBKTqUIp7wTpxmIIZ&X-Amz-Signature=96915cd92482f0364fb3a83d23df45e2ddbdf5e6942b7b4f15b58136baceeea6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMSWJL5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SU4k2tcZV175e2OI1EHHHeQIX1GZDbMNrN%2F6fFbTywIgbv8uicdg%2BB9TpnlXy0Yy3t9J0VVTOXLyfHyPEm0zqFwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLafoVbMF%2FomsgnPiCrcA703QCndxncQapBbPL%2BEkL3NmV7etjYO7okxn8e1qqc%2Ba0alZiV4PfyWg%2B68FuewcCJO7zU0ZFUz8kaX6c%2BBZwVBsTieX2mLgB6LJFBJtw3Ngt0lb6TOinp9QcL%2FpKvjZetkbb16lSjFwQKFaqDr%2BqNzQcmRBuJaB12IDKy1xO7Yif0paqDQCFZM632JzE69j9geUbV1CRQiF8iDVYkKfxxr7AcaXCw3x7SX1yPJlHN5ee8%2B1Zuyyu07WnrwiSeKSEIDfXf%2FZ1bSIUyp5Rbprf6Czsj1yr2el9z3CvVJv0j6TlA7YyVSjJ9z6FAl6m2OwO%2Fnv72ivT%2FKrf7TexfUaFz1%2FTWTPZN%2B0CV9%2B%2Fb1IvSfaiuDdIeHaACltZeO7FQmVuxOJdnCvZWPPEnfyH7gwqY4oo3EmJez%2BlLsRlm2doZK%2FDy%2FYGTvE2igEeRdCUiVgP889eOQ3cj8ykzQX2EU%2BXbuqILIeDXl1eIiHdN%2BMLRw7K9gG%2FLn70xFxwM1OMwKHueURwf4Yj0NgbqN0fdZ4C3%2BlqsQ31UJfRoG1A2hbM3QhdzQgzvRSe75bucwH2J8p3zxRnq7oelMnrZAl3jcPvuKfdzUM0PQA5N4Uvrv6udM8y0Vsbc0cHk8qQizMOODor4GOqUBhwDglhQwVhjQA7OkPjSxRQwVjACBWew1L4NZ1Hq0Z5qeAQWZhUzdC2TJq%2Fje3%2FHfdJ6uMifIRAtILHdIWt1IW725L9kvmsEc5jVLoutVBRkoY1Nv89cIjgJPVJ1%2FvryU28G5waNKjrzuTHm6O%2FsLPHkEaX8TmY7jF3OQt3XxmsvVKZQsA8UbamDvrS1%2FdOfAXJg6yaZ13ZLeBKTqUIp7wTpxmIIZ&X-Amz-Signature=19cb582811cf8b1b7ee8156f59b37cd60fa2c3c250f877a2c69892b816795b56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
