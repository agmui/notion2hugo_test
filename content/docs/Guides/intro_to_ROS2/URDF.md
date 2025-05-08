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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=5b085999cd1697af07d012f9e964c893c5ea74494833e52b589bbe23f782e1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=3cf9ea3b09b4677459bb930a174ecb2e4e3dcac9301d0f31e3e73fb14ca2f479&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
