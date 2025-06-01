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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=2be21f91458829d266f1c06b840c2d15ba45d91a7d6b9cf409725ffa35c56790&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
