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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBCHGRC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8KYtIPQBLTEV%2B2vdMZudIb4%2BFylkGGSTuK4BMmjbHAIhAOBBSNi3WXnz%2F8xG3wz2mj%2BgsLhdBTYXC8GbGSejcjz2KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZhw7LT%2FWtX6ag%2B6cq3AMP9iKEG8d3V1i%2FZ1ZVl%2FU2vESO8RwOKY8ZlwuM%2B5pNyKVm3sVeSvTPMRYv0dY7FWNdoXen5BYDhpEuJ3wzCPzH4r1mlUS3VESxJsKs49OnDtpnshyEUQ%2Fc0lTt9CnpfGHx84UjoujT%2BtbC7unt%2FbjKP%2BAy04K28f2l8z7LUlG2hfRKK%2BwAD36IhXj2wcdSpCWTbSlyr8Jrj2H29rb%2FtS%2BuPcxE6eZm7%2F65pzNGFxEAdc1OHdHC3Hp0J1%2BR%2BJgZZbX23lKo31nUIYxP%2FdxyiAi0O%2B%2F3Z4ebgnBDVmEAVywj3wd4B%2F5SsxxufbL7%2FzkDQbZgXgf2ChVAaTvmA%2B4tkd5ScMA%2F0c%2F4VrzClVmktMF9EXNahiO%2FJYa%2FDYDDm9DL1HLdqVz1J%2BsW1BjsCoPD0vAm7MAHVeDc2p0dWBDub8NwYsyTZY9aNYwi0gH3hjmyNG1Fpoe9GW6U3Rf5envTG5g1QdzJ8z175u9R%2FKVGer8ZJ%2FDzbmoALpozIbkXps7n6yZGkW%2BSGg7DArWibHooMejhxPAsWLqcbbt%2B4Vhqzh40iDTu2Mfb6UK%2B7W48OH0I8HfQMQ0LFSa04xb163Sb1vkvxBRm6JYEr1%2FOCMyBwJIWYFhLzOylIaR5oWjqbjDs2em8BjqkAaYaxLikcNoJKLRW2JN1KpXi6%2B0BIPgqfFVhSaTh%2Bjo06pO3s5Q66mRSwL6bSO5cOfwE%2Fu24eC3HWm%2Fvh2AittrLNc5%2FOl%2BH5nasHNPKqjVDrWsdy%2BuhAztAVQBwmVZKzjI%2B4qOtxv0C7C7fg9elCcC1oJYjW%2F8Q%2FWnNToAXaAf2%2BQn2v%2Fn3MBai0Pw9srQyZGs5uWCWwE4ktoJzKhrQwQmFjNTV&X-Amz-Signature=030a83533fe276d536abb7fcf6d062c181bea55bdfaa7fe16be123f5c70e5146&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBCHGRC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8KYtIPQBLTEV%2B2vdMZudIb4%2BFylkGGSTuK4BMmjbHAIhAOBBSNi3WXnz%2F8xG3wz2mj%2BgsLhdBTYXC8GbGSejcjz2KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZhw7LT%2FWtX6ag%2B6cq3AMP9iKEG8d3V1i%2FZ1ZVl%2FU2vESO8RwOKY8ZlwuM%2B5pNyKVm3sVeSvTPMRYv0dY7FWNdoXen5BYDhpEuJ3wzCPzH4r1mlUS3VESxJsKs49OnDtpnshyEUQ%2Fc0lTt9CnpfGHx84UjoujT%2BtbC7unt%2FbjKP%2BAy04K28f2l8z7LUlG2hfRKK%2BwAD36IhXj2wcdSpCWTbSlyr8Jrj2H29rb%2FtS%2BuPcxE6eZm7%2F65pzNGFxEAdc1OHdHC3Hp0J1%2BR%2BJgZZbX23lKo31nUIYxP%2FdxyiAi0O%2B%2F3Z4ebgnBDVmEAVywj3wd4B%2F5SsxxufbL7%2FzkDQbZgXgf2ChVAaTvmA%2B4tkd5ScMA%2F0c%2F4VrzClVmktMF9EXNahiO%2FJYa%2FDYDDm9DL1HLdqVz1J%2BsW1BjsCoPD0vAm7MAHVeDc2p0dWBDub8NwYsyTZY9aNYwi0gH3hjmyNG1Fpoe9GW6U3Rf5envTG5g1QdzJ8z175u9R%2FKVGer8ZJ%2FDzbmoALpozIbkXps7n6yZGkW%2BSGg7DArWibHooMejhxPAsWLqcbbt%2B4Vhqzh40iDTu2Mfb6UK%2B7W48OH0I8HfQMQ0LFSa04xb163Sb1vkvxBRm6JYEr1%2FOCMyBwJIWYFhLzOylIaR5oWjqbjDs2em8BjqkAaYaxLikcNoJKLRW2JN1KpXi6%2B0BIPgqfFVhSaTh%2Bjo06pO3s5Q66mRSwL6bSO5cOfwE%2Fu24eC3HWm%2Fvh2AittrLNc5%2FOl%2BH5nasHNPKqjVDrWsdy%2BuhAztAVQBwmVZKzjI%2B4qOtxv0C7C7fg9elCcC1oJYjW%2F8Q%2FWnNToAXaAf2%2BQn2v%2Fn3MBai0Pw9srQyZGs5uWCWwE4ktoJzKhrQwQmFjNTV&X-Amz-Signature=04f965a6caab95221b9169aff3cf53e9bb086344061394c13c7fd66b00517895&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
