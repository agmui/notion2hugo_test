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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MW6ORAN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADUdwE2O8m%2F8Mc%2FGLpmqMZZsBpmbLJMcZQfAYNcbSFKAiBhq5AwAA1YQkIKRnyjUgIXFW8Dd1LlVra%2BiWeDrfVCPCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH6rwtJmUAqes%2FHZ5KtwDcP3RSV4EzvkpP8pVSqAFakXs0mQVMC7ozXEfu1Ywglpy%2BMA775YdZHmN9eIfrMulkUxfbWKvHiOxWgWoGI%2FABhYRNRceehygY2tp47DtJSOoXmmrP96Pa%2Frsfo0KAAXZf%2BKGqmB0e5g4XIUmV%2FZSppVpuVH42R%2FNlgjxPNDhJ54FcUBzv7SBZeUwMuqqWDOiih3xFXt0TJgHXo2efVZfGz6QDhnYQzbHI2sUH9mSSLZbM7YVuaKVBkskAPlZJqSbvcqSx9xhC9LtVbpMV7%2FZ7LOFdQm%2FsRtnPIkhe%2FP2hbZlD1HgiVZg0VtqNNauYKmCIxai5Ekr0qnE23wRdaCr2pdCVE6TZJeuJxy4QxZ0%2BV5%2FIEB%2FRwhQpye67A2n4zmrj46t%2BLZJqskQ7bbMc4iIXESK1OH%2F8dw28NJ0HntW09052T2R0zdyzhPhvpgoFwG4c0Xg5JmPsyAxZ8vjZITN6ZH%2FA8qcdqBI3AVvS0Qt%2FtEa5P5%2BqVrRkHEkPPcsIpNr5OBXJ8Yh8iY8Oyowk9PdAtJlL6UYEHohbMTwUoSLHATAw5wtz3s3ZjxsTsPLXUTGGGq2Ak5gkLlcLIDmss1f7YNPA9cOWffj5%2BK13HcIkgKMjd3zBhkurMpOdNUwpNaewgY6pgGzKB9sk2BQlf032Pcb1g7PZlfa8ZCH7YWwqF1RGzBRuMJj%2FN1WXwJDkicBZanoNOZYP5XrC0LGBuOuRsQTYSCaDEaTYkmRntpyGp%2FkNO16BKGCCH0kO7Nl9BztyWctg1kLq4M9o2bCjO%2FzRWeEVrHRDgL9gCrhyXjFRmGvNgWIIu5Sm%2FPFzCNTK0J0PuRjntq4m43%2BLjcK7TOHQJceu7dFhwEKFeqx&X-Amz-Signature=56be584ec5500f6143f682138438086e69d185ec68fb1b63df6294e76f3f492e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MW6ORAN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADUdwE2O8m%2F8Mc%2FGLpmqMZZsBpmbLJMcZQfAYNcbSFKAiBhq5AwAA1YQkIKRnyjUgIXFW8Dd1LlVra%2BiWeDrfVCPCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH6rwtJmUAqes%2FHZ5KtwDcP3RSV4EzvkpP8pVSqAFakXs0mQVMC7ozXEfu1Ywglpy%2BMA775YdZHmN9eIfrMulkUxfbWKvHiOxWgWoGI%2FABhYRNRceehygY2tp47DtJSOoXmmrP96Pa%2Frsfo0KAAXZf%2BKGqmB0e5g4XIUmV%2FZSppVpuVH42R%2FNlgjxPNDhJ54FcUBzv7SBZeUwMuqqWDOiih3xFXt0TJgHXo2efVZfGz6QDhnYQzbHI2sUH9mSSLZbM7YVuaKVBkskAPlZJqSbvcqSx9xhC9LtVbpMV7%2FZ7LOFdQm%2FsRtnPIkhe%2FP2hbZlD1HgiVZg0VtqNNauYKmCIxai5Ekr0qnE23wRdaCr2pdCVE6TZJeuJxy4QxZ0%2BV5%2FIEB%2FRwhQpye67A2n4zmrj46t%2BLZJqskQ7bbMc4iIXESK1OH%2F8dw28NJ0HntW09052T2R0zdyzhPhvpgoFwG4c0Xg5JmPsyAxZ8vjZITN6ZH%2FA8qcdqBI3AVvS0Qt%2FtEa5P5%2BqVrRkHEkPPcsIpNr5OBXJ8Yh8iY8Oyowk9PdAtJlL6UYEHohbMTwUoSLHATAw5wtz3s3ZjxsTsPLXUTGGGq2Ak5gkLlcLIDmss1f7YNPA9cOWffj5%2BK13HcIkgKMjd3zBhkurMpOdNUwpNaewgY6pgGzKB9sk2BQlf032Pcb1g7PZlfa8ZCH7YWwqF1RGzBRuMJj%2FN1WXwJDkicBZanoNOZYP5XrC0LGBuOuRsQTYSCaDEaTYkmRntpyGp%2FkNO16BKGCCH0kO7Nl9BztyWctg1kLq4M9o2bCjO%2FzRWeEVrHRDgL9gCrhyXjFRmGvNgWIIu5Sm%2FPFzCNTK0J0PuRjntq4m43%2BLjcK7TOHQJceu7dFhwEKFeqx&X-Amz-Signature=c264a0b376959e5f75e959f34e5dab8ed25ebf8731f69bff5ee40e521a1b0fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
