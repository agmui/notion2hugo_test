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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HK5LMP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDvUZ0nmbAYH28EHMUiIfYfsD7%2BarJp2otSGqqW%2B3ubXgIgAgODiI5J7lyt3SpEyuFkWDkj5rc%2Bn6%2BE0CstacXnkb4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDF53O%2BZqVQEQRsdN7ircA529RbPGIJBw1h4pcA%2F0n7rVPDocdX2UDv3yoOPjZOuxiXN1LWqVqMZRMkdVs%2FEanEmYr1jALcotp2UdbZrgrPfY1MQI85ol2udgUFXogt%2FQClZgyqlVQTQpwXjiIW5AwRHhv3%2F6fIACxOfjRyLHfS9QKegHR3W%2FwDp%2BebTPLRseg%2BrtaTbu278zoslOInUAhDbInIZsYjm%2F36PUXI88Z2MHymMvQ1j6nu2IHWs49hm5qD71UGESqv0eCsD89qVA%2Byh%2Fm4no6LBIttLTEbhFzj9ch2yKVfJXcYAFHAhXKQtdKTM2QMlh4CueAv5f8y0bLWvORNXZZWv9iNqVDbnzdtGOrhuQ%2BZo2XkHJBRplDqvmaTFDPQD1Mytl847dxPQqm2%2BzcRqI%2F4qJQKg3CQkZu5Tu6PtUF1n5TSgGcAlYBrA%2F0CJt9VoB2dIP3YC7xfm9%2BlxD6DxSxgMAzWv9RATMOCjArlm57ajDPasr2Z4iVUIGuxSBkiS%2Bgy0t2aMGnrwRlVUsxQ%2Bq7BHnUuZSYxi9R6opTHjFLoqnQE5klK7Wesu6Xa29WfF9CX1n6TVq9ZdVIV7j%2F6%2BwuppkA%2BijK0%2FLZ%2FiWW3oWu7BEBYIdgr73VGGhMHZkrl%2FKf9Ggpk8%2BMI2j%2BsQGOqUBWwxuZTANxBMFKojJtB3BlNkDedNTKD3acySBkYjDcnbvmLwzW%2Fal0%2FHjKHti8%2Bjr9k4wqkT56O9%2FLQn3WZZLvRhanz3AWEDOpiYasRARxmiGIY6zQivyIvHOcxTUaxAuRmdKOM8f%2BxPC9derIkgEiHsUXIRqnxdRsIPtnhoWSmOnl29V1n9f44FQ6sn9bAfv696F%2B%2BUKRPeg8bxyPtc6XVY8KbYE&X-Amz-Signature=7cc1bf8940ed230aed5247805f3f00bc19ce191d638d44e4fffdef7cb8aa1e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HK5LMP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDvUZ0nmbAYH28EHMUiIfYfsD7%2BarJp2otSGqqW%2B3ubXgIgAgODiI5J7lyt3SpEyuFkWDkj5rc%2Bn6%2BE0CstacXnkb4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDF53O%2BZqVQEQRsdN7ircA529RbPGIJBw1h4pcA%2F0n7rVPDocdX2UDv3yoOPjZOuxiXN1LWqVqMZRMkdVs%2FEanEmYr1jALcotp2UdbZrgrPfY1MQI85ol2udgUFXogt%2FQClZgyqlVQTQpwXjiIW5AwRHhv3%2F6fIACxOfjRyLHfS9QKegHR3W%2FwDp%2BebTPLRseg%2BrtaTbu278zoslOInUAhDbInIZsYjm%2F36PUXI88Z2MHymMvQ1j6nu2IHWs49hm5qD71UGESqv0eCsD89qVA%2Byh%2Fm4no6LBIttLTEbhFzj9ch2yKVfJXcYAFHAhXKQtdKTM2QMlh4CueAv5f8y0bLWvORNXZZWv9iNqVDbnzdtGOrhuQ%2BZo2XkHJBRplDqvmaTFDPQD1Mytl847dxPQqm2%2BzcRqI%2F4qJQKg3CQkZu5Tu6PtUF1n5TSgGcAlYBrA%2F0CJt9VoB2dIP3YC7xfm9%2BlxD6DxSxgMAzWv9RATMOCjArlm57ajDPasr2Z4iVUIGuxSBkiS%2Bgy0t2aMGnrwRlVUsxQ%2Bq7BHnUuZSYxi9R6opTHjFLoqnQE5klK7Wesu6Xa29WfF9CX1n6TVq9ZdVIV7j%2F6%2BwuppkA%2BijK0%2FLZ%2FiWW3oWu7BEBYIdgr73VGGhMHZkrl%2FKf9Ggpk8%2BMI2j%2BsQGOqUBWwxuZTANxBMFKojJtB3BlNkDedNTKD3acySBkYjDcnbvmLwzW%2Fal0%2FHjKHti8%2Bjr9k4wqkT56O9%2FLQn3WZZLvRhanz3AWEDOpiYasRARxmiGIY6zQivyIvHOcxTUaxAuRmdKOM8f%2BxPC9derIkgEiHsUXIRqnxdRsIPtnhoWSmOnl29V1n9f44FQ6sn9bAfv696F%2B%2BUKRPeg8bxyPtc6XVY8KbYE&X-Amz-Signature=f3c782919df0353cb5afbb58dbed4d5f3b3a061661f95802c3534c5c4d2c27b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
