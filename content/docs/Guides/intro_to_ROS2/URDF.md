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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2OBSWV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAQnsw4lYpw6HRTMJA8vGturioOlwqR3njKu7F6%2BMcAiEAk6Ii7RFuDKCLzni%2FGHVy%2FI4N2yWgGxzoyAR7fpXxBTsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJq6ds%2FS2cqXfgyP8yrcA9CwSqEZ%2FhN7c2H4HGWeMd%2FaRd5MrtgwHLp84%2BnHYrGhlHfsQweZtGw6hoN5PmfUCShsOKMB9kJC6XE1rUaNOv4FH3ng1cWW6%2FM5QnLkaxwf336PSubbOFEBJPh29ym2GCfIb4LDjcwB1pL85mW2TmOWyAi8om1hahpO3mSlLS8CY3ML%2BBMjcBZknQ9iIhsFzU1KcxTAmOaFXXS3BXqxz0Je4d8Ez1Bu74as5IXW0ae03WQ%2FhSGrs%2B%2BCn6Jd1hndW9SUG%2BOG6NfBHDNzLJXwojh4N2EfOhbKOKquLsMZw9fsVhaYKsz6%2F9eJgDpm0HxZyE7rkW4YCUMPQ53j5f34MKpoIrFF27cF8Cyzv9M8D4INg1aAbTHiULTaax3%2ByEkQUwS20mlyaIQma4F4Duy3tdF5P4zpmQt2MvAPJyO4r2flOSty9EqVno00L4umAlm9UZk0FoGAhz2XRdbW69tj1%2FbBf8ZfawlIQHYs%2F%2FaWZrySU1A33bFhcgvS49SlNewL%2BTeaHwAWOafaTbU0e%2BsMi8VHFyYl0L%2BSblkQ%2BftfoomNCfmN6R90XFpCEfZ4ihOu9nrbCWGI65tykWgox6jjvr%2BqZQVegYtzXAwjUUBeR5ATut5Zj2mzeauRP%2BTAMLP%2ByL8GOqUB51DuhqT9dYxGIV7p9ZNHhKG4PcNQ15X4zHuRVzGDSjUzj53XidiuWajzXWUh9sMFI%2BeOZfhDIyAl0eMGXLWK%2BoXXZQy10iUucLZHIZG2htvBbsFyknMqJfpp60upqgdPmLFNagZqD6wkpAeAhCRTkhYNvoE2znfOoumuzPjxRDDuY%2BvtFcPlVafhwWpugxZFTA7xKLy%2BYPfw14rtVjVCGuu5lO%2BS&X-Amz-Signature=02c88b8a6fe22bd74ebe76b31ca2cb3b53982c064c989c3a00b553c87789987b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2OBSWV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAQnsw4lYpw6HRTMJA8vGturioOlwqR3njKu7F6%2BMcAiEAk6Ii7RFuDKCLzni%2FGHVy%2FI4N2yWgGxzoyAR7fpXxBTsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJq6ds%2FS2cqXfgyP8yrcA9CwSqEZ%2FhN7c2H4HGWeMd%2FaRd5MrtgwHLp84%2BnHYrGhlHfsQweZtGw6hoN5PmfUCShsOKMB9kJC6XE1rUaNOv4FH3ng1cWW6%2FM5QnLkaxwf336PSubbOFEBJPh29ym2GCfIb4LDjcwB1pL85mW2TmOWyAi8om1hahpO3mSlLS8CY3ML%2BBMjcBZknQ9iIhsFzU1KcxTAmOaFXXS3BXqxz0Je4d8Ez1Bu74as5IXW0ae03WQ%2FhSGrs%2B%2BCn6Jd1hndW9SUG%2BOG6NfBHDNzLJXwojh4N2EfOhbKOKquLsMZw9fsVhaYKsz6%2F9eJgDpm0HxZyE7rkW4YCUMPQ53j5f34MKpoIrFF27cF8Cyzv9M8D4INg1aAbTHiULTaax3%2ByEkQUwS20mlyaIQma4F4Duy3tdF5P4zpmQt2MvAPJyO4r2flOSty9EqVno00L4umAlm9UZk0FoGAhz2XRdbW69tj1%2FbBf8ZfawlIQHYs%2F%2FaWZrySU1A33bFhcgvS49SlNewL%2BTeaHwAWOafaTbU0e%2BsMi8VHFyYl0L%2BSblkQ%2BftfoomNCfmN6R90XFpCEfZ4ihOu9nrbCWGI65tykWgox6jjvr%2BqZQVegYtzXAwjUUBeR5ATut5Zj2mzeauRP%2BTAMLP%2ByL8GOqUB51DuhqT9dYxGIV7p9ZNHhKG4PcNQ15X4zHuRVzGDSjUzj53XidiuWajzXWUh9sMFI%2BeOZfhDIyAl0eMGXLWK%2BoXXZQy10iUucLZHIZG2htvBbsFyknMqJfpp60upqgdPmLFNagZqD6wkpAeAhCRTkhYNvoE2znfOoumuzPjxRDDuY%2BvtFcPlVafhwWpugxZFTA7xKLy%2BYPfw14rtVjVCGuu5lO%2BS&X-Amz-Signature=b7c1362fe9d47a845c5bf677c05ef12da6713b46a411da5fa27c8c7ec8f4ef40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
