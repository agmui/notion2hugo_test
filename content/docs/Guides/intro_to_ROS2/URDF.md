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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673N66MJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGZWXq%2B0h3RfxxIu4iVxfow%2FRreqs0Qo6sML4RwAVE0bAiEAz%2BlJ5INoKWaqoV1zW3HBh8IGiRiXu2i%2BTK%2BLE0jx5PAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNdxmxy5Gk3BS9GGAyrcA0qUTWVgvpnhnMLMxU3pKWpzDobYXcknySOIuvHLG2QD2fvk8Gzxlp289b5nZq759T1BLnODfCohGmrXcpoGDCaU7RE0QsW%2BqxmlmogrXdxzjwu0%2BuzFT73nwZn%2B0G6acungAoutv8NJDQamXnJ5UjfBq9Q07EXAQA7mYTCkOrhY8hCHggkeOK4%2FBwe%2Fv2n%2F9gYAOUjuaPLKGnncTHTBAryxiOOEnVSbPsyROZPu3%2Fch7UsE%2BgzS%2ByE1RZwmNvjpv4HTCS5ojVu%2BDa3sF0yKCFUgTH%2FFPJ0DiY0ijo8g239%2FOaow6C84bIjVAlPTZ6cH%2Bug41Tciu6vPgVGrcNfdRysAP20%2FNz7BdrvQeHMHqfZA6Up6RDEpWmzpNncJqNI%2Fqgm%2FBPkp0BOzeZya%2B5o7%2FHVKRID38J0njk4FcjnFVZ65CRQPEU6FW2x5XSiX4ESDldixr0D61vRGW8mCq1qCkiESRa%2F2c%2FHyDOcxDrxygr2K1RJhWNzVMtw%2Bg3jm6bDViTewA0IQgyCaoRwJF5Wutqs%2BzDyRI9JsXtJ9ASIw39gjDAsfEkQMhR2B0Hyumiw1Rir2KXVhfe68dJ9%2B3mZfF9EzoFEpV8bCwCJvw2n6fr80FIqWqnvYLYbpHQLNMJPd3MMGOqUB3NglIRLuWsEe%2BEgWmZcPU8jT35FsjJUMBMa1ASkynyQNkeKuw9xZU4NomSY9a8dp82%2FDeuuBjHTLS8c02oHOigfPpVyd%2Bx2rT%2BZjM6NK7KElMMpXgJwakddhPk%2FzqiSfC8ZS7tot4zgojznBCRQgF0K9Ou2p0E9L4A3uCA8WDf0mgaRb8gMcI1WHxKFm3hXGq11noWpNeqFOG%2BadPvazXvtTcbNW&X-Amz-Signature=809c4999b04d348e7e327b80d0c32b5f71f7dce70ff0506cb9e0f7e2ff5da3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673N66MJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGZWXq%2B0h3RfxxIu4iVxfow%2FRreqs0Qo6sML4RwAVE0bAiEAz%2BlJ5INoKWaqoV1zW3HBh8IGiRiXu2i%2BTK%2BLE0jx5PAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNdxmxy5Gk3BS9GGAyrcA0qUTWVgvpnhnMLMxU3pKWpzDobYXcknySOIuvHLG2QD2fvk8Gzxlp289b5nZq759T1BLnODfCohGmrXcpoGDCaU7RE0QsW%2BqxmlmogrXdxzjwu0%2BuzFT73nwZn%2B0G6acungAoutv8NJDQamXnJ5UjfBq9Q07EXAQA7mYTCkOrhY8hCHggkeOK4%2FBwe%2Fv2n%2F9gYAOUjuaPLKGnncTHTBAryxiOOEnVSbPsyROZPu3%2Fch7UsE%2BgzS%2ByE1RZwmNvjpv4HTCS5ojVu%2BDa3sF0yKCFUgTH%2FFPJ0DiY0ijo8g239%2FOaow6C84bIjVAlPTZ6cH%2Bug41Tciu6vPgVGrcNfdRysAP20%2FNz7BdrvQeHMHqfZA6Up6RDEpWmzpNncJqNI%2Fqgm%2FBPkp0BOzeZya%2B5o7%2FHVKRID38J0njk4FcjnFVZ65CRQPEU6FW2x5XSiX4ESDldixr0D61vRGW8mCq1qCkiESRa%2F2c%2FHyDOcxDrxygr2K1RJhWNzVMtw%2Bg3jm6bDViTewA0IQgyCaoRwJF5Wutqs%2BzDyRI9JsXtJ9ASIw39gjDAsfEkQMhR2B0Hyumiw1Rir2KXVhfe68dJ9%2B3mZfF9EzoFEpV8bCwCJvw2n6fr80FIqWqnvYLYbpHQLNMJPd3MMGOqUB3NglIRLuWsEe%2BEgWmZcPU8jT35FsjJUMBMa1ASkynyQNkeKuw9xZU4NomSY9a8dp82%2FDeuuBjHTLS8c02oHOigfPpVyd%2Bx2rT%2BZjM6NK7KElMMpXgJwakddhPk%2FzqiSfC8ZS7tot4zgojznBCRQgF0K9Ou2p0E9L4A3uCA8WDf0mgaRb8gMcI1WHxKFm3hXGq11noWpNeqFOG%2BadPvazXvtTcbNW&X-Amz-Signature=ad4a1b7fe197034215d0bfcd02ad3de334578ce5104c0627dfa02523e49ac037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
