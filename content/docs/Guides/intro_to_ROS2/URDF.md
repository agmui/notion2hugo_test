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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXZTOIX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBC2a6dFSAB9NgFdcEWQqcQQIhIhgxkmD38Nm9noZtZyAiEAoW0M0QBRepLpunpjLKiTGaCxYeDWlb%2FFA1BokFbVxpUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLCRCbTYm6K3R1vCircA6U4xQjUAGdCQQH1NWQgAgwNOwj%2Bt6ou1PSxH4A%2FHNFWbrcisHbtJgAoo6i56YCh%2ByiR9F03JFh6CaAJKnxkzXBKPQzdnKDINDqZDrKvcLja0pvNHl%2FAIxJRdDsqjJL%2BJlHQs16sCyQWttpcV8FFz41wRvGHgP1BRa%2FdLz7YhGND7Tv0asnrFgKpoJ%2FbbeG6rqdaNhdNHT%2BP%2BD2cKumAMHwul9RC4lZFmkg4MySvkNrRgLQINuDgtEqTWqHAiJ%2BM0CqX1Cq1S1nUEfTkt%2B24%2FoTxdU4hr4BBxHtCa0SeNwuKYXuid8tG%2BYKdlpZKmxdw95RUleLDOup04agiLCm9MjiqF9ce2AQmCstwaFSRLbvPEUfMwgftEqBDOxVEs1Z0ktMc2pU9ACmL28EV9CmyzcQTub6LSU0k28N22WNpNfBj8bvr25WHgDBisEa8GIp%2Fna3cNoq%2FFzhjylv5RH5m1zX4OrIp4SNCt%2BxFjlgdwmh7X3LD8fhvZF9OzgyporRN5CxOBt6WuTpiO2yeOKikOuFrHhZGpevdwK2vNLvf5dWA6seKOGjtfZziu2%2BkPS2H%2B7BJbNEKfRe%2BOUDNHgjUj2xQt4UAN9iFOZH7y4XD9lU3TFkotzxxLxI3lUanMOqkrb8GOqUBrihEffXuaYcJvhSozu6DXso7k6pNHNpdU5VEVY5KnqfTaEx8DDiSY2rIK7P5K0Ab7Qnvcgmbn1hAJ6eafqr6A88JdTHmNSikh%2Bvnx3tsTi7Oqgk4Vv4wztiIduQfHXsegDwg9JvfRiRcVMVv7soN1VtPcwcR33Dq%2FSOn0IxmbHex2yHm%2FGRSeCaQdhZG3iQNLvaj9z7RvwvPuu%2Fy%2BbTNiBoFtCGK&X-Amz-Signature=b1aee33a503b82acb16fdbdad9413886ad544d1ecc7941f05d69beb34a7dd5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXZTOIX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBC2a6dFSAB9NgFdcEWQqcQQIhIhgxkmD38Nm9noZtZyAiEAoW0M0QBRepLpunpjLKiTGaCxYeDWlb%2FFA1BokFbVxpUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLCRCbTYm6K3R1vCircA6U4xQjUAGdCQQH1NWQgAgwNOwj%2Bt6ou1PSxH4A%2FHNFWbrcisHbtJgAoo6i56YCh%2ByiR9F03JFh6CaAJKnxkzXBKPQzdnKDINDqZDrKvcLja0pvNHl%2FAIxJRdDsqjJL%2BJlHQs16sCyQWttpcV8FFz41wRvGHgP1BRa%2FdLz7YhGND7Tv0asnrFgKpoJ%2FbbeG6rqdaNhdNHT%2BP%2BD2cKumAMHwul9RC4lZFmkg4MySvkNrRgLQINuDgtEqTWqHAiJ%2BM0CqX1Cq1S1nUEfTkt%2B24%2FoTxdU4hr4BBxHtCa0SeNwuKYXuid8tG%2BYKdlpZKmxdw95RUleLDOup04agiLCm9MjiqF9ce2AQmCstwaFSRLbvPEUfMwgftEqBDOxVEs1Z0ktMc2pU9ACmL28EV9CmyzcQTub6LSU0k28N22WNpNfBj8bvr25WHgDBisEa8GIp%2Fna3cNoq%2FFzhjylv5RH5m1zX4OrIp4SNCt%2BxFjlgdwmh7X3LD8fhvZF9OzgyporRN5CxOBt6WuTpiO2yeOKikOuFrHhZGpevdwK2vNLvf5dWA6seKOGjtfZziu2%2BkPS2H%2B7BJbNEKfRe%2BOUDNHgjUj2xQt4UAN9iFOZH7y4XD9lU3TFkotzxxLxI3lUanMOqkrb8GOqUBrihEffXuaYcJvhSozu6DXso7k6pNHNpdU5VEVY5KnqfTaEx8DDiSY2rIK7P5K0Ab7Qnvcgmbn1hAJ6eafqr6A88JdTHmNSikh%2Bvnx3tsTi7Oqgk4Vv4wztiIduQfHXsegDwg9JvfRiRcVMVv7soN1VtPcwcR33Dq%2FSOn0IxmbHex2yHm%2FGRSeCaQdhZG3iQNLvaj9z7RvwvPuu%2Fy%2BbTNiBoFtCGK&X-Amz-Signature=668406b2737d48095db2bf38be6ad333211c0ae58f3e55a8dc57df7f93a51d11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
