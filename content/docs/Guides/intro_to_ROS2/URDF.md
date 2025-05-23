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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMX5XIE5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID%2BjNyyJ2kw7tOQco43frgUSIe7fEfyPV1IN8ymYP%2BcVAiAs%2BzP6o8S8Sa5jLLxnWzAtzCS5NeydVqGknRju51TZrSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvQdVfytA5lruVTqjKtwDD1QqzTmkr2aDrg1Ufdh2qEYlgFPb51S6qX1eS1qpDQDPXe%2FObjgbUbTS4WIcsIdVEVSoOK3LzQgy9onJes6xyzQvl8vCCiAFkpOpTpQgLtvb4kQMiiYN4qRego%2B9L9Nvshr%2BVtadSmEBCJWE4UvbN625mOreajGfDoCcTOVR7SDp5pjSfEOw0xbTuQvtzUtVo60A6nGEVBn9qn3o0WCI2%2FSlHBmDQ3CYMY1nqIVz3YhixJvVuMxLLDo8bXIAtOIenmyQbLtj88Jj0CMRMmP59jfRgbYF01cfSOS05xYQB5ctdzo4bMh%2F5kLBLFd4XukCX4OJq9zom%2FGUuHPaMYVSoYCmjWacBGvZLjDokGJjqDWGy1UKkd6oVndtWYQtyVlK%2FegokYJAOTVstmvzhZSCtKTSLJYpnG2nEPSxwD8Gz0RMEhoz7SZh6KaPX17C5dSXRM58R%2BYsBSm%2FrvoHgBPyZQVsWVZIV2J0Kko%2BywQ6YQKscvbZo8LtFs4nthTTPz69G9vbCkIL4kicLQjIJaf%2FjSTMCmrzp0eCG9%2BW0LxxsmtXpZmaO6nQWD%2BiZQybgjXK%2FGM5uywDDsioi4Lp3dMBu5OmCAVNHBu8BZBGzv30ZlDDT6W7QcO%2FCuJaiC4wrcK%2FwQY6pgGVzmRVUOPk0eqbMk9NN938NzrlNW%2BskTK%2BkP89%2F%2BDSZXP7lB3AFhee3r49afDFq7lPihKAk5pD%2Bpv1A1HMJfs83H0vjSGdg4g8kTZvmbtRGWaLwGXL1iCB%2FtzrsH2CdpB9jnukso1FQSHvpWLsU4Kbk8NIdwro0pSKkh0PHrPKFDKlUNTG5FzHFWuD1i%2BPpx%2BPLS%2BeOcL4AT14UGcr1n3yik%2B1J9%2FQ&X-Amz-Signature=147bd364ddc74c71dc1958348fc1597e078cf8e364e4f9675dce897049d660f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMX5XIE5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID%2BjNyyJ2kw7tOQco43frgUSIe7fEfyPV1IN8ymYP%2BcVAiAs%2BzP6o8S8Sa5jLLxnWzAtzCS5NeydVqGknRju51TZrSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvQdVfytA5lruVTqjKtwDD1QqzTmkr2aDrg1Ufdh2qEYlgFPb51S6qX1eS1qpDQDPXe%2FObjgbUbTS4WIcsIdVEVSoOK3LzQgy9onJes6xyzQvl8vCCiAFkpOpTpQgLtvb4kQMiiYN4qRego%2B9L9Nvshr%2BVtadSmEBCJWE4UvbN625mOreajGfDoCcTOVR7SDp5pjSfEOw0xbTuQvtzUtVo60A6nGEVBn9qn3o0WCI2%2FSlHBmDQ3CYMY1nqIVz3YhixJvVuMxLLDo8bXIAtOIenmyQbLtj88Jj0CMRMmP59jfRgbYF01cfSOS05xYQB5ctdzo4bMh%2F5kLBLFd4XukCX4OJq9zom%2FGUuHPaMYVSoYCmjWacBGvZLjDokGJjqDWGy1UKkd6oVndtWYQtyVlK%2FegokYJAOTVstmvzhZSCtKTSLJYpnG2nEPSxwD8Gz0RMEhoz7SZh6KaPX17C5dSXRM58R%2BYsBSm%2FrvoHgBPyZQVsWVZIV2J0Kko%2BywQ6YQKscvbZo8LtFs4nthTTPz69G9vbCkIL4kicLQjIJaf%2FjSTMCmrzp0eCG9%2BW0LxxsmtXpZmaO6nQWD%2BiZQybgjXK%2FGM5uywDDsioi4Lp3dMBu5OmCAVNHBu8BZBGzv30ZlDDT6W7QcO%2FCuJaiC4wrcK%2FwQY6pgGVzmRVUOPk0eqbMk9NN938NzrlNW%2BskTK%2BkP89%2F%2BDSZXP7lB3AFhee3r49afDFq7lPihKAk5pD%2Bpv1A1HMJfs83H0vjSGdg4g8kTZvmbtRGWaLwGXL1iCB%2FtzrsH2CdpB9jnukso1FQSHvpWLsU4Kbk8NIdwro0pSKkh0PHrPKFDKlUNTG5FzHFWuD1i%2BPpx%2BPLS%2BeOcL4AT14UGcr1n3yik%2B1J9%2FQ&X-Amz-Signature=28b685ceca7a4501ae2e52ea2c3ef6c5b66f2cf3e4efbbb2de1eb40d722ef651&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
