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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW23CEQR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFOCRTCTZgRASFln01cQXIahCn5p6oejNPj1sPHC%2B0ESAiEAqDaEB63NlBY6BxVAmip8oi3M05lB0l%2F%2BfvH1MKYRvSYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJxbjSK9nENUOtJhNCrcA0uT6YHNB6SiwkVUDRxpWTEoMGI82%2FYb9QlkEuZo%2FihsSNluD88UjBBMBzvtSDwITBUPycvB9GFjV7yrsS9UBmCccwADRI%2Bctn2oWcGnbgiZpQ8c61o3Mv20vI4pG5bnD1f4Y951x6nmZV0j7FkSKuWcg%2Fe%2F5WYJAgTO9Cc89qK1c1RtrMtXKHVnwwIhIZ59vNfcZhvuubWrlm9KxAeXD7BCJ46W1TOeyyUnXeP9B%2B0gNaPoubz7ECGKISMXrxJO6FW5c9nUBEGqpO%2BXtoGmMPtrD1KTegbNQ%2FzP%2FOEvjj2g4gDSYCsc5Vhi7JPpBBBQXgNUMGVIeLLDjIsGwKI9A8RicHuLz0sJ2XO7Mqr%2B04J7UdVOxbOO%2FZqm5x0cibGsXy3agtUwwkCr6MZhIvkzCb8hkxDbkJWaIDs9qNhfom3k%2FDgxnk9zZ4ap0N%2FHl7qnbs5HCmm1e4PTlPVuDG4iICGyQkvphIxBtfOqxzNtrtcnGKNnnrCg2KxPU3ZJOULMeYFdkQmbigOBh3Gd4Tr8FVXyv3l99D5aF%2BsA3ApTQdqh1I2OWH9tpyMson5eADhckDpw9YaMW3f4jHRySwQ%2Foa7UnogTepBY%2FFWN6wOMAEQqoNo%2BXEKzVDBCtcfqMP7axsQGOqUBhEdBO58X6TW1g9NYaXMGszXX1EKEfCCpC55%2BUEp5Psi5882XUtqj7iqL%2FdyVu1cFTrEys%2FXMHzXTMyLhWp942UvLwi5PIRpaWwJbwNXBiaYbXLH3odNBDNysOdvRbwESKRKg57FMdDYjjDmwpIKqQcu%2Fcp8wZi5GdehO96h2VmPlcPmzdQorcd6NflwXvw7pYVcVHrtfqwVkaTZCo3Nl9Z0Bqm1Q&X-Amz-Signature=2e411571efed20e26bdb74e2a76938d9d8485542f372878be5a1c201e74365d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW23CEQR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFOCRTCTZgRASFln01cQXIahCn5p6oejNPj1sPHC%2B0ESAiEAqDaEB63NlBY6BxVAmip8oi3M05lB0l%2F%2BfvH1MKYRvSYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJxbjSK9nENUOtJhNCrcA0uT6YHNB6SiwkVUDRxpWTEoMGI82%2FYb9QlkEuZo%2FihsSNluD88UjBBMBzvtSDwITBUPycvB9GFjV7yrsS9UBmCccwADRI%2Bctn2oWcGnbgiZpQ8c61o3Mv20vI4pG5bnD1f4Y951x6nmZV0j7FkSKuWcg%2Fe%2F5WYJAgTO9Cc89qK1c1RtrMtXKHVnwwIhIZ59vNfcZhvuubWrlm9KxAeXD7BCJ46W1TOeyyUnXeP9B%2B0gNaPoubz7ECGKISMXrxJO6FW5c9nUBEGqpO%2BXtoGmMPtrD1KTegbNQ%2FzP%2FOEvjj2g4gDSYCsc5Vhi7JPpBBBQXgNUMGVIeLLDjIsGwKI9A8RicHuLz0sJ2XO7Mqr%2B04J7UdVOxbOO%2FZqm5x0cibGsXy3agtUwwkCr6MZhIvkzCb8hkxDbkJWaIDs9qNhfom3k%2FDgxnk9zZ4ap0N%2FHl7qnbs5HCmm1e4PTlPVuDG4iICGyQkvphIxBtfOqxzNtrtcnGKNnnrCg2KxPU3ZJOULMeYFdkQmbigOBh3Gd4Tr8FVXyv3l99D5aF%2BsA3ApTQdqh1I2OWH9tpyMson5eADhckDpw9YaMW3f4jHRySwQ%2Foa7UnogTepBY%2FFWN6wOMAEQqoNo%2BXEKzVDBCtcfqMP7axsQGOqUBhEdBO58X6TW1g9NYaXMGszXX1EKEfCCpC55%2BUEp5Psi5882XUtqj7iqL%2FdyVu1cFTrEys%2FXMHzXTMyLhWp942UvLwi5PIRpaWwJbwNXBiaYbXLH3odNBDNysOdvRbwESKRKg57FMdDYjjDmwpIKqQcu%2Fcp8wZi5GdehO96h2VmPlcPmzdQorcd6NflwXvw7pYVcVHrtfqwVkaTZCo3Nl9Z0Bqm1Q&X-Amz-Signature=e88f3e8a52ed8d39bd40e9ac955615e9a9f4a380406b5af9b00964dbce385dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
