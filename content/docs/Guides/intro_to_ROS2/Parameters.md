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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FHBEOW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXAQdOp%2ByumoYBeBpyYZHRk3u6JtKBr2HSzVrnp1qUpAiEAoG38fWf1BIsCHzym%2BYhUfKM1NKLeqrfCHYYGBW9ry8QqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6S9DeO65Kpag6jeCrcA0znmmRnifFwjh%2F9WdmSYoIxHZtZ2GMqC9S1WpiFWDYO4n5%2FEQcq8LgGnjJ%2FoDgHkei9bxwZKJaNsdJtagksCHkO5i2hTEEo1KAOUWTSZk%2BNlgS%2FAs132v7TI6RyxAi0VpebYOigklfBl1qZc34D68YOJYKfh09fnt7OO4z7SC5gXVU5XFraqKLX5HKlSqGAsYkgF1f67w8wmtTUjnkk%2BPKYmm9H3x%2BmjeGLYS8S1puKwZMVycTwquTGlDCRuN6uA6IBv5ugRKHMX8KwXMXnS1OlZaChrCq%2FBOYD%2F119xrn9ya6PKUgDtCxq94hN9dIUQHdgqpRRnS%2FiVueljc8cZfCRm6M0zLHHMC5iiw1a6Vzm2KSmsp3acxOq1VNRYeXcOF7DexqZW7JxeGQltnMeCsrZiSINUVkGYYu%2BUaJwUWIFcLZQz0r8cs6voQTl%2BYT%2B33AS1Vm1vCigMSwTKK7MAe5YsW9pSHMUpDpvsZSg%2B4%2B6akwv59CXc%2F9HnzAE54%2BB4bdKSHKNEeIDBNFI1GYRwnL%2BHCteJi5Qn%2FCWbj2sgnrfEyeRrV16lFRZyyUzNvAhUE3efCOmImNcNtltqk0estqYkv3mDcewt9HCLV6hhpq4OHVExJpiosbpP1t7MMa0ssEGOqUBXL7rC3lYKy4DGKut1oLuQrqofJlVhElIwhLe6N%2FFFGNW6wbprxFk0fSjihhrP%2FHfbmA8n3oqkjx2Zb%2BR2zlTShxGA3HqR2ogSBqNlsnajH2r4f5P%2BcoEOFW1gNIScPDV0q5pjTMGbF9UY%2BLLK2uVPKhSvUAmN9pWR9ozuB%2F2RON0XpZRp21ClleuLUVwdmbk39fHyhwL3JCnrbLgRH4sna0XYhnQ&X-Amz-Signature=23046620ae9520e9b9dd17fda3490509e6e2df1e3aff42696feba3626892a7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
