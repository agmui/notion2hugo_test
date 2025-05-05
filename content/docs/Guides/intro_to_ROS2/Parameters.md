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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWNEHLA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC51ZacCZELAuk2QXiG6IaCrodb35dOzdhLY2HFEztSlgIgeVgQNfDQBnzd8GHl9db0CE5epEkZkQFzpqkT5PZjHFsq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBB%2B1ziK5YLd7N0bMCrcAyCa76JrIBvy9QnNY04YUVrSh8ByLdhDr1leT1ERuiz%2FeBmrevY6rZioU8kdPb%2FGOZBOiXxprKfSJXwMhMHIpwhrCShzuGoX6%2B06xOZnoUIJPdfEgQh68U%2B6d0%2FaFYBPI43TC2k%2FAOfJyDHiv98GZnW1QSCbePPqKKJMtFYbQFK%2B%2BxxYNZEIMBx4LixJf8%2Fe5Hxfe4ZK%2B1KPDWLpCixYgN%2BqZUNAI24jfMXgQznrGPwHY7v%2FAphWZenITqbxfAxJwQ%2B3uByop91uwh7feXxHSYfnSIRjk%2Bme%2Fp0nPbIBciP0SYBReWtI0K5qu5m7%2Fb%2FkcwQQxdCgBJi5AxLlAejRpnHLwG8m4H1hcghQSKJSuQ9y3XXX6ULo38DxkP1MQtzc5P3DZkduSe5lGJeNb8as4ylq%2F%2BLigvPa7t0miMUrCedbSJVxdIENFQrXyAGs0QK%2FpB5yYZStrVpCBFFoU4mdOEA32%2B5Cw4VP3c64LbiwRGvphOhP%2FbKEWKbzKbVzZy2rg09m9Hld4MnY5OWbxpyYqN2M0YjQJs97BrxJWZFqvXvvScwNFufP4x2VWNKMcYO5mfvJxOnehHW%2FjajDKhecixPY5pAeNaBY%2Fhy1qtySqhKMT2jqKWWQa%2FnBwKbMMLPf4MAGOqUByv%2F7FDAiC5ubMELuWQW%2FiaYHVyOfc%2BisRlN3RV%2FqyPK68ii4cy%2FbDhDMjnOOhXRUURjGEtEOTa1sT9Cp%2Fb4SU6chvYmXXu5dW9FDD5bTjHhI%2FVsaCUXsOxa37e1XNObmvTlwcd%2BHuVMACancavOVeVOwCP1dTRih%2Fr7gKUwBMXMLflP%2F8SUaFx4MXgcQckh8%2BWtNPWYs1%2FOJ8DLrTOO2%2FkSNNk3H&X-Amz-Signature=4fd94e1ae7308f96f981c7e0fc271d513c4e78e54251a28823e9b2ddb7dc93b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
