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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MCEBEH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI0XMIbp5FO7tucBvTkGAJs73DXnfeoIOwfC6YNaHlWwIgVz96CWKAV2GS8xTOfFSrLAY5WIiR42u24VHKr6Te0C8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkdgCpzNQj%2FPWpRuCrcA8OyyeD5eOMx3%2BBanysRSNsW%2B92jTLe6nTa6e23nPT5neOM4%2F%2Bg36JPtmErhPUdvbCZn9R31aakQWtheyVtA783dQ8QYFCWRXIBmldNv2v5%2Ff1RPf1cOvJti8WjxSHy%2F8acsgYcipvmUy7JrfRMw4%2BcYVoVQOHb6GJH56ui%2BbV7vh5Rsz2IBeDRCd9BmFUjPnImkAs%2BIifmZt5jUVyDnRpk3pm44%2F7iHm12Sv5R6tCwZ0ie9nKB1R8mFCPF3Q2uRtUguSIfXLBYaYLoi1C3%2BjDmssVZdopHmVsahU%2BtbGTjTirJaxhTe%2BlZIoKajS18rmL%2FQXlWZFVE%2FK20ZjPyOPHuQ8ivLDyZ21i8CS5SB1SBA4n7IAlEb5ZNkuFPrr0%2FVYKjFI%2BAQ2fDVZplFuTc8N20OxSq4OLefW5HhmVRgQ49AZnM6%2Bs0i2YCAkX%2Bd7SQMEdkmeK8CnT4zwOVQOBZvdd2CuYCe5%2F5rJhx%2F7%2FRpp%2FXHXFAZcYXyUXhnX5WTdlo%2F%2FjUlGTAg2pLIo542I34UQzzvdeEyK0xuMSUxZcRBuWmHZU%2BFW2H0TEuUgfEAG7aTBQX1RbMu13fL%2Bul%2BDNDKy5rD4l82iGB7ZGuOvXsifgOBwCcDjMFU%2Fg1QLMUJMJT9kL4GOqUBMEyx4%2BEQmmlQ1b66hyL%2Bta9msmzEGdSXVdrsjXut83iiGC3p7F30ypYcQp2%2BjbjxcdXwwoDi%2FkvqnrmTXJX7iuwwv1j7A3vZn0LHVKxVxSOBLFJC0n6RMsIse0Xdvp7zs3gUE7QQ46xOr1Nk34I%2FR3bFp6IlpjGfsul%2F6kUi2DkDVhWVuo7ETHrx8GG8h%2FzgWzWDQzZA%2FDi%2BewKlrkJkSsROefEi&X-Amz-Signature=f053e699f540a6e79bdcbc7bef38782becc2b120ed62a3ee902acfbfb4a73468&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MCEBEH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI0XMIbp5FO7tucBvTkGAJs73DXnfeoIOwfC6YNaHlWwIgVz96CWKAV2GS8xTOfFSrLAY5WIiR42u24VHKr6Te0C8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkdgCpzNQj%2FPWpRuCrcA8OyyeD5eOMx3%2BBanysRSNsW%2B92jTLe6nTa6e23nPT5neOM4%2F%2Bg36JPtmErhPUdvbCZn9R31aakQWtheyVtA783dQ8QYFCWRXIBmldNv2v5%2Ff1RPf1cOvJti8WjxSHy%2F8acsgYcipvmUy7JrfRMw4%2BcYVoVQOHb6GJH56ui%2BbV7vh5Rsz2IBeDRCd9BmFUjPnImkAs%2BIifmZt5jUVyDnRpk3pm44%2F7iHm12Sv5R6tCwZ0ie9nKB1R8mFCPF3Q2uRtUguSIfXLBYaYLoi1C3%2BjDmssVZdopHmVsahU%2BtbGTjTirJaxhTe%2BlZIoKajS18rmL%2FQXlWZFVE%2FK20ZjPyOPHuQ8ivLDyZ21i8CS5SB1SBA4n7IAlEb5ZNkuFPrr0%2FVYKjFI%2BAQ2fDVZplFuTc8N20OxSq4OLefW5HhmVRgQ49AZnM6%2Bs0i2YCAkX%2Bd7SQMEdkmeK8CnT4zwOVQOBZvdd2CuYCe5%2F5rJhx%2F7%2FRpp%2FXHXFAZcYXyUXhnX5WTdlo%2F%2FjUlGTAg2pLIo542I34UQzzvdeEyK0xuMSUxZcRBuWmHZU%2BFW2H0TEuUgfEAG7aTBQX1RbMu13fL%2Bul%2BDNDKy5rD4l82iGB7ZGuOvXsifgOBwCcDjMFU%2Fg1QLMUJMJT9kL4GOqUBMEyx4%2BEQmmlQ1b66hyL%2Bta9msmzEGdSXVdrsjXut83iiGC3p7F30ypYcQp2%2BjbjxcdXwwoDi%2FkvqnrmTXJX7iuwwv1j7A3vZn0LHVKxVxSOBLFJC0n6RMsIse0Xdvp7zs3gUE7QQ46xOr1Nk34I%2FR3bFp6IlpjGfsul%2F6kUi2DkDVhWVuo7ETHrx8GG8h%2FzgWzWDQzZA%2FDi%2BewKlrkJkSsROefEi&X-Amz-Signature=552d33e2496f49b5e282595d4fc7e56644c21b1fd4f1df90d3fdd2b8e50bf140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
