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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNHXD72%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJnZcTe4nixmfe22Tkb3khHa%2FgWYbVCuYGSOmIvOxxMAiEAwWDIqEhfjyHzac4yq8lyMNE05UGWVyCXlOaQ391tmigqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6Kc8%2BtCY376HO45ircA98D6DaocTKQqHYDzUeBnnkNSKxWF%2FIqmkn3iXmbY7xjMXT9rDKmI6TCP22cK2%2F0104bx0DgAX8oBzUURnsKbGX0qkB5nZ0uOBa6Gy7LQGBuZWpIUp921ZEXBHJLyNQ6DcRrZYwRCLXclvPPXwai1JEzx2O1vIIZfB59waaPdL%2B3hrTpgeciFHz4NMWcxdgn%2B4pQ%2BfHZrNI%2FIRuzKvv7r3QyH9j2g5DXT7j4LmV6%2BbQXJ5oMJV%2B2CYK9UtgCogSlSWsmJZZ%2FKM7BM79%2F0jKtyJsts0UlM0172jSyMgR27NrTe%2BSchtsQVgPG1fuVGOJ3Y3mmmXVqyRCja%2FV8JGUGpFDpSxqfbmWM1GXWcSDK6ZvNxkYRTlmXvcOaRv03vwW01sOipUQZLgZFP3aPBHuyh2YEVZxZIpMOYCbjkWIy%2BSXr4VAxroyLexI32X5U3xRvEi4MJ%2BUCzXeWsDJBmZRbAdE%2FolMnQyaSPR%2BSy7gYvLv6jbcW1ZvhNk399def3vYLWEPkAjFjJ7FQKKsfASTbB1PzaEnziiZsuEP%2B7Hb7571Wq5uOLwYilRNq64m%2FQKWMn30fpucnDOXO0n7wTu9QUy74KfIkxW3QleNhcJZE6jyi%2BuRSL0vp5upH3f3VMPjKr8EGOqUBB0jBdFZo9f6nJmAN6kPOAxkfTz0ueib7ITDNvRl0ojBrCnGCuM92R0nxrKgavIEs%2FwrCAo2z8l7sCxBXdO4idZajpt5i2aaZTFN4lFJgA05V%2FULfiLvoFNDqwc5teK2IbqUaS%2Ft3%2FSyRJK%2BYgLmYr%2BQatPgj1EcHwOarai8RkXlJJs9CkO%2BMCcBbgDOqpzePg0%2BxEK%2FNnr%2FX5Y90U757vk6F4fUg&X-Amz-Signature=1ad58c1df8071b67ca553c2f7d1132366dfeb16a7428ccd01f1b03416bbc5648&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNHXD72%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJnZcTe4nixmfe22Tkb3khHa%2FgWYbVCuYGSOmIvOxxMAiEAwWDIqEhfjyHzac4yq8lyMNE05UGWVyCXlOaQ391tmigqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6Kc8%2BtCY376HO45ircA98D6DaocTKQqHYDzUeBnnkNSKxWF%2FIqmkn3iXmbY7xjMXT9rDKmI6TCP22cK2%2F0104bx0DgAX8oBzUURnsKbGX0qkB5nZ0uOBa6Gy7LQGBuZWpIUp921ZEXBHJLyNQ6DcRrZYwRCLXclvPPXwai1JEzx2O1vIIZfB59waaPdL%2B3hrTpgeciFHz4NMWcxdgn%2B4pQ%2BfHZrNI%2FIRuzKvv7r3QyH9j2g5DXT7j4LmV6%2BbQXJ5oMJV%2B2CYK9UtgCogSlSWsmJZZ%2FKM7BM79%2F0jKtyJsts0UlM0172jSyMgR27NrTe%2BSchtsQVgPG1fuVGOJ3Y3mmmXVqyRCja%2FV8JGUGpFDpSxqfbmWM1GXWcSDK6ZvNxkYRTlmXvcOaRv03vwW01sOipUQZLgZFP3aPBHuyh2YEVZxZIpMOYCbjkWIy%2BSXr4VAxroyLexI32X5U3xRvEi4MJ%2BUCzXeWsDJBmZRbAdE%2FolMnQyaSPR%2BSy7gYvLv6jbcW1ZvhNk399def3vYLWEPkAjFjJ7FQKKsfASTbB1PzaEnziiZsuEP%2B7Hb7571Wq5uOLwYilRNq64m%2FQKWMn30fpucnDOXO0n7wTu9QUy74KfIkxW3QleNhcJZE6jyi%2BuRSL0vp5upH3f3VMPjKr8EGOqUBB0jBdFZo9f6nJmAN6kPOAxkfTz0ueib7ITDNvRl0ojBrCnGCuM92R0nxrKgavIEs%2FwrCAo2z8l7sCxBXdO4idZajpt5i2aaZTFN4lFJgA05V%2FULfiLvoFNDqwc5teK2IbqUaS%2Ft3%2FSyRJK%2BYgLmYr%2BQatPgj1EcHwOarai8RkXlJJs9CkO%2BMCcBbgDOqpzePg0%2BxEK%2FNnr%2FX5Y90U757vk6F4fUg&X-Amz-Signature=679673aa8b63ccf2c2613185e214d9274d8242537d230da039bf0a76d4891bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
