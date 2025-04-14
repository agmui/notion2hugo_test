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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DR2FEVV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLLP1%2F3ezSG7TDjVA8QqV2r0FM1mXpGHKR%2BCngqn9QVgIhALJ79ZqQ50jvmK4XoF%2BzLDha7fKHB1mgG8OwNQsqmwgOKv8DCBAQABoMNjM3NDIzMTgzODA1IgyQ4TrE5u6PK05oCMYq3AOwHx80oq%2FrQELpUFg6GPiLWHm56hyPfe%2FS9i3fUKWLSojsznGtY4nnt%2FMnaamWpv2aZt84zmWuaDBAUwN%2Bw976DjQdH%2FN5%2BKWvkZmKH7k%2FOKelyFexR39BvyI5kfsiMQi4wehEb9Wj0PKuim6WRoe0dq7p9hVhCF9FMsT01T2f0TUXix9uXYG462H6id4quwZznMxOvPcr2qC%2BaRETu9znnbRoxRv0vIemfmBDNAO20%2FMemY8JqhTIuCE%2BsO1XUR0vldHF0s5M9cpyKUUOQ07VKXRsByH%2BzMSVYny1BsuN70zPGtXaUYmWjtlQyw%2FAxGS7omnM4SKflj0fRrE1goDEwr1ouQe9INSM7ItkIgOo9CBIMAeL3XAME5cc%2Ba3pBTusBZu27mkixq%2FQtBXqVffy%2B%2BlMCDJhC1sO9Ipl9AmYg9na9PgEvbcXaeD3AHQ4AtNQOVSVOh2vKGghKRPj2j%2BzhNjFUQD%2BAX%2BgcZZS7uKOtdZct2LFb2mIu9Cezk1ycqgK4X6RNXi9dGombKfYlL13BVPZ%2BHJyYiQUOeKjT%2BWaAuJo2hixLWXNuzo%2FGLWexG6nosqnx91aXNJKUdqKUcna86cisqaWySB%2B1YNNTN6WvG1fmBZnw3ndyEcq1DDF4%2FK%2FBjqkASpYXVLqZ57%2FP8cY4t%2FQhY651wZvdXtWIPidUAWSZhoNQU8cPIixD4phdchz9D8YDkNRiug8hLhzvBHe2oS6fOuacXz4uq8FD0ws3f%2BtUsw0Fe2dSfUTHrSaVVaBbjK71k43xO%2FdqtXUuxBNZqZZtfKJT2vbfM1g3ObV7lxfn8ySqdAHRxvJnLCnQjd6JY5N4iMx%2F20qSHJX1lua5E2fxFCrT7nr&X-Amz-Signature=2b12a26fee6224459ea77549cfdc4ea37f36f61e25bb5bf9a8539d465f190aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DR2FEVV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLLP1%2F3ezSG7TDjVA8QqV2r0FM1mXpGHKR%2BCngqn9QVgIhALJ79ZqQ50jvmK4XoF%2BzLDha7fKHB1mgG8OwNQsqmwgOKv8DCBAQABoMNjM3NDIzMTgzODA1IgyQ4TrE5u6PK05oCMYq3AOwHx80oq%2FrQELpUFg6GPiLWHm56hyPfe%2FS9i3fUKWLSojsznGtY4nnt%2FMnaamWpv2aZt84zmWuaDBAUwN%2Bw976DjQdH%2FN5%2BKWvkZmKH7k%2FOKelyFexR39BvyI5kfsiMQi4wehEb9Wj0PKuim6WRoe0dq7p9hVhCF9FMsT01T2f0TUXix9uXYG462H6id4quwZznMxOvPcr2qC%2BaRETu9znnbRoxRv0vIemfmBDNAO20%2FMemY8JqhTIuCE%2BsO1XUR0vldHF0s5M9cpyKUUOQ07VKXRsByH%2BzMSVYny1BsuN70zPGtXaUYmWjtlQyw%2FAxGS7omnM4SKflj0fRrE1goDEwr1ouQe9INSM7ItkIgOo9CBIMAeL3XAME5cc%2Ba3pBTusBZu27mkixq%2FQtBXqVffy%2B%2BlMCDJhC1sO9Ipl9AmYg9na9PgEvbcXaeD3AHQ4AtNQOVSVOh2vKGghKRPj2j%2BzhNjFUQD%2BAX%2BgcZZS7uKOtdZct2LFb2mIu9Cezk1ycqgK4X6RNXi9dGombKfYlL13BVPZ%2BHJyYiQUOeKjT%2BWaAuJo2hixLWXNuzo%2FGLWexG6nosqnx91aXNJKUdqKUcna86cisqaWySB%2B1YNNTN6WvG1fmBZnw3ndyEcq1DDF4%2FK%2FBjqkASpYXVLqZ57%2FP8cY4t%2FQhY651wZvdXtWIPidUAWSZhoNQU8cPIixD4phdchz9D8YDkNRiug8hLhzvBHe2oS6fOuacXz4uq8FD0ws3f%2BtUsw0Fe2dSfUTHrSaVVaBbjK71k43xO%2FdqtXUuxBNZqZZtfKJT2vbfM1g3ObV7lxfn8ySqdAHRxvJnLCnQjd6JY5N4iMx%2F20qSHJX1lua5E2fxFCrT7nr&X-Amz-Signature=f71858f44ff02dc29bbc41f2dc3dc73265d1810d264819baf34464300250bd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
