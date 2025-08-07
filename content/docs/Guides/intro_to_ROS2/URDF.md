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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HFRQ4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDmNP2KIwmvh3YBcIFdE7ewP3zgUy5FEg6GvhkxR9HphQIhAK5h%2BHmlcdGoOw8H4NC2KQDSAAl3RdqlS%2B%2Fo8%2FWSKYO%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FZKzpezXt4AY7yicq3APb5lt8nPuGckS%2FVU4NYOCbE8CiMQfdkUz7pCOqzV7UDEdy1ukGL4XBfHI3I6AiSw7PEpN1c5GZN%2FajAkcKTd7gyhAD4Q%2FZDs1wIsL1XRqrmCPWeO3PCl%2B1lraK0TUJ0%2B04XFj2GLXXAED7LAVHxrpBbVFR%2BKAXC4I1u4ftCR02RVH5%2Fb7V%2BWpfS9386S52Rk0SuritqAJM%2FG2VqLyKW0swNk4DImShGwAQwfZ7zNEo7ZCGI1EOENqijvtBpDfRv5NeFJzXPV2lRWjheggNZCAXPrLDxPRR3QQpfykEJJNxJKxUrfJOejHhRM4HtJM%2BfNDO4WUwAojECN84dhxHAUd0ycQrPvTqxuB9RwGVy1BB05f3HevXTxoFa%2F%2BZcEhn2W5%2BVe2fl2I%2BxL3jw%2FABeOih747X3edeepw4MRK9FBo4P1pMlRWIRyJ%2FR7pk3SZO%2BmopkUtQ%2BrKRkSMiCxoCHhnIBaWi4yi2blaRKc6cefgZZEKl7%2BSUAu%2BwNkiuS7LUgGANI5%2BB8dqhK%2BVi0H3Ow3D3N8Y1LNQmvrRHWBfjkUWrRXalWX0Gk8w6Db7x564ub5qheekUJtdO5a5F%2BoVmh9lL9in%2Bd%2FCrwmMd%2Bwb9fX8MgJ2uG687rvVGUzGuiTDcydPEBjqkARtyMnn0MrEA4vg9X7HutRluuiEVofa5o2Na4Fp3nXtyKGdqw0I4%2B4aqNfAua9LRKiXIb%2Bnk0GEXwRGy3lpGuPoMlhsmzU6jh0r9puoXbKnWQOfbfLNTWIWPHCDN5FC0zLrtIfb3AEH5wg3ZrbhU5CBaFclfoVUR09Hvchr%2FF6Mr%2BEbM4TaL0EAr6njIRlKzteTVW76hSvqA4HUehIVCkgzPKw1v&X-Amz-Signature=f43c66733590744bd9d31fba41cf8c1829d9be8fc11ad529b97eb2f2949eaeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HFRQ4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDmNP2KIwmvh3YBcIFdE7ewP3zgUy5FEg6GvhkxR9HphQIhAK5h%2BHmlcdGoOw8H4NC2KQDSAAl3RdqlS%2B%2Fo8%2FWSKYO%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FZKzpezXt4AY7yicq3APb5lt8nPuGckS%2FVU4NYOCbE8CiMQfdkUz7pCOqzV7UDEdy1ukGL4XBfHI3I6AiSw7PEpN1c5GZN%2FajAkcKTd7gyhAD4Q%2FZDs1wIsL1XRqrmCPWeO3PCl%2B1lraK0TUJ0%2B04XFj2GLXXAED7LAVHxrpBbVFR%2BKAXC4I1u4ftCR02RVH5%2Fb7V%2BWpfS9386S52Rk0SuritqAJM%2FG2VqLyKW0swNk4DImShGwAQwfZ7zNEo7ZCGI1EOENqijvtBpDfRv5NeFJzXPV2lRWjheggNZCAXPrLDxPRR3QQpfykEJJNxJKxUrfJOejHhRM4HtJM%2BfNDO4WUwAojECN84dhxHAUd0ycQrPvTqxuB9RwGVy1BB05f3HevXTxoFa%2F%2BZcEhn2W5%2BVe2fl2I%2BxL3jw%2FABeOih747X3edeepw4MRK9FBo4P1pMlRWIRyJ%2FR7pk3SZO%2BmopkUtQ%2BrKRkSMiCxoCHhnIBaWi4yi2blaRKc6cefgZZEKl7%2BSUAu%2BwNkiuS7LUgGANI5%2BB8dqhK%2BVi0H3Ow3D3N8Y1LNQmvrRHWBfjkUWrRXalWX0Gk8w6Db7x564ub5qheekUJtdO5a5F%2BoVmh9lL9in%2Bd%2FCrwmMd%2Bwb9fX8MgJ2uG687rvVGUzGuiTDcydPEBjqkARtyMnn0MrEA4vg9X7HutRluuiEVofa5o2Na4Fp3nXtyKGdqw0I4%2B4aqNfAua9LRKiXIb%2Bnk0GEXwRGy3lpGuPoMlhsmzU6jh0r9puoXbKnWQOfbfLNTWIWPHCDN5FC0zLrtIfb3AEH5wg3ZrbhU5CBaFclfoVUR09Hvchr%2FF6Mr%2BEbM4TaL0EAr6njIRlKzteTVW76hSvqA4HUehIVCkgzPKw1v&X-Amz-Signature=8615c8349cc880b8233ac7f52109847c33e43519c9d34ad23b9baf4c6a3c27a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
