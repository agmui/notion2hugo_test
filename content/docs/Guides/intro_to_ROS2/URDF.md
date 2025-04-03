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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOZOQNO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcN6cnNvbXv0c7ax2RXG9LXtBw5VNKAe5gtTyQ5aT1UQIgZzjqJNF1O%2FQMepn7%2FI8HFR3SZnUKYwVQ9DCUKbza%2FGoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6B4BUfn%2F%2Bjbpk%2FOCrcA4h6LIU198pVMfuG6Bhh%2FObaq6FeJM6JPrAzYUTd4TGAEraKmSP%2BdGaukLOy5LydYYol0jKTCk98hk7sM%2BVK%2B2W03WwmF5f4uc%2FZxhx%2FD6ankzcjptPkNEGvZjKx6mkchLQE%2F04cpb3bh5GeYUd6Opn2urSGgVV01pWH8dFUCHOooWpTtn4U7wtGoDF%2FWZ3PrIktGDzzh5hpeMuWQC%2Bfw1tDLw49gJPiGN48TOxCZHCgn2aqUS4GBaKHPNjglZg9p45wr3e1v7sZJSIEtgUprTeGevqOIqZv%2BYgzspY4hjJ2mglz5rAB8RcE46c6EPO9to6wNSsXp%2FMsTq3q1JFH7F%2Bu2Esa5JgN0B4%2FTGrQMgBxjAnnNmDJINt8CtEjYN5Uyg9wd6QtfPD3jt68%2BVO1w43puFmJmwIqJLcSrU6VwJCAavuQKAgOT9nRimcA2ryV3aBJ9MQGy2PELoBlTaB9LvFUONV6uCE%2FMvuDrN%2FtgbP1Ovpe%2FXnbHdqyB%2BGeHZ1N%2B7XFmJ%2BgFFRZB3SGkIXOMgXPHtHEeu6r7hWPvF0AIOcSSiKKlUOpSFS9Lop5%2BkNRsjgdy78pYTcejLvKerAx8ThvRlh0YLF4eZuxClpfW4M9lLJtdyweA3u4xV9JMNH7t78GOqUBkLJhuRBaCwzrMb7UG6e77oXhuPXxBIH33xn8cfoBrXR%2F%2BhrQ34KFOqX8B0BIvvj254wI0XLmczicQqubgjmOSXFc7iHgr08oFOhZiheV1FL799WrhrlST66ILEajjan9KFumC%2FbGijRjWx%2FJI75E8o1%2B%2BwYta5GMSlcJ2GBBf5v%2F8hT8vy84lb0VoJZQ25jmn7%2FPx96AMp8C85BcALKvJ9InoNwG&X-Amz-Signature=b69f9defe20c2f9f4adffdb94287a386e99b0459a2397e68f1fba2900b131de1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOZOQNO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcN6cnNvbXv0c7ax2RXG9LXtBw5VNKAe5gtTyQ5aT1UQIgZzjqJNF1O%2FQMepn7%2FI8HFR3SZnUKYwVQ9DCUKbza%2FGoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6B4BUfn%2F%2Bjbpk%2FOCrcA4h6LIU198pVMfuG6Bhh%2FObaq6FeJM6JPrAzYUTd4TGAEraKmSP%2BdGaukLOy5LydYYol0jKTCk98hk7sM%2BVK%2B2W03WwmF5f4uc%2FZxhx%2FD6ankzcjptPkNEGvZjKx6mkchLQE%2F04cpb3bh5GeYUd6Opn2urSGgVV01pWH8dFUCHOooWpTtn4U7wtGoDF%2FWZ3PrIktGDzzh5hpeMuWQC%2Bfw1tDLw49gJPiGN48TOxCZHCgn2aqUS4GBaKHPNjglZg9p45wr3e1v7sZJSIEtgUprTeGevqOIqZv%2BYgzspY4hjJ2mglz5rAB8RcE46c6EPO9to6wNSsXp%2FMsTq3q1JFH7F%2Bu2Esa5JgN0B4%2FTGrQMgBxjAnnNmDJINt8CtEjYN5Uyg9wd6QtfPD3jt68%2BVO1w43puFmJmwIqJLcSrU6VwJCAavuQKAgOT9nRimcA2ryV3aBJ9MQGy2PELoBlTaB9LvFUONV6uCE%2FMvuDrN%2FtgbP1Ovpe%2FXnbHdqyB%2BGeHZ1N%2B7XFmJ%2BgFFRZB3SGkIXOMgXPHtHEeu6r7hWPvF0AIOcSSiKKlUOpSFS9Lop5%2BkNRsjgdy78pYTcejLvKerAx8ThvRlh0YLF4eZuxClpfW4M9lLJtdyweA3u4xV9JMNH7t78GOqUBkLJhuRBaCwzrMb7UG6e77oXhuPXxBIH33xn8cfoBrXR%2F%2BhrQ34KFOqX8B0BIvvj254wI0XLmczicQqubgjmOSXFc7iHgr08oFOhZiheV1FL799WrhrlST66ILEajjan9KFumC%2FbGijRjWx%2FJI75E8o1%2B%2BwYta5GMSlcJ2GBBf5v%2F8hT8vy84lb0VoJZQ25jmn7%2FPx96AMp8C85BcALKvJ9InoNwG&X-Amz-Signature=86db99b09ec95312ed1155802e6fd32d0fe1c5f93ec2a4b11bac4df2b06d84d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
