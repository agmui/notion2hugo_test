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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664253T3Z2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCzFLLx4rancYRlNS9oMWQe%2FPgYBkzw31iEa9mED%2BWCEAIgDbS%2BKn2kjWARpsvYZWbr7v38MKCLRBNct1DMK8XQTeoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FPOyldhGLIZ6zEkircA3bDEGQIdkq2zX2jOvnmMu38Fp0EU7bOc5bTKTzFzuO3yrTrymVBjF%2BKbNZ%2BGdr9%2BisZORMYluyhNALL7gaMfoMyBRBPaRy91uGyY4pozR1WPqITAO9qODEsK%2FQVQJ%2BCBi4ex%2FTuJMhwQHg%2BY8gd4ddLD%2BVsQyc4y1UAGeMDeKfS78R5qW1IGhuBtumu%2FifrEpSiisSl%2BX3oEauCB%2FTMTubeKWw9WdGj7NpShjzKIWkWo5eM2ToRWRftKIZ37UUdCa1kyHjtv5JFACbcAPky7ZvwUiSysCRjYiP%2B%2FoAPVTLS%2F4ZWAbLAxsTnG41nsifA0v8anq3O5RCyGbQhgtn9Jwa%2Br51JoUDEYEUvDOV2fHQyNMbddd7enGMqxHDqoYHgmL4U%2BMfv1vWnaCVD6OsZURFtkj3C8svIr5PesX1VliTJhV3fnlX9h24mK1xOcpGaYFe4daJGNo70tUYKsNErqte5nPIqYBnnnUbuaVn%2FecChvCfrdEBXeigtka%2FJikp0TGSzSUneQFtfLEC0mnlTZMGcpjmB5epUCkd7sOlzZ4J4DCF4uH%2Brhx8nm2JeU%2Fa%2B06HonmTAqvlv%2FGlyZv%2BAb8%2Fm4ysXiMdCcwOMBfrgG%2BNK2Fv4znc7hIT%2FXdvXMIW90cAGOqUBnz8D1szy7yIvFlshGsEoqgvf7uUYMVSK8LmYrv48suPyXvY8L65sqJpquCOQpBPUiN1xWsffKIftsDkrS77%2BL7xyN7n%2B3iBfIE8zM7eKocHLUC4SzB1d0aBhONQdqg1kDeKPt6h4IOGb38PWhlGGInswGShVIVwWPFXTMoYbFQxx8VebYhP6XlGThGa4cOk1Qb%2F59AC9tAgRNieN3okOTcChuJCS&X-Amz-Signature=9ca000d619c56c9dcff8e1b894aad98d5eee86c9c981c7708cc3cd56e46999c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
