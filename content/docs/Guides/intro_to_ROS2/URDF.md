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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBCJWAV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2FOruHjcsY%2FOAPJyjK82ni%2FFTQS2rXnjc1WxXfxr2wAiEAj8z0Pdv0jIEguhY7qF307Ryn7W4fJG4MAJbzfoK8QIYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVP03I5oO6bgb760yrcAww8nRiy5p8Wvzj0QQ4zd1n79AjFUjWM2uj%2FqK2sXeUdl6ZpJ8UeliHxFsV60CEaYG8th0Vn3dZOjSRaPdLGjzGI0uceRtFVbphNa8P8BzWYVt5L1YRIl8%2FNlyAdps%2FB%2BR83le1YqYZWMWbKwEaLEdklVSvQ1vsYUg6bxSNjEzjObRtRqh49Tz0vF7CYIsj2FmI9lOG%2BLJ5EmmV6tn0SV5QuL%2BnzinTmPCKyEBIB7eFk2AT%2BcVZGkI4z3H5s4yYaaJQL83epdMAcQjV5geqAePBRhZfg%2BgXpzGjzvLUTd6lRkD%2FJPVjSCNDFIec7UGhB9yUxhZlzcRL%2BvJ5WIZBo6jSJF6f7G7slopgMmZC%2BU1rbp2PBi3dn%2B8W3lskRJ5XDnJPWBh%2BIBOwuKHMECktzA2z2x4yGIl6QzebGPFlbWqT0d%2BNfefC7EtneiyZKuKTUs%2BOIEC7V4vnIjU8cVzaPUyZpEX%2FRkzKfRji7w9U6DfZLh7Bv2%2Fynzo1uvrxAEQIHQbtR0tTzbRFRYfXmSJzrY2zxvrZBzE5ec1GCWIvfwY4yj4TlNHfeNYKGXMneoQFGiviSviOMjE06goGq%2Beb%2BT1JKPwbaHr%2BRfN3pSrf58eCC8RUfExZQ1xROlEd%2FMMas3MIGOqUB3mYPC85jR%2BK5ojaEHU4U6uxMJvjXJfW3bsJlssFWUnA3CWduWZRS%2FhFZ27bKsBKQOT2rXl5oVaOYfZ%2BVd6eUdIBibnaD7KiKVyU8G7V%2BovVxtq5qZrcdRwpf42mAgWnRF%2BhqTBT%2FuHoVgHmfu3Bz9qEIPHkP0sGps50BSXV0PeSSa64RQ%2BqWsAlwAqsGkAyBRFwhZLlt%2BgJat5BEhgvw1hHMaIa%2F&X-Amz-Signature=cb962b33e94b4764bba88cd44dbf327b40e1fa4dc2d22e84ffb6c3cd6f29307e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBCJWAV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2FOruHjcsY%2FOAPJyjK82ni%2FFTQS2rXnjc1WxXfxr2wAiEAj8z0Pdv0jIEguhY7qF307Ryn7W4fJG4MAJbzfoK8QIYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVP03I5oO6bgb760yrcAww8nRiy5p8Wvzj0QQ4zd1n79AjFUjWM2uj%2FqK2sXeUdl6ZpJ8UeliHxFsV60CEaYG8th0Vn3dZOjSRaPdLGjzGI0uceRtFVbphNa8P8BzWYVt5L1YRIl8%2FNlyAdps%2FB%2BR83le1YqYZWMWbKwEaLEdklVSvQ1vsYUg6bxSNjEzjObRtRqh49Tz0vF7CYIsj2FmI9lOG%2BLJ5EmmV6tn0SV5QuL%2BnzinTmPCKyEBIB7eFk2AT%2BcVZGkI4z3H5s4yYaaJQL83epdMAcQjV5geqAePBRhZfg%2BgXpzGjzvLUTd6lRkD%2FJPVjSCNDFIec7UGhB9yUxhZlzcRL%2BvJ5WIZBo6jSJF6f7G7slopgMmZC%2BU1rbp2PBi3dn%2B8W3lskRJ5XDnJPWBh%2BIBOwuKHMECktzA2z2x4yGIl6QzebGPFlbWqT0d%2BNfefC7EtneiyZKuKTUs%2BOIEC7V4vnIjU8cVzaPUyZpEX%2FRkzKfRji7w9U6DfZLh7Bv2%2Fynzo1uvrxAEQIHQbtR0tTzbRFRYfXmSJzrY2zxvrZBzE5ec1GCWIvfwY4yj4TlNHfeNYKGXMneoQFGiviSviOMjE06goGq%2Beb%2BT1JKPwbaHr%2BRfN3pSrf58eCC8RUfExZQ1xROlEd%2FMMas3MIGOqUB3mYPC85jR%2BK5ojaEHU4U6uxMJvjXJfW3bsJlssFWUnA3CWduWZRS%2FhFZ27bKsBKQOT2rXl5oVaOYfZ%2BVd6eUdIBibnaD7KiKVyU8G7V%2BovVxtq5qZrcdRwpf42mAgWnRF%2BhqTBT%2FuHoVgHmfu3Bz9qEIPHkP0sGps50BSXV0PeSSa64RQ%2BqWsAlwAqsGkAyBRFwhZLlt%2BgJat5BEhgvw1hHMaIa%2F&X-Amz-Signature=32d3e9506ef901bb41a1d7884ee43635ae694401969586d3c29698082d54d932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
