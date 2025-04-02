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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAXJQRQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA4lgsTMuXwGJasJ2JF0oMQi92LhjAJNCmmyJ73i%2FGR8AiEAlk70Z%2FXG2GmdR%2FS0GR4sC0d5mJcwro99W4nqQ91W2iMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJVXrMeLbwkZ4Y5xCrcAyCwy5IiIG%2B8ysX48muQ%2FjBnK8rHUubZp5twnBQrrSVA1mhYA8gQUsndhyrCT0AlRTY5dOgDpq0P0eryi%2BeoQPXFQ29olXiwGxmmowM2mQcC7tCVwFuwTWEoY8oc%2Fvzuww0EnH%2BCOVy1pIWVB8PvFKM3I21cIGvkRwwdfSvk5BL5rhBR0EcV12QMfSefaOYyP1hNSCFmxXFWPAGMXZW8JjBgPLNHEyX02rhFwRZkA8hSuWN%2FMnYM%2BDqZYMJV19VQvmINAP1PQPy%2F%2F59dBLbr2bimPQMnZCA9LXXWR8%2Bi%2B5FHUMF6OE6wY%2F7pdQ6kizF%2Bcs5dZxccGkMtm8NQE5%2FZOLWFx4crECrMvQD4Fr8NgtBPX4dVMbL2lIdh4U2oi0by%2FYxWESZJ10rd%2BJxYZ6CVJHdJ7IiZErZte3lhmvqBt6xCVaujEE42723b7Yf5R%2FYGlGKrG6Gw92p97lty2p2fty6H%2B6%2BTKeBbCO0tNku3FAtIUBc0oUvTlP9R9ZzTE0bTcST2mdXnTrrRIwK0sjXbF3sFT6YexHMJq0g5oabmiIrJjpesTuuy89Z6NVep%2FakHx5v%2F1uyDz1ZCbvwPEjw8SEFiiCl6zcXVE%2B7jsAnQtiw%2B12LKrua8%2FvjIBh1bMMf6tL8GOqUBwUB5UYZb7RFasJhYiWhYb%2BjcGAYjB%2BdOvtL9pry1vxMnSkvinTr7RzhpcymIJbWNDEblcb4zwoC%2FPTNkblp8jTZFiItps%2BfmPbTOAlMxeUWrGWcR1OE80qIDOoMT9INAwyO6wMrJ1VaywKXXoIRVjS%2Bl0jpuIlYb1WFFKqQFXNTcnPR%2Fu%2BX3VNEcHnbiFbGp%2FjmnV%2BmAA%2FHLdmxsB5B8wGEpKU6A&X-Amz-Signature=9be8d01f456dad5a83ec55cc937cd35419f95c64c7f575b17272ebd57601aae2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAXJQRQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA4lgsTMuXwGJasJ2JF0oMQi92LhjAJNCmmyJ73i%2FGR8AiEAlk70Z%2FXG2GmdR%2FS0GR4sC0d5mJcwro99W4nqQ91W2iMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJVXrMeLbwkZ4Y5xCrcAyCwy5IiIG%2B8ysX48muQ%2FjBnK8rHUubZp5twnBQrrSVA1mhYA8gQUsndhyrCT0AlRTY5dOgDpq0P0eryi%2BeoQPXFQ29olXiwGxmmowM2mQcC7tCVwFuwTWEoY8oc%2Fvzuww0EnH%2BCOVy1pIWVB8PvFKM3I21cIGvkRwwdfSvk5BL5rhBR0EcV12QMfSefaOYyP1hNSCFmxXFWPAGMXZW8JjBgPLNHEyX02rhFwRZkA8hSuWN%2FMnYM%2BDqZYMJV19VQvmINAP1PQPy%2F%2F59dBLbr2bimPQMnZCA9LXXWR8%2Bi%2B5FHUMF6OE6wY%2F7pdQ6kizF%2Bcs5dZxccGkMtm8NQE5%2FZOLWFx4crECrMvQD4Fr8NgtBPX4dVMbL2lIdh4U2oi0by%2FYxWESZJ10rd%2BJxYZ6CVJHdJ7IiZErZte3lhmvqBt6xCVaujEE42723b7Yf5R%2FYGlGKrG6Gw92p97lty2p2fty6H%2B6%2BTKeBbCO0tNku3FAtIUBc0oUvTlP9R9ZzTE0bTcST2mdXnTrrRIwK0sjXbF3sFT6YexHMJq0g5oabmiIrJjpesTuuy89Z6NVep%2FakHx5v%2F1uyDz1ZCbvwPEjw8SEFiiCl6zcXVE%2B7jsAnQtiw%2B12LKrua8%2FvjIBh1bMMf6tL8GOqUBwUB5UYZb7RFasJhYiWhYb%2BjcGAYjB%2BdOvtL9pry1vxMnSkvinTr7RzhpcymIJbWNDEblcb4zwoC%2FPTNkblp8jTZFiItps%2BfmPbTOAlMxeUWrGWcR1OE80qIDOoMT9INAwyO6wMrJ1VaywKXXoIRVjS%2Bl0jpuIlYb1WFFKqQFXNTcnPR%2Fu%2BX3VNEcHnbiFbGp%2FjmnV%2BmAA%2FHLdmxsB5B8wGEpKU6A&X-Amz-Signature=d214e084caf06a10e919729468e387a512a72fcbfd347106c05267a61a22a96b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
