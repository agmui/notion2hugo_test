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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHK52VDJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHq38WMEcBwQ3LEz0eTQwvFvQybjBNzB6M8dOCtqH8eKAiEAv4CgsnstQ05I6ZGLeKQV%2F3R7O%2BAgrcjYLNcEQwtMvPMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl%2BvSLeSmEHZ1Xa2ircA1lvuWBawUBxqooQmbK%2BjmTrLxBliyoi98zsqwh4itJBaIrQUqmSfw4tHuqUoxz1BTeE1MetbmOk6fQIIXqejH4O8mezV0hyWf%2FoR8DcBiltJR2cjzEyagqdokoLczl2CbFvRIuF9xW3Md%2F7WfAy3MNsnih4Bd%2FqjB9yfe53krhJAL0oORQqs7QWXU6vQuDfeTGMTq%2FZcZV2Q29Wdn6x4N7DLP3iwgL7vi2TjfUp%2FqUOeU89NnecaPAiKni1Xajq4L92VG9%2BYe2kLUPRveAIXOwEIquPMyfFEyrNKGb22dB9xRy2YunF9dSeRug2wP3aXNmwDBYCtuYuyyArs1Cu6kTyva7HU7nkiiaWvXodVDvw03MaAW1ihmWbRaT9kxhQ09VpLyljeAZWUQ8udpHBpG868FXW6kWUi7nBRVWTwneRLP0xgoUK23aF1mTzO%2F5oAT0LthKmij2%2F0z3Egu1mnZEJPkNatq5yLwkZ9mousHpNeW2Mp6sF2Hw32Gitjpq%2FepnHwKfENk78o7ibF1OguyqqsW47xCCYlGjL%2FJh8vZ5xud3XfniekwNiyi%2BmEET9lOUMIMrKkQk3crt618FlhycCTWuGfkQTzeekbgz4vgN4LHUHZjVv0B%2BubbMDMJnl6cEGOqUBecHX7KiXrDaLy6QXYTVBnu3iomyPOtDmKKnQa5Sr9pmOHNrHJz9cQKDxj5TBF3qKj1gMZdvZN31RN2CRV6DmhUDzSncN3FBP%2BY8D6iFdyHWHcw5QPzCuvR%2FNM5NSdGHh8IwvMW%2FtAMPIJ1J%2B52ulDE5UnFFgLDK3G%2FZC9SB%2BQXTc2Om%2Fouj3qwn78o2LrBOFsBtWQ9uTe56GX3FLUxNbQGB8%2Fj%2Fs&X-Amz-Signature=4ba7a62bf642c89261a5ae64de4db638547e800ff7c96400e663e6de4de8aa43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHK52VDJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHq38WMEcBwQ3LEz0eTQwvFvQybjBNzB6M8dOCtqH8eKAiEAv4CgsnstQ05I6ZGLeKQV%2F3R7O%2BAgrcjYLNcEQwtMvPMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl%2BvSLeSmEHZ1Xa2ircA1lvuWBawUBxqooQmbK%2BjmTrLxBliyoi98zsqwh4itJBaIrQUqmSfw4tHuqUoxz1BTeE1MetbmOk6fQIIXqejH4O8mezV0hyWf%2FoR8DcBiltJR2cjzEyagqdokoLczl2CbFvRIuF9xW3Md%2F7WfAy3MNsnih4Bd%2FqjB9yfe53krhJAL0oORQqs7QWXU6vQuDfeTGMTq%2FZcZV2Q29Wdn6x4N7DLP3iwgL7vi2TjfUp%2FqUOeU89NnecaPAiKni1Xajq4L92VG9%2BYe2kLUPRveAIXOwEIquPMyfFEyrNKGb22dB9xRy2YunF9dSeRug2wP3aXNmwDBYCtuYuyyArs1Cu6kTyva7HU7nkiiaWvXodVDvw03MaAW1ihmWbRaT9kxhQ09VpLyljeAZWUQ8udpHBpG868FXW6kWUi7nBRVWTwneRLP0xgoUK23aF1mTzO%2F5oAT0LthKmij2%2F0z3Egu1mnZEJPkNatq5yLwkZ9mousHpNeW2Mp6sF2Hw32Gitjpq%2FepnHwKfENk78o7ibF1OguyqqsW47xCCYlGjL%2FJh8vZ5xud3XfniekwNiyi%2BmEET9lOUMIMrKkQk3crt618FlhycCTWuGfkQTzeekbgz4vgN4LHUHZjVv0B%2BubbMDMJnl6cEGOqUBecHX7KiXrDaLy6QXYTVBnu3iomyPOtDmKKnQa5Sr9pmOHNrHJz9cQKDxj5TBF3qKj1gMZdvZN31RN2CRV6DmhUDzSncN3FBP%2BY8D6iFdyHWHcw5QPzCuvR%2FNM5NSdGHh8IwvMW%2FtAMPIJ1J%2B52ulDE5UnFFgLDK3G%2FZC9SB%2BQXTc2Om%2Fouj3qwn78o2LrBOFsBtWQ9uTe56GX3FLUxNbQGB8%2Fj%2Fs&X-Amz-Signature=f7f8dd9330a828afdfed9cf3c57d7f0bd7ddb728f119d3f8c48764355f3585ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
