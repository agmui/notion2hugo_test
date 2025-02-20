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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORBJZSF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEddSUYvKWsQ0JCnA1uIFHdBg%2FOoYDsf5N%2FhI9gX7gqdAiEAr7LAVqBYNJQv%2FKNG8aMmX%2F7OSpV4Css87ds6X9sADMkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2Y99v525JPzIt3FCrcA2KBVF5yGkbB%2FJbOQ%2F%2BvxuP8SjL9JFc%2FLarSbNQ%2B4XmpXpRGrLQVhFIGnlEnCYERCVdzXhujFH2nUZVWmKb%2FevwnMYwOLSPaex6CuQ%2BCsp95%2FaT0tveWNIjAchGwtYQTwbBpIIgkcUdRi6pwa1jFqyOuTt%2F72%2BxaaumMWGMxQZc5xADnoP6%2FRj1LKWmtJSSd3%2FTD65IuNsn5G93mEHAWIdBxKXhpykAjl%2B8837mp1jgMs9NzvOzl%2BBgP59JrRr7JL0I2atTZzLCBsmCI6Gb9VVhw671rCeQjqWn2eDhqIxjLVxImjiAHhdsmDaejHbcG6dh12zfgP7TS3qbi9HbZF6iDVF9trltkTIuG2UR%2BjoDs870LbHWXTOB8PZUa6iQqrPo5YR2Ph3Ym%2BOF2u0ZGM7JZa5gSUcg8J%2BMXpYJ%2FAj2vrg978oilZpany3zG1EK7o7CSgeVI2NiQ122nR9iHGTzfZxxPIlmyqckBbXVQVeJEaqjvxqxz0tXAk3JX6tgbZWmhWL7psd8z6x6sffMzLhDe7tVvk4AWJ%2Bo1ozAZ5D8gR5ZUnv6TOPRTeLpcLx4O1KjwaW6v1vuuRZDgKzSPwy0jKsOd67Vw2T4mY1LaRDuvAr9ezwHNXldJBdTwMJXn2b0GOqUBFLUUkzzaj%2FivzUXDD%2BHHkdTqc9ndGw9kyqCAQJzRUAyRYrRCgZAMY6umi%2B%2BOJDFw70OLTmssPuSiNFMCWhQ26BZJfGUc2OB%2B0ZGyF2epJDpuSeKtyvOHBOOxHmkWphkrWHO7QjUZW2Qlh3FqID3s0EulXzC2zpXDIvuwbWU%2Fdh1zyGnydM6XyZGcENCvQVTajMg%2B9b0Bafwm0DekFJ%2BIcUeIyOKa&X-Amz-Signature=3e118e2d596cfbc55ade78d7e85e5e38474e4e25bb39678daed078ca4275502c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
