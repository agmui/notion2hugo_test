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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEA55PS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIChcXvp0xr7cURbQCEmtlbPJlAlCYkM4o2EPvYMfpTqqAiEA%2BxlsKdFUF3WzvfTuezOnA2SLODWpvcY%2FY%2FTlIiwVCbMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHKG3PK6sV1g7NEQiSrcAzYBxAKMprrXSvl85s%2BWeXU%2BQUpRf9%2BkL3j6mcWm4xYuK87c20%2BeQlDiGdRrhIlqH4DrzR9NFrNLJ1UPivQROp6rY2lnNYXL%2FKmwlZI%2F1zSd0IT2N6EGztvEjY8PzFoaQ4nHhoZeHrDa138gpdq3SX10pFtu22bt4n3wF9ZTeUFg3hCopRFHSOZ32w2aMvCmYYYYhU76TRfVhJqqD0I3yZ9M2CTq89C4PUnjiDPPZl1X0sMGwoktRgSEdujFZVSuWGewaSXW97u9zFz4%2FT0HG%2FMJ8pba42x86aWjRFUV11RVRyb1t6KpnXNlVxUCKwqoY5HUPS339y%2F9eiDR20s%2BPj%2BWh5jkMKBVD3DaG8vn8R5FDiBWUadc7466wX6MVqPwjOArejGArFAMOa58u7PK8dFnOFHrsw%2FIWQ9ib3uX8wJSitQq9LbrTe%2FHvJio7NfOXfVat3URTRWtuUxH2EYy9i3E6tL0vWcp4043DCOy9GLVTaNa6ov%2B5%2FvfgV43alFPwqEvhxmI7Hs6qoFz1d4MxTlxlEknS3jve2YQXmAvNhfTZ2J%2FakYWve7xZD2fW5F4YYZo7NU2BUk59tqR7Bd283ubGEGZmRih9milfo3qwRdlwh77qRJH044bBTqQMKq9rr4GOqUB%2BnekXjfvabxGTdOicPOYGEvQ%2FDmYqEX4nm8XDnwbDltBtfXDJ6ZryqR89Iq8ko8MBWAN0TSYvwIpO1OmiDt8SpF6mK08CpdBi7uQGy1NFXd%2F0ZT0miqXqDjZmLLIc9Lc%2Bsi%2B90WLnqVoY0Qm86pzGPpfxwF99Z2PZhU27U1sGHCx8ZDopOl3y35Tm8Bccii1niizw2R0jGxitD9Ar%2BacIKxp%2Faoe&X-Amz-Signature=e4357449f69ed8eecac72fb8c45431046cd6af697c029bd6999518ea504ecc57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEA55PS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIChcXvp0xr7cURbQCEmtlbPJlAlCYkM4o2EPvYMfpTqqAiEA%2BxlsKdFUF3WzvfTuezOnA2SLODWpvcY%2FY%2FTlIiwVCbMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHKG3PK6sV1g7NEQiSrcAzYBxAKMprrXSvl85s%2BWeXU%2BQUpRf9%2BkL3j6mcWm4xYuK87c20%2BeQlDiGdRrhIlqH4DrzR9NFrNLJ1UPivQROp6rY2lnNYXL%2FKmwlZI%2F1zSd0IT2N6EGztvEjY8PzFoaQ4nHhoZeHrDa138gpdq3SX10pFtu22bt4n3wF9ZTeUFg3hCopRFHSOZ32w2aMvCmYYYYhU76TRfVhJqqD0I3yZ9M2CTq89C4PUnjiDPPZl1X0sMGwoktRgSEdujFZVSuWGewaSXW97u9zFz4%2FT0HG%2FMJ8pba42x86aWjRFUV11RVRyb1t6KpnXNlVxUCKwqoY5HUPS339y%2F9eiDR20s%2BPj%2BWh5jkMKBVD3DaG8vn8R5FDiBWUadc7466wX6MVqPwjOArejGArFAMOa58u7PK8dFnOFHrsw%2FIWQ9ib3uX8wJSitQq9LbrTe%2FHvJio7NfOXfVat3URTRWtuUxH2EYy9i3E6tL0vWcp4043DCOy9GLVTaNa6ov%2B5%2FvfgV43alFPwqEvhxmI7Hs6qoFz1d4MxTlxlEknS3jve2YQXmAvNhfTZ2J%2FakYWve7xZD2fW5F4YYZo7NU2BUk59tqR7Bd283ubGEGZmRih9milfo3qwRdlwh77qRJH044bBTqQMKq9rr4GOqUB%2BnekXjfvabxGTdOicPOYGEvQ%2FDmYqEX4nm8XDnwbDltBtfXDJ6ZryqR89Iq8ko8MBWAN0TSYvwIpO1OmiDt8SpF6mK08CpdBi7uQGy1NFXd%2F0ZT0miqXqDjZmLLIc9Lc%2Bsi%2B90WLnqVoY0Qm86pzGPpfxwF99Z2PZhU27U1sGHCx8ZDopOl3y35Tm8Bccii1niizw2R0jGxitD9Ar%2BacIKxp%2Faoe&X-Amz-Signature=2183dfd8dbb4575d2d1b6843c6e519386221048cea274508f379bd0cd1ae837a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
