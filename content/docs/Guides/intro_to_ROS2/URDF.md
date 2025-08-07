---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=567428f95e52bbcf78356af5de19259ddcdcb756140735bbc3b8df84fdea1077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=6c68c1196c6df6652222335ce53f82a5ee3a821df25ed82a5d733d573f18d342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
