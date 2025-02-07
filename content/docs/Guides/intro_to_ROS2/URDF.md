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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RACUOA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDCZ%2BgaVGAN0uxHNQjNI6Z3i35tgNbw7wwVoBmrPR7pvAIhALYags2c8j7D3YoLNWzynunka1VXjkN5akbsOW7CejgKKv8DCHYQABoMNjM3NDIzMTgzODA1Igx0nFU96JH3W%2FNIv%2Fcq3AOUZyLnII5azK9Tg19P72tOGBy4V1uTeUEMiBz0QxnDwIvkI9F4zrhlGHiXsJb2iyXWrHev5bcnNWX98pzNR%2BPD9P3BsW8R%2Bdtgr0t2HByRJZxg34nzdv7SHQOmwqvrSDJ7iJj%2Ficdq%2BXeFjOLTWAde4UBdq7m5XNg9xvikoUZbWno0MMUUdfZdmxNPN25jp6Ono1E26la8xNHOB9Y7i4vFJ0N9F5kAl3fguSPmElndAzLxiZPEvhmmkD5nFV%2FGwdIdm7J99oqSHi7ntqXxhWt%2B7b%2B7FK4Q9iOfjruymxAhA0HPhgscIavkNaQEyY6rURcvCDRz9%2FwkFdjonBKvovTIt%2BwWEYLVgPmVmPOnNIqwx3%2BuFsYttJ5FM3TTI9ACqqtzUz46rp6NXoo0jTO0cbj7bvA9RSTBpsFumD3dndvvPGMzkrxF3yooMBsa9wS5DwAWGFPOc%2Fw0CJeP4HHvwws80eE5ztm74D5ztLRYfTsbhwqY%2FDENoYCrRzIbLaJKlu%2FBzmnsHNLXE1SJtZweFOck1uoftDLGfmKVY%2FAaPFyIon37gpXN84HOoo3q2Sdejfz5N%2FTPV5Y2DUZp1PLiWqLkw3eWvM8F4VR3WOWUxw4zuRoG%2FqcvlrPxPPLvFTC%2FjJi9BjqkAeZNwEBCLd2z23UdXHLHV%2BcUyU61P%2Fs6ZQTzdCOLlodmYQT%2F9kRSRhhhIjCE2RkvFvc3NJxa%2FO9G4VahwMHR9Rx572yy0MGHIbNTxym7jDiJiBUjO8iA9PqoEcqulhLnnebLeki5UmXDUkzf1F2hBjOVcsbAzL0lSJHvouhU%2FZA8WMjIPGKDCmXJEjmcQTuIgfniOPmh8x2YuAIYC73HgxE7N8Di&X-Amz-Signature=3ec45e1d8a70daa48fb0344079c3c8db562f90c4895c6177f862e09f4d79c609&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RACUOA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDCZ%2BgaVGAN0uxHNQjNI6Z3i35tgNbw7wwVoBmrPR7pvAIhALYags2c8j7D3YoLNWzynunka1VXjkN5akbsOW7CejgKKv8DCHYQABoMNjM3NDIzMTgzODA1Igx0nFU96JH3W%2FNIv%2Fcq3AOUZyLnII5azK9Tg19P72tOGBy4V1uTeUEMiBz0QxnDwIvkI9F4zrhlGHiXsJb2iyXWrHev5bcnNWX98pzNR%2BPD9P3BsW8R%2Bdtgr0t2HByRJZxg34nzdv7SHQOmwqvrSDJ7iJj%2Ficdq%2BXeFjOLTWAde4UBdq7m5XNg9xvikoUZbWno0MMUUdfZdmxNPN25jp6Ono1E26la8xNHOB9Y7i4vFJ0N9F5kAl3fguSPmElndAzLxiZPEvhmmkD5nFV%2FGwdIdm7J99oqSHi7ntqXxhWt%2B7b%2B7FK4Q9iOfjruymxAhA0HPhgscIavkNaQEyY6rURcvCDRz9%2FwkFdjonBKvovTIt%2BwWEYLVgPmVmPOnNIqwx3%2BuFsYttJ5FM3TTI9ACqqtzUz46rp6NXoo0jTO0cbj7bvA9RSTBpsFumD3dndvvPGMzkrxF3yooMBsa9wS5DwAWGFPOc%2Fw0CJeP4HHvwws80eE5ztm74D5ztLRYfTsbhwqY%2FDENoYCrRzIbLaJKlu%2FBzmnsHNLXE1SJtZweFOck1uoftDLGfmKVY%2FAaPFyIon37gpXN84HOoo3q2Sdejfz5N%2FTPV5Y2DUZp1PLiWqLkw3eWvM8F4VR3WOWUxw4zuRoG%2FqcvlrPxPPLvFTC%2FjJi9BjqkAeZNwEBCLd2z23UdXHLHV%2BcUyU61P%2Fs6ZQTzdCOLlodmYQT%2F9kRSRhhhIjCE2RkvFvc3NJxa%2FO9G4VahwMHR9Rx572yy0MGHIbNTxym7jDiJiBUjO8iA9PqoEcqulhLnnebLeki5UmXDUkzf1F2hBjOVcsbAzL0lSJHvouhU%2FZA8WMjIPGKDCmXJEjmcQTuIgfniOPmh8x2YuAIYC73HgxE7N8Di&X-Amz-Signature=1e77e9d33a1c60da4f2e0468278b96dc8c22bbfc274f3ffd9aa4a321172a2aba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
