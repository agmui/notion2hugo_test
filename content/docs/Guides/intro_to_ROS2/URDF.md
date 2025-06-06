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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYEO63Q%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnc9YoJU3QkupfTqXQlj5T4z7jitucbLPNAQ2hcBLG%2BAiEAnNIbUZSydunT006imQ7kuMlI5mh%2FZtf4%2FcoEoPGFWY4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGz%2BTVt%2BMTkp6tIB3SrcA%2BlwNpQ4aPb2CaBxtwi3vyX6ssxjZB9n3JaLf0PUf9zRH7m0sV5RxVkUSiPtuFFK6jlnzDe%2FMnvppwCFa%2BvkzFRfc8fTDr7hIL6aD06oNrfXTIpR0C0k0H4hkkAm6vVIwfSjXSPWt1gFwquoNZ8bdl07Hji82rEzpkGKqYLON%2FtSr0Ywx3hHKMDI4f7uxxo4fOvwY0REJhUgqRL7nk2F8cay2e2XOusYf08cBdy7RMrJRHG1r44Y6f4lwdy41OTgjKOzpR0nLdbo2LFEYjnAy586NvszQRXUMXy%2FsAKr1VtARxL80BVAf2ckFkvAkqK57iaSAodWS9GFaf53BVAdXbmu1u8J8lbLurmoAeTkpcEb0fvcSTSMIbJ4RPWJT6qSyHXe9prYnrrrVMku%2FEfB2O2HWaJQm3pIAnXpCVSt6gPeCvOMrbnVJrSW2AozLi7fWV%2F4EEgD%2FdNMJxtQ4NHClz5BB9LJhUu2AdUBtkwYXgnhynNoNJ1MX%2BEWES1Y1maF7rQ%2B0VzZ5xyZpf2EO1M008euAbak%2FhC9t7bMIKepZ0N3AFM%2FqJTI3y32NOWIwq6CRVTv3Fz1%2FyQo5owdTqVzBHnhgzDHhTlGGgY59H%2BokiE99X6LbYGxXL5jwA2KMIySjcIGOqUBbM0i9e30KHFZQ8lufHMdzeXZfEK4f5zZCaZIOnXh4tIj1T3R%2FM9Rk1EypPMWwJiFf%2BPuBqqrYWKDjSnl5gy6u%2BsM2SvXL5%2FgAdS6Goz0CLbrCT9wdGv1jk3ccRSlbU8ujuY2KkkXKKsgRh7Il0MBFfwLKv6nYAwwTk95CEaOKcrfdHR4kNqVBhMyCTxxtBDqjCHWdw95XRuzP84szlzELngLzoS0&X-Amz-Signature=5b7ad81bda35cbcbf1bc6fbaf0b55953c00fb3fb532e0a30e6b73fbec7178973&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYEO63Q%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnc9YoJU3QkupfTqXQlj5T4z7jitucbLPNAQ2hcBLG%2BAiEAnNIbUZSydunT006imQ7kuMlI5mh%2FZtf4%2FcoEoPGFWY4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGz%2BTVt%2BMTkp6tIB3SrcA%2BlwNpQ4aPb2CaBxtwi3vyX6ssxjZB9n3JaLf0PUf9zRH7m0sV5RxVkUSiPtuFFK6jlnzDe%2FMnvppwCFa%2BvkzFRfc8fTDr7hIL6aD06oNrfXTIpR0C0k0H4hkkAm6vVIwfSjXSPWt1gFwquoNZ8bdl07Hji82rEzpkGKqYLON%2FtSr0Ywx3hHKMDI4f7uxxo4fOvwY0REJhUgqRL7nk2F8cay2e2XOusYf08cBdy7RMrJRHG1r44Y6f4lwdy41OTgjKOzpR0nLdbo2LFEYjnAy586NvszQRXUMXy%2FsAKr1VtARxL80BVAf2ckFkvAkqK57iaSAodWS9GFaf53BVAdXbmu1u8J8lbLurmoAeTkpcEb0fvcSTSMIbJ4RPWJT6qSyHXe9prYnrrrVMku%2FEfB2O2HWaJQm3pIAnXpCVSt6gPeCvOMrbnVJrSW2AozLi7fWV%2F4EEgD%2FdNMJxtQ4NHClz5BB9LJhUu2AdUBtkwYXgnhynNoNJ1MX%2BEWES1Y1maF7rQ%2B0VzZ5xyZpf2EO1M008euAbak%2FhC9t7bMIKepZ0N3AFM%2FqJTI3y32NOWIwq6CRVTv3Fz1%2FyQo5owdTqVzBHnhgzDHhTlGGgY59H%2BokiE99X6LbYGxXL5jwA2KMIySjcIGOqUBbM0i9e30KHFZQ8lufHMdzeXZfEK4f5zZCaZIOnXh4tIj1T3R%2FM9Rk1EypPMWwJiFf%2BPuBqqrYWKDjSnl5gy6u%2BsM2SvXL5%2FgAdS6Goz0CLbrCT9wdGv1jk3ccRSlbU8ujuY2KkkXKKsgRh7Il0MBFfwLKv6nYAwwTk95CEaOKcrfdHR4kNqVBhMyCTxxtBDqjCHWdw95XRuzP84szlzELngLzoS0&X-Amz-Signature=0b60e96a4475963603a73db23d29aef82f3932246b9626f9f4f93d0e92d85728&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
