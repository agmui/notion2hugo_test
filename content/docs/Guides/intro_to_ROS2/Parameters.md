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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG33XFR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCqvsujBBKbJgK%2Fajb6Ct%2BXguRdJizlzHEq6zx29616SAIhALsBFcaKvPhw7jpmJMw3xLGanVZuO4EOJ8g18Avv0v5pKv8DCDsQABoMNjM3NDIzMTgzODA1Igwnygejfm40K8qk07oq3AN6IPX%2FXyuRfRGPIg5DznEA22LzHVin6l9s1YqB3V0c06AVP6Ej4NV%2BTilmFKkcpsQvd2au52qh1TFzadwvOv2bHO5Xt1e%2BQ3yN2%2Fm583nGhiovQXfIbKVgZk%2B8SX%2FVr6hqhOWBtLoqA6lspsIg1z3yVLaHCF2FOrBuQAUXPPd%2B2qxomZ7uzXV4CgN96FmKa%2BBtF1CgqRi70Uu7SfRzGx0OoKL%2FUEcIuUfjnbuHfSxk8MhsVq9SfzeDk5vi9QTIZos3fBqpPsESRfEHQxkwpFfLpYy3x7DbnYy7tAuAtOo30sIqzIDIQXDTHjF9auhdKVBiF3uzU1KTMS4PABbbteXfIo%2B2GCpX5wHiS60r0m6QnrrZAG53Q9CNkCZkCrmDoML11rytYX0DV0xj9zts1raOCT%2FWWBaEdD4lxvMBSitLc%2BYRtcHZT466zVB92zfdq0D%2FN9xGaBnsICBW1S6t3AmGEOcURmYP7AQeYbF0Nc72TOZ0k8NuOl25zp9XoAN7oOcEYMa%2FyaXuNuYw5TrbRd8ZD%2Fkdh5kh7YXDzo2otOdwB957WAPURBSFoAO%2BFs7e6NaMD%2BHmtPSap1B1fCzOW9mabYj1D1EJCQdvsvO3J8FASpwyMn6Nzi0OfpFTdDD155rIBjqkAU9e54p64B%2BgSXQ5ro3Czmzq8MRaPHtB8L2LppABM7C1sm6Vo0AAGQUoKL%2FgREp8NdsgEmntZmp3gg7slOtsALqGJArcCqzBd5ipqplB8yIh0OKfgaCWSTwvWi3%2BmSJEEWih3xmFkV3O5oqFypgBiosMo%2F0vAzcRoixeiZzWM%2BFrQYLpf5iyUGb9oWLHGRkeZ6uaPr1BV5kCZkN11PZ1222DUo4b&X-Amz-Signature=057967262383551c1d0dc812f61af4e19cfe43adafdce0712439375698900e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
