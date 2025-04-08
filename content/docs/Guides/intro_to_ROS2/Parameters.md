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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIB7HU4D%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBIM%2BAVr9xhcinak%2BWrUzblU4CXRw4Dk1KS3IALWeWu%2FAiEA6D%2B3Zfq1c5KpcLx3xwJ7bQmwexTBtEaDvXhShzSykX4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDO3%2FZgPm1QpF2IuhiircA1IKlzhCm7RdRi5UKlgv1RAwPXJTLIeK97KUCoU1LfTqpEUI5wLZI4%2BdF1ErzHbL2tyy4ej8m6QYs9dAzVAqQ6Be0X%2BATpzwqxqbIad%2FctwWLF2zDt5VWKBlXQ8Xv5Ciwbzy6AkDaTHo01zvp1bdbflFxlHK42iqQgy3PdZDPXIdqeVLK3vaUgLMt5rcu2YdjtZiNeybVx1IPidYpoRQuUuaXWYfkc6HxaJReuLJOcDVf%2Fbqacfnn0UKwhk9V7P2WeyWG4paivt50a5qGEQ%2FgVEQnZ2r9Fw4qkIFl4heL6YsyrPBenxI%2BujqBi5Oy5%2Fx9FU1HfJ4vab16yYWGmK9BMjr8M4JSVGzmgMTmgiBvGIryLO9nqatVvv44iQWK%2FhQX0bJibfSrZKDDpgzobHruW823mS8ybxDXK09%2BWPL9eRpZ51R%2BrnXKMwXKGOE6Lih3Uyxvsf5rr6P9Mp1FrdHX%2Fop5vBqBYcB5KNH8naPyAullEXVE%2FE%2FaR8PVG7VsJAGEckslay0C7WBzsdxSzbbBF83aew4J2uIaoeHrEFoEqW7F2lef4VeqpTlc3DEERvM0Zswz5uvfI0IRC6tTcVgeZNYIPrFjFHiqbnQjnEGZ5Ery6Rt%2FAnQRaIdU1huMNG71b8GOqUBXpnDqpR3zl36pNasZSV6siS2Jv6%2Fv3%2BBgizVaTYBt79j8ciqVCZe%2B7h%2FhJn2R2El8%2B3HGx5rar8eZGj%2B1Iu3irAOQ%2BxHSZVi0WlFAXDLJ0t9Lkg3yTkXDiJmKCliZHvun%2FEb2HFPNnzjQ7BIJUCG%2Bl3i9UgaJHtg83mctgqEIovLyQWsCPqcm1tXpeXHReyDcqxQtOPzcxgMl0%2FV2u3zvjZl2z4E&X-Amz-Signature=d0651acb84ac2928e9f53a623140b82c5fb7a1308bd000c4d9b58e8ebe7381a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
