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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4FGUAK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzjitA9M7Kz0IgBcI7uLFGiwhU5kUg%2Fua86%2FYxIkrqLAiEA711O5AIctVA7UJpTR5Ru6bnTu2WHoJC%2BBLp%2Fm5hu2rIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaqbYEcHP1EtdwWOircAx%2B1e7HHncQ6loi3aageew55bvkllM4utuZsVihxXXWwyqoXfezlphNqD9EA%2F9TlHFr1pHlurCNIMm18NAUDKCtW334qtE7irGif13biUvH0XTGc81QLUjzGmohpzavNjFcTCAHAXqzlVO%2B1G7xNtg5xbecQRBh9zGG6eMSStjzcJ28HG8eCnFt9VkXzQBsMXmiItFyX9D%2B3IuRnDmmIdMeQ7h0SGySPyafuhpJ6YWSD8O1xasuR%2BbChuEH5luMwvrAchz5RRJTAibbLWADndGiqbJF7lUigMGGp6g9k6WYm7%2By8hHgcmlItdERAB1ThWTOXyz9TEP5fvB2nsgMRw58I7cGCwaejx1hAcBv7XJ2ZYimlKf4vnXV6YaUfYLYv64BM7s%2B2hG5eiLTCdt3LdEzCy1IAw4grSNQqtTNFhpAx4dYnP3XauygKdlT2aPENodKPnMaqF0i1N1UoIA%2Fj2tz9fzkxOJBGFIYppOtTvQiyG6ZJBuRYJD8zyGJJJvayysbDZ%2F%2BLxz3Y7mKEcjLRg8%2FaTp%2Fvcausg7oRd5kjryi1JW2CXXmJVSnQPSJd75Nt99MVrpIYLXPLuS8a5FKXXmTkFDV4nTB%2BNAIfCx2Xsd6AKziRTZA31KgNcQ8GMOCZ8LwGOqUBzzR1%2FvbpmZUjW8Q%2BOiILJVdtGogThDAL4BoqUA1FZqeakWmoA9hxaQCTilKjOhQQRaN7OiCxTpey1SHi0G0Kn3uZpBBN7EiIJmA7xaD5LPbWInEC%2BolmqChpAYBQSltOk59jVTrVmm%2B026T89Ww8gbeP%2Bsbc4GqCypGQ%2FaL98%2FLGOcWOfjcDd62rIeC9DZmBoimA%2Byb3Jx5blfwtRdUU%2FVHDTRgn&X-Amz-Signature=829c27399b8232e709db3e6abefaabf2a8510f7b8aa7b137ba95814ba3870c44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4FGUAK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzjitA9M7Kz0IgBcI7uLFGiwhU5kUg%2Fua86%2FYxIkrqLAiEA711O5AIctVA7UJpTR5Ru6bnTu2WHoJC%2BBLp%2Fm5hu2rIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaqbYEcHP1EtdwWOircAx%2B1e7HHncQ6loi3aageew55bvkllM4utuZsVihxXXWwyqoXfezlphNqD9EA%2F9TlHFr1pHlurCNIMm18NAUDKCtW334qtE7irGif13biUvH0XTGc81QLUjzGmohpzavNjFcTCAHAXqzlVO%2B1G7xNtg5xbecQRBh9zGG6eMSStjzcJ28HG8eCnFt9VkXzQBsMXmiItFyX9D%2B3IuRnDmmIdMeQ7h0SGySPyafuhpJ6YWSD8O1xasuR%2BbChuEH5luMwvrAchz5RRJTAibbLWADndGiqbJF7lUigMGGp6g9k6WYm7%2By8hHgcmlItdERAB1ThWTOXyz9TEP5fvB2nsgMRw58I7cGCwaejx1hAcBv7XJ2ZYimlKf4vnXV6YaUfYLYv64BM7s%2B2hG5eiLTCdt3LdEzCy1IAw4grSNQqtTNFhpAx4dYnP3XauygKdlT2aPENodKPnMaqF0i1N1UoIA%2Fj2tz9fzkxOJBGFIYppOtTvQiyG6ZJBuRYJD8zyGJJJvayysbDZ%2F%2BLxz3Y7mKEcjLRg8%2FaTp%2Fvcausg7oRd5kjryi1JW2CXXmJVSnQPSJd75Nt99MVrpIYLXPLuS8a5FKXXmTkFDV4nTB%2BNAIfCx2Xsd6AKziRTZA31KgNcQ8GMOCZ8LwGOqUBzzR1%2FvbpmZUjW8Q%2BOiILJVdtGogThDAL4BoqUA1FZqeakWmoA9hxaQCTilKjOhQQRaN7OiCxTpey1SHi0G0Kn3uZpBBN7EiIJmA7xaD5LPbWInEC%2BolmqChpAYBQSltOk59jVTrVmm%2B026T89Ww8gbeP%2Bsbc4GqCypGQ%2FaL98%2FLGOcWOfjcDd62rIeC9DZmBoimA%2Byb3Jx5blfwtRdUU%2FVHDTRgn&X-Amz-Signature=04c6b575bf9b40b5ed4aadc4d29b9943ec114fa19e09e98bafcd8dd932566958&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
