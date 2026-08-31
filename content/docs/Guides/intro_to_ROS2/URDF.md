---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TQAXVF%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrTrZ8ExwvL7WD3DEb0QHdVFrqn9rTPOCxBtN7qyFAiEA8H6zmLFa9aVtWdvzCqElO50zyolW3eAR1OjZbqT1qnQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyCK2HIzRhxVYtpNSrcAxxl8d2rI75JZX221XYy2uyFrb9z67mhAXNt5wZy5R8XVdYb5kXODT3xCdyyfk4sNq7l92PkaaARdr75XvOzX%2B4EDQvRu8TbP%2BS6XgzLZqHyv06kT66b1XO08leEkJlAHKlw1aNKg8DkNTKkNna7mLVMM3%2BIzAhPkmAzswHSTVZ7z0FGqi7PMXYY8xSu169Z6QbbiwrlPmsE7rTeMHH6WWiZB4pI8sUbTLK6HSZaUPinp2RtIFK7Tejr5sjGKp9JVrU%2FKQ%2F8mtc0Gb8Uj8jtyEYWeVSwAj3Br1JFyoLLx0cRB13DmHOSf2VVBRE3r19MbHJREileYH1qhlxmHPlSIx3RXN%2B9QA9O3W6QN%2FJx%2BWMO6KIzNoNgjA2IwpMEtnPEVPLvOs4S1Nbr1YhZRlo5I0PmtFcHPqPNNsfy6E9H%2FmCQplFauX8T39m3Xj3NvalywjdAiIJ6vD7mtMKZi5TtOBe8N%2FrJjEq3hQHeHKhT1ncNeYMHUMmemJ0tEtlLIr8I1QwghxcXHhHjiu7PwNesgKhSpRg%2B5h%2B2XQ8ERl0gDhGedP9w5ao840l0L4W2NzobdjjwgEQSJeiD258nodTjltUjLehSp1e5ahrnW13MfvAs0oOivuMhrrMnkvjOMOzg09QGOqUBuBbfsDx41m3UGPR3jv7yyVagsOQvGmQ0%2Fmkzpp6N%2FHTxy6ZlDMTQs%2F8XPzpLcdH0QxGRr8z3pcuQoDby%2BvYcoaFHcSxSuJTDat3w8zuKOXwy0%2BRl9bnYaR3evgBBUiR6%2FhRJnz%2BJsn3az9IZT%2FmI9C4ysGkNS3ZmDRVNAVeb684%2F7zhhuUWxdgfIy1lr45gKeSviGnUoHnm7yVsJ9daTlQMo9d16&X-Amz-Signature=84e8fbc0e8bfd5ec4e9ca526469f730d57a0725bf4b22cfce96b1c1a9d1c4bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TQAXVF%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrTrZ8ExwvL7WD3DEb0QHdVFrqn9rTPOCxBtN7qyFAiEA8H6zmLFa9aVtWdvzCqElO50zyolW3eAR1OjZbqT1qnQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyCK2HIzRhxVYtpNSrcAxxl8d2rI75JZX221XYy2uyFrb9z67mhAXNt5wZy5R8XVdYb5kXODT3xCdyyfk4sNq7l92PkaaARdr75XvOzX%2B4EDQvRu8TbP%2BS6XgzLZqHyv06kT66b1XO08leEkJlAHKlw1aNKg8DkNTKkNna7mLVMM3%2BIzAhPkmAzswHSTVZ7z0FGqi7PMXYY8xSu169Z6QbbiwrlPmsE7rTeMHH6WWiZB4pI8sUbTLK6HSZaUPinp2RtIFK7Tejr5sjGKp9JVrU%2FKQ%2F8mtc0Gb8Uj8jtyEYWeVSwAj3Br1JFyoLLx0cRB13DmHOSf2VVBRE3r19MbHJREileYH1qhlxmHPlSIx3RXN%2B9QA9O3W6QN%2FJx%2BWMO6KIzNoNgjA2IwpMEtnPEVPLvOs4S1Nbr1YhZRlo5I0PmtFcHPqPNNsfy6E9H%2FmCQplFauX8T39m3Xj3NvalywjdAiIJ6vD7mtMKZi5TtOBe8N%2FrJjEq3hQHeHKhT1ncNeYMHUMmemJ0tEtlLIr8I1QwghxcXHhHjiu7PwNesgKhSpRg%2B5h%2B2XQ8ERl0gDhGedP9w5ao840l0L4W2NzobdjjwgEQSJeiD258nodTjltUjLehSp1e5ahrnW13MfvAs0oOivuMhrrMnkvjOMOzg09QGOqUBuBbfsDx41m3UGPR3jv7yyVagsOQvGmQ0%2Fmkzpp6N%2FHTxy6ZlDMTQs%2F8XPzpLcdH0QxGRr8z3pcuQoDby%2BvYcoaFHcSxSuJTDat3w8zuKOXwy0%2BRl9bnYaR3evgBBUiR6%2FhRJnz%2BJsn3az9IZT%2FmI9C4ysGkNS3ZmDRVNAVeb684%2F7zhhuUWxdgfIy1lr45gKeSviGnUoHnm7yVsJ9daTlQMo9d16&X-Amz-Signature=bfd848999a234f1c94da1978c2e31b8301f4234ee61ccb5d96835d9d29b83303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
