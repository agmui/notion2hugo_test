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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3VNWKA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC93o7e%2FBuP5TgTUY1nJdQQOFZVUAQj955%2F7HdR59z%2BVAIgYVzmaWSPxLLMeAw%2FpOU3Nr5qWhPYYW%2F%2F40l3nA1B6pEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOzLxuUSgiZlq6G%2BCSrcA9h5BY7Pvmqq%2FwYfXFKELLreC83hK%2BoaFYLf%2BT0IkRkkhHpP1Wg1W3bNtx5vnMtMV8EkOkMbdfrYw9wdP55Xzuqbf8DVzocjld5Z1%2FWmtrpKL1%2FhjinaZZ4%2FauKjzSkpIHGb7XnItzEfohX29iGCm3Ry04G81kadGQqXzILraJ03F0hkvyZoX1IcW7IpXCzFnEIJ%2BCHAgmN2Cqa%2Bnu9EzYx0RocGvaWbfxR2EFzdSCd6tWs5tTgCQs0QrdP4iQl6ktOrQxCxrGfFJVIZZjIOTBlckD8NDhCZWkwpzeeS4FgI2ZvKMxXlIe2%2BXBpr0Ev4pgGHWk8x1RUPG5TeqTPvMSI44H4IAqizQsDcAK1UlO56cFILoFm0grrFsrcTwJXClClpbqIYWDlQfYB8J78cY%2B3AvtDNgq9rlERhFe8VC7foxF2KBlXyLWLdY93T1QcD6pXeZHXDRAXSERYa8A1Gj2A8dSmi80aijh2W0wmR2BLg%2FisR6heom9mIzLZsz4HKguQrBvvKcOKByhsjzk%2FkqLHPAx0YzC%2BVleQw2s7EFZnU2IVLFjk0W88dUlYQSnQPM%2BOa4vlPb3RDN0XtS8ahuF8tU%2ByccRA6OkDH1Um7iu%2Bb1x5sgh9bni3UOtU7MKLnz8MGOqUBRtXVZLzzpnjmUL%2FpKv7Vnd%2FBfVvoWjOArnW0TdjP13E5y9e%2FNJQjvXBhVGMKtBYWgDWcVijcMDbIZVTW0t4Vl8b8BXQlUuUjGr%2BFGAi7zJUoWbAJJbb6CJ71eEcggHSpAt6Khf1ZEsBESfu8MuaIDRlgwzefZkIYYQUNV7lE%2B7iuqDTwp7497j2eWmgozGl2DdKbfUc5wYlC1WYYKRcJsL5MAghg&X-Amz-Signature=c0897446f868de38b0a862eb3ed792f385680d026f08e6f8620022d61399c18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
