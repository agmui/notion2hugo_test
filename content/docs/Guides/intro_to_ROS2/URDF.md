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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=e8c5e27ff95e9eae6c7d44dcc26f0de8efec3d7d0b146004bf3b899b7d0e6651&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=33b2e0e695c8078e82052dcc7f5f134969e0f69b117bcc7fe3edac03e3743b24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
