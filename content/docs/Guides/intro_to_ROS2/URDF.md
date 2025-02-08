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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R245M7R3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEaCKV%2BR5QMtrpKbyRM4QMbKeHpWcnN1WZZUmNk1rWTBAiEAjibe2js94JP9yZNX%2B6QZKcQMUiKEJAxX%2FwiW%2Bm1IHpQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqg3KNCdl06igzJSircA4TSO6gCNMaP1dvJL1nL2TGIQ7d9tneUzsJDEQ0%2BMXUkMoJVh%2Bt9aMZQp20wwxOhulUHF6eQG8SXCJeXJ1euVK8sAI3po2mbg82h3Yjb%2FUgXTlXePzXiLCHgMXv%2BDxrpwaY1sZPAdpksY990c1yEN3yhRWc4oZpVA5k5a19jdCllK6vStz17B3iJ%2F1mftOjRNN5myMwydDeOxr%2FrftVbOdGJz%2Bk0hgGYtCuRQdI8g%2BVekQe6%2BvA%2FeXR5sUJEC0r4JVdMljj9hJI%2FRNABYH%2FtUKIF16rV2I7pLtQPJsc6blKQp4HQDmkc2F4NwVK7%2FvMxin9uwPU9PnSgET78nGJX7PS152KftFhrMgZpO2EvsUw29W7xPty5SZYUgsfxg26jHb9bO%2BCKvzR%2FpzGMFJw62HsLQO4qAqvlU2beADId0upsTIkg%2B9x7Sxw8%2F%2FnE3mDgYbhwdmCPMYJYLsQWiIhYLkcw4O5WykBbc9HMLmQbsaWpDJ1bkBIYj5E1UTgGgTU55oczJEdE%2Bh3MMHnFBwITzS%2BzbAk%2BLpM04uaraJls8bL8i1jseKNobTw8POoJFUoBNRZEi5iUyae66b3v6jTR7r3TUxB00CyLmnny6WvoWwoqbq3P7W7BjITkIlTDMNH5mr0GOqUBg4YdNvluLRbQ8OUepkfJLIhkZdo2tIJO7IHu2ERQS4vrlYaLUQPefwj6hotZsErs5S4%2F51ndsXhoHzHu9PQJjwvtt4Ra3MvJdv8gPEpi43S21YTQgqVqUZKLY85FlBND0E2avehKm7PIdZ0f%2FTSPVagqTn%2FhIar9dVl1Z%2BFfOYlwnEXhS8UubBzf%2FS1V%2FsJmlSj10IMW%2BDTjoidHktoBG89jxOLB&X-Amz-Signature=05524b3208cd1516072eedd9e1ec74fa16061cbac216da68c834803cfe93ab96&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R245M7R3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEaCKV%2BR5QMtrpKbyRM4QMbKeHpWcnN1WZZUmNk1rWTBAiEAjibe2js94JP9yZNX%2B6QZKcQMUiKEJAxX%2FwiW%2Bm1IHpQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqg3KNCdl06igzJSircA4TSO6gCNMaP1dvJL1nL2TGIQ7d9tneUzsJDEQ0%2BMXUkMoJVh%2Bt9aMZQp20wwxOhulUHF6eQG8SXCJeXJ1euVK8sAI3po2mbg82h3Yjb%2FUgXTlXePzXiLCHgMXv%2BDxrpwaY1sZPAdpksY990c1yEN3yhRWc4oZpVA5k5a19jdCllK6vStz17B3iJ%2F1mftOjRNN5myMwydDeOxr%2FrftVbOdGJz%2Bk0hgGYtCuRQdI8g%2BVekQe6%2BvA%2FeXR5sUJEC0r4JVdMljj9hJI%2FRNABYH%2FtUKIF16rV2I7pLtQPJsc6blKQp4HQDmkc2F4NwVK7%2FvMxin9uwPU9PnSgET78nGJX7PS152KftFhrMgZpO2EvsUw29W7xPty5SZYUgsfxg26jHb9bO%2BCKvzR%2FpzGMFJw62HsLQO4qAqvlU2beADId0upsTIkg%2B9x7Sxw8%2F%2FnE3mDgYbhwdmCPMYJYLsQWiIhYLkcw4O5WykBbc9HMLmQbsaWpDJ1bkBIYj5E1UTgGgTU55oczJEdE%2Bh3MMHnFBwITzS%2BzbAk%2BLpM04uaraJls8bL8i1jseKNobTw8POoJFUoBNRZEi5iUyae66b3v6jTR7r3TUxB00CyLmnny6WvoWwoqbq3P7W7BjITkIlTDMNH5mr0GOqUBg4YdNvluLRbQ8OUepkfJLIhkZdo2tIJO7IHu2ERQS4vrlYaLUQPefwj6hotZsErs5S4%2F51ndsXhoHzHu9PQJjwvtt4Ra3MvJdv8gPEpi43S21YTQgqVqUZKLY85FlBND0E2avehKm7PIdZ0f%2FTSPVagqTn%2FhIar9dVl1Z%2BFfOYlwnEXhS8UubBzf%2FS1V%2FsJmlSj10IMW%2BDTjoidHktoBG89jxOLB&X-Amz-Signature=94c747c41eeef40e51e3a694368df73d59f1ac8b0a20df0eaacce72a165bb555&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
