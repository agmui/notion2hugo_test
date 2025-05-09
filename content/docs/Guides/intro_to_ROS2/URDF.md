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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABIIJPE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF9lZm2m2tKspqIT7Q6rZlBXpslQR70E%2F5zLRHWH3hRwIhAMNgNaWPwNFgq%2FEoqOLUpiw%2FD%2FVeeMRNxEq%2BfCMj8ZaKKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwms%2FFxv8HgoXSMTowq3ANa2XM%2Fo8oLSv8ImvQ9a0ei6hIYlA1ICswEAnMJ%2BpGj3kKuMpmFyRggS89A8WjOPU%2FvzgfUDJAR78eexIbMlGQanca0SFMBXn3SV%2Felq4Oy6beo6fYuZMf%2BtpWt9dpEWv1EHhiVa7LU8karkFZThs5qeQK05Q251ru3RLzVpbt3HtfW43VG3QpBeByo9%2BGtuvsUNVA67tqSk4COReebP3UTy1k6nHSwubmlDcHeKwMgrCS46rvd28Fm6Swkeuw2fTwLeRA91tSi%2F5rwynr7BL6vjjXJPZ4S8A5zsadK5kl6r2xmT7l5l%2BxC2ZTEKi3zXWsJMOOj9vzjzwR%2BaaN33NbE2Y9TdzROrp4I%2FwurMO8kM1uHO23nk7DuBYg%2BQuIZl0LpdEBqyXlJlzkhxLC1Ed1sYcRqGGoHUwBu74O0%2FhkrbJMWFNUZUcXqHRiWKret5%2FCnalPXorWUCXkNWNb9zM6YFPkC72VkFUP0g3RWZzzyqvacN869ZPqeUjVH8uC9DtfMI%2FB4AifJrSuk5CRTpi%2FJ4TgDlh%2FeQjwlJ3sDR9fARBTWyr6a3e%2FoQbPuKua%2FRuUIDiCrpcETcoG9nKxotnuOqGaJZO6rVkjpT6DAALtZyygbyfMd32kBjxMnjDC%2B1%2FjABjqkAXbSiZ0EdAOSmyb79kiDcjN0vyxCfg3yuttJ8KtEny2gvCOD%2B4twiw5S4h8f%2B%2B7QV8HN2FKvd5by%2F3gI7wrs75VeKLJ6UogxXua3%2FbncAsBufjsFWnOtNHGNRWX%2FPQVW8bQarOWJKuexKt28JUi7Rr0Wc0Qn3dv3%2B%2FdXHi9H39Fn0rlz3ibD3OKsy6vsuluG77csxQHx4M2NDGD%2B%2BwF4fyxCRdUj&X-Amz-Signature=a821d8fdcf467350bea71000ecb62ef60f728836fb377a2a91a307a2c4479112&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABIIJPE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF9lZm2m2tKspqIT7Q6rZlBXpslQR70E%2F5zLRHWH3hRwIhAMNgNaWPwNFgq%2FEoqOLUpiw%2FD%2FVeeMRNxEq%2BfCMj8ZaKKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwms%2FFxv8HgoXSMTowq3ANa2XM%2Fo8oLSv8ImvQ9a0ei6hIYlA1ICswEAnMJ%2BpGj3kKuMpmFyRggS89A8WjOPU%2FvzgfUDJAR78eexIbMlGQanca0SFMBXn3SV%2Felq4Oy6beo6fYuZMf%2BtpWt9dpEWv1EHhiVa7LU8karkFZThs5qeQK05Q251ru3RLzVpbt3HtfW43VG3QpBeByo9%2BGtuvsUNVA67tqSk4COReebP3UTy1k6nHSwubmlDcHeKwMgrCS46rvd28Fm6Swkeuw2fTwLeRA91tSi%2F5rwynr7BL6vjjXJPZ4S8A5zsadK5kl6r2xmT7l5l%2BxC2ZTEKi3zXWsJMOOj9vzjzwR%2BaaN33NbE2Y9TdzROrp4I%2FwurMO8kM1uHO23nk7DuBYg%2BQuIZl0LpdEBqyXlJlzkhxLC1Ed1sYcRqGGoHUwBu74O0%2FhkrbJMWFNUZUcXqHRiWKret5%2FCnalPXorWUCXkNWNb9zM6YFPkC72VkFUP0g3RWZzzyqvacN869ZPqeUjVH8uC9DtfMI%2FB4AifJrSuk5CRTpi%2FJ4TgDlh%2FeQjwlJ3sDR9fARBTWyr6a3e%2FoQbPuKua%2FRuUIDiCrpcETcoG9nKxotnuOqGaJZO6rVkjpT6DAALtZyygbyfMd32kBjxMnjDC%2B1%2FjABjqkAXbSiZ0EdAOSmyb79kiDcjN0vyxCfg3yuttJ8KtEny2gvCOD%2B4twiw5S4h8f%2B%2B7QV8HN2FKvd5by%2F3gI7wrs75VeKLJ6UogxXua3%2FbncAsBufjsFWnOtNHGNRWX%2FPQVW8bQarOWJKuexKt28JUi7Rr0Wc0Qn3dv3%2B%2FdXHi9H39Fn0rlz3ibD3OKsy6vsuluG77csxQHx4M2NDGD%2B%2BwF4fyxCRdUj&X-Amz-Signature=adca824c653995dd55f2b87e7687e65effcc7b174357aff08627938b615fb627&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
