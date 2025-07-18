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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M264OGM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH5JVnGy8ZLjW1H150qzbWa2l6ErxRsFAaJ3YLFURHwGAiEAwsgOm1J%2BWdWWm4UbxvAYbqZAf5xyvjyHkUlAIxQ6YTUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2DO85y%2FS72VL6tpircAxGngV1CPt0n2vpT864Y5Rk7hycEftafsXg2zdt7QRPTYjLo4UZoHinXgyVG%2Bvwv7CG7yseybZynV5%2FzvGc8Aa97meRP4220gbZbV7c3lQm9grRqOdAc75EHnig6gJOIemYla6b%2B0nEHsFsOCm7yS10uXyIWbQhPy0KOL%2B5SUJW1sFWK7cOl3yvzPrFJFpgXl4tz1Ws0BK8ZaKPzKjpVHYgrhWVtbq%2F5NqwmYkwiSsKwqtwuyfsPiHyGLNgmeNezft%2FQ%2FFfQ1020vjFRDGpb4FhYHXmedHaMidzeINqMNhswB8Xt8uDQwgw8pC0HaM76RxB1POQFKK35COpNKhH0gy%2B3Nb72yjCvcFflzolEnh63Fq2SqHzBrg6YTS0ozWU%2FvpnoUV2ydKTvYaU5h1l8%2FrYERR0SmS7a3oJz6FfvU9a1SyYmqccNQVNXHdBqComKz%2B6VopA%2BGU3zDsGlDxirntET14EZwUCnPdby7q4mqu4EKZ6ruzYi3g0J07b8dnFoa4A5aK1K8Pdoo5%2Fgx9bJkGmhVGNlHISxucb4ePYoUIv2Wq5V5CUJA3qsrGjJVHc38PfyFQl%2FFDzRsNTp00vZ3OszaWVQter4TJMhUdCI0gHIvPfEV4IfLl8wZB9nMNDQ6MMGOqUBuhDfxke5rBRt%2BoBRkmp8zlGQgnp1Cusp6ge35RAr0kRRHxNX12BMBxdy5OiOialwa82wljsi7JBlAEpFaRWOPGLfir2c243iMDBbG2n2d%2Bn8w5e55t4ey7%2Ff0cuKT5le9UjaDWT4nRZlsmmsMi38dhxwYwiSk7EkFZn4SxIyvPpeoy9YZyKiwB5nocphKcMA9HObTRkFvcSl4UgXx31hV3Ny99mp&X-Amz-Signature=1bdba94ecd457d8791359f8f034d138f2c43765a955fc2e16a86a87eb2727ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
