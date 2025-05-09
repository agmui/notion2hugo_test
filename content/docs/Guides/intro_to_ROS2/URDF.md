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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDCOCPQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBfF9fdyulUtwgr%2F1bWFJwyait34lGBFxV90zb6RiANwIgQnfjQGjJ3mGdn3%2FY7JVzhhPZaBlUivBRL5g4lj%2BoQXUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhVeGf392F84LVBRircA8KICFYvVQ6Bdlh7hf6TKd8o8EfW6yHsG9LNkG%2BOvQR%2F1sRk7j2LVzB1BOYQhYtYyV1%2FDVjNQv07uN%2FlRafAJR6vnKNRKDWChbm82XWXN0L4QY9TVqWRJ3aZDqEsSA2FWaSfcBAFB9YojsqWvS%2BWn2tZvDYWLucF%2FXVHeK5XxpM33WTCvzNJPhUSUo5C0PlnlWZ90ubvA8O9xMv%2FfxKeIGtiz7cE%2FFrtSXlkfUvHNECHgN1o8WeG%2BzQAK7nbD8vHQ%2F5AuD%2FfeL6D%2Fn3SHbhVOjEDS1QeXx3kSbE0zAgdh8XInysfG%2BaY9WOsB%2F7rbvsncYtccixxMx2gRYdhpgqRGIbL2iAcewrCwEYcBtSJEyA%2FJsdSJqqC0HTpLlIWkqE4QGlOIVEoPW4EaeA3HAPtIiWEz%2B9M%2Bg%2F7TfnCEkZKZ7JZE%2FHuBl7qrC8G6%2B%2FlMcqJDKVDqoc%2F1kHqTASYRVPFp2W0s9lOd5QaJlEq4N%2FFNdU7B4en%2BSLiohJP5EAmImki9feGeqLvyqj58V3Lfxn9Uw5835CIRLpmXC9yHOBKCbl0XyoQ%2FM2rqOtMCjvXIXSGQoT3EB6Ckc0jA1ClWd8ZxMSBZ0D5IflyRT8k%2BBAzUtAk4vNJyLgiKruoEytdMMa9%2BMAGOqUByVmhpj5mi%2FbsAFOjk5wvwa2gsk18qjdg2TjRAM333gaGUY4ww5Fi0CTjBvNaGsb8oZh%2B4czn2XmEsJww0jR1jzC12RcaAoPfciuY6gHTKa80bbPA4wdeXGA%2B8hfTztX%2BGi17dso8JRuEXTDhpsHY2JvOUbCuax84ThiDuvW2Kr0erXXFi8%2FzjoH6llB8bb9VdPZ9UroZWz1yP0fsfhh9PjQIp7AA&X-Amz-Signature=25eaaa28afdc1573f884e3589569bbe53b786718170ed2228741bd0a27d59576&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDCOCPQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBfF9fdyulUtwgr%2F1bWFJwyait34lGBFxV90zb6RiANwIgQnfjQGjJ3mGdn3%2FY7JVzhhPZaBlUivBRL5g4lj%2BoQXUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhVeGf392F84LVBRircA8KICFYvVQ6Bdlh7hf6TKd8o8EfW6yHsG9LNkG%2BOvQR%2F1sRk7j2LVzB1BOYQhYtYyV1%2FDVjNQv07uN%2FlRafAJR6vnKNRKDWChbm82XWXN0L4QY9TVqWRJ3aZDqEsSA2FWaSfcBAFB9YojsqWvS%2BWn2tZvDYWLucF%2FXVHeK5XxpM33WTCvzNJPhUSUo5C0PlnlWZ90ubvA8O9xMv%2FfxKeIGtiz7cE%2FFrtSXlkfUvHNECHgN1o8WeG%2BzQAK7nbD8vHQ%2F5AuD%2FfeL6D%2Fn3SHbhVOjEDS1QeXx3kSbE0zAgdh8XInysfG%2BaY9WOsB%2F7rbvsncYtccixxMx2gRYdhpgqRGIbL2iAcewrCwEYcBtSJEyA%2FJsdSJqqC0HTpLlIWkqE4QGlOIVEoPW4EaeA3HAPtIiWEz%2B9M%2Bg%2F7TfnCEkZKZ7JZE%2FHuBl7qrC8G6%2B%2FlMcqJDKVDqoc%2F1kHqTASYRVPFp2W0s9lOd5QaJlEq4N%2FFNdU7B4en%2BSLiohJP5EAmImki9feGeqLvyqj58V3Lfxn9Uw5835CIRLpmXC9yHOBKCbl0XyoQ%2FM2rqOtMCjvXIXSGQoT3EB6Ckc0jA1ClWd8ZxMSBZ0D5IflyRT8k%2BBAzUtAk4vNJyLgiKruoEytdMMa9%2BMAGOqUByVmhpj5mi%2FbsAFOjk5wvwa2gsk18qjdg2TjRAM333gaGUY4ww5Fi0CTjBvNaGsb8oZh%2B4czn2XmEsJww0jR1jzC12RcaAoPfciuY6gHTKa80bbPA4wdeXGA%2B8hfTztX%2BGi17dso8JRuEXTDhpsHY2JvOUbCuax84ThiDuvW2Kr0erXXFi8%2FzjoH6llB8bb9VdPZ9UroZWz1yP0fsfhh9PjQIp7AA&X-Amz-Signature=d5191994b12115b8d6463ffc81fc3fc957b1b44300b230b01de77885bd4d640a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
