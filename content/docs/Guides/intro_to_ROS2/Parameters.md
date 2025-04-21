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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBCSSXH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQndlZXXUYebaqQA70W6OxsVTXYosJE1uzoovLDBQ2wQIhAPd%2FpTeIUjphFzChUVBSTeBr%2BOiTggh98mdiPb3%2BHRN7KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpVsPAcD%2BU7tryhoEq3ANv3FUrrchk8kGZbOqbAy%2FGMuan2s9yDzWz8AHKr3VfKMTZ0cqlbVF9D7PxBFKutQUKPXR8ogLNWZtgU8sgcS%2FBdlQPJTFrD32CKNdQR2%2B0Z1kQATJSXPCROYXyNMQQqgef0U0rsl0bPm9LvKqB690ZA5qpfHvkPTgoJ3T1s%2BiZhQdm%2Bwwv6HC6hD%2BQENMr19nT%2FOsMZkAFevlIQWD9oq5NQsZlmLxmZVnCkI6Ushw4%2B%2Bnj6cwGi46dKE4nFSo6d8WOmUZSxTQI6hSAkteJ38MSqBlKJGqFuhe2CgfC%2BcbdYUUyZ1GB11vOAbBFZCBq03YxJqSGkqzdtq%2BSYqbUAjN%2B7POFkEvk2E3Xi%2F8xhATQjuygIDqVA3%2Fljk9siMWOc2dtdxllPBvF9oK0g0SJ678kGVfD9tDqeNnctwAocg6Lbvifl3A%2BguwDvqwgDRLz2B376zVngM2dJgQc9%2FZvtKm%2BHiYstG9ZI8yyPPR3zWSaVFL8WcHmzVNuGWQFy3SmL1S957SFHeoaWYLEBEWPVIAJNBpCoIi7udWDqOa4kOvHIXdDhqU%2FTwNGliOJRAWzB9sQxTqPQNJOk2Qb3JqIZyxBrLUrbkCYPadFxDH%2Fs2LF4RlltmTisAo9ufoBvjCkz5bABjqkATW5yBXrW76uDhQcI5QQouGYbTnhSR1lA7GBMt5G20haKu7BFr6luy%2B3SYALmS8D6TWEMsqmEOgLne84kWJcokc4C9%2FFbuF1nHDaYa54RiqD20nMyb1aHEe%2FJSwdK67FBEh3rrQhPPl4WFdqO0INlA3EwHOHiujvqAlzF%2B8d3H1Kpoze8Z6geA%2BLkaw1kPWIcaxRo3%2FocC8lWWD2SuT002Pjgaa7&X-Amz-Signature=b452b92f9590e58209a5f7895ed83625562f64287abee3b7354325f21465920e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
