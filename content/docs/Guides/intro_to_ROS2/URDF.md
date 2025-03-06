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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GHAT7X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7eSTbM36KOKaaFodCMd5BS%2BCmLedI4tik4VdlpVA4iAiEAsqUptX78Iw7AliJjSP2hTbxoC1EYB2Y6uSiGsSGDWGwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMUm%2BiiVAS5b%2FjLEjCrcAzKl%2B5ECusxS0uRNCwBPAJIvu1fuTWOwbRM3Ugbnram0pkPn4VaTIb0%2BZ2EpQ3fjdzy7onH%2F6CXWw8Sm0jGUjs71TX78e776eeBkSDIRN2W3CuczeRZrdyZ5Mubjlr6PbxUZONGjxBrrHbR1WSO8cqnRNhvdcR6GwAGe5AxJ05CHKqNJrxrK5JQlAaKNehkptFVxfrByOmIdnFAL9y1X1wOEj2NcF%2FoOay79Tb%2BpaJgiXiyaJgpit5WOtw7AqYEnpDVe1fbD5T8KhPzNgMs0n0oeSIQ%2FvogEmrPiPhd%2FBKGdsY6K5e7UhDewdwv2QJwapW0hTYE0OvBL83%2Fede59XHSfg2Sm%2FThPfSJfyvVD49bUz6ruwo4nSWvK%2B%2BwsNqEgt4Qd3NCXww24w2cAQ2XPhfWfQam300lhh%2BVzLsQ8pHgAv3uEbu8dfRNugEKYDSFXCINt0zwFY%2B28odlACixfaa8ZySZ9UJuyO1vl2hhIZxZ%2BUN4VAIDUQcMXh2LAnxGqvwSq1jjybE6ZDMVZ%2BwOljc0ZolPwh6gCBI5ERrwP6nvEb6b3Xfbf5gwPsafZEhnpppAh5gtsnn%2BjwzS%2BTcu7BWdZt9nW5DWJj9s6Bb0KP4aGhmu8U%2FO7if%2FedFDWMJCxpr4GOqUBlROtwrjhWeF6vgmozjniqzfHDeWH89FAqeJZJKbWx29IqEJtwMiiI87vBEjMpsIfLQTVZchnrRQQH63BdPqQFUQqm6DvJtPOvB6IP%2F6wG3%2FLfgvQ4BvYU%2Bf7qcf%2BzSJumPh1z8yOHvd%2BiigciqfuN0M58aNOrlvQQp2A356ilPqsibz6Xq7MtlYKXc0JKgqrbaqP0iR%2BmVphkDllVB6IlLkfSdps&X-Amz-Signature=4f244cb24ecf1d92688a7474bbd2d40959a5462923c23c1e3331b533271d2a95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GHAT7X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7eSTbM36KOKaaFodCMd5BS%2BCmLedI4tik4VdlpVA4iAiEAsqUptX78Iw7AliJjSP2hTbxoC1EYB2Y6uSiGsSGDWGwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMUm%2BiiVAS5b%2FjLEjCrcAzKl%2B5ECusxS0uRNCwBPAJIvu1fuTWOwbRM3Ugbnram0pkPn4VaTIb0%2BZ2EpQ3fjdzy7onH%2F6CXWw8Sm0jGUjs71TX78e776eeBkSDIRN2W3CuczeRZrdyZ5Mubjlr6PbxUZONGjxBrrHbR1WSO8cqnRNhvdcR6GwAGe5AxJ05CHKqNJrxrK5JQlAaKNehkptFVxfrByOmIdnFAL9y1X1wOEj2NcF%2FoOay79Tb%2BpaJgiXiyaJgpit5WOtw7AqYEnpDVe1fbD5T8KhPzNgMs0n0oeSIQ%2FvogEmrPiPhd%2FBKGdsY6K5e7UhDewdwv2QJwapW0hTYE0OvBL83%2Fede59XHSfg2Sm%2FThPfSJfyvVD49bUz6ruwo4nSWvK%2B%2BwsNqEgt4Qd3NCXww24w2cAQ2XPhfWfQam300lhh%2BVzLsQ8pHgAv3uEbu8dfRNugEKYDSFXCINt0zwFY%2B28odlACixfaa8ZySZ9UJuyO1vl2hhIZxZ%2BUN4VAIDUQcMXh2LAnxGqvwSq1jjybE6ZDMVZ%2BwOljc0ZolPwh6gCBI5ERrwP6nvEb6b3Xfbf5gwPsafZEhnpppAh5gtsnn%2BjwzS%2BTcu7BWdZt9nW5DWJj9s6Bb0KP4aGhmu8U%2FO7if%2FedFDWMJCxpr4GOqUBlROtwrjhWeF6vgmozjniqzfHDeWH89FAqeJZJKbWx29IqEJtwMiiI87vBEjMpsIfLQTVZchnrRQQH63BdPqQFUQqm6DvJtPOvB6IP%2F6wG3%2FLfgvQ4BvYU%2Bf7qcf%2BzSJumPh1z8yOHvd%2BiigciqfuN0M58aNOrlvQQp2A356ilPqsibz6Xq7MtlYKXc0JKgqrbaqP0iR%2BmVphkDllVB6IlLkfSdps&X-Amz-Signature=b51725c425117e421a88535f026327589f8e0a9c234307868e21a286c969c459&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
