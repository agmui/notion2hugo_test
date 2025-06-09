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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXULFNF7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvMunGFOs%2FXvMrYuncyurCHlVHB2U9jowghNKJ%2FiW8WAIgQpY8n7ZwF5Jx%2Fev7%2FzSxVXidNHu3ODbQZ6PT%2Fp02FQQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqazCVne99Y5jVUbCrcA7a1vl%2B6MniSssSfkmhp6WmmyeodvnFl%2BAF2zaELs5wU6MudaWUfc1%2FYf1CbI7RQWU2REepDqhQNbXkJSS8Cjcsn%2Bz12vfufoNKfZth7BeWrhfQHoUUaLNp06zEq9NlKoraCdeEU9pOF6lGYa6SOTXj%2Flrbig%2Bo6OiWJ3mY3sWTCXHx16NZpLUoq2wNjCDVJGf1AK04WN756OMesX%2Fdg4wpOgUgrb63qSfmIbkBtIaF%2BcggFyA1rwD5YtU1Jgel63JUyw4iYrDYwpbgEJIEnEwJiw4lb%2F8BUA2IBC5bNXRBAnvXppPmcSlNap08TaNKFdHcUFuo9mwkqm5jIZj9z3urKTrrKovVp7hHffvEtPf8XSyHX9iDNQ4pN2ebQmYndjYqlRE09X8FZgeQaVHjeXvSciQIhT0%2BJ%2FFlITGQitCQnVzZaAd97fszzj%2Fgs3pUfgySIs%2B21NigtzhfamFZ6c4a7Sxa4ArRhbTzZBEG%2FXbYPhycJywYYPhu2%2FVq%2FxDKt0bOtW93Drqrj3ObpyaLDHa%2BWpNlHhz04umebowIht2iHsa1DB00EmI8vd%2Fu%2FIgvTdcv%2FlPwbXlCVzQYCiE9xU%2B8QFrU4pOlu64tYsl2B9A1xYt5ihk3m%2BoKEEQCvMMiXnMIGOqUByCFWYmMdDwXzXS4iB%2BjTxVoxyrpEsA7WYi9ST4HttRB7bxwaXHrmWv8ZTEfkjrLyxO8MStKW6MLwpYa1IJfjFj0M2Lm1GOpn0NKRSSXh1oTOSqqvjLB%2BMILYtMb3C%2BNuxMC5FdKVViOyHA8NMBPmA6WErShatfL92dUh5kieXfW%2FCmnjW4iS4VIPP1iVxU0XEuRsRds2P42Ctb0DtWj5G9gRu6zK&X-Amz-Signature=eb4fba5a6426fad815deec816bc7e39d8caed78be1a37c0c52fa775c0b525c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXULFNF7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvMunGFOs%2FXvMrYuncyurCHlVHB2U9jowghNKJ%2FiW8WAIgQpY8n7ZwF5Jx%2Fev7%2FzSxVXidNHu3ODbQZ6PT%2Fp02FQQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqazCVne99Y5jVUbCrcA7a1vl%2B6MniSssSfkmhp6WmmyeodvnFl%2BAF2zaELs5wU6MudaWUfc1%2FYf1CbI7RQWU2REepDqhQNbXkJSS8Cjcsn%2Bz12vfufoNKfZth7BeWrhfQHoUUaLNp06zEq9NlKoraCdeEU9pOF6lGYa6SOTXj%2Flrbig%2Bo6OiWJ3mY3sWTCXHx16NZpLUoq2wNjCDVJGf1AK04WN756OMesX%2Fdg4wpOgUgrb63qSfmIbkBtIaF%2BcggFyA1rwD5YtU1Jgel63JUyw4iYrDYwpbgEJIEnEwJiw4lb%2F8BUA2IBC5bNXRBAnvXppPmcSlNap08TaNKFdHcUFuo9mwkqm5jIZj9z3urKTrrKovVp7hHffvEtPf8XSyHX9iDNQ4pN2ebQmYndjYqlRE09X8FZgeQaVHjeXvSciQIhT0%2BJ%2FFlITGQitCQnVzZaAd97fszzj%2Fgs3pUfgySIs%2B21NigtzhfamFZ6c4a7Sxa4ArRhbTzZBEG%2FXbYPhycJywYYPhu2%2FVq%2FxDKt0bOtW93Drqrj3ObpyaLDHa%2BWpNlHhz04umebowIht2iHsa1DB00EmI8vd%2Fu%2FIgvTdcv%2FlPwbXlCVzQYCiE9xU%2B8QFrU4pOlu64tYsl2B9A1xYt5ihk3m%2BoKEEQCvMMiXnMIGOqUByCFWYmMdDwXzXS4iB%2BjTxVoxyrpEsA7WYi9ST4HttRB7bxwaXHrmWv8ZTEfkjrLyxO8MStKW6MLwpYa1IJfjFj0M2Lm1GOpn0NKRSSXh1oTOSqqvjLB%2BMILYtMb3C%2BNuxMC5FdKVViOyHA8NMBPmA6WErShatfL92dUh5kieXfW%2FCmnjW4iS4VIPP1iVxU0XEuRsRds2P42Ctb0DtWj5G9gRu6zK&X-Amz-Signature=dbc6a97171e3450ff210c379da70fc0f51fc70d563792cc1436ae31bc8724a67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
