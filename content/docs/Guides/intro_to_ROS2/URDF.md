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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72AUYOX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYHOyT%2F1jlqVBp%2BqKFxYDYSJyLMIteWx8n%2FXJ4PLllLQIgFJNFk7I7UCFPoKGJy7GyekdUNu0oSmTjweq4qxAfaZEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBXROtGNDQ10Od8r3SrcAxGu14qJFmr0UN3VRdzyHhdASFevDoh7ul3g203DAMv%2BGoQHJRMej6jUo9A8gKEcPIYg%2FRq3L67gHBZgREXd%2FWeitm67RqMjjkjwZIqDbg1Pxp7NPQBT1%2BUhm9qrbvsTnE4mZWu3EPptHcX3c%2Fom1yV4O3Bh9ZHaEi5Vh8dMf%2BixlWlmm4KbPmcVahBZXq0RUt4E4LA9QFYJs9M%2B97%2BEMq2DS3jcQLIanX1pmsE4AIl5CyaeUbHkq%2FDVT1qVW1lWOmpJ%2Fv903RZ4dPphLQwH5zeSGz06opjROEixKTGUsPl9jrtSOid43KO4P5RpfNeYJ3JxK55S5ZXXdYsQgcPf2TK4uSazSuTDMkJLultIvLsPx3C2Pz3q232YEaih%2F20iM7rbAWU7ruSplIAiIrKNr5kvCEXucqx8MfT1mSFe8Yy%2Fby9gkhueEuIQyWnOR7OJvVmzkp1PBy%2FaVo9efluwRzJl2w56uKaCWsjRuvi5nOcZ3v5Yv9oReRbH39%2Fw8o0xAr7q3ZZdWXc%2BtX7iZ5dJDOunqr6vNLijHS8gryFaMoNau6qjPM3KCaAPuyPB43Z2emnHEZKbuoO%2BJj04hEs3GEMsn%2BTQWpUUYclxDY1DLAqrtCe3SBZReryABJvmMN%2FIzsMGOqUBZRCsPf5C8N%2Ffx12E%2Fgvf1baCZ%2FGW2ItbhRwW2XUEe6M7cuyrCT%2Fm7hIu9sQsJb%2FpXIPSdrf3hgqi%2FqpHBi6zLZk4pjexeMEHwFKZqNI4YVMXbNcsubRZ6I2FklT7RzIHc1KfXlEhO%2FyHe%2BD%2FU2uu5Hc%2BIubmsbtyXf6YuOXR5rR%2B8CkX91oce4ohynLzv%2BlHnVIvnZR8OmGg1jJv1JXA1NirIRyE&X-Amz-Signature=2c49f2e9cec5f8b48141dc201a4ab6bdf87fba1f7f4676ad2f7da40c2951e5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72AUYOX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYHOyT%2F1jlqVBp%2BqKFxYDYSJyLMIteWx8n%2FXJ4PLllLQIgFJNFk7I7UCFPoKGJy7GyekdUNu0oSmTjweq4qxAfaZEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBXROtGNDQ10Od8r3SrcAxGu14qJFmr0UN3VRdzyHhdASFevDoh7ul3g203DAMv%2BGoQHJRMej6jUo9A8gKEcPIYg%2FRq3L67gHBZgREXd%2FWeitm67RqMjjkjwZIqDbg1Pxp7NPQBT1%2BUhm9qrbvsTnE4mZWu3EPptHcX3c%2Fom1yV4O3Bh9ZHaEi5Vh8dMf%2BixlWlmm4KbPmcVahBZXq0RUt4E4LA9QFYJs9M%2B97%2BEMq2DS3jcQLIanX1pmsE4AIl5CyaeUbHkq%2FDVT1qVW1lWOmpJ%2Fv903RZ4dPphLQwH5zeSGz06opjROEixKTGUsPl9jrtSOid43KO4P5RpfNeYJ3JxK55S5ZXXdYsQgcPf2TK4uSazSuTDMkJLultIvLsPx3C2Pz3q232YEaih%2F20iM7rbAWU7ruSplIAiIrKNr5kvCEXucqx8MfT1mSFe8Yy%2Fby9gkhueEuIQyWnOR7OJvVmzkp1PBy%2FaVo9efluwRzJl2w56uKaCWsjRuvi5nOcZ3v5Yv9oReRbH39%2Fw8o0xAr7q3ZZdWXc%2BtX7iZ5dJDOunqr6vNLijHS8gryFaMoNau6qjPM3KCaAPuyPB43Z2emnHEZKbuoO%2BJj04hEs3GEMsn%2BTQWpUUYclxDY1DLAqrtCe3SBZReryABJvmMN%2FIzsMGOqUBZRCsPf5C8N%2Ffx12E%2Fgvf1baCZ%2FGW2ItbhRwW2XUEe6M7cuyrCT%2Fm7hIu9sQsJb%2FpXIPSdrf3hgqi%2FqpHBi6zLZk4pjexeMEHwFKZqNI4YVMXbNcsubRZ6I2FklT7RzIHc1KfXlEhO%2FyHe%2BD%2FU2uu5Hc%2BIubmsbtyXf6YuOXR5rR%2B8CkX91oce4ohynLzv%2BlHnVIvnZR8OmGg1jJv1JXA1NirIRyE&X-Amz-Signature=0019c6d62e58d35d241587f20868a10148e5d9d4170eba4e98f29d3843d3c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
