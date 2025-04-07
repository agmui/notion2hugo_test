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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNGJ2X2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDHBgVmcpzhIyKPqHqFXHCGSk2mf7nBOcYHgF7L%2BceGAIhALEiveou3zXkUnG2b82Kt7K1hyiqSEcbBMv%2FeRpl4cUrKv8DCGcQABoMNjM3NDIzMTgzODA1IgzVK9%2B2awTFq1jUx90q3APv%2BSTh6gECH75o4mnhbbrtQ1PHSLySxr5ILpqEgsC5uVrNcGM3bTYXyp7oCmf%2B1dPseyTiglXxAXp9CxL8En7L6zU4nU10FcpF6xMnCtDK7lWqaIm%2BLuZXqgjRrjI17dXS49ksDhCgxhIyyvEzOz8i4jlu%2B8AI67nVU22z8okfkakm3At4LxIukqKpNhwLBwEWpc1EO1Okr4ZMglQRbpSEhP3OUSgzQq4h9RsgH93cabm%2FNhEAUHqz9SnEvRA2c2Gf9741ozyucXVX5sI6XaRvnLclaZ43CKpbv1BQNRrzx0NZ%2F6ir3zGE3%2F%2F4DkEgePbo5LLLZQD5jdvyPLWRQ5BYsArvkFPy5hme%2FKopKOSredwsFZQfvqGN8PVahX8wn8q3Ai7YGtyXK98IkWsP9%2BZhOEV1gdOm1SmjjkPasqE6MdrTW%2BcjhwAOCL3H%2BYfEahNaidZtNZWnDNKS8pFVkKO%2Fu8A8EdX1aG3paRWrnluZ22JIdnmiZrXb282ZM%2B7f20u91fDmnfMTp%2BOF%2FvllkEpJQMNwyLW%2FVdox2VGkapCZRWBC%2Fq4eggA9W6Y2mDEm3kSdLwsF4fF81O6VdCvsJz1vkRSOUNeSeLW9Ni%2FpnI507KIG2VrljXIVeE5NTDDWn9G%2FBjqkAeMh1ZEyhCkmn%2BPoszQWMElW1%2Fkcly8x8n%2BYa0fxx544lZ%2Bda5bvJgp11ynwm%2FuKlry0L9DBefDhxgLo5TRWqrEmSU6PrG9Fz%2BmgCRuplG1FDmQCURCCDYTQ8UCcP3iQWU7K0S7l%2BPCTCRyCFi%2FywdNFjfC57UKHFAl3MPu4z8A4wk%2BnXte58VAOAxXLMTa85VtLd2R9cHsvFSezFC%2BRjFtz3eDu&X-Amz-Signature=2485c77880f140990b622168d223fa63b76d62447a7131f4e57151daaa3b54d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNGJ2X2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDHBgVmcpzhIyKPqHqFXHCGSk2mf7nBOcYHgF7L%2BceGAIhALEiveou3zXkUnG2b82Kt7K1hyiqSEcbBMv%2FeRpl4cUrKv8DCGcQABoMNjM3NDIzMTgzODA1IgzVK9%2B2awTFq1jUx90q3APv%2BSTh6gECH75o4mnhbbrtQ1PHSLySxr5ILpqEgsC5uVrNcGM3bTYXyp7oCmf%2B1dPseyTiglXxAXp9CxL8En7L6zU4nU10FcpF6xMnCtDK7lWqaIm%2BLuZXqgjRrjI17dXS49ksDhCgxhIyyvEzOz8i4jlu%2B8AI67nVU22z8okfkakm3At4LxIukqKpNhwLBwEWpc1EO1Okr4ZMglQRbpSEhP3OUSgzQq4h9RsgH93cabm%2FNhEAUHqz9SnEvRA2c2Gf9741ozyucXVX5sI6XaRvnLclaZ43CKpbv1BQNRrzx0NZ%2F6ir3zGE3%2F%2F4DkEgePbo5LLLZQD5jdvyPLWRQ5BYsArvkFPy5hme%2FKopKOSredwsFZQfvqGN8PVahX8wn8q3Ai7YGtyXK98IkWsP9%2BZhOEV1gdOm1SmjjkPasqE6MdrTW%2BcjhwAOCL3H%2BYfEahNaidZtNZWnDNKS8pFVkKO%2Fu8A8EdX1aG3paRWrnluZ22JIdnmiZrXb282ZM%2B7f20u91fDmnfMTp%2BOF%2FvllkEpJQMNwyLW%2FVdox2VGkapCZRWBC%2Fq4eggA9W6Y2mDEm3kSdLwsF4fF81O6VdCvsJz1vkRSOUNeSeLW9Ni%2FpnI507KIG2VrljXIVeE5NTDDWn9G%2FBjqkAeMh1ZEyhCkmn%2BPoszQWMElW1%2Fkcly8x8n%2BYa0fxx544lZ%2Bda5bvJgp11ynwm%2FuKlry0L9DBefDhxgLo5TRWqrEmSU6PrG9Fz%2BmgCRuplG1FDmQCURCCDYTQ8UCcP3iQWU7K0S7l%2BPCTCRyCFi%2FywdNFjfC57UKHFAl3MPu4z8A4wk%2BnXte58VAOAxXLMTa85VtLd2R9cHsvFSezFC%2BRjFtz3eDu&X-Amz-Signature=aa5610a5e50727d3acab2f99d06099857551e61175541d58e53940b33b97fc94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
