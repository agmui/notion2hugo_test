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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHP2AK7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGZL%2FsPec%2BpOwZBAQUoRappY1G7Wvj%2FU8LJBZV%2F8tr6XAiEA2q%2FKpEmCyESWvJZWzsAKQ1RIxMezdkYoBqq0w9fqBwAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLF0%2FQp%2BzfXpEs34iCrcA5XMDOwjnmboqOZqO13kz%2Bm9p6n8qrl6kXYpMAQnmSttC1d8PNzR9Er2qhoACZB%2F3bb0qbaOH%2FTE%2FM7vvJdJoPbaDM7PTtGwBxxIRqGabt5gNmbGwOi53zEeHzV7xcrDFV8DLIermqcWha3WFqTzBhBfgil8CH7zluLsxxYb%2BRb0gmPCTvwsffzD5Mly0ms3DNd2oqyFTMUlgNilWoE4XWuRf9xPTtXos%2BowNYzwzFjHoYi9M9ffc1HyrYAPFhUVaQ0gS%2FEi%2BwrO9MSwUUBjlc0TB3Vtkwc4KosQUhL6SEqtj56%2F8%2BYKKJBVKHHsQfRDMarrSS%2F0co%2BSSvzOX3ivzGmQWJivvQ%2BV4KvDBs25C8r2n%2F3vq1ioEV70qSVxVAC9FXXbEro1xYGddUlE7BL643e2FsH7OTsCgeTFEBtNS%2B%2ByFqOYNE9B0KDaN2KjiTZ6I5F2FWnE7cQiDgvisJikEvXB6yH7akdOYQm7TgXdsifNrAZKzl8iPZELAUeTizpv%2BKMgZBu82Z9SKS%2B3e%2B8HbSKUJc4zXmLnqVp5V54McBzby8se8wozPwYg5SMGI%2FRQZveLy19NP0RI1pfLmQEjbE0kWfG4a6DliVeGP%2FbjU4NXi1yZvG22imbW7F3YMK2qzsEGOqUBQKIVtyj27sxncswocnBz51WnKtMfZd0Y4B1hGp03PLTKHKbvhQ42T20N%2B2Kai713%2BDPjGFCRTierm7uWRXV5p3eoJqz8xcwanfuuOIyPz0uIpW3mPxxVWvx%2BLl5jRoxuoH7MOOi%2BC4RHyw5qacO6Mq2jXAzrp%2BOPq2%2FwueNxB69kqGV4Rh6ejeTSn74%2FjfH%2BgsFxAuLv7O2MPposbWlOrZ4yMthC&X-Amz-Signature=ea7afea786277c70f86ca495a554315b5f3de32fbff526071d61535ae9166157&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHP2AK7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGZL%2FsPec%2BpOwZBAQUoRappY1G7Wvj%2FU8LJBZV%2F8tr6XAiEA2q%2FKpEmCyESWvJZWzsAKQ1RIxMezdkYoBqq0w9fqBwAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLF0%2FQp%2BzfXpEs34iCrcA5XMDOwjnmboqOZqO13kz%2Bm9p6n8qrl6kXYpMAQnmSttC1d8PNzR9Er2qhoACZB%2F3bb0qbaOH%2FTE%2FM7vvJdJoPbaDM7PTtGwBxxIRqGabt5gNmbGwOi53zEeHzV7xcrDFV8DLIermqcWha3WFqTzBhBfgil8CH7zluLsxxYb%2BRb0gmPCTvwsffzD5Mly0ms3DNd2oqyFTMUlgNilWoE4XWuRf9xPTtXos%2BowNYzwzFjHoYi9M9ffc1HyrYAPFhUVaQ0gS%2FEi%2BwrO9MSwUUBjlc0TB3Vtkwc4KosQUhL6SEqtj56%2F8%2BYKKJBVKHHsQfRDMarrSS%2F0co%2BSSvzOX3ivzGmQWJivvQ%2BV4KvDBs25C8r2n%2F3vq1ioEV70qSVxVAC9FXXbEro1xYGddUlE7BL643e2FsH7OTsCgeTFEBtNS%2B%2ByFqOYNE9B0KDaN2KjiTZ6I5F2FWnE7cQiDgvisJikEvXB6yH7akdOYQm7TgXdsifNrAZKzl8iPZELAUeTizpv%2BKMgZBu82Z9SKS%2B3e%2B8HbSKUJc4zXmLnqVp5V54McBzby8se8wozPwYg5SMGI%2FRQZveLy19NP0RI1pfLmQEjbE0kWfG4a6DliVeGP%2FbjU4NXi1yZvG22imbW7F3YMK2qzsEGOqUBQKIVtyj27sxncswocnBz51WnKtMfZd0Y4B1hGp03PLTKHKbvhQ42T20N%2B2Kai713%2BDPjGFCRTierm7uWRXV5p3eoJqz8xcwanfuuOIyPz0uIpW3mPxxVWvx%2BLl5jRoxuoH7MOOi%2BC4RHyw5qacO6Mq2jXAzrp%2BOPq2%2FwueNxB69kqGV4Rh6ejeTSn74%2FjfH%2BgsFxAuLv7O2MPposbWlOrZ4yMthC&X-Amz-Signature=d53ab68d54a559612347836cde25d726747c7f2342c078b06524c250570e8ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
