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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UPGGB4R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtNwlY1cjfp36jdpHNWj6Q50%2BwwmBuk8H3rYT2t2v0BAiEAg3VRgzFh474VeM9mm88tzCXrCWn3chAXxmr1UpOh258q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAtuhPJql7JfOoDs%2FircAy9ldLmProdGKlOq%2B9zS8b0h4OOzRn0uMEBwMpN%2B2t4qpJBe1PZfntdlHyhcGqOf3EzkggVwva5cI2Xlbv5ohrDEuNtQCR9g9mTbYBrGOnK4854hPSuKcC%2BoqcM4dYl1Pc44YD8x63mgarEOPygX50AUzSAdy2Y0lQISjHPwkWNMRf%2FxY7xqu5Ft2Sn%2Bn9Q9YNx3FdZ9MvnUgzd30qb68udwzVhG8Cnmo8cXeTcEMWbMXVMDUWebXLtZyNddsFi73oYIKzuyZShv0PdzEsOrSLwUDllAxLEWNJvJSTTjfYVXRN%2FoEitY1DxLp63tTgvPAXv8OjoraXoEVH0ZtGaz3S0x11vp9INoDqO5N%2BLSKBpOyTtHcTgalwDWsrHGdeIIrxLEOyA7FKwGi2jmrRNuIjHPDksRCd9O2KRcFpjhheqfjY07880mIJ%2BCFNiVqNbapiGjHf0stEgn3GDaGnZW4SUl1Ja%2B6cy9euVNJRgKCUHqotXJzVCSMOwpMi7zVLlkPSeu1Sm%2FpyAsbAoytSyYtILroicViYxyS2hgupt5CRiJyFT%2Bn9mJuqNHYr6LpMbhccLIUUm06NuhJlqP%2BWtHHE7W5S%2BRhwuUwAYMc3PV58%2Be3NBd8FmscC1QxrFTMKav6sAGOqUBsU3pw%2FTZht7d0dtxFxyFq578g3DZ3loXgZQZZ4CLdnPxi2kMZomtlpAUjaAbyBwT4VmsG0yT9JaMuvF6yaQJ2DgukZoucd%2FeXdmIaklcR1kzbhtJzR4nPSpYN6M5jZjScmJd4jopqokcW%2Fs8dVWg6CMDJKwZGthqULdPZK5yet4ZvtMDpNzGXdSAMFhbTFa3YdbqnBopiTwLiyrQh19MwZ63sESo&X-Amz-Signature=27cb24991386e9eac9bdf0b0b59fbf651f384d0e5f149036e1ddc3d87fabbcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UPGGB4R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtNwlY1cjfp36jdpHNWj6Q50%2BwwmBuk8H3rYT2t2v0BAiEAg3VRgzFh474VeM9mm88tzCXrCWn3chAXxmr1UpOh258q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAtuhPJql7JfOoDs%2FircAy9ldLmProdGKlOq%2B9zS8b0h4OOzRn0uMEBwMpN%2B2t4qpJBe1PZfntdlHyhcGqOf3EzkggVwva5cI2Xlbv5ohrDEuNtQCR9g9mTbYBrGOnK4854hPSuKcC%2BoqcM4dYl1Pc44YD8x63mgarEOPygX50AUzSAdy2Y0lQISjHPwkWNMRf%2FxY7xqu5Ft2Sn%2Bn9Q9YNx3FdZ9MvnUgzd30qb68udwzVhG8Cnmo8cXeTcEMWbMXVMDUWebXLtZyNddsFi73oYIKzuyZShv0PdzEsOrSLwUDllAxLEWNJvJSTTjfYVXRN%2FoEitY1DxLp63tTgvPAXv8OjoraXoEVH0ZtGaz3S0x11vp9INoDqO5N%2BLSKBpOyTtHcTgalwDWsrHGdeIIrxLEOyA7FKwGi2jmrRNuIjHPDksRCd9O2KRcFpjhheqfjY07880mIJ%2BCFNiVqNbapiGjHf0stEgn3GDaGnZW4SUl1Ja%2B6cy9euVNJRgKCUHqotXJzVCSMOwpMi7zVLlkPSeu1Sm%2FpyAsbAoytSyYtILroicViYxyS2hgupt5CRiJyFT%2Bn9mJuqNHYr6LpMbhccLIUUm06NuhJlqP%2BWtHHE7W5S%2BRhwuUwAYMc3PV58%2Be3NBd8FmscC1QxrFTMKav6sAGOqUBsU3pw%2FTZht7d0dtxFxyFq578g3DZ3loXgZQZZ4CLdnPxi2kMZomtlpAUjaAbyBwT4VmsG0yT9JaMuvF6yaQJ2DgukZoucd%2FeXdmIaklcR1kzbhtJzR4nPSpYN6M5jZjScmJd4jopqokcW%2Fs8dVWg6CMDJKwZGthqULdPZK5yet4ZvtMDpNzGXdSAMFhbTFa3YdbqnBopiTwLiyrQh19MwZ63sESo&X-Amz-Signature=90d3f6204e5d3b2cd0f8239e73fa465a79f729b4daa1531ba840dcd56215a5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
