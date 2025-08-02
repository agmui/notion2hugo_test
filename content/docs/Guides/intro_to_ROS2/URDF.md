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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVFVCCP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1EKu1qAcoYvZmq%2BQDtZJ25pKpqh6P7hoTMGZbUZAw9AiBtuFZ1th%2BzfiZffqbTaoqLG8yUmY6suHrsjEWfHzfQ3CqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9e%2FkQspiUmFAV3ZKtwDwUiENLBAwM9BqFutcF04rFob7mxuQzAroj%2BtfMKfE3utnT%2BTNcnwA%2F6n7l1qPg1E%2BElsQs4dBaxLSnphLO833R%2B5iQmVJfgyna9c02lpIFNBWDi3RmXwbx4f7H3HYnTACFJs9Sc4EkCoZEVir%2FPQhvupQaulr4x4rEBbGn6Nd9S193kR%2F35xYbAJuT2NTJl0vy%2BBV25Jppp3b8WrUjUFSJPeIzsCl300UG5eJpQERRXANWuFsFcu%2FBDGlT%2Buq%2FLd8soogGQfFJxHbELZ%2BdA9rnHqaJ0rPR67ET5oLbHU%2F1zA3BCDNmvBtUPlYlD704yiXonnKXGF7POEPAXDSWG8287%2BzcEaLT1dPvtd4Un5VNtFS81hSDe5br%2B%2B8%2F8QD5ZE0%2FVFHt8JPy10NgvDlRAvjPs9bGIns1uQxzcck1DcLCTZc8PVxNKE6Djr1gXrycn44hfm9pvBo85YdJblmsPYJhUnSVBCfu0XctbwYbH9BMKavj9El4LgNJm4CPVlsDOY%2FZkAne15uEV0upPe9aXZvVbz3IOdF30gUXVzzdohMHEvskAjIDFquE3AxZzhTWbaRW2kjuVGGwD%2Bv%2B9%2FY95fiCKKMjh%2FctwzwdOoN80U50KT1LNwOvuteK%2Fy1mUw98q2xAY6pgHVqqjDd867Z7Oc8PULXk7SpKKj6Yjyt%2FwROLF1XggvAKnZn4MfOx6p2t6HXoIN0m6LEk4BMwZa1vFLZ2MpDj7WgcdRk92nNMAKco2SrgxXlCt%2FrBs7vnDevWZkNpvdud38qjJyRvM8lYPb4tmvbT71xDEZWnGthFO0XljspkoXpKag5vcDb9yeWKdBZ3I4Mertzi5nxv3wyT2kMY6v9oKsAsmDzTSn&X-Amz-Signature=21512c1226028dc006039d7d55bbd90c5c297c734e831110345e014329f83dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVFVCCP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1EKu1qAcoYvZmq%2BQDtZJ25pKpqh6P7hoTMGZbUZAw9AiBtuFZ1th%2BzfiZffqbTaoqLG8yUmY6suHrsjEWfHzfQ3CqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9e%2FkQspiUmFAV3ZKtwDwUiENLBAwM9BqFutcF04rFob7mxuQzAroj%2BtfMKfE3utnT%2BTNcnwA%2F6n7l1qPg1E%2BElsQs4dBaxLSnphLO833R%2B5iQmVJfgyna9c02lpIFNBWDi3RmXwbx4f7H3HYnTACFJs9Sc4EkCoZEVir%2FPQhvupQaulr4x4rEBbGn6Nd9S193kR%2F35xYbAJuT2NTJl0vy%2BBV25Jppp3b8WrUjUFSJPeIzsCl300UG5eJpQERRXANWuFsFcu%2FBDGlT%2Buq%2FLd8soogGQfFJxHbELZ%2BdA9rnHqaJ0rPR67ET5oLbHU%2F1zA3BCDNmvBtUPlYlD704yiXonnKXGF7POEPAXDSWG8287%2BzcEaLT1dPvtd4Un5VNtFS81hSDe5br%2B%2B8%2F8QD5ZE0%2FVFHt8JPy10NgvDlRAvjPs9bGIns1uQxzcck1DcLCTZc8PVxNKE6Djr1gXrycn44hfm9pvBo85YdJblmsPYJhUnSVBCfu0XctbwYbH9BMKavj9El4LgNJm4CPVlsDOY%2FZkAne15uEV0upPe9aXZvVbz3IOdF30gUXVzzdohMHEvskAjIDFquE3AxZzhTWbaRW2kjuVGGwD%2Bv%2B9%2FY95fiCKKMjh%2FctwzwdOoN80U50KT1LNwOvuteK%2Fy1mUw98q2xAY6pgHVqqjDd867Z7Oc8PULXk7SpKKj6Yjyt%2FwROLF1XggvAKnZn4MfOx6p2t6HXoIN0m6LEk4BMwZa1vFLZ2MpDj7WgcdRk92nNMAKco2SrgxXlCt%2FrBs7vnDevWZkNpvdud38qjJyRvM8lYPb4tmvbT71xDEZWnGthFO0XljspkoXpKag5vcDb9yeWKdBZ3I4Mertzi5nxv3wyT2kMY6v9oKsAsmDzTSn&X-Amz-Signature=bbd71a2b90146f8075f61d27d33d7304a268c52a2c3bef1c7c78febac842c3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
