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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFKUORC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGyrcXa6uNvn%2FqFYC5P%2FD8segLjPjj%2Bysd1pzf7RcjlSAiANbxWIlp%2FfHSVOH8nzpcnAzTnPK5XUfAp8f9bjaqVkyyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2FgUANbLawwdQP5ErKtwDLKYo4a4%2BvoOObuPaR5vE53LpIjpSbE%2BcniIQ1NkZ5a8ylKJw54pLQTC1jmDxEWUBeKuHMIUD2QCrPhgyyda5biiGB1yzQ7QCdHNdTyTheepQjJAlpvxPrZeOLhUiC%2B12Iu%2FUCs5gjGXx6J8gJbC7%2Fs7fQHkk0tYhpqOqkh6XmOiM6pEMB3KwTVNBgfQnRjm6TJzXtDvMnImzlntlIVKb2xPqetSOLAhWVD9veBN%2BTAMw%2Bwtx3tUiR83a61B71fQzoVebBuuBGdMN3g8eyki7d70KNANXbKroeDy%2BebO2XovYpYyKgn8xoVYFsIMtc15VX0afPyNHv3ZMDCVDocIEpo%2FI38wruCAA0QquFBO5TB1Zdemu%2FFjnp8Nzw2mVKlJMlkuVOKG6c7yKXeOGhjfBrWuyiIMNZW32%2Fu43eydXbqBitiBXcKBSxW0kEkUu6FwHPb%2Fc3DwdeoUKixNYa5pXJ8KQjSYt7rva%2ByZUvrDgHJydqPq%2BjWuGgPJT9wmyrV0s%2FC9%2B4RXrgzVmlGFgKIJYKSJf%2BfSMqfULtObuDcVHjBJEBd7a5hL8IRJ2qicrl%2BTlEpEYbtekds7AuaHqnB8u0Vf6hZYB5gO0pS%2BPvE8vFCPV1jDmoe%2FD9%2BUF6oAwy%2Bf7wQY6pgE2tUvrtknY31Ro%2FQl5vt8krIDL%2F6O7%2FWzCYowZNjdHYHzkvAr5IEO%2FvfiaWMhgnAs%2B7YSzhQbmttnEeXBK0o5m12J%2BKV%2FWWAN3f98eDNsoCg7l1XYJqBTT0FPGKckPJ0j7xVMiXi0An9OPKNgjVwWXfqxd5clOFkGM%2Fy40fVBuLsl%2BnDUNYyoFXjHrd5vWjBty7JgrJt8cIWilz9bnqpWMR3N4f1dF&X-Amz-Signature=6fc33d5cede2e492736b032d1810492e0b97fa5ba23148335c3efbea0ab52fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFKUORC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGyrcXa6uNvn%2FqFYC5P%2FD8segLjPjj%2Bysd1pzf7RcjlSAiANbxWIlp%2FfHSVOH8nzpcnAzTnPK5XUfAp8f9bjaqVkyyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2FgUANbLawwdQP5ErKtwDLKYo4a4%2BvoOObuPaR5vE53LpIjpSbE%2BcniIQ1NkZ5a8ylKJw54pLQTC1jmDxEWUBeKuHMIUD2QCrPhgyyda5biiGB1yzQ7QCdHNdTyTheepQjJAlpvxPrZeOLhUiC%2B12Iu%2FUCs5gjGXx6J8gJbC7%2Fs7fQHkk0tYhpqOqkh6XmOiM6pEMB3KwTVNBgfQnRjm6TJzXtDvMnImzlntlIVKb2xPqetSOLAhWVD9veBN%2BTAMw%2Bwtx3tUiR83a61B71fQzoVebBuuBGdMN3g8eyki7d70KNANXbKroeDy%2BebO2XovYpYyKgn8xoVYFsIMtc15VX0afPyNHv3ZMDCVDocIEpo%2FI38wruCAA0QquFBO5TB1Zdemu%2FFjnp8Nzw2mVKlJMlkuVOKG6c7yKXeOGhjfBrWuyiIMNZW32%2Fu43eydXbqBitiBXcKBSxW0kEkUu6FwHPb%2Fc3DwdeoUKixNYa5pXJ8KQjSYt7rva%2ByZUvrDgHJydqPq%2BjWuGgPJT9wmyrV0s%2FC9%2B4RXrgzVmlGFgKIJYKSJf%2BfSMqfULtObuDcVHjBJEBd7a5hL8IRJ2qicrl%2BTlEpEYbtekds7AuaHqnB8u0Vf6hZYB5gO0pS%2BPvE8vFCPV1jDmoe%2FD9%2BUF6oAwy%2Bf7wQY6pgE2tUvrtknY31Ro%2FQl5vt8krIDL%2F6O7%2FWzCYowZNjdHYHzkvAr5IEO%2FvfiaWMhgnAs%2B7YSzhQbmttnEeXBK0o5m12J%2BKV%2FWWAN3f98eDNsoCg7l1XYJqBTT0FPGKckPJ0j7xVMiXi0An9OPKNgjVwWXfqxd5clOFkGM%2Fy40fVBuLsl%2BnDUNYyoFXjHrd5vWjBty7JgrJt8cIWilz9bnqpWMR3N4f1dF&X-Amz-Signature=daa73f24471fdedf63bef32b4e7965745341d3f8386eaec8c1c043f3ff6fbea2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
