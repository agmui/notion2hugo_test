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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSNU325%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCYfJaZlGEeiYjQSpiUtzd%2Feqsj6xroD7glaLroNgrp6wIhAO3J1m1FWkSJYEjvjQh6g59mbx%2FCVnmMdSiUg6%2BXkAxqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJPClkJZvFStJYT0q3APtNJ%2BR5hw20L0AKBMox1RBogTXI4Wed6EYgFWwV8KnO2rdK56ykz%2FBZJWSuTN%2FFQKGJh1HDYqz%2BXEb2DR5MICKEDHEWPSA6U8zUnYY5cPKTaA2t2S6%2BugSlvdAlHur4asKwjCvekmFG9gXyYXi%2BJKIVaSKgZf%2FpCIEmifCrF64WCb0uZqJgmRnsIt6JXEHRCnmAV6f1pLpVoaZGNYQ6geOXf8ejdMSYa3WoLGzmnbzhic9re1dqE4LL3h12c9hoe1oDsCaBIEfK4PPCXyHYD59uP6VSryTJB2EmhZx9m5AYVbdRbmcdVkpApUEeSof5HAZSLlTatI1%2FWUE1GS%2B9nQCZ1Nbrsh4AWJWgYpf7sx49oop%2Fpj4x%2Btp%2BDOfctxw1SHHJ16GkRmLoifRY9LGoRNVqPMg0285KD8ZyefiH9NXcnbLJQc%2BoSkxY4x%2F%2FQ0DaIdiDY64V3WtJtZjQs6uQ6k3qD%2F%2FasxDSoR%2FlsuXD5EmNfJdPtKsOWJjdgQ2BSp3uNwHQsNPGJ0WsNTyDLGQAhKcUb5CgP%2Fz23C%2B4JEz8dhhGU0kYZvYVTnUAvRHZ5Hnx4l89rV5Xzl3UiugmOP3N7qAlbUCF7Z2aDIHOTBaOEl5Qe5piyJzJJxju3TN1jDMtIS%2BBjqkAS1cr0GD%2FDTbtIkKgdWuad1NxLnA30r%2FY%2FzsnyfvublNwmEdFp0%2FnwWhQRwFBf3TYT6OPPKqcWah%2FTVlVUhjeTKZgo7OpS2taebZpOl9Q7mJdKNHP02HdKpq6Cd5EJSJ1lMdqVvb%2FHooQUDK%2BCdZh%2BT6TLuPIPDlj7Trp7R2KeUcvEXF2cas2KV6owfOvTeG%2FA86n9%2FbL9gJBJCij8AtysMTNUbn&X-Amz-Signature=85b5b5cbd210cf8b5ef12ff3528a4f90277fe47c1b6fe65aa3284e197b3c369e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSNU325%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCYfJaZlGEeiYjQSpiUtzd%2Feqsj6xroD7glaLroNgrp6wIhAO3J1m1FWkSJYEjvjQh6g59mbx%2FCVnmMdSiUg6%2BXkAxqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJPClkJZvFStJYT0q3APtNJ%2BR5hw20L0AKBMox1RBogTXI4Wed6EYgFWwV8KnO2rdK56ykz%2FBZJWSuTN%2FFQKGJh1HDYqz%2BXEb2DR5MICKEDHEWPSA6U8zUnYY5cPKTaA2t2S6%2BugSlvdAlHur4asKwjCvekmFG9gXyYXi%2BJKIVaSKgZf%2FpCIEmifCrF64WCb0uZqJgmRnsIt6JXEHRCnmAV6f1pLpVoaZGNYQ6geOXf8ejdMSYa3WoLGzmnbzhic9re1dqE4LL3h12c9hoe1oDsCaBIEfK4PPCXyHYD59uP6VSryTJB2EmhZx9m5AYVbdRbmcdVkpApUEeSof5HAZSLlTatI1%2FWUE1GS%2B9nQCZ1Nbrsh4AWJWgYpf7sx49oop%2Fpj4x%2Btp%2BDOfctxw1SHHJ16GkRmLoifRY9LGoRNVqPMg0285KD8ZyefiH9NXcnbLJQc%2BoSkxY4x%2F%2FQ0DaIdiDY64V3WtJtZjQs6uQ6k3qD%2F%2FasxDSoR%2FlsuXD5EmNfJdPtKsOWJjdgQ2BSp3uNwHQsNPGJ0WsNTyDLGQAhKcUb5CgP%2Fz23C%2B4JEz8dhhGU0kYZvYVTnUAvRHZ5Hnx4l89rV5Xzl3UiugmOP3N7qAlbUCF7Z2aDIHOTBaOEl5Qe5piyJzJJxju3TN1jDMtIS%2BBjqkAS1cr0GD%2FDTbtIkKgdWuad1NxLnA30r%2FY%2FzsnyfvublNwmEdFp0%2FnwWhQRwFBf3TYT6OPPKqcWah%2FTVlVUhjeTKZgo7OpS2taebZpOl9Q7mJdKNHP02HdKpq6Cd5EJSJ1lMdqVvb%2FHooQUDK%2BCdZh%2BT6TLuPIPDlj7Trp7R2KeUcvEXF2cas2KV6owfOvTeG%2FA86n9%2FbL9gJBJCij8AtysMTNUbn&X-Amz-Signature=d8ce987da5e5bb5a3291afcbbc77add2ab90dcadcbca18b868e19cdfcdcde1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
