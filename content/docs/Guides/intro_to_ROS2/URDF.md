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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUEQ4S6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVOWoh28ShOyDPDiKQvWOycniJ0qi2vZ8jAh%2F1ulLuyAiEA2UBaOriMIRTYXq3rSNpbNVNK6S%2B5ll7KCDrS%2BmZ2ATkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHU8Z1pSef8mF7l6ircA2EXSJNhsl3a8Skhh2v%2F25t7kWEBEEvPUpBwc%2BP2hsrCt1Wc9wY8bBxxPBT3qBr8IlKMejSp%2FFAgs4IfuGyu3r%2FIck7eUtt9A8owhDLndrt9RqDyPnKga6oZ49xFpOm1PKsGmPyaSst1XD%2Bq5BhfbFQwLqS1uvaELhzyojX6%2FLzQ7mm0jcbkR7C7%2FrUtFl%2FUU%2BJQo1DpK5SaZlsHFRIT1%2BpWHiY1sQ5jFWYHD1x78v5fPJ%2BKRAhYt6V8oRd6RtTTHwQLIPRlR8DU8jxVMsSKDUzoksexn%2FYTzxeGgDU7ka7s0UuBM%2BQHyQku3cPDb2N9Eazy5FWbfrP2UzZ5uR7U1isXwVUc8XPpB6%2BsvBXmY8q7K%2BbvaFhYiyKrbQfcx6KSTNFTBivqLEktdAeIPdaB11UZbjEer7KIz%2BiNTcRPw6Q1J0dxxOUqELILqbrDP7yHpJt760%2BqUVubLWKVfE%2BisWtUHm1GisAepjriVjdwLTzjp67d0HaLJyoFEMReiggwpTOShRbMeIKcOhlMTiyeKBPtkCUjhfQaJ2S3DToMhu4hN1j2lvr5yKE%2Bu9vXjYx9LPxcKLZDW2UWPmfqgCQD0e0ndharolKSshH4Ob8oomBA9ESkv6TlGN2PHZAZMNawgr8GOqUBm%2F5w3dkgf3LsbwCjMYeVPPBm%2FkilSiNcAvkRy9mxE4D4BW38%2BnngzuiiMJ2ZhhCfyiVtMsptKBy3DDSY8dGlEcEGQHoPeDcmFxFRbMgYtqQYpmWpyYXznWnjVHuRlosMk5mOOdddV17XbbvJU6W4BXCz%2FguTPPFCLJzY0fjTRroAm78t59GleeXdAEx%2BC9O%2FCyUb45zYEzB84E5LJNiyjYy65Ks6&X-Amz-Signature=6ba563fd05c32d7d8f3a745b18f898e152fff1bdafcbc1fa5df4760e54bff39e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUEQ4S6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVOWoh28ShOyDPDiKQvWOycniJ0qi2vZ8jAh%2F1ulLuyAiEA2UBaOriMIRTYXq3rSNpbNVNK6S%2B5ll7KCDrS%2BmZ2ATkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHU8Z1pSef8mF7l6ircA2EXSJNhsl3a8Skhh2v%2F25t7kWEBEEvPUpBwc%2BP2hsrCt1Wc9wY8bBxxPBT3qBr8IlKMejSp%2FFAgs4IfuGyu3r%2FIck7eUtt9A8owhDLndrt9RqDyPnKga6oZ49xFpOm1PKsGmPyaSst1XD%2Bq5BhfbFQwLqS1uvaELhzyojX6%2FLzQ7mm0jcbkR7C7%2FrUtFl%2FUU%2BJQo1DpK5SaZlsHFRIT1%2BpWHiY1sQ5jFWYHD1x78v5fPJ%2BKRAhYt6V8oRd6RtTTHwQLIPRlR8DU8jxVMsSKDUzoksexn%2FYTzxeGgDU7ka7s0UuBM%2BQHyQku3cPDb2N9Eazy5FWbfrP2UzZ5uR7U1isXwVUc8XPpB6%2BsvBXmY8q7K%2BbvaFhYiyKrbQfcx6KSTNFTBivqLEktdAeIPdaB11UZbjEer7KIz%2BiNTcRPw6Q1J0dxxOUqELILqbrDP7yHpJt760%2BqUVubLWKVfE%2BisWtUHm1GisAepjriVjdwLTzjp67d0HaLJyoFEMReiggwpTOShRbMeIKcOhlMTiyeKBPtkCUjhfQaJ2S3DToMhu4hN1j2lvr5yKE%2Bu9vXjYx9LPxcKLZDW2UWPmfqgCQD0e0ndharolKSshH4Ob8oomBA9ESkv6TlGN2PHZAZMNawgr8GOqUBm%2F5w3dkgf3LsbwCjMYeVPPBm%2FkilSiNcAvkRy9mxE4D4BW38%2BnngzuiiMJ2ZhhCfyiVtMsptKBy3DDSY8dGlEcEGQHoPeDcmFxFRbMgYtqQYpmWpyYXznWnjVHuRlosMk5mOOdddV17XbbvJU6W4BXCz%2FguTPPFCLJzY0fjTRroAm78t59GleeXdAEx%2BC9O%2FCyUb45zYEzB84E5LJNiyjYy65Ks6&X-Amz-Signature=4cc8554d63831ecadfbaf504dc1f1cc8b7346d7aa1d647319fb8595f657fab61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
