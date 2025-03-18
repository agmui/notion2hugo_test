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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZBXQVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBssRkcUE8UfZH%2BPmTU%2BmrmBb2OAdtcg4qDrfVLMTXlSAiEAgZzWkf3hYGHAX8s9jupasY8Q%2FVRLETDsHHV%2BmwDQR3Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJNT%2FFVizy%2F5qLrmmyrcA7PSBoB%2FaqKN1pbHYBw5VNk5adEAZASDPYTBOHwO3tNlszhM3Uj84xlGPOpFbRfIAaFMLorDqJbZtlerlJQU7seNtEcLuw43xYjZxcZ09F29D7fTL7MnXardDzQXcXZSntpY3xSQRLOdtgGfxbeGqlBrD8ugl%2BvP0gH%2BQNhxADMjUuMpl6XwQTyFp8XatPmjEowqtZI3uhQM1zzlnMZLz%2FKB7Ko%2FC1gQxaXDwDrTs3JV93QHf4udCVlkieCtwmucIUn%2By5D5p9iLX6vgolxzePmnG2rRoLCzd0vwvvRBllsX8f89Fruv5crGObhuu254GR6EMOwHuFsxViEKCEDKg12UiwACtzNMXRBrn5nuWY%2FlyZyEc4jBGu1dSPAS8wQBSihSWl1S%2Fvns23%2F0LUzzC%2FqLn7M8bfF%2BjzSIxBWVOHTLj4FPFN0qOdbcvjsdjSa%2BcVIacKNlHLfIRpdyw4of4N%2BNqXKwDmMnu7N3ytqy85E3wvLC75iT1PT%2FvlIzqezmivENVX5KP6UUR%2BgBlYbudrK3N0SACey6DYIrPnY50Xg6f7XI%2FWcHnrODqCMJVU7sXX%2BHUz5PJ3ipNClP8qPsXWhV9tB2EUppp3k3QpHbMIvKqszFsgq3mgninhZxMNq05r4GOqUB3bOWPoDBTSbWq2jb3abdLNbRANrUqA5DV2biGaGQy0FEo9t1%2FjRMLwZSy6f2aaLpoTc%2BSTiihJCUxE3gnBNFEqawAPgN3FktlzLq3taTc1Ikx4m%2BtGDUVvvMcjDbfrQrb7qoG4G3Hjh0AHq%2BSHjKRwIUdrELS4SEs2jlq69S8bL6%2FK2bMZyTfslPG6nXH5JvoTySqLAvQxMJbKSbZ0Rc01inCriS&X-Amz-Signature=ce88f1a39ff9fa3266eb1ae650474bcd8bc2c836fa4269e35985b9df84a2459b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
