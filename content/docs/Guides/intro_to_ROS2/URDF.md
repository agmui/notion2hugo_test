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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3PT6HD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3yyryImXDa4ge2Rw95T9QEOAL3lLtfF%2BdJzDPn2aBZAIgAsx8APnITew8Nwbi18vyfQqsjm3Mq1sWDh9OeYFhVYEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFXbBYL8uU%2BtOpPfASrcA%2FTpdrxWB8qNKXVK5edX7YXY3hqCEdbuQ5m56xPnds7ML0XxZGaqZSvggw4wWs%2Fc4RM1ZyKa7KqCULU1D1osKBr2b3WMLoQCuyVGa9EkvqwHS5AQzJteRtd%2BZTYAGH4OrCInx1ojuGkXhpUUIynKG9s%2BO3U2pM9dXm9rO9ZAnZ%2FRoxofrdRFaK2Bh7auJBhI1Tjkw%2Beuy5PP%2FHQ7iwos6fU60bgYxWZo8TvqubiexOhRJ%2BsrCWoMzJLH5XI4UUHD6YeSVpSqKfLPxitIbjM1lUFAIhGpQLspLQlVUtasXnyjeuEDBx0x4D46gIkowMDdbumbOL1YIil%2BVuIPmSMY8MPuGsHRCY5xxvFNw7jsf3tiGsWUvAUiKjS9l62f5ZAKbu0QyL%2FEoJTW1CQ1nB0ZmuGoj0a4YCodWDBCNwUjQpuKCsDLeNhKmf%2B7vJ9oRJfaWQUTj7yL1EdJXabwDXZBhTXPJg2cegwBrWKO2NfKNQ5vi6m8XbkPQYW34hGrkLk9%2BGdp5J3ghHapPHAvCiC2g98gL3RjZVblQkx%2Fuwp6ygRoVc6sT035%2B4fp9oXC%2BwiAnk6OiMBoHCG4gI0ePn1uy3INh%2Fmqjufdi47hwFo%2FngeCmRauAr3OdzsX8kXjMJHW%2Br8GOqUBARiiS3Kb4%2FkZX7XRJ9mJBj%2FYEwhHLK15nHHWT6mrkgGmTTWlkSigiLBJ3I3DXX311p5Lz9TMhf1scH9pG5pev5gfi0X4ev8mPRkEPAFIXRLIwOXLkL6LjELjqxVl2IY9IFqumjDAMQh1Lxa49GHYFqNP2Cbyk5%2Bb4dZuBaobRSguT8T4IqJTOT3GaVTRWItIeUOke3X7NsnMj0gZpqxXHQBdK1bg&X-Amz-Signature=6692048023641ac6907018aadac72f055b646434de03ef63ba72eae53182f9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3PT6HD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3yyryImXDa4ge2Rw95T9QEOAL3lLtfF%2BdJzDPn2aBZAIgAsx8APnITew8Nwbi18vyfQqsjm3Mq1sWDh9OeYFhVYEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFXbBYL8uU%2BtOpPfASrcA%2FTpdrxWB8qNKXVK5edX7YXY3hqCEdbuQ5m56xPnds7ML0XxZGaqZSvggw4wWs%2Fc4RM1ZyKa7KqCULU1D1osKBr2b3WMLoQCuyVGa9EkvqwHS5AQzJteRtd%2BZTYAGH4OrCInx1ojuGkXhpUUIynKG9s%2BO3U2pM9dXm9rO9ZAnZ%2FRoxofrdRFaK2Bh7auJBhI1Tjkw%2Beuy5PP%2FHQ7iwos6fU60bgYxWZo8TvqubiexOhRJ%2BsrCWoMzJLH5XI4UUHD6YeSVpSqKfLPxitIbjM1lUFAIhGpQLspLQlVUtasXnyjeuEDBx0x4D46gIkowMDdbumbOL1YIil%2BVuIPmSMY8MPuGsHRCY5xxvFNw7jsf3tiGsWUvAUiKjS9l62f5ZAKbu0QyL%2FEoJTW1CQ1nB0ZmuGoj0a4YCodWDBCNwUjQpuKCsDLeNhKmf%2B7vJ9oRJfaWQUTj7yL1EdJXabwDXZBhTXPJg2cegwBrWKO2NfKNQ5vi6m8XbkPQYW34hGrkLk9%2BGdp5J3ghHapPHAvCiC2g98gL3RjZVblQkx%2Fuwp6ygRoVc6sT035%2B4fp9oXC%2BwiAnk6OiMBoHCG4gI0ePn1uy3INh%2Fmqjufdi47hwFo%2FngeCmRauAr3OdzsX8kXjMJHW%2Br8GOqUBARiiS3Kb4%2FkZX7XRJ9mJBj%2FYEwhHLK15nHHWT6mrkgGmTTWlkSigiLBJ3I3DXX311p5Lz9TMhf1scH9pG5pev5gfi0X4ev8mPRkEPAFIXRLIwOXLkL6LjELjqxVl2IY9IFqumjDAMQh1Lxa49GHYFqNP2Cbyk5%2Bb4dZuBaobRSguT8T4IqJTOT3GaVTRWItIeUOke3X7NsnMj0gZpqxXHQBdK1bg&X-Amz-Signature=7339a493b3c4ac5016e1f20f98595fb7edada17ebaf950dc5731f53b7e0e9caa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
