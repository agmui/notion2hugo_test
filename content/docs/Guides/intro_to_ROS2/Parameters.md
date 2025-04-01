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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQMR2NY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGijMgmPoOdcMO2XCXrEW9BPEDaWVH8J9fvJXRMHT8SYAiBYyZmoRpc0sahH9wyZsnS4ZW7y8eNJ1iVXTOPdKJNS9iqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMie%2Fy7tgy4KWjwhesKtwDwPKMXkyY%2FSMBrXhx%2B0pF1dQzv4whb2PojptBG8AeD%2B4bbVQENyY65yZNZMyExHrULXu6PCHQXInpyj8dQ1WpnoHqHwfIm3F0L6UrkUWw%2BRaDM5hG5ZLSQ3YiPxCbPVvUxBxLuLkNRMy%2BtdX8s%2FjquwanLTHS90Q61%2BdowDmd%2F43IuD9XPzXNYIohiSSRvIVrbK1jBnaMAdgiOl05Zaa5k8zYOI%2Fvltt3tcdzhXrz7y2qkBYbwSxcSf97i1S%2B7nfs1QtACiJ%2BLtEIL7l6rvLPLtS7PVnyQvgD0npnh37Vne97p2AZU2tuhKk6lzv5Sxv7DcjmK8tL8GuTrqg96QFh8hm9nWvQXRAh8UbnSVZwUd61FymibPDzmwVIOjwB1IlP4fmGg895re6dusL5CwmSsgqS%2F%2B%2F%2FfD785J27Qj%2Fj73WDDToWq1jdsNN1jZgSsQgJfzjRXKGBvkXrXKcNvWYZXAPGAXlr6pAanT6Sl3V%2BrMO8K6GWVu09HwisCdnCDRUexRPPLNQ%2FpMeSrS%2F5%2FwcBsPT0XvcqjN8XoSm%2BAq8ueuExQOnLJUOAdHC5gWX4Nx7YkihBrwRoge1TqNDCuoghd4asnzwbqImaWWmOUSLKEfb6Tnm0MV2p1JSB%2FwEww7uwvwY6pgF5cEYE212tBT2k0kS7pdH8RVv6CsWidz%2BvhYhCXh6IeuelkVwXRO%2BF9zbPLGKkhbbKtUVxjLuVKYCWwwnthEIWDexbKw9RHtUdrx%2B42twp0L%2FBySWTvVkmZGg9kGNWDYro%2BLn%2BeHzKm2OUJJIBjiT4enVsreSiWCvokTnzw4phrOTyuMX6IvKgpJylv8oQEG0EO3xmAaOx1YLihxOBAIcC475mJ9bK&X-Amz-Signature=6b3f382aa59980618d9467aa3c29d56529b66f1b5543b9d41cfea652ec881d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
