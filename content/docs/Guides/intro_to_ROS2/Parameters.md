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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZAVZXZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxN59BjmkXyu8IvDNNz9acxE0hODw7dkFXGGZ4PE%2FTuAIgLQsLNz42IstYzKlZYi9pvfzE0n8zMfYZ6uIZat3IhVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUWCsuzCTIVqvPREircA3HGZiRBZPAN2z1rxyLiACyb5znku%2FlqGdiePHTFEkJvC5JFGSIm3cqPWl3Qng83a0OnuunxqMy3gq2%2FC4M3bdBbbqXaQJvjJBdGYQD1blFNS0vKbrhGj9437nTRu1VHzPxFfCGdd%2F%2FEZqmCEOYMVPRXx005qPBHR8Mqc4p%2Fab3s21X8sUL0elW5b41qaAB4gAvOTx%2BCBg3ocxaqeVhqqug5MSCLeCNvT1x1E%2BZ0uz%2BiDYKE5a5JO2P7IqfoyRk4Ovg2O8ZelowMkc2jLAwYOum1mDVkjdy%2BuL51YJlr6VJ4RA8zTml8BdRPbeNUq5UguUpta1EEr%2BPFkJf1%2BgnJ%2F0F54pCnoXYq5H1Kh6wQSmi6yS6WVSsUHnGuKnK8JO4MRYsE55goD1rfQlFsYrcHbKHxAXEPrwoV4gUB%2BpFn5D2Yn5AZm2rtiRIrgpnk2Hpp%2FuyHyDKX8oKuPOjpSxFw5W35h8D%2FpZoiHLpy9SG9D1TFdi%2B90Pa2Y%2F%2F21o8Cu7NIYN6PeC1m8xaItEVb8JJYdZ6LS6IDgb1lxWHHprwo4gPdqy5laFOUHbww0HfuTAIkn2vre1hnw66cQY1qeept4VuP%2BS508YIZgkP3knpyZirFd6HMT9TBYHuYIg1BMNDi3MQGOqUBmywCFB5Vcp836TybE8bAtdnvnCzzIMyymrp1FBqe4w2FFs8OGH31DHW0VCGRRgeiohSe6lF%2BcUXI8UaUhRq%2FiKNlueivULlHb%2FHGxbyv8rZVIYvXvmXzXG1tgRH4bhB%2FyDKCNhkbSXM7A9F8jic%2Fzfv1zu2CLGg9fu9ZQER24TRTRezjEo4pqvL3Q76RcDZIryKSuNsWA0YFVZPqkJWO0OrKdzvr&X-Amz-Signature=0dab4f25e596aa17e69082b307423b8bfe4c6428df7ac71526031d385e966eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
