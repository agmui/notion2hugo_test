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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4MBNBA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4Hh%2Fg7Iy%2Bwsue1%2B2lyec6mYiDLHYj82luwJKcU1VVgIhAN4D9HlrE%2BsCJ4UTLkNhU5HzzteTDP0jUbFVyUSeUC34Kv8DCBEQABoMNjM3NDIzMTgzODA1IgyW5pQk7x3HnGelbX4q3AOHehsuEirUJamrvDegv6%2BfybdKWOkamAplWu782w%2FDycg4nwE7DvZM1470Hd%2B1s7rATkWZu4QW2Gg8N3DaoI3DXbF6vEKxSwOo1ajs7KtapZ8doZwUqIy2LefdBi%2FAIBnKHdK6%2FV%2FasBaywQLfchqaWPZ%2Ff4dURo7MY9vKujnU0QzO6xd%2Bx4FgDkiiij3tsHnw4p9yMxGv84gHuW7a%2Fvz2yqFqnVv34F9g3C14%2B9iDoxz5c%2Fhn%2F4PnKq3e7BPI5LbYb4%2BOpkJz8fX0mSoI4KMITv4q033kZ7%2BGuUMcN%2BuhG26A%2FWOYJ%2FP4UE5GozOqRueY%2FrqjI1RfgU1WhLWVNpc%2B3GKfqeqqIh09ebvaOH2HryB%2FCuj%2BDtgi%2Bbjj%2FSKZB7ofKYmuMaoYyAjdML4twK%2Fz7OL0mbkmwqk7W3s80%2BR05f4aUDyBccA4qkumL7xqNbeIcbkQAtT67vok%2FWt7tusTB07qAQIAD6jwQ8mkBe9ZY52clIJD5jL0tOJBtg8TKuy8xXdaQGt5PDP41MUZCPbbsMdyA4wI7XcSH7k6n%2BZ0FeMojO2eBMzsMuEp%2Fd6v%2B5FrOecgrt%2BN6yYTu7EWoDGILhvTz%2FK0pFM2GVB2SSs5IpG5NUzf9FvgEUmSWzDD4dS%2BBjqkASHJWn3kJ2cJdT9Saj9X5PCdJdrA%2BPTmSrQpbgtoug9At6rlwFPdffkjzf51skgZeKEo2YB%2FGqB0jHoSVGGmsZu4y6hI%2FGCfSdIyqEQlHyoOJcXHord6FLvKDwujQRDLIDhMwKnvuQ%2BlgRC%2Bf7%2FutsF4%2B%2FrRezoCR0SiR42SNd2SzlddXMyFzxw9JnwE%2B4dFPXNjmZPiCcc7KoYC3HtIKyA2g5%2B1&X-Amz-Signature=297f74dba2406688e73aa9ad21d42e4ca18ddb42e5133902278f3457738b7caf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4MBNBA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4Hh%2Fg7Iy%2Bwsue1%2B2lyec6mYiDLHYj82luwJKcU1VVgIhAN4D9HlrE%2BsCJ4UTLkNhU5HzzteTDP0jUbFVyUSeUC34Kv8DCBEQABoMNjM3NDIzMTgzODA1IgyW5pQk7x3HnGelbX4q3AOHehsuEirUJamrvDegv6%2BfybdKWOkamAplWu782w%2FDycg4nwE7DvZM1470Hd%2B1s7rATkWZu4QW2Gg8N3DaoI3DXbF6vEKxSwOo1ajs7KtapZ8doZwUqIy2LefdBi%2FAIBnKHdK6%2FV%2FasBaywQLfchqaWPZ%2Ff4dURo7MY9vKujnU0QzO6xd%2Bx4FgDkiiij3tsHnw4p9yMxGv84gHuW7a%2Fvz2yqFqnVv34F9g3C14%2B9iDoxz5c%2Fhn%2F4PnKq3e7BPI5LbYb4%2BOpkJz8fX0mSoI4KMITv4q033kZ7%2BGuUMcN%2BuhG26A%2FWOYJ%2FP4UE5GozOqRueY%2FrqjI1RfgU1WhLWVNpc%2B3GKfqeqqIh09ebvaOH2HryB%2FCuj%2BDtgi%2Bbjj%2FSKZB7ofKYmuMaoYyAjdML4twK%2Fz7OL0mbkmwqk7W3s80%2BR05f4aUDyBccA4qkumL7xqNbeIcbkQAtT67vok%2FWt7tusTB07qAQIAD6jwQ8mkBe9ZY52clIJD5jL0tOJBtg8TKuy8xXdaQGt5PDP41MUZCPbbsMdyA4wI7XcSH7k6n%2BZ0FeMojO2eBMzsMuEp%2Fd6v%2B5FrOecgrt%2BN6yYTu7EWoDGILhvTz%2FK0pFM2GVB2SSs5IpG5NUzf9FvgEUmSWzDD4dS%2BBjqkASHJWn3kJ2cJdT9Saj9X5PCdJdrA%2BPTmSrQpbgtoug9At6rlwFPdffkjzf51skgZeKEo2YB%2FGqB0jHoSVGGmsZu4y6hI%2FGCfSdIyqEQlHyoOJcXHord6FLvKDwujQRDLIDhMwKnvuQ%2BlgRC%2Bf7%2FutsF4%2B%2FrRezoCR0SiR42SNd2SzlddXMyFzxw9JnwE%2B4dFPXNjmZPiCcc7KoYC3HtIKyA2g5%2B1&X-Amz-Signature=7b42b40f1570dca18c6049721b039a98cf9096fc572985e62b8b8196fa8b4c13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
