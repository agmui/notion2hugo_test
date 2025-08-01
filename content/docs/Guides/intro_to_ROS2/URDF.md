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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYFJEJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA69JB6I1xqK1y3CvWTylDj4x0kaRExzL5jdM70VDRt2AiEAyXmeegBns1Q120jzNOOFWgT9IJhhwj1zh%2F0wv7Au1PsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuDRGpo%2BT7ifkx9JCrcA6aKuuI5xWnjWx4A%2F5oCYoxkhci09I%2FFZVInOJux22Oi8zNkg%2BR0G7EcTZqnOXE9Ks%2FUQCuHbygLVTn8aCytyzQfkY8VFbT6Q1YXQHCgaDXJL%2BGm0klcSO7IBfDnvurLI90bVlzYgXQVJ8YQBUHEWn9u2pf6QqlsjHKCi%2BEdAsDEPMUnfU9CingfLag8IV7v9fnh8mNzGz8sr%2BqN5ibbuaa9sxKOkPKQUGveH5XYDj1u5O41NH6%2Bx0MvSDp3PkUntH56s3RCSxbwlhNDrOYm0PF6Ey7h51wfYvuqIIQESs3F7hSnDaYr7SmWE1VrxeLP0Vjj5xj0IqqMIBXIIkNBACz5Yr%2FbdaPPCBDNKapLFcNnDprMRQvjVCE7hmWGmA3muWOhJhPFljXdPosmvbChhsQx0vYCbuNMVwPC2L9drxx0WbxtwaRrGmQarR5qteG4W70nuyKzgL5TPFN%2FibxjCJ1KyT7SvPf8M002lfFLlDE3JbvANyJ7g6vLQJ4QCg0kVUMK4SKblUduUyfWIKNSiYnpfaA6cNmMwC7DXWwcXmK%2FaYJq7ZJtZD26IcgBGJg%2FDIU5OrjSbYxwph8BJATpW0ZXn9%2BLNBVkq57IWcirG%2FQfjzJ1MKq737T39SIuMNf6s8QGOqUB%2BgG6bsjGvRWom5eZYU038nqtpzh6dy8hk5gazf7lRcpd60%2Fh6B%2F55G9Z7%2FdbyHBOhtuwqq3yjWeESXRTMj0DG2x8yTWXl%2BmrfAWYehYTRXh%2FiZlM500qT18A7YdWjRlNI9WX0S9qnWPUjd4XDqKJfEoHpuunKh6Sue9hWE1lusAgQDMgTGm8kr1Rs182CXrv3RvtvxYZAjzoQAD5NAbl0UpcYSWf&X-Amz-Signature=a535cfc6ffe4c5ac19b23624f8cca8dc6888f27b68fb6b805be609e9470d1894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYFJEJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA69JB6I1xqK1y3CvWTylDj4x0kaRExzL5jdM70VDRt2AiEAyXmeegBns1Q120jzNOOFWgT9IJhhwj1zh%2F0wv7Au1PsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuDRGpo%2BT7ifkx9JCrcA6aKuuI5xWnjWx4A%2F5oCYoxkhci09I%2FFZVInOJux22Oi8zNkg%2BR0G7EcTZqnOXE9Ks%2FUQCuHbygLVTn8aCytyzQfkY8VFbT6Q1YXQHCgaDXJL%2BGm0klcSO7IBfDnvurLI90bVlzYgXQVJ8YQBUHEWn9u2pf6QqlsjHKCi%2BEdAsDEPMUnfU9CingfLag8IV7v9fnh8mNzGz8sr%2BqN5ibbuaa9sxKOkPKQUGveH5XYDj1u5O41NH6%2Bx0MvSDp3PkUntH56s3RCSxbwlhNDrOYm0PF6Ey7h51wfYvuqIIQESs3F7hSnDaYr7SmWE1VrxeLP0Vjj5xj0IqqMIBXIIkNBACz5Yr%2FbdaPPCBDNKapLFcNnDprMRQvjVCE7hmWGmA3muWOhJhPFljXdPosmvbChhsQx0vYCbuNMVwPC2L9drxx0WbxtwaRrGmQarR5qteG4W70nuyKzgL5TPFN%2FibxjCJ1KyT7SvPf8M002lfFLlDE3JbvANyJ7g6vLQJ4QCg0kVUMK4SKblUduUyfWIKNSiYnpfaA6cNmMwC7DXWwcXmK%2FaYJq7ZJtZD26IcgBGJg%2FDIU5OrjSbYxwph8BJATpW0ZXn9%2BLNBVkq57IWcirG%2FQfjzJ1MKq737T39SIuMNf6s8QGOqUB%2BgG6bsjGvRWom5eZYU038nqtpzh6dy8hk5gazf7lRcpd60%2Fh6B%2F55G9Z7%2FdbyHBOhtuwqq3yjWeESXRTMj0DG2x8yTWXl%2BmrfAWYehYTRXh%2FiZlM500qT18A7YdWjRlNI9WX0S9qnWPUjd4XDqKJfEoHpuunKh6Sue9hWE1lusAgQDMgTGm8kr1Rs182CXrv3RvtvxYZAjzoQAD5NAbl0UpcYSWf&X-Amz-Signature=90d7e946fe237de1dda2895c3589eed1f019687f56d5a7a0a06912a9f6889ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
