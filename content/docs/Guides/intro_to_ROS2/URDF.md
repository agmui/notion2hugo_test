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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MR4OJKC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCWdnQbYP8kqJsQGFIs%2Bws6G2HeaFHIIa1%2BOzfMcECmVQIgPAm0sPShX%2FRSB4b2zzRt905x0D2FxO7R6opaLfo4%2FSwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMIZ9jpG7Jlm0DZnSrcAzG6RWpqdHb4Tzcx7FVwY%2FqnzLCZlFEQU4uwFMURM3OHSFZ37bhchQUJRXdqPcg2vkjYFjOIQbez47aCbycoaEUf5AhhwTyEdNvL6tOMEsRVnsvXidky6maQ0s%2FVd9%2Bvyuj%2FKbcCcBfUGYSCsqL0Ju6hKmArLt%2BmvBNmsa7xVKxz67RFn8KXHOESVNkKWbvxDEMP%2BKoyTicgHLvE9JhLSqnizLp8lYEhgRZxcImYtG1y%2BKUDd%2BDwOtRdecAIOQbULZ8vYEfbt8XI%2Bm%2BYzZRyqZryFHv04aacW%2Fhg0Dr9uBTMYMAXBXnR3SlAF49kwQ7ZfEipYBwNB4U2QTaghnbgEpz0cS4cJYbKpK9mDTc%2FFD8Me8Cvjjdn9UFzOwywhTKXHEIKg8N6Q02UOwZDgqQHi8zfgcUkJ%2FVxXaWm0ViVQ3R60da%2BvV9c6SBJFszDCpuFO5h6By6sRFqQNYn7XHb5vMczVsKeDlzG%2FfYaNdVMkHDIcne68SqxzWXJ1sgIlQUfxpcBYqfsXagr0aY%2FXXvkOVUW652iozQND7vgcl9i3lLv9qieyMdUItEW2sBWdUIb5ytwa%2FC%2B9MlO4h8o%2FY6lDJsS8Ts0eJzu04HQ18PQmLFTds0qwQlN3fSjj8BCMIb75cMGOqUB0Qoan9UQ1YFJBGS0zwZ4sHqcVBH%2BPxjYoCRqAb4%2Bg%2Fq4UKgQvQt%2BaD4rEGxhJWmPwQzbJSv7GgRTaUPgvDw3cr4qkTagQlmZI52s7shnjyESEbingUzZyelRalARTDTauIqJQwNjVRwkO%2FA1hyG6ulaRhwGSMpWwfx7%2BtdZHqSTRbVNAPJbxRTDqBK22LpSsI%2Bel6%2Bn2cmoVmGLnURQkbTnYl81r&X-Amz-Signature=4683dd1255cc921505d3c9bbeee819614c0c62315d56722269c808f10cd6e96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MR4OJKC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCWdnQbYP8kqJsQGFIs%2Bws6G2HeaFHIIa1%2BOzfMcECmVQIgPAm0sPShX%2FRSB4b2zzRt905x0D2FxO7R6opaLfo4%2FSwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMIZ9jpG7Jlm0DZnSrcAzG6RWpqdHb4Tzcx7FVwY%2FqnzLCZlFEQU4uwFMURM3OHSFZ37bhchQUJRXdqPcg2vkjYFjOIQbez47aCbycoaEUf5AhhwTyEdNvL6tOMEsRVnsvXidky6maQ0s%2FVd9%2Bvyuj%2FKbcCcBfUGYSCsqL0Ju6hKmArLt%2BmvBNmsa7xVKxz67RFn8KXHOESVNkKWbvxDEMP%2BKoyTicgHLvE9JhLSqnizLp8lYEhgRZxcImYtG1y%2BKUDd%2BDwOtRdecAIOQbULZ8vYEfbt8XI%2Bm%2BYzZRyqZryFHv04aacW%2Fhg0Dr9uBTMYMAXBXnR3SlAF49kwQ7ZfEipYBwNB4U2QTaghnbgEpz0cS4cJYbKpK9mDTc%2FFD8Me8Cvjjdn9UFzOwywhTKXHEIKg8N6Q02UOwZDgqQHi8zfgcUkJ%2FVxXaWm0ViVQ3R60da%2BvV9c6SBJFszDCpuFO5h6By6sRFqQNYn7XHb5vMczVsKeDlzG%2FfYaNdVMkHDIcne68SqxzWXJ1sgIlQUfxpcBYqfsXagr0aY%2FXXvkOVUW652iozQND7vgcl9i3lLv9qieyMdUItEW2sBWdUIb5ytwa%2FC%2B9MlO4h8o%2FY6lDJsS8Ts0eJzu04HQ18PQmLFTds0qwQlN3fSjj8BCMIb75cMGOqUB0Qoan9UQ1YFJBGS0zwZ4sHqcVBH%2BPxjYoCRqAb4%2Bg%2Fq4UKgQvQt%2BaD4rEGxhJWmPwQzbJSv7GgRTaUPgvDw3cr4qkTagQlmZI52s7shnjyESEbingUzZyelRalARTDTauIqJQwNjVRwkO%2FA1hyG6ulaRhwGSMpWwfx7%2BtdZHqSTRbVNAPJbxRTDqBK22LpSsI%2Bel6%2Bn2cmoVmGLnURQkbTnYl81r&X-Amz-Signature=4b2f11d67a52810be185772705a382456f7ee19740f645905c906f14298f7578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
