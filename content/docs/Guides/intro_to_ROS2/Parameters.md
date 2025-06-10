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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGH74OW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPBLcF4R7r7JmJbDADDRks4VMQicxna5jGyKLzU08cNAiEA5Vz5P5x4%2B7k63StG0hmly%2BFsyaDH77WaBkG%2BH7IzlZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClGZEfKMFk5mL973ircAxQDNIdrS7Xr7F40dUcBQQi38CfLGO8bLiD0ouefLa0ukhrBph7aqnwgfRgDFgGnjSvepePUt%2BOVDiFjrltM6t3EsfpmoYMu4wXv1DMhWJaiIinTeyaHaG7lkdnSpaaI2Nc8yiPSL7FZRC6IDkTeq%2FLVhpGkkYq0c2ork1%2FOpeL9JFEZydeAyVXauZlX5jWYMSTlSXa0Vc68VdHsEOCb5FilXxhEqM4jwqy6P1MgeXzvN4qOmtcm3ldmWnb5NxM%2FLX3pousbukryliIRNdTiBheSYqUS2mxhw3SLLxwwWYFquns7L6BgXO9KmjmkzmlmO%2BJgNJ5z4o63LTNRn0MnPzB5hbPkfWfzl1NRGP125rcwNF1PzFjIxzZCw9kU4ka8nxLqyyKzGVtJchITD2y2BL%2FFAgb9B8AvDtPe2OHDYjUaYnE6uxtpCayhJEV%2BzpK4DZKGcxaUMyrkUZ6ToRSmlUrPwS4xxSBQVzuiipko7vrNCdJtfOHmAQBnxf9wx9h%2FLrEOJKPyGilS0K9pe4lU6UCjE9iA%2BzQT6%2B3ZZwxHl7pd2awENye%2Bi2322Nc2Yqv4bZQQ82xbyoauMIQ81JO%2F4qKZHUuwBSC3ICscxh%2FZxylcqSdIVQ8fH6aSHdMcMKDfn8IGOqUBBDOjwKx9pTQTzrapyJI4b9%2BBubNBCXZnetYbLczRmHzW9xv0NGRhk5tcJzNtRWkHTrRbs%2F2IrYLVMt2fJUoGjjOzVzoJz5hhaANvbu5xchTSjZXLGEDGIR480V21knkRVopm99AsCeZCP4KwrYQ8pm5sUaKFE3%2BQ6nc%2FIBtM8ATE51Bbg0dZTiqzUvj9cv1iehgkf3GS5CYtqhYWPwRqX1ObqWo3&X-Amz-Signature=2a090f16a5d5521cdc3240727e562ab4048622873e15ae8bdf6e5fd6b98381e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
