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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3MZZSA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzzDdZJ0J8nCQd7yEgnc1%2Fz7H96yLF3JX%2BYo3wUAAWwIhAJfOXQSXwankoSiWye7vR2FknAWoGH2fRu1wdnMlzXRvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5oVZ%2FLAijtlZk%2FiAq3AOsyzEAqzac%2BlR5Y5O%2FGj7Pil3JaIAkZHtTp4cwK2d2YQ8pAwypnPFwRVC2Epm1NcyT0Sd3qBQWf%2F8a3SbrgbebsJiwoYK%2Baxr4Fas3vie1j7oQShrrJG2HJXaaK33%2FnWI3fMF%2BiMnHLwVLRZMsrPaMi4kbHWPDMi%2BBwB2c03WFuX5WrHZaWVwoRXPkoSs%2FwqauulFLftxWzRdmALLXR5bq5UR1zsV68bDs4ZeUr8rzmgmnhrGtdefXko7Rm98M%2B3hZ4Tqz7G9ki2oZv3XquI51m7X22A0G18gA2ksVP8mEtuh8jrvbVXWhjkDRGVGVPIiawdF3tkhA6wxbPmfti7XuV3greumuHb5Rptj2b%2BpZkDxu8zNb16hnybPOUILT%2F0lz1ei7JmjicyxPwKazFNFO5dqKBZsedv%2FOZEs1WC8QNJaMaoOzO75rVeOOzj17Gw7020W6pQ3kFsa12LffL0yGu%2BMLUKHQc2s4GZbLE6dmDiw%2BzJV77zCE98L6kvm4nVVcU1F36av9mtSCPyn6hantQHib5lomi96AsNVnE10MQAuMTtljB6rj3iFRT%2BEQuk5W10urCU0Dn3XN9FN0ZLaFE9xVXLRApr7G4mCPi98kTN1izFbJYNxOCRUKxDDWuO7DBjqkAa3ntm7O1emkqr1w%2B4oleR%2BJ2sdYO6CFS0sD92w6qDNUfSATsRiHt2jZUmzIIaa2EsbWjEBdr4P25%2B%2F5LajbfzoOVEF4vc9t2nf4CMCzl0IPMJPa%2B4Kz0PrCZXg1CnkuStyHjC%2B%2FrEWTtrNvtjHtz7kksQvDBdy6upAkkm2fpVBDtogRRcbKlnnJdgL5FNqHnGwknhM240bKq6zlrEe9d9gXuCXy&X-Amz-Signature=212d9613b9bfe09f483bafd935447109bef119f5399d5f1141f3a1ff681de149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
