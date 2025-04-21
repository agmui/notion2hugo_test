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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMZGWSB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID3OCElCP9xzIkf%2BgZpnq01FvYutPDRelyyNhmOLqHLDAiBURRw%2Fn%2FNgGtOuSWUD%2BPaxhxxiL9%2B6XAHdYonzbZ8NXiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VEvQ7Y90%2BSuFaYxKtwDwbpIJT8sN1yBO1VlbCBd55yQ99XX6Eo%2FvjJY5KBVBnksOuf41krMg%2FDS5ETA2mAhC%2FUqmLN8WNX0EioRP256OQz5qJxDj%2Blidf9OLf6Brh%2BpcNTP69Ih4AGrCWAlK1OksgGQIR53x0jMWmx7nbDHOh9ObbYgTG91V4RFWw%2Br8yKGlY%2BEJmzsBIqWgwMDXORWAwh2qxs30r%2F2GWqu4vYEwWobKfQ6ulGQM5ayZnLEKR2bjtE0m4o7kBe1arVJG%2BQwGxNM7vBrtWVA3tnaDBpzE8C7%2Bk0VSsbIvCS%2F3lXljuXeuIdA12ogDC4zpCOR31udGvd%2FOQPqO7DfUCIQvjliRmVu4Cb6XGD00l2isOvX6ZF0fqSf5KcMwMjHwjH2TmAP53VelUAWYWqCvRlLp3NAO0gtJmmmZpeeGk4HuY0a2bighwkDHQe1PNp6AIE74ynU84gargDErD1GocN3aVJTzfmehkR8ovkWTbhS1S9ea29M6ekx3ChCXzmhX6agnRpPgEkwX9%2BTlotor%2BS%2FLFsBzcKcqOX9QBkJaQUYHFpN8OJaqDL2ISCylZiXBvLP47jbu20ulMZ0ba80xiM7Y0DXE9iKRi1OEobb7BEvde%2Fgdn7OGNooWZfWh%2BpzlUgwioWawAY6pgGnNYCak4RT0JoakRQXDNSbrXvQRxfuhvbOLdyhStRER%2Bmw3dORV01awtCgt9sWoEc%2BbTYvaXUDPVvFXqCOTW1jElQeBXhr8hvZ%2FW7Akq0k3uPbF4%2BwUP4qhEdLDJKQof0FHRuAKuhw2D%2B92sDuszB1c9SfpRaa1dGLVlUqUDF6gWnPXosz%2F%2F4rd1s8FZ5i%2BkIMl%2B9gqlpgU%2BjmGS7eN0A4Lbjw%2F5vv&X-Amz-Signature=3ee04063a691abccbcbacedae6ddb032698bbdbf035da9fe888b9f75854eb0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMZGWSB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID3OCElCP9xzIkf%2BgZpnq01FvYutPDRelyyNhmOLqHLDAiBURRw%2Fn%2FNgGtOuSWUD%2BPaxhxxiL9%2B6XAHdYonzbZ8NXiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VEvQ7Y90%2BSuFaYxKtwDwbpIJT8sN1yBO1VlbCBd55yQ99XX6Eo%2FvjJY5KBVBnksOuf41krMg%2FDS5ETA2mAhC%2FUqmLN8WNX0EioRP256OQz5qJxDj%2Blidf9OLf6Brh%2BpcNTP69Ih4AGrCWAlK1OksgGQIR53x0jMWmx7nbDHOh9ObbYgTG91V4RFWw%2Br8yKGlY%2BEJmzsBIqWgwMDXORWAwh2qxs30r%2F2GWqu4vYEwWobKfQ6ulGQM5ayZnLEKR2bjtE0m4o7kBe1arVJG%2BQwGxNM7vBrtWVA3tnaDBpzE8C7%2Bk0VSsbIvCS%2F3lXljuXeuIdA12ogDC4zpCOR31udGvd%2FOQPqO7DfUCIQvjliRmVu4Cb6XGD00l2isOvX6ZF0fqSf5KcMwMjHwjH2TmAP53VelUAWYWqCvRlLp3NAO0gtJmmmZpeeGk4HuY0a2bighwkDHQe1PNp6AIE74ynU84gargDErD1GocN3aVJTzfmehkR8ovkWTbhS1S9ea29M6ekx3ChCXzmhX6agnRpPgEkwX9%2BTlotor%2BS%2FLFsBzcKcqOX9QBkJaQUYHFpN8OJaqDL2ISCylZiXBvLP47jbu20ulMZ0ba80xiM7Y0DXE9iKRi1OEobb7BEvde%2Fgdn7OGNooWZfWh%2BpzlUgwioWawAY6pgGnNYCak4RT0JoakRQXDNSbrXvQRxfuhvbOLdyhStRER%2Bmw3dORV01awtCgt9sWoEc%2BbTYvaXUDPVvFXqCOTW1jElQeBXhr8hvZ%2FW7Akq0k3uPbF4%2BwUP4qhEdLDJKQof0FHRuAKuhw2D%2B92sDuszB1c9SfpRaa1dGLVlUqUDF6gWnPXosz%2F%2F4rd1s8FZ5i%2BkIMl%2B9gqlpgU%2BjmGS7eN0A4Lbjw%2F5vv&X-Amz-Signature=5d4f5c9dca47811e3e5c7ba2eddf260b19d81a9ad4600d5e86a7ecb9f6f26fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
