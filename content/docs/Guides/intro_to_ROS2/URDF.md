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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RLCMCQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yyswNWW3HwwwZqAA2iAEmkU%2FT7Oi1bNbWf8i%2F%2FmmbwIhAKhrbHZs0%2FUM0IcYte2C0EUA3XkWP3pND4Ca8kXsTLYHKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0AfixNoji7kAjEQq3AMHdvpjchJ4GbU%2FlfEcqELeIqdQfFm%2FlD9%2BO2ZLnQ%2B00BrknhQ1auV6riPMWavr6jhzWxrexhm44b6mqCROXMr9bWEHH%2FYzjKZIOSLlWoa1H6HvtselbjcF0ze9qEkSEse3lrkKzq1j0DMmR4nUAbAsPTGTsq3Mz9pQtQCk2hkVIaFKVnYbntGvRB7PZSavnv2tOcc00bFxH8MzB47E4%2Ba6oiN8MBNqdKXM1S2OCXGbMsyI7BkPZ%2FnaBypnmv2QMa0GMbxZRzens%2FqYb8whLT10g5F9RbFd6YEQcZs%2BnD5mTqsArFlrkcKAYJ%2BYssKAXBblAyeLxeREYCxW9OD%2FOMTYQhVFT8DYL%2BKOC%2F7dh0JL5wpEjPtvdZa%2BwEwZ73GZjkje%2B3M8aYwxMkoDj%2F%2FwZPn1PYq7Qly8VpyCz378A1UCeZJftIpg8QYoZC47A2jgZ4soPP8bi43h5V%2BbS8d%2B0yHIRQHf5TBPZ%2FywqiNOZ%2FZ0XeOtwcVvuv8BRKkmYxT5XzfWJB%2FMD3hLwzBK9wC2bTO9z9W%2FmL9eoHEDCIxTs%2BoYrqf%2Bxk71AS3%2FDcWG6vgjWKWGPF9ROxkcS7ZHflazrcUFburrXaLeQ020T7AfGfSXszMp7Hi8acOLsDXvKjDy%2BPTDBjqkAR%2BoeUvo7W%2FlDrWkGQScK%2FHCTqmYMyBPNG5pYlN%2FIZsfHVwkxFzB460jUT1Uglc%2F8H58xylWz8gbuhOk%2B3YJJ1ut%2BhsM2M8Zu0Vs2uNABK2D1JBPiSdWdkD1R7LR15UEEKCqCEL%2FBhwHbxNfG1u3OsjclMI1D9WpuHReEFyN%2BMEJMPyJEDobaIuPAzySk5bWcDWTm6bn%2Fbk03bR1hgAnEb2%2FTumm&X-Amz-Signature=8475dae9eeea7964aac4c051adf7e8beaf6ee0201e7f949e63bf823b1f829b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RLCMCQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yyswNWW3HwwwZqAA2iAEmkU%2FT7Oi1bNbWf8i%2F%2FmmbwIhAKhrbHZs0%2FUM0IcYte2C0EUA3XkWP3pND4Ca8kXsTLYHKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0AfixNoji7kAjEQq3AMHdvpjchJ4GbU%2FlfEcqELeIqdQfFm%2FlD9%2BO2ZLnQ%2B00BrknhQ1auV6riPMWavr6jhzWxrexhm44b6mqCROXMr9bWEHH%2FYzjKZIOSLlWoa1H6HvtselbjcF0ze9qEkSEse3lrkKzq1j0DMmR4nUAbAsPTGTsq3Mz9pQtQCk2hkVIaFKVnYbntGvRB7PZSavnv2tOcc00bFxH8MzB47E4%2Ba6oiN8MBNqdKXM1S2OCXGbMsyI7BkPZ%2FnaBypnmv2QMa0GMbxZRzens%2FqYb8whLT10g5F9RbFd6YEQcZs%2BnD5mTqsArFlrkcKAYJ%2BYssKAXBblAyeLxeREYCxW9OD%2FOMTYQhVFT8DYL%2BKOC%2F7dh0JL5wpEjPtvdZa%2BwEwZ73GZjkje%2B3M8aYwxMkoDj%2F%2FwZPn1PYq7Qly8VpyCz378A1UCeZJftIpg8QYoZC47A2jgZ4soPP8bi43h5V%2BbS8d%2B0yHIRQHf5TBPZ%2FywqiNOZ%2FZ0XeOtwcVvuv8BRKkmYxT5XzfWJB%2FMD3hLwzBK9wC2bTO9z9W%2FmL9eoHEDCIxTs%2BoYrqf%2Bxk71AS3%2FDcWG6vgjWKWGPF9ROxkcS7ZHflazrcUFburrXaLeQ020T7AfGfSXszMp7Hi8acOLsDXvKjDy%2BPTDBjqkAR%2BoeUvo7W%2FlDrWkGQScK%2FHCTqmYMyBPNG5pYlN%2FIZsfHVwkxFzB460jUT1Uglc%2F8H58xylWz8gbuhOk%2B3YJJ1ut%2BhsM2M8Zu0Vs2uNABK2D1JBPiSdWdkD1R7LR15UEEKCqCEL%2FBhwHbxNfG1u3OsjclMI1D9WpuHReEFyN%2BMEJMPyJEDobaIuPAzySk5bWcDWTm6bn%2Fbk03bR1hgAnEb2%2FTumm&X-Amz-Signature=1b7ef3e832ebb0abe29e50f8c23f0be5829105e3c89e47c7d9643417fb0c7841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
