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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODMRDYF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhz2R1x%2FrHUw%2B%2BpoxAxXBXvjr3naS13L23Drs9GjZoyAiEAtMNWaejfJFZ5J1AORTdyk7ohKhFuCopAmv9Z6ZpKgo8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPAz0k7cuTzgFgC7SrcA9W7D9Vjo8mFyircbhWoPucLZNsEuypbh2jd3%2BFZ0m1pYJxgfFrmQGiXj%2Fcs7%2BqpU0vRmHx7phoRydIKlJzXKLfGkNcVp%2BP%2BmwqOfapYF7DiK6p0iizntcV0kn0%2FTSK6rVjWKzCUe4PoMNiq%2Brc70xmG7QPeGI0XdtnT%2F%2B93u7x1OS2AoymSEb7tB9X%2F%2BmeKu6oBrUvNIVz3VGZhRGdFGoI1WR9nBcjy7usjjH3HY8gymN%2FWWjZm0ehVbjZvSZ1g53Jz7feDK7%2FbY2VhXqboifhQZTBfjjP9BZOEZiJmkmimaYTBxvTtx%2F5zx%2BR%2FRVxV2EDBZu3m9KxjUTJRMeqLLiWs6sjs8bpdWBSKvayxubEBs5tkspIWuaw2PhoFslGrKoVBFaBMq9%2BFWRfiV2YjcLlTKXfnyu7DDnULkBs7qTbwaGUvBiB94t9d24ex46HudcV0luml7WPqawlf8Zq7tmYPusZcJQ1HAN%2B3dz8THvNKpCORFZa0dFxG81dYk9SoCIm1Qe5m5xc6BCNaWiTwTLPumZw678JArrVu1xO1A6K%2FeKEf%2BeYB9LXxm7GUwS2tScAuXIKz9K6J0goZr4ZKHm0N%2BXNPwS2rXNOcbETyrCmyk4Na%2BmvDd9yqxk1QMPGAzMMGOqUBHumh5BQz1xn0a%2BUgguChPJ5V%2BtfB7wjHjX0lgwjsXx6ZnIKh0yMq%2Bu23xhy1tWIs5Kt6Pb1MaEV5WtOsdYWy%2F%2BNFM26rL0M7pB34egia6ZUQlcu1R13r0aLdY3EOXx6QfYoj1qzcVc2vxDDJpbcUJtVSW%2Fu9kGI3dsuwQUXSp%2Bd9mFCAM%2FTtIvyhDQLFWd1SBwF1AgF73%2BEsSkF%2FJmGEw0PTKMEP&X-Amz-Signature=3413d78202c1afce93cf571c1e49093776d47b57a0c7a14b5a0bd6bf756c987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODMRDYF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhz2R1x%2FrHUw%2B%2BpoxAxXBXvjr3naS13L23Drs9GjZoyAiEAtMNWaejfJFZ5J1AORTdyk7ohKhFuCopAmv9Z6ZpKgo8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPAz0k7cuTzgFgC7SrcA9W7D9Vjo8mFyircbhWoPucLZNsEuypbh2jd3%2BFZ0m1pYJxgfFrmQGiXj%2Fcs7%2BqpU0vRmHx7phoRydIKlJzXKLfGkNcVp%2BP%2BmwqOfapYF7DiK6p0iizntcV0kn0%2FTSK6rVjWKzCUe4PoMNiq%2Brc70xmG7QPeGI0XdtnT%2F%2B93u7x1OS2AoymSEb7tB9X%2F%2BmeKu6oBrUvNIVz3VGZhRGdFGoI1WR9nBcjy7usjjH3HY8gymN%2FWWjZm0ehVbjZvSZ1g53Jz7feDK7%2FbY2VhXqboifhQZTBfjjP9BZOEZiJmkmimaYTBxvTtx%2F5zx%2BR%2FRVxV2EDBZu3m9KxjUTJRMeqLLiWs6sjs8bpdWBSKvayxubEBs5tkspIWuaw2PhoFslGrKoVBFaBMq9%2BFWRfiV2YjcLlTKXfnyu7DDnULkBs7qTbwaGUvBiB94t9d24ex46HudcV0luml7WPqawlf8Zq7tmYPusZcJQ1HAN%2B3dz8THvNKpCORFZa0dFxG81dYk9SoCIm1Qe5m5xc6BCNaWiTwTLPumZw678JArrVu1xO1A6K%2FeKEf%2BeYB9LXxm7GUwS2tScAuXIKz9K6J0goZr4ZKHm0N%2BXNPwS2rXNOcbETyrCmyk4Na%2BmvDd9yqxk1QMPGAzMMGOqUBHumh5BQz1xn0a%2BUgguChPJ5V%2BtfB7wjHjX0lgwjsXx6ZnIKh0yMq%2Bu23xhy1tWIs5Kt6Pb1MaEV5WtOsdYWy%2F%2BNFM26rL0M7pB34egia6ZUQlcu1R13r0aLdY3EOXx6QfYoj1qzcVc2vxDDJpbcUJtVSW%2Fu9kGI3dsuwQUXSp%2Bd9mFCAM%2FTtIvyhDQLFWd1SBwF1AgF73%2BEsSkF%2FJmGEw0PTKMEP&X-Amz-Signature=cfc5e9f271386e4bb1cee7b173539dcfc219afbcaf57b3ba021144722eeebdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
