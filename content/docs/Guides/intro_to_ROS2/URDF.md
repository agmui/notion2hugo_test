---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUAPU4S%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8GO4E1dNQth%2BcVjL7i61Q%2Bl4ed0gF6OuX1wFbIiu0QIgJ0P%2Bgna2zeZD%2F%2BHla534qYmDXZ59yWm0P7TDbTVZmtkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmvZ1YQrXB%2F2nm4NyrcA5UzwIZFGPv92E7C74GfEm6IG8m1wTDCV%2BnUPPG%2FGVme%2FliVQvK3t9Tpk9cNpWkv1cRs3REnDcOcAfxCwJW6mW%2Fu0C%2B24kLfL66PSwJssBMP8Ay0yQXUAFven3zcCeuz4QrWdfLszfj7EX7QfmZ0wSuZDiVHzGE7ZG%2FYz9jYPQ5FHUaHxhogyZddPV9Lf0oTk%2Bms3lhpX7%2B3VQ%2FhHgzxl%2BAKz5PYUujdIVzRYm%2BYSJz3alGGasnmMyJ6DLIVh4aBNxrNc1%2FzLmTEjM2c9%2F6Jx1nleLUOyIPfSrGpegLcqsIjC5k2G0sIlO%2BGbeTygcJ2hiSGhBvs%2BAEHQTrc2EE51efjyTl4K%2BnLcE4azP6tu8XLX5ZULHeb790MIDTjC0foH3U5jEY1uN3wxeznKMSdguAZjNRssrF5AZajrfp3FwzQlpO7zUizzaEEBvSypPBbYyANfU9Andm3iPbxZ%2F1A2KmxycVGB0fVkzE8S2OHCBEpUC%2BEjjh%2FMxbKpVvAZFyF1NSEbjbM2pK06Wdza2cO%2FlHQCBsqOO0tycLP70IQjjZ7zk7i%2BoHJdsO1OLOU4LlcKjeAqJSVcafJwrGJKCqeHir4ehN0bvONIm9QIwm%2BhxPqzu94ks7DvoUWeAAUMKbE4skGOqUBC8OVAds0Kp7N8aXrhqdaBJdBTmwQ4BavU52jQV1sCvaQkos0kyTAuus3jQKr6mu9rBWRHI%2FguIlQh4NrSHXTZiw1qSDpMHvHnkSVxkKFUjW46P5NRo6fBfnW5Qsd9qJzTRpyJjlcRkIKbAM6uYa1WqjWkdeW97Fxv%2FUQHSWwKSLJSS1VPHnsOaJxw47jyClq0Shv4HeMYUV70sR4zkB7B%2FwhH7S5&X-Amz-Signature=4684531769bb8bca3378344c5347e3373983b10d02631ee604728ae756f89869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUAPU4S%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8GO4E1dNQth%2BcVjL7i61Q%2Bl4ed0gF6OuX1wFbIiu0QIgJ0P%2Bgna2zeZD%2F%2BHla534qYmDXZ59yWm0P7TDbTVZmtkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmvZ1YQrXB%2F2nm4NyrcA5UzwIZFGPv92E7C74GfEm6IG8m1wTDCV%2BnUPPG%2FGVme%2FliVQvK3t9Tpk9cNpWkv1cRs3REnDcOcAfxCwJW6mW%2Fu0C%2B24kLfL66PSwJssBMP8Ay0yQXUAFven3zcCeuz4QrWdfLszfj7EX7QfmZ0wSuZDiVHzGE7ZG%2FYz9jYPQ5FHUaHxhogyZddPV9Lf0oTk%2Bms3lhpX7%2B3VQ%2FhHgzxl%2BAKz5PYUujdIVzRYm%2BYSJz3alGGasnmMyJ6DLIVh4aBNxrNc1%2FzLmTEjM2c9%2F6Jx1nleLUOyIPfSrGpegLcqsIjC5k2G0sIlO%2BGbeTygcJ2hiSGhBvs%2BAEHQTrc2EE51efjyTl4K%2BnLcE4azP6tu8XLX5ZULHeb790MIDTjC0foH3U5jEY1uN3wxeznKMSdguAZjNRssrF5AZajrfp3FwzQlpO7zUizzaEEBvSypPBbYyANfU9Andm3iPbxZ%2F1A2KmxycVGB0fVkzE8S2OHCBEpUC%2BEjjh%2FMxbKpVvAZFyF1NSEbjbM2pK06Wdza2cO%2FlHQCBsqOO0tycLP70IQjjZ7zk7i%2BoHJdsO1OLOU4LlcKjeAqJSVcafJwrGJKCqeHir4ehN0bvONIm9QIwm%2BhxPqzu94ks7DvoUWeAAUMKbE4skGOqUBC8OVAds0Kp7N8aXrhqdaBJdBTmwQ4BavU52jQV1sCvaQkos0kyTAuus3jQKr6mu9rBWRHI%2FguIlQh4NrSHXTZiw1qSDpMHvHnkSVxkKFUjW46P5NRo6fBfnW5Qsd9qJzTRpyJjlcRkIKbAM6uYa1WqjWkdeW97Fxv%2FUQHSWwKSLJSS1VPHnsOaJxw47jyClq0Shv4HeMYUV70sR4zkB7B%2FwhH7S5&X-Amz-Signature=a3cd6d6af8d1cb93ba04a5ff530889a4fb6513ffd0f167023947e1bfb0284d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
