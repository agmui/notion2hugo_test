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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGATG2D%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoiDCMsmYtGv2MvHQ3MNFL6PMzzuveybuKPXwtTb%2FHOAiAsWtw8xmwd84W8hbjzURWnGoXtcqTmbhNtgTlLoL099Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWfyZxsotw0rm1kO0KtwDKze2dDCSzeZhWUGedTVLKcTE66tvskWRueOE9Carc3q1jwRPBnoYfypVdIi2xbviyrs7RzKbEfyq%2BKqLcntpbxEeytI2ch3T4IUnOR6CPyheQYS7TTEBpyPBg2C7OzBPtbKWSAXivKHDIHTMwbfHpMvebavaDL3HrRLIaIuYBYfA2J5Ag7xGb3faKVdm1OGDSaN2S2IXmeKP%2FQO%2BNFfI4YdX2hReny0TuALDMN2qT4HdvGILLjX7TKz3PxL1EGvC7av8h9%2BHnABdzdj3rp%2F1BrnH27ohnUA0AKYZuVSBWEIMQlAYceQmzq%2FcWoVgSUQa7tXl9NsEs4jMMtNXko4ByTxcMbtStbz15ud707870juFZfjMEiWb39Fyq41%2FM%2Fvs8xvM%2BdkAZqNjesvAVqprNL7hN3uR1tUaTh1HsVnTvqRt0Z61KxqPqqkhlzTPO%2BGrK0o%2BKTSAOk3UEs3CpWWqjfdgiGYmPzCYUwYGBxl6TNJbrG7FAYlg5IuUdFAgCMW1MVqTEWkJtgGjGTzSPExKUrn9ZUmmX9MTuvQ%2Fs6VDLoOCoPD0tcnk5QWaulThZZLLmUTWavB7sXhTkBn9czmsYRkl65tmrGF4S%2BC%2Ft6CdQz3V%2F9MVawlVGdRbsKAwp%2Br3vwY6pgEOVUcSPHmNdigApBoIIx5%2B9O0WeDqzfMi6vniMOXqIG%2FPJTZh416HjTbWMzpEPbehtyNaTIcB7YeOSEFgynkKEkmv3EOQFDeSTBNShqZ2Ngrb%2B4NSe6KmmxBpxTz5g5ip8jcXOW8gxhptnZzEInixlqVjRUMgawt0jyCp8EnqSGPj8krsdsmQTjmom8x3Ly83LoPyYeRkvU1i3xMvABqH4zRE42%2FxD&X-Amz-Signature=7923e63735818893a11128864f8d430290e8006c1d73ba9b8f7fa20b698c0840&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGATG2D%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoiDCMsmYtGv2MvHQ3MNFL6PMzzuveybuKPXwtTb%2FHOAiAsWtw8xmwd84W8hbjzURWnGoXtcqTmbhNtgTlLoL099Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMWfyZxsotw0rm1kO0KtwDKze2dDCSzeZhWUGedTVLKcTE66tvskWRueOE9Carc3q1jwRPBnoYfypVdIi2xbviyrs7RzKbEfyq%2BKqLcntpbxEeytI2ch3T4IUnOR6CPyheQYS7TTEBpyPBg2C7OzBPtbKWSAXivKHDIHTMwbfHpMvebavaDL3HrRLIaIuYBYfA2J5Ag7xGb3faKVdm1OGDSaN2S2IXmeKP%2FQO%2BNFfI4YdX2hReny0TuALDMN2qT4HdvGILLjX7TKz3PxL1EGvC7av8h9%2BHnABdzdj3rp%2F1BrnH27ohnUA0AKYZuVSBWEIMQlAYceQmzq%2FcWoVgSUQa7tXl9NsEs4jMMtNXko4ByTxcMbtStbz15ud707870juFZfjMEiWb39Fyq41%2FM%2Fvs8xvM%2BdkAZqNjesvAVqprNL7hN3uR1tUaTh1HsVnTvqRt0Z61KxqPqqkhlzTPO%2BGrK0o%2BKTSAOk3UEs3CpWWqjfdgiGYmPzCYUwYGBxl6TNJbrG7FAYlg5IuUdFAgCMW1MVqTEWkJtgGjGTzSPExKUrn9ZUmmX9MTuvQ%2Fs6VDLoOCoPD0tcnk5QWaulThZZLLmUTWavB7sXhTkBn9czmsYRkl65tmrGF4S%2BC%2Ft6CdQz3V%2F9MVawlVGdRbsKAwp%2Br3vwY6pgEOVUcSPHmNdigApBoIIx5%2B9O0WeDqzfMi6vniMOXqIG%2FPJTZh416HjTbWMzpEPbehtyNaTIcB7YeOSEFgynkKEkmv3EOQFDeSTBNShqZ2Ngrb%2B4NSe6KmmxBpxTz5g5ip8jcXOW8gxhptnZzEInixlqVjRUMgawt0jyCp8EnqSGPj8krsdsmQTjmom8x3Ly83LoPyYeRkvU1i3xMvABqH4zRE42%2FxD&X-Amz-Signature=a237bba7b383521e977b193342bbde9461714a41e53d7755777ee31da3ba8b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
