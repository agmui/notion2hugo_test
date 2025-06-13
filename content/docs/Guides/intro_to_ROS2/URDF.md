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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2P6ZUO3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIF6lqvAc10ek6Cu1TFy1n2njJasK%2BLfD3L3egJGAcihaAiAGqiJgzGbrMGC7JF422zPt4jmhRWhCzA%2BrW9AgyCO9xir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2Bt7uxKDmhcV2LETsKtwD10RU6i%2FcYhwY%2BbzWbQdnq6aijEenNrVlsvASU692zE%2FdPyesxsApBfAkCDUVNeSyoUFn3EnIH32r23jA5peLTTSsleRoEzr5GhZzoOwsJD0EYWztxTsVHghKHXOKc8hokx5%2B1NDBfUS1kp4UXuYhRWz%2B9PwsqcyO3zPrWEvacQg6FxtkiZLZiWl3rJLdZ0w2AHU0cppqVLChCPSftEbAN0CaSOKHV4Te21QRfTCXK4gF%2FxDknLZe8T79blwqE9LOWp1eNOYG8NWG07hf6cy2Xy02wwRMiDvlWQmJb%2FHcRTnc3RF%2FviRgFpVvVc3tNYjZ3BllWbtK%2FNnZstsMSJ1t0XzxJWa5hVt%2FMLeRJYGUjfUmI%2Fn8H11br7v6lhjYTmRQOLnIFiEexqvpFT7yYS5AnjRiB8Y2m7%2BNWQGT4hph2EWoj1sfEB7ca4ipLFh4JwisLRyel%2FSID%2B0oT7y788%2B1CUlhlMeyBPPs2qKMIZuzrgzRlTmu%2BQCtCXTFqrWly3S%2BUvuVRhfXYj5HHOHD6Us%2FDPqnz6ac0HnEje2dQ5KXx9%2B2f5qShrYDu18G%2Ff4SbOM0%2FQdFeA%2FxN0NYwRKLH7%2Btn8mEYHOafcdirGYJupZYvRx4IFv89RHiQ7B88J8w9JKywgY6pgHJgIOAK8h8%2F0rRbbwUFeENFQn3X28xls5bgEl4Z6jEQ1UIeSsqPwqKRecHxy52OPQv95OQKYrZz7xBZjNvWAVksTfdZT2PiQCPiJ%2BnJ%2BKKBCE4upI8bFxI%2FEtWM%2BdLUqh6WxXi8m3Q5yN1z%2F8mQhPbmdTzuyK6Yx5Voy39nhKG%2BAfBmeLBWEQjm5cMwiT27yrEcfbkzGcuu0Ak4KSzuFr31%2BpXRaFJ&X-Amz-Signature=6988eeb7231ed1dc05e2b811dea2e153c0fdd4e4473d9bf4ba2e71186b1e0869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2P6ZUO3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIF6lqvAc10ek6Cu1TFy1n2njJasK%2BLfD3L3egJGAcihaAiAGqiJgzGbrMGC7JF422zPt4jmhRWhCzA%2BrW9AgyCO9xir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2Bt7uxKDmhcV2LETsKtwD10RU6i%2FcYhwY%2BbzWbQdnq6aijEenNrVlsvASU692zE%2FdPyesxsApBfAkCDUVNeSyoUFn3EnIH32r23jA5peLTTSsleRoEzr5GhZzoOwsJD0EYWztxTsVHghKHXOKc8hokx5%2B1NDBfUS1kp4UXuYhRWz%2B9PwsqcyO3zPrWEvacQg6FxtkiZLZiWl3rJLdZ0w2AHU0cppqVLChCPSftEbAN0CaSOKHV4Te21QRfTCXK4gF%2FxDknLZe8T79blwqE9LOWp1eNOYG8NWG07hf6cy2Xy02wwRMiDvlWQmJb%2FHcRTnc3RF%2FviRgFpVvVc3tNYjZ3BllWbtK%2FNnZstsMSJ1t0XzxJWa5hVt%2FMLeRJYGUjfUmI%2Fn8H11br7v6lhjYTmRQOLnIFiEexqvpFT7yYS5AnjRiB8Y2m7%2BNWQGT4hph2EWoj1sfEB7ca4ipLFh4JwisLRyel%2FSID%2B0oT7y788%2B1CUlhlMeyBPPs2qKMIZuzrgzRlTmu%2BQCtCXTFqrWly3S%2BUvuVRhfXYj5HHOHD6Us%2FDPqnz6ac0HnEje2dQ5KXx9%2B2f5qShrYDu18G%2Ff4SbOM0%2FQdFeA%2FxN0NYwRKLH7%2Btn8mEYHOafcdirGYJupZYvRx4IFv89RHiQ7B88J8w9JKywgY6pgHJgIOAK8h8%2F0rRbbwUFeENFQn3X28xls5bgEl4Z6jEQ1UIeSsqPwqKRecHxy52OPQv95OQKYrZz7xBZjNvWAVksTfdZT2PiQCPiJ%2BnJ%2BKKBCE4upI8bFxI%2FEtWM%2BdLUqh6WxXi8m3Q5yN1z%2F8mQhPbmdTzuyK6Yx5Voy39nhKG%2BAfBmeLBWEQjm5cMwiT27yrEcfbkzGcuu0Ak4KSzuFr31%2BpXRaFJ&X-Amz-Signature=033b6eaab507b4330045322245f3e2e54af81ca0578e24a1db0fe6cef715e780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
