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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57RKLS%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD6POP%2BDIOxS3Y%2FNtLNomHJAfvS7MKyuWyPNfSaBDnKpwIhAMaKO15RkCkHp80fPhzFMhJDnnbsFjGuRa8g9c%2BQoiUcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxReyQ1cmb0SZPm71gq3AO%2BP5%2BEpycfcj7bN%2B3BEbUZECsj3%2FPA365UO0w8SUYziHmUFL93qNplnnGTYxkXAlE9bse6TjQV3kO9MPiy5WBve94GFcx6KDRfusonQLMpl28H5hSUDl9qf%2FPentvfjQUUICsDPbqlrFE%2BVbjwaqGyGlO99k6EK8HLyvi178b6a2WP9dWS6ZbWKXzlwYjCeKNtDz3PX%2Fgt%2BtkxyTCdFMAfuW9iHlXgqsrmrxDpTsA9ruqRWpjubaZHz4sv4pplCrgBFLIOt3rdY24pYf9yPrJNdcAmzaV4mDsiLPUWK7UV9sunaGeNU%2Fku9TGxig7AqHknG2Mvkvn4jWi4IfNZljgAwGvgBngCW9DiMQ8J1T%2FRIJ5AeuEz1lZ9QdiaNkdU4ruCBsRziwyxgg6cjow%2BAfbQIjkD5x2TAJxzms%2F5RMzcKxdWEF%2FULe5b7E4Cr3IMATC4xrkU1FNEsDb8C3RtYirHa%2BQuAzUmxmRFcJyVljYW%2FWEjat4HmMxxb15%2FDXQOgeS5FEyPTZUxSuiPGpt7q4WjoafUJt%2Fava9r2r%2BL3ZGZCaN7goKJsEnDpv0TjouWcBgaF4x3z6C7wG3gWNPUB1KAr8HXhiASUixqBd85PG8HseZMwKmiPc2n%2F4yjwjCks8TIBjqkAeZEHRlfZWyWpCGHdjamIdDGUp%2B%2BGf8G3dvH8Wlcriy8M9slUhQnHoGstXaN6kAKsee9CMjbpBic2KWKXwcaod20VScD3KWhiqhljS0humg%2BcyHT7byZdXOdsgX7Ucgi%2BLXbztZttOVzpp9n73Wg%2FqDniNiI%2Fisy2cwh7kq%2BJKpO3KnOXXhvw1AmQsXDt7%2BdWPO%2B7t0hcORsLJPwVJUbfVBhmRZv&X-Amz-Signature=a00ab46d20b173a4b67a650b0040a02f77cac37653086b69f6d4e5962c445f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57RKLS%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD6POP%2BDIOxS3Y%2FNtLNomHJAfvS7MKyuWyPNfSaBDnKpwIhAMaKO15RkCkHp80fPhzFMhJDnnbsFjGuRa8g9c%2BQoiUcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxReyQ1cmb0SZPm71gq3AO%2BP5%2BEpycfcj7bN%2B3BEbUZECsj3%2FPA365UO0w8SUYziHmUFL93qNplnnGTYxkXAlE9bse6TjQV3kO9MPiy5WBve94GFcx6KDRfusonQLMpl28H5hSUDl9qf%2FPentvfjQUUICsDPbqlrFE%2BVbjwaqGyGlO99k6EK8HLyvi178b6a2WP9dWS6ZbWKXzlwYjCeKNtDz3PX%2Fgt%2BtkxyTCdFMAfuW9iHlXgqsrmrxDpTsA9ruqRWpjubaZHz4sv4pplCrgBFLIOt3rdY24pYf9yPrJNdcAmzaV4mDsiLPUWK7UV9sunaGeNU%2Fku9TGxig7AqHknG2Mvkvn4jWi4IfNZljgAwGvgBngCW9DiMQ8J1T%2FRIJ5AeuEz1lZ9QdiaNkdU4ruCBsRziwyxgg6cjow%2BAfbQIjkD5x2TAJxzms%2F5RMzcKxdWEF%2FULe5b7E4Cr3IMATC4xrkU1FNEsDb8C3RtYirHa%2BQuAzUmxmRFcJyVljYW%2FWEjat4HmMxxb15%2FDXQOgeS5FEyPTZUxSuiPGpt7q4WjoafUJt%2Fava9r2r%2BL3ZGZCaN7goKJsEnDpv0TjouWcBgaF4x3z6C7wG3gWNPUB1KAr8HXhiASUixqBd85PG8HseZMwKmiPc2n%2F4yjwjCks8TIBjqkAeZEHRlfZWyWpCGHdjamIdDGUp%2B%2BGf8G3dvH8Wlcriy8M9slUhQnHoGstXaN6kAKsee9CMjbpBic2KWKXwcaod20VScD3KWhiqhljS0humg%2BcyHT7byZdXOdsgX7Ucgi%2BLXbztZttOVzpp9n73Wg%2FqDniNiI%2Fisy2cwh7kq%2BJKpO3KnOXXhvw1AmQsXDt7%2BdWPO%2B7t0hcORsLJPwVJUbfVBhmRZv&X-Amz-Signature=771d34ddb67aade4c93a62ed91cb5d389457da68a565fa0fcfd377c17faf245f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
