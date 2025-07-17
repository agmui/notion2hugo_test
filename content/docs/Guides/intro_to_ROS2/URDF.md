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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGH7GEUW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDj4%2FC6n4k%2FmMFGr%2BnRQxazOQwOgUjCNVBRtW%2F7Z2VjvAiA4jYJs6sAjFCk2G9bjpN%2F6ESgOSayTmK4oFiPhQfGkJCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMebCOW3vwqXAa7IxtKtwDuXNBHQbY5L03vcSLeoDm6eHNHRXOKx7z2vXHOLsmufO%2BkxQzcWkl3MFnXfwxwJNqRnXzlSf9yZfxNwirG6j9n6a5o%2FmDdNjzsqBDYd1nzg9tnYt27xE3vEP7BWmrnMS2RH0t2oDeqeftvm6vHvK77tU7e%2FIGPQUtx05J%2BUSdUAcnpoxUOc%2FAuDV9bsnzCv5HjltYwhj5jP7jpLv6lC9XTYmzuHRjkg6XDD1QNoBevTxSB8ksJL6i8o2WTeNKYsrVBqYOJniZQf9nFVHujYJr%2F4rQ6UDgb0RPK38K3n1YTQYJo88l2Y%2BGhYJNyIocyPpfzzd2ygb%2BCjqtxJVV3vBuceUBgPjsYt1ccIeauWNHXLySMR9uRCDMNPGrM3NZcxjYRY0ZzhaPJQXrH8W5AktucAy8zWDUi5A5ec5aKSZxRGHq%2BOy08jsWzcQHpxiay8HRWjRH3y3VVLyV9AtOuO1e0ByVXXidydKt8bQkH2Cugneh3eckmo6lTm0NzC6JUblza4YOZbGlKOTucaGlsv9N85RBqNUU8RbdLaoMw7QQMxmjfcVbtU1DzaEQT3zV%2BjvAHjucxe46Yn%2Fvzwzrz2OZFOu5Eo5e29gImPFced8s6kI3Sx7iFmpoKmCNDFYwqufkwwY6pgHsiF76Fa7NrfpI2ofHTfkk93Z%2B3ELk8iY0L%2F0umgboZvfec5BbT8T6pjv10PNWICv68vGiux8suwpu5uQNBtOaHsWFsRsqIO7vjfCTHayUlnksE3ZaUGdFWGAnDCNXNNQ0YZzQ%2FoGeXuHhzOHbMIxZklhcgmzi%2FuCqeRAE9RvW4KyR2JHuDdYNjD2Vf7kIXU8GjCr4OWFgir%2FvOmpmB1iAyktM516s&X-Amz-Signature=24bba05ab4eecdfe91c3b0bf0375017b851840910d9dd496bee2622cd0df571e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGH7GEUW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDj4%2FC6n4k%2FmMFGr%2BnRQxazOQwOgUjCNVBRtW%2F7Z2VjvAiA4jYJs6sAjFCk2G9bjpN%2F6ESgOSayTmK4oFiPhQfGkJCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMebCOW3vwqXAa7IxtKtwDuXNBHQbY5L03vcSLeoDm6eHNHRXOKx7z2vXHOLsmufO%2BkxQzcWkl3MFnXfwxwJNqRnXzlSf9yZfxNwirG6j9n6a5o%2FmDdNjzsqBDYd1nzg9tnYt27xE3vEP7BWmrnMS2RH0t2oDeqeftvm6vHvK77tU7e%2FIGPQUtx05J%2BUSdUAcnpoxUOc%2FAuDV9bsnzCv5HjltYwhj5jP7jpLv6lC9XTYmzuHRjkg6XDD1QNoBevTxSB8ksJL6i8o2WTeNKYsrVBqYOJniZQf9nFVHujYJr%2F4rQ6UDgb0RPK38K3n1YTQYJo88l2Y%2BGhYJNyIocyPpfzzd2ygb%2BCjqtxJVV3vBuceUBgPjsYt1ccIeauWNHXLySMR9uRCDMNPGrM3NZcxjYRY0ZzhaPJQXrH8W5AktucAy8zWDUi5A5ec5aKSZxRGHq%2BOy08jsWzcQHpxiay8HRWjRH3y3VVLyV9AtOuO1e0ByVXXidydKt8bQkH2Cugneh3eckmo6lTm0NzC6JUblza4YOZbGlKOTucaGlsv9N85RBqNUU8RbdLaoMw7QQMxmjfcVbtU1DzaEQT3zV%2BjvAHjucxe46Yn%2Fvzwzrz2OZFOu5Eo5e29gImPFced8s6kI3Sx7iFmpoKmCNDFYwqufkwwY6pgHsiF76Fa7NrfpI2ofHTfkk93Z%2B3ELk8iY0L%2F0umgboZvfec5BbT8T6pjv10PNWICv68vGiux8suwpu5uQNBtOaHsWFsRsqIO7vjfCTHayUlnksE3ZaUGdFWGAnDCNXNNQ0YZzQ%2FoGeXuHhzOHbMIxZklhcgmzi%2FuCqeRAE9RvW4KyR2JHuDdYNjD2Vf7kIXU8GjCr4OWFgir%2FvOmpmB1iAyktM516s&X-Amz-Signature=29ebef31a2308451594e7cfbb5ecd5a2b3523707d4e28cc8ebff8daa43c6b205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
