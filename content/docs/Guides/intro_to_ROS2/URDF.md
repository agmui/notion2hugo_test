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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCOMTIL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJ%2BxJIxsdJQIS83P5KTnNqztMlWv9hCpGQZYC6vyONwIhAPTtIRBIa2JVHfkrMJ%2B54dU28VqilCtsQMDr9GwK%2BhcuKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFV5hWM7boYncO6VAq3AM0MiXyI%2F2HxRnxQsoDAJCZMvnAiLPYDWZCwvcOEmWO8r7c5kXVmc1aURatnLdsUTfohTvnnEwGz4WTittA0QXOX5%2FjRPAwdtC9gvSRdJGn87WSfGJnVvZcYEIwuPBI%2BjggKR%2Bpp%2FS%2B8M5cbOYo5j769KRaH28S%2BvruaQ3N%2FgGQsE1EgnEj5bm9ZRIUoKDti9gAyqKj5k33wHWxjcfe%2B1opOXBSgWiTD8iSWapmMC4vLzSqhQ8%2BsAIZdA4FWpDRfNJQIv%2Fu4BGWv0Oa3BApNJpYfOj4ziapImQXCrei0QZbDUbmZ5Ai0%2FWYDacmlogh3qzymdzgnoBlN%2FueRJuxBnmACGRCN1jzUbmuJk%2FbnV26czCqMZJtcvRygtwxn7xhC7z%2BL5SlR0MvwPHMVspzRRTraBy%2Fpg1O%2FvBHUDD%2FdY98umgOvNCFr40e3Wnx6ayNv8T2VH%2BvwoflxLdEiiv4Drax3OicHqNqDqRbfDohsNmM20jd4AYlCXC%2BlOwlB3tnsGhzfXMbWCuPWbEcP8OiX31zK0m5ESY3rx2qh7QxfNHy6JZjbPZbJELxAodI2VGlMMfNP%2Bjc3%2FlEJR04HYIDzZ85zhmaKgn09GHh%2BMTL%2Fb2ELasxVmc55rpb6qc1yjC6gP3CBjqkAfMuL0WZlt4EYG1CBpjCCH3sH%2FbsQk%2BSYv4G8rPJj6zfpt2UBfeOvWGBFZ3VOYFMxQN3xniqApP8V2EQ7B68T%2Bmo3kCZuJx7WSaDwo646ezvSe%2BtVndEJDc1kJgwnu7aDaM7Ueq9T785%2BVQLrJM9SMNUK%2FmFdQT%2Bl65HvPv96om06R0vJ6uZyBNG%2FOgueb5TSdGQbBDOOzCAcRWgWNZX5EamYWxw&X-Amz-Signature=cc2122a43b1894f6288293cc9f4eb51c2518c8bfddd89e340f34ae5d93ca70ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCOMTIL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJ%2BxJIxsdJQIS83P5KTnNqztMlWv9hCpGQZYC6vyONwIhAPTtIRBIa2JVHfkrMJ%2B54dU28VqilCtsQMDr9GwK%2BhcuKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFV5hWM7boYncO6VAq3AM0MiXyI%2F2HxRnxQsoDAJCZMvnAiLPYDWZCwvcOEmWO8r7c5kXVmc1aURatnLdsUTfohTvnnEwGz4WTittA0QXOX5%2FjRPAwdtC9gvSRdJGn87WSfGJnVvZcYEIwuPBI%2BjggKR%2Bpp%2FS%2B8M5cbOYo5j769KRaH28S%2BvruaQ3N%2FgGQsE1EgnEj5bm9ZRIUoKDti9gAyqKj5k33wHWxjcfe%2B1opOXBSgWiTD8iSWapmMC4vLzSqhQ8%2BsAIZdA4FWpDRfNJQIv%2Fu4BGWv0Oa3BApNJpYfOj4ziapImQXCrei0QZbDUbmZ5Ai0%2FWYDacmlogh3qzymdzgnoBlN%2FueRJuxBnmACGRCN1jzUbmuJk%2FbnV26czCqMZJtcvRygtwxn7xhC7z%2BL5SlR0MvwPHMVspzRRTraBy%2Fpg1O%2FvBHUDD%2FdY98umgOvNCFr40e3Wnx6ayNv8T2VH%2BvwoflxLdEiiv4Drax3OicHqNqDqRbfDohsNmM20jd4AYlCXC%2BlOwlB3tnsGhzfXMbWCuPWbEcP8OiX31zK0m5ESY3rx2qh7QxfNHy6JZjbPZbJELxAodI2VGlMMfNP%2Bjc3%2FlEJR04HYIDzZ85zhmaKgn09GHh%2BMTL%2Fb2ELasxVmc55rpb6qc1yjC6gP3CBjqkAfMuL0WZlt4EYG1CBpjCCH3sH%2FbsQk%2BSYv4G8rPJj6zfpt2UBfeOvWGBFZ3VOYFMxQN3xniqApP8V2EQ7B68T%2Bmo3kCZuJx7WSaDwo646ezvSe%2BtVndEJDc1kJgwnu7aDaM7Ueq9T785%2BVQLrJM9SMNUK%2FmFdQT%2Bl65HvPv96om06R0vJ6uZyBNG%2FOgueb5TSdGQbBDOOzCAcRWgWNZX5EamYWxw&X-Amz-Signature=77fd7e4356f4fb027282abef2f35b140908feaa86a830febcff5955dcd0bdca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
