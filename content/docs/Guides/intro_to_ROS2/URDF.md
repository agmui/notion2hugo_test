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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPSQ7EE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCMGgzSd4zQWeTBXu%2Fr5gNzqy%2FlW8HGfz954r%2FSR6HtYAIgFTdojeWnzBKnAMc2V0WuTrqkRoLjdI6qv6lQlsirWPMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGHflq%2BwhV%2FxpDx35yrcA8gQrx%2FaR5B3eh6jw4JuPFQ838pCu6uVuT8DUot%2Fja4JyZQ%2F8hSLeWRhpgOB4DPKySKtlO7ZiuIGup5uadjZ9eEqWknGBBOjtl2GslWRsg2J6v1GFVvhqVcJQDothUNIGY%2FnL5DzRXVuVt1vXDoClVM%2FtE3n6GBJTSGRQtDntsiSyTatqg6oRGbI9UBiXYO1jJ8f3bAtBKatDfvMjiVjrA%2BlYDjcJD4DuAjOIdJi%2BDatD2zJUCr%2BruxOavTLFySd5NvbLNDPP350Hzzo4ualn%2B783saAF8gzb6kcEKJxNeqKEprP0pY2lrIIMZ40MgwSqgdbu8NmVfwvVh0O%2BwdO1gNs77Ig8ggUJCJXMvyg%2BTGQbBzEd1m3lJFyPI1FAt%2BMxGMdJVPrfPABX7Yf0ncPpJfPR5g2g0cfFaiJk%2Fh3d7sjrxvtOWtRSQPWHnZh6oJFx6krxYDaQfrDquq%2FAZSmNVAsukskH5g5FFkECpHZ%2F2g8gue42IDjFucu2yclh9XiTU9cPxvaZ%2BKQy%2FR9khS7Teb%2F08wvbhFAoVu%2Ff7zl1dilU%2FTSDQzGOLgZiQTYcQPvCc%2Ff3tIBgq0pPNj7mJUGsJWOjkOj1%2FoNbnppoXDYev13vhPc%2BSsZoI6c7DcFMKDM9sIGOqUBovy9RE1rV0qSneObXhpCIRUZ03%2BBtFYkxRVKw2LYmFjpekuHAMHU4tm3z%2BNrIYQGRIwT2RYvwIM8E3abA3U3eDIiNhe30KQDeu8gnMjNIz8wUar7j%2BM44hrbPkx3r1civy4vuOHEVreEOp6IR1j8gXh0KVXm4Bs1cQigfqqAW3zte7Wi7o4q8q%2B9p%2Bh3bTmxlaErcaK%2BB6IZw%2B%2BZcG%2BnO3oMTZDy&X-Amz-Signature=eb9dcbcf4b37ee72cfc1e1df6a237e0de0bac38b31cc65817fb0daefb9e172aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPSQ7EE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCMGgzSd4zQWeTBXu%2Fr5gNzqy%2FlW8HGfz954r%2FSR6HtYAIgFTdojeWnzBKnAMc2V0WuTrqkRoLjdI6qv6lQlsirWPMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGHflq%2BwhV%2FxpDx35yrcA8gQrx%2FaR5B3eh6jw4JuPFQ838pCu6uVuT8DUot%2Fja4JyZQ%2F8hSLeWRhpgOB4DPKySKtlO7ZiuIGup5uadjZ9eEqWknGBBOjtl2GslWRsg2J6v1GFVvhqVcJQDothUNIGY%2FnL5DzRXVuVt1vXDoClVM%2FtE3n6GBJTSGRQtDntsiSyTatqg6oRGbI9UBiXYO1jJ8f3bAtBKatDfvMjiVjrA%2BlYDjcJD4DuAjOIdJi%2BDatD2zJUCr%2BruxOavTLFySd5NvbLNDPP350Hzzo4ualn%2B783saAF8gzb6kcEKJxNeqKEprP0pY2lrIIMZ40MgwSqgdbu8NmVfwvVh0O%2BwdO1gNs77Ig8ggUJCJXMvyg%2BTGQbBzEd1m3lJFyPI1FAt%2BMxGMdJVPrfPABX7Yf0ncPpJfPR5g2g0cfFaiJk%2Fh3d7sjrxvtOWtRSQPWHnZh6oJFx6krxYDaQfrDquq%2FAZSmNVAsukskH5g5FFkECpHZ%2F2g8gue42IDjFucu2yclh9XiTU9cPxvaZ%2BKQy%2FR9khS7Teb%2F08wvbhFAoVu%2Ff7zl1dilU%2FTSDQzGOLgZiQTYcQPvCc%2Ff3tIBgq0pPNj7mJUGsJWOjkOj1%2FoNbnppoXDYev13vhPc%2BSsZoI6c7DcFMKDM9sIGOqUBovy9RE1rV0qSneObXhpCIRUZ03%2BBtFYkxRVKw2LYmFjpekuHAMHU4tm3z%2BNrIYQGRIwT2RYvwIM8E3abA3U3eDIiNhe30KQDeu8gnMjNIz8wUar7j%2BM44hrbPkx3r1civy4vuOHEVreEOp6IR1j8gXh0KVXm4Bs1cQigfqqAW3zte7Wi7o4q8q%2B9p%2Bh3bTmxlaErcaK%2BB6IZw%2B%2BZcG%2BnO3oMTZDy&X-Amz-Signature=1c65b073a2976eea07cd60bc74ebcd069ecfae014257e4bed4e3a5492e48ee1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
