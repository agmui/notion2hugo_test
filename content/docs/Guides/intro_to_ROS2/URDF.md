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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGGN4HS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSb5hNiC4NiCZ17cYZy5ALhjWY8XN4vNk7kvCeFB3IoAiEAkgmpPDFYyTUEjjmc1h0Ho%2BPdvfABJSjqc27pu%2B8VRugqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcSfJfaj5NWkwNZUircA2LPOHwEdzvmj5vsqw%2FwtPVeJY229l%2Bc%2FGWufaB6EAwL5EEDCLQJ9U83nsBedCOqk8JbVWjNzW8vF31%2FFZz0CkRn4ttCyd2csGVr1Eb7H2O6bDXL69QkQJ5M7g4WYpClWI6%2Bkiu6QF240ct1FJUh9vLM2abWYF60TxCvJBlbEqnLxW%2F2vmmHfzXBX0ZydkJUdDW8sCV1O5w%2BMXkS5nm95xhRFM0Q16BQYXRqFjdfYd39IFQE8A7qm6gQS13BDha1R2GvTp8yXiugiolndzYvDJllP0kc2FSwNfA0On0MQg%2BLo2f%2BLOYuWdiUT8mtvePdGkCrXTkzlWJ%2ByRaRoJioSdhRjNoQIW418hXxAAlFnYeAPJMMw9pWfWeKhKCKUZkn0WJ2b77Sckbz%2FRAdYIATi5ppzD7LDNh9ESiz4CkSi6SCor5yWAZ838KOCaXkY9PUVSuRDs%2Bz6rkOdG54PXPScPgJPUz%2BzgWrcPSMSPfm1MQtaVmWimLaooOopIKfOi1MHZb9WDjUZASfXjATakmCBh9A5XkknqJd7Xw3hraVgxGDE%2FVHQdcZMXDbhkaqniDOwuzZ2woYQ29QWVmkSOjEfhQYZP0wupSct15EU0axLuerhXl556J8laf4XKEkMMrW88MGOqUBhoy8YCQuVJvyCcwEK7wqxAKJgz%2FJECJxxTc5WLEf1ZAg31qqHLAZU8uv05LLS48I5AY9xuoz0zso4K38PHdYnzmlWYouOZcwy2LIOW7aS3mBNN60%2FQZrvKhfQZxD7isImAzuy49Rbqz7XQMS1ueS59ZP%2F%2BbGV%2Fh%2BOTawO3DQWE85nBpOEgr8z4TimqiACMuefocT%2FJSr1cf3be%2F%2FdinP4Eepk59A&X-Amz-Signature=3e08eb8dc5fef6ba37953469ee337b489f53b998e28def68a0fb0c4987b53a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGGN4HS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSb5hNiC4NiCZ17cYZy5ALhjWY8XN4vNk7kvCeFB3IoAiEAkgmpPDFYyTUEjjmc1h0Ho%2BPdvfABJSjqc27pu%2B8VRugqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcSfJfaj5NWkwNZUircA2LPOHwEdzvmj5vsqw%2FwtPVeJY229l%2Bc%2FGWufaB6EAwL5EEDCLQJ9U83nsBedCOqk8JbVWjNzW8vF31%2FFZz0CkRn4ttCyd2csGVr1Eb7H2O6bDXL69QkQJ5M7g4WYpClWI6%2Bkiu6QF240ct1FJUh9vLM2abWYF60TxCvJBlbEqnLxW%2F2vmmHfzXBX0ZydkJUdDW8sCV1O5w%2BMXkS5nm95xhRFM0Q16BQYXRqFjdfYd39IFQE8A7qm6gQS13BDha1R2GvTp8yXiugiolndzYvDJllP0kc2FSwNfA0On0MQg%2BLo2f%2BLOYuWdiUT8mtvePdGkCrXTkzlWJ%2ByRaRoJioSdhRjNoQIW418hXxAAlFnYeAPJMMw9pWfWeKhKCKUZkn0WJ2b77Sckbz%2FRAdYIATi5ppzD7LDNh9ESiz4CkSi6SCor5yWAZ838KOCaXkY9PUVSuRDs%2Bz6rkOdG54PXPScPgJPUz%2BzgWrcPSMSPfm1MQtaVmWimLaooOopIKfOi1MHZb9WDjUZASfXjATakmCBh9A5XkknqJd7Xw3hraVgxGDE%2FVHQdcZMXDbhkaqniDOwuzZ2woYQ29QWVmkSOjEfhQYZP0wupSct15EU0axLuerhXl556J8laf4XKEkMMrW88MGOqUBhoy8YCQuVJvyCcwEK7wqxAKJgz%2FJECJxxTc5WLEf1ZAg31qqHLAZU8uv05LLS48I5AY9xuoz0zso4K38PHdYnzmlWYouOZcwy2LIOW7aS3mBNN60%2FQZrvKhfQZxD7isImAzuy49Rbqz7XQMS1ueS59ZP%2F%2BbGV%2Fh%2BOTawO3DQWE85nBpOEgr8z4TimqiACMuefocT%2FJSr1cf3be%2F%2FdinP4Eepk59A&X-Amz-Signature=23c2cc11054b048cc908395dda21d314f50c9c2acf3b4a956da600ca41d1d217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
