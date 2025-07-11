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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZFDLZJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2FUdIp6MDdgekwuF88W%2BKsXVIGF4obV%2FaRF3UDZzylgIhAOvqUp6V4ReO5GTc0SieQvYBRbpCwSsrlzmCcI51RjTDKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRkIJIJzkaWQhYcmsq3AMW%2BsC7lIuikc3v5cAFJJRQbYsCNI6KNpdKMupTLtuSwE%2B2CHoOQtOjpfSYKPljiXel2LVzs3diw3R9JWRYLQbXYAQ6tQAoE5LukaIXD7DTa8PIRM3hiJTQml3pDxc%2FOLtn3EZkjvvvAK6I3q8ihYRXQ1SfpA%2F4ehfjzC3I54jYl1WVJLZOm4xydyTfKyqqLmvt9uTpf1mEVomX9GNaceCxWudRSn4OM%2Ft2yZV%2FddJ2FTAP8DngI625N%2F8mOkLLsVBdVFXBrpb7YaM%2F3C5kueQND9%2Fd21vO66CJU2%2FxPtGxu438DUVf5tSx6%2ByYzrybcnzfiSgumuiiBGcjiObCleNUcaPpU9O7lYoWczDsd2juhgOdxuzI2foOiXVG%2BU3XQf%2F5f8KaKEQm%2FrRAfm3jeOLZq0Nbm9slURUJDczGuoXaITFux1KVhufDAwxy8CeT8jjAdX4feZ36qK5N4CsA3p3EJzmWrE8csKBmUDLHFN0KLTxSEhtpInIwcAI1G3MQGIWeQBlBoHGznVS3avy%2FJbXI9S50MZzXiUcQjx7aFOLRi7ITF0EkvCG9NADMjSPOaZGFp%2FzC6AHRH5bIkMBzHQV25meL0OMFMzWleUKIcxwjbIkiMb7sOTGqd%2FQvLDDSzcDDBjqkAY3EV3VfrqRFgNOJ0b6PTRRAzHeutoLQzJcpUssdz6e7EbnhLiULsw74CsDYgHoLn2Ggp2SqD%2BeEyxt8X%2BYSctsAKB2wUt3eor6soX4T2L2ea4zL2HpRpMe0FR2xmMsHhL62NWpTAiSanP5Rmj7ACUAbFleYeDdwc0JGdCFfzSOL4m7MI92%2BiWgpNVq9xFOSINNdeqJNn6A42xnS6R7tLPCe0z9H&X-Amz-Signature=cd4ac6484d751aa7738c514a97d102fb1e1864c3df241d25380e1c88a9876d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
