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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WUVNMQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWqNCWAcH%2F9xzn89bB%2FR9UETAQ5NGK3cgn9bP9VP1K9AiA7L10WKxxXPCCVt1aE35W4plrF5H4fTYWpEK8AfFUXWyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMZx0E%2Fp0Bbt9tdt2kKtwDWOHSlUu6bYtKVOG5%2BpBMMKpR1IU%2FLZINK1XJJiMFbX6GhLCs7kaBk6tf7AJvJDTavWeJnx1zHBi1odY%2BR%2BFD8QRo%2F4py%2FHYJP%2FXmSh%2BztP33jYKQ9RzK1nUPrJt3jDvrL6n1ex8Ecdu%2Ff6oZM8xWP%2B04l0WKdZIABRb3LzvcMG0yd6339RegnyOB%2BuDCAB7GtNYmzMKG0LkB%2F8RjJ7r7RWFAOxnOaQzY5sy237p4P6UnZCeLLggXoWI0lJj2zXbJVrzHhMQXd6A2jYZTG5nfAUL1sJm%2Fgp3aI%2BzQi39v18ky393Cs2Zp7omyQa4ArR%2FxyhumtNxKGS9YFhWg3XJytKWPCTSvsm6ZouCYhcQK%2Bf099oUHyoZPrOgwEmwCf0zLHCewwaJQDIA86xk4DwAlZVYtagCW%2BPmfFpB65FQ7RMOZSjaDbFvO71ajAP5bfMcVnh1oM9%2FKJ%2FyuAa0XYV60Z%2BCW%2FtWNjRbtAaYDZpRIiZVPjV4bvKnncLKCTc41rVSR%2BhuqRSoC0HpZR7dqHDsz%2BUbLalotGOj4tmwUvpVJxtQhhmEzDW%2BVHh5SozJ5WKdv4QUr%2BukVl%2BEa7kjaQrZ33lDXRZ1SErFSwvxu0JikYrfy1U8rncKsR3H%2BF48wnNL2vwY6pgFlw9SVzuPO22FQQtuDUNDrIQLIcORUch7YWzcKKhcY6uA3fOtuJ9ytkL%2BXqV9O8pBpZkX8nFeyjm4wfVKjWGHRa2VpsgglHFXapOFS8sS3WVsE8Pl9SaBlTcz5UGPIoQRkjKKlfdHHuQ2Rw76Ld0XMtXmGfx%2F7o3C3l2Miuw3u4%2BMREQxeamvawUbp3Usaquyu1oPk8fBSbD3opNFg6OIaSDD4Ww6B&X-Amz-Signature=5d60116a8d188fc414ad69556f29c5ab87048a900fa1bbd7f3bc4a6c1ab2d139&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WUVNMQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWqNCWAcH%2F9xzn89bB%2FR9UETAQ5NGK3cgn9bP9VP1K9AiA7L10WKxxXPCCVt1aE35W4plrF5H4fTYWpEK8AfFUXWyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMZx0E%2Fp0Bbt9tdt2kKtwDWOHSlUu6bYtKVOG5%2BpBMMKpR1IU%2FLZINK1XJJiMFbX6GhLCs7kaBk6tf7AJvJDTavWeJnx1zHBi1odY%2BR%2BFD8QRo%2F4py%2FHYJP%2FXmSh%2BztP33jYKQ9RzK1nUPrJt3jDvrL6n1ex8Ecdu%2Ff6oZM8xWP%2B04l0WKdZIABRb3LzvcMG0yd6339RegnyOB%2BuDCAB7GtNYmzMKG0LkB%2F8RjJ7r7RWFAOxnOaQzY5sy237p4P6UnZCeLLggXoWI0lJj2zXbJVrzHhMQXd6A2jYZTG5nfAUL1sJm%2Fgp3aI%2BzQi39v18ky393Cs2Zp7omyQa4ArR%2FxyhumtNxKGS9YFhWg3XJytKWPCTSvsm6ZouCYhcQK%2Bf099oUHyoZPrOgwEmwCf0zLHCewwaJQDIA86xk4DwAlZVYtagCW%2BPmfFpB65FQ7RMOZSjaDbFvO71ajAP5bfMcVnh1oM9%2FKJ%2FyuAa0XYV60Z%2BCW%2FtWNjRbtAaYDZpRIiZVPjV4bvKnncLKCTc41rVSR%2BhuqRSoC0HpZR7dqHDsz%2BUbLalotGOj4tmwUvpVJxtQhhmEzDW%2BVHh5SozJ5WKdv4QUr%2BukVl%2BEa7kjaQrZ33lDXRZ1SErFSwvxu0JikYrfy1U8rncKsR3H%2BF48wnNL2vwY6pgFlw9SVzuPO22FQQtuDUNDrIQLIcORUch7YWzcKKhcY6uA3fOtuJ9ytkL%2BXqV9O8pBpZkX8nFeyjm4wfVKjWGHRa2VpsgglHFXapOFS8sS3WVsE8Pl9SaBlTcz5UGPIoQRkjKKlfdHHuQ2Rw76Ld0XMtXmGfx%2F7o3C3l2Miuw3u4%2BMREQxeamvawUbp3Usaquyu1oPk8fBSbD3opNFg6OIaSDD4Ww6B&X-Amz-Signature=568da01fe45d51f39e2cab5c8b25c1f9e86aa25e129aeea7a37fd6d07a709b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
