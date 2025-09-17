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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4G6CYG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD0ObtLjtJ4FawkCesxOi7gPFt2%2BbQjTyy%2FUEhukWlMNgIgQFAPUERZQmTFVY2%2BcaPuaFIJ7DGaGom7PsDjifaQn6oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr80z9dfaIlhzjKaCrcA0uQYGMBIL4eBeUTD92uQFYGDFgb4iVko7Qy1oSSgf8u49i8j4RWHkRPVQcr6nZuDn4E5lBku17jfdkErlh448GoOOMqsRRYmW7JAhYtm81BriTGPY0uBK6TAPJLaZxDNs73hx0gROY%2F9RdyzB0%2B0GeJzeURfAMWC5eT2Js3ajGDuy%2FB5XjFaFgwgUMZI14u7%2Br6rdV6RD0r3uachohnq%2B4KBCUBDHjxRKKw0VPSlo93AVp7Btst6OT1DpfBzgiWnzuCIfPqNViPlsbQaG4yDhvhawbtcwS3ZuPi3lbAiTd%2BqS7KX5oPFHYFHR4hCyBu13evIhGXakjl5sPP06mz4iaLwfk9cjCdeoTJPpzpj%2FvKSodpn2Vh79mZpGfz5ZxXI%2FHm2legBZbKRIiu8wbcROws7zPRES2%2Fl%2FDj6ZQ4UWb01CruCReCTGMK9%2Bq3whUJaQ0DSCJsoHn6fO5T9si56ABGVAA%2FC01y6H2WKmUCN2C264jy%2BHN%2BlS05F%2FvyJnEw14%2BtIG23I40C7gUOrB%2FFMK9jfOqj0Vl3EhFGB1cBm5xABG6qZF9Re1WoPpqxWFJr1KNbyiNnk0W9A515Apt9e%2FVarVqCnvvLX8yVlm8%2FWDiEdDhW1NZ9F5VV9sGtMIvwp8YGOqUBNFkjbt7dgd4jAYYPsdOkeakh5Xt86lG5LTOA2a8TlInbM7SdYrBjuVvv49D3SKx%2Blj2B3UkRODmVXVdlsgEPoLcGTM2uR2gILeBvyYBR%2FEfyhq226KPtzp8r%2FNk1qQHAHRYQSdkszDcRVfsvIkiv87KBW7ZvyZ2ZSKkp2I89Ftl88ZP8XffsjCqjIPFBpDfrgyrrUUpblyM%2FtfM51EfjmX67HGzn&X-Amz-Signature=42c8c06ffa20679ce1fccbc082aa7e94795160e252350037116aed66c18a575a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
