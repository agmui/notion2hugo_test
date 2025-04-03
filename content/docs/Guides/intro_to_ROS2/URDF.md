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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2N5QBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxzCOTggiV3V2huWFfKyVIvXed1BvOjM%2BGHiYbaxU5pAiAMZb55bFIzCdEY754H5ySeWbhOeI6Mc2FP0AqgzyiWdiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvJyWrUtfm7udmH3KtwDnU0IyjXV4iL4qXzjksl9fQB9w5W%2BOcS7AHsNj0%2B3zyRDGlCQ6hvMklQk896ioS8nKlc0yzBiyy3bUz88BX0Mr0FukVrsox%2FQCZB%2BkNrONpeCv2ZiuSCptK%2BPwhPFM1R5jLhyIjfcgwBdogoA9GVs6kL%2BKgYBjFV53G8NHyMNOpi0WbddPkqXTfyqd01YQr0JgQ6zfSXhpDMMf20q5v%2FAMYoRvqoOM5JWAvqN6T2f1pWGIv129Qv6QFTLXGFNB7S3JShu6FJZIt54lFFsUoT%2F%2FddP76PchUsrrFA%2FCdwH0o7vMy8bR4DN6%2BrFCP%2FLtwW18mR4enMumF7qgtMJwI3NWRfDTp8ofwfNZOkDh4RGH6s4otmzsM%2BtKX2scLYmnWwKrvEt6sMlveP9FfK6WVdAtHZKg9ymFQUt502LXPfvfGV3X3iwEMANZYB21s%2BRaLNGyEquPUj6w3%2B5IGAKd20CI2IfB46LuKQltvGYdIQh3pwn9Z3oNtqxHDkMBLaz8ukYLrY9JWRwCu13qKpfsSdbJIzzbDtUpttN390rMnkubrIR7P9E4VeNqaTreL%2Bgkkp6YxLwrvBqnepzRQ03JkaO6Tjttjer6L8w9hYKV5%2FNMrZuQA8h%2BQOPkfHXII4w9%2Bq7vwY6pgHLwJ7aMC4yLx4TDwalGZuuhxeapz4Ip0xG6LnYrx6qDpQavi6a%2BqE6NSmS7%2Bj5K2lwQwOp9mGA836pcaxiWLgS%2FDkDo%2FwwB%2BOv3h2SpQqom4yqBicL7T26f1xFIhtgzwh3dLtLWULF9rWbSS8T%2FjGCbXxL1lAp%2FnxjGwqDFEh5%2Fwvpswf%2FJlRAMHEeGrHKa5xshbRFjrIjHe5WB%2B8svaNLT3G21upb&X-Amz-Signature=221f1e78815ede10223f5004411c8135f20f38baba624da57d7aad45e70d1389&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2N5QBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxzCOTggiV3V2huWFfKyVIvXed1BvOjM%2BGHiYbaxU5pAiAMZb55bFIzCdEY754H5ySeWbhOeI6Mc2FP0AqgzyiWdiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvJyWrUtfm7udmH3KtwDnU0IyjXV4iL4qXzjksl9fQB9w5W%2BOcS7AHsNj0%2B3zyRDGlCQ6hvMklQk896ioS8nKlc0yzBiyy3bUz88BX0Mr0FukVrsox%2FQCZB%2BkNrONpeCv2ZiuSCptK%2BPwhPFM1R5jLhyIjfcgwBdogoA9GVs6kL%2BKgYBjFV53G8NHyMNOpi0WbddPkqXTfyqd01YQr0JgQ6zfSXhpDMMf20q5v%2FAMYoRvqoOM5JWAvqN6T2f1pWGIv129Qv6QFTLXGFNB7S3JShu6FJZIt54lFFsUoT%2F%2FddP76PchUsrrFA%2FCdwH0o7vMy8bR4DN6%2BrFCP%2FLtwW18mR4enMumF7qgtMJwI3NWRfDTp8ofwfNZOkDh4RGH6s4otmzsM%2BtKX2scLYmnWwKrvEt6sMlveP9FfK6WVdAtHZKg9ymFQUt502LXPfvfGV3X3iwEMANZYB21s%2BRaLNGyEquPUj6w3%2B5IGAKd20CI2IfB46LuKQltvGYdIQh3pwn9Z3oNtqxHDkMBLaz8ukYLrY9JWRwCu13qKpfsSdbJIzzbDtUpttN390rMnkubrIR7P9E4VeNqaTreL%2Bgkkp6YxLwrvBqnepzRQ03JkaO6Tjttjer6L8w9hYKV5%2FNMrZuQA8h%2BQOPkfHXII4w9%2Bq7vwY6pgHLwJ7aMC4yLx4TDwalGZuuhxeapz4Ip0xG6LnYrx6qDpQavi6a%2BqE6NSmS7%2Bj5K2lwQwOp9mGA836pcaxiWLgS%2FDkDo%2FwwB%2BOv3h2SpQqom4yqBicL7T26f1xFIhtgzwh3dLtLWULF9rWbSS8T%2FjGCbXxL1lAp%2FnxjGwqDFEh5%2Fwvpswf%2FJlRAMHEeGrHKa5xshbRFjrIjHe5WB%2B8svaNLT3G21upb&X-Amz-Signature=011da8ca35cf49963c786373d3f127be113a7ea530628b4f883c8d477b06a290&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
