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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGQLT5N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDhlgPspuDsXSeFGsTOeLDYoIL76g2pVSCxoc%2FpaON5NQIgbiotcTl9lt2FsY2KrP6mVqEEYcghmI%2BwrdfWOlVQAZQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs7lo3WYH%2FxlE0PnyrcAxUJpHqbnm%2BHVuwKKm72u0tiKCMDWBYc761XPY8on3b8dxqxTEuQdQStlrrwPI7zz3uTTv0VePu4OtX9Y4ASYas9sEE2go14Vu%2BF1vnt9VlbEuHPIRfQ%2F%2BiPYm1%2F5T7xmJECijlhZbgxP86Lha9RlfY9NfZbvJH9MdNLgL%2FtxzMwnqYhhnV20wm5hdRGs3j3DzoDvpAm%2FpMvuxiQIjYCiaLRKrsP6Xr3dyajy0ddlI5RRlo8QVOP0NoT07gw1qdoRhRwJ5MnPmXwtddq4cj7GVeuuSiD26yZ3YMGM33TeXWjj1uU%2B190xFFHMDh7j1YXdYkWD61Y6tbwubQBtrrITC%2BpdbjirsMOY0sN44wATU%2BW%2BOzL7qNFZnRb0OBqfi1fbDxqeHggbbmmAZPER4X5ulcaXzwdz5dpnUvZmiHwk8p%2FzE4TleBcmh2RHuoBk7t4hNuOsW84b0m8%2BjK52Z9nNKbimmFIiFDeCu3H9OIc78%2Fq%2Fz%2BPfpdZP8%2FGnMORSfPqUX8dBIXyd1aMpcjOJYIa9BIZdks%2BykJgQHMiniK9Q810NAAWTYANuzqULjxt95snNNvYZ4UCaFdG%2BDT2htdA6MRqVM1t%2B0h2JjFoosMH2rLbYKyIUR%2FHfSRe7%2F8uMMnt08QGOqUBFCDpOlVcTrxuLuf%2FAEuv4ZVLa4CzYvV1RI9n8U%2B1Fl%2FODFCH4qrQddycIIvEnJZ5P685PUHFk%2FXNn0rIzriXosM%2FFHnB%2FCByYo0v2wCv9uNzjFH4VyX2vpnoWb8zXYeCRj8ctutBLvqc6pLAIlk8%2Bpv7yOeiWGjSM4XQiOTJYqLsfV8pefDdA0FOWaD3bILtlV%2B%2F6euy6GXtdDm9T%2FKW79RGUOKO&X-Amz-Signature=f93f6ade51630ad5d3c0fd69229e52478b440273f68863b736cbd4e586e197b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGQLT5N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDhlgPspuDsXSeFGsTOeLDYoIL76g2pVSCxoc%2FpaON5NQIgbiotcTl9lt2FsY2KrP6mVqEEYcghmI%2BwrdfWOlVQAZQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs7lo3WYH%2FxlE0PnyrcAxUJpHqbnm%2BHVuwKKm72u0tiKCMDWBYc761XPY8on3b8dxqxTEuQdQStlrrwPI7zz3uTTv0VePu4OtX9Y4ASYas9sEE2go14Vu%2BF1vnt9VlbEuHPIRfQ%2F%2BiPYm1%2F5T7xmJECijlhZbgxP86Lha9RlfY9NfZbvJH9MdNLgL%2FtxzMwnqYhhnV20wm5hdRGs3j3DzoDvpAm%2FpMvuxiQIjYCiaLRKrsP6Xr3dyajy0ddlI5RRlo8QVOP0NoT07gw1qdoRhRwJ5MnPmXwtddq4cj7GVeuuSiD26yZ3YMGM33TeXWjj1uU%2B190xFFHMDh7j1YXdYkWD61Y6tbwubQBtrrITC%2BpdbjirsMOY0sN44wATU%2BW%2BOzL7qNFZnRb0OBqfi1fbDxqeHggbbmmAZPER4X5ulcaXzwdz5dpnUvZmiHwk8p%2FzE4TleBcmh2RHuoBk7t4hNuOsW84b0m8%2BjK52Z9nNKbimmFIiFDeCu3H9OIc78%2Fq%2Fz%2BPfpdZP8%2FGnMORSfPqUX8dBIXyd1aMpcjOJYIa9BIZdks%2BykJgQHMiniK9Q810NAAWTYANuzqULjxt95snNNvYZ4UCaFdG%2BDT2htdA6MRqVM1t%2B0h2JjFoosMH2rLbYKyIUR%2FHfSRe7%2F8uMMnt08QGOqUBFCDpOlVcTrxuLuf%2FAEuv4ZVLa4CzYvV1RI9n8U%2B1Fl%2FODFCH4qrQddycIIvEnJZ5P685PUHFk%2FXNn0rIzriXosM%2FFHnB%2FCByYo0v2wCv9uNzjFH4VyX2vpnoWb8zXYeCRj8ctutBLvqc6pLAIlk8%2Bpv7yOeiWGjSM4XQiOTJYqLsfV8pefDdA0FOWaD3bILtlV%2B%2F6euy6GXtdDm9T%2FKW79RGUOKO&X-Amz-Signature=53936202e2951806dfdfcfea1209827977bf7bd970e2e2c2e25b2aa9f0b7e384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
