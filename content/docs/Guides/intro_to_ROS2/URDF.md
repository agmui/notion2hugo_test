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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OLXYKP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEo5xn4skbjsgZS%2F9352PeaFbP1kjBPCx8V2iLhG3loZAiEAms7KV6%2FarEKMGyF2gQgv8GshczZtIWZ4qyxFUsdVvi8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOn6Bl1ropu3N3J6ircAypVUsJtPfvcHTEYtO6O%2B6pbD5ZUUAcHWUrKn2weDb%2FQYxlqekoMjgGUNiBOBpybueLAUYtPcBWx0Aq0ZHTyZtpFo7ueCQ%2BlZ2dD7kaHmeOVUGTYnD4e5IxrmzP94tnl72zDfrXRkGb0s1eWtsaE%2FHAfe8qTt2RhcXgEb341CBnNkxlNua3l5mg%2FhHJEtVJwUcEdV6LEF7HaNnC%2Bsyda6BzxxQv94iNHfI0TL7%2BigTzI7W7ybfkSY8w8Hx8B4koUTa9ct%2FbAncS4uRVIf12HsABQw6Dnp3RCejFo4fU3igJ2g8baJxVxLzWA4uBcRxZu9B8RIFKqFeUP4U4EKaF1HXrOm7w6kpgksA8jlom8%2FmClLTDbYvS9Ih9qcOXR2IaFrgayGxc1b0h4qNStUKVO9PKAlnM2Ye7vcjKHNWiFjJzrbpDwmzTZ4tHKhdJck4cWgXxRh9Gh2bepzN880ExKnGsrIxQKVvQfzzuzTIfDAcKMT9tbSLHfH48sI7mCAWKk20zP0NNC9988vLQ8uOjeeD6RQQ3OMN52LXBiHTj9ewcP4XJZsEKXJ3nmaiq7TY%2BqY6r6Fmtf8V3xFdy%2F5Jl2%2FJ3NHdwyelt6MSRuadRTCu3I1Ukv9F3lO22yguEIMIS79L4GOqUBMm4uE03RK2zzlCbBRSrzhcf3MV30UqNk8ZS2%2FT9mceDLTgVdoEZpihX4ET3qpqqWKf3eNgeRLfC2Nu7N2QsEu2tHS1DaTPEkTt2VrGVAz95kuTUVRzDYuSjn27n82AP%2BcxaS8Phahu%2F%2Fw7Z%2BsD48rJjt8Y4e9UjpelkMYuZXWSwAKRnEsaYs3yHuPxKhpj%2FB%2F87IjNhNXhYbPgKEy02rMcmoTWOm&X-Amz-Signature=a6d65b03e590cdd51c8c47790f2e530128d6473a64b47d17837c32ec72a53504&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OLXYKP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEo5xn4skbjsgZS%2F9352PeaFbP1kjBPCx8V2iLhG3loZAiEAms7KV6%2FarEKMGyF2gQgv8GshczZtIWZ4qyxFUsdVvi8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOn6Bl1ropu3N3J6ircAypVUsJtPfvcHTEYtO6O%2B6pbD5ZUUAcHWUrKn2weDb%2FQYxlqekoMjgGUNiBOBpybueLAUYtPcBWx0Aq0ZHTyZtpFo7ueCQ%2BlZ2dD7kaHmeOVUGTYnD4e5IxrmzP94tnl72zDfrXRkGb0s1eWtsaE%2FHAfe8qTt2RhcXgEb341CBnNkxlNua3l5mg%2FhHJEtVJwUcEdV6LEF7HaNnC%2Bsyda6BzxxQv94iNHfI0TL7%2BigTzI7W7ybfkSY8w8Hx8B4koUTa9ct%2FbAncS4uRVIf12HsABQw6Dnp3RCejFo4fU3igJ2g8baJxVxLzWA4uBcRxZu9B8RIFKqFeUP4U4EKaF1HXrOm7w6kpgksA8jlom8%2FmClLTDbYvS9Ih9qcOXR2IaFrgayGxc1b0h4qNStUKVO9PKAlnM2Ye7vcjKHNWiFjJzrbpDwmzTZ4tHKhdJck4cWgXxRh9Gh2bepzN880ExKnGsrIxQKVvQfzzuzTIfDAcKMT9tbSLHfH48sI7mCAWKk20zP0NNC9988vLQ8uOjeeD6RQQ3OMN52LXBiHTj9ewcP4XJZsEKXJ3nmaiq7TY%2BqY6r6Fmtf8V3xFdy%2F5Jl2%2FJ3NHdwyelt6MSRuadRTCu3I1Ukv9F3lO22yguEIMIS79L4GOqUBMm4uE03RK2zzlCbBRSrzhcf3MV30UqNk8ZS2%2FT9mceDLTgVdoEZpihX4ET3qpqqWKf3eNgeRLfC2Nu7N2QsEu2tHS1DaTPEkTt2VrGVAz95kuTUVRzDYuSjn27n82AP%2BcxaS8Phahu%2F%2Fw7Z%2BsD48rJjt8Y4e9UjpelkMYuZXWSwAKRnEsaYs3yHuPxKhpj%2FB%2F87IjNhNXhYbPgKEy02rMcmoTWOm&X-Amz-Signature=4a3c2b5204798f3d63673fd3397a70a16b4ea1446ddfd5f1da3d7a90b4a3940e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
