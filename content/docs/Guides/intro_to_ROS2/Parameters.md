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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQMDMJB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnxvM97DRo5nQ3OEP59uclMxCIQJlq1goO2tTYPOrbUAiBjsFRCHFOFulhVT3uSOnxmJwErQVernqTLhWjg64ld4yr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMibeFy3UP%2BXAsg6LpKtwDtTGoYatpgVbyN9IMYNo%2B%2FFSinTkVwWk1twdoNWXocyLeDNL3zjgN8FgM1CcGZLEocaHthMfxMnZ7K56NpJ%2FiC6vmsX9F3jqGLf6BJKnC3Pg7VYxVb40%2FIWL8CzIWUrR8c2hYSbyr4eS1tKLcTStvGcjL1z769UD6twToeU6zegwSz%2FhUgvrEud0KPwfEcjAzSP%2BMqgNNDI8xdm3UJybejsWdtSN2oyR8F%2F6bHl%2F09iZBnaaFF8jCJPKdjxwbDXwXvA%2FEiewy06jH%2B1NcaAzD%2F66KIWDYY2ZQhIGSkmfEbIaMydtL9EWL7M9ZIBW44c%2FErdCeHuY1DvrHT3bchLgX%2BoY0YJCnEsnlrlT1Df1ZhCAFO94R599XX5MAcOerVq7f%2BAGs1fnifWnImqXZ0ahOyTAcWJrdCP6drWh5bOLQbp%2B%2FeGrgXEQE4eQxEZQC3wvYl4CInSD20E2qOtYlLV7SzRWrcQJ2WHueX%2Bu4XKkyNAbOmC5HLZa%2B3dY4iq6gxfYXSbizSXsuLPraJJXsxMAApFHOC3z5ddIijXzrSTgziI5QsfrS6N%2B52VhoxD56uJwRdOWHwPNAUBoFVB2A7atxJFD0O7WBnOHZ1%2FoPKqBdoXOret0IGXZmSMZRv9ownIC6xAY6pgFLd12i4Z2yGQNLIvtpI%2F00VxzAjuCRtNvv8xRJf67pwpbk%2BnPeaslcfURXAHWfOZ1N9Gpx5krBxeQtLYJr1KabclZV%2Bw2gGJHE8SrbIjE9cRuB%2BgZ7R%2BKbcqa3QQuTYiklpaZeN%2Fp49b08d5NAcbzm%2FEwdXOYhRUMu4KKlN9Gq%2BaenoKSeeBQ5Z%2Ba26hrip2V%2FUjo4d9FdR1YsuVri%2BAxu1C%2BSJCDP&X-Amz-Signature=c42c9507e7d394dcdab8a8d4ab0827333e823b8c8a2b6342a6eb1d5792359b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
