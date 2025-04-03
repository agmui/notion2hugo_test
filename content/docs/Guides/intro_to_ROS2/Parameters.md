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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N3H7ZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFraII1ANRsTaoAiO5skys9QIioKIttBCXs7%2F1n5rRwXAiEA0%2BcbLbwAqG3Cl3n8DRko3ianMl%2Fmb%2Fkx5j6WJ3Uh%2BwgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE2aLH2hAv01h2ZyrcA54RwhDmpwPsS7iBSbJbfmm9oSUoUBk3zH2VE2tImhvEAPxIaH%2FJxqYXaZDZZpfEY5ymWxUSESuHJIiINzjdRdsL6sKU62lHtA87WE1LO6JtsIaRaD%2FNNNY2MGaoMwdbYOhiVxNF3ZHLYvhwhiwq6rjAjJqo196wkf5wGNN6RuPbMHt9os%2FypsPnC3A3CGG3I1ZH5i2yROvRB835GmKgXpLI3VtdTYMNvcvs8rzfTx4%2Bbf2NV3LeqL0%2BqRRqAk60AQVW13kW4OXY0bMI2cgl82Vopo9sKWvRFro%2Bbs9x%2BQX2QjTWtXv3S2gDbJB10bP5%2BpHukLh1fK1CO4HlSOivbq5uhZp%2F1QZCnBbNXQH6qSfCjIvFg8%2B%2Fjz9ZRt7MUuETNghsaVnVHhP1tjHsgTKeTbg9UlsgLLOIK8yYtCBeWsQVXNDF41mcg3JIbMyxobSyqU%2Bs%2BBwmvIcZXrB3%2BpBSP5HNYpVPSCJr5WMQICuouzNCmoDiPhcyKKFeegf9i3wqgN%2FyzzcK%2F48ubOfjlKEdhgZm3bCS6DdFePmQeTTvncNgdwi2Uj3LOQTw9coiyg%2F4xvt50aa5KXysvKDqhzhiYBFH5qdUssqtdBk5%2BfdksYeQVEV4jJcUNvEOK4ncMMGdu78GOqUB6XsUlbhh8Om3acxmjWYAvmRja3plEkjPLYrrRWd4Jn07clIm7jfY0cX31i%2FtXB73H6JlEhc3lV0Bhg2qd7J2%2F4x66bRaMDIYgknPI93uHN926a82ZDcI1uGmVGZ4ekKofNqmgb6PhyhGIMadJQ7KsWuZ7WLNyjwQdMEpAYb%2Fd4niR2aggftSGN0fIJkarQaltT1VDHqElm23EufGeUjP%2BTK0bHxD&X-Amz-Signature=cb3cbd1fc5fdb7427a8bd7f9a69246e6b16e356992772b11304009594fe6396e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
