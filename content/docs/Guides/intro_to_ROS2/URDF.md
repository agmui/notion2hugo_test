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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFWM7WG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIARAlsuuZZTPNCPzWCAcXXKFn4xzhseHzfjIHQtJEVGBAiBQpfYAhgpB2I%2FJJrxfKmY3feEgHB6Bv8VjfN3SQCZoWSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMyLy0OhndIT6Re%2BTAKtwDt3UrWkYBSqt%2Fl67ImH9Ft7DCTYFC21fxz2kRiwmfKYwg7bw7zKCkFe4jTaPqtlbifSkougUY0wYbsr0AME0gkHhE6Ja%2BcKkjOiE1REDOEk65%2FPv0bJUmIBb0d1QOcKZNp1DLBXm%2Fm8xpX%2Fc9VxiWondANAHJOdsJTOW3WVgzfbyyaiE6TkcCBJfoHg7ofT1dhmODqoIy08R68UILkUWduLZOApsR5rnOnLPdKVO577oQBpqCsuMY0r0uF7Bgv35f%2FEb87RFWu%2BngmxlRr%2BN%2FzLTE46BQnDL6MO0fWPWrApAM76lLpjA99VgMWZz8hFT9pJrqmVtnOuqNSd2Ki0HVDtpmibDehpJzoptXk4gOAsx%2F04Zgvr3aGRs1i%2B%2B6gXEoioGy%2FHiLXV7UrI0QaWtSos6gsuBnO2HJzISGe4LYOmLCAoqZb6OMm%2F9KIqH5NVL5N8gIXpjiwK6HpyjZVyyYEQXCEGZbPEUhWXoyeivAfJ10VeFnyhml9iCNI5laail81TGF4wjd%2BrpCn1u%2BOT0lM5A1R1Mhjm%2B8sYWac8W%2B8OkF31E2XEuo6TBVpTBFQ12ExkZ58kyUqzDF%2FNQci4U%2B8sSyK%2FSiEZ2nrPGiOBg1laQr%2Bn96cu2HVz%2FzjcgwjqubzwY6pgG8yCTZZSQvX7uKujOA%2BJsgX%2FXoRYQPLNsOqL%2BBkA%2BQnfb2lK1fqNLx8Ps%2F3he2R2X6NoRj8a09bT0i7aE49OLObuhEjBZ9UcJ9wn1VEfR1pTN7roFY6%2FogQE979nqAQObbD8FlsweOwCNHqyUpMfXmbYCmgqHa6dPGxGz7bXKTSzm5eItHKqTrTFpkCEJ3C8ryKLRd38ZWskICuMuW1URKQc1vcuaj&X-Amz-Signature=1878844a72c7e08d86057bf539138e3910e0e561969bc4cb310db9b14c1038e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFWM7WG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIARAlsuuZZTPNCPzWCAcXXKFn4xzhseHzfjIHQtJEVGBAiBQpfYAhgpB2I%2FJJrxfKmY3feEgHB6Bv8VjfN3SQCZoWSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMyLy0OhndIT6Re%2BTAKtwDt3UrWkYBSqt%2Fl67ImH9Ft7DCTYFC21fxz2kRiwmfKYwg7bw7zKCkFe4jTaPqtlbifSkougUY0wYbsr0AME0gkHhE6Ja%2BcKkjOiE1REDOEk65%2FPv0bJUmIBb0d1QOcKZNp1DLBXm%2Fm8xpX%2Fc9VxiWondANAHJOdsJTOW3WVgzfbyyaiE6TkcCBJfoHg7ofT1dhmODqoIy08R68UILkUWduLZOApsR5rnOnLPdKVO577oQBpqCsuMY0r0uF7Bgv35f%2FEb87RFWu%2BngmxlRr%2BN%2FzLTE46BQnDL6MO0fWPWrApAM76lLpjA99VgMWZz8hFT9pJrqmVtnOuqNSd2Ki0HVDtpmibDehpJzoptXk4gOAsx%2F04Zgvr3aGRs1i%2B%2B6gXEoioGy%2FHiLXV7UrI0QaWtSos6gsuBnO2HJzISGe4LYOmLCAoqZb6OMm%2F9KIqH5NVL5N8gIXpjiwK6HpyjZVyyYEQXCEGZbPEUhWXoyeivAfJ10VeFnyhml9iCNI5laail81TGF4wjd%2BrpCn1u%2BOT0lM5A1R1Mhjm%2B8sYWac8W%2B8OkF31E2XEuo6TBVpTBFQ12ExkZ58kyUqzDF%2FNQci4U%2B8sSyK%2FSiEZ2nrPGiOBg1laQr%2Bn96cu2HVz%2FzjcgwjqubzwY6pgG8yCTZZSQvX7uKujOA%2BJsgX%2FXoRYQPLNsOqL%2BBkA%2BQnfb2lK1fqNLx8Ps%2F3he2R2X6NoRj8a09bT0i7aE49OLObuhEjBZ9UcJ9wn1VEfR1pTN7roFY6%2FogQE979nqAQObbD8FlsweOwCNHqyUpMfXmbYCmgqHa6dPGxGz7bXKTSzm5eItHKqTrTFpkCEJ3C8ryKLRd38ZWskICuMuW1URKQc1vcuaj&X-Amz-Signature=961fa0e7290a3265a7560af47e91a607f5c80399b230d80727a62c61eedda038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
