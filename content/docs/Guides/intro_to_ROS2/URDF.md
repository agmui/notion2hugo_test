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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFME42D6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDWZda7UrMTwUIUiDLHpIR%2BINfFphfyRSnYMFRWGIqYFAIhAJ%2FSBi%2F%2FILCvWZj9Z%2FVWLSV6Pan9RzYEsjth08H3mJZWKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9rc%2FkNlJdbj5HY5wq3AM6qEhQ3FNAyTfh%2Bzb0wmYUrUjJ3BuMQ59T%2FRDO%2B1yRwSWWH9o8yNNYZcM0dKtqplmPOcIPs9jT9nNr6m5cN7SXVjG9g9Mj5s91WjRRdKhMeeYOhtkQQf8DzZK3w9UMbIyDl3VB99pBMglk2kPgkxdfX9KJ4zrS%2BO5SSIOIbkwkY%2FZs5KnznsX8GLquYgzfHt0vZvi9J6USux4%2FJyfyYF0yN9qyKpavmZDBv%2FlJGRno6O6UxLSWUM8q7oHNDTG4enInu3sAGKJO0GiduDDxB5DJ7FnV650IiF6MK3b40gH2I8e15hguvYBYZLobCBOwfiR%2B3JY%2BNY51ZxQJPK7lc%2FSGNAJVH1vTU%2FHxE7fe0aJXe8%2BwRZvnhXuE8nBGFAne7kHDrKzIpj7bOy6gdbMUc5EJLbnnHn01uq1rRSgY71SZ751W7Oj3717c1IB68BZUoA31yrHF%2FYZcsHH3GKzYeUU51x8iO65AzPFmFwq8vkQSTufOmU63aIK7o3avhzLJmxPGMDbYquOlaNS%2FPXFOm91VCDcX7ErDsG6Ty6PG1xVkTi644L1LlKSSFRbb5GVQH1vVn%2BhAHbCzBSWHzBgHEMXBZAcWTuAGketoGy%2BIV9x17ssC%2FJEBVXVMEjbnMzD%2B5%2Fi%2BBjqkAXffGXQ0%2FvoSXNNXrlfLSa03d582HHr9DhoIq0pec40zWO2Iod%2BDzglVavE0ynHEl%2FmCrPb305xfQgFIRkimYinB807di2EHkqaj48XYqoAO%2F59%2BEVxkeiN9K0sLAhEyIlMnpo2ZMVwG8Ao%2Fjg6BcYJWzzkWdDxuFGl16K7fSFxcTmwOGe0QalDm93lKtgz414KoCtikXrn1sXF4yVYxQjDvJV8Y&X-Amz-Signature=44c7aab6700432be23e444f3bb3e4e60748f56b61e5f751ca39b677d8c64426e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFME42D6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDWZda7UrMTwUIUiDLHpIR%2BINfFphfyRSnYMFRWGIqYFAIhAJ%2FSBi%2F%2FILCvWZj9Z%2FVWLSV6Pan9RzYEsjth08H3mJZWKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9rc%2FkNlJdbj5HY5wq3AM6qEhQ3FNAyTfh%2Bzb0wmYUrUjJ3BuMQ59T%2FRDO%2B1yRwSWWH9o8yNNYZcM0dKtqplmPOcIPs9jT9nNr6m5cN7SXVjG9g9Mj5s91WjRRdKhMeeYOhtkQQf8DzZK3w9UMbIyDl3VB99pBMglk2kPgkxdfX9KJ4zrS%2BO5SSIOIbkwkY%2FZs5KnznsX8GLquYgzfHt0vZvi9J6USux4%2FJyfyYF0yN9qyKpavmZDBv%2FlJGRno6O6UxLSWUM8q7oHNDTG4enInu3sAGKJO0GiduDDxB5DJ7FnV650IiF6MK3b40gH2I8e15hguvYBYZLobCBOwfiR%2B3JY%2BNY51ZxQJPK7lc%2FSGNAJVH1vTU%2FHxE7fe0aJXe8%2BwRZvnhXuE8nBGFAne7kHDrKzIpj7bOy6gdbMUc5EJLbnnHn01uq1rRSgY71SZ751W7Oj3717c1IB68BZUoA31yrHF%2FYZcsHH3GKzYeUU51x8iO65AzPFmFwq8vkQSTufOmU63aIK7o3avhzLJmxPGMDbYquOlaNS%2FPXFOm91VCDcX7ErDsG6Ty6PG1xVkTi644L1LlKSSFRbb5GVQH1vVn%2BhAHbCzBSWHzBgHEMXBZAcWTuAGketoGy%2BIV9x17ssC%2FJEBVXVMEjbnMzD%2B5%2Fi%2BBjqkAXffGXQ0%2FvoSXNNXrlfLSa03d582HHr9DhoIq0pec40zWO2Iod%2BDzglVavE0ynHEl%2FmCrPb305xfQgFIRkimYinB807di2EHkqaj48XYqoAO%2F59%2BEVxkeiN9K0sLAhEyIlMnpo2ZMVwG8Ao%2Fjg6BcYJWzzkWdDxuFGl16K7fSFxcTmwOGe0QalDm93lKtgz414KoCtikXrn1sXF4yVYxQjDvJV8Y&X-Amz-Signature=bb837bd2020f7a72b79f7225775a0db74a69a169529d539d5d4f9cf8b88e8268&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
