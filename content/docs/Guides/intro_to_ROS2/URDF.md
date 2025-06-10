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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHG4GDQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC3QVQYwo3zx82WMEzWP0qCCmNTxbmh7NUmkGqmOV4VAiEAig%2FW%2FPCJ4NlHOgBtALjvebcrN3%2BR44%2FlAwhXJXPuCiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPQk5sZYOD8PnPagCrcA%2B6ohw6IquX8ECg6J0TNs6ncA0bCT6vmTYxBbYOHLPb8O%2FIfGD8L8h5s6otAsn7DjbMKU8C%2FhrB5guGLIzo5rzC1Y%2BUIWPi%2FPAAAw9SNUe316qY6IO8wau3YR%2BEw9qk6IjojbRKPey9PbfKccJKA0rOGaGGAmWuTjkgz%2BZXrpwvXyz%2BJsaZBVKfqFTRx1QJAsOvbYy15zC3LNyMTBkXCirogUstS9RoR4epZcWZ37pHLHWTRmk08C9eSlmux4lr3Y5BKo9mvSFs07nP8PTy0YiPu7bw9I7zsEYOVfMfi0kpsKWPQQluCu5Rhy5%2F51gszx%2BBw3DPv%2BoyvqZKwlQ4y8Yv%2BvbXsYzqKZ4FDpQf%2F1k7OABv2pTn4WteBYNGn6N3XqXTMUJ9Y6B9NsCG8IXQkkd2rZtcNxrhNXi4DMW%2F38ClXsRXx1Q3rxBY8XCm22C8VVwC%2FPlOqOLmdthNYLUmunsj6gdkOcTfH%2FF6qskti3NC282vGW8ve%2B2mtWOCzyJJm19LDaRgOMt3fZbbzi9vZI%2B5JuP6YwYDIxP46h0j%2Fh%2BqP7yMdY%2FRqqciemJfEPTg2PCFCOm9D%2F%2BomvjDZ2B2%2FwAhBNYv2d3bdpmkayUMVZhtXDbBTK6SItUmMiWwrMIqIn8IGOqUBsRxt%2FfUJ13U%2Bcs%2FPWwwdmN1w9sN3rIaY9x974%2BRdDZ7yxVaJJnq4FtdmSE17RiI7c7SI1pXmka%2BEDuoNU9Zk%2FR8BML9yfx9HQZPepuDWxMm6jraTrxi77S5Fc2Qv4eSsszebiDUiTb%2BM2zEn7jhrAkzTcP%2Bj%2F5OK8oHumXcBdl9IIxEW6sxZRuDAU33H6BMqhhkDW73FpcarEWvXihxl%2BBTioBUn&X-Amz-Signature=e1388d242872d80bf11b7fec7366aca1b05c1c59b55dbb051b2fcf6c5e2e8e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHG4GDQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC3QVQYwo3zx82WMEzWP0qCCmNTxbmh7NUmkGqmOV4VAiEAig%2FW%2FPCJ4NlHOgBtALjvebcrN3%2BR44%2FlAwhXJXPuCiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPQk5sZYOD8PnPagCrcA%2B6ohw6IquX8ECg6J0TNs6ncA0bCT6vmTYxBbYOHLPb8O%2FIfGD8L8h5s6otAsn7DjbMKU8C%2FhrB5guGLIzo5rzC1Y%2BUIWPi%2FPAAAw9SNUe316qY6IO8wau3YR%2BEw9qk6IjojbRKPey9PbfKccJKA0rOGaGGAmWuTjkgz%2BZXrpwvXyz%2BJsaZBVKfqFTRx1QJAsOvbYy15zC3LNyMTBkXCirogUstS9RoR4epZcWZ37pHLHWTRmk08C9eSlmux4lr3Y5BKo9mvSFs07nP8PTy0YiPu7bw9I7zsEYOVfMfi0kpsKWPQQluCu5Rhy5%2F51gszx%2BBw3DPv%2BoyvqZKwlQ4y8Yv%2BvbXsYzqKZ4FDpQf%2F1k7OABv2pTn4WteBYNGn6N3XqXTMUJ9Y6B9NsCG8IXQkkd2rZtcNxrhNXi4DMW%2F38ClXsRXx1Q3rxBY8XCm22C8VVwC%2FPlOqOLmdthNYLUmunsj6gdkOcTfH%2FF6qskti3NC282vGW8ve%2B2mtWOCzyJJm19LDaRgOMt3fZbbzi9vZI%2B5JuP6YwYDIxP46h0j%2Fh%2BqP7yMdY%2FRqqciemJfEPTg2PCFCOm9D%2F%2BomvjDZ2B2%2FwAhBNYv2d3bdpmkayUMVZhtXDbBTK6SItUmMiWwrMIqIn8IGOqUBsRxt%2FfUJ13U%2Bcs%2FPWwwdmN1w9sN3rIaY9x974%2BRdDZ7yxVaJJnq4FtdmSE17RiI7c7SI1pXmka%2BEDuoNU9Zk%2FR8BML9yfx9HQZPepuDWxMm6jraTrxi77S5Fc2Qv4eSsszebiDUiTb%2BM2zEn7jhrAkzTcP%2Bj%2F5OK8oHumXcBdl9IIxEW6sxZRuDAU33H6BMqhhkDW73FpcarEWvXihxl%2BBTioBUn&X-Amz-Signature=e864d96f8a15ab236fd366d352eb534d8f1292bd6258f0dc2ed959a55a0e17ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
