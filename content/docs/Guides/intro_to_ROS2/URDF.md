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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCA4F2H%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvuPHl%2FTKLpglcRKIn%2Bm3MZxgQkpFDDWj5k%2FtUFhXQWAiEAzSdzec8TPe3j9u1LyAZYgZGrKq%2Fo9ThBGFb%2Bmd%2B2FrQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpXRhZmaIavY9VvircA0MoO7fn%2BMQ3%2BGutyvrIqvko0%2FS%2BrTvFVR%2FKNzKZltk%2BHRghD5Xibk0zrdOzHmGQwr7UKcGwg9%2BlCQao%2FUIDnzmKWaJkJt7AF8KQ%2FHDPGlLTuXR%2BjmxmLlIsTuVUhzKrXWfuSDrI2KYJQRqg7FQ1lccNuLEq5Y9jifuRfAQAeDcMnQHdy%2FnThWytT%2BCAi2EedPtNtAioe1Ohd5LDoDzy6N12tt%2Fa5K0qQ8KGpgQD0u8wYaxKcXqxTLW9CGouivMtE6JTa8cpY9m8eLVjaOZLd8PuYpBT46RHQAfcKe83q5bckFsC%2FACg1DH9yt2u8X1IttNAoYDc1J3lNwwt7Qjrpr9NymErCJ64k6%2FX%2B7O32Mg7YOTiS4xiPtrst4XUnsS5H3hSXeR3fpGSE3JkLjnBbakmLMH3Vn7uCf1LDdyTjQ6gxMyJVciCc2TaZWHo5GHYVB1NH8mNg%2F4MdBBdRCUqWOCzt87isr0scci4iWjJjwOblXE5wX7g2ap%2FsqOMMwz3HXO0ApcLbLDPpkq%2Ffis4Ab7z5iyAduU6Q8KCrJi7hQQdqyGoE0%2BUYfdE2pyNmFhrAR53pdDILtNjxak6Cle8cLZWvPhhcCyXNWAjo1%2FdCQD2iwRQG8ohjkLecwo0MJ2iqsEGOqUBeKBblnLNsGcJiRxW9EmSHDV%2Bm%2FGU4oo3ecmfq3fOjL4BPhQzGMncD2QVkwA8msVfo3ONAi%2FjUxg8lHDuM9AV9QQSONOoPQ4dmk4uT%2BDTwpURV76vJ%2FrLYZMl8dZUQAmirHf5HZqeEs9l178qQAjaKJ%2FLqP%2BBRMhH5Rmfo8h4N%2FBdscaz1%2FuVnS8C7oEosz7gC7pOdqYqfbLlSmt7206S4vR4UuWV&X-Amz-Signature=637ef496d8d9afc2b1786d9baea6435208ed889d6d3378b3e38d392f49b891b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCA4F2H%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvuPHl%2FTKLpglcRKIn%2Bm3MZxgQkpFDDWj5k%2FtUFhXQWAiEAzSdzec8TPe3j9u1LyAZYgZGrKq%2Fo9ThBGFb%2Bmd%2B2FrQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpXRhZmaIavY9VvircA0MoO7fn%2BMQ3%2BGutyvrIqvko0%2FS%2BrTvFVR%2FKNzKZltk%2BHRghD5Xibk0zrdOzHmGQwr7UKcGwg9%2BlCQao%2FUIDnzmKWaJkJt7AF8KQ%2FHDPGlLTuXR%2BjmxmLlIsTuVUhzKrXWfuSDrI2KYJQRqg7FQ1lccNuLEq5Y9jifuRfAQAeDcMnQHdy%2FnThWytT%2BCAi2EedPtNtAioe1Ohd5LDoDzy6N12tt%2Fa5K0qQ8KGpgQD0u8wYaxKcXqxTLW9CGouivMtE6JTa8cpY9m8eLVjaOZLd8PuYpBT46RHQAfcKe83q5bckFsC%2FACg1DH9yt2u8X1IttNAoYDc1J3lNwwt7Qjrpr9NymErCJ64k6%2FX%2B7O32Mg7YOTiS4xiPtrst4XUnsS5H3hSXeR3fpGSE3JkLjnBbakmLMH3Vn7uCf1LDdyTjQ6gxMyJVciCc2TaZWHo5GHYVB1NH8mNg%2F4MdBBdRCUqWOCzt87isr0scci4iWjJjwOblXE5wX7g2ap%2FsqOMMwz3HXO0ApcLbLDPpkq%2Ffis4Ab7z5iyAduU6Q8KCrJi7hQQdqyGoE0%2BUYfdE2pyNmFhrAR53pdDILtNjxak6Cle8cLZWvPhhcCyXNWAjo1%2FdCQD2iwRQG8ohjkLecwo0MJ2iqsEGOqUBeKBblnLNsGcJiRxW9EmSHDV%2Bm%2FGU4oo3ecmfq3fOjL4BPhQzGMncD2QVkwA8msVfo3ONAi%2FjUxg8lHDuM9AV9QQSONOoPQ4dmk4uT%2BDTwpURV76vJ%2FrLYZMl8dZUQAmirHf5HZqeEs9l178qQAjaKJ%2FLqP%2BBRMhH5Rmfo8h4N%2FBdscaz1%2FuVnS8C7oEosz7gC7pOdqYqfbLlSmt7206S4vR4UuWV&X-Amz-Signature=6ce1bb0e38e4d774d69128a50845f6cfbf0da10b8b27309435c4bad21622a049&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
