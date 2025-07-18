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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQS2FC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCbW0Zo7iWTdTqXxxYO4PJphCTfKDjffM2ZkMWgzbugiwIgRPXdvcwi%2Bzr97Mfe%2FBz3Q5EMLFGzOmCue0jeghfxPMAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkep4E%2BpvHwJQ3DzyrcA7qLtoFWdBkbpWhwBWfeuJOW8Jj91qo0c%2FhVtrE5OXVxNbg8itXLBX9VU%2BAYoNC%2ByW6gcmtL%2BZKREtLPE6t1oW2cQbqTVglEE6p7Yo2QtQdB8eEtJWAqgw2NM53LB7GeHEHl1GOKmYwyDZE0BfLflobNw46mKWNPRunYuoT%2ByKmI2Vka%2BvUnwPekDykZ5U%2Fy6irxPpEtsJXbJyOyXbeLBWfbIaLr4cVFdxe4pI0LmOfIjUk0MyEU4yjurn1GP%2Bf7HZEbpsUGyWfNvf3lG3HApAvwe3I9HzW9HrvHrMq8tHMAyI4jioKfCs7y3mku4qA6awGWSBOasKCr7zJqgyawaHtCgnCy2dKJRCNhpLh58bXkcwws5SRPlS6FDGIWJklHaZmpmoRbXLFE%2B6zUJf%2BlU0t3ZvN7BbxgaWiFFtwfue02i5MYq%2FEc%2FiQiaJPnq3JCPA5BmrE7KoypL3y0utA6en9I9iEJ%2B0EbVvHYHODOZ%2Fqdh8ikhEe%2B16FHi15q5LjGmHErjuByQeNAOQaTcZGT9vVAFaPVLYOoTii%2BPf6dXXyIN4SevoEUsomfT1s6iGKbaEs6PyprEbuMM1C0iLY%2FfCXVwmlTnI43NTlYQgddVO68yg%2FjWyPzXN99oJKyMMuI58MGOqUBo72rRX%2FT1qKG4ssnF94%2FE48L%2Baoh2C07QHJfXiedmrXsHMdj0Tg4wNzABzqZJvAN6NRHr5Xcr6pZsvPEZRcrISBJXEYZiWdvjTGnxeAymHMe3jqcjRnhZ0bgS2RnZNYW3Q7G8qHGo4%2BkkUHWbTUlHMxXMI9DKYzjSoJRXVnhEsW0tShiO8byJisStIIUgSNEZDw2pmYEb917aWR3zZ4gQjzFfIDO&X-Amz-Signature=3cc002f19e7f63fee28a2efa8dd9549b7a86a28fb52dbdfabe620cc5dabcb630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
