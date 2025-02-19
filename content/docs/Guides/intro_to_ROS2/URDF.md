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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ABJMUY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1%2BV1ogij7L1mELbynlRJKKD%2FF6qYrJj8Y6ldRxGYmFAIgX7u1tO6yPmTE0jxhLzjWjyOpYLe9FUCdB7KrWun9A8YqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQRQ0oUCTQTGtp0CrcAwbByVxzozT4ut6O%2Fo4%2F2VWnPE9vVpYHflQNo7%2Fh9jYT96mI06jzBT1JmSzaPQDIUXp%2BXRDo%2FfrUi7kUzezsyeaxjipI1KY8gpGrUt7OFHoEiqaXQQaNfPY54Hu2v3dDGvIdVFEEV5DYdZQgJi2NR2fxOr%2FscnWGx5COmzrPz6f%2FKNT5iff%2F%2BdYdSny4IktaBlqwItqVSrxlyIYgreS%2F2rx%2F%2FVocSGs9qPDdKCKfsRzJK2IKHwOMEab8T2jdVh8AyPyE9JxYCsjbkysz2XbluURMIObHBdgkMbvBRug82S6zz0RgRSHQnbplfrLajAlnuPb%2F45PYxHSX8nDs8QZcX9WgoxOwd0AdvqC7PdPCcDwhS9H236U32LVp8lEbJb3s7y19OrJXwxtEUVtehck4LWPGT6Ji0uygtu2kbpZfLz6YWHV6PJC1kOjQTtVRoS6KNRTIyJ8pxES94PRZtmZz5Lbfp5boyQIZkdYBJV4Uzt7jEaWpxdn6quAOHjtUi4d4YNMSiV%2FuKEDIQwCnJ80lHusSkpKBZmC95lHdjXZLLsDIsoBbWW5MaHj80ts1E%2BPNm%2F%2FyvIbH67mLx1VPaIVc3eAFirqCdRJmhRThMFydS3kqx2uN0LxiLvALjZswMPCe1r0GOqUB8DLkoAL8ONgZ%2Flv5MtMwRBXUHLqJTSK0oYJ6pLs7pSKUMBGd9ZmTCfmibRfN%2BausZ4k0NdvrxpMJdHjRfT2wF9MaPS61D9f0vtws0PGcghj%2FRBDkcdPHptK921K5LzYUyc61f36QqX2vbzisn90m9zrO3VYO9W5Nubd4r7pSHf0tBDds9jaZnMbQ6gWXHRJhCjOxZpdccLefH%2Bgh2eCsZE9BVDyG&X-Amz-Signature=2ff5797becf5d846c8bd777240e01f325b4570b7de50235f12cd9661230b9034&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ABJMUY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1%2BV1ogij7L1mELbynlRJKKD%2FF6qYrJj8Y6ldRxGYmFAIgX7u1tO6yPmTE0jxhLzjWjyOpYLe9FUCdB7KrWun9A8YqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQRQ0oUCTQTGtp0CrcAwbByVxzozT4ut6O%2Fo4%2F2VWnPE9vVpYHflQNo7%2Fh9jYT96mI06jzBT1JmSzaPQDIUXp%2BXRDo%2FfrUi7kUzezsyeaxjipI1KY8gpGrUt7OFHoEiqaXQQaNfPY54Hu2v3dDGvIdVFEEV5DYdZQgJi2NR2fxOr%2FscnWGx5COmzrPz6f%2FKNT5iff%2F%2BdYdSny4IktaBlqwItqVSrxlyIYgreS%2F2rx%2F%2FVocSGs9qPDdKCKfsRzJK2IKHwOMEab8T2jdVh8AyPyE9JxYCsjbkysz2XbluURMIObHBdgkMbvBRug82S6zz0RgRSHQnbplfrLajAlnuPb%2F45PYxHSX8nDs8QZcX9WgoxOwd0AdvqC7PdPCcDwhS9H236U32LVp8lEbJb3s7y19OrJXwxtEUVtehck4LWPGT6Ji0uygtu2kbpZfLz6YWHV6PJC1kOjQTtVRoS6KNRTIyJ8pxES94PRZtmZz5Lbfp5boyQIZkdYBJV4Uzt7jEaWpxdn6quAOHjtUi4d4YNMSiV%2FuKEDIQwCnJ80lHusSkpKBZmC95lHdjXZLLsDIsoBbWW5MaHj80ts1E%2BPNm%2F%2FyvIbH67mLx1VPaIVc3eAFirqCdRJmhRThMFydS3kqx2uN0LxiLvALjZswMPCe1r0GOqUB8DLkoAL8ONgZ%2Flv5MtMwRBXUHLqJTSK0oYJ6pLs7pSKUMBGd9ZmTCfmibRfN%2BausZ4k0NdvrxpMJdHjRfT2wF9MaPS61D9f0vtws0PGcghj%2FRBDkcdPHptK921K5LzYUyc61f36QqX2vbzisn90m9zrO3VYO9W5Nubd4r7pSHf0tBDds9jaZnMbQ6gWXHRJhCjOxZpdccLefH%2Bgh2eCsZE9BVDyG&X-Amz-Signature=93fece9b228f4f00efa336d499afcdb524d0a884391630e4cd7e6b8ef4fbfac1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
