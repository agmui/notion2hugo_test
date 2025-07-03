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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEIAXLR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCw5dRGXBCDxTG%2BsdXX%2Bo6D30gRKs6ATTnmPhwtSwL0HwIhAL2psGZgH%2B%2FSqnm3HBO03ItNEIYnVEW3rmFyn03XQ%2Fl3KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTBPG3FYdWEUYBr4wq3AOwDWWnCjwR2Rkgd4bK%2FpjBmBMEJT39p3lYG9N8O4T83MEte6DzVqkc7WiBluF%2Bg0K9jzTJsw5y9QvxG0dJhH9QnJlfcAheLaXj9PuacLRDgfyUJd72Lc1QsKctKSSsdgV1GcYXNiJZVnNmBnXwjSGJNsdq5rIMai9ADJabngIz9S0Zt6HXWQR2zZnUWAltXH1m9Ouk8faKVrUzwpa%2FgLHv95%2BOga8AEDiuGMUNJSVmciFXzeHufakZLqslVZrstjVJJK7ipIvj5goYaz1tlw25LIQfTNX2AGmEQLIxqciqqAAn3CmXW857%2FRaXmZJxEZb1h3pPEtIYdSp%2Fx3v72Fy25h1u6i%2FLmLgUWB79OBIYBfIWd%2BSzZznYIIyvRZEw0aryGcKBBSieC5dPNBdRB1Ur7Ec90L4WBOFOiHbdzlADeiyktcEoOwshpXgBN1KAr9D%2FXmhBynoA2dUejiVQBb%2FDXmfQXXCkZPA9bELGuWEQjt45U6gEoCfbHo0Nw%2BI8PbpfhLG8o60nwnRcFKitcDa0LHXOm%2BejP%2FjT8ca9z%2FpviYnMcklGlfM0w4sF1Iz%2BSg0BvDresZz%2FiFXTlbJJt34bUrWqXvEcHYkMrURsn2hbxYi%2Fwg1N9K4maTZflzCGsZfDBjqkAQRzGGI4lztHSEs6qanYuRq2U4QflCvz4SFbtUhoeAU%2F135SI3oRACbUfmxN5DsmrNyhtuAnqhEU3toblegwRUAjSzrJkg5vc6nhdTbdX6XnQU8e00zHUqNl4%2FVIB0klUUiq7cKfIUHrkMEV9vNdkkG5QGo5fvEl08w80vnB6XUTSRKG3zk3AVjciLu2WBfSRUUXiS1WLwNrhPuZYdiCgbLvOYgy&X-Amz-Signature=39291c1e3a8dc896e6ee3c7cc38ae0746dcbca008e394eba7827220b0f743b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEIAXLR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCw5dRGXBCDxTG%2BsdXX%2Bo6D30gRKs6ATTnmPhwtSwL0HwIhAL2psGZgH%2B%2FSqnm3HBO03ItNEIYnVEW3rmFyn03XQ%2Fl3KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTBPG3FYdWEUYBr4wq3AOwDWWnCjwR2Rkgd4bK%2FpjBmBMEJT39p3lYG9N8O4T83MEte6DzVqkc7WiBluF%2Bg0K9jzTJsw5y9QvxG0dJhH9QnJlfcAheLaXj9PuacLRDgfyUJd72Lc1QsKctKSSsdgV1GcYXNiJZVnNmBnXwjSGJNsdq5rIMai9ADJabngIz9S0Zt6HXWQR2zZnUWAltXH1m9Ouk8faKVrUzwpa%2FgLHv95%2BOga8AEDiuGMUNJSVmciFXzeHufakZLqslVZrstjVJJK7ipIvj5goYaz1tlw25LIQfTNX2AGmEQLIxqciqqAAn3CmXW857%2FRaXmZJxEZb1h3pPEtIYdSp%2Fx3v72Fy25h1u6i%2FLmLgUWB79OBIYBfIWd%2BSzZznYIIyvRZEw0aryGcKBBSieC5dPNBdRB1Ur7Ec90L4WBOFOiHbdzlADeiyktcEoOwshpXgBN1KAr9D%2FXmhBynoA2dUejiVQBb%2FDXmfQXXCkZPA9bELGuWEQjt45U6gEoCfbHo0Nw%2BI8PbpfhLG8o60nwnRcFKitcDa0LHXOm%2BejP%2FjT8ca9z%2FpviYnMcklGlfM0w4sF1Iz%2BSg0BvDresZz%2FiFXTlbJJt34bUrWqXvEcHYkMrURsn2hbxYi%2Fwg1N9K4maTZflzCGsZfDBjqkAQRzGGI4lztHSEs6qanYuRq2U4QflCvz4SFbtUhoeAU%2F135SI3oRACbUfmxN5DsmrNyhtuAnqhEU3toblegwRUAjSzrJkg5vc6nhdTbdX6XnQU8e00zHUqNl4%2FVIB0klUUiq7cKfIUHrkMEV9vNdkkG5QGo5fvEl08w80vnB6XUTSRKG3zk3AVjciLu2WBfSRUUXiS1WLwNrhPuZYdiCgbLvOYgy&X-Amz-Signature=a119051cf66fa027ce45d28b76848efa9eadba0dfa5d5b25facc9155495d7846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
