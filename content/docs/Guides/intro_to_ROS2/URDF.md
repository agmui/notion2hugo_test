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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSN26IRM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCMyu5bq4gS%2BU9eQ3P2F6IalOXbeQSIB7MW6HawzLgiUQIgSIyPmJXLe3yD54SeMOWUqg3NF9LWfsjMNkEdbKppdqwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDShE%2Bdf9J3iIH23bCrcAw7MzQsV3XBA4NyR8U3BDPRIUp8Uac%2F9wuF1uDCaJ1vh1ckVOkAp0axRc6qJwE6ZBJV8s4h7QEsf2j4vdRHbpOBF3BTPvGRlSPYmPjL%2F2WVovpsDWGJy9NAc3ZZ7yJIgn%2FbuFZJi3UNI2hp3qVWyChlIF7IdJGX7f%2BPuJA%2F6OBnGQDFHxHTUzEJLT0SVpvy3miQUMgUUVZA%2FCcQ2T2iIGyvg%2BvKWd7wfbjcKscSyy0BOM%2FtR%2BB4PeQrc1iqY1S1vYtffD%2FsHKG8E21D45863fD%2Bs8H2s05uIEfADGlQP4WDjLsoXqWDIAqjX4T2Z5BzM4WyKInCngljl%2B%2F26Z2nt8oa%2FBL8dxGK9VV%2F83c0VZQdzQ%2FMOhQsEAESUyGWPSo%2B3dtMGeDKO4Qokq8a%2BLzUEh%2BctNCnoGG5xYoVQGuEfvUXhHeUfy6K15W2Hnt7xDwJlrHWbvBD7IdFLCgGI%2FtY7DfXQBjoXwQ8nZlm3ez3ukJeFFcOVDD9OXnshIYQYuYktUJ3nCP8A3poheaz6pVAG52veLzDZO5hMy%2Ftd%2FNO3MQ%2FQ29xM0zbMpjC4jZ%2FNYXthf7wOConTaEEcKkuvhsYqvIGN15SC%2FhaRa06aqV8y4N6TGoLGg%2F4M66FbIxf6MMflhMIGOqUB4v15R7TvlsakmvkZCXusb%2FdETMOYHzZ5H6I49F7nTN%2ByQIzn1xRyGcmOWtLizLF2w26KuNKwvVAGMBtdxyz5KILRJrudUOwHC%2FqzKex8aVczx5kBDDei4gC2ImNTFNguE%2Fqjw8LJoRD2xuOiFjwWKwF1aBzQFCuYonL%2BDe3R1ykXzVw8QdcMzP3c3xbR%2B4AYKSXrsGYlMrUNe1jO4BLylg%2FyhUiN&X-Amz-Signature=546d685340140851b6973322d5d8f515c62b6467806f24074ae1918ec68432d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSN26IRM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCMyu5bq4gS%2BU9eQ3P2F6IalOXbeQSIB7MW6HawzLgiUQIgSIyPmJXLe3yD54SeMOWUqg3NF9LWfsjMNkEdbKppdqwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDShE%2Bdf9J3iIH23bCrcAw7MzQsV3XBA4NyR8U3BDPRIUp8Uac%2F9wuF1uDCaJ1vh1ckVOkAp0axRc6qJwE6ZBJV8s4h7QEsf2j4vdRHbpOBF3BTPvGRlSPYmPjL%2F2WVovpsDWGJy9NAc3ZZ7yJIgn%2FbuFZJi3UNI2hp3qVWyChlIF7IdJGX7f%2BPuJA%2F6OBnGQDFHxHTUzEJLT0SVpvy3miQUMgUUVZA%2FCcQ2T2iIGyvg%2BvKWd7wfbjcKscSyy0BOM%2FtR%2BB4PeQrc1iqY1S1vYtffD%2FsHKG8E21D45863fD%2Bs8H2s05uIEfADGlQP4WDjLsoXqWDIAqjX4T2Z5BzM4WyKInCngljl%2B%2F26Z2nt8oa%2FBL8dxGK9VV%2F83c0VZQdzQ%2FMOhQsEAESUyGWPSo%2B3dtMGeDKO4Qokq8a%2BLzUEh%2BctNCnoGG5xYoVQGuEfvUXhHeUfy6K15W2Hnt7xDwJlrHWbvBD7IdFLCgGI%2FtY7DfXQBjoXwQ8nZlm3ez3ukJeFFcOVDD9OXnshIYQYuYktUJ3nCP8A3poheaz6pVAG52veLzDZO5hMy%2Ftd%2FNO3MQ%2FQ29xM0zbMpjC4jZ%2FNYXthf7wOConTaEEcKkuvhsYqvIGN15SC%2FhaRa06aqV8y4N6TGoLGg%2F4M66FbIxf6MMflhMIGOqUB4v15R7TvlsakmvkZCXusb%2FdETMOYHzZ5H6I49F7nTN%2ByQIzn1xRyGcmOWtLizLF2w26KuNKwvVAGMBtdxyz5KILRJrudUOwHC%2FqzKex8aVczx5kBDDei4gC2ImNTFNguE%2Fqjw8LJoRD2xuOiFjwWKwF1aBzQFCuYonL%2BDe3R1ykXzVw8QdcMzP3c3xbR%2B4AYKSXrsGYlMrUNe1jO4BLylg%2FyhUiN&X-Amz-Signature=5a9d4c25392c40e3fed216d9c8ec269e55c6130d313fedb39aeeefa2efa34499&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
