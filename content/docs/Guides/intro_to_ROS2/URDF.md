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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6FYMD5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICABMKE%2B28EL1QJfGBkrxdvV5NOXumecpAKFGRLMH1RoAiArdvCIUM3JFl%2FozPpHtqp%2Fw6SKJQwytpEK7PZ0n6%2F%2Fiyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM%2FyR0LtEZEMKDoybNKtwDAMKdlGoDaB7m79782MR%2F9atUuzr9yaY%2F8M01OWgFm85tlR4Tycdt4GBUGMaCRU3BbMKUPR78QX7zD%2BFC5T3iqy0jjW0O7DZ6xPk1UwaW7W4HcJi%2BpxgvcxO6blxyMqZl9doZ2VC5Ujw2FINrBo26ob9uKyM2MRLdalm8YgXV2ttfmva23aE%2F1k%2FDyer%2FLV9t5BF0BLBLwUNoDUsTrQWKbgSha1viEGAN%2FAd04lZE%2FFwEylIXqp1nOxb%2BBpkmaqwVAZuVGO2%2BfGpWnMxF1Khi0wsizt73ECVFEqRZ1O6pLh2XZowSLVKvOA%2ByXGIhk6m02tiK7HFzIZJQPNMOB2w8kzhc4dfWiGI4G21biNamZhv6L6FG0u01bemKlq%2F4ChusOHWoPrHJLdcY0XhHf393NaytfeZn1kA69P2g5OVWl7jhqqaQcb4uQUml1StrudmG7uJHtR7TNCUble4wivf3hKK71maQcJPKgv9h8%2F%2BrxkiiECCd4h3Zx5kxn4aIb%2FL2HzQjm7gK%2FBlsW7uQR%2BhGGNs0uda4HNojATV1GztGANekLudstOvtgKRL7zn9RSANlAS2yxhAg0BcvMU%2FHLnSR98%2BxBVQ%2Fv4zZSM8YMgwwmd3I5lQ2jinhsFhUbQw6ebowgY6pgHXD2RThalYS%2BPFl3o%2FQK62Z%2FbJQUL4ot8H4ZmC7r3rj4BukOjX5ewYBdLVuI9fjdQ%2FoXHFuwNQcV4GWTGfYD3lybT1dnwXWHjtMtXtMH%2BUn%2F5fW8WR4U9o2sM56G3Vj7Gpb3As5IGLF%2BAAL8ZGuYzbBo02Qaff1D8srCR1uktalSQhfg3fg%2F3Q1aPAp69kdaPRQDOF3KwLFjOLN01LVkEjbCFvaWpU&X-Amz-Signature=fbddf553d09ac86bc8cb300dbeaa81592f776e1654f297e2e83649522051022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6FYMD5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICABMKE%2B28EL1QJfGBkrxdvV5NOXumecpAKFGRLMH1RoAiArdvCIUM3JFl%2FozPpHtqp%2Fw6SKJQwytpEK7PZ0n6%2F%2Fiyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM%2FyR0LtEZEMKDoybNKtwDAMKdlGoDaB7m79782MR%2F9atUuzr9yaY%2F8M01OWgFm85tlR4Tycdt4GBUGMaCRU3BbMKUPR78QX7zD%2BFC5T3iqy0jjW0O7DZ6xPk1UwaW7W4HcJi%2BpxgvcxO6blxyMqZl9doZ2VC5Ujw2FINrBo26ob9uKyM2MRLdalm8YgXV2ttfmva23aE%2F1k%2FDyer%2FLV9t5BF0BLBLwUNoDUsTrQWKbgSha1viEGAN%2FAd04lZE%2FFwEylIXqp1nOxb%2BBpkmaqwVAZuVGO2%2BfGpWnMxF1Khi0wsizt73ECVFEqRZ1O6pLh2XZowSLVKvOA%2ByXGIhk6m02tiK7HFzIZJQPNMOB2w8kzhc4dfWiGI4G21biNamZhv6L6FG0u01bemKlq%2F4ChusOHWoPrHJLdcY0XhHf393NaytfeZn1kA69P2g5OVWl7jhqqaQcb4uQUml1StrudmG7uJHtR7TNCUble4wivf3hKK71maQcJPKgv9h8%2F%2BrxkiiECCd4h3Zx5kxn4aIb%2FL2HzQjm7gK%2FBlsW7uQR%2BhGGNs0uda4HNojATV1GztGANekLudstOvtgKRL7zn9RSANlAS2yxhAg0BcvMU%2FHLnSR98%2BxBVQ%2Fv4zZSM8YMgwwmd3I5lQ2jinhsFhUbQw6ebowgY6pgHXD2RThalYS%2BPFl3o%2FQK62Z%2FbJQUL4ot8H4ZmC7r3rj4BukOjX5ewYBdLVuI9fjdQ%2FoXHFuwNQcV4GWTGfYD3lybT1dnwXWHjtMtXtMH%2BUn%2F5fW8WR4U9o2sM56G3Vj7Gpb3As5IGLF%2BAAL8ZGuYzbBo02Qaff1D8srCR1uktalSQhfg3fg%2F3Q1aPAp69kdaPRQDOF3KwLFjOLN01LVkEjbCFvaWpU&X-Amz-Signature=73d3bebe8a0ba59a5d4eea38a7f340cd897655d03ebcfc8820118bf036e6f06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
