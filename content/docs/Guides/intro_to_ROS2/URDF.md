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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBDDS7C%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCU%2B%2BBf0pNctv7VQkWh%2Fc5QaCv8tVQYKfRkl9f6vJIc3AIhAMLCf79l%2BIRgsy%2FWraa%2BdGFCr7oXRdQT8%2F9Bl4l6YZIGKv8DCBoQABoMNjM3NDIzMTgzODA1Igzq1FWLydyFTmPRbvIq3AMlYalIFxwQncEePC42g86oqj%2BiO8fS11QdmhTTaWn8n9%2F0J6Q10PpXDaaxO3sUBg6PHPy18t1FZlEXgSnGyYa5XOsd%2F2XG9SklEb9wQdhfrGsiFAsaOlXZxoSXZA01ij0qaQ0rR2jltlah60pMXSUAqVnhnTdvIPQNaLNHikK%2FoVfQK8n2zJhKAI7lWMn9z6NE7Uxd5GCsTn%2BcpPS6pQQXxMpBgUEh2aQ0eH16g1AvOkKPSV%2FPqXmyNVicJscxZ9KaMNKiBDu6Zlp%2BEp4OOnxhDyeBJdBwO0rHWdROB%2B3WRX%2F2rRIZWyTMZb322rSBeUXFKKktFZgJmIICWPptY5QsU25oiDeOlMV2BSYSc8niBzkZc3%2FzUJKVKu%2BJSVWms36BTzt%2BRCjriN6N7bfxpjT9m3UXG6DPtS4IZeEEKWvNXd5jyLoDrJlGNMkL0%2B79bjcgpoI1HV0xhdTHOAi5CTITmdqv4hHje%2FaiM1BEQcqsxTNAkwuBpofjC6rNu%2BI9dTEmRD7gMG8Ad8iZhnGB7SJKoka5kGi3Hb6OlcGfClH%2BhfJmfmdartk%2B0IWuwr4nVEHt%2BEesbkh8V3nq2XhnPoySADJGgx3rtdct646VfUFL3npdL%2FTOyBi1IQEGbjDP0vzBBjqkAVCPdMB9ReVCvaT0BmZonz2U1UdObVO2EwBRbrhm9XsdjuyswnwcY6wHt748%2BcCTjFMzkRebiGx93JsZL8vtnh53HFq8BbGNQyhGhZEEDQ%2B4YLGKTi2%2Bv97N%2F98N3LRjeIerZdbWznl2i9ALHZ41ukYAUTwIi0GtDNvkRa8CXNvIS4oOV%2BpyEBEepnf0w%2BeAIPihxACcsZekzk%2FfpGBsH6iUxyuf&X-Amz-Signature=b2837723a21e892f539e2287187b104b1e64c97993a52bb83189cb5795352ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBDDS7C%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCU%2B%2BBf0pNctv7VQkWh%2Fc5QaCv8tVQYKfRkl9f6vJIc3AIhAMLCf79l%2BIRgsy%2FWraa%2BdGFCr7oXRdQT8%2F9Bl4l6YZIGKv8DCBoQABoMNjM3NDIzMTgzODA1Igzq1FWLydyFTmPRbvIq3AMlYalIFxwQncEePC42g86oqj%2BiO8fS11QdmhTTaWn8n9%2F0J6Q10PpXDaaxO3sUBg6PHPy18t1FZlEXgSnGyYa5XOsd%2F2XG9SklEb9wQdhfrGsiFAsaOlXZxoSXZA01ij0qaQ0rR2jltlah60pMXSUAqVnhnTdvIPQNaLNHikK%2FoVfQK8n2zJhKAI7lWMn9z6NE7Uxd5GCsTn%2BcpPS6pQQXxMpBgUEh2aQ0eH16g1AvOkKPSV%2FPqXmyNVicJscxZ9KaMNKiBDu6Zlp%2BEp4OOnxhDyeBJdBwO0rHWdROB%2B3WRX%2F2rRIZWyTMZb322rSBeUXFKKktFZgJmIICWPptY5QsU25oiDeOlMV2BSYSc8niBzkZc3%2FzUJKVKu%2BJSVWms36BTzt%2BRCjriN6N7bfxpjT9m3UXG6DPtS4IZeEEKWvNXd5jyLoDrJlGNMkL0%2B79bjcgpoI1HV0xhdTHOAi5CTITmdqv4hHje%2FaiM1BEQcqsxTNAkwuBpofjC6rNu%2BI9dTEmRD7gMG8Ad8iZhnGB7SJKoka5kGi3Hb6OlcGfClH%2BhfJmfmdartk%2B0IWuwr4nVEHt%2BEesbkh8V3nq2XhnPoySADJGgx3rtdct646VfUFL3npdL%2FTOyBi1IQEGbjDP0vzBBjqkAVCPdMB9ReVCvaT0BmZonz2U1UdObVO2EwBRbrhm9XsdjuyswnwcY6wHt748%2BcCTjFMzkRebiGx93JsZL8vtnh53HFq8BbGNQyhGhZEEDQ%2B4YLGKTi2%2Bv97N%2F98N3LRjeIerZdbWznl2i9ALHZ41ukYAUTwIi0GtDNvkRa8CXNvIS4oOV%2BpyEBEepnf0w%2BeAIPihxACcsZekzk%2FfpGBsH6iUxyuf&X-Amz-Signature=aa97c8678e8046d4dec24ac45d4f84f05dc4cf967ac684e5635d7bc0467c1eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
