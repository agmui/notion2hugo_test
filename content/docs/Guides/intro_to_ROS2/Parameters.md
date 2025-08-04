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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5MCCCK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZxHlBIeJ4Ub%2FAae5KYHlqcIt2PyqMPXv4mfRVsTvMbAIhAOBPjzz%2B2lCZADN8l5De7%2Feez%2B6BGkwAlnO9s6yUWHktKv8DCEAQABoMNjM3NDIzMTgzODA1Igxm4kgBBSSRQX4x2w4q3AN2ox185b4WfgMR7O7BDbgh727QWTN0kRXSyUOsp9XQRaj8epMdB%2B98WeZKzpc3JBtKjnZlr4nJMTlPAIVH5E0ByS7NIqnd5pYaB%2B05g3Ckb63eSuL6A52bfg9fzgNZ3fhRHHGDEd4Sfei%2BMzmPk70x6aNqBh6lSKU3BGFaiKcOgWU4kPvGSe1jgtDV47970GxeocLWg%2BJv3qbHOHKK4Oi4%2BV%2FhYY900zeBwlkzmQZz2jyv8vlCDj6aNnKc3FmFwK9kCoDxg0Eh8Ai3lPICbLXpa1BiEjLTxbhKwJCGFjCmAh2uYIun0AIZolKyqYCbr93neLzbBYUeHt3xSLJKYj2HyQESwRr%2FAyO9RK7oqpg9wqNy%2BdziWNVrWpeMYvMoYup1nkixdaQ6%2BdSF%2BViYipxkqZikJZLhB5kcPGxG5vBLmtDO%2B20LrVkaGjhnsccn0lnTVU0DXrZ6CDFCPFkqA8XJi89YbeCBU8350UWpV9yh9hbm55PFj1zo%2BxHwDjzVukz1lIo0FHHS3qpMHUsS2SxH92cwpUjt6dgU0KniFiVh1Z14y1J2VPh33zCp4Zlo6uQViBRDLAaaf00yS92Aju2XFNfZhsQdVXlpIASV3ETZeEeNREN2eD6c%2BQMGUDCztsHEBjqkARNBSscGpKisaUtXSqThl85F2101UWpOxjVtClNpKTTBKzL6Dv1GEgglYDuS6jhgRdi0YZk%2F3QbHeCyTeJ717iJoZXYEzjpsiBLHjpkfqRVcAqJ7j97kwE%2BiMlNrDmYGxmBFVWtsGQCAtxYlzEEmtyx7DpVfVuahZEqgbxtIMDUCMh4jMSp3n%2BawAmhDIeq7d%2Fz%2Fq3m2FX5nzuLRSf7Z4OyPux%2BW&X-Amz-Signature=297968d402fce6994c35b3e44765f2231ebd1a1d54995590c10491f514d40ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
