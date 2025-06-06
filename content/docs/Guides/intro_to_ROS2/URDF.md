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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZFMYLA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBve7rYMLwmB1znq9wJ1GkKsBr%2BzsFFrHLDu9H9khzI4AiEAiTj%2FeBQZyJvuiy9tk8FyF%2FxXzUGfAjFt%2Fm3t%2Bfavz3Eq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDXoZ1UPGSxurtUaOircA22rWdNj0ofGpuCdhRjVkXRQtThJP1Vx2lVQG9XRnHCgMhF4x5zrNKY%2B7K31P%2FuJNu8V%2FyIyaC%2FRFwpS4bHBUX9F7fAbR%2BomsQWLY8S9bCYBQnZGHEOM5%2Fv9Rt8acEhSsUpBbbMtuQlaTDsEjUDU%2BMQYdaoFn3nseoAvRnekZfaeHI05trmLPgy%2F1i4PS4E07s8X7jt5beNYsxXW1jmtTcEpmVtiT%2BLvAyw9%2FAT6xKX4ujNIhpUZE2qW7dpx6UyAESLaanDmE0RyYpcWM5Ij9bsRVoANppGkId8pVw9lK2V5Qrv3Vs2EswsJnGkgb232hnTQ%2BtVEz805l%2BHjxnb88A%2BOHhNJkAGGHhaWcuZr8jUiT%2FZ4VSL8wdHumDfXsTvSgorZCAjpp08aI2TG14TPXn3fYE8R4iAdc5iAAqG1H8QZxG7R28Hk70jrXg8j5dJ78tI%2B%2FmhOx8K8P9N8cBBIPn8QVcgAfNYKrklvFlkPvQ4tQFJbPpanD1ZHcoGP4V%2Ba%2B6VSnu3NWje0On%2BqXN5A3k3c4SXeuzkbsxYewzJDn0pm7rIegD5il2bKUDlK3zKEdRE1EqhMOjjUJV3%2BWAOru3DPJTpdKOmslJ6Fq6684Qakl1D1M5xAMIqz568qMIS%2Bi8IGOqUBIN%2FdXx%2Bq0RwoJCDum6ykQIIpLV5mvA56zeHtKaohQ89QU0xOj%2Bu%2Bt%2BQEs5Z02zUzpZ2kLunpDGQ1%2FOaEqwxBn5awG%2FUXnaDRZxigAldEesTT20ZazXDle7hs%2Fd5d3s1eXdXJbXddjx%2BefdX%2BEPspY3FRR2t1B1ObWzNu5pp%2Bi7BFCpFxEoTy3LLUdNmre4eYWmHsFiEElZthimMxyncWvpT0pvi0&X-Amz-Signature=8c047cc4c474e04f35fc77177577da1ab6d464bdc345a5b2be248146de195a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZFMYLA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBve7rYMLwmB1znq9wJ1GkKsBr%2BzsFFrHLDu9H9khzI4AiEAiTj%2FeBQZyJvuiy9tk8FyF%2FxXzUGfAjFt%2Fm3t%2Bfavz3Eq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDXoZ1UPGSxurtUaOircA22rWdNj0ofGpuCdhRjVkXRQtThJP1Vx2lVQG9XRnHCgMhF4x5zrNKY%2B7K31P%2FuJNu8V%2FyIyaC%2FRFwpS4bHBUX9F7fAbR%2BomsQWLY8S9bCYBQnZGHEOM5%2Fv9Rt8acEhSsUpBbbMtuQlaTDsEjUDU%2BMQYdaoFn3nseoAvRnekZfaeHI05trmLPgy%2F1i4PS4E07s8X7jt5beNYsxXW1jmtTcEpmVtiT%2BLvAyw9%2FAT6xKX4ujNIhpUZE2qW7dpx6UyAESLaanDmE0RyYpcWM5Ij9bsRVoANppGkId8pVw9lK2V5Qrv3Vs2EswsJnGkgb232hnTQ%2BtVEz805l%2BHjxnb88A%2BOHhNJkAGGHhaWcuZr8jUiT%2FZ4VSL8wdHumDfXsTvSgorZCAjpp08aI2TG14TPXn3fYE8R4iAdc5iAAqG1H8QZxG7R28Hk70jrXg8j5dJ78tI%2B%2FmhOx8K8P9N8cBBIPn8QVcgAfNYKrklvFlkPvQ4tQFJbPpanD1ZHcoGP4V%2Ba%2B6VSnu3NWje0On%2BqXN5A3k3c4SXeuzkbsxYewzJDn0pm7rIegD5il2bKUDlK3zKEdRE1EqhMOjjUJV3%2BWAOru3DPJTpdKOmslJ6Fq6684Qakl1D1M5xAMIqz568qMIS%2Bi8IGOqUBIN%2FdXx%2Bq0RwoJCDum6ykQIIpLV5mvA56zeHtKaohQ89QU0xOj%2Bu%2Bt%2BQEs5Z02zUzpZ2kLunpDGQ1%2FOaEqwxBn5awG%2FUXnaDRZxigAldEesTT20ZazXDle7hs%2Fd5d3s1eXdXJbXddjx%2BefdX%2BEPspY3FRR2t1B1ObWzNu5pp%2Bi7BFCpFxEoTy3LLUdNmre4eYWmHsFiEElZthimMxyncWvpT0pvi0&X-Amz-Signature=f331acbdc621483e8fefd8782dc82be2542f7449fb0a31442338c2529b68b642&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
