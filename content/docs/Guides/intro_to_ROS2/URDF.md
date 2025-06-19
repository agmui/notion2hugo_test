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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7R6RLO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgBNsxppdMTWB0icrGjz4VJeXMSQzGmW%2FgAc7DWWp%2BzAiBD1okTnh%2BzNgneapOYbkcK3pKAeqfzYlCBTQ4MFOMgLSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDKuiC%2BVsbEYnVLEKtwDDI6mEVf7%2BlaziNoxwXfVheNQmX5lqugbNsORwy%2B5ye5KfBlNIBOr4SOErHXuWE1%2FoCi7PhIxWz%2BslMmjA95X4tN%2Bz2i6xqDaY2%2B4dce1JoC1BRdEV%2F0wMGDPAV%2BlKxFRLSPZT6ySJFzWWYAD3XHSSboRuZm49wOekqr0tDN0CQjjjeafXgwspGJe2o8TIKmhGR7Jh3iaAw0f1mbRYwEcvRYCPxtgDCC%2F9z8O9zWXWcLMG0caTsiViTqV3LzJYq8sylr339uzprXfI827GwQlZLz3%2BuAsJQlnsqemLjFg5UrdGWSjWVoiQJp4C2wuT%2FoUVj0em%2B2DknWGESspY6K2TybxsNxERG9JNrYuq1nIZ2jfPGyY%2FcedNobvgnDIPmExr%2BUOk5MqyABta4Q%2FZLWk2Inbjzksgz1ZqGWL8jTdxD9suWk%2Bp3T%2BN3INqFYeeZcC%2BgvFqBVEduMZbqZh%2B1pUVHgeytTeVTdvqfqKpk6DZLED2d%2B87KwsI2Yty8y60eBqijj8Lej%2F9nJo91kYC74O6ePbHTlD8mQDtnObYk9eUhr4Ec9hNRbXlEEuIQoVz4nJK58GjOVXXWzpI0ndzd6QfM6FwrmdKhev3h0mSzEpQuUpk2NRm2jl%2BdzhyAwwj9%2FOwgY6pgH%2Ft7HBdzG6g6h%2FXJYoOX%2FcTbdMozFOhlehLT0OC7Pdy0mrVksbWyn137E9yNz5HP4A%2FEZf5Zj%2BuczaD%2BFiFPXnh1SsAtoxu6mpVIhbGci17SYDQtGXjjdti3Idv%2B5NoFDk8ZwwlN5Sg%2BEApii1NMNDksLAR6pUiWliypa7BWWtgRjI9u3wvB3mKR9iyBlj5HqTWV9DRjswHOLSDVJbqeio7yfjTqPi&X-Amz-Signature=8b2f147ea1a8a53ac0f0917122c6275cc4e5d0abf94e0ca9bc284f3237ad06f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7R6RLO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgBNsxppdMTWB0icrGjz4VJeXMSQzGmW%2FgAc7DWWp%2BzAiBD1okTnh%2BzNgneapOYbkcK3pKAeqfzYlCBTQ4MFOMgLSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDKuiC%2BVsbEYnVLEKtwDDI6mEVf7%2BlaziNoxwXfVheNQmX5lqugbNsORwy%2B5ye5KfBlNIBOr4SOErHXuWE1%2FoCi7PhIxWz%2BslMmjA95X4tN%2Bz2i6xqDaY2%2B4dce1JoC1BRdEV%2F0wMGDPAV%2BlKxFRLSPZT6ySJFzWWYAD3XHSSboRuZm49wOekqr0tDN0CQjjjeafXgwspGJe2o8TIKmhGR7Jh3iaAw0f1mbRYwEcvRYCPxtgDCC%2F9z8O9zWXWcLMG0caTsiViTqV3LzJYq8sylr339uzprXfI827GwQlZLz3%2BuAsJQlnsqemLjFg5UrdGWSjWVoiQJp4C2wuT%2FoUVj0em%2B2DknWGESspY6K2TybxsNxERG9JNrYuq1nIZ2jfPGyY%2FcedNobvgnDIPmExr%2BUOk5MqyABta4Q%2FZLWk2Inbjzksgz1ZqGWL8jTdxD9suWk%2Bp3T%2BN3INqFYeeZcC%2BgvFqBVEduMZbqZh%2B1pUVHgeytTeVTdvqfqKpk6DZLED2d%2B87KwsI2Yty8y60eBqijj8Lej%2F9nJo91kYC74O6ePbHTlD8mQDtnObYk9eUhr4Ec9hNRbXlEEuIQoVz4nJK58GjOVXXWzpI0ndzd6QfM6FwrmdKhev3h0mSzEpQuUpk2NRm2jl%2BdzhyAwwj9%2FOwgY6pgH%2Ft7HBdzG6g6h%2FXJYoOX%2FcTbdMozFOhlehLT0OC7Pdy0mrVksbWyn137E9yNz5HP4A%2FEZf5Zj%2BuczaD%2BFiFPXnh1SsAtoxu6mpVIhbGci17SYDQtGXjjdti3Idv%2B5NoFDk8ZwwlN5Sg%2BEApii1NMNDksLAR6pUiWliypa7BWWtgRjI9u3wvB3mKR9iyBlj5HqTWV9DRjswHOLSDVJbqeio7yfjTqPi&X-Amz-Signature=0f95caea106802336d1c9db1d0626643423b4173e5f59cc5cb33c83de8a6ab5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
