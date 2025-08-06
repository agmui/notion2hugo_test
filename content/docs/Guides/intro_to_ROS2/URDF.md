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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNZY3YN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE%2F9BsBK%2BjWGZdm3kxZw3uyVQKu1MkgLfz1AC7JSrN9%2FAiEAmcnkR%2FzDxU%2FJBZBCXQXRn5ARSU2VXxgZ%2FTfrQO7aRJ8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHSkmqd6u9AsK7uiMircAzYMTjlCN42%2F3ZGl5AdRAoJrBQySWicarU1HqNBDrTDWzEaTgS3W%2F2y1WIvPusHS6gGCGSO8OW8hFedvi%2BebsDSt2Q1JwVA9pkDKpu3%2BfiPI8GBk7jo8eFor6htQwHM7cGWOD51OXEy%2FBRGnc8DoPv57VqVlXY2t4dX08WrGuTVu%2FrKE10OHFNexGVGeT35xWxx5yU2ev%2BWbUz%2BSbxYRaJML27XOogaYO6VgnDmHICnwglMxsSjRNFL%2FfuS%2BF5jVfhGwJgCTvJjuQQBBxl4nBMLuwBvoWln2VY%2FVtgytkEMHisk9oLq2%2FaKe5iWhNYRBf9IukX6tkN7qMYd%2FHAWhYpw6DfPPctD7QCgl5XrxqFMS4QTeyBlkd0dzoQqrG6n2DKueRrABelaWJYjKth6wUzao%2BAGkZ6Btvm6VGDFCXMIoUnYS8PbNqgBoJhNYSuwdVYJu3sibXjMKfP29ro3ssWp0A7lOX9fPvFbTN0qhmWdEm0HjSrfi%2F%2BZvlZ90k0iSe84i6K%2FFNb8QBwzU7jNUWASTqQP7ZBHiRw9nT6SqSjA3AZYVmkpaA%2FkaWGPHpjcvMX6aEYDQB0Nxoxkn39ryodSJp8rZLS4fpmjkz8YhkytMg8X%2BJ60Cb%2F%2BPl4MxMIfLy8QGOqUBB2Pl9%2BNqXG5jqod90JHM5bWauQs7x7QYOCzZ0PCgdFivPouhhyoqkRamOH6OdRhGTKH1tKSRr7CxWBkWj0dcIux4q%2FtRwLirhyt7NAy32pYnmms0269lGny3317pzEHHEEnD8GvRZLtd4w%2BUKvL5DMmEkntVG46KEFUZmw16TxsppwL7Uyylgv4shadCA3D1r6HYKqjKMuZpZBYDCl57WaXqmsZk&X-Amz-Signature=77a6be5b20dc6eae624854cf7289a77e0559b7c3ebd7c8bd8074cf6785650d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNZY3YN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE%2F9BsBK%2BjWGZdm3kxZw3uyVQKu1MkgLfz1AC7JSrN9%2FAiEAmcnkR%2FzDxU%2FJBZBCXQXRn5ARSU2VXxgZ%2FTfrQO7aRJ8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHSkmqd6u9AsK7uiMircAzYMTjlCN42%2F3ZGl5AdRAoJrBQySWicarU1HqNBDrTDWzEaTgS3W%2F2y1WIvPusHS6gGCGSO8OW8hFedvi%2BebsDSt2Q1JwVA9pkDKpu3%2BfiPI8GBk7jo8eFor6htQwHM7cGWOD51OXEy%2FBRGnc8DoPv57VqVlXY2t4dX08WrGuTVu%2FrKE10OHFNexGVGeT35xWxx5yU2ev%2BWbUz%2BSbxYRaJML27XOogaYO6VgnDmHICnwglMxsSjRNFL%2FfuS%2BF5jVfhGwJgCTvJjuQQBBxl4nBMLuwBvoWln2VY%2FVtgytkEMHisk9oLq2%2FaKe5iWhNYRBf9IukX6tkN7qMYd%2FHAWhYpw6DfPPctD7QCgl5XrxqFMS4QTeyBlkd0dzoQqrG6n2DKueRrABelaWJYjKth6wUzao%2BAGkZ6Btvm6VGDFCXMIoUnYS8PbNqgBoJhNYSuwdVYJu3sibXjMKfP29ro3ssWp0A7lOX9fPvFbTN0qhmWdEm0HjSrfi%2F%2BZvlZ90k0iSe84i6K%2FFNb8QBwzU7jNUWASTqQP7ZBHiRw9nT6SqSjA3AZYVmkpaA%2FkaWGPHpjcvMX6aEYDQB0Nxoxkn39ryodSJp8rZLS4fpmjkz8YhkytMg8X%2BJ60Cb%2F%2BPl4MxMIfLy8QGOqUBB2Pl9%2BNqXG5jqod90JHM5bWauQs7x7QYOCzZ0PCgdFivPouhhyoqkRamOH6OdRhGTKH1tKSRr7CxWBkWj0dcIux4q%2FtRwLirhyt7NAy32pYnmms0269lGny3317pzEHHEEnD8GvRZLtd4w%2BUKvL5DMmEkntVG46KEFUZmw16TxsppwL7Uyylgv4shadCA3D1r6HYKqjKMuZpZBYDCl57WaXqmsZk&X-Amz-Signature=961e6f8ceb74351307ef43ab7d891f1e98426ea58dcd975c58b1e8a922addef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
