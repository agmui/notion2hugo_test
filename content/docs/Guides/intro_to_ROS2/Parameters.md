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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KBUOGB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6janDVXR4X55K3nsrOz9qgWcJm6m6nZrEzoR2up%2FUlAiBvlhmmZITZE8FoQIdIkXPLIat%2Fx1zfUfRD%2Bk1K%2BOTHiSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V%2FJJeXULPHjEpboKtwDFVTMIGICLOJKqTWfY0%2Bg2V69eyGwZWvKC9nSjMcXnqrYpdz8QpYfjIovO4GTuucBRyDCl5IIMmdY1CFr5gMXDaQrfFpm7tL9eVcytqUA4bYDi%2BGlqaFJDfDrqLhpvIsVnh3yKrtTnFMLaIhMpop36%2BiM3Y23wknLHycMRkmKqE9%2FWQblCUFtHpBU8j534OAMm%2FQdeRlwoeboPoqd%2FwXpSfKrZ3eSN3nDBC%2BbAUEtpLaYC7%2FwzHxCmlwy3dbjMVp4vH06H1acRRD70ZRIf1boNA9%2B16mKwBLGuMsn6ygxvbITS9cY9DffVyS%2FfI01G%2BiKiq6AezCHNuUTcTb4bJPs7bBqWGzHQxO8p9cSM7v2xBRYEMCNPLx9pqH47EQa2WjccBOcFVCxX2JaxaTyaD%2FKuKh5c%2FO0VMjwQofzCxB%2FZFPOCC0iyvqhhVzqAwslqcV6Xja9vLDxWpYYQJwxcMyb86V8UAnpd854fwnzWoNJTxy3yvvscsOgsj%2FNEV6b80EL42M0w9gRq3Sfur0MCRQpRY8A2za8Nt7wLKZsbz2134l%2B9hcKrbjluvYD5qWNaC2%2BKEpAoGq7Kt44pfHnT%2BNcFfFUyneeSqz6M6joeaVrQGUtQUoX39zOlsPURK0w5MvZwgY6pgFCJwSGTzaUPKLAXrQUYGQEBc3FD9VYnqehx3TxojZFR9X1B2n4Zhhp%2B%2BkV%2Fx6FFAQSK8qq9J%2BkneWvGHIb0IUYDRTO4tGCsF33Gkiiu%2BP4dX1%2BPm9y7Cixt0n%2FjIAnU8o%2Fr6vvj5J96ZNUzyR6027lBbFwzS5RnUS6TGFhkZq1P2RZlo3Pa9Cu7ElwJMofUs5ibPFMw1UmtjhimNO%2BanVHyUCOHebL&X-Amz-Signature=ed0ee089164c011b220e85ae736044ee7fa8d1dddf495413008dcd8f787a1cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
