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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHXXIK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCh%2FbZ3766%2BkMXOgOp1p%2Bkabm8D70GgeMUxjfnovO2Y3gIgV8SUTBh4UiuT8fuBCJY50Ddn6GnEH7GVQjaqFgiMKmYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTjWkxmX3zYt%2B7PCSrcA9LKHIPAzRqajtbyQlKL2K1wxWBZnkeJ1H3EyrE04eUferPKNiDYCNhS%2Bz%2F6YsAtr5ER8SoivTww5zuyQcIIvQYeM4rhDJJmjdiOw5QdNdneHi5CxT4fadCSs5nXQzFdqf1c%2FT%2BXbjjgJ2fGamUgi1Tm820ZqO51aqRpIr83gqmqmqgPOIp2LhQXVRWF1OAiNpqyZuLGYRi6FJHzwiRVGGOrWMRfhNG%2Fh%2FEx%2BbNahfFsBc%2BakQr2NPEWYvXOZap2VLFWzogB450Z9kPGOp4Y%2FSJ0%2FQzk4mJCJlyexTxglVU3wl5fbBQOH064jtpE8XFerrx9jQp92OkeUVEK1H5zv0fwVwF4XOZL9xx3oSd%2BHO1CUcRUV4lZStWLhgseJN3R%2FxDYiAARviUAVqbwM8DXyShAJR4RtwHEkY3FKnPrytAtSyIRGkGI4DgnMDBweLZ3Ko4u6UpAw9lroC3URLkVUb8xspHaxxuUtRxoZE1iMWyICT6eJtU5hf8D2yGGZzxs6IDDH2%2BaKAbGpk2%2BJuPgt8Nw4a%2FN5TABVCPGiS%2BQGErZB9QdD2UrjZCT7EcUBW8p3HeFIT%2F6yg3GPdV9MmlmnXX8Uf8dLqj19Sc2QuEkzprA%2BHNiYTCduXZq93CrMJKLncAGOqUBEH3VJ8dUIL2x78lbQfcpQVpCpTpwBdGN4eHwLX9zbfs5buAwFRGGPE%2FWziZxwu4QtKlTBn1ioh%2F%2BNLHwEvsWYdRx6t9SLjLyAtTzwbXzwqtLxjd3Ry995cph2ES259fR%2FnEO02hm3baj7Xr0wXbpAKDpv7d1V%2FalFYdERINPZT0hupKmLbDViV3fiLKavJiPPzGTQcZFf%2FtEv2m3mtEFtjWKG8%2BY&X-Amz-Signature=ab34d55e503245551fd5836e954f34731f354fd3f18f9d172d2d55f1fe555db6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHXXIK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCh%2FbZ3766%2BkMXOgOp1p%2Bkabm8D70GgeMUxjfnovO2Y3gIgV8SUTBh4UiuT8fuBCJY50Ddn6GnEH7GVQjaqFgiMKmYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTjWkxmX3zYt%2B7PCSrcA9LKHIPAzRqajtbyQlKL2K1wxWBZnkeJ1H3EyrE04eUferPKNiDYCNhS%2Bz%2F6YsAtr5ER8SoivTww5zuyQcIIvQYeM4rhDJJmjdiOw5QdNdneHi5CxT4fadCSs5nXQzFdqf1c%2FT%2BXbjjgJ2fGamUgi1Tm820ZqO51aqRpIr83gqmqmqgPOIp2LhQXVRWF1OAiNpqyZuLGYRi6FJHzwiRVGGOrWMRfhNG%2Fh%2FEx%2BbNahfFsBc%2BakQr2NPEWYvXOZap2VLFWzogB450Z9kPGOp4Y%2FSJ0%2FQzk4mJCJlyexTxglVU3wl5fbBQOH064jtpE8XFerrx9jQp92OkeUVEK1H5zv0fwVwF4XOZL9xx3oSd%2BHO1CUcRUV4lZStWLhgseJN3R%2FxDYiAARviUAVqbwM8DXyShAJR4RtwHEkY3FKnPrytAtSyIRGkGI4DgnMDBweLZ3Ko4u6UpAw9lroC3URLkVUb8xspHaxxuUtRxoZE1iMWyICT6eJtU5hf8D2yGGZzxs6IDDH2%2BaKAbGpk2%2BJuPgt8Nw4a%2FN5TABVCPGiS%2BQGErZB9QdD2UrjZCT7EcUBW8p3HeFIT%2F6yg3GPdV9MmlmnXX8Uf8dLqj19Sc2QuEkzprA%2BHNiYTCduXZq93CrMJKLncAGOqUBEH3VJ8dUIL2x78lbQfcpQVpCpTpwBdGN4eHwLX9zbfs5buAwFRGGPE%2FWziZxwu4QtKlTBn1ioh%2F%2BNLHwEvsWYdRx6t9SLjLyAtTzwbXzwqtLxjd3Ry995cph2ES259fR%2FnEO02hm3baj7Xr0wXbpAKDpv7d1V%2FalFYdERINPZT0hupKmLbDViV3fiLKavJiPPzGTQcZFf%2FtEv2m3mtEFtjWKG8%2BY&X-Amz-Signature=0e34617cd0396410e8af5fca8d13581a67d376beede8d766eb126a661fc2f902&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
