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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SJDZCJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFP3vY2Xw450rnMGwjlxbKqgi2yxsY9M3nHcI6LxaqTnAiAkc0dzlyP5eIMg6zUiIhJybS6rvUkVnXgqrHkSjTy40iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBThD1mWfWejGAlK5KtwDH1JG%2BRuZhcSye%2BxGWPT2c1hz0oqip3sorxhbWzRUsp0%2FgDNtJDFi1mwNuYCLfk1Iu3TOWORD%2BOOUTPjXFmI5c8Cg6N%2Fg%2B%2FvMhruxnc%2B30BFPMGY31nMmdUBH61U86p10L59AkZgdgLH6VSRoysGRH0j6zbXFv1yXJ7rvlDds3mNDmTAmL4kryfcPbnliZLLSvM9F1gcH7EWSPpS9lmZDfLipe2%2FButblyPOhgk0cZv5qxMxFCo8MnF3dq7CHV9vTJEgpD5sEhQbFqShs%2FSBNbFBIjyz5tcRiyTHwBnv8EQ38gYl%2FY%2BLel2QhCZyGxE58TQQ1mErkHhFAeG%2BFdCpefLwSYqRxCZNHufj7Fk7P194lynRuBK1pJGNY6Uk7N%2FhYgqDxKl5k6ZkhghMKssbcJDTr3XFzr%2FRDqUDnQHyu2zmFe3oqedjHPuZfYz8VH8qMdhf05FNxreF8SOarlYfBASxj6Vl2Tr50mRPi%2B42CRU1%2B1PcRXABM9UaaYwcu9oTOkbp6jN2QtY3aZwiogpDBbgp6flbAxS%2FC9rIFF8T4Lyvn6zKU5U1sBrDyLgEk7ccDMogDcJmJCL9JQTSR7H%2Bc1YhtyCs9Rj4kqbTA3f91bKnMaYGDfczWnUhBiK8wzM2gxAY6pgHoBAw2rGnTpvOkfawHymtCN9G9K6B3a%2BxJAVgr6ptpg3SrPI%2F0xJE5FY64yHAbNv1uf7WB956hMqHCmGz9dP8tzzuv4f3EyLQ%2BGTu8EJxu0z2sdMJfpv1DttOI3W%2BIS3aNlhhlwMVANQvAn64ViMtqSOwM7%2ForpJ9ZPA9XLqV5gjcXOk%2FEanyXFqkJv3gB9xjEEuBToruKtvzdoB0y8S6PN3DOyW7Y&X-Amz-Signature=bdad34581055e4027e06b09b61acda660f865a708478df3873555da78b7c6dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SJDZCJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFP3vY2Xw450rnMGwjlxbKqgi2yxsY9M3nHcI6LxaqTnAiAkc0dzlyP5eIMg6zUiIhJybS6rvUkVnXgqrHkSjTy40iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBThD1mWfWejGAlK5KtwDH1JG%2BRuZhcSye%2BxGWPT2c1hz0oqip3sorxhbWzRUsp0%2FgDNtJDFi1mwNuYCLfk1Iu3TOWORD%2BOOUTPjXFmI5c8Cg6N%2Fg%2B%2FvMhruxnc%2B30BFPMGY31nMmdUBH61U86p10L59AkZgdgLH6VSRoysGRH0j6zbXFv1yXJ7rvlDds3mNDmTAmL4kryfcPbnliZLLSvM9F1gcH7EWSPpS9lmZDfLipe2%2FButblyPOhgk0cZv5qxMxFCo8MnF3dq7CHV9vTJEgpD5sEhQbFqShs%2FSBNbFBIjyz5tcRiyTHwBnv8EQ38gYl%2FY%2BLel2QhCZyGxE58TQQ1mErkHhFAeG%2BFdCpefLwSYqRxCZNHufj7Fk7P194lynRuBK1pJGNY6Uk7N%2FhYgqDxKl5k6ZkhghMKssbcJDTr3XFzr%2FRDqUDnQHyu2zmFe3oqedjHPuZfYz8VH8qMdhf05FNxreF8SOarlYfBASxj6Vl2Tr50mRPi%2B42CRU1%2B1PcRXABM9UaaYwcu9oTOkbp6jN2QtY3aZwiogpDBbgp6flbAxS%2FC9rIFF8T4Lyvn6zKU5U1sBrDyLgEk7ccDMogDcJmJCL9JQTSR7H%2Bc1YhtyCs9Rj4kqbTA3f91bKnMaYGDfczWnUhBiK8wzM2gxAY6pgHoBAw2rGnTpvOkfawHymtCN9G9K6B3a%2BxJAVgr6ptpg3SrPI%2F0xJE5FY64yHAbNv1uf7WB956hMqHCmGz9dP8tzzuv4f3EyLQ%2BGTu8EJxu0z2sdMJfpv1DttOI3W%2BIS3aNlhhlwMVANQvAn64ViMtqSOwM7%2ForpJ9ZPA9XLqV5gjcXOk%2FEanyXFqkJv3gB9xjEEuBToruKtvzdoB0y8S6PN3DOyW7Y&X-Amz-Signature=70187cf5242381149d91fe38b1e045f9e2b110062904f29f1eef03aa445ac21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
