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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFTWTCX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfO29hLpebEJXg5dO5ZFq93uJV8TSOOSHDFwbYbnrmHAiA9ImjzP3zYfLDMCAqTFSkKpf0vS%2B4j%2Fx6ru0E77Cye3iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2F9tAqDGCVEUlUUhKtwDl8lTrdLox8hoj3%2BvKrvcIdSudwCZHm9s63%2Ba%2BHlX22FHiOStE73feRMW9ymnGErF8bB%2FsobPfGaL49sv4MVK7%2BBMCYffvvxbpGb4eeu699Kx0keEN7%2Bj8Io6K7zXaO9AguqJhO97u9N1ArvIsGK%2BBzOLbM7C%2F%2BadXHcEoiGmNa566x5UvqVIF7B1cXiit3G1CDpGT3%2Fk%2FcudlOwpByuA0Evbib%2FH4t7R6obXiBfn5ke0utcCQUH%2FwnMMSkcx464oK%2FGV7S2X3%2B2oxtNsJiDGEtj59om8dPIEM51Ux44xJnXviofl3HSjIpD6v8YFsaTFYUQ9bYDAAljYUsGEwCbHuKWupOS30PWy0C35xWHtUdg4D%2BqfS8SlkIsuqgwcAdJ1ulvYTYix0I1uRF2PROOUeT2rozNnaoiUavLweKQbSZxbNjkAc4PR1iashgroeLYiiHB2bdAjEivtuU5IKNe0SioSyMpAE9XF2QYoLHAUL5o5UotpcH1%2FYPeA%2BM2fJi7%2FNXUXTZnvOfE9sYCrPulIKwMWKRG7%2Bz90KHupDByEmgAeKD1eLkK9UnEAamvC9zodF5APDD7bYHbF2BECf6BkFtVDil4v3iRaeuSFJoi%2BCJpOEiQ6DCFad%2Bb7TEEwxqzTwAY6pgFttkhnLQ%2BS3lXLFzIsTy7mltxGne7ajmyxSAAAeJvaXDfXNKeyJfOyQ3ey3vXJIKeyWeyYSzachskT4NUNJDnORrDwhMDHJBzhdF4kOBDWNIV8pOc00NXYS%2BU3M74cTFdhcLQhsfWvoS3dGMKKuII7y5DRgsFC%2FeigYi4Lq4kVSCp7mjGwYx6lW6rhahKqvtJnekk%2BQI2qvR5uto5JWRVX%2F23SHHFI&X-Amz-Signature=9f67fd8ee253002fb90fca38a5c277152eac8405cdfd9a49581e86ef6034b4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFTWTCX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfO29hLpebEJXg5dO5ZFq93uJV8TSOOSHDFwbYbnrmHAiA9ImjzP3zYfLDMCAqTFSkKpf0vS%2B4j%2Fx6ru0E77Cye3iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2F9tAqDGCVEUlUUhKtwDl8lTrdLox8hoj3%2BvKrvcIdSudwCZHm9s63%2Ba%2BHlX22FHiOStE73feRMW9ymnGErF8bB%2FsobPfGaL49sv4MVK7%2BBMCYffvvxbpGb4eeu699Kx0keEN7%2Bj8Io6K7zXaO9AguqJhO97u9N1ArvIsGK%2BBzOLbM7C%2F%2BadXHcEoiGmNa566x5UvqVIF7B1cXiit3G1CDpGT3%2Fk%2FcudlOwpByuA0Evbib%2FH4t7R6obXiBfn5ke0utcCQUH%2FwnMMSkcx464oK%2FGV7S2X3%2B2oxtNsJiDGEtj59om8dPIEM51Ux44xJnXviofl3HSjIpD6v8YFsaTFYUQ9bYDAAljYUsGEwCbHuKWupOS30PWy0C35xWHtUdg4D%2BqfS8SlkIsuqgwcAdJ1ulvYTYix0I1uRF2PROOUeT2rozNnaoiUavLweKQbSZxbNjkAc4PR1iashgroeLYiiHB2bdAjEivtuU5IKNe0SioSyMpAE9XF2QYoLHAUL5o5UotpcH1%2FYPeA%2BM2fJi7%2FNXUXTZnvOfE9sYCrPulIKwMWKRG7%2Bz90KHupDByEmgAeKD1eLkK9UnEAamvC9zodF5APDD7bYHbF2BECf6BkFtVDil4v3iRaeuSFJoi%2BCJpOEiQ6DCFad%2Bb7TEEwxqzTwAY6pgFttkhnLQ%2BS3lXLFzIsTy7mltxGne7ajmyxSAAAeJvaXDfXNKeyJfOyQ3ey3vXJIKeyWeyYSzachskT4NUNJDnORrDwhMDHJBzhdF4kOBDWNIV8pOc00NXYS%2BU3M74cTFdhcLQhsfWvoS3dGMKKuII7y5DRgsFC%2FeigYi4Lq4kVSCp7mjGwYx6lW6rhahKqvtJnekk%2BQI2qvR5uto5JWRVX%2F23SHHFI&X-Amz-Signature=a64fd46ae4064236857286094a7e943613bbeffd0d13872165c6bb82a042a9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
