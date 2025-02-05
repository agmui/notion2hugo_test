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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFUCKFS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDP7a%2BQKUKwID38puAo%2Bn8AGgG9V%2Fk%2FOfL1YcR895RdrgIgQ5TJGoujn%2FCC8ZFK1ihw7WR9I20Kw2VrGMBvsbhtnNsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDoVuA0k7tLyVvhVUircA12XPloBMrs8FM3FZ6jHpJNu6dglETB33y35iLG%2B%2FZk%2ByFPGWwT0dOlQUqmjG0Ve5Ls2KM41jfVpS2XjtpwlnnyT5bvgJiNaH%2BkExVnikczYLvhxu%2Fm2BRhCSyQ5osyvYkm7UwLNg9nwMEMZ2TajlfKDfqzBfVI9bNvgGyUsPFbiT%2FU%2BP20vn%2Bx8f3RtdFSHetTMBcZiNQimyMCx2CZfJxkQbbwYr%2FzwpDJ4j2FHOVaLoTwzs0lIohcT1TMDYd%2B258%2FwRHbfJkz4hFg%2BPOOmzCJVGEdBeBookxHGaHyhD8%2BTJ7FsB%2F4tg%2BDVNgPvpOjUY2wBPK6dah0bCrHy%2B6xcnSFw98ruFkoLppTzLqL0Ss5MMaoI3AL%2BZCzQX2JMuXnw95%2F7fnJGw%2Fb39smySN4bLEvafSSp%2FPPuf0LQMqRwrVYhp8togq5R2oxGZ8o8fHlmG7ILYG52RX3REYakSPGbbYlx5jT%2B9GxYV3YFG1JlP2R1oHKUE4D5T%2FE2Fz960SlFh2IGSjMK2HHcaT579SYstmEnc96rzoM1xnXDsqAwuLon33oFN%2FbnMRop6d%2B6vt1X%2BF%2BserNUI8mEJvuIRAi9EM53dm5j5r9TeIczMGPN5ekHRfpsTivTy4VVM%2FMtMLbxjL0GOqUBBIEXYFI%2FJe3D8ySTxvL77AIy8uqZKOKR5y734OBC%2B3n0Hpkex17iiXAFk0N9bVRcp6833WxfMM4JCRNe%2BGYgQVk4CCZFX3v589%2F%2Bs3xUq6sWhLU7HG3fJCY8297HYnL%2FbIeLF8kSF%2B8343m3O65FL1CgROleKLLTrEK1N5kmJZm7amIh9I9i%2BW%2BDR3xrgkMO86anvukxIJSK6Z3qVOSLKKEDHe2S&X-Amz-Signature=4f5b41c58f66af34bd756080b9fd2d0b8e5b06cf700229609abaffbeee65a612&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFUCKFS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDP7a%2BQKUKwID38puAo%2Bn8AGgG9V%2Fk%2FOfL1YcR895RdrgIgQ5TJGoujn%2FCC8ZFK1ihw7WR9I20Kw2VrGMBvsbhtnNsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDoVuA0k7tLyVvhVUircA12XPloBMrs8FM3FZ6jHpJNu6dglETB33y35iLG%2B%2FZk%2ByFPGWwT0dOlQUqmjG0Ve5Ls2KM41jfVpS2XjtpwlnnyT5bvgJiNaH%2BkExVnikczYLvhxu%2Fm2BRhCSyQ5osyvYkm7UwLNg9nwMEMZ2TajlfKDfqzBfVI9bNvgGyUsPFbiT%2FU%2BP20vn%2Bx8f3RtdFSHetTMBcZiNQimyMCx2CZfJxkQbbwYr%2FzwpDJ4j2FHOVaLoTwzs0lIohcT1TMDYd%2B258%2FwRHbfJkz4hFg%2BPOOmzCJVGEdBeBookxHGaHyhD8%2BTJ7FsB%2F4tg%2BDVNgPvpOjUY2wBPK6dah0bCrHy%2B6xcnSFw98ruFkoLppTzLqL0Ss5MMaoI3AL%2BZCzQX2JMuXnw95%2F7fnJGw%2Fb39smySN4bLEvafSSp%2FPPuf0LQMqRwrVYhp8togq5R2oxGZ8o8fHlmG7ILYG52RX3REYakSPGbbYlx5jT%2B9GxYV3YFG1JlP2R1oHKUE4D5T%2FE2Fz960SlFh2IGSjMK2HHcaT579SYstmEnc96rzoM1xnXDsqAwuLon33oFN%2FbnMRop6d%2B6vt1X%2BF%2BserNUI8mEJvuIRAi9EM53dm5j5r9TeIczMGPN5ekHRfpsTivTy4VVM%2FMtMLbxjL0GOqUBBIEXYFI%2FJe3D8ySTxvL77AIy8uqZKOKR5y734OBC%2B3n0Hpkex17iiXAFk0N9bVRcp6833WxfMM4JCRNe%2BGYgQVk4CCZFX3v589%2F%2Bs3xUq6sWhLU7HG3fJCY8297HYnL%2FbIeLF8kSF%2B8343m3O65FL1CgROleKLLTrEK1N5kmJZm7amIh9I9i%2BW%2BDR3xrgkMO86anvukxIJSK6Z3qVOSLKKEDHe2S&X-Amz-Signature=92cb6c7d282579f55f2dc92309df08c02f9fc65da6111a3e82d4e79e1ac6d723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
