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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCVEDSGO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohC1H2WusztlFKelWUMI91MV7wbmcx7WRSRvsGIVrGAiBJajPPzDQttJDXSC1OrhmcuxKu3Tw6ysNX%2B6jEx%2BLxbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM0mZDEi6LAPMLPh1MKtwDJ%2F6qW1J03yCqNo8KWAVOodcYZg5wLFI%2FnSKauVaGlX2QGZTu%2BOP6KmwSW5aYTkas95b9pTvElNfw1M6i0CG6Y1buLwRdWdiNjvvwW9j1X2MiyCki1FiBnGQ0iYH7fW1z%2ByjQJ6MxOeo63lQcJEgs9XUQwsVzgsLsbznjgTB%2FID%2BzTyWBd9d7GoWnwm%2BNBbqk%2FRtNiQDr6JKLNfyS4Tht6snpgHdBSBNHQPFicQLZsBLjqAG5fu7qh3mCsxkGy6RlajwPw2io5kDVl4%2FzTC3p6%2BCYslfiqeCqxtRxhYDtif8%2BbNpmkQl4dGlp5Qbz%2BdCbgl661GQPNoX4gJpzFCcuTR%2FOt2UUsWbzPe0TTGvoWCYGntWbtv82c718WGJFYUf0xqKaNQ0EJ9EtUxioIgMlh9v%2BWBtmZJoKGVjMpBqISJAKE8cJqQY8chPv1LYxN3LL6LCL0G0OMizINVGYxfXPW2CvGi1FsXd466HN2KEimyZPUhcotHQEH0vCe%2Biwe6UKmlvIimsIs0%2BivmMDf%2FTYS44YFWaP5ZVKI2a2vQpb849ttUh5V5LU5lJRnlcbKwnTD3qaKO4XraNO%2FqOAGYYh5vtSa0Tj3i0yuLStjoSnneQA0t99rEt8yTcnL2AwoeC4vQY6pgHopYwfjpyGD2Bc%2FY6RfFuboPGQe1oxnCYS%2FNtI1aegNzUZ8GxXeNDbw5ZY4qlxyuUGYchs6t54ciIaC4DW09u6Kxh7pNse0J3m5fvk9jh8d%2FEwLbI9xIXO5T2uIvW9VsftKNBjKyPZOE4LUt2cVpuzbQUQcXKAtf3kGFErjEUlcrRGVLN3Yb9Oi76mAi421V448%2BIa06TltUwwlIn9lVYloCs15ByG&X-Amz-Signature=fc018f403e3bf48809ecc7dd1181c44f9b6874fa561a0b003c86a1f4d59ac400&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
