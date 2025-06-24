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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TKZI22%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDMVhAa9EOhrQzwG0kEBN%2FeReRG3eD5TpdAhDqYOlkMKAIgSIJgDhcD1GPQVbmkjAjUNNGq5eTwBQ9hmeSDWZo4Nw8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIMEFu19lYbOvtrGOircAzLJ7D%2F6BoVA9htXCRCoCctGngWLrMEY%2Bml3i56nAyqc1iBFFMHJZnjA3jtZdIiLjROwSHfjYSwDBNbaxhh%2BKxFR81RLnXvDzTwtEiJKT5gg8tNzgZpmI%2BYKmMjK2%2F%2Fn7wRFwa0hpQMwZbUNbOhtsyuJx6nRPvp9dYUDnalk2MJ3waH9vQr4ATk%2BfaA0pS1WDZISYBfMEffwSscUkpOQkg8%2FyEk%2BnwM38giqmUkt16pDjrhje1p%2BIpcdtQI5bvXYRJcjiiRMMQSuOcDBaPoaMClw6N3p5gqCaViWvDlZybzUTjTZEZ0Tmr3SKRQT9LXejwTWQ%2BNJq%2FH9XJlxhI3q3rzNULBkLripuxtil9BE%2Ft7VzIYOEyRxRU%2Bv9lPHIYhOwzS5shdOpL4MYcPNyDlsA5VYb2ESYfiYkHamfCIQRr34Iv2rkflKlJK%2F1cLwgihxReVrAvpCTyR%2FDRG3XLxACZYaqeGGzVO69SBKtFv53ZI5jjht0KfmoSCzd2eGO0maPRVufa2D3yalBqAEvEr6%2FIQYpDCBccz%2BIzCAocQN8J02jMJnK0cBcOSoGF5EryDSMt6B3CXsEtPu4KPlikg9GXdtXTfymyg2m4ti8xS%2Bw23CY5GIgRc2ahRw2%2Fr6MNT36MIGOqUBjZBQwxZDDlSJ5theFgLq%2BC21Q88XNEGG91sVrpPQGPN6xWsRElguI3jCFfG5yS%2BT87NNFeY8gjusZaFVNt%2Bm603qjE3JjHntV1v3BZmhD5NXtNE5YUimPezSNeFuZKLkvI2i%2BUjRTs0iD8vFGEXpq4zQILjo25yZyVuwgTzYKIiXmLU8VKeSZLv9ATPx6cxKPlDzcaFhzPStLO%2Bd7r9zi6VZB2C9&X-Amz-Signature=e40df373f40fae8dd2a023c07052d358b76775bd994f37bca48ac11d242b37a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TKZI22%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDMVhAa9EOhrQzwG0kEBN%2FeReRG3eD5TpdAhDqYOlkMKAIgSIJgDhcD1GPQVbmkjAjUNNGq5eTwBQ9hmeSDWZo4Nw8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIMEFu19lYbOvtrGOircAzLJ7D%2F6BoVA9htXCRCoCctGngWLrMEY%2Bml3i56nAyqc1iBFFMHJZnjA3jtZdIiLjROwSHfjYSwDBNbaxhh%2BKxFR81RLnXvDzTwtEiJKT5gg8tNzgZpmI%2BYKmMjK2%2F%2Fn7wRFwa0hpQMwZbUNbOhtsyuJx6nRPvp9dYUDnalk2MJ3waH9vQr4ATk%2BfaA0pS1WDZISYBfMEffwSscUkpOQkg8%2FyEk%2BnwM38giqmUkt16pDjrhje1p%2BIpcdtQI5bvXYRJcjiiRMMQSuOcDBaPoaMClw6N3p5gqCaViWvDlZybzUTjTZEZ0Tmr3SKRQT9LXejwTWQ%2BNJq%2FH9XJlxhI3q3rzNULBkLripuxtil9BE%2Ft7VzIYOEyRxRU%2Bv9lPHIYhOwzS5shdOpL4MYcPNyDlsA5VYb2ESYfiYkHamfCIQRr34Iv2rkflKlJK%2F1cLwgihxReVrAvpCTyR%2FDRG3XLxACZYaqeGGzVO69SBKtFv53ZI5jjht0KfmoSCzd2eGO0maPRVufa2D3yalBqAEvEr6%2FIQYpDCBccz%2BIzCAocQN8J02jMJnK0cBcOSoGF5EryDSMt6B3CXsEtPu4KPlikg9GXdtXTfymyg2m4ti8xS%2Bw23CY5GIgRc2ahRw2%2Fr6MNT36MIGOqUBjZBQwxZDDlSJ5theFgLq%2BC21Q88XNEGG91sVrpPQGPN6xWsRElguI3jCFfG5yS%2BT87NNFeY8gjusZaFVNt%2Bm603qjE3JjHntV1v3BZmhD5NXtNE5YUimPezSNeFuZKLkvI2i%2BUjRTs0iD8vFGEXpq4zQILjo25yZyVuwgTzYKIiXmLU8VKeSZLv9ATPx6cxKPlDzcaFhzPStLO%2Bd7r9zi6VZB2C9&X-Amz-Signature=946627159ef66b5cd7b31a505e0b9745487e84d34c6afacb30f5fe686e6889c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
