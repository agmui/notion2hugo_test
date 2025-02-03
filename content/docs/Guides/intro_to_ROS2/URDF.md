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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SZQAHE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcfCQ0MbOghjTrlOQOhb3IjY%2F04o4fOVa2qAJOVzH3owIgND8JxoXzk0H643h%2FFTci3MIS3X8I6vMcRfB7LzPHiAoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHB4H7VdFSU%2FNuCwmircAzQ%2BPjiB29PCaPqUBzPTCT3SBP4vm%2B6r%2B5kz2rTLD4V94NJhVGbJl4xnqRwipqMv6ypoxrPiQ0dl0%2FMitqKOhjCme1DBp7Wx27rPwvqMzPfo4AhZ3JcrTHRVapSktFHVbyrq6bs%2BGC5RsQ4XTKFl3Me6lZ0IS%2FMVpaAiu%2BXfk6lW4k32X3OxqefWnSVoROwpQey17yndNBBCIElF9918jT5RYghUDTAlKRGFiwL4uGPPGhIgmX7%2B2DcsYKGMzHgPcYeY%2F2ugGlW263adsxct3L9OzphSm9SLWhq%2FIlUwObCT9h%2B4%2BjcDNJ6CUrbeOphhAUpRLo1ZAklUk9NHvupoS7iKKTSYlOvMOA3FmfhkU5VaFiuj1xJAr%2BoliCZScq60A9hhsB1pmxJhBuFwyMkAFhjxpt%2BKpG6TEOB%2BJoI5Q3hvgQc6frMf%2F5voOZQlxvo0RRhj%2BKW%2BslPxm1rWGpjx3OwKaK6VfoI0Lu6Wq%2B%2ByCtlhcwTj1Hue3R0O7vNCYBjH6J6MJ6ZLTrgavv89HYuLAK7QvYuZVmGiXgLXMd8SSOvCMKdvGvifiwLS0RePjI6E8TJoPL%2B5WsDV9XIOHKXX0LLWw55ISLkD9kCJZxNAOOm0XfjodL2mVYRViVrAMK30gb0GOqUBs8lQdE34cl2mCZi1eQLbcUw6Ukca0kv2zrA%2BSbAV6y%2B7xqq%2BKfbbkE6MicVTpbK8PeZ3i1QjRS3OwtYcfVMkQXRT%2B7AcgibgCASCreVQY46g9v%2FE0PhVmtjaTm4oXYp5SFTmhLa480djoQLz7pTKuDklAEreu9KSykneTaC6GHARgif5NJRS3MRIEcFxNN4VPsQnP0Qkjx6%2FO%2FdygmKW8U6DZuge&X-Amz-Signature=9829fddc410edbcbe31dfd32281cbe4a23f9fd4c5e6d2758cdf09c10b0d6e6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SZQAHE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcfCQ0MbOghjTrlOQOhb3IjY%2F04o4fOVa2qAJOVzH3owIgND8JxoXzk0H643h%2FFTci3MIS3X8I6vMcRfB7LzPHiAoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHB4H7VdFSU%2FNuCwmircAzQ%2BPjiB29PCaPqUBzPTCT3SBP4vm%2B6r%2B5kz2rTLD4V94NJhVGbJl4xnqRwipqMv6ypoxrPiQ0dl0%2FMitqKOhjCme1DBp7Wx27rPwvqMzPfo4AhZ3JcrTHRVapSktFHVbyrq6bs%2BGC5RsQ4XTKFl3Me6lZ0IS%2FMVpaAiu%2BXfk6lW4k32X3OxqefWnSVoROwpQey17yndNBBCIElF9918jT5RYghUDTAlKRGFiwL4uGPPGhIgmX7%2B2DcsYKGMzHgPcYeY%2F2ugGlW263adsxct3L9OzphSm9SLWhq%2FIlUwObCT9h%2B4%2BjcDNJ6CUrbeOphhAUpRLo1ZAklUk9NHvupoS7iKKTSYlOvMOA3FmfhkU5VaFiuj1xJAr%2BoliCZScq60A9hhsB1pmxJhBuFwyMkAFhjxpt%2BKpG6TEOB%2BJoI5Q3hvgQc6frMf%2F5voOZQlxvo0RRhj%2BKW%2BslPxm1rWGpjx3OwKaK6VfoI0Lu6Wq%2B%2ByCtlhcwTj1Hue3R0O7vNCYBjH6J6MJ6ZLTrgavv89HYuLAK7QvYuZVmGiXgLXMd8SSOvCMKdvGvifiwLS0RePjI6E8TJoPL%2B5WsDV9XIOHKXX0LLWw55ISLkD9kCJZxNAOOm0XfjodL2mVYRViVrAMK30gb0GOqUBs8lQdE34cl2mCZi1eQLbcUw6Ukca0kv2zrA%2BSbAV6y%2B7xqq%2BKfbbkE6MicVTpbK8PeZ3i1QjRS3OwtYcfVMkQXRT%2B7AcgibgCASCreVQY46g9v%2FE0PhVmtjaTm4oXYp5SFTmhLa480djoQLz7pTKuDklAEreu9KSykneTaC6GHARgif5NJRS3MRIEcFxNN4VPsQnP0Qkjx6%2FO%2FdygmKW8U6DZuge&X-Amz-Signature=cb09768dd142cf37cef72785bf80f64adc742f4ecd3c418268dff9c3cc3c2be8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
