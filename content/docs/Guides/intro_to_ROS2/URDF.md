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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5IZDMW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHdzEofUoD7bPhUzwKcy7s13UxcG%2BdQAVaf8RQUSdrVYAiAq3FXtCJ5sLx8RzVUFBWHSE9ZyoylcDALLMVrgqAsnmCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2jD12zaLnqeoBel%2BKtwDWscxzTR%2Fihrw9%2B4SOz5DYD9adRW2B0s%2F%2FhmrX5dVCnNFSUv2j2OQTM99uVeQdqUlWe1C7Tv4PMQEiGUvJR9zO%2FwSW2ltQnz0ZW7nKc7CxzxWJ7URk3dSoheGbKeQoa6Jvkt0X0R8LNbK8y6FN1162N8JxjX7WzOjkQZioUU%2Fek02jUUJvm9eHz%2B6jaR4IQtBuCFqtug9HJTm9HO3OTscrI%2B3IKEANd%2FdZ9NJcaXD5XKOUxQSwYQ0yno7uMUjPtP14BNnTKj3j8zkN0IMx%2Fh8aabQIpI3yDyX9nMHjbIXkXjvBwMaywsuBeR8CCK7A7m2BiIE3uMRX5342ZQdzoW5e2yK%2Bw8YUKWgzBQxuZCx0PDL3tfHbD4%2Bvuv292noCfOHqipD4btXqjb9uG9JGWuofA5OYfbHZTE3DeCxgaCYldDRiI%2BThQlpZlTL9kJaNY%2FTQkPCDfShk7zTq9gCAmA4H4a6ovpFTIlef5Pn0UE4K7ADjO4aeF8JrVHtO63h5x3UgH0eylUKgYc0blz47Pu1LZmsyw5Cy%2BGJ47NWc1XPuLUv7YDinSy3oLITgwPy3ohO3uAdgxSgt1jTpS4dQhS926JUUeAyHcgc3oK4uz%2FrYCV6LQDPH%2FPhco0lEw4wu%2BK8wQY6pgHwuwcFEHqLopIBXqBBhd3jhqGz8DvbAiMf%2FzTiHQZTU9HW7WuEAqQuOtWXfMfebmzILc3OnSu0f7nI0py3T8ii%2BPXiY%2FrTsa8k1Gr8mp4jQiSzvnCGvlEpMETKOTrZ8%2BC6rZ8mGfc2fOZZxraOVV5pqkXyMhfNtU3%2BolxSw%2Fh0euujzW3SLh2hcULKbIt8QJYkhtuj7pstAa20EhxoirDpldYaVqh1&X-Amz-Signature=31b190750c0a1184d2b02e21c511e8d68e984aa272464e2428c7f6b41c3121f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5IZDMW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHdzEofUoD7bPhUzwKcy7s13UxcG%2BdQAVaf8RQUSdrVYAiAq3FXtCJ5sLx8RzVUFBWHSE9ZyoylcDALLMVrgqAsnmCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2jD12zaLnqeoBel%2BKtwDWscxzTR%2Fihrw9%2B4SOz5DYD9adRW2B0s%2F%2FhmrX5dVCnNFSUv2j2OQTM99uVeQdqUlWe1C7Tv4PMQEiGUvJR9zO%2FwSW2ltQnz0ZW7nKc7CxzxWJ7URk3dSoheGbKeQoa6Jvkt0X0R8LNbK8y6FN1162N8JxjX7WzOjkQZioUU%2Fek02jUUJvm9eHz%2B6jaR4IQtBuCFqtug9HJTm9HO3OTscrI%2B3IKEANd%2FdZ9NJcaXD5XKOUxQSwYQ0yno7uMUjPtP14BNnTKj3j8zkN0IMx%2Fh8aabQIpI3yDyX9nMHjbIXkXjvBwMaywsuBeR8CCK7A7m2BiIE3uMRX5342ZQdzoW5e2yK%2Bw8YUKWgzBQxuZCx0PDL3tfHbD4%2Bvuv292noCfOHqipD4btXqjb9uG9JGWuofA5OYfbHZTE3DeCxgaCYldDRiI%2BThQlpZlTL9kJaNY%2FTQkPCDfShk7zTq9gCAmA4H4a6ovpFTIlef5Pn0UE4K7ADjO4aeF8JrVHtO63h5x3UgH0eylUKgYc0blz47Pu1LZmsyw5Cy%2BGJ47NWc1XPuLUv7YDinSy3oLITgwPy3ohO3uAdgxSgt1jTpS4dQhS926JUUeAyHcgc3oK4uz%2FrYCV6LQDPH%2FPhco0lEw4wu%2BK8wQY6pgHwuwcFEHqLopIBXqBBhd3jhqGz8DvbAiMf%2FzTiHQZTU9HW7WuEAqQuOtWXfMfebmzILc3OnSu0f7nI0py3T8ii%2BPXiY%2FrTsa8k1Gr8mp4jQiSzvnCGvlEpMETKOTrZ8%2BC6rZ8mGfc2fOZZxraOVV5pqkXyMhfNtU3%2BolxSw%2Fh0euujzW3SLh2hcULKbIt8QJYkhtuj7pstAa20EhxoirDpldYaVqh1&X-Amz-Signature=9596f557d21e95bc4d30e2d5e4ec40b95fe16b5538ef6e933832c209060ef173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
