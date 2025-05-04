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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHQP74H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2FNpz6ImEMFmN0rcd%2BJkJM0a9Hbjd0tWWuczb0mxvNBwIhAIyZDDG98qYD7sHCUJuwZ9TyOlJaasK%2BH7qoawT8uHboKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8xS5XYbcf2wqnEBIq3ANOk7ZhwmJglEmdMvcIE74SbkacEOpeOeSbK5j2ZAtxdqDB5Hxit8iTy8%2BeAWJ6cJHflnMY1CNOevyAKIjMJKSR5ocfFAHjej1MF1TpTOIdIXOgaZI%2F%2FMTVN7VjNs7K03TJA8E%2FAsAG1Z7m2pokjh13buSX1xBuBA0%2FL5Y9wUf5pQHS9Ut0zzLaxAji70y4kA4cmiTjjDgby1BdNNK8TQd8x59tTNOnIS2iOFN1x012YN%2Fm8yKwACuHHoUxpmoVo1rkCUe2ezJ3iTtschgxUHAI62EVV01rQZPzlzn6SLplfZSOuBPP8SIcnOj7nfbMMjgb5Wvv3ys%2FTCGaYYgPX9MwBm2XekzkvhzdbkLeS8nf%2BwKlBSvGP8bStRDbM7tTFx2XYo1gf3uvY%2Fon5dv4n%2FildSs7fvqbdU9hLj74ds8qSiVpu9m7mKI7SWwx0CHIXthpGzqD%2FUYb3eIMnukY8CHET%2F%2FLFaFeDfc6qdpuaPZPsKxyUCR4QMA4TBLu5PQfZYQK1fH2dr44MSlLo9gy5d8PFXLG9ky3sEupuoytL4C3L2DeQiUDqhOfPTvML1J2N34V9PCPcWohiXrI%2F4aLRSc37V2P8B5eYLaQilbGzTGQprW42BRKdZB%2FAA17KjDo8NrABjqkAcf0CRHrmUNXSUpXIp%2Ft2RcUOR%2Fmo9iLtZsCnF9rCR3tyCAYzsWxymBQI%2FViba1TGt%2F06TrOQhO34acKLw3s%2FVK0NvcMplug8hmsjemgzNbiMCo9gMLA7g1FASdzyKjXeWFmp6bnLusdo1GYQmfXlqOQj9XZHRYk7IrRdMMhTazQpuioV89bWfijZXyg4I8RqHs7sUc1ssk615Bs8w6hxNW0ErF0&X-Amz-Signature=0d114d872ac4b89477a39b12b0898fe5e2917d338258fac440a5c0818bd69240&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHQP74H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2FNpz6ImEMFmN0rcd%2BJkJM0a9Hbjd0tWWuczb0mxvNBwIhAIyZDDG98qYD7sHCUJuwZ9TyOlJaasK%2BH7qoawT8uHboKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8xS5XYbcf2wqnEBIq3ANOk7ZhwmJglEmdMvcIE74SbkacEOpeOeSbK5j2ZAtxdqDB5Hxit8iTy8%2BeAWJ6cJHflnMY1CNOevyAKIjMJKSR5ocfFAHjej1MF1TpTOIdIXOgaZI%2F%2FMTVN7VjNs7K03TJA8E%2FAsAG1Z7m2pokjh13buSX1xBuBA0%2FL5Y9wUf5pQHS9Ut0zzLaxAji70y4kA4cmiTjjDgby1BdNNK8TQd8x59tTNOnIS2iOFN1x012YN%2Fm8yKwACuHHoUxpmoVo1rkCUe2ezJ3iTtschgxUHAI62EVV01rQZPzlzn6SLplfZSOuBPP8SIcnOj7nfbMMjgb5Wvv3ys%2FTCGaYYgPX9MwBm2XekzkvhzdbkLeS8nf%2BwKlBSvGP8bStRDbM7tTFx2XYo1gf3uvY%2Fon5dv4n%2FildSs7fvqbdU9hLj74ds8qSiVpu9m7mKI7SWwx0CHIXthpGzqD%2FUYb3eIMnukY8CHET%2F%2FLFaFeDfc6qdpuaPZPsKxyUCR4QMA4TBLu5PQfZYQK1fH2dr44MSlLo9gy5d8PFXLG9ky3sEupuoytL4C3L2DeQiUDqhOfPTvML1J2N34V9PCPcWohiXrI%2F4aLRSc37V2P8B5eYLaQilbGzTGQprW42BRKdZB%2FAA17KjDo8NrABjqkAcf0CRHrmUNXSUpXIp%2Ft2RcUOR%2Fmo9iLtZsCnF9rCR3tyCAYzsWxymBQI%2FViba1TGt%2F06TrOQhO34acKLw3s%2FVK0NvcMplug8hmsjemgzNbiMCo9gMLA7g1FASdzyKjXeWFmp6bnLusdo1GYQmfXlqOQj9XZHRYk7IrRdMMhTazQpuioV89bWfijZXyg4I8RqHs7sUc1ssk615Bs8w6hxNW0ErF0&X-Amz-Signature=69ae2912b05a5f2f1e08608d659a3e1f24aedf0357e8b15ff49b599e37e22d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
