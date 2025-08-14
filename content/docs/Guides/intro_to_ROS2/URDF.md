---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKCIQG2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCea3n7ydK4yCdGxyE3ne%2B3qxgpWkokvktTHbTIBaS2ogIgSqjry4%2FR5xDL0UxGFJwEYFs4V%2BuftyKNmK9wIWMu5mwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDP4hMp18iGkFEG978SrcAzxHQD7y1T24gkW1zvEG0hVWBsw21JVRDjnvqlw5FSQhZ18U30XOBhkZIar6p%2FonbwGP%2FPIlWvop6EXvt1BPBR2LLZRAwj6VDuGVg77EDIWUtKL1rrw9QlUzZVtjiRUCcZz9YZ3jUberl1Iw0kGTIxlKX%2BLMOutIQqJ1SmHQ2sD2nKg1G4NVGovjJccnY6gLkn4lAcdtGVHSlV%2FBxMcC7xQTSEUplJ5lJ6t6ZqRHV%2BosFb86%2Bni%2F2%2FhWuJw5tUpKLPufoDNMKqVHcYgvOACZbKezkxaWj6fLrdcysPRuY3bK00iL6pbI9TaFuJoAz1Sz9ms5vF18rRDukc1vKsdJroKtWi%2BN7nuxmIQOMVg4dbPm2%2F9vLblXTJXrtiUJBsgOFXJWH3du3GdQUKUtGYSFoWsVS03xKvX04E6Njqs624yjpLqh%2BvYdY50RrgoltSEVXtSAvkzAsHfcweAcfNn%2BI%2BeQ8m%2BishYdpzLspyWDC%2BOrDv817e3IlrloRfWxGssiN7QOLtT%2FE4Rs01IGClyKQ9WtDLxO8ail7b96hxgLW8HySuEZl5sEHZPsJn502wzLqFmcJo3D3cwoe7aWtVdpjjOOCCvgTBZGC6bnFJGmSkbXbm3Vb%2B1CM9j7lDLNMKCf%2BMQGOqUB%2FF8usqd%2BdFhOmZYGjwoJezMjINzT7hcvBB7LbrQmlvDdAXCyFTV9XK7ZaZ3qqF8zCqtp40Oq3ou1Q4EQPJKIt3YNaMpTuMapI911PyT28qODEl3VIYEKY9xCksQCvCrtDsw9CFMgWUvs1u6siDya7LArhAh48V7weQ3M9d9Pz04sM0b0lPi0a5CBODdt3MI9HiAXA0J6GNI8EbRX0%2BoiMWS0bvKh&X-Amz-Signature=cc9f61bdcca2184aaf792bb62aa19c3e2fd570eb2a02a5ebe275056126aa5fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKCIQG2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCea3n7ydK4yCdGxyE3ne%2B3qxgpWkokvktTHbTIBaS2ogIgSqjry4%2FR5xDL0UxGFJwEYFs4V%2BuftyKNmK9wIWMu5mwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDP4hMp18iGkFEG978SrcAzxHQD7y1T24gkW1zvEG0hVWBsw21JVRDjnvqlw5FSQhZ18U30XOBhkZIar6p%2FonbwGP%2FPIlWvop6EXvt1BPBR2LLZRAwj6VDuGVg77EDIWUtKL1rrw9QlUzZVtjiRUCcZz9YZ3jUberl1Iw0kGTIxlKX%2BLMOutIQqJ1SmHQ2sD2nKg1G4NVGovjJccnY6gLkn4lAcdtGVHSlV%2FBxMcC7xQTSEUplJ5lJ6t6ZqRHV%2BosFb86%2Bni%2F2%2FhWuJw5tUpKLPufoDNMKqVHcYgvOACZbKezkxaWj6fLrdcysPRuY3bK00iL6pbI9TaFuJoAz1Sz9ms5vF18rRDukc1vKsdJroKtWi%2BN7nuxmIQOMVg4dbPm2%2F9vLblXTJXrtiUJBsgOFXJWH3du3GdQUKUtGYSFoWsVS03xKvX04E6Njqs624yjpLqh%2BvYdY50RrgoltSEVXtSAvkzAsHfcweAcfNn%2BI%2BeQ8m%2BishYdpzLspyWDC%2BOrDv817e3IlrloRfWxGssiN7QOLtT%2FE4Rs01IGClyKQ9WtDLxO8ail7b96hxgLW8HySuEZl5sEHZPsJn502wzLqFmcJo3D3cwoe7aWtVdpjjOOCCvgTBZGC6bnFJGmSkbXbm3Vb%2B1CM9j7lDLNMKCf%2BMQGOqUB%2FF8usqd%2BdFhOmZYGjwoJezMjINzT7hcvBB7LbrQmlvDdAXCyFTV9XK7ZaZ3qqF8zCqtp40Oq3ou1Q4EQPJKIt3YNaMpTuMapI911PyT28qODEl3VIYEKY9xCksQCvCrtDsw9CFMgWUvs1u6siDya7LArhAh48V7weQ3M9d9Pz04sM0b0lPi0a5CBODdt3MI9HiAXA0J6GNI8EbRX0%2BoiMWS0bvKh&X-Amz-Signature=ff8bd3fec12f487e7b4e12170ee22c14149d677a21a9a6b1d6aee849f15c3333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
