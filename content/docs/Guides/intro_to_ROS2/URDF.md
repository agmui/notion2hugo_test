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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z2VW3F%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCIixPzEchW%2Fzv2sVNyBBEPz%2BsHv5eC0FqInIHthPK2oQIgS%2FhqZeTw9LHndETw1vWA1MHxBhJaUnT%2FPCVmKC5hdsAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCGvXGwdh%2BbBOClFWSrcAyEmaBMcEwkTQ48ugcPDGr%2Bzpq6khPxSqSb2R%2BAYU1tDef8VnChYAfeeMTjP04RW8XoeRS%2FnkYOCc7%2F%2FVqT1q6Dk1Ft%2FZ0YffSH%2FxVWh2sA%2B5Lfe1IVTRm83uTdvR3Ictkpzec%2FT21vTevKuWW%2FRkMbf40tYI4UOl93Q9nopfl5PooE%2B404j8N3daEiLEJrWqL5Ew7khQuYTRiFn2OmAtdbLOnfGVF%2FpdECwmLn2TGqMQecJNwRlY782o9V8FHDiXlprSOjDPpraOSCYaXw94npVQfHV2DoVpx6En0X2jf21ZBbEnyo%2BWHRm1oKlCSjRSipRRBP9ICuDZMVpUtCjN9M0ehlRNGWIWYjlzGlyvIvzwufe5rpP0wW21tMtAW3DjxJDLlEpUlr9EcI%2F%2Fg182PZN4HyZk6XLPpDYbhZPF3c4nOSa33pg%2BoLXk2asgn23DOFgP5WL3mIWcEYa5ZhibvptX%2B38Z4v79ZvtqU%2BbHdn1hrF4H%2B1DCismGJkZeSCw1f%2FM%2FCLxHCDOuldoGcLdYuKGI83wUKmke1W6RIEtwT%2F8IEiD7EX1tiND9cnQ6mCfvFJI0eaavLo2WO2fj6aCiEaPUMHH83dz5hNPT7tmgZJ7jEmCbjJP%2Fkt64saaMKDLpMMGOqUBdZ49h7GNpAzeZkd0wuW1hTrJP8g0MUSYe3%2FsfHh01FFyd7405Sz%2B1MaX0ZSHpjSLDFs4hbpTtmLSuSjXZYV8POZIkvNRlI5WdDp%2FJV1aeC%2BfC2bIJi8Ouaqxlajw4coa%2BKTmiGokDkrbdwBvOPWcdAKrgoJXh%2FVYGu0Ge0XilWCtscGgsXBwQXimqDvDThsPvtyzTn92rmRNveP8caJ%2BXR1MrtDT&X-Amz-Signature=10523926fdcf23e93203aca0cbd9e53bbe2f9e599bcb9f2426d5f5cc4fc7362f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z2VW3F%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCIixPzEchW%2Fzv2sVNyBBEPz%2BsHv5eC0FqInIHthPK2oQIgS%2FhqZeTw9LHndETw1vWA1MHxBhJaUnT%2FPCVmKC5hdsAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCGvXGwdh%2BbBOClFWSrcAyEmaBMcEwkTQ48ugcPDGr%2Bzpq6khPxSqSb2R%2BAYU1tDef8VnChYAfeeMTjP04RW8XoeRS%2FnkYOCc7%2F%2FVqT1q6Dk1Ft%2FZ0YffSH%2FxVWh2sA%2B5Lfe1IVTRm83uTdvR3Ictkpzec%2FT21vTevKuWW%2FRkMbf40tYI4UOl93Q9nopfl5PooE%2B404j8N3daEiLEJrWqL5Ew7khQuYTRiFn2OmAtdbLOnfGVF%2FpdECwmLn2TGqMQecJNwRlY782o9V8FHDiXlprSOjDPpraOSCYaXw94npVQfHV2DoVpx6En0X2jf21ZBbEnyo%2BWHRm1oKlCSjRSipRRBP9ICuDZMVpUtCjN9M0ehlRNGWIWYjlzGlyvIvzwufe5rpP0wW21tMtAW3DjxJDLlEpUlr9EcI%2F%2Fg182PZN4HyZk6XLPpDYbhZPF3c4nOSa33pg%2BoLXk2asgn23DOFgP5WL3mIWcEYa5ZhibvptX%2B38Z4v79ZvtqU%2BbHdn1hrF4H%2B1DCismGJkZeSCw1f%2FM%2FCLxHCDOuldoGcLdYuKGI83wUKmke1W6RIEtwT%2F8IEiD7EX1tiND9cnQ6mCfvFJI0eaavLo2WO2fj6aCiEaPUMHH83dz5hNPT7tmgZJ7jEmCbjJP%2Fkt64saaMKDLpMMGOqUBdZ49h7GNpAzeZkd0wuW1hTrJP8g0MUSYe3%2FsfHh01FFyd7405Sz%2B1MaX0ZSHpjSLDFs4hbpTtmLSuSjXZYV8POZIkvNRlI5WdDp%2FJV1aeC%2BfC2bIJi8Ouaqxlajw4coa%2BKTmiGokDkrbdwBvOPWcdAKrgoJXh%2FVYGu0Ge0XilWCtscGgsXBwQXimqDvDThsPvtyzTn92rmRNveP8caJ%2BXR1MrtDT&X-Amz-Signature=c9f1a2d16e380485ec46682377e240bc61fbdc64dd0926c4c5e8518ed625b807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
