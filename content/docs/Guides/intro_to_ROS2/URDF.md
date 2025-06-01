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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7WOI56%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCEmVWdAbg51L%2FWUgmX%2BSZQqT1ftPiHyacucxxRQyzaZwIhAJW8nee2WWXngkkMEY8Hd4l1O%2FjeGlrr96%2FNaDv%2FlUVOKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCW5%2FhhxreTSTan5kq3APZs1nxjAVQyUEdO6DOX5JSN7%2BAa3pTiliyvqJtTbqoFnPwAvy2I3yG0TeXGXJdyE73%2FtIiQF9VUjh2f6MjwKoYLtj2S94emEaFuS1e%2BfuWSRPUgQlKTFKbuGUxRbvMB8YLtJFlimKJRqHEAanHHSHgIgLhQ1NOmpmky%2FE11SPrch3dRK0WMaoMxfc8oS6kxZtba89IkHRFvkvdCNe0IL1oiYpDMFvsyBtEpWxQK9%2FxmXmyqf1xjnrRFvjqgwuo5Bzv83fiwbUbFpjx6gk%2BFjTlwR6lbxEjOeKDeCKh79%2BZl7vV6HqWGK1KHJToVmJRAL4FS4p9hmepa5HY%2FVv1Kqjx8os4yv7j%2BQ3HqUgbXCTi6VRZtlQPM%2B0Y%2B1lZnNlS%2FAR9frPMRmZrwwS2fOSSBIEDXTFUkTI%2B5gmZGvJjUfs7XNnlPBW%2BQ0PNRAxmYuAjs25KTw%2BMlh%2B2hz9bwyO6U5bycACdkGgyMRWCrkJrJR14W8aMg9wwc6efyIgc48r5miL5qeZrGDacf24CGD4k%2BUyZ3KGu0S4OMDmQikykA2JbUDdS%2FyREvIbdgPSIOAV8h4xMRWhRkb6G4T8ZsmT34Blx0oIJ59AqYuYjo7G%2F%2BAxoA7NWTZQOzhiL%2BChBhDCjp%2FPBBjqkAZ%2Bp5k8Cd6G0tvYyTjKrwVzsbZRipuD1E%2BvvlXjRVbp%2F4YAHaSeEr7WapKEkU%2B9a0OtbyQGW%2F6RVWTkwG%2BZNKDGFnIeqUMg8iY7zM3UiuVDhGoV%2B4KOF6ll7%2Bm%2BjIExiMk2lDT6UKcevV4NA%2BI3rl%2FW3xf2hOKKU2xU98qOoXjD8NSFCd8mibFHQcAmdBVVetIROww1YPwq2856%2F6ljx7GqKeat4&X-Amz-Signature=b70c93fc02c5bf5d7390f132c5a18d5f70db25e3737358716a20012d3f24b270&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7WOI56%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCEmVWdAbg51L%2FWUgmX%2BSZQqT1ftPiHyacucxxRQyzaZwIhAJW8nee2WWXngkkMEY8Hd4l1O%2FjeGlrr96%2FNaDv%2FlUVOKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCW5%2FhhxreTSTan5kq3APZs1nxjAVQyUEdO6DOX5JSN7%2BAa3pTiliyvqJtTbqoFnPwAvy2I3yG0TeXGXJdyE73%2FtIiQF9VUjh2f6MjwKoYLtj2S94emEaFuS1e%2BfuWSRPUgQlKTFKbuGUxRbvMB8YLtJFlimKJRqHEAanHHSHgIgLhQ1NOmpmky%2FE11SPrch3dRK0WMaoMxfc8oS6kxZtba89IkHRFvkvdCNe0IL1oiYpDMFvsyBtEpWxQK9%2FxmXmyqf1xjnrRFvjqgwuo5Bzv83fiwbUbFpjx6gk%2BFjTlwR6lbxEjOeKDeCKh79%2BZl7vV6HqWGK1KHJToVmJRAL4FS4p9hmepa5HY%2FVv1Kqjx8os4yv7j%2BQ3HqUgbXCTi6VRZtlQPM%2B0Y%2B1lZnNlS%2FAR9frPMRmZrwwS2fOSSBIEDXTFUkTI%2B5gmZGvJjUfs7XNnlPBW%2BQ0PNRAxmYuAjs25KTw%2BMlh%2B2hz9bwyO6U5bycACdkGgyMRWCrkJrJR14W8aMg9wwc6efyIgc48r5miL5qeZrGDacf24CGD4k%2BUyZ3KGu0S4OMDmQikykA2JbUDdS%2FyREvIbdgPSIOAV8h4xMRWhRkb6G4T8ZsmT34Blx0oIJ59AqYuYjo7G%2F%2BAxoA7NWTZQOzhiL%2BChBhDCjp%2FPBBjqkAZ%2Bp5k8Cd6G0tvYyTjKrwVzsbZRipuD1E%2BvvlXjRVbp%2F4YAHaSeEr7WapKEkU%2B9a0OtbyQGW%2F6RVWTkwG%2BZNKDGFnIeqUMg8iY7zM3UiuVDhGoV%2B4KOF6ll7%2Bm%2BjIExiMk2lDT6UKcevV4NA%2BI3rl%2FW3xf2hOKKU2xU98qOoXjD8NSFCd8mibFHQcAmdBVVetIROww1YPwq2856%2F6ljx7GqKeat4&X-Amz-Signature=9c81ce3c27cdd69bdb2231ae8f5000e6831631ac0d89c6ff19d6d69225aa3835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
