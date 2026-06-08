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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK2B66Y%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2%2BQ8d9u2zsaW%2FrDB9s9RUwaNCSHy4q5rx5LgIAvOUKAiBO2ilUqjg4Qt%2BeZwAWVmT4yo4UwhTIrq7ae7WirqAZwyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BDTFfS5%2FazPpw5bKtwD3FaRw0R6mZfnHmwEeLQctZ1X%2Fr%2Fpn9lcoCt2ArfcpD%2FECsJyT70bS7dh8PemSHmj%2BTu%2FOGtYN9SZaZ84Zu6wg4Ppzz1mG5yS4vkpBtZgWCoOssm7lDbHlRpWTie0KlzFoeC3wkJ2ZJN4b0OyivvWZKoSRVQi5NKGamD7WVIBRgrndkbaLlToFImg2SQtKXxXvhRKkWrF7jE1j%2BjWEX6%2Bwv66zi%2Bi%2BY%2BOymhGMB9dDmqaG8uJ6YIn4uJw8dMZclmb48WVfhC8JCCDodSJeb6yvXDDmZuYGvQi%2BV5o54tEij9hXJ%2BZ4AlYZ0L2r7FPjQ9utTsLqdtWarxqbVxAPbk0pFS7JSggxPt%2FdjuUH6W7w3oddwp5tX%2F1R27At3aGPDHJT0S%2FXnTwJfq0SGXi0CF5iIXa3Um1U%2FUPcYrzjDWTLnIyES%2BXu47TGyuDW36YM5%2FcZ4VwgeWEJqzdI%2BAAsbsem3FxnHqWqRz554ESISwvuNDSKnWyRW7Xgz5Zu1LDblVO6CbI6d1JxzYDY7i0oOhV6vmMjaQ3AwdOgmbnKv%2Bm4wWqZpt30fNSaDMKlQ3h%2B%2FUylxTE4WHrab1Ob6ddyDeumTOzn%2FXtWjgEJ%2B5kbGNI0moeBFqu3Z9f1EXTha8wh8CY0QY6pgGpNO0nTNztaGaT%2BEdmmRkqwZKYDcnPfrCXMnt4X4NZQ1s%2F3E8oEgae1rzpVwqbRB9edtxtwegiXllt52LS%2FQ9GFbSuX6AUib%2FCoQTp90wBsQJqFtAqPSf%2F5%2BAuuN%2Fk%2FrKgPhHMl156E4zhfN5TLflWAo%2B%2FjWr77HkZkpw3pxcfqkDgLVmen7y%2BNO5UF9jtEGavKVQ5PHMLZyC0hPGlHsS19bFDzkFZ&X-Amz-Signature=0eafde61e2ea55e7ec7594d1a168af8438d086f849bd13ac7580f7854c3a6025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK2B66Y%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2%2BQ8d9u2zsaW%2FrDB9s9RUwaNCSHy4q5rx5LgIAvOUKAiBO2ilUqjg4Qt%2BeZwAWVmT4yo4UwhTIrq7ae7WirqAZwyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BDTFfS5%2FazPpw5bKtwD3FaRw0R6mZfnHmwEeLQctZ1X%2Fr%2Fpn9lcoCt2ArfcpD%2FECsJyT70bS7dh8PemSHmj%2BTu%2FOGtYN9SZaZ84Zu6wg4Ppzz1mG5yS4vkpBtZgWCoOssm7lDbHlRpWTie0KlzFoeC3wkJ2ZJN4b0OyivvWZKoSRVQi5NKGamD7WVIBRgrndkbaLlToFImg2SQtKXxXvhRKkWrF7jE1j%2BjWEX6%2Bwv66zi%2Bi%2BY%2BOymhGMB9dDmqaG8uJ6YIn4uJw8dMZclmb48WVfhC8JCCDodSJeb6yvXDDmZuYGvQi%2BV5o54tEij9hXJ%2BZ4AlYZ0L2r7FPjQ9utTsLqdtWarxqbVxAPbk0pFS7JSggxPt%2FdjuUH6W7w3oddwp5tX%2F1R27At3aGPDHJT0S%2FXnTwJfq0SGXi0CF5iIXa3Um1U%2FUPcYrzjDWTLnIyES%2BXu47TGyuDW36YM5%2FcZ4VwgeWEJqzdI%2BAAsbsem3FxnHqWqRz554ESISwvuNDSKnWyRW7Xgz5Zu1LDblVO6CbI6d1JxzYDY7i0oOhV6vmMjaQ3AwdOgmbnKv%2Bm4wWqZpt30fNSaDMKlQ3h%2B%2FUylxTE4WHrab1Ob6ddyDeumTOzn%2FXtWjgEJ%2B5kbGNI0moeBFqu3Z9f1EXTha8wh8CY0QY6pgGpNO0nTNztaGaT%2BEdmmRkqwZKYDcnPfrCXMnt4X4NZQ1s%2F3E8oEgae1rzpVwqbRB9edtxtwegiXllt52LS%2FQ9GFbSuX6AUib%2FCoQTp90wBsQJqFtAqPSf%2F5%2BAuuN%2Fk%2FrKgPhHMl156E4zhfN5TLflWAo%2B%2FjWr77HkZkpw3pxcfqkDgLVmen7y%2BNO5UF9jtEGavKVQ5PHMLZyC0hPGlHsS19bFDzkFZ&X-Amz-Signature=38f99a90a5a5726ec8ce0962892aaad2537da9d4d5fe944b0a27abdf18afa068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
