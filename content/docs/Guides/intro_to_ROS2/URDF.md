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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQJRQ4T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcUJGTl0U9EGXjWFjqLpEQH8RpvPWGa%2FYukWwIas3k1wIgDRtdIB1AcvBcOeyTDkevD01VtAq3P%2B%2FBi0Bgvkb6gWgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsoxJp06qeTp9kVxSrcA%2FWr7d1sZTDkMz%2F9gClNAS50tr1T%2FNEVD6WeO7bAXR%2Bx7FmLGnv83iM0mhhEVIRLMKsI0g50x7xw2abnO7FZnPSpyURfSLdcEIrwLOaizdPKBuIbM7wEMgqwmzBRhos9CDPOZUhvrN0DcItZb3PbRI8DsJG%2BuLM4B6dkSpRic74mr77voYWVUFxfJ6%2FyQNzaTTWz1dO4Lg3WIq4du4BYj6v31N%2BW5g2sW0VB3g3yL8Fl%2B4eTrspxN%2BH21jZh3GQioWBE4i1DwiZOKa2mVoyGEvV8XT83fU601y0KSZ6VdmkXhaJaMdicA%2BuaDIDu%2BNsw6RQICao3l2OPmk67YxMsum0fnRv10IBcTO%2FTmicquc3jIJsroqy1AqLetSbn8pojs%2BvYGm0p3G6LWmdLzLOdRbU1O%2BekYZl5LUpBnbxsYTpCRIEnLEOFIDDWbASbc1C1VLxfyeC3iFtJBf4UB0z4h3S00huBc0B6ZwTo6Dko5UsxFa5NHGiiBaqh5syreg7BMMRB%2B9sF66J6Lb6XU%2F6nKj4W2Ny4ezC83ZkKFI6VUMqyrTHmCPrTiD%2FJV8O22F4BzWC2BV0U3dUHC5gK5guhZ15gXbJSfCF%2BL8KuNk0OSQ7UdWnPmdKqRyvNQREZMLXm%2F7wGOqUB0nFnS4g%2FEZQLOAZltCGAPZdDWZgPOgfoDIQN37%2BAFYUKiNcyTQ2ffQsx3X4wJC4zFsQwCd088GnsHFFEdoPdvYJAvLv%2B%2ByhvnYcv5MJCdKpElsIs9%2BPLP%2F0cfgPT1R3H%2FXLDbOSaXypCMlqk8R2kWvfHsyK5oisAidPNiArh2gJp%2F1qiowm075lNU5CngeGAvOlJgiiVUmksQC50VzYcTiWU0VrH&X-Amz-Signature=059588556846a475d83943eeb16b57e137a71b289c5cfe5c1cc86fbf3d577272&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQJRQ4T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcUJGTl0U9EGXjWFjqLpEQH8RpvPWGa%2FYukWwIas3k1wIgDRtdIB1AcvBcOeyTDkevD01VtAq3P%2B%2FBi0Bgvkb6gWgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsoxJp06qeTp9kVxSrcA%2FWr7d1sZTDkMz%2F9gClNAS50tr1T%2FNEVD6WeO7bAXR%2Bx7FmLGnv83iM0mhhEVIRLMKsI0g50x7xw2abnO7FZnPSpyURfSLdcEIrwLOaizdPKBuIbM7wEMgqwmzBRhos9CDPOZUhvrN0DcItZb3PbRI8DsJG%2BuLM4B6dkSpRic74mr77voYWVUFxfJ6%2FyQNzaTTWz1dO4Lg3WIq4du4BYj6v31N%2BW5g2sW0VB3g3yL8Fl%2B4eTrspxN%2BH21jZh3GQioWBE4i1DwiZOKa2mVoyGEvV8XT83fU601y0KSZ6VdmkXhaJaMdicA%2BuaDIDu%2BNsw6RQICao3l2OPmk67YxMsum0fnRv10IBcTO%2FTmicquc3jIJsroqy1AqLetSbn8pojs%2BvYGm0p3G6LWmdLzLOdRbU1O%2BekYZl5LUpBnbxsYTpCRIEnLEOFIDDWbASbc1C1VLxfyeC3iFtJBf4UB0z4h3S00huBc0B6ZwTo6Dko5UsxFa5NHGiiBaqh5syreg7BMMRB%2B9sF66J6Lb6XU%2F6nKj4W2Ny4ezC83ZkKFI6VUMqyrTHmCPrTiD%2FJV8O22F4BzWC2BV0U3dUHC5gK5guhZ15gXbJSfCF%2BL8KuNk0OSQ7UdWnPmdKqRyvNQREZMLXm%2F7wGOqUB0nFnS4g%2FEZQLOAZltCGAPZdDWZgPOgfoDIQN37%2BAFYUKiNcyTQ2ffQsx3X4wJC4zFsQwCd088GnsHFFEdoPdvYJAvLv%2B%2ByhvnYcv5MJCdKpElsIs9%2BPLP%2F0cfgPT1R3H%2FXLDbOSaXypCMlqk8R2kWvfHsyK5oisAidPNiArh2gJp%2F1qiowm075lNU5CngeGAvOlJgiiVUmksQC50VzYcTiWU0VrH&X-Amz-Signature=2b8404fb427da8d2de02e335075d596fcfc0fb7c0841d1ca1d276dbe8f4e360a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
