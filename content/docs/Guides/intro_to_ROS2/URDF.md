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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWJPQOQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgeD5KyhofWcJh5QUMEQstMCpdEBo0TP%2B6bRDTGE6JkAiEA1V1c9fmC17D62dAb3xKAWRjDxxIrHk8XkV%2BYOBw5U%2FUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK5kab2BUXCJaClBdCrcA%2F6%2BTSguVGY7D%2FIu6hiJ29A%2Fv8w355TROE0EgkNzP36o0wuLlhF0Wj3YbhboGK%2FcAzrC%2BbjHiydUpqhDn8JtLXHwbTyXIjktTbkvMu2wjrhcNcrEISYE%2BI%2FqKeeKAW4F6h4CULI9YMfu6qLyApCCjKEpADT41Dnn5K8naKQt04PB%2B7ltV%2FjJOHMOkAu34bvtyUCba4dFB3lbesxG%2Bh6TrbPAtkjb8y59vwtdn3CZFecMdlraPRvSWNWBMCbqw7qW%2FgGUTBsUzrIhuyxhraiIHKqkgmO2T6JpiXYSCpgxiqMu5q%2BCjJ6i68Cxf5id5t30WmiTb%2F0P8I73AGjnUAS0rei%2BdSEcdFKsHZoFV7h4vrODQy27xrq3NVY1fhvLHWoP7FegWvrVM1H3lZ0X%2Bgk1yaCwKzTGokdmP8GaiqPozlbXyW8eV3LAAHtsMZDhk1RJ%2B5%2BinN7l4BpZCfISdxT8e6WtHjcliI6BDcAaB3My%2BCxryEcIqrrQCdmcbc3%2BrrHklMphr5g3lH96TIEL2j0s8mqpJYCs3hFZdLrAjtD%2F%2BignyWNY2e0n1GecE7uD%2F3AnZ13MwoyZCeVvtiBl41WeRUdi3DtRQVU93gjOrjA7zobRDPBNGbEZdnSfaNyZMPeV7b0GOqUBE0MQJC%2BrBDpdXmcKZ%2F70Of4z4tjb%2FCP4Kric%2BljyNjKEkJN1b7716qFDMaXrasmKZrGbe6fxE9%2FjRlxGWJrHFoErBcPfxXEfnJ5BBWK5UPkdmv3339r708n6vzzpU%2BKwqOmF11xrBkupbS%2BkPZZq8qgyIBZM76yKvZ9xCLoiyx7nTIXPuqUc%2BKvphbZuVGe775jaa8oJY2wDAn%2FURjkSii7YJ7Oh&X-Amz-Signature=0c0b6f16164ddbf879b721c005fb558b7a69f4052ce9a6fb34501f6455d35332&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWJPQOQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgeD5KyhofWcJh5QUMEQstMCpdEBo0TP%2B6bRDTGE6JkAiEA1V1c9fmC17D62dAb3xKAWRjDxxIrHk8XkV%2BYOBw5U%2FUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK5kab2BUXCJaClBdCrcA%2F6%2BTSguVGY7D%2FIu6hiJ29A%2Fv8w355TROE0EgkNzP36o0wuLlhF0Wj3YbhboGK%2FcAzrC%2BbjHiydUpqhDn8JtLXHwbTyXIjktTbkvMu2wjrhcNcrEISYE%2BI%2FqKeeKAW4F6h4CULI9YMfu6qLyApCCjKEpADT41Dnn5K8naKQt04PB%2B7ltV%2FjJOHMOkAu34bvtyUCba4dFB3lbesxG%2Bh6TrbPAtkjb8y59vwtdn3CZFecMdlraPRvSWNWBMCbqw7qW%2FgGUTBsUzrIhuyxhraiIHKqkgmO2T6JpiXYSCpgxiqMu5q%2BCjJ6i68Cxf5id5t30WmiTb%2F0P8I73AGjnUAS0rei%2BdSEcdFKsHZoFV7h4vrODQy27xrq3NVY1fhvLHWoP7FegWvrVM1H3lZ0X%2Bgk1yaCwKzTGokdmP8GaiqPozlbXyW8eV3LAAHtsMZDhk1RJ%2B5%2BinN7l4BpZCfISdxT8e6WtHjcliI6BDcAaB3My%2BCxryEcIqrrQCdmcbc3%2BrrHklMphr5g3lH96TIEL2j0s8mqpJYCs3hFZdLrAjtD%2F%2BignyWNY2e0n1GecE7uD%2F3AnZ13MwoyZCeVvtiBl41WeRUdi3DtRQVU93gjOrjA7zobRDPBNGbEZdnSfaNyZMPeV7b0GOqUBE0MQJC%2BrBDpdXmcKZ%2F70Of4z4tjb%2FCP4Kric%2BljyNjKEkJN1b7716qFDMaXrasmKZrGbe6fxE9%2FjRlxGWJrHFoErBcPfxXEfnJ5BBWK5UPkdmv3339r708n6vzzpU%2BKwqOmF11xrBkupbS%2BkPZZq8qgyIBZM76yKvZ9xCLoiyx7nTIXPuqUc%2BKvphbZuVGe775jaa8oJY2wDAn%2FURjkSii7YJ7Oh&X-Amz-Signature=50e6046a766aeb4a7f1234deab2a428a2e101a6a2746e63ef91c735c5c892e97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
