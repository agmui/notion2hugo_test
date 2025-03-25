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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHP4U2M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0SLz7aGh%2B4%2BJyuKWww08Z4%2FAYjAxjCablzRTL8g%2B%2FLAiEAqb0pduqPG1%2B5txl4t2NAjXIdSsZ1xdbjZg1Mo1pnj1wqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETN4krTNbbx5v9f%2FCrcA0aGe59BbEIYY7Vuzki43CbaAVELW7A36RB4Fr2Hl3%2BJ3ZZ%2FqIM5Nc%2FZWd2%2FlQBGdYZ569rSw29x82jW%2BnLJzP6EkqIMZYpuBaqBqcnbwSMhUWkH5WktjPbqZOy7rMqB7lZOI2TOdHtN%2Bzn7Mg9wx6TgVa2OC3d2Orc2B3AbX8duuLzrty1zQz%2FJqK7KH4ArF%2BHXZbE7v1z20LXyl3vZn%2BValtcE0A7onn62lYHgHz52J27Vad2xQeoeD7WwAaKAzyfLwZn6%2BG0100Cp%2B8%2BBfkaJxeTGHwqTu8qoWHGlr6md8hWkuZbFrejVJJMruFMhjc3G1qNJCjFpV2loZNidDcfzJOn%2FUxCyasXPPsAxcP4CwgXwq%2FgUrFjv%2F6ar9wX3nqiLUxDTK0wjcTH2KVHdOdbZZ00k6BLcMl%2BTjXLx45oyPrD5GSXqxZX0YNJGmW1KLJuTklT%2FuH1xurFYH7PkKFBg3EvC%2B%2FfGgclhsf4cgRhVOu7q%2BRKHTISWW4aTMroMTHcu%2FnYTaA0%2BPWoc%2F%2Blms07Xhp1rQgnexTJIkZOm2Zyb09GyXJGfILPlIz3RDr%2FgTNQHD%2B4U6zi9%2Fw2ZSPshtDNoquFnBZZn3ZtBWmKl2hhWSXVoihtEVHDXLFDTMI6Oib8GOqUBTGFwmZJ5Wzr0PuaExB3y9BnY%2FZ1moPzAJyuXoMrb7SXu%2BkQT7QxI11ohWWwTZhdDGA5wyT5H%2BadwB0659v6imXRI2YOYHAljoNYHjPBk5ipUw5%2BA1XjUPoVQp9sWQu6zfawts8fngah3lI4aHm4Fkprx7OoqCbg6zUCa%2BNuSeWSQW2dye%2BWKHUQN3D%2BuFSJo%2FTxlLLQ8jHXAlQvkItbX7M%2BACd5i&X-Amz-Signature=2034c3b3f7d9ae2a773bada0c52cb563efb1daf46357cd0a19ad53a787e37e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHP4U2M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0SLz7aGh%2B4%2BJyuKWww08Z4%2FAYjAxjCablzRTL8g%2B%2FLAiEAqb0pduqPG1%2B5txl4t2NAjXIdSsZ1xdbjZg1Mo1pnj1wqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETN4krTNbbx5v9f%2FCrcA0aGe59BbEIYY7Vuzki43CbaAVELW7A36RB4Fr2Hl3%2BJ3ZZ%2FqIM5Nc%2FZWd2%2FlQBGdYZ569rSw29x82jW%2BnLJzP6EkqIMZYpuBaqBqcnbwSMhUWkH5WktjPbqZOy7rMqB7lZOI2TOdHtN%2Bzn7Mg9wx6TgVa2OC3d2Orc2B3AbX8duuLzrty1zQz%2FJqK7KH4ArF%2BHXZbE7v1z20LXyl3vZn%2BValtcE0A7onn62lYHgHz52J27Vad2xQeoeD7WwAaKAzyfLwZn6%2BG0100Cp%2B8%2BBfkaJxeTGHwqTu8qoWHGlr6md8hWkuZbFrejVJJMruFMhjc3G1qNJCjFpV2loZNidDcfzJOn%2FUxCyasXPPsAxcP4CwgXwq%2FgUrFjv%2F6ar9wX3nqiLUxDTK0wjcTH2KVHdOdbZZ00k6BLcMl%2BTjXLx45oyPrD5GSXqxZX0YNJGmW1KLJuTklT%2FuH1xurFYH7PkKFBg3EvC%2B%2FfGgclhsf4cgRhVOu7q%2BRKHTISWW4aTMroMTHcu%2FnYTaA0%2BPWoc%2F%2Blms07Xhp1rQgnexTJIkZOm2Zyb09GyXJGfILPlIz3RDr%2FgTNQHD%2B4U6zi9%2Fw2ZSPshtDNoquFnBZZn3ZtBWmKl2hhWSXVoihtEVHDXLFDTMI6Oib8GOqUBTGFwmZJ5Wzr0PuaExB3y9BnY%2FZ1moPzAJyuXoMrb7SXu%2BkQT7QxI11ohWWwTZhdDGA5wyT5H%2BadwB0659v6imXRI2YOYHAljoNYHjPBk5ipUw5%2BA1XjUPoVQp9sWQu6zfawts8fngah3lI4aHm4Fkprx7OoqCbg6zUCa%2BNuSeWSQW2dye%2BWKHUQN3D%2BuFSJo%2FTxlLLQ8jHXAlQvkItbX7M%2BACd5i&X-Amz-Signature=d41808477c6aa5dcc9061bf47f84c871300906a15437a1d8d0b6ea5d0261360a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
