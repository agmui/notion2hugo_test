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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GA4FUJ7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxFUNXyGTsn2N%2BSZxSxCpXozE5BL3WKLHFB9icAAY9AIgZuh2qbKcGD8ipK9IsEYJIlFGuMvnuZghT0Jeh3svuYYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw2cJ2NdZjJoifLNCrcA%2Bf2UWMUWK4aSVyDcIPeBE0yt1%2FrL1UAfgHWce5dQOahlf%2FAp9AmlU2vMwKW6vFrq1VZt1%2F5MLinJr6aXet90SLIfb7vsJRPtEkc7UCXZPBxlXTFRQ8grKq%2BrDiEIpbA7oUb%2BMRWzbLDMlUl0Nan7fTS0S9BUASSx8gGCx9P%2F2cyeSpG%2BVdauIrsnhKWua9ieb1rIlyawfIgUQ9gAmN005jeGZ%2BIbfsXyrRpKhyIYusVqjAUl3g4gPOYzAeLHbINF9oBpsJ21tq1TaFSdYZrVX7uyZj4Ji1GRdrp03R32qR%2FOqdAP2BVEjqWYs7HvKAUCsHEzLSkmjejJDJHXeRDO94MKt1tsLW6mMkUx0QsUZ4XNgWOcFvQ59I%2FnVuJKWadxYpqPRPYPwd6kN2M6QaTE6SUz0aqjgLAwNKHHrRjQ8ZWijxAGMvc5SK%2FwKh2AYX6QRXRjn%2FkjmhHAXru6gxH9c52el3pqS3Azj5EK6MA4Q3FwqEvVp6I%2B%2Bz0bNDPffqHmTrsQkaWt1giJLC4Ybw5aExCciD%2FeLmAdeFOKMIRA%2FDInatb2fxLkpCC62vRvo8BgE1G0mA4es9lbSSEF%2FNMK3eddCgEF3laFqCvro422Q9q67Se%2B29IyOIIQaPmMP%2BGntEGOqUBmjeXTD6ydFEBi%2BlgCFpOHG81OHFfouqzUiS26YfFDlqGc7LIZG7lHaikaqIOewjEkGUE0FayHPyneYx62nsc9J%2F1mRftdspG97%2Bnv%2FXyYksNEAyAGTi7PCWPUNefe5%2BKHYduIHhpjpDUmBg%2FgnAryAbyPmheTc4AL4zGsFmJwrf57cetZBo8cfqrR9hSoPcrQ9O1hTIV1IvMNx44%2FOGnAK9v9%2BSw&X-Amz-Signature=e225ab8ee470e4a769034aeaa3ac12ed8860fda37403f6e29c4511a5f5f3c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GA4FUJ7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxFUNXyGTsn2N%2BSZxSxCpXozE5BL3WKLHFB9icAAY9AIgZuh2qbKcGD8ipK9IsEYJIlFGuMvnuZghT0Jeh3svuYYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw2cJ2NdZjJoifLNCrcA%2Bf2UWMUWK4aSVyDcIPeBE0yt1%2FrL1UAfgHWce5dQOahlf%2FAp9AmlU2vMwKW6vFrq1VZt1%2F5MLinJr6aXet90SLIfb7vsJRPtEkc7UCXZPBxlXTFRQ8grKq%2BrDiEIpbA7oUb%2BMRWzbLDMlUl0Nan7fTS0S9BUASSx8gGCx9P%2F2cyeSpG%2BVdauIrsnhKWua9ieb1rIlyawfIgUQ9gAmN005jeGZ%2BIbfsXyrRpKhyIYusVqjAUl3g4gPOYzAeLHbINF9oBpsJ21tq1TaFSdYZrVX7uyZj4Ji1GRdrp03R32qR%2FOqdAP2BVEjqWYs7HvKAUCsHEzLSkmjejJDJHXeRDO94MKt1tsLW6mMkUx0QsUZ4XNgWOcFvQ59I%2FnVuJKWadxYpqPRPYPwd6kN2M6QaTE6SUz0aqjgLAwNKHHrRjQ8ZWijxAGMvc5SK%2FwKh2AYX6QRXRjn%2FkjmhHAXru6gxH9c52el3pqS3Azj5EK6MA4Q3FwqEvVp6I%2B%2Bz0bNDPffqHmTrsQkaWt1giJLC4Ybw5aExCciD%2FeLmAdeFOKMIRA%2FDInatb2fxLkpCC62vRvo8BgE1G0mA4es9lbSSEF%2FNMK3eddCgEF3laFqCvro422Q9q67Se%2B29IyOIIQaPmMP%2BGntEGOqUBmjeXTD6ydFEBi%2BlgCFpOHG81OHFfouqzUiS26YfFDlqGc7LIZG7lHaikaqIOewjEkGUE0FayHPyneYx62nsc9J%2F1mRftdspG97%2Bnv%2FXyYksNEAyAGTi7PCWPUNefe5%2BKHYduIHhpjpDUmBg%2FgnAryAbyPmheTc4AL4zGsFmJwrf57cetZBo8cfqrR9hSoPcrQ9O1hTIV1IvMNx44%2FOGnAK9v9%2BSw&X-Amz-Signature=ed37733759ab801d8665f2a599f75049774415877f791fd31a2dc1567d2ad666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
