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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVPP6ZW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDedLo3LsUe%2BUxmieRJCklZclouYGbZTYqNnzEzKUUIHwIgIIngKsxujOh0TFFynzS50GpVP2EtyfTSfyoByhs3MUAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjet8M19ZYuwAZ%2FFSrcA2HrUQm9NhT%2FaMcqVq5zq8ehIMH90n2up7aZXpjHe09cFpK%2BAbh%2FB6m%2FNmioVGX8A4HVWFtOUx8LGMkxAvLeJO%2Fv%2BEM15IyC5a%2BjTPDNJcFNsnvNCbEcGc1cq7NQX24ra7FzZbdh5d1lnLndxHAq422ix8oPdc%2BJFFgTNsyvih4M0rX5Ku3MUpz9Rs02IUejix5uwtXv%2FMfscpJxQIMbNTKm5iiP20yTPgqY%2B5iWREKadSO53FR71vgP%2FqBgybWf66isSUtUu6DeHkmIklCKIv8VfHvbFb1%2BFgA9QS8Z4eDCuSZ31OZ%2B1KAD2zaEjDamXqbf0tfrxUKsQ8h%2F4BXXYvHXQp5s9YQP86080dLLWExDTeuFaNpyO4LNHO8si%2BBkfXMj3%2BFi749RFHFtEXEhP16n5ULX4f8ZmOiDig1VuFOX2DisUN%2BZTZ4t%2B%2F9aPftn%2F3pK%2BRMJKzr2LR4FMyShP9jel4OM3RgL7AgyEKgsYcB0NoqyK0kNq6H8b4vgdHT5Mrj0njBIimafWSy79IEc5xXSlD9X3TKsd0C%2FPEZdZgwBx%2FudpuxWv1gnvMQrAFcv0os2S3xAwkRLNlt0LIwj5gkSRovUTLP2Z%2FKW6kza1X2XUIzUvmLrEgR4RTBpMK3lrr8GOqUB%2ByIlAS0Zm0t5z8R%2BGxLfROC%2BDGmd8Guurj1lUc2N4D33vfGDRH29p0%2Br3iT62rDg5HXMtACFG1pgsuFpOZIMnx77BJD16PI7D8a6K%2Fln%2Bjw3VnqRVzbKkrQNdRSOkbokmtCKT1nEUo%2FPlHmZarQ14CKZPcvl5UQIZxP%2BdLWMXKJgWneqy45HLmV9mnJMhVM4Fj0lmXHied0DHIQHS1i03cKWy%2Fgl&X-Amz-Signature=55748a0f2633fa5cd69dd1449c5c977a945e5ade83d735c4f2c4417454f0e6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVPP6ZW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDedLo3LsUe%2BUxmieRJCklZclouYGbZTYqNnzEzKUUIHwIgIIngKsxujOh0TFFynzS50GpVP2EtyfTSfyoByhs3MUAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjet8M19ZYuwAZ%2FFSrcA2HrUQm9NhT%2FaMcqVq5zq8ehIMH90n2up7aZXpjHe09cFpK%2BAbh%2FB6m%2FNmioVGX8A4HVWFtOUx8LGMkxAvLeJO%2Fv%2BEM15IyC5a%2BjTPDNJcFNsnvNCbEcGc1cq7NQX24ra7FzZbdh5d1lnLndxHAq422ix8oPdc%2BJFFgTNsyvih4M0rX5Ku3MUpz9Rs02IUejix5uwtXv%2FMfscpJxQIMbNTKm5iiP20yTPgqY%2B5iWREKadSO53FR71vgP%2FqBgybWf66isSUtUu6DeHkmIklCKIv8VfHvbFb1%2BFgA9QS8Z4eDCuSZ31OZ%2B1KAD2zaEjDamXqbf0tfrxUKsQ8h%2F4BXXYvHXQp5s9YQP86080dLLWExDTeuFaNpyO4LNHO8si%2BBkfXMj3%2BFi749RFHFtEXEhP16n5ULX4f8ZmOiDig1VuFOX2DisUN%2BZTZ4t%2B%2F9aPftn%2F3pK%2BRMJKzr2LR4FMyShP9jel4OM3RgL7AgyEKgsYcB0NoqyK0kNq6H8b4vgdHT5Mrj0njBIimafWSy79IEc5xXSlD9X3TKsd0C%2FPEZdZgwBx%2FudpuxWv1gnvMQrAFcv0os2S3xAwkRLNlt0LIwj5gkSRovUTLP2Z%2FKW6kza1X2XUIzUvmLrEgR4RTBpMK3lrr8GOqUB%2ByIlAS0Zm0t5z8R%2BGxLfROC%2BDGmd8Guurj1lUc2N4D33vfGDRH29p0%2Br3iT62rDg5HXMtACFG1pgsuFpOZIMnx77BJD16PI7D8a6K%2Fln%2Bjw3VnqRVzbKkrQNdRSOkbokmtCKT1nEUo%2FPlHmZarQ14CKZPcvl5UQIZxP%2BdLWMXKJgWneqy45HLmV9mnJMhVM4Fj0lmXHied0DHIQHS1i03cKWy%2Fgl&X-Amz-Signature=1437eeaed701f22c655fd4214b9dd35bf46493f27542ce6ff92ceff8f0d86a41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
