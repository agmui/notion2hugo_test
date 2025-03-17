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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WTNWMQB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliCwihadgxp1EzBCGHmaZwTic1eVwPx%2FlgxsNykjrzwIgGiU%2F8ahJFvcrl7mZvtsyNZ7rj2jp%2FI2e91fyEAcRlNkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCvT5BP8Pedr3AaIJSrcA9I4oYHxXmhKJeJn3NJvUBY2WOnRYcHoQjIYB6RLpTqHrWtfHkT6vhtAHuWPLRdfiW%2FyHMjcbcUso61nKmFtqX9z2WCiL4kOUXz45UgjIdG5N9Xpdttip2LWBr%2FuEFT5m9yAyuBMB4Jml19tQpvWkWnqI3FT8g4CV0YyyHC8K2Lc4HUVGVP9g4Jw84vpCSsAlrzv5b9DemwrNb9JobOF2inOAF7qBIw1aRIRHwVAFgVSP%2FbVytybTnuaSAqUh7UMfyT%2BnwH4ZlQl4g6bOtPhHavc155LFpfmiL7TfQf3LSuR%2BPsR7I%2BcKB2gQYxhMlz5vYDf2TDuvjL6WCP876QYdpmJXEGLeldujssKycnPhx%2FGW2QMztlyGrDWD380dsRRc3jLB5ziNgaY7lqqOHsPrqfldXdCMJJ4QkjTO2DLttsxoBRNBfBZ1pmcwVD5k7zTjOdmVYb6nQNFfQhxivj63ZQYYXF7QlZFb5%2BqoR%2FrH2edZV5%2FQW7I1ecnvYgfEqWQRtUSynFNifNegzU2Ni1yFJgTw642DG0gErEokFzCjOHm7rE308MccBg%2FpVg8%2F4B2qcgM4V6AWrU5beHRjAyb70qZR0dwXS0SY9%2F5%2FTdglnk8jkRjZEQnfPS2OB%2FWMJ%2Bw374GOqUB9I7VHVWbRNPvjPr7oorVEWekeu5S0oPCmTftrQhGnuJYXVS9ngEDXFx0KtMwHN0yfWHfLgoFG%2Bh0JD4DszlBh93d6H7CyJCbnhdQM4NZQzwqKIN1jotiUvGvZ9QM887aSqzr73oiT98pYfsDpfx4mSnol8Egs8hHcSb83PTpwGrUJwNBjDR0KV91Cr9hyXZRmpVeKGUO5YuoGbjSlpxw0%2Fz%2BdRBM&X-Amz-Signature=1d73236a6e9a55ad11e630d71e8ceb480a610c17a8e76893f1df822a30db48c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WTNWMQB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliCwihadgxp1EzBCGHmaZwTic1eVwPx%2FlgxsNykjrzwIgGiU%2F8ahJFvcrl7mZvtsyNZ7rj2jp%2FI2e91fyEAcRlNkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCvT5BP8Pedr3AaIJSrcA9I4oYHxXmhKJeJn3NJvUBY2WOnRYcHoQjIYB6RLpTqHrWtfHkT6vhtAHuWPLRdfiW%2FyHMjcbcUso61nKmFtqX9z2WCiL4kOUXz45UgjIdG5N9Xpdttip2LWBr%2FuEFT5m9yAyuBMB4Jml19tQpvWkWnqI3FT8g4CV0YyyHC8K2Lc4HUVGVP9g4Jw84vpCSsAlrzv5b9DemwrNb9JobOF2inOAF7qBIw1aRIRHwVAFgVSP%2FbVytybTnuaSAqUh7UMfyT%2BnwH4ZlQl4g6bOtPhHavc155LFpfmiL7TfQf3LSuR%2BPsR7I%2BcKB2gQYxhMlz5vYDf2TDuvjL6WCP876QYdpmJXEGLeldujssKycnPhx%2FGW2QMztlyGrDWD380dsRRc3jLB5ziNgaY7lqqOHsPrqfldXdCMJJ4QkjTO2DLttsxoBRNBfBZ1pmcwVD5k7zTjOdmVYb6nQNFfQhxivj63ZQYYXF7QlZFb5%2BqoR%2FrH2edZV5%2FQW7I1ecnvYgfEqWQRtUSynFNifNegzU2Ni1yFJgTw642DG0gErEokFzCjOHm7rE308MccBg%2FpVg8%2F4B2qcgM4V6AWrU5beHRjAyb70qZR0dwXS0SY9%2F5%2FTdglnk8jkRjZEQnfPS2OB%2FWMJ%2Bw374GOqUB9I7VHVWbRNPvjPr7oorVEWekeu5S0oPCmTftrQhGnuJYXVS9ngEDXFx0KtMwHN0yfWHfLgoFG%2Bh0JD4DszlBh93d6H7CyJCbnhdQM4NZQzwqKIN1jotiUvGvZ9QM887aSqzr73oiT98pYfsDpfx4mSnol8Egs8hHcSb83PTpwGrUJwNBjDR0KV91Cr9hyXZRmpVeKGUO5YuoGbjSlpxw0%2Fz%2BdRBM&X-Amz-Signature=b61166aea24547225093a05f2d4ff8cd0ffd8f12ae538a32a38c01808bc58bff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
