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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNRMZK4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC8zEWFZ9ubbU5Ak6DFCIMhMyNCamju6jMQvfjhfy%2FnUwIhANMtZQlCPIpgZLkzCexBHH0kTrriYxPeLeO9L9y6E0jQKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0Beh95%2FgbnXLQYlQq3ANWJkEt%2BmLo5TNeQ3q9M6BpkEkWqriMj692jMZree5etRTINasBn%2FofxNp3rBOJiFxbTXPAwRmIgCD9BfBR34UrGK1YgBL2GKKD05Vr2QvwyL29OGJEaoB5ZjN3oYEG9JozlxNz1GwTMdQ0Rdu5IlO7ThUjZdqc%2BvAySNK0kXTXIt%2F%2FQ3fiHJikaqC2JHyXBGWqzXzp3nT9MmDxVyLJMnKMavIagU8KJavxVAkTD%2FUtsf9VNa42161%2FfzgZBVYxW1htSHFnBLM1xOu7GVtpJoH%2FC4qXdsmVVGTs4LTJXaMyouAJS3hgkjuaZt1V8y%2Fzdq7Kxvu29wF5L4zm6QHvq4QTu8LXBssqaVj%2B6FdwVtUGb1NJvF3U8nT4CxGFdp9YUAzOslaxfiK5lf%2BUQVIBVqmM7DgUgH19WJgEASxoErujzyrTjaMugnCUjbCU0ubG9CejUw%2BwgeItlMQuBaIPEX4EHHPZDL1gcKNQ5IAMPbLtC%2B1x1rON1QKli6yUfveSwFJOUdIPfOSxU4bsZhnjTBF21H%2FVRp4ZXyKWXi89GquFyhORvL3AFbFxlKy%2BLr3J4%2B0xGE1ueXaSaiUh%2BtyFNc1hvxOTJwQEsnDnlplGF9KnMy7pYiXk1ot0kZKAPTD28oS%2BBjqkARMS3RQHIga7tHAzhN0JoxlfgtBdNQ9oCfz1YkWNaYRWoscZ6uiq0FbMdPDg0AxBDSTke%2BLoyOjHf2aRyO8NEu0%2FSIQCN%2B%2Bcaew6fJV5od4nPahBftBfcoxvpx39b0d%2FGsYuhwZGNXFp1GsRs5XuQG75Vtgod0Yts%2BNyzw1VeKoHTcM5vUWJqFEYmdmy3UevMC4ynuqNMk16WCeaTw32U4UaPd61&X-Amz-Signature=3e64522cc6387b9c0b4a595f6b52de8e3be5398ec3a4383a41b87135119818fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
