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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRAK5QB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDNxiQAWM1XRcksCZlJuZHhTqBYbcGihJjuH6dNO36%2FiAIhAMVAQ1w9w9O3KtyLgNu%2ByES174lsUfAJ%2FukwvNaDD1SvKv8DCFMQABoMNjM3NDIzMTgzODA1IgyHacaEtbG1xyGv%2FKMq3APJdRbocigo2KEspxny7hPNT8KqVZK4brjpwU4Xfvul5IhIxKlX%2F5NQsQOHdLOvpglecHlC8ZjEp1LH3Sr%2FpFTWtIT%2BtBRft8tyIBU8o%2FMlDPypEs1asN3iHYDngvHz5gNubrJCg1DnoNxvN6B1TZj8k1PeWzlCNSQYv76Smntc4wwt%2BSHe1iRqJCTwGR1L7l8dG3wKBanp8k3ZL2sb2ektFkRzh2K11RQYp3VvJlNdoCQ9%2F0w5PgW1OyxdOzDbzlYn6vjaVzJpuW4kO5Gs7R%2FUsYEcQeQETJEHhzMHsLYUlmXHXcKbvC7M9k6%2FD%2FcpGJm0qXi1%2F3aiRiMsIuT2h5dIcJY0ObpGzF6xfbrh%2BZDu6F2RGuDPemtcGHy2kh7aBho7KNtZULFlMiF9IO1z4u4eUmHWJI2yI0OtB3seaKWiyuXsJhGiCIA0BIA%2Bc3mnRwfe63Duq8hwVkFA3ikDGI5g8KDTSXg09VNzNdyBF8q5vicrEfSiqHENxWDkAZC6MeF212mMqFQ%2FYgfHFDMSUwpby%2BVVW7gs3tagxXvQulhQwqI8zFD%2Bt6xHeu917Qy98S6ze2Kgk%2FzOh7H7gKpGKYGpkEg3aKougTo%2Bu4xLeQ842JXWZWa66REu8J89QTCBo%2FrEBjqkAQIJOOWxoCKOmAe1JLEDV%2FOVBzBAf4ebilzVstQ5OV4u4GIaMHMmcDMH3%2B5dOKxd9VAAOLV9wTlO2YvTm%2BjNuaVu4aQoN69cAAjhpHlUYE%2Ft%2FwSCF2nhdvZstXZegoLep7nBY%2FiVEWnbFyuxErhfZqbHSG0CoM3TkESsRWUh%2B4SpTbwo86bOohDUZI8sY5X1LtT1s4MU1yUEq2JklM%2BzKUyBVTb6&X-Amz-Signature=5acb5c4e619311ef6917a47d8792c8059848838886a9bdcd52a00ea8a3138bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRAK5QB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDNxiQAWM1XRcksCZlJuZHhTqBYbcGihJjuH6dNO36%2FiAIhAMVAQ1w9w9O3KtyLgNu%2ByES174lsUfAJ%2FukwvNaDD1SvKv8DCFMQABoMNjM3NDIzMTgzODA1IgyHacaEtbG1xyGv%2FKMq3APJdRbocigo2KEspxny7hPNT8KqVZK4brjpwU4Xfvul5IhIxKlX%2F5NQsQOHdLOvpglecHlC8ZjEp1LH3Sr%2FpFTWtIT%2BtBRft8tyIBU8o%2FMlDPypEs1asN3iHYDngvHz5gNubrJCg1DnoNxvN6B1TZj8k1PeWzlCNSQYv76Smntc4wwt%2BSHe1iRqJCTwGR1L7l8dG3wKBanp8k3ZL2sb2ektFkRzh2K11RQYp3VvJlNdoCQ9%2F0w5PgW1OyxdOzDbzlYn6vjaVzJpuW4kO5Gs7R%2FUsYEcQeQETJEHhzMHsLYUlmXHXcKbvC7M9k6%2FD%2FcpGJm0qXi1%2F3aiRiMsIuT2h5dIcJY0ObpGzF6xfbrh%2BZDu6F2RGuDPemtcGHy2kh7aBho7KNtZULFlMiF9IO1z4u4eUmHWJI2yI0OtB3seaKWiyuXsJhGiCIA0BIA%2Bc3mnRwfe63Duq8hwVkFA3ikDGI5g8KDTSXg09VNzNdyBF8q5vicrEfSiqHENxWDkAZC6MeF212mMqFQ%2FYgfHFDMSUwpby%2BVVW7gs3tagxXvQulhQwqI8zFD%2Bt6xHeu917Qy98S6ze2Kgk%2FzOh7H7gKpGKYGpkEg3aKougTo%2Bu4xLeQ842JXWZWa66REu8J89QTCBo%2FrEBjqkAQIJOOWxoCKOmAe1JLEDV%2FOVBzBAf4ebilzVstQ5OV4u4GIaMHMmcDMH3%2B5dOKxd9VAAOLV9wTlO2YvTm%2BjNuaVu4aQoN69cAAjhpHlUYE%2Ft%2FwSCF2nhdvZstXZegoLep7nBY%2FiVEWnbFyuxErhfZqbHSG0CoM3TkESsRWUh%2B4SpTbwo86bOohDUZI8sY5X1LtT1s4MU1yUEq2JklM%2BzKUyBVTb6&X-Amz-Signature=e3cba5cb12047fda18cd1ce31340c7963529dfbac3cc4cda5a44883007b1b049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
