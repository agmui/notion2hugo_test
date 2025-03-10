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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TQYWXF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEuyb9WR42KRs924MQMxRlvKIuBUUiiEyXiLVmEW7yZVAiEA7S7w8%2BOT1Rzg1r9xPDPOCg0YUCzvlGcvxddJn5ewnnYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcHi5lYIUt7ZnBEgyrcAxTs%2B5kNQL8RnHt0uGxRqaHbW00xvhJRGwtdIcCt8LBEhl7ZZJiZWu4d1EDXqmJq8CJwXGlpDDjmI39VOA5aATt%2FQJ2TA6WEmU5muL%2Fs%2B%2FJ2Ce7Zcp3kJLBn9qZxhWGPJQCIV8GoM%2BvenL6vP8%2BSa8KYEctsFmmfi5VWO3Ic7gMCPQK1E%2Fzipbbbm6XnTFXbE9IYU7Tr5pdW5bjdUwIZwtT%2BtY8HhuW4zJixHA7dWek%2BfVTOsswGLS1shoFGhGDIOt9EkctlNtZFo2Cjkx4tV4J1i6Nfp2Juhjmwrw%2FQA4JZXSvfZeumHsoNOJu%2BezZ72TYbjvAWwNI0FdQvI4%2FOgkAwpXRMwK96rjRywQodqVg0iBIHvICGvMHDkaN2wmBeX4rcgg5dggWYyVUVJFsoR3T%2F82zIWdi%2B%2FN%2FbV7Onc1wK90l84XHC3vU%2Bi%2BpCQqsd8TXkqpOW468Qqjy8hlsaTna%2Frirx1A8P%2BAebRrCHt6bmCV0aDkcQs01UI9sDvDw2yfJ5Stmyd7SkpGqPTOeBcd%2B5OHEym%2Fq4gcM3VzuEPiy8DRODeNmkE3wcovnIASzCi%2B5FyXdLVaD%2F8d3uSpgIeGqeASdH%2BmXD5LP98VZn5uXA8KSVAPSPuZi51crtMMypu74GOqUBUF30kI9H281qhJuiDsNwHv4dEhGiv8c135sWY5B3fRm2VOsCe0%2BXKrxb%2BxkYD%2FaGbgldrZH1nWssVxvIz38mOWlgRP%2BmMja7WLTnH8OQNDR%2BQyUStXPueZIrey0tyFQbrCSgdVJXqVH2qDxA%2FI5i%2FV796frxJriKlrU40MSJ7OQ7L78Qc9ISg7b0ThLpNmtNTmrjYUBYbPQo92E22YNAGtycMWOH&X-Amz-Signature=3df8dd2d3d962627a7cc1f182e989ce434c7de705ce8c9a214eef2f226482c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TQYWXF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEuyb9WR42KRs924MQMxRlvKIuBUUiiEyXiLVmEW7yZVAiEA7S7w8%2BOT1Rzg1r9xPDPOCg0YUCzvlGcvxddJn5ewnnYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcHi5lYIUt7ZnBEgyrcAxTs%2B5kNQL8RnHt0uGxRqaHbW00xvhJRGwtdIcCt8LBEhl7ZZJiZWu4d1EDXqmJq8CJwXGlpDDjmI39VOA5aATt%2FQJ2TA6WEmU5muL%2Fs%2B%2FJ2Ce7Zcp3kJLBn9qZxhWGPJQCIV8GoM%2BvenL6vP8%2BSa8KYEctsFmmfi5VWO3Ic7gMCPQK1E%2Fzipbbbm6XnTFXbE9IYU7Tr5pdW5bjdUwIZwtT%2BtY8HhuW4zJixHA7dWek%2BfVTOsswGLS1shoFGhGDIOt9EkctlNtZFo2Cjkx4tV4J1i6Nfp2Juhjmwrw%2FQA4JZXSvfZeumHsoNOJu%2BezZ72TYbjvAWwNI0FdQvI4%2FOgkAwpXRMwK96rjRywQodqVg0iBIHvICGvMHDkaN2wmBeX4rcgg5dggWYyVUVJFsoR3T%2F82zIWdi%2B%2FN%2FbV7Onc1wK90l84XHC3vU%2Bi%2BpCQqsd8TXkqpOW468Qqjy8hlsaTna%2Frirx1A8P%2BAebRrCHt6bmCV0aDkcQs01UI9sDvDw2yfJ5Stmyd7SkpGqPTOeBcd%2B5OHEym%2Fq4gcM3VzuEPiy8DRODeNmkE3wcovnIASzCi%2B5FyXdLVaD%2F8d3uSpgIeGqeASdH%2BmXD5LP98VZn5uXA8KSVAPSPuZi51crtMMypu74GOqUBUF30kI9H281qhJuiDsNwHv4dEhGiv8c135sWY5B3fRm2VOsCe0%2BXKrxb%2BxkYD%2FaGbgldrZH1nWssVxvIz38mOWlgRP%2BmMja7WLTnH8OQNDR%2BQyUStXPueZIrey0tyFQbrCSgdVJXqVH2qDxA%2FI5i%2FV796frxJriKlrU40MSJ7OQ7L78Qc9ISg7b0ThLpNmtNTmrjYUBYbPQo92E22YNAGtycMWOH&X-Amz-Signature=7b5086d56ff1c8b27891a5a15d9d461ce1f716e7fd2af2957db54ae38aca93b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
