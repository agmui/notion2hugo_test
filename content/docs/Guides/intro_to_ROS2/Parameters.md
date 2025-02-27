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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROBIRQHY%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDXnzPA36eLrsGgFeML9oT58AJRFA1p8glzn7XfX%2FcPRAiEAu9qz%2BlnK7bG6qewnR6miuGxSAQJYqyA0%2B93UwdP0R9wq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAbOtc0xQvXnbCn30ircA1sydewnYtd4GKI0M4qRWlOwNJWEO7wSFqjVRaEe%2Flb3zDinTUPlQJHX0hVYCvrSTTOuG2e0zGxaocmlPT%2BiXnNCHrrrLM%2FhJ2iKWSn0UUOBg3X6PLfUdmVf1u%2BQjflWaFjWQHUm6QwrJH7FWfl95uEs%2FkuONdKSxXMqObZxZm4h3XuM0Yd2u23hL6hbReya51CGoGgVpOOH6%2FiaNDuII9uNYAc%2FpPux78nFyzFBs9r2XQFlxbbDojHNkfLu9z3mcnQSGhOUS8vr%2B1vzDXKAht7SEm1S6EpbE9nORRKj9xH%2FxmdNe16pc3SjfNr576IE47OgjDUxm4QHl4sjJZtfR5v%2BPrvGrOjK4%2BcZH7hCCPhrDnXjKNkK72GzOk6TSQmjuz8vMO27%2FLTMgM6wjycY%2FlNQVsblPe0PNyvmor2tWQRSYg%2Brf%2FYiziTrwZc%2F37vmT7X2jQ9EjoCT9q1xpJjhIoSXdmNs7PjGFuu4q3T4bNz7Qi7MrSIVIBOiCeuo2FAsjcCDPqUAjuofKTPuD3mvBpyd%2BfEonixy9Mg%2BY%2BBXalpa%2FVlcloJ6BRxVJHbJSukU4V1G%2BY9DBir7r5vH33D6R9q5xM9n82HuO2zRWdQ%2F2snD0d7k%2BfEbPec3H%2BhyMJ%2FRgL4GOqUBiKOGA86O8BqaPW5o%2BFj3W2YfkWng4hVh%2BN%2BovKY4p7PsKefen2ViRA0grN87MBtXuenJEFFLi%2FrwpP0J6v5pJXOfsqjU%2B9CrcalfiunZw%2BgCUFzjp4D6hUNcgNHxXw2%2BvtKgE0UQPlqZXtPwVtspsKuc0XViez%2BCvnilMnqo8FIY%2FKn0t%2BTz3ipy2w9ME%2BPQnj2UIh5emhXQOa2bCALEg3onwZwu&X-Amz-Signature=0f5da65109040ae7718f6edaa491ea8f2de404182e2e2126bfbd7859c9439e57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
