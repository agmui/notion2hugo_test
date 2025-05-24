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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376AXG5E%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCJOCFBJCAlg8tlGYW8NsrZCinhp%2FFANUi4zmRlAU2FzQIga5fU%2Fh50Nyp%2B2LA43l4dN2viNU4nW5gCvv6S9D6l7Uoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDH6sTZb4rkizgdh3eyrcA70rQNrQ6AkPGNjkzBO7mURB3ODzu6ePuRCFVha8IZ7zwhlwGZbqPD%2FpIpg904%2B8SmxOTNz4vVvif91Oq14NGB0k9nfb%2F3yDqnhKTYR747FYRYRfw36Pt1CxT1JOPPWTwxuMIIuEt3p9VbnuSRCXw9iU6GWg3TYT8fxuJaDc7WUVTynq8Zu0CSLg8F%2BbMHSdWA8j08PWyr0HpyuCZn%2FLGY0VGtgAFPHj9DkO6ZXvuguatz1Y%2FfqJxqvFD7Xfch1ztasmSu4EDS4WTRpNer5DDFdeYvR%2B9u7boAPjB4hu%2F9CqvWJHCykC6KKn08jJXpM5y1QV9qIEEoEECgaWxUDJOxTF0XpMQrpiVOEdWN6%2BGYLtWmIi4VrlqfmzZ1tfN127sy3aOqKl3eEfdVW6S0twkeIE4ZkdF6g3qJb8QdlsykP10r9yON%2B7uwyvQGy7%2FpOt6vMpIav%2Br8dmyuYXofZAkSmdJ7SvGnViGXGgkGqur1eTqOU0JEWq4T8J%2FS7GFjf%2FZUP9718XVvyQTn4HqDjNZCRNwKl3gQxTMDP2E5LDzFIDfupQSaQWVCZ5blRBiog6PpIQLszyM8pxUREKpOc9Bzt93LOklkWUD5%2BMpaTOTKwq1Uro%2F3Ek%2FRBOTCHwMMffxcEGOqUB0AfFSV%2FgSh9MHd%2BSPdWheFGGP80bJjlgaBUBj76GAhkC2EHrczgnkEZ3O3h5%2B%2BJLU1N6nIeLhyLDCxzkYD3pPFfvlzV5UfxMkfTXyyj3%2BkAozaljnBfGffXXb%2FytbgXZ5BJxDD1ot7szj8b3AqMfnpCaYRXD8pVVxjWDVPNlh16jEBi0k9CZYFJXSrEEJVg8G6%2FFKV%2BQCc0E7GcclHS%2BLNPhvysY&X-Amz-Signature=aea37b3f3cc7fd7e3b5ab7493b793eb4cd23af0d44661ea69263242916485f89&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376AXG5E%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCJOCFBJCAlg8tlGYW8NsrZCinhp%2FFANUi4zmRlAU2FzQIga5fU%2Fh50Nyp%2B2LA43l4dN2viNU4nW5gCvv6S9D6l7Uoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDH6sTZb4rkizgdh3eyrcA70rQNrQ6AkPGNjkzBO7mURB3ODzu6ePuRCFVha8IZ7zwhlwGZbqPD%2FpIpg904%2B8SmxOTNz4vVvif91Oq14NGB0k9nfb%2F3yDqnhKTYR747FYRYRfw36Pt1CxT1JOPPWTwxuMIIuEt3p9VbnuSRCXw9iU6GWg3TYT8fxuJaDc7WUVTynq8Zu0CSLg8F%2BbMHSdWA8j08PWyr0HpyuCZn%2FLGY0VGtgAFPHj9DkO6ZXvuguatz1Y%2FfqJxqvFD7Xfch1ztasmSu4EDS4WTRpNer5DDFdeYvR%2B9u7boAPjB4hu%2F9CqvWJHCykC6KKn08jJXpM5y1QV9qIEEoEECgaWxUDJOxTF0XpMQrpiVOEdWN6%2BGYLtWmIi4VrlqfmzZ1tfN127sy3aOqKl3eEfdVW6S0twkeIE4ZkdF6g3qJb8QdlsykP10r9yON%2B7uwyvQGy7%2FpOt6vMpIav%2Br8dmyuYXofZAkSmdJ7SvGnViGXGgkGqur1eTqOU0JEWq4T8J%2FS7GFjf%2FZUP9718XVvyQTn4HqDjNZCRNwKl3gQxTMDP2E5LDzFIDfupQSaQWVCZ5blRBiog6PpIQLszyM8pxUREKpOc9Bzt93LOklkWUD5%2BMpaTOTKwq1Uro%2F3Ek%2FRBOTCHwMMffxcEGOqUB0AfFSV%2FgSh9MHd%2BSPdWheFGGP80bJjlgaBUBj76GAhkC2EHrczgnkEZ3O3h5%2B%2BJLU1N6nIeLhyLDCxzkYD3pPFfvlzV5UfxMkfTXyyj3%2BkAozaljnBfGffXXb%2FytbgXZ5BJxDD1ot7szj8b3AqMfnpCaYRXD8pVVxjWDVPNlh16jEBi0k9CZYFJXSrEEJVg8G6%2FFKV%2BQCc0E7GcclHS%2BLNPhvysY&X-Amz-Signature=5416fcda1e396f9aa56e31df12195d21606d729cbdc745cb6663678a168ee30f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
