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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCKFWRO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNhUn%2Fn%2F5RekIpP%2BBZLRk5kIs9TqEKp9Ib0RgPJuYmeAiB5FYq432%2BidiWBUFDiBYGqkiRizOMQTnVY%2B4x9f9tkBCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmJgRueQXdZDHqeBhKtwD%2BTnQhTLJHBGH%2FVIWkya8jGSysFdfYEOnd6e59pZ1E34lkyte%2FdCxuhfsxzDdjrYoNw4B%2FBpv%2Bsi5zEbe%2B4yToY2P18ndqsH7JZAcBERLyw0ZkfnxwtiktcqSMwYfx0%2BcSZBjTbOBBH%2FZlNcxoSXoKLIvviCjmR7zpJhJ6FhXKrneGQpPgg2a51wdgyF0H3R1bLZJSJzj97R%2FldGCwA8d92o4jkWyfaDhM3uD2oK9MjDGVA2Kcm8Eisxk8JKqUzaIdSSVs8Wo4jZuOC0%2BIXVsmXdkN8ZuH5vAqCptg8%2FJ4temQCU4EmaVNC4OnPZJTjAQM71kW2y7CGN43hcn8fn%2B2E8%2Blj5Zu2CBKDTqHWCRdFYlAlGnw5RpbXOxYtd1DPmV4b2iDFWjwS%2FMPuKKhMdqIzjfrDEQEZQ5wSIF9amYbvSSpKb5uWY8zD5Sb9Vp8P%2FaqYVlDMUgva6ExKHzuGzbwUnGDFx%2FRpGB9g5U9lpPPCg7O6WvYiymWQs9nwfsfZlJg4ch4erOFeFtpped%2B3plZyu7Cj0%2BAvujz%2FijvNHGnk4qKpd%2FCA4Qdtqf4fAUkM7IktBvaz4AJzLQOpLCu23a6RnxwDnDUb%2BiQMHSe7GsTUWvaY39vvk9LKwSzWIwuv%2B8wwY6pgFtjK0MWYX1USgC9EBl0kHd6a5DMzHayHvqYwcyUN3tYhdioT6Q8%2B6wiNcuCZAE4q7Cler80HFI2b8mTWBcxijpd4vDi2mw6qMQjXgH9tuJmkCzrGZeBhQcTLn73TfNLLTGejZAqWpomBD3nFOiKI%2F3iYHJmGSGp%2FvsAcYYUQUIdMnB3lkCBOZ1lrNHhk5YF7RD1hI%2BpskC5L81S2pi2X8c%2FMqKcBZn&X-Amz-Signature=c5f555bb3c5d42fbfbc61014b36b9154594983cf6419a2f046805d4bfa5fbfa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCKFWRO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNhUn%2Fn%2F5RekIpP%2BBZLRk5kIs9TqEKp9Ib0RgPJuYmeAiB5FYq432%2BidiWBUFDiBYGqkiRizOMQTnVY%2B4x9f9tkBCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmJgRueQXdZDHqeBhKtwD%2BTnQhTLJHBGH%2FVIWkya8jGSysFdfYEOnd6e59pZ1E34lkyte%2FdCxuhfsxzDdjrYoNw4B%2FBpv%2Bsi5zEbe%2B4yToY2P18ndqsH7JZAcBERLyw0ZkfnxwtiktcqSMwYfx0%2BcSZBjTbOBBH%2FZlNcxoSXoKLIvviCjmR7zpJhJ6FhXKrneGQpPgg2a51wdgyF0H3R1bLZJSJzj97R%2FldGCwA8d92o4jkWyfaDhM3uD2oK9MjDGVA2Kcm8Eisxk8JKqUzaIdSSVs8Wo4jZuOC0%2BIXVsmXdkN8ZuH5vAqCptg8%2FJ4temQCU4EmaVNC4OnPZJTjAQM71kW2y7CGN43hcn8fn%2B2E8%2Blj5Zu2CBKDTqHWCRdFYlAlGnw5RpbXOxYtd1DPmV4b2iDFWjwS%2FMPuKKhMdqIzjfrDEQEZQ5wSIF9amYbvSSpKb5uWY8zD5Sb9Vp8P%2FaqYVlDMUgva6ExKHzuGzbwUnGDFx%2FRpGB9g5U9lpPPCg7O6WvYiymWQs9nwfsfZlJg4ch4erOFeFtpped%2B3plZyu7Cj0%2BAvujz%2FijvNHGnk4qKpd%2FCA4Qdtqf4fAUkM7IktBvaz4AJzLQOpLCu23a6RnxwDnDUb%2BiQMHSe7GsTUWvaY39vvk9LKwSzWIwuv%2B8wwY6pgFtjK0MWYX1USgC9EBl0kHd6a5DMzHayHvqYwcyUN3tYhdioT6Q8%2B6wiNcuCZAE4q7Cler80HFI2b8mTWBcxijpd4vDi2mw6qMQjXgH9tuJmkCzrGZeBhQcTLn73TfNLLTGejZAqWpomBD3nFOiKI%2F3iYHJmGSGp%2FvsAcYYUQUIdMnB3lkCBOZ1lrNHhk5YF7RD1hI%2BpskC5L81S2pi2X8c%2FMqKcBZn&X-Amz-Signature=87a5bfac70ab45d35fc1b1faeb4ab7a48c7a920237644eb420b1c0e0321e2a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
