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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWZ55PT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBlydpr1I%2FfzRES8btiRHgIWdLlxKNv81ZXczdOBPoJ1AiEAr8cwozy4rwAH%2BhBB9vVfzFXIFiLQAkXgQfo%2FwXh5niIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLq4t9FHYSjPzorhVSrcA6iEls5oVVwoxwNkyc%2BPt3KOW2cVD%2FlCsPNo6AqIGy5aImH8OC3OfBuyQq%2FhCKCmElr7aND6PHKJaEj8nMulGnZa8S5XMjQaagN0IKE2FT5pYiqUqH1%2B4GfrPY5BhtyrGXKmk6eT3LgvorlSJcCkukb%2FYCwZypsL6RHwPbqSdpoiUjF3Be9z51Eh5lAaCoFigF%2FajIQFdGZ5qu1h5UR%2BYXl8d4AGnBhTPXx5TtG6S2cD5PuV%2BlQrZJVXdybod01v0HSnehQtzPOI0RHl%2FgCrwyJxrB3nf%2FUXI4mBch3nAQBm8HW92mDtW5sYUqx3mKTz1FNKEZc0zQhq8ga8OFG0F4hXS69KwBTiFsEk3xLDWmNJjzPyTCoC6%2F3FCvQ7ZfR8GhpaIQWzDaB6SiLwEDeNtt0taK0tmbJ25GnQA7C%2Bni1b5533opC7YRRv1FzQTjJGnFVBGjJyG2CLX1mbomW%2BedLSAvtz5nL3lQmeraZMCGv%2FK0wIFi5pdfVc%2ByfnxBhkm0BndtVxf%2BI%2BJudkOSPGqR0sYpdPUtc8zJm%2BQUiaxsthQlgNsC7H0v9W%2BLJNgm0wUmc0ZD0HOAWUh88kUYfmSa3N1EAqmlRs4x0i3bN5LL9uNggCp%2B50fTaB7MPvMNeotL4GOqUBLb1EvZkw3mZWooSa77Arkv8GX14%2BxDAX8AQIFNLewOtaXSe%2BbqsTVvrjRQ%2F6HihtdN6j0zfiBMzIvO1XoRgIqraIb%2BXDO3ZalesZkdLBqW3dwv%2Bse8Vs5FRl%2FeheoCN9wlPxxtvEo66NOsm6bREUR2z%2F8rYkf7ECRA8TRgRbK7qqQykzii2CsE%2BNxWy0%2BhoruMmWOqNj6HkbcKxyL1%2FPTzFmHhxI&X-Amz-Signature=f2aa9e7b80015fe3edee9f5250e133ecd3965f5ee7f3457d793689db835f6a92&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWZ55PT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBlydpr1I%2FfzRES8btiRHgIWdLlxKNv81ZXczdOBPoJ1AiEAr8cwozy4rwAH%2BhBB9vVfzFXIFiLQAkXgQfo%2FwXh5niIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLq4t9FHYSjPzorhVSrcA6iEls5oVVwoxwNkyc%2BPt3KOW2cVD%2FlCsPNo6AqIGy5aImH8OC3OfBuyQq%2FhCKCmElr7aND6PHKJaEj8nMulGnZa8S5XMjQaagN0IKE2FT5pYiqUqH1%2B4GfrPY5BhtyrGXKmk6eT3LgvorlSJcCkukb%2FYCwZypsL6RHwPbqSdpoiUjF3Be9z51Eh5lAaCoFigF%2FajIQFdGZ5qu1h5UR%2BYXl8d4AGnBhTPXx5TtG6S2cD5PuV%2BlQrZJVXdybod01v0HSnehQtzPOI0RHl%2FgCrwyJxrB3nf%2FUXI4mBch3nAQBm8HW92mDtW5sYUqx3mKTz1FNKEZc0zQhq8ga8OFG0F4hXS69KwBTiFsEk3xLDWmNJjzPyTCoC6%2F3FCvQ7ZfR8GhpaIQWzDaB6SiLwEDeNtt0taK0tmbJ25GnQA7C%2Bni1b5533opC7YRRv1FzQTjJGnFVBGjJyG2CLX1mbomW%2BedLSAvtz5nL3lQmeraZMCGv%2FK0wIFi5pdfVc%2ByfnxBhkm0BndtVxf%2BI%2BJudkOSPGqR0sYpdPUtc8zJm%2BQUiaxsthQlgNsC7H0v9W%2BLJNgm0wUmc0ZD0HOAWUh88kUYfmSa3N1EAqmlRs4x0i3bN5LL9uNggCp%2B50fTaB7MPvMNeotL4GOqUBLb1EvZkw3mZWooSa77Arkv8GX14%2BxDAX8AQIFNLewOtaXSe%2BbqsTVvrjRQ%2F6HihtdN6j0zfiBMzIvO1XoRgIqraIb%2BXDO3ZalesZkdLBqW3dwv%2Bse8Vs5FRl%2FeheoCN9wlPxxtvEo66NOsm6bREUR2z%2F8rYkf7ECRA8TRgRbK7qqQykzii2CsE%2BNxWy0%2BhoruMmWOqNj6HkbcKxyL1%2FPTzFmHhxI&X-Amz-Signature=0a54bc3c1bfad8c1b655e3dc2ba894a5dd6e53efb9f6a44d0b624002f2308e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
