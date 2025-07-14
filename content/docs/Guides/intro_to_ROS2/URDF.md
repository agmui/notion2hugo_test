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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ5XT2E%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCIIbd5BftCP9H%2FMEVBVaV0hLNBfGks5gpCi9cuGlwPqQIhANOz18NwBGWnhia4vCClXITVdf1vULRF%2BH8lrFG8NciPKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2BddnaBHN0fH5Zf%2FMq3ANMLrmrOP8rTAZ1L%2By0O0Wrew3L8%2BQVCoE8KOs0uSYxGXRW%2BkU%2F98SDgz50%2FT1%2BocYJJVARzeMLOiqhYRfAsPTypoVfBO8dvYKDxhNwyeS8oSVhpZ%2BTMIcUhBpqN2JbowdybXcu%2Fpd%2BQ7VDZWyBURoKtkiu47cbSQjPjLkzWtEkKbmYBeAB5d9LfwNOQhFgxknoRzafKxNL1CDbAZVeBdvH14b0NwuEYzSHOyH%2F%2FAIXJguua0EcxWkC6yJiaTDATSx6fx%2BcKDlYs9fCmALODoS6xJNvOu4DjpEXvGNO9Lz6AvryXkUoubmvC%2Fwi4a6zQ9aMtvkJHYZRKff8HdSh2vgCP31ykLA%2BA4DMGMdG9P2fsKCEjXs2Vv5ltAASywYViNeP4MlaCBJrcShoEKHnNszav5gd%2Fy%2F%2BgyvD9w1z8iC5oo0mGp6zDXnxJ1o6lcUQu8Vecedl6xyX2usaXXYacdjvdeRf5qzUuHYNJOmGoWYOJ6Koi%2FpqYUsItI9LLLncHjAziXATZB6U8I39SCGeB%2FDkHsA9K38DwA4puw8VqJ19j%2Fa%2FsZBfTL0w2ONPPwINqRwZrYu3fQOsLmou9xXLdYTIiQFj0ksiMXVq9O5gfnSXz7IH0eUfWj4EuwWNvDDvsdPDBjqkAWzzcip6oTS%2BLqKZZau98fcXmelC0K9v7I%2FuyVqr9dl%2BczvItORk6mmdkP9f%2FnoT%2FdNnS7zhq%2Bs6ufhpbsjxFrkeRKpCFSNlRz6CA4AYC4bPsBBOvWs3xxcI%2B1GXD1W3%2Fgmt7PfMFDk%2BxD%2B3OuB4%2FyJhTkZ51Y4f0w4KSWg2f4y0hp24LlaXjHZF1j3Xj87GUYaGhhZZ6i8hd3Xh1WTD82G9f8B0&X-Amz-Signature=ac7c54c7b82da95f102af6ad89b2d0a442141bb2b17a51e12da1a8a468883834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ5XT2E%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCIIbd5BftCP9H%2FMEVBVaV0hLNBfGks5gpCi9cuGlwPqQIhANOz18NwBGWnhia4vCClXITVdf1vULRF%2BH8lrFG8NciPKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2BddnaBHN0fH5Zf%2FMq3ANMLrmrOP8rTAZ1L%2By0O0Wrew3L8%2BQVCoE8KOs0uSYxGXRW%2BkU%2F98SDgz50%2FT1%2BocYJJVARzeMLOiqhYRfAsPTypoVfBO8dvYKDxhNwyeS8oSVhpZ%2BTMIcUhBpqN2JbowdybXcu%2Fpd%2BQ7VDZWyBURoKtkiu47cbSQjPjLkzWtEkKbmYBeAB5d9LfwNOQhFgxknoRzafKxNL1CDbAZVeBdvH14b0NwuEYzSHOyH%2F%2FAIXJguua0EcxWkC6yJiaTDATSx6fx%2BcKDlYs9fCmALODoS6xJNvOu4DjpEXvGNO9Lz6AvryXkUoubmvC%2Fwi4a6zQ9aMtvkJHYZRKff8HdSh2vgCP31ykLA%2BA4DMGMdG9P2fsKCEjXs2Vv5ltAASywYViNeP4MlaCBJrcShoEKHnNszav5gd%2Fy%2F%2BgyvD9w1z8iC5oo0mGp6zDXnxJ1o6lcUQu8Vecedl6xyX2usaXXYacdjvdeRf5qzUuHYNJOmGoWYOJ6Koi%2FpqYUsItI9LLLncHjAziXATZB6U8I39SCGeB%2FDkHsA9K38DwA4puw8VqJ19j%2Fa%2FsZBfTL0w2ONPPwINqRwZrYu3fQOsLmou9xXLdYTIiQFj0ksiMXVq9O5gfnSXz7IH0eUfWj4EuwWNvDDvsdPDBjqkAWzzcip6oTS%2BLqKZZau98fcXmelC0K9v7I%2FuyVqr9dl%2BczvItORk6mmdkP9f%2FnoT%2FdNnS7zhq%2Bs6ufhpbsjxFrkeRKpCFSNlRz6CA4AYC4bPsBBOvWs3xxcI%2B1GXD1W3%2Fgmt7PfMFDk%2BxD%2B3OuB4%2FyJhTkZ51Y4f0w4KSWg2f4y0hp24LlaXjHZF1j3Xj87GUYaGhhZZ6i8hd3Xh1WTD82G9f8B0&X-Amz-Signature=ad629937bcd576e1e75aadb67b37fbd4c8e3dbb43c46941a75d619cca4eab0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
