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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7N4EE3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAcbixylQzTkn82gj9Tj6my7rrxug%2Fdt85SckpNW3cRcAiA9sYudBJwUQ71tSSyBQ7IB5KXrexFqLYK0D5aSNXlxCyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMkawXnJr77kC%2FcGL9KtwDbdVOVlgLZxbomE7hvD77L2A%2BHae90q%2Bsu8IUI%2F%2BtCu0ZCzbGTyCm91eesRFWORGDlYbXrI7sY7Mi13q%2BYp7BFQ8zwCOE7y1UuG%2BqwCq9c0b1dweYeZuLCdl0CxHPO2%2FJbjvk1b6Bsg1zDYk%2FOmhjmZGp9tf1o917rQ%2BQaj5nmUylcQ5haZ0amxIQxApqcF37FfdV3SeeCppmmXWYvtGxpxW7qM5vJ4AiX9AX0O22RjDJp%2FRHx7%2BzQr7FpuHFAVPTzZP3smF%2FLmfosyrhPkOw3i093iK4TiCVPl%2FPDi3kWMqyZoEuysNlqYaN1Gdzau3J2FMtmtVsZyA6JDr%2FHhfI5SWpSWETgAzxb0q2zlYSo730n%2FloclQ8gf7WE4MBOvRrVLALS7thnCVjLm8w13OO8dCL%2FpyrRIUZ0idWdYbIRnAKprXLNCulVb0zMQJ0GLb7G21BQzoBMRFj57XZwrYRzPkBa%2BymWCFIjqyrv25UYVaTASw5vUJyiMi%2BSC0wrJY4PmEinAKNggHvs4xnnUtN9O%2BMMLSGZjxhazEagaCq4zCFLj4%2BqVkfYvN1FcJItfJpekPcUG4g%2BO2eXAoVnVgc7adjGFC6uUSulXDy8BxZOptrLDw%2F0%2FCsx0iDFt0w7KL6xAY6pgGJW7PvDaPZn94ogdU7D1bhVLV4IKbQUTRdgvsNST3n%2F3JlshBeNxArcm8QKOrYpIu8fsaU3%2FO6wDlOPUkRSzxKKYvHpwZ9vrZ0LLJixrSLjcWBFEpDez1LRqtAdg6UFCZoFQ58JY0H9NUsLVIq7VdgT8aRvHYZJPJx7CWoRXoV8WE8Sy%2Bv1a9E8eQWkJXyTntMoyqqMzT%2FNcr8ETPP%2FrRftq5XvJw3&X-Amz-Signature=1844dd363b6577f65ae55c65d484949655cbfdcb0fd70c1be54da4fcd4c7d7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
