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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZULP57F%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKZcVc1LMW%2FZQhoLSQHeDmfnPtytthaIBDDO143hFEdAiBsH%2BT7ddbwR3nNs%2FYc0Tr1Q84tqvSV7cy9TkmFUB4eEyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMT44EXxisFNPCS69OKtwD5Txi6RJoVRA9OKUdmImjsXm06Oi25Lc09iDYzyDTNRjxAH2uPFEZ%2FMJdiT0jJjvRIBhrzXlZKBGTxLV%2BmGRwngChoxesZYFM6uhNL9WJgso7d15%2FzZ46ved7TtkFQMqghhlUjgkFnpTgaitGQ8ZV45gRqM2qCKpcEpihmj6QmbkRB0yYRzvYbjSlQlWdPpsVNsX9ALQrDo2btPWGd297EUgkscZuGEOFLMN14ZzCCHxEi%2B6UqorvWH1EpCXN7CvD%2BZ7Ol2kBPMe%2Fd5TFap%2FT80gzpDFCBAUbmmGh6WScHrqC4lZkG5lLV%2BmffTrNGebDYgexOyjOFhOng9Osj726w8hFbYtmo9EKAAnbZjbW9a%2BNfwhtzn%2BNe6wyZXkZ9aLZEZ%2B5rbZbPeh%2FuGBXVbqz%2Fayawb8yCvKnemTPuYI41LZ8I0hkHyRX30Hnq1dlxuEz2KoqRzDl0Jtf5BQRT4FtbhoKizgHp%2B7A19IlAi6yBhEpUv%2FQHkfdul%2FePvxpsnpi4SHj7ape1oYvcVdXe%2F4xhNlCS3vpQlHtTeVekVyTbVAnzqs%2FKIMLT7yLEz9qCDWUYvFkJ2YzAiGeEVL5u%2F%2FvmOMX2xehSlw95DHWFkFU2bKzwa%2BsRBPGKUbwIcQwwsPawQY6pgF6x0eZngZG2XJ5i5rmKIm%2BBE8YqG%2FrkEaU%2FfpfmllWMEdVJpXtDjo8DUjnzVnv5dj2IEkdSOhsCO1LHlvIFLQ8sbzDAcEnfowAGJ1RvwWbuNKl1y7xpgKG95yf%2BIg7pb5R2k%2Bh%2F09o1BRos%2BMw5Mq5k6m64cMJrgtCl8HoKYrY6TCeyyDL30RoQ3v8KMD4zq9ubDhz%2BzFIbVSxHV2pOE3bJMqYVQ4l&X-Amz-Signature=5448850d39c01ea997eccf99ab2042454e706ed08d58d279d6bed932eddc69bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZULP57F%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKZcVc1LMW%2FZQhoLSQHeDmfnPtytthaIBDDO143hFEdAiBsH%2BT7ddbwR3nNs%2FYc0Tr1Q84tqvSV7cy9TkmFUB4eEyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMT44EXxisFNPCS69OKtwD5Txi6RJoVRA9OKUdmImjsXm06Oi25Lc09iDYzyDTNRjxAH2uPFEZ%2FMJdiT0jJjvRIBhrzXlZKBGTxLV%2BmGRwngChoxesZYFM6uhNL9WJgso7d15%2FzZ46ved7TtkFQMqghhlUjgkFnpTgaitGQ8ZV45gRqM2qCKpcEpihmj6QmbkRB0yYRzvYbjSlQlWdPpsVNsX9ALQrDo2btPWGd297EUgkscZuGEOFLMN14ZzCCHxEi%2B6UqorvWH1EpCXN7CvD%2BZ7Ol2kBPMe%2Fd5TFap%2FT80gzpDFCBAUbmmGh6WScHrqC4lZkG5lLV%2BmffTrNGebDYgexOyjOFhOng9Osj726w8hFbYtmo9EKAAnbZjbW9a%2BNfwhtzn%2BNe6wyZXkZ9aLZEZ%2B5rbZbPeh%2FuGBXVbqz%2Fayawb8yCvKnemTPuYI41LZ8I0hkHyRX30Hnq1dlxuEz2KoqRzDl0Jtf5BQRT4FtbhoKizgHp%2B7A19IlAi6yBhEpUv%2FQHkfdul%2FePvxpsnpi4SHj7ape1oYvcVdXe%2F4xhNlCS3vpQlHtTeVekVyTbVAnzqs%2FKIMLT7yLEz9qCDWUYvFkJ2YzAiGeEVL5u%2F%2FvmOMX2xehSlw95DHWFkFU2bKzwa%2BsRBPGKUbwIcQwwsPawQY6pgF6x0eZngZG2XJ5i5rmKIm%2BBE8YqG%2FrkEaU%2FfpfmllWMEdVJpXtDjo8DUjnzVnv5dj2IEkdSOhsCO1LHlvIFLQ8sbzDAcEnfowAGJ1RvwWbuNKl1y7xpgKG95yf%2BIg7pb5R2k%2Bh%2F09o1BRos%2BMw5Mq5k6m64cMJrgtCl8HoKYrY6TCeyyDL30RoQ3v8KMD4zq9ubDhz%2BzFIbVSxHV2pOE3bJMqYVQ4l&X-Amz-Signature=1c0f3d7099fc0ed95e6ca251c902f2e321d1250ed2ce1962d18c65b20157c2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
