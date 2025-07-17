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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2LQCTX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCu0rOz%2B3cKB9USEm11TdujqsYCImXynnCrGqk3MtJtiwIgZgl65AnaNEYeYeYZbihfmQFgwsLELfjpEcpyOYQIvr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPYgSwQt8ZCLR3YBRircA5OudEHO1dKYplZ%2BjaZ%2BZFhRlOpVjvz6mXNcpcIfC1jnk9Ykltcks1sPpzQOSmkjXNDZuVB7BcGNNNhCkRFbK%2BDhuic901NCxGB4VIqHLHR4ZMC6NXMI8SfSKoi5z7zLkhknEMTTO6WjFG%2BOTt2UHyhIxon4y8KrRnxs3Im8ZGIBQWzJP32e6WxOM8FLXhVOvb7I9rkzizlPvaUm6QhIBpHDFXwAevoXZ375pklcT4MuGGhnw5RbALhWSUUT4B0u5%2FLYCcoR52jdIgt7D8RlfkkxHFQ1oGaavVLP%2Bi8fzaJM6vDVyXHMF1Y1EAGQxJOLI2t%2BbWVhiqe%2F71lBiFNjgjf9%2FqQbzAs7Tg6aJ0T%2Fd1sE3O6BW0DfLgJ9b5mbXLKPL41yU4tyIrcw%2F697g06G35DDHr%2Ff8HfCfTsAiA%2Fqv8uQMzwKjgZy4l40fIiESVs53gBUbZBTTUvDVY1wAMASYKjL%2FSmjEoTcY7fGD4o%2FTMgpqL2XrDCDKuCh4NBNeHZEKle6%2FiXlXj4xbMgLkrRMOK9tXkLBRT2ox1EZT7LLP0vU8XyzNReTlZy%2BnO9uymqA%2Bep395gEmYfpXRHWtqhr%2BlW6Ks4rzcz89PhprPvRtPZ%2B0CUH094u3PIWT4zTMK%2BN5cMGOqUBBkgVvyiJCv0Po1%2BG4QJnoEahgf66ZhHlR33S5TWJuMQ%2FShw2HcUp4FcFC3uKkMpKri8Rem1QvqhcpNI6sNteMxJoYRqRbrT73KqSCeTo9kQ9oIcJFwSLmb0oVIqN7izY4zUVDFIjUuY2qVljchUY9pJp%2Fx0%2BHqPK8SQanIJEWtEgw6bv2nhmgceToKUpOvh2lSQDv3LvJP6Q%2F4dHtqqap04QCb2P&X-Amz-Signature=5199a9d09e9ee713aa7419a2070c30884f688cda095f999de599a354c1529453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2LQCTX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCu0rOz%2B3cKB9USEm11TdujqsYCImXynnCrGqk3MtJtiwIgZgl65AnaNEYeYeYZbihfmQFgwsLELfjpEcpyOYQIvr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPYgSwQt8ZCLR3YBRircA5OudEHO1dKYplZ%2BjaZ%2BZFhRlOpVjvz6mXNcpcIfC1jnk9Ykltcks1sPpzQOSmkjXNDZuVB7BcGNNNhCkRFbK%2BDhuic901NCxGB4VIqHLHR4ZMC6NXMI8SfSKoi5z7zLkhknEMTTO6WjFG%2BOTt2UHyhIxon4y8KrRnxs3Im8ZGIBQWzJP32e6WxOM8FLXhVOvb7I9rkzizlPvaUm6QhIBpHDFXwAevoXZ375pklcT4MuGGhnw5RbALhWSUUT4B0u5%2FLYCcoR52jdIgt7D8RlfkkxHFQ1oGaavVLP%2Bi8fzaJM6vDVyXHMF1Y1EAGQxJOLI2t%2BbWVhiqe%2F71lBiFNjgjf9%2FqQbzAs7Tg6aJ0T%2Fd1sE3O6BW0DfLgJ9b5mbXLKPL41yU4tyIrcw%2F697g06G35DDHr%2Ff8HfCfTsAiA%2Fqv8uQMzwKjgZy4l40fIiESVs53gBUbZBTTUvDVY1wAMASYKjL%2FSmjEoTcY7fGD4o%2FTMgpqL2XrDCDKuCh4NBNeHZEKle6%2FiXlXj4xbMgLkrRMOK9tXkLBRT2ox1EZT7LLP0vU8XyzNReTlZy%2BnO9uymqA%2Bep395gEmYfpXRHWtqhr%2BlW6Ks4rzcz89PhprPvRtPZ%2B0CUH094u3PIWT4zTMK%2BN5cMGOqUBBkgVvyiJCv0Po1%2BG4QJnoEahgf66ZhHlR33S5TWJuMQ%2FShw2HcUp4FcFC3uKkMpKri8Rem1QvqhcpNI6sNteMxJoYRqRbrT73KqSCeTo9kQ9oIcJFwSLmb0oVIqN7izY4zUVDFIjUuY2qVljchUY9pJp%2Fx0%2BHqPK8SQanIJEWtEgw6bv2nhmgceToKUpOvh2lSQDv3LvJP6Q%2F4dHtqqap04QCb2P&X-Amz-Signature=3d5d3452a72ea9e123cf6796bca1ec4d075b7e3b3ae2aa1020e16d155dbbd1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
