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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQP5UGC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGRsjIbRr6%2BUiXggxR%2Ba1N5G7HG52WZ35L4w5YCLkGY9AiBdEbE%2FaJprGqDJgPnU3O2sdDi1UC%2FHsMP26wzBXx3u0SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgJmE2CWYF2vgu3DKtwD6Ech%2F3kIA5wt97Y8zkum9tcQlknAwVILpPvDVneM0RZ4rJ9Kz1TkXhcACmxvba8FH80AtDv3%2Ba6PKuU9RyYq2nP7RGp%2BeUHPy9w5pM2IRa9YcaaAoSyHKacmHHAsyxRD7%2F3qF%2B6nOo4cBc6IZWO%2BxL2cbYqEmzU7tMmK72JkLz0S3kLRYsDkGKI%2FH4AOxsyBLbUB32kGbIB7K6T22dLRyl3SGhyRZAGnGfsKbk5SP6lgoOOJCCKzGwBETt816UxQHy966ahV%2BAGJS3oOi5sR%2FeaJEz4Oub2%2FUuRJ8L1VEVn2Or1H1E6TncdJ4Oxt3QgsQ5a23ScXxUt%2BVVl8qfrVrPYiiekb%2FxrFc7megA3SxgTlb2HYB68GanyJSMdrVp7K8S8UUawEr4XYy8URGIjta5kOdlkjFonpmqDglAWKbIkO32l3fGZ7K4AxYIAHYcMu7FBN8pr%2FMJ%2F0CD%2BUY9OJi2GL5b3ruxW0a0dNW0k7Iu335C9pHnOkDTfJkiXeZqZkCRyREkrSskDm1wyfm3mR0Wd%2FlBQ6%2F4Tpnsut1jRSCgA4lKiC8p8lsGnZ87N5RJHq59XvtiN%2BCzxd%2FPwDzSPxi%2FzLQFJTpqtSdBPpvvkn1g7cnShetoqXuuJNRKEwnJCswgY6pgGt1PUbzHeg%2FLH3EGhaj83tZmXv1APISoS%2F1MoVA2yWW48GwSRogp9MjtIbLQO5POEpVOuysfF4kBM5hJE4p7VtYqLVr9GlbM499ce8rE3sWXNPuqSgFBAZ2dgN%2FbTNPgGgWWIsXZZw5DUnPQJ2mEHZXCo2mQ%2FB6wyu0VpSDJ6g1a5hLBk3Bf3tsRL6chfcKUuJutfV2M%2B9I0w9JTy51gUpMXNrvYzS&X-Amz-Signature=97391767d6a776901e140bceaf2c9e332f50443dedf9d7fb3b5d77b0a105e6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQP5UGC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGRsjIbRr6%2BUiXggxR%2Ba1N5G7HG52WZ35L4w5YCLkGY9AiBdEbE%2FaJprGqDJgPnU3O2sdDi1UC%2FHsMP26wzBXx3u0SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgJmE2CWYF2vgu3DKtwD6Ech%2F3kIA5wt97Y8zkum9tcQlknAwVILpPvDVneM0RZ4rJ9Kz1TkXhcACmxvba8FH80AtDv3%2Ba6PKuU9RyYq2nP7RGp%2BeUHPy9w5pM2IRa9YcaaAoSyHKacmHHAsyxRD7%2F3qF%2B6nOo4cBc6IZWO%2BxL2cbYqEmzU7tMmK72JkLz0S3kLRYsDkGKI%2FH4AOxsyBLbUB32kGbIB7K6T22dLRyl3SGhyRZAGnGfsKbk5SP6lgoOOJCCKzGwBETt816UxQHy966ahV%2BAGJS3oOi5sR%2FeaJEz4Oub2%2FUuRJ8L1VEVn2Or1H1E6TncdJ4Oxt3QgsQ5a23ScXxUt%2BVVl8qfrVrPYiiekb%2FxrFc7megA3SxgTlb2HYB68GanyJSMdrVp7K8S8UUawEr4XYy8URGIjta5kOdlkjFonpmqDglAWKbIkO32l3fGZ7K4AxYIAHYcMu7FBN8pr%2FMJ%2F0CD%2BUY9OJi2GL5b3ruxW0a0dNW0k7Iu335C9pHnOkDTfJkiXeZqZkCRyREkrSskDm1wyfm3mR0Wd%2FlBQ6%2F4Tpnsut1jRSCgA4lKiC8p8lsGnZ87N5RJHq59XvtiN%2BCzxd%2FPwDzSPxi%2FzLQFJTpqtSdBPpvvkn1g7cnShetoqXuuJNRKEwnJCswgY6pgGt1PUbzHeg%2FLH3EGhaj83tZmXv1APISoS%2F1MoVA2yWW48GwSRogp9MjtIbLQO5POEpVOuysfF4kBM5hJE4p7VtYqLVr9GlbM499ce8rE3sWXNPuqSgFBAZ2dgN%2FbTNPgGgWWIsXZZw5DUnPQJ2mEHZXCo2mQ%2FB6wyu0VpSDJ6g1a5hLBk3Bf3tsRL6chfcKUuJutfV2M%2B9I0w9JTy51gUpMXNrvYzS&X-Amz-Signature=f18e9225018fd61d0aa7e822693707dcefd1155620471621f153d44cdc530888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
