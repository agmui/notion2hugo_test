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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJX755F%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHEzPLUq3K7D3AtYDCFUGHMRx%2FeUNyMdnQ55EyBbkbu7AiEA62fAoJ%2BdvPGvTyNlIxq6yfkdexMEPBUUK4EsXTrBiOgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQsQCxfhMQoqbVB2CrcA%2BQoX%2FdLslpZlPmAl5NpF2DbCA0wnuZpg3Db%2BWlwlwb%2FEJwC%2BV95QW0Q94uHXDVpTTw89XwRWtbdur8JWAeXNjz2%2Fo60n7nSlGA2LK3wByvGd7Ic5icb%2Bhr8n%2Fnk4eJwmJkFnA11nBdNSvKM8N1u%2FY6W5%2BdefrbpcCQCpouIXZRW06HyHf6YZ8th8GvrfgAOn%2BKhyzxarm5R1fb8Hcyq6BKJnqEAuIm2Joks8pUoVAKnswL1g2ZfEdORHzRuHiIgwu%2BEbfqaMoL55t4Air4g1EGkqwnGTSCYgJD%2FK7SeOKnAPg4p2MtcMb94kyz0DYMRKj3pfQST%2FQHa6qEQcCllyVAq9FxQJdyRAhL9lGBYe5gu8JMtGdrb8Cq4GekMApB4IK9GANfgGcjkhvy78WrC%2BCf16W7QVat%2FDGv%2BNHiIN3W78vt7gUhoB%2BBQUQEqsnl4OIWW2l6U3H3cxhClgwSjQfZoNe53TQTyRIUNHbLI2bk0hia7AhEz%2B%2Fk9Zg%2BH2KIE4Dle8R98bKOgKKVlvTGJ%2FLdTLv3iZ9FnOyH5wguVon1nWun2GbULwBYWlKIY9IIsLUTBOIrm3mK13Tv4sXiNN6Ygc4RXB58fhjAbHIIu9t6EuTxma%2BUkMHcYjVHiMOWlz70GOqUBtXEsfLMijPKoiEuyuEz%2F%2FUtB88XGSAwPDuegPHhbvjUGHrrzL3CNBi6YAvCKsokZa3iitcMcdhXhMEeErYX363cZ8%2BGSY2NBDul4oqgtwRpjYQ4PoYRIoTZ9WzPX460rPPu9k96ZB6cQOcdfDJzdRUFnqaTfXleOpFqS9%2Fy8eBiParqEwFQT%2FvhaG%2FD%2BXMY%2BPiUVEFBc5P1eIwqELYQeySG6saN1&X-Amz-Signature=ed03004846f2601b8358765fa37b9693c7d043c325b3e069bef582eed53af639&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
