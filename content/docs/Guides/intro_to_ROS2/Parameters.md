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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXJS73I%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwXVcTg%2FDEm%2BWOYafL1uyJa8jB9bXHkm3ziRgSKLl8UCIQCiktymhVcYbv%2FNJ7OXiB%2BCwQI1v1yiIhRngT5YlzbKASqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUVTlhLu8iI%2BSZTS0KtwDZ9wbNSSeUutE4NO49%2FqsLMwswwRhq5llN%2BKtWSyibRcMm0fKD77peoOfES%2FeVOLv2peK6VWjJIzX0FMvbO%2FquuccORtPFfKIL0fkRBxOD2G7fvR55EIHGedxi3kUR3tOF8rEiZMA6yvznGvEOUciiFPbQA73m4bZI6AQz1MQP1ULMYsGrkYiZLr7YB0%2FyZcVYDkgSVwTDoDxjLpa53tTez2NaAELyk%2FFwU%2Bvaavzj0xUbCcMFbOfEdmVxPnGYXbDsHs8e6wNR02%2BQcKAyJxF4gWCoBXPzyZujOZrfkvJv55glzUqCO6mOW8QA2I37wRQ1FbIBMEKDEcsL7qogJE4lfgGZVuqXLBgl%2BC3ZK6gkw2FDGWXdkE33BSFx1J0rVWQfqqh2oCJhokk6n7ZN%2FUoMXEn11WEy9c1IoJij%2BUA5dVq3KB%2FCTi5yWXhQw5H4at42o1%2FyespuLsJ57wmx7hU%2BpDKAledYdSbXANdEBEbSz%2BguYy7Nh8UJNwmIkWMCtED3SmsnLynTbm9E0ZueNHCl5Mfde4bSm31XvIFUXV25QUUuxwQXmeglCoBZuMmlBSMKuGY67H%2BhK7i0qeEvxHDl4rZ0fm1qcEPIfAwDijW8I0MxghyAbgsM9O8qX4wtvHowQY6pgGGXlp17slzqJwwrJ2Upz1gXxq8nsqCQxeI8fh2zdu7GPjZ5lrJId6EEAEyaeRc%2BTzwd35fuJkS%2BIQA07DAiWoQKVggoi6xSRdeyOD%2FmIuA482g%2BWvRfgHHKGSXhc93faquJ9sbs2J0SwXBMrvt76yM%2BRpTz7RvDijz0uvOP2g6A2w5tvpvU8TZgW1%2BFUoSKT%2FuuRJxPAuSiuJ4S%2FmGX5FlkQT33wyA&X-Amz-Signature=654278290957906bda5b722cda4dcda1e380ec2a7dcbd9c252d1b91041b06663&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
