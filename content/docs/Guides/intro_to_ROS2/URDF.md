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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPGJJFV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBfetwj%2FfwFU2oXk0sGIHQf3ZC%2BTmlIoHO5S1ceGq%2FmjAiAk%2F%2BKdi7fFt3vZuKPGqsq%2BhDV56MgBijry%2BNUOHz7BWSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMfjsMeqK20JBC0hlOKtwDo55JPnTbvMMl97Qku1wp5W0Dx2ocVAb2WgfL4ixo8iXbcPRpJfNj%2FUX5OCS32U3yearoIucN77KS5vBO7NHrofpy7tXQ1y7c0zltQtgqvWZ1bBQsIwD5Xxd519pFztgG9eqgZw1zR%2F4pg59bxmYTYkts54cc%2B0z%2FyZh6r29MMRVWBa1%2FOTK2rq%2F%2BZvkbKW52R3BiYgBZbJiL%2Fv1r1aO6LJAur%2FloQ2hhPNrcRyz3S1Ka04h02HKLy6kRVmyGzpl%2F%2BB8n2wT33KjmxdiRu2C0QgfdsCb6WR%2BL4W3R1xGDDWaI7nmbtWRDbwwuwHWVW20Z%2B275N%2Bt7bo%2BwiY8DuUyXv5kLkEdjnGjcnnqaM4I0x%2FxQVDwOaYiMw2xPnIgRUcEdoynVNAt7PIsAo2OnZosdOM579WrmdkLtepoLKYqmLjj7VVFMZNmyYMZR4YGsFf5o3fLH2aQY9VxqMowrINVjSUILF8m4Ao5ok4UMjHiWCn5CWNL8Va25pfLSVxINmUQl3dy%2B8QCDIBVuTFghtG92sfWq3cEJT9BLND7seLcm4i6Z%2FEbahPM9IdT7OMbakr9izxR7kWhA5JwbiJuLd0%2BPTyVB3hk1oKzg8C1ZNB%2BZsLNNw4c2rU8z5HF7l9kwh4jewAY6pgGktXFOnXl8jWIRzgtAv32c4fxl%2FASRyROpD45ToxsylVZNqJnwhfvPoCsG1TE0%2FcOWGOqUXS%2F5mkow4mO6UYnyCBbV73XkBYTw9MRUJmDEwG3YVzxWJhVhmrKDV46%2FWKK4QnRo5hu%2F%2Fn2fG3zApAyBAE%2FS%2FCZWpJfuhZ2Ga2G26sU%2BPgw4lf5UsoDOd4%2BkHj1LufpWvcfdINH4btKwNx0EADbmOYua&X-Amz-Signature=4598e5c6c53ad2eb33da3a11b9b61791c3f68a55b1658bbd611769946d820c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPGJJFV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBfetwj%2FfwFU2oXk0sGIHQf3ZC%2BTmlIoHO5S1ceGq%2FmjAiAk%2F%2BKdi7fFt3vZuKPGqsq%2BhDV56MgBijry%2BNUOHz7BWSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMfjsMeqK20JBC0hlOKtwDo55JPnTbvMMl97Qku1wp5W0Dx2ocVAb2WgfL4ixo8iXbcPRpJfNj%2FUX5OCS32U3yearoIucN77KS5vBO7NHrofpy7tXQ1y7c0zltQtgqvWZ1bBQsIwD5Xxd519pFztgG9eqgZw1zR%2F4pg59bxmYTYkts54cc%2B0z%2FyZh6r29MMRVWBa1%2FOTK2rq%2F%2BZvkbKW52R3BiYgBZbJiL%2Fv1r1aO6LJAur%2FloQ2hhPNrcRyz3S1Ka04h02HKLy6kRVmyGzpl%2F%2BB8n2wT33KjmxdiRu2C0QgfdsCb6WR%2BL4W3R1xGDDWaI7nmbtWRDbwwuwHWVW20Z%2B275N%2Bt7bo%2BwiY8DuUyXv5kLkEdjnGjcnnqaM4I0x%2FxQVDwOaYiMw2xPnIgRUcEdoynVNAt7PIsAo2OnZosdOM579WrmdkLtepoLKYqmLjj7VVFMZNmyYMZR4YGsFf5o3fLH2aQY9VxqMowrINVjSUILF8m4Ao5ok4UMjHiWCn5CWNL8Va25pfLSVxINmUQl3dy%2B8QCDIBVuTFghtG92sfWq3cEJT9BLND7seLcm4i6Z%2FEbahPM9IdT7OMbakr9izxR7kWhA5JwbiJuLd0%2BPTyVB3hk1oKzg8C1ZNB%2BZsLNNw4c2rU8z5HF7l9kwh4jewAY6pgGktXFOnXl8jWIRzgtAv32c4fxl%2FASRyROpD45ToxsylVZNqJnwhfvPoCsG1TE0%2FcOWGOqUXS%2F5mkow4mO6UYnyCBbV73XkBYTw9MRUJmDEwG3YVzxWJhVhmrKDV46%2FWKK4QnRo5hu%2F%2Fn2fG3zApAyBAE%2FS%2FCZWpJfuhZ2Ga2G26sU%2BPgw4lf5UsoDOd4%2BkHj1LufpWvcfdINH4btKwNx0EADbmOYua&X-Amz-Signature=d547c2be64857a64bd6dbe2da64d5c5e4a3b0234c585d65cf20e1cd9a0ec9525&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
