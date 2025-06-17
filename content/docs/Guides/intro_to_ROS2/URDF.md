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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZSQJ6S%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVicJE4A5iH9fPYx3l1B88sA2pm1Kh%2Bo3peBQcWya7%2BAiALsRQQ322lfPEGveJehXkPxpWWyue%2B26aLWv2VP1cNjSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDN06BVixNmGPXvbzKtwDIBxj9VCyg%2BIeaGJSBAgFzoNpA6lIM6UJUikcaSax6tJrqKJ9XVrPdnvHFDsgGJAFgQ5p8Yp%2FpA32wqBALHnXqJuzkdV57UimvrsIBf2pnxawkXV7K12o57LGSqkOD9EhTBuP4fVuWCc5j0IXoD0C02LwAsDwtRgCfj%2FAUzV%2FshifGd8%2BdEFJxDkUgEcNEGeBoqlDwfHvnGqaV6nvLyE6AbcgMPgaqfldT229rnrtOCbMoew7J8zDjLzHvVxF0e4%2Bb6mA88K%2BACXgQupmK7KDeJp%2FrTguUlSPcyc50rVp7nxB8vlYSAcwn5x6yjuE7Dq767Iy2albBx7sEJyL2BU3tTVpVtZwUUQNn0fFwXIuJUFr%2B3Z1GOKh44akxMgnKZmhUMAuFXoQSXAKisMnPKZCAQEh%2Byn7GZeGeTiReUtBQTELRM0fAs2c71IsqS07bDc8ZGhdGzrFEHFxFplrMwPZQs51WBPgzEoe3GAjOSo3Od0azpdYc4cO317C95WWTW8mlZgx3nvc7kSVVdT3LxNaCG8utmzhpxSYrLBX7ABu5H5%2BnFzZIiLiF1mmNSiO1WsFGJebDl0yBCWdjhWWHx7ECPAziEkyFveWZ3vMaJmRYSN29F5aBs020nKHxCgw8qbFwgY6pgE1hAjI9UoH5zMlZu6xpQuMv2VIJgK90uEr2m9%2FraEgyNOuug1hsPp3diFrtwBloVgD9t5UHf0OuXDsNmtiKQ9%2FJ2lFgctEMx0wMl29qmMqQOIwsT9VyQmc%2FX56qyovTT68VnnCh31vRIpykHMljdj%2BLGuVtl164G%2B3oPZpZoR7ycuzv%2BGPW3ou%2Fj2Go%2BK8h1jvchmkhCPepgEBRFS9JzLkstKmsVem&X-Amz-Signature=f2c8a7c232713454bf8aa558f39dc124c6f6bc76439ec6189a1aeabb1dc2b1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZSQJ6S%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVicJE4A5iH9fPYx3l1B88sA2pm1Kh%2Bo3peBQcWya7%2BAiALsRQQ322lfPEGveJehXkPxpWWyue%2B26aLWv2VP1cNjSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDN06BVixNmGPXvbzKtwDIBxj9VCyg%2BIeaGJSBAgFzoNpA6lIM6UJUikcaSax6tJrqKJ9XVrPdnvHFDsgGJAFgQ5p8Yp%2FpA32wqBALHnXqJuzkdV57UimvrsIBf2pnxawkXV7K12o57LGSqkOD9EhTBuP4fVuWCc5j0IXoD0C02LwAsDwtRgCfj%2FAUzV%2FshifGd8%2BdEFJxDkUgEcNEGeBoqlDwfHvnGqaV6nvLyE6AbcgMPgaqfldT229rnrtOCbMoew7J8zDjLzHvVxF0e4%2Bb6mA88K%2BACXgQupmK7KDeJp%2FrTguUlSPcyc50rVp7nxB8vlYSAcwn5x6yjuE7Dq767Iy2albBx7sEJyL2BU3tTVpVtZwUUQNn0fFwXIuJUFr%2B3Z1GOKh44akxMgnKZmhUMAuFXoQSXAKisMnPKZCAQEh%2Byn7GZeGeTiReUtBQTELRM0fAs2c71IsqS07bDc8ZGhdGzrFEHFxFplrMwPZQs51WBPgzEoe3GAjOSo3Od0azpdYc4cO317C95WWTW8mlZgx3nvc7kSVVdT3LxNaCG8utmzhpxSYrLBX7ABu5H5%2BnFzZIiLiF1mmNSiO1WsFGJebDl0yBCWdjhWWHx7ECPAziEkyFveWZ3vMaJmRYSN29F5aBs020nKHxCgw8qbFwgY6pgE1hAjI9UoH5zMlZu6xpQuMv2VIJgK90uEr2m9%2FraEgyNOuug1hsPp3diFrtwBloVgD9t5UHf0OuXDsNmtiKQ9%2FJ2lFgctEMx0wMl29qmMqQOIwsT9VyQmc%2FX56qyovTT68VnnCh31vRIpykHMljdj%2BLGuVtl164G%2B3oPZpZoR7ycuzv%2BGPW3ou%2Fj2Go%2BK8h1jvchmkhCPepgEBRFS9JzLkstKmsVem&X-Amz-Signature=bae8d3ca8785c303f250c53c9c1da77ff9ae89d60f34a2cc3cb89da7fd5d66aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
