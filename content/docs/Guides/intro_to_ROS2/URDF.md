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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBB2TXTZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF221p3wM3nXTBs%2FR8YDSxpQ%2FSg5SQxrxHBxgnlo7CNBAiEAxOePRdO1E9fXyQIZGanjmTIRY8zAZJZl8tt7bQxDAFYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8y3uRDiBEAEHM26ircAxV%2FPA42RAfUkC4HvZgYVdF%2Botxb8ONW62R07v4lA9KUy7XkM9jQgsM5Ew9zmfUHOJhpyfeKg86HWo9maHaca8%2FwzB%2BBdwz2TUECSa0xiEkcsIxTgm1BFO2WGO6%2BxtCEiS4DDinRr6hXwuWgm%2BlwpHTV5YIJ6o0R5TXJmzJ4NHNmCcFH2bu7R%2Bc%2FeO%2FrmOZK%2FxprwXohGQYbPgl%2FyH1J%2BpJxB4VHF42r9P2kBmyPEvI5JvMtbKGRjIF5qisvNnsUSCyXNU6mg1OeVdS%2FxHELU%2F%2BryQUubk9jmBX69dzSCGij4mdXmwz%2FA%2BnTx6Cms4EWiytxfjCCckzZLABu1b7bkPEEa9zhLoXBmeNm0VQ8VHQzLhrbpx4huHNxzwFlcQQynDIqayuEkgNLv%2BWB3PVYCDHyctuU8rnCIq7peMvbpYpKj0fVkFXQqqDF6nS28lrLYC%2F23x%2Blcw9rkTvlAx4dddr3tKBgLJxg5zDp0NvhASwlkbwfELw2QDlWEeJ4llrmp0tCj%2BHYIn%2BkZbF8eIN39Z2YVzbQnwyJtWdqRyxmBRtFO3XKID2QaKZS6rno9RyGSkwVv7lATvpBa8mFLUwuODoMQ4prFzH88Rr1Yn9uLX00Vdh5kmvUQBJJ%2BIuiMI34xMEGOqUB3ZI1bL%2Ba0u5tUTwfCeK2mFico4d5BTT7wlZnggMx34gfDlpbJumnTytnY4cZRCEKIOsdzuHY5KsyA%2Fkx6yo2%2BQPhkIjX8liiXo%2Fb%2BrEqNfTjCNZchc%2FXHIZMKvww6FDOxsjVbYUac%2FLfMamYeKNLucb8V9iJCRP7eyJm75ewNkHHVhe%2FHrmxrBYZftk8ERKa7h9VVbm8WV%2BKhWkbAm2vuVltxmtX&X-Amz-Signature=f0677eb62b98a7a233905a3c24a4049970a4f285619431126c6e8590ed2e00ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBB2TXTZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF221p3wM3nXTBs%2FR8YDSxpQ%2FSg5SQxrxHBxgnlo7CNBAiEAxOePRdO1E9fXyQIZGanjmTIRY8zAZJZl8tt7bQxDAFYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8y3uRDiBEAEHM26ircAxV%2FPA42RAfUkC4HvZgYVdF%2Botxb8ONW62R07v4lA9KUy7XkM9jQgsM5Ew9zmfUHOJhpyfeKg86HWo9maHaca8%2FwzB%2BBdwz2TUECSa0xiEkcsIxTgm1BFO2WGO6%2BxtCEiS4DDinRr6hXwuWgm%2BlwpHTV5YIJ6o0R5TXJmzJ4NHNmCcFH2bu7R%2Bc%2FeO%2FrmOZK%2FxprwXohGQYbPgl%2FyH1J%2BpJxB4VHF42r9P2kBmyPEvI5JvMtbKGRjIF5qisvNnsUSCyXNU6mg1OeVdS%2FxHELU%2F%2BryQUubk9jmBX69dzSCGij4mdXmwz%2FA%2BnTx6Cms4EWiytxfjCCckzZLABu1b7bkPEEa9zhLoXBmeNm0VQ8VHQzLhrbpx4huHNxzwFlcQQynDIqayuEkgNLv%2BWB3PVYCDHyctuU8rnCIq7peMvbpYpKj0fVkFXQqqDF6nS28lrLYC%2F23x%2Blcw9rkTvlAx4dddr3tKBgLJxg5zDp0NvhASwlkbwfELw2QDlWEeJ4llrmp0tCj%2BHYIn%2BkZbF8eIN39Z2YVzbQnwyJtWdqRyxmBRtFO3XKID2QaKZS6rno9RyGSkwVv7lATvpBa8mFLUwuODoMQ4prFzH88Rr1Yn9uLX00Vdh5kmvUQBJJ%2BIuiMI34xMEGOqUB3ZI1bL%2Ba0u5tUTwfCeK2mFico4d5BTT7wlZnggMx34gfDlpbJumnTytnY4cZRCEKIOsdzuHY5KsyA%2Fkx6yo2%2BQPhkIjX8liiXo%2Fb%2BrEqNfTjCNZchc%2FXHIZMKvww6FDOxsjVbYUac%2FLfMamYeKNLucb8V9iJCRP7eyJm75ewNkHHVhe%2FHrmxrBYZftk8ERKa7h9VVbm8WV%2BKhWkbAm2vuVltxmtX&X-Amz-Signature=3b9a0786bc2352312f99ee4703eeab1853620e26ad312ef5a13e771b4a7bbb75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
