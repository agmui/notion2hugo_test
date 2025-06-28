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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6J347DI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0WvmP1oD%2BKkdfHWYkXgI1fy39FRbiLvmpuHYejjAwFAiEAoS2yhg%2BzYMP%2BDWTGWVkL3SQPZU96rsTbQ%2Fs%2FFQMS9OUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMe6ZfYGnPZqaVWFyrcA8LNtJKLnpWFH7NZSenQnw4nb0zNSvAdbtVnlP8pWrStp6yWyDxMz09di5sqq%2B8Yc23yQoWJdpbJQUh0bWx3PbzHYh6RTvgOOuiLiv%2BF9ZzcT68dLrVlXT45e6AfV63gRjN0vqYxDCQN261YDFZt8uX6IIi0yk5N2yKL90lmDVtJP6xn8xmc6v6qNpORriNJFQFw48hMAHsdmdte4vS9caAyNZdtgtpPN1THrAfyB039e0sPyPBE2pInI5c7QLyYReVYi6mvKruOKoqE%2FA8Mgzcr%2FxN6VgJ3gWNdM8Re8NcqDLgwun3i%2F%2BXCSI1iEUNafGHC%2ByV25W9MbK5bTVkkMlqJF7XnQlS1yF2CZWavkKZ9gDchklVHztyeOBhU4QVilsbWNssxt5Pz97PsnaQSLcWU04EZJJGJTtQsp8z1Q6dKMjYJ9I1NzWXrZ5rLjXvnMQCa5wIVtWuWk7iIAOwgFiESdhVspyTaaUoLqPkUl%2FU8dL%2FhcT6%2BsVsKG6%2Bk3nBqip8eUXEHdp3pZDYYoaAzr1OVofJCaKCz0kbojDUOX97IvWOGXPmJTHIhmcUDeEnfchbe3ipJ%2BRTEwnXWxNqCEuxr%2BGoK4bctGbg6VXwAkdd6HkRezWBvC%2FlnKnkpMND0gMMGOqUBDse3xnxoOfMf38F%2FIAG%2BctnGFrKu7sCx03w%2FrrtKPW24iIkuwdajO2LRbDqIcuxeSQZfaevfUMqe1c4WZl1iUI7A3eT7X9CKSJ7MM28sL45vUwNsRAU28XN4%2Fa%2F6wNSYFH8II2fkyJi4yHXqVFHGasev%2F3ExPOPWXWi6ZmtbgwmY6Rs%2Bq35VotgjQO8PQ1wMhjaHA1%2BcQmHmnXj0b1CUZWrr%2FO5J&X-Amz-Signature=0fa95774e1778916e77ec8f05c4ecc2a6ad6373d7b13c56880b98eb079c252f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
