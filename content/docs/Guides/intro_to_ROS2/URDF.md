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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQALJXR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2s9thxsbCusiKRTSjxwcTc1IF6MWdeIF3WvFxQGdBjAiEA1h1HZqgHU4RM5x224uZnCFPfIdmtv1GnXfu7ZsjnfAsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLHBmC%2BQ%2FU%2F94ov3pircA7Kf7pHdLZhKP0D5DHCuFmXJq23C6PNenZ4iR%2FBg4ca%2Fvc7pSkKN1oLE9Mzkl55pPmxY2qtq%2BBbOK7jC33RZGstTvnnSGhpIqp3qxsbBZQhJ7A0r6UxQ8M1zqH%2BClkP%2F%2Bjb6%2F5yQHsYkjMJxVGHe%2FAjAzbOnfiJHpzP0G9gaDO0MdLKg2AUvBR%2BVdTbx%2Fe%2BhGGtcDumX1NmY6I%2FsVpkRRz65Szlfcr2PSEo3NpUfbsWG3PspfEsYjfznUkB4E%2BzkH5vI7WaW%2BhPT58eW6G2lWerpsQk8G5upQsoYMnv7KmTaiwig71uTJkaeOh7YpM0iLoLh6a7ULHQ2Nk30rH4e25gBZf8MFFn8dtZ%2F3mhfFCUrTwNUHJ3n%2FFEirBjFJv9IWF%2F0rJbVDPWHa%2B%2FGS3AoPPX7qIkTwKMVq6yJr9YTL1JhA6E0Xl%2FQpYd0vRo9%2FpI8u%2F2%2BqFOkSiKKyMnXVQ2%2BMFTqiULVsiHwKhTdyu3khn5ZofLd%2FKCAaCYhx8Sq6kCJIe3DYjdn5m3UroVxECEGoS5B9gZU5IOysSDfok%2BGgTkQndVirdhqZcUyKhDWjGq8KVmZnBOFf9%2Fv2%2F5kWxwkvXoq3dvDBgk%2FiR7qCjd5FiQJgwz4x30GHDgcqk9NMMDal78GOqUBe%2Fv94EsaD6CCEUyKf7XoxJFbbpuSCja1EaVdljIs%2F4BGqhpKlKA0C%2Fl4OBGTEwcArifnwBA2SNAnH%2FBTqEtqmkhoLJQRCpdRYBCUUKgeQzwvhV%2F7wXv3i5J%2B9AKnXIB7eH1hsIXH%2Fquq%2BbwmSUR0%2B22ETrzL7LxdttaRXyYjoARkJgMea8kcr1wFYKmo0CmaQeff2vF90bK23lLQLZU8%2B4IopM8Y&X-Amz-Signature=6f9c5bb294515ff52f4f5adce0d3c51ccd5b1e3a38cdcea4c8c13ae7e6941d23&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQALJXR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2s9thxsbCusiKRTSjxwcTc1IF6MWdeIF3WvFxQGdBjAiEA1h1HZqgHU4RM5x224uZnCFPfIdmtv1GnXfu7ZsjnfAsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLHBmC%2BQ%2FU%2F94ov3pircA7Kf7pHdLZhKP0D5DHCuFmXJq23C6PNenZ4iR%2FBg4ca%2Fvc7pSkKN1oLE9Mzkl55pPmxY2qtq%2BBbOK7jC33RZGstTvnnSGhpIqp3qxsbBZQhJ7A0r6UxQ8M1zqH%2BClkP%2F%2Bjb6%2F5yQHsYkjMJxVGHe%2FAjAzbOnfiJHpzP0G9gaDO0MdLKg2AUvBR%2BVdTbx%2Fe%2BhGGtcDumX1NmY6I%2FsVpkRRz65Szlfcr2PSEo3NpUfbsWG3PspfEsYjfznUkB4E%2BzkH5vI7WaW%2BhPT58eW6G2lWerpsQk8G5upQsoYMnv7KmTaiwig71uTJkaeOh7YpM0iLoLh6a7ULHQ2Nk30rH4e25gBZf8MFFn8dtZ%2F3mhfFCUrTwNUHJ3n%2FFEirBjFJv9IWF%2F0rJbVDPWHa%2B%2FGS3AoPPX7qIkTwKMVq6yJr9YTL1JhA6E0Xl%2FQpYd0vRo9%2FpI8u%2F2%2BqFOkSiKKyMnXVQ2%2BMFTqiULVsiHwKhTdyu3khn5ZofLd%2FKCAaCYhx8Sq6kCJIe3DYjdn5m3UroVxECEGoS5B9gZU5IOysSDfok%2BGgTkQndVirdhqZcUyKhDWjGq8KVmZnBOFf9%2Fv2%2F5kWxwkvXoq3dvDBgk%2FiR7qCjd5FiQJgwz4x30GHDgcqk9NMMDal78GOqUBe%2Fv94EsaD6CCEUyKf7XoxJFbbpuSCja1EaVdljIs%2F4BGqhpKlKA0C%2Fl4OBGTEwcArifnwBA2SNAnH%2FBTqEtqmkhoLJQRCpdRYBCUUKgeQzwvhV%2F7wXv3i5J%2B9AKnXIB7eH1hsIXH%2Fquq%2BbwmSUR0%2B22ETrzL7LxdttaRXyYjoARkJgMea8kcr1wFYKmo0CmaQeff2vF90bK23lLQLZU8%2B4IopM8Y&X-Amz-Signature=d8c24df9540e72f22997673105e115391c4ef339974af8f248b52752bf06ae6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
