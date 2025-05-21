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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GN6V26X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICflqNMTbQRTwNOoHBHE1bwE%2FLym9MCqZJIWWi2STzMcAiADwehmY8L%2F9rKdb8RlZ2iqSiblAeHdiGR4itpShPeqcSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJr0FGMJwnjMuh58mKtwDY5w%2BoPYruwpyuIB4HAxN6BGTssByCRK8k8A9Q%2F%2B0kOf8LtNt3XBFtLtwKEDmH9juEPTNa3j%2BY78Vc04je55EQ9aKEBcprT6brg1iGVjzricRul22t5E2NwQtF7KmbAR26%2Fk7W06TR80poN02FUAPm3necnc9KjBaAg9NVCotsIJ4hqstRFWgqvqrIzoGDso0qY9a7DNnPgd40AhO8HtWP1px1fKTPSfYdUMcJUqJhuxHaMd0%2FYcxdsRwtV6EURegoJfA5%2BsB9tQevnqqtkITj43NyKpSKRnNzAh1aMrD%2BiHEpXbuxq3eig78Ms8tTB1fZnbN5iUs5T6Dj5zWhtDQXI9xM3%2FxCj%2FL0aE9rFKAmv28sKGWICWV8XBf1FMiCUyKkV9N%2F37F%2B9W7GyE8y2szrEMw13eNLzoEtkyYMqtGRGVIZd02%2BfJBz8Z1OZh%2BkVyFwkeDFgSFZ2OhQh4Zzv6sOSrP27BYiWCiCXBaN7o86y9O1A1jVdU%2FJLgANEw9xTB%2F6qw6MeedkGtMNP3k3jAe1ypUIksbi43ZknNovt5FNY%2F2HtEFZ5AOK0EUPzfW3WL%2BPT6RykKmzZSmA9XzipI1X6ONI3Id23d15LZmL1i9X34346zG5k5L0c5rzTAwuey1wQY6pgG%2Ff%2FE3eqdeI3E3H8JSCkKNQ3qKNGxCqsnx8%2FSoynyiYntLDYHi%2BH2BuySOOGSgeTeG4O6MPbFEmqMrEt7VqBA9NwwJdSGDNEkJnWc9iHTlpTN72rr1%2B2EtuldMX6tn0VFIReBptl8K8pJujBdjCRI7mQWMVYMY%2BjLKucMl6gB5lo%2BN9Qp1keavotQCXav6jAG0bl25aHBWq1LD4f3Na3T5jCEwnBZo&X-Amz-Signature=981064f23fe12dbdeb2077cffd4d6cf072460c6956a9c759e99e2f59c9cde0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GN6V26X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICflqNMTbQRTwNOoHBHE1bwE%2FLym9MCqZJIWWi2STzMcAiADwehmY8L%2F9rKdb8RlZ2iqSiblAeHdiGR4itpShPeqcSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJr0FGMJwnjMuh58mKtwDY5w%2BoPYruwpyuIB4HAxN6BGTssByCRK8k8A9Q%2F%2B0kOf8LtNt3XBFtLtwKEDmH9juEPTNa3j%2BY78Vc04je55EQ9aKEBcprT6brg1iGVjzricRul22t5E2NwQtF7KmbAR26%2Fk7W06TR80poN02FUAPm3necnc9KjBaAg9NVCotsIJ4hqstRFWgqvqrIzoGDso0qY9a7DNnPgd40AhO8HtWP1px1fKTPSfYdUMcJUqJhuxHaMd0%2FYcxdsRwtV6EURegoJfA5%2BsB9tQevnqqtkITj43NyKpSKRnNzAh1aMrD%2BiHEpXbuxq3eig78Ms8tTB1fZnbN5iUs5T6Dj5zWhtDQXI9xM3%2FxCj%2FL0aE9rFKAmv28sKGWICWV8XBf1FMiCUyKkV9N%2F37F%2B9W7GyE8y2szrEMw13eNLzoEtkyYMqtGRGVIZd02%2BfJBz8Z1OZh%2BkVyFwkeDFgSFZ2OhQh4Zzv6sOSrP27BYiWCiCXBaN7o86y9O1A1jVdU%2FJLgANEw9xTB%2F6qw6MeedkGtMNP3k3jAe1ypUIksbi43ZknNovt5FNY%2F2HtEFZ5AOK0EUPzfW3WL%2BPT6RykKmzZSmA9XzipI1X6ONI3Id23d15LZmL1i9X34346zG5k5L0c5rzTAwuey1wQY6pgG%2Ff%2FE3eqdeI3E3H8JSCkKNQ3qKNGxCqsnx8%2FSoynyiYntLDYHi%2BH2BuySOOGSgeTeG4O6MPbFEmqMrEt7VqBA9NwwJdSGDNEkJnWc9iHTlpTN72rr1%2B2EtuldMX6tn0VFIReBptl8K8pJujBdjCRI7mQWMVYMY%2BjLKucMl6gB5lo%2BN9Qp1keavotQCXav6jAG0bl25aHBWq1LD4f3Na3T5jCEwnBZo&X-Amz-Signature=551c7bdfa4b353d7725b2e30f87f8b6efab94f1c2d87b614474ba4967dcc71c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
