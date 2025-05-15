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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKEIYAV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGG77KhJev7YHem0Ova2RZ5guOr6h5k8WAnxfzv95liqAiEAqb7Eb4nYx5TFTNWJV%2Fj%2FEXnVXh6z2Dm9ztBsFFfNdJ8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMmuY0mcfbHkkIIWYircA6RPFYjwGSt9EPB64oXZTwJUdWkdfs8GqlURv8Ulqu9nRLMjamVtXpbF%2FV%2B%2FxOlwYgNdXPMxCv8CqyrmfvBSNsYqXIhaLEUNgSb07oFN3GOr6WmpNnGvGEoAjJ5jmwCZwgl%2BLXkQiL%2BQH2dv0eJYpxkvLoWov958JpYGGS55C1S69FCmRiPoMiw4D8f37Udoh4Wg4Pjc%2FAawqznVXX0T07MU5OTBzt0T64epCNfXKRfF54nVphUtECQEJL7X4nVSxCq4SjmHCccAk%2Bg%2BbjyPflhybHTXFEMq60njv%2FPgsLLvPWVtQEK811rRq4YcjybHpWenk4RTbUvQVqoPm77zND6Wy5ve%2BvIykNtE%2Bc%2BxepeQQAU9sGpOHllsnCrzCD8BEKjeZT4SXFgfFRKYV7Qa2NSDSVwPKLFJNu3h39IvalATfhbX%2B%2FzXUNVpliMzfqCgp2%2BgTVsdZC7pYoRl46W2sRm6AYACHSXgSnI%2BT0h4MZdXqjOQe%2FMrXZ1zyZpqINNUKKGGyBng2XRR0sZBjK1VZljp7kkp8TaxTGXMIqJ6m%2B%2FN%2F7GkpegsTLZbQ%2FeD3M9LdmZCZHkqNQevPvtcydD1L%2BdeCpISz4aFFxVxYE0ndyAClcRoW9I1tMU73r%2BFMIiRmMEGOqUBtqY3DFWMX6OVTVUHYzRhabCjHzHcMKPpxjjl7m5HuGSUnlsSkM6bpihJ8rWgyGloILCgCRkeu7hUHEA3i2%2F4nzxeYG1yPj61bBpMAbKlHr%2BbGnT%2B5KkH%2BINSnYTtX9UtyezF5A5Ly931O83Jithi%2Bq4KKQn7TIZqeiU0U9QrBVyuUA%2BeddzwBGTQKAClRQbb37%2BNU5cBl52tETVO9Fobgq4Ci1vQ&X-Amz-Signature=f2ab69b82a490f6c3e13b65cdaecaadb13bf4541fd6fdf80b1c50b6e7226d666&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKEIYAV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGG77KhJev7YHem0Ova2RZ5guOr6h5k8WAnxfzv95liqAiEAqb7Eb4nYx5TFTNWJV%2Fj%2FEXnVXh6z2Dm9ztBsFFfNdJ8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMmuY0mcfbHkkIIWYircA6RPFYjwGSt9EPB64oXZTwJUdWkdfs8GqlURv8Ulqu9nRLMjamVtXpbF%2FV%2B%2FxOlwYgNdXPMxCv8CqyrmfvBSNsYqXIhaLEUNgSb07oFN3GOr6WmpNnGvGEoAjJ5jmwCZwgl%2BLXkQiL%2BQH2dv0eJYpxkvLoWov958JpYGGS55C1S69FCmRiPoMiw4D8f37Udoh4Wg4Pjc%2FAawqznVXX0T07MU5OTBzt0T64epCNfXKRfF54nVphUtECQEJL7X4nVSxCq4SjmHCccAk%2Bg%2BbjyPflhybHTXFEMq60njv%2FPgsLLvPWVtQEK811rRq4YcjybHpWenk4RTbUvQVqoPm77zND6Wy5ve%2BvIykNtE%2Bc%2BxepeQQAU9sGpOHllsnCrzCD8BEKjeZT4SXFgfFRKYV7Qa2NSDSVwPKLFJNu3h39IvalATfhbX%2B%2FzXUNVpliMzfqCgp2%2BgTVsdZC7pYoRl46W2sRm6AYACHSXgSnI%2BT0h4MZdXqjOQe%2FMrXZ1zyZpqINNUKKGGyBng2XRR0sZBjK1VZljp7kkp8TaxTGXMIqJ6m%2B%2FN%2F7GkpegsTLZbQ%2FeD3M9LdmZCZHkqNQevPvtcydD1L%2BdeCpISz4aFFxVxYE0ndyAClcRoW9I1tMU73r%2BFMIiRmMEGOqUBtqY3DFWMX6OVTVUHYzRhabCjHzHcMKPpxjjl7m5HuGSUnlsSkM6bpihJ8rWgyGloILCgCRkeu7hUHEA3i2%2F4nzxeYG1yPj61bBpMAbKlHr%2BbGnT%2B5KkH%2BINSnYTtX9UtyezF5A5Ly931O83Jithi%2Bq4KKQn7TIZqeiU0U9QrBVyuUA%2BeddzwBGTQKAClRQbb37%2BNU5cBl52tETVO9Fobgq4Ci1vQ&X-Amz-Signature=bce0e6e156dfce93340bf8e76514cac59e59bfc699cc71ef8402036ffac9b353&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
