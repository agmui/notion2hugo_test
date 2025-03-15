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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3RTMKL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbLaNj2CCX5HOp9fHmCiJtBH0YA1u05Id4jNaNxy94BwIhAJan3Yx5vbqzqBcbGorbVL%2Fy%2BgGlIDT7quQ%2FIXq5I6LxKv8DCBwQABoMNjM3NDIzMTgzODA1IgxoUhz0APYneeJIFg0q3AO%2BwL1fJQXAGqCE8eBzfX68AHm6z1R%2BS5ldpqOc1ZHErPFvsXvcoaqN1dIKL%2BWqor0mig2E7mOppDKk0s9h5Csf5amoyjsU11d5y%2BwuywNAzjy%2FBfCDEHYss1B3q3Jj1GxWktUOCtWByuUPPsgcQy4ejSiTHxE4h8poOpqwj6jimAwSmEfCHMrPO19swcOft3aeViFxpkD8ESTdeaQdh4MieXxQMkGsMU5Qh96xnSrUD5rC91GiFxCI3S0iDAPM%2FspmAznkq97uM5qg05l4oCI%2BMfoI5%2F4eTfDGeuD3uUPbiwlS04cvHZBreCiT6nVvHcuLPKJDi9e7M7JoEWhkKB4AFH6SjTAU0Uoq5WnHPgsYHh2j8MvH7iVMP2GjIMk0EH7I5FOlQA7fvPNC8gO4YCdWD0DN5MEsVQVzB2FU1MOUpcHeU%2BJXHcvjAtfUWW5o9A6F%2F9gH79He7KgPf%2FD%2Ba0gUTpuw6%2F31LJVF4Cf5pzZnJcbCih%2BZLGP1QZ87SJBh2wMsYoi80e0fjMrIWmw13WY3vYkYCQK0ZyzjWcClqzq7pjgKEBlEBsFuAhTpU3nGxvZl0jrXycqzsHpVX57zypvmlrnOOsk1F%2FafysnCFyd7rIO4G4mLO9ZRFKuAGzDKjde%2BBjqkAQPjA%2FjSuFveYg1mdGaucQKBidb0vxBDhzG7c8kcNNWRibJjXIv%2BBvSzJ2v3K29Pe0UQXjzHWjVaOaR%2B9u1yDECpFPSwLafsNTl9V9x7GmaROmuPB5njIF3seN1XhPHMOUZWUv4bgBXrsdjSqK7c0cIyKzr0cggq4teo0570L0xfoaWDJj76csPAyLZ4U8DsxQcHnhOISBHMEH%2BV3h92Nkfjtups&X-Amz-Signature=fb4c70d1dc172c3ccf5ff292cb27639ae0e5928d730700c0fd344742911da070&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3RTMKL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbLaNj2CCX5HOp9fHmCiJtBH0YA1u05Id4jNaNxy94BwIhAJan3Yx5vbqzqBcbGorbVL%2Fy%2BgGlIDT7quQ%2FIXq5I6LxKv8DCBwQABoMNjM3NDIzMTgzODA1IgxoUhz0APYneeJIFg0q3AO%2BwL1fJQXAGqCE8eBzfX68AHm6z1R%2BS5ldpqOc1ZHErPFvsXvcoaqN1dIKL%2BWqor0mig2E7mOppDKk0s9h5Csf5amoyjsU11d5y%2BwuywNAzjy%2FBfCDEHYss1B3q3Jj1GxWktUOCtWByuUPPsgcQy4ejSiTHxE4h8poOpqwj6jimAwSmEfCHMrPO19swcOft3aeViFxpkD8ESTdeaQdh4MieXxQMkGsMU5Qh96xnSrUD5rC91GiFxCI3S0iDAPM%2FspmAznkq97uM5qg05l4oCI%2BMfoI5%2F4eTfDGeuD3uUPbiwlS04cvHZBreCiT6nVvHcuLPKJDi9e7M7JoEWhkKB4AFH6SjTAU0Uoq5WnHPgsYHh2j8MvH7iVMP2GjIMk0EH7I5FOlQA7fvPNC8gO4YCdWD0DN5MEsVQVzB2FU1MOUpcHeU%2BJXHcvjAtfUWW5o9A6F%2F9gH79He7KgPf%2FD%2Ba0gUTpuw6%2F31LJVF4Cf5pzZnJcbCih%2BZLGP1QZ87SJBh2wMsYoi80e0fjMrIWmw13WY3vYkYCQK0ZyzjWcClqzq7pjgKEBlEBsFuAhTpU3nGxvZl0jrXycqzsHpVX57zypvmlrnOOsk1F%2FafysnCFyd7rIO4G4mLO9ZRFKuAGzDKjde%2BBjqkAQPjA%2FjSuFveYg1mdGaucQKBidb0vxBDhzG7c8kcNNWRibJjXIv%2BBvSzJ2v3K29Pe0UQXjzHWjVaOaR%2B9u1yDECpFPSwLafsNTl9V9x7GmaROmuPB5njIF3seN1XhPHMOUZWUv4bgBXrsdjSqK7c0cIyKzr0cggq4teo0570L0xfoaWDJj76csPAyLZ4U8DsxQcHnhOISBHMEH%2BV3h92Nkfjtups&X-Amz-Signature=e54af3fa9ce02f78cd366aae30bc3d45c8dccf8f4d0f0611e4caf51ca2074fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
