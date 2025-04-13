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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZCSD2G%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCpEgNeLzJ%2BkZ%2FM71hBBk%2FoB7D355ou5kISe%2B%2FpL77SowIhAPB9N2YVOgDo7L7BtB93sxwtDWOkGP301zInJa%2Bwwzn6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygvAl0EyBab3ILoYgq3AMhp2Uw3DBV65xmKKqFpoYgO%2FVckivkKO5k4D5SR0MV3lQ84PbuJzXvy89YWEyPmPe94IMOo5odlnvScFGXYSzY8atwmsvaz0t8Wvch3MHGZxEAaz2qIP61dSBfJPjaW0S79K5HDSRqtWHEgsdeObnLkaWJZeGiOHZ6GvNiFcMM5OTWIseq%2BVMsF35JlXckfXxvmuk2jvd2xzAh7FY87FTtvO9dbe397zmC6P6DKdXYB%2FUcaA0gYjFDKEVizWpiqUpOv%2B08vBP6XHv%2BVyeISbgCeKoE18lsnGmHWkKKTiVMvbed0P9a4BJk76jJL0TC57Rc0gRhQ9FSRCqwbbboqNsaGEeOGj6QYGgZ4fmWd00wvESoA6%2BpvnFWp%2Bhos0HUsY3uAEbCCLpJkOw%2FNPHg5YAD43nH8219IFM4MU7QZPLEbpBhb8BfhuFSbq870HlYntZeKj52Ehf6Wk%2FujPAuHi9wCeFAwL8WXE1R4C4jwCG4B%2FPX4eDikbFgtA7%2F2VnlBHrc78jAAc5ThSQvqSeLXYNG02zKhdKY3yqfNAobyFOxI8pUw4x25KVBBm%2F7OsqufDA3sQDM6Ga%2BniFObyd9PY41Mgc%2F3pxdR34ts%2B6fhIsT4wmxTwjN6CRDWhCr%2BDCBseu%2FBjqkAWb8yQXZsH8pfDWmqrGmQoUCwqHB0z5fzrhn4EsaxLm3qYTGZpubi%2FsnHeOGHmOwTQZ86hRpVVIgsvPYdq2wLV7ZyyZ92Hlg1FBp9ZcjO4XoXJqe0mMoFtFGA5inc4lnB3c5IJk2fr9exxXQKwCNfdxKdFz5CKuLgbKUwEaEsHedg%2FkgQ8jiE%2BK0Ho09Kq07yGtgfT44aMM3NQKkWMo8qNrka2Eh&X-Amz-Signature=62c52fd9163e032e2ab7844031a340edf3a8283155217a3c12bfd835fc9c26ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZCSD2G%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCpEgNeLzJ%2BkZ%2FM71hBBk%2FoB7D355ou5kISe%2B%2FpL77SowIhAPB9N2YVOgDo7L7BtB93sxwtDWOkGP301zInJa%2Bwwzn6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygvAl0EyBab3ILoYgq3AMhp2Uw3DBV65xmKKqFpoYgO%2FVckivkKO5k4D5SR0MV3lQ84PbuJzXvy89YWEyPmPe94IMOo5odlnvScFGXYSzY8atwmsvaz0t8Wvch3MHGZxEAaz2qIP61dSBfJPjaW0S79K5HDSRqtWHEgsdeObnLkaWJZeGiOHZ6GvNiFcMM5OTWIseq%2BVMsF35JlXckfXxvmuk2jvd2xzAh7FY87FTtvO9dbe397zmC6P6DKdXYB%2FUcaA0gYjFDKEVizWpiqUpOv%2B08vBP6XHv%2BVyeISbgCeKoE18lsnGmHWkKKTiVMvbed0P9a4BJk76jJL0TC57Rc0gRhQ9FSRCqwbbboqNsaGEeOGj6QYGgZ4fmWd00wvESoA6%2BpvnFWp%2Bhos0HUsY3uAEbCCLpJkOw%2FNPHg5YAD43nH8219IFM4MU7QZPLEbpBhb8BfhuFSbq870HlYntZeKj52Ehf6Wk%2FujPAuHi9wCeFAwL8WXE1R4C4jwCG4B%2FPX4eDikbFgtA7%2F2VnlBHrc78jAAc5ThSQvqSeLXYNG02zKhdKY3yqfNAobyFOxI8pUw4x25KVBBm%2F7OsqufDA3sQDM6Ga%2BniFObyd9PY41Mgc%2F3pxdR34ts%2B6fhIsT4wmxTwjN6CRDWhCr%2BDCBseu%2FBjqkAWb8yQXZsH8pfDWmqrGmQoUCwqHB0z5fzrhn4EsaxLm3qYTGZpubi%2FsnHeOGHmOwTQZ86hRpVVIgsvPYdq2wLV7ZyyZ92Hlg1FBp9ZcjO4XoXJqe0mMoFtFGA5inc4lnB3c5IJk2fr9exxXQKwCNfdxKdFz5CKuLgbKUwEaEsHedg%2FkgQ8jiE%2BK0Ho09Kq07yGtgfT44aMM3NQKkWMo8qNrka2Eh&X-Amz-Signature=0bb48cb07310a94e00b0a1a179ffcb4d690d227cedca4d10615e80cbb568000e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
