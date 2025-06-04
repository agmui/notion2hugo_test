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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOGOOM2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICbEmNRgtsouBSJTmV4kg36Qnyxa7CQguiJCNARV5o2RAiBnAdSkPt2OptAC%2F2S%2F3pJ31XZ23mbI3%2Fxv1rmdrXR64yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvJbsaalBkAFc7H%2FJKtwDcEsEPX8sMhR2ksYh2GqKDtFkC1Ou3ctXH%2BB7LUTnh%2FbKG07G3TY6Miby6qAUfhyu9beGKn2xjeRYstlvbxA6Lwe%2FhaEXkC4xcCUDBLu%2Fghsgo8hsu%2BE%2BDBbbxu8VLmMLwXlPsr%2BpfvZA7mMxU0yklBSt3AA4L4nMPzSoWt9FYlLtDyPfpdwFGOvIqqbc1FWFgGXUvIL7DwO2XCwA%2FIWVVZdAcrVMd7%2Fl1cWn3x1UdLjIpWRKyUXN3g1BU3GGTY26Xmxsu1BwKSsTw21RV3UYf17zaGiDNas6y1Xv3pFR4LpL3450lyykbCGsqYdH5VQP6tASbASv1Z04eYrhtOQ5AB6jjiMFOJtGC4fCFLlHY1osr%2BxUTlop7OecY6LgiYkk029uXn40MCYkiC6Ygx1QDUw1omdUu7Z83GBkY1pUyzhklGsMdmGbV2LOckvwmhkvAT2PtsbyYvPs69n6j32gcLqPTrF94Gg1fRqZ0elJIA3o9xqfPmy9w8cyHh6uLdb6mDvDK9bQ5V1RahbrEMeOcTJXwTGX7gd00%2BNNyGezQOM1UEfKVDrci%2FLqm5EEdIxw3rf23QBMb5z5A5sRWwXS7KIKJywi4uMeYUxJwgH98i%2BdI97bPKGYFS%2FkchUwsICBwgY6pgFOLOaolepLM70Yrm0yiCdEFTCznQdKaVUljvoF1%2FEI5TUMubTtFz1WqsiQVqFKMIOMlxvtoqjNNsN6vPv4nj%2FvIQiL3xYTmULImps2l0uQ%2BETB8WWDozAMiSiQJfNG6Oynqf6MwnWwvev3hwDQqDcaZInz%2BEmuMd7UsNleNSXn2oeaSktEfLQTiqCK7zyECagl9ub456tGTzfwOmY76KvcxbE7p3SV&X-Amz-Signature=b349909fea9873d54fef054556587ccfb3c7ff7aaa1db42f6c2550659f37f6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOGOOM2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICbEmNRgtsouBSJTmV4kg36Qnyxa7CQguiJCNARV5o2RAiBnAdSkPt2OptAC%2F2S%2F3pJ31XZ23mbI3%2Fxv1rmdrXR64yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvJbsaalBkAFc7H%2FJKtwDcEsEPX8sMhR2ksYh2GqKDtFkC1Ou3ctXH%2BB7LUTnh%2FbKG07G3TY6Miby6qAUfhyu9beGKn2xjeRYstlvbxA6Lwe%2FhaEXkC4xcCUDBLu%2Fghsgo8hsu%2BE%2BDBbbxu8VLmMLwXlPsr%2BpfvZA7mMxU0yklBSt3AA4L4nMPzSoWt9FYlLtDyPfpdwFGOvIqqbc1FWFgGXUvIL7DwO2XCwA%2FIWVVZdAcrVMd7%2Fl1cWn3x1UdLjIpWRKyUXN3g1BU3GGTY26Xmxsu1BwKSsTw21RV3UYf17zaGiDNas6y1Xv3pFR4LpL3450lyykbCGsqYdH5VQP6tASbASv1Z04eYrhtOQ5AB6jjiMFOJtGC4fCFLlHY1osr%2BxUTlop7OecY6LgiYkk029uXn40MCYkiC6Ygx1QDUw1omdUu7Z83GBkY1pUyzhklGsMdmGbV2LOckvwmhkvAT2PtsbyYvPs69n6j32gcLqPTrF94Gg1fRqZ0elJIA3o9xqfPmy9w8cyHh6uLdb6mDvDK9bQ5V1RahbrEMeOcTJXwTGX7gd00%2BNNyGezQOM1UEfKVDrci%2FLqm5EEdIxw3rf23QBMb5z5A5sRWwXS7KIKJywi4uMeYUxJwgH98i%2BdI97bPKGYFS%2FkchUwsICBwgY6pgFOLOaolepLM70Yrm0yiCdEFTCznQdKaVUljvoF1%2FEI5TUMubTtFz1WqsiQVqFKMIOMlxvtoqjNNsN6vPv4nj%2FvIQiL3xYTmULImps2l0uQ%2BETB8WWDozAMiSiQJfNG6Oynqf6MwnWwvev3hwDQqDcaZInz%2BEmuMd7UsNleNSXn2oeaSktEfLQTiqCK7zyECagl9ub456tGTzfwOmY76KvcxbE7p3SV&X-Amz-Signature=0c76607d984636be978739c7ce61e331c87e80fb8da7c3456cfafe6d96015a21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
