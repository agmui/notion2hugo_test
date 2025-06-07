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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILOSWWQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2J6PA1j%2FnbElSaalwCghPI6UzQNuW2lLm2CnaBhvSQIgJ%2B3BVarMsAaPYOJ6QbF9zFzrrYkgaRMYne9WT3rW52wq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJWn5eA8BMV9cUztrircAynCE51mVMOonVzpiNJT19h56Jm3a%2FD%2BcV%2B7tGkqZyQMODxgb7n4DBepPs67vlMqJx7BgFVNkayDzPS%2FwvZ8N3pVp0H64ptOzcMss%2F2RWPSOXQTJlrmT2JgOyLBO8YZ143RcZ794hSepNm8txaT4vQKSnstWQDEvC3x9tu%2FFMgYVo5%2BUCKB86yi7mxxxomgkkUPYgs5x%2FhPRs2bG%2F3zvRUrWntvItfRpYlzJQPrroBviWw%2FA8sNOBMBwRVsz5I4gYe7LOseeKxZfzUYC0Mse92vThx28au9TQETIKJTLaHulypS0mUVaBWVn4MAst8aM0PZqpRc7ieAMDFpzi9tqzMczfZ4ZibO6Iv9veRhduYqAADFHiq4xd9wqHLNzcSl8ordV9uqPnHCyJ%2F5Ug2qyE4zQGT7E5fIRxo6b%2FDYumfiAyuvhUOxTpAaCIW9%2BCqtSa6Exbzj%2FhF%2Ff1Mw%2BazxbPU2G2PRIDbmIcMt5uB6BTeVjt8V1Jy%2FSh96awQ20z0YaaT5AD82L1DitLRiSwFW7cS4Yo9WMR%2FyY6QMQmIng7WiIJuuBBkrnFx00uPQ941VsgsB5Dy0os0Iihffa2e9MOhFj6lcE%2BsAhUZWGIH7NU7KKO4F%2BGEtCDIw%2B9DgnMIeQj8IGOqUBmuMenKq8M%2BD5Cxy4q7%2FhIqKNN4CZ%2FMu35%2BDvTmwXYpfBHfD6VJck8tPPHv%2BwPPdmRBS8SA0kSsPHraYMQnQ1fMkCyZK7zG3GfVY65hGXRFXTQkPcAIvvhNdeMRi4gn5jP9XRIySrSpkCiJaGk7U0%2B8reogMiwLZYogqowk2vAhMNnw9SEHehul%2BIK0LZo6wpt16Q0tvI4ElNS53J8%2FsHo1OX57je&X-Amz-Signature=0cb6abfc023a3551155db03837b665c91e7272dde83bba700b8da156a1d14aee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILOSWWQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2J6PA1j%2FnbElSaalwCghPI6UzQNuW2lLm2CnaBhvSQIgJ%2B3BVarMsAaPYOJ6QbF9zFzrrYkgaRMYne9WT3rW52wq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJWn5eA8BMV9cUztrircAynCE51mVMOonVzpiNJT19h56Jm3a%2FD%2BcV%2B7tGkqZyQMODxgb7n4DBepPs67vlMqJx7BgFVNkayDzPS%2FwvZ8N3pVp0H64ptOzcMss%2F2RWPSOXQTJlrmT2JgOyLBO8YZ143RcZ794hSepNm8txaT4vQKSnstWQDEvC3x9tu%2FFMgYVo5%2BUCKB86yi7mxxxomgkkUPYgs5x%2FhPRs2bG%2F3zvRUrWntvItfRpYlzJQPrroBviWw%2FA8sNOBMBwRVsz5I4gYe7LOseeKxZfzUYC0Mse92vThx28au9TQETIKJTLaHulypS0mUVaBWVn4MAst8aM0PZqpRc7ieAMDFpzi9tqzMczfZ4ZibO6Iv9veRhduYqAADFHiq4xd9wqHLNzcSl8ordV9uqPnHCyJ%2F5Ug2qyE4zQGT7E5fIRxo6b%2FDYumfiAyuvhUOxTpAaCIW9%2BCqtSa6Exbzj%2FhF%2Ff1Mw%2BazxbPU2G2PRIDbmIcMt5uB6BTeVjt8V1Jy%2FSh96awQ20z0YaaT5AD82L1DitLRiSwFW7cS4Yo9WMR%2FyY6QMQmIng7WiIJuuBBkrnFx00uPQ941VsgsB5Dy0os0Iihffa2e9MOhFj6lcE%2BsAhUZWGIH7NU7KKO4F%2BGEtCDIw%2B9DgnMIeQj8IGOqUBmuMenKq8M%2BD5Cxy4q7%2FhIqKNN4CZ%2FMu35%2BDvTmwXYpfBHfD6VJck8tPPHv%2BwPPdmRBS8SA0kSsPHraYMQnQ1fMkCyZK7zG3GfVY65hGXRFXTQkPcAIvvhNdeMRi4gn5jP9XRIySrSpkCiJaGk7U0%2B8reogMiwLZYogqowk2vAhMNnw9SEHehul%2BIK0LZo6wpt16Q0tvI4ElNS53J8%2FsHo1OX57je&X-Amz-Signature=69f5c62764088c3eeb4e567e439d7df477b51fd62f17ac80f049091167ccf09e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
