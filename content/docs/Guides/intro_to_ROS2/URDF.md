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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2ARMRL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkd%2FPsmSAhz7IFCZyCNr2feS244zhwSzlaGoFdFa3%2BzAIgEs3bt8cJzDV6%2FF0UHau9xv3QlT2EX9fmwVTxH%2B7LskQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHTa1OXOUWt4xywPCrcA2f%2FgHiJmGUzK%2BoaMFJDwiFtYO%2F8aPO7Yz7qYYYQGg%2BXBQ2IE7ik2XhIMAcjiBzfOtz7kGvGa9Du6yhWPx6c4NbRI3y%2F1ORrwiB9I0mVV1WjFxmcsL%2FKgzsQzASH9iqu13v2dkTaiDNDj4Ac35wFTxBnPcHCG9Ebnvsa1nRqsNdjIBIWOmQQVYNndZL%2BQs7REnhs1gVlCPUVGpw%2FfzvOpgQdCXi7GpTPhTWsHNty4v3CLPMoUyvHam6YaJbze0yR9VDaUZCEH0DFHTZtqhJYIyd4nWVzWXSigpb7%2BIl6fDhryBYt59KbOdh3cyZhDLVN7y3NrHr5%2BvJo0iCXCKYQ%2BL6GUKfkrgfqNhwAV%2Be6lVpu1BkCydI5VUSUWVvBog5h%2Btw569C6PoNKV46ZkwV6w2bygwEIqkqNbZaMgv3E%2FGQ5SXmXzPcgcpjSmO%2FbBt4xQMUhYdQCYrC5zHbWXcAGDIr8mMQ%2B1BWRJ1yd1CvsLmLNEzkBwO1907UTBD5W6YKY74prDh296pnI6xOCNI3z4geyRMON4%2Fg9e2XyRfFdY3zk36jy3AVNFkn%2Fu04SXqEWX9uwP7QnNr%2FtwtbO1U%2Fmdd2G8ktqWipRBWI3S4A%2F1zlNGXUNXVg0stP%2FWhOdMMa1xscGOqUB6ECKSigdD%2BWHR%2FVpg95GdeCfcGxs8WaWiKDPNSy3V9VSjHhJYtn83p7Se5EFmgwKK3x7Xv%2B63k3P1kGIjZTDjR4FoC27U5kWsMl1WPSUNWgtW7tLpyo9V0sKsVZxFnJLQ8YFRb1778qvLJLyLWRCe8IOEUxlA5b0KenbbL%2FY2T5m6TPOuQwRjB6s%2BNMoRxjQ6v9gPQRpsjcRDEkZi9csjJg72%2BWo&X-Amz-Signature=b22577509c69af49da4a36bf5f14372006ac842eddf9c0d61d60cc0809cb0674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2ARMRL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkd%2FPsmSAhz7IFCZyCNr2feS244zhwSzlaGoFdFa3%2BzAIgEs3bt8cJzDV6%2FF0UHau9xv3QlT2EX9fmwVTxH%2B7LskQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHTa1OXOUWt4xywPCrcA2f%2FgHiJmGUzK%2BoaMFJDwiFtYO%2F8aPO7Yz7qYYYQGg%2BXBQ2IE7ik2XhIMAcjiBzfOtz7kGvGa9Du6yhWPx6c4NbRI3y%2F1ORrwiB9I0mVV1WjFxmcsL%2FKgzsQzASH9iqu13v2dkTaiDNDj4Ac35wFTxBnPcHCG9Ebnvsa1nRqsNdjIBIWOmQQVYNndZL%2BQs7REnhs1gVlCPUVGpw%2FfzvOpgQdCXi7GpTPhTWsHNty4v3CLPMoUyvHam6YaJbze0yR9VDaUZCEH0DFHTZtqhJYIyd4nWVzWXSigpb7%2BIl6fDhryBYt59KbOdh3cyZhDLVN7y3NrHr5%2BvJo0iCXCKYQ%2BL6GUKfkrgfqNhwAV%2Be6lVpu1BkCydI5VUSUWVvBog5h%2Btw569C6PoNKV46ZkwV6w2bygwEIqkqNbZaMgv3E%2FGQ5SXmXzPcgcpjSmO%2FbBt4xQMUhYdQCYrC5zHbWXcAGDIr8mMQ%2B1BWRJ1yd1CvsLmLNEzkBwO1907UTBD5W6YKY74prDh296pnI6xOCNI3z4geyRMON4%2Fg9e2XyRfFdY3zk36jy3AVNFkn%2Fu04SXqEWX9uwP7QnNr%2FtwtbO1U%2Fmdd2G8ktqWipRBWI3S4A%2F1zlNGXUNXVg0stP%2FWhOdMMa1xscGOqUB6ECKSigdD%2BWHR%2FVpg95GdeCfcGxs8WaWiKDPNSy3V9VSjHhJYtn83p7Se5EFmgwKK3x7Xv%2B63k3P1kGIjZTDjR4FoC27U5kWsMl1WPSUNWgtW7tLpyo9V0sKsVZxFnJLQ8YFRb1778qvLJLyLWRCe8IOEUxlA5b0KenbbL%2FY2T5m6TPOuQwRjB6s%2BNMoRxjQ6v9gPQRpsjcRDEkZi9csjJg72%2BWo&X-Amz-Signature=e43e6bc3450732ef8148dfd5a6b80a4749cf2cd8a5d7dd50a8753dcfb2f4cf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
