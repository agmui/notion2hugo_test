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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6ZCAYW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE7GygP7dxEOjp17WFTGHR%2BntG4JCAcANiUEt25Ce7q3AiEA7NAvpf09otL%2B0XY4GshqXNY0ftt76O8WbhraynAxxr0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLATftt3FPV8stgFOCrcA1jF4FfjmjJqlF3ZWCTDa8oOIwvlDhus%2F2I1UuyF2HuMefAgedIq1vCQTYhiJZvvFLwuChHFtqYfMBmHQOqmRI7yszFuZZB8hZBddoYSKO0LtwM0XuCNARVVatguqZH96i5Tw9Ve%2BZs5ZVCEF3YoCGQ%2B5nuK5XOICjT52jBSB%2F2wx7QMpw%2ByEafzKyD9U3ZFz1RGwNaGhvqQiXebD3Pa9ABoHiiKp%2FHTU4mSLVeZXqpdfLz59SzYcTLop36NYUvhdD0%2BtHB16EWKhdx35vj57LBuCw3JnGurmR5y8R%2B17ym3trW%2Bx%2BcJSiuK3aWyVBelq6hXAA7g2GnnzlTZU%2FvXqgk5ZkiDKctwQms3%2BlH9hXtyOO0PNTRKY90fMJu0cXkKHWF2%2BEIdxFgZFKk%2FG0cMDNj5Ao7Sqmb06Uz%2BAepjSS3Khek4BsGVs78PBPWN7RCavGjbJbkgXqQyUu8PIt5bbZXYfLLv4%2FPYsrJSBHeX8UZsHfKZnZX1nfDZNDbLyhFOpdr7sd5YpJL6xO0Y2L%2FjCv%2F5g6VykUtJge71wr3QDfLChPxDWbEh%2B8DuWQdN09aS8a75us0Jwt6BZvnSBrx6ZVNrwflc3xovUopdvANZQbIZn0VCla7J%2FuRZtxwuMID2y8AGOqUBg%2BAeKl6HyL7AZK4qRzUiBYyLJrHtP5fYVb4AqKRwHUOLFXObkAXFrJrPkblmRNu4ukROF75e53kNnbANuISCQLJlXgayAI30SuCI2TdCRVaIm%2F6zDOcyUQnJ6eavxW3NHTmccu3UGCOR39ATVUHOj%2Bth5Tw0fIkMOnC7RG4H6S9KU%2FP7asUTlQvJOqZ%2BVam51%2BEk29YmckGgVKu9HB187mgtcCd%2F&X-Amz-Signature=4aaf92e99ea5d6da572c0b513ad2c465345936468ceb78e552db2b3deeed288f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6ZCAYW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE7GygP7dxEOjp17WFTGHR%2BntG4JCAcANiUEt25Ce7q3AiEA7NAvpf09otL%2B0XY4GshqXNY0ftt76O8WbhraynAxxr0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLATftt3FPV8stgFOCrcA1jF4FfjmjJqlF3ZWCTDa8oOIwvlDhus%2F2I1UuyF2HuMefAgedIq1vCQTYhiJZvvFLwuChHFtqYfMBmHQOqmRI7yszFuZZB8hZBddoYSKO0LtwM0XuCNARVVatguqZH96i5Tw9Ve%2BZs5ZVCEF3YoCGQ%2B5nuK5XOICjT52jBSB%2F2wx7QMpw%2ByEafzKyD9U3ZFz1RGwNaGhvqQiXebD3Pa9ABoHiiKp%2FHTU4mSLVeZXqpdfLz59SzYcTLop36NYUvhdD0%2BtHB16EWKhdx35vj57LBuCw3JnGurmR5y8R%2B17ym3trW%2Bx%2BcJSiuK3aWyVBelq6hXAA7g2GnnzlTZU%2FvXqgk5ZkiDKctwQms3%2BlH9hXtyOO0PNTRKY90fMJu0cXkKHWF2%2BEIdxFgZFKk%2FG0cMDNj5Ao7Sqmb06Uz%2BAepjSS3Khek4BsGVs78PBPWN7RCavGjbJbkgXqQyUu8PIt5bbZXYfLLv4%2FPYsrJSBHeX8UZsHfKZnZX1nfDZNDbLyhFOpdr7sd5YpJL6xO0Y2L%2FjCv%2F5g6VykUtJge71wr3QDfLChPxDWbEh%2B8DuWQdN09aS8a75us0Jwt6BZvnSBrx6ZVNrwflc3xovUopdvANZQbIZn0VCla7J%2FuRZtxwuMID2y8AGOqUBg%2BAeKl6HyL7AZK4qRzUiBYyLJrHtP5fYVb4AqKRwHUOLFXObkAXFrJrPkblmRNu4ukROF75e53kNnbANuISCQLJlXgayAI30SuCI2TdCRVaIm%2F6zDOcyUQnJ6eavxW3NHTmccu3UGCOR39ATVUHOj%2Bth5Tw0fIkMOnC7RG4H6S9KU%2FP7asUTlQvJOqZ%2BVam51%2BEk29YmckGgVKu9HB187mgtcCd%2F&X-Amz-Signature=521436ee4d558b7fd13c139454472ca29fd55d62cbb8953bbd5c47e38be10d40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
