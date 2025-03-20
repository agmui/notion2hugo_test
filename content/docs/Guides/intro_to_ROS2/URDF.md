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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4ZT5UL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZeSBXkRfqus6wmqEV9inwsMyPy8%2BvvPLwd%2FulAlTJwgIhAPsNWN7KOHg5CjPrxRlY%2FgqCsVqxopCupgjAGvSbzS5UKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyJQiLbcce2kPOJnAq3ANYwqKPip6jyFjreeJXckxfHPkhvm8PR%2Bav8wfT0BcmPaDilOAqa829QTpy28hK4O1Tm0m9fyE5NowyEOtKbLFNT2sCAlFSVjaQ12RfgAd29QPSl8l8myGThiVXYXCeA%2FRgNszwwnmDfK%2B0z40dgaa4r%2FjU%2FUIQpwj34ofaBumJOQBMor%2BbLneqBjbiWLnIT%2BjLK2M%2BTD7r6K2w1zTgmZbjRPlhZsswhYZrp%2FUsVmngZH40I1P49cPL6p%2BuOhsrnzHONG0dvRwWVRw6FTUFcrmO%2BxrnDpd7CjDFmBor4Kn2RfzDikps%2BZtO2BvrdpqBEwoKX57qgCSICmYWrdJQZga8Wf74Omu6pL2njhymzQvqqlvFnWcqy%2BgOE6dUAzgz%2BWqRvAhqmrJrzUOn5GsRiVX%2BSoklwCtfFTRqY%2BN2izGaGb94Q3atFMslLgyXjibSkhufCr1nfz%2FwjnTmgWpbfW2vFOSbg82oFA%2B2dI1C2DBIjtsUm%2FyNb2Iw%2BHbQtbtDhj9uQE0yWvpVJSGR81bjkJqCTWhYbNJF0Pt%2FUOzV7KDi4DknuwU%2Be%2Fyj0JV9z70GgbRblPD%2BiStNMy777zEpspanldkqBHQTcmxUOGJVBw044ASHbWLYYTjh%2BrPQVDCA5fC%2BBjqkAdU3%2BVzZnvUdyUR3vyaaGAMeCsxGq2PATThRYUsiP3owS9YautxKzsMzdMowSWNwRZsyXR4Du8EQd2QpqCR3n%2BeXjJ%2FaThUoEQKQd5y0FJo8rLg9XI5VSwVp5iedF06OVAyn3DNZmF0%2Fl9c9QPGtT3chjU%2BOMmrCgS21JVRLIRs6hyT6T%2BwsWb1Wrbz4XYrZZBj%2FyHNMscIwppXmQ44nZoI%2FDoHf&X-Amz-Signature=c9c7617cd5fa13d90604905f52449528f09319b1b1c63da9e9fd9e8537e7aa99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4ZT5UL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZeSBXkRfqus6wmqEV9inwsMyPy8%2BvvPLwd%2FulAlTJwgIhAPsNWN7KOHg5CjPrxRlY%2FgqCsVqxopCupgjAGvSbzS5UKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyJQiLbcce2kPOJnAq3ANYwqKPip6jyFjreeJXckxfHPkhvm8PR%2Bav8wfT0BcmPaDilOAqa829QTpy28hK4O1Tm0m9fyE5NowyEOtKbLFNT2sCAlFSVjaQ12RfgAd29QPSl8l8myGThiVXYXCeA%2FRgNszwwnmDfK%2B0z40dgaa4r%2FjU%2FUIQpwj34ofaBumJOQBMor%2BbLneqBjbiWLnIT%2BjLK2M%2BTD7r6K2w1zTgmZbjRPlhZsswhYZrp%2FUsVmngZH40I1P49cPL6p%2BuOhsrnzHONG0dvRwWVRw6FTUFcrmO%2BxrnDpd7CjDFmBor4Kn2RfzDikps%2BZtO2BvrdpqBEwoKX57qgCSICmYWrdJQZga8Wf74Omu6pL2njhymzQvqqlvFnWcqy%2BgOE6dUAzgz%2BWqRvAhqmrJrzUOn5GsRiVX%2BSoklwCtfFTRqY%2BN2izGaGb94Q3atFMslLgyXjibSkhufCr1nfz%2FwjnTmgWpbfW2vFOSbg82oFA%2B2dI1C2DBIjtsUm%2FyNb2Iw%2BHbQtbtDhj9uQE0yWvpVJSGR81bjkJqCTWhYbNJF0Pt%2FUOzV7KDi4DknuwU%2Be%2Fyj0JV9z70GgbRblPD%2BiStNMy777zEpspanldkqBHQTcmxUOGJVBw044ASHbWLYYTjh%2BrPQVDCA5fC%2BBjqkAdU3%2BVzZnvUdyUR3vyaaGAMeCsxGq2PATThRYUsiP3owS9YautxKzsMzdMowSWNwRZsyXR4Du8EQd2QpqCR3n%2BeXjJ%2FaThUoEQKQd5y0FJo8rLg9XI5VSwVp5iedF06OVAyn3DNZmF0%2Fl9c9QPGtT3chjU%2BOMmrCgS21JVRLIRs6hyT6T%2BwsWb1Wrbz4XYrZZBj%2FyHNMscIwppXmQ44nZoI%2FDoHf&X-Amz-Signature=25603fd9f6a444422311ae0c59b3512b91369279afddcf4748a2be64e29b889c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
