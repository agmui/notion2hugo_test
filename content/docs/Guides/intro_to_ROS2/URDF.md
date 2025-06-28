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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KXWTSG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4Iq%2FTqGAfjIl4YQL91acD43RByFjf8AxfIxQxG2dzQIgMz7Ay%2BrDndGIwCZxFMPzOyCaOAuRauWxkzMPyPKr9FQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDevBSwRjhXySUMrfircA97IuTGJuIwS9TjAoVvhF4xQd1qPt1A9dRuMVle98cjn6U%2FFYFMtFIdBoRCqXHRK5Dw0GNt5QCJSYHeSrQle5NCVG1X04KJ2NuknsjXqphJdGj004sB%2BWMS08lnwOauAHRXcHwf3kueKiA%2Bn2Y0Z9%2B%2BVIwUZdH0FIademqg3mAGhykuWlqDM0%2F0z4FZQZOrseWJDeJTPNXvkW%2F7zFrEzneIVI0dKNcy2Qpr0GXgY%2FkNFHKAxpvpaUw%2B1lXdi4W0aNwzw8EPWrOKzw4lKMhJgaD%2FbMNFUlV6DC6em%2BAunsrAPBz8OpQV%2BVWULuVlcYJySPv0J0drS8hntjIJlAwj7kaj57RzC5yIWPa2t52manK%2B8MBNwrUmc8AjtQk431QJosHCkebMPKC%2FWwD0mihrcPsws%2BlrLdO0lzpziMbLae5FXuvhL0DX462c7ACm1%2F3qoZBFMKiINg0715QOdlufBxDSSgeUiiFgLuZkK%2BejtVk2BIKAVB421d2ZqxOFchwyhG2LWJPOgg46AM8VNQlCQrOT2NTkLYghJWxuNkgHq5gh2jTgwaOJDCY0SYJOPz5vg6Vg%2FQ0T9lRsHS6P693WAsLei55pJ6t1NvC9Tq71JPNLBeeOkeC%2F4XHIX7souMJSh%2FsIGOqUBrwyIrsjMPiEJScjjJUnQ%2FlA2Mi8%2FWsiDu91azSy1sCTIfDOoi9ISrgfXFkzkGwi25nFgLgDIG4OyU9GWNWu0PMqWCc7FiPkFRNH4DQi7LM5Z4nC4W9BICVcUngeuD0ksd8ZL7mwnXFR4day3%2B3xJC4j6GutAvesuaa7PX7y%2BawRDG5UfeS5RtWmsx76FMHVAzcG2Blu3nfka2ZgxrccBbOMAIaBl&X-Amz-Signature=205b18e27cada76f4e58e5d0b7a5fc0598234eb5d58d3727a4e765157924adea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KXWTSG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4Iq%2FTqGAfjIl4YQL91acD43RByFjf8AxfIxQxG2dzQIgMz7Ay%2BrDndGIwCZxFMPzOyCaOAuRauWxkzMPyPKr9FQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDevBSwRjhXySUMrfircA97IuTGJuIwS9TjAoVvhF4xQd1qPt1A9dRuMVle98cjn6U%2FFYFMtFIdBoRCqXHRK5Dw0GNt5QCJSYHeSrQle5NCVG1X04KJ2NuknsjXqphJdGj004sB%2BWMS08lnwOauAHRXcHwf3kueKiA%2Bn2Y0Z9%2B%2BVIwUZdH0FIademqg3mAGhykuWlqDM0%2F0z4FZQZOrseWJDeJTPNXvkW%2F7zFrEzneIVI0dKNcy2Qpr0GXgY%2FkNFHKAxpvpaUw%2B1lXdi4W0aNwzw8EPWrOKzw4lKMhJgaD%2FbMNFUlV6DC6em%2BAunsrAPBz8OpQV%2BVWULuVlcYJySPv0J0drS8hntjIJlAwj7kaj57RzC5yIWPa2t52manK%2B8MBNwrUmc8AjtQk431QJosHCkebMPKC%2FWwD0mihrcPsws%2BlrLdO0lzpziMbLae5FXuvhL0DX462c7ACm1%2F3qoZBFMKiINg0715QOdlufBxDSSgeUiiFgLuZkK%2BejtVk2BIKAVB421d2ZqxOFchwyhG2LWJPOgg46AM8VNQlCQrOT2NTkLYghJWxuNkgHq5gh2jTgwaOJDCY0SYJOPz5vg6Vg%2FQ0T9lRsHS6P693WAsLei55pJ6t1NvC9Tq71JPNLBeeOkeC%2F4XHIX7souMJSh%2FsIGOqUBrwyIrsjMPiEJScjjJUnQ%2FlA2Mi8%2FWsiDu91azSy1sCTIfDOoi9ISrgfXFkzkGwi25nFgLgDIG4OyU9GWNWu0PMqWCc7FiPkFRNH4DQi7LM5Z4nC4W9BICVcUngeuD0ksd8ZL7mwnXFR4day3%2B3xJC4j6GutAvesuaa7PX7y%2BawRDG5UfeS5RtWmsx76FMHVAzcG2Blu3nfka2ZgxrccBbOMAIaBl&X-Amz-Signature=c03b7b76674d554059b3c55ab76a03347a1258828436f3292c9c65cbe3bb3d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
