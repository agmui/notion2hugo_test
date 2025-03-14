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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOJ6CXF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvKgbE%2FNkgH0h3NCuaukI9RnxLJaTyaNWvLhcVeCA7AAIhAJcQ2YikKGiFjetQ17TTHXkaW4EkjN8gB4uvo%2B31IvtCKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzchXiRwmdpO4kPv9gq3ANs298RAmdMRQhd1sZhXxDkV60US5ai%2FrcdFKSauppde7xDssvN%2FrFe0ltBivugDwU%2FoBu5VNnMZxk%2FTi%2BWVUaUwIWzjgO89T2fN0ZEPzXAF%2FFHBOC7N5y6P3YuAE%2FUqQjUj098lVO%2B5zQP8bODk%2BfyjgTupahYq9Lsrya4U%2BemajD6RYcPI2LuZAJ91QvFWfaT%2BcIsyUPm0XZBMSSWXQlZqz3UWXAQsSFoomDUZht4NQdpSUR4Czr9xKl62vgu9IpUV%2FIDXOcEkchNV1zYt5pY3YgXDbsPYvyv3u2qM5GPqmwGY2FpOC6NSaPuXNzO879kTLA2DniVtkQH5YNsGMzmKwIgECNaJ77BNI0hu4u3%2B0E%2BXM7NF6DoR718GGkvPhGv6b9xgMvT5uU0evXrnsbCP4qY8muKGzIMA4rJHgLO%2Fd4urX%2BtwJINYMtyIsKADRJj30bzZw%2BVNXEnh0n%2FTeS7O0rd30p5B5r%2BZ1kErroltiMaepVMzOH3dk9Y0z0f7KeQlSMU0m5s3NPWfVJ02eoLZs8%2FEvOeKwUzgKQvR5%2BSmHiA6bZx4ej0QrZVptSluVgowGzZ2DEBa9xQt7kriZD67ZiILH0E48lwMxT3uPeokTkMpx58MimrmJPK4jCt7s2%2BBjqkAYJNs13g6CUG0ztGMCc0SuxxrNgo%2FhnANfhPSDheUcKwRZ0yuDYsGt2YxujBtILVzmKntan8i61YyomGzSHwRg0EFDEaNTKjpROKffckKmXXmObtvr9Tmmtu3V3xaGbuegbh0gMFVA8KZ8UqvGmRYIk06SztQ9fgRFW0ZMuJJVHn%2FC%2F2IzphCMsd2Qpv0ejnvpxosvFjRtROuHznHmzwdn%2BI2D%2F9&X-Amz-Signature=e9987511b67095ab5ab72ceffb043f3a9fa9baba39d42d1bd954fcffe248d593&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOJ6CXF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvKgbE%2FNkgH0h3NCuaukI9RnxLJaTyaNWvLhcVeCA7AAIhAJcQ2YikKGiFjetQ17TTHXkaW4EkjN8gB4uvo%2B31IvtCKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzchXiRwmdpO4kPv9gq3ANs298RAmdMRQhd1sZhXxDkV60US5ai%2FrcdFKSauppde7xDssvN%2FrFe0ltBivugDwU%2FoBu5VNnMZxk%2FTi%2BWVUaUwIWzjgO89T2fN0ZEPzXAF%2FFHBOC7N5y6P3YuAE%2FUqQjUj098lVO%2B5zQP8bODk%2BfyjgTupahYq9Lsrya4U%2BemajD6RYcPI2LuZAJ91QvFWfaT%2BcIsyUPm0XZBMSSWXQlZqz3UWXAQsSFoomDUZht4NQdpSUR4Czr9xKl62vgu9IpUV%2FIDXOcEkchNV1zYt5pY3YgXDbsPYvyv3u2qM5GPqmwGY2FpOC6NSaPuXNzO879kTLA2DniVtkQH5YNsGMzmKwIgECNaJ77BNI0hu4u3%2B0E%2BXM7NF6DoR718GGkvPhGv6b9xgMvT5uU0evXrnsbCP4qY8muKGzIMA4rJHgLO%2Fd4urX%2BtwJINYMtyIsKADRJj30bzZw%2BVNXEnh0n%2FTeS7O0rd30p5B5r%2BZ1kErroltiMaepVMzOH3dk9Y0z0f7KeQlSMU0m5s3NPWfVJ02eoLZs8%2FEvOeKwUzgKQvR5%2BSmHiA6bZx4ej0QrZVptSluVgowGzZ2DEBa9xQt7kriZD67ZiILH0E48lwMxT3uPeokTkMpx58MimrmJPK4jCt7s2%2BBjqkAYJNs13g6CUG0ztGMCc0SuxxrNgo%2FhnANfhPSDheUcKwRZ0yuDYsGt2YxujBtILVzmKntan8i61YyomGzSHwRg0EFDEaNTKjpROKffckKmXXmObtvr9Tmmtu3V3xaGbuegbh0gMFVA8KZ8UqvGmRYIk06SztQ9fgRFW0ZMuJJVHn%2FC%2F2IzphCMsd2Qpv0ejnvpxosvFjRtROuHznHmzwdn%2BI2D%2F9&X-Amz-Signature=cf9258b9b2ad2f5ba4764264d7c0e91ad5795d9cad6861f6150883200970f4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
