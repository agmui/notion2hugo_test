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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6SFOU3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAesIzeLJvyRFRNzL6yNYqiTH8FdhNtIrsoIdQOIwAi5AiEA3XV8cNd%2BF%2BVRYznDz5FMqlF2d2apw0GXAerfS6DG8LAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsFA6lBLvXVHL5WoircAx5953P0%2BC7IJPD4JaD3nrmNwEUCdvKz1x1y6roAoEWGEbmL9vcuFRfZ6LqVNcoMsrOS9A5K2V3hgtla0NQ8WtY6OlsAwdVhThCeOkmzBIXM51Lye4vXwtY%2BJ7edQjLZaFdElN9IeoTFKuLefviboCYdzf2KHpz8BA8WoEJ4yEURYK%2FLwlzWQd6KAyoJP4LrO9USOHyEd1LdCIYlG%2B1nNA61C%2BYbs%2BelLxbWEPDVzjodqmn%2BPeNnvd7LlgAgxsubcuOJK%2FJ%2BYvQqfFobXFJ7SB1E1UfTtp%2F8J1GkRS%2BsKeIxkaHsL%2FRvkfINlsqjMrQK02mip1xZx9FhnV%2F7Y3Zej7ut%2FTz1kC79usJqiY3KnKMUV1Wrywmhrk3GCuJ24B1HpNQwfAwfeoY3KVjkJVQ4yNxnkc%2F5uNWgRI%2FvSyytRxjMjsQ8ye79zY4c2fOq2bYQLUJfu7TjauBgW0klS3vnt3OSjrk6iNzVD1B8s97Zg3DoiJQdcGlTQSA2y8cj79z4eJLqX%2FerGoRvGdFbaNVSqTGRK4zU80AecYmHkqhHvgYtq%2BWo3iz47LD1nKd2lczdJLMYmgaj6NIia6wSAmDmmKKmuiZJWxpWhYbqWyiNn14uoV0RsJQHH3T1VJ%2FkMI%2Bj7MEGOqUBMtutFTJE7IsA4CaYk31lvFOo6%2B%2By6b8we%2FyG7GhATM%2FyzGrkFAkmJfLFriplJFKJQC3xmV%2BjRJzFyLiGuliNFDt3BYwvQ5gtWz0b2VP5nczh4p2Hqcpk%2FGsQH5hKyHuQhLYwN1QtT%2BmpPVNhhH%2FesAOAUnPuNSPPCD89lV30uZ2F8D1oHetalBjD987zDCLsZo9NKP4eqj%2Fi3nW53CDmlEBy3TTh&X-Amz-Signature=09d25f3321031e98c96a6cac45a748668fbf2f53366626d00358d6a0db5d7f94&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6SFOU3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAesIzeLJvyRFRNzL6yNYqiTH8FdhNtIrsoIdQOIwAi5AiEA3XV8cNd%2BF%2BVRYznDz5FMqlF2d2apw0GXAerfS6DG8LAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsFA6lBLvXVHL5WoircAx5953P0%2BC7IJPD4JaD3nrmNwEUCdvKz1x1y6roAoEWGEbmL9vcuFRfZ6LqVNcoMsrOS9A5K2V3hgtla0NQ8WtY6OlsAwdVhThCeOkmzBIXM51Lye4vXwtY%2BJ7edQjLZaFdElN9IeoTFKuLefviboCYdzf2KHpz8BA8WoEJ4yEURYK%2FLwlzWQd6KAyoJP4LrO9USOHyEd1LdCIYlG%2B1nNA61C%2BYbs%2BelLxbWEPDVzjodqmn%2BPeNnvd7LlgAgxsubcuOJK%2FJ%2BYvQqfFobXFJ7SB1E1UfTtp%2F8J1GkRS%2BsKeIxkaHsL%2FRvkfINlsqjMrQK02mip1xZx9FhnV%2F7Y3Zej7ut%2FTz1kC79usJqiY3KnKMUV1Wrywmhrk3GCuJ24B1HpNQwfAwfeoY3KVjkJVQ4yNxnkc%2F5uNWgRI%2FvSyytRxjMjsQ8ye79zY4c2fOq2bYQLUJfu7TjauBgW0klS3vnt3OSjrk6iNzVD1B8s97Zg3DoiJQdcGlTQSA2y8cj79z4eJLqX%2FerGoRvGdFbaNVSqTGRK4zU80AecYmHkqhHvgYtq%2BWo3iz47LD1nKd2lczdJLMYmgaj6NIia6wSAmDmmKKmuiZJWxpWhYbqWyiNn14uoV0RsJQHH3T1VJ%2FkMI%2Bj7MEGOqUBMtutFTJE7IsA4CaYk31lvFOo6%2B%2By6b8we%2FyG7GhATM%2FyzGrkFAkmJfLFriplJFKJQC3xmV%2BjRJzFyLiGuliNFDt3BYwvQ5gtWz0b2VP5nczh4p2Hqcpk%2FGsQH5hKyHuQhLYwN1QtT%2BmpPVNhhH%2FesAOAUnPuNSPPCD89lV30uZ2F8D1oHetalBjD987zDCLsZo9NKP4eqj%2Fi3nW53CDmlEBy3TTh&X-Amz-Signature=02734af07c4a232d5def178c17765eb37521e35974d42623312424aa5055c33c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
