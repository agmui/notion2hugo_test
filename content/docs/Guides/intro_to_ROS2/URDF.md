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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6OUEB23%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFXQjkvmBYZmIfNC3bEbr5rmJJO%2BhpphEPyhKuTFhTUgIgCALzsSjReL6KZ0mFwfbGt6hPvHu4HGREnvCb0rVARloqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB0qZMLwT7jpRuO4yrcA%2B3jbUJuVxds4%2FasCHdIIIgF%2BpiawR0E4gilf%2BXbBll8%2BArRRNJ0VVLMV8r50gVn%2Fs%2FSS9Zxc%2FCXDYLgOLBev4Ho56slr8Jcaqfp9zMnKpSrZ7PdxQVl3gxU%2BnMe2pRqb9pMDzRDVks29se2VY%2F0DrGa2BKKlgzS%2FHdT0l%2FV0xU9QV0XelAj5QaPNkJtdjB%2FDmhXJBLgh1Ba4PRx54Jv27wn9P3r3b5%2B3TQTsC4C0e%2F%2Fp9rChtKSvbE74m0M1gWnNxIBcSRM6%2F3sGdjb07AawfD90FnMyRIVJQthYyygqIwy0%2BrXD5evVC%2FrRdEpapMKRk0wA2lG%2B6juyGJm5JXGR8ys%2FyNPSxabCZzXFM7%2FlJ%2Bf9zSWwv%2BMGlIRfRREjd1a2eY70f7gITZikI5gBWvV00hpYAnWo4CHP1Mgr%2B%2F1GenK52GM4F%2BBa7%2FdzIYEG4l7DGpY8PnVXvhOry72appkfnzUBCqoJMt6tgiNWovESyf6y8M8ibeEBZmO4SdhTCaaXOgdZ2psFrlXwqAm9p3LKYxCGpmFs04dYLuk7EFLEgJnLRWqtHd8opJo8oPZg%2BcaDMdXMRc0%2Bh7KxnnUGPefOEbioIJNW1r61NbU1wau9A%2FzdxfdfCBqFLSvKzzdMPju9bwGOqUBXZlf6rfUHw94b04pXyIdrKso8CPY73NR%2B5YYrd7YW42nUSEAsa1DrDHf0rmvoti0M0q%2Bh%2BBaFGYyjayqTLPaZyY%2BcQcnS78wM2WU9chL%2BZ750bsXnrJDaHBG4K5ClQTYC%2B7WeCmpSjYPwMaCa4PzyFDbKO7YcY1tEo0R3P4ikBAlyTL9LNsF60KhESUaUIUiDVEOtof26XkAGYnXovbgGcvZbgbN&X-Amz-Signature=3d27b80cbd7cb24540595edca6247118d110bb8e78a03cefb19953c2783b1a81&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6OUEB23%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFXQjkvmBYZmIfNC3bEbr5rmJJO%2BhpphEPyhKuTFhTUgIgCALzsSjReL6KZ0mFwfbGt6hPvHu4HGREnvCb0rVARloqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB0qZMLwT7jpRuO4yrcA%2B3jbUJuVxds4%2FasCHdIIIgF%2BpiawR0E4gilf%2BXbBll8%2BArRRNJ0VVLMV8r50gVn%2Fs%2FSS9Zxc%2FCXDYLgOLBev4Ho56slr8Jcaqfp9zMnKpSrZ7PdxQVl3gxU%2BnMe2pRqb9pMDzRDVks29se2VY%2F0DrGa2BKKlgzS%2FHdT0l%2FV0xU9QV0XelAj5QaPNkJtdjB%2FDmhXJBLgh1Ba4PRx54Jv27wn9P3r3b5%2B3TQTsC4C0e%2F%2Fp9rChtKSvbE74m0M1gWnNxIBcSRM6%2F3sGdjb07AawfD90FnMyRIVJQthYyygqIwy0%2BrXD5evVC%2FrRdEpapMKRk0wA2lG%2B6juyGJm5JXGR8ys%2FyNPSxabCZzXFM7%2FlJ%2Bf9zSWwv%2BMGlIRfRREjd1a2eY70f7gITZikI5gBWvV00hpYAnWo4CHP1Mgr%2B%2F1GenK52GM4F%2BBa7%2FdzIYEG4l7DGpY8PnVXvhOry72appkfnzUBCqoJMt6tgiNWovESyf6y8M8ibeEBZmO4SdhTCaaXOgdZ2psFrlXwqAm9p3LKYxCGpmFs04dYLuk7EFLEgJnLRWqtHd8opJo8oPZg%2BcaDMdXMRc0%2Bh7KxnnUGPefOEbioIJNW1r61NbU1wau9A%2FzdxfdfCBqFLSvKzzdMPju9bwGOqUBXZlf6rfUHw94b04pXyIdrKso8CPY73NR%2B5YYrd7YW42nUSEAsa1DrDHf0rmvoti0M0q%2Bh%2BBaFGYyjayqTLPaZyY%2BcQcnS78wM2WU9chL%2BZ750bsXnrJDaHBG4K5ClQTYC%2B7WeCmpSjYPwMaCa4PzyFDbKO7YcY1tEo0R3P4ikBAlyTL9LNsF60KhESUaUIUiDVEOtof26XkAGYnXovbgGcvZbgbN&X-Amz-Signature=cb1585f007c426abfe534d96b8375c4b696cc013805ab37b3f36531e371e7c86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
