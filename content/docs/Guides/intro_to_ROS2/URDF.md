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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R26H6JQD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC2TTOWyEKeX9jUBRv5HAhkD1asjJRDKhxH8YVIra4HewIgL5ZOI8rNq7ybGKqOxfbaprcjuLfZFdk%2FZM4bLcPwGAAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOb1nimsZrF%2BBGZNzCrcA1tvCMCVtDuNDFveAx%2F3zw0%2BXV2Rq7GOsIrnOJok%2ByzZBNG1tb4QgLa8NSlnTxJ3iKnpk4GHPCeksKCIULkG%2B%2Bi64sixW8XOx%2FTt0QNjPRyBOzWlsLxiuOGppfh3XXItqX6NGlb4INvUVadD2X6saJvqIjCMrECLYZzXxKKT9Wx4I7X%2BgJRon4%2BEqygzNXbxu0RXYgQLuVdpD9tMXAJae4%2F2Zv0PiONj6nSh4ENJ1NwN2Kjko6Tpu9aNoRmGYugZPYE%2FXNBTU5GErE8J5y9O8nfYE0sHo90tQ4B3wLS3kctzoLBoIMU0TBLEW47BguIT4tRcV9lhGjxoK4Ox%2FD1lA0JPvkL0AByqTxmCJ2nSq8dIDrmuYQfUW%2BWUh0NU6meIXh8Ulvvq6IKQ2D9mmMtGQp8eIHrUhTSmr0wAUPvKXFxkuhJJIPpJAc%2FvTe4exR5xVumGCDoI1o%2BL9nvn9qt9MH6e8arOXyOU3cn3msP0p71GVjtgirPQKiEFe4W2OiQTswHUqffX14y6oeJtgtwQf4ll%2ByaA%2BzvIyuSK3JpqhD0TYb7MjcNilkYk6prGzI1tgcNvqJKoCLCioN5OfLNQApnKrw6c5NamtyNoCfjIJKT8S%2FqMFmQrjvnQPg8dMPe35cMGOqUBGsGeLF8mb537mmln53ieuxKZS83934u8iEDnxFuToRjd6S0E2a2Bdq%2FadQSNPBaYwBo9pQzasUPTeWnCr7Zsii0dtIk23D74Vkx3m26w0xJTNFT51S3ROLFubIcfTWdDvKbBjF1RUGsBt5IlwkFISKA9QUSAsHAe6eHF8CkJiMaj3hVu9LcOrCzk0QqmvUvy%2BZudfbvqLjnBTFjG8oGm0IRLTSE2&X-Amz-Signature=0bc05ccbc6f12dc521d71ad497a611e863babd7f8423a8a17c688bb88ac1e410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R26H6JQD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC2TTOWyEKeX9jUBRv5HAhkD1asjJRDKhxH8YVIra4HewIgL5ZOI8rNq7ybGKqOxfbaprcjuLfZFdk%2FZM4bLcPwGAAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOb1nimsZrF%2BBGZNzCrcA1tvCMCVtDuNDFveAx%2F3zw0%2BXV2Rq7GOsIrnOJok%2ByzZBNG1tb4QgLa8NSlnTxJ3iKnpk4GHPCeksKCIULkG%2B%2Bi64sixW8XOx%2FTt0QNjPRyBOzWlsLxiuOGppfh3XXItqX6NGlb4INvUVadD2X6saJvqIjCMrECLYZzXxKKT9Wx4I7X%2BgJRon4%2BEqygzNXbxu0RXYgQLuVdpD9tMXAJae4%2F2Zv0PiONj6nSh4ENJ1NwN2Kjko6Tpu9aNoRmGYugZPYE%2FXNBTU5GErE8J5y9O8nfYE0sHo90tQ4B3wLS3kctzoLBoIMU0TBLEW47BguIT4tRcV9lhGjxoK4Ox%2FD1lA0JPvkL0AByqTxmCJ2nSq8dIDrmuYQfUW%2BWUh0NU6meIXh8Ulvvq6IKQ2D9mmMtGQp8eIHrUhTSmr0wAUPvKXFxkuhJJIPpJAc%2FvTe4exR5xVumGCDoI1o%2BL9nvn9qt9MH6e8arOXyOU3cn3msP0p71GVjtgirPQKiEFe4W2OiQTswHUqffX14y6oeJtgtwQf4ll%2ByaA%2BzvIyuSK3JpqhD0TYb7MjcNilkYk6prGzI1tgcNvqJKoCLCioN5OfLNQApnKrw6c5NamtyNoCfjIJKT8S%2FqMFmQrjvnQPg8dMPe35cMGOqUBGsGeLF8mb537mmln53ieuxKZS83934u8iEDnxFuToRjd6S0E2a2Bdq%2FadQSNPBaYwBo9pQzasUPTeWnCr7Zsii0dtIk23D74Vkx3m26w0xJTNFT51S3ROLFubIcfTWdDvKbBjF1RUGsBt5IlwkFISKA9QUSAsHAe6eHF8CkJiMaj3hVu9LcOrCzk0QqmvUvy%2BZudfbvqLjnBTFjG8oGm0IRLTSE2&X-Amz-Signature=31b15eb9f7abedc052eeae6b2cf2fb74bd2a75f86f91519bd504ea2f944eae00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
