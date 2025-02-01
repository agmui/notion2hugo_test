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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNWJP6N%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cCktwqXapL3vgAyaG0N4yiPzJ4gVqPCsE%2B72lhsYMgIhAKswZyXMve1WY5oQeq8Da8So8ppIGz47Azjzx%2BHvGGm8KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxExLtVYMD3lI2GkQkq3AMl9TlsMlCF1rFJ3u9noMFdgA%2BiPoDnxN6t%2FrN%2F16yNYcSgfRqiHnHKdgyBExm4vp4jUVFq8SBSvv8XqU%2FMxm%2FPbKNUueovJRnbGa%2F1iq1Q%2FSd%2FKItU9ATeD9Pi%2F9j7Ng6U3QcsdIXAhy4458ya%2BlOF07WG0WV%2FNO9KWcoiaJWmOafksdy9UZg4m2uffQxu7YZT%2B3qcUHwTKtrdojVR6dS%2FYwZjGh2ulf13i01vABERM43UvCf2DGzlgoskZnF1aPtWB6o9Rm10S0Zphpep1k84L5sEM63g5kAYmM8foL5rWfnKkWGiTPf4rKzKyf6zVWVi9XwBKzsCTFVGDgxssj5pROSEKrVRXlHRJ5VeTGbCLCaievZXhaR9JN3KULUlVhbK3spFP4jyIK7nqOVR3tvlJA7mqHzLFjqyMSJlyIgvIVcyplZo%2BRPFXHrH%2Br%2BUqUts3OTaECe%2FRQvnpmbZ0ofvXi9NdpmrdeR7mddecp3%2FicIDkLTTf2F%2BpcVRSva55No2XfSBMu1kcxbCJhTke%2BMtcXzEc6FB8CIKD7kBiQW%2B4WBpUu3HeC7noqxNHR%2BGQHeSn%2FjgvI4xugXZZmOW3tYDQSoVG%2Fe9M3FN%2B0iU%2BasF35cU3tNYPKJHqXFOlzC2pve8BjqkAf030InMC2IhL1UKYt9H5l2k0p9TyEVPVF0p2Ny88CxPIie5zfSbVFbLO0ZI01fbJdlPogjLkvAptwaByy%2B%2Bec7rpOBF3UOJze4zgmHj43iEwI7o47INvQjNEeuXR99K7zp4ZWIW1zAyDZEEnBuI7paU9%2B1z7S6mQV%2FZMy1XovWFohLdOY42%2FvnQCdhK5Y%2F4MeAd2%2Fz63wqc59QFG1S7eMm7drxS&X-Amz-Signature=2069805aecbd6d427410df44ce20042e68dad18c749a21b7bff80df4dd9b6fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNWJP6N%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cCktwqXapL3vgAyaG0N4yiPzJ4gVqPCsE%2B72lhsYMgIhAKswZyXMve1WY5oQeq8Da8So8ppIGz47Azjzx%2BHvGGm8KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxExLtVYMD3lI2GkQkq3AMl9TlsMlCF1rFJ3u9noMFdgA%2BiPoDnxN6t%2FrN%2F16yNYcSgfRqiHnHKdgyBExm4vp4jUVFq8SBSvv8XqU%2FMxm%2FPbKNUueovJRnbGa%2F1iq1Q%2FSd%2FKItU9ATeD9Pi%2F9j7Ng6U3QcsdIXAhy4458ya%2BlOF07WG0WV%2FNO9KWcoiaJWmOafksdy9UZg4m2uffQxu7YZT%2B3qcUHwTKtrdojVR6dS%2FYwZjGh2ulf13i01vABERM43UvCf2DGzlgoskZnF1aPtWB6o9Rm10S0Zphpep1k84L5sEM63g5kAYmM8foL5rWfnKkWGiTPf4rKzKyf6zVWVi9XwBKzsCTFVGDgxssj5pROSEKrVRXlHRJ5VeTGbCLCaievZXhaR9JN3KULUlVhbK3spFP4jyIK7nqOVR3tvlJA7mqHzLFjqyMSJlyIgvIVcyplZo%2BRPFXHrH%2Br%2BUqUts3OTaECe%2FRQvnpmbZ0ofvXi9NdpmrdeR7mddecp3%2FicIDkLTTf2F%2BpcVRSva55No2XfSBMu1kcxbCJhTke%2BMtcXzEc6FB8CIKD7kBiQW%2B4WBpUu3HeC7noqxNHR%2BGQHeSn%2FjgvI4xugXZZmOW3tYDQSoVG%2Fe9M3FN%2B0iU%2BasF35cU3tNYPKJHqXFOlzC2pve8BjqkAf030InMC2IhL1UKYt9H5l2k0p9TyEVPVF0p2Ny88CxPIie5zfSbVFbLO0ZI01fbJdlPogjLkvAptwaByy%2B%2Bec7rpOBF3UOJze4zgmHj43iEwI7o47INvQjNEeuXR99K7zp4ZWIW1zAyDZEEnBuI7paU9%2B1z7S6mQV%2FZMy1XovWFohLdOY42%2FvnQCdhK5Y%2F4MeAd2%2Fz63wqc59QFG1S7eMm7drxS&X-Amz-Signature=1be11f32a001fddeece3544509c13497aba2ec91fe99d94fd9835ba0174683bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
