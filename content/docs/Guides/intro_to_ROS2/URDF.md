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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVSICBI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTzAZP5QTCKesHbHQDug7pbBy%2BFYJpFe0ie5V5%2Fv4onAiBiPS4V2EiZR366XoG7%2B%2F7fuB8kgP%2FW3gDVbRaTGQAmsyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0af%2Fk0EdJ%2Ff5RQmtKtwD6HVKK5p1dpyb1AQljGl61MLKb2Uxw%2BLeIjb0QaDZz2Gk9WxQYsE79F9RrAXxszPaJesKemEeBlD1fPOCWOL%2FISElsLEWEo6qyKVfZRUeXyz9sTBbeN5yC0IvvVpWNryJdjY8TDKk68hgSE886XIY4CdWf%2B91tk428iDADhsCoqz5ednPHU1on0CMuRSOKHWtOD6mtWA2VgI0%2BhtYsxNPHuX%2Fadr9aSbFI2CdzztByG%2FBt6sE3LjIdA9VqzPhJqQLZ1NV8J2tYh5m9M4UolA%2FNkEQo83fwXNS1qS%2BrfHRwwOwS0p0w6ZGARdFC03wHSBqqsfoGem13IHS1tQXEYq4dCho1NUrgDopNw%2FRndlcEElGdefhnpHq%2BdWs6VHAMpiu%2FZAeua2ioE2xAtMAhYA48OragBLtIpWdkG8YodPO1nJ%2BqFqwPAW%2Fto17hDQrBzQHRdjmG2Al3mpL6%2FAm7FL4PuKnGdLyAlegz13ulL49k2zjrnCyMJuhZPJR9yad0JOMKB8A2tHEioGt5FvACCqawBRR6tJ%2F2b7Kz7wLa5Bvv0UDHa7HXg2x7qp7axkkqTl489fi52vJPkEwwE3nffBf%2FUv6dznrbgOwC43T9%2BwCG34MiX3xP9BW%2F1eM%2Bs4wqtytvQY6pgG1wwsxCpITKlc4HigHwAR450DFdqd6wSm7IoDsesJtESnSzthH6iWMxhdRM5I0yAFTp1c5ZampO3Caa88STjR%2BsHCJsO3YOpuW6%2FGQoLQN8eDxb5lO%2FngA%2FqwoDk1xYI6EessovZANYeDK%2B6jc59iIBe054wc6R9YxWuLBsPgFc8%2F51v6abvYYl7syhlW4PSvU7RPoxPNw0B4lhSHEeZfydxptxeVk&X-Amz-Signature=a16d91430d5d0fac21675bf4e0f8feae88f3ae795b4a1f54d4f68aed6f716b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVSICBI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTzAZP5QTCKesHbHQDug7pbBy%2BFYJpFe0ie5V5%2Fv4onAiBiPS4V2EiZR366XoG7%2B%2F7fuB8kgP%2FW3gDVbRaTGQAmsyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0af%2Fk0EdJ%2Ff5RQmtKtwD6HVKK5p1dpyb1AQljGl61MLKb2Uxw%2BLeIjb0QaDZz2Gk9WxQYsE79F9RrAXxszPaJesKemEeBlD1fPOCWOL%2FISElsLEWEo6qyKVfZRUeXyz9sTBbeN5yC0IvvVpWNryJdjY8TDKk68hgSE886XIY4CdWf%2B91tk428iDADhsCoqz5ednPHU1on0CMuRSOKHWtOD6mtWA2VgI0%2BhtYsxNPHuX%2Fadr9aSbFI2CdzztByG%2FBt6sE3LjIdA9VqzPhJqQLZ1NV8J2tYh5m9M4UolA%2FNkEQo83fwXNS1qS%2BrfHRwwOwS0p0w6ZGARdFC03wHSBqqsfoGem13IHS1tQXEYq4dCho1NUrgDopNw%2FRndlcEElGdefhnpHq%2BdWs6VHAMpiu%2FZAeua2ioE2xAtMAhYA48OragBLtIpWdkG8YodPO1nJ%2BqFqwPAW%2Fto17hDQrBzQHRdjmG2Al3mpL6%2FAm7FL4PuKnGdLyAlegz13ulL49k2zjrnCyMJuhZPJR9yad0JOMKB8A2tHEioGt5FvACCqawBRR6tJ%2F2b7Kz7wLa5Bvv0UDHa7HXg2x7qp7axkkqTl489fi52vJPkEwwE3nffBf%2FUv6dznrbgOwC43T9%2BwCG34MiX3xP9BW%2F1eM%2Bs4wqtytvQY6pgG1wwsxCpITKlc4HigHwAR450DFdqd6wSm7IoDsesJtESnSzthH6iWMxhdRM5I0yAFTp1c5ZampO3Caa88STjR%2BsHCJsO3YOpuW6%2FGQoLQN8eDxb5lO%2FngA%2FqwoDk1xYI6EessovZANYeDK%2B6jc59iIBe054wc6R9YxWuLBsPgFc8%2F51v6abvYYl7syhlW4PSvU7RPoxPNw0B4lhSHEeZfydxptxeVk&X-Amz-Signature=17395747489aebb99d5a19cf6009479f4bffee15acba857e28a8d0d99518a823&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
