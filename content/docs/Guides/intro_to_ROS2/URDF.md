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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJKMOJO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDuUN0mxQKidwFL2qTgTMMCqBfsruvge8F%2BuYAoOBGFxAIhAN8ghXoPoP8i6oKytH88zL%2BJMDrUY9SkUI%2Fa0j2lJsqCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwRU1csadk6zcu2JIq3AP%2FHQTrGBy9x0qfwVUhpbQ7z2pPHyZ5L95VLNGw2V607Ca%2Fo7kMkj%2BBT8DA%2BjgSDnEwFPy%2BoP7gKe%2FKVAKAfEVZMWYGHKgMmwEwEVLn0uEhEiLBfze6Nl8BqYhB8OgeX4TWaaheXFtpLF9NFv5N1fFUb%2Bu9GMpwHZVic%2FiEl912X%2BHcuo5TjxSOrs8ppwj5DZkNz5AVcQXKj8ucwh2Z0HYHxQDo6LBCCbVd%2Fw4WJVNg05Z4sL6zC0pHXL8Fl8jfZTt3il9058uRMpQ%2FbROFwZf2QGlmL9%2FU902SAC1ZWmM9leY87E9TVHYeUp%2FY3BtMAjk6%2FpYIqgAUT2RhAJVBOYBxzFq6Rl%2B4GYByNuZUNwaPyElGdKXWFT4%2BrXHf8s7QIkfkUby6nymeXzpPzwkq3U6547TIsNOz%2Bfw4%2BrZo9kUAIVXohi%2F8VyPNDukD8AIg45QlHr6OQ%2FUsUuY88GzDM5fXKeR133YvbSBm2yOTRF9O%2FZ52G2F3uUgpOv2FkNGTFvDyBm5rSquq2qkSYmtpMyl56pDDNNhWwTUzSk3lg7GvcN%2BzN96OlEPf%2BwkJQvToRx87lxY2HfBP8KU18G9RaPw8tzscYm2TUoV%2F5fkyfcxdkSWbWZvDD6k3hhOYPTDAk5vEBjqkAUctas66dmTTH5Tc%2Fn6LKdPHLcU76%2Bdppku%2BoLY8a%2FBy9SJtSt3ONrvL9h1QpjrhgVXGGjw8DrhecDyJ3CGT2ErSvhcCbEAsAIsOj3q0o89KeUj8oomWZBKN1%2FMv1ylbk3ohxIt8GaO7WITnIkb%2Fj%2BszbI1%2Fl0nxHDe%2B60ZgBR6U3cawGAEuyKNuMQzUO8YQL4YzoHvmbtJR6k%2FIPFmi6AuO%2BGHX&X-Amz-Signature=f380a83c691dd6e1b0251a79c09aa82188ffb00846d71ebd6b16935dde9b49bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJKMOJO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDuUN0mxQKidwFL2qTgTMMCqBfsruvge8F%2BuYAoOBGFxAIhAN8ghXoPoP8i6oKytH88zL%2BJMDrUY9SkUI%2Fa0j2lJsqCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwRU1csadk6zcu2JIq3AP%2FHQTrGBy9x0qfwVUhpbQ7z2pPHyZ5L95VLNGw2V607Ca%2Fo7kMkj%2BBT8DA%2BjgSDnEwFPy%2BoP7gKe%2FKVAKAfEVZMWYGHKgMmwEwEVLn0uEhEiLBfze6Nl8BqYhB8OgeX4TWaaheXFtpLF9NFv5N1fFUb%2Bu9GMpwHZVic%2FiEl912X%2BHcuo5TjxSOrs8ppwj5DZkNz5AVcQXKj8ucwh2Z0HYHxQDo6LBCCbVd%2Fw4WJVNg05Z4sL6zC0pHXL8Fl8jfZTt3il9058uRMpQ%2FbROFwZf2QGlmL9%2FU902SAC1ZWmM9leY87E9TVHYeUp%2FY3BtMAjk6%2FpYIqgAUT2RhAJVBOYBxzFq6Rl%2B4GYByNuZUNwaPyElGdKXWFT4%2BrXHf8s7QIkfkUby6nymeXzpPzwkq3U6547TIsNOz%2Bfw4%2BrZo9kUAIVXohi%2F8VyPNDukD8AIg45QlHr6OQ%2FUsUuY88GzDM5fXKeR133YvbSBm2yOTRF9O%2FZ52G2F3uUgpOv2FkNGTFvDyBm5rSquq2qkSYmtpMyl56pDDNNhWwTUzSk3lg7GvcN%2BzN96OlEPf%2BwkJQvToRx87lxY2HfBP8KU18G9RaPw8tzscYm2TUoV%2F5fkyfcxdkSWbWZvDD6k3hhOYPTDAk5vEBjqkAUctas66dmTTH5Tc%2Fn6LKdPHLcU76%2Bdppku%2BoLY8a%2FBy9SJtSt3ONrvL9h1QpjrhgVXGGjw8DrhecDyJ3CGT2ErSvhcCbEAsAIsOj3q0o89KeUj8oomWZBKN1%2FMv1ylbk3ohxIt8GaO7WITnIkb%2Fj%2BszbI1%2Fl0nxHDe%2B60ZgBR6U3cawGAEuyKNuMQzUO8YQL4YzoHvmbtJR6k%2FIPFmi6AuO%2BGHX&X-Amz-Signature=9ec7277881330717fdc46fdc40af59748c614641b6ad8c3bba5b17303fdced4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
