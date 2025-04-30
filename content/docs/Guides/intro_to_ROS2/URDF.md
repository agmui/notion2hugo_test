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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIXNSIV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID9LnI%2Fxj2IpRide9aC3AzOWTkTmhN1k8kKaPp3hwuelAiBM7S0OjD%2Bk6n0H8iatMd3f4xsZSOcCm87bjNfrjXlKGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsZ49OHezAdXgNQ66KtwDJSE1TH578mHqCPRkVSKQuxnJwStiXWP2CnDpmo2ZU3jiFXcO%2BO63pZWpOOugSHBlcJ25EbP3qMljNaqlK%2B0eCPtWHeOhC1JqRzEIydXddpaqNGV1hZVto1FUW9txCyOf96wblMirGkNhWjI13giHwMuzeyl3WJYhBDeZ213PxfRTTwiNyiiHovzY269kCIMeHqvBMkdGKhQNEWUfoOQgNC%2B5OY%2FKuz6yUdC8q%2FbmtNOMAP7a3Jqu0xf4wdiF%2FfFE67YV7fNVQiLN1fbxaBKC17L%2F1%2BvmjDLT0YfqR7VMEkUXEIMsT7HGMA5H3mo%2FVunyeNwWug4%2FWO22JIrYAWVmlISape7x0HvCHBcBjhdQXSSQ45N72Yhbw4Dj9yOw11tENQmQ24RNUSRbabD5RwNkcQMK3m254e5d9xtKR%2BQ4xiOyfKk%2B%2FV20hfCacPy6Lja%2BqExcM9eOmGUQDarzreyKkKM2tSap4t1yqlotwKTq5ovHa5UILeh%2FYaYDzgHmp5ZZGpvYXj2bcpV5A64JFORPnNyyPsJh7W5yJaC0tjQb0nahNadTtKZ6fO58hr18L8KqmZVDlQWqq9cQ7qGzGRXDJbwLTMzQcXE8JsD%2Fmn2Hy%2Bh88vPr1pA7tcWgVXAw9rPHwAY6pgHigtRpUNYEt4m5rYGm37JUFy%2F2qrLpFk1UMlrTHT2f2%2BxxL6ayeCfjukdCgJp8uHwG1w9b5PC29gncTf2PIKycuu8EhVW9y9Mwxw4n7gF8yRtaE0oQXtJvaQOC8JQ32n8qrXNbrRgJWXpI0GNJkOJ9KQNb44URuG9T08pKZvKeXtW5XuUdD5eBs97JXeTf5q1qPDAz8uMhdA1TuO%2Fprsv2cowA1HyY&X-Amz-Signature=111501380d88fce8395ed98e5aea5b6b8bf9a47fd2927f212f362da9dcff4bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIXNSIV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID9LnI%2Fxj2IpRide9aC3AzOWTkTmhN1k8kKaPp3hwuelAiBM7S0OjD%2Bk6n0H8iatMd3f4xsZSOcCm87bjNfrjXlKGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsZ49OHezAdXgNQ66KtwDJSE1TH578mHqCPRkVSKQuxnJwStiXWP2CnDpmo2ZU3jiFXcO%2BO63pZWpOOugSHBlcJ25EbP3qMljNaqlK%2B0eCPtWHeOhC1JqRzEIydXddpaqNGV1hZVto1FUW9txCyOf96wblMirGkNhWjI13giHwMuzeyl3WJYhBDeZ213PxfRTTwiNyiiHovzY269kCIMeHqvBMkdGKhQNEWUfoOQgNC%2B5OY%2FKuz6yUdC8q%2FbmtNOMAP7a3Jqu0xf4wdiF%2FfFE67YV7fNVQiLN1fbxaBKC17L%2F1%2BvmjDLT0YfqR7VMEkUXEIMsT7HGMA5H3mo%2FVunyeNwWug4%2FWO22JIrYAWVmlISape7x0HvCHBcBjhdQXSSQ45N72Yhbw4Dj9yOw11tENQmQ24RNUSRbabD5RwNkcQMK3m254e5d9xtKR%2BQ4xiOyfKk%2B%2FV20hfCacPy6Lja%2BqExcM9eOmGUQDarzreyKkKM2tSap4t1yqlotwKTq5ovHa5UILeh%2FYaYDzgHmp5ZZGpvYXj2bcpV5A64JFORPnNyyPsJh7W5yJaC0tjQb0nahNadTtKZ6fO58hr18L8KqmZVDlQWqq9cQ7qGzGRXDJbwLTMzQcXE8JsD%2Fmn2Hy%2Bh88vPr1pA7tcWgVXAw9rPHwAY6pgHigtRpUNYEt4m5rYGm37JUFy%2F2qrLpFk1UMlrTHT2f2%2BxxL6ayeCfjukdCgJp8uHwG1w9b5PC29gncTf2PIKycuu8EhVW9y9Mwxw4n7gF8yRtaE0oQXtJvaQOC8JQ32n8qrXNbrRgJWXpI0GNJkOJ9KQNb44URuG9T08pKZvKeXtW5XuUdD5eBs97JXeTf5q1qPDAz8uMhdA1TuO%2Fprsv2cowA1HyY&X-Amz-Signature=c8e2fc7d2e1260fc641873bda226f88d8dfae04e2d035cabb850b1703b6950bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
