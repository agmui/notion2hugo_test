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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFARG3X4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFChUfPd%2BMOTESEfUYdcx2ub3XBkkJwa0%2FlsOs9jArd3AiEA1cLKI1Y3cGJX5GZwsYAPrCeX5Pl4NhjdlZ3oVvZsTuYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq%2FN2NnsDt6wrSf5ircAwmCij%2FU3U42A6XbYEQPo9hyZjlyBkhu%2BsFTBB80EoeIFoHaLG3YMiqV8MmHatALzO3xVX0IFac0oWa2TdIcUXyk%2BCZdsr9UmQqS1ZJJS4l9%2FhKkeqaO0VwjFz7UaLWVm7pXmeSDzr1ZdygSiouoHf%2FwmRME8wz6G%2BVQ8cgbt%2BhbUBWFyGpx9uhb1zGobNpsVtHX8YBRp0zooHHwOKxx5x4qfhmrlNyFSd1PKormE%2B3KGYWw8f8qMJN2zcgoFLOkYGmf7D8y0ihTm%2Ffd6VMYEG6nI9kWWVDDQgooaJ3V79D696d24IcfWiPJVSkta2tZDCaweCw37gqDW%2FLXD9IpLIA9xiSyuWh8rv8QrwqGqxOIbSkB7KYk0eFcQyIYjnsJyiDQA5xIkTciuEL%2FDZvfqx43nSV6nN8Ww%2FZqOIM54u8m8TKi%2BiOdQTqi6s0aV9IQfwEdT5HekFswFMFB7Fv2SKiStWo9d8wCUvhIGBk0m4UtdK5%2Ff3VJ0dBz9RYYi%2BZsgjQghnuOIjHyqsgLKuqRGW5yfoqmTBcpmB1fqv4Kr1aFlOMXk7liXVjlEKP4RyI3WYy2n4PoLdfO3Me0uE3ZAYKbVGL2buZ6rghwTgYO5jUiPWt7VDd5T0m79Yk7MJbqlcMGOqUBEkxQI0T%2B2SCO0uqinz0pIlufJPcwSNqdt4FvS3f%2FP%2FBwxJem3ljny9pZ1k6TslWQPkVE4wccbWw%2BFVGEbmuJQlSyqoBAfBRld4gmQWdb50lAvV4Ww3jKOhDQvT7uoFxATHzZirOl%2F2DYOdTpY5QrtQhxtjVj8%2BVcaCAr0GR8%2BDZ7c1P0gH%2FB1oQV93O4Q4OjL3JlJhQp4JJ%2BrtUuGQxxQfO76xpV&X-Amz-Signature=a3cec405ec4cab355816c6acc751148a058d836d090663e6273d35a4e0bf2cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFARG3X4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFChUfPd%2BMOTESEfUYdcx2ub3XBkkJwa0%2FlsOs9jArd3AiEA1cLKI1Y3cGJX5GZwsYAPrCeX5Pl4NhjdlZ3oVvZsTuYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq%2FN2NnsDt6wrSf5ircAwmCij%2FU3U42A6XbYEQPo9hyZjlyBkhu%2BsFTBB80EoeIFoHaLG3YMiqV8MmHatALzO3xVX0IFac0oWa2TdIcUXyk%2BCZdsr9UmQqS1ZJJS4l9%2FhKkeqaO0VwjFz7UaLWVm7pXmeSDzr1ZdygSiouoHf%2FwmRME8wz6G%2BVQ8cgbt%2BhbUBWFyGpx9uhb1zGobNpsVtHX8YBRp0zooHHwOKxx5x4qfhmrlNyFSd1PKormE%2B3KGYWw8f8qMJN2zcgoFLOkYGmf7D8y0ihTm%2Ffd6VMYEG6nI9kWWVDDQgooaJ3V79D696d24IcfWiPJVSkta2tZDCaweCw37gqDW%2FLXD9IpLIA9xiSyuWh8rv8QrwqGqxOIbSkB7KYk0eFcQyIYjnsJyiDQA5xIkTciuEL%2FDZvfqx43nSV6nN8Ww%2FZqOIM54u8m8TKi%2BiOdQTqi6s0aV9IQfwEdT5HekFswFMFB7Fv2SKiStWo9d8wCUvhIGBk0m4UtdK5%2Ff3VJ0dBz9RYYi%2BZsgjQghnuOIjHyqsgLKuqRGW5yfoqmTBcpmB1fqv4Kr1aFlOMXk7liXVjlEKP4RyI3WYy2n4PoLdfO3Me0uE3ZAYKbVGL2buZ6rghwTgYO5jUiPWt7VDd5T0m79Yk7MJbqlcMGOqUBEkxQI0T%2B2SCO0uqinz0pIlufJPcwSNqdt4FvS3f%2FP%2FBwxJem3ljny9pZ1k6TslWQPkVE4wccbWw%2BFVGEbmuJQlSyqoBAfBRld4gmQWdb50lAvV4Ww3jKOhDQvT7uoFxATHzZirOl%2F2DYOdTpY5QrtQhxtjVj8%2BVcaCAr0GR8%2BDZ7c1P0gH%2FB1oQV93O4Q4OjL3JlJhQp4JJ%2BrtUuGQxxQfO76xpV&X-Amz-Signature=481d2698d5ea76fab91c1f43356cd8165712a950d9659b9c795f8ecc630f41e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
