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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663364T273%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqOuwXp0QC0Ton0plDREEJZEPJC8rBlfNuQqhpMqvPSAiEAg2mNaqv%2B22%2FCc%2BUFzNU5ZNI%2B42Dk1wINLrh17ONZeJkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFceowO9KTQAlWFMZyrcA%2BLujkLT%2BiQwzq41fPRLZ9Wj8UY82oAzvLG75j7uDp1fU2CjdWae6fgqX1%2FF3d1sCRtUtYUw7CCrC5JDu%2Bu0nB6SNl%2BLMhJ44D%2F%2Fa6OaDMs2ONGKUiSerIygJ8bnTUZu3D30qou5l%2FAsel3mVAhDyAOm7RPCqkoAetx7dnb0cht2gzPnu7Xty9BSwLdZB%2Blv%2B6LDtzAg2mlSsMdPx3ggT2O7iDB1%2FjJA00idBE52%2BlQ%2FkVC8GCaKD7sYqugXhIGrInWLxydKkep7LwbNxv0yujA6vV7moxaopFYDXTXAzaywGCmKvYn65TvMQGOt7MzjaVXT4i8dlAjGIkwpQEDqP35cBuVwijqcnw%2FUwwsLFOAOTIrmbwM4twuW0Ivq%2B1ZqPcyeK0QlN5qkQa7q5o6rdOblvpc%2BjF5LhZigCab544EkKn5fM%2FkvYa5%2B0FRKt07SJ15C2I1nSsqXE45YlzNuvFeuvnOGSjdbTPF1WsEfGiaJtEHRBbtlQRJWLEVqOVFAPCPJNvi186RdwQWTXh0XP9hRSsNWPdDWIYd%2FONjCXXduoJ0m1vuxnVl%2BxknTTLeDKHhrPiLp9dVPmUjJoX%2Fl%2By%2F0kmF%2Fy4ks6oC6j8ajADy0sL%2FNWv5aXl6qVPFlMPiDisMGOqUBuliu7l4pifgOZzN4Kdszp8DjIAVrerbcnFf5WWt6lmjgjYnnffzLMF7rZ3xPEBX1dx3v6aa%2BFCPpitrdztpWutflMgd5Tm6gd%2F6sQM5rVOSEKOlB26jA%2BvAypotnDyqLl%2FWop2XGanKTlz1JPPwxAgJTK8QomoiO1gMJqWSJmuSdaPiQ1Xn26DO%2BKzXvxgzSsbhJ36deyktVh3J855j15DJ6544i&X-Amz-Signature=ae26db7df4a87cfec442d308057fe5c0405090cfd0fa7cd71fb724ceaf68b648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663364T273%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqOuwXp0QC0Ton0plDREEJZEPJC8rBlfNuQqhpMqvPSAiEAg2mNaqv%2B22%2FCc%2BUFzNU5ZNI%2B42Dk1wINLrh17ONZeJkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFceowO9KTQAlWFMZyrcA%2BLujkLT%2BiQwzq41fPRLZ9Wj8UY82oAzvLG75j7uDp1fU2CjdWae6fgqX1%2FF3d1sCRtUtYUw7CCrC5JDu%2Bu0nB6SNl%2BLMhJ44D%2F%2Fa6OaDMs2ONGKUiSerIygJ8bnTUZu3D30qou5l%2FAsel3mVAhDyAOm7RPCqkoAetx7dnb0cht2gzPnu7Xty9BSwLdZB%2Blv%2B6LDtzAg2mlSsMdPx3ggT2O7iDB1%2FjJA00idBE52%2BlQ%2FkVC8GCaKD7sYqugXhIGrInWLxydKkep7LwbNxv0yujA6vV7moxaopFYDXTXAzaywGCmKvYn65TvMQGOt7MzjaVXT4i8dlAjGIkwpQEDqP35cBuVwijqcnw%2FUwwsLFOAOTIrmbwM4twuW0Ivq%2B1ZqPcyeK0QlN5qkQa7q5o6rdOblvpc%2BjF5LhZigCab544EkKn5fM%2FkvYa5%2B0FRKt07SJ15C2I1nSsqXE45YlzNuvFeuvnOGSjdbTPF1WsEfGiaJtEHRBbtlQRJWLEVqOVFAPCPJNvi186RdwQWTXh0XP9hRSsNWPdDWIYd%2FONjCXXduoJ0m1vuxnVl%2BxknTTLeDKHhrPiLp9dVPmUjJoX%2Fl%2By%2F0kmF%2Fy4ks6oC6j8ajADy0sL%2FNWv5aXl6qVPFlMPiDisMGOqUBuliu7l4pifgOZzN4Kdszp8DjIAVrerbcnFf5WWt6lmjgjYnnffzLMF7rZ3xPEBX1dx3v6aa%2BFCPpitrdztpWutflMgd5Tm6gd%2F6sQM5rVOSEKOlB26jA%2BvAypotnDyqLl%2FWop2XGanKTlz1JPPwxAgJTK8QomoiO1gMJqWSJmuSdaPiQ1Xn26DO%2BKzXvxgzSsbhJ36deyktVh3J855j15DJ6544i&X-Amz-Signature=1c7b180ea8751d0b240d692ee6aa4ba2f11241c06228ca81b308e799f5bdea71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
