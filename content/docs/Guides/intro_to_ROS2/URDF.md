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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESYFSLT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDgJwICdXyxpWFB2Zjy6doswArCkHTx7cKinsHZiN0mSAiEA6kmn6CmKBC%2FFy202sIO1JLPsnb%2FUsGlufEqVaaaY7pwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2F580rHl66VjbBytircAxDef4Ul0hyf7gSe9A9MvE3O%2BE0C5NLDMrljr0G2GBz2gG8ej%2FPNTCzPO%2FIDxbAqRteRpLNiFctmfTUtVX%2FxlCFiGVa%2FCHg2WbFnXUdA5IeQ5i2oeZXX8tSjOL2WRljtSENxgpCDu%2BZD83UczONGqhrTJAqi%2BdYj7T1RS8M17NyVfEsMP4r3hPzBmR0X64CL9aYcUlIWo91gjPQjlTEQ7a1%2FTeGAv3V8xRDuBq2VgkliaGRXomFHz7GTc%2BgViltr9TTVU%2BLFP3zpSi%2Bob4%2FTrZDnWNEwaNFF0%2FYIs8wL4gBr1tRIojjsQBKPXM0iqQ2SXwg%2BjMRCLL0h7v%2FLpYkYOp2t%2ByXWntuHLAYAP1u4wbFYAyGMGtLF1amEATfj24NR39bDfG1OZSlOku%2FzFsgYmUYxPfA3iRTm1El%2Fb8bc5uicZe8FQOSuKX91EozRpvW4cz4S2JEjRQZnVIuobnsotYZI%2BZwTIUYQJul%2BZZRidupAMKPeTc4r1pxUIpZzDWkvb2xEwllAPEfhe0Nrb%2FxNNuWNRUIv%2FRl602Ni2Q73tOPcvvkhPsOqiQjRXw1o10Uwfk0teHnl%2F9BkDIdr819RCy8oZ85Nd7NcpZVy8x4hIe%2BhW69qnHeDhlzSwwpaMNS71r0GOqUB0ykG1MmuK7sBK8Mn9abBOBOadJbOUoZnxs8RpOxeuNiUvxDl8p2ccM5dvW3WMjXii0Fnhn8OQjfu0wDpPjJ%2FBxIjz24l0UqnMg0HEXVOYbQgGKDPLuqCnvcie24JaGZnEja43kRQNRIOmTwV2aueDWQhVcAulgdKuUMebS9K7ir1EkjKeSFmJpfmGxg4xfCK7unFYaGOHcXCWMxYj%2Bmd67bojdwi&X-Amz-Signature=84e9d02ba480c2791069938f67651e19808e1b0cc6ee9853bbdede9dd8c5bf54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESYFSLT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDgJwICdXyxpWFB2Zjy6doswArCkHTx7cKinsHZiN0mSAiEA6kmn6CmKBC%2FFy202sIO1JLPsnb%2FUsGlufEqVaaaY7pwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2F580rHl66VjbBytircAxDef4Ul0hyf7gSe9A9MvE3O%2BE0C5NLDMrljr0G2GBz2gG8ej%2FPNTCzPO%2FIDxbAqRteRpLNiFctmfTUtVX%2FxlCFiGVa%2FCHg2WbFnXUdA5IeQ5i2oeZXX8tSjOL2WRljtSENxgpCDu%2BZD83UczONGqhrTJAqi%2BdYj7T1RS8M17NyVfEsMP4r3hPzBmR0X64CL9aYcUlIWo91gjPQjlTEQ7a1%2FTeGAv3V8xRDuBq2VgkliaGRXomFHz7GTc%2BgViltr9TTVU%2BLFP3zpSi%2Bob4%2FTrZDnWNEwaNFF0%2FYIs8wL4gBr1tRIojjsQBKPXM0iqQ2SXwg%2BjMRCLL0h7v%2FLpYkYOp2t%2ByXWntuHLAYAP1u4wbFYAyGMGtLF1amEATfj24NR39bDfG1OZSlOku%2FzFsgYmUYxPfA3iRTm1El%2Fb8bc5uicZe8FQOSuKX91EozRpvW4cz4S2JEjRQZnVIuobnsotYZI%2BZwTIUYQJul%2BZZRidupAMKPeTc4r1pxUIpZzDWkvb2xEwllAPEfhe0Nrb%2FxNNuWNRUIv%2FRl602Ni2Q73tOPcvvkhPsOqiQjRXw1o10Uwfk0teHnl%2F9BkDIdr819RCy8oZ85Nd7NcpZVy8x4hIe%2BhW69qnHeDhlzSwwpaMNS71r0GOqUB0ykG1MmuK7sBK8Mn9abBOBOadJbOUoZnxs8RpOxeuNiUvxDl8p2ccM5dvW3WMjXii0Fnhn8OQjfu0wDpPjJ%2FBxIjz24l0UqnMg0HEXVOYbQgGKDPLuqCnvcie24JaGZnEja43kRQNRIOmTwV2aueDWQhVcAulgdKuUMebS9K7ir1EkjKeSFmJpfmGxg4xfCK7unFYaGOHcXCWMxYj%2Bmd67bojdwi&X-Amz-Signature=260de614310c34a10636620c80ff74acba9454b6b1eae0bd071d7e071c5ba40f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
