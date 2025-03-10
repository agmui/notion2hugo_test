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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJGNHY4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDNKv3d9QfB0lgE5DgAPOTbRrX7olCTjgGmnmigNNFSQgIgLIyzD1oWo4rVj8GVpJrNKYe66cloT1fHYnZgTL%2F0rlcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQK5betIpwpmyiqTSrcA4xGuyiZZyS3z1tZMlsE4fD5yp%2F99w%2F9SupzU8O91H42zoLOaXF4J1n%2BMCvddzueUDfbdzoXuU45kpBqOJaw0V%2FvvnxLLLKR7eiK5NyMKc4VPx1UDSFZmBCdWvyeIy1SqZVbbNQB0lOkX6Iq4kJbyU3hTt89ngGT%2FZjgIz7814HXB306FJsNrvWFMTXsefoDga6T%2BDJWmhM23k8lzuYM8AS6dYSGs6mjzpTCIcIe6aVaeiG52IDhuMT8x1Rg%2Fp7R8i%2Bh%2B1XuHHWc%2BaIOjsLgHf3mmKnWPM%2Flc%2BI3FhlfatrITliMYFEg%2F8jo5JjJdC3JzBpGXrtDGzF4pG%2F5QvPfjrcA6696AjL86hiqES23LnOTDGDh33D%2Bw3YQUUrGJngXe3q8ZrsMGEyzLL%2BRwlTB%2FRV4rTUK8qJpjrM4InVgrmSG9hxhBZaqFeGZXIksv%2BwJbX2Z99F6vAEewjwKal4%2FL%2Fw1Ih4lkHshdxWPpAr0QthC5%2Bm5GHE9S8oNSBPDTOYUA1Me4zoXq87qqoCbR9oOwPWek%2Fb7tc%2FteL%2FRzMVxquf4962xLzkwAcZeKlbVYIpF1seIk9vCTEGKl%2Bs8wmFq0mDbTxbxW%2BDMy9RHL1CYxnxhJjoZaTgPDRgScsS3MOypur4GOqUBjPdm3GQnBW2Oi%2Bo71YCLdxLxqAp0Vi6yBb2PFq9H0m6AtnwPB1cV0vRzKGpKvQYl2F0G%2Fo0Qf231JqGPE0o9N%2B7yDQUA2Gonk%2FlJroNxrcN7pkhWPdCTFquTn6Zpu77fmqE0auVEBHOcs3x9HUoD%2BTrT6tReqDGjXYAluE36F4dEdH1RQ0GnbDkrFBdAXXwuhphc2nc9YdYoK%2BvWf1dvfTDZMKu0&X-Amz-Signature=8b80bc0ca5eb88d030ea3f544fab0072fd63be1edd407720bcaef68069f9e8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJGNHY4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDNKv3d9QfB0lgE5DgAPOTbRrX7olCTjgGmnmigNNFSQgIgLIyzD1oWo4rVj8GVpJrNKYe66cloT1fHYnZgTL%2F0rlcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQK5betIpwpmyiqTSrcA4xGuyiZZyS3z1tZMlsE4fD5yp%2F99w%2F9SupzU8O91H42zoLOaXF4J1n%2BMCvddzueUDfbdzoXuU45kpBqOJaw0V%2FvvnxLLLKR7eiK5NyMKc4VPx1UDSFZmBCdWvyeIy1SqZVbbNQB0lOkX6Iq4kJbyU3hTt89ngGT%2FZjgIz7814HXB306FJsNrvWFMTXsefoDga6T%2BDJWmhM23k8lzuYM8AS6dYSGs6mjzpTCIcIe6aVaeiG52IDhuMT8x1Rg%2Fp7R8i%2Bh%2B1XuHHWc%2BaIOjsLgHf3mmKnWPM%2Flc%2BI3FhlfatrITliMYFEg%2F8jo5JjJdC3JzBpGXrtDGzF4pG%2F5QvPfjrcA6696AjL86hiqES23LnOTDGDh33D%2Bw3YQUUrGJngXe3q8ZrsMGEyzLL%2BRwlTB%2FRV4rTUK8qJpjrM4InVgrmSG9hxhBZaqFeGZXIksv%2BwJbX2Z99F6vAEewjwKal4%2FL%2Fw1Ih4lkHshdxWPpAr0QthC5%2Bm5GHE9S8oNSBPDTOYUA1Me4zoXq87qqoCbR9oOwPWek%2Fb7tc%2FteL%2FRzMVxquf4962xLzkwAcZeKlbVYIpF1seIk9vCTEGKl%2Bs8wmFq0mDbTxbxW%2BDMy9RHL1CYxnxhJjoZaTgPDRgScsS3MOypur4GOqUBjPdm3GQnBW2Oi%2Bo71YCLdxLxqAp0Vi6yBb2PFq9H0m6AtnwPB1cV0vRzKGpKvQYl2F0G%2Fo0Qf231JqGPE0o9N%2B7yDQUA2Gonk%2FlJroNxrcN7pkhWPdCTFquTn6Zpu77fmqE0auVEBHOcs3x9HUoD%2BTrT6tReqDGjXYAluE36F4dEdH1RQ0GnbDkrFBdAXXwuhphc2nc9YdYoK%2BvWf1dvfTDZMKu0&X-Amz-Signature=2c32e8f68e87cd9a3b062eef30a0d9f84f334c1a66d961ec02b10c915455562e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
