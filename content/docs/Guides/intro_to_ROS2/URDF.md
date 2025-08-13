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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITEPDEK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaIrE4LUkkNnkGVnubqyvgNhNO8yc8U0sNBlHpMV429AiA60kv16fRjEr9pQ5CNcijkU59RQVNBMALke2Pu%2FNsKMSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdXxLnXBOy0H9qL3ZKtwDMrXXeTIUIbS5qSL7mwrqTjjYC7Y016gJPTPAPYO7iz5cwwAs2Qp%2BdQ1tByIc7LR6frJnT%2BkeDLNxis2qi0ajWbi4g6mw90WMDRIDX5iMLupsQV3D%2FU%2FxnR2AE8t%2B1LWZv9JGIkcBv9a1cTVylkWnRHOE7jHUZPiZqWPYQgfMmIfQmnGR3iVoFSk9Vz3zJZUAQ7%2BFvF5k1QQT%2FSATVYwtLuYGj7byAAr5IYQo8H0QG3lLH9PmxD0ElS%2FRU4gHEOFGvXyDjAkuvu2RO2YTfjK%2BQsuha574aeiIQUtEeuR1T31r5bo91KoPC5LI%2F4Yh3UergwhW4rNXkvmjCmwF8oOPbzzc3g5pnVsuxuHq1MAh%2Fx33muMLbYfVAiveprhTqzQjW92hI280mKcnTjx0teH2t6Ff3RL6mlGujq%2FzktQq4SPN49dLNgEbVzCeNtDuWOSy8fReiAcwRuT4Z4t1N09BLN1Iwfsq9WmF1H%2BEc%2BdQroyIlrxbwTMquQEEC%2FGKhcKn570oNocDpRtrN6IqZHlPBwODSwbpm60MmIny3g6%2FSB9JI38JVNLuyeMFarzJRORdpW%2BCZ1WviFfNAABtTvJXhzGDpIElYpBffrokkeqyzcitnA9Pm30b56yqY7ow88XzxAY6pgGL4N0WMyg0QwcspWCCrtoSKydZrvg%2BfEX%2F0mLiz8hIWEQ1QmoN9Bx61dIyVy%2Flna82TySIvZ3M0RbiIRYmeYUAnQF%2FrcN%2F8uvyufV3Xkg9XG1zh3KvtyeieFEuhwOiyjJ564iqQir3cyJctpOsGyWaUPiRKeq5oSYsigJJ86tCbewCtoKkaLqfC5ymK0l%2BOLq7g9nnaKr69C1ojioc6Vk%2B1xGNXn2V&X-Amz-Signature=5ef52f29497967fb311da6deea96693f3c72bc738717e26ddf91d54c285ea3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITEPDEK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaIrE4LUkkNnkGVnubqyvgNhNO8yc8U0sNBlHpMV429AiA60kv16fRjEr9pQ5CNcijkU59RQVNBMALke2Pu%2FNsKMSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdXxLnXBOy0H9qL3ZKtwDMrXXeTIUIbS5qSL7mwrqTjjYC7Y016gJPTPAPYO7iz5cwwAs2Qp%2BdQ1tByIc7LR6frJnT%2BkeDLNxis2qi0ajWbi4g6mw90WMDRIDX5iMLupsQV3D%2FU%2FxnR2AE8t%2B1LWZv9JGIkcBv9a1cTVylkWnRHOE7jHUZPiZqWPYQgfMmIfQmnGR3iVoFSk9Vz3zJZUAQ7%2BFvF5k1QQT%2FSATVYwtLuYGj7byAAr5IYQo8H0QG3lLH9PmxD0ElS%2FRU4gHEOFGvXyDjAkuvu2RO2YTfjK%2BQsuha574aeiIQUtEeuR1T31r5bo91KoPC5LI%2F4Yh3UergwhW4rNXkvmjCmwF8oOPbzzc3g5pnVsuxuHq1MAh%2Fx33muMLbYfVAiveprhTqzQjW92hI280mKcnTjx0teH2t6Ff3RL6mlGujq%2FzktQq4SPN49dLNgEbVzCeNtDuWOSy8fReiAcwRuT4Z4t1N09BLN1Iwfsq9WmF1H%2BEc%2BdQroyIlrxbwTMquQEEC%2FGKhcKn570oNocDpRtrN6IqZHlPBwODSwbpm60MmIny3g6%2FSB9JI38JVNLuyeMFarzJRORdpW%2BCZ1WviFfNAABtTvJXhzGDpIElYpBffrokkeqyzcitnA9Pm30b56yqY7ow88XzxAY6pgGL4N0WMyg0QwcspWCCrtoSKydZrvg%2BfEX%2F0mLiz8hIWEQ1QmoN9Bx61dIyVy%2Flna82TySIvZ3M0RbiIRYmeYUAnQF%2FrcN%2F8uvyufV3Xkg9XG1zh3KvtyeieFEuhwOiyjJ564iqQir3cyJctpOsGyWaUPiRKeq5oSYsigJJ86tCbewCtoKkaLqfC5ymK0l%2BOLq7g9nnaKr69C1ojioc6Vk%2B1xGNXn2V&X-Amz-Signature=13fa5283ba7a6637d38f9ef70180eef158959cd50a47103aaa844acb66d35fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
