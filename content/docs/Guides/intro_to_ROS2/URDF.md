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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJYJRJJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCnBsfrkumVi2tJMtbDULKlSmOGOTOF1YWTHAE24lONAQIgSQB0hip%2FxWl%2Fyt2Il7T%2FLryn7p5nngt9qHJDhNb11U4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Co4UmtyENN42FOyrcA%2BWIOae5%2FQWKkA0k9G8f%2BaaPNehs1MbOCVsys9UOOt4ANNHwfcaIYW6vgdsQOspT4LlDBmpiZKhLDKXuHlcq%2BnzsTgvASuY9rAnWEhJixPLTl9U4on6HgGJSwzjYnLiR2p1D9r2Kh4DNyg0eSg2s70H9hNR59FRoSBL5RSy2jnMw8OPpQWosfW2Vy4oSwVD3OLfpujudXl9YNAbzAQuYbOklFgWJkzkolYwh9SPVr%2Bst6W0kVUqDJMMeqSFUsKur5oucmSbJnDnL%2BGKgroHareCMKYM7wTL60JFEX7FDvy%2FZrkVafJ6QZVO2Uowk5BIqcVuzO408smqu2rT5m%2BYH8CPNDMzpvelv5NM9aHnHUWDWp3h7YBzDdPiWdrPcnQrSVPveZAd%2B%2BvKMVG89nWagXZnpzxNkmu35AUzW4eMdXTxqXXVV3e8SSjLSDd2uc17V5ivfiBKqggQbaPurzYVSwDEcJXi0U%2BorTYnKWELGav%2FViHvppFLIDhI8yV%2BLB1MVJpL7O%2FwkWZUGziHOmBqRkJV96U1td%2F7vd4%2F3Mez5efY5cSfqDK6ds8i5MYiAQNgvA%2F0k0wcz9oiNTjeFYgjg5BSOO0G2OxcIzBzV%2FdzjRJRoDh0A33liGgeWzNXUMJiEhsEGOqUBx36EOszgxEzpA6eKV8tM0G3aovAAHsXRjZdHmtY4KI%2F6FjO6v0Es3xA%2B1LK3xLVjlwFIgpe%2FBujarQqbKbl4F36cF44AndbmhtkQSsZY1skEYXhEp%2B2ssTKN2zqNTQyVYBJLputzszdUjSWgC4NIQy4UyQUKbAll0TdsqN8AdjkqOq%2FzISmFUJ6wm0Rqs2ilQJRofk8mOvOn4Cw10tLSrcbMpdtA&X-Amz-Signature=c5d71d76b6a45e17d900c6a4d7f88fca88b1e95e9d4a4f47f5a070c21b1a1236&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJYJRJJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCnBsfrkumVi2tJMtbDULKlSmOGOTOF1YWTHAE24lONAQIgSQB0hip%2FxWl%2Fyt2Il7T%2FLryn7p5nngt9qHJDhNb11U4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Co4UmtyENN42FOyrcA%2BWIOae5%2FQWKkA0k9G8f%2BaaPNehs1MbOCVsys9UOOt4ANNHwfcaIYW6vgdsQOspT4LlDBmpiZKhLDKXuHlcq%2BnzsTgvASuY9rAnWEhJixPLTl9U4on6HgGJSwzjYnLiR2p1D9r2Kh4DNyg0eSg2s70H9hNR59FRoSBL5RSy2jnMw8OPpQWosfW2Vy4oSwVD3OLfpujudXl9YNAbzAQuYbOklFgWJkzkolYwh9SPVr%2Bst6W0kVUqDJMMeqSFUsKur5oucmSbJnDnL%2BGKgroHareCMKYM7wTL60JFEX7FDvy%2FZrkVafJ6QZVO2Uowk5BIqcVuzO408smqu2rT5m%2BYH8CPNDMzpvelv5NM9aHnHUWDWp3h7YBzDdPiWdrPcnQrSVPveZAd%2B%2BvKMVG89nWagXZnpzxNkmu35AUzW4eMdXTxqXXVV3e8SSjLSDd2uc17V5ivfiBKqggQbaPurzYVSwDEcJXi0U%2BorTYnKWELGav%2FViHvppFLIDhI8yV%2BLB1MVJpL7O%2FwkWZUGziHOmBqRkJV96U1td%2F7vd4%2F3Mez5efY5cSfqDK6ds8i5MYiAQNgvA%2F0k0wcz9oiNTjeFYgjg5BSOO0G2OxcIzBzV%2FdzjRJRoDh0A33liGgeWzNXUMJiEhsEGOqUBx36EOszgxEzpA6eKV8tM0G3aovAAHsXRjZdHmtY4KI%2F6FjO6v0Es3xA%2B1LK3xLVjlwFIgpe%2FBujarQqbKbl4F36cF44AndbmhtkQSsZY1skEYXhEp%2B2ssTKN2zqNTQyVYBJLputzszdUjSWgC4NIQy4UyQUKbAll0TdsqN8AdjkqOq%2FzISmFUJ6wm0Rqs2ilQJRofk8mOvOn4Cw10tLSrcbMpdtA&X-Amz-Signature=ec4198a0725e30c3f1a87e7c7352d964c3f3e8dfbc713d8dc28589975baaf25d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
