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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHC63V3G%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIElZygQHCfZamiQOQ0IaMUg6%2FF7MFY72sa0A%2Bnofx5duAiBuywsf0TTtvTC9yNigBHMyuUtEep%2FapUCZu758Zf0WpCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF2go0RedR1wlYQkaKtwDSuW%2Btk1JomtId6wnv36v9n9LRT76dnnl3laKVYhrufRN06gxeyAkyA7puKSbNkvP0mOsIaVXNMPdCWR9%2Bu6ymgJJTCyk7eSKKLxxq7Oi4e7cwC1gtyCkjS139vffnkfMa5HCyt5lFCq7ovZ1xfErQiajFgKjKf96Oq0F9H9SwwglGQCH2CcGBs5oORzWOXvnActZSkIe%2BJS9MCNekyAEnCIeDAs3TvC07ZMQPVOJWCo2mFRSWAKTSjIixKQGeYT5vhq8BaSLBMST19NokURzkSj%2BDQXGQE2iQbfZfrdZvjzcpNWXPFC5VUI5uFsai%2FYQOH%2FU2%2FsyM7CtK6%2BlzQGpRJYzTyMBg8lfmSXN04KcDhKXcQEkKsTqnJVgkQH21Y8WxFx%2FASEIb9dn%2F%2BEQfW22uTXd6f7f75npfKJx7gS%2B%2BipIpP6kh1jdYU%2FFXbE2%2Fopx%2B9w1ek7qXzged%2F%2FY0ADhuSe98HTRehP%2B1%2BC3OsBnZifDo1IdSWlHHAgeBp%2FCVxEet7IXa1lsu2XQ5PTFlHMw6HYdeLs43TsG7t9tUJrGEUKE4pncJwPyIe5a5ybXx0VFfDSsdU8oE6IoXfOY%2BJKOlmF2kr7u%2FIGKlzOpdjdnjYzVoj0ytO1kdAmXQrAw84SDwgY6pgEGsEORn3cPVM0IwJpvclXXFWKEZegqjGyU43UmdHpmBfXR29ZvMfyzm7fmoXd6eyKxv3Xz0kMDyKBIjtfrcRB%2FJWDQClftbDLizp%2Bk05IfE1OUWA5%2BUNe4IPuNRKmDwsGxL6CSrkLdZ1i%2FoSbIzHWdjWydwJRHUUMuEBg5Ko%2BCjD9TSQHj%2FxQBS9zVy1xn6C3McKnkNMTxb9KMRYiyiMxK21U6xUuD&X-Amz-Signature=bfe5fedabf5b01236baee83dd542eac056e82757e11f4235408b74727ff7ca95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHC63V3G%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIElZygQHCfZamiQOQ0IaMUg6%2FF7MFY72sa0A%2Bnofx5duAiBuywsf0TTtvTC9yNigBHMyuUtEep%2FapUCZu758Zf0WpCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF2go0RedR1wlYQkaKtwDSuW%2Btk1JomtId6wnv36v9n9LRT76dnnl3laKVYhrufRN06gxeyAkyA7puKSbNkvP0mOsIaVXNMPdCWR9%2Bu6ymgJJTCyk7eSKKLxxq7Oi4e7cwC1gtyCkjS139vffnkfMa5HCyt5lFCq7ovZ1xfErQiajFgKjKf96Oq0F9H9SwwglGQCH2CcGBs5oORzWOXvnActZSkIe%2BJS9MCNekyAEnCIeDAs3TvC07ZMQPVOJWCo2mFRSWAKTSjIixKQGeYT5vhq8BaSLBMST19NokURzkSj%2BDQXGQE2iQbfZfrdZvjzcpNWXPFC5VUI5uFsai%2FYQOH%2FU2%2FsyM7CtK6%2BlzQGpRJYzTyMBg8lfmSXN04KcDhKXcQEkKsTqnJVgkQH21Y8WxFx%2FASEIb9dn%2F%2BEQfW22uTXd6f7f75npfKJx7gS%2B%2BipIpP6kh1jdYU%2FFXbE2%2Fopx%2B9w1ek7qXzged%2F%2FY0ADhuSe98HTRehP%2B1%2BC3OsBnZifDo1IdSWlHHAgeBp%2FCVxEet7IXa1lsu2XQ5PTFlHMw6HYdeLs43TsG7t9tUJrGEUKE4pncJwPyIe5a5ybXx0VFfDSsdU8oE6IoXfOY%2BJKOlmF2kr7u%2FIGKlzOpdjdnjYzVoj0ytO1kdAmXQrAw84SDwgY6pgEGsEORn3cPVM0IwJpvclXXFWKEZegqjGyU43UmdHpmBfXR29ZvMfyzm7fmoXd6eyKxv3Xz0kMDyKBIjtfrcRB%2FJWDQClftbDLizp%2Bk05IfE1OUWA5%2BUNe4IPuNRKmDwsGxL6CSrkLdZ1i%2FoSbIzHWdjWydwJRHUUMuEBg5Ko%2BCjD9TSQHj%2FxQBS9zVy1xn6C3McKnkNMTxb9KMRYiyiMxK21U6xUuD&X-Amz-Signature=38aeab6aca42a02a175734fc784f055b6c9622f5c6ddd2511841f4fee21127b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
