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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGXHZSW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCDI5pY4umpOYW8sIODmkdRumycdeIMfTBB1PYQSjtGQQIgTx1wzeAylmIfrFJwJ5PLjvZLIZSIDmfFRHGRIA8UVEkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGZmaw9YKw6YRB8E6SrcAyDgdvN93uqUffm995rrq%2FbMaF30K7YU9ppZ2Lhni%2BEmA9o2HB43hLlawl3gTOAs5Jt7%2BS6nZvN0xAYNxLxHxYrUrLynsFHq1EQ92yWDITR%2F3638gTCsFJyv0Be5xJ%2BDGKr0nNKyPOcIAJ7HeWzL79D2sDHFcK8pCMxImb1W8y8%2FsQRDNfG62r1%2BFM1vLcvbW3d8yq7GnXNxfH4TYIRYU%2FJa%2Fv0f0kVNMqBd66lxX4RWXjFm0IXVrrEAVH30Usy3dFuKpZue9L5CqenLumfEZAX7X7Pb9mptUAj0Gn8vMZSy2V%2BgoAr8gHmuLW8Kz%2BcFBxrtPDKLBs57otmZbEQ1x9OnL%2FjKtUC6UcsjJe7ymbK%2Bdasf%2FdKiy%2F6f1CBKG3Os%2B%2BgMQLSYO89eeGJ7kLxaS7ireWH68e9dJ7cNLshR5CATxPVKOBgFeHcKBjIoUBqi0TfO9WGTIZCjmzUUxD62IuiLqp2VwJpg%2F4CBu8pvqB4L%2B0pAjAxUxVzOtoVMOBO9Tuv6lGrZRCXsihV8Alz4GHz57nSsg%2FhRx6hmod34lBW1VWzzLDjWj%2BVv3DDhFaXq46TYXBN9%2FBM2YBau%2Fv2rlNuNUWgC0MPYf3Dhfcz4tNcox5keFIWx5QCa8gu6MJ3Rj8QGOqUB9HnCz%2B%2FPEChwYg3xWyRob9j%2FZlnF4Vtvxe7mlSA%2BpiucBsWUck6sys%2BngZ5Hp51AjMJhsEgCims4jmOu2Bb7IUCKsp4fl3k3QEsKmacjRRDjrO4DM6BY%2B2%2FXd%2BF1T9yTZ1gQ8iSXZz3xV%2BHhyYREKgb%2Bw3BJk3FiEDI%2FJs%2F4Qsbiyo0o3teZVt2aSuWoXrB%2FKj4okRQs8fIw7WKR%2F7on%2FCsI90O4&X-Amz-Signature=3613aec9a8d352d0a8ecfc93ecd069f22748158e896948766f13904ede09a022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGXHZSW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCDI5pY4umpOYW8sIODmkdRumycdeIMfTBB1PYQSjtGQQIgTx1wzeAylmIfrFJwJ5PLjvZLIZSIDmfFRHGRIA8UVEkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGZmaw9YKw6YRB8E6SrcAyDgdvN93uqUffm995rrq%2FbMaF30K7YU9ppZ2Lhni%2BEmA9o2HB43hLlawl3gTOAs5Jt7%2BS6nZvN0xAYNxLxHxYrUrLynsFHq1EQ92yWDITR%2F3638gTCsFJyv0Be5xJ%2BDGKr0nNKyPOcIAJ7HeWzL79D2sDHFcK8pCMxImb1W8y8%2FsQRDNfG62r1%2BFM1vLcvbW3d8yq7GnXNxfH4TYIRYU%2FJa%2Fv0f0kVNMqBd66lxX4RWXjFm0IXVrrEAVH30Usy3dFuKpZue9L5CqenLumfEZAX7X7Pb9mptUAj0Gn8vMZSy2V%2BgoAr8gHmuLW8Kz%2BcFBxrtPDKLBs57otmZbEQ1x9OnL%2FjKtUC6UcsjJe7ymbK%2Bdasf%2FdKiy%2F6f1CBKG3Os%2B%2BgMQLSYO89eeGJ7kLxaS7ireWH68e9dJ7cNLshR5CATxPVKOBgFeHcKBjIoUBqi0TfO9WGTIZCjmzUUxD62IuiLqp2VwJpg%2F4CBu8pvqB4L%2B0pAjAxUxVzOtoVMOBO9Tuv6lGrZRCXsihV8Alz4GHz57nSsg%2FhRx6hmod34lBW1VWzzLDjWj%2BVv3DDhFaXq46TYXBN9%2FBM2YBau%2Fv2rlNuNUWgC0MPYf3Dhfcz4tNcox5keFIWx5QCa8gu6MJ3Rj8QGOqUB9HnCz%2B%2FPEChwYg3xWyRob9j%2FZlnF4Vtvxe7mlSA%2BpiucBsWUck6sys%2BngZ5Hp51AjMJhsEgCims4jmOu2Bb7IUCKsp4fl3k3QEsKmacjRRDjrO4DM6BY%2B2%2FXd%2BF1T9yTZ1gQ8iSXZz3xV%2BHhyYREKgb%2Bw3BJk3FiEDI%2FJs%2F4Qsbiyo0o3teZVt2aSuWoXrB%2FKj4okRQs8fIw7WKR%2F7on%2FCsI90O4&X-Amz-Signature=4378066e581082596410d3a024f7ff2b4d5fc3780303880daa31237a56db314f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
