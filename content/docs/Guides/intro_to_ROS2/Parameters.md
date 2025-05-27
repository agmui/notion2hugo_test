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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZF3YSA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE73nJISSADPyJb9jWKoEy%2F1sWALEjZiGSJf9D767L%2FpAiEAo5c5X%2BbHFfea8dJ%2Bq8edQO4m1Rf5ylDB1xMNfZyO%2B9cq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEpmGjBiGBFHxsrQkircA%2BVBsVkKU123Nq1uDc8RrRpOONupzy55TCYpDAyskPJRb9NHTNpqNO%2F%2B8yAric2izshM6Jtbvuk04lIjlrAdaBxlIX6uyG8QtbRm37%2F0DaBKA83WQXaYJNd5a5bqi%2Fj1KgT8L0kzRYLNgXlq%2BebLyTkEeInbfpoP4swbqMop6TRtnHZmouiV16etlCLeAayaNEUaX7aK6CMQotIU6ygt%2Bf4ri1eF9ZBT70kLarzs9WlIrGB%2Fe0P3X4UFzEHfBTQ4zabp70sr3LE5HKqvjvn8ZEm8p7D3xhwGQKoeHEoOCIlJkb%2Bgw5Q5G2VtTnQhq9PBZHPNwVZ71S4V4XTnF7WSld5HQJhk6CDDWii9dBMYygFRUQo837mZreVDOHZsd9zLQLQ6hG73FromQx56fw08r%2FFIavj6ZvPyZgqpXdTnUwpKEN50tfz08s9JjOWOI4rHbwl18YoIMcYCTLSB%2F7LOnjbP6nnBcm8CxxOOPMrm12GHc26RB2s7G4srYflfFOwwoP5b%2FHEuKVcbhYQL7o%2FdF3o%2FPQO6JZDgBV8qG%2BA58UHc7q62uO2PEABzc0f74ZWkQxrpgeUDnNzS0XTDpvXlEaflR38aL%2FxU6QmGiD%2Fer11KsS9pb9cubD9EEDvrMM%2Br1sEGOqUBV056v54CGLCEdl7pf0vYSqy4Eq0ePJSTR3oSurN%2FB3OC44nZUC8EwauXY1PVZ47RenoLBCdfkJ2j9BERXw%2Foyul7XqZwvpm0GFDLbxGLfAZGf3uv0KK7dC5MmlTZkhOFUKoj7X%2Fym7MZA9Z7jbntkERYzM78j82vY0qkaOJ3w0csLHYjl7HNhEcbGFGvS8mfXaThNVu6HUo9l%2BISVVhVz6nrpdt6&X-Amz-Signature=edb42e0e3f2399b1d027960ade330195a40eff3a26eaad97054b1d587357040f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
