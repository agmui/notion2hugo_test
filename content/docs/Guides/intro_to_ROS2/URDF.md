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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEB326FN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsYnwy87hb5dtU%2BIux2AcWOghMaF%2BAse2mg9nChlAt1AiBeo%2B%2FsopKkOdsEfGO%2Fwyp8F86FuFib6zFwFi0StfU56CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdhReQSjrQCjsKV%2BsKtwDv92Q7wJyyPgt6%2F86Giv48BlH3A94ld1fij%2FSX0yfstzamqOzaUI6C05Kp7RHNt4uiY2GH9DtBsq2KNHEpKGHYJggszSoJa32wrb3J8B4SFy4uYP8vyv7%2BCvBDWnfpdcs2f5COaWDemXOs6OgMNvOXxpLL5gFHlae38qzkE%2FMXiuabD1wtNY1Yu77S7duG51vBWG%2Bu%2B57exbnzuVyqFhZF3shx%2FH9KI37Fe1eEHW%2BM3oWq2qJ1XD%2BK6ovucym8afr5lSxB6S43lXLuVnLbzvcgskG%2BfmHtCHcm9NIg6OtPpJegZvWF8nnBPkhsH9Z4FNwppcrlwdao399G4KDAuFgzaggHTFQkfgwd2AQJ3hYeGD045UJIHZQWoDDI0sFQsG2NTTExDo8dckCfremXTn2LqnGZjU12rXyPNkBZrt5rJ93DPNn0pCzo3eh9PP6lSIBIateXLys%2BfDuPQD2QImmIIX9wDCJa1rA5xoOAysVGQyyZVbcUzbKBqalh44e93ipNzoM8u4ukntZ8VdSfASeHrEBmjCn%2FWt1ZG0VHCqWhjNQ6%2FzK92SFo2uxVIV746yrR%2FPgUmLSqYflEe079MD0jr0Ube2fwAge1LKOJbzCDMNr3VLdGx21GAmx6TEwzbC5vwY6pgEIp0EYkGiKss16aMa7yqbXhiTe4qK%2BEPLMTqJe52JUhmpXGBkpVXVC9Deg5Ge%2Fg2wjufL%2BE8Zi%2BLUP8%2BlRrz9mnbajdpi0SgB%2B9wUSzW3nWuqS1UrD83XDZHaZNtgw8oEany0ELo4a3Cv1l1q0gKpYOb%2FlweBfgom2VehO68EyGxnP%2ByuB%2Fxw8oWAf8s8Y%2B%2BKsRNsxgNazD8FB4TXvatbPkUJw%2FvPU&X-Amz-Signature=00f390eec9fe0afe9658d32470bbdcab999e5b0ddf3ca990928a4b3fb56a05e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEB326FN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsYnwy87hb5dtU%2BIux2AcWOghMaF%2BAse2mg9nChlAt1AiBeo%2B%2FsopKkOdsEfGO%2Fwyp8F86FuFib6zFwFi0StfU56CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdhReQSjrQCjsKV%2BsKtwDv92Q7wJyyPgt6%2F86Giv48BlH3A94ld1fij%2FSX0yfstzamqOzaUI6C05Kp7RHNt4uiY2GH9DtBsq2KNHEpKGHYJggszSoJa32wrb3J8B4SFy4uYP8vyv7%2BCvBDWnfpdcs2f5COaWDemXOs6OgMNvOXxpLL5gFHlae38qzkE%2FMXiuabD1wtNY1Yu77S7duG51vBWG%2Bu%2B57exbnzuVyqFhZF3shx%2FH9KI37Fe1eEHW%2BM3oWq2qJ1XD%2BK6ovucym8afr5lSxB6S43lXLuVnLbzvcgskG%2BfmHtCHcm9NIg6OtPpJegZvWF8nnBPkhsH9Z4FNwppcrlwdao399G4KDAuFgzaggHTFQkfgwd2AQJ3hYeGD045UJIHZQWoDDI0sFQsG2NTTExDo8dckCfremXTn2LqnGZjU12rXyPNkBZrt5rJ93DPNn0pCzo3eh9PP6lSIBIateXLys%2BfDuPQD2QImmIIX9wDCJa1rA5xoOAysVGQyyZVbcUzbKBqalh44e93ipNzoM8u4ukntZ8VdSfASeHrEBmjCn%2FWt1ZG0VHCqWhjNQ6%2FzK92SFo2uxVIV746yrR%2FPgUmLSqYflEe079MD0jr0Ube2fwAge1LKOJbzCDMNr3VLdGx21GAmx6TEwzbC5vwY6pgEIp0EYkGiKss16aMa7yqbXhiTe4qK%2BEPLMTqJe52JUhmpXGBkpVXVC9Deg5Ge%2Fg2wjufL%2BE8Zi%2BLUP8%2BlRrz9mnbajdpi0SgB%2B9wUSzW3nWuqS1UrD83XDZHaZNtgw8oEany0ELo4a3Cv1l1q0gKpYOb%2FlweBfgom2VehO68EyGxnP%2ByuB%2Fxw8oWAf8s8Y%2B%2BKsRNsxgNazD8FB4TXvatbPkUJw%2FvPU&X-Amz-Signature=9d8744572af0dcbf6695154e36070f62f5b7db4d4a2d30520a67f1d5297907ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
