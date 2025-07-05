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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTZHMAK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFN5%2FndkXi1Lu5Krdjt%2F1HFjULAeqT5prKZUu24uEKOMAiEAkx%2BzfivMEp7dgrzzy0LQ%2FjBX2w4SMTuMCBDK1Cy6VjEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDN9f4aGqPVOZoeRzDircA3gtVw6uKGbG0x0D4aoGEES2wqmxiMkbz4RJgG7f21DLfG07BTO5SO9gh1MuBJc7ihSZZ9jsKSn7U%2BiQxb4OWzd0j7PMxOOlFlaOIVqKDRMhybfC5Jgad76B4klqfKqA4N1AAB7vR2LqBRiYdh3WGmnLuc1ohFOh%2F1kPngS68dJ3HJ1bCoXOcVcY%2FLDtsIzoUET0jcUw8p0sYOdkNb8rmyixoyi2uS7qcqpqDEPIBP6%2FoKCOA6CkpZ0id3j99fAWrM4KAKyjT%2BM1L7fwsapbHk5cRuEt5pTLUjItLpcOKYQV%2BaObhHSaTpqIPa14Tqaf4Zgb2Em5TRRRibLXoIaTg7uYNq46iT1WKI%2B8Dq4osMp6sRK330QCNSm0pZLy5tWZTGjOBhvpqPo0cJvRtUxV5LeCc7n38R0Hxw8exTRCx5ZMCaLaDQPrsjKb4A81ht1sm9tRc4F1qIi7hyadAkjHDOmvvz3gYXcvTAW9dHXU4T0g39YPAQqvceiHGAn17viBfaBcPtTV0EjRQD6yvlXcMEIuTGeqsQwi8UktsOIJL%2Fr6Bc13UC%2FNO8PIA6tZe8Hh%2FNDA6IImtZhaLCVeAoSBKBQLvfofQmzQdNh7M1ZgF4Se8dF7FmdJwtVV%2BibmMJ%2BOpcMGOqUBL3rSDzFyVU1GQhTQzt17J1ml4yXQI5rZFLZYdNiEBc1JgpiycNIEavkF6k%2BsCRw4hViRJ1MLbqRqIwtrNbg1pC2%2BKEqfhWoqGeliSvbAmXF4Lu%2FDcG71h7to9vxiQqlE8hAqZRgrUYRQli1Ndj2aGuI0f%2BNc4mYwJWE9YK96x8Z3NGWNS38TqtjhqEMlz6aJYp3Lzaz%2BOwnQIeN4HTjyTwMDn6dy&X-Amz-Signature=f9de3aade099bf82b61d6dc1c2983764b1912d3091df3b7dc00f100c1ddd32fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTZHMAK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFN5%2FndkXi1Lu5Krdjt%2F1HFjULAeqT5prKZUu24uEKOMAiEAkx%2BzfivMEp7dgrzzy0LQ%2FjBX2w4SMTuMCBDK1Cy6VjEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDN9f4aGqPVOZoeRzDircA3gtVw6uKGbG0x0D4aoGEES2wqmxiMkbz4RJgG7f21DLfG07BTO5SO9gh1MuBJc7ihSZZ9jsKSn7U%2BiQxb4OWzd0j7PMxOOlFlaOIVqKDRMhybfC5Jgad76B4klqfKqA4N1AAB7vR2LqBRiYdh3WGmnLuc1ohFOh%2F1kPngS68dJ3HJ1bCoXOcVcY%2FLDtsIzoUET0jcUw8p0sYOdkNb8rmyixoyi2uS7qcqpqDEPIBP6%2FoKCOA6CkpZ0id3j99fAWrM4KAKyjT%2BM1L7fwsapbHk5cRuEt5pTLUjItLpcOKYQV%2BaObhHSaTpqIPa14Tqaf4Zgb2Em5TRRRibLXoIaTg7uYNq46iT1WKI%2B8Dq4osMp6sRK330QCNSm0pZLy5tWZTGjOBhvpqPo0cJvRtUxV5LeCc7n38R0Hxw8exTRCx5ZMCaLaDQPrsjKb4A81ht1sm9tRc4F1qIi7hyadAkjHDOmvvz3gYXcvTAW9dHXU4T0g39YPAQqvceiHGAn17viBfaBcPtTV0EjRQD6yvlXcMEIuTGeqsQwi8UktsOIJL%2Fr6Bc13UC%2FNO8PIA6tZe8Hh%2FNDA6IImtZhaLCVeAoSBKBQLvfofQmzQdNh7M1ZgF4Se8dF7FmdJwtVV%2BibmMJ%2BOpcMGOqUBL3rSDzFyVU1GQhTQzt17J1ml4yXQI5rZFLZYdNiEBc1JgpiycNIEavkF6k%2BsCRw4hViRJ1MLbqRqIwtrNbg1pC2%2BKEqfhWoqGeliSvbAmXF4Lu%2FDcG71h7to9vxiQqlE8hAqZRgrUYRQli1Ndj2aGuI0f%2BNc4mYwJWE9YK96x8Z3NGWNS38TqtjhqEMlz6aJYp3Lzaz%2BOwnQIeN4HTjyTwMDn6dy&X-Amz-Signature=a69eaa0d9659e931e9758cbfa8abafeb52f81c09ec62aa73be7b1971c3bb54e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
