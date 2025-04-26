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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUQLONX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC60iIqnPq0%2BdfVpKhkxG6K%2FUEKJuReOc0kOBaPcyyspwIgCoMtjBmVoTYU2QcFFFmR0%2FW4c3clEp%2FeqyuM4szWbe0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBNtuku%2FXml6OeGORircAyyOPaFP5dRxWwV%2B%2FtetTkVDgY8clK2IqS2Tql%2Bo8QaADvqeJr50ohr6g9IDqmgaQ%2FA5mbs8lPYK%2FxE7CtxHPHgHb5jmFs8SEW%2F2zjqhpe5F96oq%2BTZcTsV051Txe%2FurDMlz%2BBStkF1XL7nctW%2FkskDnSJvYmJGnv9iBJf%2F3bdcaazBejQyKVrseE0Fxr9%2FiO4FvJ47sN7SXgkHLwOoN7GbGoCwSiTzdvdP%2Bb6EYlVKmNdvlNJ13p8z2OSMU9I%2BW5OvGhtbvCIchqTsL9%2F0IFUV4lwJv5zIqr9YqRL1EJvoSR892SGqlFwdCpjuyTRgdYYZ3DE%2Bz3HjEq0FC2eX3Wgmfc9xhccCKYfiMeOk7nTsHXPl1jb0uw5F697nGPzy01haUml12eTvvHcddpCuqOwg5pcpMge2PyVp9tVoyuy0KwynWpfQF%2BvBcx58%2BlNzM1rdgJPskGZJt8vMd6fJ1BZISHmHBvpCWO8x8uwhg5t71ly9fBPpq%2Fn62p4JgSLMfJ7Nnsb4KHJaTGLtQiwGPeIFigu%2FDt0ItSZAcFmegscqF7m8YXufkALbL%2FaB9Mz8LOTt8ThRtdsewGqNhiq9XgVFW9mWo44vj%2BKRP6lc3RqIt7MT7Ha0fDGGjzLyOMPPms8AGOqUBKKh%2B4%2BQXDIc6uH%2FXiqeg44Q%2FZ2nGWGZXsksni8Ltvs16uVv%2FYs6eSRDQAEBRZdmgU8BALrB%2B2sDzwd%2BKDFqm9i2PYvIIT20XtkbmNOQ3QUBGpzfdhdNFHsIfwxdd%2FksIeAkVZzA%2BrofLLD8dKjtTbMXC6f0unH1ITtvBNXqA80c89uDYlWWCiy8fjmCBwCcaqY4NHmovRISe4fIpLaUAsNyv7c%2Ff&X-Amz-Signature=f33fb8c004c592de8e61579c2e3219ad890bc0d4bba8bfccd5ffd31242cc7540&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUQLONX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC60iIqnPq0%2BdfVpKhkxG6K%2FUEKJuReOc0kOBaPcyyspwIgCoMtjBmVoTYU2QcFFFmR0%2FW4c3clEp%2FeqyuM4szWbe0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBNtuku%2FXml6OeGORircAyyOPaFP5dRxWwV%2B%2FtetTkVDgY8clK2IqS2Tql%2Bo8QaADvqeJr50ohr6g9IDqmgaQ%2FA5mbs8lPYK%2FxE7CtxHPHgHb5jmFs8SEW%2F2zjqhpe5F96oq%2BTZcTsV051Txe%2FurDMlz%2BBStkF1XL7nctW%2FkskDnSJvYmJGnv9iBJf%2F3bdcaazBejQyKVrseE0Fxr9%2FiO4FvJ47sN7SXgkHLwOoN7GbGoCwSiTzdvdP%2Bb6EYlVKmNdvlNJ13p8z2OSMU9I%2BW5OvGhtbvCIchqTsL9%2F0IFUV4lwJv5zIqr9YqRL1EJvoSR892SGqlFwdCpjuyTRgdYYZ3DE%2Bz3HjEq0FC2eX3Wgmfc9xhccCKYfiMeOk7nTsHXPl1jb0uw5F697nGPzy01haUml12eTvvHcddpCuqOwg5pcpMge2PyVp9tVoyuy0KwynWpfQF%2BvBcx58%2BlNzM1rdgJPskGZJt8vMd6fJ1BZISHmHBvpCWO8x8uwhg5t71ly9fBPpq%2Fn62p4JgSLMfJ7Nnsb4KHJaTGLtQiwGPeIFigu%2FDt0ItSZAcFmegscqF7m8YXufkALbL%2FaB9Mz8LOTt8ThRtdsewGqNhiq9XgVFW9mWo44vj%2BKRP6lc3RqIt7MT7Ha0fDGGjzLyOMPPms8AGOqUBKKh%2B4%2BQXDIc6uH%2FXiqeg44Q%2FZ2nGWGZXsksni8Ltvs16uVv%2FYs6eSRDQAEBRZdmgU8BALrB%2B2sDzwd%2BKDFqm9i2PYvIIT20XtkbmNOQ3QUBGpzfdhdNFHsIfwxdd%2FksIeAkVZzA%2BrofLLD8dKjtTbMXC6f0unH1ITtvBNXqA80c89uDYlWWCiy8fjmCBwCcaqY4NHmovRISe4fIpLaUAsNyv7c%2Ff&X-Amz-Signature=9531c99e3f1a461f63873b67c1252a29f466aa4007b3d8876171c9ec22aad325&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
