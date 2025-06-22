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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXBDCS4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDM9VSx%2Fs5AnRsY4zifQYpumiuqDLnK8RYMEywXHhaZPQIgNOx1NLC7%2BDkkIcNQ78xtEliD8qmCyd7XqW5lQDejC%2FEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnpLwiKhZ443cOlHSrcA5q0PFeA9UWnNOw0N2zAe8xjV2Sx6MJVKLZFBaSx5rqGvQy2e5WrphlqUIp8Ta%2FtJRdHZwfzTlCnqoUeLewU4O6P8gir2ma%2FIhrDaVP%2Bt1bPYyFFFBe%2BspieZpqAe4XcKTN%2BPGIT3P5pIDOgs4VKCWtpqHAZ9vb07zc%2BVTZJwTixjr33jQAFY9VYXBduJWilaHHeNEzVTVRB5gjLq%2BQt9beoYO%2FbWUjWpzfe4JnTk40O6fbJswJ2xXn%2Bb1CLPUHiXVlVcgUVKqV2fejZeRIT82gXEzxRuFe5d5xCnns6xPwlswFm3%2BVHQLU4KDa80vXj5Dh8JEgK%2B0LIKm7SwiKzxMuuBOkUThxvMLDfUCruCP%2BOtjQyhgAwOhH4bICAk3T8DGTaOlMW0m52jlBI79hzmU%2BZwhtMhPG7y%2F%2Fe3lNPZzBcr8ND6BAbE0c7Qd%2BSu2%2BQ8gu30TPN%2BDLdckhThbVUzZKPJCNd5KQgTbhevVAZT9%2BqrxdGegUTZgAew8q096%2FZkBqfiK38mNaKFc7crQ0V%2FW1bD4LdE3mL8jiF2ypf9W0gCAXZaHa5x3mwk8Wvcu5%2Fo2a2cG0Ft9vE9RMumWPlL6ZxOe3wYjjcbS%2BaxM1rpf8FqN3%2Fnw62qKU%2FOWWGMJiU4MIGOqUB9PEr%2BODeeHzvb2iI7R3VjcMsNXPCPWUruF2EMtwWBHsPWD9hxqHGrfKKnuLx1bv7uWk9QSsVyctL0Q4aQREg1fHksCNMylvd0qoQ9wZdphZCYZv73P05u07p009mBekwXotdqIlyIqZ7JRz5PHSKJXmWO57956SphYzQ%2F5kC7833Fu2qbZ0Ho6%2BrgBMYewHqh1yurooqmn3h7o9NrxF%2B9tG%2FGme0&X-Amz-Signature=de34d9077d530a1ffb5dd60fbdb732dac2b0d36aa10fca13ad0eb92fa6a74212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXBDCS4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDM9VSx%2Fs5AnRsY4zifQYpumiuqDLnK8RYMEywXHhaZPQIgNOx1NLC7%2BDkkIcNQ78xtEliD8qmCyd7XqW5lQDejC%2FEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnpLwiKhZ443cOlHSrcA5q0PFeA9UWnNOw0N2zAe8xjV2Sx6MJVKLZFBaSx5rqGvQy2e5WrphlqUIp8Ta%2FtJRdHZwfzTlCnqoUeLewU4O6P8gir2ma%2FIhrDaVP%2Bt1bPYyFFFBe%2BspieZpqAe4XcKTN%2BPGIT3P5pIDOgs4VKCWtpqHAZ9vb07zc%2BVTZJwTixjr33jQAFY9VYXBduJWilaHHeNEzVTVRB5gjLq%2BQt9beoYO%2FbWUjWpzfe4JnTk40O6fbJswJ2xXn%2Bb1CLPUHiXVlVcgUVKqV2fejZeRIT82gXEzxRuFe5d5xCnns6xPwlswFm3%2BVHQLU4KDa80vXj5Dh8JEgK%2B0LIKm7SwiKzxMuuBOkUThxvMLDfUCruCP%2BOtjQyhgAwOhH4bICAk3T8DGTaOlMW0m52jlBI79hzmU%2BZwhtMhPG7y%2F%2Fe3lNPZzBcr8ND6BAbE0c7Qd%2BSu2%2BQ8gu30TPN%2BDLdckhThbVUzZKPJCNd5KQgTbhevVAZT9%2BqrxdGegUTZgAew8q096%2FZkBqfiK38mNaKFc7crQ0V%2FW1bD4LdE3mL8jiF2ypf9W0gCAXZaHa5x3mwk8Wvcu5%2Fo2a2cG0Ft9vE9RMumWPlL6ZxOe3wYjjcbS%2BaxM1rpf8FqN3%2Fnw62qKU%2FOWWGMJiU4MIGOqUB9PEr%2BODeeHzvb2iI7R3VjcMsNXPCPWUruF2EMtwWBHsPWD9hxqHGrfKKnuLx1bv7uWk9QSsVyctL0Q4aQREg1fHksCNMylvd0qoQ9wZdphZCYZv73P05u07p009mBekwXotdqIlyIqZ7JRz5PHSKJXmWO57956SphYzQ%2F5kC7833Fu2qbZ0Ho6%2BrgBMYewHqh1yurooqmn3h7o9NrxF%2B9tG%2FGme0&X-Amz-Signature=21118fa0fe2f645fcb74e51f34a0623801823b1d7a3293dc1389a43a802e6e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
