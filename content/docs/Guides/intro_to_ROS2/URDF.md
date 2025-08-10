---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTP4SVPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2Ui9gHtd99fnXUjiQ35GosWDLbmMZpDWgv1PNlGV9gIgU8FeVQdheC19wLNjNv8x1JkOh0qkU3NRiklPmI%2FvYS0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQERaL4yKRfc7R%2B0SrcA3yeiNdngPPuG6m4eskCoxBAR1g%2FEcXDj9KUA4dDwfyAItkp2g44M3svhIbTjONc0wA3lRSgcHrPhBsPHqwlV3TZCjJYtW%2FSH0HB9Ker9axj24HE0vZMZKy%2F9aAcdN4zI4lWGfVmLxJR1UrKJaqwJEIspNOWfIIMKEy5af9vI3KhFNHwHHyFIwUzsO3DvoRWdFK4Dyiuy4478Dqv%2BB7SdCaUXaTe517CFxZWgOn2de8mWPIt3GE7FEuwJbclDlJkV0xWz1DiflmbXCO3ejOYf%2BI86tIaTOV1OSZRb1o1wSFZNAHUOhH2RoMM2Y1j7QP%2FpMT5SM5pQyIU%2Fm6qCCyMdRfk810J5kLxFzPNneFYnNWw7VmqGLN4aELLpRA4Ii55WNOi2UnYFc8v8RRJ0lpWyjd9c%2FQCay%2F8nQw5x21FByyI4amK6o1s3i29ZmRlKshgv4ixJAtQ0SyPfvRZv4cx8tTnvfuyijpMfpW7qG1NGZm6LPcIh%2FiiVPAWP5Y%2BPmy8AiUd7RC6Vlkc%2Ftig6umtrtRrYEpAjjyfhw%2Bgj8NyJnPvfG692ToUdazWfWE7McqNOhEVUcgfhfwbIqlKadwyeWPs6Lv1Xkk5eZKIQWnnXs%2BeLiKSfFWsYuODsSovMIuZ4sQGOqUBbQkmA8b6KBOR8QEq5e2UmmqA%2F5HxpQAHJ984Bki0IgL76ElS4VdZf0gwk6v0aj%2BcsAgpz7xu%2FpBubV3xX%2FPCiHQBlYgC1qys4FTkor0tEXsg2XKaXr0B9ApAdn6BmnnCS%2Be5Dj6SzrUrcB%2BH8mzCpKYGQJOU%2F0gLyQtxTt88JYJF%2FzwtHL7oZ4kBpOBOIqcffa6jppabVH6Ubo2m6wyvXVajWxF%2F&X-Amz-Signature=a438093ac4e1e54d65abfd7ab60dadaa78d7f6926beb8f575ec64d351a9d65d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTP4SVPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2Ui9gHtd99fnXUjiQ35GosWDLbmMZpDWgv1PNlGV9gIgU8FeVQdheC19wLNjNv8x1JkOh0qkU3NRiklPmI%2FvYS0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQERaL4yKRfc7R%2B0SrcA3yeiNdngPPuG6m4eskCoxBAR1g%2FEcXDj9KUA4dDwfyAItkp2g44M3svhIbTjONc0wA3lRSgcHrPhBsPHqwlV3TZCjJYtW%2FSH0HB9Ker9axj24HE0vZMZKy%2F9aAcdN4zI4lWGfVmLxJR1UrKJaqwJEIspNOWfIIMKEy5af9vI3KhFNHwHHyFIwUzsO3DvoRWdFK4Dyiuy4478Dqv%2BB7SdCaUXaTe517CFxZWgOn2de8mWPIt3GE7FEuwJbclDlJkV0xWz1DiflmbXCO3ejOYf%2BI86tIaTOV1OSZRb1o1wSFZNAHUOhH2RoMM2Y1j7QP%2FpMT5SM5pQyIU%2Fm6qCCyMdRfk810J5kLxFzPNneFYnNWw7VmqGLN4aELLpRA4Ii55WNOi2UnYFc8v8RRJ0lpWyjd9c%2FQCay%2F8nQw5x21FByyI4amK6o1s3i29ZmRlKshgv4ixJAtQ0SyPfvRZv4cx8tTnvfuyijpMfpW7qG1NGZm6LPcIh%2FiiVPAWP5Y%2BPmy8AiUd7RC6Vlkc%2Ftig6umtrtRrYEpAjjyfhw%2Bgj8NyJnPvfG692ToUdazWfWE7McqNOhEVUcgfhfwbIqlKadwyeWPs6Lv1Xkk5eZKIQWnnXs%2BeLiKSfFWsYuODsSovMIuZ4sQGOqUBbQkmA8b6KBOR8QEq5e2UmmqA%2F5HxpQAHJ984Bki0IgL76ElS4VdZf0gwk6v0aj%2BcsAgpz7xu%2FpBubV3xX%2FPCiHQBlYgC1qys4FTkor0tEXsg2XKaXr0B9ApAdn6BmnnCS%2Be5Dj6SzrUrcB%2BH8mzCpKYGQJOU%2F0gLyQtxTt88JYJF%2FzwtHL7oZ4kBpOBOIqcffa6jppabVH6Ubo2m6wyvXVajWxF%2F&X-Amz-Signature=9315c1c277f659c38747cfec0465f095ddd0608306396ca0dfaa4d44a1523619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
