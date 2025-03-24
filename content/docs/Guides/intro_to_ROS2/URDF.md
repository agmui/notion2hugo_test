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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZS7KZX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT7aRITo1PgnqjqGGrf4YGgtWGdNtSGiVJOuN13y%2BuKAIgUA8abCSdNI%2FP482JhG028LcmG7%2BR%2FtMbtomEehOU%2FOoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F017Msu91x3vMevircAyDgGpnIt2osfg6eirBQkjw8CVl7i%2BzdLsnuoNLadGIMRv7eXZEf1a30qXqW7npf6OiND3L%2B45PTDkTrOlxaAY37JkU1Jq7EzqyOCfjkQeAVkWwK7qYDmfnRu%2FWzGs7aa9W0Z7Td0Ta%2FvAL6TgxYDVhs6Eg28GW0TGmuj1g1noyrQucHEU2yEsc%2B9GghV4YURcEKVIC1dCSplNy%2BhmglvC996DrvuzlhsqSC5nOWJMoZxQkN8R%2BHoJMXfCw7rA%2BtkRKXyWRUwMfox0Fcz7Yc7I1FuZc%2Fu0uEsKeBsU6ynJ5zrKXYPL2Co7HXWTsPd9NfDyqGPMLfKs1PQf9dKNQS0C9jn3KR3iUGarmW1Fs%2B%2B8xrgv0pMevPY2%2BDzCgdwOu9n6hGCaTjQAxDf9ohkgDZD5tGQ3CHaI8v2nBvYEraC7756M%2BxskKKnjfJAPPQ5rieU6VL5SderDP8a%2BiUSm5K3GykTj9rtVPO2b4mW9RZxXroLSn03kiLomKyNPa95Ej%2F172efea5459hfb7Ouis83DItYNgZ0FDBs5UzGjNY6Hgh36Ey5LKn%2B4S%2FocqhgO0AGcj2g3NUd2UKjThZe1S5kG0KFE5PlxsztyzW4HUKuoS3mseTtZjvYlwSEgB4MPO%2Bhb8GOqUBmPsl7k1es49OEMmBeQ%2F1i95OZ3UJxhQZk8W9m%2F%2FEl18TgntCahERlxdEm31o6NiafwEbtYbim0a72nxPmnh1hg%2BuUMMK3akEwdN0EUO8AN0z5GtrnNUXBDLxpSiCy9QsumhRWppxtJwsI5nGOo%2F8jirQcu5jmtEBipCGLyKfxc5byPKwAhcTh%2F3A%2FR4Y2sWaNqTupFk%2FY3%2By%2F0KfTmLWWR%2BBbgxn&X-Amz-Signature=0deff89558e0425163c7707a0027510aba66c9027f732976e617dab2fe638ced&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZS7KZX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT7aRITo1PgnqjqGGrf4YGgtWGdNtSGiVJOuN13y%2BuKAIgUA8abCSdNI%2FP482JhG028LcmG7%2BR%2FtMbtomEehOU%2FOoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F017Msu91x3vMevircAyDgGpnIt2osfg6eirBQkjw8CVl7i%2BzdLsnuoNLadGIMRv7eXZEf1a30qXqW7npf6OiND3L%2B45PTDkTrOlxaAY37JkU1Jq7EzqyOCfjkQeAVkWwK7qYDmfnRu%2FWzGs7aa9W0Z7Td0Ta%2FvAL6TgxYDVhs6Eg28GW0TGmuj1g1noyrQucHEU2yEsc%2B9GghV4YURcEKVIC1dCSplNy%2BhmglvC996DrvuzlhsqSC5nOWJMoZxQkN8R%2BHoJMXfCw7rA%2BtkRKXyWRUwMfox0Fcz7Yc7I1FuZc%2Fu0uEsKeBsU6ynJ5zrKXYPL2Co7HXWTsPd9NfDyqGPMLfKs1PQf9dKNQS0C9jn3KR3iUGarmW1Fs%2B%2B8xrgv0pMevPY2%2BDzCgdwOu9n6hGCaTjQAxDf9ohkgDZD5tGQ3CHaI8v2nBvYEraC7756M%2BxskKKnjfJAPPQ5rieU6VL5SderDP8a%2BiUSm5K3GykTj9rtVPO2b4mW9RZxXroLSn03kiLomKyNPa95Ej%2F172efea5459hfb7Ouis83DItYNgZ0FDBs5UzGjNY6Hgh36Ey5LKn%2B4S%2FocqhgO0AGcj2g3NUd2UKjThZe1S5kG0KFE5PlxsztyzW4HUKuoS3mseTtZjvYlwSEgB4MPO%2Bhb8GOqUBmPsl7k1es49OEMmBeQ%2F1i95OZ3UJxhQZk8W9m%2F%2FEl18TgntCahERlxdEm31o6NiafwEbtYbim0a72nxPmnh1hg%2BuUMMK3akEwdN0EUO8AN0z5GtrnNUXBDLxpSiCy9QsumhRWppxtJwsI5nGOo%2F8jirQcu5jmtEBipCGLyKfxc5byPKwAhcTh%2F3A%2FR4Y2sWaNqTupFk%2FY3%2By%2F0KfTmLWWR%2BBbgxn&X-Amz-Signature=40284dd2f61abc7fb1681d700770d34ee9d285c1ca82fd9819f20365f282bc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
