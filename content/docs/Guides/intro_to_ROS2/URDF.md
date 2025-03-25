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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72JGJWV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0Wyk3RV1sp3UBhdF5NWcYQZ3cMoetO86Gv3uwL38vAiEA6W6NWVMC7SmoWJ0v1LShA27gngvoUXw%2By1kz2HinNPgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFvPO7UxAFmDGlQ5PSrcA3jh2CVP8WIygwdm6DMEH%2Fw1%2FhA%2FGOvkpP0IlQvF%2FEnfFX5mFTpXrFjHmmUE3Qt%2Fz%2Fa7VSOvYekJBirwVyUU48pXVgCTWcmDUdzp4xvdx0Qvnqj4Egl%2BuaVWDG0vWpfAQ8JX%2FSu7PtbtLBGdYWJd%2B0LcwgSzQJp6Lk%2BafgHB5LIABWKvkOMFjXJ7IhxyUEU67FonPc9FhuRkMIr%2B4WyLQCQczlc%2F2Nz4fixOLdrDNi6AeuRz%2FyWK013atwu30YyLHydknkMQbfVyPWh7txcfJHxoBNlI1fYWqR56HCNBWp3GcAkvrThj3qQY7b1aStGJ011LdlJRFURHPTdRVq7AcQN7oPR8N2lAz9qvIMXnijGwneMlcG6DHo%2BpaOS5JqcUIG02r56Detf3T0HLkop%2FLrE7Dr5jMXAqCzzOBmj0F4SD69i5Y0d9tl8xwsnRWDsC30UX%2Ba8J%2BPee5m9h%2FIw3%2BGArkkECm%2BgSjHYLJOsnbOfMy5S5zdvDwZTULzvpEsBVy4CE1YkARvqOvDKxZFp9lXxfL8hrsT4XPkjHDBiN6XGWe0o3yZiG1ObvsA6jzCCHRHtBa1vIwmG518Lu1RsZ7U1SzR6aEpnLxH3UKly9O4e%2Fb%2BiNu%2B2HxM6u7tugMNavib8GOqUBFdE9oGueRFlZndG4JYNFf%2BgMz5V3%2FZNns87fzfzJbj1kJmoh7zeaCc%2BICvvyHGZGn3gj6gM3D5Wo75qHwJLDB7UUcUyl0q3FFvUysG%2BfFffIErM54EoU3x6EaheEWvvKpb42J%2FwwSfiXi%2BSrzl%2FZb3eq3U0oQEGO3gyLC98PFZ6E5nUdBOmacRYJnb2bso99B3Az3JdWSDhOds4I9L5FBUTcC6Xn&X-Amz-Signature=c34dffc53c0ca53cabd9a9a603305a200e44b0f57e106d8c78a61a94894fefa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72JGJWV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0Wyk3RV1sp3UBhdF5NWcYQZ3cMoetO86Gv3uwL38vAiEA6W6NWVMC7SmoWJ0v1LShA27gngvoUXw%2By1kz2HinNPgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFvPO7UxAFmDGlQ5PSrcA3jh2CVP8WIygwdm6DMEH%2Fw1%2FhA%2FGOvkpP0IlQvF%2FEnfFX5mFTpXrFjHmmUE3Qt%2Fz%2Fa7VSOvYekJBirwVyUU48pXVgCTWcmDUdzp4xvdx0Qvnqj4Egl%2BuaVWDG0vWpfAQ8JX%2FSu7PtbtLBGdYWJd%2B0LcwgSzQJp6Lk%2BafgHB5LIABWKvkOMFjXJ7IhxyUEU67FonPc9FhuRkMIr%2B4WyLQCQczlc%2F2Nz4fixOLdrDNi6AeuRz%2FyWK013atwu30YyLHydknkMQbfVyPWh7txcfJHxoBNlI1fYWqR56HCNBWp3GcAkvrThj3qQY7b1aStGJ011LdlJRFURHPTdRVq7AcQN7oPR8N2lAz9qvIMXnijGwneMlcG6DHo%2BpaOS5JqcUIG02r56Detf3T0HLkop%2FLrE7Dr5jMXAqCzzOBmj0F4SD69i5Y0d9tl8xwsnRWDsC30UX%2Ba8J%2BPee5m9h%2FIw3%2BGArkkECm%2BgSjHYLJOsnbOfMy5S5zdvDwZTULzvpEsBVy4CE1YkARvqOvDKxZFp9lXxfL8hrsT4XPkjHDBiN6XGWe0o3yZiG1ObvsA6jzCCHRHtBa1vIwmG518Lu1RsZ7U1SzR6aEpnLxH3UKly9O4e%2Fb%2BiNu%2B2HxM6u7tugMNavib8GOqUBFdE9oGueRFlZndG4JYNFf%2BgMz5V3%2FZNns87fzfzJbj1kJmoh7zeaCc%2BICvvyHGZGn3gj6gM3D5Wo75qHwJLDB7UUcUyl0q3FFvUysG%2BfFffIErM54EoU3x6EaheEWvvKpb42J%2FwwSfiXi%2BSrzl%2FZb3eq3U0oQEGO3gyLC98PFZ6E5nUdBOmacRYJnb2bso99B3Az3JdWSDhOds4I9L5FBUTcC6Xn&X-Amz-Signature=454be25b18ae18396fdd2d2eb21d69c43df1f00e0e49bde0c1ab9606cfd83d66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
