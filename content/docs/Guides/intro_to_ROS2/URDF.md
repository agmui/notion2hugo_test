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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFVIZGS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFfe4snA95tcdp7EEuM8I%2BYSTSMlO2ilJ1gFUB8kk2WwAiEA%2BQ8PRqeih%2Fh0MVC0IWc4gpuIg8VuTB8imBoXkXayVTUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMHR6%2FDNmKrXwraIACrcAzEpKPzCA9DtUp1qvQy84QhjBJ1CV6fG1ZQZeCQvJJ2%2FujKxz40K1tjS%2FpRVEpiEqFyL2VW3Ksjya1D7li029tb9UNKCtSSzxSm8Ycf8YqQ4ie8GGF5m8lfBm4x%2FT%2FTDVgWRdGRbOKDmySyZIyh4cZpkrqFKAV8Ev4aoNNFZHeI9N3LoESO1NOA%2FOpCNZKuv649iobISP467OJQ4Fymrs6usiTflx6XVlAfqnnZXrxSWfn9lrYdHaiwKEWWA3%2B%2BW82NmhM86SF%2Fh4dz2iUCmXu7l20KtlwJLRnilvBc4rmYdU%2FtNnGYY3IQYL%2F9R4K6m9GgfTBs7fhFn%2F7OqhhhLVL8ZKjhzLPJgfBT%2BAgBnwjlHoPOVxjyMw2NMk9%2B9Td5odTmATXmRAN%2Fic4mmShcTP2Qa86s%2Budnd64ctxG1rLLET%2B3lpH8oeOoW6NP0A3fiqYeQwLTP9ol%2BzBjki6Ns7NBlstnyjrS4uDhts7glOYUCZ%2FC0G4SuS%2FO9xbuzPTU50ZKv%2Bb%2F0WDp7ZjuAdFLq9l0g%2F25MzRf535LANxcNA%2FT5KX8cC4rYaVNg7IVT%2F91kwVK0KVA4krgWeLv3eyXRv234V8CIQvmVuHLTzzKupboe7ZXJc37gxYRniWMkPMInn%2B8EGOqUBQiuJwNjIhd%2BHsf3jqWf5sg1YWS3z5n8pTzgMn6mw9mxqbqSC7UXxZU3zUMDldJNstrsds7DmRt8hg%2FSaY%2B54gquwCZNprv1cVNNj90ilLVSVIVfhVySaAcvZrSQua2AR7UDCRqnYxD3aS4BqvMfEZNkitrBzr14EKQmplK9DwFPfxqHs1yDCr595T4Iov%2FZbxQ%2FrEQPP3RUmXFSgfC2PH%2Fy1grnA&X-Amz-Signature=a7248c3ee4592ec39803bf4ee6aea9e631f97d9399a3881cb3fc73155956fb70&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFVIZGS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFfe4snA95tcdp7EEuM8I%2BYSTSMlO2ilJ1gFUB8kk2WwAiEA%2BQ8PRqeih%2Fh0MVC0IWc4gpuIg8VuTB8imBoXkXayVTUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMHR6%2FDNmKrXwraIACrcAzEpKPzCA9DtUp1qvQy84QhjBJ1CV6fG1ZQZeCQvJJ2%2FujKxz40K1tjS%2FpRVEpiEqFyL2VW3Ksjya1D7li029tb9UNKCtSSzxSm8Ycf8YqQ4ie8GGF5m8lfBm4x%2FT%2FTDVgWRdGRbOKDmySyZIyh4cZpkrqFKAV8Ev4aoNNFZHeI9N3LoESO1NOA%2FOpCNZKuv649iobISP467OJQ4Fymrs6usiTflx6XVlAfqnnZXrxSWfn9lrYdHaiwKEWWA3%2B%2BW82NmhM86SF%2Fh4dz2iUCmXu7l20KtlwJLRnilvBc4rmYdU%2FtNnGYY3IQYL%2F9R4K6m9GgfTBs7fhFn%2F7OqhhhLVL8ZKjhzLPJgfBT%2BAgBnwjlHoPOVxjyMw2NMk9%2B9Td5odTmATXmRAN%2Fic4mmShcTP2Qa86s%2Budnd64ctxG1rLLET%2B3lpH8oeOoW6NP0A3fiqYeQwLTP9ol%2BzBjki6Ns7NBlstnyjrS4uDhts7glOYUCZ%2FC0G4SuS%2FO9xbuzPTU50ZKv%2Bb%2F0WDp7ZjuAdFLq9l0g%2F25MzRf535LANxcNA%2FT5KX8cC4rYaVNg7IVT%2F91kwVK0KVA4krgWeLv3eyXRv234V8CIQvmVuHLTzzKupboe7ZXJc37gxYRniWMkPMInn%2B8EGOqUBQiuJwNjIhd%2BHsf3jqWf5sg1YWS3z5n8pTzgMn6mw9mxqbqSC7UXxZU3zUMDldJNstrsds7DmRt8hg%2FSaY%2B54gquwCZNprv1cVNNj90ilLVSVIVfhVySaAcvZrSQua2AR7UDCRqnYxD3aS4BqvMfEZNkitrBzr14EKQmplK9DwFPfxqHs1yDCr595T4Iov%2FZbxQ%2FrEQPP3RUmXFSgfC2PH%2Fy1grnA&X-Amz-Signature=9f9f9ccc2e3492c0ec73746c7ab89926fe8cce5fac45c128dde2823e0d18d394&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
