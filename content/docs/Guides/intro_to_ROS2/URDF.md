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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2Z2JG7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJcol2hx8bFqwWnlRKwVKDDgBFUrYBu1P%2FI9nn8%2BemdAiEAsKRplXtLpRGAhuGId1PfuiWVV3IjNGchV4113TTqcVIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGJUazy4OU7ALCp7CyrcAyGBHwOLZTFIvoJsiFTttmPMVfxP6xDxv%2FpapQXnT7NbQ4Pbq2iYvQOh6SUxANpijiQKpyA7E1QhzoHMiPo%2FaFdWZJxAZLSUxwNLOol7tcXrc3Ogf3Ur48sbNBuxEgMB6xAHINGDTSVsqoFDIH74Gw5kKW8EBKW74ObUV%2Fp%2BM7AkPZ5lLm9SpQ%2Bs34Y6YR8CTu5mX5wPeERUy7VIhX2xIknmdka4U%2F6eHiqHcuN0RXndye1ZoDhihmEUySwyJy8YIAYUwizRN6DjMcLjLneHQb27gqNIrE67ap8clWGy%2Fy7YJ8%2BImE9obkbStHuyMfBgN4IhCpYsbUOSF0c4FSd%2FyvmpEkBCzxV5PU51Bza5xS1QpAWXYlseH2X37cxDNDOHrPHsiLWxp20jGtgR02SNDj1NQSdsBpVaqtrX1HfCoMBtlXn%2FS8GvcEAgCZRveYwHyIJtsVHJd3mh5h92Icn2jOnf5wJZnRGlDL0yAwuyxATECXf8EWRVYo7Uop02uXsEpsT8Xq5sCMujDk3gMcoS1Tv4CZIZ2sa9ua%2BGjLkH4xOJTQ2YHatuNQlj2XuLSW4FNw%2F4V0jfuBexBDLgSnTpof5HgRU3PoodhpU9M8XAdLQBqp4rGYPlMjfsJrfSMP%2Bi4r4GOqUBCIRZLNoWLj84L0pxYCNu3IsD7SPIpkSVQ2d3Qp4JvOfCc2HXd52deK%2BE0WxRwLBBhCXzZ0MzSxtn4ZqLmdnpjsmN3pjziZw%2BmfxFX1LwnS3yt6XLtT1e3ubQmZFMDlFom8p1n5sWDq6EiWe8VcTWFDEs8uzCeeBgDOjGSEASKeihMQspQf4YEozBG%2BX7aT%2BoZ58PGMhSE%2FpFE%2FV50KzPab8Wv7as&X-Amz-Signature=fd7b38f998eae929803c8274b4a2aa154c1a3e5bac6de72896b12408b0dd3a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2Z2JG7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJcol2hx8bFqwWnlRKwVKDDgBFUrYBu1P%2FI9nn8%2BemdAiEAsKRplXtLpRGAhuGId1PfuiWVV3IjNGchV4113TTqcVIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGJUazy4OU7ALCp7CyrcAyGBHwOLZTFIvoJsiFTttmPMVfxP6xDxv%2FpapQXnT7NbQ4Pbq2iYvQOh6SUxANpijiQKpyA7E1QhzoHMiPo%2FaFdWZJxAZLSUxwNLOol7tcXrc3Ogf3Ur48sbNBuxEgMB6xAHINGDTSVsqoFDIH74Gw5kKW8EBKW74ObUV%2Fp%2BM7AkPZ5lLm9SpQ%2Bs34Y6YR8CTu5mX5wPeERUy7VIhX2xIknmdka4U%2F6eHiqHcuN0RXndye1ZoDhihmEUySwyJy8YIAYUwizRN6DjMcLjLneHQb27gqNIrE67ap8clWGy%2Fy7YJ8%2BImE9obkbStHuyMfBgN4IhCpYsbUOSF0c4FSd%2FyvmpEkBCzxV5PU51Bza5xS1QpAWXYlseH2X37cxDNDOHrPHsiLWxp20jGtgR02SNDj1NQSdsBpVaqtrX1HfCoMBtlXn%2FS8GvcEAgCZRveYwHyIJtsVHJd3mh5h92Icn2jOnf5wJZnRGlDL0yAwuyxATECXf8EWRVYo7Uop02uXsEpsT8Xq5sCMujDk3gMcoS1Tv4CZIZ2sa9ua%2BGjLkH4xOJTQ2YHatuNQlj2XuLSW4FNw%2F4V0jfuBexBDLgSnTpof5HgRU3PoodhpU9M8XAdLQBqp4rGYPlMjfsJrfSMP%2Bi4r4GOqUBCIRZLNoWLj84L0pxYCNu3IsD7SPIpkSVQ2d3Qp4JvOfCc2HXd52deK%2BE0WxRwLBBhCXzZ0MzSxtn4ZqLmdnpjsmN3pjziZw%2BmfxFX1LwnS3yt6XLtT1e3ubQmZFMDlFom8p1n5sWDq6EiWe8VcTWFDEs8uzCeeBgDOjGSEASKeihMQspQf4YEozBG%2BX7aT%2BoZ58PGMhSE%2FpFE%2FV50KzPab8Wv7as&X-Amz-Signature=beddb61557166e2abc70a95795eb6001c59076189b152be70af0e033fd493a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
