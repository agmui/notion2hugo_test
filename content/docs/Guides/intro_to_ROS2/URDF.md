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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFZNGNW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxgfn60JWcUtNEf7pQTA%2F%2Bm6xqUXxNfP%2F3SXYvXjHkvAIgfSnhcAWUc%2BoRPoXL5lf261mUD4n6qOaq2QN6TFqBzfUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDN5iWQfFtLR4RTg2TCrcA%2FyBnmyblC0rJ9GydHAeh60kg3SnLXSjwqdhHhIo1go5qUztg72AqIh6pFXwsFyc2xSSlmi3F6eY1b3lr79e9IqJZ7uk3ExlMYK92ofNe8hN%2FMiZhAkSjCTocba04YEb1spKTapOxO5QZyifN0c1efpKrGmXD8gKEdtIbb0PR%2Bd6seCL2ejUnkpyiwbCNHcjUoig0ws4XwbEPiNYysfJsuUIs2gzfuQGf6ZIzaCM%2FDh6fHUmb818BSk0pZiNKfdluDpY789Mbe2iyPyqsRd%2F7KUFWZsvsIOXM6pYPdmuRm5NAU4%2FiCHtc1hNwa5oSj8I1OnruHe8hmeDRXLuBxsEmJq19A0ZX7p0YuGcIADPx9QwqTol0mdE7IM7TeoW4aSha1BQLAx%2FQQ1pCAkRD8PmCyBg9GkKtwKitxcPyrOIOzogaN%2BlbbQTPhnxeP%2FfrXv1jYGTXOvYr5tho8lSOBuNhZFiQhAn9xoSZHYtJTVTfDm8w2NlkGziOIWX3S3J4vFznq12XvXoqG6W7Hd66ACDG4rlEW%2FFmGe3j0h6s5lLs4X%2BTHA0qc2RlkjkIjefuzmmX%2FxjXRjtmIWQ08RS3uXeRKdh35AIQnYWFJgWPDwMmMg0zxkwSd1mXFJrs%2Fx5MKrAhL0GOqUBlJslL0dAMF4kfqPH3d%2B9F%2F9lD93Ppsic2xCUQOf%2B9209QRkHAvbDIGLzGxB16V1b8NYGYKashNAr%2BQsK3cPcqO4le4DOljv0%2BwwfiM0GotixvGZ8wYLQW1BAaLCSqPRspgtwrmEPcxV6i%2F60dMzHuy7YVeBI01oAws6SqOZaDLXc1IEZEKX46EW9JS%2B7RgBck%2B4T8JADyLYphEEQZIIpunwzUjAI&X-Amz-Signature=cf06ec3d181d175b92d0c76a40ee408c01272e4364f6857b5dd7682839c98393&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFZNGNW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxgfn60JWcUtNEf7pQTA%2F%2Bm6xqUXxNfP%2F3SXYvXjHkvAIgfSnhcAWUc%2BoRPoXL5lf261mUD4n6qOaq2QN6TFqBzfUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDN5iWQfFtLR4RTg2TCrcA%2FyBnmyblC0rJ9GydHAeh60kg3SnLXSjwqdhHhIo1go5qUztg72AqIh6pFXwsFyc2xSSlmi3F6eY1b3lr79e9IqJZ7uk3ExlMYK92ofNe8hN%2FMiZhAkSjCTocba04YEb1spKTapOxO5QZyifN0c1efpKrGmXD8gKEdtIbb0PR%2Bd6seCL2ejUnkpyiwbCNHcjUoig0ws4XwbEPiNYysfJsuUIs2gzfuQGf6ZIzaCM%2FDh6fHUmb818BSk0pZiNKfdluDpY789Mbe2iyPyqsRd%2F7KUFWZsvsIOXM6pYPdmuRm5NAU4%2FiCHtc1hNwa5oSj8I1OnruHe8hmeDRXLuBxsEmJq19A0ZX7p0YuGcIADPx9QwqTol0mdE7IM7TeoW4aSha1BQLAx%2FQQ1pCAkRD8PmCyBg9GkKtwKitxcPyrOIOzogaN%2BlbbQTPhnxeP%2FfrXv1jYGTXOvYr5tho8lSOBuNhZFiQhAn9xoSZHYtJTVTfDm8w2NlkGziOIWX3S3J4vFznq12XvXoqG6W7Hd66ACDG4rlEW%2FFmGe3j0h6s5lLs4X%2BTHA0qc2RlkjkIjefuzmmX%2FxjXRjtmIWQ08RS3uXeRKdh35AIQnYWFJgWPDwMmMg0zxkwSd1mXFJrs%2Fx5MKrAhL0GOqUBlJslL0dAMF4kfqPH3d%2B9F%2F9lD93Ppsic2xCUQOf%2B9209QRkHAvbDIGLzGxB16V1b8NYGYKashNAr%2BQsK3cPcqO4le4DOljv0%2BwwfiM0GotixvGZ8wYLQW1BAaLCSqPRspgtwrmEPcxV6i%2F60dMzHuy7YVeBI01oAws6SqOZaDLXc1IEZEKX46EW9JS%2B7RgBck%2B4T8JADyLYphEEQZIIpunwzUjAI&X-Amz-Signature=387500501e9ece50fa8d13a045f433997d6c4be32e6b17bafeff316c12a2e1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
