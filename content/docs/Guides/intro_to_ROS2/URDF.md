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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQIUAVG%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEH7W1CJHqMg1iW%2BerJiegjl944NlMi7rChZgLyZwoIOAiATwICxDfEm%2Bg5W4oLkQK38Qo6Lp9luXghpCC7CMvj7jCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmVaKbcZqVogQSJOVKtwDfXtLprc6k9lMsg2saQshaVO8H%2F7ISShSM3axIrGmrdubvTPbp5vAsafgincNaDqop620jyXzKHK%2Bi3jlyQ3gg18LnJ5EzrQnZuD8qa0VDmvYpcTo0uzSGAIbBI9LOHE%2FPcp9UIwvJZPq0BIBVp%2BBMU%2BEDRtHy18hkQDNFPYHeGPfpNh0j0hmwyYcAJAL99Q8d4DGIvU4SaETJSGxG3OkvYg3sQbl9gjwpFAFMnWEzGWEitLpcB7WMw0W%2BuVrbPlC1SrZ0xQJC5BxBVNbnUBH5Xst7G69F4X9DuBRUlkNrLT6O05NM39jbsk1Y9sHcvT93C8clRLIQv29ms8mS1Zb7CkqGiGUgsAPBQ5Fjz8AxswysFL6A1xSCtJr1PXonO4avQPOxyN4LWlTBmp6%2B7%2BIFQPe8DeQWw5up%2BCpxDG0adw9PDZ0lAXAniLvgvxAEIyXpnQGhrjRgwlsyfFeygZLr5tDXXZYPmUolzdHsoyJ5lqIPp1mvB44fslwlzD41NEF2kQUZpOLm%2B14tvc3KY0K0qkXO%2BP2PvaiAooGjXJmEzpt%2F4oEqSDwsH7JzhdhsONnVbMooy6XtkpyYVPNqWndix0on1CdXcSlROD94ysw6RSHVzxUfpFfFU7D4lIw%2BaWo0QY6pgHinQuaHdl8qFOFrgiLMbnI4LgYQZN5j3kDFLJfLPk0q8HsML3rYHISwgMCN7o3nFilWLLJhubVGN8GhRZRVhszn1yANnCzNNBywNODGOoklv0wH%2BznsdHesqBolxGTzkqmyPWhVBLw5q5VzFn%2BAPkIdu5xCTP3Nmt8B%2BvSQ98a26Xt9OUASJZVxJfNvgjQF885owdimcAETxOjZ620dOC5cr0E1H1b&X-Amz-Signature=65d3a13b6c42c33a8555d7c19f47bf35768769b579ebabfcff8a6f68d9a079cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQIUAVG%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEH7W1CJHqMg1iW%2BerJiegjl944NlMi7rChZgLyZwoIOAiATwICxDfEm%2Bg5W4oLkQK38Qo6Lp9luXghpCC7CMvj7jCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmVaKbcZqVogQSJOVKtwDfXtLprc6k9lMsg2saQshaVO8H%2F7ISShSM3axIrGmrdubvTPbp5vAsafgincNaDqop620jyXzKHK%2Bi3jlyQ3gg18LnJ5EzrQnZuD8qa0VDmvYpcTo0uzSGAIbBI9LOHE%2FPcp9UIwvJZPq0BIBVp%2BBMU%2BEDRtHy18hkQDNFPYHeGPfpNh0j0hmwyYcAJAL99Q8d4DGIvU4SaETJSGxG3OkvYg3sQbl9gjwpFAFMnWEzGWEitLpcB7WMw0W%2BuVrbPlC1SrZ0xQJC5BxBVNbnUBH5Xst7G69F4X9DuBRUlkNrLT6O05NM39jbsk1Y9sHcvT93C8clRLIQv29ms8mS1Zb7CkqGiGUgsAPBQ5Fjz8AxswysFL6A1xSCtJr1PXonO4avQPOxyN4LWlTBmp6%2B7%2BIFQPe8DeQWw5up%2BCpxDG0adw9PDZ0lAXAniLvgvxAEIyXpnQGhrjRgwlsyfFeygZLr5tDXXZYPmUolzdHsoyJ5lqIPp1mvB44fslwlzD41NEF2kQUZpOLm%2B14tvc3KY0K0qkXO%2BP2PvaiAooGjXJmEzpt%2F4oEqSDwsH7JzhdhsONnVbMooy6XtkpyYVPNqWndix0on1CdXcSlROD94ysw6RSHVzxUfpFfFU7D4lIw%2BaWo0QY6pgHinQuaHdl8qFOFrgiLMbnI4LgYQZN5j3kDFLJfLPk0q8HsML3rYHISwgMCN7o3nFilWLLJhubVGN8GhRZRVhszn1yANnCzNNBywNODGOoklv0wH%2BznsdHesqBolxGTzkqmyPWhVBLw5q5VzFn%2BAPkIdu5xCTP3Nmt8B%2BvSQ98a26Xt9OUASJZVxJfNvgjQF885owdimcAETxOjZ620dOC5cr0E1H1b&X-Amz-Signature=f30383ac8e2e98a2496096c02b5991cd072d709cc8c27eab01aec5e1f0243cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
