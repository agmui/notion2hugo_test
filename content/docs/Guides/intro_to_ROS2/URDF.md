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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIMXPR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1LwEYYdb0SreQiqKipHNzL3JjKxUormROhOVC%2BhvZXwIgR9B539%2FwhOBvxpPIFKC4ww25fRlAGA9HScOHSyMfPusq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOF4hEPvOR2ZhoDhXCrcAwYmQ6kTwwJJcCUMwkSsFSY3vDrij36mvrRSwISWUW%2FKp2fNhX5rn7%2BXlOEP5afQUZ18onRPTaPFo5Zpxxm%2BS3A3Fw%2FbNfQWi4zUHSO6EbXGh4FD87HUx1Z3Y%2FxjHBhV%2B2A%2B43PEHrRKKOVl7yD%2F05MfdFjFrXBEMsPa5FmjVmxiw4sYFmMZUkw8Ly8yTCzbhQGTPe9HZEtAHL3Qs6zJ1UUK9lR4wiJMjDBi5KOI4ODlR2AfWCutvGWIh1XtgGRj04VzzBBegPbrUqYFBOWmksS91LKJCihdDENFEvky0igXczpl2Xv4rUob18a0W82Lf8Yi88J1t5xyzBFiVBgrhLYkO0IFkOwk%2Fxlgx9Dkgkwl4RjRsf6xkiOWS%2FfbAPV0k%2F%2BLfFISlUB5QG7Bf0pFxp3XfO14lAwMaaDLc1m%2F2RHYOiK5Gj2cH8vS8gDcKAGT66nb%2FlPnbLEQaDgaTgHJ6WIcAQJRHKij58rgB0PXwxIrDOQ0fg%2B5xYMnQ9p1TzkcH3BKhxq0pm2M7SnJKjam1bcFYPbt%2FBgVJL8BwokGIgyz0hvuJLXsJw9v%2B1DtcQDWQgVpaG6YmkLkwW4NAwX7OocE2fQxZLw5w139X9sBxuRCg6qIUn4LZ2CM%2FY95MKDukb0GOqUBosH2w6nv3vrkSL90Abp3vYMniC0Qqcm9PNKp%2FxHbAYCaV7Mz3ddSZMn2u7qcyURoJpCAkxOSVy%2F%2FSTSgJf%2F8CHnhpFkeUWwXyOgEArVMcFUy8o5ORTYBXPXtXNeRgcSkN3DBxPLO9dkVZBN6PmDTEqMkzE0hsRXJOaEr1q7ZmxrPwIwBkIkS%2BbMhDXQQPQaLPvEOKG%2FoeuMvYn0nq3pIHA7vkigA&X-Amz-Signature=ce541f706182d3419803d9b468e39457d5131a8290e583e1ab4f0082a239c178&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAIMXPR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1LwEYYdb0SreQiqKipHNzL3JjKxUormROhOVC%2BhvZXwIgR9B539%2FwhOBvxpPIFKC4ww25fRlAGA9HScOHSyMfPusq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOF4hEPvOR2ZhoDhXCrcAwYmQ6kTwwJJcCUMwkSsFSY3vDrij36mvrRSwISWUW%2FKp2fNhX5rn7%2BXlOEP5afQUZ18onRPTaPFo5Zpxxm%2BS3A3Fw%2FbNfQWi4zUHSO6EbXGh4FD87HUx1Z3Y%2FxjHBhV%2B2A%2B43PEHrRKKOVl7yD%2F05MfdFjFrXBEMsPa5FmjVmxiw4sYFmMZUkw8Ly8yTCzbhQGTPe9HZEtAHL3Qs6zJ1UUK9lR4wiJMjDBi5KOI4ODlR2AfWCutvGWIh1XtgGRj04VzzBBegPbrUqYFBOWmksS91LKJCihdDENFEvky0igXczpl2Xv4rUob18a0W82Lf8Yi88J1t5xyzBFiVBgrhLYkO0IFkOwk%2Fxlgx9Dkgkwl4RjRsf6xkiOWS%2FfbAPV0k%2F%2BLfFISlUB5QG7Bf0pFxp3XfO14lAwMaaDLc1m%2F2RHYOiK5Gj2cH8vS8gDcKAGT66nb%2FlPnbLEQaDgaTgHJ6WIcAQJRHKij58rgB0PXwxIrDOQ0fg%2B5xYMnQ9p1TzkcH3BKhxq0pm2M7SnJKjam1bcFYPbt%2FBgVJL8BwokGIgyz0hvuJLXsJw9v%2B1DtcQDWQgVpaG6YmkLkwW4NAwX7OocE2fQxZLw5w139X9sBxuRCg6qIUn4LZ2CM%2FY95MKDukb0GOqUBosH2w6nv3vrkSL90Abp3vYMniC0Qqcm9PNKp%2FxHbAYCaV7Mz3ddSZMn2u7qcyURoJpCAkxOSVy%2F%2FSTSgJf%2F8CHnhpFkeUWwXyOgEArVMcFUy8o5ORTYBXPXtXNeRgcSkN3DBxPLO9dkVZBN6PmDTEqMkzE0hsRXJOaEr1q7ZmxrPwIwBkIkS%2BbMhDXQQPQaLPvEOKG%2FoeuMvYn0nq3pIHA7vkigA&X-Amz-Signature=a1adc9811a296fc7134d356c3a8d160416c19e74db6ad6f7187d8caf557e6e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
