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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ47SDXE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf2s0L4ih%2BRs7M7mdwgdjmkNyN%2BzLnSHy9Mt8kHHlMFAiEAh%2Bygjnb18V3rn0hrOdROAHVWJmxWHJU6hCWnqh9c%2BOIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGE1Zi5Y4Pld7%2BV6vSrcA0iyxz9hy0XvotIKRoN%2FQwL3cC8WTLhIzpJMwNFTok3GBD9tezHPpA1BkwR%2BNmOocJjy98kYBLOoSHjKDfy0to4dMN5jR%2BdKfgVilY5evvu6fk387DuxoTg0ZsDJ6G7CfxRxJ2EVlnz3EKa1rlhu8iiCTZh1xpm34dfj87d4KKUCwkq7q4yLGXqv2ttdeeM1CODY2XvYPfd6AIfqmPTGZuRtjKsnnptYdJGbWCArH1OwFV6AoZIvGc0QkhGIa4a931AUw6Gd5xRH3ysd32E9ND3oQjbwTPq0kHq8phnr3ecSayVaEbHaxKi5Y0nzHG%2FEwCjryEpc19TS1OAliFgug8BQPP%2BTzRVnsk62foLh2QOitB8dh0HuwTrYSsXkY5kFCT1BdhwJUva7lOvjwn%2B5w0tOyHX8SpcjFvjXHyfFZctVjVoqzghiM%2F2oqc0BoardFEOc3WRRYWzU6pRHUR5B6gVEWAT1seTLvPXcf53OL7mKw%2FUsViwGs3iT9c9wBnnlv2aZCRwUZPRz72eJH9S1MrWNdOHBeB6S7%2BW5eCUYqGUHpanIR%2BtR%2FITp0pAS29IAyEERWHhSiT8GOaSvADuSPdv9BnDhPEKN8jfV0WvqEfyIUhOx8opiGt4KKGlJMN38g8AGOqUBK9nyn1%2BpjvFop%2BoABkpUWj0cdAANoS4GNZZgajXhObg3AX1y8u%2BoN5kHPo2M3ChAm%2BlRXGmJ5o%2BnqfH8xHBg3eCENnBbiv9yXDpNfXbDV7550a78%2FQ5LJQS5G6tsn7lmuhvJOiiWJm8F9pe9WFXAsO1m6KaFaD7gNQG9qKgz2nifpKCW2p4Qywg%2FNWJjQdv1c6xzJkXtuW4eFy1d30XaIMgakTWu&X-Amz-Signature=4dca7b047651298f1ad2466602735a00449da46188969c4fac507180b48b601e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ47SDXE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf2s0L4ih%2BRs7M7mdwgdjmkNyN%2BzLnSHy9Mt8kHHlMFAiEAh%2Bygjnb18V3rn0hrOdROAHVWJmxWHJU6hCWnqh9c%2BOIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGE1Zi5Y4Pld7%2BV6vSrcA0iyxz9hy0XvotIKRoN%2FQwL3cC8WTLhIzpJMwNFTok3GBD9tezHPpA1BkwR%2BNmOocJjy98kYBLOoSHjKDfy0to4dMN5jR%2BdKfgVilY5evvu6fk387DuxoTg0ZsDJ6G7CfxRxJ2EVlnz3EKa1rlhu8iiCTZh1xpm34dfj87d4KKUCwkq7q4yLGXqv2ttdeeM1CODY2XvYPfd6AIfqmPTGZuRtjKsnnptYdJGbWCArH1OwFV6AoZIvGc0QkhGIa4a931AUw6Gd5xRH3ysd32E9ND3oQjbwTPq0kHq8phnr3ecSayVaEbHaxKi5Y0nzHG%2FEwCjryEpc19TS1OAliFgug8BQPP%2BTzRVnsk62foLh2QOitB8dh0HuwTrYSsXkY5kFCT1BdhwJUva7lOvjwn%2B5w0tOyHX8SpcjFvjXHyfFZctVjVoqzghiM%2F2oqc0BoardFEOc3WRRYWzU6pRHUR5B6gVEWAT1seTLvPXcf53OL7mKw%2FUsViwGs3iT9c9wBnnlv2aZCRwUZPRz72eJH9S1MrWNdOHBeB6S7%2BW5eCUYqGUHpanIR%2BtR%2FITp0pAS29IAyEERWHhSiT8GOaSvADuSPdv9BnDhPEKN8jfV0WvqEfyIUhOx8opiGt4KKGlJMN38g8AGOqUBK9nyn1%2BpjvFop%2BoABkpUWj0cdAANoS4GNZZgajXhObg3AX1y8u%2BoN5kHPo2M3ChAm%2BlRXGmJ5o%2BnqfH8xHBg3eCENnBbiv9yXDpNfXbDV7550a78%2FQ5LJQS5G6tsn7lmuhvJOiiWJm8F9pe9WFXAsO1m6KaFaD7gNQG9qKgz2nifpKCW2p4Qywg%2FNWJjQdv1c6xzJkXtuW4eFy1d30XaIMgakTWu&X-Amz-Signature=8ccba5cc246b5bbe7ee4df120dae5e7fa61e37fa6aef889e817e1acf047059c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
