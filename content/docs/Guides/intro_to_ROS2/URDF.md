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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWWOVPX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3MsOl3aTwScGMYftfOuxWS9UxMxQrq8LICxwrGaWjwIhAIbFlSLu9UUpUgD%2FileAFFWei4WUPJB4rDAbN4QBXUn4Kv8DCFoQABoMNjM3NDIzMTgzODA1Igx82YtTG0bc%2BzPkqFMq3AOGF8NlmZ8NO1dw9z1XPODTFaRzeoL%2BAejJJ07SUEnKv%2BxBqAnfgTChDPfKLCnrxrs1yP6Wf0XoWsw0qnCdU%2F3tjRNp7FPtK3b9wxPPSncXNjQZjH8c284zNtvv37yrW8bOKtw2KMT%2FyLNhkfD2zwVpThTCR3LKft%2BCua2jeUi4JEry5eFxfJEjcDNwzZEyf7JT22MOxxjmo%2FF88xHHTqbEtGOxHBd9jHXn0%2BlaxsW1RPc7PstvL1%2FtOE%2FanC%2FyqZeWcLS5eNLxZLSPfL7vI6OXXncacEJGzAPObixbveQl9CpxSqckDNw393n7BdAkV0fIqTPa7nxNvCyxXDlDYUXvjDPzdkvMBaG%2BmEsWjs7UAz7SmjECgyufODlM5jIWsb1tTn3DAh2C1qsziB%2Fc6wb0%2FRWMt4Ar5k4PY8fRMqSD97DTnhMGBou1QYHoFV8ztznsBLOchGullLBbSb24a1mlVKmu%2FXnWvifDJ%2B2oM4xwwaqLoTTxb1q5BqGHneCsz6DBppMcRZn1e2e4CgrIfFwsFh0RBU5bAtZCYV4nvEV4NCsmRx7NxJapkn374KE7qJ2NPR%2BI%2BypQ2n6Hg7iZFUrxcdHiRAg%2BNDQGm3%2FE%2Fc0TPu1VOinAesCFrQ1yhjDA%2B4LABjqkAYR%2F5NbaOiyVOeHoWue39Z4o5eGxRFEDSbf%2BX2cpAFvqB88FPby2BYPUfTWgJUKmDLPmM1ySwDl9CA1FpQdRNuniIAw2rbR7WANeL8tGLUYL%2F%2BIpCWn95FXEikOhCyhm0FL0iSQDxMwmjdTCBCVWuuJL0ANA1TZ94OBseYBLPxJqLrTmNsuIygtVn8JYS%2FggkC8UgwTF2vkotMwMbnTWnhJ8JRo8&X-Amz-Signature=1d9a0d3871fd3d37a660c47e253d46b3ddfc36c81bf9c9f75a2552d738b79dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWWOVPX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3MsOl3aTwScGMYftfOuxWS9UxMxQrq8LICxwrGaWjwIhAIbFlSLu9UUpUgD%2FileAFFWei4WUPJB4rDAbN4QBXUn4Kv8DCFoQABoMNjM3NDIzMTgzODA1Igx82YtTG0bc%2BzPkqFMq3AOGF8NlmZ8NO1dw9z1XPODTFaRzeoL%2BAejJJ07SUEnKv%2BxBqAnfgTChDPfKLCnrxrs1yP6Wf0XoWsw0qnCdU%2F3tjRNp7FPtK3b9wxPPSncXNjQZjH8c284zNtvv37yrW8bOKtw2KMT%2FyLNhkfD2zwVpThTCR3LKft%2BCua2jeUi4JEry5eFxfJEjcDNwzZEyf7JT22MOxxjmo%2FF88xHHTqbEtGOxHBd9jHXn0%2BlaxsW1RPc7PstvL1%2FtOE%2FanC%2FyqZeWcLS5eNLxZLSPfL7vI6OXXncacEJGzAPObixbveQl9CpxSqckDNw393n7BdAkV0fIqTPa7nxNvCyxXDlDYUXvjDPzdkvMBaG%2BmEsWjs7UAz7SmjECgyufODlM5jIWsb1tTn3DAh2C1qsziB%2Fc6wb0%2FRWMt4Ar5k4PY8fRMqSD97DTnhMGBou1QYHoFV8ztznsBLOchGullLBbSb24a1mlVKmu%2FXnWvifDJ%2B2oM4xwwaqLoTTxb1q5BqGHneCsz6DBppMcRZn1e2e4CgrIfFwsFh0RBU5bAtZCYV4nvEV4NCsmRx7NxJapkn374KE7qJ2NPR%2BI%2BypQ2n6Hg7iZFUrxcdHiRAg%2BNDQGm3%2FE%2Fc0TPu1VOinAesCFrQ1yhjDA%2B4LABjqkAYR%2F5NbaOiyVOeHoWue39Z4o5eGxRFEDSbf%2BX2cpAFvqB88FPby2BYPUfTWgJUKmDLPmM1ySwDl9CA1FpQdRNuniIAw2rbR7WANeL8tGLUYL%2F%2BIpCWn95FXEikOhCyhm0FL0iSQDxMwmjdTCBCVWuuJL0ANA1TZ94OBseYBLPxJqLrTmNsuIygtVn8JYS%2FggkC8UgwTF2vkotMwMbnTWnhJ8JRo8&X-Amz-Signature=0f7e29031b1ca1e03d7a5e1c9833c9928e3ec90a5635441cd92280a255ac18b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
