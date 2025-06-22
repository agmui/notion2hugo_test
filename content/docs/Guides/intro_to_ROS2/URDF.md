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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLAT4B4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwvNuw9wU1B0%2BsDEnFaPPWF5vZA00fyWSTwsPWD0W9qgIgEz1NJMQFkIMo%2B9oZfc%2BIR5RrWqzbeu9c5DC5ahZvHo4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9UwYVp6Vmg9DAAkyrcA163m%2BUCUPo3QyugNZ%2BfyROF6OuSqaSfb9H7gwX4MKehPGlFvCd2e1YXe68kxZmtbfQrp93N5PHNvNWr5YCzgDy%2BeGk%2B0O1RP8Fihx2wt%2FAUxHC2WG8QHrs9dLUe7brhLU8LXf9vpFn%2Bz6Z4AeXgw3%2Fibn7gKamDa2YOBBlZ02LcOVeDZdWljSh%2FSA0FomWfctA%2BwRvwCtrqFzq8DBgg2w0bn16jzRsDupo1MmY%2B7FmKSdgMm6sgrawCSSrO7Eqd%2Bj49ENROr1zMevmfMhdgJMg%2Fe2PGo1A3uUccZUT6%2FJK%2BVAEaPL8kQ9Ywo24wxFHEhz58j21f9DWm1vXwTEnN%2BP79QBjJwFCFP1Nj5XofV7BkL6CRVnvK5z8uAL41K3DTEcFe2lt4W803qis%2BVtHgKR8%2FJYC2wiR6JKY%2B%2BSzz%2Bg6Vj%2FzOTkhsD4Ae7k011Ix9qe6MEKt2Jy0Gvyv7R%2FXH7l4nVLaIba9gAYMVCADcOodRjLLdCJf6FA31UdE3jJ8ipKci33fg3%2BXIelmctSRLIvQmWadmlmgWxy2A1M4mSj3nwzhmeBlwzOOrNoft53rqRA7mMZf4Ff%2F%2BHXG0g9iv6PuSoTKTZbObv6HD1fTpP2sKHi3u9T6WJnLUFzOAMJip3sIGOqUBnpVVeu7yX1YbBxRS38scV5pu24Xp82nI3RgaL0Z%2FV9%2F8SxkCOj%2BidGTfYyYY4628GF5roM7STZ1KkNGev4KYh4cq8bcbRjLwUi7NrvwBKOuCXMVKA8y8gTblUJUHxmKGl%2BY61rXU1wDjnMmrZWJoy69r6QHfQgb4JoLZH5CvV3VW9Ddk30vXFVKVMkvhLA8C5viegrF4yIqKt54s8PaQ05fv3gQ5&X-Amz-Signature=66d364d436542d22768150f10e7182298c928dcf25cd9b3bdc57de44b8c30846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLAT4B4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwvNuw9wU1B0%2BsDEnFaPPWF5vZA00fyWSTwsPWD0W9qgIgEz1NJMQFkIMo%2B9oZfc%2BIR5RrWqzbeu9c5DC5ahZvHo4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9UwYVp6Vmg9DAAkyrcA163m%2BUCUPo3QyugNZ%2BfyROF6OuSqaSfb9H7gwX4MKehPGlFvCd2e1YXe68kxZmtbfQrp93N5PHNvNWr5YCzgDy%2BeGk%2B0O1RP8Fihx2wt%2FAUxHC2WG8QHrs9dLUe7brhLU8LXf9vpFn%2Bz6Z4AeXgw3%2Fibn7gKamDa2YOBBlZ02LcOVeDZdWljSh%2FSA0FomWfctA%2BwRvwCtrqFzq8DBgg2w0bn16jzRsDupo1MmY%2B7FmKSdgMm6sgrawCSSrO7Eqd%2Bj49ENROr1zMevmfMhdgJMg%2Fe2PGo1A3uUccZUT6%2FJK%2BVAEaPL8kQ9Ywo24wxFHEhz58j21f9DWm1vXwTEnN%2BP79QBjJwFCFP1Nj5XofV7BkL6CRVnvK5z8uAL41K3DTEcFe2lt4W803qis%2BVtHgKR8%2FJYC2wiR6JKY%2B%2BSzz%2Bg6Vj%2FzOTkhsD4Ae7k011Ix9qe6MEKt2Jy0Gvyv7R%2FXH7l4nVLaIba9gAYMVCADcOodRjLLdCJf6FA31UdE3jJ8ipKci33fg3%2BXIelmctSRLIvQmWadmlmgWxy2A1M4mSj3nwzhmeBlwzOOrNoft53rqRA7mMZf4Ff%2F%2BHXG0g9iv6PuSoTKTZbObv6HD1fTpP2sKHi3u9T6WJnLUFzOAMJip3sIGOqUBnpVVeu7yX1YbBxRS38scV5pu24Xp82nI3RgaL0Z%2FV9%2F8SxkCOj%2BidGTfYyYY4628GF5roM7STZ1KkNGev4KYh4cq8bcbRjLwUi7NrvwBKOuCXMVKA8y8gTblUJUHxmKGl%2BY61rXU1wDjnMmrZWJoy69r6QHfQgb4JoLZH5CvV3VW9Ddk30vXFVKVMkvhLA8C5viegrF4yIqKt54s8PaQ05fv3gQ5&X-Amz-Signature=40b684573fc9bc80e9785b7a6db663cffe2b9215d5e86df3c0f8f1fe8cc7904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
