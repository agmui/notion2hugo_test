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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4SWM2U%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1gNrbLYI5Q%2Bs4qt0MxLH1u1NEiSayxgzYkrsJGTXWuAiBnjgfPp0xB6iYoB6d%2FMjO%2Fz5eYFZ3mgLXqrZvv%2FtZYwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnc2BXtJDTy0GgEYBKtwDbidmL5Vai4xHWwZ2UXrm%2BMfBdZjjZ0mjhKY88RbGh5%2FusebGhO869Yus%2BHZoesCFMapM6mdL15%2FALLLx0h%2B25RBr3SXVMOGwn9YS7FetqUnru1%2BR1qGAyRfOTeeEnhWiNlJyhQ7DJThO16Bq2h9oFydLhNQ%2BsqcmbBYyTjYO8PrXoR89X1EjFM%2B%2FmmkOZYG3mfBzogz1RR4v%2FPORktyRPol2yaD%2F7toLcvB4q9JjIMAnt2FfX077Npl5j5YRAcA4DuE9q8yfKRGYMV48U01CuckJrT6KSiKnu%2BiHGPfv%2FD1lQnZBM2C9%2FMrsNrf7RsJwTsjqpu4aYVkbTSC%2FQXcqc9cFw%2FkHqh%2BQQn1%2F6JwJTHckxsR4f5WjiByB3z7njovYVJPQUCxn1iY26laaddNRdmdDHFgIZL45vkSDzRe8y7%2Bhl0pCPsBuUDH%2B5qgWsGfMzlYkk9%2B%2FM2nMiKECR3q2SJShXHoNp1SS8cTLXP38PP%2FmzywIJ1mh9A1hQ6eC1E2U8hve6Tv1rO0Y0N6qKUqVfYfvh5fD3%2FV%2FuoEjkAyL94X620czIFtf354LeCg3gCi4%2BSliK9qebzaaUftuapmXiBRZNYadW1dZeIwNMiIBtTXkhJMmvrVffnX5yf0wnN%2F2vAY6pgFSl%2Br4J0wIezLiokfw6%2FzUP2Sop%2BPat3qBG%2FpE1W%2ByhaSEG2ps5y64TA%2F3k%2FWM4SLBWRXx%2BwIHAl63AnRFUu5AeQBvkgMcYngsDdjLekEgiFnOucR26DNgsL3hZBpAy8deCikZqY2eQntvbDZ2alGUkL30my68Gccn4eqfDqZwDIHtdKAo4cg9uYbE1U0KodU%2F4gOAyUbY%2B7eLxl2VWRPslcE8xd6K&X-Amz-Signature=33fd41fed39737b9f50e4627e86aa7f8d20afc94b861230d4e05f09906daeaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4SWM2U%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1gNrbLYI5Q%2Bs4qt0MxLH1u1NEiSayxgzYkrsJGTXWuAiBnjgfPp0xB6iYoB6d%2FMjO%2Fz5eYFZ3mgLXqrZvv%2FtZYwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnc2BXtJDTy0GgEYBKtwDbidmL5Vai4xHWwZ2UXrm%2BMfBdZjjZ0mjhKY88RbGh5%2FusebGhO869Yus%2BHZoesCFMapM6mdL15%2FALLLx0h%2B25RBr3SXVMOGwn9YS7FetqUnru1%2BR1qGAyRfOTeeEnhWiNlJyhQ7DJThO16Bq2h9oFydLhNQ%2BsqcmbBYyTjYO8PrXoR89X1EjFM%2B%2FmmkOZYG3mfBzogz1RR4v%2FPORktyRPol2yaD%2F7toLcvB4q9JjIMAnt2FfX077Npl5j5YRAcA4DuE9q8yfKRGYMV48U01CuckJrT6KSiKnu%2BiHGPfv%2FD1lQnZBM2C9%2FMrsNrf7RsJwTsjqpu4aYVkbTSC%2FQXcqc9cFw%2FkHqh%2BQQn1%2F6JwJTHckxsR4f5WjiByB3z7njovYVJPQUCxn1iY26laaddNRdmdDHFgIZL45vkSDzRe8y7%2Bhl0pCPsBuUDH%2B5qgWsGfMzlYkk9%2B%2FM2nMiKECR3q2SJShXHoNp1SS8cTLXP38PP%2FmzywIJ1mh9A1hQ6eC1E2U8hve6Tv1rO0Y0N6qKUqVfYfvh5fD3%2FV%2FuoEjkAyL94X620czIFtf354LeCg3gCi4%2BSliK9qebzaaUftuapmXiBRZNYadW1dZeIwNMiIBtTXkhJMmvrVffnX5yf0wnN%2F2vAY6pgFSl%2Br4J0wIezLiokfw6%2FzUP2Sop%2BPat3qBG%2FpE1W%2ByhaSEG2ps5y64TA%2F3k%2FWM4SLBWRXx%2BwIHAl63AnRFUu5AeQBvkgMcYngsDdjLekEgiFnOucR26DNgsL3hZBpAy8deCikZqY2eQntvbDZ2alGUkL30my68Gccn4eqfDqZwDIHtdKAo4cg9uYbE1U0KodU%2F4gOAyUbY%2B7eLxl2VWRPslcE8xd6K&X-Amz-Signature=3248cb193d59f601f653c63cdaa8eb4cc841d38a717db417c63a995543b366d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
