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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKMMWNVU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDui7rSeTcFixTb9UACzxsBp3BY57dS5cjTgEoAtOTt8gIhAPTTHBucIvIsYC1VjLR887Iei4CV14uaO6PXwDlDSeC7Kv8DCE0QABoMNjM3NDIzMTgzODA1IgzO5i%2BqNYLkvvVtxfMq3ANQ2wvTRN9bFBmMO5j13ALeZm8xolrS4Z2g7lZpHct8jTAYxK82cDMWQihz0iJysrWEEDw8Nble3xUmgG5hpQMqiebPJalm0crKmZPCT59cUdisJlkkJ3SW1o38tZmkXVgwFAA4n5%2Bf5b7Ty%2BzFSSR9qhPgDg2XBAjEGNhanYHjavIYPfvjhhpXQr5mxKM%2F35aE37fY6zMdGvGMAcqbGV4brm%2BkO0iCF2uezvb8qL%2F%2FdMTEeS7KNZCd19k%2BAutEf1IREbPGG3i8Yo%2FijomdSZZH46cr4MAHsVD4iwFHQPp5vqBlbD8xoiAmspTKxMipAMrS7mAxgVrgJRh4sYGWA2Z81PcgYnhwaEx%2FE2Bgay3HEyt0zddSg3fZ6wa6JOGzZF6H85z7SinJHTrWG5D7fWa8nTrvJXuHoPlXTJZewJ2cdEeAhD82lMHkcwYgIEP3MYchVmNv1tCexpJ6oBwUTBLTLDoM5D0t2767ezIkedGPhGwJFfTsh129K1fYE40%2B%2BbQBmds3Ynd52P%2FhpojOkN9QCRq1itq5YASsLj0Xr0ZKzvuOaIdFqp8OiyciXA0OxC5COqSyfhbr6nyKOkf7dJwLgUkoFCwf9GN8iBTnfSAH2chaZFDtUtONFnppSjDFjfnEBjqkASigY3AB3z%2Bzwgt8s%2FXp97t173czDkngyQ0TLXe76Jj8kDExiepTcIRg1NfMCeEtHH3Qnj3Dd2AwxUtXAYewM1TmXdY7O8u09MKiuRPLIfUx1WT7LaSi5lsKWLdnG6srqAi5L9mulxEjfE5urBmbvIB2mwqkJ0xVz%2F%2FX7fHbqZt5bVT01V3Bfu64tEgiPZTmkN05q6SY3kgiVa9XsrWNlYHYID2%2B&X-Amz-Signature=c0174f051cc69498de5cb89c526ffcd3f9bba03f6dfd874b8a1074776572cae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKMMWNVU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDui7rSeTcFixTb9UACzxsBp3BY57dS5cjTgEoAtOTt8gIhAPTTHBucIvIsYC1VjLR887Iei4CV14uaO6PXwDlDSeC7Kv8DCE0QABoMNjM3NDIzMTgzODA1IgzO5i%2BqNYLkvvVtxfMq3ANQ2wvTRN9bFBmMO5j13ALeZm8xolrS4Z2g7lZpHct8jTAYxK82cDMWQihz0iJysrWEEDw8Nble3xUmgG5hpQMqiebPJalm0crKmZPCT59cUdisJlkkJ3SW1o38tZmkXVgwFAA4n5%2Bf5b7Ty%2BzFSSR9qhPgDg2XBAjEGNhanYHjavIYPfvjhhpXQr5mxKM%2F35aE37fY6zMdGvGMAcqbGV4brm%2BkO0iCF2uezvb8qL%2F%2FdMTEeS7KNZCd19k%2BAutEf1IREbPGG3i8Yo%2FijomdSZZH46cr4MAHsVD4iwFHQPp5vqBlbD8xoiAmspTKxMipAMrS7mAxgVrgJRh4sYGWA2Z81PcgYnhwaEx%2FE2Bgay3HEyt0zddSg3fZ6wa6JOGzZF6H85z7SinJHTrWG5D7fWa8nTrvJXuHoPlXTJZewJ2cdEeAhD82lMHkcwYgIEP3MYchVmNv1tCexpJ6oBwUTBLTLDoM5D0t2767ezIkedGPhGwJFfTsh129K1fYE40%2B%2BbQBmds3Ynd52P%2FhpojOkN9QCRq1itq5YASsLj0Xr0ZKzvuOaIdFqp8OiyciXA0OxC5COqSyfhbr6nyKOkf7dJwLgUkoFCwf9GN8iBTnfSAH2chaZFDtUtONFnppSjDFjfnEBjqkASigY3AB3z%2Bzwgt8s%2FXp97t173czDkngyQ0TLXe76Jj8kDExiepTcIRg1NfMCeEtHH3Qnj3Dd2AwxUtXAYewM1TmXdY7O8u09MKiuRPLIfUx1WT7LaSi5lsKWLdnG6srqAi5L9mulxEjfE5urBmbvIB2mwqkJ0xVz%2F%2FX7fHbqZt5bVT01V3Bfu64tEgiPZTmkN05q6SY3kgiVa9XsrWNlYHYID2%2B&X-Amz-Signature=eecfb07d49a090a732e7c61216ccbdf40e229f7c74609a18825ab843cd125e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
