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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ULZP7W%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDax5HkV66IueT%2BVbvSsoeCdOATmRYWNWNH%2B2c3%2Fsxw3AiEA9LeAxn81QpQyz%2BeB84IjCcTT3XpD9HTnO%2BhqfQia0fMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3eWoOIOqopJm%2F0mSrcA7QxdXs5obEhCncJd%2FaZzU1VcmydGzsQDMxQPYYGwBb%2FYiDka3wSu5FVkZDJGCFSSKyknzd%2F%2F8vqjUmc7YvQKrcD70Gfwg5TQgJndqnh4HZvuM8ntUlaQ3gwdgV6NtcRG9zHgmwoSow4Qqj%2BKhv6vnrxHOXhbhcPcN757cxAsMEYYmRV7zkYK4y9MlujyBeI776WZGXdQrvnRKP6iNQYbmH2xzWqLhyebD3Wzf3z7GIzBRTO2vty1fFmcSGd3621srSRrfrXyEyl9CDh00fPoJ44%2FUMig18lg%2FRR65qQQ2EarGIW7e5FWo3rDlNJpKutN%2BeH8q2rgjBD07xrrUrLdypEWEtPOCT%2FTUReZqr%2FB7Few%2B%2BqMIw%2BYwpdNleJvE5ayDNht3CDrui3lA%2Bb8dWgvBzRLrkT6CxkwyYHVGnc3ye%2BEof5elnsiIywH%2BxqlkGtZOBledXwDHYLv4Q8yT4IBcDAxKVbpHMMtF%2FWXWDCVN1Uit4Edj99Vf8udZxBXlgirub9XpelJslqlaYG%2BNS6%2F8JzL3dFiW7eXIw2BLzMEwOSZLDhHLVWlZ0GuCHybtGY47Plf6eeCKX6mvaq4w4iDqnXMbwt57KKlW%2F3GYFfNdjOdUeujwxiCCiCPYegMOzu%2B74GOqUBm9QX%2B7VlhVBonJi4ZgwiYg8oBfWI4a5PGnQsUarq8Tfy898Q80nFZ2XRppzNbzuQHuNKGQY4QuplVUAC8HrQZTSlzcFA0yDO2unzXJ3nNhvt3d8G9013g2Wv15lKtEdb80LxrWMcJPybXGP0ARksgVxTgXWZc8aWH7yDw3u45IRk3CboN2Du%2FQkgENJXWXmoy9lK6Ym1AzZ5Y5Q%2BbrV7TS6i7FYI&X-Amz-Signature=391e42c25b9c3908c854db2effe0bff88360bf761f51e0d6dc2289c2e706f014&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ULZP7W%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDax5HkV66IueT%2BVbvSsoeCdOATmRYWNWNH%2B2c3%2Fsxw3AiEA9LeAxn81QpQyz%2BeB84IjCcTT3XpD9HTnO%2BhqfQia0fMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3eWoOIOqopJm%2F0mSrcA7QxdXs5obEhCncJd%2FaZzU1VcmydGzsQDMxQPYYGwBb%2FYiDka3wSu5FVkZDJGCFSSKyknzd%2F%2F8vqjUmc7YvQKrcD70Gfwg5TQgJndqnh4HZvuM8ntUlaQ3gwdgV6NtcRG9zHgmwoSow4Qqj%2BKhv6vnrxHOXhbhcPcN757cxAsMEYYmRV7zkYK4y9MlujyBeI776WZGXdQrvnRKP6iNQYbmH2xzWqLhyebD3Wzf3z7GIzBRTO2vty1fFmcSGd3621srSRrfrXyEyl9CDh00fPoJ44%2FUMig18lg%2FRR65qQQ2EarGIW7e5FWo3rDlNJpKutN%2BeH8q2rgjBD07xrrUrLdypEWEtPOCT%2FTUReZqr%2FB7Few%2B%2BqMIw%2BYwpdNleJvE5ayDNht3CDrui3lA%2Bb8dWgvBzRLrkT6CxkwyYHVGnc3ye%2BEof5elnsiIywH%2BxqlkGtZOBledXwDHYLv4Q8yT4IBcDAxKVbpHMMtF%2FWXWDCVN1Uit4Edj99Vf8udZxBXlgirub9XpelJslqlaYG%2BNS6%2F8JzL3dFiW7eXIw2BLzMEwOSZLDhHLVWlZ0GuCHybtGY47Plf6eeCKX6mvaq4w4iDqnXMbwt57KKlW%2F3GYFfNdjOdUeujwxiCCiCPYegMOzu%2B74GOqUBm9QX%2B7VlhVBonJi4ZgwiYg8oBfWI4a5PGnQsUarq8Tfy898Q80nFZ2XRppzNbzuQHuNKGQY4QuplVUAC8HrQZTSlzcFA0yDO2unzXJ3nNhvt3d8G9013g2Wv15lKtEdb80LxrWMcJPybXGP0ARksgVxTgXWZc8aWH7yDw3u45IRk3CboN2Du%2FQkgENJXWXmoy9lK6Ym1AzZ5Y5Q%2BbrV7TS6i7FYI&X-Amz-Signature=d77260f3f26ee12a300f1b7b405668c929a5de0df2ecb7bc6b911bceb99faa07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
