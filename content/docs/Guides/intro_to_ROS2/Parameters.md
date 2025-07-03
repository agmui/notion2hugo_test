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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMLQPKJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHFXdVSfwBCd7FdDgHMtAO4QZOOjTQmRrHZ5XOG9YUyAiEA3gj6xS9zcK0N0poXjRctxHBcIiymLUZX40VRO9EKlo8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt686%2BQcSvyLTF44yrcA7ZDLe6E6ZcdqxzCSNlkPKwIqN74q5PUHPCQfXW07YhTcZ4WAPRRNFWjIXLA4wEK4i1xENQFTOaLTwX1w4xPbMBrC8RzJ5osznjy%2FoDeSYhakOBel%2BYLbzRPrzhHH8FKj0xVrDq9LRDCd2iW%2FhCVe6F07Jllae7IfVuUX98IWn3o2UwtcR92r8I4UmY50Vtq5Prah93fW3OXMSlMxY0ZNFqTKcTC0VWIeihlpxoBNnJ9MjTgOP%2BNx1SUN5TnIrLNdUO7hYgAsc9ZZE3l4Gu2xR6ucez46e02xZATAYcJ5dXhKceDf5eoB8hFKA0RqVkF02hlLzO6dFWKq3JxnY13CcHOtn1%2BPiGa9cGATb%2FKusBAOl2vIXsZU5RJd8Lmc3ZgDuakLTXysXEmNulr7rEezSbf2G%2FFTXJ%2FV%2FLCAZRuAg69HPYOhAynqJxx4QgdOAhLgAVA6oq2fj6BQB%2FefNY%2FnUS3Ba1J4NdsqTvFi%2Bh0gGPdP3mf7lnsZn%2F8lT6%2B5m8gFfJxYb8lSSwPuRw90JzIjfhYIVj8utxmMq9BNmXTXuJUvpmByvASRx8wI9MD3m%2FB7QvfBK%2FN92h8rielaq52%2BjWx%2B8cz%2FDmIJW6k5Dvo1k6RtFneT2FGQosQAxP1MNe8lsMGOqUB%2BadTNejpdvK0ZINdPFcpm83BcnL0f37jRmIvg3sNAUxrWOtXXi5GdNUZh8fk7Isv%2FwjkN5ln0cmZr9da4Vch4nSRqzoQl7D68kU1bEYTcQg37BWIdOsK4aF3o9LXF4HvauB4eYvvxY4y1RCicLSgGcYzm2MaKJiOgQg1%2FLUX27ioxXXtSvRIUJPmXa%2B4lNPFFlwthIxZlwAHvZB180taHA8NDiZ7&X-Amz-Signature=93292a450902221c77836633847d2bc2b5762bc9ed2d48fe9da1099c033c69ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
