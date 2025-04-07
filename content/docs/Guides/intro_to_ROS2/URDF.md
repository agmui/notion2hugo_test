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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LEXFCE2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR9lJbRqHw67ZNzVNxH9HOnrn%2Fb%2B8xg86ST5SGaAsYQAiEA%2FdvBKykcPPYMBJ4XmPheSxFGYGpQyp73WFcwxg4S8eEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDG4J7SpholUr1XNLByrcAwFjmYOp2W3cWAs1wJRN87zmbCxQdQogdouGRyUi2Z9TZBu0nESyaB7vreUxn8MyjbEgMB7qdzBw616%2BKmz%2FnKzmdhB81ubxTJY0UqQEDAkgjTp64JYf3tx7uimqmdrUzqRlJuu6JQno898Ck%2FF4Qeov6OAFt%2BgpLiAkTamoGebu1y0syvsRsiTPhFP%2FJjvLA7qCSv9JDxGyFnQV%2FEHvgR3CtnnE5ICF1dWHkVXnw01CL0yGC%2BUXV3oD3%2BMiVdbgRerzUB64yxs79OIEXhFJAVZALA4fZMAIkswKBRqi4lmouB%2Fe%2FkYVjRueNV%2Bc4ogscSKPp6Fs%2FSKO2nYgchzSnGn7itbBzWtFMt8YpswK5SqUgz6TeeeAtaoSRnMrG9LrjrvUqqIKKDcgbz4gCD6TIrDNMh82EzYVRciNR6rmIXOeU9LRsClydWsu3Vdu2U%2FavlLS%2BpTyEJD%2FRPQ479HrVnl1uMmZRUxQihgx6K%2BncykSTP%2BKojZPghy7TS%2FtIh4sWl9wYhpeSKze5d3BJG21bpMCTAQdgzdjznimfWTIjT6cXe3mnxJcGW8QhLue7gqyhWufs9RwTOuzZF%2FmoxitBFtG0%2BRawQm2EpbVw790OkUFsWSbjbf9481YYNcsMJSFzr8GOqUBQWhcx9CZhSxwYt2Bzrp5Gd78g5rfwMbGFEDg9K%2FjWyAK1aY7UfsNRNkBkUxfQWa%2FxJYXJ5zVHzH3TV6HN7TPs8IcrMYfZk6HGL2B1IW87m75eTUVkSy06zfXBCo%2BGfKVG3TzUcjAxuGhUx39%2BnXDgPFPPrM9L5qp1js2p2onmneGSUnTIdg1awQYCcl920YEkaS3W8uShlZsZegDID3OdSQi8aoq&X-Amz-Signature=8fbf267984c5d20c3fe48de6d0a87cd0d875b79a6fe1dd1bdafa1a02af8e8325&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LEXFCE2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR9lJbRqHw67ZNzVNxH9HOnrn%2Fb%2B8xg86ST5SGaAsYQAiEA%2FdvBKykcPPYMBJ4XmPheSxFGYGpQyp73WFcwxg4S8eEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDG4J7SpholUr1XNLByrcAwFjmYOp2W3cWAs1wJRN87zmbCxQdQogdouGRyUi2Z9TZBu0nESyaB7vreUxn8MyjbEgMB7qdzBw616%2BKmz%2FnKzmdhB81ubxTJY0UqQEDAkgjTp64JYf3tx7uimqmdrUzqRlJuu6JQno898Ck%2FF4Qeov6OAFt%2BgpLiAkTamoGebu1y0syvsRsiTPhFP%2FJjvLA7qCSv9JDxGyFnQV%2FEHvgR3CtnnE5ICF1dWHkVXnw01CL0yGC%2BUXV3oD3%2BMiVdbgRerzUB64yxs79OIEXhFJAVZALA4fZMAIkswKBRqi4lmouB%2Fe%2FkYVjRueNV%2Bc4ogscSKPp6Fs%2FSKO2nYgchzSnGn7itbBzWtFMt8YpswK5SqUgz6TeeeAtaoSRnMrG9LrjrvUqqIKKDcgbz4gCD6TIrDNMh82EzYVRciNR6rmIXOeU9LRsClydWsu3Vdu2U%2FavlLS%2BpTyEJD%2FRPQ479HrVnl1uMmZRUxQihgx6K%2BncykSTP%2BKojZPghy7TS%2FtIh4sWl9wYhpeSKze5d3BJG21bpMCTAQdgzdjznimfWTIjT6cXe3mnxJcGW8QhLue7gqyhWufs9RwTOuzZF%2FmoxitBFtG0%2BRawQm2EpbVw790OkUFsWSbjbf9481YYNcsMJSFzr8GOqUBQWhcx9CZhSxwYt2Bzrp5Gd78g5rfwMbGFEDg9K%2FjWyAK1aY7UfsNRNkBkUxfQWa%2FxJYXJ5zVHzH3TV6HN7TPs8IcrMYfZk6HGL2B1IW87m75eTUVkSy06zfXBCo%2BGfKVG3TzUcjAxuGhUx39%2BnXDgPFPPrM9L5qp1js2p2onmneGSUnTIdg1awQYCcl920YEkaS3W8uShlZsZegDID3OdSQi8aoq&X-Amz-Signature=d9779c4a2ed965a61f39effd4293d77e066c7478c012fedcc17988b30c8b4242&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
