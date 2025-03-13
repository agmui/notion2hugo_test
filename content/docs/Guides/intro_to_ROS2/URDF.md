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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBTKJW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDj1MNXeoIcexbBZhIEHSr71Ib4Aa0SfwQZWIkoUlWmJAiEAi2L87TGNPjGrvBr0BSw0TH7U5ZBNGYh8vP1bMIw1qEYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHHs464fRzcXqSdZSrcA0Cc14G1ZLuqdFuvAuDb0y4%2FzCze8EaVHukQVNwXij%2Frvj%2FbUpK2tupSTiMJz%2BhSo1vHG%2BNT8mgeQkE6cBQ4iPjMa%2FefdTCeDw09thrWzXKOT%2Fg5necuxRxXJHqYuWFRWBCzPO6wzVVqsX34GXmAYmMoE5dZxpiBBPBIrLYaiHElv49yHYnBpvqjojujGXilfuc%2BAepNEYM1vnmckHdYBR%2Fa7uVRPZCj2joLNcf0tTBSy5GXTOBv%2FK819HwUdUrKjAoguZLvl9N3LfNTkTy8K%2B%2FKZv%2Fyj0izjbFKHRr5%2B2qkWX1ifZhXDD1GOEZ9bEFn8FHidwhyAzC%2FF8k6Lw6CaA%2FjLnHRb2R%2FuKMtP5JTRK7pqo%2Be6uj%2BIRRIuPhciMGOR7PWApxpdJl00Ktp1N8hPbKHIgH2nmhYP5lDhoPN95ht957t5A9m0XLb0Ebh5Tmka8UwguJt%2Bqyq1rEFZbINJdMpxo0bWIGC5GvqbyzBYN5j9aUTFSlOidl%2BStgX08a1c56gqAfHvZDdCxv1pogAzNxjcTgkXpYRBRp2W1QiT3vBY5vnSaWjhwevIAYDuaQxHWbAGvdPdgONeXO60l0MbfnTxET0OpuwWYjd2srRuGUOzC4%2Fu3FmctmJ0H9%2FMKvmyb4GOqUB7Y%2FUET8uHAOQun5qiCNQdqs5qj1z5IPHI167M4Cwkv3ObGKqVwWAEXt6%2BHdqTsx%2BycWGqS9MpdrYTzIiphEkOd4np8%2F4OPWliFodaSgQV1amHup29%2BEAk3Ed7fbqyiekK9Tk3pipeAXNpgkl4b4%2F3VTTqDn5wll4%2FQ3N8B6ex2UXEjd3L1RJQeKdSL6PqjEXwrmXddz4zHcb8BKKnkxas8hrSlzR&X-Amz-Signature=48130069b91426e18524e30fe9f02b81243d1be0b3a76c0696b13d55e6235757&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBTKJW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDj1MNXeoIcexbBZhIEHSr71Ib4Aa0SfwQZWIkoUlWmJAiEAi2L87TGNPjGrvBr0BSw0TH7U5ZBNGYh8vP1bMIw1qEYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHHs464fRzcXqSdZSrcA0Cc14G1ZLuqdFuvAuDb0y4%2FzCze8EaVHukQVNwXij%2Frvj%2FbUpK2tupSTiMJz%2BhSo1vHG%2BNT8mgeQkE6cBQ4iPjMa%2FefdTCeDw09thrWzXKOT%2Fg5necuxRxXJHqYuWFRWBCzPO6wzVVqsX34GXmAYmMoE5dZxpiBBPBIrLYaiHElv49yHYnBpvqjojujGXilfuc%2BAepNEYM1vnmckHdYBR%2Fa7uVRPZCj2joLNcf0tTBSy5GXTOBv%2FK819HwUdUrKjAoguZLvl9N3LfNTkTy8K%2B%2FKZv%2Fyj0izjbFKHRr5%2B2qkWX1ifZhXDD1GOEZ9bEFn8FHidwhyAzC%2FF8k6Lw6CaA%2FjLnHRb2R%2FuKMtP5JTRK7pqo%2Be6uj%2BIRRIuPhciMGOR7PWApxpdJl00Ktp1N8hPbKHIgH2nmhYP5lDhoPN95ht957t5A9m0XLb0Ebh5Tmka8UwguJt%2Bqyq1rEFZbINJdMpxo0bWIGC5GvqbyzBYN5j9aUTFSlOidl%2BStgX08a1c56gqAfHvZDdCxv1pogAzNxjcTgkXpYRBRp2W1QiT3vBY5vnSaWjhwevIAYDuaQxHWbAGvdPdgONeXO60l0MbfnTxET0OpuwWYjd2srRuGUOzC4%2Fu3FmctmJ0H9%2FMKvmyb4GOqUB7Y%2FUET8uHAOQun5qiCNQdqs5qj1z5IPHI167M4Cwkv3ObGKqVwWAEXt6%2BHdqTsx%2BycWGqS9MpdrYTzIiphEkOd4np8%2F4OPWliFodaSgQV1amHup29%2BEAk3Ed7fbqyiekK9Tk3pipeAXNpgkl4b4%2F3VTTqDn5wll4%2FQ3N8B6ex2UXEjd3L1RJQeKdSL6PqjEXwrmXddz4zHcb8BKKnkxas8hrSlzR&X-Amz-Signature=a12467798429e894c5d1316959265b1d775dbcb3b52fbcbdcadab9ecca6243c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
