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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2DBDP4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCcYeiP%2FXjhVSnhq%2BTqiS8bikPL1%2BJ5z52jzFmOR3mG7gIgCoi37rGKiBaKosG5mR7B8mHz0tbqu6dTC36if0pg5qIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHJLBgi0Io3zvt9TyrcA0%2F7ZSvT3rUp9ayw6%2FbzfGjUpTrRTTkvJSeSW%2B7%2FqU4tv7Kx0A9K6MtKHFodPf%2BLp9TJf1%2FzboQ19q72fSLmXlCvBQBvWNh7OblusUuwlTdBijR%2BWplRtTIjeWtqExwoDObXsIfUuihAvDi9%2B5UMSGw1N6t%2Bl8vhRAZRAM91ItiEerQ%2FR1pufoP7DjYnuODW%2B5aHEv93sPGaTQatDb5M7VHMuWA67AQP8AgwiNA7kkoMyusS0gUDJlgeugba0QL54%2FnA7xXRsow6FsRriysEr1ZG5EgTKYMbHvqmxJFMxNTiPJB8OmIj7prLk0WFU4pl9vMBpcQG2WXdsnan%2FdeChkszH8OmAc9aPjwcSqcgUHgsT5FHPtJpSAEcSUyRalD4YLtdpDL%2B1LPJ00NFt3tWojzUvwZt%2BAC%2FOB8V1z75Ql63%2B3zaylNFrtyp1s7CpP2QTc%2FM1y5q3MhipGCPXbGNUHrV4wj6xQ6%2Fk7v8IVgSf9nnrGeFQVWvzPT6uLOF0ty%2FQ6%2FOWUaA%2BkI4oabVfQSqs1NrrZAExf0h1BCSaoLVJk8w4GYL0s2Ok6XOLOY1mLBriEG28kwbWLYhAwZ8AOa5YFz7%2FPwKZaNfANqMQXh3fzw9YtSJI0leRULojIJtMPzto8AGOqUBdQKdk1mZcaSs6WX3wy6JK8OdL4NHT4s84g6rAlnvf6%2FYMmN4T1c4RNM8piqSYWZKyNZPBm52SrqlEhsh2cp5WIZsa5oI7tlHSHDJ0kk%2B42smenbhfJ21VKN8DXRzCkI0UxpawjRWuJXm6U6KigDX35wyI1UqLFBjoH6gSGlFJyRNPv0A88p6c2fEF2b6tIy4D4s3FxH6EF9v78lKXv52HceN%2FQ8O&X-Amz-Signature=ced1e85cac75a5d84067f2ea9aae63b22d9a05b62a32b7025eb99140819eb8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2DBDP4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCcYeiP%2FXjhVSnhq%2BTqiS8bikPL1%2BJ5z52jzFmOR3mG7gIgCoi37rGKiBaKosG5mR7B8mHz0tbqu6dTC36if0pg5qIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHJLBgi0Io3zvt9TyrcA0%2F7ZSvT3rUp9ayw6%2FbzfGjUpTrRTTkvJSeSW%2B7%2FqU4tv7Kx0A9K6MtKHFodPf%2BLp9TJf1%2FzboQ19q72fSLmXlCvBQBvWNh7OblusUuwlTdBijR%2BWplRtTIjeWtqExwoDObXsIfUuihAvDi9%2B5UMSGw1N6t%2Bl8vhRAZRAM91ItiEerQ%2FR1pufoP7DjYnuODW%2B5aHEv93sPGaTQatDb5M7VHMuWA67AQP8AgwiNA7kkoMyusS0gUDJlgeugba0QL54%2FnA7xXRsow6FsRriysEr1ZG5EgTKYMbHvqmxJFMxNTiPJB8OmIj7prLk0WFU4pl9vMBpcQG2WXdsnan%2FdeChkszH8OmAc9aPjwcSqcgUHgsT5FHPtJpSAEcSUyRalD4YLtdpDL%2B1LPJ00NFt3tWojzUvwZt%2BAC%2FOB8V1z75Ql63%2B3zaylNFrtyp1s7CpP2QTc%2FM1y5q3MhipGCPXbGNUHrV4wj6xQ6%2Fk7v8IVgSf9nnrGeFQVWvzPT6uLOF0ty%2FQ6%2FOWUaA%2BkI4oabVfQSqs1NrrZAExf0h1BCSaoLVJk8w4GYL0s2Ok6XOLOY1mLBriEG28kwbWLYhAwZ8AOa5YFz7%2FPwKZaNfANqMQXh3fzw9YtSJI0leRULojIJtMPzto8AGOqUBdQKdk1mZcaSs6WX3wy6JK8OdL4NHT4s84g6rAlnvf6%2FYMmN4T1c4RNM8piqSYWZKyNZPBm52SrqlEhsh2cp5WIZsa5oI7tlHSHDJ0kk%2B42smenbhfJ21VKN8DXRzCkI0UxpawjRWuJXm6U6KigDX35wyI1UqLFBjoH6gSGlFJyRNPv0A88p6c2fEF2b6tIy4D4s3FxH6EF9v78lKXv52HceN%2FQ8O&X-Amz-Signature=033b448a56203c057d1d389dc795728ee40101ed8eaffeca47c818174119a665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
