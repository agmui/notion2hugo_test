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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XREP3N3Z%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDwB8UklgRa8sXaoM4qLupiStqWiFPUXlcHtrW8RX2LZAiEAk52HWuxkVvqBv3WSo%2Bm1oxm4dCsN0bbAN0Bgj%2FxdBsEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJAvK0PHXtfvh9j6DyrcA83KEV%2B9VFeflWh137mhAmisGb4HbAGfVzE4LsXJHJ4fU%2Bt8VsXYLDRVUbbMOkQbxmafXsA9AuF3xw7MZYKB5htchtyCIirEJKQyYBpg9kOIxDASjoGymZ43nz7GsBL7JGffg0%2F%2BoaPyYk2eUp3hvsY4BiPlq9hn%2BzfY3DRK4yIic3zEAublmlW1YQuHcobTrfrpBMGypi3qWRRLKtTB0RYNr37RK1jXK3ROagH4Pfyjet3YwkhnTrjKSwHT3LxbiS%2FvEr5Knj2aR5Foz8%2Ftrj7Mpu982UTRYEzXD%2BWNqfGibaXTrXFkALXGqXbAOhguKZ5kL2S%2BuyQhDtQLHgCqJat7fSDs520t%2BrIuyU0iZdmBF5y1cWaISSJ7Dm0GgyCez2D24NQeshehkawsoUO5wdbsf%2FGisOvVKoE2GSqCNSPiTXic53OhpwJM76RhBtg64ZnZc5SkUzL2%2BkpGSqx4VefWvAYjHFtcHGEIq6746AKn5jvA43FrPuq1ZEkIJL7piO8Wkob4ATgAtoNLNJykI4mJjSP465VW5YfrZcKbXj6G%2BLNhaGRk%2FdLB5aONcShSLfsmMSgit3DbOWUTQC9H6fpFizbinQDrQ%2Bklb9A3ADlyHw8MWVUjwnyuTeJ2MM%2Fgr74GOqUB5AAN5VFXFtHJOvQ5bs7LTn3Es16nLRhYBZqvr8oMz0hGEscbMiDJFtU5x5pdoUeCyV7%2BKcPpcp6gPBDTwK5VJq3I8z2%2FThwii3cKl%2FvprUvxkiSzGKZwLc8JHXCrAWtJ9%2BiCxfhmzeIeH%2FJoY8S51EnCRnthKolyavRRu7hV95xjNxzB5dsGay4pbIayeTAIAUtgfO2AaydK%2FDT6112bp5V2EnzH&X-Amz-Signature=9ffddaafe6cb9132d1a5e1b131166d7064b5d078f7211691aa35c3f45dc305d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XREP3N3Z%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDwB8UklgRa8sXaoM4qLupiStqWiFPUXlcHtrW8RX2LZAiEAk52HWuxkVvqBv3WSo%2Bm1oxm4dCsN0bbAN0Bgj%2FxdBsEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJAvK0PHXtfvh9j6DyrcA83KEV%2B9VFeflWh137mhAmisGb4HbAGfVzE4LsXJHJ4fU%2Bt8VsXYLDRVUbbMOkQbxmafXsA9AuF3xw7MZYKB5htchtyCIirEJKQyYBpg9kOIxDASjoGymZ43nz7GsBL7JGffg0%2F%2BoaPyYk2eUp3hvsY4BiPlq9hn%2BzfY3DRK4yIic3zEAublmlW1YQuHcobTrfrpBMGypi3qWRRLKtTB0RYNr37RK1jXK3ROagH4Pfyjet3YwkhnTrjKSwHT3LxbiS%2FvEr5Knj2aR5Foz8%2Ftrj7Mpu982UTRYEzXD%2BWNqfGibaXTrXFkALXGqXbAOhguKZ5kL2S%2BuyQhDtQLHgCqJat7fSDs520t%2BrIuyU0iZdmBF5y1cWaISSJ7Dm0GgyCez2D24NQeshehkawsoUO5wdbsf%2FGisOvVKoE2GSqCNSPiTXic53OhpwJM76RhBtg64ZnZc5SkUzL2%2BkpGSqx4VefWvAYjHFtcHGEIq6746AKn5jvA43FrPuq1ZEkIJL7piO8Wkob4ATgAtoNLNJykI4mJjSP465VW5YfrZcKbXj6G%2BLNhaGRk%2FdLB5aONcShSLfsmMSgit3DbOWUTQC9H6fpFizbinQDrQ%2Bklb9A3ADlyHw8MWVUjwnyuTeJ2MM%2Fgr74GOqUB5AAN5VFXFtHJOvQ5bs7LTn3Es16nLRhYBZqvr8oMz0hGEscbMiDJFtU5x5pdoUeCyV7%2BKcPpcp6gPBDTwK5VJq3I8z2%2FThwii3cKl%2FvprUvxkiSzGKZwLc8JHXCrAWtJ9%2BiCxfhmzeIeH%2FJoY8S51EnCRnthKolyavRRu7hV95xjNxzB5dsGay4pbIayeTAIAUtgfO2AaydK%2FDT6112bp5V2EnzH&X-Amz-Signature=738c0b464f8e380032d29314fb924c4b11565ddbc85d0759f864f0ce5d4bff85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
