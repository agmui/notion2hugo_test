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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PLKKFWA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0I2tG5JJqWn7tptEnL8yXkKiX6YuWApaCEUNWzic4ugIhAKNrRRJMKzwhaTGcMfjR6MCWSnvIeQk4MIN8n8cpsS%2F%2BKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxezhyxlu0eV6qylLUq3ANHOXVsUfFQ%2BKczJ%2BOtDb1RqOP57PfDxmz3hECBssDwFRyYFLDuzJKa4eVWNxq4SyO4BqcbY5WmaW4LcLWt3crIg%2FjbgtQDRisnAQ9o4uAvezJjrxaT5F7990OLNqL7QDskEfBKztRekO5mSBULbHAbNImMa1WXa2ynLAVKb9KWHYDiiEA%2BfmQ4kFXHvIOZl1PESuIJ4Z9oq1Dps1ngpgwFDgzLlnC%2BKCxhZ0rVqiOmq7yGtltvQoPrjWpGkj39433WFmX4f1vTGqjzZGV40KQWPz9bNDNJOXFSTdWKhkK%2BIrvCElu%2BZmdWPK7RA82QC%2Ban%2BryFxaDNpudYj26aYWvaj19HS3dyxSoOA8bY3d%2FgWjKkmhPyez%2BVu0T3maHbyDJm9Nas5k62I%2FB3QDRNeh4UXZ%2BxNYL7l0z7cr37g6SOkD2lcagdd0u%2BSOchU5biY0w%2FnR2mPtvR2RBGvWX%2Ft4oemKTgq8phYy53%2F3vlmTqt2UL4SJY0vD0clfqLUv26gNS4EqVaqAt9VTQ2%2BCNYGo66bZE1%2F2FjCqmU3a31faK2hPtwWIPFEDvRphq3mYiwQUazh3q3OOogPAtEjsSYyDFz9Tu3QCl%2F6X81jPmtuuF7s90J16JtXxST%2FaDQOjDI5Ni%2FBjqkAXrD2otDoKQKryf57EmNPIzmJwQKT2R8Fx0O7PvySVfUzJah%2F3wo9dw1XboS%2FuXxUVSAm%2BM0SXxKnx%2FwRt5RH105nh0VP6Vy9WAO7P8BTE2GmmdD06h%2FkrO4B8axnIN4vVVINwJSNijlk2hQqcz92YDqFHDAJHUqb%2BrWs1keA%2F6UpKvFsU2VQQNQoI13PAuYYscoi7kEhvofoVczWOJIi%2F2gH55o&X-Amz-Signature=968108925b067bfca65e9858f46cae616f68af9959a38dc940f15bd61e7c3ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PLKKFWA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0I2tG5JJqWn7tptEnL8yXkKiX6YuWApaCEUNWzic4ugIhAKNrRRJMKzwhaTGcMfjR6MCWSnvIeQk4MIN8n8cpsS%2F%2BKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxezhyxlu0eV6qylLUq3ANHOXVsUfFQ%2BKczJ%2BOtDb1RqOP57PfDxmz3hECBssDwFRyYFLDuzJKa4eVWNxq4SyO4BqcbY5WmaW4LcLWt3crIg%2FjbgtQDRisnAQ9o4uAvezJjrxaT5F7990OLNqL7QDskEfBKztRekO5mSBULbHAbNImMa1WXa2ynLAVKb9KWHYDiiEA%2BfmQ4kFXHvIOZl1PESuIJ4Z9oq1Dps1ngpgwFDgzLlnC%2BKCxhZ0rVqiOmq7yGtltvQoPrjWpGkj39433WFmX4f1vTGqjzZGV40KQWPz9bNDNJOXFSTdWKhkK%2BIrvCElu%2BZmdWPK7RA82QC%2Ban%2BryFxaDNpudYj26aYWvaj19HS3dyxSoOA8bY3d%2FgWjKkmhPyez%2BVu0T3maHbyDJm9Nas5k62I%2FB3QDRNeh4UXZ%2BxNYL7l0z7cr37g6SOkD2lcagdd0u%2BSOchU5biY0w%2FnR2mPtvR2RBGvWX%2Ft4oemKTgq8phYy53%2F3vlmTqt2UL4SJY0vD0clfqLUv26gNS4EqVaqAt9VTQ2%2BCNYGo66bZE1%2F2FjCqmU3a31faK2hPtwWIPFEDvRphq3mYiwQUazh3q3OOogPAtEjsSYyDFz9Tu3QCl%2F6X81jPmtuuF7s90J16JtXxST%2FaDQOjDI5Ni%2FBjqkAXrD2otDoKQKryf57EmNPIzmJwQKT2R8Fx0O7PvySVfUzJah%2F3wo9dw1XboS%2FuXxUVSAm%2BM0SXxKnx%2FwRt5RH105nh0VP6Vy9WAO7P8BTE2GmmdD06h%2FkrO4B8axnIN4vVVINwJSNijlk2hQqcz92YDqFHDAJHUqb%2BrWs1keA%2F6UpKvFsU2VQQNQoI13PAuYYscoi7kEhvofoVczWOJIi%2F2gH55o&X-Amz-Signature=798a3d3152c981e616c578835a8dfedf7329b69423716941efe7b45311195142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
