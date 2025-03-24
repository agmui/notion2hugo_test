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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLMWK7I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkLDrlxV%2BHUbIcSHWcj4uC6uK2XQCbJQF1DlKdKRi4gAiEAqByExZiPqdm3cphgCuf3D2ykIx5wgIfiw6AzW3Qom%2FoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqbVyRoI%2F75GWn0tircA0kQ4joB%2BbTyi5X3DSzN1fddV09R2%2FVNCr5oRIzzOlE9yBm84aNntBv4WFq8C3lT8obmBiK8kooItsWw38cmfUwJhrUCb%2BlvefUN6u4lQk6I%2BFRf0moUXaCJloPtWYojMNCqUXbM6%2Fwl5sQ%2FjYWT3rBp94JKjCM4vG0Cy83QFUWqvOie%2BVzWJjGHoocK73Nu%2F0aQrXMG5aEJyD%2FuXyTWemm1dpJvXGDVn1EULBR4%2BtXx6MmfUaG%2Fo3hCrljZGfeubOdV3L3M9gAcqn86f%2B4fQifCLrdFrc5JnAvadxMe%2FwNC2Snkss28u%2Bx9mcSEFivSRiBkZLB7YBXs3Rb%2FSI09Zwt1UTEoIK9m69zWCz1WCUvPct53bvgXdscLExYgeK8hC1SxSPPvka5iPqTzgj%2Bsw9O5Xs63hFJEFQg94vdx6ZUh6JKtqxzigj3NHOyXlkB6rPZwAjgput5xbrrs%2FfpNJFhqz2ImnIzW8Sk0sLmad6o1MdnCEzEtwDW49eBw%2B9klAZjQEIYTuHeZ5kW%2Bm9n38pMajwC4KQ5%2FO1J%2FGJr9n9jK8BfDBegWjcAUz5GS2MydSTPFmbUdaWmA4ba4eo0%2Fas9TvgsxACw%2FiRTqNNYMK9y7%2FbUnh0bqrGTQRF%2FXMJqwgr8GOqUBklc75VGdHJ2l2jULJqDhAqg5Wo0FZLehw0JnNY%2BSzMaO4%2BMt8rsFT7uUvymFBZY9yAPJ%2BBq%2FtG5qlgKoLlaHYFBSIp%2Fi88h53hEXUcTU8aZoJ%2FWUBFyK%2BRxIUWnjZs00Z8D%2F2lQP%2Blif5fXQ0wVTPfMC8g3sYGpGiYxpnWiWFOaZ4H52lgGemv9vjp6klb0CeM7wuhuPTZn5XAxLUauSbv0IlmhN&X-Amz-Signature=59b9281a5f9e4a24a03664254fe16f725a2bfbf5e38ef8f57a406b2cdd809a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLMWK7I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkLDrlxV%2BHUbIcSHWcj4uC6uK2XQCbJQF1DlKdKRi4gAiEAqByExZiPqdm3cphgCuf3D2ykIx5wgIfiw6AzW3Qom%2FoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqbVyRoI%2F75GWn0tircA0kQ4joB%2BbTyi5X3DSzN1fddV09R2%2FVNCr5oRIzzOlE9yBm84aNntBv4WFq8C3lT8obmBiK8kooItsWw38cmfUwJhrUCb%2BlvefUN6u4lQk6I%2BFRf0moUXaCJloPtWYojMNCqUXbM6%2Fwl5sQ%2FjYWT3rBp94JKjCM4vG0Cy83QFUWqvOie%2BVzWJjGHoocK73Nu%2F0aQrXMG5aEJyD%2FuXyTWemm1dpJvXGDVn1EULBR4%2BtXx6MmfUaG%2Fo3hCrljZGfeubOdV3L3M9gAcqn86f%2B4fQifCLrdFrc5JnAvadxMe%2FwNC2Snkss28u%2Bx9mcSEFivSRiBkZLB7YBXs3Rb%2FSI09Zwt1UTEoIK9m69zWCz1WCUvPct53bvgXdscLExYgeK8hC1SxSPPvka5iPqTzgj%2Bsw9O5Xs63hFJEFQg94vdx6ZUh6JKtqxzigj3NHOyXlkB6rPZwAjgput5xbrrs%2FfpNJFhqz2ImnIzW8Sk0sLmad6o1MdnCEzEtwDW49eBw%2B9klAZjQEIYTuHeZ5kW%2Bm9n38pMajwC4KQ5%2FO1J%2FGJr9n9jK8BfDBegWjcAUz5GS2MydSTPFmbUdaWmA4ba4eo0%2Fas9TvgsxACw%2FiRTqNNYMK9y7%2FbUnh0bqrGTQRF%2FXMJqwgr8GOqUBklc75VGdHJ2l2jULJqDhAqg5Wo0FZLehw0JnNY%2BSzMaO4%2BMt8rsFT7uUvymFBZY9yAPJ%2BBq%2FtG5qlgKoLlaHYFBSIp%2Fi88h53hEXUcTU8aZoJ%2FWUBFyK%2BRxIUWnjZs00Z8D%2F2lQP%2Blif5fXQ0wVTPfMC8g3sYGpGiYxpnWiWFOaZ4H52lgGemv9vjp6klb0CeM7wuhuPTZn5XAxLUauSbv0IlmhN&X-Amz-Signature=1ef934d56d4bf6bfd59fe9114df184f9fdc685b97cd9019264eb5a743e656da2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
