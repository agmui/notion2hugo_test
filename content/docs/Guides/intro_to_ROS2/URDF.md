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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4QXLEE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTEe1gp9qPpyMz48Ep3YYXVzYapsDl3oaoa7FL4sfAtgIhAMX8gi0T%2FwGdLsIdVDAfMT38IfI2jFr%2FtdnEPYTpl5mDKv8DCEoQABoMNjM3NDIzMTgzODA1IgwCHByjL4DL7dxBMekq3AP4Cxm4OH8Y5mAwV2fEuapliZPzpFYFy39NkFI%2BRLWYbWvyyngPIl1UZPN%2Bi4sp5p1Vv6aLLWb3p%2B1u8rgkHBmGz2Id1N3C3gt8YJ8wgzX1LfFMJLdH7qe4AU4vVR5lxah00DRX3j6JYOEWUXxJQnQPQYicPQLdg8Y%2FDD519Fbn4%2BufQusraWw3IoHTSRriGGLUgvOkYhB%2FKNWU5JBhUYYIpuMXrUjGysEqRiXjwHRcqFLkjakPEbnhcdl7RHpCyksY0bbsxIBteae7B6g%2B0qmJoADMEra%2FKCIldCpa4AWeapd6fq%2Bynq7ZYtJfeDc1S7MNkjsoEI9ZfkO5OqqiE%2Fi3VUgCc24n5AHlIIRfLhzRxH8%2B6MXQdRp%2BkI8Ve6gTcjzl2%2FYppMrpWsLeCDvSqxoyXZQgKYVwjZ4LC1%2B65SZSexsQhN4W6zTlc7d2Lpb016nk1UZiLtHmlxQxUPtE%2BP4uiWWsY59RoxQqqYnIJl%2B8d9GIbldP%2ByAiVWj6qMDPByQ912jrRa0ViztvUkZOYoFFFtyGkrYPZjjZyXsTI0HZzRQUczV39jjl6XtUkYr6XgFG4bH8NVbReDpqfSKteE0T0qwUr7drpWEE2idUdJUAcBMH%2FKKLyaaZwU0%2BPjCtgOnABjqkAeHbWqQtQL3Es5hgflTC%2FCm94F%2F39tJVSbmucPqs7c2lpMEMKVZPYdG%2FQh2za5Qz0FSeF2X6TFFUWBv04sJ9WLBovtUrGEP1ZnOhwIQ7jovZ4GpoGb5T9HrqvEbhDzkleJfRx0Ar%2BSI2PeGvBcGTCYoV%2BhjerlBDycwIHjpejXCkJ%2FKjWxr1DWLIFytyiui%2B4glJLvoYY71R54gCSATA8qLNF33J&X-Amz-Signature=3812feb29f9743982f1a8f063bf6d103677a0851687682c838ebdf13b7fc09f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4QXLEE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTEe1gp9qPpyMz48Ep3YYXVzYapsDl3oaoa7FL4sfAtgIhAMX8gi0T%2FwGdLsIdVDAfMT38IfI2jFr%2FtdnEPYTpl5mDKv8DCEoQABoMNjM3NDIzMTgzODA1IgwCHByjL4DL7dxBMekq3AP4Cxm4OH8Y5mAwV2fEuapliZPzpFYFy39NkFI%2BRLWYbWvyyngPIl1UZPN%2Bi4sp5p1Vv6aLLWb3p%2B1u8rgkHBmGz2Id1N3C3gt8YJ8wgzX1LfFMJLdH7qe4AU4vVR5lxah00DRX3j6JYOEWUXxJQnQPQYicPQLdg8Y%2FDD519Fbn4%2BufQusraWw3IoHTSRriGGLUgvOkYhB%2FKNWU5JBhUYYIpuMXrUjGysEqRiXjwHRcqFLkjakPEbnhcdl7RHpCyksY0bbsxIBteae7B6g%2B0qmJoADMEra%2FKCIldCpa4AWeapd6fq%2Bynq7ZYtJfeDc1S7MNkjsoEI9ZfkO5OqqiE%2Fi3VUgCc24n5AHlIIRfLhzRxH8%2B6MXQdRp%2BkI8Ve6gTcjzl2%2FYppMrpWsLeCDvSqxoyXZQgKYVwjZ4LC1%2B65SZSexsQhN4W6zTlc7d2Lpb016nk1UZiLtHmlxQxUPtE%2BP4uiWWsY59RoxQqqYnIJl%2B8d9GIbldP%2ByAiVWj6qMDPByQ912jrRa0ViztvUkZOYoFFFtyGkrYPZjjZyXsTI0HZzRQUczV39jjl6XtUkYr6XgFG4bH8NVbReDpqfSKteE0T0qwUr7drpWEE2idUdJUAcBMH%2FKKLyaaZwU0%2BPjCtgOnABjqkAeHbWqQtQL3Es5hgflTC%2FCm94F%2F39tJVSbmucPqs7c2lpMEMKVZPYdG%2FQh2za5Qz0FSeF2X6TFFUWBv04sJ9WLBovtUrGEP1ZnOhwIQ7jovZ4GpoGb5T9HrqvEbhDzkleJfRx0Ar%2BSI2PeGvBcGTCYoV%2BhjerlBDycwIHjpejXCkJ%2FKjWxr1DWLIFytyiui%2B4glJLvoYY71R54gCSATA8qLNF33J&X-Amz-Signature=5f67fa5d1433bc37ef69532cc4d1ea9f845cad164ce326ea51bf14ec9caa393b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
