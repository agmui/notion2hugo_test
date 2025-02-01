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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZKLIN3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqBm%2FMIRw0lxzKtC%2Bqy%2F2a3sF4uxGIzqsx61xstOpqFAiAQUSXFyGM143IWojTQl6v1yjJpfGRNgJiB8W6kPkLgfyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA6%2FfMDuhb6DHt0R3KtwDSrhl0ooiEAwg1duzSlGPto6HcH9gPizqApQaIPnPS%2FE5%2FY9uBqPUJBRxQOPH4nFAMkUZuDtnsH3ZyEcMeVcAU7E1g9oLH2YchSAN06HcjBvuaqBehtxuyXn1L2e14RTZL7SsZVbvbtSpA972Mj3tbVYOz60ZCbcMTNSOJyfCc2inDB1e5Rw4Yo%2B3ydO9tVOgm5mWXQE6LRWkptBzqK%2BKoBytm4eZBRVSOhDbHWzdKMhvlwK2zwt8nKC612Vb57M2Rne4VAjLr37upTp4%2Fy73vKYSJUDwFbqgDix5zef6hhWAXpLflxKytr2JbDneVbBbv90cQstc0tEHhzuc%2Fn4AsuXuGF2wPiUufQ6pHhc6L%2FxF19GUH6KzLUQmXbau5pDBrusnQfYkygSbYNxBzRONHg1IMh7YTQPApw0ZRNRvK2PMI%2B6cE5t0UdRMj1msfA%2BtzmoQo0NsErQGI4TCrvxjK9l%2BUb1nmvUOiG4WbQrNd3gz5oe2ZTgm0VxBn6BeW06vZ0za1tvtTPf9XkK%2B6FV5Iu4O3pgNp81Hl99Ngbiszws3IjqW2M2xSj2GAe7jMigqj29YO%2FAWAI916uhqODggiQAqbIdtuEwctR3%2BNyayJ5G40k2lXcTd4JxN1XYwnbL6vAY6pgEWdDpuyI9hoJMXdceRRz9MLuFFKHk6fDCKb%2BArIEz6c2tLx9OykkdNM3GiWfv2S%2F6ezTr5VxbqLDGwrV7GSgzpqY7A2wT8qOjUOzeIyaoUGqCBroevnm%2Br6J7ngTXpKHe8g6DJFojQR5XXFUwnjqSMFp59AlfO4WJ1h2BGyn52GuzhQf1nxj9%2FXwqbKHCT2cy9dFTBTDdy2fq%2BPIlsbKSeNuzR4AAQ&X-Amz-Signature=a3c2f606bde4dc3d6b42e01c763719033d25e7832e0a6f30f8f9b426b4b021b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZKLIN3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqBm%2FMIRw0lxzKtC%2Bqy%2F2a3sF4uxGIzqsx61xstOpqFAiAQUSXFyGM143IWojTQl6v1yjJpfGRNgJiB8W6kPkLgfyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA6%2FfMDuhb6DHt0R3KtwDSrhl0ooiEAwg1duzSlGPto6HcH9gPizqApQaIPnPS%2FE5%2FY9uBqPUJBRxQOPH4nFAMkUZuDtnsH3ZyEcMeVcAU7E1g9oLH2YchSAN06HcjBvuaqBehtxuyXn1L2e14RTZL7SsZVbvbtSpA972Mj3tbVYOz60ZCbcMTNSOJyfCc2inDB1e5Rw4Yo%2B3ydO9tVOgm5mWXQE6LRWkptBzqK%2BKoBytm4eZBRVSOhDbHWzdKMhvlwK2zwt8nKC612Vb57M2Rne4VAjLr37upTp4%2Fy73vKYSJUDwFbqgDix5zef6hhWAXpLflxKytr2JbDneVbBbv90cQstc0tEHhzuc%2Fn4AsuXuGF2wPiUufQ6pHhc6L%2FxF19GUH6KzLUQmXbau5pDBrusnQfYkygSbYNxBzRONHg1IMh7YTQPApw0ZRNRvK2PMI%2B6cE5t0UdRMj1msfA%2BtzmoQo0NsErQGI4TCrvxjK9l%2BUb1nmvUOiG4WbQrNd3gz5oe2ZTgm0VxBn6BeW06vZ0za1tvtTPf9XkK%2B6FV5Iu4O3pgNp81Hl99Ngbiszws3IjqW2M2xSj2GAe7jMigqj29YO%2FAWAI916uhqODggiQAqbIdtuEwctR3%2BNyayJ5G40k2lXcTd4JxN1XYwnbL6vAY6pgEWdDpuyI9hoJMXdceRRz9MLuFFKHk6fDCKb%2BArIEz6c2tLx9OykkdNM3GiWfv2S%2F6ezTr5VxbqLDGwrV7GSgzpqY7A2wT8qOjUOzeIyaoUGqCBroevnm%2Br6J7ngTXpKHe8g6DJFojQR5XXFUwnjqSMFp59AlfO4WJ1h2BGyn52GuzhQf1nxj9%2FXwqbKHCT2cy9dFTBTDdy2fq%2BPIlsbKSeNuzR4AAQ&X-Amz-Signature=f0e12237e1ef7e1aaeba25a5db7450ef2e9a933bf5fa2d925c2afcbeaf9533ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
