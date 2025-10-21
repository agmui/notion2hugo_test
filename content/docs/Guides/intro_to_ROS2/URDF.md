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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMK5SAT4%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDG8%2B4wp15KidnDXCiaPgQklpAvLol8kLMKsnjNBp8iPAiAJ9L3%2BJwRqQjh4Cum8d56r6uCdRWMpFF%2FCeyXd3k0gnSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrhSxlPEKim79Is69KtwDvkYQVcyat1X%2Bm6FfaeDJEYkPrCYMSKS0o8krzWEHrgeKrHsquvdtgURZRWHqw30sS%2FSeqEnnu0L1HwPEnodgJB%2FOaL5ecWnn8KH%2Bek8waqoeBAQKXdu1E3E%2B3LBNsfD9zr41YpPVIJsG3JvulgD6Zfv6phzr8YSr2WwANrNDW63XARLugzI6KY1%2FMESi2rSgqEVKTlqqbgNFsOizWlRw9yDlI0b99TCjn1fl7o6%2FZNN4dpmDD28%2BC4Z18zjaDoACpJxYrsdMTEw1Tj8BgDSxHjInRhmsGgtNbWJkTcrJRXLTewC9QCnmtahOiQFqTL8lkyk0qxqMtNVjGwxb5KDtg3HbxM09dML99GvAkcnuupUMbEUQZ9DmPr%2BVX9dxMhUe0C1KxD0JeNbXVk0ZRIHGpwD3CABNMVtEvANAQ%2FFr1ox5EfFWxrGujQefobDjGu4VIcYpt7bznCy5Hm%2BjV1Eomnlt8C6Geg%2FpoEkdf3YEzdEugifZX3NEFwQVg9QRj%2Bbii4lH%2F8btbE%2BLiWKX2nKz92W%2Bm5ZFm%2BMfKvNhWYz%2FeREQwsrc4fAxN%2Bwbc8VXuYoBnvTjOqvnrxrOF6UjzzzCc3wjeAvvz%2B%2BVCTeJEfn%2B4QSq3fAFy16bKanxcBow663bxwY6pgEf2ED3j6fdsnvz1ugqEq3onZENIUcz9yA%2FnvYj%2Bsn17%2F%2F1X9emOPnRjom3bmsoywKagW64V5fgpIxfhqD6fFGYnoucuU18UTwEppflOLiCg3HotngObdu%2BPfoUa%2BBQwdSLDdCzhamlF28MU%2BgJ6AW14fK9P%2Fakk3Hvo7oRAneYPjrBely7sVPaXXcqZ9K6DE1qL3YxmGsmIW6X1o3giB6r6dO3Wp8r&X-Amz-Signature=44c79fe711c20d8f3a97b8cfe75f4bcdb431d7be4b62c9fb4898ca45063f469f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMK5SAT4%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDG8%2B4wp15KidnDXCiaPgQklpAvLol8kLMKsnjNBp8iPAiAJ9L3%2BJwRqQjh4Cum8d56r6uCdRWMpFF%2FCeyXd3k0gnSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrhSxlPEKim79Is69KtwDvkYQVcyat1X%2Bm6FfaeDJEYkPrCYMSKS0o8krzWEHrgeKrHsquvdtgURZRWHqw30sS%2FSeqEnnu0L1HwPEnodgJB%2FOaL5ecWnn8KH%2Bek8waqoeBAQKXdu1E3E%2B3LBNsfD9zr41YpPVIJsG3JvulgD6Zfv6phzr8YSr2WwANrNDW63XARLugzI6KY1%2FMESi2rSgqEVKTlqqbgNFsOizWlRw9yDlI0b99TCjn1fl7o6%2FZNN4dpmDD28%2BC4Z18zjaDoACpJxYrsdMTEw1Tj8BgDSxHjInRhmsGgtNbWJkTcrJRXLTewC9QCnmtahOiQFqTL8lkyk0qxqMtNVjGwxb5KDtg3HbxM09dML99GvAkcnuupUMbEUQZ9DmPr%2BVX9dxMhUe0C1KxD0JeNbXVk0ZRIHGpwD3CABNMVtEvANAQ%2FFr1ox5EfFWxrGujQefobDjGu4VIcYpt7bznCy5Hm%2BjV1Eomnlt8C6Geg%2FpoEkdf3YEzdEugifZX3NEFwQVg9QRj%2Bbii4lH%2F8btbE%2BLiWKX2nKz92W%2Bm5ZFm%2BMfKvNhWYz%2FeREQwsrc4fAxN%2Bwbc8VXuYoBnvTjOqvnrxrOF6UjzzzCc3wjeAvvz%2B%2BVCTeJEfn%2B4QSq3fAFy16bKanxcBow663bxwY6pgEf2ED3j6fdsnvz1ugqEq3onZENIUcz9yA%2FnvYj%2Bsn17%2F%2F1X9emOPnRjom3bmsoywKagW64V5fgpIxfhqD6fFGYnoucuU18UTwEppflOLiCg3HotngObdu%2BPfoUa%2BBQwdSLDdCzhamlF28MU%2BgJ6AW14fK9P%2Fakk3Hvo7oRAneYPjrBely7sVPaXXcqZ9K6DE1qL3YxmGsmIW6X1o3giB6r6dO3Wp8r&X-Amz-Signature=1bcb6c806384bdabf23ee6e7c36722789ea9c48176028e5698bc42e1d1d7d396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
