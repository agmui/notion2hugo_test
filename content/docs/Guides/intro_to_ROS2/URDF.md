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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJXJT5B%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpdMY4ogUy6dgiOh%2FEOdJ0gIPh%2FsSKZyGNebeZTzVbwIhAP16x3IXKlfT6%2Fp%2BalfEuP%2FXjTZP6A20mv2Yme0vhsphKv8DCDcQABoMNjM3NDIzMTgzODA1Igy8ZZPI8SruRhRe4H4q3AONmrR%2BjJg0koVuOZgZ1yek9ax8H1z%2FtkC654EoLF5Ery5SzJiiGe9UvfmxrhvN1nyPVPolNiSOpcA8JB4ZKyeAEXlnRP74lb0%2BJQQJQKe82euaoYnENnaMZyMBxfr6%2BzJ0FqN29FGV9cjQEdmYp37CFgIkcvvHyyhO45onAuB67qH5Xw5sUi3mX09JzkEVvLFTNDAAu6o1Tk7Oy%2B4b0XYK3iDSSJexbec8erfScuSGFYRRPBAtflbPELm8SZc3uKKCWxbPNkhiYJKeZqoDuRuqd7eJ1DYaFIlzZuSS4RArujkEX%2Fj1be%2Fqwxr56iS2SbdUjPu7HrlCruYdUXZQK0gXyKbBuphzZRrXP6pKVZINXVRMFABj9QdTER0UzWXbuHPCO%2F1AqPlPWR7V1slYm4JfhrJ8CHuHpYVfuEO7l1tPU2a6BSc6%2FOilXnDCzrEEgF0Ze9%2Fq3iWsYOFzSG1b4ZMv6liWcavqL0wXxbNMGh3wF5sOC8dAbEkXmpXJRsKRSPBws6U8TlkHmPyXn8TkTHhB83lVGtd7PJyeofv5CD5pWZzhuVWRUxmDcdmCc9EVu7h0%2FaOPUQvYGr72yhg1jtyld46dabCXPkQp7VFdVUC9lPqeGk1MqMRbVy4YszC7nd2%2BBjqkATd8V4VlUIpApFH2SIwJ4OSBOaGSuvLLyp4Pp786Osb6WSG6s6e9SMq1sUbTyTCLVsuOlIYH6b8MFlEv8Lf81WhlhWfq6xHCg1PIlg39A8z0XksfdhRzOYzd%2F9JJRIRaUvcHhAhj37xnsMSpIzrRl5%2B1%2BqXShD%2B3rrRkab3CndatNC%2B75qUUnDiQREunG7ybws0ENsgooWvnbvO995EH88vG7P61&X-Amz-Signature=c226e15dd722e34dab89cebeb5a213aca6f49757d6f3a4dd5000a772e0af79f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJXJT5B%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpdMY4ogUy6dgiOh%2FEOdJ0gIPh%2FsSKZyGNebeZTzVbwIhAP16x3IXKlfT6%2Fp%2BalfEuP%2FXjTZP6A20mv2Yme0vhsphKv8DCDcQABoMNjM3NDIzMTgzODA1Igy8ZZPI8SruRhRe4H4q3AONmrR%2BjJg0koVuOZgZ1yek9ax8H1z%2FtkC654EoLF5Ery5SzJiiGe9UvfmxrhvN1nyPVPolNiSOpcA8JB4ZKyeAEXlnRP74lb0%2BJQQJQKe82euaoYnENnaMZyMBxfr6%2BzJ0FqN29FGV9cjQEdmYp37CFgIkcvvHyyhO45onAuB67qH5Xw5sUi3mX09JzkEVvLFTNDAAu6o1Tk7Oy%2B4b0XYK3iDSSJexbec8erfScuSGFYRRPBAtflbPELm8SZc3uKKCWxbPNkhiYJKeZqoDuRuqd7eJ1DYaFIlzZuSS4RArujkEX%2Fj1be%2Fqwxr56iS2SbdUjPu7HrlCruYdUXZQK0gXyKbBuphzZRrXP6pKVZINXVRMFABj9QdTER0UzWXbuHPCO%2F1AqPlPWR7V1slYm4JfhrJ8CHuHpYVfuEO7l1tPU2a6BSc6%2FOilXnDCzrEEgF0Ze9%2Fq3iWsYOFzSG1b4ZMv6liWcavqL0wXxbNMGh3wF5sOC8dAbEkXmpXJRsKRSPBws6U8TlkHmPyXn8TkTHhB83lVGtd7PJyeofv5CD5pWZzhuVWRUxmDcdmCc9EVu7h0%2FaOPUQvYGr72yhg1jtyld46dabCXPkQp7VFdVUC9lPqeGk1MqMRbVy4YszC7nd2%2BBjqkATd8V4VlUIpApFH2SIwJ4OSBOaGSuvLLyp4Pp786Osb6WSG6s6e9SMq1sUbTyTCLVsuOlIYH6b8MFlEv8Lf81WhlhWfq6xHCg1PIlg39A8z0XksfdhRzOYzd%2F9JJRIRaUvcHhAhj37xnsMSpIzrRl5%2B1%2BqXShD%2B3rrRkab3CndatNC%2B75qUUnDiQREunG7ybws0ENsgooWvnbvO995EH88vG7P61&X-Amz-Signature=eb632da1aac1b1d8e48489321cb4d029faeff7532e5b79492d594a1818f86a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
