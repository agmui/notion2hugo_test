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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDZI4EG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIF4bvpfP%2BirSTCEnRTkDITWyA8kgrh3Vk4Y2mK08zwXUAiArKmjysai2%2Bi89yHV5n%2BYkhNb7atlou8tc3PBI9x%2Fjoyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMHENY3nI7cxsYtQxOKtwD6utuVwBEOcUltHkZHPBBW0gklxjRPcT9n9zYDzE%2Bk7qjAte%2BTUuggVbtbbWwbt%2BgnFvdLx10juZx4rxUwRjoty0EKmmbmdUXS69w5W8zCalNcjruykgSFESahZXcjE7%2B0%2FKRwF3ishMBQCix8uDGUX8Ki67pqBPt6RhmA2H%2FZsxQGYpsFsaQTGWqVPHIe21wGaiH%2Fzxs4YbpZtHXnVaQeayUqBq2n2CslAROeuGXJdaarcZVWyWeAweeRud5nGDwfkBljtZH1ws%2BWu1wJJ3jNp6%2Fru41vIGAAZEsoDjUSqwo%2BqUuSZSpzCXAYRt9Puh%2FdQFpXq1Ipo9i9O89k%2FaePIDBTpauBsXpMqWheNRpYFkxwlEOSIGDxxYHEi%2BN3eYbLqzm%2BWEnajYjaXq%2FbGoyDoL2TfJm5yLVtBiJYpnpgXO%2F6WhwsPeR8UgHnNf1lpulZag3uLnPrwBUgp%2Fl8PdM8MyvwXHKxbixKY3dJ%2F3KvHPJP82cYsmRLZqP5AkLkDg8cfkN9Fn38ZcL883FO7VdXKWiFau5sinMOaSS0Sk9GWsDLCXcgtbbx%2BwyEyh%2FuEgCdDsXyYIkNMVNAvqGOd1RxL4M1u7wvU17inSX%2FLFEEReNJmicVYQDihI9fd8w1dTmvgY6pgGOq4Hu2Ot2y60zuhimUz8xxJR%2FmsQAvLhLKrhuK09XvHGq9fIbeFXGLAxkXh9jY%2FYlAIo2hNGJlWW%2Bd5vwtEQuefbuUGB5RxD8rPtLpdM7oMOzCtGPXZruIBNkSvfJt4j0V76ol9D1lRFqAYpgXewmAyNLO6L8AiJ2dg3B70yosciNdFjdjoxDmxIWUYTVRzEegheR8VdRcBI%2BbUQMaQx4g5bQA%2FUY&X-Amz-Signature=2e3d530f30bb37014104d0b433db9c238a2705515a45c7cbaddbf818d270d7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
