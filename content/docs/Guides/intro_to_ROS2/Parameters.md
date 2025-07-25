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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5EH44Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBOe4IaVrT636VqKfUhRBP6mCohQrzrNLYaIt0v2YusgAiEA20fW%2Fs39eEY0cEYnhHmHbdAfvmUbqyv5d%2FgzOtBMGXQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHPcxgfVxVbF1UrhhyrcAxx8Lmg7QN0yUaVlhqMHYjA%2BtGSa5jT5BHhrXN1gy6Ju1UBP6QvXV14y6vH1fogsnnZSxXXMKfKHy0TvJETOoH3enreWTY2KYx39s6mfsAmH4EpjurueR83AYk19SoUP37p2liCUyQnQCNkUBZXLnRIsvxf43wj3uvFgJYnktaY7rnI0LHh%2Flwp1El%2FeCrAU98mdUSWPk%2F2kZogbpxpw8p9oZ%2Fq7cyYdlfmPnWPKT4PNfC2ju%2B1H72wMbRIwQcgTjBnOqv0aYzhtbnK8GgXi9G%2BhS%2BhHxjaTawn7HL0LnptwGwBDVPOAWgQ1231gmukVtz901VUcbMcakAcX%2FabBTAj99Z3TyDl73AdnICGYfHL1pQb2hNygKNACK5bFyyURQSy1MPxYVRrPx4EL1ZGs8%2FlaWpHjAubTeWd8JRei8AQ8rHuWCVVp8euIOhA2debKu3SC2FpEYsrMMF4RIdA7E6ZtiG2gs%2FFZBGlsMBbTmwH3yeLNXCPaELVB3PUUoteOHCURajDsZETJ6wZF%2F3RhyYnqJ3i5QtY71f4j1C5Kv4bSqzR4HOAi0Whi%2BEFcK0fJyNWDmKQ5iuyEmm5USQbgjtQOwfs6sF%2BqRadPzD15GzucujpJISgo3UpzQzwVMKL4i8QGOqUBmn38cXA0H3H1JUsIAqdRaFO9YjF83NPzn1nLe5m4c6Zx83S5xuRxPGYPryX05Cyav6XH1sfg09AsJYREsbLEOqOf2VRpWbS7ymFKPF9Cr5bqjpe6NoUU7hlmNUjcGc8mSjwxKfN%2FK7dsbYBvXTVa2mfnzbHB9q2YCRq1DtyvzziOL%2FWAD44IYgjGAQ8RVaVgadA7Al27swupE9rb7MC6uJRrUObi&X-Amz-Signature=853639fce91513516600a77d3e0412fc7e657c267d4eefec7e6268a2954f0a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
