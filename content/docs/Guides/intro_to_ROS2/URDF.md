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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632LT23S2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk7dxKwvo9ok9gSIN5Q0zSkWO%2BoXEa3FELgeb7Lojn%2BgIge9t4oO0P9lhMToNQWYDcw7gY3xHcRMkghMwPMBt54Zsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBc1O1kAZwy8nkxnRSrcAw6UgMHJ12DW30RN3joApmk%2F5jy%2Brl0WCJtOkgFtLoZ9Sul6xSW0%2FIhEjJpnUQYpltyMtgf3gy1nGN8xendVuz0QUB89pv6AkRiTH%2B2P81JFgGBlns6avadJy53fXifbqX57CKacjEoMBbXNQM9KewwnqK5ZxFJ%2FrlVASzQadApmE28B7YS87SRCtTkCQTf1HGC%2FtXEUAIfsBIPLgK8%2B%2FiDcU3p3PT5VNNtuKIpV42VjQTe3PpCQ7JOFnf9r94RnjCKC4NJvcUa1dhdGnVowGMWwxkQuOnRNm5yB00Q515AiPXAjQ5mKnpbq5jGdfbLr%2BpnEtMobgk5w1Hxj8NU%2BourqO15d7l%2FL1rrZMDOCgFISryG2TDqXWE7CaAYuUUaikKpJp301OfxpZnK50nVlTCaqP7ats3gkEDrf4bN5ZlfsOWqD3h9TClB0puMVsLA8NO1jWbtE5gVsSNGJd2QCmWg5RnnwyXxNa%2B%2FkCR6nZjnkamqqBgOa0UIUKVbnvPAsoPL8XxlbJzFrPQTkbsaGN0nNF%2FWGck3Ip1O359LodZMk2SmrQjMxR%2FQQRnHX6D9fk%2BO8WNIqDH3Qpwi%2FG6bg%2B33jlxs27TM%2F%2Fb%2FI4TKVF7DYhsM%2F7dRy93g3K8ltMO2tucAGOqUBEsxUjeTFRXjE%2BSIOd7U7ccMRSmBxBy837QqsY08bxHiwEb6GyBHlWpuONimFR36xiSeGG%2BOl0qbWY4zYkSEZE1x5cqAiAM%2FU%2BpnmDOhPKOCrOsBmAE3gqFxXu%2B9RYQCjNY2IzLKsXFDksuWY2SgHQ0wmgGSHfSUYifyOfJG%2Fe3lDiNPIvuzAqYBlbOxbOjZsOSmH0Atu4hq7wontR67Ya8P43F%2BE&X-Amz-Signature=5a2cf113b1a7d569bf43f21ed61224b38dcbfad4fbb26aa06b3a6cb91b969301&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632LT23S2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk7dxKwvo9ok9gSIN5Q0zSkWO%2BoXEa3FELgeb7Lojn%2BgIge9t4oO0P9lhMToNQWYDcw7gY3xHcRMkghMwPMBt54Zsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBc1O1kAZwy8nkxnRSrcAw6UgMHJ12DW30RN3joApmk%2F5jy%2Brl0WCJtOkgFtLoZ9Sul6xSW0%2FIhEjJpnUQYpltyMtgf3gy1nGN8xendVuz0QUB89pv6AkRiTH%2B2P81JFgGBlns6avadJy53fXifbqX57CKacjEoMBbXNQM9KewwnqK5ZxFJ%2FrlVASzQadApmE28B7YS87SRCtTkCQTf1HGC%2FtXEUAIfsBIPLgK8%2B%2FiDcU3p3PT5VNNtuKIpV42VjQTe3PpCQ7JOFnf9r94RnjCKC4NJvcUa1dhdGnVowGMWwxkQuOnRNm5yB00Q515AiPXAjQ5mKnpbq5jGdfbLr%2BpnEtMobgk5w1Hxj8NU%2BourqO15d7l%2FL1rrZMDOCgFISryG2TDqXWE7CaAYuUUaikKpJp301OfxpZnK50nVlTCaqP7ats3gkEDrf4bN5ZlfsOWqD3h9TClB0puMVsLA8NO1jWbtE5gVsSNGJd2QCmWg5RnnwyXxNa%2B%2FkCR6nZjnkamqqBgOa0UIUKVbnvPAsoPL8XxlbJzFrPQTkbsaGN0nNF%2FWGck3Ip1O359LodZMk2SmrQjMxR%2FQQRnHX6D9fk%2BO8WNIqDH3Qpwi%2FG6bg%2B33jlxs27TM%2F%2Fb%2FI4TKVF7DYhsM%2F7dRy93g3K8ltMO2tucAGOqUBEsxUjeTFRXjE%2BSIOd7U7ccMRSmBxBy837QqsY08bxHiwEb6GyBHlWpuONimFR36xiSeGG%2BOl0qbWY4zYkSEZE1x5cqAiAM%2FU%2BpnmDOhPKOCrOsBmAE3gqFxXu%2B9RYQCjNY2IzLKsXFDksuWY2SgHQ0wmgGSHfSUYifyOfJG%2Fe3lDiNPIvuzAqYBlbOxbOjZsOSmH0Atu4hq7wontR67Ya8P43F%2BE&X-Amz-Signature=0056d61b7245ef3f5fbbcf5b81e3ad89f6f353b1d65a6d57ce9409a44ed7b378&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
