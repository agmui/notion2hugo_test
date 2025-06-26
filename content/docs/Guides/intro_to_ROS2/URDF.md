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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3A3UVHW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCTpBLl6BBs9qSEs3zi3uU4rmhLmPE7sAeRMiId66nz9QIgUTWzBXmxR3oXMDD%2FjNU074VSUlUgYoUtV1bwzYSv9Xwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOovrUw9BQUM6RetVircAxZzJJYre2oHddGacO3vGlhPR0Ogi0zEubnv%2FtH%2FKrOHyZnJrfo9QoX2mwELGewfMmzSIldjaUE5aUN2rw2%2BCjC8BOWUcXR154y%2BGMa7kY1KkSW7xZ28h2%2FmEQYdIwHVMflJcX2COj1SiSpQ%2BAxP7zrKmIWcizBhl2mTlyyc5Ku5HvFVrqQnm0Rg%2BWcpFjMc%2BhWPpMqXCOqEyoYKKRug%2Byq06fqncRYSp3fuWdYWYJR36Sp5Elz711tJfs%2Bw0Rtu98u7uaXsRQuG6RZfBp83PUUyZUu55gM%2FSPC7QZf18r%2F1phzkpWdCW1Ost0G7zGe6p7DsCO6gTpTGR2enNpcVEaFcudTwWp7rG1zSVIrfsALIBtNTo%2BFALoqGDKz%2B7%2Fe5LYAOYrh%2FOhhugA0rt9enixLBmPcMULXdI67g8vQIr38%2BB%2F1Mf%2BtlrjsVhgHK5YC0SSk%2F68HgcMg6HHgOXjNA190g4IM7ZC89n3Qr82QbHbY9KOnqMWbyI3EZzw4aozv6WnFrc%2Fqz7dSBh2G7xTvBZHUFQ2xwoUCJCPzNLb6AUGJNh%2BuEqZIoenn2GsGInGBcc%2FrFGvKtpkgBqPs6ypUTiBUSOFjJjt0gtNzelXoSiXTREMjmFC%2B%2BUunn9%2FClMIGW9MIGOqUBG4mRG6hkYzg%2FAG7FW6jygV4SP9Vc0gnTvsaTYRx96M7zrnW%2BpOAQb2vEMH2JUn%2Fw5MWNj9Tu1Qo0riwRqBQTL%2Bvse3TNkmhVNvw%2BcGGkq6jP3uMHdGnK3ET5T4SwnOZwXG0muWHZTtW6R17x2kDG%2B2FfbxUlol0fbcawrKFVgC%2FqFlK6ZiEfandbiGsli5RCSHka%2FARPi3PtO2qePJYcHZGvOrXw&X-Amz-Signature=70d3bae65bf3c675afa6092ef797092275b6924bd3091ced7e4ff19d4295ef7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3A3UVHW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCTpBLl6BBs9qSEs3zi3uU4rmhLmPE7sAeRMiId66nz9QIgUTWzBXmxR3oXMDD%2FjNU074VSUlUgYoUtV1bwzYSv9Xwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOovrUw9BQUM6RetVircAxZzJJYre2oHddGacO3vGlhPR0Ogi0zEubnv%2FtH%2FKrOHyZnJrfo9QoX2mwELGewfMmzSIldjaUE5aUN2rw2%2BCjC8BOWUcXR154y%2BGMa7kY1KkSW7xZ28h2%2FmEQYdIwHVMflJcX2COj1SiSpQ%2BAxP7zrKmIWcizBhl2mTlyyc5Ku5HvFVrqQnm0Rg%2BWcpFjMc%2BhWPpMqXCOqEyoYKKRug%2Byq06fqncRYSp3fuWdYWYJR36Sp5Elz711tJfs%2Bw0Rtu98u7uaXsRQuG6RZfBp83PUUyZUu55gM%2FSPC7QZf18r%2F1phzkpWdCW1Ost0G7zGe6p7DsCO6gTpTGR2enNpcVEaFcudTwWp7rG1zSVIrfsALIBtNTo%2BFALoqGDKz%2B7%2Fe5LYAOYrh%2FOhhugA0rt9enixLBmPcMULXdI67g8vQIr38%2BB%2F1Mf%2BtlrjsVhgHK5YC0SSk%2F68HgcMg6HHgOXjNA190g4IM7ZC89n3Qr82QbHbY9KOnqMWbyI3EZzw4aozv6WnFrc%2Fqz7dSBh2G7xTvBZHUFQ2xwoUCJCPzNLb6AUGJNh%2BuEqZIoenn2GsGInGBcc%2FrFGvKtpkgBqPs6ypUTiBUSOFjJjt0gtNzelXoSiXTREMjmFC%2B%2BUunn9%2FClMIGW9MIGOqUBG4mRG6hkYzg%2FAG7FW6jygV4SP9Vc0gnTvsaTYRx96M7zrnW%2BpOAQb2vEMH2JUn%2Fw5MWNj9Tu1Qo0riwRqBQTL%2Bvse3TNkmhVNvw%2BcGGkq6jP3uMHdGnK3ET5T4SwnOZwXG0muWHZTtW6R17x2kDG%2B2FfbxUlol0fbcawrKFVgC%2FqFlK6ZiEfandbiGsli5RCSHka%2FARPi3PtO2qePJYcHZGvOrXw&X-Amz-Signature=4bbbf12622d5cc167a813cc2d5d64b8e9bbf9868a2cf2b7f70c655d9c16816bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
