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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGE4PAE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQO9z9CF56Repp4GCfvf5WCGmwnw0yE9qPxvs4%2FWJ2swIgGjKBbRVFuxGPfSPCPmqWdJDPjL8W3G%2FEOxlY1rPyNR0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDoWSpazOTVpWia%2ByrcAwdXJrqhIz1q7sXKOHaOH%2FbAxQlYgWqsPb7FJKs80UIxskFnQNGWM7Z9A2B0X5sdvIEGyXNnr7WUgTKyLL3Rz%2BmUDJ13xbvP9mMS1EcJT0c%2F8LnjNVKJUVJzLyFfBDlhCObHKTKjPvdlSlnAJ%2Bgs%2B%2FtRCRrkuZGMsO4mHA0Z5OzRTv%2BNmA3Yjpa0y8DkktNCiTh%2Bc%2BRePz9NGkSEugTWhxZ7uJDjakZSh2YwhW4Ij4KcfcFzeYgpTSGEqH%2FZ6C%2F%2BIAm9TCqODy7JytjmzQ6Lp%2FijCwahFi9kkRU3UC54kNTqW7hme%2BJn%2B%2BhZv9Lo5rJF2vC7p9c7dlptoT0y%2F6mSZhNB%2FiE5jL5fcEUGyHRJGSeSIlB%2Be%2FAZu1ZIa1ABVJdCwM%2ButIjF4eBenp2YqO%2FB8FAa%2FVIpdqbpN5%2FQO8Ri76wHf50cb3ZzsReCozrIJdXCdCZCbmREENRdHnJWmn8AopYe9BwUlgWGb7QkRL0RFysuegSAsZI6PlNv02yBEVHg05xwHAKd8BtKLQOEAYWLBKGTaRrp3kHSYWlNygEz0xJOhrswLo2SxnqknTIA9tSc3F9%2BFi%2BQEZBKvklbZ1zKeGaEpPJw1MgH8tvdSBZp3E7MGl%2B%2BHIWRgCrPn%2BHAMNW9lsMGOqUBqUGAlj05q56S6ffx2%2FdFGtaaJ5W9uCCDG%2FjzHYgggC%2BaJq1T8lksXTF1KB2dPEhYrBIh6B97UbE%2F9LQeR1GYPBV4RHby%2Fk0T%2Bse0mp4nlXWSEZ6pzeCg5ntGpl%2FJDwPkM4bhFCon5SvHej%2F%2Bm2Id%2FSFrn3hRhKKYHPTdrkIo7jcZBQrkD4uVMVhZzqIID5O%2FPZUImupZ27O7ABSt2bT5P%2FJk%2BJf9&X-Amz-Signature=d6111189c3c40d6c0c6e9fab1b8fdfd8b53797f1db4d7ea1319effe04c930702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGE4PAE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQO9z9CF56Repp4GCfvf5WCGmwnw0yE9qPxvs4%2FWJ2swIgGjKBbRVFuxGPfSPCPmqWdJDPjL8W3G%2FEOxlY1rPyNR0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDoWSpazOTVpWia%2ByrcAwdXJrqhIz1q7sXKOHaOH%2FbAxQlYgWqsPb7FJKs80UIxskFnQNGWM7Z9A2B0X5sdvIEGyXNnr7WUgTKyLL3Rz%2BmUDJ13xbvP9mMS1EcJT0c%2F8LnjNVKJUVJzLyFfBDlhCObHKTKjPvdlSlnAJ%2Bgs%2B%2FtRCRrkuZGMsO4mHA0Z5OzRTv%2BNmA3Yjpa0y8DkktNCiTh%2Bc%2BRePz9NGkSEugTWhxZ7uJDjakZSh2YwhW4Ij4KcfcFzeYgpTSGEqH%2FZ6C%2F%2BIAm9TCqODy7JytjmzQ6Lp%2FijCwahFi9kkRU3UC54kNTqW7hme%2BJn%2B%2BhZv9Lo5rJF2vC7p9c7dlptoT0y%2F6mSZhNB%2FiE5jL5fcEUGyHRJGSeSIlB%2Be%2FAZu1ZIa1ABVJdCwM%2ButIjF4eBenp2YqO%2FB8FAa%2FVIpdqbpN5%2FQO8Ri76wHf50cb3ZzsReCozrIJdXCdCZCbmREENRdHnJWmn8AopYe9BwUlgWGb7QkRL0RFysuegSAsZI6PlNv02yBEVHg05xwHAKd8BtKLQOEAYWLBKGTaRrp3kHSYWlNygEz0xJOhrswLo2SxnqknTIA9tSc3F9%2BFi%2BQEZBKvklbZ1zKeGaEpPJw1MgH8tvdSBZp3E7MGl%2B%2BHIWRgCrPn%2BHAMNW9lsMGOqUBqUGAlj05q56S6ffx2%2FdFGtaaJ5W9uCCDG%2FjzHYgggC%2BaJq1T8lksXTF1KB2dPEhYrBIh6B97UbE%2F9LQeR1GYPBV4RHby%2Fk0T%2Bse0mp4nlXWSEZ6pzeCg5ntGpl%2FJDwPkM4bhFCon5SvHej%2F%2Bm2Id%2FSFrn3hRhKKYHPTdrkIo7jcZBQrkD4uVMVhZzqIID5O%2FPZUImupZ27O7ABSt2bT5P%2FJk%2BJf9&X-Amz-Signature=bb3f87bf6c83f2c430af00c5e4e59c507f464afa13a5929067e7e52e465fc935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
