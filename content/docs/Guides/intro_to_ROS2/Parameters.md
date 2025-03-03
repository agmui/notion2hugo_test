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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRTAICO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzbNlBfVKSQgJRvt%2BlSCUCohWPmTDv%2BXz7ZLYygd59lgIhAJwVUvcFyzfSa%2BR8ETBiE2arnA7jNvuf%2FWxjDg8w5DXeKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylldi76pzhLBmGV7sq3ANUrXrjdj7xEvqLBTUivfOqUtlItyoSX7p86coC7sWF49KgHe5JD5uFLxGfNILqd0y%2BVQmmCNrVxusY67J0hcTTkjn2gqy%2F5gzWqabGs0q9tl1Qm8PcPvtXlpOZtPH4FCYbnW0x%2FJk7U%2BC0B%2BQeWmWmcEOKxw7bcrVJTIcwYlOYg9IsCjoeCTEZ7w2ScGffpZ3AUjOxHMToD4UELmEn4wQGXI6osROWbqMiTEYFodDxepuPOPX3ja5yJpLJqFIRmhPOR4AnP7bGzO1Iecj%2Fj0CoKzpKj1xTG4YEqbDHn991UcXt7pHfmIVYRCUQ4LpWy3Z%2Bjwf4wGEu3cAFfTdfEWNM1sCAgaXVoyNSl74eSQz25t8shEEcxaBs9qxRkLtJGS1nV%2FKgDplYvrxJWihlZX%2BEtcJpWYEiAB1pCRE3J%2BUobRPyH9goVF59Y%2BrBiZ%2FH9Lub1wUvTlsNqgZy5gXE6n1798cDGARMvjmZUY%2FMMBqMndH0lZB0ibZudz5fVxii7qMKjKgjjn3V1m7EHF%2B8Rt84Sw3%2BdEDBaS5AI1NCzzWOQpo72%2FTBIScXiu5P6VyaNVpZ2r1GIvDPgIwn6OlpV2R59R5NpoxpvKdlf0li0TZHq%2BVLaM2z363U0ZxJoDCCu5a%2BBjqkAe6IcqHlOj5VnACFKlms%2BnXZgfWwhJ2%2F34FR6P8Cz0P2yCgE2GmphB47%2F5GYSnbKSNL1TJ%2BbjQ%2F4B5Nx5BtTOG2SpUkz7xAuMDE8wj2nUNHHDiEysbjJBxsZMVIQfDRvePKElCLn9uN9qYqLfkZ%2BAuwjVA1XJLzcFkOnbGaOkRtUXWvjujuTR4z3DarnysESk3fewYWGEdYpF0s1qCUb%2FMOaPaXE&X-Amz-Signature=cc448061256d28cd80d61beed02fdb4f986ae83d42e29de3c23222209c24d810&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
