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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZJLJS2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCNb9KTMXLHpfESk%2Fd1AAijyPUfQDDYSm%2Fg4GZL6S3mJQIhAJz%2FcMLYUA3Xa3AbPCvbE2juHmI2P79WC%2FkvGHdvTMmgKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwESe2powkcKE74l0wq3AMH0dF%2BVLtuMvj3uEi4XqfYbh9PTSmh5uAmgWERF1xB5hybIWKVoukovEVlqTAc3KMbKY4yEd1Aiv4RLWXqdd89XT%2BBmN9XIawjLLDyAwij1YDsNqgg2MbAOcuTHvzhFyqVcezTFfcXYRDd1SYjAG509BkFMTy3Ikmeke6RV9pN5bUFcVV1OrLVHhUTilcwbwXBzthCAgmW6I27nRW6wMKPbvOj7Ubm7vkdgjMWtPXQt%2FqkXhmL3oqL2Bm6uDYQEn39td1o7%2F7b8m3nqOhvrubnoGUeYIy6eJO%2BKKzMkx05GWrA9BO4N6vLjtsyft9t4Z7KEl0dRtOBFAcXy9pE4HLHwYlSzNc9zkVDcWjfIkk1R8HOGtK%2FBZYcddi4Lo0EYc4LwKGLIIISmiKKmELd2jOoNGSIuwlOSbRMh8flaA3v7%2FY1MyUoZZ0XmWSauS322euSKKf%2BHliSr%2FOGYcTznU5ICVNXXRsa4FG44MI%2BctlBIOwwYRhp62Zvcbp4Y98urfZ4eM%2Fhp5H%2Fn6PO6FkHqJB1KN1TdNxnGUmNhZ0B%2FyjQ%2Fizd9rzNKFU5L47yXyUB6BFt4V2T73RNE0DxmSU%2B54QwFmfTwXyeN5n5q%2F9ynMeYFqJZZQgpBMFh9%2B5bMjCQxpzEBjqkAXlcVFym96tNgMa7hshFPO7DGcW2hjSjPOz83oinJKuJICwIlaAQPk7zMYw%2Fv1VqMfzGzfoVn%2BfXczQ2eogwoGyXZresJGv0QCczBuElBmxMzfpUw67LjfidMnMqX06xYlnCWJm%2FqIp%2FZiIPfoyHpMe2Pd818J91e91DAyoG0hLblVZw16vhWXvipOoQ86DlENve31aR6VNytp%2FuOMxn1jBAQQgl&X-Amz-Signature=ca0b2dafcce921e37414ba4710456bfdedddac59028b81c9f01aab95a6e18eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZJLJS2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCNb9KTMXLHpfESk%2Fd1AAijyPUfQDDYSm%2Fg4GZL6S3mJQIhAJz%2FcMLYUA3Xa3AbPCvbE2juHmI2P79WC%2FkvGHdvTMmgKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwESe2powkcKE74l0wq3AMH0dF%2BVLtuMvj3uEi4XqfYbh9PTSmh5uAmgWERF1xB5hybIWKVoukovEVlqTAc3KMbKY4yEd1Aiv4RLWXqdd89XT%2BBmN9XIawjLLDyAwij1YDsNqgg2MbAOcuTHvzhFyqVcezTFfcXYRDd1SYjAG509BkFMTy3Ikmeke6RV9pN5bUFcVV1OrLVHhUTilcwbwXBzthCAgmW6I27nRW6wMKPbvOj7Ubm7vkdgjMWtPXQt%2FqkXhmL3oqL2Bm6uDYQEn39td1o7%2F7b8m3nqOhvrubnoGUeYIy6eJO%2BKKzMkx05GWrA9BO4N6vLjtsyft9t4Z7KEl0dRtOBFAcXy9pE4HLHwYlSzNc9zkVDcWjfIkk1R8HOGtK%2FBZYcddi4Lo0EYc4LwKGLIIISmiKKmELd2jOoNGSIuwlOSbRMh8flaA3v7%2FY1MyUoZZ0XmWSauS322euSKKf%2BHliSr%2FOGYcTznU5ICVNXXRsa4FG44MI%2BctlBIOwwYRhp62Zvcbp4Y98urfZ4eM%2Fhp5H%2Fn6PO6FkHqJB1KN1TdNxnGUmNhZ0B%2FyjQ%2Fizd9rzNKFU5L47yXyUB6BFt4V2T73RNE0DxmSU%2B54QwFmfTwXyeN5n5q%2F9ynMeYFqJZZQgpBMFh9%2B5bMjCQxpzEBjqkAXlcVFym96tNgMa7hshFPO7DGcW2hjSjPOz83oinJKuJICwIlaAQPk7zMYw%2Fv1VqMfzGzfoVn%2BfXczQ2eogwoGyXZresJGv0QCczBuElBmxMzfpUw67LjfidMnMqX06xYlnCWJm%2FqIp%2FZiIPfoyHpMe2Pd818J91e91DAyoG0hLblVZw16vhWXvipOoQ86DlENve31aR6VNytp%2FuOMxn1jBAQQgl&X-Amz-Signature=22a274e2bb5f413b4026393e63e709e415b0cb9a4997ef3c3dfeb260d93326a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
