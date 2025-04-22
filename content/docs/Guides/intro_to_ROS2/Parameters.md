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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H5XNP5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJIY6jJdb8lWpR5814qEg9kzrEGkB8EVMF5FAZZtstmQIhAIUMQpT88JGR9%2FQlhgYbdl1kNMkUPLajqFFZ82Fl8c4XKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbFQEXIpdZySgrLgq3AMFn8pyUoxsiXNPVadIbmWRHsdTp6U717UWtjYrp%2BM%2F9WuZhOF5ELx6zX8zG%2Fv7pOTOd1liyPoPPTpESSYXug%2BjnEeOWKitLTBojf%2B8C6PWoSRz83Yf2i8xZhhrtl6MJH1djgBL8nv3CmmGYjT5mpfDF%2BM05zojawTH%2BqajfIK0ZjRrnuj6J7m2Th0KyV%2Fglmlk4wXEXjkfG9eSIpnCIdU7L%2Fxvv3BlN6LQtLPl%2BeQODV0CmU9QKloZFwRUVVjFgPMSq25fabk05j86OWi20A%2FpDn%2BvKS9C53%2BAhxPz5QXPt%2B5nSQfoIPfmoWkKNVhHn7I22%2FkeLLN70CEBbGIDQXQRcDFC%2BzQkwNUGMsoUxOXTTf%2B67wlP7qVnkWQi56xivEqJqjqBNrOvp21AX6UdwgfwKcGNnoCTiT4NL5%2FPzEr%2BbnT7TYKhKNtVmByyx8iocwotJt%2FusMEBPjgT%2Bdz9dO5DmCfi5Rx0Wmrc8xXfPS3BCX%2B69JJqppxIbfj6pEiaYUmt18eMWHvkLeVngcQbJyPCsKNScjGWIlJ%2FK6mIzuXsc21LGiCjbgrEc6lI6o5rv8hXJpMcDQ8EYIOpey0CjlwVad3WXQn7qtnE6rW90Tu3JG1MmlFZJxs6xJYmezClqp7ABjqkAaO9fXE7%2Fds2tl6%2Fw3%2BEu%2FaHlnAAIkFlZ2pBirp4Cyvnkrd7hf%2F54gL5S5%2BHTkuGN9U%2FlXYGIGdygWDRiaC0Qw1nRVnh0ebpLpsmRQp0s9oXOalXN16fcrjDSZpWILFN6fYQQIiWCOaCL9pF0sn8bvUchLd1TVF59hMEkTE28YTY86GxR1Rq0BJ2LaAx8g6Qhpyhut5Xh2WGSOuWlX2XHXDTYa0m&X-Amz-Signature=2cecbcbf276ffc762ddac0aa5fc13d1d6cc8e52edb8896f044f2182f710600f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
