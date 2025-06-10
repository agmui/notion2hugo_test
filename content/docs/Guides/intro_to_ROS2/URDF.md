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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M46C6VX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVgRzNqNaf5U92sZYNr3iS4pJmUXkJRAl9u%2BHtH%2BgQgIhANVbpPsdzWgkUzkTFSnbkF0tjAxqSwGly3c2QDD9orEVKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoonS0CzVt%2FxrHzS8q3AOQmhxK5R7s3AlLbOul3R3FWzwkYbpZECd%2B15pg3FPSOyOKlWM4ouqJx8jO9dl1SydFgZAC4tJ53VYQIQBqqgAaQTt8GPLh3pHaDsuzB6n5FYyNhCyzFFVvmPWQowycioY2wASOYvFrb8D0hc%2FAz5esda0DNoTGt%2Ft65CyqtwKqqYHuvfkpHYiAQlqf59zFh6cps4i8t4F37XiPjlEB6N5ylPIIE7xPtPZ2ch5YLlImlQhlEpk13Yjd6aiGFnN6Vec2IYDCRomtj%2B1EXtfYVWp3H0oF4M8bHzYeWGuFe0P8oyjOl1yD1HlF%2Bj6h%2FspUowe5fdjcJd%2BaSPvHpZcsy80EofzzfCbGYShwX3pppfHoDpzDQHZ07eFl5YeuLWHHMCISg0kQEuKPITpjl%2B0DHbjaxhYCrKlmWWEAS4DjEGo%2F6t6Wb%2BD8h5nhm2%2FhWsM4mAtrubhn3y7q5Vb8UAAqf%2FW3hvCTDW87TiqKRkrkUvFT2oxRg25Mso5or7uCm4AlxGeWZn%2Bk4iov2ACoY3UJS58r%2Fk7OVfw%2B%2BUAmXbCqaoW0zNNB%2FZgpYaXFtN6zD3stx7TbzjMNxg4NoR2ZyURFzgG%2BmTGaHV3XSW%2BglpQjqkl6ZkkdgLUqB4okxPDrSzDk8J3CBjqkAW40tv1QvZBPccLMzDvGkaCdHyhqaGYNuqNZWQs%2FEij3I5gvUZxnuVNhGMeFwDmyW0m%2BPaz6Ph8Q%2BaAeSh3fv91q862TaMLy8eDw3NRS8ouXVBlmTAjvTn6N%2FToZwXyJqOo9fm%2BNNlpczebEwxlGvouGUX8xUPCBaO6c%2FqQb8N2C5ynvvUDP0nUbet3ILKr1nF7eGuYiQEqXxtDAgSlxFZCe3an4&X-Amz-Signature=d83cfd7c2a434661a010c26f1654598cc2c67134712dd93ce70c828a1f07058a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M46C6VX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVgRzNqNaf5U92sZYNr3iS4pJmUXkJRAl9u%2BHtH%2BgQgIhANVbpPsdzWgkUzkTFSnbkF0tjAxqSwGly3c2QDD9orEVKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoonS0CzVt%2FxrHzS8q3AOQmhxK5R7s3AlLbOul3R3FWzwkYbpZECd%2B15pg3FPSOyOKlWM4ouqJx8jO9dl1SydFgZAC4tJ53VYQIQBqqgAaQTt8GPLh3pHaDsuzB6n5FYyNhCyzFFVvmPWQowycioY2wASOYvFrb8D0hc%2FAz5esda0DNoTGt%2Ft65CyqtwKqqYHuvfkpHYiAQlqf59zFh6cps4i8t4F37XiPjlEB6N5ylPIIE7xPtPZ2ch5YLlImlQhlEpk13Yjd6aiGFnN6Vec2IYDCRomtj%2B1EXtfYVWp3H0oF4M8bHzYeWGuFe0P8oyjOl1yD1HlF%2Bj6h%2FspUowe5fdjcJd%2BaSPvHpZcsy80EofzzfCbGYShwX3pppfHoDpzDQHZ07eFl5YeuLWHHMCISg0kQEuKPITpjl%2B0DHbjaxhYCrKlmWWEAS4DjEGo%2F6t6Wb%2BD8h5nhm2%2FhWsM4mAtrubhn3y7q5Vb8UAAqf%2FW3hvCTDW87TiqKRkrkUvFT2oxRg25Mso5or7uCm4AlxGeWZn%2Bk4iov2ACoY3UJS58r%2Fk7OVfw%2B%2BUAmXbCqaoW0zNNB%2FZgpYaXFtN6zD3stx7TbzjMNxg4NoR2ZyURFzgG%2BmTGaHV3XSW%2BglpQjqkl6ZkkdgLUqB4okxPDrSzDk8J3CBjqkAW40tv1QvZBPccLMzDvGkaCdHyhqaGYNuqNZWQs%2FEij3I5gvUZxnuVNhGMeFwDmyW0m%2BPaz6Ph8Q%2BaAeSh3fv91q862TaMLy8eDw3NRS8ouXVBlmTAjvTn6N%2FToZwXyJqOo9fm%2BNNlpczebEwxlGvouGUX8xUPCBaO6c%2FqQb8N2C5ynvvUDP0nUbet3ILKr1nF7eGuYiQEqXxtDAgSlxFZCe3an4&X-Amz-Signature=e067face75d962033eb570aadcb8c60617cf2f0774d5a8db1c3d1f1796d9ab00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
