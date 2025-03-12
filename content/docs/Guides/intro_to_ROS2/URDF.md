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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7VFXSLE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDvxFTQuZ4iZGSIroyrZ%2BHZT4B8MfBCnMT6l6igYop7vwIgJb4nEhrGFu3FK5c9bVZ8CAwPMPfSfZeCKeZS4VkVkLkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGPqxDzltCFsL43qCrcA3RbOi4H2R4GmfHd5VDQSIxJw5pDJBv2h2zo1sMxZnNMZDMyKlbsXS%2BsfKdTeUYQwpXlbwrxKt7LGyzQcnoMDl%2FaVL7JI6YoyXMZYhcmri8hbw43%2BwLwyaBaqSFgA%2FNMjV3nnk%2BLp4ni68d4XVbpFBHsfaK6B7RTSWFRB4vEh5HNr2Fz2rTA5ZQc5Y8fI98lbwbarBqMeJAFWituOaqzKpaEMtcAeoKHmaal2tE6rhou%2F%2FxqQ1ctHxoQ4t04EiMMV8ROc0p2U9BmaS40gBmOxPIs236YnEf8mkNY5%2FaotGaM3PEKiZHCFdZ15c%2FUUk4P7n65RlnZB2jNp6Hd7A2oCoO4gh7zKpHcLccXXPVAvD%2FUPuftCdSXi5Ifv2bJPKwukEWzic3bC6O4v%2B6NbWzXZGSz8EJq9VwNFnWvMXBCdMb%2B2ooO39SFO7ZCotKRSD%2FIjyR3M2cw63E3NAFLLEVrfO3%2FTrrvxHQcHnAgrLw2enLFGIR8AqGKgUYcj2IflZ6EPNJBI%2Bv0ZYnSQc3c5OVO2IyOpZVd4fB%2FdWi9KFuD6Q2eyZ6k2VQE6p19bjQzsCAlH8g3OWA%2FkEPzub3saF%2BUbhLrdVFYnGwV8qgt8DI0EeRkS6fwHECEd0W55OtoMJabxL4GOqUBH5tQRfUkU4PQnPuX45DGVRIc7GXVOaD0WMfobKKnO1gccqgS7CHuzBLKN%2BpKW8O1l3pN3Sy47yj8GZJVBWWYRU0ahTcc2ZmF8v88wniEdom95bzOsRFqQK8kvyjk%2FrDElKPZ0tBmDmP0gT7aPsM6h%2BUnOBAkThH7QI0%2Foa19UnsNBGshvYgsWTbSOn%2F32qJ5wtNzxZcKgZrD8yxZM%2BSvu%2B2TVvpy&X-Amz-Signature=c28d7df44152b8b8f1b354acf0ad08f55ff4d99328b9b167224c7ad87be6e0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7VFXSLE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDvxFTQuZ4iZGSIroyrZ%2BHZT4B8MfBCnMT6l6igYop7vwIgJb4nEhrGFu3FK5c9bVZ8CAwPMPfSfZeCKeZS4VkVkLkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGPqxDzltCFsL43qCrcA3RbOi4H2R4GmfHd5VDQSIxJw5pDJBv2h2zo1sMxZnNMZDMyKlbsXS%2BsfKdTeUYQwpXlbwrxKt7LGyzQcnoMDl%2FaVL7JI6YoyXMZYhcmri8hbw43%2BwLwyaBaqSFgA%2FNMjV3nnk%2BLp4ni68d4XVbpFBHsfaK6B7RTSWFRB4vEh5HNr2Fz2rTA5ZQc5Y8fI98lbwbarBqMeJAFWituOaqzKpaEMtcAeoKHmaal2tE6rhou%2F%2FxqQ1ctHxoQ4t04EiMMV8ROc0p2U9BmaS40gBmOxPIs236YnEf8mkNY5%2FaotGaM3PEKiZHCFdZ15c%2FUUk4P7n65RlnZB2jNp6Hd7A2oCoO4gh7zKpHcLccXXPVAvD%2FUPuftCdSXi5Ifv2bJPKwukEWzic3bC6O4v%2B6NbWzXZGSz8EJq9VwNFnWvMXBCdMb%2B2ooO39SFO7ZCotKRSD%2FIjyR3M2cw63E3NAFLLEVrfO3%2FTrrvxHQcHnAgrLw2enLFGIR8AqGKgUYcj2IflZ6EPNJBI%2Bv0ZYnSQc3c5OVO2IyOpZVd4fB%2FdWi9KFuD6Q2eyZ6k2VQE6p19bjQzsCAlH8g3OWA%2FkEPzub3saF%2BUbhLrdVFYnGwV8qgt8DI0EeRkS6fwHECEd0W55OtoMJabxL4GOqUBH5tQRfUkU4PQnPuX45DGVRIc7GXVOaD0WMfobKKnO1gccqgS7CHuzBLKN%2BpKW8O1l3pN3Sy47yj8GZJVBWWYRU0ahTcc2ZmF8v88wniEdom95bzOsRFqQK8kvyjk%2FrDElKPZ0tBmDmP0gT7aPsM6h%2BUnOBAkThH7QI0%2Foa19UnsNBGshvYgsWTbSOn%2F32qJ5wtNzxZcKgZrD8yxZM%2BSvu%2B2TVvpy&X-Amz-Signature=cac207156ec27e53933b40b95288d3fe18028b8c49d3c6fc545ab8fdade94502&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
