---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AGHZB4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUcy6GKeI0ss5gFbM7RrynSRT9OQBgiRwekEbFxW%2BPwIgEyxxYZ1b2M9xEXFHyWJB8paTvM24yd0bGwP9OYLiOOIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDB5mLijPRRwv6xAi6yrcAxLbGwtW%2FXLr9u93Wj%2FDb0FjdSn99wU6OVVcqG672I6Q%2F8Q3O16sQes5JMMDd9h1iBi8uPFiuHphlsZebwMnNTTSkXpw6QRsoWUK%2Fdd0Z7ESEA0Tz%2FPo1%2B0B7b%2FzEyI%2BSBDVJk6tAI0hxyRxoGZDNcNqWbyDt14rqeuElFioFfRe5f6hw9LYvq4%2FTr6aq4hJjB6rCkhtFSrgkRVSnpJ5I2X7VyJ7oUht%2FNjjTRkaXWChGxe37CyqTFhy0x2imsjZwENp4%2BtGigICiWfQuHn%2FcB7blzFSa2GhME%2BeSUCmWEMwGTjcmT4UjvYW9daMzo3TA6zq4SM6GVTEQedi7%2Fzy%2BvZ35XS0%2BV%2F3D2DZAWWjF2IPJJQM3wtVCWiIp526YXvjiR8ndX6VZ7W8Ojwh6KibbVIRGDdA5oSgVOKvhbj9F%2F9JJ0ZmZQsz5qjovTiqUDzT8tfeTdJU4X%2FLowLnMAkOGkEivpMU5X%2F%2BOL5uIgt9UH%2B7ir47Ivvl7wKVD6Fk8PQkfyziW7KHJF%2BJYsTNJTl6aWS7x8YsnF4uM%2BCHLIIhTbIisdNGW0Eh5AIikaKgRlNga26teJMWJ%2F5AtblcomzKKSh1w68vfp%2BMJjeVy7xEieAXIjDZb4UF8QhWNVE%2BMI6g88QGOqUBsNZd0%2BaWOZ2MSr9hmKcEbfFlvzqVbHjbk9xSW3pEmWzE%2FJKqlhl0FCmNRs3fsQS8xcV2d0YzxBU9EbLL3iQ07S0y04ATzE%2FGENbtp2nsOa8ZWyhpS06IK0XqqoiDG3%2BfKTSx7m9cHoxR3Jlw8T1XakcwFZMfz1VJkP6GWaPeYvZ61IqBots36Luw%2FnUAt7OwZNVfNB2S4DOy8N7AMXfspO3f4Ay4&X-Amz-Signature=58c629ef74a45f2f92c73d1564d4bfad82e2281d6dc3d158d7961a1f0c63516d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AGHZB4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUcy6GKeI0ss5gFbM7RrynSRT9OQBgiRwekEbFxW%2BPwIgEyxxYZ1b2M9xEXFHyWJB8paTvM24yd0bGwP9OYLiOOIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDB5mLijPRRwv6xAi6yrcAxLbGwtW%2FXLr9u93Wj%2FDb0FjdSn99wU6OVVcqG672I6Q%2F8Q3O16sQes5JMMDd9h1iBi8uPFiuHphlsZebwMnNTTSkXpw6QRsoWUK%2Fdd0Z7ESEA0Tz%2FPo1%2B0B7b%2FzEyI%2BSBDVJk6tAI0hxyRxoGZDNcNqWbyDt14rqeuElFioFfRe5f6hw9LYvq4%2FTr6aq4hJjB6rCkhtFSrgkRVSnpJ5I2X7VyJ7oUht%2FNjjTRkaXWChGxe37CyqTFhy0x2imsjZwENp4%2BtGigICiWfQuHn%2FcB7blzFSa2GhME%2BeSUCmWEMwGTjcmT4UjvYW9daMzo3TA6zq4SM6GVTEQedi7%2Fzy%2BvZ35XS0%2BV%2F3D2DZAWWjF2IPJJQM3wtVCWiIp526YXvjiR8ndX6VZ7W8Ojwh6KibbVIRGDdA5oSgVOKvhbj9F%2F9JJ0ZmZQsz5qjovTiqUDzT8tfeTdJU4X%2FLowLnMAkOGkEivpMU5X%2F%2BOL5uIgt9UH%2B7ir47Ivvl7wKVD6Fk8PQkfyziW7KHJF%2BJYsTNJTl6aWS7x8YsnF4uM%2BCHLIIhTbIisdNGW0Eh5AIikaKgRlNga26teJMWJ%2F5AtblcomzKKSh1w68vfp%2BMJjeVy7xEieAXIjDZb4UF8QhWNVE%2BMI6g88QGOqUBsNZd0%2BaWOZ2MSr9hmKcEbfFlvzqVbHjbk9xSW3pEmWzE%2FJKqlhl0FCmNRs3fsQS8xcV2d0YzxBU9EbLL3iQ07S0y04ATzE%2FGENbtp2nsOa8ZWyhpS06IK0XqqoiDG3%2BfKTSx7m9cHoxR3Jlw8T1XakcwFZMfz1VJkP6GWaPeYvZ61IqBots36Luw%2FnUAt7OwZNVfNB2S4DOy8N7AMXfspO3f4Ay4&X-Amz-Signature=068bd7448cf062a0219a426b4e2c507a9b6da893d85fd457ef03f67bfbcfd568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
