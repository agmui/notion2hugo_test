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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD225SEM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICN755oviK5FVU8Sxus%2FD1XXdH4bEfQWz1lRrhyuJwdLAiA1YniyLm6onATJQrPU45yb5F6BoYbovRfSzUvbIkhkyyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM0zONYtbXzcvgJFLvKtwDiNJSBfGpRAbfI2O6kDbulYp1OYTwTN3GTOBH%2FBZJkSnxljYTzrcxnpZNsqJWpnZ37QkgUlSOE29trzfJ2Qxg6wesP4wyFomAj5cpyWlu9G%2B00rRCbg2exV1H95Wv6Xc3fFmoh7%2BiXyb6ZuiQuY15uhy%2FVEr0Tn4XIUhlSrmABIBja6WgqndN8asSArx6K%2BatjpalHwRoNUxRz4FAr63NO8T%2F6DObmhNGiKcjGjIIrlPqqqODROjexAmBr26s2pyM86c0t0WbWMNB5%2BtyOlsX9%2Btt7eaFG1T%2FFYbDVTmJpRCH8snD2ep4sDvndxaWSD7LVV7zhFF%2Bo5MK5Q9SF14h1oQuJMkP5vGskmmq3yNfqpMDu1oZxr5mecwBjX37tUtsiz%2BYJTZtZldOA58ZHpkZO%2BrUgrQ9TfXud4BrO1r9p7T5La%2Bl88TnDyqhUCTN9B83CUBGS%2FCNjkyyKoWNu5M6W9zDkP03y8SwGL1Ig35jo1dNAYR3agnF4iEYaiYCiB7JJ4poQk8F4okm8s97%2BsumCllJPRO6f7miB4cS7Uf28W%2Fe%2F9KxU6NWFAoLCBQaV07jjwpJtx1vGSKUa4uYU%2BgkDeywvkbqXl39SUUSM7Bma5IOuGhRcNbnK%2BYL9gsw5vOWwQY6pgGtT5H6wQstLdPcTFwjvwg5r%2FxweM%2FKC4G36Jr1CJVXiyU18jUPUyluQf8jhfeM7KpfVCr2XDThvEvrne4O5dxyB9nMUwF3Df9tn28pu0OFD2s8G30EmWtIPCiDgOg8tlvfJ%2Ft21piXTZscqhVYg2dqKybSAJA3pJVRd9jrWSqH4bBj%2FM03NPxSMr7MXNMT1Y0RiXwAbnPcYnV0Qhai27RMd8OSfZuU&X-Amz-Signature=6014fb99415da64b4de3a109e84063f55b90564a2c9060f3162210c5a202813f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD225SEM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICN755oviK5FVU8Sxus%2FD1XXdH4bEfQWz1lRrhyuJwdLAiA1YniyLm6onATJQrPU45yb5F6BoYbovRfSzUvbIkhkyyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM0zONYtbXzcvgJFLvKtwDiNJSBfGpRAbfI2O6kDbulYp1OYTwTN3GTOBH%2FBZJkSnxljYTzrcxnpZNsqJWpnZ37QkgUlSOE29trzfJ2Qxg6wesP4wyFomAj5cpyWlu9G%2B00rRCbg2exV1H95Wv6Xc3fFmoh7%2BiXyb6ZuiQuY15uhy%2FVEr0Tn4XIUhlSrmABIBja6WgqndN8asSArx6K%2BatjpalHwRoNUxRz4FAr63NO8T%2F6DObmhNGiKcjGjIIrlPqqqODROjexAmBr26s2pyM86c0t0WbWMNB5%2BtyOlsX9%2Btt7eaFG1T%2FFYbDVTmJpRCH8snD2ep4sDvndxaWSD7LVV7zhFF%2Bo5MK5Q9SF14h1oQuJMkP5vGskmmq3yNfqpMDu1oZxr5mecwBjX37tUtsiz%2BYJTZtZldOA58ZHpkZO%2BrUgrQ9TfXud4BrO1r9p7T5La%2Bl88TnDyqhUCTN9B83CUBGS%2FCNjkyyKoWNu5M6W9zDkP03y8SwGL1Ig35jo1dNAYR3agnF4iEYaiYCiB7JJ4poQk8F4okm8s97%2BsumCllJPRO6f7miB4cS7Uf28W%2Fe%2F9KxU6NWFAoLCBQaV07jjwpJtx1vGSKUa4uYU%2BgkDeywvkbqXl39SUUSM7Bma5IOuGhRcNbnK%2BYL9gsw5vOWwQY6pgGtT5H6wQstLdPcTFwjvwg5r%2FxweM%2FKC4G36Jr1CJVXiyU18jUPUyluQf8jhfeM7KpfVCr2XDThvEvrne4O5dxyB9nMUwF3Df9tn28pu0OFD2s8G30EmWtIPCiDgOg8tlvfJ%2Ft21piXTZscqhVYg2dqKybSAJA3pJVRd9jrWSqH4bBj%2FM03NPxSMr7MXNMT1Y0RiXwAbnPcYnV0Qhai27RMd8OSfZuU&X-Amz-Signature=8db68471d235310b01ba82c87a2903f9f5ed916afd2a3bf38e514768576534e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
