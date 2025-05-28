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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTVENOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvD4dNviFAwM1XmW2fGAYQ53oZVrYO%2Bp6hBmayluYShwIhAMDWNW98eozYi%2F6ox7x5D68K4NKX%2Fo5bndlcB%2BZ5Hk5QKv8DCG8QABoMNjM3NDIzMTgzODA1Igx6A289QKHTmFODNnAq3ANuxfDnA%2FYzn%2BQahd4UZzuAHhkFuz%2BvlKmsBKo%2FTaV74vNE%2BEqnOdnR1ibZ9KUgKesE7Uw8%2BdgqJ2uBTdvToPbceasLrstfCH%2B69habn4lfDsJTgfpnf%2F6BWOMK0irJjdBGtf%2Fj2sfOf%2B1mMq7HFhWNFVXTgKnGTxbpjJL%2BwC1dZOyJD3wCTFErcoCZFtfQiu%2BtTm1TjOoHZy46nQoJjapmQzo6ga%2BbE%2FBpmrmSEo7Ad983mYdkw8JNFIN97duXQdN8I5oiGo4fg1uUWBb4qnnmWOdokHWGofQHX6pEFuaSaE5%2FvlFP2kxEwtJ8jmTYGf6MEQWvYIuU%2F1u57MgY1K4gtm4UhJSw0djIw9klvOPWYf%2F8XzMpQP0eq8S5UiRvHDoiW2Em%2F0VvqCwbB%2BVbF33tWiMPBAgIq8Eo6cdTL3x05zFvgJyGz%2BUus%2BN0TqIHX%2Fw%2BqNKdH6mz2HDqGvYiNFX7BmNKR9CMxSifhyaNtumDAioN0zecKGfaJQ97%2BE%2BLKHTo68OsZLz3qi5k623SNlytA4F3ihASUshjO3hE%2BCrsoofyVUbeQnwzfyNZbkCmpi03sW8rCrBCv75Z8U6fhKoDwlDJVwC%2BMn4OqZQKdqkHzOATZ7B4UySi2S27BDDAw9rBBjqkAbJ4%2F04uS0%2BY0uZ4B9W3dewOudBtSPFVpkQhBcKSjpxu1RKWNxhEbMVGZOLLmDCBKb1pgHF04%2FciXM6YX3CK6LK4oJTMcVdfasVioKA1sc0HttpwI5mhRMtwkTL5EWF7vZgidAl2YhOX3JO7cdrImKZJ7PLf6xuqsPUZQUd%2BrVURZ2Q1xid%2BYtaMKJlqnZGEvtmRT7C1rVzF2qcPAxlgovkxtfSE&X-Amz-Signature=00e70ad37e108497587ac51f3a2a3c882421194bdf12783b1a9bef750a83f7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTVENOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvD4dNviFAwM1XmW2fGAYQ53oZVrYO%2Bp6hBmayluYShwIhAMDWNW98eozYi%2F6ox7x5D68K4NKX%2Fo5bndlcB%2BZ5Hk5QKv8DCG8QABoMNjM3NDIzMTgzODA1Igx6A289QKHTmFODNnAq3ANuxfDnA%2FYzn%2BQahd4UZzuAHhkFuz%2BvlKmsBKo%2FTaV74vNE%2BEqnOdnR1ibZ9KUgKesE7Uw8%2BdgqJ2uBTdvToPbceasLrstfCH%2B69habn4lfDsJTgfpnf%2F6BWOMK0irJjdBGtf%2Fj2sfOf%2B1mMq7HFhWNFVXTgKnGTxbpjJL%2BwC1dZOyJD3wCTFErcoCZFtfQiu%2BtTm1TjOoHZy46nQoJjapmQzo6ga%2BbE%2FBpmrmSEo7Ad983mYdkw8JNFIN97duXQdN8I5oiGo4fg1uUWBb4qnnmWOdokHWGofQHX6pEFuaSaE5%2FvlFP2kxEwtJ8jmTYGf6MEQWvYIuU%2F1u57MgY1K4gtm4UhJSw0djIw9klvOPWYf%2F8XzMpQP0eq8S5UiRvHDoiW2Em%2F0VvqCwbB%2BVbF33tWiMPBAgIq8Eo6cdTL3x05zFvgJyGz%2BUus%2BN0TqIHX%2Fw%2BqNKdH6mz2HDqGvYiNFX7BmNKR9CMxSifhyaNtumDAioN0zecKGfaJQ97%2BE%2BLKHTo68OsZLz3qi5k623SNlytA4F3ihASUshjO3hE%2BCrsoofyVUbeQnwzfyNZbkCmpi03sW8rCrBCv75Z8U6fhKoDwlDJVwC%2BMn4OqZQKdqkHzOATZ7B4UySi2S27BDDAw9rBBjqkAbJ4%2F04uS0%2BY0uZ4B9W3dewOudBtSPFVpkQhBcKSjpxu1RKWNxhEbMVGZOLLmDCBKb1pgHF04%2FciXM6YX3CK6LK4oJTMcVdfasVioKA1sc0HttpwI5mhRMtwkTL5EWF7vZgidAl2YhOX3JO7cdrImKZJ7PLf6xuqsPUZQUd%2BrVURZ2Q1xid%2BYtaMKJlqnZGEvtmRT7C1rVzF2qcPAxlgovkxtfSE&X-Amz-Signature=fc25a1ccc4c6a66d32147579608fbcb357a9b83fd2056fcdb9226423b833357c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
