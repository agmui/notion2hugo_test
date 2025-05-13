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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5IJDYQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBu1NVg6Uy6LUKCZfhoExvEmXhzTDJkvm8doW0WTacqeAiASBc4E0ofs18gHnl44Jn3VUIAOEj62eA%2BAPMy0OOz4YSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7%2BtTYWq2XBmXw1VKtwDD%2FJpU6BE9sILeB9SU9KRHpy6GjCN5lnN4h3aImVlGCM8TE1BTxd92xrv54CiPhWDtTdCBpkZtjKfqSOb2AvA8AfglBHrP9n4J4oPEeDDyiN6lzC%2FQddJadBZJMQn2cAHx7sdc36Ff1oes%2F%2BmWjO1LXvIXzuVTkZ5n%2Bq0na3PTgKj%2FXnBRaIuOtkbpg0o4uERYE6IKlMHm8ULMfoookvxGqh2iQNPZXhEqjrQWjv1iy4UwhSuLJ9cyiiGtiHNKY6cW1IGGkblWkEXkSFgSBCH6QnDKCyv9%2Fzzov2M8Zu5nmIzGqdDuzareKsznJcLmxoWboTWZVAFRThnFV5O08TdjJOP2yZ1tZx2GK1Oe%2F4MoIV4l25NQDOKzM4Ts%2BGZf7Ngdzx6Em%2FvGm4TFo%2F%2BokYqvZvS7vN6noaqFFjwqng4eC0LgHEG43ltB4dtdJrheON%2BxrGJHvr1MzuZlPb0ZRbU2tGKXQsGrsVJu6LEzmPLpPmnOrcGYa%2BgGnGg5H2gqXvtFAME2NRLt9CVUfg369r2t%2FPAgutph%2BKFRhFR7NfVYAhevxNgQ2Dyy1Uafaas%2BqjUQDxvg8nOBgIr%2B2hCJD6uYewl%2FssRLB4K3YL28ZdChC6nUvQzV6KFk1gJNAUw%2F4yNwQY6pgF98trhFklvHO%2BzmI%2BEQnLR9d5TYCKaVLGxY3NX%2BCx4QMxydrHmRZ8fgfsP3%2BMT2vac9k7tcYqTFj5oAIHzfdN48fY22ZTAmn2VaaMp%2B8aXoXneLIPakhPcFbvdsZz5gfKMrDK5%2Bqu0QGo5I6QhThTIDFww61VlRUj69v26S%2BTng%2B7N1kp45USvd%2FNOOsO%2BuA7wcx0pM%2Frm4teEQUqIdHCswI4fHxVa&X-Amz-Signature=d6807044922382f6ce5f9339f0c9b0a33521554659681b6eaa2aca9b075e682e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5IJDYQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBu1NVg6Uy6LUKCZfhoExvEmXhzTDJkvm8doW0WTacqeAiASBc4E0ofs18gHnl44Jn3VUIAOEj62eA%2BAPMy0OOz4YSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7%2BtTYWq2XBmXw1VKtwDD%2FJpU6BE9sILeB9SU9KRHpy6GjCN5lnN4h3aImVlGCM8TE1BTxd92xrv54CiPhWDtTdCBpkZtjKfqSOb2AvA8AfglBHrP9n4J4oPEeDDyiN6lzC%2FQddJadBZJMQn2cAHx7sdc36Ff1oes%2F%2BmWjO1LXvIXzuVTkZ5n%2Bq0na3PTgKj%2FXnBRaIuOtkbpg0o4uERYE6IKlMHm8ULMfoookvxGqh2iQNPZXhEqjrQWjv1iy4UwhSuLJ9cyiiGtiHNKY6cW1IGGkblWkEXkSFgSBCH6QnDKCyv9%2Fzzov2M8Zu5nmIzGqdDuzareKsznJcLmxoWboTWZVAFRThnFV5O08TdjJOP2yZ1tZx2GK1Oe%2F4MoIV4l25NQDOKzM4Ts%2BGZf7Ngdzx6Em%2FvGm4TFo%2F%2BokYqvZvS7vN6noaqFFjwqng4eC0LgHEG43ltB4dtdJrheON%2BxrGJHvr1MzuZlPb0ZRbU2tGKXQsGrsVJu6LEzmPLpPmnOrcGYa%2BgGnGg5H2gqXvtFAME2NRLt9CVUfg369r2t%2FPAgutph%2BKFRhFR7NfVYAhevxNgQ2Dyy1Uafaas%2BqjUQDxvg8nOBgIr%2B2hCJD6uYewl%2FssRLB4K3YL28ZdChC6nUvQzV6KFk1gJNAUw%2F4yNwQY6pgF98trhFklvHO%2BzmI%2BEQnLR9d5TYCKaVLGxY3NX%2BCx4QMxydrHmRZ8fgfsP3%2BMT2vac9k7tcYqTFj5oAIHzfdN48fY22ZTAmn2VaaMp%2B8aXoXneLIPakhPcFbvdsZz5gfKMrDK5%2Bqu0QGo5I6QhThTIDFww61VlRUj69v26S%2BTng%2B7N1kp45USvd%2FNOOsO%2BuA7wcx0pM%2Frm4teEQUqIdHCswI4fHxVa&X-Amz-Signature=33e84874075005de3c23d9ef71f8a078359422a2dab34320913a350d98e7635d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
