---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZYXDAM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmpoBxDE8HgEuUfrlcT%2FrPvygfpAAC3VrtDlrMK%2BSakAiEA4FPWuD01Ca1bBuSlaHiyLIG05gxcoO%2B5ckhV1mQy5ocq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAe5SIzrXBxbgbREhCrcA0BtFQLM5dk0viY6qNQhzZjqosgGvtYXIW30RzmgAHLh0mzQBHpsOUCvj%2FH6vlv%2B5H5sCMnmHxZwVp9sFeB6uPfsCB5Q2rh5jyEt6w1luUfSSXcb7fL5NAACYglj5oEKycICjSVsfeGI00EeHOusfPpZmK2vC3NBfmnSRW1KoCVYmOAQYIdmiE1jWTDFhwiNcHgqgPZFyz0THnmVIZtbrPVJ5a2wp4sCTRHKssLQ0LV3VhuN6AZYQFDmP2YM%2BRU88hCxXx8FGGSC8yWJvx4aSGIHZ6G44M%2BuXF%2FNRWOlIHF0mbM8aiZ%2BE2jFoDHxh0SUoJHRbm2z0lvV9qx1t3AkxMy8aMyVTDnqFfTuzv%2FDRejHpCpBHbm3rkHOWIk4yyylP6uVLnU1%2FIU1i85LKf7r6AV1aMDUecgTbaoIvTTOrO8p3JYLqUPQT0o7KM5S32P4Y%2B4%2FIDBgeDl%2BDNY%2F2GBuVEigldJi4g5cyTGowFeaoUIAvStur1tFnwlfbPDSDkoPTnxr1ZfWylOJz18DUUz2iyrTgu7WAouSYEXYGrLOvCZa1bDYuYwACOVixTSisJPzzAjeqOj8lwOaztTsjZbE%2BqQBoNM8UMpklNVxrKjNowIFyo%2BZjJsk93scwH0aMLSAusQGOqUBe0scq5Ys9R%2FU3uL5BNOZXI3%2FEL3HUgnY3b4kSA5WHbJfAj3I%2FFcqBnIAk8CuW1C%2BLXeEOvMjUitptbct3eWwIUuVCL3d8faYW0HwECEQQKJ2iaAsfrhjuMDLFvmqQ8nzbT4VHxdDCFWtX8tWe%2BkFSGv6AqaSe7rMI77URzQHhVURm7OjABRrEGuiIEW7qOHm3xu2nJ85CA42GXu9SDpL4WZehQY2&X-Amz-Signature=12f98529d5d1f2346f36ffe55ec2311feedc3818002701afdd206a00fae5f6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZYXDAM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmpoBxDE8HgEuUfrlcT%2FrPvygfpAAC3VrtDlrMK%2BSakAiEA4FPWuD01Ca1bBuSlaHiyLIG05gxcoO%2B5ckhV1mQy5ocq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAe5SIzrXBxbgbREhCrcA0BtFQLM5dk0viY6qNQhzZjqosgGvtYXIW30RzmgAHLh0mzQBHpsOUCvj%2FH6vlv%2B5H5sCMnmHxZwVp9sFeB6uPfsCB5Q2rh5jyEt6w1luUfSSXcb7fL5NAACYglj5oEKycICjSVsfeGI00EeHOusfPpZmK2vC3NBfmnSRW1KoCVYmOAQYIdmiE1jWTDFhwiNcHgqgPZFyz0THnmVIZtbrPVJ5a2wp4sCTRHKssLQ0LV3VhuN6AZYQFDmP2YM%2BRU88hCxXx8FGGSC8yWJvx4aSGIHZ6G44M%2BuXF%2FNRWOlIHF0mbM8aiZ%2BE2jFoDHxh0SUoJHRbm2z0lvV9qx1t3AkxMy8aMyVTDnqFfTuzv%2FDRejHpCpBHbm3rkHOWIk4yyylP6uVLnU1%2FIU1i85LKf7r6AV1aMDUecgTbaoIvTTOrO8p3JYLqUPQT0o7KM5S32P4Y%2B4%2FIDBgeDl%2BDNY%2F2GBuVEigldJi4g5cyTGowFeaoUIAvStur1tFnwlfbPDSDkoPTnxr1ZfWylOJz18DUUz2iyrTgu7WAouSYEXYGrLOvCZa1bDYuYwACOVixTSisJPzzAjeqOj8lwOaztTsjZbE%2BqQBoNM8UMpklNVxrKjNowIFyo%2BZjJsk93scwH0aMLSAusQGOqUBe0scq5Ys9R%2FU3uL5BNOZXI3%2FEL3HUgnY3b4kSA5WHbJfAj3I%2FFcqBnIAk8CuW1C%2BLXeEOvMjUitptbct3eWwIUuVCL3d8faYW0HwECEQQKJ2iaAsfrhjuMDLFvmqQ8nzbT4VHxdDCFWtX8tWe%2BkFSGv6AqaSe7rMI77URzQHhVURm7OjABRrEGuiIEW7qOHm3xu2nJ85CA42GXu9SDpL4WZehQY2&X-Amz-Signature=4a9864ff5ebaad367b252adcd238bf031cae9b2b88b12763ef84ca9edf53cab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
