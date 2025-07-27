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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NNKUVMW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBFIOBOH%2FKiyyz%2F%2BDSALcQxnf3Xq%2FSq3Og7%2B%2Btl0cvNrAiEAjINmICa2bxim6zsl6kbFuVq6Q2kWgQFRfvS0N66HO2kq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGpXN7vA%2Bqv8XCfBBCrcAzOA%2BCODFXXNhs%2FDWsG%2FqKZn6QEwwhVMXluor0qg5lS8oRsuasNUkTAawsVohQLsmIxTpRDCkPNTrOOBmlL21VJIqV10PAray1R3MMEE8p7K2Inb4zEAk5zrdcp35%2F6iQ8QxeY3mkmMNm9h7I0wYnzrL%2BFHUzHZANumemuPOoWY2N9pbHmTvCg3Y9Lr3PJEFdvghKkO%2BT%2B5oq80z5qWUugJN38gkLhYELFB2k%2B9yunZ2rX%2Bfj0QG%2Fb0rod6R4hTfeAiOAvzssEkt8%2BiH3TfeyUdnURQQzmR0HKZHun6yv%2BCnzDHK5L7xUrai9Suyh2Dns8QrhOCIOkY38Asv38%2FWhhkN4fXfWj6jqjYCkMpT5ka3RoXlCl1ckM%2FtbJhUCEWaWyMmUBe3I24y%2F5%2Fxh3Ts38Rb%2FNzYTKAMgjVkWdMJ3ldo3n9nprfy5kTZGh0u1sj0cPrDec9o0iub47CqHx73TFLxnqLjbWYSziQC%2BL6ZJNXhwcwbxppxu1gHXSa878SJpDa72L091v5orYNo3GJQfuttp3VFC4iK6lTMKLebyHOn%2B4YS6iOoWJuHxvI0HQg3jnNX1BbaW7ZMs3D9yEdPllXiHQsEAoxMWxSVSTbP3zJ7Im5cEn8at2HhlgxyMMKjmsQGOqUBe8llFPOwaBcsckdrH7nCjJjBv2vV11Z0zMDQlKX3p8FNPQrYEl1aPJwWGYelImT7lZPs%2BylwSyzJxE6xUpFjyga0GWL6Na9pjtTxHP031S0FRIhcSOVWCYqv55v5UYEjPBEz5o8kCyoUqMbpYrrBq3DYFVO34U56%2FCuD76pxRSM%2B4sTbAu9Hxo7rpSbbBnrskuY%2FAIHVUCKyDjzUsMvcE2bcmKrn&X-Amz-Signature=ff60f83da351aaa1e958627848de54ce06f1f08b758871557d705749f44c1db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NNKUVMW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBFIOBOH%2FKiyyz%2F%2BDSALcQxnf3Xq%2FSq3Og7%2B%2Btl0cvNrAiEAjINmICa2bxim6zsl6kbFuVq6Q2kWgQFRfvS0N66HO2kq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGpXN7vA%2Bqv8XCfBBCrcAzOA%2BCODFXXNhs%2FDWsG%2FqKZn6QEwwhVMXluor0qg5lS8oRsuasNUkTAawsVohQLsmIxTpRDCkPNTrOOBmlL21VJIqV10PAray1R3MMEE8p7K2Inb4zEAk5zrdcp35%2F6iQ8QxeY3mkmMNm9h7I0wYnzrL%2BFHUzHZANumemuPOoWY2N9pbHmTvCg3Y9Lr3PJEFdvghKkO%2BT%2B5oq80z5qWUugJN38gkLhYELFB2k%2B9yunZ2rX%2Bfj0QG%2Fb0rod6R4hTfeAiOAvzssEkt8%2BiH3TfeyUdnURQQzmR0HKZHun6yv%2BCnzDHK5L7xUrai9Suyh2Dns8QrhOCIOkY38Asv38%2FWhhkN4fXfWj6jqjYCkMpT5ka3RoXlCl1ckM%2FtbJhUCEWaWyMmUBe3I24y%2F5%2Fxh3Ts38Rb%2FNzYTKAMgjVkWdMJ3ldo3n9nprfy5kTZGh0u1sj0cPrDec9o0iub47CqHx73TFLxnqLjbWYSziQC%2BL6ZJNXhwcwbxppxu1gHXSa878SJpDa72L091v5orYNo3GJQfuttp3VFC4iK6lTMKLebyHOn%2B4YS6iOoWJuHxvI0HQg3jnNX1BbaW7ZMs3D9yEdPllXiHQsEAoxMWxSVSTbP3zJ7Im5cEn8at2HhlgxyMMKjmsQGOqUBe8llFPOwaBcsckdrH7nCjJjBv2vV11Z0zMDQlKX3p8FNPQrYEl1aPJwWGYelImT7lZPs%2BylwSyzJxE6xUpFjyga0GWL6Na9pjtTxHP031S0FRIhcSOVWCYqv55v5UYEjPBEz5o8kCyoUqMbpYrrBq3DYFVO34U56%2FCuD76pxRSM%2B4sTbAu9Hxo7rpSbbBnrskuY%2FAIHVUCKyDjzUsMvcE2bcmKrn&X-Amz-Signature=c3c8ab33c30783d6842da0804014e4ad7eca6b99737d2bdd4bca845e37fbfacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
