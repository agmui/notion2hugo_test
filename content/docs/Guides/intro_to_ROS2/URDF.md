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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRJHR4M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDJKT6iDPy6BI6ycsbyrdH7MU%2BEF2DWx4FgoCeW%2BBCS6gIhAPrszPlgrVy2kGY1pUi2Vb9JrmMOban9sIv1HFBMEw0xKv8DCC4QABoMNjM3NDIzMTgzODA1Igzrtc%2BY%2FmiAbpI3aNEq3ANQZsCpXM8P%2FQ2%2F7bA9zSDlfjV6Tp3bnPB7p6ly6IvFIG5f0FFcjD7SXs0oIGkOo5EZ9nINIShugZ0AlKuUGQ9NyAJuMong4w7AVipkijVwGzCS69pYiLzPUyzNgI%2Fzm%2B%2F8G2Gvj%2FIjI%2FJbbfNLN4CwvMGlcvp0bBhKthm4v3tBMOput21X13v48E4bsK6wLHmqSpJwbEVHRKVVfU1pjCeiFks9ZZY7yeNWHU2IDVBoIubUmJq5mL0pvCniQENKwG3PDjMK6aJoQQMSnHbk5BFl%2FqDiwRwRQ3UZqWs7bm9lspBMBi74E7Az3WUmdZaPz%2Bju88ZobjosuceBgrE5QuD8ig2Ks8UqwMB8a6kPVjG2jxSGaZq81SiDFbItg%2FvURasyYMldnHpoVRAukxrE9f%2Bz2GmCEcLxYhT96ufPUx6zYiZPnkD3OyU5Z3C05ZCtFNeJkko2%2FbO3uJnjDum4YdElMd4b748ASvWeuA98x6vF4nb7%2BMyBvKarKBjLERbg9%2Bj%2F6qkiwAGwE6wqj0DnbQjUGguL0SdGZzCOUJQUgUQfj%2FxN8ULB5o7T7M1Li%2BkIqNwHuQAT0tANpKhMZDUkd5o4UiL3FqGOnyKnqX60jUIhnARE0xHrbR5YrkGTzTD52YjEBjqkAR%2F0HxdgZmZfSYixpKLupUpBzzY1pofj2slPPWNYw0VrTG2B%2Bn4jlB3YBvtZ2%2FMwjHNVx3%2BHDYS0vow%2BBN7XlsrEeakqv%2FziLaeMmR5VeYVZUWdMaK0W2VOXqTtLN0d7cHDCADj9ZY7yBgPox7WKxQkA6lNVNswOeU6SaMk9U%2FwWOzPsmoSPEuVQTN30lsVyztKjbrkx7cXJvJAGHtIfY9KuJow%2B&X-Amz-Signature=245fa7daad4c254e175e76d080ed5412db481bc4a6a665c1515009b73e1e5e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRJHR4M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDJKT6iDPy6BI6ycsbyrdH7MU%2BEF2DWx4FgoCeW%2BBCS6gIhAPrszPlgrVy2kGY1pUi2Vb9JrmMOban9sIv1HFBMEw0xKv8DCC4QABoMNjM3NDIzMTgzODA1Igzrtc%2BY%2FmiAbpI3aNEq3ANQZsCpXM8P%2FQ2%2F7bA9zSDlfjV6Tp3bnPB7p6ly6IvFIG5f0FFcjD7SXs0oIGkOo5EZ9nINIShugZ0AlKuUGQ9NyAJuMong4w7AVipkijVwGzCS69pYiLzPUyzNgI%2Fzm%2B%2F8G2Gvj%2FIjI%2FJbbfNLN4CwvMGlcvp0bBhKthm4v3tBMOput21X13v48E4bsK6wLHmqSpJwbEVHRKVVfU1pjCeiFks9ZZY7yeNWHU2IDVBoIubUmJq5mL0pvCniQENKwG3PDjMK6aJoQQMSnHbk5BFl%2FqDiwRwRQ3UZqWs7bm9lspBMBi74E7Az3WUmdZaPz%2Bju88ZobjosuceBgrE5QuD8ig2Ks8UqwMB8a6kPVjG2jxSGaZq81SiDFbItg%2FvURasyYMldnHpoVRAukxrE9f%2Bz2GmCEcLxYhT96ufPUx6zYiZPnkD3OyU5Z3C05ZCtFNeJkko2%2FbO3uJnjDum4YdElMd4b748ASvWeuA98x6vF4nb7%2BMyBvKarKBjLERbg9%2Bj%2F6qkiwAGwE6wqj0DnbQjUGguL0SdGZzCOUJQUgUQfj%2FxN8ULB5o7T7M1Li%2BkIqNwHuQAT0tANpKhMZDUkd5o4UiL3FqGOnyKnqX60jUIhnARE0xHrbR5YrkGTzTD52YjEBjqkAR%2F0HxdgZmZfSYixpKLupUpBzzY1pofj2slPPWNYw0VrTG2B%2Bn4jlB3YBvtZ2%2FMwjHNVx3%2BHDYS0vow%2BBN7XlsrEeakqv%2FziLaeMmR5VeYVZUWdMaK0W2VOXqTtLN0d7cHDCADj9ZY7yBgPox7WKxQkA6lNVNswOeU6SaMk9U%2FwWOzPsmoSPEuVQTN30lsVyztKjbrkx7cXJvJAGHtIfY9KuJow%2B&X-Amz-Signature=9755a521e434481fd4a8c06c72110325ec50ab1384d8583794aec21361c02771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
