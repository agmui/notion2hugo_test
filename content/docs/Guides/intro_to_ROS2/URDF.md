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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A435HYK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3iynrsamjLg0ym%2BaNGYqkbR6nMqV2uS1pgyA%2By40wVAIgUUJ6G53DpeC8JKXS40dSuWpS7VpRkFFjJfgrfuAOVe4qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnjw%2F1%2BnPIYHo300SrcA2Tr6MaryhIH5Qws9RHGDtqgNYNcOi5athCnCvU%2BT3L4jcedH%2B%2BTtBlMgbzm8WGHi2e5Z4a%2BoUbclxSxjqNNnMC8lnQNRfeTjJ2O3yDkx4ASJ1o1Pg6jwXl2%2Fn0HygvHuViY5Lk46XxbzuDVW%2BERecwLK1O6C6WPcKd5Kd478lT8mxWhmzqMX7S1uoxJWr0Q7dBB%2BpOSH5fLh6CjQLchkpzhdVJK5pJcACf1Bp3cyrTxjNSfbCFlWI%2B2MmI6S50fQKFEqICI8gF%2FDA7LBQBDG%2Bfr0rViUb1B2NoJWeVS%2Ben0Om7494dsW9UGm8UCpmBc8zOafqAA7wsuVWbcXQDNoWkfjtKvh5cAVy5zxOKoRn8IjykzmMMeyLDkj6yPxMTbxAqfRP07gYn3MzMza9lvwATJYIGdri446By7GKWY%2BVnnj1hTBMMU6bp7OXeaHtCxQMbMHoD8Z%2Fwyv8UgIGP87S4TI%2FaScm2TWn0qTvcYOmeYyOi386JG%2Bsk5oCRC5jz3bo61MbRBMNb%2BFqZaa8kOoviMYYuWqEM6CYSj897cZ3mjT3Rd5HVtu47LEV9%2BiiR%2B9ulTOHjoJpE6yMPExw1Vj%2FmD0JO0Sd5%2Fz55ifrHoeByRAAhCZscB1sYXTf9%2BMLbZysMGOqUBRVHxYwkCePFumo9JijF9cX5ajffeAliQPoENH1i1sdqqUG4Lzb8LhPfeR5vZCdEEWZVo1JmyekyNM5iDb0Fz4YXtIvTs4VvdfAQcKIhR10LzcST80GwWimdbBdKNtPS%2F7bKsSnl%2FEUk7HWtn0KnOtbT7kJC3jyiBG6vAHnS%2BZHFLu9%2FFwYuqVsI3vp2R3yq%2B20eG7VVykd%2BZULrveXyVzjkctFSc&X-Amz-Signature=42d05fe09188be31aa40ef6e84398404b2eca89aaefe0f61a089351fb36396f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A435HYK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3iynrsamjLg0ym%2BaNGYqkbR6nMqV2uS1pgyA%2By40wVAIgUUJ6G53DpeC8JKXS40dSuWpS7VpRkFFjJfgrfuAOVe4qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnjw%2F1%2BnPIYHo300SrcA2Tr6MaryhIH5Qws9RHGDtqgNYNcOi5athCnCvU%2BT3L4jcedH%2B%2BTtBlMgbzm8WGHi2e5Z4a%2BoUbclxSxjqNNnMC8lnQNRfeTjJ2O3yDkx4ASJ1o1Pg6jwXl2%2Fn0HygvHuViY5Lk46XxbzuDVW%2BERecwLK1O6C6WPcKd5Kd478lT8mxWhmzqMX7S1uoxJWr0Q7dBB%2BpOSH5fLh6CjQLchkpzhdVJK5pJcACf1Bp3cyrTxjNSfbCFlWI%2B2MmI6S50fQKFEqICI8gF%2FDA7LBQBDG%2Bfr0rViUb1B2NoJWeVS%2Ben0Om7494dsW9UGm8UCpmBc8zOafqAA7wsuVWbcXQDNoWkfjtKvh5cAVy5zxOKoRn8IjykzmMMeyLDkj6yPxMTbxAqfRP07gYn3MzMza9lvwATJYIGdri446By7GKWY%2BVnnj1hTBMMU6bp7OXeaHtCxQMbMHoD8Z%2Fwyv8UgIGP87S4TI%2FaScm2TWn0qTvcYOmeYyOi386JG%2Bsk5oCRC5jz3bo61MbRBMNb%2BFqZaa8kOoviMYYuWqEM6CYSj897cZ3mjT3Rd5HVtu47LEV9%2BiiR%2B9ulTOHjoJpE6yMPExw1Vj%2FmD0JO0Sd5%2Fz55ifrHoeByRAAhCZscB1sYXTf9%2BMLbZysMGOqUBRVHxYwkCePFumo9JijF9cX5ajffeAliQPoENH1i1sdqqUG4Lzb8LhPfeR5vZCdEEWZVo1JmyekyNM5iDb0Fz4YXtIvTs4VvdfAQcKIhR10LzcST80GwWimdbBdKNtPS%2F7bKsSnl%2FEUk7HWtn0KnOtbT7kJC3jyiBG6vAHnS%2BZHFLu9%2FFwYuqVsI3vp2R3yq%2B20eG7VVykd%2BZULrveXyVzjkctFSc&X-Amz-Signature=f67966dcfc08455b6bd4e76c8b0bd01fc689cbff4c15ea1ab99b01c93f259669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
