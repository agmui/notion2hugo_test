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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUGRSUZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDLci9f2ny4tugfS4iUNEiPCaBBRGdZTJct0qDCJAZvAiEAgQnZ06ltg%2B%2Fs71Zrv3ostGTIHD0JZmGcwN6zoxOVeDMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvm7InZXPIJd0uJnyrcAzkLsaJvO%2B48wBcaEjaIldZKzWP14V8wHW3JjSl1wYKJeO4sXLixEbJYLl%2FKhLojC%2FLy8V%2BsdjoUkKhIxjsF1VYMLondrGQDPZrZfY%2F8qVweMD5U7N248ZZ86VFikrnMOKQacolM7PaazUUcwvdr7JxMvWgvqhXReuVGQOi%2FJkkV%2Bw%2FvnszGV8lQTJZbTItSIu2GH%2BRojeDALEEs%2BQ3%2FEarClclfgdGAq7czW%2BsmBIQyrKGZpuyVA4%2F9Vt6SNaFs5kz2Xt%2BWq4X9AXhBhBOwt4dFV1PZpbhwVnUV0rTQq1BDhVOAil5VZZx8y9NtnSspm%2BphJ%2BlOc7lPA0uI4HImKWdBSTYBHPbf8OxBgge06EXsx%2FHdbmAW9BF4%2BhsUgGD9HX17n%2Fi2YsHTlEptACmJ5duz3vN6pDLn8eCEH2f0ZAtCCQYre7nO3%2BEfFpBntzF%2Fq3vlESZnV%2BD0z16mxvYYgTeFEaRgVgKUJB6yf1wyOw6Tr2N2EJyuPTt0%2BVdeSTdoUZ3LYSf%2FUUW%2FLpnXjnY90bsR4se0Zw%2FlJ3wHnn7nKO8IUtb%2F2Y%2BDfHQglORF%2FOno4xkRvBz4iHWNhYprVeJxMDOOpWuz4YwN16AHaLdPREUcGqjIZWJL2IJrq3EhMKr5x8MGOqUBtRp5dYj6aBX5wdScPD54GNB0DaFNrrC7Vb3cHh6s7FzMR6%2BFhrJYJNO%2FY6SMSldRvzvu%2Fv0cxxgMOPhnAWAuA7zzvrU6b2ahPxpDsJBv%2FiTTeNO7%2BHR42mSNiMDnkE%2B1oF2LuCJofKUi31dF4JIfv5Qfch1x4SWzUmyX9sQYQ5hLCcjJtsOLHoufLGj35kS9PqOe4u3g%2BJxO8%2BpRpKOFyDjqo1TI&X-Amz-Signature=f2f9b159c7b469e321e67759196cad79101f2d024c1af7c5b55f82ef4350b3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
