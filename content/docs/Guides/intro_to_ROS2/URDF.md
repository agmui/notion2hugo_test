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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7F3INE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FNWpB7Tolf%2FgIzIfrcStfne2miKd%2B2PsN9HxkTr7ZxAiBKiIk2NJxQcF1REStKW2aLRQNOwZfYi27jS7w0jHFBtSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTP96L6PpPJT7chluKtwDLds2Y%2FtSK1NLOuEkbUCyXhNV6enSvLOsRmCATC2LFvMUSuRroCq%2BNFNAskoUKRsfZzX806r2a8DCyM%2Bl%2BoikJqbcUS1gydOYyoABi4WWEfEdNaHkfk8elZnulSz5IoFn9b5TTJbw6j%2BhB72SwBTFEc%2B0JwF3U3%2FVcplzIoDCE17uiIK8GZkyMyvY6%2BHGhAM92t3u%2FDD5waSS9dnGczxXnUdj%2FMQCyo9%2FiHQNfypSK0HF72Um46yAk0Ym7Paepb8EDFo4%2BpqIBMBOVwic9NzuG%2BbxsJBhFe20VBGGPiGpRk4TyFaRiCUWkO5F%2FWxbgevhSnC9woBtQjHiAX8tfIaZXl2%2BlURyRElC4oUJWHfhY95s4ovwQpmgNFyp%2BxUxANMICSvnfbJ4MTc3857HWiyre1Z4faQTYFB%2FYrCSOgcHmB44WvzUsyqvBXt%2FMP2x%2BtdZtVCV7K7ZgWKgQOJSbPhUbA4ohVP4eTdHkQTg7rIWMgZQ%2BGuySbOkTVvpjc7zZs%2FthR%2BY%2F91z%2FYRmbyLqL8Y3w7OZkdMSPQVLWdBZpIyCUUmqlZWi%2BtBhF7QwLcbqyqDSCUbBtJLS7VABaG9rXNtID6ChugQztwwbLEf54wMFkLpG5d%2BQZwQ2Y7%2BFu%2F8w0sT5wAY6pgG4lATkfop40ny5VLWcPbQhrALEz5kIfyWVzH49W%2BmKeDAOwnP0AiwYE%2FABaPTSbRCTGDQc%2F0srVd3V3tOauuvNnbDkJNdNKfjylDfX4SInMy79g57Ukh4UiVKzmkLMSFuHAy5S6x6%2FY3JvoI5lCvbgCVud40K39ZvNS40zbfQ5knA9JtM9pjLTsX2k57kmqb%2FMg9dESLXIB23kGvMlRFye8SNMc6ul&X-Amz-Signature=1c8ab5e7bc311cc28af814dcae5ac018a60d0bdc63d18be17f4e59aaf82384d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7F3INE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FNWpB7Tolf%2FgIzIfrcStfne2miKd%2B2PsN9HxkTr7ZxAiBKiIk2NJxQcF1REStKW2aLRQNOwZfYi27jS7w0jHFBtSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTP96L6PpPJT7chluKtwDLds2Y%2FtSK1NLOuEkbUCyXhNV6enSvLOsRmCATC2LFvMUSuRroCq%2BNFNAskoUKRsfZzX806r2a8DCyM%2Bl%2BoikJqbcUS1gydOYyoABi4WWEfEdNaHkfk8elZnulSz5IoFn9b5TTJbw6j%2BhB72SwBTFEc%2B0JwF3U3%2FVcplzIoDCE17uiIK8GZkyMyvY6%2BHGhAM92t3u%2FDD5waSS9dnGczxXnUdj%2FMQCyo9%2FiHQNfypSK0HF72Um46yAk0Ym7Paepb8EDFo4%2BpqIBMBOVwic9NzuG%2BbxsJBhFe20VBGGPiGpRk4TyFaRiCUWkO5F%2FWxbgevhSnC9woBtQjHiAX8tfIaZXl2%2BlURyRElC4oUJWHfhY95s4ovwQpmgNFyp%2BxUxANMICSvnfbJ4MTc3857HWiyre1Z4faQTYFB%2FYrCSOgcHmB44WvzUsyqvBXt%2FMP2x%2BtdZtVCV7K7ZgWKgQOJSbPhUbA4ohVP4eTdHkQTg7rIWMgZQ%2BGuySbOkTVvpjc7zZs%2FthR%2BY%2F91z%2FYRmbyLqL8Y3w7OZkdMSPQVLWdBZpIyCUUmqlZWi%2BtBhF7QwLcbqyqDSCUbBtJLS7VABaG9rXNtID6ChugQztwwbLEf54wMFkLpG5d%2BQZwQ2Y7%2BFu%2F8w0sT5wAY6pgG4lATkfop40ny5VLWcPbQhrALEz5kIfyWVzH49W%2BmKeDAOwnP0AiwYE%2FABaPTSbRCTGDQc%2F0srVd3V3tOauuvNnbDkJNdNKfjylDfX4SInMy79g57Ukh4UiVKzmkLMSFuHAy5S6x6%2FY3JvoI5lCvbgCVud40K39ZvNS40zbfQ5knA9JtM9pjLTsX2k57kmqb%2FMg9dESLXIB23kGvMlRFye8SNMc6ul&X-Amz-Signature=aa1a63ba0a060d5d19de974ffcad8db40bdc120a53b6badc2e1b68b2c0325ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
