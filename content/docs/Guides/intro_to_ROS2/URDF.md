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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OWMORT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQD2kSpom%2B3QiIJ%2BuOnFRTN0bC%2FAPbtnipfwlbBDjQpd2AIgT8eYGt6i4if0%2Ba%2FdiC1h6ydv9HhjvdJuuU8%2FcKL3x20q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKxAUTDdNWZW8hlXkyrcA9n56gWLS%2F2RzxBDXjOTz54Anr9Qz1oDuCXbyXzgFjjb3vTq1xgsuj70TfY0gvtEvHRSNxI8MyGBwRIIMXdzghBXKZCjApUmRqd0f4q8ELU8RT%2F49qx9nbA0zHR5Dn9gLPKinCQwjOZhK3l4mr3xSMfU7pIrAh3GKubBisPhnJEUEIxjuIicEIpOFKSoqOyM296E9VqWX4plIWPRKGar3NfO5EAm2pVh%2Fanv1UT88FzBaGpZluf%2BLgrIDfrHzOTcHleFkLAB%2BxJ%2BS%2FSQupkXekWkJzgftsF1OUOv1K2qvvmSGKM9GE8YE%2FgMviddoBbEfnpMp558yi%2BMqG580N86vIVDQK%2BEKWaJY%2BpeotF%2FEuf%2B3Yz2wZa8BjGW354yAJGmBzSngwQlagEMed0DSSxOKBpgtv1O4YdL8TWYSnj%2F7g88Mjx2fpxYRghjbbj7z2hx6PJOkWCZtmUCupLuGNCrUEHFhI1zfTn%2FdMKxGHAM6Si%2BuGUvWmCUcwGE7D15whyF56klvVikTHRmiMcy%2Bd2IQNPHC%2FghwrgWErGNlg9LmRrVLIIuw2aEMKm%2FMr%2Bv99zLNpvnPV34wS5G97TM5HQhn7rTkUQAjqt5z0JK%2FOswlTKKiEM0JSE%2BNGXocXrtMKTv78IGOqUB2He8kaY3elP%2FR9zrFb5%2BQFA%2Fc%2FtqHuIeQrjd2aknNXjtWIDa8HJRtsIoZQmqGByl16pEzMOl3mpf%2FEUHtO1YCADfjTBaryfJuBu4JkpQu0wBmI%2FjxoxOZ1it5Kn8LvFchiYF7d9SICkJUjB0fJPZECB%2BizEB46Yn2GgOIhzcGgPA3cjdF3aAtgjuICNmqyqDm%2FxUOAnIY%2Fwa1jVL8vEdL5oJRkqf&X-Amz-Signature=51e4209a04655bd30b6e24a29d5d0c7651d10eb1e0d046641943e7522f05dc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OWMORT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQD2kSpom%2B3QiIJ%2BuOnFRTN0bC%2FAPbtnipfwlbBDjQpd2AIgT8eYGt6i4if0%2Ba%2FdiC1h6ydv9HhjvdJuuU8%2FcKL3x20q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKxAUTDdNWZW8hlXkyrcA9n56gWLS%2F2RzxBDXjOTz54Anr9Qz1oDuCXbyXzgFjjb3vTq1xgsuj70TfY0gvtEvHRSNxI8MyGBwRIIMXdzghBXKZCjApUmRqd0f4q8ELU8RT%2F49qx9nbA0zHR5Dn9gLPKinCQwjOZhK3l4mr3xSMfU7pIrAh3GKubBisPhnJEUEIxjuIicEIpOFKSoqOyM296E9VqWX4plIWPRKGar3NfO5EAm2pVh%2Fanv1UT88FzBaGpZluf%2BLgrIDfrHzOTcHleFkLAB%2BxJ%2BS%2FSQupkXekWkJzgftsF1OUOv1K2qvvmSGKM9GE8YE%2FgMviddoBbEfnpMp558yi%2BMqG580N86vIVDQK%2BEKWaJY%2BpeotF%2FEuf%2B3Yz2wZa8BjGW354yAJGmBzSngwQlagEMed0DSSxOKBpgtv1O4YdL8TWYSnj%2F7g88Mjx2fpxYRghjbbj7z2hx6PJOkWCZtmUCupLuGNCrUEHFhI1zfTn%2FdMKxGHAM6Si%2BuGUvWmCUcwGE7D15whyF56klvVikTHRmiMcy%2Bd2IQNPHC%2FghwrgWErGNlg9LmRrVLIIuw2aEMKm%2FMr%2Bv99zLNpvnPV34wS5G97TM5HQhn7rTkUQAjqt5z0JK%2FOswlTKKiEM0JSE%2BNGXocXrtMKTv78IGOqUB2He8kaY3elP%2FR9zrFb5%2BQFA%2Fc%2FtqHuIeQrjd2aknNXjtWIDa8HJRtsIoZQmqGByl16pEzMOl3mpf%2FEUHtO1YCADfjTBaryfJuBu4JkpQu0wBmI%2FjxoxOZ1it5Kn8LvFchiYF7d9SICkJUjB0fJPZECB%2BizEB46Yn2GgOIhzcGgPA3cjdF3aAtgjuICNmqyqDm%2FxUOAnIY%2Fwa1jVL8vEdL5oJRkqf&X-Amz-Signature=18f76d156f2404baa7717bbaeeda2afa2ee09f7e16983b27177d953b66fda042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
