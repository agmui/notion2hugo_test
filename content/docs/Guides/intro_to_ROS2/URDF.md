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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ4BUQK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCXzZuGHy%2Foxq6fw3ROWU%2BM57V3gwnbVcldhOZmG6XmzAIhAJD4rXRp4G7xLVU9vbdSvgBK%2FSn6Ci9rr3s56WpfcnpnKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD0rbytkn8cOttqKoq3AMICtJmytGCvMYBy3wB%2BMrv950sQH%2FPI2L%2FqYvAPMXDicnXT1SK0c3fDxZCjdEnIpAC2sfEQ8DXqJHA9tkshT5TtIZGTXZQ4PkGF0GBqB%2BG%2FuuhHRWRoIqRhRmU%2BIPS32copnzui8%2BoTvXFNzxG%2Bc5A%2FsWxNe7t%2FHwYe06Xg6qqyfKYVDPw4b%2FytwWxV5XwCH6aW9qoStu3lv%2Bb5JinxYzaQgn%2BpPC9aRNsl9bmQRXKikoNxwRJ%2BWq722H9bIDNsjUHxJAeBPG2%2BfgteqIFJJh0hRpMZkYMrPIztVktEZFNofVVSM7FSsBgkjpBB%2BpvCJXRF1FpNnUEEAubPz0QJU0gjty4uwFTBx7WsdRfeGErc%2FBltH46uG7ad6RZQZr8DQRB1sAFvEI1XKkudy7mhv0VEKmMV0hqjs06Ca6WvEp4%2FB%2FRuNOJZcoigddJdqZb%2B%2FFMkLcaSkpWehntPb8btbc%2Ft4Dlg8UbhOKrc859cludSnW6cOS4TnHGXJKigUPJdgNz9Nn9h5C23MqDIkQfRF9bjaqTP3YtmLtV1tSgp3UGiuwrmTI0IcedmgCC8XdogFyPF66NmwPGVLEhnC%2BDwwlMY1HqBsUkJ4ey0zfpomOvYl6RsvQIX4jLQ6dMvDCykJy9BjqkAfSSzqqhpaKuXbREOGb2HZQLrL9ijh%2BuiCmArIEtz79LP3HKf0XekrdKsomwh79v2JMfHPC5%2FZv7jxh%2FWuZlpoxSK7JXg2ls1TTM75Dkaa7%2Bm6ss7QXG0a%2FBF3NsKmTaby0eac1PDt6KEfqL%2B9QQMO5a3C65PPNzB9Az%2BYXeENeZ%2FD2WreSuCPSKkGPAFRy1W1lkShgBCi%2Fw51VlLMW1UijtsMWf&X-Amz-Signature=a881ff667580c934ce5a2271032049287f9bd68795ceba0690208899b9e121eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ4BUQK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCXzZuGHy%2Foxq6fw3ROWU%2BM57V3gwnbVcldhOZmG6XmzAIhAJD4rXRp4G7xLVU9vbdSvgBK%2FSn6Ci9rr3s56WpfcnpnKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD0rbytkn8cOttqKoq3AMICtJmytGCvMYBy3wB%2BMrv950sQH%2FPI2L%2FqYvAPMXDicnXT1SK0c3fDxZCjdEnIpAC2sfEQ8DXqJHA9tkshT5TtIZGTXZQ4PkGF0GBqB%2BG%2FuuhHRWRoIqRhRmU%2BIPS32copnzui8%2BoTvXFNzxG%2Bc5A%2FsWxNe7t%2FHwYe06Xg6qqyfKYVDPw4b%2FytwWxV5XwCH6aW9qoStu3lv%2Bb5JinxYzaQgn%2BpPC9aRNsl9bmQRXKikoNxwRJ%2BWq722H9bIDNsjUHxJAeBPG2%2BfgteqIFJJh0hRpMZkYMrPIztVktEZFNofVVSM7FSsBgkjpBB%2BpvCJXRF1FpNnUEEAubPz0QJU0gjty4uwFTBx7WsdRfeGErc%2FBltH46uG7ad6RZQZr8DQRB1sAFvEI1XKkudy7mhv0VEKmMV0hqjs06Ca6WvEp4%2FB%2FRuNOJZcoigddJdqZb%2B%2FFMkLcaSkpWehntPb8btbc%2Ft4Dlg8UbhOKrc859cludSnW6cOS4TnHGXJKigUPJdgNz9Nn9h5C23MqDIkQfRF9bjaqTP3YtmLtV1tSgp3UGiuwrmTI0IcedmgCC8XdogFyPF66NmwPGVLEhnC%2BDwwlMY1HqBsUkJ4ey0zfpomOvYl6RsvQIX4jLQ6dMvDCykJy9BjqkAfSSzqqhpaKuXbREOGb2HZQLrL9ijh%2BuiCmArIEtz79LP3HKf0XekrdKsomwh79v2JMfHPC5%2FZv7jxh%2FWuZlpoxSK7JXg2ls1TTM75Dkaa7%2Bm6ss7QXG0a%2FBF3NsKmTaby0eac1PDt6KEfqL%2B9QQMO5a3C65PPNzB9Az%2BYXeENeZ%2FD2WreSuCPSKkGPAFRy1W1lkShgBCi%2Fw51VlLMW1UijtsMWf&X-Amz-Signature=99d28e6a316dc00d575d459e87663debb3f474f970b56a23f2f080b4c2e55b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
