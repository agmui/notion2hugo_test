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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DM57N7J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MKHxlz4PkKenWLmiMdj5ioia0R01UnDbQzOb7S4z7QIhAPgTBWBG4Aa319FqXO4oXE5wVEDpZ9eb3MDRjHb8ViKaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcXlfkB0YmKtUvAnUq3AP%2B41LVbYTqxfki%2BIG09038HQ8ZjXv6o9kfvSXRk25MlY6ws4wt328HI8m3D%2FUXpazQhr%2FdvSm%2BJ1hthC4MNElCNlkCKT8oKSKUIglivv3sjkdStTDo%2BvTocCj5wKKflfOLcPT%2BuzGUP6FFpYbhKkctzNqfdhFiYg%2Bnl1ErGqoCnT1n0roMJYm3SUACwpqrAvleOZyjs%2BRmy%2FOWvEPTRBnf748MrSF9Y87gnjXUY%2BM3F%2FY5ziSx0DQqVA3Vtl3E4kY3oO8Tb5APHdReJT69pAjAHhs4MB6kIiuyoy81QavbQdbwmyvKwI7FiOwvJdCSsLmcpxJ9LcrXtmox%2FmQCv4Mor6Q7BrMbwfHpWa3fHH%2FcSq0hNuvJroG1P%2FGU2EGDpeYTxpVhZLt78PdC9iBdX8yLPnWiOzwZ7by0pkUQDLopvUWHIVTPjVIzQ2gX35o5er5VpXzXwbvc7hQFMknmJi3gcn2Y2NH8FqUpYvoqQnkO2p3f0LImlcThntoRuH%2FnhfP6A0eb3nmbV9mG770nwUaGcj0b3TEl54Gq%2Br8CFpA1iZAgpgz2rECv9Qlj7U0D%2BeNseeW6QcNCWkreKw1QnAiGkupUctrEJ1OxI6LsC7wuEedboTtNeoG0Kg0PmTCdtM%2FCBjqkAe9aF6oA0eX%2FIFXaDNOe8ozKn9Mislo4gDMzjENieVGipXszqx8d0Jre34hVvCuLIQ6ZMjzCV2LsS8vHLSYQLe5n7EhIc4EwbMphbRn6qqeMJsvNxHYuB0dqxCw72QWeg4lkOjgGindHHgXjV5QXefg1gpDf86%2FpvNhJxamZ%2B%2FDWVQWWTPe5%2FhqdCwAsktyKcxmB6AAFF0%2FowIBcIIiYfORddCNQ&X-Amz-Signature=e3bb5f4b5c512cde98b6423f6a03bca666e0045eacdb00f3ba770faff2e7475b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DM57N7J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MKHxlz4PkKenWLmiMdj5ioia0R01UnDbQzOb7S4z7QIhAPgTBWBG4Aa319FqXO4oXE5wVEDpZ9eb3MDRjHb8ViKaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcXlfkB0YmKtUvAnUq3AP%2B41LVbYTqxfki%2BIG09038HQ8ZjXv6o9kfvSXRk25MlY6ws4wt328HI8m3D%2FUXpazQhr%2FdvSm%2BJ1hthC4MNElCNlkCKT8oKSKUIglivv3sjkdStTDo%2BvTocCj5wKKflfOLcPT%2BuzGUP6FFpYbhKkctzNqfdhFiYg%2Bnl1ErGqoCnT1n0roMJYm3SUACwpqrAvleOZyjs%2BRmy%2FOWvEPTRBnf748MrSF9Y87gnjXUY%2BM3F%2FY5ziSx0DQqVA3Vtl3E4kY3oO8Tb5APHdReJT69pAjAHhs4MB6kIiuyoy81QavbQdbwmyvKwI7FiOwvJdCSsLmcpxJ9LcrXtmox%2FmQCv4Mor6Q7BrMbwfHpWa3fHH%2FcSq0hNuvJroG1P%2FGU2EGDpeYTxpVhZLt78PdC9iBdX8yLPnWiOzwZ7by0pkUQDLopvUWHIVTPjVIzQ2gX35o5er5VpXzXwbvc7hQFMknmJi3gcn2Y2NH8FqUpYvoqQnkO2p3f0LImlcThntoRuH%2FnhfP6A0eb3nmbV9mG770nwUaGcj0b3TEl54Gq%2Br8CFpA1iZAgpgz2rECv9Qlj7U0D%2BeNseeW6QcNCWkreKw1QnAiGkupUctrEJ1OxI6LsC7wuEedboTtNeoG0Kg0PmTCdtM%2FCBjqkAe9aF6oA0eX%2FIFXaDNOe8ozKn9Mislo4gDMzjENieVGipXszqx8d0Jre34hVvCuLIQ6ZMjzCV2LsS8vHLSYQLe5n7EhIc4EwbMphbRn6qqeMJsvNxHYuB0dqxCw72QWeg4lkOjgGindHHgXjV5QXefg1gpDf86%2FpvNhJxamZ%2B%2FDWVQWWTPe5%2FhqdCwAsktyKcxmB6AAFF0%2FowIBcIIiYfORddCNQ&X-Amz-Signature=5f13572ccfd82df970eea5539afe44d3ee7e88c0622096c08c895031819d2317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
