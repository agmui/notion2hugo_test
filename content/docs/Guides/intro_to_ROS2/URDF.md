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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOAJ7ID%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVKSIyEgHq%2BqrhRXR4B0GuzedmR65hNGBrdfRiJEOowIhANjJlkOJIm%2B%2FI7PYU%2F5wKZpqflqiRW95KHrahV6N11m9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzZpcNZc%2FRHoO4PUQq3APVceRsH3FVtRqa1QdKg1iCi%2F%2BjYHudVyUvv1EdX48Orn3sjKBVW2UaW%2BQFGkJfn4Zoqzu2T5HjHXhD1rmjiPRQiFopGgCMtRt89qSUIQ3OyjRYs84gfAI6mZOgUSaJr8rsnVoJFw4CRcsjjthyjrPa%2B5284FX6MPMttMbDTLTiWwAREkrdZ5IxA%2BdG7WwMCKlUxKmdyMWdVNxWgTRArpp83zMEumvulGukxUUCpZ%2B4egvIUe8QHnAKF%2BZHOODazyAvLPSF2eM0IR5pZqQ4UTm%2B2FgllqU97oTuUynhfRyIU%2B%2FZ0TUCT3gGHNoV4AiCWiaOgKZPE3I16GuvN%2FllbZofMZfM7S%2F3nTorBEVpY6Vn52IXr29Vg%2Bnl2fOwKgdpGQIlNU6Km9dVuA7QznftoNIQCvuTDzp1ZyjDB98DmR0sMd5u7mKc%2BkjO%2Fw7FYj8QBQvaCkRnQqQNjBODUKIOGEoc8ARLLo8eYXDp%2BB%2F%2Bx8%2F2JWdMEj5KSeekhzxh28MNBaA2m1%2FSo0zfu%2FVTQrfhFDM8FsW81YCcS7SBlLMLFb%2Bx8bPiaM7ipfrckzdLs7aMVvhhGIZwU9K%2FjQUFOO7fXX36HmidRhyiTDKZ4tpky2EcWujdF1BqqMOAU6rcvzCDsOvDBjqkAdMfuYF%2FFupjpV6jTkrwMDYb8rfDifmBCzYlyNzXRLtwLXjYEgRVfmrLVr57xRrm7FJXUI0SbrybsoOrpyzkh%2BdxQp1gpxKJycZOXl9BL1lP9nskCGPzJonyZS1ZrbqoZa4tg67d9dESeJrA2N%2FLwusaPIcNB1Z82yItfsjJun%2F46fFV%2FHJ5VlUzKwwatV8WdliNI40DJx3lZ2%2BXBsQD2yPKttfC&X-Amz-Signature=5a283d5ebdb441e2932a69cc53dd4356dd1ae33a02fb4a0a6650fd498251ab82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOAJ7ID%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVKSIyEgHq%2BqrhRXR4B0GuzedmR65hNGBrdfRiJEOowIhANjJlkOJIm%2B%2FI7PYU%2F5wKZpqflqiRW95KHrahV6N11m9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzZpcNZc%2FRHoO4PUQq3APVceRsH3FVtRqa1QdKg1iCi%2F%2BjYHudVyUvv1EdX48Orn3sjKBVW2UaW%2BQFGkJfn4Zoqzu2T5HjHXhD1rmjiPRQiFopGgCMtRt89qSUIQ3OyjRYs84gfAI6mZOgUSaJr8rsnVoJFw4CRcsjjthyjrPa%2B5284FX6MPMttMbDTLTiWwAREkrdZ5IxA%2BdG7WwMCKlUxKmdyMWdVNxWgTRArpp83zMEumvulGukxUUCpZ%2B4egvIUe8QHnAKF%2BZHOODazyAvLPSF2eM0IR5pZqQ4UTm%2B2FgllqU97oTuUynhfRyIU%2B%2FZ0TUCT3gGHNoV4AiCWiaOgKZPE3I16GuvN%2FllbZofMZfM7S%2F3nTorBEVpY6Vn52IXr29Vg%2Bnl2fOwKgdpGQIlNU6Km9dVuA7QznftoNIQCvuTDzp1ZyjDB98DmR0sMd5u7mKc%2BkjO%2Fw7FYj8QBQvaCkRnQqQNjBODUKIOGEoc8ARLLo8eYXDp%2BB%2F%2Bx8%2F2JWdMEj5KSeekhzxh28MNBaA2m1%2FSo0zfu%2FVTQrfhFDM8FsW81YCcS7SBlLMLFb%2Bx8bPiaM7ipfrckzdLs7aMVvhhGIZwU9K%2FjQUFOO7fXX36HmidRhyiTDKZ4tpky2EcWujdF1BqqMOAU6rcvzCDsOvDBjqkAdMfuYF%2FFupjpV6jTkrwMDYb8rfDifmBCzYlyNzXRLtwLXjYEgRVfmrLVr57xRrm7FJXUI0SbrybsoOrpyzkh%2BdxQp1gpxKJycZOXl9BL1lP9nskCGPzJonyZS1ZrbqoZa4tg67d9dESeJrA2N%2FLwusaPIcNB1Z82yItfsjJun%2F46fFV%2FHJ5VlUzKwwatV8WdliNI40DJx3lZ2%2BXBsQD2yPKttfC&X-Amz-Signature=860fa1e831db775b7d40d2f0362317835d15ffe6248402e5ea887b3215bb7e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
