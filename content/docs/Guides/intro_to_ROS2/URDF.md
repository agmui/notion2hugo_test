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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPRVN2M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH501MBehyd4JBVSbqIkZiNk42R0mTpv4KfFIu2ZH0yVAiEAjuzWua6g7BBHmDNHVjoCV0kboRdmQdWdjn2ytWa6Y6Uq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI%2BtjfRQ%2FHdZe%2F2lnircA5HWee8V45gkE9zLNmlNV1X4nazQmpGCzujEFJSNaRDWPlRyXsvmmLu1BItYCNqfZ%2FbJsRsOvc0VupBgkifdFp1JsitwkwC8MNFewCOoEdfkPMlVxZWZBnxAHq4M%2FqHNew0Wuz9F2A%2FUqJyHWuZjF38kTI%2BK11UMGod2HJhom8S5IYOgK4r%2BnntonP3LzNDO7vc4J3SMBeMY1jZno9E1t6YUeoohvgPulel22YRkeLJN%2B5%2F6z8HuuEDrn%2B1PgfzSSABvMFbF7QeTUNHjgfYpExL9K9BzpGbxVmwc%2Bj2qbYQMKyBtEQjsp2C43O4S74iaSYX0mVDiZ6Oaym2zjHSmK0L9k5e%2FwldvfsK61unexQhcp4PhpN0%2B8%2BL%2FDZeCCxcKbzBADQ%2BoU9a%2FwHedycc9GP9aUFf8XCBOTx7jwrLYBCHL%2BnYsSSqc9ryuPW5td%2BIQPqstgd02ZIFRBdnl%2BW9HYAE8IiBiHFwgXWBfarV2GZRf9GNos9kXCeWXH7ggsUuj47VjWFyIEhJnGbaTQ0Cbma%2F3lQNC4EycDQaw9xwOP8OLghKmhGlhYtVysGYbnZXoTx9XSrKcHoKO3qyESKg06E6Z5j3fVgxLYpRt8xfbZw%2BDmEgeeZbLiI9sJGsXMKSz8sQGOqUBt42SJR9nKVsZO26mdZn6T3Zq5JxFMxB24IKslKtuRMYmmbSEgJCcbClmnhiJ3LdHACGVVB7DvKyahyNdUtpczUbsFYysNTt%2BZABIguNBjf8yxmyeCaWz8ZuDJh%2BcXJWDHfCOA8ha%2BK71qWMnWR8rUwrCfxza3SyY94aS6Z28KMf8pV1GptpD%2BapvZP13xZGDd%2F%2B8laM%2BZliVqfoQTY3ywMEnYNxc&X-Amz-Signature=95ca20eba242147cbacc02b05328ee22bb79350a3e031d2e978cfd7fc5405027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPRVN2M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH501MBehyd4JBVSbqIkZiNk42R0mTpv4KfFIu2ZH0yVAiEAjuzWua6g7BBHmDNHVjoCV0kboRdmQdWdjn2ytWa6Y6Uq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI%2BtjfRQ%2FHdZe%2F2lnircA5HWee8V45gkE9zLNmlNV1X4nazQmpGCzujEFJSNaRDWPlRyXsvmmLu1BItYCNqfZ%2FbJsRsOvc0VupBgkifdFp1JsitwkwC8MNFewCOoEdfkPMlVxZWZBnxAHq4M%2FqHNew0Wuz9F2A%2FUqJyHWuZjF38kTI%2BK11UMGod2HJhom8S5IYOgK4r%2BnntonP3LzNDO7vc4J3SMBeMY1jZno9E1t6YUeoohvgPulel22YRkeLJN%2B5%2F6z8HuuEDrn%2B1PgfzSSABvMFbF7QeTUNHjgfYpExL9K9BzpGbxVmwc%2Bj2qbYQMKyBtEQjsp2C43O4S74iaSYX0mVDiZ6Oaym2zjHSmK0L9k5e%2FwldvfsK61unexQhcp4PhpN0%2B8%2BL%2FDZeCCxcKbzBADQ%2BoU9a%2FwHedycc9GP9aUFf8XCBOTx7jwrLYBCHL%2BnYsSSqc9ryuPW5td%2BIQPqstgd02ZIFRBdnl%2BW9HYAE8IiBiHFwgXWBfarV2GZRf9GNos9kXCeWXH7ggsUuj47VjWFyIEhJnGbaTQ0Cbma%2F3lQNC4EycDQaw9xwOP8OLghKmhGlhYtVysGYbnZXoTx9XSrKcHoKO3qyESKg06E6Z5j3fVgxLYpRt8xfbZw%2BDmEgeeZbLiI9sJGsXMKSz8sQGOqUBt42SJR9nKVsZO26mdZn6T3Zq5JxFMxB24IKslKtuRMYmmbSEgJCcbClmnhiJ3LdHACGVVB7DvKyahyNdUtpczUbsFYysNTt%2BZABIguNBjf8yxmyeCaWz8ZuDJh%2BcXJWDHfCOA8ha%2BK71qWMnWR8rUwrCfxza3SyY94aS6Z28KMf8pV1GptpD%2BapvZP13xZGDd%2F%2B8laM%2BZliVqfoQTY3ywMEnYNxc&X-Amz-Signature=dcb7bc42a467c4496d83b9e3a56e3d2a7fdfd6a939a4b6ca96932afcc2e22b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
