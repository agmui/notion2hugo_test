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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJBJEGK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzRYqOEfyv%2BMHbYvV%2Bn6YPdYMqxoy%2FEAHBgZJNBfdSyAiADnYTkusOXwERL4ECQMn9ohrudUZ6EaGoS%2BWe5T6ln0CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8rZMs4AXKg%2FYOwuaKtwDyx4Z867fJ4nis6VlHuYGQaENBFDIfRwBJlhGHKOz6MEgJPcamssnO0PCgDWJmVqzcQinSzWCt6Xyk5avdExWLtCNRNAleEVNvRs%2FFep2SD2wWcTZ3c6ucQo%2FlEjz8bPx%2BP6ys33ZvemyiiOxBb13gbTcayvDBy3%2BA1ac7dh%2BnXYxboEVD4n6y9cOZYgGXPG0JZtnDaqdopifRRES98CXCVQPChpyneFyh7hO7UMrtPuUrn%2BxsAnUWPtpqVZYSbErDaL%2BuEmOVeQChY2RefjYfGo7VmfyMpcaSHZbnCUiDImFZyOV92CH56naOL1btCaS8s8JfCyjZN8XqKN0U0dnyLq9ncgLTwKmVZhBbSDCQt4qjxHvHayIBS3oNPAH6cQvceBnkZLf%2B4k383HXOdSSW%2BN0Ek1BXosxkDqZ%2FlNPDevk0tGtMHBtkEJP4whF3iCLjcHJm01ygVN%2BN8Bq87lIFT%2FxqugkMPK85Le0OSCRFWISYy0VPwL%2BAOz0k%2BZZQXtBY9A%2FGNMG%2FZW9XVlQ0e7VAlMrL9T0U1k3%2FpAJh6cWYkSaoZ1ID518h%2BKVDY7B%2B6kfZwyIZuh%2F%2BiZGAaqv8h3hVD0J8mnoKYTiDfDeC9OjUA8d4LdjGnX3stt9Wbww45KCwwY6pgGvSZCqCG9l%2FyKoBd%2B2sUlZ1Ycnv6oCW7cttS2UeifuUXMLKWOLv0bWMwx9Kv3ZThK%2FwbN%2FVlG1Ev5mzv2AAhFdAOeCq0vLQciWgjxdYkqgm9rv%2Bb55Ytuwwf37q1MGPZRaXecOeN8ryHQ%2BejynVNEYLX0H5HcXCAVyUl2fEQf%2FAdYX0T9reXAdYKpv1nloI5ODOGCP0g5BsLtLAgwhsUP86Ks3TpdD&X-Amz-Signature=d189c4c7f98995a3fdd1fc3f2da3169c44fa9e07e3f5d4e023945ea827d86691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJBJEGK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzRYqOEfyv%2BMHbYvV%2Bn6YPdYMqxoy%2FEAHBgZJNBfdSyAiADnYTkusOXwERL4ECQMn9ohrudUZ6EaGoS%2BWe5T6ln0CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8rZMs4AXKg%2FYOwuaKtwDyx4Z867fJ4nis6VlHuYGQaENBFDIfRwBJlhGHKOz6MEgJPcamssnO0PCgDWJmVqzcQinSzWCt6Xyk5avdExWLtCNRNAleEVNvRs%2FFep2SD2wWcTZ3c6ucQo%2FlEjz8bPx%2BP6ys33ZvemyiiOxBb13gbTcayvDBy3%2BA1ac7dh%2BnXYxboEVD4n6y9cOZYgGXPG0JZtnDaqdopifRRES98CXCVQPChpyneFyh7hO7UMrtPuUrn%2BxsAnUWPtpqVZYSbErDaL%2BuEmOVeQChY2RefjYfGo7VmfyMpcaSHZbnCUiDImFZyOV92CH56naOL1btCaS8s8JfCyjZN8XqKN0U0dnyLq9ncgLTwKmVZhBbSDCQt4qjxHvHayIBS3oNPAH6cQvceBnkZLf%2B4k383HXOdSSW%2BN0Ek1BXosxkDqZ%2FlNPDevk0tGtMHBtkEJP4whF3iCLjcHJm01ygVN%2BN8Bq87lIFT%2FxqugkMPK85Le0OSCRFWISYy0VPwL%2BAOz0k%2BZZQXtBY9A%2FGNMG%2FZW9XVlQ0e7VAlMrL9T0U1k3%2FpAJh6cWYkSaoZ1ID518h%2BKVDY7B%2B6kfZwyIZuh%2F%2BiZGAaqv8h3hVD0J8mnoKYTiDfDeC9OjUA8d4LdjGnX3stt9Wbww45KCwwY6pgGvSZCqCG9l%2FyKoBd%2B2sUlZ1Ycnv6oCW7cttS2UeifuUXMLKWOLv0bWMwx9Kv3ZThK%2FwbN%2FVlG1Ev5mzv2AAhFdAOeCq0vLQciWgjxdYkqgm9rv%2Bb55Ytuwwf37q1MGPZRaXecOeN8ryHQ%2BejynVNEYLX0H5HcXCAVyUl2fEQf%2FAdYX0T9reXAdYKpv1nloI5ODOGCP0g5BsLtLAgwhsUP86Ks3TpdD&X-Amz-Signature=cd57317183987b2dac58c8f740a1f6063354838251b862f82b6b856251972393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
