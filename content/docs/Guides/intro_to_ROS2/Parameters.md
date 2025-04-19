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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ON5GTCZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2Jb1vb%2B7hP1boDGRNpHe3reb3LYr2u6lvQIEXHd6ISAiANithZUy9k6VSYJ170Fj5pdBpWdr3tthm6bkTislj3YSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRM1JEQrXRNbx2seKtwDyeQWFzZb9pUEWw9wb89hPfL6dxzwepfDG%2FKY5etKCzSj3iKyIbCoGMvcS1DYfrrs2m4f%2BMaabzwHh7oJ%2FiFtvXXyAijsw2F7LCNxu8uTGceoU19D65atSfwEmaDQoxypNOStvjNa5hti4SeScJNGnMIA0UmXFXG%2FhR3n77Up5%2Blq3mM0Q3eHTQxVqxbr1bBCvWy8MKY8YwP5I9LrHidJNT7XLu%2FifJZsqJv6r195MIMyBXCsaw8TTt4kYIIcVZHytP96tT87i6LLtGTrd1JhnHuHac2tQuzZM3sgRlc9Kj61aQ7HI0MIocziyHiioUSzVL7YPjNnQl2lJSFEQ8fvcKqWJKHmRBa2p%2Fe%2FLxIHI2Mnf8jzKAP3rmDv%2B7QUv4fXX1jKC5H03uTrmXyHU1fBNcuizkuYPSrMOHWtRmaF3uxJT8zxBkd%2FwbPGRNdlgB3KG34Ft5v%2FZtb%2FaFpbQzDAagedyUsrw8WXqOW17A7oYig8ODoY4h8Z0mgn%2F5H%2FjN01N3qxdA%2F1%2BqU6iammIbFJidQyVmBvwYgv1EKVjZNgpWP3L2gfdsWGclpQUCOF%2BTZeIxcazSjEcBjLS2ROFoh3Rp98kS0FQmX0I%2BJKHj16I6LnZobLrxwsNm%2BkJ44w3YWMwAY6pgFkd8%2FW0Oqwko6pcWJSEK1zk2IVX2cZBtnrJbm9X3HW0%2BVvsWbCUUk966xDzoL1XrK94HH5irzJlRpFdfvfgXUu4aByKIM6IEewcBza8Q2cKAFOwq%2BhmTsd52CQ6On5uPlKei1bmlv0VCmHQCGQF8EFlBSjQBue5cysSnBjsEcacw6i0GinN8kJG6H697KncIB5A4K1hg4tlpHf0z%2F7Is2AIITH00lM&X-Amz-Signature=eb0cb159ce3ecf0169aa59e5517da36f7cf8187370c4da491710b43a71aa12d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
