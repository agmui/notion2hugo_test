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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENIFGB5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEpwWUIQFOAwQpO4y%2BqNs3VjTzby%2F5vjqbJzMuDjRK8fAiEAg1mjxs7%2BU5ky8mk9W4jNLVwOeIEAQ8Zky3lWFm919wwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMbxxN%2BfpOuF%2Fn1g0SrcA0YSQib6ilStJ2ugPsTTrpqbE28aP99z2BR4R3on2FUnwZwulCCrx0DZhDdOgrX2KMXortGwzYTUUB8m8Ree0S70h8BSVVt7cwz1Z9UM0aAs5GG8U5799nE0M5LNhODIfMePtRqbTUo4LDE27NZyv4JVXD%2B9NExvXcsCGSrd%2B9%2Bgh74wPgMbWz1WbOx8ZfDYBiKgVtsyrbJQA72BvYX9Mg9a9J0%2FovZwNxzE%2FGV3XuYTWejnE0UQwJQ1txhytClpnfm2ukDT1Ny4%2BJiil7y7tbfn%2F4vpeoDescWE%2FZ2GcEMeWS%2FuOaGe8670Y%2FeoySTR56IfV645GF0XKHffK%2BGAZtmEfeb%2FNX1KCUte91jKButast5N9NkHiD27BLjcF%2FSlAFwlf95aBiOZa%2BMR2nWQidQHRdpHQKA5t5o1s7jD01lBDsCA%2B63%2FuOCRc0ZWy2EouPvwdI6qje1ieSXD8T3Y31YBnfPw14o7y8J51KrLDc9BWqfJpRs0P53yG%2BDdX4CnlRXYeCh1s%2FF2gaPooi8%2Fltwq3K41mw2EpSCRSAGTTyTHXi8XDa3eZ2bnWkjigr%2FodgHt7j0crfnrwazSHVZyJM6G2VSoA0xjC5XhC2U2L0TqExNn5oW9QjYvgBESMI3N0cMGOqUBlxNJunB6XaZW0g9yePlC2MnsBoChxfS1V5RaqsQ6uer1GukxgAgGB%2B0QswTcLejtgR%2FW7QH%2Fi%2FpKZFnMrNSbX4%2F%2F%2BEbUz6cq4c3oS0FPZJfp%2FjVqGHqnszyAZhjMxaPzfh8q5mc0gMZ7f56Ig%2FgKk1v4glHpn1l%2FCCpOy5oUbniG8USFm7oTRJzqYXHTPXHXqZq3qJ6%2BYGfyLvfYvstZ7FNR9rMb&X-Amz-Signature=c875a007fee592242ca0ffca1a4a6e4ae58fd5b59904fe9b2d50572a970d3a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENIFGB5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEpwWUIQFOAwQpO4y%2BqNs3VjTzby%2F5vjqbJzMuDjRK8fAiEAg1mjxs7%2BU5ky8mk9W4jNLVwOeIEAQ8Zky3lWFm919wwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMbxxN%2BfpOuF%2Fn1g0SrcA0YSQib6ilStJ2ugPsTTrpqbE28aP99z2BR4R3on2FUnwZwulCCrx0DZhDdOgrX2KMXortGwzYTUUB8m8Ree0S70h8BSVVt7cwz1Z9UM0aAs5GG8U5799nE0M5LNhODIfMePtRqbTUo4LDE27NZyv4JVXD%2B9NExvXcsCGSrd%2B9%2Bgh74wPgMbWz1WbOx8ZfDYBiKgVtsyrbJQA72BvYX9Mg9a9J0%2FovZwNxzE%2FGV3XuYTWejnE0UQwJQ1txhytClpnfm2ukDT1Ny4%2BJiil7y7tbfn%2F4vpeoDescWE%2FZ2GcEMeWS%2FuOaGe8670Y%2FeoySTR56IfV645GF0XKHffK%2BGAZtmEfeb%2FNX1KCUte91jKButast5N9NkHiD27BLjcF%2FSlAFwlf95aBiOZa%2BMR2nWQidQHRdpHQKA5t5o1s7jD01lBDsCA%2B63%2FuOCRc0ZWy2EouPvwdI6qje1ieSXD8T3Y31YBnfPw14o7y8J51KrLDc9BWqfJpRs0P53yG%2BDdX4CnlRXYeCh1s%2FF2gaPooi8%2Fltwq3K41mw2EpSCRSAGTTyTHXi8XDa3eZ2bnWkjigr%2FodgHt7j0crfnrwazSHVZyJM6G2VSoA0xjC5XhC2U2L0TqExNn5oW9QjYvgBESMI3N0cMGOqUBlxNJunB6XaZW0g9yePlC2MnsBoChxfS1V5RaqsQ6uer1GukxgAgGB%2B0QswTcLejtgR%2FW7QH%2Fi%2FpKZFnMrNSbX4%2F%2F%2BEbUz6cq4c3oS0FPZJfp%2FjVqGHqnszyAZhjMxaPzfh8q5mc0gMZ7f56Ig%2FgKk1v4glHpn1l%2FCCpOy5oUbniG8USFm7oTRJzqYXHTPXHXqZq3qJ6%2BYGfyLvfYvstZ7FNR9rMb&X-Amz-Signature=3f10043b84c28ef08986625e35768dbabdd2910263b71e32fef60b9f46cb133b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
