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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=912c7ee29f43775205d85ffa9a0b5720e9f2d0c91be4a318240e1f8e3cf7f38a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=8e840db1ce19e72c5f7634e67f4793dc6bc444bc7d87a49a77673fa527ca04eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
