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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNQ7PDN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEKu1iM0wbCUpOwr0dzQfcsyW%2BU%2BVZZ7Vlq%2B%2BSwSBZa3AiB35N6X1xQ3mUab8L60JiB1EOhd6ffOjdeX%2FuqCUAEnIyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGKHU%2B4H4EXr86RnVKtwDQpBbJrWT1o3dRlP6ylJ4irLMvz1pw1goBGAR3f1CmnN%2ByyrnCdzKUnyofn7lXC16t0lUqZdU%2FkzAPxub4MXgJX%2F9X4wmT9MBPCSkLbmOCBy9vMtQ5O6blxP%2Bz19H50Q0BGDDGa9cA0csfFlKqS%2BZK6QCaPpwqeMipXvZdNhe9430Y%2Bpx3ATD%2FNA6cSPsOAHpb2E6tNV4d9n3p3tskPRkavyneB19C3pR%2FSyFZcgM5ZVt6db97AXc%2BWGq9%2BZe8rTYwEkQhWe4Q4pUd3O1nk4C9PvQGvRpSMo0oxxiJcPTHBVbc8mBN7GzXeqa3rnqwTIjvCmQgrErTWl%2BiGNNrRsG6cwP%2BUJJTyDKGZLx0CNRr2xl4d2f0CzcuzmKquJj3BHDXuKgoeNVdcXVrinbNy66sIBpwn4mT6k08A22m9DvUmS3kPZ7%2Fs1v7lRWVLoHGO0hVI15JPOtQvND68K%2B3dPVrPU60ZQsvtF0TT%2FwscQtG9eaABZQfHXfMsb%2FKBcxW7KU90DxijmbptlX99gDDrk2CPN%2BRhq3FWGiYA3sy5YlBJ67q1QkOEivtBUA0Svp0Z4%2BqQNHSLyv%2FyrtoxrTLzaNXBcafcDz5QLAzRnNGb5NHSXZz37ztuBXLvMJks4w4pvwwgY6pgGBmCou0Serw5CcMMqCws5aBOfN0%2B6rgiURkJgQRvNjHvTaRTE36oiK39MTfjw%2B93wsUkeP0z7beJzT29%2BzB4xF65IxUH7ELyPni6tZ2pCkRAQWDXPsXkRj4l4UM0mdjzOnebqxxqk5wW%2F9Ifg1TvWiLQONUz2577IiQcLyTSFOoN4vm%2BtdC2z3mH3tzE9lSNZ9UP2KM989e03EA1%2FSqsAewcY9ux81&X-Amz-Signature=bc0d55652d7a698f0e1eab3a9fd4b13b58761fed644fb5b7d4145fa19d806b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNQ7PDN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEKu1iM0wbCUpOwr0dzQfcsyW%2BU%2BVZZ7Vlq%2B%2BSwSBZa3AiB35N6X1xQ3mUab8L60JiB1EOhd6ffOjdeX%2FuqCUAEnIyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGKHU%2B4H4EXr86RnVKtwDQpBbJrWT1o3dRlP6ylJ4irLMvz1pw1goBGAR3f1CmnN%2ByyrnCdzKUnyofn7lXC16t0lUqZdU%2FkzAPxub4MXgJX%2F9X4wmT9MBPCSkLbmOCBy9vMtQ5O6blxP%2Bz19H50Q0BGDDGa9cA0csfFlKqS%2BZK6QCaPpwqeMipXvZdNhe9430Y%2Bpx3ATD%2FNA6cSPsOAHpb2E6tNV4d9n3p3tskPRkavyneB19C3pR%2FSyFZcgM5ZVt6db97AXc%2BWGq9%2BZe8rTYwEkQhWe4Q4pUd3O1nk4C9PvQGvRpSMo0oxxiJcPTHBVbc8mBN7GzXeqa3rnqwTIjvCmQgrErTWl%2BiGNNrRsG6cwP%2BUJJTyDKGZLx0CNRr2xl4d2f0CzcuzmKquJj3BHDXuKgoeNVdcXVrinbNy66sIBpwn4mT6k08A22m9DvUmS3kPZ7%2Fs1v7lRWVLoHGO0hVI15JPOtQvND68K%2B3dPVrPU60ZQsvtF0TT%2FwscQtG9eaABZQfHXfMsb%2FKBcxW7KU90DxijmbptlX99gDDrk2CPN%2BRhq3FWGiYA3sy5YlBJ67q1QkOEivtBUA0Svp0Z4%2BqQNHSLyv%2FyrtoxrTLzaNXBcafcDz5QLAzRnNGb5NHSXZz37ztuBXLvMJks4w4pvwwgY6pgGBmCou0Serw5CcMMqCws5aBOfN0%2B6rgiURkJgQRvNjHvTaRTE36oiK39MTfjw%2B93wsUkeP0z7beJzT29%2BzB4xF65IxUH7ELyPni6tZ2pCkRAQWDXPsXkRj4l4UM0mdjzOnebqxxqk5wW%2F9Ifg1TvWiLQONUz2577IiQcLyTSFOoN4vm%2BtdC2z3mH3tzE9lSNZ9UP2KM989e03EA1%2FSqsAewcY9ux81&X-Amz-Signature=8ae58421e743cc59431927253d3816ff106d8c7bf9dd8e63e70cc101353d8e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
