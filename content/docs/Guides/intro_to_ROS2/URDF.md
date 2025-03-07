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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IA2JSJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9LrGgJuNwKGlEE1JDO%2Bw0R0luepjrh4xGUbS99eQciAiBq%2F71xGyE37IAoOqL26HoE%2F45EXFsj%2FF73G7c2oWd4sCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlb7nAaPQHWPqK6%2FUKtwDDWtqpOBHItuLdu30RedNXWKyGuqOKdmVPpHzcwjPTGxs5XOv9%2BdWb3r%2F6xhm9jtZdCJssLslyvb%2FDEDpIJyTVmiphcv%2Bn7Cm8CWORXDBzX5mCxnKafO7RDi%2FzBFeGYcUOXAbK2e3BfG3oRMLuqD3oH9ENK9s2CwqZLPG75WKUwww2vPjgDqazfabdT7qjfqFfxho0cnYLA2EWXTwLa0Ojw%2BluB7KyxrJTt9yeC5Ga3%2FgX2eNi9Tw8FrEt9WlGEZy50ISXMxsKpNV%2FsRVCa%2F%2FnvYYI%2FKEkEavvszog3cTd7swTBfEEQwTYod3aDJQ%2FGw19WAgcnFdntBkauatKJVaQJaWYqw9bFecPY6G5I1I9E%2FOM97EBGQ%2BpOQBxhksgzwRuTbxyhvStX6QjuG5P0EJkq%2F8YlsMENNGd7dGSK5pVFjJjKbhkP%2FxQWV9l9MbvzmeHBYJtgO7ZCTrnSJ0zTwXmZuQF9t49HFs45tPldPwIjSDSQ%2BY59x2IqJOILffrZY7Ll0Nte5kYqtbvjlKipl256iC1YWymu49IVB3mQvuDbQP4%2FNbNmvBIajT8c6TFIOQgwHLu5gnk6D7kzDOzcojK1%2Br42aNkhCgGoQK7huQW5IJcG%2ByRqreT0SO9wEw2d%2BsvgY6pgHW5gmiqyG62XKBA5h0kGOSWgkorqRB8D%2F4VQPhBUMfq0mVRnIXmzKkdSWpYd6zLETbef5pzO87pKO437Xcgmd6tSAAPOWzjmOeqfwvDrAU0jckoenIjG8ppYi%2F4hZRcGHz8xsu7t6jUJSPsxcmDNYTMOobtGBUSgU52AvykqM40KIGDOdKQYJFv%2Bi4%2Ficd%2F6b6xp0QvIcHIeez8nFztJtulk8Aq1OS&X-Amz-Signature=aac1e4ae7191a86883b147a9db26ed2aab1a2ebcf66987620a39503069d10f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IA2JSJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9LrGgJuNwKGlEE1JDO%2Bw0R0luepjrh4xGUbS99eQciAiBq%2F71xGyE37IAoOqL26HoE%2F45EXFsj%2FF73G7c2oWd4sCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMlb7nAaPQHWPqK6%2FUKtwDDWtqpOBHItuLdu30RedNXWKyGuqOKdmVPpHzcwjPTGxs5XOv9%2BdWb3r%2F6xhm9jtZdCJssLslyvb%2FDEDpIJyTVmiphcv%2Bn7Cm8CWORXDBzX5mCxnKafO7RDi%2FzBFeGYcUOXAbK2e3BfG3oRMLuqD3oH9ENK9s2CwqZLPG75WKUwww2vPjgDqazfabdT7qjfqFfxho0cnYLA2EWXTwLa0Ojw%2BluB7KyxrJTt9yeC5Ga3%2FgX2eNi9Tw8FrEt9WlGEZy50ISXMxsKpNV%2FsRVCa%2F%2FnvYYI%2FKEkEavvszog3cTd7swTBfEEQwTYod3aDJQ%2FGw19WAgcnFdntBkauatKJVaQJaWYqw9bFecPY6G5I1I9E%2FOM97EBGQ%2BpOQBxhksgzwRuTbxyhvStX6QjuG5P0EJkq%2F8YlsMENNGd7dGSK5pVFjJjKbhkP%2FxQWV9l9MbvzmeHBYJtgO7ZCTrnSJ0zTwXmZuQF9t49HFs45tPldPwIjSDSQ%2BY59x2IqJOILffrZY7Ll0Nte5kYqtbvjlKipl256iC1YWymu49IVB3mQvuDbQP4%2FNbNmvBIajT8c6TFIOQgwHLu5gnk6D7kzDOzcojK1%2Br42aNkhCgGoQK7huQW5IJcG%2ByRqreT0SO9wEw2d%2BsvgY6pgHW5gmiqyG62XKBA5h0kGOSWgkorqRB8D%2F4VQPhBUMfq0mVRnIXmzKkdSWpYd6zLETbef5pzO87pKO437Xcgmd6tSAAPOWzjmOeqfwvDrAU0jckoenIjG8ppYi%2F4hZRcGHz8xsu7t6jUJSPsxcmDNYTMOobtGBUSgU52AvykqM40KIGDOdKQYJFv%2Bi4%2Ficd%2F6b6xp0QvIcHIeez8nFztJtulk8Aq1OS&X-Amz-Signature=66d1769f7ad9115023814e553491fd36fbb4b82005f5c8de81d55888cc183022&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
