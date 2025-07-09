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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMKBEMD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuN49ZUiyH9HN13yBEV4tQ8%2FKVDC6BRnZmbfrFGc2DOAiEAz%2FTJExBnfNVk8FT5B3glfRCmj%2Ft4QtJ4FSX9kKYegDAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ8i1wODqDvgWF5nircA5qfHYXZvXADF7jOgfI00kxUmRkecFMVG55%2BdFdGJThUPiGWEbSyFtIuIAusfhY%2BdzccX74tnc%2B%2Fs1Aplce1Bbgj7UIrbUTgn3PIOrRd6%2BYKANzPN9DYMX6u0tt9mf76obVxD6MFYQac8gYYm4ReNjvwDkwKKHqWcyH5bwLd1CVwu%2FEdZbYzp3Dk8VLRHZ7DJyytsd01tiZBJetrzN%2BhXaJhsVGaG58aTmpQYSImphg2F5B0qPj6E%2BlBAmx%2B%2FVPs3xTSVvslEV7duk5wEpn%2BTw6VOgABubFoo1iDjnF5uKwuudlWK%2FZ6N%2F%2BNeYR0iACMjWHuULBpL4tMUYYuSD3cmr0E41fR83QMbXbIzkR9ZBuF9%2BITQ29mdy%2BF3v5tCubRfr%2FenE0SUmAuPzFB5uSPkRn7AwptezJcyh0KxymF6RyQgJX8U%2BrQO9SQfZInJyRHlD1UZsjZqI32gHRHyLdEebqa%2F2MipccjQNik8BH87AxF0KokZ%2FLBPTeKQL8YRQGimnk%2BHXI0fFhq%2FkPZyWe52KVZnFXStsygsOCkCkIhSD89phzGzEDUxecAhpr4UeviEuExat44sN3gNap1uPsV7lCCX371LkVnoXxTTkrzqC0%2BdMnkGf7OHZbPwTHsMLXLt8MGOqUB9TqQ8KQVY2C0Yl4lOnJFiaTAhlzUFDJzGtBzgncnEk%2BBhR%2BUmEhdZUNg5qM5f0PrqR4dXY29XSi31VvxmrOD4uFiZVEp2kRAfBy8DgplOrBgTF3DvK6H4ps9f0OmzPawoWIy0bP%2BWhplRFJ28glHjSy49QULuPFyPbWEPOfDp51mi06C8uOZvaPfXL8k7uLJ5%2B5CE5jKr1XS%2FyPBIcK8XFYHoaVO&X-Amz-Signature=e5db8e5edcaed8279d800f41fb70841ce671193581bc5915bfbf21b796435d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMKBEMD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuN49ZUiyH9HN13yBEV4tQ8%2FKVDC6BRnZmbfrFGc2DOAiEAz%2FTJExBnfNVk8FT5B3glfRCmj%2Ft4QtJ4FSX9kKYegDAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ8i1wODqDvgWF5nircA5qfHYXZvXADF7jOgfI00kxUmRkecFMVG55%2BdFdGJThUPiGWEbSyFtIuIAusfhY%2BdzccX74tnc%2B%2Fs1Aplce1Bbgj7UIrbUTgn3PIOrRd6%2BYKANzPN9DYMX6u0tt9mf76obVxD6MFYQac8gYYm4ReNjvwDkwKKHqWcyH5bwLd1CVwu%2FEdZbYzp3Dk8VLRHZ7DJyytsd01tiZBJetrzN%2BhXaJhsVGaG58aTmpQYSImphg2F5B0qPj6E%2BlBAmx%2B%2FVPs3xTSVvslEV7duk5wEpn%2BTw6VOgABubFoo1iDjnF5uKwuudlWK%2FZ6N%2F%2BNeYR0iACMjWHuULBpL4tMUYYuSD3cmr0E41fR83QMbXbIzkR9ZBuF9%2BITQ29mdy%2BF3v5tCubRfr%2FenE0SUmAuPzFB5uSPkRn7AwptezJcyh0KxymF6RyQgJX8U%2BrQO9SQfZInJyRHlD1UZsjZqI32gHRHyLdEebqa%2F2MipccjQNik8BH87AxF0KokZ%2FLBPTeKQL8YRQGimnk%2BHXI0fFhq%2FkPZyWe52KVZnFXStsygsOCkCkIhSD89phzGzEDUxecAhpr4UeviEuExat44sN3gNap1uPsV7lCCX371LkVnoXxTTkrzqC0%2BdMnkGf7OHZbPwTHsMLXLt8MGOqUB9TqQ8KQVY2C0Yl4lOnJFiaTAhlzUFDJzGtBzgncnEk%2BBhR%2BUmEhdZUNg5qM5f0PrqR4dXY29XSi31VvxmrOD4uFiZVEp2kRAfBy8DgplOrBgTF3DvK6H4ps9f0OmzPawoWIy0bP%2BWhplRFJ28glHjSy49QULuPFyPbWEPOfDp51mi06C8uOZvaPfXL8k7uLJ5%2B5CE5jKr1XS%2FyPBIcK8XFYHoaVO&X-Amz-Signature=5d2e65035ebf7b90363e5c6563ce1967d5f4644caca4fbabfef70b952f84cfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
