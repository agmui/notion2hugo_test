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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4MPG3R2%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9k5atokB3HQwwMJxRGQHhb7avu3HKsRygEvBXzqE67QIhALc25uVEAZ88uJydST4S9JW394wYyLbNvr2nb0vxN2G6Kv8DCCIQABoMNjM3NDIzMTgzODA1Igxey5EUEXgmMPEF6Rwq3AMR%2BDDWspUpgpJn3cB%2FYNPof4C%2FB0jKCwKiA1JD0pOFPLpRkfVGTkdokvq8ZiHD7TjkGZhX3u%2BeySkCEpqDu8w7i%2BNOWozNHbTEkynS3rpZrW%2B0D%2B1QQffa41ctg2yuDj26L1RqnY6M1us5b54KAKPQ2Le%2BVsqzUvhfy29pPtYOgJycZv3ac%2B67%2FM%2B04SIt6LnFHFNkuCuEOqEICJFfwrdXF5gjm67%2FZS68YkCVKSHwglt6Fyc67U2eGqK1eI88xU0lmuxYHCium0FUFQXTlEG3ylje1sppX%2BBmSQ8IqAl0al2X7xwfKdnDM1NrMMxKB3Wkl65uwg%2FxvEsDFIUpuxHcR8vreR5iWjq6TV1nBtBy%2Brf4dm491urArQOfx8xMkbpGVVrqJrZWELvBFyyQyiAi%2BUyPwUjk%2BEb7ZQmblkLSrG6J7rPxVVIC29CPRRny%2BU8a1b5GbfmNv2k5EyXgcRxELjCq7Nq20qODX14LmTMZvTm8uNujSnWLKZwHrFy822YQQqApidrINa5p6Rbztfn5BqIl7NB7NVEeD4sHlIDjg9zpUlQQ4cK08KqRRCbsq7GyGtMLs84d9CsPq8Vm0VpJEXfsFxlRPSQRcxIO7C%2Bip1wdxQ7vUxcRs%2F4QczCbxcLGBjqkAaKy%2Bny7ilVlE1LcNpWC0kroNfW0GMLSv%2FaP74USwjUgc5nwJDDpc9YRYQPv%2FK9qBJEXTPyXYE2bo6Z6ze2TwpVtd6F%2BeRG8Bdx%2BbjqkuL3yfXt2KEpHdo5PNlrEZLr6DrNCnfY7X3GAQD5MSg%2B8ihm9Jwiyq509cj0jtfuHHgf%2BOiBV1%2FL9ljNNRc9kNHUe0LoeEIXW89Hw73r%2BdvZe5K3JE6Y5&X-Amz-Signature=b302d2d32972c962f8c7f8ea955ce776e20c9820f4a4b79e73c587e369724fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4MPG3R2%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9k5atokB3HQwwMJxRGQHhb7avu3HKsRygEvBXzqE67QIhALc25uVEAZ88uJydST4S9JW394wYyLbNvr2nb0vxN2G6Kv8DCCIQABoMNjM3NDIzMTgzODA1Igxey5EUEXgmMPEF6Rwq3AMR%2BDDWspUpgpJn3cB%2FYNPof4C%2FB0jKCwKiA1JD0pOFPLpRkfVGTkdokvq8ZiHD7TjkGZhX3u%2BeySkCEpqDu8w7i%2BNOWozNHbTEkynS3rpZrW%2B0D%2B1QQffa41ctg2yuDj26L1RqnY6M1us5b54KAKPQ2Le%2BVsqzUvhfy29pPtYOgJycZv3ac%2B67%2FM%2B04SIt6LnFHFNkuCuEOqEICJFfwrdXF5gjm67%2FZS68YkCVKSHwglt6Fyc67U2eGqK1eI88xU0lmuxYHCium0FUFQXTlEG3ylje1sppX%2BBmSQ8IqAl0al2X7xwfKdnDM1NrMMxKB3Wkl65uwg%2FxvEsDFIUpuxHcR8vreR5iWjq6TV1nBtBy%2Brf4dm491urArQOfx8xMkbpGVVrqJrZWELvBFyyQyiAi%2BUyPwUjk%2BEb7ZQmblkLSrG6J7rPxVVIC29CPRRny%2BU8a1b5GbfmNv2k5EyXgcRxELjCq7Nq20qODX14LmTMZvTm8uNujSnWLKZwHrFy822YQQqApidrINa5p6Rbztfn5BqIl7NB7NVEeD4sHlIDjg9zpUlQQ4cK08KqRRCbsq7GyGtMLs84d9CsPq8Vm0VpJEXfsFxlRPSQRcxIO7C%2Bip1wdxQ7vUxcRs%2F4QczCbxcLGBjqkAaKy%2Bny7ilVlE1LcNpWC0kroNfW0GMLSv%2FaP74USwjUgc5nwJDDpc9YRYQPv%2FK9qBJEXTPyXYE2bo6Z6ze2TwpVtd6F%2BeRG8Bdx%2BbjqkuL3yfXt2KEpHdo5PNlrEZLr6DrNCnfY7X3GAQD5MSg%2B8ihm9Jwiyq509cj0jtfuHHgf%2BOiBV1%2FL9ljNNRc9kNHUe0LoeEIXW89Hw73r%2BdvZe5K3JE6Y5&X-Amz-Signature=7342356636218360fa2c52255aacd608591e17a4e8d9bf1c0fa193d70f596d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
