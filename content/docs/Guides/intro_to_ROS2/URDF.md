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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKJDDLN%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3wteLEbCKMlIvjpzHVnJ5Wxoh5tcgnaJFx%2FmhQj%2Bm6QIhAJa5K2e3Y8vC%2BNhYY2TjwDsWxKUgEh6dnHZn9ff1C3FMKv8DCH4QABoMNjM3NDIzMTgzODA1IgyEGtdM2yOVWdpHrPoq3ANa1llJgpzqlZtT4J6oEkkeXqV9KR3qwUecLr%2FD5KvFqg%2BsxTgc3LtgWvKtNSnAjDsLIGDfZq5jvu3b3v9KgilrN%2BPtCSJlrrYuqheRnhnkSaQSuqgp8u1oOwXjBaRLaiG6EJmgMyZWXclKr7fvRizjq1Vw%2FF9yfBhBvEK8Kn%2BbeVGOMAF0ip6TLMD%2BerXtPKoLk7YRSSJFQFSaaPdWabuIwkmugOjDnLN%2Bfug3%2FiV8lI0VBYXXttwflZPNuX2OBmTSRGuVowNRXf51OauwuUff4lw4u8Odkkv0rYpbXowCsM5nHDQgmeXghKjtpprTNsWPgX6mccYLAoc8PsY5irZlPylSvW1P8BVqDhPphLPerSdRBSduLL5DUS6TmW3WV7o%2BT%2BudP1xutl21MgVOQJLy6jUg%2BsVpKLf8Bl%2BofTGR%2F0RCfycfdMzMboMg3Phg7JeacrXiLr1m9B1AzFjcaZlcI%2BePHoMBZrXXFgPZwCGxag%2FWvgO38%2Bz4FYgHp3LenaKaWqSBBb9eMVoEurWO02ZRNCSqjqFWxnJRfeTGBOfkeR9E10jvVRbDZUnITcbV74cP5iDu%2BTn9u2yiZSbFKXWePYsX3GCE%2BYElrN7F3yafNuuFRKTJnvDpEzdovTDx%2B%2BS8BjqkAVT0DL5ScPMElKHi9DBktqSUffkFnzT2g9JERb49eF5GiZ%2F5cIvuz3TnGvrsjrO1HJKrT86I1E5MwVGb6sADoCfq1%2BV4cGOUdC87uFj6hcFiIwueWqp1SrESRvD%2F43XmtNuNaG5%2BaVtraavTuLZkT4q0nVPYELQYA%2BiHrOpMagKifu0oF97xkESZm%2F%2FE%2FJZHWbSJCofmc%2Br%2Bmb%2FPBXZ3Edidh2Ez&X-Amz-Signature=b5e377c4e3eed1fa7670f78e11758beafbe4d69f77a156f10ad37ea24a374ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKJDDLN%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3wteLEbCKMlIvjpzHVnJ5Wxoh5tcgnaJFx%2FmhQj%2Bm6QIhAJa5K2e3Y8vC%2BNhYY2TjwDsWxKUgEh6dnHZn9ff1C3FMKv8DCH4QABoMNjM3NDIzMTgzODA1IgyEGtdM2yOVWdpHrPoq3ANa1llJgpzqlZtT4J6oEkkeXqV9KR3qwUecLr%2FD5KvFqg%2BsxTgc3LtgWvKtNSnAjDsLIGDfZq5jvu3b3v9KgilrN%2BPtCSJlrrYuqheRnhnkSaQSuqgp8u1oOwXjBaRLaiG6EJmgMyZWXclKr7fvRizjq1Vw%2FF9yfBhBvEK8Kn%2BbeVGOMAF0ip6TLMD%2BerXtPKoLk7YRSSJFQFSaaPdWabuIwkmugOjDnLN%2Bfug3%2FiV8lI0VBYXXttwflZPNuX2OBmTSRGuVowNRXf51OauwuUff4lw4u8Odkkv0rYpbXowCsM5nHDQgmeXghKjtpprTNsWPgX6mccYLAoc8PsY5irZlPylSvW1P8BVqDhPphLPerSdRBSduLL5DUS6TmW3WV7o%2BT%2BudP1xutl21MgVOQJLy6jUg%2BsVpKLf8Bl%2BofTGR%2F0RCfycfdMzMboMg3Phg7JeacrXiLr1m9B1AzFjcaZlcI%2BePHoMBZrXXFgPZwCGxag%2FWvgO38%2Bz4FYgHp3LenaKaWqSBBb9eMVoEurWO02ZRNCSqjqFWxnJRfeTGBOfkeR9E10jvVRbDZUnITcbV74cP5iDu%2BTn9u2yiZSbFKXWePYsX3GCE%2BYElrN7F3yafNuuFRKTJnvDpEzdovTDx%2B%2BS8BjqkAVT0DL5ScPMElKHi9DBktqSUffkFnzT2g9JERb49eF5GiZ%2F5cIvuz3TnGvrsjrO1HJKrT86I1E5MwVGb6sADoCfq1%2BV4cGOUdC87uFj6hcFiIwueWqp1SrESRvD%2F43XmtNuNaG5%2BaVtraavTuLZkT4q0nVPYELQYA%2BiHrOpMagKifu0oF97xkESZm%2F%2FE%2FJZHWbSJCofmc%2Br%2Bmb%2FPBXZ3Edidh2Ez&X-Amz-Signature=fc90b090b5590d07d33a7c4b7db8ca2162d44cf75e1766cb1044fa2967c1b441&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
