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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKJLDKK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBxysruYZsaafc1RohDJrqMtdEZlBAFfWyPyYZEoZy3PAiBkqaFiSq411EMp%2BF3LKDiGYNFA5eJw%2FE%2F5ElLJG%2BlmqiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5WIdmUrOxuq2RPRKtwDRGp34sKe0%2BsAHZ4xdBUR9tkq4gZTUXS3X1wv6d2eC3O69nQmGiN75JNy8tuBPvNFsUVBNicndQdJVNCCVcWwxDQaUN9cQPZPoNrJlL5o2LYGADwrbsBBXOWFPwbWskK7RxT1WoXKCGaoedhhPXtE0OGimRe4Oy2uMS7c1ynb2fLBLMbygQLsk5v8X0Xt7fC73uqVk36phnaJcc3sFuO%2BATAkB1V9HGk%2FQAhkzkylJsJZAwm4f2doxPqO3l7YFnX6A3mk1yuWEWfmNLfSV2%2FOwt6pkdHk8yZppQ2zY3wo2omexO5UmjU5Q1Q4YN5wT6n%2FMa8JyWDvUQrRS%2F5QhhaJQcAnmjEA0JGbgeK%2B9tjKxEAhw6LBpM%2Fcl3UvAcl3nbqOAzGW8QQYaLhQDR7sTg4KFKCLu%2FXCSYQzXV%2BZVGDsYOeu21b%2By7HgHO%2BrmMUJw2cg9JQ%2Bgdn4YFlfVeBB0cPonjoP%2Brkcw6vfiU5F0j9K%2FV0lHC%2BsMHPWedzacQ0eUw%2BQbV42wRY1Gd%2Fu0kBOKfC1E9Rp%2FFS6u4vLOliWoN4LEirvodidAtpjQenUBTGI%2BPUU3A%2BD%2FO9BORO%2F5%2F1swd5PVqlqT2dWcKymSEphivq43p78nQII3TfF3I83abwwm%2BvbwAY6pgGZvGO%2FaZ%2FHUYxrfjSJeg21X70jPfWWaY2aF2Fza4QYvR4arbra%2FzCn3C%2BfMpk1Ly4JdbQQ0PtyjcFe4KD7JLjLZXU5Fi3I%2BsZFWVjQ%2BNsKymzM%2FsxRHnJX6dZawvh7pO6fPvTroQ3HHVjO6YSKfy4COThxSqLEelxR5DDTX5oO5Z4xN8cLEi3YpUE3giUKznPpbjrnoZkaI%2BtC8ubPfChrr5UUwNOC&X-Amz-Signature=3b2f0e6d8db1b911b3933efa603b90d8119662ae571069589c9e37366589e2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKJLDKK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBxysruYZsaafc1RohDJrqMtdEZlBAFfWyPyYZEoZy3PAiBkqaFiSq411EMp%2BF3LKDiGYNFA5eJw%2FE%2F5ElLJG%2BlmqiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5WIdmUrOxuq2RPRKtwDRGp34sKe0%2BsAHZ4xdBUR9tkq4gZTUXS3X1wv6d2eC3O69nQmGiN75JNy8tuBPvNFsUVBNicndQdJVNCCVcWwxDQaUN9cQPZPoNrJlL5o2LYGADwrbsBBXOWFPwbWskK7RxT1WoXKCGaoedhhPXtE0OGimRe4Oy2uMS7c1ynb2fLBLMbygQLsk5v8X0Xt7fC73uqVk36phnaJcc3sFuO%2BATAkB1V9HGk%2FQAhkzkylJsJZAwm4f2doxPqO3l7YFnX6A3mk1yuWEWfmNLfSV2%2FOwt6pkdHk8yZppQ2zY3wo2omexO5UmjU5Q1Q4YN5wT6n%2FMa8JyWDvUQrRS%2F5QhhaJQcAnmjEA0JGbgeK%2B9tjKxEAhw6LBpM%2Fcl3UvAcl3nbqOAzGW8QQYaLhQDR7sTg4KFKCLu%2FXCSYQzXV%2BZVGDsYOeu21b%2By7HgHO%2BrmMUJw2cg9JQ%2Bgdn4YFlfVeBB0cPonjoP%2Brkcw6vfiU5F0j9K%2FV0lHC%2BsMHPWedzacQ0eUw%2BQbV42wRY1Gd%2Fu0kBOKfC1E9Rp%2FFS6u4vLOliWoN4LEirvodidAtpjQenUBTGI%2BPUU3A%2BD%2FO9BORO%2F5%2F1swd5PVqlqT2dWcKymSEphivq43p78nQII3TfF3I83abwwm%2BvbwAY6pgGZvGO%2FaZ%2FHUYxrfjSJeg21X70jPfWWaY2aF2Fza4QYvR4arbra%2FzCn3C%2BfMpk1Ly4JdbQQ0PtyjcFe4KD7JLjLZXU5Fi3I%2BsZFWVjQ%2BNsKymzM%2FsxRHnJX6dZawvh7pO6fPvTroQ3HHVjO6YSKfy4COThxSqLEelxR5DDTX5oO5Z4xN8cLEi3YpUE3giUKznPpbjrnoZkaI%2BtC8ubPfChrr5UUwNOC&X-Amz-Signature=b82812d84313acda6d264d19abea7d952d755d21b81fad9e5a4525947964e13d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
