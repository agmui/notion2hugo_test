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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VN7W3CJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDBU0ia7AdyodN0eAXMnFlmXInjAhA4FXPh24GhmBOzgAIhAMnKQ0FtRuf7jtoOvEm9qlCXgum%2FeBGtCAiinQFEsEUcKv8DCFAQABoMNjM3NDIzMTgzODA1IgxqZ6h2AdoINXZltRgq3AOVb8eUjRGs9xT416vEd%2FxuuQW3CFcI9oXBawVzwxsLQiFvumKztpaLT23Fdf40y3wuAhFUoaqELToVtTCxIMs3HuOlhMbmxBG9pmNSLWT06K4FbosGuxPyCfbd5N62Wu9OGwJFb8bkzyDW5altCUgtMgpXocYnVDhqIOw7EQ3xwO87Q%2FoEVVvCtlDJIGuQZj1%2FWb%2B4JnawPxpwxRJ5Aex3aarHudN8VyVs0DcpBQDIWX0XE4ob6XBSGebfieu1TsnSUqWxnR7yF2WS2FWDRZ4Y4S3WMPfH63ij%2B6WojbnFCNa8HNtibAnkLuJ8NpLKUtroHDWKU2vRJu8NE1jwgRr9vWmTHzRcxoHst3dU0X3fXjM5YZX%2BpzVUurJag0j5wxK7tcbvatCo5FTKIg9D6URHobd22QSOso7Jrvq4XxnItmzU209tojIUK%2By1hSVeWV13cXlo4Jo%2FwudqQ8iM7KkGFunIEW6094kghBrXSjW4ketUSnuM3ODxRvmr2wDafryZNwO67mcnHBg7dZZIYFKIBKmLDlhespslhxtHXkXsuRZvJ1dthMARxA20hYLLYz7Kc%2Fl0vt4Xyf8vj%2BdpWxTgEvRzTNM2mD9WLVYl93PnfdH77fgN%2FKSPK7vTODCirsS9BjqkARrvTQX6ANBJRKnngv7Nbe5OEEz7BzLJ5zoOhcSnJiuDxIQwa41trbVTQVwNtcIYdJSGCGi76JWwUf%2FpopuOZBfN2j2%2BTEWSMU0pR6c5zKW5Mcp9%2BFfK9DkbZF%2BnASmdlFIaAKpBAAyyqMOwN9XvhYK89Ku1fXDbgozsxzvqvGfniHcUYS2cu%2B3d3oNixRRoDEPpUQzwzGq%2BTnmxs1iGN8a4Cozm&X-Amz-Signature=ddb723ef24e340a0cfa0a4189528415b7cdf1fa88c75fe37ab8115d9260868e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VN7W3CJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDBU0ia7AdyodN0eAXMnFlmXInjAhA4FXPh24GhmBOzgAIhAMnKQ0FtRuf7jtoOvEm9qlCXgum%2FeBGtCAiinQFEsEUcKv8DCFAQABoMNjM3NDIzMTgzODA1IgxqZ6h2AdoINXZltRgq3AOVb8eUjRGs9xT416vEd%2FxuuQW3CFcI9oXBawVzwxsLQiFvumKztpaLT23Fdf40y3wuAhFUoaqELToVtTCxIMs3HuOlhMbmxBG9pmNSLWT06K4FbosGuxPyCfbd5N62Wu9OGwJFb8bkzyDW5altCUgtMgpXocYnVDhqIOw7EQ3xwO87Q%2FoEVVvCtlDJIGuQZj1%2FWb%2B4JnawPxpwxRJ5Aex3aarHudN8VyVs0DcpBQDIWX0XE4ob6XBSGebfieu1TsnSUqWxnR7yF2WS2FWDRZ4Y4S3WMPfH63ij%2B6WojbnFCNa8HNtibAnkLuJ8NpLKUtroHDWKU2vRJu8NE1jwgRr9vWmTHzRcxoHst3dU0X3fXjM5YZX%2BpzVUurJag0j5wxK7tcbvatCo5FTKIg9D6URHobd22QSOso7Jrvq4XxnItmzU209tojIUK%2By1hSVeWV13cXlo4Jo%2FwudqQ8iM7KkGFunIEW6094kghBrXSjW4ketUSnuM3ODxRvmr2wDafryZNwO67mcnHBg7dZZIYFKIBKmLDlhespslhxtHXkXsuRZvJ1dthMARxA20hYLLYz7Kc%2Fl0vt4Xyf8vj%2BdpWxTgEvRzTNM2mD9WLVYl93PnfdH77fgN%2FKSPK7vTODCirsS9BjqkARrvTQX6ANBJRKnngv7Nbe5OEEz7BzLJ5zoOhcSnJiuDxIQwa41trbVTQVwNtcIYdJSGCGi76JWwUf%2FpopuOZBfN2j2%2BTEWSMU0pR6c5zKW5Mcp9%2BFfK9DkbZF%2BnASmdlFIaAKpBAAyyqMOwN9XvhYK89Ku1fXDbgozsxzvqvGfniHcUYS2cu%2B3d3oNixRRoDEPpUQzwzGq%2BTnmxs1iGN8a4Cozm&X-Amz-Signature=bdc1b919d97a72f40fed427252e6ccb920a81f9d66dc4f4427d239bdcd607055&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
