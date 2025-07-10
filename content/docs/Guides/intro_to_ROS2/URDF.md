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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OWUWHAI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0cTVgaghJZYnCaJAU0f8lITBj2IqVlzzrjvRiD4LWbwIhANYpWuahDCLfFsxBNtr%2FdHd%2B65osXYtIIpDcDYGeY8nDKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPeRKncg4HxP2fxF4q3AOYpcoXLF3kiFvZl7ful9HlJgof6jAKXGVS6kszksGh08EKUpUBAWNbtaSR4H1cZVvLUEo9X4Lijlk8wMO3svPI3z7h%2FktoMcu%2BP%2Fw66oiMOQbu0kFUvesZRCMUDRe6%2BXHOrYhpRaF5IqdWWiYNCE3Kk95g7iTagFLvEBq3INvXtpQ5ZeUsT6JRhemsGOepM%2FTG36kZ%2B%2F6uEeqMmlYcXrF1ullm0%2Bga4mLU6TXPtK4U9eFpt%2B6AszNA7QLQQZbCEK%2BP0waTg82Ca0B8TY%2FKuAY4xBIHoA4kudydJBt5wHMSx5nn9fG45GReVfAzrDesaj8YJ10fCWThaCjfo41TALS7VrZ1cocDb33LVmoU2xAw5kaJ913dbmig3LaezKaSCo7QsbtlIpks74r2Ne9Quji5Yx1GvTo8ISMwtqN4XG5Aq5FwhtQIXozmc7vejZ7P5RtuOtqLP5Rz1zPCBoEBMG5nZp2JflDmUDMo6eBOBtfihhpheI1ueZ%2BoPR%2FS9Xlvo%2BbmX4ioDWVIsVHy7QM%2BCINSSKM0Nr0Pb2qYeCrLIDb1zuEJtm04mhRQHpVnEAuFNe712MU3%2BpVB1%2B6jelTAvWqBjgOx36rduhk4VBEICtqGyJuwlFim4P5rB1jdPjC1zcDDBjqkAWYrZW9EY5171X9lyKWzWBV6C%2BHXY9fwenLiO9O0owzPpRR9wNxubmzm40K%2BIUvhVdvPAAJw4NV4q%2FP6OWjd2trUPS6fF7vX8m9V22sY0fu7tFYkzXyLJBa0SHUUhTGu1hLZbP1C34WKSRf2S9VBASupEYR%2B%2FQmOuitKaOSDHBb3AbpaDCsFQQQU0nVcMhgcOrSJpNljppRfyC830Y45vOYPf%2FDd&X-Amz-Signature=16a4a85a4c96b3341b72938d72fd9bf9b4a8b1a613969e9aae0bf3c61ab0eaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OWUWHAI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0cTVgaghJZYnCaJAU0f8lITBj2IqVlzzrjvRiD4LWbwIhANYpWuahDCLfFsxBNtr%2FdHd%2B65osXYtIIpDcDYGeY8nDKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPeRKncg4HxP2fxF4q3AOYpcoXLF3kiFvZl7ful9HlJgof6jAKXGVS6kszksGh08EKUpUBAWNbtaSR4H1cZVvLUEo9X4Lijlk8wMO3svPI3z7h%2FktoMcu%2BP%2Fw66oiMOQbu0kFUvesZRCMUDRe6%2BXHOrYhpRaF5IqdWWiYNCE3Kk95g7iTagFLvEBq3INvXtpQ5ZeUsT6JRhemsGOepM%2FTG36kZ%2B%2F6uEeqMmlYcXrF1ullm0%2Bga4mLU6TXPtK4U9eFpt%2B6AszNA7QLQQZbCEK%2BP0waTg82Ca0B8TY%2FKuAY4xBIHoA4kudydJBt5wHMSx5nn9fG45GReVfAzrDesaj8YJ10fCWThaCjfo41TALS7VrZ1cocDb33LVmoU2xAw5kaJ913dbmig3LaezKaSCo7QsbtlIpks74r2Ne9Quji5Yx1GvTo8ISMwtqN4XG5Aq5FwhtQIXozmc7vejZ7P5RtuOtqLP5Rz1zPCBoEBMG5nZp2JflDmUDMo6eBOBtfihhpheI1ueZ%2BoPR%2FS9Xlvo%2BbmX4ioDWVIsVHy7QM%2BCINSSKM0Nr0Pb2qYeCrLIDb1zuEJtm04mhRQHpVnEAuFNe712MU3%2BpVB1%2B6jelTAvWqBjgOx36rduhk4VBEICtqGyJuwlFim4P5rB1jdPjC1zcDDBjqkAWYrZW9EY5171X9lyKWzWBV6C%2BHXY9fwenLiO9O0owzPpRR9wNxubmzm40K%2BIUvhVdvPAAJw4NV4q%2FP6OWjd2trUPS6fF7vX8m9V22sY0fu7tFYkzXyLJBa0SHUUhTGu1hLZbP1C34WKSRf2S9VBASupEYR%2B%2FQmOuitKaOSDHBb3AbpaDCsFQQQU0nVcMhgcOrSJpNljppRfyC830Y45vOYPf%2FDd&X-Amz-Signature=88900006b84f0f91894f8873826a676e2c67c8c47b16e97e8e3005ef410b76c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
