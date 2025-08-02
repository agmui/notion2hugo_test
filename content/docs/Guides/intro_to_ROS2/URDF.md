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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWD5Z6E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDE7zFSPBAeS13ritqRcw9SVbVEW2eCNA9GQCXnMIDkAiBNq9o7hK5VGBdEcHgDhyndOIfa%2FWXx4ztWE7Ew8O8tMSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTty9QUQ7S75sS5BOKtwDklNjCioRYqOXVyrHKFhYcJ4iLZHMLk0ncrvfg5z4mzLqCKxBHp4gK1eJ693E1V8X2HgJpchNLuCuQv1E%2BDQR35XH7h2cgk7oQgJu0%2FXkQCKL8YXIuIYTXsZyj6VZEtKuXQRDd0ia4qxByUHgbSYEO00iHJrU%2F9ug0z%2BA9vbSGq%2Fqla5Ny0bRliWQfnjbRkCTKeO2wKiPKd1mq1UmcFnJR%2B8DyBen2q0qmkczH4Ab58JpratojIMunx9pNb9s%2Fvf0kSgMhXBV49OfjeDnhGzaV0dbPBXXN8%2BrvGEfb0bftfEdOnnJa5bKWkZr8N%2FgEBGCpi5KZXQHr2PnPr9FBwHAtJn%2FpJS3X%2BnwYDm%2FuPb2y%2BaHw0C%2FCj4NOlV3b4%2B%2FpkAq9odNKLAO1VbOVBLujBvTuToH9EvcPnUvHFN1SgUfX14uObLFHNVumAlLIb%2FMde3cgeKB13UXeVXgiyXlsr7plJ2Pkz5ESUTT%2F6lYOoYK%2BmYylRy1xSocq3SRlhfjTnqyJMPurk8JzCai7G34Oak7TdkLdpdLQrV5XidCiAJ7zZYBFFQEeCngGAGtbQdf7JYFo9Y2kDNDQ4jVm3WlIMN5Yk%2FPYcSc83GL0R1d4teTJMa7SzYU%2F2nWl%2Bm1cmswpdK1xAY6pgHSNWLLiRNGWR%2FvT1yJoj6YnyvjpLeb%2Fl0MPy9kZLsnOQns16OCwPWZS3BbeaKe23zWsl%2FrzwQT37HKPE7JAhDz2a2%2FjmTyJ%2F70zIwalKB0mOErRqM5qfaaaVVJKBsHjfqLA4pfI0R%2Brqv4nICYCOVdRxyd5ZU5HdyQSnwBrEpdLXFito7BezMedjPpLZEXni8uXpe5EIOfZ1Wke9wTrS4pnEmoPA%2F2&X-Amz-Signature=814dd74cc2e49e614cf06f706d15a69b069add208c5641f9d6455ade93d4f4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWD5Z6E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDE7zFSPBAeS13ritqRcw9SVbVEW2eCNA9GQCXnMIDkAiBNq9o7hK5VGBdEcHgDhyndOIfa%2FWXx4ztWE7Ew8O8tMSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTty9QUQ7S75sS5BOKtwDklNjCioRYqOXVyrHKFhYcJ4iLZHMLk0ncrvfg5z4mzLqCKxBHp4gK1eJ693E1V8X2HgJpchNLuCuQv1E%2BDQR35XH7h2cgk7oQgJu0%2FXkQCKL8YXIuIYTXsZyj6VZEtKuXQRDd0ia4qxByUHgbSYEO00iHJrU%2F9ug0z%2BA9vbSGq%2Fqla5Ny0bRliWQfnjbRkCTKeO2wKiPKd1mq1UmcFnJR%2B8DyBen2q0qmkczH4Ab58JpratojIMunx9pNb9s%2Fvf0kSgMhXBV49OfjeDnhGzaV0dbPBXXN8%2BrvGEfb0bftfEdOnnJa5bKWkZr8N%2FgEBGCpi5KZXQHr2PnPr9FBwHAtJn%2FpJS3X%2BnwYDm%2FuPb2y%2BaHw0C%2FCj4NOlV3b4%2B%2FpkAq9odNKLAO1VbOVBLujBvTuToH9EvcPnUvHFN1SgUfX14uObLFHNVumAlLIb%2FMde3cgeKB13UXeVXgiyXlsr7plJ2Pkz5ESUTT%2F6lYOoYK%2BmYylRy1xSocq3SRlhfjTnqyJMPurk8JzCai7G34Oak7TdkLdpdLQrV5XidCiAJ7zZYBFFQEeCngGAGtbQdf7JYFo9Y2kDNDQ4jVm3WlIMN5Yk%2FPYcSc83GL0R1d4teTJMa7SzYU%2F2nWl%2Bm1cmswpdK1xAY6pgHSNWLLiRNGWR%2FvT1yJoj6YnyvjpLeb%2Fl0MPy9kZLsnOQns16OCwPWZS3BbeaKe23zWsl%2FrzwQT37HKPE7JAhDz2a2%2FjmTyJ%2F70zIwalKB0mOErRqM5qfaaaVVJKBsHjfqLA4pfI0R%2Brqv4nICYCOVdRxyd5ZU5HdyQSnwBrEpdLXFito7BezMedjPpLZEXni8uXpe5EIOfZ1Wke9wTrS4pnEmoPA%2F2&X-Amz-Signature=7b2e4bd6577360006876ee8050cd43921bd111bab79a3a56eca9fc8b3b661f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
