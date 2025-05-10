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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ANMOM2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGSgStijHz9rTB1%2BQQVuEhQgP53H8jlY341Gh6xdxZPgIhAPtzgVQrqlMueNmAjCaYQB50uOAZCo%2BFJGp%2BMaKKd7jFKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGaVzOZmZg3QYs%2F34q3AP3zgK%2BYjdzlNyqRJ909kXZbeFBhYx0IK%2BkzgCKp0k5wmoiBhrBSb4fbuJUmSpeDPnft1c5HdFsN7S2KCxpPmhb%2Fy60qUkksm01JqkOOo7rNGRxfnyzv2M9mFJrrixYkrGcOcI79jEEH1UKC5LBoWg7wo88eMSVy0KgnwtPIAAkRVeysIGk6HRAO93ChK%2FcTj1nUoZkhach96yxgzDaPs%2Bk3ZFAAMi9n08PsixUge%2FzZfVGf0Dw1ef%2BUHxOMK1q2MD5bh31l9DHoziol4ZhpxSfkOBfUSwlb7%2BqjiF7FU6V4%2FsZwAe7rlnEMy9By5mOxXiZO4raN2Oi5h%2FiLPYRp1vwQru0L1vxdn7bAhytlnNOYaTD1FB9M%2FESBgAnVFdT4od4DkZdkzreHgSZx6NFfxaOQ%2F3dQNEVoBsFOoKrFhlqza7yw7TCdM3yiwFTBfUHazqm%2FW%2Fnn0ILXJadc8IY17l3gJq3u%2Fs8J1n2JXLj%2FpAOZPkIyYvVh3Wr6%2FZQZ8OrmEFnWnnKkWTIiNvtI0xSpnSFc9nU53KJRvQ4l2LUjW1PGjjypKv8y%2FY42zB%2BYp6pahDtwCaDxcBk92IhtiI7Z5Mr%2Fk9xBVoCVIEBtdRZTz%2BliYEiL5CxJ10uFLgAAzC7j%2FzABjqkAdMBdlXgIIHm9v4vJZLp7iIERWnjEFtmBcW864kZrMOFY5SaqIzpsvbCM8er36KfQI2MWxopzXs0dn0VC%2FU6mn86GP0KQpOnuwb%2BA1hQjBMsxqyeTn2X9N7OGu1go6uOz6TkTp3i8Ne%2BevlKrAcF%2FQ24qawSgZdGKCqGZ%2BUKNDoUhweqiTPF119b7K8mMBP2SvwwfKDRE%2FQQHzCc2e5F6BEYOIiV&X-Amz-Signature=09b03777a0fc1f1cb48a671df27af9964ab6f33afcad2837060f7e9a32566a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ANMOM2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGSgStijHz9rTB1%2BQQVuEhQgP53H8jlY341Gh6xdxZPgIhAPtzgVQrqlMueNmAjCaYQB50uOAZCo%2BFJGp%2BMaKKd7jFKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGaVzOZmZg3QYs%2F34q3AP3zgK%2BYjdzlNyqRJ909kXZbeFBhYx0IK%2BkzgCKp0k5wmoiBhrBSb4fbuJUmSpeDPnft1c5HdFsN7S2KCxpPmhb%2Fy60qUkksm01JqkOOo7rNGRxfnyzv2M9mFJrrixYkrGcOcI79jEEH1UKC5LBoWg7wo88eMSVy0KgnwtPIAAkRVeysIGk6HRAO93ChK%2FcTj1nUoZkhach96yxgzDaPs%2Bk3ZFAAMi9n08PsixUge%2FzZfVGf0Dw1ef%2BUHxOMK1q2MD5bh31l9DHoziol4ZhpxSfkOBfUSwlb7%2BqjiF7FU6V4%2FsZwAe7rlnEMy9By5mOxXiZO4raN2Oi5h%2FiLPYRp1vwQru0L1vxdn7bAhytlnNOYaTD1FB9M%2FESBgAnVFdT4od4DkZdkzreHgSZx6NFfxaOQ%2F3dQNEVoBsFOoKrFhlqza7yw7TCdM3yiwFTBfUHazqm%2FW%2Fnn0ILXJadc8IY17l3gJq3u%2Fs8J1n2JXLj%2FpAOZPkIyYvVh3Wr6%2FZQZ8OrmEFnWnnKkWTIiNvtI0xSpnSFc9nU53KJRvQ4l2LUjW1PGjjypKv8y%2FY42zB%2BYp6pahDtwCaDxcBk92IhtiI7Z5Mr%2Fk9xBVoCVIEBtdRZTz%2BliYEiL5CxJ10uFLgAAzC7j%2FzABjqkAdMBdlXgIIHm9v4vJZLp7iIERWnjEFtmBcW864kZrMOFY5SaqIzpsvbCM8er36KfQI2MWxopzXs0dn0VC%2FU6mn86GP0KQpOnuwb%2BA1hQjBMsxqyeTn2X9N7OGu1go6uOz6TkTp3i8Ne%2BevlKrAcF%2FQ24qawSgZdGKCqGZ%2BUKNDoUhweqiTPF119b7K8mMBP2SvwwfKDRE%2FQQHzCc2e5F6BEYOIiV&X-Amz-Signature=54f703957ac0d0e235337b75a2fdb081d0b0e49bef59bb5d67d94367688e2e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
