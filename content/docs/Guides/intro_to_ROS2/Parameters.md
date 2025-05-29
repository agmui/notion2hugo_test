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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3Q7GSH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC1iOG3EZ6wVJQUybsynPHC%2BtnSbpVdGHY5GN8dXaHJAIhAMTKB9yTkFQqWKC7HlYd%2BdF8B8EL%2B6L5lEcyK2yeTJLJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1pvDRmDPBSj3AaR0q3ANv8LVveLaNXb3nGAjZHZJPeMOZsYNLn7YDffkqOtk7TL3VrKXK5UrmAs94GyvzYF3uwivS6mznwHPC6ETNK10bYKMusX%2FeyzgYdnMQPrtRB4Rsc%2FW1l%2BWNuEG7K5AYvQlM0RCd3H1XwOoThWmDSN2ie%2FAWHiL%2BeeuK9wkc70jUri7SBOlZlT2GEr8jvlKSivzBQ69PZ3N00t36%2FzK1iv8nn1rjFpqhuE2qQdWvp1CkpRpP7Y6qP%2FDDGVnAeHcsoRGBQTT5jEQ4c4jmqj9bZ61CKtq0xpQals5kJTDIBQg0wEJaFNN0ItMzmj3NfMSSIHGr3yV1TAdfVANFhhWPBkIaV%2FpCEbG%2FhPtvMiPM1sN7HDuWr0ZgzoKZEn3VYI9%2F03HBIf4S%2BGXCxHXSdapd2fyOwc8OWalSisWRYy%2BOdbmLx0Y8Y7vUO5MYD0hbQzG0UySBSsdHmTXDanDUacM5WzigUe7cdhGEIKAM2tVbTTYahydIo5PPxUelraWDZLCdG0Aj6r1DIuJeUEu6B12ggf3B7cdcOo3wZesleAqmRyPQ2h%2Fg21oRRuMeequtb9e2bcWEfXAWdkQaW5BVPqg6AeLYXmrtuGYVb0dXgimxsKOSeLpZyijavA8ol6ObcjCH2t%2FBBjqkAaVu8vvs2GO6C6qGrjo3VkMKsjCLqIZSRIzctbABIkv9nXXHPA9Y7s7fy8livggmQvX1RAHLQXn0mVaK4eA8vNZPBjsbGMa7Ml2ERC%2BGVbRa7WagL9xbZBwgHAVgYUArcG6tIn%2BQLPd%2FvyXJBiFVyMP5Nefa2c16PFRE%2B4onttuZZrzBNx7Hlfx%2F6%2BEze3DaJe3Sln7UbjEDiGLU7Ww63%2BqfSOLO&X-Amz-Signature=318fe0ea0cee5a0790649c71212d787fa19a8deaf38dd21f66e5942bee481b02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
