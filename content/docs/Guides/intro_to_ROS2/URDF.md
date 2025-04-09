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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4QYLANN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD0KgvlElQo9giGTpC8MVAgTSDYTN9ZZaLTOVm5mCv2eQIhALf9ardjlhyLiG7Glm4Dn7Hi%2BY93BMpLNU0EFCbAItdIKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7f7qnrouZbHuR6%2BIq3AMCyEuhHymXnLwndhYHkK8YA%2F3rD5VGQwv7eoTVnsv%2FvgwDho4MihogtfddrnVoSE33HIjYGHihD7mTxn6MgVHbBTYAa7imLJ0uNm7oxjtnA%2Bb%2BB2y3grtw4klJx9sud6I6r7zSrjCggcZCtJdacFiK2ii8VFwu3NZs0LLejeNNof%2BtI%2F0PSfAKPdtldwHRLuE2nlgZZaim28ucFmjsrRKmOP8SSEJUFVcaLWyA6p7gt6nLvOk01ntgt56q0B9oQ1Ec4p%2FMP9CZ88PV06OBNzRblEIluYKeOmEgfSU3EE95mclOlmO1QVszn5gh5PizlOTlGefmwQrJRMvsT1uUTHPHBakHu8BPTAdoZk4axLdOjOMFwNWWstDpwNzAyaRZl0EhnwaX098wlJ2RImMPtBgHmE2xGJ1LktD3fNV1dnBCMnvKfumS5%2BztVaL%2BEmVjfGeXnIO96bRGbMoQ7W9XcYILfb7V3U9Murye6x%2Fhu1PZmGKiLPmaPKKsv8UpCgeYd6oEIfLgyqG2AymYM3JS%2FzXoEBZTBDS7BXc6Fp7cuPFR10pSAykhjyOWfI%2BiJISz03VrCxhnicNF2c1CtDzXBLsI4GoYLD4ReF5oVOs5G4rC4RxvBgHgS6XoJ0EeozChltq%2FBjqkAf2aJFIzjZYuIkaRgNbLwVyWqQxr1TAjhaJmAJ41VKPJY4ZHFzJZ22om%2B8ot0y0ILSLmimnGScg3atGQ0aWxHw0CaROero0adEx9lgQW1VQJEcm8yGTEcD0XIHYIC8x8ih8QU4GiryoAt8FrY5q54me6mRa%2FLFzTqu4hjL7BIcf1MX8XORQX768%2FyVHL8T8u5fIDKzeYyXH8AZItyuW6fsp4QyGC&X-Amz-Signature=12b026ec27fd87cd3369541cef7461258c9a2aefd26c345ccdec22c756c9ad53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4QYLANN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD0KgvlElQo9giGTpC8MVAgTSDYTN9ZZaLTOVm5mCv2eQIhALf9ardjlhyLiG7Glm4Dn7Hi%2BY93BMpLNU0EFCbAItdIKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7f7qnrouZbHuR6%2BIq3AMCyEuhHymXnLwndhYHkK8YA%2F3rD5VGQwv7eoTVnsv%2FvgwDho4MihogtfddrnVoSE33HIjYGHihD7mTxn6MgVHbBTYAa7imLJ0uNm7oxjtnA%2Bb%2BB2y3grtw4klJx9sud6I6r7zSrjCggcZCtJdacFiK2ii8VFwu3NZs0LLejeNNof%2BtI%2F0PSfAKPdtldwHRLuE2nlgZZaim28ucFmjsrRKmOP8SSEJUFVcaLWyA6p7gt6nLvOk01ntgt56q0B9oQ1Ec4p%2FMP9CZ88PV06OBNzRblEIluYKeOmEgfSU3EE95mclOlmO1QVszn5gh5PizlOTlGefmwQrJRMvsT1uUTHPHBakHu8BPTAdoZk4axLdOjOMFwNWWstDpwNzAyaRZl0EhnwaX098wlJ2RImMPtBgHmE2xGJ1LktD3fNV1dnBCMnvKfumS5%2BztVaL%2BEmVjfGeXnIO96bRGbMoQ7W9XcYILfb7V3U9Murye6x%2Fhu1PZmGKiLPmaPKKsv8UpCgeYd6oEIfLgyqG2AymYM3JS%2FzXoEBZTBDS7BXc6Fp7cuPFR10pSAykhjyOWfI%2BiJISz03VrCxhnicNF2c1CtDzXBLsI4GoYLD4ReF5oVOs5G4rC4RxvBgHgS6XoJ0EeozChltq%2FBjqkAf2aJFIzjZYuIkaRgNbLwVyWqQxr1TAjhaJmAJ41VKPJY4ZHFzJZ22om%2B8ot0y0ILSLmimnGScg3atGQ0aWxHw0CaROero0adEx9lgQW1VQJEcm8yGTEcD0XIHYIC8x8ih8QU4GiryoAt8FrY5q54me6mRa%2FLFzTqu4hjL7BIcf1MX8XORQX768%2FyVHL8T8u5fIDKzeYyXH8AZItyuW6fsp4QyGC&X-Amz-Signature=6eed7b7fead0568de36302cec6f46d12f985985315dfea81bcd12b305fc0d3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
