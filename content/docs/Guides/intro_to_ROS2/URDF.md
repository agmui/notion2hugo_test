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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPZDF47%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCu9Ap7AObSluN8osDaZf1LTOGurdn87sT3lS1HaC5H7AIgV3o1L3g4evX%2Fl%2FjlGW3ZqwzjF7Tl%2B%2BOxxAMm%2BPxJhCQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq1PwrJIWJAIEvLzSrcA7CLjAj6DiKU566P1ws%2BZsEaBihMBD3cJq58ixD1pjRA9IoGiZ%2Boi9mD3%2BQV68%2FaP9TVzfkO8LdT46NcTNpLtcVWdhLQBxzZRR9gpFCIxwWW6kCQ%2FnTZok%2F0RCRiY7iZgPGwo3XwGy6wRy0R3v5pGJGikGmyifFYJVO6BlbgVLymxVBMWy6%2FwQXMkQqL23f9Ac5tpLfKY3JTJi%2FgFmv85iz0YbP5IMldVeZB7d8Hpnw9nfI9CX2%2B%2BTCE3wz%2Bced2jiSX55w1MUH69P4UBACBKLYROkQs%2F4xJYfC%2BgZrwpNEviFM0KWVxharJ6qlejARwQgQNr14cAZWhkiyCKxGW0M3KrlQNKI5CKnxH2YfeGPAtASeVzAzO36S4%2BxxW8igHE2M%2FaEPXSyCp1ymhphBOiocy7%2BeF%2FM9uYxlISZq9oRhvm4h448zw%2FY1PMIpI7A3G5TnB2a93qpHxIBzLw3jolt5zPPao9YB6ru8I5BAUs0T1UwnUsFgLCfNv4dGWSoxyDphHzmjkSh3GY1BRhhNqM8%2BIRwNXPA4RuIXwoe7KkAmz9poEaNh3H8DnNF6Wk%2BhZ%2B7yPZf3hZNpZmrDPAg6pS%2BsGNB%2Fmm7%2F978kiPHzvrn5RfiaOhz%2FXAQpWue%2B%2FMKfx2sAGOqUBnxtBQKx2nPdRSQiSjyF2%2BZq3ygB3CrNZ1Jw9%2F8ghup3AEZ5Ugdabx%2B2gVWXHfZovOoRD5YgUAzHCx1bEyDK29pIv5ecy3URZAJjAk9onI4KUwriXxA828EmqfqNGx9eK48s7DqjKA%2FlVfqQbjnLE91nGHi52o3awnSc1ERlZo%2FDU7r21XuC%2F1hcROLF%2BqlcJtqIlKP2XjpDePpBhrddwnibALtmH&X-Amz-Signature=5b8564bc6ca2bfe08e1fa08e9188455ae23b6108611c97ca18dc54064fbc40b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPZDF47%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCu9Ap7AObSluN8osDaZf1LTOGurdn87sT3lS1HaC5H7AIgV3o1L3g4evX%2Fl%2FjlGW3ZqwzjF7Tl%2B%2BOxxAMm%2BPxJhCQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq1PwrJIWJAIEvLzSrcA7CLjAj6DiKU566P1ws%2BZsEaBihMBD3cJq58ixD1pjRA9IoGiZ%2Boi9mD3%2BQV68%2FaP9TVzfkO8LdT46NcTNpLtcVWdhLQBxzZRR9gpFCIxwWW6kCQ%2FnTZok%2F0RCRiY7iZgPGwo3XwGy6wRy0R3v5pGJGikGmyifFYJVO6BlbgVLymxVBMWy6%2FwQXMkQqL23f9Ac5tpLfKY3JTJi%2FgFmv85iz0YbP5IMldVeZB7d8Hpnw9nfI9CX2%2B%2BTCE3wz%2Bced2jiSX55w1MUH69P4UBACBKLYROkQs%2F4xJYfC%2BgZrwpNEviFM0KWVxharJ6qlejARwQgQNr14cAZWhkiyCKxGW0M3KrlQNKI5CKnxH2YfeGPAtASeVzAzO36S4%2BxxW8igHE2M%2FaEPXSyCp1ymhphBOiocy7%2BeF%2FM9uYxlISZq9oRhvm4h448zw%2FY1PMIpI7A3G5TnB2a93qpHxIBzLw3jolt5zPPao9YB6ru8I5BAUs0T1UwnUsFgLCfNv4dGWSoxyDphHzmjkSh3GY1BRhhNqM8%2BIRwNXPA4RuIXwoe7KkAmz9poEaNh3H8DnNF6Wk%2BhZ%2B7yPZf3hZNpZmrDPAg6pS%2BsGNB%2Fmm7%2F978kiPHzvrn5RfiaOhz%2FXAQpWue%2B%2FMKfx2sAGOqUBnxtBQKx2nPdRSQiSjyF2%2BZq3ygB3CrNZ1Jw9%2F8ghup3AEZ5Ugdabx%2B2gVWXHfZovOoRD5YgUAzHCx1bEyDK29pIv5ecy3URZAJjAk9onI4KUwriXxA828EmqfqNGx9eK48s7DqjKA%2FlVfqQbjnLE91nGHi52o3awnSc1ERlZo%2FDU7r21XuC%2F1hcROLF%2BqlcJtqIlKP2XjpDePpBhrddwnibALtmH&X-Amz-Signature=46cdb66cddd9ab0cc28f12279f66cc1432c008b77c40d96bf4667079c7595c58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
