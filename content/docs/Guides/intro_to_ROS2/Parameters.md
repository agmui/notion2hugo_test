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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2BD45TH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDD29j71%2B80ygD8vMccd9ePbqv5%2F1C9uAwfVfHA7nyU1gIgNHookuLA%2FRHIzMkZKBCi4Ytn6GSAc07gvKIX15AF2FIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNdb6Jp9fO8DVbSP9CrcA3prl%2FX09qQaiST0XlOHb%2Fo%2BKOmbhaYPYEj6auByfDnjazMq0w4fm7UeB644KJQ0m6V%2FRjpsufBQLjS4n5FHul%2Bn0aJjyYrWxey9Zk%2FMyRe2wN5NwnhgA3g4yZCHNeV4UVRN8yNrZo0fVzogLveC7ytJU%2B0B7FYdUMdS8uUa0pf%2Bony%2BZGSi3pEU9T8Se1qrRHv1SPGOhysO3uU5NCZxbwld5eDstGre6cC05tr9XkfLqx0zYWYlAa4ufztUlB%2Fpkau9yzr%2BwCeTah6M7JCQXu8kS9nJvXd8JfJpMvoMRK5vfWmw9C1B%2FDbE%2FY3NDZeRmDu7Fbcy1A0ooxcmGg1Ffn16gD0cmH%2FtgYF45RICkNPPZZAoXwcBR%2FphMJeT0aoDxjPioTN4X5HRbo3BClwi9sB30c3sCswxd81XU%2Baa7zbz%2BPxCzjFrEmT1MUT6WWowG4PdPnCqgqeUut6QJvgNNFlSfoWB%2BZ9FXT2UaPHEjEptZXQoySTj177%2BRHd7VFVGqTsaHtu%2Fdj2531jOUUvGDgir9hZGC381oDXOsXvx8duZTwIeX0Ixl9HyJeVS1UUQKzwbC3XgltMEMfBlAlDRNWIylIvO1Jlz38T7g7%2FxQMCNCs6%2F1rDrgnOaqUx0MK6Mtr4GOqUBBOp9kICUky1bDgUsOvO1Int7zbtVh0C5EzFXvfr7Iq4ZaxJGo8BJMV85fewlQw1S6qLTXfklOOPa%2FYx3yKZ6ZMjtZE1y7A%2Fqf0SRqr9EI%2BWDJBGzxHjhcYUPSkCG%2BNtCBxKhOVvqjCOzfAO6iYToatU3%2F1OcJoIHLN5CN1x27WYXxO%2FeoAFLRrqYakPYfkRPPJjvR%2F4b324XnFoBBCXBO4mwA3jo&X-Amz-Signature=ca7181de42894846180a5c8c0d9aca6dcd2cc7c02e29225951fc5bc98f8180c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
