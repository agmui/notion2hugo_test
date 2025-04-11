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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THX7NUQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCID2ZBG9f67vEpt1qWx72Rf8FeCHRzMFxjPzaaejCGAKmAiA2b26EA7VCKO9CNN%2BoFtyI1zAJx2XP8bivSpHMlEubsyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM11GOnYoV6bgu2rwEKtwDRedgox0q08UB%2FHnhfdIfJG2F0MPJb%2Fj%2F0xNzu6glHJvZUidFyGosRdf4tUvtno9lRZ9Lk1ksHQVQ7GVNSBCADPIq6uvwpAHa9QtkwYyxnwLcr1zefqHlYEJMEkQjOqUESPZnl4Xil1Lw2Z5HXrcEtyp1Ot6oY%2FgWljraVAUhh7HlnMtsic5rl7CGIi%2BkmRv5hPsuWhZa7ZtQZFLUVZZQ8sxSqB%2BRrpGrIlG13JgSKc2FRcgIV2nrP87IVjS8bSbm5q9LXW74T4Y8r5XC0hB5giQjIerOcaJ1xeQu1CI74BlU%2Bbdcrwvgv5pVI4ExjBzNSg5dyJVvCaQ8fw9RIXcaEaHcWUkVanJUNJQ4rRBVut5AmY6RruxltcGsz8RkhdhYSygG3GXEZs8RCeSr7SeTG1UxuvbjqvfEB4vsU8bw40Ru1yce%2FjFxBwanaZW4HtvZEz%2B7yTzVRFYAyleBVyWJZxsgUJoEymsdzxxpMyd1fbKIcEyMZ3hf89SGspMe9%2F0U3uPrH3V0QVuvG3q%2FtudQmbHCbZuAOkNghxwi9VmHoFpVAIKGQ%2BwHJ8KIyG8K8fwJ5erusquQqyxW%2FxnteKNMIZ2n3ES5vSNrB7HfSCIG24TDGY2ZiyHAkXgOLzMwsoHkvwY6pgHl2B1wdzqSIsPPLGiG83PC9LYdyWb0V1mpk%2FK595zyPvI5dV%2FYFYbZscRcnGQuC1FDviw8jN7emMaBI1q6b0A9s15p7R2cvNfhLrzRbIOqWi%2BkcO6Gkz%2F1ArJYexFhMKpFu4i8AhVzsF%2FPBStlrVyv57JAq8NCXVhOwgh1gON%2BIVPzCfJqEmRs4O8SbtqXraDL8S%2FqWNrvwsawlENbOTFNaskY5cwZ&X-Amz-Signature=a51a1921f1a9208e882fc92de93b62d7a99e0f8103026997743b0c8f7edeac83&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THX7NUQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCID2ZBG9f67vEpt1qWx72Rf8FeCHRzMFxjPzaaejCGAKmAiA2b26EA7VCKO9CNN%2BoFtyI1zAJx2XP8bivSpHMlEubsyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM11GOnYoV6bgu2rwEKtwDRedgox0q08UB%2FHnhfdIfJG2F0MPJb%2Fj%2F0xNzu6glHJvZUidFyGosRdf4tUvtno9lRZ9Lk1ksHQVQ7GVNSBCADPIq6uvwpAHa9QtkwYyxnwLcr1zefqHlYEJMEkQjOqUESPZnl4Xil1Lw2Z5HXrcEtyp1Ot6oY%2FgWljraVAUhh7HlnMtsic5rl7CGIi%2BkmRv5hPsuWhZa7ZtQZFLUVZZQ8sxSqB%2BRrpGrIlG13JgSKc2FRcgIV2nrP87IVjS8bSbm5q9LXW74T4Y8r5XC0hB5giQjIerOcaJ1xeQu1CI74BlU%2Bbdcrwvgv5pVI4ExjBzNSg5dyJVvCaQ8fw9RIXcaEaHcWUkVanJUNJQ4rRBVut5AmY6RruxltcGsz8RkhdhYSygG3GXEZs8RCeSr7SeTG1UxuvbjqvfEB4vsU8bw40Ru1yce%2FjFxBwanaZW4HtvZEz%2B7yTzVRFYAyleBVyWJZxsgUJoEymsdzxxpMyd1fbKIcEyMZ3hf89SGspMe9%2F0U3uPrH3V0QVuvG3q%2FtudQmbHCbZuAOkNghxwi9VmHoFpVAIKGQ%2BwHJ8KIyG8K8fwJ5erusquQqyxW%2FxnteKNMIZ2n3ES5vSNrB7HfSCIG24TDGY2ZiyHAkXgOLzMwsoHkvwY6pgHl2B1wdzqSIsPPLGiG83PC9LYdyWb0V1mpk%2FK595zyPvI5dV%2FYFYbZscRcnGQuC1FDviw8jN7emMaBI1q6b0A9s15p7R2cvNfhLrzRbIOqWi%2BkcO6Gkz%2F1ArJYexFhMKpFu4i8AhVzsF%2FPBStlrVyv57JAq8NCXVhOwgh1gON%2BIVPzCfJqEmRs4O8SbtqXraDL8S%2FqWNrvwsawlENbOTFNaskY5cwZ&X-Amz-Signature=73cfc9ad1d9bbf4ddc380fc14b62a531ed2b7dbf73a2ef896a4dc2aea04dd670&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
