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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQRVN7C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWRNXk9mtNdSHHTQb9nbj4dO2gxQFdjPkWZbHuusZMCAiEA1qcPc%2BeAHWKsDCbo5uaApMENvwOS8Pa8ULAWdIm1KJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNnFJLCb7FdEKLudBSrcA5IPMSmW7e59pLNsvgxwfWEJBkwgvbTjV7gLCawv1UerJ%2Bk9ZTK%2FNkYe1uuqCh5kB3fioXbFc7z37038ue%2BA7UGjHM8sC36qFeKYNsdQyRnSJeJ%2B%2FVGmuiSBtN2Kg038cFdPSREjI4RBESZbZz4OrRPH663DBkcfXtLUTlUySuz7DtGRMwvhF7jdLfYX44OPrKwOhZi9AECmO0jWYW%2FUFF4eMgb3l9FvFL2%2BlX%2B56EzqcYrWYPMnkz2oxkecfycmfiYqrFZ1M666xneTUf6C0daAiq2n5tWyB4Y4V9FwSGiyIxEASVNTPtFcJ%2B3SXQcRfwZedfyOfc1TPr8cv339a5IKyvYpEvOCT3ZtPGiPM%2BXceNSKZthrh3sU6hcayQVZbURJHo2bxeG%2F0rwqT7n3rZvF%2BzvmTpNxBn4ifJre5S4k9uukHYxW3ZDh1goalC%2B%2F45HnYpOGqlXD9NVGurk91sjdsYndKfGtfiKwPMgkyYXNFY5mvQGWHD9ocGXUYiPkXtTcNPaulwCLMSwskWr7gXZp%2FB0slKG3v6wYZD6wTZNRJOetbOBNl4GNL9BzX90u5N90DpacRDl5fLbP097%2BzgNqiKHiVDzoBHAGYUTiJHuMPWMOGzpznyGtMrIDMI6e8cQGOqUBn588Uft4tr3EqcUIqS7rEVqsuuF0S8i60u8yg7Mpwk8iGKffS2o%2Fa4ReacTPIiEQR%2FsXngCULBLo%2ByfkLhsW4UH9vdL9KjT4zcl4uL6yNOSV%2F33lLYPLKp3Tvk064eZgU0vQESe2zRYwriOz7JcrWflG%2FnhgYVJoLOCPYuO121%2FcZmOZIJlNTYpyLTUyK1D6HEsYgHtx8X2jyQBOgmQiEUHvhN%2Bp&X-Amz-Signature=08d0c8785015dbe31e6a00419fd3fe8e3a1b66b462cb3325a0df4602953e4d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQRVN7C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWRNXk9mtNdSHHTQb9nbj4dO2gxQFdjPkWZbHuusZMCAiEA1qcPc%2BeAHWKsDCbo5uaApMENvwOS8Pa8ULAWdIm1KJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNnFJLCb7FdEKLudBSrcA5IPMSmW7e59pLNsvgxwfWEJBkwgvbTjV7gLCawv1UerJ%2Bk9ZTK%2FNkYe1uuqCh5kB3fioXbFc7z37038ue%2BA7UGjHM8sC36qFeKYNsdQyRnSJeJ%2B%2FVGmuiSBtN2Kg038cFdPSREjI4RBESZbZz4OrRPH663DBkcfXtLUTlUySuz7DtGRMwvhF7jdLfYX44OPrKwOhZi9AECmO0jWYW%2FUFF4eMgb3l9FvFL2%2BlX%2B56EzqcYrWYPMnkz2oxkecfycmfiYqrFZ1M666xneTUf6C0daAiq2n5tWyB4Y4V9FwSGiyIxEASVNTPtFcJ%2B3SXQcRfwZedfyOfc1TPr8cv339a5IKyvYpEvOCT3ZtPGiPM%2BXceNSKZthrh3sU6hcayQVZbURJHo2bxeG%2F0rwqT7n3rZvF%2BzvmTpNxBn4ifJre5S4k9uukHYxW3ZDh1goalC%2B%2F45HnYpOGqlXD9NVGurk91sjdsYndKfGtfiKwPMgkyYXNFY5mvQGWHD9ocGXUYiPkXtTcNPaulwCLMSwskWr7gXZp%2FB0slKG3v6wYZD6wTZNRJOetbOBNl4GNL9BzX90u5N90DpacRDl5fLbP097%2BzgNqiKHiVDzoBHAGYUTiJHuMPWMOGzpznyGtMrIDMI6e8cQGOqUBn588Uft4tr3EqcUIqS7rEVqsuuF0S8i60u8yg7Mpwk8iGKffS2o%2Fa4ReacTPIiEQR%2FsXngCULBLo%2ByfkLhsW4UH9vdL9KjT4zcl4uL6yNOSV%2F33lLYPLKp3Tvk064eZgU0vQESe2zRYwriOz7JcrWflG%2FnhgYVJoLOCPYuO121%2FcZmOZIJlNTYpyLTUyK1D6HEsYgHtx8X2jyQBOgmQiEUHvhN%2Bp&X-Amz-Signature=ade7c23d2bf086b14faf5b239090bbfbfb98dcd757753f5307e4ea7b848e9900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
