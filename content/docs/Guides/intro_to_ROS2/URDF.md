---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI6NJO4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESixMMPFl5mGLrhi7cgHbBgw%2B9qTzf5vVCYwTANaEboAiEA1GCuPYER1kqAv%2FD%2BdhqeKwRJvk6Ra6NvfpBXHECB3J4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrK%2FjjnWmhqITg0EyrcA7k9MM%2BM1gx3OMvXzMDGGWOMDKtUNLlljY4YXOD8W3b5gY%2FaqaGpGGqOmvk2142GTPjagi06OSAtAqGcQf2f3A6Nh%2BxYt5eEKkXYcaRLye4vt4kliNpKngnEJpY7kxqB%2F%2Fc6gAO8aB3xfrQXAzzhW1gw8ZKNOnMqxITvhl65a%2Bz9eHldaijte79Jkd21a9WBSEW6FQIPtHJSFhxzg823hkIcPJ3mr%2FM4JMwTwmddb0t4kM%2BgeZSov%2B5gZ1GzQ6WjzdyuZJRnG5GZNx81zCphK5xN6Jglgq11dKX94ZHj9CzIb4iSPYg8ad8xamma%2Br0Fcee5ctvz5P79MmTgwxnJHkl4Et1jJaJWyB4ZVB5JNtui3pfNYSI21vnXUR97cl8OfRX4tX1Fi6rAfUaTp069a%2F%2FAC8qYzFKg58cT8IgE%2FnRmBZa1LrS6Ms2WPRlCr5LfAcIuXVd1e%2Fc8bjQBqWk4xLLP5hOSIt2KotCDvhP5tWU%2B1mSVssDmsi9AiRya9Sm7fQ8YKPPcY1IuPkLph8FtB8JGVmXM%2BS3uTQsE3OUmDTS%2F%2BxUdiKJgyiHlOlNun8CLObJgfgjYRyDSCBzktVIx2aa8iT7T7v6QPgUfmtPjMfVIYhGhfKYezdP4iXtZMI2%2F4sQGOqUBIrjEI6rtx7oMM8YVmbha63IOW5N491UDt8XwL3e3lcGNiqMyHZDet9VWj0x6KjsRxl2knBWjaT2wggMWEGmHzWhdbqeojIdofrLyGaZdex9iFQ7r47dGF%2BuSgzZmhWJdiq%2B5Oq%2FnGdNhbjAynxullxRdVg9AX9hLdw28fyU0rlf6sK6fhO7uUva%2BV23P0mOLczvKz0%2F9dQYhu6qTjg84axnxnsGO&X-Amz-Signature=b61edab6bead3f42a02876f7a7824b241edbd620152627b6a75c4d43f05a38ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI6NJO4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESixMMPFl5mGLrhi7cgHbBgw%2B9qTzf5vVCYwTANaEboAiEA1GCuPYER1kqAv%2FD%2BdhqeKwRJvk6Ra6NvfpBXHECB3J4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrK%2FjjnWmhqITg0EyrcA7k9MM%2BM1gx3OMvXzMDGGWOMDKtUNLlljY4YXOD8W3b5gY%2FaqaGpGGqOmvk2142GTPjagi06OSAtAqGcQf2f3A6Nh%2BxYt5eEKkXYcaRLye4vt4kliNpKngnEJpY7kxqB%2F%2Fc6gAO8aB3xfrQXAzzhW1gw8ZKNOnMqxITvhl65a%2Bz9eHldaijte79Jkd21a9WBSEW6FQIPtHJSFhxzg823hkIcPJ3mr%2FM4JMwTwmddb0t4kM%2BgeZSov%2B5gZ1GzQ6WjzdyuZJRnG5GZNx81zCphK5xN6Jglgq11dKX94ZHj9CzIb4iSPYg8ad8xamma%2Br0Fcee5ctvz5P79MmTgwxnJHkl4Et1jJaJWyB4ZVB5JNtui3pfNYSI21vnXUR97cl8OfRX4tX1Fi6rAfUaTp069a%2F%2FAC8qYzFKg58cT8IgE%2FnRmBZa1LrS6Ms2WPRlCr5LfAcIuXVd1e%2Fc8bjQBqWk4xLLP5hOSIt2KotCDvhP5tWU%2B1mSVssDmsi9AiRya9Sm7fQ8YKPPcY1IuPkLph8FtB8JGVmXM%2BS3uTQsE3OUmDTS%2F%2BxUdiKJgyiHlOlNun8CLObJgfgjYRyDSCBzktVIx2aa8iT7T7v6QPgUfmtPjMfVIYhGhfKYezdP4iXtZMI2%2F4sQGOqUBIrjEI6rtx7oMM8YVmbha63IOW5N491UDt8XwL3e3lcGNiqMyHZDet9VWj0x6KjsRxl2knBWjaT2wggMWEGmHzWhdbqeojIdofrLyGaZdex9iFQ7r47dGF%2BuSgzZmhWJdiq%2B5Oq%2FnGdNhbjAynxullxRdVg9AX9hLdw28fyU0rlf6sK6fhO7uUva%2BV23P0mOLczvKz0%2F9dQYhu6qTjg84axnxnsGO&X-Amz-Signature=79c108269bce98ec50ce49498a96f49aee7390c27e46402a216d019bfab317d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
