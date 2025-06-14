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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4QU62%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDhJYXZbDzAm1CfoqY7VlUwWzWPF9cgvv4yEfi%2FrHkAtwIgXB6Tih%2BDcJ8XUe0rZRYzUOpexugIFQI%2B%2BwUIssOxU0Mq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEbJ1VM%2B%2BwCy9%2BeQkircA5oyECP%2BICF347QsQ8Rqwsqf%2BOIC5SSzfW637YyR2NcjfYBrh9CeE0u6X3m15aJtBr3PIqbiB4%2BIylBcVSlZP%2BoyxaMcyBbCa0T6TO8piN5VuYgm6tVu%2BfOHJzHE7H%2BFM3rfXTKY0NQwNZkgDCVuUQI3TanYiZvXD87zwejsoc9ukWkQRHZFOsWxZt%2FPgfmH7u6ZSryl8DakcZGa3CVMfM9LsJej43DXfI4g5Ifq75x%2FHaoAFh4H852nx7Mv85ib7jKFWQatNCLZ3F21ZfytKndoVUBZjQA3W6B%2F0KsySXYMvXe50Dqw0oYdzShIjikMCbEkLlmXCfb7eOx62SQSFC9k%2BfD%2FlZAMxdnJekfydTAgekTBi%2BFyW56pXB0umAqaw5JyZWexzKrGy9oFfBDAAefMXiDwy9ks005incHMnaBBi5qWUMF0e2ZMMsAM5x0Lzv4C8Qnnd84lVU6HbIs89o7RWl5bAIPj2Gt%2BIxhdKglkyIVpaFLuGXAIHfy28d0Ss0vwl5nQZ5%2FnS2kEqdB2VFp2HcNSavPjkjm1OkaBO00jGEYVENjBG5zBRK%2FEiPS0xfQmblStoEbokYAF%2BAFyPenvkWUcr8i%2FSWYaHwypn0zAA9vpdf6yd5tE9wMZMN%2FbssIGOqUBS0B2bH4VXHaETqnMqLbFVcw1yY5L%2BV12MguMr14o2R58D0MZBvdv2YLTgsSP63XVsAuFh4z406L3ASkVmBsNq5b9oNGoBD0%2B1k8GXPd3Ni567FKwlx9Ou1oVocdWFx4m0i8YbST6Q3h9I9Y3HDOODUHXT8Wx9YB6H9wt%2BC9J4ZCqL0ml5azu3oK7WhrU4WG1BAkYXTXyNEUaBECM%2BXNNHezPxkQj&X-Amz-Signature=cad078d81d38e74a5a44f158f9bb6dd0dff6fd3ad047f4ad8138c8703610addb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4QU62%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDhJYXZbDzAm1CfoqY7VlUwWzWPF9cgvv4yEfi%2FrHkAtwIgXB6Tih%2BDcJ8XUe0rZRYzUOpexugIFQI%2B%2BwUIssOxU0Mq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEbJ1VM%2B%2BwCy9%2BeQkircA5oyECP%2BICF347QsQ8Rqwsqf%2BOIC5SSzfW637YyR2NcjfYBrh9CeE0u6X3m15aJtBr3PIqbiB4%2BIylBcVSlZP%2BoyxaMcyBbCa0T6TO8piN5VuYgm6tVu%2BfOHJzHE7H%2BFM3rfXTKY0NQwNZkgDCVuUQI3TanYiZvXD87zwejsoc9ukWkQRHZFOsWxZt%2FPgfmH7u6ZSryl8DakcZGa3CVMfM9LsJej43DXfI4g5Ifq75x%2FHaoAFh4H852nx7Mv85ib7jKFWQatNCLZ3F21ZfytKndoVUBZjQA3W6B%2F0KsySXYMvXe50Dqw0oYdzShIjikMCbEkLlmXCfb7eOx62SQSFC9k%2BfD%2FlZAMxdnJekfydTAgekTBi%2BFyW56pXB0umAqaw5JyZWexzKrGy9oFfBDAAefMXiDwy9ks005incHMnaBBi5qWUMF0e2ZMMsAM5x0Lzv4C8Qnnd84lVU6HbIs89o7RWl5bAIPj2Gt%2BIxhdKglkyIVpaFLuGXAIHfy28d0Ss0vwl5nQZ5%2FnS2kEqdB2VFp2HcNSavPjkjm1OkaBO00jGEYVENjBG5zBRK%2FEiPS0xfQmblStoEbokYAF%2BAFyPenvkWUcr8i%2FSWYaHwypn0zAA9vpdf6yd5tE9wMZMN%2FbssIGOqUBS0B2bH4VXHaETqnMqLbFVcw1yY5L%2BV12MguMr14o2R58D0MZBvdv2YLTgsSP63XVsAuFh4z406L3ASkVmBsNq5b9oNGoBD0%2B1k8GXPd3Ni567FKwlx9Ou1oVocdWFx4m0i8YbST6Q3h9I9Y3HDOODUHXT8Wx9YB6H9wt%2BC9J4ZCqL0ml5azu3oK7WhrU4WG1BAkYXTXyNEUaBECM%2BXNNHezPxkQj&X-Amz-Signature=cf4b8f4ee635880f82a67531c75dd79aab80d1f60536d65a11c04007c53469b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
