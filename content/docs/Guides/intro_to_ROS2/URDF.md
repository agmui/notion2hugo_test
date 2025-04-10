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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46NFI7B%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDmSR%2B%2F2GXbDv8g94LPs1sJnn7QdgI0W91HSOu6jtoyoAIgUp9tqY2XHj7n%2F0SupV%2B9bC4t%2F6RDpt7wJt%2BSNHN%2FzM4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhL3cvGPbbWPhU8SCrcA4nHewNgabupwfmNxfgnbWFoyPKzbZSWEZn12Aq%2FXl25ZV%2BuPlLTj6uY51P4BdjmZItekCy%2B4XAE6nvJxkMScMgv6ajZnlMnrBetJXV4MhVVGnBRs22ct1yyWqOMeyftP33rzU5xPGiCKEQN3lWUuuM7Xt4IuXAHWr%2FrS%2BBf7O1UXYMRqIEzemqIaTUkBRkMcuKYUeGJMeJPKqrpCzY38WvtO43J9eIJXUc025wNygzT2%2Buek6cXDdfeMfywKtjcrV0qjBCKz4frQQrVCgAQrgPM2hBghcnHZJ1TBoRbOBzwPhAPNDRvSrshT6Sujzu15s9OSxQsJlyYOd%2F0Jfk4bSMrsGpT9aLwwM2GP0EfUCA9EQfU72HFTptfNY%2BbLb%2FI6DanPxC2lLLD%2FsU7mNUgPCAEZBspdLvnApoRtOoHzkMCs7LFqSw8glWBD2YBxqn9pU5eniXPWyl9gFMV%2Fwmx6rC2aWP%2ByfVvlf%2Fdeyzszd6EHwLK%2FJbjaq0fWs0QCJVI8mrfiI4Ynx5dsErcrz8wIU3nxQzONoyroQ%2BirfAM%2BU101OpbW3Q5BHCLCy6i0FQ7XSafK2Ih1iNn0U927BwiQvdDTA1xwbnmvWUGpmCPRtS8%2FM3bH0zq%2FIuf0RxwMNKf378GOqUBQnfwTnXyFk414ikIfa2e1H21UPbv6B%2FplT7tr4YkhZz36VhMGPttwLjS39LtTqRz2UJ7aDWFmz5tl679XBWDTPI63JGMrBzAE2QFGtmZ6qKmi2X488yBMs7SJpIGzT7%2BbQMP%2Bwon05Tly%2B5y8hVaZzVZckKPwMk2a43rMarUR%2F%2FfRLsOJ%2F1b%2BjEPWpVhqniQff%2Bkh3jq%2FZRXX7QwktAB1iB1xE8H&X-Amz-Signature=5ac85126bbb7d38797b53304dd7efd5c93ccf7b906834a0fa54bc38d36110972&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46NFI7B%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDmSR%2B%2F2GXbDv8g94LPs1sJnn7QdgI0W91HSOu6jtoyoAIgUp9tqY2XHj7n%2F0SupV%2B9bC4t%2F6RDpt7wJt%2BSNHN%2FzM4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhL3cvGPbbWPhU8SCrcA4nHewNgabupwfmNxfgnbWFoyPKzbZSWEZn12Aq%2FXl25ZV%2BuPlLTj6uY51P4BdjmZItekCy%2B4XAE6nvJxkMScMgv6ajZnlMnrBetJXV4MhVVGnBRs22ct1yyWqOMeyftP33rzU5xPGiCKEQN3lWUuuM7Xt4IuXAHWr%2FrS%2BBf7O1UXYMRqIEzemqIaTUkBRkMcuKYUeGJMeJPKqrpCzY38WvtO43J9eIJXUc025wNygzT2%2Buek6cXDdfeMfywKtjcrV0qjBCKz4frQQrVCgAQrgPM2hBghcnHZJ1TBoRbOBzwPhAPNDRvSrshT6Sujzu15s9OSxQsJlyYOd%2F0Jfk4bSMrsGpT9aLwwM2GP0EfUCA9EQfU72HFTptfNY%2BbLb%2FI6DanPxC2lLLD%2FsU7mNUgPCAEZBspdLvnApoRtOoHzkMCs7LFqSw8glWBD2YBxqn9pU5eniXPWyl9gFMV%2Fwmx6rC2aWP%2ByfVvlf%2Fdeyzszd6EHwLK%2FJbjaq0fWs0QCJVI8mrfiI4Ynx5dsErcrz8wIU3nxQzONoyroQ%2BirfAM%2BU101OpbW3Q5BHCLCy6i0FQ7XSafK2Ih1iNn0U927BwiQvdDTA1xwbnmvWUGpmCPRtS8%2FM3bH0zq%2FIuf0RxwMNKf378GOqUBQnfwTnXyFk414ikIfa2e1H21UPbv6B%2FplT7tr4YkhZz36VhMGPttwLjS39LtTqRz2UJ7aDWFmz5tl679XBWDTPI63JGMrBzAE2QFGtmZ6qKmi2X488yBMs7SJpIGzT7%2BbQMP%2Bwon05Tly%2B5y8hVaZzVZckKPwMk2a43rMarUR%2F%2FfRLsOJ%2F1b%2BjEPWpVhqniQff%2Bkh3jq%2FZRXX7QwktAB1iB1xE8H&X-Amz-Signature=2fe29b04ffd0a9f8fdfb3a3cec31caf7f028b3df69ff2e3af08c99fe52c2cc94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
