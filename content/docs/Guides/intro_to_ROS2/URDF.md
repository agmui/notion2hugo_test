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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM66XUSB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNOKN1T54kdeDGVy4XcD1%2BHQb7Ww6wO%2BygZxyCmzo7GAiAexRAI9JsGEhB9ioAA4DvxiB%2BUzFzspFoCCY4o3dRkiCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcCebN7GrDWUfn4KmKtwDDsrzbM8zNnlAytKbGVPwObq9zOAMWTSX%2FZOC%2BhVw1IF%2FtAw58GzKq6DNLut4B0yEHt5vsV8wpYo6UAkbuvBVk0F5q%2B4E6zwt0hPdgzNgDVFWsEeljRP%2BVjgAL%2Fxat1LVqBOA%2FCj%2B16Hyq94V7RQFH%2BwIIGqZldeYDSgUV27MQt0K9%2FreILhlIy42Uk8bmTPBvwKHhrS03YSKzNguVRHMgNS0C%2FTqA%2FsdeieqWgMbjmm1oA6%2FY1po9eebLc10BALz%2BslEFfKSfHhCgNgodVTOO9Gv8FeewBJR2qmE6Zqy1QQrG1%2BsJkF8dhrdDaYk6AzO5MSeRSwXZAtu%2FVfSyjDq4rg1ZJ76KBufrjzpNREj66V7rhQqPoWiPd58mkluY%2F0xhNvicaZqHqhQqP9%2FweAb%2FyO2xSSqWte3mkMnOOHV4HNiPKAwTwVYfZLYa4ajBaYgcv%2BQbxvybRLDbIvp%2FtDTiUG3cf4J2JMM3hIP7q6H%2FUD5B4QgiZPbblhZI6JloDDhrbq4pSV0YH7vGlxcechhm9Iir9sHdbuqZ8Dwu8BE0giqj0SlQ8JezY3tzixw1%2B6%2BtjR7DK4CTUTh0wnJ7yZFmCJ2t2cYK9P1lTJ8XhcsSkuCluXBvqokU9LCeXkw87qWvgY6pgHGrgWwI4drl1wwjyjFuSy%2FN%2FmNliziAosQZbtyqPpaysq5CPLPLLgk6uT0mpirsyUCcHvWD6lAmWGKRmTipC7W0i9Uk%2B%2FiJo4DRW1stit3bfbE3StgiKFdIsth5R3aswg4dDT59GKq1i9G9Ge4OgDhk4KZk62A53oMXH6%2FrFkmwAxKjsRaxuYz0oH%2F%2BWS2gR1gSBAxOTYMCDTn42mCPR3WFFI5wwjk&X-Amz-Signature=54b1df772737bc59c3ba121c1b9f2731790931ee251468524c833be897076822&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM66XUSB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNOKN1T54kdeDGVy4XcD1%2BHQb7Ww6wO%2BygZxyCmzo7GAiAexRAI9JsGEhB9ioAA4DvxiB%2BUzFzspFoCCY4o3dRkiCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcCebN7GrDWUfn4KmKtwDDsrzbM8zNnlAytKbGVPwObq9zOAMWTSX%2FZOC%2BhVw1IF%2FtAw58GzKq6DNLut4B0yEHt5vsV8wpYo6UAkbuvBVk0F5q%2B4E6zwt0hPdgzNgDVFWsEeljRP%2BVjgAL%2Fxat1LVqBOA%2FCj%2B16Hyq94V7RQFH%2BwIIGqZldeYDSgUV27MQt0K9%2FreILhlIy42Uk8bmTPBvwKHhrS03YSKzNguVRHMgNS0C%2FTqA%2FsdeieqWgMbjmm1oA6%2FY1po9eebLc10BALz%2BslEFfKSfHhCgNgodVTOO9Gv8FeewBJR2qmE6Zqy1QQrG1%2BsJkF8dhrdDaYk6AzO5MSeRSwXZAtu%2FVfSyjDq4rg1ZJ76KBufrjzpNREj66V7rhQqPoWiPd58mkluY%2F0xhNvicaZqHqhQqP9%2FweAb%2FyO2xSSqWte3mkMnOOHV4HNiPKAwTwVYfZLYa4ajBaYgcv%2BQbxvybRLDbIvp%2FtDTiUG3cf4J2JMM3hIP7q6H%2FUD5B4QgiZPbblhZI6JloDDhrbq4pSV0YH7vGlxcechhm9Iir9sHdbuqZ8Dwu8BE0giqj0SlQ8JezY3tzixw1%2B6%2BtjR7DK4CTUTh0wnJ7yZFmCJ2t2cYK9P1lTJ8XhcsSkuCluXBvqokU9LCeXkw87qWvgY6pgHGrgWwI4drl1wwjyjFuSy%2FN%2FmNliziAosQZbtyqPpaysq5CPLPLLgk6uT0mpirsyUCcHvWD6lAmWGKRmTipC7W0i9Uk%2B%2FiJo4DRW1stit3bfbE3StgiKFdIsth5R3aswg4dDT59GKq1i9G9Ge4OgDhk4KZk62A53oMXH6%2FrFkmwAxKjsRaxuYz0oH%2F%2BWS2gR1gSBAxOTYMCDTn42mCPR3WFFI5wwjk&X-Amz-Signature=e3cda0f1a3de2f564016813aa6bff3f4facabed1193a6431a9add85bd50a4eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
