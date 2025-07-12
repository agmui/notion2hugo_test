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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WO4UJBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU4ciGtNIQjWcYLlpbT%2B8zmGQLNTVP0nOJvumOM0uxMAIhAKMFf5jrP6l2PoMgDIfrmTk2rfEGmyO9oZWkwtJh1OnoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1pAwTKnvb%2BItvOgq3APwSORr27HzSpGs5%2B4ZEWYfoVDh40gnz3IzdFzwQ2FFTv1q9EOVXMDYWtoOHKBc0W0twTOinjxZLYfE8neuYOsMHLX4c4Es5S4jLDn0Zy2BvK59i93Vhfa0mDBi1UwxpxuFACZJEct0Ka7WaIcIfj1lhrimWZiNIEek%2B3rTgQKoq8uYb018a62B4qg%2FJvKUoIDH60mjyYVSp7i6y0Pq7WM5i%2FQgb%2Fg5cL7Oc4KoW2wx6M9z4uIhN%2FASWYbgKJbjToj5T9ECCvyay4Peq62aMg33uYSMZgrMXHT2e4gpLGgn1Atm%2BM%2FTQaV3OWOsKSXLCCAOP9FjcSO%2BlmYcdfIKN8WNXogty8L5ChigMl3y6HdQU51ex%2F%2Fgvq13CSDUtnetW3do1GKx%2FHsAVImLUIsHm3LAK7YPFULlXYItfZXiKolerEbOsgNCnnBEA%2FxkHokRbN6pLPEX5KqGaqmotr2AyCj18%2Fk%2FYbAPcd%2FFPCkB7gvCrTvHU0L3DZpsh6NFK0ccpJP4RNMMeL7Nfgw5llu14hKVvTKpHaeI3cs0BE%2FO4vGivHCKHZ6w8PT249Calp7Fi9JUp1b2voU8XlDCQMlWr3gx0ZQNNQOgDkPG20zBlySHCV5uudJwIQ8TYRsUcjDS%2FMjDBjqkARmAUvh3oCgKG3NReZoQ4tuU80NjrlRYsPoFI7WA%2FigwFZR1fBgy3ZyzLTg3YKRX%2FFFD2yUSrPq0j80n7jfBOx%2FRCH3bXzKAT9REi3PNb0qApYebaP4tBwFTsPbyJNck%2FrSVb%2FKzFwcL0NzY8kfkLva9Upgd7Iln8KZibzbHUqsN9iZK18yzAWGod6x8b8suivklJ4qS%2B4vq2nV0MhQAaZDjd42s&X-Amz-Signature=386b505c98fbce2ce73706f82ff6c89a964ea0c0401eeabd8b0f902136fe28d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WO4UJBW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU4ciGtNIQjWcYLlpbT%2B8zmGQLNTVP0nOJvumOM0uxMAIhAKMFf5jrP6l2PoMgDIfrmTk2rfEGmyO9oZWkwtJh1OnoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1pAwTKnvb%2BItvOgq3APwSORr27HzSpGs5%2B4ZEWYfoVDh40gnz3IzdFzwQ2FFTv1q9EOVXMDYWtoOHKBc0W0twTOinjxZLYfE8neuYOsMHLX4c4Es5S4jLDn0Zy2BvK59i93Vhfa0mDBi1UwxpxuFACZJEct0Ka7WaIcIfj1lhrimWZiNIEek%2B3rTgQKoq8uYb018a62B4qg%2FJvKUoIDH60mjyYVSp7i6y0Pq7WM5i%2FQgb%2Fg5cL7Oc4KoW2wx6M9z4uIhN%2FASWYbgKJbjToj5T9ECCvyay4Peq62aMg33uYSMZgrMXHT2e4gpLGgn1Atm%2BM%2FTQaV3OWOsKSXLCCAOP9FjcSO%2BlmYcdfIKN8WNXogty8L5ChigMl3y6HdQU51ex%2F%2Fgvq13CSDUtnetW3do1GKx%2FHsAVImLUIsHm3LAK7YPFULlXYItfZXiKolerEbOsgNCnnBEA%2FxkHokRbN6pLPEX5KqGaqmotr2AyCj18%2Fk%2FYbAPcd%2FFPCkB7gvCrTvHU0L3DZpsh6NFK0ccpJP4RNMMeL7Nfgw5llu14hKVvTKpHaeI3cs0BE%2FO4vGivHCKHZ6w8PT249Calp7Fi9JUp1b2voU8XlDCQMlWr3gx0ZQNNQOgDkPG20zBlySHCV5uudJwIQ8TYRsUcjDS%2FMjDBjqkARmAUvh3oCgKG3NReZoQ4tuU80NjrlRYsPoFI7WA%2FigwFZR1fBgy3ZyzLTg3YKRX%2FFFD2yUSrPq0j80n7jfBOx%2FRCH3bXzKAT9REi3PNb0qApYebaP4tBwFTsPbyJNck%2FrSVb%2FKzFwcL0NzY8kfkLva9Upgd7Iln8KZibzbHUqsN9iZK18yzAWGod6x8b8suivklJ4qS%2B4vq2nV0MhQAaZDjd42s&X-Amz-Signature=67e6a60dbc7baf5e8f779532faa70ca171d8ef843a57e18f8edcea5538a537de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
