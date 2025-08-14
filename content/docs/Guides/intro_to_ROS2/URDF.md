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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAMM3BR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE8Vj%2BayTKVYXjVT3vjjB%2BpA3YvZ82zcL9UTViqbzfxAiBhNQ3u7ZPn5mZMqaxJwP2WFnlfgpDZBUBTij6xp%2BtaxCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMG8zUPH%2FCAI7F4LjpKtwDm2QNQND0pd3YVci1oLNoFT3X7nZFEzzXzV93NZIFZYRwYd%2FeGNfHZ6uTWyy%2Fn8IjUd3WZrE2mJLwa4YRyZ8tvYVxpyqy0BTs3PW83MM6IPR%2BoBGE0DK1tbuEseqD%2FaQqKPZ4KcqBc73rW%2FD35x%2FeykEwpPMugU5rRUaNEK8HZ%2FR8tJJ%2BOI0lLSZUM2O45ugQJQrooo32bDsMkOf02Pp%2FTCbioXrL6AnU4lx4HGCSjENHUaU7gSGZgWeHxxAaT7Owtp3nX2LwCHtD%2BUtHgCcFeIpvEc1KvPpcnFgX5%2FpeXkV3OfqolouRhMFmIeKpsKLg4SilmIb%2Fk30CtVz9zz8csaJ7oNArQ5MAHHHN7SqDq8YH26X3PG3Zo%2Btc7ue8N4sB2Tg6LyVwczbfmYKYqUnPVReAvs8xPfJ9OJdPL4lRaKQNDk3GRwkUo%2BwJBYxJh0fVeVUqGUS%2FlZ1mVuvMfhL2yRr69uE%2BNF8cJ28%2BkqWoJZ9frUHqcU%2BPY9apxA1cUqPYH63nNSrV2nbiWDCVRQuC6APkntAsEVZZ1ySUecq8SskWdzDZcNWCTgep6M0Wmp1bfefbCoEXOng3KaBICUlzgM3a5uUQx8fV90gZiv7VYyWj2bkK10ogqJRxEtMw%2B632xAY6pgHyU3RJO4varysCL6EfJROicH5HSlhl1UaoxlFg%2BMOWdm9%2FnOO18sSX%2BSTbl6brfqJLcq8h55ijhmWBxJx4uWGSXyoHxO7uuo6DtLT%2FPRW8CeA2zLoHJ1U9awO2ObTmYOZsNmS9j593J%2Fk2HDHhASdQP950o1SK%2F0raDDT4EczSO3M74hZ2iPg0ZSdQxkGvwCYhgjMKFrQJ6uB9v9Lf1sd45iSnzpaL&X-Amz-Signature=234a43863c33ef38e8f0ccdb371abc4e1385988d5367b3f09dc4339d8efbf9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAMM3BR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE8Vj%2BayTKVYXjVT3vjjB%2BpA3YvZ82zcL9UTViqbzfxAiBhNQ3u7ZPn5mZMqaxJwP2WFnlfgpDZBUBTij6xp%2BtaxCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMG8zUPH%2FCAI7F4LjpKtwDm2QNQND0pd3YVci1oLNoFT3X7nZFEzzXzV93NZIFZYRwYd%2FeGNfHZ6uTWyy%2Fn8IjUd3WZrE2mJLwa4YRyZ8tvYVxpyqy0BTs3PW83MM6IPR%2BoBGE0DK1tbuEseqD%2FaQqKPZ4KcqBc73rW%2FD35x%2FeykEwpPMugU5rRUaNEK8HZ%2FR8tJJ%2BOI0lLSZUM2O45ugQJQrooo32bDsMkOf02Pp%2FTCbioXrL6AnU4lx4HGCSjENHUaU7gSGZgWeHxxAaT7Owtp3nX2LwCHtD%2BUtHgCcFeIpvEc1KvPpcnFgX5%2FpeXkV3OfqolouRhMFmIeKpsKLg4SilmIb%2Fk30CtVz9zz8csaJ7oNArQ5MAHHHN7SqDq8YH26X3PG3Zo%2Btc7ue8N4sB2Tg6LyVwczbfmYKYqUnPVReAvs8xPfJ9OJdPL4lRaKQNDk3GRwkUo%2BwJBYxJh0fVeVUqGUS%2FlZ1mVuvMfhL2yRr69uE%2BNF8cJ28%2BkqWoJZ9frUHqcU%2BPY9apxA1cUqPYH63nNSrV2nbiWDCVRQuC6APkntAsEVZZ1ySUecq8SskWdzDZcNWCTgep6M0Wmp1bfefbCoEXOng3KaBICUlzgM3a5uUQx8fV90gZiv7VYyWj2bkK10ogqJRxEtMw%2B632xAY6pgHyU3RJO4varysCL6EfJROicH5HSlhl1UaoxlFg%2BMOWdm9%2FnOO18sSX%2BSTbl6brfqJLcq8h55ijhmWBxJx4uWGSXyoHxO7uuo6DtLT%2FPRW8CeA2zLoHJ1U9awO2ObTmYOZsNmS9j593J%2Fk2HDHhASdQP950o1SK%2F0raDDT4EczSO3M74hZ2iPg0ZSdQxkGvwCYhgjMKFrQJ6uB9v9Lf1sd45iSnzpaL&X-Amz-Signature=6be2cba804351e92ee04aca832fd9567165741e99c7028a494bb3f4afcc80176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
