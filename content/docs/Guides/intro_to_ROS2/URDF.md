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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMQXGNQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjwGvd3HUUTsSc3vfdUusoidSnXraSIZ68UWTwlI2vCAiEA84yxDRHk9udPvXdGi1rcJiN6Fwo%2B02lG7YvidLlgpnYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJFj0B0CxpJ07S2NXSrcA00kvxaUI9Tm62mcKmEiOG17tZz6EpCsx5FxNu7TCwEZs74F2GRCQb5CDVpHfQBSGuZTLKzQ%2BXDG0DcmHLtQTsoiTMdayPUOeL%2BEiECquJ5AeDqgkICbwLZcYkkvxo6IZVyHykkH7Y0DjyH6yBwyUeOo4gM%2Bt7m68TQtP3rJnXtxlFxt9pgDqlSNiqAtWC%2FCwggrV6hysXtytFSunq9WtNzWX86gPjsH5yvXvIoFFHjY4nB9NYXGkKxTsS5bI8wLUQLQWDGFoK3XB5otbju0NTEDq3F0qornrOxVh%2FegYfBXfM0MVj3pHeo2RQHL5iDP1%2Bu5y5YamKKHuNd9pFTsWMA2mTX7Xv35bybZ%2B8gh%2BLyuaukJTG%2FOP9ydX3Gq%2F6DbS%2FJnkoUjogho1zliBdT3F6ecxAvpTGU4Mz1axI3%2Fl8GsKrlEkILpFELX1Or%2BOVltUoyDG7Q403rdXBzyuJWnjcxWPrczWVQX%2BP%2Bh8jYzE4ONMfBkb1YM4NaQ1MEt97XuJxXWhWZftoNu5NQUvgAmxXruLVjyDXhGTbU6uhL5rRGDINdzois9fJ1jIuQ8SROc2RcG9cpiH8AC7HcXIwTQ%2BBZs1gHBtfey%2Fkhf55pWfgtOCR4NuEZbyqRi38pyMLnv1b4GOqUBmeCtLqLipZpH8%2F7jdslILHWjMFqGu8Hx9TbDL3CIgn%2BrYIjN%2FrhjxuB7trUF2LhW89wiWWD4W1W%2F0wzxLJtW2E5oOeL1fQhDsKqHwZB6YJ0d4%2FG2pk9nvIgZsl%2Fyr%2B2aXjDGENKXnp4reRj8DgNysVCqs9nyF1hnBRODUTNrtiRUa5%2FV5pn4hjj6vguYdETFswBcfhLXQli22PjJdAuk%2Fkge4yUB&X-Amz-Signature=7a17197aa961e864a502e8b5a9a6dab227584c4ace5ef8c6643a574edad870fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMQXGNQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjwGvd3HUUTsSc3vfdUusoidSnXraSIZ68UWTwlI2vCAiEA84yxDRHk9udPvXdGi1rcJiN6Fwo%2B02lG7YvidLlgpnYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJFj0B0CxpJ07S2NXSrcA00kvxaUI9Tm62mcKmEiOG17tZz6EpCsx5FxNu7TCwEZs74F2GRCQb5CDVpHfQBSGuZTLKzQ%2BXDG0DcmHLtQTsoiTMdayPUOeL%2BEiECquJ5AeDqgkICbwLZcYkkvxo6IZVyHykkH7Y0DjyH6yBwyUeOo4gM%2Bt7m68TQtP3rJnXtxlFxt9pgDqlSNiqAtWC%2FCwggrV6hysXtytFSunq9WtNzWX86gPjsH5yvXvIoFFHjY4nB9NYXGkKxTsS5bI8wLUQLQWDGFoK3XB5otbju0NTEDq3F0qornrOxVh%2FegYfBXfM0MVj3pHeo2RQHL5iDP1%2Bu5y5YamKKHuNd9pFTsWMA2mTX7Xv35bybZ%2B8gh%2BLyuaukJTG%2FOP9ydX3Gq%2F6DbS%2FJnkoUjogho1zliBdT3F6ecxAvpTGU4Mz1axI3%2Fl8GsKrlEkILpFELX1Or%2BOVltUoyDG7Q403rdXBzyuJWnjcxWPrczWVQX%2BP%2Bh8jYzE4ONMfBkb1YM4NaQ1MEt97XuJxXWhWZftoNu5NQUvgAmxXruLVjyDXhGTbU6uhL5rRGDINdzois9fJ1jIuQ8SROc2RcG9cpiH8AC7HcXIwTQ%2BBZs1gHBtfey%2Fkhf55pWfgtOCR4NuEZbyqRi38pyMLnv1b4GOqUBmeCtLqLipZpH8%2F7jdslILHWjMFqGu8Hx9TbDL3CIgn%2BrYIjN%2FrhjxuB7trUF2LhW89wiWWD4W1W%2F0wzxLJtW2E5oOeL1fQhDsKqHwZB6YJ0d4%2FG2pk9nvIgZsl%2Fyr%2B2aXjDGENKXnp4reRj8DgNysVCqs9nyF1hnBRODUTNrtiRUa5%2FV5pn4hjj6vguYdETFswBcfhLXQli22PjJdAuk%2Fkge4yUB&X-Amz-Signature=519aa7fee0c7fd8c8c2365d0b8e4571aadc011804d7f60b13fc715727ed78644&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
