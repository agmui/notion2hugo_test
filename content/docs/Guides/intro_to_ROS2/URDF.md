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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLUUJ6JK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID21WBvvuNF0zEQnadvRJN41XFZlTsAxQegIVfXa2tOHAiBbamsrx0bhFyFv0elkTZtMk2TjNta3FotQTSaSPriTuyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMwof6JXveDMoBI4SxKtwD2gBevyKL7jLupLuZ3G79%2F%2B9xndHXa21U2mOrFh08ssRkWPiH%2FPFZs%2BTn66wctbupmDRasA8xKw4bOwcinlWf4fn1fHQSpc9%2F1STYX%2BkgAQqfAethK9v6kY6r7pscwc3nhgAv7lQIQIcfs%2F9spubr9mG%2FNzwfLfsypgoVgMJOgRQ6nocwQQ83XPe6jTx9qbR7BFSzosStw4258r52Gpmd0FVo%2F%2Ft5MmY%2Fo%2FNOanvk2K0k5hNp4ygGae%2Bu7oFZ79l3NWrqFMVnPTxzeICSjZGP6gYx0ac5Y5V3pxZ33OVGuzyieIetYss1izsh3CfE9z4qw1i9b6GHJGEVxB4UtyKdabzbfjaGrFNnovR4JzpYCTLov6xKRhqIKVtYmdkk0dHeBfKvzlXAlRsUHtn4FqL9KM0SLtB%2ByoFO07rmLQ1bWkUc1xPXFTWhZRyyzoqjXjKdyo7FORtVWSI10tO5DXw4al9mK7p0p7r7L7OKHTIit17UVzogQW1FQKr8Hg5wR%2FoGoLO%2FOO0JB3j%2FAhdAozWhtDW%2B3dq4Y981nOB8iXEWfUvHKvEo2KWHMyAxNfJTh0g69Rl227%2F0H88Qx2yOqAYDB%2BJzGKNC1lcykxcmCXM2nJi2pRy2RIuyc0VLUH8w%2BdKkwwY6pgEpqPxM5zBVVDjBJ%2FrV3HXz5%2BmcFRq9XLqoia4ftWy%2Fx3zsrjJLR7vm8%2F%2B061Fn4XdhKl8cBbJ2R%2BR0z5AR9tVz%2BwvTkKYQVh0upvlQceJebhX51AUb7JGZh%2FNSm5%2BLwCUj36HdZeGTdi%2BQ5SdzFz%2FW1d%2FUja0TJ%2F7F4FbwQ9D5WHYWuMpIE33zY0ENBKe9ADZVEr2Rknd1EN9RiHeePoms%2B1PU2lGR&X-Amz-Signature=aa49e830f1fc78572fc2a1f1b3b8d092e25f10d7abe1b342591331b4d624e1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLUUJ6JK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID21WBvvuNF0zEQnadvRJN41XFZlTsAxQegIVfXa2tOHAiBbamsrx0bhFyFv0elkTZtMk2TjNta3FotQTSaSPriTuyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMwof6JXveDMoBI4SxKtwD2gBevyKL7jLupLuZ3G79%2F%2B9xndHXa21U2mOrFh08ssRkWPiH%2FPFZs%2BTn66wctbupmDRasA8xKw4bOwcinlWf4fn1fHQSpc9%2F1STYX%2BkgAQqfAethK9v6kY6r7pscwc3nhgAv7lQIQIcfs%2F9spubr9mG%2FNzwfLfsypgoVgMJOgRQ6nocwQQ83XPe6jTx9qbR7BFSzosStw4258r52Gpmd0FVo%2F%2Ft5MmY%2Fo%2FNOanvk2K0k5hNp4ygGae%2Bu7oFZ79l3NWrqFMVnPTxzeICSjZGP6gYx0ac5Y5V3pxZ33OVGuzyieIetYss1izsh3CfE9z4qw1i9b6GHJGEVxB4UtyKdabzbfjaGrFNnovR4JzpYCTLov6xKRhqIKVtYmdkk0dHeBfKvzlXAlRsUHtn4FqL9KM0SLtB%2ByoFO07rmLQ1bWkUc1xPXFTWhZRyyzoqjXjKdyo7FORtVWSI10tO5DXw4al9mK7p0p7r7L7OKHTIit17UVzogQW1FQKr8Hg5wR%2FoGoLO%2FOO0JB3j%2FAhdAozWhtDW%2B3dq4Y981nOB8iXEWfUvHKvEo2KWHMyAxNfJTh0g69Rl227%2F0H88Qx2yOqAYDB%2BJzGKNC1lcykxcmCXM2nJi2pRy2RIuyc0VLUH8w%2BdKkwwY6pgEpqPxM5zBVVDjBJ%2FrV3HXz5%2BmcFRq9XLqoia4ftWy%2Fx3zsrjJLR7vm8%2F%2B061Fn4XdhKl8cBbJ2R%2BR0z5AR9tVz%2BwvTkKYQVh0upvlQceJebhX51AUb7JGZh%2FNSm5%2BLwCUj36HdZeGTdi%2BQ5SdzFz%2FW1d%2FUja0TJ%2F7F4FbwQ9D5WHYWuMpIE33zY0ENBKe9ADZVEr2Rknd1EN9RiHeePoms%2B1PU2lGR&X-Amz-Signature=28124be8f37d0721a0cb83793c6f29de9bfe839afea65740a45405a0c61a50cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
