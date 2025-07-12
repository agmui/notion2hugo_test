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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEWN5GH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1%2Fs8EdYIXKQM3XLOlh1kc34e8mJvlq0i70egMJgIwWAiEAyS9HlzIYbVTkcjA1q3%2BCsE26yMsh2Ltr6p6v%2BcLlI6YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaQfiEQk4xBzgHffSrcAwSsmSJ%2FenKLgoyCga2d7GEWkFgHlA0OocMyCcrB2OTjT6gM%2Fx4I8Jaxjm6eBzXxgohF%2F1IlGwsoBWKDUMmsRUH9Y7YNv3EZv9jb9JFOAuYBjD%2FDRQeZKVf9BNPQ%2BUwVgtg9toAaa01fC%2FLrx7UsstMzk%2BwegLFx8iYnDgI9QDmRRQfdyUrG90Z5FRqLkTTHmTfTApbYj3zBcPEcJRqk%2BiWYYipfTPUmwEf2S3osolms7ADCNxWxdQf3BuYkCIQnYpGFi%2FgSprlPqQ5Vx9RPHNtKaOYczUp4sMwzGuwebM01aPMznohTWpu%2B8y%2B%2BExnEC2Bdy3SKF8jj7Dm6GmeBtFPg%2B4RbRINZ6JYcfODl59j2XQxLPkd%2FHNQr2x%2BfRa8d6QLGpBePVXnLHLCG6fyoWZDt%2BHbUeDSmg6sP%2BUZMQVAwQkhifMMg6CvaqJU4DfJFliiOgCl7Vu9DciQoviA0Vv2RaGw92AoSZolS44Ad%2FwQTOYDAc3MDBTTaBVc6f1JSqHFbHqJH4ypfAt9ALv6vNU3V9u%2F7LHUBJTlpv1uTDBBlF%2FL9j98Bm2BNKY9AiL7%2FA3FbwLmG1KDmyGaNbyqiX%2FTkAk2WfTI%2FbK9W1IyUr0zsizfmtSdrDVv%2FyIrwMIL9yMMGOqUBVvCysklLRmplMAVtTFkZxAF5ujTSPWNeOlkOfsPbaiub4ihiA5t1v3pjY4ZQ%2F0T5fRrVYmG5d2G4O8KfsCM9Bb1bL2vKOVkPd%2B3LMubAKYA%2BoPgrKS9jvEde4Ez92FYhJBZDwzSgJ08jrJjLy%2BlUOmpRhav4Tg8FsGUJxVp1EBh2yj39gjKkuCUQS3bkgMigYFdBliH%2FfbS0%2FX1TU88OB23SXNb%2B&X-Amz-Signature=1a1316d6c2f06f48a605f269d1edc98539be67d573a4e60815ff4b13f7d7737a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEWN5GH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1%2Fs8EdYIXKQM3XLOlh1kc34e8mJvlq0i70egMJgIwWAiEAyS9HlzIYbVTkcjA1q3%2BCsE26yMsh2Ltr6p6v%2BcLlI6YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaQfiEQk4xBzgHffSrcAwSsmSJ%2FenKLgoyCga2d7GEWkFgHlA0OocMyCcrB2OTjT6gM%2Fx4I8Jaxjm6eBzXxgohF%2F1IlGwsoBWKDUMmsRUH9Y7YNv3EZv9jb9JFOAuYBjD%2FDRQeZKVf9BNPQ%2BUwVgtg9toAaa01fC%2FLrx7UsstMzk%2BwegLFx8iYnDgI9QDmRRQfdyUrG90Z5FRqLkTTHmTfTApbYj3zBcPEcJRqk%2BiWYYipfTPUmwEf2S3osolms7ADCNxWxdQf3BuYkCIQnYpGFi%2FgSprlPqQ5Vx9RPHNtKaOYczUp4sMwzGuwebM01aPMznohTWpu%2B8y%2B%2BExnEC2Bdy3SKF8jj7Dm6GmeBtFPg%2B4RbRINZ6JYcfODl59j2XQxLPkd%2FHNQr2x%2BfRa8d6QLGpBePVXnLHLCG6fyoWZDt%2BHbUeDSmg6sP%2BUZMQVAwQkhifMMg6CvaqJU4DfJFliiOgCl7Vu9DciQoviA0Vv2RaGw92AoSZolS44Ad%2FwQTOYDAc3MDBTTaBVc6f1JSqHFbHqJH4ypfAt9ALv6vNU3V9u%2F7LHUBJTlpv1uTDBBlF%2FL9j98Bm2BNKY9AiL7%2FA3FbwLmG1KDmyGaNbyqiX%2FTkAk2WfTI%2FbK9W1IyUr0zsizfmtSdrDVv%2FyIrwMIL9yMMGOqUBVvCysklLRmplMAVtTFkZxAF5ujTSPWNeOlkOfsPbaiub4ihiA5t1v3pjY4ZQ%2F0T5fRrVYmG5d2G4O8KfsCM9Bb1bL2vKOVkPd%2B3LMubAKYA%2BoPgrKS9jvEde4Ez92FYhJBZDwzSgJ08jrJjLy%2BlUOmpRhav4Tg8FsGUJxVp1EBh2yj39gjKkuCUQS3bkgMigYFdBliH%2FfbS0%2FX1TU88OB23SXNb%2B&X-Amz-Signature=5a8b92a6dbb5beb61e2cb71de6f6d4435fb7910f6512cb3b352f40c0b163466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
