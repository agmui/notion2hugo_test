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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MOJNWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGWDgb%2BVPl9h226zND5hqkn2NPSwAensegFS8NFpEzkyAiEAzlvc2zNhRrSS%2FHMJyiChIsOftl0MPcfvm9XblEemNEYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHLhCTsBnK1NYVxCbCrcAxTvlcwOQ4wFwsoO6FHULcNqFEEHu5%2BeoRPDifoNXqgv9%2FqRlpf4hrkY6QyVsyuO%2BwiTytgqeDi6wn5AZtmuru1iXyrNkKimgZZQ7ghit8SlT0LsT3tWJ38N6xcku5i5vQen6iLWDu7lC7PPlHj0pdnWOMuf2nfjgpl8HY%2BByNvsykG3iKVVC3P9Qqtv2S9m64UmmtA4V4QQlHx1QsCIIILXJ70A5ccl0dCj4A1UnVIJQaIRyh3cDB9iMyP2U2YuAb4LOgh%2Be4gPAse3oE2rkQeppr6PU%2F9O586LEL3CgUBHSxXaQaQgVxTQFxhjsrx93Nq5YzFMn3Ir64%2FUKE%2FCMRPixIdqqNx662WepMP0M3xxorYSW9ZqfZHFUYYRbEnmQVnR3YuY1F0c9pLFajceT7Ha%2FjP8w5dhX3Usuoz%2FGCKM31e5cf64pchWxu69zWtorDVwzrc%2Bn4hbb2YjItaZdXUGYj4%2Bm1No79gxZn5XZX5Tyqp5y9DeEfH27nrdz4aExCKT%2BZM2mYWHs8oDxKvdLtU%2BcPrdOb7aZ8Ylr4aQjbbkzN8AW3WF2wrwgMbFtfAKUN4VDLvXAyHtZUUXPUZFHGZiiErCp2S%2BN%2FPcQil%2FG9Rb418RB8mukZKm0slbMOHNx8EGOqUBRmU2DesjKxlqko8%2BRl0T7%2FewPJEHuu%2F8J4BI7jqrXyNMqIbBV9HlV%2FmqDkf7MfezvK7kSj4xhyOXPDOD3LkggGxdabftlVxer20CGwaApjnpFpu1dAK3npw3MOQr2cG%2BslGnwtIpksuoANhv428JMoPZ6ARizKrel1O42PMiexNbMyQ1RgEomI6H29znQkiiHIY7hWZy6tnpbsnGHzqRQJMOerd3&X-Amz-Signature=29d12bbde7b78801d79d900d9a0761da39c53615a6d29d3ad9f8657db26e0640&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MOJNWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGWDgb%2BVPl9h226zND5hqkn2NPSwAensegFS8NFpEzkyAiEAzlvc2zNhRrSS%2FHMJyiChIsOftl0MPcfvm9XblEemNEYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHLhCTsBnK1NYVxCbCrcAxTvlcwOQ4wFwsoO6FHULcNqFEEHu5%2BeoRPDifoNXqgv9%2FqRlpf4hrkY6QyVsyuO%2BwiTytgqeDi6wn5AZtmuru1iXyrNkKimgZZQ7ghit8SlT0LsT3tWJ38N6xcku5i5vQen6iLWDu7lC7PPlHj0pdnWOMuf2nfjgpl8HY%2BByNvsykG3iKVVC3P9Qqtv2S9m64UmmtA4V4QQlHx1QsCIIILXJ70A5ccl0dCj4A1UnVIJQaIRyh3cDB9iMyP2U2YuAb4LOgh%2Be4gPAse3oE2rkQeppr6PU%2F9O586LEL3CgUBHSxXaQaQgVxTQFxhjsrx93Nq5YzFMn3Ir64%2FUKE%2FCMRPixIdqqNx662WepMP0M3xxorYSW9ZqfZHFUYYRbEnmQVnR3YuY1F0c9pLFajceT7Ha%2FjP8w5dhX3Usuoz%2FGCKM31e5cf64pchWxu69zWtorDVwzrc%2Bn4hbb2YjItaZdXUGYj4%2Bm1No79gxZn5XZX5Tyqp5y9DeEfH27nrdz4aExCKT%2BZM2mYWHs8oDxKvdLtU%2BcPrdOb7aZ8Ylr4aQjbbkzN8AW3WF2wrwgMbFtfAKUN4VDLvXAyHtZUUXPUZFHGZiiErCp2S%2BN%2FPcQil%2FG9Rb418RB8mukZKm0slbMOHNx8EGOqUBRmU2DesjKxlqko8%2BRl0T7%2FewPJEHuu%2F8J4BI7jqrXyNMqIbBV9HlV%2FmqDkf7MfezvK7kSj4xhyOXPDOD3LkggGxdabftlVxer20CGwaApjnpFpu1dAK3npw3MOQr2cG%2BslGnwtIpksuoANhv428JMoPZ6ARizKrel1O42PMiexNbMyQ1RgEomI6H29znQkiiHIY7hWZy6tnpbsnGHzqRQJMOerd3&X-Amz-Signature=18f727f1e6426a564950abea794bc9d41d6961e2ea1876bd5c4ede18378d7166&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
