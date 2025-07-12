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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5STB5A5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7b3NaBg6mYkYfdUS83qtFrQNuCaw%2B9xQzvvkwFTw%2BmAiEA%2BoS6Bag%2B475Wf7MSNWKwJCRjVYnzP18TCI4CxRBhXXYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9xMLU8lJpjeE7JOSrcAzauFO%2FkjvHrUcp8C5OCb%2BF6PWdVkGwTf%2Fv7Z64DSYq5EbqCLyhIlRkzRtfHC5nTAuCIcN%2FP5SOeye5V4a4gjBVH4SebTkyrlfIg%2F3OMWHFCxJIPFDwk6V0k8W7TKkirYQVYOvoWa2Rcfboj8DWzw0nkbNRJo67wwCv2%2FFwVpU4XfjkXXNmve037M9V1UJ33jMLAItrWNgJYt2TJDxcS2Iz4apeol2%2FeVBql%2Fl5tWu5L4JoXrnMaZhgzBovhLS5mIv7dCxnEq23zCTF5muSvt5C2Qt8wJmkzjZtyQgLWuJbWFaO4UO%2BvciqMmo0lBOChTSa36cqWz4ukyn0XoX9N0ruYW4cz2cH2nBapvv%2Bme51XLTr9v09RnZxBuJ5HL5zAu6CBsA2GDEeJAlgx1XvhQ2%2BmGUX26RA%2B%2Bx%2F92twyhpB6O2WhWOotU5yREuN9wQKVLo4Q7uBOxSEmDE70ZDSDho%2BeP%2BcupNN7g8aBQD4C7EeWH5dlaF093ajZGI5RGHBFf3bWmKJPuwMVXFc4IQ25q3SCBGQCS0bTGWynbXjec%2BN%2ByWiEPRy9l3Trj9HCn1TfmrDbvncmH5veoDS3UhXVfx0hVF%2BLhn6I4vl4ht%2BWksppIZY8yme3YBADKWDUMLXZysMGOqUBF35fHOJMMbB1J8nTLkhkZfb8nNUAEdpwp%2BGtwEDhreZfFk95vdQzZyMy%2FIwcxkyf8n6AR4850vRBRDEzXm0SLoxtXTLjfIOeJzKCTMhCtc7MGCFu7QqWt2LwQ9wdlt%2BD3jxnG4BH3eD%2BR4GeiFOjJ%2FJ5NvGzAXjh1JXEd4FF%2FRi4bsDkcpEwqCcmbM76P%2FNNRLWfVn1aF2JkSh%2FYtQUQkuuOupg0&X-Amz-Signature=52d6265b004d42d7df33adfc45283fb723f2a2aabff55a62015675619d4b7ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5STB5A5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7b3NaBg6mYkYfdUS83qtFrQNuCaw%2B9xQzvvkwFTw%2BmAiEA%2BoS6Bag%2B475Wf7MSNWKwJCRjVYnzP18TCI4CxRBhXXYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9xMLU8lJpjeE7JOSrcAzauFO%2FkjvHrUcp8C5OCb%2BF6PWdVkGwTf%2Fv7Z64DSYq5EbqCLyhIlRkzRtfHC5nTAuCIcN%2FP5SOeye5V4a4gjBVH4SebTkyrlfIg%2F3OMWHFCxJIPFDwk6V0k8W7TKkirYQVYOvoWa2Rcfboj8DWzw0nkbNRJo67wwCv2%2FFwVpU4XfjkXXNmve037M9V1UJ33jMLAItrWNgJYt2TJDxcS2Iz4apeol2%2FeVBql%2Fl5tWu5L4JoXrnMaZhgzBovhLS5mIv7dCxnEq23zCTF5muSvt5C2Qt8wJmkzjZtyQgLWuJbWFaO4UO%2BvciqMmo0lBOChTSa36cqWz4ukyn0XoX9N0ruYW4cz2cH2nBapvv%2Bme51XLTr9v09RnZxBuJ5HL5zAu6CBsA2GDEeJAlgx1XvhQ2%2BmGUX26RA%2B%2Bx%2F92twyhpB6O2WhWOotU5yREuN9wQKVLo4Q7uBOxSEmDE70ZDSDho%2BeP%2BcupNN7g8aBQD4C7EeWH5dlaF093ajZGI5RGHBFf3bWmKJPuwMVXFc4IQ25q3SCBGQCS0bTGWynbXjec%2BN%2ByWiEPRy9l3Trj9HCn1TfmrDbvncmH5veoDS3UhXVfx0hVF%2BLhn6I4vl4ht%2BWksppIZY8yme3YBADKWDUMLXZysMGOqUBF35fHOJMMbB1J8nTLkhkZfb8nNUAEdpwp%2BGtwEDhreZfFk95vdQzZyMy%2FIwcxkyf8n6AR4850vRBRDEzXm0SLoxtXTLjfIOeJzKCTMhCtc7MGCFu7QqWt2LwQ9wdlt%2BD3jxnG4BH3eD%2BR4GeiFOjJ%2FJ5NvGzAXjh1JXEd4FF%2FRi4bsDkcpEwqCcmbM76P%2FNNRLWfVn1aF2JkSh%2FYtQUQkuuOupg0&X-Amz-Signature=720a1b44881d66a9cddd35690546049a83884d161ec3cb258797b831edae2a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
