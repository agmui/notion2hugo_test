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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVO7OPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygwWSXY7BDoMtxvlgC25vdm9vrYXU4A6c8BEdaovTwIgP2Hzs2X0%2BrhmHiuWgJgpy3ZU%2F3JsQPsdgp2g%2FQpgjTMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAQxMAggGLjRM8SWgCrcA5rSRthp%2FPPDQAOOuzJ97Is65FNpTu1khBTVLT11YBqN8HAWg7evT1dlve%2BcrdKc%2B0nga3tSPqYv5c1cU57pQMLkFRCTErPP9L96lz6dnFfs0GqkNZ5wyEsXtV%2B%2F2bdW7QjuEq0JyJIO1bDgJ0uoFR1Q87cqp90q%2Fr7OG8jKLas4CoI%2BiQ6aHacYtKxqIhuP%2FnhELRblzvsSzLBqDXec9zVCz48Fr6qIhlekXRGQmXqjXFrCEczXLdIhe%2FTyiuDujz7%2F6f8qwYEIp3cPv2JubjtlB%2B0mw0N1n7JPjY9RlxTL%2BsCZPwYfscuaKNiviOYMgTDWgiYQQtknjlF%2FC8xa4RhF6GRiKj7KC2bOf8mVKb4rHTRAaLzmdfCsV0h5BEwKmFHwoMiCPvlvlKwzBqTdr%2F5RPmubeNVjoS0jYA%2Fqxpj3B4C8bN3u9FiX7Hc%2BagwlKaDidSYR1XbMGPQ2CaWDCssnINq2MDx5fkKHqgVJYAQ8f8x9Nkgs7a9WEztsWdDKvlCO6bQXgWTbTTZPqBZJPBCkhsL%2Bq%2Bl7C7ck5UrGnGqavrEJEVzvOQPeDM%2B9kDhxBa4Siso5KMzeglanGF3os7p%2Fm5qjqK5mFJYNSDtuYWEhit8S%2FmOLNda4ZPg3MPLf8cAGOqUBuw4rSQr05tO3DUq8A7V1Y4FC8BGzgv2QenXSl8KH%2Flwpti2wZAGqlqQIpB1TsTyZNbv%2BKi5f5uhLUyqUwJHVUBEVGzOhI1s6IooADQCF8UxwRLe76q5VNrwtt4fh8M1XKdJ77JoPFWQ%2FyqzFaNAyM7AWGwoe41PdJ9mw%2F7atTp8X33tnV%2BhsgSVASOJXYKWwlfhCdbUt1RzH21Jc9JzMNI5E9jBM&X-Amz-Signature=d84e3d79fa5ed404b046ea3dca185b33c868c2a0a74aa8fe3484b820e2303773&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
