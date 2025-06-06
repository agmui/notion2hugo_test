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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XILYPPF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgAMUQsUIx9W2Tkk3OdbVD8SRTdU9KY48Rz9z0qjuBGAiAH8lA7XZDTpjTXTcDjXQEiLsVEsM2Xekco%2BMKZE9Hdsir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMu699HKogmFm79tzZKtwDdgyZNwCSLuw6J4KD5iWSHtWQ0ELPFf4yqjzXhc4pblJXR0WIMEmF%2FxmfV%2FG0xJi99PtKflZ64ieOktOrI1Cujbzr%2FCJz8JSSIdxIogJXVU3zFdk7myai2%2BCQ1bt4I91S8FDAyVN6GhbYWaIYm5Icz9aGDu61I23GQrBvsEnudbaNdnLmLinzg3E%2Byu3tLXOXUfX7EWN4FYf2DVOJgvOKhl5XFsTuEJPkvzHzfLRnyynSmOXvJOEzemiUDltaCuflBnqh6jMk4lxMHjoXidIWMmzTM9uKPCsO%2Bu3ocOJKsMZBe2eXVoK1moS9eZr1ib2eTooIJjoxZGLYnjvszbTwtab6535TAOATlFLZC4pJMf3JCBpxUnu6j9wgf1gkb9hvYR2IAKzHJqdZkOwXJIUlTzTNqah9xh6U7R3drEpXREtZ5VKY79aMbYVA46yx6Z%2BB2ZLu10cE3WziJvlTn8fBE8egP0p2CFkauhDt0FcSAzv2UTH%2FELMOm0YUHt8WmeXz8wata2DGA3TaF6qPZ8me2s9ageAhb0vQdRuwxn5GpqlyvZLXt9hkEGvcq6Yrg8cg%2B%2Fj6WKIKC0WU1Wpefo2zeaDyo7%2BjmtQ3SmAgZug7QmY2%2BGZmIeWxdiQuvNowxpGNwgY6pgFVp%2F7hg1LR%2FMUKprh%2BrUc0AoSU9sgwill4S5p7ZWn6anxsvmpHUnkPBIsaTprPTp5GqDjH9H%2FRm6BKCRr%2FjDG5v6L4csVHgzKdldf5ybGH%2BCVh6dMuPd6EXgbaOI9fonyrrE4l4I9f%2Bxb1QDOfxv4dCeZYUDWVzoGdios1RgEVIGx5a4NEwehz5RE8ARIvGWipNgkUnsAgve39IrS5SFokcdvNuVkR&X-Amz-Signature=ee7cae998e1c15b1b80156e0af79361ea210c714842c986dfbceabb64b7f72e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XILYPPF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgAMUQsUIx9W2Tkk3OdbVD8SRTdU9KY48Rz9z0qjuBGAiAH8lA7XZDTpjTXTcDjXQEiLsVEsM2Xekco%2BMKZE9Hdsir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMu699HKogmFm79tzZKtwDdgyZNwCSLuw6J4KD5iWSHtWQ0ELPFf4yqjzXhc4pblJXR0WIMEmF%2FxmfV%2FG0xJi99PtKflZ64ieOktOrI1Cujbzr%2FCJz8JSSIdxIogJXVU3zFdk7myai2%2BCQ1bt4I91S8FDAyVN6GhbYWaIYm5Icz9aGDu61I23GQrBvsEnudbaNdnLmLinzg3E%2Byu3tLXOXUfX7EWN4FYf2DVOJgvOKhl5XFsTuEJPkvzHzfLRnyynSmOXvJOEzemiUDltaCuflBnqh6jMk4lxMHjoXidIWMmzTM9uKPCsO%2Bu3ocOJKsMZBe2eXVoK1moS9eZr1ib2eTooIJjoxZGLYnjvszbTwtab6535TAOATlFLZC4pJMf3JCBpxUnu6j9wgf1gkb9hvYR2IAKzHJqdZkOwXJIUlTzTNqah9xh6U7R3drEpXREtZ5VKY79aMbYVA46yx6Z%2BB2ZLu10cE3WziJvlTn8fBE8egP0p2CFkauhDt0FcSAzv2UTH%2FELMOm0YUHt8WmeXz8wata2DGA3TaF6qPZ8me2s9ageAhb0vQdRuwxn5GpqlyvZLXt9hkEGvcq6Yrg8cg%2B%2Fj6WKIKC0WU1Wpefo2zeaDyo7%2BjmtQ3SmAgZug7QmY2%2BGZmIeWxdiQuvNowxpGNwgY6pgFVp%2F7hg1LR%2FMUKprh%2BrUc0AoSU9sgwill4S5p7ZWn6anxsvmpHUnkPBIsaTprPTp5GqDjH9H%2FRm6BKCRr%2FjDG5v6L4csVHgzKdldf5ybGH%2BCVh6dMuPd6EXgbaOI9fonyrrE4l4I9f%2Bxb1QDOfxv4dCeZYUDWVzoGdios1RgEVIGx5a4NEwehz5RE8ARIvGWipNgkUnsAgve39IrS5SFokcdvNuVkR&X-Amz-Signature=a7be52f142cf76b15453e4f6675b46a3b19bf49c42daadfdd2fff0adfa6942ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
