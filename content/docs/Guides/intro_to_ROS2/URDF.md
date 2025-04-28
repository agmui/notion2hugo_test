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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DEWDK5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtnj5GU4Bi78V1w6B7jCxwedIMsprqGsoggFUaEVW0CgIgadMuiawmy%2BnLSJz0%2BCrCUU%2FrkBq5Nz%2BT6EggszmlF9Qq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLPUlWHsafTcYhjMOSrcA8D8tlZnYSwWMuzUXD1XUAziAM1celUsGmrDf7uCwWukfMsRVSGX%2B19g4wLFnO%2BNmiRxX6v0heoKD2Geph%2B2twKW5ISU7Exoixe%2BqoF0%2FTHzpNx%2BtknOwua4LVui7drrEfq1psDYSxqli8bcMnDppQqqnOxXtrqONm%2FxPTLqaVvRrTQKOA0ydzcOItJJrzDRvMn0PylCPlH4v0Fkyf%2B3ZGOEbb4DEXQe%2F3zMD0Qal2IBlUbKYUEx9RqNaD8Etb9wb0F7oyXKeE21mie358IIgAA5b%2FT5UsjYxcXhTqFnSn0khwFUxXZhpz5n9mLkbtTxDsfCGHqYDdgxdBorz%2F0sjIwuQGcUc4JqBXetzpeR%2FJUw1VK42tQCr8ryUjy7Pr02kRTWXB2mgY2S2XLJCzmp%2BeQlQIJEOVORObmVBR8Id9y5B6oVgULhNwBBhpdLrOuKf311xAzz8FiZxnmipw1Mhmu2PCjeoFja7NBba49NjcZm28QEqtZ5qJbgN%2BEg02g5CEi1mvF3miDzZJLz4GU2rovWb7%2FxhGohS0BawSNDjeNJzKsLg7IG%2FQAw2z8Dkw0Nxn%2F3oRJTzY3I5iGhwFAd8zTdyVjqwz%2FcenoMwgR3hiJ6kAcoVhDLafXL0y77MLvIvcAGOqUBq%2BDK3%2F6nXjNxvQexc6MARZNJc4io9JO9Yhy7eEgJpkb5Fu0rgM92eTplR4a42ls8h7W6s3YGn3AslYy7m0MRZFkcMIE94vEH3fl9TuOpLkRleIPPpOV12%2FXK1Z6yIC4Ag0c3Vn5%2Fe0eI5Todq0rbe%2FZwBnnt5GTSqCHsn4W5pWFSVD2il8git2mSoJSj9MiWKskmsoBa%2Ff9GNiPJYidGu%2BQAWBYT&X-Amz-Signature=cb4872778c9f000d89968233b53b0f863ec8eb2921040e95ccf4d3020b64a536&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DEWDK5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtnj5GU4Bi78V1w6B7jCxwedIMsprqGsoggFUaEVW0CgIgadMuiawmy%2BnLSJz0%2BCrCUU%2FrkBq5Nz%2BT6EggszmlF9Qq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLPUlWHsafTcYhjMOSrcA8D8tlZnYSwWMuzUXD1XUAziAM1celUsGmrDf7uCwWukfMsRVSGX%2B19g4wLFnO%2BNmiRxX6v0heoKD2Geph%2B2twKW5ISU7Exoixe%2BqoF0%2FTHzpNx%2BtknOwua4LVui7drrEfq1psDYSxqli8bcMnDppQqqnOxXtrqONm%2FxPTLqaVvRrTQKOA0ydzcOItJJrzDRvMn0PylCPlH4v0Fkyf%2B3ZGOEbb4DEXQe%2F3zMD0Qal2IBlUbKYUEx9RqNaD8Etb9wb0F7oyXKeE21mie358IIgAA5b%2FT5UsjYxcXhTqFnSn0khwFUxXZhpz5n9mLkbtTxDsfCGHqYDdgxdBorz%2F0sjIwuQGcUc4JqBXetzpeR%2FJUw1VK42tQCr8ryUjy7Pr02kRTWXB2mgY2S2XLJCzmp%2BeQlQIJEOVORObmVBR8Id9y5B6oVgULhNwBBhpdLrOuKf311xAzz8FiZxnmipw1Mhmu2PCjeoFja7NBba49NjcZm28QEqtZ5qJbgN%2BEg02g5CEi1mvF3miDzZJLz4GU2rovWb7%2FxhGohS0BawSNDjeNJzKsLg7IG%2FQAw2z8Dkw0Nxn%2F3oRJTzY3I5iGhwFAd8zTdyVjqwz%2FcenoMwgR3hiJ6kAcoVhDLafXL0y77MLvIvcAGOqUBq%2BDK3%2F6nXjNxvQexc6MARZNJc4io9JO9Yhy7eEgJpkb5Fu0rgM92eTplR4a42ls8h7W6s3YGn3AslYy7m0MRZFkcMIE94vEH3fl9TuOpLkRleIPPpOV12%2FXK1Z6yIC4Ag0c3Vn5%2Fe0eI5Todq0rbe%2FZwBnnt5GTSqCHsn4W5pWFSVD2il8git2mSoJSj9MiWKskmsoBa%2Ff9GNiPJYidGu%2BQAWBYT&X-Amz-Signature=555a53af84922b942c4b4cd00e67d1183566af32f39fe5b88e5ef679584a09eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
