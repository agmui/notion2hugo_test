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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGOKGZ4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCblThHKuGtuRaKGge%2BzpEmWtko14RQegXVS4hTG2AweQIgG6wgfQMgpMkCCWtQwj%2F8%2BnQSWdmoUoGRviCrg6Rzhv4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLURvX%2FEDvEr0pumHSrcA60DSwckd%2F7Dssu6nk1BZk9%2FDHtfndVqwyHGEaF571l7KTdUrG3FN%2F9i1ZnlqdnDtm2aBmlWv%2BYR1%2Fq0ljSSY%2FAYW5jw3k79befwBhGk1cxaWk5XT8AU%2Byafm79pRUiimPltj1gEkp%2FHa6OFGf9A0SoK5SpPwljEPcXgwmDEj4lE9ZXfmWVGNWUxZe9sbZbR9mNGZqTI54VW4T14upG6LfO7062U9K4fsOkaxoT2zKpd%2BD4ndxALGl0t0%2FHujbEcmVA56x1bXlUx6qav9lOrOe37GtBS6iPAgP1PwS76%2Ft92D8VZK1Vynpstt4CA%2BflGK1HTEKLUog3rkxilbh%2FtByoz9XSpRTRr2ZEFbuQiVee1wQWLkThflpl0BE10cp1OGHs4I9uv7kpCVpq88iHInp6cEhfwnBcIr3hOzr9S%2FguS%2B9CH6qCta%2BCaimHJYPiVcoBCCHJQgIMAY9CXCmOQjW9LygYb%2BeWVkZCyIDZ25QtFIr6SQ4UxL3zAvDtOr7PLYXOZ0ID2603rsGJC0Y%2BCZIhaGehNKqprFJNJSkL0Ax0FiIVAi%2FUuTq0o%2BBGFSROFvmULp0UixdeU3hdx0VBezSk5pOHZzZjkgksQtbKtXDsCmKRIj66xJCF7amcmMOmWlb4GOqUBEMdeX6dFYWHXsVBHa3OMLh1t5UGIbRzoWvrSi7N1gfvTK5jzdqtFSl3T%2BxEIioFeS1UWeSVAAbU7IP0z3zRDR1msJmjyoLdHUWTdy4MqMl3%2Bg%2BWHaChxujEMYgPedbfK5fAEtqVIfCOhJ%2F1b2cOTsNavgjN7Zt74NFVCDIVeLdWQZw3Z8O9NKYb2DZxLWNfXZJMocz70hu8O66CNZu4qomBq0BNG&X-Amz-Signature=00b923714c6c379677358733d5d2d9b1acdd9b5200ff97926473724802a072ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGOKGZ4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCblThHKuGtuRaKGge%2BzpEmWtko14RQegXVS4hTG2AweQIgG6wgfQMgpMkCCWtQwj%2F8%2BnQSWdmoUoGRviCrg6Rzhv4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLURvX%2FEDvEr0pumHSrcA60DSwckd%2F7Dssu6nk1BZk9%2FDHtfndVqwyHGEaF571l7KTdUrG3FN%2F9i1ZnlqdnDtm2aBmlWv%2BYR1%2Fq0ljSSY%2FAYW5jw3k79befwBhGk1cxaWk5XT8AU%2Byafm79pRUiimPltj1gEkp%2FHa6OFGf9A0SoK5SpPwljEPcXgwmDEj4lE9ZXfmWVGNWUxZe9sbZbR9mNGZqTI54VW4T14upG6LfO7062U9K4fsOkaxoT2zKpd%2BD4ndxALGl0t0%2FHujbEcmVA56x1bXlUx6qav9lOrOe37GtBS6iPAgP1PwS76%2Ft92D8VZK1Vynpstt4CA%2BflGK1HTEKLUog3rkxilbh%2FtByoz9XSpRTRr2ZEFbuQiVee1wQWLkThflpl0BE10cp1OGHs4I9uv7kpCVpq88iHInp6cEhfwnBcIr3hOzr9S%2FguS%2B9CH6qCta%2BCaimHJYPiVcoBCCHJQgIMAY9CXCmOQjW9LygYb%2BeWVkZCyIDZ25QtFIr6SQ4UxL3zAvDtOr7PLYXOZ0ID2603rsGJC0Y%2BCZIhaGehNKqprFJNJSkL0Ax0FiIVAi%2FUuTq0o%2BBGFSROFvmULp0UixdeU3hdx0VBezSk5pOHZzZjkgksQtbKtXDsCmKRIj66xJCF7amcmMOmWlb4GOqUBEMdeX6dFYWHXsVBHa3OMLh1t5UGIbRzoWvrSi7N1gfvTK5jzdqtFSl3T%2BxEIioFeS1UWeSVAAbU7IP0z3zRDR1msJmjyoLdHUWTdy4MqMl3%2Bg%2BWHaChxujEMYgPedbfK5fAEtqVIfCOhJ%2F1b2cOTsNavgjN7Zt74NFVCDIVeLdWQZw3Z8O9NKYb2DZxLWNfXZJMocz70hu8O66CNZu4qomBq0BNG&X-Amz-Signature=c2d7c12e0ec146265b04ff31280f6e1a232f3667709abeaf150fffe72133729e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
