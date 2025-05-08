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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGCPYUE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnvM8URrA%2FxIiQwm%2BlriAaEfyG55B6zEQFaNx3yXuhYAiEApP9YEeGLVGtPzra7a1h8Y4%2FWp2WsQoxFhWnTQp71PLsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEIYmD29CJOpRL%2BnyrcA%2FB5CvhzaqDW8q4I%2FcNYvWVenZQLCkhh0oUn%2Fx4JqDHRSG%2FoAUn19PqP8s0D%2FTVMXG%2Fi3RFcW6Zl4GAi5YDDiuWT%2BopE0dWC%2FVqWyQ0R4msZpGiCx9p0mMnuW%2FEzuGK7qzjSGzmlcl%2FUqQFqT0euidEi0LFcd2%2FmpyfFHObtNP%2BRy3EC3Ee3tt9TZylIfGvlY1rJpb9k8Dh5HfIWLkgwkG3xdHkm71I0yK7pV15chINMEX0rtCRFbrix3XtNL%2BI%2F%2BtHj6NlvXCeHn9r8GN93ibU4urlcQrRDL3%2BLsetnS4y%2BxTrjrRTU1W9qR3odKoApwW3gDZgTm1cfs%2FFr28gl8EHp%2FMajFJcejjxpS30v1TzmUOsADRKFxdKREh%2FrbDm%2FicxfjxelyzUjGULSgERYJd1zn1TdH%2BhAattTmDPoogGIT6LU3UIVAzR2oHeimTQB1yjs%2BKE00blJLjXwJxVHulCm%2BnAYSqCjNjrGRbJHDVzP6%2BhJ2CiBu0rP3WzW6PnZrTytqdK4kMNod5f3MVKzZHigaz8cqSlEzsGOKzAKR7DWhSyN%2Byw8xE8ruaSdGAiy0r0blGI7urJs32jEA5DBgSZZm9Gizt5iVTBAXFuW7Aq%2BrOUQsiCsUT5TA%2BWSMKXj9MAGOqUB1NK4Nzb%2B9wpilmrxNbyHg1p9w6PKLmZMXZ1keF7FPD6oAmEOX11J5VtmrHnXiGSxoWtv%2BXNf6Mba957FCbgaH4dp88F53p4S%2BjaykFC5K98kfuYIMlYDtWHdnOx4nqYtGPbLwoZ8Rxr%2BD5GnDapUfgtSlcmye6OA1A7J2ZAyBHmhvzaCsNSnMtoXZIABnHx2THSlu6YGqvN%2F4CACUjEwiZOIknUk&X-Amz-Signature=524aba1eac4536316f346b0c468719f41498d2f251fd7c5cbc43edd1e428d94b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGCPYUE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnvM8URrA%2FxIiQwm%2BlriAaEfyG55B6zEQFaNx3yXuhYAiEApP9YEeGLVGtPzra7a1h8Y4%2FWp2WsQoxFhWnTQp71PLsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEIYmD29CJOpRL%2BnyrcA%2FB5CvhzaqDW8q4I%2FcNYvWVenZQLCkhh0oUn%2Fx4JqDHRSG%2FoAUn19PqP8s0D%2FTVMXG%2Fi3RFcW6Zl4GAi5YDDiuWT%2BopE0dWC%2FVqWyQ0R4msZpGiCx9p0mMnuW%2FEzuGK7qzjSGzmlcl%2FUqQFqT0euidEi0LFcd2%2FmpyfFHObtNP%2BRy3EC3Ee3tt9TZylIfGvlY1rJpb9k8Dh5HfIWLkgwkG3xdHkm71I0yK7pV15chINMEX0rtCRFbrix3XtNL%2BI%2F%2BtHj6NlvXCeHn9r8GN93ibU4urlcQrRDL3%2BLsetnS4y%2BxTrjrRTU1W9qR3odKoApwW3gDZgTm1cfs%2FFr28gl8EHp%2FMajFJcejjxpS30v1TzmUOsADRKFxdKREh%2FrbDm%2FicxfjxelyzUjGULSgERYJd1zn1TdH%2BhAattTmDPoogGIT6LU3UIVAzR2oHeimTQB1yjs%2BKE00blJLjXwJxVHulCm%2BnAYSqCjNjrGRbJHDVzP6%2BhJ2CiBu0rP3WzW6PnZrTytqdK4kMNod5f3MVKzZHigaz8cqSlEzsGOKzAKR7DWhSyN%2Byw8xE8ruaSdGAiy0r0blGI7urJs32jEA5DBgSZZm9Gizt5iVTBAXFuW7Aq%2BrOUQsiCsUT5TA%2BWSMKXj9MAGOqUB1NK4Nzb%2B9wpilmrxNbyHg1p9w6PKLmZMXZ1keF7FPD6oAmEOX11J5VtmrHnXiGSxoWtv%2BXNf6Mba957FCbgaH4dp88F53p4S%2BjaykFC5K98kfuYIMlYDtWHdnOx4nqYtGPbLwoZ8Rxr%2BD5GnDapUfgtSlcmye6OA1A7J2ZAyBHmhvzaCsNSnMtoXZIABnHx2THSlu6YGqvN%2F4CACUjEwiZOIknUk&X-Amz-Signature=01801f822ab1f4a5b09b470aa6dc3a38f04c7d458ce6f3151da71efebd88d792&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
