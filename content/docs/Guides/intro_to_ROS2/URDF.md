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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXVS2XV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIG4uV1%2B7ToFWRiMJFQZ0sZZ12QncQCtxcLfCjHdJPk5rAiAEsdIVsx4QRm%2Bixk9jUKVWH64T3skJl5YU%2FHBciG5fhCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN6tYAhgG9R1tXofyKtwDk%2BGA4HufzOMDA%2F%2FfsLUe5dBgDvCH%2Fuzew95UYjahe%2F7KZl8zh4vLJu7m3q1BX%2BbedxIPyAkLeR2U5GVlAgtKKVW0LauCsoKoEgu%2BNpxL4u%2B5DmkJczttqvhQ9oZ9QTPkNZL4FRY99aYxhWDsPAbiLiar8%2BrWwBylww%2Bftl6oAEbxNgaCvysFWX4JuWNziSIyi7dWY92RKL7tccVQTqQz6qs4cwzd6rYhw3xQ8Ilca76BaUt0MYfwaeJG6Mm3IwouwHMAL8PtyX3ATv5wHrq75c%2FC6Tju2Y0SEjnOxwCIiGxYif93sejJvNDfHTxbq37bgjD9VD7h3AL%2FfSRtOyBi8mVOYxMwbT6ROWNOO%2BoHatCUM3q%2Bn5lRi2mml96nNMrpPBFV7sSdvBXSEAHqcQGq8FjvvO77lmLWJefksYZeRQ6r%2BtZ1pyuNxUMwt6sbN3%2B4r35y8g6%2FAUvtCL1XHD%2FAEmTTb4gxspzWUXql4Ed%2FjWiCohzW%2BIlE8%2BNEX4PfU7kMfSRw4XvdYyC0Jzgpd5LSXguUhd3iBTKxe7QPo%2BAqm753ObLm7zQ8h3jcPOGjJVRIsUfxeFIF5%2BQK68c1ErEjir1h9fBwxBPOlV2qJQGICvRgliqt6esfwQlz%2F1Qw5L%2BavQY6pgHNDmiVTwN%2FFVQthuQVGNXZ%2FFKGzCnJQBx79Y7ZIfAjjPDjShAWO5WVXgN%2Fmg23LysFMjOZLYUlubeJFGRHBY%2BahmAmYkmTQcRFx7UBYN1QhvLzXaN7%2BOGDdnKgNL0KIExolc5HpDSXw1%2BZIya1VlX%2BxfHRlyQfuD%2Bt%2FsNV5uAR%2BMiSxrrDSO774MfgVY2XJt01eVk5Rg%2F%2FmkpfvCgAqGm1%2FvwujJUM&X-Amz-Signature=c698d1ba47658e7aedcc9ba377a16d999fb6a977749a55a65bc24af08d17de8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXVS2XV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIG4uV1%2B7ToFWRiMJFQZ0sZZ12QncQCtxcLfCjHdJPk5rAiAEsdIVsx4QRm%2Bixk9jUKVWH64T3skJl5YU%2FHBciG5fhCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN6tYAhgG9R1tXofyKtwDk%2BGA4HufzOMDA%2F%2FfsLUe5dBgDvCH%2Fuzew95UYjahe%2F7KZl8zh4vLJu7m3q1BX%2BbedxIPyAkLeR2U5GVlAgtKKVW0LauCsoKoEgu%2BNpxL4u%2B5DmkJczttqvhQ9oZ9QTPkNZL4FRY99aYxhWDsPAbiLiar8%2BrWwBylww%2Bftl6oAEbxNgaCvysFWX4JuWNziSIyi7dWY92RKL7tccVQTqQz6qs4cwzd6rYhw3xQ8Ilca76BaUt0MYfwaeJG6Mm3IwouwHMAL8PtyX3ATv5wHrq75c%2FC6Tju2Y0SEjnOxwCIiGxYif93sejJvNDfHTxbq37bgjD9VD7h3AL%2FfSRtOyBi8mVOYxMwbT6ROWNOO%2BoHatCUM3q%2Bn5lRi2mml96nNMrpPBFV7sSdvBXSEAHqcQGq8FjvvO77lmLWJefksYZeRQ6r%2BtZ1pyuNxUMwt6sbN3%2B4r35y8g6%2FAUvtCL1XHD%2FAEmTTb4gxspzWUXql4Ed%2FjWiCohzW%2BIlE8%2BNEX4PfU7kMfSRw4XvdYyC0Jzgpd5LSXguUhd3iBTKxe7QPo%2BAqm753ObLm7zQ8h3jcPOGjJVRIsUfxeFIF5%2BQK68c1ErEjir1h9fBwxBPOlV2qJQGICvRgliqt6esfwQlz%2F1Qw5L%2BavQY6pgHNDmiVTwN%2FFVQthuQVGNXZ%2FFKGzCnJQBx79Y7ZIfAjjPDjShAWO5WVXgN%2Fmg23LysFMjOZLYUlubeJFGRHBY%2BahmAmYkmTQcRFx7UBYN1QhvLzXaN7%2BOGDdnKgNL0KIExolc5HpDSXw1%2BZIya1VlX%2BxfHRlyQfuD%2Bt%2FsNV5uAR%2BMiSxrrDSO774MfgVY2XJt01eVk5Rg%2F%2FmkpfvCgAqGm1%2FvwujJUM&X-Amz-Signature=a643b2d9da9a313ebb924b1ce040db24c092622027eecb73e1878404a6b7eff2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
