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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HCANJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDgabdZEeuNTE1GjqcqRKawNLAYEkp4k%2BiKjExUDWgiBAIhANbFilsH1Ecp00q8cr%2FV3JS0jPWsGFpCXYK4po9gUct%2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHvyLNHl1%2FvX%2FrAEQq3AOnljh21TJIwLPax0WC686wV%2FIxUW59XanzUR60Mt0RLruDXOGyWUUjKoN9bcMU6VxTQcqnZGmsSxuHlwUUWQxqXcaJr6bxUItk201V7RAr%2BHR0uAjkROfs6mq3fk99OpV9R%2FBR2jOusTQzQB6ztb91sT0zho%2FlVfdwFQahdkXB6zphU3bkskcYdOQiyjheG9W7V1Qj0F2p4GOYgBYs%2F2jAS1sOTu9ilOKEzp9zSy11Uz6kTCDEa04N6NiDzwDmtU1ShKEhVWM2Tnu6H8k54ErTIgfVDv6WfngYA8P52Tzf%2FOFF0merEwHHSaBl7k5udgdbk4EER3wV5bYErL1FRCUPF7UOXEhm30c8jYNAtTO%2FGiP7IH69oZ7UGwpDNwrewbUBzzVHerDi5Yh%2Fg%2FhhggWyiC%2FmW%2BAB6pdT8ccjwqePDK%2FKZ5%2BcwjyTsCh7BS%2Fg%2FN7oyvPPlIVmoDiyBFUXnpD1kUcXhqF6wlmhLnvzAW1RDHNlFwU1HcJHMK1Rqeln%2BJ%2BE7mvzigew4KZr7026yvw35qWS9FII0Xaq1CMJoAp%2FuTi%2FA4y6RX8D9TnN1GL9DCD%2FNexszAP5AICEAY6yaoXsjCaeejDtdO9IpT%2FMFaA4sBGOnraN4IiIIKtTSDCSn6C%2FBjqkAR6QpoB45JKCLER2GmhoocxV40ZX4OhpRe%2FFrr8X2UpNJHJiDT09pFgsv1Z13ZUqB%2BEfWTSbndfv%2FM6EL4%2Fnfcnow0%2FfhBuogtElEOXy%2FsPNS9NjuUNZxuci1U34OAakRWlgdjt%2FmqtlovfD%2BuE8z6hUxJYax3a3F1BDjR2unYSY4k5V10GRs4kOH8yi3NJlW9vblnzCvDH2ygLB0QHw%2F2OE4uf7&X-Amz-Signature=bca251ef2f628a2b6417ebeb8f9e666e29dbc24e74c56631578d5959fd6bc96d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HCANJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDgabdZEeuNTE1GjqcqRKawNLAYEkp4k%2BiKjExUDWgiBAIhANbFilsH1Ecp00q8cr%2FV3JS0jPWsGFpCXYK4po9gUct%2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHvyLNHl1%2FvX%2FrAEQq3AOnljh21TJIwLPax0WC686wV%2FIxUW59XanzUR60Mt0RLruDXOGyWUUjKoN9bcMU6VxTQcqnZGmsSxuHlwUUWQxqXcaJr6bxUItk201V7RAr%2BHR0uAjkROfs6mq3fk99OpV9R%2FBR2jOusTQzQB6ztb91sT0zho%2FlVfdwFQahdkXB6zphU3bkskcYdOQiyjheG9W7V1Qj0F2p4GOYgBYs%2F2jAS1sOTu9ilOKEzp9zSy11Uz6kTCDEa04N6NiDzwDmtU1ShKEhVWM2Tnu6H8k54ErTIgfVDv6WfngYA8P52Tzf%2FOFF0merEwHHSaBl7k5udgdbk4EER3wV5bYErL1FRCUPF7UOXEhm30c8jYNAtTO%2FGiP7IH69oZ7UGwpDNwrewbUBzzVHerDi5Yh%2Fg%2FhhggWyiC%2FmW%2BAB6pdT8ccjwqePDK%2FKZ5%2BcwjyTsCh7BS%2Fg%2FN7oyvPPlIVmoDiyBFUXnpD1kUcXhqF6wlmhLnvzAW1RDHNlFwU1HcJHMK1Rqeln%2BJ%2BE7mvzigew4KZr7026yvw35qWS9FII0Xaq1CMJoAp%2FuTi%2FA4y6RX8D9TnN1GL9DCD%2FNexszAP5AICEAY6yaoXsjCaeejDtdO9IpT%2FMFaA4sBGOnraN4IiIIKtTSDCSn6C%2FBjqkAR6QpoB45JKCLER2GmhoocxV40ZX4OhpRe%2FFrr8X2UpNJHJiDT09pFgsv1Z13ZUqB%2BEfWTSbndfv%2FM6EL4%2Fnfcnow0%2FfhBuogtElEOXy%2FsPNS9NjuUNZxuci1U34OAakRWlgdjt%2FmqtlovfD%2BuE8z6hUxJYax3a3F1BDjR2unYSY4k5V10GRs4kOH8yi3NJlW9vblnzCvDH2ygLB0QHw%2F2OE4uf7&X-Amz-Signature=0122b133c2f4093174ddfb698f2730a66569b5248d87d3f0d6a682f22c82282e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
