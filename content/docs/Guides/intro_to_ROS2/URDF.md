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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGSRLFJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuv529zqhnphbEk2EbyQrARAW90HJMQg5Ud%2FLeFfljpAIgdSARptvMG8HdB5HyKb%2F38%2F7hI%2BhgAzCG1FjIFG1udtUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxoKyrUfmxzuycDxyrcAzp%2ByRrPevSrNFEpRyft1%2FUa8nzH8HhXQ1mYZk1gboMlBKLYSxVgUmlKcQKqGLPixJ3sRySHGG0zvta38zabeCIegXn1L86rzykc8UxEH5JKBE3ijtP6WMldp1a05P8QVDvDFJuyGlUjCVJH4vZiky4yOfTBrF1%2Fq776BPNnU%2B%2BS0jueAHd5D6GKRXyhL28aIUexZrtj42l4tIqTsnKaWwOJ1WmWTnLPWaV97kFWLgA4eMkc3RH3fVt3FGZuVVMdVGYu8HI099BgJeMnWzCYSC1V6pyCyVkCjB8UcCXhZJlJFBW38BSjmaJVNL3h7MsER480CAT5pB2bNJqez2aIc7MebyK5Vl3a%2FQxeTgBD549fiRiJEkgA50nP7VE2NObsQsbIm9FHdYnx29npWxm%2FOhe9UFA18fM4ik0By2J2sgsFmB10zVc117Mb4tBzMyBs1KNHVbWLamotgD6HNIxEJQAmsTaHHcPi7JTPVcNQDJBwpior8CFhUdfJoljgbvI3sAdJweh%2FrAdOnQVZL3n91tLEB2cpSFCy3S1E1HN4k1jhdxsfgxaWmMCDDO2HIBevjLoNLBEjo3CA6zCSaBEyqbwwUNziLiPdtRrAo7GBJ9jH2zGBDMWbvIYX%2B0QQMPve0MIGOqUBB%2BjrIegFXcwCmJrHQfUYhNuIuyso0VHiHEbgCumCQuicLf0mCRIoDfAjGKLoszrht%2FYHDofeBgG4cdWfv%2BhrzdF5BDpL6eg3CLQwxxuSuL4D%2F7mVG2dxiZxGzfAtE2a1UGdLJtMkMQ%2FmSXV4gG4BOQyOgmRqoiHwbJkIS3LQEXWP3BwopGe%2BLEL740FEE%2Fztf%2B772MV5M7poKM1ey9RkxSMFm9Ok&X-Amz-Signature=022f7a6abe527fb0f76c648c9c1c0ecd2252b3b0755f5f1ebcdbe587d25159a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGSRLFJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuv529zqhnphbEk2EbyQrARAW90HJMQg5Ud%2FLeFfljpAIgdSARptvMG8HdB5HyKb%2F38%2F7hI%2BhgAzCG1FjIFG1udtUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxoKyrUfmxzuycDxyrcAzp%2ByRrPevSrNFEpRyft1%2FUa8nzH8HhXQ1mYZk1gboMlBKLYSxVgUmlKcQKqGLPixJ3sRySHGG0zvta38zabeCIegXn1L86rzykc8UxEH5JKBE3ijtP6WMldp1a05P8QVDvDFJuyGlUjCVJH4vZiky4yOfTBrF1%2Fq776BPNnU%2B%2BS0jueAHd5D6GKRXyhL28aIUexZrtj42l4tIqTsnKaWwOJ1WmWTnLPWaV97kFWLgA4eMkc3RH3fVt3FGZuVVMdVGYu8HI099BgJeMnWzCYSC1V6pyCyVkCjB8UcCXhZJlJFBW38BSjmaJVNL3h7MsER480CAT5pB2bNJqez2aIc7MebyK5Vl3a%2FQxeTgBD549fiRiJEkgA50nP7VE2NObsQsbIm9FHdYnx29npWxm%2FOhe9UFA18fM4ik0By2J2sgsFmB10zVc117Mb4tBzMyBs1KNHVbWLamotgD6HNIxEJQAmsTaHHcPi7JTPVcNQDJBwpior8CFhUdfJoljgbvI3sAdJweh%2FrAdOnQVZL3n91tLEB2cpSFCy3S1E1HN4k1jhdxsfgxaWmMCDDO2HIBevjLoNLBEjo3CA6zCSaBEyqbwwUNziLiPdtRrAo7GBJ9jH2zGBDMWbvIYX%2B0QQMPve0MIGOqUBB%2BjrIegFXcwCmJrHQfUYhNuIuyso0VHiHEbgCumCQuicLf0mCRIoDfAjGKLoszrht%2FYHDofeBgG4cdWfv%2BhrzdF5BDpL6eg3CLQwxxuSuL4D%2F7mVG2dxiZxGzfAtE2a1UGdLJtMkMQ%2FmSXV4gG4BOQyOgmRqoiHwbJkIS3LQEXWP3BwopGe%2BLEL740FEE%2Fztf%2B772MV5M7poKM1ey9RkxSMFm9Ok&X-Amz-Signature=cbdc1b77f43b2fb55f911b4f11697de2920f6079378251c78ca93731016f2439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
