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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHAWAO5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjcQDRiekslozLmZhCE%2BHDoYqoX9hOELMuSMH7UnOh4AIhAO4khCWICS28ht327ndwqiUwlnAxNbM0pbpRYOEdhFe9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDkfktLkHs8Eh61kq3AMuVKzxYBm8%2FjTX9genBpfoRC609axEbXgAM%2BeHhtMikb0tzSo%2FMZqJNk4mMn2aQ1PtM2JWdF%2FFJOTGr4nsr2QNf%2BP%2F5JGd%2B6lhprDWtHo8EPm7ealSSBdyCqS5nweLVcUbv6UebXN0NnwM3q7pj3Psw2CyBQuq%2FybQ1yYDrdN16XyJnsaMEjcssCUQidyMw0keKjYwerWbUS%2Bue0r%2FpDwWpYY%2FyFnPJS2grjqrgwH1%2FRzSxcOyd7hKFVjQ1jWTfr6TUN%2Ff16brEJVRyTaQJUyNgFg1pHPvY7%2BTueILwsx%2FHl0Iiq0tvdJ8NpVz%2FTW5zxdzb%2FXDcOM1CC2HbY2KvWdPNvfPrFIPxvqB4E%2FPKGR%2FPYALCVLXhVYBnXSi6ewqgJHPlyflI892Y7STWbIDj%2BVQfez9JDOHQ1djjxxCRH0lqAgPEP2rp%2FPR%2Bnfv4ZE75Or0SjZssh4Ag%2FF0cSXTzKqhBAS%2BKGlUL6NjI2etfh934wDy1IxKFiPthEl8WQliX2AcTrXlM0iS3vb4ajkrqsbDnVLD%2BGBJvHpfS%2FlWoyj0k01vC7eXoKfySpBUlGHwURW1yQjg5Oeo8173V9FbAjI7M%2Ft1wxNpGqHSYtmEAYVcd0LovOX1wzQ7W2FLKjCapu%2B%2BBjqkAfu%2B3f9Ueg2852HVsiesIuZ28BecpO0WAUR2EAv%2F5grpTnRQR197xePvGmcEmOssR9BUhDB4njRK%2FYfBnLwvfPW9bfDs00dsliP2r5IHGPD0hiY2E33BSVqjD3GfIGb43X92Nmzh4CxyOt27RN70HBsewhqKi7f1ONujsXdM7ZcE1HgGhLwpOU48bOdhFUpqkPRNoJpTnLHUdXFCd1YZuQi7C6%2BX&X-Amz-Signature=bb1f913133bf97e9b12d8e2e9d010249a1f7ac97889447390806fcb6273b05b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHAWAO5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCjcQDRiekslozLmZhCE%2BHDoYqoX9hOELMuSMH7UnOh4AIhAO4khCWICS28ht327ndwqiUwlnAxNbM0pbpRYOEdhFe9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDkfktLkHs8Eh61kq3AMuVKzxYBm8%2FjTX9genBpfoRC609axEbXgAM%2BeHhtMikb0tzSo%2FMZqJNk4mMn2aQ1PtM2JWdF%2FFJOTGr4nsr2QNf%2BP%2F5JGd%2B6lhprDWtHo8EPm7ealSSBdyCqS5nweLVcUbv6UebXN0NnwM3q7pj3Psw2CyBQuq%2FybQ1yYDrdN16XyJnsaMEjcssCUQidyMw0keKjYwerWbUS%2Bue0r%2FpDwWpYY%2FyFnPJS2grjqrgwH1%2FRzSxcOyd7hKFVjQ1jWTfr6TUN%2Ff16brEJVRyTaQJUyNgFg1pHPvY7%2BTueILwsx%2FHl0Iiq0tvdJ8NpVz%2FTW5zxdzb%2FXDcOM1CC2HbY2KvWdPNvfPrFIPxvqB4E%2FPKGR%2FPYALCVLXhVYBnXSi6ewqgJHPlyflI892Y7STWbIDj%2BVQfez9JDOHQ1djjxxCRH0lqAgPEP2rp%2FPR%2Bnfv4ZE75Or0SjZssh4Ag%2FF0cSXTzKqhBAS%2BKGlUL6NjI2etfh934wDy1IxKFiPthEl8WQliX2AcTrXlM0iS3vb4ajkrqsbDnVLD%2BGBJvHpfS%2FlWoyj0k01vC7eXoKfySpBUlGHwURW1yQjg5Oeo8173V9FbAjI7M%2Ft1wxNpGqHSYtmEAYVcd0LovOX1wzQ7W2FLKjCapu%2B%2BBjqkAfu%2B3f9Ueg2852HVsiesIuZ28BecpO0WAUR2EAv%2F5grpTnRQR197xePvGmcEmOssR9BUhDB4njRK%2FYfBnLwvfPW9bfDs00dsliP2r5IHGPD0hiY2E33BSVqjD3GfIGb43X92Nmzh4CxyOt27RN70HBsewhqKi7f1ONujsXdM7ZcE1HgGhLwpOU48bOdhFUpqkPRNoJpTnLHUdXFCd1YZuQi7C6%2BX&X-Amz-Signature=fd6f34bb4f6b00ea9bc3ec0692b0b470118708fdf1046b13a50aebee1768d2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
