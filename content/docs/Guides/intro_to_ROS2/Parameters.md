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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYKV5YI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE10F%2FRoLJakRLDxeUTaG7qXCiqTTUWrAaCAnLMzjjyDAiAL0LqN6G5FgEykNofoOVOAz5zch489DibIyjiD6fdcTCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FPCUAoxA1pNzpu7KtwDn0dpqZHdRRMWkqPn5iglXSp00t8vrCTAo0aU1lRSxiO5GZztLaVZu76wD7WX2b%2FPlSBK%2BoaWg3pi3pGb%2BJ7fFYzUrABL3sD5sM1ZM9ZuW9YzXcTaV5VmlAnQqoeb75HaHsrlWVgqQ7A2gGqcwKXuuqaF6oJa8qQnkPEwuMs7rgaSlSlM7z4vOzORDmipjSbDVTeg9NDk6OnG9x1mpjQf0eMlmansqkJ%2BoRZQbmew1CU%2FjGEhSDrUHGPG%2F2JApOSR06jIi1fXw7hTc9L48f9AUsFthPV9q6F1DdmjRQWD5tObrH3qe1jP3O5cCIKX48vUcwu7560OwkpW9TaalRfxotJQUNuFfOmG1WpJa%2Bs7BfdJ9iUKadKscBvTNqcjAzk%2BCL4n9rXRZchJ2K9%2BKmb2yVXuOXn1FDDmdECyUtTW%2BBOdMKBq6VLqm1Z66r0ziHaFg%2BzwuO%2BWnu542s%2BVOgq%2FJ7hTNTpSL48fyaXuh33drMie%2Bj1dLvxCiIyMcIa%2Bqrjj7r9k6DgoHmUJsXpvXykeZN%2FwpFFyy%2F4ygyCWM52F5rB4it4A4oR6mLvD%2FEfPJuw7xMM%2Bl85jQr%2BajsQu7NTmNmBl27OO0ujDhS4G%2BS4B7LRECEhmwQPTi44Z2QIw8p38vAY6pgHF4A7AWToGgjn9qiYF1%2FjlCYF5ruYpsjp2miA7tet3DzEXiA5tXL23CMFy6E2aNlIMRbqldyxmSNUPV4wclVPxj%2FiEv%2Blo2BIkeuAXwttcxGBnsMyza6zHa484gjmILmeIuSDSLIlTLmvPnsFM%2BXheCgKnurhf3HFDqgs3VSNk%2BDkf5Lw4WFc8uCS%2Bit5TMrd%2BIyVI4c04giWksho%2FLltnY9l%2Fd5MJ&X-Amz-Signature=6456611681c2c821380dfc3b32a41b77df5158281e06beaa1c9e7226f2bdea8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
