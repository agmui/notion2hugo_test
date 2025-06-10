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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK6NNR5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmVgiwEbH2l0aoSxqz1AC9tjz9oKTiO9A3AwuuBqzGQIhAIgPrm8fCiPSTR4N5Cs0%2BkjvOanhK5Mzjft8%2Bt7g7lt%2BKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDrcUUn3D0zVa3wcq3APsDd9zPF2ZQA0vwixsl3w5JH03epXJFvZI6fQhg4ETsAjik0QUP4B9mg9xUvrRy9AkrqGGqDS5djYhS3fkqzFE%2Bv%2FkxRQkGNGLS6PE6APv61ur%2F%2BpfMqm0HBXV7MbPSbnctrgCgGTRozHtzRvmQ4W507UBZOyJB%2BGkeQ9h6ndNC1f0xdToukohI17wBeKtLgKLLrx5IxJNjx0BVVrCjJj6%2BG9pXnczr3gQvTHd9qR3SKBZ4XfsfIsqZGUQYwZkrH6SrPffFyRfa6ltDm2LYwqLIG3b4sUWASIFITEztUzzatb5zO0LuvCPo3bXwubExgIQJ7gRzAvp%2BqaUbuJMeOY2mwKkBouMoiQOS2UdF0bbPEP7UvFtO%2BACFhvU7AIGCL4hu1pqiMjbrCq5PiiGI8mFNRC%2BUM4G301Nx8b45VTpzlFhqG%2BI8B%2Fn9nWcLIOIXUZ1hgQBtgII35yRHC1Lgu%2F4w%2BukLh4RDXNDJy%2Br30rQtCrjWpfifDYsyRdY%2BjEBB9kcPKMNI%2B61GSJt2THkwDVbMj3nrtNQjM3vMYB16Pf6Sh2HYhmxu%2FhsaO0hzg644HZbU3n6AmwBDbaN24XLT6DvNBCz4ZHK9wArYOk0Ty4xnJCXXCvq1ODHzFFNDjDw5KLCBjqkAfrCvjnoS81KuCDTfu0j0vO66l5Z8SeoMPTttjmREVoDbv3JV0FTalSGVNc9ryde9D0biaQkioBnI%2FxZmEQBjUTn%2FKKtoYWwWULKuS6Po0iItp%2F2oN%2FimVP1aTE2PRRWyWwnvHiF%2Fx8LBBWjTFNlqk9c%2FACgySo4PtmSsGPCHjl3G9DOvThiWI4G55PvybefZYJHEGB1JiKcYnSFM4pFmK7aFJFD&X-Amz-Signature=33d776968dfa0395ee8a2bb30f3f9de79cd26c55f6158982e2a1e46c49a92acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK6NNR5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmVgiwEbH2l0aoSxqz1AC9tjz9oKTiO9A3AwuuBqzGQIhAIgPrm8fCiPSTR4N5Cs0%2BkjvOanhK5Mzjft8%2Bt7g7lt%2BKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDrcUUn3D0zVa3wcq3APsDd9zPF2ZQA0vwixsl3w5JH03epXJFvZI6fQhg4ETsAjik0QUP4B9mg9xUvrRy9AkrqGGqDS5djYhS3fkqzFE%2Bv%2FkxRQkGNGLS6PE6APv61ur%2F%2BpfMqm0HBXV7MbPSbnctrgCgGTRozHtzRvmQ4W507UBZOyJB%2BGkeQ9h6ndNC1f0xdToukohI17wBeKtLgKLLrx5IxJNjx0BVVrCjJj6%2BG9pXnczr3gQvTHd9qR3SKBZ4XfsfIsqZGUQYwZkrH6SrPffFyRfa6ltDm2LYwqLIG3b4sUWASIFITEztUzzatb5zO0LuvCPo3bXwubExgIQJ7gRzAvp%2BqaUbuJMeOY2mwKkBouMoiQOS2UdF0bbPEP7UvFtO%2BACFhvU7AIGCL4hu1pqiMjbrCq5PiiGI8mFNRC%2BUM4G301Nx8b45VTpzlFhqG%2BI8B%2Fn9nWcLIOIXUZ1hgQBtgII35yRHC1Lgu%2F4w%2BukLh4RDXNDJy%2Br30rQtCrjWpfifDYsyRdY%2BjEBB9kcPKMNI%2B61GSJt2THkwDVbMj3nrtNQjM3vMYB16Pf6Sh2HYhmxu%2FhsaO0hzg644HZbU3n6AmwBDbaN24XLT6DvNBCz4ZHK9wArYOk0Ty4xnJCXXCvq1ODHzFFNDjDw5KLCBjqkAfrCvjnoS81KuCDTfu0j0vO66l5Z8SeoMPTttjmREVoDbv3JV0FTalSGVNc9ryde9D0biaQkioBnI%2FxZmEQBjUTn%2FKKtoYWwWULKuS6Po0iItp%2F2oN%2FimVP1aTE2PRRWyWwnvHiF%2Fx8LBBWjTFNlqk9c%2FACgySo4PtmSsGPCHjl3G9DOvThiWI4G55PvybefZYJHEGB1JiKcYnSFM4pFmK7aFJFD&X-Amz-Signature=1236fdd1a354c850d3a1785688a569cedb6db587f4a9bdb3f969f419cc69d523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
