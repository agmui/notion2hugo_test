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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTGNW6R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEgMWWQ8CB7LsvaWVK3IYljcTkOSr3wU9aTEuGdl%2FDs%2BAiEA5GIRyDfYbNKA%2FC0W4db1F2GiM%2FfZDnqLEURIa4N2n9sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4k5EDab7xMpd8GUSrcA4y6V2FBNB855bGO0HhULWuJlJcdcdqo3A%2BACN3WvP32c8R%2FsJroHlhGwuD6ap0l2T60GC5jtcMGtgBh3UrcAoAKypDj0bEYT1cpotvqvJKBkFS8pj08eTWMKFuz6qoAWj21540Gwqon5SMBwYWnADEkY%2Fnbmc5ohzbOCWX0JLek8B%2Bkumuhf%2FpxvC4RYF3ugbirCf6CKY4dAeutsNzJsBpaIYy0fObmCzxsdY6naq2s9apOABXw3tQTukLB8f%2FgEmGS1ydea2R0hxZ4KpmoSxROOxJn80mPf7yydmBb3BZP%2FZY1CztIdUdP3Imzn0vnYDVQM68GBLbrrPVpV3rIvURkWDrrJ7pghk9buet5OGfSyfanM7t%2BaVCIhnTIPeFkk%2Bkb3VryqX2bYwhr%2FgKo0ScbYYVdtgOTIlk8dRku%2FUoZL%2BlBiDfdI4QrV4Gr1PphptR8rTykmXARDUbIr5iiQL8FCB39fF7T%2BVy%2F0OlKXdWKIkpg%2BJNwNYRWvTCNet8irq%2Bnay5XwMo6%2BPJHOGt1bhdequ3QDcHC3FOnOBIeBHmtnD2g1TYCLEuaMYa8D03pB5zmlNShvLiFHnH%2BiEoNNl7DP1APkgc%2Bcb08genBGMNUWGUMY%2BCbh%2Fjl68TMMN7C9cEGOqUBiW%2BxfOXtB6XadRnjR6cb9RuCSDLQTGl7mx6Hq8CxXBmyVvoOCoG98T8UNy%2FmvQqIss%2BoLQAobrqPncA4Xeea3ffS2mP7YAegUItSjvWi8B4CixybU1L6S7%2FhPsBfURAIQtMtLiimhhYEUbZ8FG8SK8nglBHHRbsR6H43S2lXADazMxfmLa1z4KhCXV06H5q6q3PglWeCq2dtv2zPkDDM95kTxuc4&X-Amz-Signature=339208ef65f4d653c353d3e943c32df12650998df7cec8706d9037e45e01c270&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTGNW6R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEgMWWQ8CB7LsvaWVK3IYljcTkOSr3wU9aTEuGdl%2FDs%2BAiEA5GIRyDfYbNKA%2FC0W4db1F2GiM%2FfZDnqLEURIa4N2n9sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4k5EDab7xMpd8GUSrcA4y6V2FBNB855bGO0HhULWuJlJcdcdqo3A%2BACN3WvP32c8R%2FsJroHlhGwuD6ap0l2T60GC5jtcMGtgBh3UrcAoAKypDj0bEYT1cpotvqvJKBkFS8pj08eTWMKFuz6qoAWj21540Gwqon5SMBwYWnADEkY%2Fnbmc5ohzbOCWX0JLek8B%2Bkumuhf%2FpxvC4RYF3ugbirCf6CKY4dAeutsNzJsBpaIYy0fObmCzxsdY6naq2s9apOABXw3tQTukLB8f%2FgEmGS1ydea2R0hxZ4KpmoSxROOxJn80mPf7yydmBb3BZP%2FZY1CztIdUdP3Imzn0vnYDVQM68GBLbrrPVpV3rIvURkWDrrJ7pghk9buet5OGfSyfanM7t%2BaVCIhnTIPeFkk%2Bkb3VryqX2bYwhr%2FgKo0ScbYYVdtgOTIlk8dRku%2FUoZL%2BlBiDfdI4QrV4Gr1PphptR8rTykmXARDUbIr5iiQL8FCB39fF7T%2BVy%2F0OlKXdWKIkpg%2BJNwNYRWvTCNet8irq%2Bnay5XwMo6%2BPJHOGt1bhdequ3QDcHC3FOnOBIeBHmtnD2g1TYCLEuaMYa8D03pB5zmlNShvLiFHnH%2BiEoNNl7DP1APkgc%2Bcb08genBGMNUWGUMY%2BCbh%2Fjl68TMMN7C9cEGOqUBiW%2BxfOXtB6XadRnjR6cb9RuCSDLQTGl7mx6Hq8CxXBmyVvoOCoG98T8UNy%2FmvQqIss%2BoLQAobrqPncA4Xeea3ffS2mP7YAegUItSjvWi8B4CixybU1L6S7%2FhPsBfURAIQtMtLiimhhYEUbZ8FG8SK8nglBHHRbsR6H43S2lXADazMxfmLa1z4KhCXV06H5q6q3PglWeCq2dtv2zPkDDM95kTxuc4&X-Amz-Signature=4b23ca797585ef575fdbe68981ce8fa2ea66986643414e1a70fa9155b503231d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
