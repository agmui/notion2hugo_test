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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVD6RBX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIG7THuCpX1HfewsX4eDGMdXeOOBTc%2FEgQYHk9tN0cXjAAiEAjYu8SLvX%2BfUmhASVS2hHZVmfjO9ZXNhyXWJUT7AKmVEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMow9cPIMN0ZZlJWVyrcA8LMjVIGWJ%2BQb0EbziuFYxcXkJZQXdu6dTKOH27Jjs0ke8adkvJ430e%2F668W8uKhoERrP4iEALvzFDUPnkExbkm8BoKsrv%2BSyQj0Q5xIl6ZfURqAigExScUEI%2BgeGXMiNowlIz%2FHL6xa4psrH4NO8TFHsLCIVeP7LBs8EudLlbB%2BPsrV8rw0XouGDnIG0gdd6wa5p3FzENSgObQWAq9w3KMTtu4s13vmgu5%2FIV9vqwNiCQvUyyQoBB067DTN1J0CwcvwQQnNw%2B%2BboFdYTupJ3Sdc6C4SNOwf6xz%2B862ok04KvMN7znjRiugkE36IZi3ptXwgbucAo%2B01JPuUeSTauUOwUd2Yp8JQadl6OgyhyceR6KonalVCWZALwgv6VXLAHAFSrfmNu3pjTVeKWV%2F87UjSNpOKIRwFG1iVIIyWgjRT0KTK1TZaCmNcd89GzTUF23vMMcKg9Zqcfb4GoALmr79X5vvqdAgQDw5o0jxxk7YcGKCtWlSTpPZQv7DeW2QmDG08oKbyjC0P0Mh4n3R4h6GnP6ynOel2po66X6BpX7WTck8rA1IalqSQlF8JvFQR6mA7HYcLGLw1ZydFO9tc%2B5vFpCZ8vCwJxtjYfDhODCv1l2huyaDs1Xq4N%2FhgMN6C4cAGOqUB%2B3N%2B2emcdXjcwYtnr6fowZfdZ%2FEnxPoEQDKE34JS2q5i2w8qqlxQHDXebEuf7D8WleZvxLishebtckVhv8s4zrBKoEFobkeUOkTx2YHls94Dq5VOqVdbS5ZvoORPwEU%2FlKvIeGFz6JYyMNfe4pV0XTqDxmJe2DQ%2B%2FtfRUHtos%2B4o%2F1XdhhVgGxgRZKXUntACHpMgCsAWOR9a3C5NT%2B%2BfYPpPZmc2&X-Amz-Signature=df60526631d61edd82cd0a10f738a13f91ebe1784023fa08eaec32fdafaa1acf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVD6RBX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIG7THuCpX1HfewsX4eDGMdXeOOBTc%2FEgQYHk9tN0cXjAAiEAjYu8SLvX%2BfUmhASVS2hHZVmfjO9ZXNhyXWJUT7AKmVEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMow9cPIMN0ZZlJWVyrcA8LMjVIGWJ%2BQb0EbziuFYxcXkJZQXdu6dTKOH27Jjs0ke8adkvJ430e%2F668W8uKhoERrP4iEALvzFDUPnkExbkm8BoKsrv%2BSyQj0Q5xIl6ZfURqAigExScUEI%2BgeGXMiNowlIz%2FHL6xa4psrH4NO8TFHsLCIVeP7LBs8EudLlbB%2BPsrV8rw0XouGDnIG0gdd6wa5p3FzENSgObQWAq9w3KMTtu4s13vmgu5%2FIV9vqwNiCQvUyyQoBB067DTN1J0CwcvwQQnNw%2B%2BboFdYTupJ3Sdc6C4SNOwf6xz%2B862ok04KvMN7znjRiugkE36IZi3ptXwgbucAo%2B01JPuUeSTauUOwUd2Yp8JQadl6OgyhyceR6KonalVCWZALwgv6VXLAHAFSrfmNu3pjTVeKWV%2F87UjSNpOKIRwFG1iVIIyWgjRT0KTK1TZaCmNcd89GzTUF23vMMcKg9Zqcfb4GoALmr79X5vvqdAgQDw5o0jxxk7YcGKCtWlSTpPZQv7DeW2QmDG08oKbyjC0P0Mh4n3R4h6GnP6ynOel2po66X6BpX7WTck8rA1IalqSQlF8JvFQR6mA7HYcLGLw1ZydFO9tc%2B5vFpCZ8vCwJxtjYfDhODCv1l2huyaDs1Xq4N%2FhgMN6C4cAGOqUB%2B3N%2B2emcdXjcwYtnr6fowZfdZ%2FEnxPoEQDKE34JS2q5i2w8qqlxQHDXebEuf7D8WleZvxLishebtckVhv8s4zrBKoEFobkeUOkTx2YHls94Dq5VOqVdbS5ZvoORPwEU%2FlKvIeGFz6JYyMNfe4pV0XTqDxmJe2DQ%2B%2FtfRUHtos%2B4o%2F1XdhhVgGxgRZKXUntACHpMgCsAWOR9a3C5NT%2B%2BfYPpPZmc2&X-Amz-Signature=70b2670bcbb66787537f748ed03b5e8df282bd65e5d53330bbc4496835f08d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
