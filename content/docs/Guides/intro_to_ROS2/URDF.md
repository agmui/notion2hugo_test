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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRWSHT4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDT1X4nG0QFKXxojqmesopBWDL6YbfgMTVqGzfv9yGGqAIhAL%2Fj9%2B2z2Q19obMMeukJ0DmGm5aQkCi9N3ABEelw5riJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzkbN7xgJ6o9dQH7fIq3APOGwz5XPRHeNTBhETAafqBEY0lzSE6Ef%2Fo2Zg5Y0A8GnoIk8EtVjN4%2F7AtWGC9igb5aLGP0cal%2BeIYZ2edM17DDFgnegXE98syabRiwrCBUW26nu6DtEZHWIEd73Bvl1s2GaCsZi2BVlnpQQAd8EcyAtkEXUEUpO5ASbIZ9uT5mL%2B1jCB12BXPjmqpQivBHRVbACqw7P9c3yCODhLyeNKbmaYeWrfkjKkI%2FP9H7bejwUW8Cr%2FOBQDM0WkZeX8XyF3Qmnbvb8aljsvy18XovDNZpJjFhwTNJffW6n1yZM7xTnGGpURSzqRotKF8P3QJrBwHeTzkS6dj9q%2BZgJym%2BheIE2uIK8waPFo1GhOqUgCCySdnnLD0VF8vMF5NrwSUgr%2FAUN9WQwT0l86neH%2B%2B54DhfdkvaQoasrVvQlOCiewKD79QzKGFbGmgRgtS2oz9S1qPUzuCcF0k1Ln1nTr3rQ5EPffEavLVbzXsL%2B5WQ2Jkov2axt2xYFm5WgU6bBsMqIYmFFJ1TaVy3OPlq%2BfuQ1eOqrcKJ5yj0MwxvigCujNnjzHt%2F0B4ncCaECOWDaYGNYKdMzIaatk5vExaaImRygYCpcA6r7GwEBrrnlPQvnGSgUPFqxwvH5Qx16%2BegzDU%2Fui%2BBjqkAVuXb3wt4MJJMKNXzDp%2FQgkFRDdv9Wm4HcY%2BnvKMG3o%2FDztw338GBJGAKj3uNQA4U6c227ft5aGm6w5x%2F%2BNuBDvOSURVLJIgwILbSs34p42cOdh5szzgM%2FZrhFUDrO26x112HvlsJDj%2FtVrHX98y4Jx5%2F6FchRw3h31GCkZYekroz0ZPYBKWbqr%2B2QGJRxD2%2BgbT0BbEjR2BT7LeZ8huKPPMEGin&X-Amz-Signature=f957415440f1b3d005efe3bd86d1ca2612516967a1ee210065e582ef4116de8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRWSHT4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDT1X4nG0QFKXxojqmesopBWDL6YbfgMTVqGzfv9yGGqAIhAL%2Fj9%2B2z2Q19obMMeukJ0DmGm5aQkCi9N3ABEelw5riJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzkbN7xgJ6o9dQH7fIq3APOGwz5XPRHeNTBhETAafqBEY0lzSE6Ef%2Fo2Zg5Y0A8GnoIk8EtVjN4%2F7AtWGC9igb5aLGP0cal%2BeIYZ2edM17DDFgnegXE98syabRiwrCBUW26nu6DtEZHWIEd73Bvl1s2GaCsZi2BVlnpQQAd8EcyAtkEXUEUpO5ASbIZ9uT5mL%2B1jCB12BXPjmqpQivBHRVbACqw7P9c3yCODhLyeNKbmaYeWrfkjKkI%2FP9H7bejwUW8Cr%2FOBQDM0WkZeX8XyF3Qmnbvb8aljsvy18XovDNZpJjFhwTNJffW6n1yZM7xTnGGpURSzqRotKF8P3QJrBwHeTzkS6dj9q%2BZgJym%2BheIE2uIK8waPFo1GhOqUgCCySdnnLD0VF8vMF5NrwSUgr%2FAUN9WQwT0l86neH%2B%2B54DhfdkvaQoasrVvQlOCiewKD79QzKGFbGmgRgtS2oz9S1qPUzuCcF0k1Ln1nTr3rQ5EPffEavLVbzXsL%2B5WQ2Jkov2axt2xYFm5WgU6bBsMqIYmFFJ1TaVy3OPlq%2BfuQ1eOqrcKJ5yj0MwxvigCujNnjzHt%2F0B4ncCaECOWDaYGNYKdMzIaatk5vExaaImRygYCpcA6r7GwEBrrnlPQvnGSgUPFqxwvH5Qx16%2BegzDU%2Fui%2BBjqkAVuXb3wt4MJJMKNXzDp%2FQgkFRDdv9Wm4HcY%2BnvKMG3o%2FDztw338GBJGAKj3uNQA4U6c227ft5aGm6w5x%2F%2BNuBDvOSURVLJIgwILbSs34p42cOdh5szzgM%2FZrhFUDrO26x112HvlsJDj%2FtVrHX98y4Jx5%2F6FchRw3h31GCkZYekroz0ZPYBKWbqr%2B2QGJRxD2%2BgbT0BbEjR2BT7LeZ8huKPPMEGin&X-Amz-Signature=0cccde6efcea7884a4b03c52b07a0e9b435aede363ef063aa3ff598debcbc98a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
