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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLMTVDR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBRfX31HwrSwnO34UOwFylW5CzfD88mDNZNizyd%2FncZeAiEApPxqnyPdOhLWOTr4Dx7gaR2lo%2F%2BUerGIU2%2BSuy1DcvQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxLnnw%2BJK5l5i43fyrcAz4aBSBhRx%2FCu5OJelFlp03%2FEH8g9RAgqXSzqYFL%2BUX2D9t46kQGMsy6l7bYpaGB6JJkIEF9O7Ip3HyFm2lb%2FeZZFpWcWLXbmwY0ewiGeGvZOLPYWfFhl3I0ivMYrZhfIYexq%2Fe13ZoYYNI3LbaM6MuEHaj5KitEOe%2BtykrJALDs%2Fox48hS14%2FDD4kP9Gdf6LjmxZo1KpahtcdWOckRYNNDVvk8FoHlQhMRHkpezimOrjCrN1dcwH0EbTfA251LHIHn98pUEPclS5pewxH8KQzz1%2FyaKHyGHGIw2jDop%2FM%2FDaiQcGaulQj0ixXdAEw%2FuGCWfeJcnizDVwDeH6JTXlSRf8wFMHA1JbN9DmFCj%2BRgHMqOV382gAk3x%2BjCEZa%2FKaewgeDsKQ85l9t4C73pNlLFf%2FCovFhw57cizsPiC9fb6odcb9JfB%2BkTNj7OpnYA4HTEx08CVYKDfaQDp2eKNXp7E5JE76Ke%2F7tjKLx1%2BpveADyzFvKC0UjWO1laNmJlUhPHsW2NmKHkiewLXCRuZoHj34UbaDhGCYiWc1wcakKxT3s5f9d25kATsTyKvKmP3uqJjmX%2FCoHXVHB5IcXn4IgUIGh4P8Yx%2BzarLlQTSnt96mjC0AHAns1vNPaKDMPjQr78GOqUBzxIZjVFO%2F5kM%2FXY3veyQmo1B0xD2ji6YZ51bG%2BrrlueF7faYyrYaIqtGrN4ZiQ01Rg9VIsLmnR7ju9DIN1g7B1E1ql1y3JwPNGUdek34Xyc40qzEm2QEgnhgFKRTkoWkUyL3IE4B7ox%2FvGnzwM7B9wMcgcBdOQlD7lxdz%2F75IxDkqGgqqTpoJv8OiWS483BiYAwyuANq7CfKjegzu2e9%2BboUUxkz&X-Amz-Signature=b411a6a3dc6cdaedd84caa3781b536e2c63742dcf5894729d1fb749353cb1c68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLMTVDR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBRfX31HwrSwnO34UOwFylW5CzfD88mDNZNizyd%2FncZeAiEApPxqnyPdOhLWOTr4Dx7gaR2lo%2F%2BUerGIU2%2BSuy1DcvQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxLnnw%2BJK5l5i43fyrcAz4aBSBhRx%2FCu5OJelFlp03%2FEH8g9RAgqXSzqYFL%2BUX2D9t46kQGMsy6l7bYpaGB6JJkIEF9O7Ip3HyFm2lb%2FeZZFpWcWLXbmwY0ewiGeGvZOLPYWfFhl3I0ivMYrZhfIYexq%2Fe13ZoYYNI3LbaM6MuEHaj5KitEOe%2BtykrJALDs%2Fox48hS14%2FDD4kP9Gdf6LjmxZo1KpahtcdWOckRYNNDVvk8FoHlQhMRHkpezimOrjCrN1dcwH0EbTfA251LHIHn98pUEPclS5pewxH8KQzz1%2FyaKHyGHGIw2jDop%2FM%2FDaiQcGaulQj0ixXdAEw%2FuGCWfeJcnizDVwDeH6JTXlSRf8wFMHA1JbN9DmFCj%2BRgHMqOV382gAk3x%2BjCEZa%2FKaewgeDsKQ85l9t4C73pNlLFf%2FCovFhw57cizsPiC9fb6odcb9JfB%2BkTNj7OpnYA4HTEx08CVYKDfaQDp2eKNXp7E5JE76Ke%2F7tjKLx1%2BpveADyzFvKC0UjWO1laNmJlUhPHsW2NmKHkiewLXCRuZoHj34UbaDhGCYiWc1wcakKxT3s5f9d25kATsTyKvKmP3uqJjmX%2FCoHXVHB5IcXn4IgUIGh4P8Yx%2BzarLlQTSnt96mjC0AHAns1vNPaKDMPjQr78GOqUBzxIZjVFO%2F5kM%2FXY3veyQmo1B0xD2ji6YZ51bG%2BrrlueF7faYyrYaIqtGrN4ZiQ01Rg9VIsLmnR7ju9DIN1g7B1E1ql1y3JwPNGUdek34Xyc40qzEm2QEgnhgFKRTkoWkUyL3IE4B7ox%2FvGnzwM7B9wMcgcBdOQlD7lxdz%2F75IxDkqGgqqTpoJv8OiWS483BiYAwyuANq7CfKjegzu2e9%2BboUUxkz&X-Amz-Signature=e0f569d7481878fe1faea94a112a7f0b58babb703f6f6de2c25788783bedd38a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
