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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFW3EFS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjJJI0DPTOKKUFztFzmCpp6t9s8ooUK%2BAMnR73EwZyPAiAVrHiVg4MTgvPwNoYU9BUwAlMf9OoZ99ScgcebVzz%2Bwyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM6rTNu655GtpZ5a%2FWKtwD9WxtIl0N8NjkuAW6hPw8%2BkD9zqNMw4qNffkRU%2FujjYtbP%2F80%2BRZ4urcKXdSjdhzCpLOzFGn5EmKyi25wBselK7j%2FJEw8CQCirJpn1jUFADXWAbxBIzSTF90L9HcK28oVkg%2BJlq%2Fz6JkQ5P63LVydoDYKrx%2BtXJ0iOCFS9IrSqLl0%2F3kWtvkbXN11sdNcei5%2B606ZCaTobPOCtIGz9cviTwIIYgWKuCtRfNkMENoeH1jBPrAiayO38S2e1kYhaJIHLNZcCK1Q%2FWeNSzF%2Brq2XqUGzfPJ65fr34Riqc2QXc5f%2BtF1EH7FKz09bf0OfEnYOLSHUbDKl5YrqHoH9HLS%2Ba4Ff2%2F90TjWEYZ%2FmISWz9OXU4VIllV4mGfOexOHTm93YWM7g8HSnuBQgjciepTfFyHNw4opxvoFJfLAeAaPrN4e7XVAtE7FLGrpO7P7RdxTB0BwP7VNkn0rOT1q06cRRkjuAxLfMdsVKp8XvUsp07O9Q20JS%2FNXn4XNLxFuvP9kIvZH6z0P54AKQJuxC79op3SeEtNDRrBJLbA5v3ZJPrN%2B4ZiBLGIfxl00CmzrQLsoXy016RXyfPgX0iAaPTkPzvpPwSeHNePqAFGw4ypnppe%2B3%2BQ%2BpAmM326cUL7kwhLzTvwY6pgEUJAenwC5BQBaIRbVl%2BgoAzfkCuFPzmu0mgNngc96gpblrWamv04v46esEKkZF3cM0wUYMGnZDROWZRqvFNRa%2BIJ7Z2ZeJYhiFKhhRcqYtKsf3YvpYNXtxPgE9nVtBMCbU9WvVMZvQ2z24F1fLbDwxU6uU0vkGAbXP6Nt7GxIXm%2FCuRjG0QWXTqzomxiHuyAkfEA6876T5kJJHCLHB1jCG0fj2J8V4&X-Amz-Signature=61ab70ef8fcab68a6dcc4c773f52d6c1a0962c9bcc683842c01fdffa85ac57ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFW3EFS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjJJI0DPTOKKUFztFzmCpp6t9s8ooUK%2BAMnR73EwZyPAiAVrHiVg4MTgvPwNoYU9BUwAlMf9OoZ99ScgcebVzz%2Bwyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM6rTNu655GtpZ5a%2FWKtwD9WxtIl0N8NjkuAW6hPw8%2BkD9zqNMw4qNffkRU%2FujjYtbP%2F80%2BRZ4urcKXdSjdhzCpLOzFGn5EmKyi25wBselK7j%2FJEw8CQCirJpn1jUFADXWAbxBIzSTF90L9HcK28oVkg%2BJlq%2Fz6JkQ5P63LVydoDYKrx%2BtXJ0iOCFS9IrSqLl0%2F3kWtvkbXN11sdNcei5%2B606ZCaTobPOCtIGz9cviTwIIYgWKuCtRfNkMENoeH1jBPrAiayO38S2e1kYhaJIHLNZcCK1Q%2FWeNSzF%2Brq2XqUGzfPJ65fr34Riqc2QXc5f%2BtF1EH7FKz09bf0OfEnYOLSHUbDKl5YrqHoH9HLS%2Ba4Ff2%2F90TjWEYZ%2FmISWz9OXU4VIllV4mGfOexOHTm93YWM7g8HSnuBQgjciepTfFyHNw4opxvoFJfLAeAaPrN4e7XVAtE7FLGrpO7P7RdxTB0BwP7VNkn0rOT1q06cRRkjuAxLfMdsVKp8XvUsp07O9Q20JS%2FNXn4XNLxFuvP9kIvZH6z0P54AKQJuxC79op3SeEtNDRrBJLbA5v3ZJPrN%2B4ZiBLGIfxl00CmzrQLsoXy016RXyfPgX0iAaPTkPzvpPwSeHNePqAFGw4ypnppe%2B3%2BQ%2BpAmM326cUL7kwhLzTvwY6pgEUJAenwC5BQBaIRbVl%2BgoAzfkCuFPzmu0mgNngc96gpblrWamv04v46esEKkZF3cM0wUYMGnZDROWZRqvFNRa%2BIJ7Z2ZeJYhiFKhhRcqYtKsf3YvpYNXtxPgE9nVtBMCbU9WvVMZvQ2z24F1fLbDwxU6uU0vkGAbXP6Nt7GxIXm%2FCuRjG0QWXTqzomxiHuyAkfEA6876T5kJJHCLHB1jCG0fj2J8V4&X-Amz-Signature=878b6c0e17e98e93397cc3d94a16bded3c4188484a474a021b955ae216cef13a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
