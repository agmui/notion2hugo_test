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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRSIR3B%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiO0Gnq1dqHKPxrQnBTTsP3n6U86EUkai1PPsdjbVQpAiEAgsnAKNQ84DxZ6yAGNi35xpbRgkqYa%2BDg4fMX4D84LwAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIUxON9mlxsemoAo1CrcA5cPSLbUcy8pHZQnn0TWZaDxRlkuCewJbNRK7RbPwl0kYOJTuOVOQmYiutsGhEAQZT5mCSRbHelJ%2B8nr8z8T%2BHoVMJJQiDXMdSbghCv3KpZpmqGAN7sPeqzZhd1sXdykRqaE03IKV7ihjbvVmHfIZQmK15Yo5Ltv65D870RNo%2FJIFFNaX8CqQBcwa1i26RqlPUefNTm6YOzvYSUVnyfTTe1HVjf02KejPpoFIcOzo8d4l553BN0uz4QTfHAPHM0sSbzcvhAdG6yb0wfE0ymQv1rioSaIeEXCEYgX9TqMbO7y6cfJKtrFEmPSmD8VyYIH%2FX4FQg3gnMiHKOQuaBvhLPOyLKvSepZbfbjgNkXSfdoBvvQrExs5A8fcA9VCAn%2Ft6j655jAOZ7WPhGC3gxcmpNPRogI1nics7AC22nGbLysfMBxqVTsv%2BKqgrvTp%2BVsozLODARD%2FtFnpQ9ZWa%2FRTE0aWfVwqZRZcqiHt0ZOnLMidiNazl5k6i2MaRy%2BJXh2iiHyjQ%2FrsWcZflmyqKgk9S1r%2F8fKA5P6XhgoN7B%2F5F%2FxLkgjIibKIoUUh6OLM5P2SgDcYwz8OWs3aEW2bHNECx9ZL3qdOhXm1Hv4bDuXwx0KX1EBahXK2ziq5mpIXMKCa88AGOqUB80ovXfJU9eL87EwH5tDEE%2Fs8T4ASKoDKmbHeMwDMstjiNPBAeSiYG7MwcERlAfU5oyJ%2Fsd5Q%2FnYogUQtarQ93A9Ntq1nVygwaH07ruj70HL9QK5MnePAY7R1MNL9OJyVGjrR%2BUBrszt7u7%2FKN%2BNkor%2ByhcAxliGrWkLttNBdWKX2rpIsptmT%2BNZzXQzsq599MsDSK6Tx%2B1O7g9YQweIbK%2BAf6qFj&X-Amz-Signature=b7368c0f709036eb9e6a536b11c5067018632ae103b5dc96b881b24f75096a41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRSIR3B%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiO0Gnq1dqHKPxrQnBTTsP3n6U86EUkai1PPsdjbVQpAiEAgsnAKNQ84DxZ6yAGNi35xpbRgkqYa%2BDg4fMX4D84LwAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIUxON9mlxsemoAo1CrcA5cPSLbUcy8pHZQnn0TWZaDxRlkuCewJbNRK7RbPwl0kYOJTuOVOQmYiutsGhEAQZT5mCSRbHelJ%2B8nr8z8T%2BHoVMJJQiDXMdSbghCv3KpZpmqGAN7sPeqzZhd1sXdykRqaE03IKV7ihjbvVmHfIZQmK15Yo5Ltv65D870RNo%2FJIFFNaX8CqQBcwa1i26RqlPUefNTm6YOzvYSUVnyfTTe1HVjf02KejPpoFIcOzo8d4l553BN0uz4QTfHAPHM0sSbzcvhAdG6yb0wfE0ymQv1rioSaIeEXCEYgX9TqMbO7y6cfJKtrFEmPSmD8VyYIH%2FX4FQg3gnMiHKOQuaBvhLPOyLKvSepZbfbjgNkXSfdoBvvQrExs5A8fcA9VCAn%2Ft6j655jAOZ7WPhGC3gxcmpNPRogI1nics7AC22nGbLysfMBxqVTsv%2BKqgrvTp%2BVsozLODARD%2FtFnpQ9ZWa%2FRTE0aWfVwqZRZcqiHt0ZOnLMidiNazl5k6i2MaRy%2BJXh2iiHyjQ%2FrsWcZflmyqKgk9S1r%2F8fKA5P6XhgoN7B%2F5F%2FxLkgjIibKIoUUh6OLM5P2SgDcYwz8OWs3aEW2bHNECx9ZL3qdOhXm1Hv4bDuXwx0KX1EBahXK2ziq5mpIXMKCa88AGOqUB80ovXfJU9eL87EwH5tDEE%2Fs8T4ASKoDKmbHeMwDMstjiNPBAeSiYG7MwcERlAfU5oyJ%2Fsd5Q%2FnYogUQtarQ93A9Ntq1nVygwaH07ruj70HL9QK5MnePAY7R1MNL9OJyVGjrR%2BUBrszt7u7%2FKN%2BNkor%2ByhcAxliGrWkLttNBdWKX2rpIsptmT%2BNZzXQzsq599MsDSK6Tx%2B1O7g9YQweIbK%2BAf6qFj&X-Amz-Signature=091230f7defc248cb0cb3178b4eefcf30719a880fb4a3680f14d3a709151da23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
