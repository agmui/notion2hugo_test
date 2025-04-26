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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPD3KVVE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6XrsoMZ1cbsh1nx6jdg8%2F5AyJbv6sIt1puSVVqG4lXAiB1H80V%2FvAtGJYPd%2F9yujXiaSFejeELLg1s2CvwCw8Rjyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMorhfJZ2jftxsxbgFKtwDgKHSYvPK5z3mSZ%2BmTfvdnxETC%2FFq4XBug3Ukn90To%2BT%2F4XZ%2Fk4gl3S3v7znzYM2CLI8ya%2FzygROmc%2B3Mu3GfHXmKx7Og22ZMKdeRANQN43ficGvULcYlwS4Eg76jqta5IySnAhc07BHwJ5%2FEo3TVnOsTHCZ8KOJgRe0fIq4BsPQPA4184Fm6ovDBMcmXa42u3D1EA%2FApoqFgyqMtMCLmU9a5roMY6G%2Bsrf2iZVXD5RWrkFUT7pYXsGa1icaCvX6%2F0x9V5a4Ek8kO43Bshzj4kuA%2BKpCAsRgef9gZOGusnfs9gRJhp00prQuT7Py5NTprNiHhv5er1%2B6LQZDV7H9pJFuTyP8u642P3yWUN423xCzwIkNfKe8u9Door%2BJCVp1sUci6BEUDPnJVJV3jZTtZPrmEtRSoXvjpa7ChQCrfi%2FFP7G5buzf383p%2BqZ%2B4yn49YlEzbTfK3be8rMMz%2F7SyQgZjtaXgX66v1XelWiSCwnvDgrck7TeXmw0eHnJyJAvNJrPfKub6C2Fn9bprN6FfpdWu79ipdPEDL%2FrQhv6ioFYTDI4jfGAMbH%2BPTEXNFW05W%2FLOcThLhfuZog73LXPNhsX%2Bv00A88%2FheG0kwEqiYJb5Kf7wQtdq7sNFAj4w8eazwAY6pgGplc%2Be5ictg%2F%2F3VVw%2B8s8GzVJcScphOyxxVqglW80crTKxXFqsRmRJqdp3Osit8Wz3GQl9JnkvBvpy9BKcQTf5hAEt0dLtlRHvfeHKi73%2FCRS2yYbhJ8CHJ%2BQqCVYS9y6ranj99Vzeb3LFFdvY%2B86wURosZIWr5OT1o%2BqA3sI63mRheLzqF6j%2FE0Ua3mykGXq7AK3ikX57uHQFXyRR%2BSZAorM47UWh&X-Amz-Signature=406865d0d2597a6a5cea15a8c825cff79909f7dee34837bb056148165981f8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPD3KVVE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6XrsoMZ1cbsh1nx6jdg8%2F5AyJbv6sIt1puSVVqG4lXAiB1H80V%2FvAtGJYPd%2F9yujXiaSFejeELLg1s2CvwCw8Rjyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMorhfJZ2jftxsxbgFKtwDgKHSYvPK5z3mSZ%2BmTfvdnxETC%2FFq4XBug3Ukn90To%2BT%2F4XZ%2Fk4gl3S3v7znzYM2CLI8ya%2FzygROmc%2B3Mu3GfHXmKx7Og22ZMKdeRANQN43ficGvULcYlwS4Eg76jqta5IySnAhc07BHwJ5%2FEo3TVnOsTHCZ8KOJgRe0fIq4BsPQPA4184Fm6ovDBMcmXa42u3D1EA%2FApoqFgyqMtMCLmU9a5roMY6G%2Bsrf2iZVXD5RWrkFUT7pYXsGa1icaCvX6%2F0x9V5a4Ek8kO43Bshzj4kuA%2BKpCAsRgef9gZOGusnfs9gRJhp00prQuT7Py5NTprNiHhv5er1%2B6LQZDV7H9pJFuTyP8u642P3yWUN423xCzwIkNfKe8u9Door%2BJCVp1sUci6BEUDPnJVJV3jZTtZPrmEtRSoXvjpa7ChQCrfi%2FFP7G5buzf383p%2BqZ%2B4yn49YlEzbTfK3be8rMMz%2F7SyQgZjtaXgX66v1XelWiSCwnvDgrck7TeXmw0eHnJyJAvNJrPfKub6C2Fn9bprN6FfpdWu79ipdPEDL%2FrQhv6ioFYTDI4jfGAMbH%2BPTEXNFW05W%2FLOcThLhfuZog73LXPNhsX%2Bv00A88%2FheG0kwEqiYJb5Kf7wQtdq7sNFAj4w8eazwAY6pgGplc%2Be5ictg%2F%2F3VVw%2B8s8GzVJcScphOyxxVqglW80crTKxXFqsRmRJqdp3Osit8Wz3GQl9JnkvBvpy9BKcQTf5hAEt0dLtlRHvfeHKi73%2FCRS2yYbhJ8CHJ%2BQqCVYS9y6ranj99Vzeb3LFFdvY%2B86wURosZIWr5OT1o%2BqA3sI63mRheLzqF6j%2FE0Ua3mykGXq7AK3ikX57uHQFXyRR%2BSZAorM47UWh&X-Amz-Signature=b7636089538b9b68f365fbbfcc2c982942dfc65735a00ddec454d86bd1cdf4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
