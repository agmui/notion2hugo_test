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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUAWO3C%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSFi0FVemTuCWk9wdv4fmsQts4SD%2FBg3OZqqgVXdjofAiARG835EUePL3h1scJowsWN1XcU654ZiGGPsFVnfRVtgCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMF%2Fub3dYgPW9nFBQaKtwD%2B56Maa%2BxAKIApxtVWiNXAqIYqnloerhVdIb0iC28bUVhgkYst1HviUbIYHmfXjV0Vrv1DW%2BTiDWc6y0GLS24mrWcdmt7MUVXNnfH3%2Flt51OmZpRF9YBPxPGTtikN457pH%2F8k4v1UqySe2V8Adh1zeMMEYGjqr64zOqyBkExKnCAxMRDXk%2Fvu0IDKN5r9na2E3sSLxBlnfd73VQixxIQX1LnsGRLBwcq2izb6KKbNS7DVB0lJyBoVd0QVU3ZAIh8eiJSrtHHdYZ7%2B%2B%2F0ZyEBdAGn72KhzrphHm0QgI%2FYVRWE0LhfbJ8WvA6dkWaaHeMR%2BaVYTO1wZbob4sEI6fo7ccL%2BSECT0qncXxxsNOvu4dnNZAtFSM98XvIvQrx%2Bo0nL2RMC%2B3CkPWbLH%2FO%2FWTW46oHivuVEjwODZexQ1WT6Ua7aj1XCTnWmtL9jqUf%2Bn1%2BrrtLpJ6p90h5GdgtYyfPufFxf3vavFGcmvE4o83foEhFEu%2F8gDPaL588rkG1sk%2BusrUJ%2FUvsz0%2BkuXQDd%2B9AqnxuKkUGQzlTYbowagThfARk8hlNd8UfJksyVQgOXUmmQXh9XmC3qqYx%2FlbVX3TkZRsFzwWfk4osW94qUGWtPxhZqzsc%2BeWsJBRaw%2BsU0w5LPpwAY6pgE0Gf3oZXPwEKN6Nfk8aLLCrPqfCyuCKboz0vNus9sGlkQcmGuHbomoaycLVSvm543Aqfp%2By133a%2BA0ldu0RMYQYOtlSEt2qcLbSzJhWwYN5C54XoEZSqNRgR3lnRe%2BRCL43nxrRf5cp%2BtoeFwDCg29eOPekmTrHF1AwcC0fWb9wLVC7J4SgnurGIJj2ukfUDQ1XYtQmy51AiwdEYl2RiMJlIaV2sNZ&X-Amz-Signature=55ed6a9f5601627f3935c019553bba3948a1b82ce0f8148b63865de003a310b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUAWO3C%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSFi0FVemTuCWk9wdv4fmsQts4SD%2FBg3OZqqgVXdjofAiARG835EUePL3h1scJowsWN1XcU654ZiGGPsFVnfRVtgCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMF%2Fub3dYgPW9nFBQaKtwD%2B56Maa%2BxAKIApxtVWiNXAqIYqnloerhVdIb0iC28bUVhgkYst1HviUbIYHmfXjV0Vrv1DW%2BTiDWc6y0GLS24mrWcdmt7MUVXNnfH3%2Flt51OmZpRF9YBPxPGTtikN457pH%2F8k4v1UqySe2V8Adh1zeMMEYGjqr64zOqyBkExKnCAxMRDXk%2Fvu0IDKN5r9na2E3sSLxBlnfd73VQixxIQX1LnsGRLBwcq2izb6KKbNS7DVB0lJyBoVd0QVU3ZAIh8eiJSrtHHdYZ7%2B%2B%2F0ZyEBdAGn72KhzrphHm0QgI%2FYVRWE0LhfbJ8WvA6dkWaaHeMR%2BaVYTO1wZbob4sEI6fo7ccL%2BSECT0qncXxxsNOvu4dnNZAtFSM98XvIvQrx%2Bo0nL2RMC%2B3CkPWbLH%2FO%2FWTW46oHivuVEjwODZexQ1WT6Ua7aj1XCTnWmtL9jqUf%2Bn1%2BrrtLpJ6p90h5GdgtYyfPufFxf3vavFGcmvE4o83foEhFEu%2F8gDPaL588rkG1sk%2BusrUJ%2FUvsz0%2BkuXQDd%2B9AqnxuKkUGQzlTYbowagThfARk8hlNd8UfJksyVQgOXUmmQXh9XmC3qqYx%2FlbVX3TkZRsFzwWfk4osW94qUGWtPxhZqzsc%2BeWsJBRaw%2BsU0w5LPpwAY6pgE0Gf3oZXPwEKN6Nfk8aLLCrPqfCyuCKboz0vNus9sGlkQcmGuHbomoaycLVSvm543Aqfp%2By133a%2BA0ldu0RMYQYOtlSEt2qcLbSzJhWwYN5C54XoEZSqNRgR3lnRe%2BRCL43nxrRf5cp%2BtoeFwDCg29eOPekmTrHF1AwcC0fWb9wLVC7J4SgnurGIJj2ukfUDQ1XYtQmy51AiwdEYl2RiMJlIaV2sNZ&X-Amz-Signature=4e0ef3e91fd855c9c60492a0ee6bb7cf6f3c4b54956f1b9954a0066f0671bd81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
