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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT5J47W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDO%2FDsZfji5%2BNQWSH8XZAVVhkRXAKhspealxkO1cxK0ygIhAOqwop2ZJyshFBls98k9wcSO120Rl%2BIhdttdmx78s47%2FKv8DCEEQABoMNjM3NDIzMTgzODA1IgyfdWSc9JKaOqqIPckq3AMm62742fZ8JJMvUfFbR8DNlNhq%2BqWKuyyWWsCB%2Fpkg3XZbLI1uTVUqq2cYv2LHDW%2Fz3Zc2mzl2dTWRGzSFSZhjrpLogoxXNQFNtNVHN2OMl0ri7YH8RhyvAeSyhSjZqJYbwtPnWxcVDceB5Q4vR%2FLdrquooSo18zJv3vOwOljAAeOgjbGCmZB0N8u0wwqVDiZjlJnPEcxupsB1V8b41I96%2FHrNfAdUcN4GuLEcu5Oe5xbgdpc6HHocnhnH7CiVlByYcLq5bALPLr7lEOZ2GmnOmg6SZMF0S9p%2FcGnFdi5OJlVmTM15IEB6Sq%2BDOKMr4v5UqPvdi8pO8JaXtuYMZKdW5J4IUtOEQ3cIzRndSvUfpokKAXsVrJXVFtAI%2FDZp%2BinKVMMNumjDL7Rr6wmoN4U29eOqXcnZAEBRBqp8jR6JoBh01TmoHJ8AM4mNm4APv8GA%2Bb2Z6mrdvG7caW9062CYwbOQ2Oe4dw2t1P%2FJYS0GJXB%2BhwfuL5RQmZkL6Rf7%2FiFVArIPfdCpeo%2B6t%2BI5jVumVep%2BoxmViO7O9yOQ%2F5xzgyd9agXayQOOkRYfIJFABwm5BIvvyvdzFp%2FCfCTRbKzSrlHZ3WwBZsHrcqrV4v4C28xTxlxnzjzLZkadPjCys6PDBjqkAfmyMH%2FAPLs3ZotLZlMMRwmksfS58k4HI58srDSDWmySzcq0S1swYxLebRz2li5f4hfE9jrNBS8ecqbiq42wbc4CniokOaA9b9PmcwFiV2QHGeMbu1jWIOciDPXRBAamsnwASZJEK2MzXPFzZQRRakBxCeG7z5rEoWnURuwJcbGrdPWrcyg49Tajdb4NOvXuxaYKslFj7025ZtX5vCg8X%2F7hGR7x&X-Amz-Signature=4eb34a5fd2e225b85d7f4a6ea1db20c4cad783725573220cc57106b1ebc3cfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT5J47W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDO%2FDsZfji5%2BNQWSH8XZAVVhkRXAKhspealxkO1cxK0ygIhAOqwop2ZJyshFBls98k9wcSO120Rl%2BIhdttdmx78s47%2FKv8DCEEQABoMNjM3NDIzMTgzODA1IgyfdWSc9JKaOqqIPckq3AMm62742fZ8JJMvUfFbR8DNlNhq%2BqWKuyyWWsCB%2Fpkg3XZbLI1uTVUqq2cYv2LHDW%2Fz3Zc2mzl2dTWRGzSFSZhjrpLogoxXNQFNtNVHN2OMl0ri7YH8RhyvAeSyhSjZqJYbwtPnWxcVDceB5Q4vR%2FLdrquooSo18zJv3vOwOljAAeOgjbGCmZB0N8u0wwqVDiZjlJnPEcxupsB1V8b41I96%2FHrNfAdUcN4GuLEcu5Oe5xbgdpc6HHocnhnH7CiVlByYcLq5bALPLr7lEOZ2GmnOmg6SZMF0S9p%2FcGnFdi5OJlVmTM15IEB6Sq%2BDOKMr4v5UqPvdi8pO8JaXtuYMZKdW5J4IUtOEQ3cIzRndSvUfpokKAXsVrJXVFtAI%2FDZp%2BinKVMMNumjDL7Rr6wmoN4U29eOqXcnZAEBRBqp8jR6JoBh01TmoHJ8AM4mNm4APv8GA%2Bb2Z6mrdvG7caW9062CYwbOQ2Oe4dw2t1P%2FJYS0GJXB%2BhwfuL5RQmZkL6Rf7%2FiFVArIPfdCpeo%2B6t%2BI5jVumVep%2BoxmViO7O9yOQ%2F5xzgyd9agXayQOOkRYfIJFABwm5BIvvyvdzFp%2FCfCTRbKzSrlHZ3WwBZsHrcqrV4v4C28xTxlxnzjzLZkadPjCys6PDBjqkAfmyMH%2FAPLs3ZotLZlMMRwmksfS58k4HI58srDSDWmySzcq0S1swYxLebRz2li5f4hfE9jrNBS8ecqbiq42wbc4CniokOaA9b9PmcwFiV2QHGeMbu1jWIOciDPXRBAamsnwASZJEK2MzXPFzZQRRakBxCeG7z5rEoWnURuwJcbGrdPWrcyg49Tajdb4NOvXuxaYKslFj7025ZtX5vCg8X%2F7hGR7x&X-Amz-Signature=546fa2ec891f6b1d0b84cc95de3dc3c83ff8a6a93e36ac8f68b7c96cf47765ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
