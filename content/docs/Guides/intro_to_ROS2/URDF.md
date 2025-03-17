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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTU3FR2O%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYu66qGhRVI4JPZO6E1P%2FvZ0ng7gJDu0H3y1%2FsaISEEAiEAgESjM8nFkXxH8v9jjm77M69iw2WETc%2F5dIEnT%2BCqUsMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDOzOLsElC5npbhfNyrcA%2BMbnRWWeYdYmSptE2QBdtQzJio%2FWCxUetN6rkDc7P90gdQHJ31NcTlDELJY%2Bc1KitLofyJRqYuwRD%2BJqE44%2BGRjENR4KJefCT7hiLppmi91snylW8Pc6SgwI9xQT6u4wHi3o6Wv3rT3ECPPKJlJvJwpOox3OfCEHpHf1zg%2BnSUmlsSC5gSOKVhyYeGFhWQrMbI%2Fm%2BWQaIRs1vkLQIzDW4a9ceAb2cx3rbOpXtmOxwavY4Dk2eyvwVGc715%2FtjB4NPxwFa%2BjyBV%2FhakZzp4iZHas8Bh5z5xejf4KpPFzCvdSjG9pUNad0YGWG96Zm0UK9It%2Fo98dtCl2nLr7TM1J3MFPNLAFoeDPQ6sOk6CkR4ycdCMxuSNXU%2F8Y%2Fw1TUbGHSGdktkLB%2BhMKnU6z6bIIB8o7tstUryMFLb%2BD3YCMegD6YmYoLM3kpKpgGGHqmdFfqWer7Q6YkbTIhB2cHMVtIN%2BhVqlfT56fn7%2BIPu3Y8XdM%2F%2F8l9maa%2F91JCAPh39tYNLjG0P7Ene4ZbBx5iCYv1vmMoFtellbF4X%2FFnF8c1LNBGtZXP0e0cPHwrjn2g6iOLdlzn%2FcXVjodFRBfFpz5EbQlJ78vkD3fWzC1fduJsqp2SKtfjYAl2%2FNUJ9spML%2Bd3b4GOqUBYLk6RW%2FXjcb6rcqW3Fbuox303EV0%2BCTG5oyqm%2B%2B3MxLL5xbTNAgRa%2Bju9Zp2gXofpLaYcGAwQy%2Bc4RCYU0p%2BWQiNBOrzzFNf8upFkAjOKZqh3fyj8BwuU8sXNg7COSr6JKq1cwEUqz7qVbRMo4hzyKPdVEma3f5uqLMhLC1sQZOrR5sSUYsqbkZEPeloQkrsJwd5lVm51ThWgFscKoDwUwipvnUv&X-Amz-Signature=18b10c62d61c5f2fe1710339d456dda63e8b58771817666560d42d2d8920e440&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTU3FR2O%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYu66qGhRVI4JPZO6E1P%2FvZ0ng7gJDu0H3y1%2FsaISEEAiEAgESjM8nFkXxH8v9jjm77M69iw2WETc%2F5dIEnT%2BCqUsMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDOzOLsElC5npbhfNyrcA%2BMbnRWWeYdYmSptE2QBdtQzJio%2FWCxUetN6rkDc7P90gdQHJ31NcTlDELJY%2Bc1KitLofyJRqYuwRD%2BJqE44%2BGRjENR4KJefCT7hiLppmi91snylW8Pc6SgwI9xQT6u4wHi3o6Wv3rT3ECPPKJlJvJwpOox3OfCEHpHf1zg%2BnSUmlsSC5gSOKVhyYeGFhWQrMbI%2Fm%2BWQaIRs1vkLQIzDW4a9ceAb2cx3rbOpXtmOxwavY4Dk2eyvwVGc715%2FtjB4NPxwFa%2BjyBV%2FhakZzp4iZHas8Bh5z5xejf4KpPFzCvdSjG9pUNad0YGWG96Zm0UK9It%2Fo98dtCl2nLr7TM1J3MFPNLAFoeDPQ6sOk6CkR4ycdCMxuSNXU%2F8Y%2Fw1TUbGHSGdktkLB%2BhMKnU6z6bIIB8o7tstUryMFLb%2BD3YCMegD6YmYoLM3kpKpgGGHqmdFfqWer7Q6YkbTIhB2cHMVtIN%2BhVqlfT56fn7%2BIPu3Y8XdM%2F%2F8l9maa%2F91JCAPh39tYNLjG0P7Ene4ZbBx5iCYv1vmMoFtellbF4X%2FFnF8c1LNBGtZXP0e0cPHwrjn2g6iOLdlzn%2FcXVjodFRBfFpz5EbQlJ78vkD3fWzC1fduJsqp2SKtfjYAl2%2FNUJ9spML%2Bd3b4GOqUBYLk6RW%2FXjcb6rcqW3Fbuox303EV0%2BCTG5oyqm%2B%2B3MxLL5xbTNAgRa%2Bju9Zp2gXofpLaYcGAwQy%2Bc4RCYU0p%2BWQiNBOrzzFNf8upFkAjOKZqh3fyj8BwuU8sXNg7COSr6JKq1cwEUqz7qVbRMo4hzyKPdVEma3f5uqLMhLC1sQZOrR5sSUYsqbkZEPeloQkrsJwd5lVm51ThWgFscKoDwUwipvnUv&X-Amz-Signature=37d7778c27d2b7262dc07481e2181d4812f63cb0f4f036e7680a8dd10784441d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
