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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DNUSWZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcUKLdXpPKEVABGFNsS1jutt2dDHhsxBEK%2F9ZysdbZkAiAOd6vxN%2Bp6gbV9MIZw6Jp2lCqAxwa08Q9dCx4dIgsC0Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMnsKZBIrtDEt8QFTTKtwD0t1GGyLsvesUHpm7Nhh6MMsFU646vEjQik10Nm7X1lzDHqGurTcToKc8IqZcyw42wc%2FI4RenhsC5pbo43EJ%2F063y3qOwChq7H5HQCTRL%2FGXWu1GFCrPLZCJJXYvSbCx5z3e5tOy6uj1o2QHbqtFPNBGYaTU5ULXPnuvlRlfMIi8yWPlrzMtVrrdQYYe1kLoXBdVYlfK2XiAC0cloYqlT6srjZfPfqRjXH7Y3V0FGvJPGb4bOS67z6jjmLDl89oyLDZwGWXMDxfRwUpbJ8ATU%2B30hOQ8IpcJwxGn%2ByETi0SdrFmCsHAIXoSDxbR89BCmfftHq8znll4pxKYcny4melfZDjeH2VSUZ6RApLU1sOhTvsExFkXoPtEBl8S7eRGHJblYwUman137Q13LKMgk%2FQQcGAJ7BzwPfnpDonKwOX6WnukMXUUfIMAsZ7NsiWae%2BcdXXTJwM7zEj9%2FB2FpZjQ9QjbvMwrah6HhaTGbpBK6Xz9OIjzWlYcKBNn%2FfuCgBAySBoJUJlszpcbpDnrsRVZaUHuHxjygGBFPrPnWrzC1%2F79UsPOGAIPCTfMs5ZWSatNiq%2FFr2zyyUXCuyCmht3h0C2U6zZE74sC0kRBTm7F3TuzuK4EXgBhJjS7Cowttm%2BxAY6pgGoTZ4uQovOiPHTKifK9oS1fVCFqdtHvLVMLSfKuU2NEuLI%2FlqlHTjE4tUw6IaOdnb1E0fnqpz1rwS3io%2BZGzyfpRombHIdbK4kWg2CkupttpeW4PKEi1EPoK6WQmSSHMR1j8nwCwAuZGyWwj4YC9IX1%2FGHBfD983FCvWpmv5b8e8ijCRyXLCN8acZn560HOqFr2vWxxIMu%2BIwL8%2BqRDUvfsg0XCgRK&X-Amz-Signature=2a5646b6ee77a1511da5c4df1cf27199a8ea90f0e85a34b3cd8dc0769141e2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DNUSWZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcUKLdXpPKEVABGFNsS1jutt2dDHhsxBEK%2F9ZysdbZkAiAOd6vxN%2Bp6gbV9MIZw6Jp2lCqAxwa08Q9dCx4dIgsC0Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMnsKZBIrtDEt8QFTTKtwD0t1GGyLsvesUHpm7Nhh6MMsFU646vEjQik10Nm7X1lzDHqGurTcToKc8IqZcyw42wc%2FI4RenhsC5pbo43EJ%2F063y3qOwChq7H5HQCTRL%2FGXWu1GFCrPLZCJJXYvSbCx5z3e5tOy6uj1o2QHbqtFPNBGYaTU5ULXPnuvlRlfMIi8yWPlrzMtVrrdQYYe1kLoXBdVYlfK2XiAC0cloYqlT6srjZfPfqRjXH7Y3V0FGvJPGb4bOS67z6jjmLDl89oyLDZwGWXMDxfRwUpbJ8ATU%2B30hOQ8IpcJwxGn%2ByETi0SdrFmCsHAIXoSDxbR89BCmfftHq8znll4pxKYcny4melfZDjeH2VSUZ6RApLU1sOhTvsExFkXoPtEBl8S7eRGHJblYwUman137Q13LKMgk%2FQQcGAJ7BzwPfnpDonKwOX6WnukMXUUfIMAsZ7NsiWae%2BcdXXTJwM7zEj9%2FB2FpZjQ9QjbvMwrah6HhaTGbpBK6Xz9OIjzWlYcKBNn%2FfuCgBAySBoJUJlszpcbpDnrsRVZaUHuHxjygGBFPrPnWrzC1%2F79UsPOGAIPCTfMs5ZWSatNiq%2FFr2zyyUXCuyCmht3h0C2U6zZE74sC0kRBTm7F3TuzuK4EXgBhJjS7Cowttm%2BxAY6pgGoTZ4uQovOiPHTKifK9oS1fVCFqdtHvLVMLSfKuU2NEuLI%2FlqlHTjE4tUw6IaOdnb1E0fnqpz1rwS3io%2BZGzyfpRombHIdbK4kWg2CkupttpeW4PKEi1EPoK6WQmSSHMR1j8nwCwAuZGyWwj4YC9IX1%2FGHBfD983FCvWpmv5b8e8ijCRyXLCN8acZn560HOqFr2vWxxIMu%2BIwL8%2BqRDUvfsg0XCgRK&X-Amz-Signature=ff091d6fce05b8524fc981ddef164c6f3afbef0fb16acc960eee5f85f23cc93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
