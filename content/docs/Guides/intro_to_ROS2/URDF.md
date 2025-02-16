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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBYS35F%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA%2B79MKft5MViCBq9JajXPUXyT59eHpQ5kZGYyAZhT24AiEA26LfuYE8qlaYiyfG0A1p%2FaCAsCUTOxVlXeNcfK%2B0eTgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDO2WCbg363d%2B1ooxDyrcA%2FFxJILEu5Fopb%2B14t06P2G7F4HBrRqTdiEDnP2iYgLEnRjq%2F35Pzk%2Fhmhc3IYn7IHCYfiYDooDF9dXXeZgYeYjfYs%2Fct%2FMLW%2B5QQEnvUM%2F%2FsOi%2F8Woox2IphVkQlgub1WwUm5SSo7aQGNYtoov4pp%2BDmJT1v42R7AGJuyLRUvLjjBcjluaR0WQFCt5gQmetci%2Bhw4KjsNoSuJmLty%2BU6YwwRnw2cEDgQ6wG1jMC0f3ER83hiweuiviMZREmUSI9Eff9PdvNd0MXBTDK2Gf%2BLCpe6zU%2FsxR54GKAy8te5oz8U845Ipbu3CTgQHtPsvVLZ79cteIlCZZLBLSbx%2B9gcm0bseKZOBF87bs3vSsiUhNMVs1Ur1z3acL9gM5dFJZGse6Ibj6CwbuB6nMlwwHlc%2FET6Ou9QKwc3LT0VfKkRdjJCBpd9QmxPWOAmPa1k%2FOsL7lqfkSqCDseJ68r5MhBVIEEhy9ZhOmLmbOlSnRE6xC3icJbH3dQwKTf%2BwQzTNppvU5wWcXZ1bLHyDXsC8IKQBJRzQ8dVJZ3rRmN93mNJ8YsMu3EwzKiiat1IpbEZakPHm51hRWFlLFJBWtFFAQPL8EfdIfU2uO%2Bxz3Z5cW0so6QlSWHAfP4Flil3HUFMIrAyL0GOqUBkcW5qDwNC9j8eJlgLp0HHvKgpQ%2B4TtmatFAmq91g%2BwgSrrP8UtTTzd%2FJggONkle%2BqN5YmIFIbNyz27aGnU3B3ZVNqJHpGI4qxQisWeXHUtG3HhYAZU5%2FY9vtaaTmvq7R8Br%2FpHP4oSWLIQ5zFFAVWinsHQyUPJOf3nUhXX7dII9m34c5IJMeP7Y6ZTWD9PqSbIuBr14oS6Yq58ozuuONIoBab1JN&X-Amz-Signature=9a5ba55639e347c0de9e856e4c9262fa354a3c7aaf9dea9a16d61ece6c2d608d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBYS35F%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA%2B79MKft5MViCBq9JajXPUXyT59eHpQ5kZGYyAZhT24AiEA26LfuYE8qlaYiyfG0A1p%2FaCAsCUTOxVlXeNcfK%2B0eTgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDO2WCbg363d%2B1ooxDyrcA%2FFxJILEu5Fopb%2B14t06P2G7F4HBrRqTdiEDnP2iYgLEnRjq%2F35Pzk%2Fhmhc3IYn7IHCYfiYDooDF9dXXeZgYeYjfYs%2Fct%2FMLW%2B5QQEnvUM%2F%2FsOi%2F8Woox2IphVkQlgub1WwUm5SSo7aQGNYtoov4pp%2BDmJT1v42R7AGJuyLRUvLjjBcjluaR0WQFCt5gQmetci%2Bhw4KjsNoSuJmLty%2BU6YwwRnw2cEDgQ6wG1jMC0f3ER83hiweuiviMZREmUSI9Eff9PdvNd0MXBTDK2Gf%2BLCpe6zU%2FsxR54GKAy8te5oz8U845Ipbu3CTgQHtPsvVLZ79cteIlCZZLBLSbx%2B9gcm0bseKZOBF87bs3vSsiUhNMVs1Ur1z3acL9gM5dFJZGse6Ibj6CwbuB6nMlwwHlc%2FET6Ou9QKwc3LT0VfKkRdjJCBpd9QmxPWOAmPa1k%2FOsL7lqfkSqCDseJ68r5MhBVIEEhy9ZhOmLmbOlSnRE6xC3icJbH3dQwKTf%2BwQzTNppvU5wWcXZ1bLHyDXsC8IKQBJRzQ8dVJZ3rRmN93mNJ8YsMu3EwzKiiat1IpbEZakPHm51hRWFlLFJBWtFFAQPL8EfdIfU2uO%2Bxz3Z5cW0so6QlSWHAfP4Flil3HUFMIrAyL0GOqUBkcW5qDwNC9j8eJlgLp0HHvKgpQ%2B4TtmatFAmq91g%2BwgSrrP8UtTTzd%2FJggONkle%2BqN5YmIFIbNyz27aGnU3B3ZVNqJHpGI4qxQisWeXHUtG3HhYAZU5%2FY9vtaaTmvq7R8Br%2FpHP4oSWLIQ5zFFAVWinsHQyUPJOf3nUhXX7dII9m34c5IJMeP7Y6ZTWD9PqSbIuBr14oS6Yq58ozuuONIoBab1JN&X-Amz-Signature=4aa5e1e730ec73288ff8efbbe6890aee54962c5ce60c1f355414de86720c29b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
