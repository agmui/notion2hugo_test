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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677EL5TN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFFUAnS7gYbAo1G8pE%2BjONkyZrhbOS3ZM3LeHPi25EucAiB3ESmTX2bX4hVmN0SXZfJkN0L5Ypk0WBZW%2BeEtQoP3dSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kIinBZCPqiqto8sKtwDYeFIdAkJrYJNthOsdSH9LM3QqZVEI%2F64f3dCYwk1XfDiHo7qK4ty43sPHu60K7pO5ylPTij4X3tlrWr8wcmIa3HxaPYeUrBq%2FfNCx%2Fell%2FkWXGTNC0JSeuynBzLApzhmlCBXaicL34CSgx%2BK9u%2BPixVgFNW%2ByF8naYmMvkLHIlQpd3Rt9%2BnWLUISn5wAs1%2BkZvp%2BfG5B1nYGRNNg0oF4Y6IsWzqRmivoASApH4xb%2FYKY6WFwj6YumWNxoaTn3VrvIgYC2x43UDXTyytVJa8Ig2HOdFA7Ivut7gLr180PJFmbA%2BAN933qRcDbOYhQTZPOYAe%2Fcp%2BK3A3QD07aJN1l316OPsdZhJLLao%2BAK7xBnPgnWungShO9gZZVw5vjzVZBEk1I9X8nBMOvQ2EdELuscu%2FDzjEIqUesOBrgZq9Qu2KqQ8aruhGxzl7iFTg3AO6WJsUcKFV8Ub1QWLwlTbe%2FPreRRVdA%2FD8%2BLRRXLYAr%2BlctVBRUix4PiLqT%2FtRon7DR94O0avYSCvHi5t854%2BK22jpW6Q8X6mjQ%2F0gQdTP6SE5dLSRlUrY5dYVq0viecMUg9yCPOiM8%2FsAPAbxcVMkwF8gnX3mTJ9nt5dfdzEP8%2FUunNi2WbYFi%2BLpHFnIwi5r1vgY6pgG38L8wff5fpqKCdzyLoe8UQ1LsaEo%2FQu8F7n40FPzxmYCMqea2fb7YC705%2BrYpjsZr8gBXRVJgHcm6tskQKK5A6DTWPWiJEPsgextjcfU89KAWlAFSiTqoA1CbqHiucvvAfvtK8L0ddJ9Ai%2BK%2B27Nukvue7Jg6bIYXA9TWSyxfRegvprVgeCoGv7SIV5llcv4N1mTIXP3PS1gADWwR3ofTGjzvGF0U&X-Amz-Signature=ae359ae1e0eaeb17b56c0fae895446bdf424d98fd2f8f14e199c2e921766cbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677EL5TN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFFUAnS7gYbAo1G8pE%2BjONkyZrhbOS3ZM3LeHPi25EucAiB3ESmTX2bX4hVmN0SXZfJkN0L5Ypk0WBZW%2BeEtQoP3dSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kIinBZCPqiqto8sKtwDYeFIdAkJrYJNthOsdSH9LM3QqZVEI%2F64f3dCYwk1XfDiHo7qK4ty43sPHu60K7pO5ylPTij4X3tlrWr8wcmIa3HxaPYeUrBq%2FfNCx%2Fell%2FkWXGTNC0JSeuynBzLApzhmlCBXaicL34CSgx%2BK9u%2BPixVgFNW%2ByF8naYmMvkLHIlQpd3Rt9%2BnWLUISn5wAs1%2BkZvp%2BfG5B1nYGRNNg0oF4Y6IsWzqRmivoASApH4xb%2FYKY6WFwj6YumWNxoaTn3VrvIgYC2x43UDXTyytVJa8Ig2HOdFA7Ivut7gLr180PJFmbA%2BAN933qRcDbOYhQTZPOYAe%2Fcp%2BK3A3QD07aJN1l316OPsdZhJLLao%2BAK7xBnPgnWungShO9gZZVw5vjzVZBEk1I9X8nBMOvQ2EdELuscu%2FDzjEIqUesOBrgZq9Qu2KqQ8aruhGxzl7iFTg3AO6WJsUcKFV8Ub1QWLwlTbe%2FPreRRVdA%2FD8%2BLRRXLYAr%2BlctVBRUix4PiLqT%2FtRon7DR94O0avYSCvHi5t854%2BK22jpW6Q8X6mjQ%2F0gQdTP6SE5dLSRlUrY5dYVq0viecMUg9yCPOiM8%2FsAPAbxcVMkwF8gnX3mTJ9nt5dfdzEP8%2FUunNi2WbYFi%2BLpHFnIwi5r1vgY6pgG38L8wff5fpqKCdzyLoe8UQ1LsaEo%2FQu8F7n40FPzxmYCMqea2fb7YC705%2BrYpjsZr8gBXRVJgHcm6tskQKK5A6DTWPWiJEPsgextjcfU89KAWlAFSiTqoA1CbqHiucvvAfvtK8L0ddJ9Ai%2BK%2B27Nukvue7Jg6bIYXA9TWSyxfRegvprVgeCoGv7SIV5llcv4N1mTIXP3PS1gADWwR3ofTGjzvGF0U&X-Amz-Signature=6ed98e6461e901a81883c05fe09562f61dca2dee88ef32bd7b221c81d6c40e94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
