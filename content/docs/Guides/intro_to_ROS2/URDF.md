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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDSIOWY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3Uwi%2FT%2F7n8SM%2Fhkr6TtThDAraIx3CcqXBP2pbTxSRzAiEAizQctO5nrgbCEHPX9ovweo2aYaCypTcfn%2B51bqx3XS8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrWRlPj8lnIOhlzTyrcA0XKbkODkR%2B%2FSNJdMPWtaAgHu4ygmAWVekQeg68T5SlB5op1N0zNpDK0Z9D0RTN%2BSooc0K5v79IHuhT%2FFodwJm9eCOjNj%2F3PpIPXGdkcTzo5qOo%2Bs4mMfpLboJ1VhD9e4YwmUOQp%2Fr65td7wMERkozYNb%2F6akMd%2BeoUo%2FK%2FlYcZQpPPAAmggG02V7UaQ4aGtNojLksyAJvhvSU5qf4uqfU4gLNrmdF4qRjr1enIQr4vBl93kV3MzlDTqFmHHEdZ4W%2F8Hh%2BesRMbR8JdMuGf%2BO25hjhJRB0YiXR%2B%2F8xtYUcEEYrEjUzWycBG91hAtuj%2B8NOhiABvvdb95Gl0hcR1OGGO6%2FKpzzy59m%2FRedydjrYPEIHy451S4e8mjSjZoNgx6VBA4q50flMb4Hn6GLaitG%2Bzzi7ukK9tRm0QEPYIMxmT7hJ7to2nHVUCdiIUaeyPBVIGDM6Hq1tE%2F1xiB6F4i%2BGXK0USDlZaTXynhE5cuYBbo63NYpchf%2Fa4Si%2FB0U8IwaRX0hW%2FGYTDJGOH2i7D50eSgky4VhG%2FuJD75xzuiJLOkuExcC1Vz7zZJPN6upA08p7Hr9KUWlEzQrZc5pOSFKypJBBEEiijdRp4BRaElsPG6gKrb91XsZm8CsoGhMLeUkr4GOqUBSu4RdNoY5LCSldKDpSeMR8AnMuSpiJTFhumQywa4mVq3w8AkT7zP5o%2F%2FBFQvUjrUcC%2Bo0VaAGXGlOZwDvlD7p1S%2Foakh03WNuh4JYS2cChMTKfzavRgga8iukSbS6urDb5PsDyp73lG8OsAIrRNTRt%2BK%2FTa6D1yVlHgfHh6iJrUMEG9P00ZG3CHSN22GcZ94%2BJVvPpDmxoPK3sG3qxeeFk%2FO2Xm0&X-Amz-Signature=656f7f8b5418c4b57621f3a4296d3b8db213207455b620bd31ecf644d4e1aa70&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDSIOWY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3Uwi%2FT%2F7n8SM%2Fhkr6TtThDAraIx3CcqXBP2pbTxSRzAiEAizQctO5nrgbCEHPX9ovweo2aYaCypTcfn%2B51bqx3XS8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrWRlPj8lnIOhlzTyrcA0XKbkODkR%2B%2FSNJdMPWtaAgHu4ygmAWVekQeg68T5SlB5op1N0zNpDK0Z9D0RTN%2BSooc0K5v79IHuhT%2FFodwJm9eCOjNj%2F3PpIPXGdkcTzo5qOo%2Bs4mMfpLboJ1VhD9e4YwmUOQp%2Fr65td7wMERkozYNb%2F6akMd%2BeoUo%2FK%2FlYcZQpPPAAmggG02V7UaQ4aGtNojLksyAJvhvSU5qf4uqfU4gLNrmdF4qRjr1enIQr4vBl93kV3MzlDTqFmHHEdZ4W%2F8Hh%2BesRMbR8JdMuGf%2BO25hjhJRB0YiXR%2B%2F8xtYUcEEYrEjUzWycBG91hAtuj%2B8NOhiABvvdb95Gl0hcR1OGGO6%2FKpzzy59m%2FRedydjrYPEIHy451S4e8mjSjZoNgx6VBA4q50flMb4Hn6GLaitG%2Bzzi7ukK9tRm0QEPYIMxmT7hJ7to2nHVUCdiIUaeyPBVIGDM6Hq1tE%2F1xiB6F4i%2BGXK0USDlZaTXynhE5cuYBbo63NYpchf%2Fa4Si%2FB0U8IwaRX0hW%2FGYTDJGOH2i7D50eSgky4VhG%2FuJD75xzuiJLOkuExcC1Vz7zZJPN6upA08p7Hr9KUWlEzQrZc5pOSFKypJBBEEiijdRp4BRaElsPG6gKrb91XsZm8CsoGhMLeUkr4GOqUBSu4RdNoY5LCSldKDpSeMR8AnMuSpiJTFhumQywa4mVq3w8AkT7zP5o%2F%2FBFQvUjrUcC%2Bo0VaAGXGlOZwDvlD7p1S%2Foakh03WNuh4JYS2cChMTKfzavRgga8iukSbS6urDb5PsDyp73lG8OsAIrRNTRt%2BK%2FTa6D1yVlHgfHh6iJrUMEG9P00ZG3CHSN22GcZ94%2BJVvPpDmxoPK3sG3qxeeFk%2FO2Xm0&X-Amz-Signature=bff974ae0ee21508282f146ac4486e626d4ddae3e71ed01e45c671a0df775248&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
