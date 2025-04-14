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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXNFMXP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSP8MbU90W8MG37UKOJYFA3ZqmUy8dX9bchlE6ZlsN%2FAiAtkS%2FtPiEDeoDFLaQa5ZVxGsWKAUmEMHaLDfKb5p3%2Bwyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM1FUAnpP8M7gjBeH2KtwDVKiPggSDeSQ8Vb8oVPrveK6TbLjibrLa65WuPEwoAXOoYrYcVw7rY1fnmv2wpe1CMw6%2F%2BKsSiWcyn2ctWxC%2BbgoJaFYV2Oe%2FwPQUaQNuK%2BM9NCkBIEKdAGUpR8K4kO9rQ0ppW2MDtv3W2OTna%2FLy5GCFF%2FB1gme4L48PLXfEzFtyOO9tAWLG5iWFPte%2Fz99vLl1MEpZ%2FxtlY3NuRGkRtNU5Mc6vYp5ViDEsF6SO%2FEn9k7boGwY8sB5u0cTJZEP88B%2Bpt2%2BLkOs9hW4sxxoHjPiSM25gf9VVlVgWA15C6oHdpCYsjeIbBt6irHtkBSn1VKFFhI%2FwAEbjFouCz8YmHKXCcjX0ambKY5CBnzFHpIFeVVkcYtDlow1H%2FSrDeoCJrR4VmNB8YELuBu1gHRRtwdGXdx3xlLdw8Qt4DLGA%2ByARI7ychTdF6EnoUUi8jS1aGHqYDOmfKK9vh39x2hDNbdoPOLPLLzm8LPWgZgWmeAhywe1wla2tUKKH9B4knWZwUQSVJkjq7syiZHNNIZ%2BEvQY9WOcFHiJWv0uAin4cF6m4Zj1p2D3eTxNRZBHdU9INt68tPfZ70YTpjHI5vR5vpqsTCovqQQtLMuDi%2BerNBv4KPq%2BSzC%2FA3bwCIjF4w8KjzvwY6pgFPVYOqRJyB%2Fh3HTaRFRglqtUKOy%2FPIVFa7oIitkR6DReI13NRDYm6GT%2FyPuQBck3glsaSwDP%2FnW%2Faw8aMQp64E%2BL%2By8Q9wtAXHXN4tYu%2FdatdiLJQoIuNYuVh%2FjiqFxJv5sBwzC4Z%2BTZnapGV5EYBZwyrxbjYdFGVhbco1USpwNg%2FSS30%2BwQoYz%2Bry8Ac2TmfsSFyS4yLWYXsE%2B5QlYiISu%2F3vALse&X-Amz-Signature=cf6d0db4baa3249d1e53d169ff31b96050443227ab0ee5b189d556993e97a3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXNFMXP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSP8MbU90W8MG37UKOJYFA3ZqmUy8dX9bchlE6ZlsN%2FAiAtkS%2FtPiEDeoDFLaQa5ZVxGsWKAUmEMHaLDfKb5p3%2Bwyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM1FUAnpP8M7gjBeH2KtwDVKiPggSDeSQ8Vb8oVPrveK6TbLjibrLa65WuPEwoAXOoYrYcVw7rY1fnmv2wpe1CMw6%2F%2BKsSiWcyn2ctWxC%2BbgoJaFYV2Oe%2FwPQUaQNuK%2BM9NCkBIEKdAGUpR8K4kO9rQ0ppW2MDtv3W2OTna%2FLy5GCFF%2FB1gme4L48PLXfEzFtyOO9tAWLG5iWFPte%2Fz99vLl1MEpZ%2FxtlY3NuRGkRtNU5Mc6vYp5ViDEsF6SO%2FEn9k7boGwY8sB5u0cTJZEP88B%2Bpt2%2BLkOs9hW4sxxoHjPiSM25gf9VVlVgWA15C6oHdpCYsjeIbBt6irHtkBSn1VKFFhI%2FwAEbjFouCz8YmHKXCcjX0ambKY5CBnzFHpIFeVVkcYtDlow1H%2FSrDeoCJrR4VmNB8YELuBu1gHRRtwdGXdx3xlLdw8Qt4DLGA%2ByARI7ychTdF6EnoUUi8jS1aGHqYDOmfKK9vh39x2hDNbdoPOLPLLzm8LPWgZgWmeAhywe1wla2tUKKH9B4knWZwUQSVJkjq7syiZHNNIZ%2BEvQY9WOcFHiJWv0uAin4cF6m4Zj1p2D3eTxNRZBHdU9INt68tPfZ70YTpjHI5vR5vpqsTCovqQQtLMuDi%2BerNBv4KPq%2BSzC%2FA3bwCIjF4w8KjzvwY6pgFPVYOqRJyB%2Fh3HTaRFRglqtUKOy%2FPIVFa7oIitkR6DReI13NRDYm6GT%2FyPuQBck3glsaSwDP%2FnW%2Faw8aMQp64E%2BL%2By8Q9wtAXHXN4tYu%2FdatdiLJQoIuNYuVh%2FjiqFxJv5sBwzC4Z%2BTZnapGV5EYBZwyrxbjYdFGVhbco1USpwNg%2FSS30%2BwQoYz%2Bry8Ac2TmfsSFyS4yLWYXsE%2B5QlYiISu%2F3vALse&X-Amz-Signature=4c4a534a82750d9207969579b713220f1be1bd23f97885f5c3fd44722c8a6d05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
