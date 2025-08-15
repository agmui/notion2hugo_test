---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOL673XU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAje3aaXN4peLolsVc%2FQdKQ7D8EPZnFhyx0rJAmHDy9gAiAUkWZYWlLeKaLTzgbG9uGQ9eRg2MM%2Fen0nliGS2kDtfyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMb9pCrohpjg59VkSmKtwDYLY1LQDDN%2FQxbF8nvkc99PyTyLDzbFUoaT1Rgh4ig%2Bpc5JityG7hR6ezO%2BaAsrsF6pD6h7NpH5Dp2ozfv30wWFVmYMbIkgqcez1CUZ3qUBrTBZdB4MnFvpd2hcvB9o1DoinpbKHpERMKoa2i03hELis0vTL3mwpr8XKYxUX8LE%2FBTSe6Gljq%2B%2Bb6kTPMNNsMm%2F61E15vsQ14qzVdDJX1bFvNhDyZpY0k%2Bw75vVt5kTKA8KanAMwLDVpUQk8EnRVxtX8MBY%2B0fumqoZQ9cuPFjD2E2zpyISrHMT6OI4i6ZF4GPsaiNOycf6mpWVURh1gyVtiAWKUbcYZSju82MqfW7Zg2cSpa0JWWSqVQNsRoBTvcSxRHAqbU9ObCa%2Bk5K3Msi3ixaEA%2FnGyxtIpdPTEuL68QViv1rSroKgHXEwhvRMhuCaNBGgjfKO6b2Niy1NrbmEu10WtCps09r%2FrDsz3dC6L53gOTutKNf0CpNys6VPuJzzcosY6VvWv04lwSqLVmKA99yr4uxVk9sec2vYVt6tGnVRwmUpCQq%2FSDKzTL%2Fj40Mx24QE9UU2f%2B%2FKb3KZOvu%2BEOOcsHb5H5cVZqngJA81Jm5ZQ32F6iONXGBmntiqni0XzVM4yfbz0WzFQwu7X9xAY6pgFhPx8NgcnPeuOm11JV0yv4iyekT%2BotkB8jiNc1pwukyCrkn5IgsbopXX0FpRYMNSj66T0TNcbxInfM1iuM%2B9Grw0VX3CinHYyk8JU2ZNOF4JJN1LwNx%2BDkbQPMubiZfYFwDDd2UQM4lkeOoQfUK8qu7AcXvgEKvnjl6sUUM4RTibKkueuaJLXNf%2FWXC48r%2ByWDNRTJPPHVprOA6R5M5LZJnXyt8CXE&X-Amz-Signature=82483c9c1bec995a2cd8939fdd9e4820af49f3f14ed19b34c7a332c5e79a3d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOL673XU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAje3aaXN4peLolsVc%2FQdKQ7D8EPZnFhyx0rJAmHDy9gAiAUkWZYWlLeKaLTzgbG9uGQ9eRg2MM%2Fen0nliGS2kDtfyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMb9pCrohpjg59VkSmKtwDYLY1LQDDN%2FQxbF8nvkc99PyTyLDzbFUoaT1Rgh4ig%2Bpc5JityG7hR6ezO%2BaAsrsF6pD6h7NpH5Dp2ozfv30wWFVmYMbIkgqcez1CUZ3qUBrTBZdB4MnFvpd2hcvB9o1DoinpbKHpERMKoa2i03hELis0vTL3mwpr8XKYxUX8LE%2FBTSe6Gljq%2B%2Bb6kTPMNNsMm%2F61E15vsQ14qzVdDJX1bFvNhDyZpY0k%2Bw75vVt5kTKA8KanAMwLDVpUQk8EnRVxtX8MBY%2B0fumqoZQ9cuPFjD2E2zpyISrHMT6OI4i6ZF4GPsaiNOycf6mpWVURh1gyVtiAWKUbcYZSju82MqfW7Zg2cSpa0JWWSqVQNsRoBTvcSxRHAqbU9ObCa%2Bk5K3Msi3ixaEA%2FnGyxtIpdPTEuL68QViv1rSroKgHXEwhvRMhuCaNBGgjfKO6b2Niy1NrbmEu10WtCps09r%2FrDsz3dC6L53gOTutKNf0CpNys6VPuJzzcosY6VvWv04lwSqLVmKA99yr4uxVk9sec2vYVt6tGnVRwmUpCQq%2FSDKzTL%2Fj40Mx24QE9UU2f%2B%2FKb3KZOvu%2BEOOcsHb5H5cVZqngJA81Jm5ZQ32F6iONXGBmntiqni0XzVM4yfbz0WzFQwu7X9xAY6pgFhPx8NgcnPeuOm11JV0yv4iyekT%2BotkB8jiNc1pwukyCrkn5IgsbopXX0FpRYMNSj66T0TNcbxInfM1iuM%2B9Grw0VX3CinHYyk8JU2ZNOF4JJN1LwNx%2BDkbQPMubiZfYFwDDd2UQM4lkeOoQfUK8qu7AcXvgEKvnjl6sUUM4RTibKkueuaJLXNf%2FWXC48r%2ByWDNRTJPPHVprOA6R5M5LZJnXyt8CXE&X-Amz-Signature=3cffd15a1c10fded2a0ec2adaed4ae6ed075fd1afa68f8900433347d00af2749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
