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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQASMYYC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC4Lvbd%2B5SwSypqiVpYOAaNBTW5RK1oujviTfYEaQZ%2FtQIgbTnrQuvpKmCYj4Y0dwvBrrbkyHMpX3GBvhsmwy%2FGR9cq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDrX7zWp71M%2F3yIK6ircA9ycPrt8Bg6gYOqnVRbzhDk5l4imSP1Ll4iFDtAWkNQbSP4teehr%2FDObEZ2CJoEgitHDPZCgy3yIAMWo0zY5o56mCPnODKz8zWj9C%2FPYnSpMXYyrKWT1sIgE2WR6egOeKH4Qhe9sgwi5qCp9i13fkR7yYoHZ%2BLzoX3sm2pW%2FeS7cZoex9yEreq47%2BKWXscq%2FmJ8ezVedpkrVCyqj9uIHbISk7qCcO434lzczzgAUEfwmt5N6akTKGJr8jtvk0cS7dML7XUZUguwXAyRlBKZ5uCtXFbfQwkqDciPImB5dcDQZ9OhiAQvV%2FsONwZdfwxjsEemmzvMiZkBob5huSSNA1Hx%2Bw7xQLTS0%2FgDHoCTP5dvbn0GkY2Cbhy2xNNCGzzkdSwsYolLTUOncKHU%2BKLoqS3gMbu%2F2St7kgbRCW7Qv%2FujHLemQ0l%2FoTVd90oHEeWjyLaHkVEuh%2BUSWGHu%2BbF2Zg3qMqqoqM0bPh1G3N4bJHjOAo3Rdr6mvG%2Bs%2BxeVQgVpxWHMOUjI4ZPj12delU4HfkuUxn7QiM8YWxMV4AcohbcDD18dSdg80GxOn8uUGRVSRwDJB5dOqNSr7%2Fmm0oFs9OngeZ0ShPJpdlQ2xeojF8CzXuDiOG5STbEnDOwW1MNXfxb0GOqUBPOvlYcJHMew9L2xQSNziRy052BtcIXyXXbM%2BnbMkNXK92M0ZrXRfAOARwYsPn%2Bbwuh6v0pyZK4QWnWptpg50jFJvmCL2R4sQG3nlPdbwPD1mBp2gxjoOhbL%2BI6dgTkBA30Tgjv9jemu%2BSGYgVaOCHiiV2PhQhXw5OsYKwYwXZWySpR6F5XlDPbtmXFML2ur6R4%2BY4NH5nOCUPhOl74fDNCmBPjem&X-Amz-Signature=d2195beb8d15972ba41929e40819790175cfbc200b53e49cbfdf32f8d7b858e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQASMYYC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC4Lvbd%2B5SwSypqiVpYOAaNBTW5RK1oujviTfYEaQZ%2FtQIgbTnrQuvpKmCYj4Y0dwvBrrbkyHMpX3GBvhsmwy%2FGR9cq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDrX7zWp71M%2F3yIK6ircA9ycPrt8Bg6gYOqnVRbzhDk5l4imSP1Ll4iFDtAWkNQbSP4teehr%2FDObEZ2CJoEgitHDPZCgy3yIAMWo0zY5o56mCPnODKz8zWj9C%2FPYnSpMXYyrKWT1sIgE2WR6egOeKH4Qhe9sgwi5qCp9i13fkR7yYoHZ%2BLzoX3sm2pW%2FeS7cZoex9yEreq47%2BKWXscq%2FmJ8ezVedpkrVCyqj9uIHbISk7qCcO434lzczzgAUEfwmt5N6akTKGJr8jtvk0cS7dML7XUZUguwXAyRlBKZ5uCtXFbfQwkqDciPImB5dcDQZ9OhiAQvV%2FsONwZdfwxjsEemmzvMiZkBob5huSSNA1Hx%2Bw7xQLTS0%2FgDHoCTP5dvbn0GkY2Cbhy2xNNCGzzkdSwsYolLTUOncKHU%2BKLoqS3gMbu%2F2St7kgbRCW7Qv%2FujHLemQ0l%2FoTVd90oHEeWjyLaHkVEuh%2BUSWGHu%2BbF2Zg3qMqqoqM0bPh1G3N4bJHjOAo3Rdr6mvG%2Bs%2BxeVQgVpxWHMOUjI4ZPj12delU4HfkuUxn7QiM8YWxMV4AcohbcDD18dSdg80GxOn8uUGRVSRwDJB5dOqNSr7%2Fmm0oFs9OngeZ0ShPJpdlQ2xeojF8CzXuDiOG5STbEnDOwW1MNXfxb0GOqUBPOvlYcJHMew9L2xQSNziRy052BtcIXyXXbM%2BnbMkNXK92M0ZrXRfAOARwYsPn%2Bbwuh6v0pyZK4QWnWptpg50jFJvmCL2R4sQG3nlPdbwPD1mBp2gxjoOhbL%2BI6dgTkBA30Tgjv9jemu%2BSGYgVaOCHiiV2PhQhXw5OsYKwYwXZWySpR6F5XlDPbtmXFML2ur6R4%2BY4NH5nOCUPhOl74fDNCmBPjem&X-Amz-Signature=3ca46ef2e39098f2083c3e4214b99969d0ab1d6676ce2011363a5819fb22465c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
