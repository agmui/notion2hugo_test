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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU4OQMP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICAUyucIu0ErVSCoL0G%2FV3R9%2BYDSSGijgw9EujieioTcAiAHdfA2fdDafIzWcjH%2BtfOc7TIYsf31PHC2CY1PIfbcaSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyknPlyvGAjZ6McIKtwDF7NuVbAW3F%2Btvw2CPo2J4rk1Ke4CXOgRsGHUSnz7dVcwOkpeHSNuOoJRpEZvihk9P8TH0Z%2F2Gm9ftF1FuY0RXG4xanyxfm2PF6eWv8Ab2aV9m9Wcn1NbabLLex3ui0fNwHLpNhOQoYaEkQpRWVI4ciHhsxbiZfGW1CkP6EOxshQLgfZTTb25%2BIYPmynSCrUPPL8cwj7HEl%2BoTaiE7%2F9T9CLt%2FnxUdETc%2FEoGOoknwt11rL0%2BhkhHRx9C2%2BHxUAVL8sJxXtO2DcGh%2Bic5lX%2BWsAZpoxBL5MfqIAZNolcgGulzKbG1enr9bjCjRC8giK6whccXlpdGhNMC97c5cq%2B7DBpbCpT7Zxmyh0i2FczEYJgSONR96cufDAjFaP%2FWVZs%2Fwqry68owTVOTtQAuWeg0QCRm%2BRiJyDyGi834SKbk5CFSJcOvV62CEdEmStLNjQ6aKBEsnS80Q14PqOL2hNywl39304k%2FEp6oay0nGVAigZALH8Qw2tQCjDVso2tCKKyO4r7%2B%2BTr3267YH8TbtP2ZbU%2BK18%2BnLPcQneqDIFe%2F1U2aoiCJk4LbzmVNO%2Bs7WTwEs1U%2B1SybzRIkuP6E5Di88iPzAQPdoqP7PAEw4aqhQYvEw8XpISIHabCEYcswgv32wQY6pgH2Prej8Yk3csDdmd%2BgYK%2FmPpDZmbGC7qeeIuzCk7OWK0QAmpDR0IrbZEaSrxDcUnI29ZhvzvW1tr9WdIaFYJeAweT2kAciYRSQBK9tTpaG0Inlh7U9ug4MdS39EgMjRSSXu7pEgHIMd2AIwVZ6c2tvDF7a2unx0ytqJnQXDezlkSLmitkkLJ72zNAl%2FAejr94uRVp9SXC0zhKk1EdR4j4tqKfEPgcT&X-Amz-Signature=7001313eac33a498a74cf7a05afe45452246e25d5c0169283ec0070088db727c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU4OQMP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICAUyucIu0ErVSCoL0G%2FV3R9%2BYDSSGijgw9EujieioTcAiAHdfA2fdDafIzWcjH%2BtfOc7TIYsf31PHC2CY1PIfbcaSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyknPlyvGAjZ6McIKtwDF7NuVbAW3F%2Btvw2CPo2J4rk1Ke4CXOgRsGHUSnz7dVcwOkpeHSNuOoJRpEZvihk9P8TH0Z%2F2Gm9ftF1FuY0RXG4xanyxfm2PF6eWv8Ab2aV9m9Wcn1NbabLLex3ui0fNwHLpNhOQoYaEkQpRWVI4ciHhsxbiZfGW1CkP6EOxshQLgfZTTb25%2BIYPmynSCrUPPL8cwj7HEl%2BoTaiE7%2F9T9CLt%2FnxUdETc%2FEoGOoknwt11rL0%2BhkhHRx9C2%2BHxUAVL8sJxXtO2DcGh%2Bic5lX%2BWsAZpoxBL5MfqIAZNolcgGulzKbG1enr9bjCjRC8giK6whccXlpdGhNMC97c5cq%2B7DBpbCpT7Zxmyh0i2FczEYJgSONR96cufDAjFaP%2FWVZs%2Fwqry68owTVOTtQAuWeg0QCRm%2BRiJyDyGi834SKbk5CFSJcOvV62CEdEmStLNjQ6aKBEsnS80Q14PqOL2hNywl39304k%2FEp6oay0nGVAigZALH8Qw2tQCjDVso2tCKKyO4r7%2B%2BTr3267YH8TbtP2ZbU%2BK18%2BnLPcQneqDIFe%2F1U2aoiCJk4LbzmVNO%2Bs7WTwEs1U%2B1SybzRIkuP6E5Di88iPzAQPdoqP7PAEw4aqhQYvEw8XpISIHabCEYcswgv32wQY6pgH2Prej8Yk3csDdmd%2BgYK%2FmPpDZmbGC7qeeIuzCk7OWK0QAmpDR0IrbZEaSrxDcUnI29ZhvzvW1tr9WdIaFYJeAweT2kAciYRSQBK9tTpaG0Inlh7U9ug4MdS39EgMjRSSXu7pEgHIMd2AIwVZ6c2tvDF7a2unx0ytqJnQXDezlkSLmitkkLJ72zNAl%2FAejr94uRVp9SXC0zhKk1EdR4j4tqKfEPgcT&X-Amz-Signature=c330589554f7973eb32f90c4e801418923875e47c14bd58effab3902df3c541e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
