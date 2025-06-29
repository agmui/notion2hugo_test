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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTP5XBO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOclXlTEaTBYxWml7J%2FONtpLAZLrXKm2xC0D%2BK2B9NfAiEAn26yYFzH62TroM28JJIfxv3mAZHCH2oRb3%2Bm%2B%2BPnw9gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1DQU%2FKUkgu3QvbIyrcA90iRPL8Eai6gmdj%2BeaK%2FvTXHTvt2xVHMT6AN%2FJeFQ0vJtB1A%2BlwQw4OyWowZkjiDLkMfCSqB6kZMnxDgSKSOkd74XiIMhr6rEU3ZfBoPP5lmd36wvg8OM0VHGL11jfk1bS9m4BXb8pjom8YYlWHowMFlFAdo3BjnMpbHYKvKTURGxMb5N5wGC%2ByHnFQD1silzV8gGydIOaC8F8v1Qh9TQJyn3435gHZHVxYiLVdc9lQUi4uLJHET2XFcACjQ7viwRfpCSCOevnoyXuPZhp7lThvrVKYkPjYITvPoEs%2FmHtSld%2FYLRlPBaJjoVhrWHDqFvK41E9VAX%2B8L0B4I5DDaUzBrnhLIVZ4HuLRe6vQGXlar1xcECGxhwOf1bmQv4SprnRN%2FdfWiLmdR0ufyINIZLxhGOgCQqXutvPEGZJzoF2VpQJGTZ0a08bZ%2FmIC3JS9Gw6jV08EES19CY1fWAwtYYrr9gr4OgeLJRFbltYoxkX1tiANQV5TQ%2Fe5LvZADIQ8Ohzr3eCjP1%2FWG1v9PTN0xpZwPmnqZG54c5i1elUnsLGy9ZRL8XRv4fw4jJc%2BryO1wSn3g0YGQT0ImfDY8opUHOuyWqia2Kohe2S5gIdBSaPyWaiP9x2IC1cE4H1MMKC7hMMGOqUBdr7WoGZSbbhtXcHtp2xTk6eGjrh6alyDKQS1dIqU1tmsIAcmxOde1XOx0l0RdA4qMG2gSD58iM%2BGsbapx6Hb1ZoQN7JwappYWYngpj5QcgNWIppUc4RFWqJA61FK0xZvEzqnBCoOEqfrdz%2FIP7gdNgXM455HoSmoO9KTwCLOFkobr8FzSKcFAnJJ1HMMU3YHtJ%2FwelJbX8gh9qSjgCcBGjyzm%2Byz&X-Amz-Signature=f29e6ef54a7d8ea255afd61bec664a38bddf170223207c5ad847e2007625d08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTP5XBO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOclXlTEaTBYxWml7J%2FONtpLAZLrXKm2xC0D%2BK2B9NfAiEAn26yYFzH62TroM28JJIfxv3mAZHCH2oRb3%2Bm%2B%2BPnw9gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1DQU%2FKUkgu3QvbIyrcA90iRPL8Eai6gmdj%2BeaK%2FvTXHTvt2xVHMT6AN%2FJeFQ0vJtB1A%2BlwQw4OyWowZkjiDLkMfCSqB6kZMnxDgSKSOkd74XiIMhr6rEU3ZfBoPP5lmd36wvg8OM0VHGL11jfk1bS9m4BXb8pjom8YYlWHowMFlFAdo3BjnMpbHYKvKTURGxMb5N5wGC%2ByHnFQD1silzV8gGydIOaC8F8v1Qh9TQJyn3435gHZHVxYiLVdc9lQUi4uLJHET2XFcACjQ7viwRfpCSCOevnoyXuPZhp7lThvrVKYkPjYITvPoEs%2FmHtSld%2FYLRlPBaJjoVhrWHDqFvK41E9VAX%2B8L0B4I5DDaUzBrnhLIVZ4HuLRe6vQGXlar1xcECGxhwOf1bmQv4SprnRN%2FdfWiLmdR0ufyINIZLxhGOgCQqXutvPEGZJzoF2VpQJGTZ0a08bZ%2FmIC3JS9Gw6jV08EES19CY1fWAwtYYrr9gr4OgeLJRFbltYoxkX1tiANQV5TQ%2Fe5LvZADIQ8Ohzr3eCjP1%2FWG1v9PTN0xpZwPmnqZG54c5i1elUnsLGy9ZRL8XRv4fw4jJc%2BryO1wSn3g0YGQT0ImfDY8opUHOuyWqia2Kohe2S5gIdBSaPyWaiP9x2IC1cE4H1MMKC7hMMGOqUBdr7WoGZSbbhtXcHtp2xTk6eGjrh6alyDKQS1dIqU1tmsIAcmxOde1XOx0l0RdA4qMG2gSD58iM%2BGsbapx6Hb1ZoQN7JwappYWYngpj5QcgNWIppUc4RFWqJA61FK0xZvEzqnBCoOEqfrdz%2FIP7gdNgXM455HoSmoO9KTwCLOFkobr8FzSKcFAnJJ1HMMU3YHtJ%2FwelJbX8gh9qSjgCcBGjyzm%2Byz&X-Amz-Signature=fcf04a06eaaa6ea509e25d1886754ee78fc522b83de6355dd89d7d55620dc8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
