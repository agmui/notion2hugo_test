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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HV2U2XB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCCQnquD6yzItf0jaj6PXMAE4wZk%2FhEkhnAA5wCs6GdcAIhAJoHAFYriQWFz8zQD%2BOV6lu3uk47yeEqG%2BkIEVrkduNyKv8DCC4QABoMNjM3NDIzMTgzODA1IgyvaxRfHMwwHicbTwEq3AN435eYwCj9s5Re0UfQ6LdImv3IBe2gR%2B1FDq%2FuOY8boMsFCxvIMVHsGYauKGK9mlQei84VWsJIapjNIe3Z3E48HAFsNBGU467N2mnS3RC5NpiBQnJQNZDnNRb90nu%2FS0GOibjxZpBPzu2%2Bk1GsfgaIlKQdX3%2BwKYjQP51TEvHudHIjO9fZMFqxChqcDxloAlKfDdK7KEkMk%2FdnYBAWCwM2%2BTn7kguU4fYeRxQy0S%2Ftp3fLZUuN1%2BVfphtEsjS4N%2FM9FGpAuUlcQ0xGZGzYc0WgZiMDhiRcOZKbFPxPru7W5JkPJ9%2B2RnPg0TODSVpXvPHo%2BtouVFr6ZsftdorQjvj0ZTO2xeNpwNQLnIV4YAqZKqIhTRUf%2FBtlt9nlVpoq%2Bfya52YO7QGBpCMVF%2BCys8EpAy0u79IsYwhleCgnMfyHX6b2xiF7sXe8iKBp1v52fKuSzTdwAiKxMPOtCVAmKXMbtYcaN7%2Bw7DrrDKpO0DwJbNOW1sTXHlKYFFVgknj6l8kqxKom58kPpIrPF5JhhlzFlD%2FwwRgvTJhs8tongHzpPYuJztSgkkWbJJ9Do7jynsiUJQXh5qS%2BnFh5MbjHp%2BTLtwMjieE9ZnKy7YkELiRZi8Ah1gNMQZy5T5i4gzDPuZfBBjqkAU3vuGVRdmCCFL6Z5zFkwVCDLCY0Jq6piLnfZeqR7mgInFbQ335bsqIStB8I8H4il2JhjPFv%2B2yGhrvu9%2B8J5B5yNgHktLkypUsjYimVQASydusXxBNhhPcqZGoIns0UpVrgBSuRxy%2FsB8lbXRrf5fjSy5t3NxL0O67VC9D0wQ4VOgcsJKHINZQuu5oD8UUsKng6FXTg5bWUxK6X1VZNUy6qZBpc&X-Amz-Signature=978aa9bca3d7e5ee97e21f47d8978a6b282b4160c86eccb1ec76ec553a5a8407&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HV2U2XB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCCQnquD6yzItf0jaj6PXMAE4wZk%2FhEkhnAA5wCs6GdcAIhAJoHAFYriQWFz8zQD%2BOV6lu3uk47yeEqG%2BkIEVrkduNyKv8DCC4QABoMNjM3NDIzMTgzODA1IgyvaxRfHMwwHicbTwEq3AN435eYwCj9s5Re0UfQ6LdImv3IBe2gR%2B1FDq%2FuOY8boMsFCxvIMVHsGYauKGK9mlQei84VWsJIapjNIe3Z3E48HAFsNBGU467N2mnS3RC5NpiBQnJQNZDnNRb90nu%2FS0GOibjxZpBPzu2%2Bk1GsfgaIlKQdX3%2BwKYjQP51TEvHudHIjO9fZMFqxChqcDxloAlKfDdK7KEkMk%2FdnYBAWCwM2%2BTn7kguU4fYeRxQy0S%2Ftp3fLZUuN1%2BVfphtEsjS4N%2FM9FGpAuUlcQ0xGZGzYc0WgZiMDhiRcOZKbFPxPru7W5JkPJ9%2B2RnPg0TODSVpXvPHo%2BtouVFr6ZsftdorQjvj0ZTO2xeNpwNQLnIV4YAqZKqIhTRUf%2FBtlt9nlVpoq%2Bfya52YO7QGBpCMVF%2BCys8EpAy0u79IsYwhleCgnMfyHX6b2xiF7sXe8iKBp1v52fKuSzTdwAiKxMPOtCVAmKXMbtYcaN7%2Bw7DrrDKpO0DwJbNOW1sTXHlKYFFVgknj6l8kqxKom58kPpIrPF5JhhlzFlD%2FwwRgvTJhs8tongHzpPYuJztSgkkWbJJ9Do7jynsiUJQXh5qS%2BnFh5MbjHp%2BTLtwMjieE9ZnKy7YkELiRZi8Ah1gNMQZy5T5i4gzDPuZfBBjqkAU3vuGVRdmCCFL6Z5zFkwVCDLCY0Jq6piLnfZeqR7mgInFbQ335bsqIStB8I8H4il2JhjPFv%2B2yGhrvu9%2B8J5B5yNgHktLkypUsjYimVQASydusXxBNhhPcqZGoIns0UpVrgBSuRxy%2FsB8lbXRrf5fjSy5t3NxL0O67VC9D0wQ4VOgcsJKHINZQuu5oD8UUsKng6FXTg5bWUxK6X1VZNUy6qZBpc&X-Amz-Signature=d0ff6eca4dc895f4469fc8a125caea081e17387ef98feef2d6a22ad9a31a9f14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
