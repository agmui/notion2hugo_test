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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGSUIS7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDbc0vyiicEgmOftl0zGsP3rFdfb%2BGZzLrsS89%2BCUEMBQIgMh7snaSIcZ33AE4%2FN6PpLbWypMEiioy9ctqI8V7zaaEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFEeO7hqcSx4DzDyrcA8nVHNSepAlyBPCiumauQzMwMz0xckDL5m%2Fl1Q8EiLCep0nA0ygBvcJywIGew%2Bk50G79Fc7zLddsHRic54MK%2F7x98firfI6TSF2MuPPxxsvS%2FEMHrig1Esta2faDjnRp6uvNkUDnm%2Fb24CD8c4WXl6qhMevFMCHSGg6QKTzhJZg4SjNm%2B7aDUESzSg2QoWg9WUMW5N%2BZ6L5sXo14yRQPeS8Q0EHbBryhDNmV40hCu4K%2FfbUSOAS48kXAhVi0eId63mqQko%2B7hkFmfgPcC8BUZjWr%2FGjE1HabyLgIJTOtoEMrongsnSGBNxGl6otfOIq8aG2BpCqHNEMPwbtRAxmYJ3HsFmsgVBYDc4b8TqFgzMCpLddEOzuf7f3xMtsFvvzU%2FGDA%2FCZWaQTzQ1MSIG9APcPON3b8CgRSLPjSRZJ8VR3Ajxxhnqr7D80WkXuOc4GlQIQ%2F%2BnvuzxeLfHq%2FI5%2B5svLe60xeENf1ta%2BVedtV1%2FDXRNnpXXkzMhskVHQyeGTVDmsWVEjUh876RYQzTG0upmubOU5T3qZRLl91DKdEn9rOaHap5UEfpH%2FcC1q5NevG9b%2FnJrfkkff7%2Fyt1kjEWzYDPws996qePFDnv%2FqaNBKsxu0QyfunI8mRyyQ9HMJ%2Fw9MEGOqUBXEE6fv%2BYpWkOrZR8k6To7TKvRoZDWehS%2Bydsp4V3lcK2uonmvW5nldYgHnoSOK0%2Fwmf6LPS83GlSC%2BekMUttetX98a7pThNV1tPHXXn77muAlPGoLJGvo35HK%2BFhSYiFtVtqQ9FvFkDgBiIfyG6kKTutQ4GxSJ%2FWk1e8TTPl%2BD2SVd6lGhcojGGsn8eG0wBPo8JHza62KTpugEYJdautey8lwyuw&X-Amz-Signature=0e6d3abe2b56770c4749ec0eb3ec604f8a5a91861ce9b7c629b163fd8e6ab72c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGSUIS7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDbc0vyiicEgmOftl0zGsP3rFdfb%2BGZzLrsS89%2BCUEMBQIgMh7snaSIcZ33AE4%2FN6PpLbWypMEiioy9ctqI8V7zaaEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFEeO7hqcSx4DzDyrcA8nVHNSepAlyBPCiumauQzMwMz0xckDL5m%2Fl1Q8EiLCep0nA0ygBvcJywIGew%2Bk50G79Fc7zLddsHRic54MK%2F7x98firfI6TSF2MuPPxxsvS%2FEMHrig1Esta2faDjnRp6uvNkUDnm%2Fb24CD8c4WXl6qhMevFMCHSGg6QKTzhJZg4SjNm%2B7aDUESzSg2QoWg9WUMW5N%2BZ6L5sXo14yRQPeS8Q0EHbBryhDNmV40hCu4K%2FfbUSOAS48kXAhVi0eId63mqQko%2B7hkFmfgPcC8BUZjWr%2FGjE1HabyLgIJTOtoEMrongsnSGBNxGl6otfOIq8aG2BpCqHNEMPwbtRAxmYJ3HsFmsgVBYDc4b8TqFgzMCpLddEOzuf7f3xMtsFvvzU%2FGDA%2FCZWaQTzQ1MSIG9APcPON3b8CgRSLPjSRZJ8VR3Ajxxhnqr7D80WkXuOc4GlQIQ%2F%2BnvuzxeLfHq%2FI5%2B5svLe60xeENf1ta%2BVedtV1%2FDXRNnpXXkzMhskVHQyeGTVDmsWVEjUh876RYQzTG0upmubOU5T3qZRLl91DKdEn9rOaHap5UEfpH%2FcC1q5NevG9b%2FnJrfkkff7%2Fyt1kjEWzYDPws996qePFDnv%2FqaNBKsxu0QyfunI8mRyyQ9HMJ%2Fw9MEGOqUBXEE6fv%2BYpWkOrZR8k6To7TKvRoZDWehS%2Bydsp4V3lcK2uonmvW5nldYgHnoSOK0%2Fwmf6LPS83GlSC%2BekMUttetX98a7pThNV1tPHXXn77muAlPGoLJGvo35HK%2BFhSYiFtVtqQ9FvFkDgBiIfyG6kKTutQ4GxSJ%2FWk1e8TTPl%2BD2SVd6lGhcojGGsn8eG0wBPo8JHza62KTpugEYJdautey8lwyuw&X-Amz-Signature=99a16938eed85b525c90f5b1188ab46f32a5397a49299beedeb148644d887b92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
