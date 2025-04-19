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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLJBF4A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD5d8SCwv%2BP0BlhRjBG8Zyo0deG%2Fo3xZggpdkRR2yk%2BiQIgXFVm5mKDmo1Zo%2F0sBetq4csQG5I0C%2F7bAJmaNRwKW8IqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyztqGMNqpnfKyy9yrcA1%2FkQ34Oj80oN7ks%2Fr63awt%2FgCvt97pi50KC4c3H%2FU%2FfLQNGl3tRnPibz3HdoZz74tBAaPjRpauRqcbtOXdARaQ9YN7fSIpUMoA%2BqI6KHGuVjDQNGRkDmS0LgLiKDFPmWDu5%2BMyZLF%2B9VzSp2xPl6rQumfsLAjqi79Jk1SecPn7Gae%2B9J5ee%2FWhFV5suBJWvy%2BwZEGmkwMejEkvkv8r%2F8%2FrP77anlz6agR%2BlyJ%2B71LH9l1WiIuGzFBw32TbCxC%2FgCtjSXaDcX8tvwdApRnkK30z4gve2%2F6tbkdYPMUAyErPRUJfnEgC0FCHb6IG%2FLOyveBcdTwzsJ7NyyBq8V1D%2FHV71VhygcSMXYSGNXhgCbY4vFqg4fwB16kov5VMqGtPQkhLiu%2B0vtmohIBxCGMxt8l9KcbNEb0vPNw%2FqDMd5I0jInR%2B3F%2B0y2ND15%2FM6vDcqjde2WM9gXB4VDLNfMmbDPxMxEH1xkzP5qmCABUKgW7GFYM21u0fLya2VGZiRD7OPwGFbb1zOb9OUD5E1V2Eu2%2F7%2FRrScnrTlBdsHuEqioJbLuldqnyf%2F8ZZXK11k8kbRwM0Oj3lHDazSP78i99ugJ%2FAnCydrmxyhW8l%2Brn2ZfbIHQEdwiN2j4HWxu9znMNWXjsAGOqUB6vVmvvSQjb4LpdGKuIoYdF3ua3qsBBMbIo3rdFZM%2FdSNHgBLxdum4EKx3fGNaG9Q5dAzaclBLSo0B6iGYcBZtqpRRhwn82GtI1foM1O3VvHzKfwN6KNw2Y%2BXGKoPTKyfIXUwKDhhs%2BVnoqrGF58MPJkUVM8uCO1gBwazU%2Fh9%2B913B4dRFUKEoYJ50niArWBtTtn25lTndHIsSyXukFip5HlNDkg3&X-Amz-Signature=c209ac29be79f213466dfd913c215de7fdb37abe2d0b421aeee62d6c0c4d7c10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLJBF4A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD5d8SCwv%2BP0BlhRjBG8Zyo0deG%2Fo3xZggpdkRR2yk%2BiQIgXFVm5mKDmo1Zo%2F0sBetq4csQG5I0C%2F7bAJmaNRwKW8IqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyztqGMNqpnfKyy9yrcA1%2FkQ34Oj80oN7ks%2Fr63awt%2FgCvt97pi50KC4c3H%2FU%2FfLQNGl3tRnPibz3HdoZz74tBAaPjRpauRqcbtOXdARaQ9YN7fSIpUMoA%2BqI6KHGuVjDQNGRkDmS0LgLiKDFPmWDu5%2BMyZLF%2B9VzSp2xPl6rQumfsLAjqi79Jk1SecPn7Gae%2B9J5ee%2FWhFV5suBJWvy%2BwZEGmkwMejEkvkv8r%2F8%2FrP77anlz6agR%2BlyJ%2B71LH9l1WiIuGzFBw32TbCxC%2FgCtjSXaDcX8tvwdApRnkK30z4gve2%2F6tbkdYPMUAyErPRUJfnEgC0FCHb6IG%2FLOyveBcdTwzsJ7NyyBq8V1D%2FHV71VhygcSMXYSGNXhgCbY4vFqg4fwB16kov5VMqGtPQkhLiu%2B0vtmohIBxCGMxt8l9KcbNEb0vPNw%2FqDMd5I0jInR%2B3F%2B0y2ND15%2FM6vDcqjde2WM9gXB4VDLNfMmbDPxMxEH1xkzP5qmCABUKgW7GFYM21u0fLya2VGZiRD7OPwGFbb1zOb9OUD5E1V2Eu2%2F7%2FRrScnrTlBdsHuEqioJbLuldqnyf%2F8ZZXK11k8kbRwM0Oj3lHDazSP78i99ugJ%2FAnCydrmxyhW8l%2Brn2ZfbIHQEdwiN2j4HWxu9znMNWXjsAGOqUB6vVmvvSQjb4LpdGKuIoYdF3ua3qsBBMbIo3rdFZM%2FdSNHgBLxdum4EKx3fGNaG9Q5dAzaclBLSo0B6iGYcBZtqpRRhwn82GtI1foM1O3VvHzKfwN6KNw2Y%2BXGKoPTKyfIXUwKDhhs%2BVnoqrGF58MPJkUVM8uCO1gBwazU%2Fh9%2B913B4dRFUKEoYJ50niArWBtTtn25lTndHIsSyXukFip5HlNDkg3&X-Amz-Signature=1cd1dec4e289faee0c818b6c49a4d03de58fbd8f79fa80c7be720f0d101113f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
