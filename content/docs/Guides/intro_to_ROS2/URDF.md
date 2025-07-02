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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRVCGH6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUWr6JPUQKb27KDJWB7t2uIRLgs4sb7El93sMp%2B0oK%2BAiBsp4la0MKicW6qmgqrB4R737EOUKSQCVX6LkkLR0jbzCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMGj8agtF%2F5TqJKtKtwDOtNoQbBezDYMQegXFbXazwkt%2BXyk55FOQQxuKCk7Jsn6eZrlsN%2FDYzwnpwFoB9Nh5T6xO%2BFnnu1XhTU5VmxB8Q8IoGHtHvkXbVy4Kn5bppVmk%2B1mCWBVMR73Tq8S24csbyZVQexenSaX8w4wXTjBdB3cOqnzJyTaIKsU1HONMrlxJM1JIDYOmPLet0U7t6xOGhIPI0JO5dqD9sg3etWTEtQkuPx0F6%2BCFkMMUpHtuj%2BFSWrsHZ%2BSeUWZXUVX3hJXCR82Je%2BcilnUb4i%2BSCVpO%2FjpvTo%2BcyNfiYjbSHyKBJQwYohZuBF8KR8quOd%2FUL3miw0MCRh%2Fx2q%2FLQm98gQVar2cJQ4aAgcorpH0yhPjJH5aIL46PX1YE7p1BNS0%2Fo4EFX7elyTF5rsfuhmmgaBgA7M8XAIky9sb1VIhuP%2F%2FcY08R47qQ1Qct1x6cRYLO3r7MtvPY18kxdp1qd15DFR%2BauuDup%2BPDh7BNtDaFUY9lGUM1hKkc7iwZJsQjlqohjO4SAbyBeESDB1HpIdFGbARmP6D0YsDyAFx31ebc95%2Br%2FRjLe54xsQnX%2BbxiV6qEGiOgFm7%2Fy60KYN1FxTR9OWRCrMK7gmalapQqjR5xf2zYRpA8auC2ZiEdujQjS4wmpOVwwY6pgHI1NK3Rn2Hxcnc3IJCx0uJB74nxEcPqupv4vTf4iybn4z7bF8PdGQGXjJ8mPglCmSiuBNg2a0H8IxXt%2Ff5FlJbkVCnAnv9nNNSov1gT%2F3sczS3gZ6Kc34BseYI7T8ybpP5HoJwJU%2Ft7iPgl90UwGi5BvbbCXIXBVsi8BZgcYKHAJbEnxLLrD5T%2Fi28oGYL13yfJ26AkInjIPRw3rHMQxug48gGdIA6&X-Amz-Signature=811a4bdb57a1df72660cef2b413bd10418b44f54de3998dafd9e710f7880cb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRVCGH6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUWr6JPUQKb27KDJWB7t2uIRLgs4sb7El93sMp%2B0oK%2BAiBsp4la0MKicW6qmgqrB4R737EOUKSQCVX6LkkLR0jbzCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMGj8agtF%2F5TqJKtKtwDOtNoQbBezDYMQegXFbXazwkt%2BXyk55FOQQxuKCk7Jsn6eZrlsN%2FDYzwnpwFoB9Nh5T6xO%2BFnnu1XhTU5VmxB8Q8IoGHtHvkXbVy4Kn5bppVmk%2B1mCWBVMR73Tq8S24csbyZVQexenSaX8w4wXTjBdB3cOqnzJyTaIKsU1HONMrlxJM1JIDYOmPLet0U7t6xOGhIPI0JO5dqD9sg3etWTEtQkuPx0F6%2BCFkMMUpHtuj%2BFSWrsHZ%2BSeUWZXUVX3hJXCR82Je%2BcilnUb4i%2BSCVpO%2FjpvTo%2BcyNfiYjbSHyKBJQwYohZuBF8KR8quOd%2FUL3miw0MCRh%2Fx2q%2FLQm98gQVar2cJQ4aAgcorpH0yhPjJH5aIL46PX1YE7p1BNS0%2Fo4EFX7elyTF5rsfuhmmgaBgA7M8XAIky9sb1VIhuP%2F%2FcY08R47qQ1Qct1x6cRYLO3r7MtvPY18kxdp1qd15DFR%2BauuDup%2BPDh7BNtDaFUY9lGUM1hKkc7iwZJsQjlqohjO4SAbyBeESDB1HpIdFGbARmP6D0YsDyAFx31ebc95%2Br%2FRjLe54xsQnX%2BbxiV6qEGiOgFm7%2Fy60KYN1FxTR9OWRCrMK7gmalapQqjR5xf2zYRpA8auC2ZiEdujQjS4wmpOVwwY6pgHI1NK3Rn2Hxcnc3IJCx0uJB74nxEcPqupv4vTf4iybn4z7bF8PdGQGXjJ8mPglCmSiuBNg2a0H8IxXt%2Ff5FlJbkVCnAnv9nNNSov1gT%2F3sczS3gZ6Kc34BseYI7T8ybpP5HoJwJU%2Ft7iPgl90UwGi5BvbbCXIXBVsi8BZgcYKHAJbEnxLLrD5T%2Fi28oGYL13yfJ26AkInjIPRw3rHMQxug48gGdIA6&X-Amz-Signature=802cdbb5d6dc739543017da190b4a11bc8bd8344d6e213ac1ab0544a821ced1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
