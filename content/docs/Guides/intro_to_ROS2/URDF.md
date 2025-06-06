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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FUPBSAJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDHV%2Fv7WV3%2FhHcKqSsyXWXUjreD70TzIcB144n04Nt6AiAE3RLRNPGRM%2FE2szP04sRIUDcrqdQ7Io9s9aMoJwwLnCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMqcrc4Fu1QQb5504pKtwDlEvZpUQO9CZXhvlaX3VEMNYJ6jl4WQTF16knB6l1gS2giTQTPKVHOwY0ZZ%2Ffcq9fYnSnDBwGEgG490JXZMj8bk%2FzXZku%2FEZzLvKzebPRhVD%2BjNJNlCCaiL00VJi%2BBCFEsDt6PoDYgrXXpEu2NKacM0jh1HOISt%2F583O%2BSGv7%2B8pdSImr7%2BNqQjC1WOLKzRi5ypTy9qbdS4XvWJRakFAKLQHKBwIzyq6dPGKPCL59N9b%2B3KDU7YqcsUlZVoYl5h%2BOV4yw0AKbJckvx9gXutmh95oeexYHkrkF7hcIaEQLgZqLaJOIZpqy0yCiXF%2FRjU1Ssap1FU6fRCS2STbDzKp2fntaYrFdvu7hDOWB%2FRQkjfKiwzb8iBpR7mHpQh5hl5XO2VKoeM6it5aqi5vnxOkJibunCgOYwNhmhiVCw3shQitFI85wYFIcQr%2F45Vz9yOOC1ohY8ziTiaqWRUFrWP0V2Tgx9mMKpSJh3%2BiWR8UAcYZt9py3ID%2FuXDJSDRVSyeVVXUDlbW%2B%2F9hM%2B9ULBi3BEpIhMOBIpXGAshjYJBf2eDUnK9L5uE7J8rtpXM%2B5SFc1UEIrZ6doREGg2nnZ9uFqtJtTvKmAaB1ryecPUep%2B02qrwABz321Q5TmhWB0Qw%2F4WLwgY6pgH%2FlSzJhzJ%2F4cfChfCdo0n9SalRFK3uopY6n1OaF7jqGqhaxYAgDStnfgX%2FE%2F26U%2FodgtKbpDTuANzRhZ5YvnY8gcO%2BbsbSg3POrQrEKk0KwxpR5zj2QBCuUWIxPfADzoQuHwjtnuRaFxIfumEfAmFE%2B24lnVCkbZuRhDw0RmyIxHP6qfNhg0KlzNjBuaYi1STOMfAt234GBWRXCdhveJHhw5OFjJmF&X-Amz-Signature=11e7e794af002b60c269e5cc429eece656d76dbbbb55b61d1dfa5e7b9a8bf032&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FUPBSAJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDHV%2Fv7WV3%2FhHcKqSsyXWXUjreD70TzIcB144n04Nt6AiAE3RLRNPGRM%2FE2szP04sRIUDcrqdQ7Io9s9aMoJwwLnCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMqcrc4Fu1QQb5504pKtwDlEvZpUQO9CZXhvlaX3VEMNYJ6jl4WQTF16knB6l1gS2giTQTPKVHOwY0ZZ%2Ffcq9fYnSnDBwGEgG490JXZMj8bk%2FzXZku%2FEZzLvKzebPRhVD%2BjNJNlCCaiL00VJi%2BBCFEsDt6PoDYgrXXpEu2NKacM0jh1HOISt%2F583O%2BSGv7%2B8pdSImr7%2BNqQjC1WOLKzRi5ypTy9qbdS4XvWJRakFAKLQHKBwIzyq6dPGKPCL59N9b%2B3KDU7YqcsUlZVoYl5h%2BOV4yw0AKbJckvx9gXutmh95oeexYHkrkF7hcIaEQLgZqLaJOIZpqy0yCiXF%2FRjU1Ssap1FU6fRCS2STbDzKp2fntaYrFdvu7hDOWB%2FRQkjfKiwzb8iBpR7mHpQh5hl5XO2VKoeM6it5aqi5vnxOkJibunCgOYwNhmhiVCw3shQitFI85wYFIcQr%2F45Vz9yOOC1ohY8ziTiaqWRUFrWP0V2Tgx9mMKpSJh3%2BiWR8UAcYZt9py3ID%2FuXDJSDRVSyeVVXUDlbW%2B%2F9hM%2B9ULBi3BEpIhMOBIpXGAshjYJBf2eDUnK9L5uE7J8rtpXM%2B5SFc1UEIrZ6doREGg2nnZ9uFqtJtTvKmAaB1ryecPUep%2B02qrwABz321Q5TmhWB0Qw%2F4WLwgY6pgH%2FlSzJhzJ%2F4cfChfCdo0n9SalRFK3uopY6n1OaF7jqGqhaxYAgDStnfgX%2FE%2F26U%2FodgtKbpDTuANzRhZ5YvnY8gcO%2BbsbSg3POrQrEKk0KwxpR5zj2QBCuUWIxPfADzoQuHwjtnuRaFxIfumEfAmFE%2B24lnVCkbZuRhDw0RmyIxHP6qfNhg0KlzNjBuaYi1STOMfAt234GBWRXCdhveJHhw5OFjJmF&X-Amz-Signature=cfcfc918e8c74337ba7de9d11a4916ac541a8c10ce837643ed40ea382a369d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
