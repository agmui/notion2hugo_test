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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5A4MSW2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC6jOej7wfM9gLfiEZhmyWtkvX7A6Oaq%2F7oVpVF7GdWqgIgAyUYRfGLw5Csu8uxxcxsKAHiZzWAaQtBJgkw2KgqpOAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1z2B7nwp3Rs4zSrircA4Tb%2BIqD%2FBYrb89jt98cZVpltXhtg1%2BhwSwiN8%2F8JOGmswy%2F2usID1F6SIyCPP80HCZTHL0L70ZwSazC1Us8WIE6dFADLm%2FFfj7UC6khs8Iwe1cO2gCfob3hzn9uqjTO1%2FUcQOl9XZ2EX47xVHs%2FfXnXtMSDePAsuHYMAMSp%2B6V7kq5slVr69d3KMhO3DwiT7X4hCN%2B202guevlPJszX7aBcIoD9fPE%2F1SimrmJIS75InKZPW1HGvvcgo87tVAkllfgY34JokFgRKwGI7anPG78b%2Fzqdi7XBwnsEk37nPRzV9fQaUmKrnSwItE5zHaAVIXb%2BFCd9JaXjJkgGR4CkDVZhzpS2CemnIX%2Bo2QWaOWLzEvwohH5yFuGpGxUgzu3BBSRf5cbsPUHDD2F8j5c6EIjsNJ4m8NH4kxFO0UFSlQUt4hip0hODRUu1OCj099UVoF4k7guFQod%2FjF3BBJ5JDTscxfhlytNCa1wOBk35tgtDmjFDh3iZ03kd6jm1Sn8yEbowFH9KTUzYME5j5N36ecZ%2Fk%2FAnp6BDe9ND%2F1kh7Xdrj3N5nU%2BqRDzVKtXlAuFNEXTCLmwpQSry7vSli%2Bncg1ocshHTDlct2PJDb0IbznbceQVuIYLBV%2Bv8E2VoMJvzwb4GOqUBtMBu6JxnmioBiiv7n0LH8aUVcQExr9FU4T2oT7Z%2Bm9sCLVn%2BVE0PJWpBvuuPmDrjswK0LXoNutC6H%2F3aREh53E%2FWRh3YH0zcoF%2Bt0emjhpF%2FoMne%2Fsjw6YfWCClgL7pxwCKo8geoLxOMyH1GYNTYmB1Neu%2FEm0Vo5QJ2LaR%2B%2FdfV0yMWjlLYR4Oof1FoWxenWCoA8ps7XfmCqaVf%2BsaNK3LGMYeO&X-Amz-Signature=927278187f74b1a8afe25986d503b39a439c117f0961d45da87c02bfdc52921b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5A4MSW2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC6jOej7wfM9gLfiEZhmyWtkvX7A6Oaq%2F7oVpVF7GdWqgIgAyUYRfGLw5Csu8uxxcxsKAHiZzWAaQtBJgkw2KgqpOAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1z2B7nwp3Rs4zSrircA4Tb%2BIqD%2FBYrb89jt98cZVpltXhtg1%2BhwSwiN8%2F8JOGmswy%2F2usID1F6SIyCPP80HCZTHL0L70ZwSazC1Us8WIE6dFADLm%2FFfj7UC6khs8Iwe1cO2gCfob3hzn9uqjTO1%2FUcQOl9XZ2EX47xVHs%2FfXnXtMSDePAsuHYMAMSp%2B6V7kq5slVr69d3KMhO3DwiT7X4hCN%2B202guevlPJszX7aBcIoD9fPE%2F1SimrmJIS75InKZPW1HGvvcgo87tVAkllfgY34JokFgRKwGI7anPG78b%2Fzqdi7XBwnsEk37nPRzV9fQaUmKrnSwItE5zHaAVIXb%2BFCd9JaXjJkgGR4CkDVZhzpS2CemnIX%2Bo2QWaOWLzEvwohH5yFuGpGxUgzu3BBSRf5cbsPUHDD2F8j5c6EIjsNJ4m8NH4kxFO0UFSlQUt4hip0hODRUu1OCj099UVoF4k7guFQod%2FjF3BBJ5JDTscxfhlytNCa1wOBk35tgtDmjFDh3iZ03kd6jm1Sn8yEbowFH9KTUzYME5j5N36ecZ%2Fk%2FAnp6BDe9ND%2F1kh7Xdrj3N5nU%2BqRDzVKtXlAuFNEXTCLmwpQSry7vSli%2Bncg1ocshHTDlct2PJDb0IbznbceQVuIYLBV%2Bv8E2VoMJvzwb4GOqUBtMBu6JxnmioBiiv7n0LH8aUVcQExr9FU4T2oT7Z%2Bm9sCLVn%2BVE0PJWpBvuuPmDrjswK0LXoNutC6H%2F3aREh53E%2FWRh3YH0zcoF%2Bt0emjhpF%2FoMne%2Fsjw6YfWCClgL7pxwCKo8geoLxOMyH1GYNTYmB1Neu%2FEm0Vo5QJ2LaR%2B%2FdfV0yMWjlLYR4Oof1FoWxenWCoA8ps7XfmCqaVf%2BsaNK3LGMYeO&X-Amz-Signature=5b8e475ccc26c26848f5be627fa568ac8c606640e4cd36b71f13c272b5c7356d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
