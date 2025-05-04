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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YLLGVT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDMDjgWgxHtXjbETh6qT74%2Fh%2BfedPQIiJrJvggIkVHR8gIhANzj5t9V3bG3YsT2j28pQ%2Bjz9pYZR1%2F4prQaOv1zBJJiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6vpUFIs9pBE%2BqMXsq3AMjsvg0l892Nn458OBfJJzjL8UoM3jCgx45pnYXjOEUFNGdj1sNe9HCywUNfRu76QkpAVWL%2FV1%2B57LBi7BsRwp78j759m5A8OurMA8EkjHl9ywhcERHm%2BmJo8%2FoXWnD8rJ3GjyAOi6g51Em6GXroMmSPWcKjhIeJP%2BQxR8qa9WKUltMCmbfPbE%2BDyQnAMdQtHb0Gn5dNjDbrTCtgJU35dcUMZOOf%2F9a63xsciQNn1obFoQp%2By0Nr7hyYHHWfK8hk11su7wROhvdzZEL5Oi6s7vuRsZXW%2BDMFmUtHwv5eTr6JqYheK9vUvMzL8HFEYpVu8xjOcfHE6mF32PulI%2FA3MNhjxGkdKQRJg4aGq3j16VfhbrCUznXLoXGIyIOMitTMTKNocDQEJBuOvtwlTaHFcjEIW0jKyX98ZzxeuYpPaUdF6SRaGfjK%2Fut1jGhKWfYD0gPzdq5hPmsQyWQaIoh2iH2BeGXEJebz84UlvcYIkmecJjrOO6A1boJiQHF2k4UXgq8UL2puyTPnm2b141gkOSzSnXmQaCWM8S5V6%2FHy2QuKtKgiRWI2TYVJ9vgCGoekWxA5e5NZxRexvCRmm9pokxdimw1Mw4d9xqSGS9MBXMYDyKTUhw6ME9egG5oEDCQ69vABjqkAVYeG9GNvYWc5iR%2F9D%2BSW6rFaHvuYpHfCKeUbmcrMuVXnDTcAwpgd0NfwEHLTQnCdvzF30EDW6N%2B4Uj3K%2BKVE3yMGJ12BqdlI7vOVmOZY2C8wtrUPbRfw33Jb72scVcJialDSR1MvuS8wC40uHqF%2FpP9K7D%2FWpUezGWKtkY3j0xS0qP7DRaM5ZwsAsMGRxIdLJ244axMrzNhZ1T8icQ2xnCET4f2&X-Amz-Signature=b42e9b2932ebee020911d856e5129e3dc77563b79d64c2a11a5862f63618a6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YLLGVT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDMDjgWgxHtXjbETh6qT74%2Fh%2BfedPQIiJrJvggIkVHR8gIhANzj5t9V3bG3YsT2j28pQ%2Bjz9pYZR1%2F4prQaOv1zBJJiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6vpUFIs9pBE%2BqMXsq3AMjsvg0l892Nn458OBfJJzjL8UoM3jCgx45pnYXjOEUFNGdj1sNe9HCywUNfRu76QkpAVWL%2FV1%2B57LBi7BsRwp78j759m5A8OurMA8EkjHl9ywhcERHm%2BmJo8%2FoXWnD8rJ3GjyAOi6g51Em6GXroMmSPWcKjhIeJP%2BQxR8qa9WKUltMCmbfPbE%2BDyQnAMdQtHb0Gn5dNjDbrTCtgJU35dcUMZOOf%2F9a63xsciQNn1obFoQp%2By0Nr7hyYHHWfK8hk11su7wROhvdzZEL5Oi6s7vuRsZXW%2BDMFmUtHwv5eTr6JqYheK9vUvMzL8HFEYpVu8xjOcfHE6mF32PulI%2FA3MNhjxGkdKQRJg4aGq3j16VfhbrCUznXLoXGIyIOMitTMTKNocDQEJBuOvtwlTaHFcjEIW0jKyX98ZzxeuYpPaUdF6SRaGfjK%2Fut1jGhKWfYD0gPzdq5hPmsQyWQaIoh2iH2BeGXEJebz84UlvcYIkmecJjrOO6A1boJiQHF2k4UXgq8UL2puyTPnm2b141gkOSzSnXmQaCWM8S5V6%2FHy2QuKtKgiRWI2TYVJ9vgCGoekWxA5e5NZxRexvCRmm9pokxdimw1Mw4d9xqSGS9MBXMYDyKTUhw6ME9egG5oEDCQ69vABjqkAVYeG9GNvYWc5iR%2F9D%2BSW6rFaHvuYpHfCKeUbmcrMuVXnDTcAwpgd0NfwEHLTQnCdvzF30EDW6N%2B4Uj3K%2BKVE3yMGJ12BqdlI7vOVmOZY2C8wtrUPbRfw33Jb72scVcJialDSR1MvuS8wC40uHqF%2FpP9K7D%2FWpUezGWKtkY3j0xS0qP7DRaM5ZwsAsMGRxIdLJ244axMrzNhZ1T8icQ2xnCET4f2&X-Amz-Signature=2d7ad687c85abee2d9def0fd1d911ce9a71591c169c0624d802eb210c70a4430&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
