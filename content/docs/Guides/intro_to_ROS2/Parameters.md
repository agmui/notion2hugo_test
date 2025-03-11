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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVBYTO4%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJFMEMCH32sLGmoarH0Cx9QAiWumNFs7uQXMq0FC2lfGeke%2FjoCIFGZHV%2F7lzFAklu550C57uf%2BlZT9MnmiZq6G8zD%2B9fXiKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtGHN1Lg3uAzkwJmwq3AOtZBnlk1j%2BErN79Sva0zuR3WpwfwsiDcQNG1U3OQDXqZGprs6NYo4r3Rh78TXvEMzrD7glYgkywqYjEKWBYGAcAoVaHB6eDJVyV5jlr1m9neHfLDbeYKesNwlJZRmHpvzHuIjJHNBm5rz%2Fd3YfgpRb0UCxC1cOmEN9rQTqwms85zdbD2RdungLuqNpNA6bFn5TeoExflpwFdKaKSqvuP3QNKtLLp99WrL%2FjmbVbUKfNg67%2BisnCd%2Boe12EmVG7b%2ByQDluZdlKZmB9SeNIpSq9gdG9Ax7ST516bb1FrK4IcucJLJEpUU0t4Zw6fJfRPcnRyElzgbLzmaJwR9GTklq2bmO7xoP6aHJ85RYoQPNR0%2F0SBaSbssbg8oLv8jToz0mI6oWLIchEKNuzT0qTAaveVJ%2FJxIQ4SVcRWq5vI%2FlU1y5f2jEXYylfg8fXWBIhZxeOEsNoTYabx67mUpgVP6JT2yJyG2NlnzoIGzEp79xw19pmTPcO54JS6l6oyTUhUMTdw7nH7NDJHRzgQN6bwu2uK3Bnx7cDpZgqpNWqpVbBjD2b6yqgWYM%2B5tXDo16DgxIdBn%2B2lbj7VOPUBZVlMBhJ%2Fr1gPCaTUXFg9S3bdD4Vrox2bClb9Ia6NML6F9TCn8sK%2BBjqnAd0alLVdbxyKlHXM5r0fS7XcZjZETjFPiYTS%2FPi8VaTf7yli9ZGjhcXqW0yT%2BfwV%2FwfxBY%2BFRYCh5%2FWmwpkf5HGp13pSF6G3gh3LXe7BQ2XBy%2BPBhLAP7z3N9HLbVe8YpZNKx3uR2J7hUKBX3dd8hhWuBjgRFwmCsYTCgU8a6Rzt8NwGUVJhGwH1H3%2BhxP3WERX9%2F3qctyFkgjSfXosTE8OoZl%2FzYd4S&X-Amz-Signature=4145ffa75c4400daccd06908dfec9dd2d01a0e062fe93ad12a3d8f55a152aa34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
