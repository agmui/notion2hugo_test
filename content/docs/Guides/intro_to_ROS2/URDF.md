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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUQYRG4K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNOwViJG%2F6HujbzblshkqvhuQ3MFbwo6CZgoTlUfPkoAiBx46p7vfx0t9Sklonyz7qnyzN9wa7J1Zs9AFjlTwkQlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM717vg6YNnVTmokJ8KtwDisV3%2F3d7q4GsNpe9fViauz%2BV68txQ%2Bu5PCQiIxz0uwDvzUpeU1Hl8rJjHuculWH2Xz%2FTKXXzu%2BcYAAKYVhoRiO73wHAieBofQbCOolXAFXi%2FfkODpJFD7USaer5B%2B42ZGilcgN6LC%2FAVbPR7Ya1Hx2OUMPY8hpIBLjB3ig%2FiKrTD317lX3CmZW8PLG4ep5Ic6SkzJlp5eDr5uxRk8sNBu6GsvxEcsdBANtIJogT3ssP0R%2BFmbh8IVX1iCM52ar9c4eJEiLsy1gzQALIHZ78phNsxEzq83TZKk5OZCWsMZvDMHFRJ%2FR5PmvgS3exxpMJB7GgmdVnAQbITMcb1HABGXmLshskYoe75V%2FyF1RBORQemq2sy9uUoNar6Flr1phTGt5Ht7MIlrz6w3hkZ455F7ZcRd7R9HHeW2vX1zfHxNwdcLkZ1A8IV3HtIY0lhIOTjVXQrWfEGb2XpDw2M7r68%2BLqqtZZylAbIS7metQp8WGkewI9kw6ORzD63MWCGKfJu0ChGn5xjSLTaGp6DZrks2nK4IKQRUqZVBxznvTlBnQXpHkPn3fC3chpdA3%2BVpWgEt3AcPccElZy2mPsPhszBos1b2Me1KhP7pDA06eVRHuykR18F7LK17fPIw18wrYejvQY6pgGc8UJMCZ1XQFyJrgMWc4i8Pcgb67AEMwRkpJQplplOLdbjAn1ojXWMHGBcSJ2Z85HsNceq9b8BaybFqqQgjGrAyu8prsgUEGaxZh5eI7gd%2FFnToysBMSKBRAbgyjpOWzrKayB6zb%2Fahiy598Ae78WlQPLZlQYpHEdiqBdEALdzN3RUdf%2BEZgNVKjYJxD0dfBF3wdaGw97RonxfDVRo6Uq2iIQdtHbj&X-Amz-Signature=300947ac2f5799f738a90ada1ada9316b7dccc9cabb57994541394bfd8d3c84a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUQYRG4K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNOwViJG%2F6HujbzblshkqvhuQ3MFbwo6CZgoTlUfPkoAiBx46p7vfx0t9Sklonyz7qnyzN9wa7J1Zs9AFjlTwkQlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM717vg6YNnVTmokJ8KtwDisV3%2F3d7q4GsNpe9fViauz%2BV68txQ%2Bu5PCQiIxz0uwDvzUpeU1Hl8rJjHuculWH2Xz%2FTKXXzu%2BcYAAKYVhoRiO73wHAieBofQbCOolXAFXi%2FfkODpJFD7USaer5B%2B42ZGilcgN6LC%2FAVbPR7Ya1Hx2OUMPY8hpIBLjB3ig%2FiKrTD317lX3CmZW8PLG4ep5Ic6SkzJlp5eDr5uxRk8sNBu6GsvxEcsdBANtIJogT3ssP0R%2BFmbh8IVX1iCM52ar9c4eJEiLsy1gzQALIHZ78phNsxEzq83TZKk5OZCWsMZvDMHFRJ%2FR5PmvgS3exxpMJB7GgmdVnAQbITMcb1HABGXmLshskYoe75V%2FyF1RBORQemq2sy9uUoNar6Flr1phTGt5Ht7MIlrz6w3hkZ455F7ZcRd7R9HHeW2vX1zfHxNwdcLkZ1A8IV3HtIY0lhIOTjVXQrWfEGb2XpDw2M7r68%2BLqqtZZylAbIS7metQp8WGkewI9kw6ORzD63MWCGKfJu0ChGn5xjSLTaGp6DZrks2nK4IKQRUqZVBxznvTlBnQXpHkPn3fC3chpdA3%2BVpWgEt3AcPccElZy2mPsPhszBos1b2Me1KhP7pDA06eVRHuykR18F7LK17fPIw18wrYejvQY6pgGc8UJMCZ1XQFyJrgMWc4i8Pcgb67AEMwRkpJQplplOLdbjAn1ojXWMHGBcSJ2Z85HsNceq9b8BaybFqqQgjGrAyu8prsgUEGaxZh5eI7gd%2FFnToysBMSKBRAbgyjpOWzrKayB6zb%2Fahiy598Ae78WlQPLZlQYpHEdiqBdEALdzN3RUdf%2BEZgNVKjYJxD0dfBF3wdaGw97RonxfDVRo6Uq2iIQdtHbj&X-Amz-Signature=49e12a9322c4f9685b0ed15859278d6bbbf86e3a4ee99d027435a3a2df151e81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
