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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRYHS3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCxLPBvjODc277AD0e5E2VNVEkZFUGBktB66DEr%2BsrGRQIhAK86kPvK%2BUdPSb6tOegOrBW75nI12EhSys4MJboKVWB3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igzya9kjtaXCtdEycF4q3ANt7IScUGJOYOXmAJv3Q12FmgnYaJzRjFmN2I%2B03v3N%2F617d7g6kOt3YgHg%2BWkbfEWNVZsFe7Z%2BrhX5CUQnP47sYsA9L18hTjUu90FLA%2Bp%2FeVXIZ912KwgscRqQfr4dxXu6NZjGBOEJQ3Y14q8%2FJBm7lpb6rncbOxZWwg57Nfr9WH6IW3z3VO9Tnp40iThEfqNyPIKNG2urmzaynDCly1GaMJsj4Y9LCWKJJIi7cxzBV9mMkfqy1BV26NMgQDiohuhGwn1HaxvJDvd5fwVpdiLkQCPshjmwUp41fSXF4K0no1bmOhszvWIKX8jcG3Mrsf6O%2BrgE4ClI0StCYjCKaf4SiS%2FlLNkAkFAOGNeLC%2ByPOI9Au1F8AyWadYdrt0WFqgJ6R1%2FQXwu45Her8L%2BY3Zvx%2FEkp9VPZmi0LW2MGBXMWy8QhgFNSXzXga9MVW8S6xAyeSJ%2BTJTlVbS3nsq4PMlL4%2BuAGFWlQU82wfpE4eCrXvWkX5HKcMUcPXAYjTvUUx0prtQYqiS%2BnGF%2FqtDlo9k%2Bsu9HGUY3l0TWsByPeXf6zIl9sn%2FLcyUESft3TI4bkPbUksKu8lBZt1Q7EED9JcrXe5eTzU6k%2BdjmpbgWwiKuw%2FehbTgyNaFqS2wUWJTD8hKjABjqkARZPesOUc%2FP671q4ecU6JUUW8jP1%2BPjvpp%2FIsBvMWxCU0Sot992v7SIHPkVW1rTJ9XM5EHtPZmkDk3UGlpMxB8t5VaRH%2F5YLmOCC9jYz4RIb5rtyp25di0htl87JGD94eVzXQUKFOrXW90%2Faq13R9wlxHH1uirOwsB0K%2B1akc3TTIqHGJXHMNVMePt7TE%2Ffej5vHnVNKaRbDEmmu1HH78XUnIHNE&X-Amz-Signature=4af909c9887a08eb4111471acab161d7095718e2239e7ac138fd75c446859445&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRYHS3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCxLPBvjODc277AD0e5E2VNVEkZFUGBktB66DEr%2BsrGRQIhAK86kPvK%2BUdPSb6tOegOrBW75nI12EhSys4MJboKVWB3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igzya9kjtaXCtdEycF4q3ANt7IScUGJOYOXmAJv3Q12FmgnYaJzRjFmN2I%2B03v3N%2F617d7g6kOt3YgHg%2BWkbfEWNVZsFe7Z%2BrhX5CUQnP47sYsA9L18hTjUu90FLA%2Bp%2FeVXIZ912KwgscRqQfr4dxXu6NZjGBOEJQ3Y14q8%2FJBm7lpb6rncbOxZWwg57Nfr9WH6IW3z3VO9Tnp40iThEfqNyPIKNG2urmzaynDCly1GaMJsj4Y9LCWKJJIi7cxzBV9mMkfqy1BV26NMgQDiohuhGwn1HaxvJDvd5fwVpdiLkQCPshjmwUp41fSXF4K0no1bmOhszvWIKX8jcG3Mrsf6O%2BrgE4ClI0StCYjCKaf4SiS%2FlLNkAkFAOGNeLC%2ByPOI9Au1F8AyWadYdrt0WFqgJ6R1%2FQXwu45Her8L%2BY3Zvx%2FEkp9VPZmi0LW2MGBXMWy8QhgFNSXzXga9MVW8S6xAyeSJ%2BTJTlVbS3nsq4PMlL4%2BuAGFWlQU82wfpE4eCrXvWkX5HKcMUcPXAYjTvUUx0prtQYqiS%2BnGF%2FqtDlo9k%2Bsu9HGUY3l0TWsByPeXf6zIl9sn%2FLcyUESft3TI4bkPbUksKu8lBZt1Q7EED9JcrXe5eTzU6k%2BdjmpbgWwiKuw%2FehbTgyNaFqS2wUWJTD8hKjABjqkARZPesOUc%2FP671q4ecU6JUUW8jP1%2BPjvpp%2FIsBvMWxCU0Sot992v7SIHPkVW1rTJ9XM5EHtPZmkDk3UGlpMxB8t5VaRH%2F5YLmOCC9jYz4RIb5rtyp25di0htl87JGD94eVzXQUKFOrXW90%2Faq13R9wlxHH1uirOwsB0K%2B1akc3TTIqHGJXHMNVMePt7TE%2Ffej5vHnVNKaRbDEmmu1HH78XUnIHNE&X-Amz-Signature=0dd7a7f60488663a23715b4e46cc0d61e5f3ddc50abf3e7dffaba7d3134005d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
