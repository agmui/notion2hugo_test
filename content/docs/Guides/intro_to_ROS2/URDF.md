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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TOLA7O%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8e1YQWxkD4WbcurbWITUMBBDpUfaD5rvwrvou0UKAAIhALJs7BNCD7mQkzvRPZ9T9dZl7wB2qgUM88zzW01cXYehKv8DCHkQABoMNjM3NDIzMTgzODA1IgwnGL9LGJdBb5q2l%2F8q3AOkhYepDREHOkcJZxCXe4wD2obgcixDfqI%2FJH37wcy29eKbzRHxc71oZus9xureSyX3Ryw2HslI%2FQWNqaoPIaBMKoJdyFDEf6kd3m173yVjetEgiHARZ42nVMTVRHJeiKj3ghlY5OCgWs8AMwe4YalWObC5ynHc849ua3saHDtXIY%2FOLNMVUHoWYjdIA1WHmwyoC2P47RjxcTCGmQnxyJuaPBIvmG6NozU6AJZjxxMFLkTSOvPVx5b3rwueP%2BPAGSQRXmztVD6F5fNSLjfu0vb5fMR3RCy7UMjjHB24OkNFZZq1vht3qyLjzYvRiYlAaLIEWmI8nDELsZ1NwQi2%2BUrd2qzPNQzNnR0joThVoE3IKbKlSNAc4uJC7uQ0jr8sUb2ZAe7rUYXFtG1Drs5ZCVEc9o69iSjIi20LXUlDwEzY7cbBubB6YBM3ens%2FoiSWnL7uMhN9zI0Ku55J9CTXUsyiqEoTbAKRjEpXY5ahMOOYn6CTDFHY9D16pyRLpG0uxHdtJpF3FAQWMYikR0UTtk5aAyzc7HqXrWaCcvCMM9WuT%2F0rgpl%2FIfvSB8X%2BMLTO2S5Pr0MgRdq8sv9HxLkjJiCmJNPap6t7hpjKYYCmLc%2BWWyt%2F80RS91LaATXpvjC9u77ABjqkAW3tXC5hbU2shda3Hrd1ztBxyMo7NNWGddLrQF5V2vtAgzR7u5Vdt2puNzyM5RMpTkwaQ1GUJPEF4vQp6xsFiStCGqXYpmgwXLfKzJPBpacpo24VVJ2LXzIGH3zlaWsGcZ20G%2FEy5NQFUxVFiseU5Y08aor86vM%2B1p2NqaoLYRpNLFe1li%2Bstpeo5ICgcpgejFDRq1O7zAVZzPuEEucvMOQxP8YO&X-Amz-Signature=b307269d2767ac7528cec12408f1150bdfacb34015fb0ac0a1afc025a48496a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TOLA7O%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8e1YQWxkD4WbcurbWITUMBBDpUfaD5rvwrvou0UKAAIhALJs7BNCD7mQkzvRPZ9T9dZl7wB2qgUM88zzW01cXYehKv8DCHkQABoMNjM3NDIzMTgzODA1IgwnGL9LGJdBb5q2l%2F8q3AOkhYepDREHOkcJZxCXe4wD2obgcixDfqI%2FJH37wcy29eKbzRHxc71oZus9xureSyX3Ryw2HslI%2FQWNqaoPIaBMKoJdyFDEf6kd3m173yVjetEgiHARZ42nVMTVRHJeiKj3ghlY5OCgWs8AMwe4YalWObC5ynHc849ua3saHDtXIY%2FOLNMVUHoWYjdIA1WHmwyoC2P47RjxcTCGmQnxyJuaPBIvmG6NozU6AJZjxxMFLkTSOvPVx5b3rwueP%2BPAGSQRXmztVD6F5fNSLjfu0vb5fMR3RCy7UMjjHB24OkNFZZq1vht3qyLjzYvRiYlAaLIEWmI8nDELsZ1NwQi2%2BUrd2qzPNQzNnR0joThVoE3IKbKlSNAc4uJC7uQ0jr8sUb2ZAe7rUYXFtG1Drs5ZCVEc9o69iSjIi20LXUlDwEzY7cbBubB6YBM3ens%2FoiSWnL7uMhN9zI0Ku55J9CTXUsyiqEoTbAKRjEpXY5ahMOOYn6CTDFHY9D16pyRLpG0uxHdtJpF3FAQWMYikR0UTtk5aAyzc7HqXrWaCcvCMM9WuT%2F0rgpl%2FIfvSB8X%2BMLTO2S5Pr0MgRdq8sv9HxLkjJiCmJNPap6t7hpjKYYCmLc%2BWWyt%2F80RS91LaATXpvjC9u77ABjqkAW3tXC5hbU2shda3Hrd1ztBxyMo7NNWGddLrQF5V2vtAgzR7u5Vdt2puNzyM5RMpTkwaQ1GUJPEF4vQp6xsFiStCGqXYpmgwXLfKzJPBpacpo24VVJ2LXzIGH3zlaWsGcZ20G%2FEy5NQFUxVFiseU5Y08aor86vM%2B1p2NqaoLYRpNLFe1li%2Bstpeo5ICgcpgejFDRq1O7zAVZzPuEEucvMOQxP8YO&X-Amz-Signature=8646989c38f55a73cf95bf5b39eb395ff2ee3382d998b4a63b836da765d82250&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
