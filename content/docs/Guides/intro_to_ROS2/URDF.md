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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPFWDDK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHx3Rolr1yVY86NtfislHmkrMO1%2BSaB4Mdrw67x0lmOAiEA4dv%2B8Y8rzrKnp3I3rX1n94K%2FTYFIdd7%2FgdVVbuAdpvkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP20f9bEUBCtlXL%2BZCrcAzK0AGbFRdiPOAYEbhub0L8VMALcOkG6CNvFa6folMfoxLJ3eko%2BGSclbviABuZ75cBZwlq9XHRwJCoDYIIreh5inMXQkj0fFpMz9oaGuxregoVcJr93AhlYlH0b2VjchoOaPigLvZJlRLTSFRuEuSYAK99xnpJiP4g3loZnBYsKxwtSeUQRpKVy81iHHUDPLP8isiBjyLS1ulvjTAmTelyID%2BCxGuJyDgAkWRyWOtJPy2x5Wn9dIcvhwEKAZjcNtPuPIu7WXjGJD5RanPPG8mtQEEDIpwLrOSKnXHjpLBrDHP986vUDk%2FAYJCTe0LkWM3T5zNTYOu0RJOi1nAt4Yk3ZGY5BDmOzCRi4ay8r4GapD%2BId5SLz3Pqd2z%2B%2BhafamLQvzfMgQ2b%2FaBaPcVmZJkVXW892F8IfhrclJIMUz34du9tkRLHp2yNjiJezulnJme%2BuMjQx8Es85Jemtvkdg9KyECTKJxw8jSbqDaKwAaOeP9PHWUmKVKRWpfHKqdyoeRm2Mh3nCSwH6mdAzQ%2Fj61GM7HE%2FVhegzMGl%2FYT3H7NNsNLOR1I1nVeV6UEns4cNCBj36DRgIhltp%2F%2BrG3fjBoutA%2BPFrb6iTvQ5BFhgAhLVgDAuH3WdHgPV00t1MNKi7MEGOqUBdzSocVqOtKAB8%2BsEwg9TPr%2F3WK5Y4d6QnHJuSHHESWo2MrFOTUBzvDFmVvOyeTcfr%2FIiMVcuguIj3%2By8JIlCDCy9%2FIut0LUDgKs0gIPo%2FEA5hyKBFkOUIcTivKVhC83potts5hOfmYz9u1MM9m1pPMUNEcb1UDfDx40r3%2FlNIHmp5fceJlplXg9BJHHmdkoDMLR0NTarZDxRSqpS85VyWwRjxy41&X-Amz-Signature=73747bc1faec9bdfce16f941ec103c80c138f82116f68ae4b4a766f78e2f9956&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPFWDDK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHx3Rolr1yVY86NtfislHmkrMO1%2BSaB4Mdrw67x0lmOAiEA4dv%2B8Y8rzrKnp3I3rX1n94K%2FTYFIdd7%2FgdVVbuAdpvkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP20f9bEUBCtlXL%2BZCrcAzK0AGbFRdiPOAYEbhub0L8VMALcOkG6CNvFa6folMfoxLJ3eko%2BGSclbviABuZ75cBZwlq9XHRwJCoDYIIreh5inMXQkj0fFpMz9oaGuxregoVcJr93AhlYlH0b2VjchoOaPigLvZJlRLTSFRuEuSYAK99xnpJiP4g3loZnBYsKxwtSeUQRpKVy81iHHUDPLP8isiBjyLS1ulvjTAmTelyID%2BCxGuJyDgAkWRyWOtJPy2x5Wn9dIcvhwEKAZjcNtPuPIu7WXjGJD5RanPPG8mtQEEDIpwLrOSKnXHjpLBrDHP986vUDk%2FAYJCTe0LkWM3T5zNTYOu0RJOi1nAt4Yk3ZGY5BDmOzCRi4ay8r4GapD%2BId5SLz3Pqd2z%2B%2BhafamLQvzfMgQ2b%2FaBaPcVmZJkVXW892F8IfhrclJIMUz34du9tkRLHp2yNjiJezulnJme%2BuMjQx8Es85Jemtvkdg9KyECTKJxw8jSbqDaKwAaOeP9PHWUmKVKRWpfHKqdyoeRm2Mh3nCSwH6mdAzQ%2Fj61GM7HE%2FVhegzMGl%2FYT3H7NNsNLOR1I1nVeV6UEns4cNCBj36DRgIhltp%2F%2BrG3fjBoutA%2BPFrb6iTvQ5BFhgAhLVgDAuH3WdHgPV00t1MNKi7MEGOqUBdzSocVqOtKAB8%2BsEwg9TPr%2F3WK5Y4d6QnHJuSHHESWo2MrFOTUBzvDFmVvOyeTcfr%2FIiMVcuguIj3%2By8JIlCDCy9%2FIut0LUDgKs0gIPo%2FEA5hyKBFkOUIcTivKVhC83potts5hOfmYz9u1MM9m1pPMUNEcb1UDfDx40r3%2FlNIHmp5fceJlplXg9BJHHmdkoDMLR0NTarZDxRSqpS85VyWwRjxy41&X-Amz-Signature=c017bc960acc625e1a6e5ed2cf375fba3a36726e515dfb5880babab760b508a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
