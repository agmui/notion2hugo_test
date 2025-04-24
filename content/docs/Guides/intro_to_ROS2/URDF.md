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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6NXGWN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICkTbSGbtqYU0%2FveKKXFPDHdnlZUtE%2BoK7ev5hBc%2FZSsAiBiTc6CayKHCdzsLkK5yuO4IKHmI8T4DgZijKZGTrqWayr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMWi1uHy3HXg5kf9adKtwDmLeu2qoDxgkqt5bJHvTNwLOUZZG12TUVL2jGAylf0pNgJziwZMZUFIYObM8O9mN%2FRAOR9pFZoMC8ztEoFio%2FMiPwGzNDpi0wm5MyITYU7nDtZlkH0Nr%2BjA7DuoWxqTHMFM1y5dygutSCYJyyfTbYzGq1NlAmo%2BJDryPX3lbFWymuHRlJq3AzJhcFpnX0xHmUquTgDKMpl4ZQWDTw0mn3wKmVFz7fg3fgKisPUvT2ANw55TUdbV%2BRHcGb2xs6CzP08msuj8G6pLb6HLRW1J3567rNdBJy5wwFWHjp3Tv8zS2ujrFNz9oquIfNz1MlHPj4oSSV2CN%2FP8n4CYOErl23afhH2GJfC790asiWV9aqb5ywJ6F0WLMtzS1BesyDEkTg%2F0wETdkfWtdOgefYvxUfePPJ5WiTgvlzJrUKmOxH1jwXl6T0CRDvfFRBCV41sB9PYYYcvvtLGr0NN4e4HjYA7hpVAgRQpALJDeqSO2ZWhesxtkjkNx0JE%2FJ8mz19t3A0MQybcvSzIkSVOwZnDEyfo7hlQEMs6Jlf43V4z5XSANwXDHHJcrzAnEjbra7hltKtAyYZ5kkdye95AEvdHbhsPxZJkeCxxFoJTuPoOfJPmPcyb2iDNZNj7Jg8KNEwkrSnwAY6pgHwd4vCsNUlqw5rJF25GPAdgwC4MbrCVR1pWNzg9o2l65%2BxjQZcXRDZhHZTsjSggOpXHZ1KHVcAImaM8KzA0valn%2BDN3V8jpUYYCo%2F%2FSHQRNrtw3sHAHPYmrnFn65HRVt67WFOE3saA2UOed1rygtBQ5%2F2wnkhu0a1nw6UQ3cHlfunvZe60b0wazrq9SifUQQZ5PUPT7FrBS%2FfIQBeHUif0HxdIwDc7&X-Amz-Signature=023446fc700af00fd16d063cc6436b55ec2dd2d7f1c407eaea5cd95cab41c4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6NXGWN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICkTbSGbtqYU0%2FveKKXFPDHdnlZUtE%2BoK7ev5hBc%2FZSsAiBiTc6CayKHCdzsLkK5yuO4IKHmI8T4DgZijKZGTrqWayr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMWi1uHy3HXg5kf9adKtwDmLeu2qoDxgkqt5bJHvTNwLOUZZG12TUVL2jGAylf0pNgJziwZMZUFIYObM8O9mN%2FRAOR9pFZoMC8ztEoFio%2FMiPwGzNDpi0wm5MyITYU7nDtZlkH0Nr%2BjA7DuoWxqTHMFM1y5dygutSCYJyyfTbYzGq1NlAmo%2BJDryPX3lbFWymuHRlJq3AzJhcFpnX0xHmUquTgDKMpl4ZQWDTw0mn3wKmVFz7fg3fgKisPUvT2ANw55TUdbV%2BRHcGb2xs6CzP08msuj8G6pLb6HLRW1J3567rNdBJy5wwFWHjp3Tv8zS2ujrFNz9oquIfNz1MlHPj4oSSV2CN%2FP8n4CYOErl23afhH2GJfC790asiWV9aqb5ywJ6F0WLMtzS1BesyDEkTg%2F0wETdkfWtdOgefYvxUfePPJ5WiTgvlzJrUKmOxH1jwXl6T0CRDvfFRBCV41sB9PYYYcvvtLGr0NN4e4HjYA7hpVAgRQpALJDeqSO2ZWhesxtkjkNx0JE%2FJ8mz19t3A0MQybcvSzIkSVOwZnDEyfo7hlQEMs6Jlf43V4z5XSANwXDHHJcrzAnEjbra7hltKtAyYZ5kkdye95AEvdHbhsPxZJkeCxxFoJTuPoOfJPmPcyb2iDNZNj7Jg8KNEwkrSnwAY6pgHwd4vCsNUlqw5rJF25GPAdgwC4MbrCVR1pWNzg9o2l65%2BxjQZcXRDZhHZTsjSggOpXHZ1KHVcAImaM8KzA0valn%2BDN3V8jpUYYCo%2F%2FSHQRNrtw3sHAHPYmrnFn65HRVt67WFOE3saA2UOed1rygtBQ5%2F2wnkhu0a1nw6UQ3cHlfunvZe60b0wazrq9SifUQQZ5PUPT7FrBS%2FfIQBeHUif0HxdIwDc7&X-Amz-Signature=b3469c2ad6847a683bee1c34ad70b44bb0d592134ce25ffa0a1490a8b6c31ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
