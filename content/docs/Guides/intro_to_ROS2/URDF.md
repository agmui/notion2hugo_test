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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V562WLS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAK1t%2BwqR7N%2F5AN7yO8HLLjsxnbi8l1Q4qeiOH3VJQu0AiEAkKgo9UH%2Fk0pCR8kCNFgXTv5eKnEwVDqaHY%2B3XfaLAUgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDHiyKZPrTEtpnPK2yrcA80CUnB%2B8pT4RiBSwDQV72doVrEAKIW%2Fqqa3XWLQaym1fCmdxSI0gnSlwBLELUwSqqV%2FjBtDF%2F3kUN%2Fx3li68SwWguuPMpG5PzYMmyw6s8O42Q37OiRh5aQscvYyprNl7YI7h%2FZ7uddkG9VBCpZEfsrpE4ZN7b0z%2BN%2BsuCIs90vap%2BkJp5BFOR9IXt9vphY1QBgKUmtwv64zxusFT19kYwonZidzMHSFGZItlthVRkDjTYSExgWfkFzioPYCOf5dIONKBGOGC3VUb0kW7o32esly5BB3gWZ5GeBgh4ZTUTj2WvmHL340G8mzjcuKt9WzV7Gva1gt1eTSgm6jYIc%2BSwbrUqsz6pytZslQCSQfL6XMrj1dsq3qzsWFG9OpNxP2Kz%2FN1D6DFIuG7i1X5O3%2Fc0%2F2R20LOyTlBVKyB6ZoJoYx2zYo30WJkv9Q40orbryPyjR8fKvoUEYuNNtj9JYMbTURL3tJIm5tT5txFmPcDSzahwhOFeU3STNxFpQDPZl0YaEv4Cdw%2BkDV5LuCHHUqJTo2GPJ6AlJfesVlOTOVqrSa7551Ue%2F3FfT0%2BD4WhVWAL2mM6nKmcHLKTXkkqHcTcq9tVhKGzRJ0Z4pzdMHtXwkACj65yXU7YkMkFSpfMJbrvL0GOqUBRajMSSQsZ%2FUbzw0UbjTRBV%2Blx66%2FVLL46v%2Bjx7Jf2ve2Naiuf5RGWtwKbBYiuPFlB14seSEPXl0%2FGhbU6XdJbD491UWBlc50bUp3RugGiE7GHah%2BV4X%2FDVY5e7P%2B9k8EuV%2FC9hLhY2heFTQV66KDNlWXaJdDqMbCwIqFtCNWwOhpwBgHBstSW9JVhnEfQ%2BlvlruuzdFMvAR4JsZFW4vtNvWfbh8l&X-Amz-Signature=11218222b39e5ce2193cc29cfcb1b9b072cd09b10abdd66d700ebc077d395c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V562WLS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAK1t%2BwqR7N%2F5AN7yO8HLLjsxnbi8l1Q4qeiOH3VJQu0AiEAkKgo9UH%2Fk0pCR8kCNFgXTv5eKnEwVDqaHY%2B3XfaLAUgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDHiyKZPrTEtpnPK2yrcA80CUnB%2B8pT4RiBSwDQV72doVrEAKIW%2Fqqa3XWLQaym1fCmdxSI0gnSlwBLELUwSqqV%2FjBtDF%2F3kUN%2Fx3li68SwWguuPMpG5PzYMmyw6s8O42Q37OiRh5aQscvYyprNl7YI7h%2FZ7uddkG9VBCpZEfsrpE4ZN7b0z%2BN%2BsuCIs90vap%2BkJp5BFOR9IXt9vphY1QBgKUmtwv64zxusFT19kYwonZidzMHSFGZItlthVRkDjTYSExgWfkFzioPYCOf5dIONKBGOGC3VUb0kW7o32esly5BB3gWZ5GeBgh4ZTUTj2WvmHL340G8mzjcuKt9WzV7Gva1gt1eTSgm6jYIc%2BSwbrUqsz6pytZslQCSQfL6XMrj1dsq3qzsWFG9OpNxP2Kz%2FN1D6DFIuG7i1X5O3%2Fc0%2F2R20LOyTlBVKyB6ZoJoYx2zYo30WJkv9Q40orbryPyjR8fKvoUEYuNNtj9JYMbTURL3tJIm5tT5txFmPcDSzahwhOFeU3STNxFpQDPZl0YaEv4Cdw%2BkDV5LuCHHUqJTo2GPJ6AlJfesVlOTOVqrSa7551Ue%2F3FfT0%2BD4WhVWAL2mM6nKmcHLKTXkkqHcTcq9tVhKGzRJ0Z4pzdMHtXwkACj65yXU7YkMkFSpfMJbrvL0GOqUBRajMSSQsZ%2FUbzw0UbjTRBV%2Blx66%2FVLL46v%2Bjx7Jf2ve2Naiuf5RGWtwKbBYiuPFlB14seSEPXl0%2FGhbU6XdJbD491UWBlc50bUp3RugGiE7GHah%2BV4X%2FDVY5e7P%2B9k8EuV%2FC9hLhY2heFTQV66KDNlWXaJdDqMbCwIqFtCNWwOhpwBgHBstSW9JVhnEfQ%2BlvlruuzdFMvAR4JsZFW4vtNvWfbh8l&X-Amz-Signature=b9428cfabccb06f01bf303d49f381658b7d0c44f55f939db573bdf8a61f328e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
