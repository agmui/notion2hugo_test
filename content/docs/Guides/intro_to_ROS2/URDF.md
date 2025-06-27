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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUZXLNW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDuinQhYyI4qTr3Rl3jkZjmvqy7xqys1U5rqTCic957RgIgN8NM7Fy%2Fo5fmCw7T7JRZLa5FqnYqFwo%2FkRCzV2myArAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBQqitjhkZsDs4YG8ircAxq%2Btii%2BLYJhQHeeasSe3YXphKXsnfDEm9LnBa29YtWZWENpmzRXpzZqt1wuhe24GxZkEeK8IMn8INu44Yc7d5s%2Fno%2FmTtaHwp%2B9tu%2FIqFjEtX4aF2cJFB%2BfTt1Li9Hn47qzsjPzUp%2FR6UzcUHQZIdfO8GdigdfWcRc9F%2BfFQB7A0nUVRob%2B9PUJBFmaJXnnhX7aQyqcv1sjkpJ6P06KRQoBhS7X6e7p5EnQQFF6rFNLmyoHeDDQLUBM%2BCnt2qhH0TPbTckYk45EVzcEoD%2BvALSba2ocp%2Fg7huUSCFkPRuBCXBbzlcMq9CbzWKe5q%2Bwdm%2FKsXUblyk3Kw851oRecpkYwZkBSJHjBYK91VJQQ2sej7UuFb7eOUcKlJHRpWfTMqP3jjrWAm94NKH5ReGzaraOiPTVxLwETnUiQPfYpgtx48z4PDYYFe%2B3rW1IxPdF0fmWJghGhpEGoYwlrnAizbnzqLItOwl%2FO%2BAremn%2Bd583LXaYR%2FXGNNBcLlofXbm%2BgZTMFSDJQCchZpWppqatJ1R7ODgZpdD0QuPHmnHqHofxO85tJxbaKmNOcATvIae26XQlb7YCXW4SfyMpZNlkyH25laPBdQtkPIqc067Zr8r5gfvZ3LRPexzA08wI9MMGm%2BsIGOqUBHMS7CVQsIN24sPFa4KYRD7zj504ZNBMP9lNroucEF9PaLr2d5i1hIRuOxXsuvIOiUp44Ss0UwUNlnotDSadyYJuvI4RDzblx%2FZxtXD9NrZdb4GRwBHB4hbRjY3mNkTQzxP0bui2B2L98wnJVeXBxPRguh9CzgeK89g8hMzA5KkZlT2JeZ3a2ig5NErozujmvWnycNVtE192KG05oBoafmGqmNUqB&X-Amz-Signature=3984e1daab800620837ce2bab22fe305898c07faf76e8bb76fb5e08056658830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUZXLNW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDuinQhYyI4qTr3Rl3jkZjmvqy7xqys1U5rqTCic957RgIgN8NM7Fy%2Fo5fmCw7T7JRZLa5FqnYqFwo%2FkRCzV2myArAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBQqitjhkZsDs4YG8ircAxq%2Btii%2BLYJhQHeeasSe3YXphKXsnfDEm9LnBa29YtWZWENpmzRXpzZqt1wuhe24GxZkEeK8IMn8INu44Yc7d5s%2Fno%2FmTtaHwp%2B9tu%2FIqFjEtX4aF2cJFB%2BfTt1Li9Hn47qzsjPzUp%2FR6UzcUHQZIdfO8GdigdfWcRc9F%2BfFQB7A0nUVRob%2B9PUJBFmaJXnnhX7aQyqcv1sjkpJ6P06KRQoBhS7X6e7p5EnQQFF6rFNLmyoHeDDQLUBM%2BCnt2qhH0TPbTckYk45EVzcEoD%2BvALSba2ocp%2Fg7huUSCFkPRuBCXBbzlcMq9CbzWKe5q%2Bwdm%2FKsXUblyk3Kw851oRecpkYwZkBSJHjBYK91VJQQ2sej7UuFb7eOUcKlJHRpWfTMqP3jjrWAm94NKH5ReGzaraOiPTVxLwETnUiQPfYpgtx48z4PDYYFe%2B3rW1IxPdF0fmWJghGhpEGoYwlrnAizbnzqLItOwl%2FO%2BAremn%2Bd583LXaYR%2FXGNNBcLlofXbm%2BgZTMFSDJQCchZpWppqatJ1R7ODgZpdD0QuPHmnHqHofxO85tJxbaKmNOcATvIae26XQlb7YCXW4SfyMpZNlkyH25laPBdQtkPIqc067Zr8r5gfvZ3LRPexzA08wI9MMGm%2BsIGOqUBHMS7CVQsIN24sPFa4KYRD7zj504ZNBMP9lNroucEF9PaLr2d5i1hIRuOxXsuvIOiUp44Ss0UwUNlnotDSadyYJuvI4RDzblx%2FZxtXD9NrZdb4GRwBHB4hbRjY3mNkTQzxP0bui2B2L98wnJVeXBxPRguh9CzgeK89g8hMzA5KkZlT2JeZ3a2ig5NErozujmvWnycNVtE192KG05oBoafmGqmNUqB&X-Amz-Signature=bb2a7fc81a438e74156e5f857700fbecf8fe9297642d5da1a6ffceaddf50bd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
