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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJKKBET%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvXExLQLGd8hOMDOcK4IKBA1R%2F8HRpRbtX4LsVxRXYOwIhAJqa2s2lOFjyLELSb3681bvdm0x6f5Wsmmyz0%2BzqgLjIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1b%2Bw2O6pc6J%2F7jQoq3AMty%2FI9J%2FyucuxHkVM4VSzJ2fuoS2IQtNZ2YHqj9R%2FQrc9GUsOgpLofE2xDYmrSZkq%2FO%2FuNDV4JHBqBudU%2FzddpL77IVV3Rz40BV6Mgx0yXuEUBk2maRSDPO1Wct5bYwelR9I3rVALyq5PPr1VcSxFdeRxjAas7H3qamWvSsGOUsRwi9FPOxjsPr30SEpVUyCPnSCTYsEAOdVXIWhp4ldXQiZvPG4Ob99T8C03DRnxwbSxUSYjeuFl3ITdquehg0XPUFyccYoYLLuCuVL6KNMmJRxHVpzY4v%2FEXsCGE6HDEeZK5TturSHtA1Kjs8Vt6IgkYQoXBeXUceSmnnkIKSEWTBfXU5XiD%2BtGsJ5wp2LuU%2FE2AuL33rbVHwsYAql6KFdYRruhbUSDM%2FOJQclvMpLYSj7Or7H6OG7OdXN%2BmmR7WPWYwYavMwSuEUrqon%2FCY8NwhwJMUWQoKCL8jWsV2MH4pAhN7sHSgeg8mfpax4ZcU9V2a1jndESFjvhCPsfUHT6se2Fcj%2BNAZ%2Fya4SSmD1BoA1cCqlQDM5osuF6MjrzwGTvfeRry22C1%2F79YUO2W5W7II7fjJdwz%2BUE3fYwt5mq%2BMElNLYlOIhES1mN0IJUV%2FyVHidVITgNOW7OtFxTDawaDCBjqkAeg%2BVK9IBzAEjpnwniO4RhXc9H1HzdYGJYmhIXWMCtKX5PWwgQsvOcvf5ES3157Rfl8V3CGi60VYFWBdOd9OdL1yQo3gvE3VDXslxw%2Bmt1ZkwhERvR%2FgvCm6j8RpUihW361bFqW1fbL%2BpMTnrg0PO7D4agEa9D0wVDlR8nlrsIWbHF3WJxd7vRaE3ok25II6UIB5XhrX1MRU6A9QUj%2FgL0qrvE%2FD&X-Amz-Signature=83f8b9723cadf787ae1bf38275e30d9b82cc54b7eb30f4d25fa8cd06945dfcec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJKKBET%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvXExLQLGd8hOMDOcK4IKBA1R%2F8HRpRbtX4LsVxRXYOwIhAJqa2s2lOFjyLELSb3681bvdm0x6f5Wsmmyz0%2BzqgLjIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1b%2Bw2O6pc6J%2F7jQoq3AMty%2FI9J%2FyucuxHkVM4VSzJ2fuoS2IQtNZ2YHqj9R%2FQrc9GUsOgpLofE2xDYmrSZkq%2FO%2FuNDV4JHBqBudU%2FzddpL77IVV3Rz40BV6Mgx0yXuEUBk2maRSDPO1Wct5bYwelR9I3rVALyq5PPr1VcSxFdeRxjAas7H3qamWvSsGOUsRwi9FPOxjsPr30SEpVUyCPnSCTYsEAOdVXIWhp4ldXQiZvPG4Ob99T8C03DRnxwbSxUSYjeuFl3ITdquehg0XPUFyccYoYLLuCuVL6KNMmJRxHVpzY4v%2FEXsCGE6HDEeZK5TturSHtA1Kjs8Vt6IgkYQoXBeXUceSmnnkIKSEWTBfXU5XiD%2BtGsJ5wp2LuU%2FE2AuL33rbVHwsYAql6KFdYRruhbUSDM%2FOJQclvMpLYSj7Or7H6OG7OdXN%2BmmR7WPWYwYavMwSuEUrqon%2FCY8NwhwJMUWQoKCL8jWsV2MH4pAhN7sHSgeg8mfpax4ZcU9V2a1jndESFjvhCPsfUHT6se2Fcj%2BNAZ%2Fya4SSmD1BoA1cCqlQDM5osuF6MjrzwGTvfeRry22C1%2F79YUO2W5W7II7fjJdwz%2BUE3fYwt5mq%2BMElNLYlOIhES1mN0IJUV%2FyVHidVITgNOW7OtFxTDawaDCBjqkAeg%2BVK9IBzAEjpnwniO4RhXc9H1HzdYGJYmhIXWMCtKX5PWwgQsvOcvf5ES3157Rfl8V3CGi60VYFWBdOd9OdL1yQo3gvE3VDXslxw%2Bmt1ZkwhERvR%2FgvCm6j8RpUihW361bFqW1fbL%2BpMTnrg0PO7D4agEa9D0wVDlR8nlrsIWbHF3WJxd7vRaE3ok25II6UIB5XhrX1MRU6A9QUj%2FgL0qrvE%2FD&X-Amz-Signature=48fbdcffe30e555310a04d8883a593751809969caa70eb4ff5ebc80ec582a554&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
