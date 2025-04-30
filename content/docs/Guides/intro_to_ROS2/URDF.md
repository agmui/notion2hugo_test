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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGXNWFX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7bi%2BcX0Q1OQE9PQLfi%2BtNqDNwtMPk21aXcBBcOwB%2BSAIgECCkN9gFmmQniMHxo1cRsp6dcRmVyPcnhH%2BgKBrU5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHoWORwQPIIWof59ircA2UGWpV5%2BEQF3ltIojp%2FsIcnHTIqZX%2FGFaFvIMk6k1gNgn7AZnpElJaBT4miBKF8lKovoi%2FBbwH47iFWz7i%2FsK6QbV%2F4WnPHA4eQm1%2FyB%2BTwDHfjyUMS497%2F6VO1c5PRqNYSIh0fog5Cu7DvEAFihTm2ZC%2BmFpLwQR9gKZxW1BtzKp0IxmhZoe8k1XaBvkaz89H5mn6JqL6%2B0gyD7ypq612EiIMJPeusGJOx7%2F1Njm5ygVVlkCQWV3idF%2BT5LZqjHehiI9kt%2FiyVOBvNhn3ePuzKGQLDnv8NMFfqfUFuQT6wjITyJrnZ8kFa%2FHAmS5f9kGFk1jdGSANSxpB1%2F5kc0Mt7HXASWpt6luPSgjcVjCootPbv%2B9B%2B2CoBEQPoWTb5BMYqMxFo1KvbSBI9p9nPRMN5W1TWaBII%2BOyBEh10ofGy3MqbnxbDzfT6D3SjF7lOlM2h%2Fl32SsXmGB1jSqMKD2pXIh5SX2xEIqgERlpOxsdWivYMnbzeb6nirv91p0LY9FFx0ZFEtBagyYg5QCI3NkeEzyANSS4UrHLwk5u1piapd1oQbWot0FdpyAok%2BfFslhhHHQ4oJNLKwgk3XoVCpLKcqGDQFwGAIg9aUBTHSZDH9ryLLs4jtZK1bMXZMOT5xsAGOqUB0JrbMTWqVqnZBjyM5%2BIW%2FMz0h1rGJpWs3QauNhk%2B%2Fq8LvTc%2FBz3PLQ6ZlBPtz4X9p5xEh3p3bheXAuMsTSEOZantpEmQQtWwUJyATcPpfvT2hLYOHR1XEjdmyF6y%2B5TgB77b6I5byQ8O3XAo0ECysRvRi6FnjlDBuNJAq3Jxz1FPTrNCIFrFMXKDfGYYkT9eAS7EggcXibCNNKab5MWoq3bjQFRV&X-Amz-Signature=d6e25e84afb431c35db6baac865e7d2a63d045b8a738834fb18d79a2dbeb30db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGXNWFX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7bi%2BcX0Q1OQE9PQLfi%2BtNqDNwtMPk21aXcBBcOwB%2BSAIgECCkN9gFmmQniMHxo1cRsp6dcRmVyPcnhH%2BgKBrU5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHoWORwQPIIWof59ircA2UGWpV5%2BEQF3ltIojp%2FsIcnHTIqZX%2FGFaFvIMk6k1gNgn7AZnpElJaBT4miBKF8lKovoi%2FBbwH47iFWz7i%2FsK6QbV%2F4WnPHA4eQm1%2FyB%2BTwDHfjyUMS497%2F6VO1c5PRqNYSIh0fog5Cu7DvEAFihTm2ZC%2BmFpLwQR9gKZxW1BtzKp0IxmhZoe8k1XaBvkaz89H5mn6JqL6%2B0gyD7ypq612EiIMJPeusGJOx7%2F1Njm5ygVVlkCQWV3idF%2BT5LZqjHehiI9kt%2FiyVOBvNhn3ePuzKGQLDnv8NMFfqfUFuQT6wjITyJrnZ8kFa%2FHAmS5f9kGFk1jdGSANSxpB1%2F5kc0Mt7HXASWpt6luPSgjcVjCootPbv%2B9B%2B2CoBEQPoWTb5BMYqMxFo1KvbSBI9p9nPRMN5W1TWaBII%2BOyBEh10ofGy3MqbnxbDzfT6D3SjF7lOlM2h%2Fl32SsXmGB1jSqMKD2pXIh5SX2xEIqgERlpOxsdWivYMnbzeb6nirv91p0LY9FFx0ZFEtBagyYg5QCI3NkeEzyANSS4UrHLwk5u1piapd1oQbWot0FdpyAok%2BfFslhhHHQ4oJNLKwgk3XoVCpLKcqGDQFwGAIg9aUBTHSZDH9ryLLs4jtZK1bMXZMOT5xsAGOqUB0JrbMTWqVqnZBjyM5%2BIW%2FMz0h1rGJpWs3QauNhk%2B%2Fq8LvTc%2FBz3PLQ6ZlBPtz4X9p5xEh3p3bheXAuMsTSEOZantpEmQQtWwUJyATcPpfvT2hLYOHR1XEjdmyF6y%2B5TgB77b6I5byQ8O3XAo0ECysRvRi6FnjlDBuNJAq3Jxz1FPTrNCIFrFMXKDfGYYkT9eAS7EggcXibCNNKab5MWoq3bjQFRV&X-Amz-Signature=8b7b2f3b57f6a0fc7a12afc11123230f2203db181ed598d002fe11dbc3928002&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
