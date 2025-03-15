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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNPU5D7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJsK2K4uvC8FWFYI0iEplqcpC2rnVPdxPrOI178Mm16AiEA9J%2FfEg6jBuqj2V8paK6LRtW5J3ylbM4oXa5hII6mXNIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5z%2FbDex4rrhnhCUircA%2FKRehiNESqJjfVgbF67VmjYj0WLqgHfREq4ZkegDGNnVHtro6sI6cOniM%2FrBORYjUIwS1k2YZeRreGy%2FvR4CjILguHvmBGguJUU%2BOHZ8Gw5ycy0W8CzaiM9eWaPhw9chahIMJ0s51yZ6dbsLysh70JJB7RgPSFUO%2Fh7ZhLj3J0fwbxfUOYgsO5djyqKHAcTkVTjqVIvf%2BZR0Dm9%2BzvnyucOg%2FLSgXhwMsGqnpXEKSybdr24x7WmajCE2DXaSKGq970hHb1CQcGr3tMl48GHZgp%2BMV96psAbhnlRToIdHsWFEuwfkxFktlcrCQpSoMkgE2N3oprdWQ0HHBBtpsIbSUqj3mfM%2BSTTkMGfvBTxfalJ%2B02PHPLTYSqPBJ%2BhgXzl8M62cijUVjAFidQ2%2FrC9629xye87zAe53B2zQtbgaxOoa%2F0yFQTw9ZH11D9aPQsfxo%2FSINYwZasl1Fn2dg5MkJb6iW0adAIOr%2B3Y9HRGVpmQfqJ9VBa3e7iqh6AJ%2FQRUSs9XfzXml8ub5Vy7F9YPFrrimUjt6b%2FjxpzCom1VM%2BaAO0rYF3gTWToL7QR9WWX1dZJZpFBp7%2BfFAswPkTxZARVHcSBhE3aJ7V21jfOZ0%2BgoPVosqybKZtI5NMbRMMCl1L4GOqUB8dKYLkOwA%2BpbnnItsPC3%2FLSfL4GNA9AVBFrNIp9cgOTmbk12IJ7%2BzFPcgZn9cFrwXITcVVOZTo8QZIkZOsde1W5QtXtUaeqsmAqfqCL5164L3IE5jm81ED2tSGztYpq9pcl%2FomPY31qjGunPtYJQRWjUaB2i15HdQLx%2Bc0FsdfBm78ZEKJtyIINXO%2B4He0eK%2FRMWVuBbQscmhY%2FYqFk%2FBH1eeBRh&X-Amz-Signature=92be8e5908c52202dfd8ac5102e76bab668267f23368d79684dab552cfd06e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNPU5D7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJsK2K4uvC8FWFYI0iEplqcpC2rnVPdxPrOI178Mm16AiEA9J%2FfEg6jBuqj2V8paK6LRtW5J3ylbM4oXa5hII6mXNIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5z%2FbDex4rrhnhCUircA%2FKRehiNESqJjfVgbF67VmjYj0WLqgHfREq4ZkegDGNnVHtro6sI6cOniM%2FrBORYjUIwS1k2YZeRreGy%2FvR4CjILguHvmBGguJUU%2BOHZ8Gw5ycy0W8CzaiM9eWaPhw9chahIMJ0s51yZ6dbsLysh70JJB7RgPSFUO%2Fh7ZhLj3J0fwbxfUOYgsO5djyqKHAcTkVTjqVIvf%2BZR0Dm9%2BzvnyucOg%2FLSgXhwMsGqnpXEKSybdr24x7WmajCE2DXaSKGq970hHb1CQcGr3tMl48GHZgp%2BMV96psAbhnlRToIdHsWFEuwfkxFktlcrCQpSoMkgE2N3oprdWQ0HHBBtpsIbSUqj3mfM%2BSTTkMGfvBTxfalJ%2B02PHPLTYSqPBJ%2BhgXzl8M62cijUVjAFidQ2%2FrC9629xye87zAe53B2zQtbgaxOoa%2F0yFQTw9ZH11D9aPQsfxo%2FSINYwZasl1Fn2dg5MkJb6iW0adAIOr%2B3Y9HRGVpmQfqJ9VBa3e7iqh6AJ%2FQRUSs9XfzXml8ub5Vy7F9YPFrrimUjt6b%2FjxpzCom1VM%2BaAO0rYF3gTWToL7QR9WWX1dZJZpFBp7%2BfFAswPkTxZARVHcSBhE3aJ7V21jfOZ0%2BgoPVosqybKZtI5NMbRMMCl1L4GOqUB8dKYLkOwA%2BpbnnItsPC3%2FLSfL4GNA9AVBFrNIp9cgOTmbk12IJ7%2BzFPcgZn9cFrwXITcVVOZTo8QZIkZOsde1W5QtXtUaeqsmAqfqCL5164L3IE5jm81ED2tSGztYpq9pcl%2FomPY31qjGunPtYJQRWjUaB2i15HdQLx%2Bc0FsdfBm78ZEKJtyIINXO%2B4He0eK%2FRMWVuBbQscmhY%2FYqFk%2FBH1eeBRh&X-Amz-Signature=bf837cd9685b50df5417a6d94c3fae6ea8ab60f39c3c2d009f32f206977729fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
