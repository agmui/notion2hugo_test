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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUNL5QI%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH6XnQeV96IxO3cmgsyt0ALg4wsES309GMTTCepShdFAiAK9V7AEhKEvB97Xkee6J4n8SuPA1wY39%2FWKao8Lm%2BzZCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMWO80SyAsepJyJUSJKtwDKHVZIIuq0qqjez82bwFHqmkgjG%2F6B5UBQwRSBIuQhwiS76BEljylhMkr8wVudW%2BM6hcBA8Z4e2%2B4vsIUx0cyKErG9Aha5oaoDnWHg7wt7TxAMQg%2FNiTtlHrWK5kasqaPfDUb9eN4sQcy9p5TLRYyx9%2BpHpLFUy4FB9GZTQSxLxAQ10yKvYahnoDzkAkfs90F6%2B9zTdNpWpTD5IeuHT08qVKpz7vM3xjLlfF1O9C0hdPYYPAE3jKtavbVmghfIjUn7%2FNhF60pBseEoMzPZXZ6auPdk%2F4cSMt3uQwlUqf9OcmEX0SeghGKxcIMVLSaxAT0koGI4HUAjtvEc3lJ4271KwwTJhmTShsVlQrROAtwe8SDi7HCFaeFv1z4OG%2FhZecjBybPpU%2BvSG8lgxzeYJOuIQ%2BXl%2FkKMDp88OOwnfhCBPwDEO6ItUcDlJlCqskd4kjfdQb%2Bzxx7jmH4b7a6hrklYAbW8En3D0%2BgdElgdJUcMdII7rWd%2BDIXz1WZKW713CQjSKftPF0r4efvY8GeUDXOGLd5MvWFmMlcviL8NFfqcr6B5iKgbszNdPNRbOxSJXWv1MOaMsC8cD9RIqWOAonShIByiqaDDTdBByJkB53cuTk72aBSHufTeSeuq50wj8zO0AY6pgFlL%2BjnbPx3K%2F%2FrSHLYWZlhzufcjWvf4lIRyuCBGUEsF8bukgqcRiIy3w8ZiQQbEv84GeaPCALWxAPBdbVomHxO1eAeLQaWWDhTb5oiENrkiELYngp7fcQwiXxfXEZQjgIGW5hUZXGbjR3RYtspi%2FvQWjWO6eVj71wj93lXaLrRsc9nHP7k0zQpXTW%2F1E0e0sunB5QWtDXtD5KzujdW1LpOe8WFWFUQ&X-Amz-Signature=d3d0ac7a1d9f6108a4f8f2c5a2c6cabbf9896e540a6895a7224fdba87e7c9cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUNL5QI%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH6XnQeV96IxO3cmgsyt0ALg4wsES309GMTTCepShdFAiAK9V7AEhKEvB97Xkee6J4n8SuPA1wY39%2FWKao8Lm%2BzZCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMWO80SyAsepJyJUSJKtwDKHVZIIuq0qqjez82bwFHqmkgjG%2F6B5UBQwRSBIuQhwiS76BEljylhMkr8wVudW%2BM6hcBA8Z4e2%2B4vsIUx0cyKErG9Aha5oaoDnWHg7wt7TxAMQg%2FNiTtlHrWK5kasqaPfDUb9eN4sQcy9p5TLRYyx9%2BpHpLFUy4FB9GZTQSxLxAQ10yKvYahnoDzkAkfs90F6%2B9zTdNpWpTD5IeuHT08qVKpz7vM3xjLlfF1O9C0hdPYYPAE3jKtavbVmghfIjUn7%2FNhF60pBseEoMzPZXZ6auPdk%2F4cSMt3uQwlUqf9OcmEX0SeghGKxcIMVLSaxAT0koGI4HUAjtvEc3lJ4271KwwTJhmTShsVlQrROAtwe8SDi7HCFaeFv1z4OG%2FhZecjBybPpU%2BvSG8lgxzeYJOuIQ%2BXl%2FkKMDp88OOwnfhCBPwDEO6ItUcDlJlCqskd4kjfdQb%2Bzxx7jmH4b7a6hrklYAbW8En3D0%2BgdElgdJUcMdII7rWd%2BDIXz1WZKW713CQjSKftPF0r4efvY8GeUDXOGLd5MvWFmMlcviL8NFfqcr6B5iKgbszNdPNRbOxSJXWv1MOaMsC8cD9RIqWOAonShIByiqaDDTdBByJkB53cuTk72aBSHufTeSeuq50wj8zO0AY6pgFlL%2BjnbPx3K%2F%2FrSHLYWZlhzufcjWvf4lIRyuCBGUEsF8bukgqcRiIy3w8ZiQQbEv84GeaPCALWxAPBdbVomHxO1eAeLQaWWDhTb5oiENrkiELYngp7fcQwiXxfXEZQjgIGW5hUZXGbjR3RYtspi%2FvQWjWO6eVj71wj93lXaLrRsc9nHP7k0zQpXTW%2F1E0e0sunB5QWtDXtD5KzujdW1LpOe8WFWFUQ&X-Amz-Signature=c625771edd37d20edd4554570d96edf6cacb11f66d5d7c2960f362c053796341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
