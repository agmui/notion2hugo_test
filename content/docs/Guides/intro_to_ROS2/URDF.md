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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIPLKIG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDXFuquDavpZBI3RG1pDjHI1Qwne5dqxGLaIpUWNeb8BAiEArNmzl0IlzgCDQo3B8nVohP2D3OdGkemDD7FlLLmPCS4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC8Q0N%2BTAkLZJlDZLyrcA6HQWsn%2FL5175uzxaMhY%2BIpLNsEysNltHdIzjoW67lGnGxUuH%2BNdxO5iM9AkJOpUb1M2ZXBqa5a3gvtIGXBpTnPF2%2FDb3x1ony3AAVWrMJ4ro9Bo3vAyD%2F7S%2BWzB4dRbKCq89%2BPxhTb4srczhJEIlrcJpdqZ%2BkyskChSz839D%2FTKLeJ9SJh5fbYctYwLrtkdcvo8YFPApFwbdWAkUoj68%2BXRuyqnAySUhL5abzDIETldFBwNnpjjXntirvrjLDFIaMxwToFyPVeMWTbLY4W4WZwIlc5RXpvdqNnSpP%2B7LuwRNYbQv5ca8PQZBohqQZFZAykBrbeE%2B3hjZEDG7vX1rQ8z0sH1irrYljrBeYAgPwteZG4%2F7bnBJD5TB8WCl0VS9MqDhOl1gP4K5Z2N%2FAfDs0WjhlOLI4NGFqyowbUSZ3qAFhcRAyC3MNMRk328eaavREleiXUX9pWiqZmIY3zgP6zkcJOKnq22VOEA57wNCS54QDiowkNVNCdaMpv6yzgFTQNTxz9k15mCU%2FY7au5zEQsZJ8fcJ%2F6TqSqLdHgxF9BXYWfcSf6OPaTVe3wD6C7q5RPvCnasCEWtiBHyHN6FWXkEHe9E%2B4GqbpSsQS12dYHtuXASqNfmis%2BvzR7OMLe1qMMGOqUBESn6Rhtp3Z%2FmvpnRfRoOwwYmVQox6C7L9G9hOFfXcOOu5NpvLiFcNlNpBh%2FgAeWSX8QZ7wClStpkXQ0IBWdidtI5x5cW4bc7nj%2F09NH64HWFWNiWzIRUffPzhaiFsuigLb641wsdPETM3y0ONjaSmzW6ahbICgdbmcBAg%2FgkhhhDzDP3CG9wovQEM2OTVAGf%2FgOeuuC%2BtP1Qezpsd%2BPyrKtvTwN5&X-Amz-Signature=76fa608d2f08000564fc53105c98065cb1a377d35b918fb5d56a6a226e641498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIPLKIG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDXFuquDavpZBI3RG1pDjHI1Qwne5dqxGLaIpUWNeb8BAiEArNmzl0IlzgCDQo3B8nVohP2D3OdGkemDD7FlLLmPCS4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC8Q0N%2BTAkLZJlDZLyrcA6HQWsn%2FL5175uzxaMhY%2BIpLNsEysNltHdIzjoW67lGnGxUuH%2BNdxO5iM9AkJOpUb1M2ZXBqa5a3gvtIGXBpTnPF2%2FDb3x1ony3AAVWrMJ4ro9Bo3vAyD%2F7S%2BWzB4dRbKCq89%2BPxhTb4srczhJEIlrcJpdqZ%2BkyskChSz839D%2FTKLeJ9SJh5fbYctYwLrtkdcvo8YFPApFwbdWAkUoj68%2BXRuyqnAySUhL5abzDIETldFBwNnpjjXntirvrjLDFIaMxwToFyPVeMWTbLY4W4WZwIlc5RXpvdqNnSpP%2B7LuwRNYbQv5ca8PQZBohqQZFZAykBrbeE%2B3hjZEDG7vX1rQ8z0sH1irrYljrBeYAgPwteZG4%2F7bnBJD5TB8WCl0VS9MqDhOl1gP4K5Z2N%2FAfDs0WjhlOLI4NGFqyowbUSZ3qAFhcRAyC3MNMRk328eaavREleiXUX9pWiqZmIY3zgP6zkcJOKnq22VOEA57wNCS54QDiowkNVNCdaMpv6yzgFTQNTxz9k15mCU%2FY7au5zEQsZJ8fcJ%2F6TqSqLdHgxF9BXYWfcSf6OPaTVe3wD6C7q5RPvCnasCEWtiBHyHN6FWXkEHe9E%2B4GqbpSsQS12dYHtuXASqNfmis%2BvzR7OMLe1qMMGOqUBESn6Rhtp3Z%2FmvpnRfRoOwwYmVQox6C7L9G9hOFfXcOOu5NpvLiFcNlNpBh%2FgAeWSX8QZ7wClStpkXQ0IBWdidtI5x5cW4bc7nj%2F09NH64HWFWNiWzIRUffPzhaiFsuigLb641wsdPETM3y0ONjaSmzW6ahbICgdbmcBAg%2FgkhhhDzDP3CG9wovQEM2OTVAGf%2FgOeuuC%2BtP1Qezpsd%2BPyrKtvTwN5&X-Amz-Signature=0c32c7451dacea366b3bdfc2b0a9477f529ceb4431a4674a033d5d6be0443a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
