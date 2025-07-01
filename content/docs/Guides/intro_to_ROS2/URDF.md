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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHLCW54%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbILAlEiScTpYk%2BU3ntxZg%2Fa5jpL%2BdkBNR6GaaQ3p9EAiEA5i5fSUHUERpzOPm0VzVWx5OXYjgtbu3nKSAYm77crzAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETLUIEj814%2FNMWJUCrcA8WjifNlnY9uRTEcik4MFcz5mZjPDk7lC4XiPcMiQJJMuqUhH3MZJJUP9StE1VnULIpY5Em1qkppaX5jaBGsZAUnY%2FlvAPWXniEoVaCiyZtRJ%2FVjRpNQ9Kx3UsxaFubRrQr1f538hZjDvtQ6LwSjE700LCL%2Fp1kXltCXmAFziHqH4XNrqAMCwH19MzXo71XQbaFWTLD1jvdqy8yu7pId4hSa%2BIMxv%2BqaFs4owstfeVutXsXSyelgAECwF%2B8lFtW7%2FyzDrstghAw1CYDkaYu0VCHthqqJOlM4EtEiS9%2FZxqZgWhPjFqa%2FEzOmwOdBJzNtdRI8Zg680I2nEM3jwjCU9TsiTKw24OfntdRuarU4cEVHHC%2FIYMWF0FKrZzU3W5NIesVRzbDhkNHFv38rjhAO7JhcJTNrED6UHH7jpuJP3%2BP0dgfTbJc5T8pfjHzQUZJbHwtC0IWiMfpXpBBWEV%2BycpGQB2TWU2183zFOA5llWI2UaBNJOS1u0ucw2a04rJ4CkaW7stAhu7FZCFLeBHcqDFN%2F2KFcIzWGcPveQ8aLdRb9aifMvaBQE4RUjFxtoIUbHbPeK4fr6DQ0H5fX5dzJhqkGYgXsPN7%2FoFfRS9m5Q7rW2HX2ADyjAPFnXXbBMNHLjcMGOqUBUcC9YC5sbR%2FSilyB%2B8gG7bJPoHvEB72ZvGzmsP2pARYbS1tgogGk0KYc5DEpHMnBks1YhN3eXCGIBc3wboPZdHF1jaK%2B87Tcpxf%2BeHRdqqxYLYzKCAyYlA3peq1dnF7w4Yhsa7dFfMuBupcML9HdMeSt2GQQwfJLENSchXD%2ByrbZcpllWxEfUMZkinUTDiTW0l97BOwgpmkg%2FW8Tpd3yRvgG%2BDTk&X-Amz-Signature=ea17b19c57663d3bc4b1f17b0dfb6dd1ee27c7a619770e4ad2de9920ece8bca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHLCW54%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbILAlEiScTpYk%2BU3ntxZg%2Fa5jpL%2BdkBNR6GaaQ3p9EAiEA5i5fSUHUERpzOPm0VzVWx5OXYjgtbu3nKSAYm77crzAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETLUIEj814%2FNMWJUCrcA8WjifNlnY9uRTEcik4MFcz5mZjPDk7lC4XiPcMiQJJMuqUhH3MZJJUP9StE1VnULIpY5Em1qkppaX5jaBGsZAUnY%2FlvAPWXniEoVaCiyZtRJ%2FVjRpNQ9Kx3UsxaFubRrQr1f538hZjDvtQ6LwSjE700LCL%2Fp1kXltCXmAFziHqH4XNrqAMCwH19MzXo71XQbaFWTLD1jvdqy8yu7pId4hSa%2BIMxv%2BqaFs4owstfeVutXsXSyelgAECwF%2B8lFtW7%2FyzDrstghAw1CYDkaYu0VCHthqqJOlM4EtEiS9%2FZxqZgWhPjFqa%2FEzOmwOdBJzNtdRI8Zg680I2nEM3jwjCU9TsiTKw24OfntdRuarU4cEVHHC%2FIYMWF0FKrZzU3W5NIesVRzbDhkNHFv38rjhAO7JhcJTNrED6UHH7jpuJP3%2BP0dgfTbJc5T8pfjHzQUZJbHwtC0IWiMfpXpBBWEV%2BycpGQB2TWU2183zFOA5llWI2UaBNJOS1u0ucw2a04rJ4CkaW7stAhu7FZCFLeBHcqDFN%2F2KFcIzWGcPveQ8aLdRb9aifMvaBQE4RUjFxtoIUbHbPeK4fr6DQ0H5fX5dzJhqkGYgXsPN7%2FoFfRS9m5Q7rW2HX2ADyjAPFnXXbBMNHLjcMGOqUBUcC9YC5sbR%2FSilyB%2B8gG7bJPoHvEB72ZvGzmsP2pARYbS1tgogGk0KYc5DEpHMnBks1YhN3eXCGIBc3wboPZdHF1jaK%2B87Tcpxf%2BeHRdqqxYLYzKCAyYlA3peq1dnF7w4Yhsa7dFfMuBupcML9HdMeSt2GQQwfJLENSchXD%2ByrbZcpllWxEfUMZkinUTDiTW0l97BOwgpmkg%2FW8Tpd3yRvgG%2BDTk&X-Amz-Signature=32eaf7f3cbf1c0ed912bbb7b2e51e2655527d33452c07ec02142d37c1d36c3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
