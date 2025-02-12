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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZ2WX6M%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6DZDORxi8JlCwubIuGryXcRqm4JvCuNJusE6K5NRD4AiEAigqjH7ipa%2BNyDoblZNz9KH%2Fkk3zw%2F6qBfGtaiBba0pgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg7M%2BaDHLGaZmql2ircA%2F5qh%2FJT2R0A3V5d0mNkT0WNukitZBQPp8oQVxa0Sjr8coZiJ03Yi%2BIFsCAFwwGEBXpRzWqivtpxlRDmJign34Jw04xJ6qpnXNg6ZKxCfoiFThoVJLCJSBti2jUB2tQBIn9vWF6%2BxwphtjEdY3hmtEQ0It3GnQMPpyhcgUbLtI4Mf5CKBhcA%2Bgq93XIMVYmVcUkrxJmehvLAOVpNGiHdzQsQRkOOjS7fBryLoNtTA0R1jMEjV%2BNOFW0T6JUKxhen%2Bh8JrfZcLkAPqKwj%2FhmZzJjMZGhcxdh44sA0OmoDOGvrBuObzZV7sKsaHM%2BId8%2BWQuG%2B5X%2B5%2BIo8mYKGNHHnMLQQteYg%2BH9e1QfvYUMoa26PmZWTByTVF8Yv%2FBxZXLnr3kCdx%2Fqt8%2FXLBpFIf7YxNHlCa65RlCWHdy3cbQUCMA67QB6w8Ndtx2Hs2lEvJJG1MBR6LjqiVIMsExfPeyy4U2NcOsj10h0569fv36r7yqjQFIC3Peun9IogpZKxzb7ZHyy488OevFaSmhr6fkW8ybGB7Dd4%2F7z9d0pE8iNHDZy%2B932HkIzcmdoUl5SjPNk86mYsH1OrOOyQVI0FPcNBdwSeGw6NxqOmTLN98BMUvzF2WckUiQv45R0l9Zj%2BMLyPsb0GOqUBcN9b78B9fl%2B3bMbP8Q%2Bt3dINsQux365IjIfV595Ph52AM%2BUo5p2O9pBz9U8K6RTuT3SP%2BWKqs3%2FgxS54SM7Ci%2BmqUAPiPj82enZPchx0M6NI%2BeUwYMqtnDkcE0aHw21rRHA%2FgvN4JAGDp78pV4JEPm2CVCPw0ZoSgNf4AeO1zSj5OgL%2F%2BsimkEmFa9Rf0Hs7eZZuth9W9Sg63lP%2FEeSvt3Nac8GG&X-Amz-Signature=b2deeb49d1b5869007aace8d639134299b47c5d0c93aa0da3d92991cf5dc67a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZ2WX6M%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6DZDORxi8JlCwubIuGryXcRqm4JvCuNJusE6K5NRD4AiEAigqjH7ipa%2BNyDoblZNz9KH%2Fkk3zw%2F6qBfGtaiBba0pgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg7M%2BaDHLGaZmql2ircA%2F5qh%2FJT2R0A3V5d0mNkT0WNukitZBQPp8oQVxa0Sjr8coZiJ03Yi%2BIFsCAFwwGEBXpRzWqivtpxlRDmJign34Jw04xJ6qpnXNg6ZKxCfoiFThoVJLCJSBti2jUB2tQBIn9vWF6%2BxwphtjEdY3hmtEQ0It3GnQMPpyhcgUbLtI4Mf5CKBhcA%2Bgq93XIMVYmVcUkrxJmehvLAOVpNGiHdzQsQRkOOjS7fBryLoNtTA0R1jMEjV%2BNOFW0T6JUKxhen%2Bh8JrfZcLkAPqKwj%2FhmZzJjMZGhcxdh44sA0OmoDOGvrBuObzZV7sKsaHM%2BId8%2BWQuG%2B5X%2B5%2BIo8mYKGNHHnMLQQteYg%2BH9e1QfvYUMoa26PmZWTByTVF8Yv%2FBxZXLnr3kCdx%2Fqt8%2FXLBpFIf7YxNHlCa65RlCWHdy3cbQUCMA67QB6w8Ndtx2Hs2lEvJJG1MBR6LjqiVIMsExfPeyy4U2NcOsj10h0569fv36r7yqjQFIC3Peun9IogpZKxzb7ZHyy488OevFaSmhr6fkW8ybGB7Dd4%2F7z9d0pE8iNHDZy%2B932HkIzcmdoUl5SjPNk86mYsH1OrOOyQVI0FPcNBdwSeGw6NxqOmTLN98BMUvzF2WckUiQv45R0l9Zj%2BMLyPsb0GOqUBcN9b78B9fl%2B3bMbP8Q%2Bt3dINsQux365IjIfV595Ph52AM%2BUo5p2O9pBz9U8K6RTuT3SP%2BWKqs3%2FgxS54SM7Ci%2BmqUAPiPj82enZPchx0M6NI%2BeUwYMqtnDkcE0aHw21rRHA%2FgvN4JAGDp78pV4JEPm2CVCPw0ZoSgNf4AeO1zSj5OgL%2F%2BsimkEmFa9Rf0Hs7eZZuth9W9Sg63lP%2FEeSvt3Nac8GG&X-Amz-Signature=42262cc8806d3078ee81e91d4e9627198b09f9737b674a3fb379e9e749ee3501&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
