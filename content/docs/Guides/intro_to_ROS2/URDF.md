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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRQPY3C%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDmSsK%2F0JhkpHNCkcnlGCl24OTewC8WVSvbMW8aRK0mOAIhAJBFVWhpAI8V93HbvzcYZDowKHeWp0VrKDlKX2Ynx9V3KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iFx2oVH8BbZuaB0q3APx67hU%2BdMyWHnU87A%2BXG0UIHzPWun4IzAS5Ztijv6R4oWTrIVpiWK7jwCGeDGY%2FjHNwW1I%2Fv3BIyxyZZxySC0WAhgjRNvopmY0I%2BI2FTdvq2pMd%2FpojwY8nyZccSV44r8RqKmIUcDoJljRW5fHQ9VCqzJEs90C7aqbgTfz7xr5jGRZ3LyaXdkh8fTZQrmAhhvoDAvWhCb%2BkIO%2B7sMUa0Lr0CPMy1QnTAKjInmwwgHSiXjhANgV0Nfuf6gyuFTxWTb9by4yZE7Akipyj%2Bzi6hSe7rS1vNauSALrd5JNvU8DXTqNCbPJrQOtb4mSu9UA1NnDv8KhCFn4xv4HlCvDGC9HgclR1mNp9vFU32wFv2DzrdCoWmNAmPAJvkRrlCOAnLqAAhoLh%2Be2kyzpOImJmPdocv49pkQWvhCO54zv70IHeHbCYWnEWo3jbhcfgcq90xoeJsCnVWpFxGj39p%2BL68zR4IlBjfZv8HRJ0q8lrqxXT4kFBmkowTkqfAoDQXWv91L9ecqIUqjaE830Xaa5r4jchUtU2tXralvCWKtueIABBrJLL8nkA56BGWaHIEI%2BxpQkhDEzmyjAJwNrVFN8ChDtFnpASLTEBYwVBdrTqR1ZMEaUM5yQeu71yf3gyTDi%2FNTABjqkAepNULMo6LMUhbE9%2BRLcrmnU8nLDLUiRATbcR6wIL%2FsrdMR1ioU3ZoE%2FIrnZO5oAwzHt1iVteOLwHCuz2yecp6At%2BNKD66Qh7CZn1e033LEYfGtxcXayPzK%2FlCITqwuHFB%2BOF1kfq%2BpcDE9%2FavDToHL71FfnucUfu%2FtyCbJcKKXx0vdjTSUphFeEqQpZbEzDoVd8LRABkt1IJKWzd0PLEJ%2B9xYFx&X-Amz-Signature=4f3d6620a3ea684056eaf8c30c682cda6785feff67aeb76a03cace0f9fc11be6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRQPY3C%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDmSsK%2F0JhkpHNCkcnlGCl24OTewC8WVSvbMW8aRK0mOAIhAJBFVWhpAI8V93HbvzcYZDowKHeWp0VrKDlKX2Ynx9V3KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iFx2oVH8BbZuaB0q3APx67hU%2BdMyWHnU87A%2BXG0UIHzPWun4IzAS5Ztijv6R4oWTrIVpiWK7jwCGeDGY%2FjHNwW1I%2Fv3BIyxyZZxySC0WAhgjRNvopmY0I%2BI2FTdvq2pMd%2FpojwY8nyZccSV44r8RqKmIUcDoJljRW5fHQ9VCqzJEs90C7aqbgTfz7xr5jGRZ3LyaXdkh8fTZQrmAhhvoDAvWhCb%2BkIO%2B7sMUa0Lr0CPMy1QnTAKjInmwwgHSiXjhANgV0Nfuf6gyuFTxWTb9by4yZE7Akipyj%2Bzi6hSe7rS1vNauSALrd5JNvU8DXTqNCbPJrQOtb4mSu9UA1NnDv8KhCFn4xv4HlCvDGC9HgclR1mNp9vFU32wFv2DzrdCoWmNAmPAJvkRrlCOAnLqAAhoLh%2Be2kyzpOImJmPdocv49pkQWvhCO54zv70IHeHbCYWnEWo3jbhcfgcq90xoeJsCnVWpFxGj39p%2BL68zR4IlBjfZv8HRJ0q8lrqxXT4kFBmkowTkqfAoDQXWv91L9ecqIUqjaE830Xaa5r4jchUtU2tXralvCWKtueIABBrJLL8nkA56BGWaHIEI%2BxpQkhDEzmyjAJwNrVFN8ChDtFnpASLTEBYwVBdrTqR1ZMEaUM5yQeu71yf3gyTDi%2FNTABjqkAepNULMo6LMUhbE9%2BRLcrmnU8nLDLUiRATbcR6wIL%2FsrdMR1ioU3ZoE%2FIrnZO5oAwzHt1iVteOLwHCuz2yecp6At%2BNKD66Qh7CZn1e033LEYfGtxcXayPzK%2FlCITqwuHFB%2BOF1kfq%2BpcDE9%2FavDToHL71FfnucUfu%2FtyCbJcKKXx0vdjTSUphFeEqQpZbEzDoVd8LRABkt1IJKWzd0PLEJ%2B9xYFx&X-Amz-Signature=51f77dc8ee6ba3a7870ff941fb46d48358545924cea3cee0ea07858bdff5516e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
