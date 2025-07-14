---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QMWYAD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAe0c8F5hsd%2FLDY7svB7fybD79%2FJh03y%2FFfGkQ822ijzAiEAnlkQBGeUuDDLXf5d6RqwQt3XOQ4DiSGvB0CkIWI3wzAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK6AYyT0fCO9cvyS2CrcAy7g9k2VsJRNx%2FA%2BOCCkXcN9DIQgk8l505Q4VLxV3ooPMAlHhQ2Kf1u6Y8FRpF%2BUeb4O9UtcmHXMYvhg662mVNuSN1CCUJ%2B%2FNjJhHTtoEhHYv%2FO7mTGgBd%2BBFJy6RiyQX9akpRl%2BS2Yo42pNnwioFQLCC7XZnPxhcP5O4%2BRfE1tSZYGHanD4jfXzbvZE4v5l1NFHuqda3O5aMipKzMslWgDcnW%2FvrgUHhekNBH4AGtbu4AA1RbnEn7J%2Fvkgh2XfiP0eREDQR4Ku1Mh28QIRpS0GvKSplCJ%2FL5Q6BcGV59jh7HGScKNDuneZdQN9O48dqXvaggp9o%2FBnbcS3hcV7wOO7r8o9iEJY0rsFHC6N38GlF3E7YzEHHaIUUPwHVXb0E0FHI2FzSDle2LQTbBswTm%2Bb1Af0lDyg4EF6ygH5%2FYvOvkyqTSERzu1GwSMQFmv52214dq5U3ouha66IpnrRIh1KssBfkUFxP%2FD7FGQxgnL9z18k3bH%2FvMVevbnwDJ%2Bg9il1k3jqGyl4fOrSOisfh82NpiDdW4ndqhLFMOyqVWt4ZjjqxY5NFAIBZLB9VPX9%2FFsVK3oSyL4SHez0WFhiSFSK6a6Zd%2FVedBLzTcV9guqqIXzZIeMu36Zy01u9BMOKF1MMGOqUBbILYJdjW0oIA0u8kFP4KEWvOVR4N3%2Bvz0Llwbx3IfC1NBougCX03A0D0c8BHVzgBxT9U9CKHB5z%2FesLZxVNFBN7zz45CHrYtQM7WUy4NxQdvP1ON6zZiaAWoUm%2B9cAxnRcyKzpmNkqsYht1QxEnaH7za0XB%2Fm2QIsxIuZVPC5VW6GNQRf5BVqU4aROVAo2zA4FBZx3THVEnQ7VbvMmmUMdUdhcnP&X-Amz-Signature=4a65dec288236a543c1f070bf37c5f01899c13d59ad85269cefddd624474458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
