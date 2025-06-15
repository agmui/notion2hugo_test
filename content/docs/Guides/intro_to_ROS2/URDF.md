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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCW3F2AC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDblhS7vdeNy0ZadbX3Hx95wXri5hBp2C%2FQZxZN42MryQIgAybH1TgrzNHZ2YBxww6DR8uaQPZ36uQkOFGKdCUMOrgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDy%2B9dixIeI5J9ijpSrcAz6taaCsLQhk6KxEAxC09YnMu2Od40DjmPnlg%2BVDFDoh60FnvKfR%2BqSNIATC%2FNxA4T3ON5YUUXauVE1VKQiR1yRnNfvm4YrzysF7XrmkcGjRMpckapxnRH8XyN0YxDnxWxv%2Bf8xsJklG4gg3pQ%2BLp2wWAvaIk1uT44RxlkuXa8mjAJZBr0XM3%2F4IH7soPEH5Rpq6dCFEcOHzl7eT6OHaJhY8%2BlZ8UuU5XCO03VxBzMViM5q31awV%2FTXrnKwMZoQG5mvF%2BxnZxG5DX%2F65ibSmhT2BqUrtmpK0buL%2BIcpZTF%2BfX9QXKIZUlsLlTqHpGZCMhUM2fz0B4vx9ChlwxWqkb0tpIsiV%2Ba6Jg%2FYTHklSi3Y7cYls9wbzBDsNh6xdGr5xxzSX24iyxL5hiYAOY6l982LGEQ%2FwYnAN7TFgDOnCgoZVxedtob3%2BM6QOW0Hb7AA1LIbHhicVFhewrk3g4iEks2ocABk%2BFGvtHGc8K7GnbCq2o6Eg3UYkMYZUhy%2BqsvI9Qdx6tXMJJKqWQUCwHMG4o2eY4gdg7E60DWPdHDRz6G20FWQBZd8oycHLf5Yxp7aANCQRzzBi995DI6c%2FXH6nyrKDSO5b4Y1TTVpMGju5y7aOfjChGCt%2FliDUYKTyMKn%2FuMIGOqUBHCtEb6%2FJ8uPAJI4wTth1BXXaGhIIeWhCAPgd10Asi2hlDSRVbjVfADkTMNY6BQpyf55XCqww%2FgFGScJPPVIUP4hV72D7cuggSso2XIoKvKcR%2FnqUGTLDtWon5TDSXxm2ftPwrGt2oaIeu0viP0Heb07KCRXMbcm4Ge46cfBqKf2wxtgjK0f%2Bca2o7HcEkTeB6gxConX%2BfOokC31AjiAOtihfhPbB&X-Amz-Signature=d81dbfcba19d60addaf19cc3a44d0fe88b48aa73e60bbc7813d8631a0d8a2bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCW3F2AC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDblhS7vdeNy0ZadbX3Hx95wXri5hBp2C%2FQZxZN42MryQIgAybH1TgrzNHZ2YBxww6DR8uaQPZ36uQkOFGKdCUMOrgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDy%2B9dixIeI5J9ijpSrcAz6taaCsLQhk6KxEAxC09YnMu2Od40DjmPnlg%2BVDFDoh60FnvKfR%2BqSNIATC%2FNxA4T3ON5YUUXauVE1VKQiR1yRnNfvm4YrzysF7XrmkcGjRMpckapxnRH8XyN0YxDnxWxv%2Bf8xsJklG4gg3pQ%2BLp2wWAvaIk1uT44RxlkuXa8mjAJZBr0XM3%2F4IH7soPEH5Rpq6dCFEcOHzl7eT6OHaJhY8%2BlZ8UuU5XCO03VxBzMViM5q31awV%2FTXrnKwMZoQG5mvF%2BxnZxG5DX%2F65ibSmhT2BqUrtmpK0buL%2BIcpZTF%2BfX9QXKIZUlsLlTqHpGZCMhUM2fz0B4vx9ChlwxWqkb0tpIsiV%2Ba6Jg%2FYTHklSi3Y7cYls9wbzBDsNh6xdGr5xxzSX24iyxL5hiYAOY6l982LGEQ%2FwYnAN7TFgDOnCgoZVxedtob3%2BM6QOW0Hb7AA1LIbHhicVFhewrk3g4iEks2ocABk%2BFGvtHGc8K7GnbCq2o6Eg3UYkMYZUhy%2BqsvI9Qdx6tXMJJKqWQUCwHMG4o2eY4gdg7E60DWPdHDRz6G20FWQBZd8oycHLf5Yxp7aANCQRzzBi995DI6c%2FXH6nyrKDSO5b4Y1TTVpMGju5y7aOfjChGCt%2FliDUYKTyMKn%2FuMIGOqUBHCtEb6%2FJ8uPAJI4wTth1BXXaGhIIeWhCAPgd10Asi2hlDSRVbjVfADkTMNY6BQpyf55XCqww%2FgFGScJPPVIUP4hV72D7cuggSso2XIoKvKcR%2FnqUGTLDtWon5TDSXxm2ftPwrGt2oaIeu0viP0Heb07KCRXMbcm4Ge46cfBqKf2wxtgjK0f%2Bca2o7HcEkTeB6gxConX%2BfOokC31AjiAOtihfhPbB&X-Amz-Signature=e621a30e371187321eba4d69e34cbc75ca610e46e0882d533d0dcd967ea7ba7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
