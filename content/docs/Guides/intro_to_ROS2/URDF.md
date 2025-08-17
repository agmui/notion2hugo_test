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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQEMRFK%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFsO6jonpMdLJ4oQmE1xNAdLxuZ2vf1SFfz6sNAq3AJhAiB3Kgv3xqGYbFObLqkc7dXKIdCEvxgUpMJtmpwfKmtfMSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMptVDBBcFTJRo4kBZKtwDi6HtJPBcNZ9%2FWVht%2ByHaaqXshMA5%2FsZQGZaIjJt07GK2eazWZjF2gvvxT4Xk28gYQr2lJ%2BNuYaihWj7lfk2hcGTYee3qG6DjPdGeMAFeR83g4PL9NuhJglX6Gjal308CLJWJQf%2FYKnY4KoiUywqI2nmDNhDIbl2hdrwpgS8M343fFLi4raVP9hRZiPNc4c%2B2dzkyecpr72agq6kPFaPYkjAnHRnrcI%2BX%2BaA%2BYAkQAlaSDCitL3fLMHtely93ErNHj%2FX9Ei1ONhOktodDoTAWhj1%2FHgZT2Er%2BRE0VD0b%2FzTZ9BSaR4i3gpz8l5JywOm5lnroX%2FZJxFTEz0ffUFYjkM8isp24vWosmr4yqHI9VxRVYHyrhpqPr8hBtGvREWnTtcu%2BsSDjkBtMT12AzhzGu1h5uMoFg1uUu%2BGm8hlYeospehgn7aZiUdEP7IUYA3I%2F9K8nZ%2BxLfDBBpg2uSgi48YWHOK3I34cK9pKJflFx4eDXYRLNKTw%2BEOwrq3zErxw0lpY%2FqudoWFvjOlA%2FYydNOcMQGxXCpR7qDymVl%2Bq32s0dr4DeYAFHQ1jvT9XQ5JDrBOgQQe1Oj7c9UbGt%2Bx25590cZO5Y3CuzxlIWSfPmDMDTu0r6fVQ6t%2BnnRVCAwuc2ExQY6pgE%2FFXvSP7AmXtD4m8bdWFIBQp8WdNseTTTiugnh6KgdckMuWBff9WUCj6%2BqUwsjNlQ9F3l9qGSIcX5h6hMnfyzk8lJFT1QqLYgqIl2nYGgQRAIOVIG34ct1LkDMJN%2BfzCcbevphbH1mlcnq9nue3vkY6RxSCzdPVjSSwjvPdU5qtv1MiS%2F9zwaICBWU6EFuq9Tfp5gz8ZMZ2ObcFodWLDJUpcT3S6ps&X-Amz-Signature=ab2bbd0446c772232023c51e701c85f809aadac2253bfd614fed3cb9e83ea237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQEMRFK%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFsO6jonpMdLJ4oQmE1xNAdLxuZ2vf1SFfz6sNAq3AJhAiB3Kgv3xqGYbFObLqkc7dXKIdCEvxgUpMJtmpwfKmtfMSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMptVDBBcFTJRo4kBZKtwDi6HtJPBcNZ9%2FWVht%2ByHaaqXshMA5%2FsZQGZaIjJt07GK2eazWZjF2gvvxT4Xk28gYQr2lJ%2BNuYaihWj7lfk2hcGTYee3qG6DjPdGeMAFeR83g4PL9NuhJglX6Gjal308CLJWJQf%2FYKnY4KoiUywqI2nmDNhDIbl2hdrwpgS8M343fFLi4raVP9hRZiPNc4c%2B2dzkyecpr72agq6kPFaPYkjAnHRnrcI%2BX%2BaA%2BYAkQAlaSDCitL3fLMHtely93ErNHj%2FX9Ei1ONhOktodDoTAWhj1%2FHgZT2Er%2BRE0VD0b%2FzTZ9BSaR4i3gpz8l5JywOm5lnroX%2FZJxFTEz0ffUFYjkM8isp24vWosmr4yqHI9VxRVYHyrhpqPr8hBtGvREWnTtcu%2BsSDjkBtMT12AzhzGu1h5uMoFg1uUu%2BGm8hlYeospehgn7aZiUdEP7IUYA3I%2F9K8nZ%2BxLfDBBpg2uSgi48YWHOK3I34cK9pKJflFx4eDXYRLNKTw%2BEOwrq3zErxw0lpY%2FqudoWFvjOlA%2FYydNOcMQGxXCpR7qDymVl%2Bq32s0dr4DeYAFHQ1jvT9XQ5JDrBOgQQe1Oj7c9UbGt%2Bx25590cZO5Y3CuzxlIWSfPmDMDTu0r6fVQ6t%2BnnRVCAwuc2ExQY6pgE%2FFXvSP7AmXtD4m8bdWFIBQp8WdNseTTTiugnh6KgdckMuWBff9WUCj6%2BqUwsjNlQ9F3l9qGSIcX5h6hMnfyzk8lJFT1QqLYgqIl2nYGgQRAIOVIG34ct1LkDMJN%2BfzCcbevphbH1mlcnq9nue3vkY6RxSCzdPVjSSwjvPdU5qtv1MiS%2F9zwaICBWU6EFuq9Tfp5gz8ZMZ2ObcFodWLDJUpcT3S6ps&X-Amz-Signature=1552bfbd50d1557b66dfde2a48ca2558e2261f879f2b0fdb0ee51c0a19762538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
