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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7YKZOO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCRFMu0xS1L4nrwwfTJiy%2Bzlt4BAgAiFXdZ%2BJqgRnRkdAIhALIgkweCjWOc%2BF73DOaHPDisPGVZD3FuiP%2BAxb6CQ4FxKv8DCFIQABoMNjM3NDIzMTgzODA1IgyxCgLrZdd9HQAkJkYq3APAm2mU9ETL1zt4kPAuVAy1XA%2Fk2aAZ2WsNApZ%2FmsG4QlxFWsJq9W%2FXon4HBuz7kYwQOzynAqhvlb7lpfDNSKN%2FxmVp9PbvLTRU44O2zjXN0KIMzKTLpqisTh%2BzZE1e%2FvJxpyZCmUR41ZPZmxuCIMrTxt%2FL03sH0JCzfqJISPXJ%2BINDeik4Nf0eYUyV3ETghKNt7oYBYgI2cJtREMB6n9%2F78GVV2I1Yx4KQUFsdOsKYlANfqoLBmuhEn%2BghcoIqtDuLxw6rq6EcS6Okp4OXUu9Yq0pWf6OhnZ9tu7SZD66kIjMHuG5beEvalrIcFJ%2BNqlxelWFu5ZaaW8et%2FK5s1XbEmRq3xlTYZW%2Frsa3LbWgvEhL1mQl8s%2BJdXmNY8SFsTCz2vsPSbUwTsGtWXo9trjIOGIc5SYitYeyaQDKGGBqKHxnZ8ID5L6EKblxyWS5dwDJLSt1la59fqGy3cDF0DGIF5pclzU5xa4xdSuk541YLH7DmlBbDJF0VuTy%2Bjkaw5Gpg1%2FF1F0BVMzGaVUQ1ok7NaXPTlMDoK9twQVEClxBTpFkSRm4UfNNsgCVYxqzyd%2B6rul4CRtjfmDx3GZdwGnuYE6huaBxHjsoMoqYSY%2BJsgKMYmqySaP2aNnliAzD3jKfDBjqkAc5NO%2FbfDPAzXihDeZwNlr984K14yqJib%2FuH%2B5LGb6%2BcsheLRqSszOmkmB%2Bkr92ciMCgpc7vGhNY4MY389qx7eMD%2FuOcQCkJ5dg6RKnTxwQj5d5C9l0Sy9wcctxfkyOOZ9z5T5PAkWTnlloP79hmwsYiuU60W4YU4CMBBNv5K%2F8Nq8aBY0FaoasB8QEkoGSsE1IE3lreo65FPf3cueQNdA8B00Oq&X-Amz-Signature=3c31f0a3831c6281ddb7a2f289582749c655659d41da3e320f52567cbf7d5935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7YKZOO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCRFMu0xS1L4nrwwfTJiy%2Bzlt4BAgAiFXdZ%2BJqgRnRkdAIhALIgkweCjWOc%2BF73DOaHPDisPGVZD3FuiP%2BAxb6CQ4FxKv8DCFIQABoMNjM3NDIzMTgzODA1IgyxCgLrZdd9HQAkJkYq3APAm2mU9ETL1zt4kPAuVAy1XA%2Fk2aAZ2WsNApZ%2FmsG4QlxFWsJq9W%2FXon4HBuz7kYwQOzynAqhvlb7lpfDNSKN%2FxmVp9PbvLTRU44O2zjXN0KIMzKTLpqisTh%2BzZE1e%2FvJxpyZCmUR41ZPZmxuCIMrTxt%2FL03sH0JCzfqJISPXJ%2BINDeik4Nf0eYUyV3ETghKNt7oYBYgI2cJtREMB6n9%2F78GVV2I1Yx4KQUFsdOsKYlANfqoLBmuhEn%2BghcoIqtDuLxw6rq6EcS6Okp4OXUu9Yq0pWf6OhnZ9tu7SZD66kIjMHuG5beEvalrIcFJ%2BNqlxelWFu5ZaaW8et%2FK5s1XbEmRq3xlTYZW%2Frsa3LbWgvEhL1mQl8s%2BJdXmNY8SFsTCz2vsPSbUwTsGtWXo9trjIOGIc5SYitYeyaQDKGGBqKHxnZ8ID5L6EKblxyWS5dwDJLSt1la59fqGy3cDF0DGIF5pclzU5xa4xdSuk541YLH7DmlBbDJF0VuTy%2Bjkaw5Gpg1%2FF1F0BVMzGaVUQ1ok7NaXPTlMDoK9twQVEClxBTpFkSRm4UfNNsgCVYxqzyd%2B6rul4CRtjfmDx3GZdwGnuYE6huaBxHjsoMoqYSY%2BJsgKMYmqySaP2aNnliAzD3jKfDBjqkAc5NO%2FbfDPAzXihDeZwNlr984K14yqJib%2FuH%2B5LGb6%2BcsheLRqSszOmkmB%2Bkr92ciMCgpc7vGhNY4MY389qx7eMD%2FuOcQCkJ5dg6RKnTxwQj5d5C9l0Sy9wcctxfkyOOZ9z5T5PAkWTnlloP79hmwsYiuU60W4YU4CMBBNv5K%2F8Nq8aBY0FaoasB8QEkoGSsE1IE3lreo65FPf3cueQNdA8B00Oq&X-Amz-Signature=e2b212e5990c83163a0d441301ba7c03cf4f68ebd2e0f788fefc280f2a5e5beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
