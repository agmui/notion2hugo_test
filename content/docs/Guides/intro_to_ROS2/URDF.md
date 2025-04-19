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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVJO5OX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2jsI%2Bmr9pGKd4th0FAJ0B31Ka9zoCjT3sYVuYURMKBQIhALDmYAWvO9OTlKeE5W6rsj8uN7SyLQZb0keb8%2FpQJ7WMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOdE1CLjzrxD0SmJwq3AOQYc5oGZGPBPR7DQcGsVX4qAFPNuSmcyeMPuLHaJ7WmnM7m8hV1sT%2Bz6BbAiOL%2FOtHVnhcQJswR9Syz%2BNPm%2B1LdS%2B5jB5UvWOcFO00Eh3YO5k42E1rLifzmDCp2dPMdjkSfshGJxeQ2w85RXFwIcO0m%2BeKFcYejCppzPZtDDDAsrUv5NXD42B5wqnAg6s%2FrvN5ne%2Bc1cbCT8vSnE4T6%2FQMo1F0nUu4NsM4EUiYaPHkg73hHPK93d5cbzMN2I8HpBMIj09Qa7DOtDwwGvllXKVjJdw417X284ARSDW0moX33pTxs5p69CxwWYEje7PzjPJg34FBzrDmfQ7hAylcuSstsX4AAevt7CV20VArmip6SKZSoIB34xBtaiDkJglre5x%2FetaYRq5yqYWKAapx1Fnr49OOhy%2FFKMlydvnAcWnKNN6P3n%2B%2FGw0T%2BCLZgr9I5DvQPNOJkiw0nhTLTvwYf3sLMBesnrsjEL3xS2XbA%2B%2BVg%2BjbXmcjZq2qaPPjtxix98fNOalOldWymnYY%2FttZJaE5CRlQ8tTuYKhnpKl589WDJTzH8Ep23V48AcoAMkyOLXNIQsW%2FIQFl%2F6kuvszebT%2BJP4ePcQauDxkfy4AepXygvnWaPAteMfBnvRqhVzD%2BzYvABjqkAYzEafoZa3qMVSqbmhss%2FXtjEvuLtEejOcMAVCfy7Jusr1BSWY0fPWwrHRDVxPSfFQ%2By4VZBIL06rLyObn0a%2F5ymYapq5AQpjrznaFZw5SY%2BlVsxwgfli8gjj4sdXIOVHsD4GXQjBkvC4QY1m5L9TTWwOFzIVxP3efAOn4GTG3J9kG06r7nyN1e1EPuIIf6Ig4iy4DhhFXQZHQpoiiQPNpJKpRIw&X-Amz-Signature=df133be36434372b876eb7b1dfeeec6e3106314890a39c17d08d247a36dccaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVJO5OX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2jsI%2Bmr9pGKd4th0FAJ0B31Ka9zoCjT3sYVuYURMKBQIhALDmYAWvO9OTlKeE5W6rsj8uN7SyLQZb0keb8%2FpQJ7WMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOdE1CLjzrxD0SmJwq3AOQYc5oGZGPBPR7DQcGsVX4qAFPNuSmcyeMPuLHaJ7WmnM7m8hV1sT%2Bz6BbAiOL%2FOtHVnhcQJswR9Syz%2BNPm%2B1LdS%2B5jB5UvWOcFO00Eh3YO5k42E1rLifzmDCp2dPMdjkSfshGJxeQ2w85RXFwIcO0m%2BeKFcYejCppzPZtDDDAsrUv5NXD42B5wqnAg6s%2FrvN5ne%2Bc1cbCT8vSnE4T6%2FQMo1F0nUu4NsM4EUiYaPHkg73hHPK93d5cbzMN2I8HpBMIj09Qa7DOtDwwGvllXKVjJdw417X284ARSDW0moX33pTxs5p69CxwWYEje7PzjPJg34FBzrDmfQ7hAylcuSstsX4AAevt7CV20VArmip6SKZSoIB34xBtaiDkJglre5x%2FetaYRq5yqYWKAapx1Fnr49OOhy%2FFKMlydvnAcWnKNN6P3n%2B%2FGw0T%2BCLZgr9I5DvQPNOJkiw0nhTLTvwYf3sLMBesnrsjEL3xS2XbA%2B%2BVg%2BjbXmcjZq2qaPPjtxix98fNOalOldWymnYY%2FttZJaE5CRlQ8tTuYKhnpKl589WDJTzH8Ep23V48AcoAMkyOLXNIQsW%2FIQFl%2F6kuvszebT%2BJP4ePcQauDxkfy4AepXygvnWaPAteMfBnvRqhVzD%2BzYvABjqkAYzEafoZa3qMVSqbmhss%2FXtjEvuLtEejOcMAVCfy7Jusr1BSWY0fPWwrHRDVxPSfFQ%2By4VZBIL06rLyObn0a%2F5ymYapq5AQpjrznaFZw5SY%2BlVsxwgfli8gjj4sdXIOVHsD4GXQjBkvC4QY1m5L9TTWwOFzIVxP3efAOn4GTG3J9kG06r7nyN1e1EPuIIf6Ig4iy4DhhFXQZHQpoiiQPNpJKpRIw&X-Amz-Signature=84c469d40898329aa34a646c5390619723cc5717f1093b35187c864f7d89a7ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
