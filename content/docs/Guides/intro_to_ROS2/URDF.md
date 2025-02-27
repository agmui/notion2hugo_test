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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMQRXIJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGIEc1UGeaA%2BYWR%2BY8yhOzeJS9kQqdDZIHDg3FrMrgpkAiEAmdATL49HEK7%2BEJeKDxzO4C4CzwkgygDowswYGyhhdYkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFdRq%2FHs4JN%2FBL9ybircA43WbDa5DhTlHtHkbM5juZ8E1sw0u4Y0NT01xUrKOBKHXl4zwAs2XU%2FePXQvaWVMLIjpN1MoWGW1bjWzIlB8dt3TDObn9Fizr%2B5igo3Axhp0%2FLlkrZNuo%2BYB8n1j7B3IbngHIDsp53Yehkw%2B6EDY8xMwXcvgvSs2u6j7nvW3ava3ic24BGu5nmyXGJwLRVtjUdFLqrgeEgpZoOC9y2wtz2mXn7FXYhcYfp5DPOH6hNArNUsvy92ByL9ZyLlCkvWIAEc0L6bSn3y3zpSGEARQes2Y%2BhuWutjeWeP6%2BhdSlwpeNw%2B%2FuuqZCbL%2F4s%2BvjdBogoGJ6WaXDFgBkFooFOgLlO6xev15ND5diBXqhswzD1EosXCD9qcUsrGx89IW2NIdu1Xm8CiUP95PpyeJp4M7MvuRuxHuBlHcq6Put3LP56xr%2FBwZ6c162a4lnEBfHgyuZHf6ToEkRP1PsFXQ1ESbtrn29M0n8A7mq2djiMBOcBg0CVhfXs2210YdCIN2sNUBWjK0RIcrsUrtr3vJDrXklpF%2BwZWpWbhG8nW1ST05gZOiG9M8M8qJNylmnwis392fD6cb76HepOCGem4tMzjnC7fO2%2FMB%2BK%2FuJzO7b9hRwGfBOqJVcXDfG8%2BnkfT6MK%2BLgL4GOqUBjTJvLWs8UhwtfY9MO%2FLtzsG1LUfrhrbkvP7uyU5NWOlL17WtmMsoIsN1s3Rhh6iARUJ8cIfcA1jiQpFH3W3BqoRupatEOCFe5p1Wrdvart21AGDW4t%2B9Cr3xjnUN0wQ6LsMixAwUy4w16w%2FzSfMHSBmM6MU7VSr0ogjD1FpVKKLeXVDRw%2FJvMGy4Y0uoepoXINyZqRu7fdyvx7%2BBzR9271W%2F38nj&X-Amz-Signature=4632febc40131e7cb5c72bdbd5e0f02539fd755016315a3c6eb00f8facd8cbde&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMQRXIJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGIEc1UGeaA%2BYWR%2BY8yhOzeJS9kQqdDZIHDg3FrMrgpkAiEAmdATL49HEK7%2BEJeKDxzO4C4CzwkgygDowswYGyhhdYkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFdRq%2FHs4JN%2FBL9ybircA43WbDa5DhTlHtHkbM5juZ8E1sw0u4Y0NT01xUrKOBKHXl4zwAs2XU%2FePXQvaWVMLIjpN1MoWGW1bjWzIlB8dt3TDObn9Fizr%2B5igo3Axhp0%2FLlkrZNuo%2BYB8n1j7B3IbngHIDsp53Yehkw%2B6EDY8xMwXcvgvSs2u6j7nvW3ava3ic24BGu5nmyXGJwLRVtjUdFLqrgeEgpZoOC9y2wtz2mXn7FXYhcYfp5DPOH6hNArNUsvy92ByL9ZyLlCkvWIAEc0L6bSn3y3zpSGEARQes2Y%2BhuWutjeWeP6%2BhdSlwpeNw%2B%2FuuqZCbL%2F4s%2BvjdBogoGJ6WaXDFgBkFooFOgLlO6xev15ND5diBXqhswzD1EosXCD9qcUsrGx89IW2NIdu1Xm8CiUP95PpyeJp4M7MvuRuxHuBlHcq6Put3LP56xr%2FBwZ6c162a4lnEBfHgyuZHf6ToEkRP1PsFXQ1ESbtrn29M0n8A7mq2djiMBOcBg0CVhfXs2210YdCIN2sNUBWjK0RIcrsUrtr3vJDrXklpF%2BwZWpWbhG8nW1ST05gZOiG9M8M8qJNylmnwis392fD6cb76HepOCGem4tMzjnC7fO2%2FMB%2BK%2FuJzO7b9hRwGfBOqJVcXDfG8%2BnkfT6MK%2BLgL4GOqUBjTJvLWs8UhwtfY9MO%2FLtzsG1LUfrhrbkvP7uyU5NWOlL17WtmMsoIsN1s3Rhh6iARUJ8cIfcA1jiQpFH3W3BqoRupatEOCFe5p1Wrdvart21AGDW4t%2B9Cr3xjnUN0wQ6LsMixAwUy4w16w%2FzSfMHSBmM6MU7VSr0ogjD1FpVKKLeXVDRw%2FJvMGy4Y0uoepoXINyZqRu7fdyvx7%2BBzR9271W%2F38nj&X-Amz-Signature=e3fe96409a3a7bb027d04fb67dc2b944ff1a9a01851bc1545fa5a67f0a96b523&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
