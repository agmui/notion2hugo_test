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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPSLQLQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrNwj39d7CGaxuKTLm4fPYYYdhyY0lw439att6ukPZoAIgR4GAUdNEkxnl%2Ffqvkuh2zf5YIaQEzWWNHtSPoT91ANIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9zL2DSHraZ9eWycyrcAxkWuEr0IZj71ly0WYX23hK5yeE76lg%2B24ru%2FEoWlIQm0fL%2F8bGMJcdUVtB84DNGxZ8sbfTcQWM%2B%2BYhEni2qCmdyR6glx9SgH2%2Bs9K0dEz08E40S9rKM5unQZZ%2BJd%2FIXYuOFyTZZnY%2BbMCGqL3cJVuigee0ZG2OwhLRtACyEtN6UETWeB6%2BhpG7%2Bcbyc2f1GRx8o5jqcHQNrPaNAqVr0%2B%2FqquURQYEUbiOo1ybeLCW0RVVeBnIkeX2G33YJdzEpPJxfkY6NpF8VtSmSMnIt97m2oya7tHQdhctR5D9NeOioJKimG9%2BFNOrvnb%2FHv8KintE5bxTDnSYubs%2F%2FRtStjUBq2moBOa0UVGk9Uxx4Obk7m9imTHrTemMQYhtO3llZFq4OD5NIucPTF77n1Zm2mlxad3T9rUTsu29JxywlwILYZ83vU7mM749QT1fVNlmEoqhYvK5KcwZbZWns7s3Tjn5bl8Tg2Tov%2BU4NcKv1SkXkW6gc7vssvvi2zp9ex8ssCKg0EUvP9ohBlvEs7j289W0UO13UUmInwRXzfZbxSAU%2B6lcZs1XZGU%2FSWPduNKTQCBauoiFnoKe44xwNyUq4iDN5v9wvYceVh5ynI5UVBNBqN8m2IcTnKlL3ubSNTMLSK%2F8AGOqUB9ZmBpAi%2FioSWc7tXG4xbd84YQ7FJocW82B5FsQndPyEWh9rKPmuuEjkU%2B48w5mjit%2BNl3%2BiJ%2B1Nm%2BtlMXizBjoe8guaDNDf7aIsLxu8BcBL%2FWUjhZrlEzkdnHnede0Cg6UZ%2B%2FThvO9VPs%2FxPyt6ND%2FAFM%2BL2E04VKZmcPE2GRupnJanWlmJQ1eaEXrFiB1uyQloxheuqewTIspwhRw1hr0Q2Pu4r&X-Amz-Signature=137ec0abff3eb92669abdb064778e678ee9022574e867ed6a7490c3c896138cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPSLQLQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrNwj39d7CGaxuKTLm4fPYYYdhyY0lw439att6ukPZoAIgR4GAUdNEkxnl%2Ffqvkuh2zf5YIaQEzWWNHtSPoT91ANIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9zL2DSHraZ9eWycyrcAxkWuEr0IZj71ly0WYX23hK5yeE76lg%2B24ru%2FEoWlIQm0fL%2F8bGMJcdUVtB84DNGxZ8sbfTcQWM%2B%2BYhEni2qCmdyR6glx9SgH2%2Bs9K0dEz08E40S9rKM5unQZZ%2BJd%2FIXYuOFyTZZnY%2BbMCGqL3cJVuigee0ZG2OwhLRtACyEtN6UETWeB6%2BhpG7%2Bcbyc2f1GRx8o5jqcHQNrPaNAqVr0%2B%2FqquURQYEUbiOo1ybeLCW0RVVeBnIkeX2G33YJdzEpPJxfkY6NpF8VtSmSMnIt97m2oya7tHQdhctR5D9NeOioJKimG9%2BFNOrvnb%2FHv8KintE5bxTDnSYubs%2F%2FRtStjUBq2moBOa0UVGk9Uxx4Obk7m9imTHrTemMQYhtO3llZFq4OD5NIucPTF77n1Zm2mlxad3T9rUTsu29JxywlwILYZ83vU7mM749QT1fVNlmEoqhYvK5KcwZbZWns7s3Tjn5bl8Tg2Tov%2BU4NcKv1SkXkW6gc7vssvvi2zp9ex8ssCKg0EUvP9ohBlvEs7j289W0UO13UUmInwRXzfZbxSAU%2B6lcZs1XZGU%2FSWPduNKTQCBauoiFnoKe44xwNyUq4iDN5v9wvYceVh5ynI5UVBNBqN8m2IcTnKlL3ubSNTMLSK%2F8AGOqUB9ZmBpAi%2FioSWc7tXG4xbd84YQ7FJocW82B5FsQndPyEWh9rKPmuuEjkU%2B48w5mjit%2BNl3%2BiJ%2B1Nm%2BtlMXizBjoe8guaDNDf7aIsLxu8BcBL%2FWUjhZrlEzkdnHnede0Cg6UZ%2B%2FThvO9VPs%2FxPyt6ND%2FAFM%2BL2E04VKZmcPE2GRupnJanWlmJQ1eaEXrFiB1uyQloxheuqewTIspwhRw1hr0Q2Pu4r&X-Amz-Signature=44d9708821976baedab8c89557233d8d12a0b673df5765fcce606ef26e91baf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
