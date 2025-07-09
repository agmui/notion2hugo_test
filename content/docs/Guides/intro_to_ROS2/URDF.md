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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWK6PV6B%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxBHEvW8mSMnWRVWSh6BCCt5GzHipt5Um75BrTkbXCQIhANXAGNMBlYQtNFHIU8QEH5fc4zNbPA5LPBy58CAWul%2BFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfJWvUhImWNHUM4Hoq3AN0ZK7%2Fbm0MMXVM%2F9SvNhl%2FRKG2v22lVZjVhZjN%2BdD2W8fHIWKJKOLJf3TtLAz9BkUBSC5TcAH4OBW24RgugGeqjaQ5r1pVlOuJcbrB%2F3vJffiNy89eZH6nwUcTcaRvJqEph1MkIFm9iuFtHYvPw3%2BYVVNqKE2ra5ZZS1VuVeT5eov2eDna%2BzFwJVwumDfub%2FZ7OuTY2zNyvfms9oZKn3N5Kwzj9h8op9nw5CQib%2FA5wVR3KI61rlUXGLCXKwJ0MliBOUzWK5Tc2hRHpBwdbjeOg68qWqM8OHIPBt5uvWGSb%2B0sRtbKy3heMMuM2Zqg85XCpHJgysZq83L6Kt0NusNKv21e%2FuH2mRtUiozuwxge2aiYRp9QgIAHYsc1CSkknJC1umqUHguA1ijgkkR7SRurUhWb0chgFYV%2B15GWAuuphOGvTbfmSf5issIwrssV9wZHN0jaE6fZFcEW7LE0gQFNe5RDoWYCKeSQwQIBsobQmpCD%2BvPLQ8%2BCDu6qrDBvUCNeGczsKj%2BAzmVG8upgVc%2BU7pWsOYarUTgtiq43%2FPA168sfOlUXLxRu9ZLhZtO2o8kB3fy8krgyyaHM4IWcwH8Ao%2BPYG9f6CM2GO5knrJGNyyfoZbhl8sQwHz8M7DD36rnDBjqkAX9dp5GbumfmGmA6MLIZa0mijFyWCLfpWzQpqWANFJCLM4QwGNx2%2BORFCW%2BAWb5J%2B9CrDgSLk1gox0Qmmr%2F1TVjsuYIPmq48hbJ6LgUAKGeiD9PctXgJGxjFE%2BfktDPiJQEOxsD6A4NK8%2BNB%2FciVcqr3%2BjIDFMhI%2FVf7s0csCcZgUHGUZ5Fpzv6glu6BMumY3ijwR7E8Zm9k5NwRw7aJCGbCrNKT&X-Amz-Signature=5be240e2f2e22fb669b40cefbb8ccd779cc0892de4ea2118bbe7fdb149a3efea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWK6PV6B%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxBHEvW8mSMnWRVWSh6BCCt5GzHipt5Um75BrTkbXCQIhANXAGNMBlYQtNFHIU8QEH5fc4zNbPA5LPBy58CAWul%2BFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfJWvUhImWNHUM4Hoq3AN0ZK7%2Fbm0MMXVM%2F9SvNhl%2FRKG2v22lVZjVhZjN%2BdD2W8fHIWKJKOLJf3TtLAz9BkUBSC5TcAH4OBW24RgugGeqjaQ5r1pVlOuJcbrB%2F3vJffiNy89eZH6nwUcTcaRvJqEph1MkIFm9iuFtHYvPw3%2BYVVNqKE2ra5ZZS1VuVeT5eov2eDna%2BzFwJVwumDfub%2FZ7OuTY2zNyvfms9oZKn3N5Kwzj9h8op9nw5CQib%2FA5wVR3KI61rlUXGLCXKwJ0MliBOUzWK5Tc2hRHpBwdbjeOg68qWqM8OHIPBt5uvWGSb%2B0sRtbKy3heMMuM2Zqg85XCpHJgysZq83L6Kt0NusNKv21e%2FuH2mRtUiozuwxge2aiYRp9QgIAHYsc1CSkknJC1umqUHguA1ijgkkR7SRurUhWb0chgFYV%2B15GWAuuphOGvTbfmSf5issIwrssV9wZHN0jaE6fZFcEW7LE0gQFNe5RDoWYCKeSQwQIBsobQmpCD%2BvPLQ8%2BCDu6qrDBvUCNeGczsKj%2BAzmVG8upgVc%2BU7pWsOYarUTgtiq43%2FPA168sfOlUXLxRu9ZLhZtO2o8kB3fy8krgyyaHM4IWcwH8Ao%2BPYG9f6CM2GO5knrJGNyyfoZbhl8sQwHz8M7DD36rnDBjqkAX9dp5GbumfmGmA6MLIZa0mijFyWCLfpWzQpqWANFJCLM4QwGNx2%2BORFCW%2BAWb5J%2B9CrDgSLk1gox0Qmmr%2F1TVjsuYIPmq48hbJ6LgUAKGeiD9PctXgJGxjFE%2BfktDPiJQEOxsD6A4NK8%2BNB%2FciVcqr3%2BjIDFMhI%2FVf7s0csCcZgUHGUZ5Fpzv6glu6BMumY3ijwR7E8Zm9k5NwRw7aJCGbCrNKT&X-Amz-Signature=090f91ba20bbfce8dfdc7b22d9b7264ee83b0016387c9d522a010b98093593e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
