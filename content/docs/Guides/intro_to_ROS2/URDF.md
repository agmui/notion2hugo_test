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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3LJVC5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICqNBIy83ny3CheImjhlgarblm8f202nGYAq0BtvjagGAiEAzZ3FGs6oJtTKhVQQBqZ3d541ldNYvz4D29U0KsFs0sYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLAIiaJNV0EUjD09sSrcA6pEVy3TDhCOCjUwuRoqb3ZIwqgprVNmLcDtdkPweX8f395bg0slEI1Fb7wuZ76nJuuXQAAQJXxB7ugkPyYKeYfkKwvESneMpfmYyFoaApYgX4ik4NUxJkg67O12LL9NxGcNor%2BXXX2xgFVnide%2BfO7vAT40NnnXA3lTMKqOFwOgbgT7xfQ7TQ71g75l92KfeP2XagAOyAcNfqHoOg6yaKOFlNeXSXRK3yDF%2FnC%2BA2lCyo3hBk8BEoLxS0tVcWFi1JbByDAP3KhBP1YTN5rY9s88dTwo95SwIr83Ulrf33fMfdqKUGrYIEcj3MB7zVM0t4jNGQBbYoAqv3qgmcWwEUBU8eqa%2FYMpwI9c1TEFx4yGQWcBfP746UWFkROi1AJmyyRlUXEolrliHG7gy4AOF1d%2FAKxB4gn0QfzPMkdIIP%2FC1amwjuZKXNuAZ3AVDD%2FLW%2B9S6OOAw%2BjwoNgSABun3DxkaYesPmwjPKQAuJb3XEuV%2FBXRjYFR7HmLPs%2BiylGdaCAnexooEc1FrFIcFXeOaSF4KPQKNvl5XFzVl%2BCw8dGQ3wp1vtKP%2BbJGXBgNZzI1jm8jrFOLYd4szTD8fm9c7IOQEDQmoIfrGogGPe88P%2Ffc5WVRIDnjb5ehCSROMOX%2Bxb0GOqUBaudnVL9V%2Ffx00UpCLeHsyReX17ohGOsgWWozzzJBcezmyY8i6mFDqSqOvjJdCOhA9q9yRUxkEUQBHXdso8IJDRJSyT6Lfci2WHBzM879FLjZl7WCpsF4demxCY8DrDuMgOzkGc8NGVnGv1wlIQ7l6E7QZA71jcXJ250wD0iGk%2BY78RqUuAtrua6j%2FvlA8ToiLgs%2BqqtMtw0Z%2ByGQjLkTvwDAAT4Q&X-Amz-Signature=646c491da301f5971c62ba06986a9d5c810b75c324c79905ef3e13036fb78fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3LJVC5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICqNBIy83ny3CheImjhlgarblm8f202nGYAq0BtvjagGAiEAzZ3FGs6oJtTKhVQQBqZ3d541ldNYvz4D29U0KsFs0sYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLAIiaJNV0EUjD09sSrcA6pEVy3TDhCOCjUwuRoqb3ZIwqgprVNmLcDtdkPweX8f395bg0slEI1Fb7wuZ76nJuuXQAAQJXxB7ugkPyYKeYfkKwvESneMpfmYyFoaApYgX4ik4NUxJkg67O12LL9NxGcNor%2BXXX2xgFVnide%2BfO7vAT40NnnXA3lTMKqOFwOgbgT7xfQ7TQ71g75l92KfeP2XagAOyAcNfqHoOg6yaKOFlNeXSXRK3yDF%2FnC%2BA2lCyo3hBk8BEoLxS0tVcWFi1JbByDAP3KhBP1YTN5rY9s88dTwo95SwIr83Ulrf33fMfdqKUGrYIEcj3MB7zVM0t4jNGQBbYoAqv3qgmcWwEUBU8eqa%2FYMpwI9c1TEFx4yGQWcBfP746UWFkROi1AJmyyRlUXEolrliHG7gy4AOF1d%2FAKxB4gn0QfzPMkdIIP%2FC1amwjuZKXNuAZ3AVDD%2FLW%2B9S6OOAw%2BjwoNgSABun3DxkaYesPmwjPKQAuJb3XEuV%2FBXRjYFR7HmLPs%2BiylGdaCAnexooEc1FrFIcFXeOaSF4KPQKNvl5XFzVl%2BCw8dGQ3wp1vtKP%2BbJGXBgNZzI1jm8jrFOLYd4szTD8fm9c7IOQEDQmoIfrGogGPe88P%2Ffc5WVRIDnjb5ehCSROMOX%2Bxb0GOqUBaudnVL9V%2Ffx00UpCLeHsyReX17ohGOsgWWozzzJBcezmyY8i6mFDqSqOvjJdCOhA9q9yRUxkEUQBHXdso8IJDRJSyT6Lfci2WHBzM879FLjZl7WCpsF4demxCY8DrDuMgOzkGc8NGVnGv1wlIQ7l6E7QZA71jcXJ250wD0iGk%2BY78RqUuAtrua6j%2FvlA8ToiLgs%2BqqtMtw0Z%2ByGQjLkTvwDAAT4Q&X-Amz-Signature=c2f5359cf763bde296f0f884abf8f4e9c2218a15013fd6d92128f79abd8cf927&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
