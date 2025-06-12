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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6S6GTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BK3lrhtH81KRxn%2BArbHWN6JZkiXSMivvhoBsAWtMLGAIgJpOXmgaDmVVz23y3Fbklv4PrHRq5Gw2opkzLUHPhgFwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9v3BA9%2F0TEOKVtircA%2F%2Fk0FSk2ay0RQrZgJYOoQqHgcZNPM4YNrwDQEHcKQ20jRksMXCHrGEwGSffgJof%2B%2FZe50oaab0w5xM9QFeq2f2CWcT9TTQHOw%2Ff3mN2kxUR28pMh%2BH%2FQPUt69L4odZFrs%2ByKuPTs7b7VJntjcG2A8KSZheSMqEcpmQlLFfK4%2F8P9QtCemRReef1RrwX3w%2BaXStstcBJD5ls1FSIW%2BrGWIvqBziRU%2FabBQWIZrISiPHHATE9CbCcgJRISd%2FWIpnhUPQwXJ565f%2Fl5mOsbrp6oIQZ0vyssozUrDSBmgWN8nckESQAeYv2cEumxahD%2FnWYIU2Vvh3tI2a9WwkuWmy0uKyTNU%2FnzyF25%2Fykm8nYniTJ4V5qvuI1ZraUot9NwLxXVr%2FxsJF0gSK1nuLtDkCXFnuK4e5%2B8i2e5C6T3LOEN%2Fc1vzmlCvy%2B56NiETLv6N%2F8QPIBXB6dpwX2yhq5tKNH3UM7uFCHoqyQbqsjXIug%2Fkgk9AJ6M6z8NxY8ehDZj4%2BvF19pOrNDUS3OPSqNCOtWuX4LZrHVNZ3SLS02Bo%2FSxDWwaCx0OF4iXuSfQgdpeAJflZsTAVZkQH3L5d%2FXqDGdHPgksOTzjBZ0Mm8gUYNEXXhWGeUCeJ9wqquqoZFGMLmIqsIGOqUBoVnB8jLA1lVPqTDFqOMOV2S93oqcf935VGLy0kbIFGiWJPD7PNONneVsQDnjRFbVZ65Q7qLzMVkxaLr%2Ftm%2FEJNAKOaoXQBUMmozjPZYKVHxJkc8peVYWRuJry8lm91%2B8UHAJOHhHp8XDQg61q71kz44%2Bx8oM84nkbvZ7MCAVC4os2qC9082%2FHDMXjDYK5PvbOA%2BnDO%2FIBvjpGGlzmztc5N3vdN8y&X-Amz-Signature=bf9730f0f840ce8d3ef95334470f4d7dd4003a5de77aeb4ed5633377acdb454b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6S6GTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BK3lrhtH81KRxn%2BArbHWN6JZkiXSMivvhoBsAWtMLGAIgJpOXmgaDmVVz23y3Fbklv4PrHRq5Gw2opkzLUHPhgFwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9v3BA9%2F0TEOKVtircA%2F%2Fk0FSk2ay0RQrZgJYOoQqHgcZNPM4YNrwDQEHcKQ20jRksMXCHrGEwGSffgJof%2B%2FZe50oaab0w5xM9QFeq2f2CWcT9TTQHOw%2Ff3mN2kxUR28pMh%2BH%2FQPUt69L4odZFrs%2ByKuPTs7b7VJntjcG2A8KSZheSMqEcpmQlLFfK4%2F8P9QtCemRReef1RrwX3w%2BaXStstcBJD5ls1FSIW%2BrGWIvqBziRU%2FabBQWIZrISiPHHATE9CbCcgJRISd%2FWIpnhUPQwXJ565f%2Fl5mOsbrp6oIQZ0vyssozUrDSBmgWN8nckESQAeYv2cEumxahD%2FnWYIU2Vvh3tI2a9WwkuWmy0uKyTNU%2FnzyF25%2Fykm8nYniTJ4V5qvuI1ZraUot9NwLxXVr%2FxsJF0gSK1nuLtDkCXFnuK4e5%2B8i2e5C6T3LOEN%2Fc1vzmlCvy%2B56NiETLv6N%2F8QPIBXB6dpwX2yhq5tKNH3UM7uFCHoqyQbqsjXIug%2Fkgk9AJ6M6z8NxY8ehDZj4%2BvF19pOrNDUS3OPSqNCOtWuX4LZrHVNZ3SLS02Bo%2FSxDWwaCx0OF4iXuSfQgdpeAJflZsTAVZkQH3L5d%2FXqDGdHPgksOTzjBZ0Mm8gUYNEXXhWGeUCeJ9wqquqoZFGMLmIqsIGOqUBoVnB8jLA1lVPqTDFqOMOV2S93oqcf935VGLy0kbIFGiWJPD7PNONneVsQDnjRFbVZ65Q7qLzMVkxaLr%2Ftm%2FEJNAKOaoXQBUMmozjPZYKVHxJkc8peVYWRuJry8lm91%2B8UHAJOHhHp8XDQg61q71kz44%2Bx8oM84nkbvZ7MCAVC4os2qC9082%2FHDMXjDYK5PvbOA%2BnDO%2FIBvjpGGlzmztc5N3vdN8y&X-Amz-Signature=e33fc70388e0490bac4ed4c06ba4ad4eea9dc4992d0131ebeaf0e908554436da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
