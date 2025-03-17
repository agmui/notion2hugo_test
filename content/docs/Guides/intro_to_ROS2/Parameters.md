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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZF44PGM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEByqmzivKD9HE4H69mdsOqoPqe41lVEmdr%2BmrTwxVEXAiEA9OaGV3pDUZvBvTeNW8Ga6RXCxHJiZlgQrx4dOCVOjuQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEzjfvT1xvpZeGE5KCrcA6FaDBWDydQlKJtK0sSmzd6bSmDdD5kT6f6WCYTl64E85fQrt%2Br7eieaxlrhLmrKeub65ri4lHC3ncvBDgB4VpijEeocTYxu655n%2BpEoNVMVVMFNUH286tu%2B7itFHlO586l46bWRntQhfmXc%2BUW0K5UXVbaXUwZFXF7F2WdFaDDSNv1tpuftEVeJ9HXdCehSiMoG7F64nEFO9oH90Zg7L%2FNHTaGQtfy7j9OmBnXjdfJeAOITl6%2FvLXcJ%2Bq9u2nZ2cHa13cgESeyV%2FQoJuFAvwpHPx6wYNEpoZC7DVODy91jLnN34%2FGmy%2F2yPP3E4UiwZGU%2B6IFGP%2F%2BDcHaOG3tF3KsJ6DZC5yR1wMsjwdGsu1Z0KWmE06xTbKAQxDxtkzkcmwTU%2BoEsa8MZrLaI3s4FuMqT5GCLEsm5Z4rhWK8qMexcZDjNeW5NopIjLx0vG%2Fj3SqVpiAi%2FSZLoUHDWQojrtwV9d%2BzNIU7AJeiEa0LtJklsq59xNkgCqFxtifji6GzCG9J1N5FI4QI8L%2Fa0PX8%2BrhuhN%2BGKXE9%2BQl4VlQIeGnuoTxgH6a%2BQxzERy3vDhGBedG%2FdCO8QqOIf9tmYubUBF7%2BdV5n%2B0nbxV7G2VUeAyB6i%2BIgQVucaDWvseHRH8MJGn4b4GOqUBym3iF4jfLZB588J%2F6bbe8lnUfVy%2FH17XDjPUHNzeYtNNUWW%2B8%2BHEmv%2Fck5doexXJXdYVZ4XaKT8DrUiWKWqS0cwuQOjP%2FxF9D%2B9IvmgC%2BufwDcV3QB5xPfqYUDvqjA71PTaC%2FSYqyZnq8ehP1vQwDl4JiNKmBvaQbC1PO3GmBPelYSV1rtuQeLGhFZ7La6dgrJ16LOqkNTkgk1JA5ttz5dEND3LE&X-Amz-Signature=c81ba6dbc88a4d31c8fd292d4c76679d6a3d9790733b9dd136643d2c7f1d7488&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
