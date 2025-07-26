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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMC6SKNL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHLK2xuENvLb6X35yOZEfaoph%2Bbrzsby8EUVCgxT%2FmS2AiAU4wEJFmYlbsAg8FPZ%2BpBUSP1wtrgh1CGaprOz1De4iSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIMFKgdXRvM%2FGWoQeKtwDNiEN8zLhyiIt0OVInYBN%2BZJIPuW2lsJVN75yfZu1Z5Xin46e9xbzxtWRVF86phH%2Fu2%2F4TxFqb7b2kZpi%2FkQmcgGqntZ1J%2BdkAcLGEPHk6ug9etzL%2BRBG2Rb9hI0nFEBfSM3tGnwMBxWRyO8y7foqC7yrP5ro3nC6srTah22akw63EDlGS8dc5c3pvIFjzfgM689M3%2BzGZtdMbH15wvY8uk6rpPOChpUommaAjjiWcP2IOPxfQv%2BsHp26yTAI6fDcflpppbLM4curzYp7OR7HCUWdt4KlEThVuqqUXmBRu%2FleFAEiH7dhiop05Yy3UnJDB%2BC5JWitlwVZb3XGuJFJvpfjHDiONU4kXrubnhKmmB4%2FbF9Mp8EZGsbcymSAKQgv8N%2FeyCNdK8k55nSa0FpKEwYZR2Fh%2FaSHGe66VcvjCp7jfR2o5oNQYcBBh3gnRA5OmxjKKeNLlHroocsaF80JBWHyisYzwKf%2BiitPV55RLfqgw%2BUmxFffVvfZGFxW%2BH%2BnIBi7dalVF9OZqyqqTJFfDc03bor2Q%2BxxswlYEtb1Wpip3e8ADBoiq4IKubjls2pzuApyJ865tUfoLdNkF3blPpf4PCoC041gs8Zpb92D90qJejhUaUWgcRrQ9Zsw3quSxAY6pgGo35qUTwlFZ7LxJh1vTd5FcADSip%2BKWZRZOKZuHta0ftYNkhyPEPvNzf8kuE8EgA06QVAj0O0sTnPo%2F3tN%2Fqi2vJS4Ar%2F6y4X9yTt%2FtuBOHUixMjR8Zg%2FqqZjBqlO%2BcCGJMJb%2FWmOZhAXioBmozHN71Sgifq%2F%2FjyF8wC1NVQzlLoxPbiKlWFNUKXvX66SuBhNooHmRxvBYgivVF3cWAU%2F6YtS9wTg2&X-Amz-Signature=a46b2e9bc3f2631e304f87974b715b0794ea367aeeedf79ddcfe64f8a9f9e3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMC6SKNL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHLK2xuENvLb6X35yOZEfaoph%2Bbrzsby8EUVCgxT%2FmS2AiAU4wEJFmYlbsAg8FPZ%2BpBUSP1wtrgh1CGaprOz1De4iSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIMFKgdXRvM%2FGWoQeKtwDNiEN8zLhyiIt0OVInYBN%2BZJIPuW2lsJVN75yfZu1Z5Xin46e9xbzxtWRVF86phH%2Fu2%2F4TxFqb7b2kZpi%2FkQmcgGqntZ1J%2BdkAcLGEPHk6ug9etzL%2BRBG2Rb9hI0nFEBfSM3tGnwMBxWRyO8y7foqC7yrP5ro3nC6srTah22akw63EDlGS8dc5c3pvIFjzfgM689M3%2BzGZtdMbH15wvY8uk6rpPOChpUommaAjjiWcP2IOPxfQv%2BsHp26yTAI6fDcflpppbLM4curzYp7OR7HCUWdt4KlEThVuqqUXmBRu%2FleFAEiH7dhiop05Yy3UnJDB%2BC5JWitlwVZb3XGuJFJvpfjHDiONU4kXrubnhKmmB4%2FbF9Mp8EZGsbcymSAKQgv8N%2FeyCNdK8k55nSa0FpKEwYZR2Fh%2FaSHGe66VcvjCp7jfR2o5oNQYcBBh3gnRA5OmxjKKeNLlHroocsaF80JBWHyisYzwKf%2BiitPV55RLfqgw%2BUmxFffVvfZGFxW%2BH%2BnIBi7dalVF9OZqyqqTJFfDc03bor2Q%2BxxswlYEtb1Wpip3e8ADBoiq4IKubjls2pzuApyJ865tUfoLdNkF3blPpf4PCoC041gs8Zpb92D90qJejhUaUWgcRrQ9Zsw3quSxAY6pgGo35qUTwlFZ7LxJh1vTd5FcADSip%2BKWZRZOKZuHta0ftYNkhyPEPvNzf8kuE8EgA06QVAj0O0sTnPo%2F3tN%2Fqi2vJS4Ar%2F6y4X9yTt%2FtuBOHUixMjR8Zg%2FqqZjBqlO%2BcCGJMJb%2FWmOZhAXioBmozHN71Sgifq%2F%2FjyF8wC1NVQzlLoxPbiKlWFNUKXvX66SuBhNooHmRxvBYgivVF3cWAU%2F6YtS9wTg2&X-Amz-Signature=7daf2a8c807767bada0097dcef5c60dee1f7e4e836fae86b18c38574d963348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
