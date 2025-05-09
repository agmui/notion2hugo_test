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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJX2Z74%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEhUXfPS%2FluMvyAH3jIs3%2BtBX6BKIFoq1MGq42foDN0AiBdeY5rxNgoe8cYwvTXjJHzCo%2F6SpyZF1nCxmneS%2BVAeSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMabDTBcsw3Iwp84FLKtwDP23tpGxtyunXfRhY%2BTJ9qzSDAelLJn1AK0HPuobKRhKOEyGn3C5BWl6a21R%2B%2FoTw6JmidRIWVzDkjaocwCRN9Kr3yTY%2BZwdo7vNiM%2Fm%2FCwL8eNpve7Z8x7XwiaYfJNFZ7SiMjk%2FrzzEVOiJnoOMnDD36nCbNrod9H9Ub2GLEdGET%2Buxt8Np3VkUPPiogqWF3FNjmXyAwdUIMeRCFiqYiET1Bsr6ik9tjjX7WpsswAB%2Bza5IFeO3Ukn74xUB1htT2zuWV5rtTus88ziS99lnkDUBfZ3PC48mOczFHRQ3zz1Vb56Al2c3vFFlOgCV9CGRz2MHtNan%2FDM1WCE7zXjgH6X04wxHRsn4dtpmxtEYfkLIgWNhIfFlHOp8PujgGl8DbhnjCKiRQW1Ll%2FISy0MPdavV4R%2FE1DpdOlY%2F5M%2Bn%2FoGRFYFPT3O4poFZU3veLMwl%2B0ZSNqic0B%2F1G1SgUhYPwskY8UVL9tfI8uP6X6SggFDa7H%2FsoMp0uP47baZO5rNHvV0DZfNpCz87ZR9cXO4va4k2PKoTfgS5zRlHOsJyhzc7XjcNTDrCCTFCATg3zB11y3QsWsqM7u4mWXg5%2BwEljc8%2B%2B9IpOfTQ8vdTVrru3eCmwsQWmEE9Lj9obwZEw3vj2wAY6pgHbq1PWEsBuWJYgsiiQr7o%2FtaF2PGzU7iJJ7jiQ9GysSrutjT9rLo1YLlaDtmrtzHdtBn5JH81%2B9Vk4qQ9idhSB76dI6dj5a0U49AlM%2FenIfArldHP6eQlLGut6UO4chqbVD5Cqcg%2BaxPMQvJjHJfPik1deCJpGGrb68yeNZrufXbKlDlg98khF4rKjQ5uYsokV63CIAhrFwfz8zDUNV5iGMPMKfxUz&X-Amz-Signature=238bb0f3fd9f37251af8f796a36967f070fef1387595031facdb9db286bdeb0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJX2Z74%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEhUXfPS%2FluMvyAH3jIs3%2BtBX6BKIFoq1MGq42foDN0AiBdeY5rxNgoe8cYwvTXjJHzCo%2F6SpyZF1nCxmneS%2BVAeSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMabDTBcsw3Iwp84FLKtwDP23tpGxtyunXfRhY%2BTJ9qzSDAelLJn1AK0HPuobKRhKOEyGn3C5BWl6a21R%2B%2FoTw6JmidRIWVzDkjaocwCRN9Kr3yTY%2BZwdo7vNiM%2Fm%2FCwL8eNpve7Z8x7XwiaYfJNFZ7SiMjk%2FrzzEVOiJnoOMnDD36nCbNrod9H9Ub2GLEdGET%2Buxt8Np3VkUPPiogqWF3FNjmXyAwdUIMeRCFiqYiET1Bsr6ik9tjjX7WpsswAB%2Bza5IFeO3Ukn74xUB1htT2zuWV5rtTus88ziS99lnkDUBfZ3PC48mOczFHRQ3zz1Vb56Al2c3vFFlOgCV9CGRz2MHtNan%2FDM1WCE7zXjgH6X04wxHRsn4dtpmxtEYfkLIgWNhIfFlHOp8PujgGl8DbhnjCKiRQW1Ll%2FISy0MPdavV4R%2FE1DpdOlY%2F5M%2Bn%2FoGRFYFPT3O4poFZU3veLMwl%2B0ZSNqic0B%2F1G1SgUhYPwskY8UVL9tfI8uP6X6SggFDa7H%2FsoMp0uP47baZO5rNHvV0DZfNpCz87ZR9cXO4va4k2PKoTfgS5zRlHOsJyhzc7XjcNTDrCCTFCATg3zB11y3QsWsqM7u4mWXg5%2BwEljc8%2B%2B9IpOfTQ8vdTVrru3eCmwsQWmEE9Lj9obwZEw3vj2wAY6pgHbq1PWEsBuWJYgsiiQr7o%2FtaF2PGzU7iJJ7jiQ9GysSrutjT9rLo1YLlaDtmrtzHdtBn5JH81%2B9Vk4qQ9idhSB76dI6dj5a0U49AlM%2FenIfArldHP6eQlLGut6UO4chqbVD5Cqcg%2BaxPMQvJjHJfPik1deCJpGGrb68yeNZrufXbKlDlg98khF4rKjQ5uYsokV63CIAhrFwfz8zDUNV5iGMPMKfxUz&X-Amz-Signature=3dc86a6abecfc7ab6d17988d1e6a9e03a2656bea92152efac46aefadb073af09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
