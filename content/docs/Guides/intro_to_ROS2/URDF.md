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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIY2OPP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFbSjNL7aVu%2B%2BbrLA8%2BCmms91baI3bqMWOMAHbPQCFvaAiEAj50uoziW51nTscgbmVWDDrSxRIy130WxQTmMOa5CPpgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHAwsP5C8562wPOxlSrcAwxfNZEUVC%2F8OxMbyiDTq5rb5%2FPVaZik%2BumsuN17H5iC5%2BQCCFda2GD%2Bdq9z1Qwpi3k9Vv%2BPcakTlWUGi3mSfiqCM4u9R%2F3mY%2BzJ9EiYz7N%2FQAdYeI7bWBXmUdNAMf5gtKrt%2BW56rN41o9xbPvZLWBGWk9e9G966%2BJYSaTlEkn3Q8031Z03ibEkQ1t%2FS9sOh1NPMBaGqP%2BWPo6hDBdbmv%2FMfiHgT9MJEZSLm8Y7P%2F%2BdbXSMlkNv%2Fngebf%2FXWcrLIs1C4F%2BXbzshhBS9B6MlMBa%2BdnviO46tPf6tgd5avRvqK3SuFLE4z7cAAPzgYRV0OX6T2YrJL9smHbxPrWm2B6FbEv55D%2BRkREGLNc7XF5fSP66iMvrkWExw3LpTB9OpMUxkh7jXv2iglhnOVJQg1Ry1AxAesRsC6uEFKDUTmj7ymjGrGS75tVGCj55CROKizoK3Eg2e2feYFyp9xxDv9KJMoC9MwKysN9TbB6KLO80kpimUbFAMKVoxztopHUErHb45FEAlJpX1%2F71pH%2FLDuWsCDXeLVmeOwaQLhjxK7mXP8K%2FP9ejYEjlBM%2BTadrWl7oYrNWI1X8w9RTOm26ZYi5VUwngUY2TgpfszbECEEvWbznRbc2hONBjtCc3siMOmxwL0GOqUBOeRgx%2Fa2An9w65z1obMFhJc1BpeMoYioX7nBBTJ2Y%2FSmqbi6u9d%2FJSXYywYc3si4z7soF%2FRci0d5SGP1%2BepcTcv3LNyIvy936EpaVk8lGI6T%2BsDKrFYGfH9NRqP6K20%2BPqXdIHBym0iplaSK8pPbm%2FnG5v6Vhz0MA84zkg9UcnYSinlA9IqGimZB4YjI7kz1ycg%2Fvcppuft4HO8Y604dUI8eV777&X-Amz-Signature=45c7107d46cf5e902232231e0437aea5e7efb7d879520fa7903b27e15d183fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIY2OPP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFbSjNL7aVu%2B%2BbrLA8%2BCmms91baI3bqMWOMAHbPQCFvaAiEAj50uoziW51nTscgbmVWDDrSxRIy130WxQTmMOa5CPpgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHAwsP5C8562wPOxlSrcAwxfNZEUVC%2F8OxMbyiDTq5rb5%2FPVaZik%2BumsuN17H5iC5%2BQCCFda2GD%2Bdq9z1Qwpi3k9Vv%2BPcakTlWUGi3mSfiqCM4u9R%2F3mY%2BzJ9EiYz7N%2FQAdYeI7bWBXmUdNAMf5gtKrt%2BW56rN41o9xbPvZLWBGWk9e9G966%2BJYSaTlEkn3Q8031Z03ibEkQ1t%2FS9sOh1NPMBaGqP%2BWPo6hDBdbmv%2FMfiHgT9MJEZSLm8Y7P%2F%2BdbXSMlkNv%2Fngebf%2FXWcrLIs1C4F%2BXbzshhBS9B6MlMBa%2BdnviO46tPf6tgd5avRvqK3SuFLE4z7cAAPzgYRV0OX6T2YrJL9smHbxPrWm2B6FbEv55D%2BRkREGLNc7XF5fSP66iMvrkWExw3LpTB9OpMUxkh7jXv2iglhnOVJQg1Ry1AxAesRsC6uEFKDUTmj7ymjGrGS75tVGCj55CROKizoK3Eg2e2feYFyp9xxDv9KJMoC9MwKysN9TbB6KLO80kpimUbFAMKVoxztopHUErHb45FEAlJpX1%2F71pH%2FLDuWsCDXeLVmeOwaQLhjxK7mXP8K%2FP9ejYEjlBM%2BTadrWl7oYrNWI1X8w9RTOm26ZYi5VUwngUY2TgpfszbECEEvWbznRbc2hONBjtCc3siMOmxwL0GOqUBOeRgx%2Fa2An9w65z1obMFhJc1BpeMoYioX7nBBTJ2Y%2FSmqbi6u9d%2FJSXYywYc3si4z7soF%2FRci0d5SGP1%2BepcTcv3LNyIvy936EpaVk8lGI6T%2BsDKrFYGfH9NRqP6K20%2BPqXdIHBym0iplaSK8pPbm%2FnG5v6Vhz0MA84zkg9UcnYSinlA9IqGimZB4YjI7kz1ycg%2Fvcppuft4HO8Y604dUI8eV777&X-Amz-Signature=65b1fa987410605284f2bcf761307bb21d5c15eedb6533f94242eea5f06983a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
