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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZCPXUM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtNohrQKFcHbEXWQ%2Fos%2FWTD6m8Gghwws9ucHKG0gw1ZAiEA%2BH%2FJs%2BJ%2BWgL4QbROnDS09pyt3f8gkT3umMZEPvXCweYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDB7oitoePufl9Wfe3SrcA4EKijOEhXybBu0S0yxJfbm77XOUpRL8GPeXUIBv8eRVp7TKlDKShD%2B00uHxJj5hCjuf6CdRx%2B3FVZdWycHA5YoQAV2o73LTxpGlp5LHbBLS5mrW4zMBNZapwyctxWASzAXN1fkWEptrUVcTEtLYZpEC8KMePdyMr%2F%2BGxfEu1y3qC2%2FmK2nPU%2FXU1ltRf7DGZ5f8RsCC3LBU1yi4L%2BHY94OFRmFTjLO7NFROc0qA8OOsfFuRctNqqoMTvmxeHenKUj79aH7O9RBEXVt58eBx8ZXbwLu4mbTZxpHbOj6R59FBuE7wnHLW5tIg%2B2EYX2BmVCoXo%2BojcG%2B5vdsDkExAFSITbPfQDDnOZ39kgGpLf916Zd%2FIt9V2fdheU1lt6NnVva6%2BRqhNWYTaZMLSBQIHGxIixalRYv86p0cLiDETqjhcHi%2B%2B4L2irSzKBP2Fo%2Fon7INfHgc5l%2B9DU8c1aqye9EPXzqBJxPKcLfdvCygmp6a%2FT8FE9b9SLNzp46bcSMj8cJzyjTzefIU5v8%2FdnaF%2FAGd3mSUy%2FFPHQ8fombVUVCbLo12X6Il88Xzi3Epha2CXmfO7Zja%2FQfbqaJNfSwoBBqUQwtacjPMuEhjzn2q2LS3hFBSZDuI8E8jXTI%2FMMKPvwb8GOqUBzKci%2Bls7mTZKrCgP6LC8G9k6wPY7PpIIBuqb%2FVsvQNa2olPgsCagupZ53PsT5ZNVBDVK2fEJC45I5yb66zL09dXeEabfGknIXpdJTzaENvmvwKp2H1B%2FWija4zwniXqpvxtXtSe9Kui7OtcvwSeQvHnX7kfsSrhRuNUKtSF4SHSyYT%2BqQSWHcI6t%2BvBGoRBSziJzmRiOUGrw%2Fwt4dq%2BscLYktW8P&X-Amz-Signature=a336824ac49ef6b3c349545fdd7a6b9884d8768d20c74a38706e052fb11c7ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZCPXUM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtNohrQKFcHbEXWQ%2Fos%2FWTD6m8Gghwws9ucHKG0gw1ZAiEA%2BH%2FJs%2BJ%2BWgL4QbROnDS09pyt3f8gkT3umMZEPvXCweYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDB7oitoePufl9Wfe3SrcA4EKijOEhXybBu0S0yxJfbm77XOUpRL8GPeXUIBv8eRVp7TKlDKShD%2B00uHxJj5hCjuf6CdRx%2B3FVZdWycHA5YoQAV2o73LTxpGlp5LHbBLS5mrW4zMBNZapwyctxWASzAXN1fkWEptrUVcTEtLYZpEC8KMePdyMr%2F%2BGxfEu1y3qC2%2FmK2nPU%2FXU1ltRf7DGZ5f8RsCC3LBU1yi4L%2BHY94OFRmFTjLO7NFROc0qA8OOsfFuRctNqqoMTvmxeHenKUj79aH7O9RBEXVt58eBx8ZXbwLu4mbTZxpHbOj6R59FBuE7wnHLW5tIg%2B2EYX2BmVCoXo%2BojcG%2B5vdsDkExAFSITbPfQDDnOZ39kgGpLf916Zd%2FIt9V2fdheU1lt6NnVva6%2BRqhNWYTaZMLSBQIHGxIixalRYv86p0cLiDETqjhcHi%2B%2B4L2irSzKBP2Fo%2Fon7INfHgc5l%2B9DU8c1aqye9EPXzqBJxPKcLfdvCygmp6a%2FT8FE9b9SLNzp46bcSMj8cJzyjTzefIU5v8%2FdnaF%2FAGd3mSUy%2FFPHQ8fombVUVCbLo12X6Il88Xzi3Epha2CXmfO7Zja%2FQfbqaJNfSwoBBqUQwtacjPMuEhjzn2q2LS3hFBSZDuI8E8jXTI%2FMMKPvwb8GOqUBzKci%2Bls7mTZKrCgP6LC8G9k6wPY7PpIIBuqb%2FVsvQNa2olPgsCagupZ53PsT5ZNVBDVK2fEJC45I5yb66zL09dXeEabfGknIXpdJTzaENvmvwKp2H1B%2FWija4zwniXqpvxtXtSe9Kui7OtcvwSeQvHnX7kfsSrhRuNUKtSF4SHSyYT%2BqQSWHcI6t%2BvBGoRBSziJzmRiOUGrw%2Fwt4dq%2BscLYktW8P&X-Amz-Signature=72db1db4d2ff78e1dd6d44d6a296745f9d424e13242c5a64852b906d59e9255b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
