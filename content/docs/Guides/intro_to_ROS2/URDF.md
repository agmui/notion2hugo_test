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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGRQJP7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE5Ga0pglihEOIX4X5T5RHjOjzFHgyGNgMmCwv4NY%2B2GAiEAm1a16%2F1lMP4yPlnHMVp%2FRJI77LQFxeYvU%2FgzurvPhncqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXh3SB9rtNpdeJhsCrcAxE3R3qi81uzYlUWLMgJqksHC1GwofrdnIi7eUIyRtIwe7eLRdvYVaSq4bTGYDb7gy9aMb5BfNv3xVnyBXzDfgsGx0p496BNBP3eDN17N5ZACoW1sqgH8mbDg4OWVKFkathhffLHEDa2nPf4jPUIi4cS4Ps2JVezCwSqzqG%2FJ7S877sOBenEcKif84Dwz89fYtunFM5R2DFw7nI%2FUXilohDFubHTOjoO%2BopptfmsDRJquLYnh7bg8oFCrEgV1lXOHwCXom7lYwll3tyHJdDTdHqJdnyqpy3uVEn%2FtygTg7z7wkNIls%2BzyGwkkmJlTjh4%2F47kDmKsmxl1huq0gusers9xpTRKPTsoBSgdba1EVDMtrmxhuZgZZTIjGId3d3S8l94X3OHN%2Fs6rtJeFuRSBJm4QGcnmblDKt2z604uNrACuI2d3n4Ejbv%2Fl26ws90r8mpjmjYdDunh%2BdS61Lg0rT8EdYKxw8VPaQK03mUhaQ%2F03Uq2Ax9Vu3UYIrowDM3NgOq5rGagBoWev%2F%2F6bhpokgIaKWY84GhWQOwx%2FQ6T%2FHWVyMEh9t%2FONcFCTWegaGkc6m4K5VXNaBA%2Fw82eFrb1DSO0CzVlllAC1OyJGuDrfFhls6Fs44H8rN61nrsuDMJHnosQGOqUBWhAUlXedPF2mWMDWutdQhdZbgWwG%2Br3hFqPEp8aexgN0TDgvrZPna%2Bux9yAUzRA25pzMglLDmU9SXP1kTBFis7FtwBBq7JZWJPiDNcbbyGTI8drU0CXdpwYV3xP2MP5poBKU%2BOT8KAy%2BOfCdfsCb0xAMN2%2F2k3pPGF1dDAqhd4UkNoVX6s9cyMuv2DI0aOH3kYkLl%2Fzt5oTSXWePaKf5xJxijvxL&X-Amz-Signature=03fec71916ac58b20987ccb7250ada6ed7714ba644f149527f422ea3e5f1bd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGRQJP7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE5Ga0pglihEOIX4X5T5RHjOjzFHgyGNgMmCwv4NY%2B2GAiEAm1a16%2F1lMP4yPlnHMVp%2FRJI77LQFxeYvU%2FgzurvPhncqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXh3SB9rtNpdeJhsCrcAxE3R3qi81uzYlUWLMgJqksHC1GwofrdnIi7eUIyRtIwe7eLRdvYVaSq4bTGYDb7gy9aMb5BfNv3xVnyBXzDfgsGx0p496BNBP3eDN17N5ZACoW1sqgH8mbDg4OWVKFkathhffLHEDa2nPf4jPUIi4cS4Ps2JVezCwSqzqG%2FJ7S877sOBenEcKif84Dwz89fYtunFM5R2DFw7nI%2FUXilohDFubHTOjoO%2BopptfmsDRJquLYnh7bg8oFCrEgV1lXOHwCXom7lYwll3tyHJdDTdHqJdnyqpy3uVEn%2FtygTg7z7wkNIls%2BzyGwkkmJlTjh4%2F47kDmKsmxl1huq0gusers9xpTRKPTsoBSgdba1EVDMtrmxhuZgZZTIjGId3d3S8l94X3OHN%2Fs6rtJeFuRSBJm4QGcnmblDKt2z604uNrACuI2d3n4Ejbv%2Fl26ws90r8mpjmjYdDunh%2BdS61Lg0rT8EdYKxw8VPaQK03mUhaQ%2F03Uq2Ax9Vu3UYIrowDM3NgOq5rGagBoWev%2F%2F6bhpokgIaKWY84GhWQOwx%2FQ6T%2FHWVyMEh9t%2FONcFCTWegaGkc6m4K5VXNaBA%2Fw82eFrb1DSO0CzVlllAC1OyJGuDrfFhls6Fs44H8rN61nrsuDMJHnosQGOqUBWhAUlXedPF2mWMDWutdQhdZbgWwG%2Br3hFqPEp8aexgN0TDgvrZPna%2Bux9yAUzRA25pzMglLDmU9SXP1kTBFis7FtwBBq7JZWJPiDNcbbyGTI8drU0CXdpwYV3xP2MP5poBKU%2BOT8KAy%2BOfCdfsCb0xAMN2%2F2k3pPGF1dDAqhd4UkNoVX6s9cyMuv2DI0aOH3kYkLl%2Fzt5oTSXWePaKf5xJxijvxL&X-Amz-Signature=d912cd2a7c515c866c7a7eebd13a872dc60bbb4b53e1631314cee66dbafed1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
