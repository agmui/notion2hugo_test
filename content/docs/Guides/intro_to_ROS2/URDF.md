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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMJIALA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDf8PXkyTCmJRLVgw7JWDkOe%2BBGhIhvv5JjWktwcNi4kwIhAO%2FlJVyLWbVDsIM9fla3803sneYawRyCqgM4liTVki4nKv8DCBMQABoMNjM3NDIzMTgzODA1Igy13rfar3KWQB%2BwiSMq3AOaijD9R0Tl7C5pfwITzHvY6yUWTbvPDwRDJOMy4cA84V1ERha%2FoZW4t71yI%2B%2BAD04BahY0O22t%2BM%2Bm1k3mJoCsn2u9dyz7LfqSbVfGAj52frnJOUW%2Fs4gBafrgUSa9aa%2FIVlVcTL4d5XacsfdPIrBCtPLAk0r07PKK1lGEFDxziD2t68YlD%2Fyt94uRvIcQpmyxNk2LBAdmhQanhYJZRlDErlmC2wR5T2BqwgU05r42ZFL7rS0EHXTclwZkAaJTgho3BWUeuV7i3O1vhZwDKwDymdBK%2BrebpyBhnO33fZ40iFuciJ%2BZ6FAQCF%2BKPM0ivK1WgzjZEtwESvGS%2Fuj8iXTafxkQ5Wv3nuic4WTH4lpgzUyqHCgwt01Qhc6XQUWrfqqeDJRBMEMtBPOgM00BVFfIy5n9UIGK4s0i%2BDOVZQ%2FquEuEDnBFUjBeEtQm%2BwCqzMN7eMkEeCPUs0sxB3vWzfOlkxJsLO2Yq%2Bt%2F3F1Q4WArg7tc4HxZpeftv98NLq57B5YlwS%2BYTdu6McUkJqCo99nctfLWWXmPiZOrJdBj6iEtGuP83OABc28IHiUpBc7MIOrpGF0S4bnbvmlBrVzUALCcPtdTj2ak9DoOcywYCrjlPY0HFqlGOMRxV9Za6zDHscbBBjqkATZpOjCJ6tEbO5FCqCSxPeFPusxQWkF8l2lmkiQcjSHVvsYIIjHxLWsq0J0wTkJKowtQAadGPeECf6%2BXs7%2BpAKx4uylMMLJL3sK0QkTKplwdnV378ugT2%2FH4N5cdp1u5527ORv9sebWyLiWml6FWF0AFHIXT32WRaP42f790EXjIrtvtQHtIY4k%2BEBZXZyR1zMaxTvQ0i3x15J81pMnkog3kgaA4&X-Amz-Signature=3d5ff36d4f636e8f96590f8d0365865da6565536a175fe309a0667c9d05d2180&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMJIALA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDf8PXkyTCmJRLVgw7JWDkOe%2BBGhIhvv5JjWktwcNi4kwIhAO%2FlJVyLWbVDsIM9fla3803sneYawRyCqgM4liTVki4nKv8DCBMQABoMNjM3NDIzMTgzODA1Igy13rfar3KWQB%2BwiSMq3AOaijD9R0Tl7C5pfwITzHvY6yUWTbvPDwRDJOMy4cA84V1ERha%2FoZW4t71yI%2B%2BAD04BahY0O22t%2BM%2Bm1k3mJoCsn2u9dyz7LfqSbVfGAj52frnJOUW%2Fs4gBafrgUSa9aa%2FIVlVcTL4d5XacsfdPIrBCtPLAk0r07PKK1lGEFDxziD2t68YlD%2Fyt94uRvIcQpmyxNk2LBAdmhQanhYJZRlDErlmC2wR5T2BqwgU05r42ZFL7rS0EHXTclwZkAaJTgho3BWUeuV7i3O1vhZwDKwDymdBK%2BrebpyBhnO33fZ40iFuciJ%2BZ6FAQCF%2BKPM0ivK1WgzjZEtwESvGS%2Fuj8iXTafxkQ5Wv3nuic4WTH4lpgzUyqHCgwt01Qhc6XQUWrfqqeDJRBMEMtBPOgM00BVFfIy5n9UIGK4s0i%2BDOVZQ%2FquEuEDnBFUjBeEtQm%2BwCqzMN7eMkEeCPUs0sxB3vWzfOlkxJsLO2Yq%2Bt%2F3F1Q4WArg7tc4HxZpeftv98NLq57B5YlwS%2BYTdu6McUkJqCo99nctfLWWXmPiZOrJdBj6iEtGuP83OABc28IHiUpBc7MIOrpGF0S4bnbvmlBrVzUALCcPtdTj2ak9DoOcywYCrjlPY0HFqlGOMRxV9Za6zDHscbBBjqkATZpOjCJ6tEbO5FCqCSxPeFPusxQWkF8l2lmkiQcjSHVvsYIIjHxLWsq0J0wTkJKowtQAadGPeECf6%2BXs7%2BpAKx4uylMMLJL3sK0QkTKplwdnV378ugT2%2FH4N5cdp1u5527ORv9sebWyLiWml6FWF0AFHIXT32WRaP42f790EXjIrtvtQHtIY4k%2BEBZXZyR1zMaxTvQ0i3x15J81pMnkog3kgaA4&X-Amz-Signature=723647a22ecffb33b261c0ae91a846d07bd01e411cc946e521ebed27b51f4d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
