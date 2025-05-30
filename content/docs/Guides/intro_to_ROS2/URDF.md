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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJQZQU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDBeopqBgZpHdYYbCAq%2BQObSLbpg%2FAO0MkcHjg67NEHwIgNwEK%2Fi%2F5dc3McG3s3JoXNBg7ANsV2d%2FX9RItibWX8JoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAjnJJhzdQKM47NXSrcAxWGbHvc%2Bk6xE50QVwldKad87gf%2Fm59qdGSBysKAKC91R0WbVurCVOegtHm%2FgGgImwp%2BCdL87J3ibbRolRLCMfh0EYHSXNCt5rpAMN4n7DsYWs1bbW6Dn2z0MkdeJDoeNcbpTc5sF5mFOlwLLbOVPWJNgGrd1GbpX3OVM3cRu5RM%2Fsw3beiZz4odFXRGKToY202hUpHlRnTCMcUcEpcyvb7us4h2kYyy7tL5FZNLT%2FaecFQm5dsFrg8uEO562YSncXW5ljQfDa8Boa2DqEgPiy%2BA%2FDArU0F9R2I7Ia798MiK7I82i31Ha%2BumFd%2BI6q3LSkOCt%2FT73IXZTpltTMHQrqBDnnyJPNuqmRYdWvEidT5TyrKC7ueWbggOYGkd%2FM7A7JGfGicbpkz4QoANYpIyxn09ITOD5FhX7iVGt%2FI1R6sXLegAxTtoJpbBgsuuz0xjpdpJ2uEqeBlQgP%2B2yM7rl8H4j82ZRaw3bkw1GEod8OcjNIwTVTqfylHGf87fN1aqREuFYiwX4LyXCO0vYXgAeOByYW5nn4698hAqEoayYBjWydCkzUP24uyJaqu6yqNoOBNT5cWAL3gsH8LH%2BLLZW1A%2FmT4JZW50VV4xN7NkbUegmZNBfU%2F4Yz3c8SUqMLfy5sEGOqUB8HKHQF6lPTP%2Bj97DT038I0w3CrSefnlr6%2FfX122EEtbuFyVEY%2FdtQ0HnKGC9EJdGT0C7sNq5tw2xuWEs64I1TphpMoM%2Fb%2Bj9Vu4xi5zT0i7gq7MZElhmjzFrUvwCvQ52cIDmuEDmtWZjZqc8Ocu20qnMiKsjaksdwCTkCP%2Fqobza4NL3LLG9Snr%2BE8CbXtNHPHYEycdWIVHWrEtMA8ftrRIg2Hjs&X-Amz-Signature=02ae6f64a4370644f0a8c4c62ee0c7a6b71865b2308163c454747963201ff0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJQZQU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDBeopqBgZpHdYYbCAq%2BQObSLbpg%2FAO0MkcHjg67NEHwIgNwEK%2Fi%2F5dc3McG3s3JoXNBg7ANsV2d%2FX9RItibWX8JoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAjnJJhzdQKM47NXSrcAxWGbHvc%2Bk6xE50QVwldKad87gf%2Fm59qdGSBysKAKC91R0WbVurCVOegtHm%2FgGgImwp%2BCdL87J3ibbRolRLCMfh0EYHSXNCt5rpAMN4n7DsYWs1bbW6Dn2z0MkdeJDoeNcbpTc5sF5mFOlwLLbOVPWJNgGrd1GbpX3OVM3cRu5RM%2Fsw3beiZz4odFXRGKToY202hUpHlRnTCMcUcEpcyvb7us4h2kYyy7tL5FZNLT%2FaecFQm5dsFrg8uEO562YSncXW5ljQfDa8Boa2DqEgPiy%2BA%2FDArU0F9R2I7Ia798MiK7I82i31Ha%2BumFd%2BI6q3LSkOCt%2FT73IXZTpltTMHQrqBDnnyJPNuqmRYdWvEidT5TyrKC7ueWbggOYGkd%2FM7A7JGfGicbpkz4QoANYpIyxn09ITOD5FhX7iVGt%2FI1R6sXLegAxTtoJpbBgsuuz0xjpdpJ2uEqeBlQgP%2B2yM7rl8H4j82ZRaw3bkw1GEod8OcjNIwTVTqfylHGf87fN1aqREuFYiwX4LyXCO0vYXgAeOByYW5nn4698hAqEoayYBjWydCkzUP24uyJaqu6yqNoOBNT5cWAL3gsH8LH%2BLLZW1A%2FmT4JZW50VV4xN7NkbUegmZNBfU%2F4Yz3c8SUqMLfy5sEGOqUB8HKHQF6lPTP%2Bj97DT038I0w3CrSefnlr6%2FfX122EEtbuFyVEY%2FdtQ0HnKGC9EJdGT0C7sNq5tw2xuWEs64I1TphpMoM%2Fb%2Bj9Vu4xi5zT0i7gq7MZElhmjzFrUvwCvQ52cIDmuEDmtWZjZqc8Ocu20qnMiKsjaksdwCTkCP%2Fqobza4NL3LLG9Snr%2BE8CbXtNHPHYEycdWIVHWrEtMA8ftrRIg2Hjs&X-Amz-Signature=5eb895b33b556fdd98a812d06a0b967c1412a0d6c3a0eb3d52a5af1a3225a6af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
