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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTERZYL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8CfnWT6TyQi2DCgNY%2FUity0hP%2BzDCwmvmNGCQmn2FDAiEAj04LFqkXHopUi2168%2B5JS8MkKZTFGx6x8tqFDVa9PC8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsMSeC4eJbvIx8OCrcA3ZVsTWX5fYRwlTa0h3bm%2Fb7yQoQDTjT2iX0ZXw6uA9WMVa8VYeQIEHmhT96vT2%2BrKdO7rRPF%2BB9ONUGSI6F04IK36Hlb2RgW50Xy7Am7XsdMzo3D%2BRl4ZLFU0CbFPjAAePGena2HvspNemAs5%2FuQJ%2FqS%2FypWgXa2jYyxn3vVOehAgqkfKCETAjA53WDrRjZfv8TwSLy3w19sbwdZrl%2BIm1b3FvHG%2FM1goAMIYSKmC9XsE4D5mieSHPPmLK80ZO1ll1rSKXobmkni3clmIs6G4k%2FvdYBtYGlI9LVuQmhYbrBVfjIOes0iaJSHjE%2FwVUtkdvnLcjPfSTF74VD9sIBf5%2FwvTnxxTBLxvkLcwT7BVV9VTKDSZeJLUmuh6egKKd8GvpOlEarJzhMjareUax08L7f3XTA1vrzix%2BuxCx7NdQpU1TbXlPpZAjFLTp%2BhBBLXpQqeVdM7XYTxnIGAIZoNA3490SaoGaTSFermz0X0lMP0mIKaC9JfLBUxRT20knbVWf3%2BroKGFYXkUMpv6dZftcuEWJpBTYiK7n3t0OgRFa74Yy%2FtXizu1y6kRncELVXQITIJnb%2FM7gkExdCv8YxkfMjvJxCLJ0RYTyNSmjJBBhhgnzaNL4LyozaEFrqMPr9kL4GOqUB4px620IOU%2BvtccVvA0KJJ%2FFbYi%2Fbv9Jr5wj0iHmvCuLTkptAcOWRY%2Br7Um35WM1iekCEDMFNNwyZVyrZJlqCIcOjFCOw4zsXe20j%2BszlT%2BHdcO9%2BHwCvHBJOlQ3xEabNwRhOXj3fJrpdL530AcW4iQb5It3Nzp%2FN9OxdLTTom66ljmmUIKyEwnZuI0VrvualbDLCOYX3nj2kzhiuNceMcViNsbG7&X-Amz-Signature=2a8ff9680f42fc439ed1a707c108cb7ebf6d9b6fce87cfe650aa54d6601f7f53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTERZYL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8CfnWT6TyQi2DCgNY%2FUity0hP%2BzDCwmvmNGCQmn2FDAiEAj04LFqkXHopUi2168%2B5JS8MkKZTFGx6x8tqFDVa9PC8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsMSeC4eJbvIx8OCrcA3ZVsTWX5fYRwlTa0h3bm%2Fb7yQoQDTjT2iX0ZXw6uA9WMVa8VYeQIEHmhT96vT2%2BrKdO7rRPF%2BB9ONUGSI6F04IK36Hlb2RgW50Xy7Am7XsdMzo3D%2BRl4ZLFU0CbFPjAAePGena2HvspNemAs5%2FuQJ%2FqS%2FypWgXa2jYyxn3vVOehAgqkfKCETAjA53WDrRjZfv8TwSLy3w19sbwdZrl%2BIm1b3FvHG%2FM1goAMIYSKmC9XsE4D5mieSHPPmLK80ZO1ll1rSKXobmkni3clmIs6G4k%2FvdYBtYGlI9LVuQmhYbrBVfjIOes0iaJSHjE%2FwVUtkdvnLcjPfSTF74VD9sIBf5%2FwvTnxxTBLxvkLcwT7BVV9VTKDSZeJLUmuh6egKKd8GvpOlEarJzhMjareUax08L7f3XTA1vrzix%2BuxCx7NdQpU1TbXlPpZAjFLTp%2BhBBLXpQqeVdM7XYTxnIGAIZoNA3490SaoGaTSFermz0X0lMP0mIKaC9JfLBUxRT20knbVWf3%2BroKGFYXkUMpv6dZftcuEWJpBTYiK7n3t0OgRFa74Yy%2FtXizu1y6kRncELVXQITIJnb%2FM7gkExdCv8YxkfMjvJxCLJ0RYTyNSmjJBBhhgnzaNL4LyozaEFrqMPr9kL4GOqUB4px620IOU%2BvtccVvA0KJJ%2FFbYi%2Fbv9Jr5wj0iHmvCuLTkptAcOWRY%2Br7Um35WM1iekCEDMFNNwyZVyrZJlqCIcOjFCOw4zsXe20j%2BszlT%2BHdcO9%2BHwCvHBJOlQ3xEabNwRhOXj3fJrpdL530AcW4iQb5It3Nzp%2FN9OxdLTTom66ljmmUIKyEwnZuI0VrvualbDLCOYX3nj2kzhiuNceMcViNsbG7&X-Amz-Signature=bdb92e27c68fca8b6db7d3b2c76e410947982ddc483ce3d55d3c262d7a64f0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
