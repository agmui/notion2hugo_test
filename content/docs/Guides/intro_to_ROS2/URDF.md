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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5AQUMD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBGsh1HCOFk3aK%2BBISvEo7%2FyZ7synkFTAIDU9byKCY7bAiAc29xPVXnrRVYJYcHnDyYv7Uxw4nVg8UvEHcR%2BZAPHVir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMTIQbpuffSdfxghY%2BKtwDanDMgT9cOQnN6PFpIAKmzXtadTxWYpbwrFT21jq98VyBep00wByScjQKI4iNZ9wAG7N%2FPbKiaoLHSyC7RLdLs3slKPrtRMbD1a3ts%2FWGECJpvUDfqUAP%2BBVBhMf9ig%2FKqu%2FZ24O15QVtjCuLBvjpeaijFx5JZKif6Ri8OYI5dh7wlSogCjKTlpxG3Ih3T0F0WNeAAL4e4vQ2Dyef8kmq2%2FXVTUOSGoAs8uGYI0MjG5NgyAQ7QlXAWBvqXz2lvF%2Fo6s5BxoAnXO3VG%2BwL%2Btv6VJZpctIzUEu%2BYjYxjNOFMhNydq87ynHWslKTilDo99wXd33C4Hg24FjHtepbAY16WTWJLL4W%2BI5%2BkuFuwz0RzzrV8cWCdNdlxG7Mq8Q%2FZw5AfdzKf4p6ZQ96sarK9e%2BBsN9MbZH8O4fgy6z5%2FRYp0SaHimEArT1nbXjaaihuBc3v3XdnqlP%2FjIh3Q0R7kjrnmsS1KDhy27bXR4SEONV0%2FJjZymdG%2BKfo%2B2gNFb6zbSklUab2Bp%2BW6mxl29Yrw%2FTb0nvfAhts0jQThWFWSnr90w6PY1lUBxJk0qiNAqCGcMsIVtzov9tX%2B7e89eL0JXqQlWIKNWYEF%2BTnxIVF1Dr0WxDkCQTr26RPBV6Q1%2Bkw8IfmwgY6pgGL8FR9cpSkg1ECCxyjDlJaHooB7Q5weqwPK3uULI9tbWvYpyk7H29F%2FM2vuJnizbJPyDNtFEqnQyEbzVn6GSxzGNb7Hx5dn6cchvfgqeoGmUDF42LYpvGQoGOou2BO0UMusTRA7KIxlw4FKTqtEtLnXiwzXYM2nW9S10ubqvpYffLIbbhEZc4mn0oP9HJTxPRCZzlfEv3j%2B8JVwuMKPvJwig%2FpgV6y&X-Amz-Signature=ba6941d93409e4d539b53495aacf11aa1b378e3b7ce7d19b1c65d64956f7e509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5AQUMD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBGsh1HCOFk3aK%2BBISvEo7%2FyZ7synkFTAIDU9byKCY7bAiAc29xPVXnrRVYJYcHnDyYv7Uxw4nVg8UvEHcR%2BZAPHVir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMTIQbpuffSdfxghY%2BKtwDanDMgT9cOQnN6PFpIAKmzXtadTxWYpbwrFT21jq98VyBep00wByScjQKI4iNZ9wAG7N%2FPbKiaoLHSyC7RLdLs3slKPrtRMbD1a3ts%2FWGECJpvUDfqUAP%2BBVBhMf9ig%2FKqu%2FZ24O15QVtjCuLBvjpeaijFx5JZKif6Ri8OYI5dh7wlSogCjKTlpxG3Ih3T0F0WNeAAL4e4vQ2Dyef8kmq2%2FXVTUOSGoAs8uGYI0MjG5NgyAQ7QlXAWBvqXz2lvF%2Fo6s5BxoAnXO3VG%2BwL%2Btv6VJZpctIzUEu%2BYjYxjNOFMhNydq87ynHWslKTilDo99wXd33C4Hg24FjHtepbAY16WTWJLL4W%2BI5%2BkuFuwz0RzzrV8cWCdNdlxG7Mq8Q%2FZw5AfdzKf4p6ZQ96sarK9e%2BBsN9MbZH8O4fgy6z5%2FRYp0SaHimEArT1nbXjaaihuBc3v3XdnqlP%2FjIh3Q0R7kjrnmsS1KDhy27bXR4SEONV0%2FJjZymdG%2BKfo%2B2gNFb6zbSklUab2Bp%2BW6mxl29Yrw%2FTb0nvfAhts0jQThWFWSnr90w6PY1lUBxJk0qiNAqCGcMsIVtzov9tX%2B7e89eL0JXqQlWIKNWYEF%2BTnxIVF1Dr0WxDkCQTr26RPBV6Q1%2Bkw8IfmwgY6pgGL8FR9cpSkg1ECCxyjDlJaHooB7Q5weqwPK3uULI9tbWvYpyk7H29F%2FM2vuJnizbJPyDNtFEqnQyEbzVn6GSxzGNb7Hx5dn6cchvfgqeoGmUDF42LYpvGQoGOou2BO0UMusTRA7KIxlw4FKTqtEtLnXiwzXYM2nW9S10ubqvpYffLIbbhEZc4mn0oP9HJTxPRCZzlfEv3j%2B8JVwuMKPvJwig%2FpgV6y&X-Amz-Signature=503b68c284575a707331bf724b23bff20caf22b4be38b30952d6a9cce4f94cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
