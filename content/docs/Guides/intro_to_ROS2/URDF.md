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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQSLSGL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIB0caKkEbXHq9vqMvcG%2BvMzoczS82iEBHcK7yzs3RvoWAiEAiAJXBMv7d%2ByTvp69VNEu9nEhLFhIZ68S1F%2B8WaLicQwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPQk3fn5prE1%2FAodtSrcA6tFYUQzi%2BCzzO9iiFUr%2BL1q7HCg9ixcJLSbhB2Ibl8pAPr9gueImvLJqfcbYo%2BrM4BzenMrhfH2YT95n6p4a660K3icI6RH7CVo3Nko3igk8xBVshVLkWkpqKAyfcaGPpsdgSzeA9g956prnFRQQvcps0WcusGXDcRhrs1u9I00teDxUCiBy8E3nR%2FYPrONwoaxt6oQoUypyuCjDwLxpWicBAeysT9jd6o0cOsWIrAHtxMbXrRVHvgwzIW8n9voxk3PH8wojM7mW0ufyWoJZ%2Boupl9VVPTQEzvjeAMfbm56KV663cXTeYH35khKIX0OD1IkmGZ6GydbzBUlN3uqH%2FKRG18yCdoKRbd0SQ81SdR5%2BdDtQQYgfCLapmEB3AKK5DiYPChCgPrM9CZKwiuH7SGad%2F48SmDUIXzAVMUd8aIHK%2FShGs%2FtTE2M9QzmAS7Jc0p0yziJHq5WcAc6w9jMleEhZm2ZMprd8yeWrqvoM%2FeLQFdxCa6a7KoRep%2FsA%2BK4dkxQ398sxTkLx8Y5EqSYGRSD2bePftfybQGL9IQ4n%2F%2FB0h5GcDwQWnrjVETJrWHLcp0LE9bI9Gp0ak7bvvZ%2FuxauZc%2F5Zaf8SGByoamdwtXuTkxPV9lk0LxEP45KMNiax70GOqUBrY6RjrYfov1Erfb208sZTqEx%2FZWCyS3njMDxkH7NNGW9o2uxFliR2z0la0DKmlJFO0LDnWKe0hrJDm%2BJat4lRJ4g7TPJllF%2F90f4APu0XaFWIdymg4lU5KkEiIGfkPJ%2FGTUsMjwKYedSwwe1Sb%2FcQ7WJoR%2FmwlifMm6k5f5NsYcgDs1kLgMu4hwMXL4V%2Bnejub%2FMofElog7gPzO%2FYx1Cue9WD4O9&X-Amz-Signature=210dcb3f847ee57cb3342ab30c8e94b1ca8e9a6e91a8a1efccbbb2d435b3deb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQSLSGL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIB0caKkEbXHq9vqMvcG%2BvMzoczS82iEBHcK7yzs3RvoWAiEAiAJXBMv7d%2ByTvp69VNEu9nEhLFhIZ68S1F%2B8WaLicQwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPQk3fn5prE1%2FAodtSrcA6tFYUQzi%2BCzzO9iiFUr%2BL1q7HCg9ixcJLSbhB2Ibl8pAPr9gueImvLJqfcbYo%2BrM4BzenMrhfH2YT95n6p4a660K3icI6RH7CVo3Nko3igk8xBVshVLkWkpqKAyfcaGPpsdgSzeA9g956prnFRQQvcps0WcusGXDcRhrs1u9I00teDxUCiBy8E3nR%2FYPrONwoaxt6oQoUypyuCjDwLxpWicBAeysT9jd6o0cOsWIrAHtxMbXrRVHvgwzIW8n9voxk3PH8wojM7mW0ufyWoJZ%2Boupl9VVPTQEzvjeAMfbm56KV663cXTeYH35khKIX0OD1IkmGZ6GydbzBUlN3uqH%2FKRG18yCdoKRbd0SQ81SdR5%2BdDtQQYgfCLapmEB3AKK5DiYPChCgPrM9CZKwiuH7SGad%2F48SmDUIXzAVMUd8aIHK%2FShGs%2FtTE2M9QzmAS7Jc0p0yziJHq5WcAc6w9jMleEhZm2ZMprd8yeWrqvoM%2FeLQFdxCa6a7KoRep%2FsA%2BK4dkxQ398sxTkLx8Y5EqSYGRSD2bePftfybQGL9IQ4n%2F%2FB0h5GcDwQWnrjVETJrWHLcp0LE9bI9Gp0ak7bvvZ%2FuxauZc%2F5Zaf8SGByoamdwtXuTkxPV9lk0LxEP45KMNiax70GOqUBrY6RjrYfov1Erfb208sZTqEx%2FZWCyS3njMDxkH7NNGW9o2uxFliR2z0la0DKmlJFO0LDnWKe0hrJDm%2BJat4lRJ4g7TPJllF%2F90f4APu0XaFWIdymg4lU5KkEiIGfkPJ%2FGTUsMjwKYedSwwe1Sb%2FcQ7WJoR%2FmwlifMm6k5f5NsYcgDs1kLgMu4hwMXL4V%2Bnejub%2FMofElog7gPzO%2FYx1Cue9WD4O9&X-Amz-Signature=359301b6ac7abed74b46ece7415d27d8e428c3e109307c770a6564469fc58354&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
