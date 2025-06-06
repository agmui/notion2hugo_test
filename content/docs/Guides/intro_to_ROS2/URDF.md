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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO42LP6R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCnbLCxTtTp5yR%2FDG7%2BtC9mYrEJqU09lDHOGAeTtX%2FdRQIhAL%2FLzcRrP%2B%2B3qOF3C49ldZhEHYbDFcgMJuyrM%2Fz2mv0BKv8DCFYQABoMNjM3NDIzMTgzODA1IgwnY1FDas%2BdflEZ5E8q3AOlKhXjOYxVQnJ7YwqTDAUfpEyBnVZT1yAjZ8FwShZw%2BkTFitQzdhhKkZt%2BwSagd%2FKvLpPk5Zc2MdN%2FUz8EPwIEVSthbk3HB80pFrl1JFqffluuMWf6QRqsAnha4tFktK219ZvmtMbBQ%2FtAYX5gLUclOpyhIZMVNjbQlWJYwoc9msnXGdH2kR44jey5BM98K4YTSnxvtiB44R4V9bs4VWvqzgZIrVm9l10DVrIchSz%2B8ASv%2BOzGsxAZYertDu2Xvh7gOoACT5FypTaPDf30mF0Gn9ghwAgm2ThgrPSjJuA5SG4RgECg6Pn7%2BgrbpXGCnvwyoZaBMDDFFBaAtHcOj8rkonfElH7fJ1naqBO6Ce1bBxiON9EDNS10iT4MJHVdSVnskY9RYCEkE7RlACEZ27NkXhBZlbPERwyhTUGQXdnYkY6aXfxOB9K7UX7tBY602MtdthVMVkTmCqVMNvji1dZrCOoThHdH2ikxG3uX%2FVvXq%2Bq9xqx0SNjEn%2BaGHwm%2F3ukNVCOJQtuH%2B%2BRdqQ3YAEXMhcHkEy4Zql6J%2B3%2Fs%2F2ku5rQwuVT%2B%2Fxev2FbO7sFFimrLUclyVJRQVvCSIC7Vj376n4YmJC768AFA4vkrdKCXauz9at8xgYCdtznNgzDk8onCBjqkAaFpbBlVoba3ajA9O%2BG35nQsna8JCQXhwW4bM9ojX24yoRaDo5rE6%2FMdu5LWfDdCzO7wHKmaturvhBVZRvkmDLhzZuaMgun7gOnfDavdFQlkmZZC2C1hd8TQ2n6vsExhC5XpJqZyZzRa86XHSNKquxI%2By2kK90We3dsfFyCYEtTPZBAtnvE0PQJB7Tr8DYFzHeFolcWyQyGHGNpi6%2FvYoCCWrwcr&X-Amz-Signature=a3c27a5ca9624a55bc04c0e7023ca4f2fc0f37a584feff3e4e240a6c74d99101&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO42LP6R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCnbLCxTtTp5yR%2FDG7%2BtC9mYrEJqU09lDHOGAeTtX%2FdRQIhAL%2FLzcRrP%2B%2B3qOF3C49ldZhEHYbDFcgMJuyrM%2Fz2mv0BKv8DCFYQABoMNjM3NDIzMTgzODA1IgwnY1FDas%2BdflEZ5E8q3AOlKhXjOYxVQnJ7YwqTDAUfpEyBnVZT1yAjZ8FwShZw%2BkTFitQzdhhKkZt%2BwSagd%2FKvLpPk5Zc2MdN%2FUz8EPwIEVSthbk3HB80pFrl1JFqffluuMWf6QRqsAnha4tFktK219ZvmtMbBQ%2FtAYX5gLUclOpyhIZMVNjbQlWJYwoc9msnXGdH2kR44jey5BM98K4YTSnxvtiB44R4V9bs4VWvqzgZIrVm9l10DVrIchSz%2B8ASv%2BOzGsxAZYertDu2Xvh7gOoACT5FypTaPDf30mF0Gn9ghwAgm2ThgrPSjJuA5SG4RgECg6Pn7%2BgrbpXGCnvwyoZaBMDDFFBaAtHcOj8rkonfElH7fJ1naqBO6Ce1bBxiON9EDNS10iT4MJHVdSVnskY9RYCEkE7RlACEZ27NkXhBZlbPERwyhTUGQXdnYkY6aXfxOB9K7UX7tBY602MtdthVMVkTmCqVMNvji1dZrCOoThHdH2ikxG3uX%2FVvXq%2Bq9xqx0SNjEn%2BaGHwm%2F3ukNVCOJQtuH%2B%2BRdqQ3YAEXMhcHkEy4Zql6J%2B3%2Fs%2F2ku5rQwuVT%2B%2Fxev2FbO7sFFimrLUclyVJRQVvCSIC7Vj376n4YmJC768AFA4vkrdKCXauz9at8xgYCdtznNgzDk8onCBjqkAaFpbBlVoba3ajA9O%2BG35nQsna8JCQXhwW4bM9ojX24yoRaDo5rE6%2FMdu5LWfDdCzO7wHKmaturvhBVZRvkmDLhzZuaMgun7gOnfDavdFQlkmZZC2C1hd8TQ2n6vsExhC5XpJqZyZzRa86XHSNKquxI%2By2kK90We3dsfFyCYEtTPZBAtnvE0PQJB7Tr8DYFzHeFolcWyQyGHGNpi6%2FvYoCCWrwcr&X-Amz-Signature=fb2f88660c0d53883f254b87492a5b372811b88fca962d540581832bbb15232d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
