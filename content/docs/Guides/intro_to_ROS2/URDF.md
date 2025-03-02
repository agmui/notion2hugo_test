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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDF4YJX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4%2Fzj7MJZdK0jS0uRkAKnymaqgwpCcZrqsmdcQj9avAiBTnHQ2YIX%2FCvvo1USY7oodzIK7bqJk7P%2F4I1tTb1w7qyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0qMH5mrjd87MsQ14KtwDgyirl%2B8zD33NDnukQ1KUgnbCqAlhrsPJ%2BXqjEaG20aNOb7sDWU%2F0YqnJh9o%2BpXysspj9R6fi0U3rqKTDoHEJt21LBt8DfcUAYUBsO%2FInXfZ20czJSUyKvTfJscTDQPeTZHMrxpLKrLYfuli6gZlQoD3gYt5d6X8aPzJBKfQbWym1vvvvCLNQq%2BqjMc3qqLUNXUX6%2FMIzRvgDHZiDjElqBVEnSYstTPSzV5DO4%2Bz84YkWoVZD5SsEnC7vh7LBadvMC1Bckm9bQ1oUmsfKvNIzr4horN4NI9QR3qBlDt2I5sZG6MZRTTxQCBSSiaTiMdlPRqQInBbAXEIIJXv%2FS6tpEfxonJvrgSFOvK5UI%2BA5cfLPVrKcFuVxhnTW0iGqTC3QibHarKsDBge4D3odeX6481ZlP4qg9LWSENFTUQXO4zk5mH6%2BNbi1oV%2FDoAvpuMwENbk27HwAgsCYQRyIj0%2FljR859ywORIpMhfLyRZRTdFrPVT264JSP0kmtFmEIPPrsGYFevK6jgBRxDDdnk26xk5aDKMHOwYxtzzlNzvahSboQ%2BsLDJv8wcL%2Bbatpr7UivTzAZxUXHSJ4%2FQAtqXQHea8utiPFZzlcTniWdIb8DIZgQa2lIK0z1O4w0beEw8feQvgY6pgGtHDnZgtOlF7oN3A2NWfcT1zJQO%2BwGTttzyO6knSUosTxnGDLYXfxE7TKVzVpUV5RjBMCaTcJX2gaOx%2B7NYmfRBRLXXJiLHVbrGFgcR3CTf2aNcRnOnCtvndsLhofgmHR%2B%2F4yQB6KIiEjSpytNYESjA3MA86IshHiOvKUhLnow047DAXO3t2LIZCBQvoxUCnRE6Ye%2FuMoLl7Q6ueB7aLGZCGL61tqk&X-Amz-Signature=3329348d3cea1b4596355da4f768a0ccfe7396ab666005653430f1bbfb264ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDF4YJX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4%2Fzj7MJZdK0jS0uRkAKnymaqgwpCcZrqsmdcQj9avAiBTnHQ2YIX%2FCvvo1USY7oodzIK7bqJk7P%2F4I1tTb1w7qyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0qMH5mrjd87MsQ14KtwDgyirl%2B8zD33NDnukQ1KUgnbCqAlhrsPJ%2BXqjEaG20aNOb7sDWU%2F0YqnJh9o%2BpXysspj9R6fi0U3rqKTDoHEJt21LBt8DfcUAYUBsO%2FInXfZ20czJSUyKvTfJscTDQPeTZHMrxpLKrLYfuli6gZlQoD3gYt5d6X8aPzJBKfQbWym1vvvvCLNQq%2BqjMc3qqLUNXUX6%2FMIzRvgDHZiDjElqBVEnSYstTPSzV5DO4%2Bz84YkWoVZD5SsEnC7vh7LBadvMC1Bckm9bQ1oUmsfKvNIzr4horN4NI9QR3qBlDt2I5sZG6MZRTTxQCBSSiaTiMdlPRqQInBbAXEIIJXv%2FS6tpEfxonJvrgSFOvK5UI%2BA5cfLPVrKcFuVxhnTW0iGqTC3QibHarKsDBge4D3odeX6481ZlP4qg9LWSENFTUQXO4zk5mH6%2BNbi1oV%2FDoAvpuMwENbk27HwAgsCYQRyIj0%2FljR859ywORIpMhfLyRZRTdFrPVT264JSP0kmtFmEIPPrsGYFevK6jgBRxDDdnk26xk5aDKMHOwYxtzzlNzvahSboQ%2BsLDJv8wcL%2Bbatpr7UivTzAZxUXHSJ4%2FQAtqXQHea8utiPFZzlcTniWdIb8DIZgQa2lIK0z1O4w0beEw8feQvgY6pgGtHDnZgtOlF7oN3A2NWfcT1zJQO%2BwGTttzyO6knSUosTxnGDLYXfxE7TKVzVpUV5RjBMCaTcJX2gaOx%2B7NYmfRBRLXXJiLHVbrGFgcR3CTf2aNcRnOnCtvndsLhofgmHR%2B%2F4yQB6KIiEjSpytNYESjA3MA86IshHiOvKUhLnow047DAXO3t2LIZCBQvoxUCnRE6Ye%2FuMoLl7Q6ueB7aLGZCGL61tqk&X-Amz-Signature=538b0b35e871f92e6c87b08b927eb95ae4657a9ab8aba49f836a0d0af7a84894&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
