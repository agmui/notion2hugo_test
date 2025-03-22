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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTN6LIP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIA2k%2FsIGpAhXweXqs8VSnH7H%2BU3xtsItL90%2BavFb5f%2FEAiEAk%2Bc5ZP%2FEVAy%2FgDKkjNh338PfNzip1ZMvgu3V6mcJE8MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX1U9P9W33DUHpXoyrcA%2F8C8q6RX4WjU%2BYlJfM6Lxde7O1UfAuj0Wwo66jpL64TMNo8IDBqAg3amSm59aRlNPLUVvKl6UiH3S6NvKMwOxKOg%2F0G8OPgcqRxiL41gsS7LZE7JA56TCNBKdrJ6NkWb3o2QrnADmO8npq7eEcPak3ZgidHS%2FEDMcoEGeZ1xdOc5C%2B%2FEkJDKJXnvsLVEYrvesK8wq%2B6Ep4aLWkhniK865%2FKjD7MSDZWIyTMJZ2fejbvce7T7CUCyER0Cy0Hn%2BK%2FPBZwBktaIDjd6lWma%2BwT6EJ7uY5ApfYSGRmRi3laneTKM17kUGscsl9Ss6Je3tDYhyUDvLvYStfDGioZ0G%2FxZJuE%2F79ON5z%2ByKgbEH0c6zKTQLLDhW1pdCFRit9WaGWtQfx7vKq%2BctmOFhfZ%2Bjg84tmq8%2BakO8Zw%2FNSDmBFilppesaHnPN7iaKdlXTUZSePoi%2F63FeM%2Fo6keAHmrkAUwaSrQ3G%2FABSRrQW5LqgR8kwOWPzLq2iQua76y2dDOvDKWMigaLvajN6iaXG50%2BZV%2BPLj%2BN8k%2FFkkMAr8WWDwn2v4VB2Nv3rps18qfhCdfusZwv9zYVvcZ6occA803q%2FyELsPlgPi7DU5Uoml5vfQnA%2BEqyxNlKhYOCKDamSAlMIy2%2FL4GOqUB69usn3ugNDN8udPDZNnh1cKd%2BCnAJIR7K%2B8MFmlNzJUkuuHAem0gx0B46o0FSsAnhqpKbMgmdY7u3yKshpvJ0RbCrdjn15xq1m6ue5Zw0Khuvv1dg4944eYXWzS8jjD%2F1rZleMK9flT%2FqmUKeBvJvGCag4uyS%2BYsVy8ocssaEYvT%2B8wVlOeAURj8Si6uQryzp1i4TnsHUebBjXsVXHvspCQiQydf&X-Amz-Signature=407c37fab4590d8ff600b0b71df7ddb6d39c6a4efaebc14dd38f190e06382bae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTN6LIP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIA2k%2FsIGpAhXweXqs8VSnH7H%2BU3xtsItL90%2BavFb5f%2FEAiEAk%2Bc5ZP%2FEVAy%2FgDKkjNh338PfNzip1ZMvgu3V6mcJE8MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX1U9P9W33DUHpXoyrcA%2F8C8q6RX4WjU%2BYlJfM6Lxde7O1UfAuj0Wwo66jpL64TMNo8IDBqAg3amSm59aRlNPLUVvKl6UiH3S6NvKMwOxKOg%2F0G8OPgcqRxiL41gsS7LZE7JA56TCNBKdrJ6NkWb3o2QrnADmO8npq7eEcPak3ZgidHS%2FEDMcoEGeZ1xdOc5C%2B%2FEkJDKJXnvsLVEYrvesK8wq%2B6Ep4aLWkhniK865%2FKjD7MSDZWIyTMJZ2fejbvce7T7CUCyER0Cy0Hn%2BK%2FPBZwBktaIDjd6lWma%2BwT6EJ7uY5ApfYSGRmRi3laneTKM17kUGscsl9Ss6Je3tDYhyUDvLvYStfDGioZ0G%2FxZJuE%2F79ON5z%2ByKgbEH0c6zKTQLLDhW1pdCFRit9WaGWtQfx7vKq%2BctmOFhfZ%2Bjg84tmq8%2BakO8Zw%2FNSDmBFilppesaHnPN7iaKdlXTUZSePoi%2F63FeM%2Fo6keAHmrkAUwaSrQ3G%2FABSRrQW5LqgR8kwOWPzLq2iQua76y2dDOvDKWMigaLvajN6iaXG50%2BZV%2BPLj%2BN8k%2FFkkMAr8WWDwn2v4VB2Nv3rps18qfhCdfusZwv9zYVvcZ6occA803q%2FyELsPlgPi7DU5Uoml5vfQnA%2BEqyxNlKhYOCKDamSAlMIy2%2FL4GOqUB69usn3ugNDN8udPDZNnh1cKd%2BCnAJIR7K%2B8MFmlNzJUkuuHAem0gx0B46o0FSsAnhqpKbMgmdY7u3yKshpvJ0RbCrdjn15xq1m6ue5Zw0Khuvv1dg4944eYXWzS8jjD%2F1rZleMK9flT%2FqmUKeBvJvGCag4uyS%2BYsVy8ocssaEYvT%2B8wVlOeAURj8Si6uQryzp1i4TnsHUebBjXsVXHvspCQiQydf&X-Amz-Signature=001acc5fa930ed27ba866f9ad22ca26e3ae447802351041211d155b10c00faff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
