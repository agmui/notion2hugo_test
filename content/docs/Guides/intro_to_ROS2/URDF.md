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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3IPARD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDq6Jtr%2FGlIE%2F9fAwI%2FNDRwUHhsI8GtPsdDE1H4Nm5zIQIgKTwZ%2FzAs4gobEaZO66StrS7DHctDUCEUoppyIVImM24q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC%2BJxttp2%2F0xAQhutCrcA0Tzw8dKkKAoMxW2kYW8pdLoFyWEH0pp8lli4Et9LeagBKFzsELW9lg7PLMytkqMQmDrUSJfy%2BfsiDof7pn0QbJzU39xUXcjD4R5CpSm9gN0BfR%2BKTCknGXO23lO%2FJ1TUClu7tyoMlCmPuBy0cKu4zbseaa%2FI58RaG7R8LlzCAJy8%2BvmOuPmTzjz3e%2Fom%2Fx2p1uAl75Pk0NyHhNbnnbToC1lQt8A6KJmnnW%2BMUD7qRvZPOY%2Flyh83y7W7RGVoLJvapvt83cNhicZhxe%2BG2m1AGatHapjXwLUybPTpGOnr1iq5H1E8NfmPJpvE93UsK1KysmoyrgazD5Ix3BldIeM8eRTSQ852PzBN43ayK92jvBerLDMKak8KbG3pv%2F2ogqx9fPkgBx0N6%2FQXYIFqh1gaeQVk5PY34iZw0yg2%2B1dtIly8Nat4mZVojkdbEyWSSpkkVbGTWkH6Vgf86lVsFT7PiCUmdBsYvs%2FcENwIsEKrpBzPnvrczm00PK3NqVzJz0pCLKRea5pvxuJD4cxsFINqlLwtDgLQWVS5urolUXkoL6i4xsJ63xRxMSqpQCY2hdug4XTWt8JTvdBPfppi4LvteliAN70MG%2Budg0D1U%2FhJaRDZ3baZm7Z%2BfPkaDiLMNWp%2Fb0GOqUB9zrRYoQ2NjclcyApy3Jho%2BBy%2Fp03rVe1KgZ5D1GtsVXvw0Ye9jb%2Fy%2BJvpDhlzlMMt%2B0RVxpiVxegolRMY9L5LE2s91KSvtzexDYH042VfnKdlfUnucLkCyXdeEFPI1tvT%2Bkcrfe1W1oBvyPnOxUOOS4YHckPFGmfa6Gu9RNEVx%2BxghCDrJAbQ10U4Jq3VV041CS4UPMdXlDpk5kQAZvOao3GEa%2Bd&X-Amz-Signature=94edd5fba8359b7b14eed466bba1e68732b86183f1725cdfa4b68e4de4c3c6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3IPARD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDq6Jtr%2FGlIE%2F9fAwI%2FNDRwUHhsI8GtPsdDE1H4Nm5zIQIgKTwZ%2FzAs4gobEaZO66StrS7DHctDUCEUoppyIVImM24q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC%2BJxttp2%2F0xAQhutCrcA0Tzw8dKkKAoMxW2kYW8pdLoFyWEH0pp8lli4Et9LeagBKFzsELW9lg7PLMytkqMQmDrUSJfy%2BfsiDof7pn0QbJzU39xUXcjD4R5CpSm9gN0BfR%2BKTCknGXO23lO%2FJ1TUClu7tyoMlCmPuBy0cKu4zbseaa%2FI58RaG7R8LlzCAJy8%2BvmOuPmTzjz3e%2Fom%2Fx2p1uAl75Pk0NyHhNbnnbToC1lQt8A6KJmnnW%2BMUD7qRvZPOY%2Flyh83y7W7RGVoLJvapvt83cNhicZhxe%2BG2m1AGatHapjXwLUybPTpGOnr1iq5H1E8NfmPJpvE93UsK1KysmoyrgazD5Ix3BldIeM8eRTSQ852PzBN43ayK92jvBerLDMKak8KbG3pv%2F2ogqx9fPkgBx0N6%2FQXYIFqh1gaeQVk5PY34iZw0yg2%2B1dtIly8Nat4mZVojkdbEyWSSpkkVbGTWkH6Vgf86lVsFT7PiCUmdBsYvs%2FcENwIsEKrpBzPnvrczm00PK3NqVzJz0pCLKRea5pvxuJD4cxsFINqlLwtDgLQWVS5urolUXkoL6i4xsJ63xRxMSqpQCY2hdug4XTWt8JTvdBPfppi4LvteliAN70MG%2Budg0D1U%2FhJaRDZ3baZm7Z%2BfPkaDiLMNWp%2Fb0GOqUB9zrRYoQ2NjclcyApy3Jho%2BBy%2Fp03rVe1KgZ5D1GtsVXvw0Ye9jb%2Fy%2BJvpDhlzlMMt%2B0RVxpiVxegolRMY9L5LE2s91KSvtzexDYH042VfnKdlfUnucLkCyXdeEFPI1tvT%2Bkcrfe1W1oBvyPnOxUOOS4YHckPFGmfa6Gu9RNEVx%2BxghCDrJAbQ10U4Jq3VV041CS4UPMdXlDpk5kQAZvOao3GEa%2Bd&X-Amz-Signature=6b342846d7b159ee2feb2c0e35336ea59887f93f5c7fa742a6cac8cab9c3df3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
