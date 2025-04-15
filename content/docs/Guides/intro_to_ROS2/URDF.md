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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGHSCLW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL6TkD%2F88eqkjw5M3weO302vrpd5ik6Tjb6NJyOV0VPAiEAns6eNtNvA4tjIYQKEy2%2F%2FfIvhjq3nTWESPGrI4RJgtQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNwtslW%2BWDzdYc03ASrcAz1wHgiKRVWWayAkBsPdzdfqBXA9I4e4u%2BhVRB3w%2FEPH%2Byqq%2FetmKH4Bpnte7fKRrQPAu2HY%2Busp8QKaaZFlRqMjmOFCFQZ%2FMqsfLAxWBchcKazfXowYo1iT4axNefhFG4fLvSCL%2FO6G%2FlAHABQHLBIPPzPtfRQ2%2FfL%2BBkoe3yEjRzlOj42EhNlUJtbUlJp6812m43ZC8qTp8Lhuw7l2138zAssSwAZlWqMRWstDjECgHE1%2B79yR7BYbV%2BneiVLA7wDisZOyGDPIskkvpUS2yQ0hnAv9sWlBghmx8fGdWIWr3XcAxBuw1O8u2snrRfIQdtdDMzAxxPx2Y59ppiL29LinUueKqzVKxWP5V1mBcBaidfqLh5LJHE4VhJWm4pH5DpMSLcv2%2Bk%2BUQ9%2FGZb2gErhEOL14yI%2FxnTPiwrGyqDuaNCCBLX7g3%2FHvTzel0Vsda0%2B3CUOL3WttdxOj9YxG6UXoQ6QCea%2Fij%2FTr1vBckRRJSAE7xQnEnjhTClnDNiKy154e4uGzk%2BAv56xLjOrziDOnVUmJgcDLOUMRXtFsN9ivKhVT7TTDiZL8yYJAhPH68ZOOFmPVmxz6HCnbVrD%2BiUdLQ6C7IUtuGOFALaPYxEhsV%2BQ5a3h3yWaZRkeZMM3c%2Bb8GOqUB7gKclYuQl%2BRvXR%2FUX3riz%2F5gmzZuKYNbOjpw9Q4YBtdRgV64QA%2Bbzif%2BD3CreJtbKX%2Fm7mJ3RgGWIL2PADuqCl50w8dgXZ4sZz0lp3J8x94bj3JWoPMJVwIDYFujAiNRKr3wIpv8GGwyjq9Zw7abhF%2F3lw6VYDpD%2FLabDSWoRy6xcEmtIVCMzDSdFGbj7gWUKjaw8IQ4v91b0bUAG3NqokJd84nE&X-Amz-Signature=97bcce2f127149fd663520855f3922343d10317a6c608a4e39bb046e66a93265&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGHSCLW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL6TkD%2F88eqkjw5M3weO302vrpd5ik6Tjb6NJyOV0VPAiEAns6eNtNvA4tjIYQKEy2%2F%2FfIvhjq3nTWESPGrI4RJgtQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNwtslW%2BWDzdYc03ASrcAz1wHgiKRVWWayAkBsPdzdfqBXA9I4e4u%2BhVRB3w%2FEPH%2Byqq%2FetmKH4Bpnte7fKRrQPAu2HY%2Busp8QKaaZFlRqMjmOFCFQZ%2FMqsfLAxWBchcKazfXowYo1iT4axNefhFG4fLvSCL%2FO6G%2FlAHABQHLBIPPzPtfRQ2%2FfL%2BBkoe3yEjRzlOj42EhNlUJtbUlJp6812m43ZC8qTp8Lhuw7l2138zAssSwAZlWqMRWstDjECgHE1%2B79yR7BYbV%2BneiVLA7wDisZOyGDPIskkvpUS2yQ0hnAv9sWlBghmx8fGdWIWr3XcAxBuw1O8u2snrRfIQdtdDMzAxxPx2Y59ppiL29LinUueKqzVKxWP5V1mBcBaidfqLh5LJHE4VhJWm4pH5DpMSLcv2%2Bk%2BUQ9%2FGZb2gErhEOL14yI%2FxnTPiwrGyqDuaNCCBLX7g3%2FHvTzel0Vsda0%2B3CUOL3WttdxOj9YxG6UXoQ6QCea%2Fij%2FTr1vBckRRJSAE7xQnEnjhTClnDNiKy154e4uGzk%2BAv56xLjOrziDOnVUmJgcDLOUMRXtFsN9ivKhVT7TTDiZL8yYJAhPH68ZOOFmPVmxz6HCnbVrD%2BiUdLQ6C7IUtuGOFALaPYxEhsV%2BQ5a3h3yWaZRkeZMM3c%2Bb8GOqUB7gKclYuQl%2BRvXR%2FUX3riz%2F5gmzZuKYNbOjpw9Q4YBtdRgV64QA%2Bbzif%2BD3CreJtbKX%2Fm7mJ3RgGWIL2PADuqCl50w8dgXZ4sZz0lp3J8x94bj3JWoPMJVwIDYFujAiNRKr3wIpv8GGwyjq9Zw7abhF%2F3lw6VYDpD%2FLabDSWoRy6xcEmtIVCMzDSdFGbj7gWUKjaw8IQ4v91b0bUAG3NqokJd84nE&X-Amz-Signature=19c13c2fe8fe3d71f9fe005d9a6e9e33d007bdc6ffff158c98e356f7317834b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
