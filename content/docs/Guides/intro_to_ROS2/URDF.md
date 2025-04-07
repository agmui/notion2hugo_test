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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5253QM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FMRztZGmf%2Fyys4tdh9IFm5QJ9DoECbpI6OdtLBPijeAIgeU5ELSrdTlJs0bSDpaTM7IFCPBY5hXjWk4lgpkCGr1Eq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNLU24VnrGLm4jgx2ircAy%2F2GAg%2FjWz0THjBblO2UKjYCFKOaIa%2FLRTDr%2Fiwi%2FTWDSVXRmcHE1NfzS2gCpza4ixAH1Mii5ya57nv9PnJCbHikOeFNgYcPSPEgpwAuWWSVqyC0isWdEFlif3vveesWiyRTbbvzkgPuEAlQl0RTm7D7iyS%2BWLtmQQoVwF518EQ84sWIUH8C3%2BeIZavMld4eRTLvXtgoyy46yiqGizFT2reaLPkY0Gjzzpxry9lBE5GYfT%2Frjy%2FvE7u%2F7uVXvKWfa1%2F42aR9KxP6DXDBBPC8jXrHK%2BuNOLSPmckByHgm9cGs9iT90Vjog2yjzfnZWtFj6VosTHengbUU%2FlqdPrZhTOaIjAO55k1YjQMJ%2FrrsPgVH8T1jwynVf7rBRG%2BhKgd3ElYfV4W0s4QjjWCPq63GYjrvGkdDdEWJsIiQ3ynnIZpLCjp4qwp%2Bnx%2B0%2BAS1M0v3snVTKci3vczQX%2Bmj6MYGA0zbn31yTjDOocfyiV%2FB1c2BbKGnkQDcAXA5%2B%2BFswbBvs9swNlI92Ms2eRAup%2FArnOA6vAr6xYr%2F8AoJu8WfKMpYPQbjgpWaBe0UERQO15m82yA%2B2AQF%2BNQqSLn9xVBESsVNfEydlI0gBkuSc0ZkO3IE1W9CS3DM0usGeX4MIPsz78GOqUBCZpP08t6Y1ZVWIMHgo2g08jQzQMS4iANEKsFehhhLiz4P4HVOxIrGlTNNSvUVB5RaKxuJHmlzT3%2F2I%2FEtjL39X023nWDh4n1nkenuhOTd33xdNVLiMZrFfnVwWaA%2FtlpjFAp6oN1rZZslpI5OSiafZ3D%2FansgKCSfje1Qwnba5Zt5uJYYlOXYpB%2BJCo680zsT%2F0fmnZZbyJLnDxeHnkujuO4bqJx&X-Amz-Signature=332bd2d5be4adcaa334b24064befa6103b9997955d7f60feed1c019c571ab27d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5253QM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FMRztZGmf%2Fyys4tdh9IFm5QJ9DoECbpI6OdtLBPijeAIgeU5ELSrdTlJs0bSDpaTM7IFCPBY5hXjWk4lgpkCGr1Eq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNLU24VnrGLm4jgx2ircAy%2F2GAg%2FjWz0THjBblO2UKjYCFKOaIa%2FLRTDr%2Fiwi%2FTWDSVXRmcHE1NfzS2gCpza4ixAH1Mii5ya57nv9PnJCbHikOeFNgYcPSPEgpwAuWWSVqyC0isWdEFlif3vveesWiyRTbbvzkgPuEAlQl0RTm7D7iyS%2BWLtmQQoVwF518EQ84sWIUH8C3%2BeIZavMld4eRTLvXtgoyy46yiqGizFT2reaLPkY0Gjzzpxry9lBE5GYfT%2Frjy%2FvE7u%2F7uVXvKWfa1%2F42aR9KxP6DXDBBPC8jXrHK%2BuNOLSPmckByHgm9cGs9iT90Vjog2yjzfnZWtFj6VosTHengbUU%2FlqdPrZhTOaIjAO55k1YjQMJ%2FrrsPgVH8T1jwynVf7rBRG%2BhKgd3ElYfV4W0s4QjjWCPq63GYjrvGkdDdEWJsIiQ3ynnIZpLCjp4qwp%2Bnx%2B0%2BAS1M0v3snVTKci3vczQX%2Bmj6MYGA0zbn31yTjDOocfyiV%2FB1c2BbKGnkQDcAXA5%2B%2BFswbBvs9swNlI92Ms2eRAup%2FArnOA6vAr6xYr%2F8AoJu8WfKMpYPQbjgpWaBe0UERQO15m82yA%2B2AQF%2BNQqSLn9xVBESsVNfEydlI0gBkuSc0ZkO3IE1W9CS3DM0usGeX4MIPsz78GOqUBCZpP08t6Y1ZVWIMHgo2g08jQzQMS4iANEKsFehhhLiz4P4HVOxIrGlTNNSvUVB5RaKxuJHmlzT3%2F2I%2FEtjL39X023nWDh4n1nkenuhOTd33xdNVLiMZrFfnVwWaA%2FtlpjFAp6oN1rZZslpI5OSiafZ3D%2FansgKCSfje1Qwnba5Zt5uJYYlOXYpB%2BJCo680zsT%2F0fmnZZbyJLnDxeHnkujuO4bqJx&X-Amz-Signature=fa059403f02c9c84f7d32d6bdb714517bb602e23d849451a29dc5a5f58e13079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
