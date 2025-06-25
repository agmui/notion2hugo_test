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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZAQPX7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD3shi9NRyoE6suPJwpdvY0mUR%2BRkEhiF7iV8ny5GyaWAIgNCHCbDaI%2F%2BTjwjvLFdSr93CBKGlklsh2KyTxxyiQ%2FN0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKvkBtNxEy08WfaMHircA3fHJVxQYX3v9aXPytiLBq9aAC4aS10SXK9s09PjPDb5H6pSe3wQWFYYC6suIF6RX0I%2F1N0ya9uW%2BbhW7ysh3hJiOZ4bFwoFk1fkDptRoIP1ywhu0Dikl8JBj%2Fddd%2Fm5xrz8Nz8mWyw8hs9mu5qDbC1%2B8EeohpqALWqBaCQFJzhadlcbk3YZhPw4lEXUxBD9rJAc6wiFI6bHEDVN7qJ3lC2ZRiPZgCL7XY0Z7hnVwzF1iC6p9whYtorASDcYszoWNEBXpDalQDymKVeVPSTJz62QV%2BBp3XEviadilWBWoX%2FFSCoegy7gT6Ed4F%2BluiUn%2FCNdu7yOBDeke7fiSinYDGYdTe4vXob6qTMxTsYtpqVgZCtv7Z6SxDWtNfAs5am%2BzO%2F%2FnCtnmGIsaYc9HUhLovjOPXTrpboJrAbLgOniXPYLLod2rE9zTLDI3QyM4GNem1ij0qIoHSHaWc26Ds0N5uoLe8o%2Fp3kopODga3m049GXDCT5GOZcwpqg5RZNV8mgnlclupD2sf%2FoUdUw8sUcDBIpHAno7l7AFLsB04iyPVxlKb5R7xaU9h%2FNLZz2ctSWQDSYswH0j7RqjKcKNFru%2BzlGZ8jiJIuGlJDXqsfM6XDa3dD2j92Tb%2FWJJzzgMIPh8MIGOqUBsbE54vP6lqrSjZhCNYvMV3bQY5CO%2FyhQ7qlpyd4y9ThO3WGU3kpST85f9WgqfeG5XB4JmoSBECYe%2BhNjvKIrxbaqU%2F5Zc%2FlaLUeka9XU96jcHTppp0Mxy5fEL58HX3FUM2ZQBDy5YMFRWNKwJe57GdHffGM0f2ohU0Ch37TdfJlK0eM%2Fp8n4PQkjDB08Gr2pqIEZmp6YiXQ9L4U6omE74f1DbKLY&X-Amz-Signature=509c6c5e06e9495d6493ccc16053b225144ba1acafebe7e15ddefd2d50252065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZAQPX7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD3shi9NRyoE6suPJwpdvY0mUR%2BRkEhiF7iV8ny5GyaWAIgNCHCbDaI%2F%2BTjwjvLFdSr93CBKGlklsh2KyTxxyiQ%2FN0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKvkBtNxEy08WfaMHircA3fHJVxQYX3v9aXPytiLBq9aAC4aS10SXK9s09PjPDb5H6pSe3wQWFYYC6suIF6RX0I%2F1N0ya9uW%2BbhW7ysh3hJiOZ4bFwoFk1fkDptRoIP1ywhu0Dikl8JBj%2Fddd%2Fm5xrz8Nz8mWyw8hs9mu5qDbC1%2B8EeohpqALWqBaCQFJzhadlcbk3YZhPw4lEXUxBD9rJAc6wiFI6bHEDVN7qJ3lC2ZRiPZgCL7XY0Z7hnVwzF1iC6p9whYtorASDcYszoWNEBXpDalQDymKVeVPSTJz62QV%2BBp3XEviadilWBWoX%2FFSCoegy7gT6Ed4F%2BluiUn%2FCNdu7yOBDeke7fiSinYDGYdTe4vXob6qTMxTsYtpqVgZCtv7Z6SxDWtNfAs5am%2BzO%2F%2FnCtnmGIsaYc9HUhLovjOPXTrpboJrAbLgOniXPYLLod2rE9zTLDI3QyM4GNem1ij0qIoHSHaWc26Ds0N5uoLe8o%2Fp3kopODga3m049GXDCT5GOZcwpqg5RZNV8mgnlclupD2sf%2FoUdUw8sUcDBIpHAno7l7AFLsB04iyPVxlKb5R7xaU9h%2FNLZz2ctSWQDSYswH0j7RqjKcKNFru%2BzlGZ8jiJIuGlJDXqsfM6XDa3dD2j92Tb%2FWJJzzgMIPh8MIGOqUBsbE54vP6lqrSjZhCNYvMV3bQY5CO%2FyhQ7qlpyd4y9ThO3WGU3kpST85f9WgqfeG5XB4JmoSBECYe%2BhNjvKIrxbaqU%2F5Zc%2FlaLUeka9XU96jcHTppp0Mxy5fEL58HX3FUM2ZQBDy5YMFRWNKwJe57GdHffGM0f2ohU0Ch37TdfJlK0eM%2Fp8n4PQkjDB08Gr2pqIEZmp6YiXQ9L4U6omE74f1DbKLY&X-Amz-Signature=f89974a107e2f20b26902aed309d2761c972651f5098e2f1358ca3c15e110200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
