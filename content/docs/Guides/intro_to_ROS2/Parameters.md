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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY55OXV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIFAGOeRCEcDk5Xcsv6qjRH5C%2BVMdXsfrEK5ASP2p7So4AiAEJ7vkg7dfH4uCvP2K%2B9egaRNlt2gcMXQHako04LnBIyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuzJfQEJryKpgFcOJKtwDNS5X6hW2coxHJCZeLqBn14c3qAUtNL5ykG0szUfNaUfqtxuiUMSe%2B5wcIMo8jGDSQCGxj7dSWt3Z0Co%2BM8sNYSBDCMCSYFRCJyfPC0Ba6SmB9Ik%2BeMcL7LAYA9PLfrUcs%2BwvDtQczjm%2BOT3jgrBCoLN7gWT09UZJ9qRg8WdY5pvfP0vBeaim41zMzjA2X%2F4dOI1AKCcSJEHLnRiDyC51%2BUZdTf2guyrxJ8YieCtgw4IgzFQLQFMVRo1LiXa%2Bfqvk1zKULxYdVc%2FiYM%2F1Blnq0jQX8mLc1FegwihN09SR0Q7%2Bm1CY7Zgjh1Mwgj%2BapO2TwoWNaEYRVjoGlfi2%2BQ%2BoLPtDboFJksCrUeJAmNhEEAy%2Fxx83%2FEUoBKiNDdnzvM4dXL1XUFgrmDpU4LaG4GZloIFFAYG6oHKEcr5P3dWpe60GczlWCM7habz3HvPtZoeMGNr2Hr3AyaZ0S0a6FTRCa5kYOEYK8%2FvqSMBVA9Cp7YzFcSR49xjsC%2Fdxk9wrdMrTVqTufXXn%2Bxpd72z8n%2FBEkNuuc8Z5EjVK2z14qZ0ytcJCw2uODohMkuBdMMtORM%2FWr8On0cro1OpAOcfa0sNafYCR4%2BB4aq0xKqOFz8Z4G8zIGbNAZIMx%2FUosZugwxonzwgY6pgFGjGZj7KMZdTOgQGmOVWTlD1nvFWpq6%2BQUF5rnubkbtmVPEyk1YPgNcULwLE5u1Rc%2BjMES%2B%2FSwouSyAjrfirXnQFRZf9RfZ3brxOrm7fyed1ewCPCI5wXrp%2BPm%2BJPsv8DhW69OUFiQJNtEYKQdlcfOC1ZQfmLbMap%2Fy7%2BNMn5iW3JdQ254rWpabbogcvYKDpNL6%2FNzM82WqXgiSFM9V3%2FWnKkumZJA&X-Amz-Signature=7ae25cb8d17dd3135956f413085604f9c474417cf7f82ebad32745d732fd91de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
