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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AOQ4QB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDdUnx3tI8cD6W0K1%2BqIXiIiBSCc4gYdyPnvlzJmMkkCAiABWtcGqmDDxMI9pnf%2FNtSA3hh2PT0IGCtJc7HQ9824zir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2FBoqD32BqjYgIjLQKtwD6RPMd0%2B55RHivpXMDWej%2BNuElKHsSLWF9FTn1522A2yjaD5yPiUVMzqyPlFbKDXbVt9OEfwHtrFYUXuv9%2BCY3P0JUKWIpQRlKfWhQvNzEYLA7Yo8iVnZJi9U8UpsFCofQJAzcSFVbp4Iy10EU1kTocXX2%2FDqXAJy24HqkbFYhUfxHo%2FEKOL9A67w4fxWZyTv07ABz03cSka%2FoC8ssJ%2B0mCAlDeYY3DNK3aYZ97iC34QA5AKNBjRvPBb1GygT%2BD15H0ZNOXuO%2BjccKCIFbb6rJiiwuOVDTj9LRnUseRhL8PNXQ4v12iottoKkiaNZAYR%2FhzG7Aljw0X1MFeHQ8QbjqA4PLfQkSj%2FuJgz38HZSiLGolAjyHnlBRP%2FISD2wrw1bE1QjOE2C6cD2rKlBtyI6pShQyCaXCenM%2FHZzjBJaKMKP48q%2BhhBS3w08uyYKqlAa7gQDAc68Fhl4pjNdBWH%2BedUJaaPiFvuYIRZMcyz8mu1nJfg3jDn%2BZnHLK9%2FlKZR67ux1K6PD8MXQeijwKZevEhRYydqRKZr8EUg8Cbax5%2BhZqzQj71v4IspHyTTXeFcsblIlMzgZPo7VJHN5ODrBSsdY4mXeJqxijpqE3NYuvn%2FJkYk3NjsD5FlOaEUwyqmBwgY6pgFduwz0KNt99lOJAE6xu%2BLQlS6a339nHoMr0vU8r%2BUJAZtHpxX4jKGM44OTIoIvvXlNNDRpU416Ae5AiLEIWYyFg513Tf9d8LZQNyuqO%2FWwhOLQoOjuxU2AY255T2IBpvPf5XZ9xhYK38TB16pzYTp39rptAmuWi5X%2Bl6WTvbWqOBq7uadghS6IoHEC3A%2Bc4QIlkhxUdmqXI63qEOxTcDgc9XY10lf6&X-Amz-Signature=2643d650c777e481a87156557009243ce35f244c4007740e52c98c2303985ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
