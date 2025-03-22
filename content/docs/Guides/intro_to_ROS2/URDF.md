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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVX4LXK2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEaGYg4Aski1khzzMK809R6Rg0%2B1QlcSwI6iG%2FBS3odgIgY%2BUgvpsFRoPJs8nbn%2F3ljsgqhG3%2BmUKnI0U1jAie%2FAAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1EkmFqvJ41wgk8uircAwyNoeInkb4IQ2ZyRVi1lmwM0H%2FQdGKVwgwRXeSYtpX%2B5YcKw9Xa7OH09Um9zFgsQGkOkfnjh7sdh4RJrk6HWr2SRT%2Fxb9Drqnyg5LOo6wwVfkyIT0tRZoejcQDxcqvEOUP6fxm6CR7VuSSdvd32U9TwB8ZjbZISXvlHi1D6hYtBrfG373W4btmPBDnLqMK5xpvy1ljafd0b9cvuVEz51b%2FF7N9%2BzLiuJ9XdDnWVowW5HWzUKQ6%2BJOv8URMAcSAZPQ6zuk13nVEgLTMfbIOozwgZCPgHDL6ZGCNA24D1X1bkIrK0h1Yeacc7OH54V27sN1z0i%2FlX%2F%2BjtbxKz2Zv1b%2F9SWd6J3gMRAIn2sw42%2BFjh88I4BKNtCTfgbru4dWX3eVRxLeaoWoR5kVzS2MObpz%2Bmd4CndQL5YnxrQkbrL%2FZoH%2FWnQwRZwKPeR%2FyXPcG3BAhekfkY1PL0LlQgEU8McDvAbO7wMDhZSMxY5jJ7Oue7hoCTStN6VLGMH3q4OACkn2nt18f1cgFFHGj4wl1EBcHKWMRerWAAYed4FTHx3TP2UALArkBcE8gOi3holwEspJfmPfad68hBx%2B6X699ZAYhezqFymmlZtHbZmupjB3kQs0CmmbY1gyx6MpRmMMy2%2FL4GOqUBDwn1gD7kh326UhG4mOwDmvMc3iPcuCUA6za4r4XuwyvtcUGIcXfbGe8zWQIKNUxgzYGbEJ21zPhZCv6KKHuj%2FiTsNt76D3TwQ%2FxEvw2gHaUG780%2FLbr7NlHtGaRJhSvnhS3hXhXEOuQ90Eg8MfD%2BUF%2B4oX2le3lTGC9N0TfYJVeS5haXmTvOIIo4fyl3VOiWUsftCR4Hl3YDtZbrmzYXbe4Qg%2FGH&X-Amz-Signature=a3196aa6f7f207b16156ab7b8f62665b5bbcce5c0e5b340dd383ca018b0269db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVX4LXK2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEaGYg4Aski1khzzMK809R6Rg0%2B1QlcSwI6iG%2FBS3odgIgY%2BUgvpsFRoPJs8nbn%2F3ljsgqhG3%2BmUKnI0U1jAie%2FAAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1EkmFqvJ41wgk8uircAwyNoeInkb4IQ2ZyRVi1lmwM0H%2FQdGKVwgwRXeSYtpX%2B5YcKw9Xa7OH09Um9zFgsQGkOkfnjh7sdh4RJrk6HWr2SRT%2Fxb9Drqnyg5LOo6wwVfkyIT0tRZoejcQDxcqvEOUP6fxm6CR7VuSSdvd32U9TwB8ZjbZISXvlHi1D6hYtBrfG373W4btmPBDnLqMK5xpvy1ljafd0b9cvuVEz51b%2FF7N9%2BzLiuJ9XdDnWVowW5HWzUKQ6%2BJOv8URMAcSAZPQ6zuk13nVEgLTMfbIOozwgZCPgHDL6ZGCNA24D1X1bkIrK0h1Yeacc7OH54V27sN1z0i%2FlX%2F%2BjtbxKz2Zv1b%2F9SWd6J3gMRAIn2sw42%2BFjh88I4BKNtCTfgbru4dWX3eVRxLeaoWoR5kVzS2MObpz%2Bmd4CndQL5YnxrQkbrL%2FZoH%2FWnQwRZwKPeR%2FyXPcG3BAhekfkY1PL0LlQgEU8McDvAbO7wMDhZSMxY5jJ7Oue7hoCTStN6VLGMH3q4OACkn2nt18f1cgFFHGj4wl1EBcHKWMRerWAAYed4FTHx3TP2UALArkBcE8gOi3holwEspJfmPfad68hBx%2B6X699ZAYhezqFymmlZtHbZmupjB3kQs0CmmbY1gyx6MpRmMMy2%2FL4GOqUBDwn1gD7kh326UhG4mOwDmvMc3iPcuCUA6za4r4XuwyvtcUGIcXfbGe8zWQIKNUxgzYGbEJ21zPhZCv6KKHuj%2FiTsNt76D3TwQ%2FxEvw2gHaUG780%2FLbr7NlHtGaRJhSvnhS3hXhXEOuQ90Eg8MfD%2BUF%2B4oX2le3lTGC9N0TfYJVeS5haXmTvOIIo4fyl3VOiWUsftCR4Hl3YDtZbrmzYXbe4Qg%2FGH&X-Amz-Signature=c18032378e9e4d4667d60c28b0bf9e0a12d21d9d186d43feb868aa003f03fc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
